import { getPostSlugs, getPost } from '../../../lib/posts'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { frontmatter } = await getPost(slug)
  return { title: `${frontmatter.title} — Vadiraj Kulkarni` }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { frontmatter, html } = await getPost(slug)

  return (
    <main className="min-h-screen px-8 py-12 max-w-2xl">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-orange-600 transition-colors duration-200 mb-10"
      >
        <ArrowLeft size={14} />
        All posts
      </Link>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
        <header className="mb-10 pb-8 border-b border-gray-100">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 leading-snug mb-2">
            {frontmatter.title}
          </h1>
          {frontmatter.description && (
            <p className="text-gray-500 text-sm mb-3">{frontmatter.description}</p>
          )}
          <time className="text-xs text-gray-400">{frontmatter.date}</time>
        </header>

        <div className="prose-article" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </main>
  )
}
