import { getAllPosts } from '../../lib/posts'
import PostCard from '../../components/PostCard'
import FadeIn from '../../components/FadeIn'

export const metadata = { title: 'Blog — Vadiraj Kulkarni' }

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <main className="min-h-screen px-8 py-12 max-w-2xl">
      <FadeIn>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 mb-1">Writing</h1>
        <p className="text-sm text-gray-400 mb-8">
          {posts.length} article{posts.length !== 1 ? 's' : ''} on platform engineering, Kubernetes, and GitOps.
        </p>
      </FadeIn>

      <FadeIn delay={80}>
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          {posts.length === 0 ? (
            <p className="text-sm text-gray-400 p-5">No posts yet — check back soon.</p>
          ) : (
            <div className="p-5">
              {posts.map((post) => (
                <PostCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.frontmatter.title}
                  description={post.frontmatter.description}
                  date={post.frontmatter.date}
                />
              ))}
            </div>
          )}
        </div>
      </FadeIn>
    </main>
  )
}
