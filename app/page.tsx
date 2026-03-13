import FadeIn from '../components/FadeIn'
import PostCard from '../components/PostCard'
import { getAllPosts } from '../lib/posts'
import Link from 'next/link'
import { Linkedin, Github, ArrowRight } from 'lucide-react'

const SKILLS = [
  'GCP', 'Kubernetes', 'Terraform', 'Docker',
  'FluzCD', 'Prometheus', 'Grafana',
  'Python', 'Bash', 'CI/CD', 'GitOps',
  'Linux', 'Pub/Sub', 'Cloud Run', 'Networking',
]

export default async function HomePage() {
  const posts = await getAllPosts()
  const recentPosts = posts.slice(0, 3)

  return (
    <main className="min-h-screen px-8 py-12 max-w-2xl">

      {/* ── Hero ── */}
      <section className="mb-10">
        <FadeIn delay={0}>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 leading-tight mb-1">
            Hey, I&apos;m Vadiraj
          </h1>
          <p className="text-2xl font-semibold text-gray-400 mb-8">Platform Engineer</p>
        </FadeIn>

        {/* LinkedIn connect card */}
        <FadeIn delay={100}>
          <div className="bg-white rounded-xl border border-gray-200 px-4 py-3 flex items-center justify-between mb-8 shadow-sm">
            <div className="flex items-center gap-3">
              <Linkedin size={18} className="text-blue-600 shrink-0" />
              <span className="text-sm text-gray-700">Connect with me on LinkedIn</span>
            </div>
            <a
              href="https://linkedin.com/in/vadiraj-kulkarni"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white text-xs font-semibold px-4 py-1.5 rounded-full hover:bg-gray-700 transition-colors duration-200 shrink-0"
            >
              Connect
            </a>
          </div>
        </FadeIn>

        {/* Bio */}
        <FadeIn delay={180}>
          <p className="text-gray-700 leading-relaxed mb-3">
            I build reliable, scalable infrastructure on GCP. My work sits at the intersection of
            platform engineering, cloud-native tooling, and developer experience — creating internal
            platforms that let product teams ship without worrying about the underlying infra.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mb-3">
            vadislab is my personal site where I share notes on Kubernetes, GitOps, and the lessons
            learned running infrastructure at scale.
          </p>
          <p className="text-gray-700 leading-relaxed">
            You can talk to me about{' '}
            <strong>GCP, Kubernetes, platform design, or infrastructure war stories.</strong>
            <br />
            Say hi on{' '}
            <a
              href="https://linkedin.com/in/vadiraj-kulkarni"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-2 hover:text-orange-600 transition-colors"
            >
              LinkedIn
            </a>
            {' '}or{' '}
            <a
              href="https://github.com/vadirajkulkarni"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-2 hover:text-orange-600 transition-colors"
            >
              GitHub
            </a>
            .
          </p>
        </FadeIn>
      </section>

      {/* ── Stack ── */}
      <FadeIn>
        <section className="bg-white rounded-xl border border-gray-200 p-5 mb-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Stack</p>
          <div className="flex flex-wrap gap-1.5">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 text-xs text-gray-600 bg-gray-50 border border-gray-200 rounded-full hover:bg-orange-50 hover:border-orange-200 hover:text-orange-700 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* ── Recent Writing ── */}
      {recentPosts.length > 0 && (
        <FadeIn delay={60}>
          <section className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Recent Writing
              </p>
              <Link
                href="/blog"
                className="flex items-center gap-1 text-xs text-gray-400 hover:text-orange-600 transition-colors duration-200"
              >
                All posts <ArrowRight size={12} />
              </Link>
            </div>
            <div>
              {recentPosts.map((post, i) => (
                <PostCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.frontmatter.title}
                  description={post.frontmatter.description}
                  date={post.frontmatter.date}
                />
              ))}
            </div>
          </section>
        </FadeIn>
      )}

      {/* ── Footer ── */}
      <footer className="mt-10 flex items-center justify-between text-xs text-gray-400">
        <span>Vadiraj Kulkarni</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </main>
  )
}
