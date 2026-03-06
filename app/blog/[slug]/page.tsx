import { getPostSlugs, getPost } from '../../../lib/posts'

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { frontmatter } = await getPost(slug)
  return { title: `${frontmatter.title} // vadislab` }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { frontmatter, html } = await getPost(slug)

  return (
    <article className="max-w-3xl mx-auto px-6 py-12">
      <p className="dim text-sm mb-2">vadiraj@vadislab:~/blog$ cat {slug}.mdx</p>
      <h1 className="text-3xl font-bold mb-2 glow">{frontmatter.title}</h1>
      <time className="dim text-sm block mb-10">{frontmatter.date}</time>
      <div className="mdx-content" dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  )
}
