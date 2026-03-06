import { compileMDX } from 'next-mdx-remote/rsc'
import { getPostSlugs, getRawPost } from '../../../lib/posts'

interface PostFrontmatter {
  title: string
  date: string
  description?: string
}

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const source = getRawPost(slug)
  const { frontmatter } = await compileMDX<PostFrontmatter>({
    source,
    options: { parseFrontmatter: true },
  })
  return { title: `${frontmatter.title} // vadislab` }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const source = getRawPost(slug)
  const { content, frontmatter } = await compileMDX<PostFrontmatter>({
    source,
    options: { parseFrontmatter: true },
  })

  return (
    <article className="max-w-3xl mx-auto px-6 py-12">
      <p className="dim text-sm mb-2">vadiraj@vadislab:~/blog$ cat {slug}.mdx</p>
      <h1 className="text-3xl font-bold mb-2 glow">{frontmatter.title}</h1>
      <time className="dim text-sm block mb-10">{String(frontmatter.date)}</time>
      <div className="mdx-content">
        {content}
      </div>
    </article>
  )
}
