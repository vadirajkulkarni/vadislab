import { getAllPosts } from '../../lib/posts'
import PostCard from '../../components/PostCard'

export const metadata = { title: 'blog // vadislab' }

export default async function BlogPage() {
  const posts = await getAllPosts()

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
                title={post.frontmatter.title}
                description={post.frontmatter.description}
                date={post.frontmatter.date}
              />
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
