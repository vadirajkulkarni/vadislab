import { compileMDX } from 'next-mdx-remote/rsc'
import { getPostSlugs, getRawPost } from '../../lib/posts'
import PostCard from '../../components/PostCard'

export const metadata = { title: 'blog // vadislab' }

interface PostFrontmatter {
  title: string
  date: string
  description?: string
}

export default async function BlogPage() {
  const slugs = getPostSlugs()

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const source = getRawPost(slug)
      const { frontmatter } = await compileMDX<PostFrontmatter>({
        source,
        options: { parseFrontmatter: true },
      })
      return { slug, ...frontmatter, date: String(frontmatter.date) }
    })
  )

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <p className="dim text-sm mb-2">vadiraj@vadislab:~/blog$ ls -la</p>
      <h1 className="text-3xl font-bold mb-8 glow">posts/</h1>

      {posts.length === 0 ? (
        <p className="dim">{'// no posts found'}</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.slug}>
              <PostCard
                slug={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
              />
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
