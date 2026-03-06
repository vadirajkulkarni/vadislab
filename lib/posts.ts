import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'

const contentDir = path.join(process.cwd(), 'content')

export interface PostFrontmatter {
  title: string
  date: string
  description?: string
}

export interface Post {
  slug: string
  frontmatter: PostFrontmatter
  html: string
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(contentDir)) return []
  return fs.readdirSync(contentDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

export async function getPost(slug: string): Promise<Post> {
  const raw = fs.readFileSync(path.join(contentDir, `${slug}.mdx`), 'utf8')
  const { data, content } = matter(raw)
  const processed = await remark().use(remarkGfm).use(remarkHtml).process(content)
  return {
    slug,
    frontmatter: { ...data, date: String(data.date) } as PostFrontmatter,
    html: processed.toString(),
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = getPostSlugs()
  const posts = await Promise.all(slugs.map(getPost))
  return posts.sort((a, b) =>
    new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  )
}
