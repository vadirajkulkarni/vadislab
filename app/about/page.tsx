import FadeIn from '../../components/FadeIn'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export const metadata = {
  title: 'About — Vadiraj Kulkarni',
  description: 'Platform Engineer focused on GCP, Kubernetes, and developer experience.',
}

const TIMELINE = [
  {
    year: 'Now',
    role: 'Platform Engineer',
    detail: 'Building internal developer platforms on GCP — Kubernetes, GitOps, and infrastructure automation.',
  },
  {
    year: '2022',
    role: 'Infrastructure Engineer',
    detail: 'Moved into cloud-native infrastructure, adopting Kubernetes and IaC at scale.',
  },
  {
    year: '2020',
    role: 'DevOps Engineer',
    detail: 'Started bridging the gap between development and operations — CI/CD pipelines, monitoring, and deployments.',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen px-8 py-12 max-w-2xl">

      {/* ── Header ── */}
      <FadeIn>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 mb-1">About</h1>
        <p className="text-sm text-gray-400 mb-10">The longer version.</p>
      </FadeIn>

      {/* ── Bio card ── */}
      <FadeIn delay={80}>
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-5">
          <p className="text-gray-700 leading-relaxed mb-4">
            I&apos;m Vadiraj — a Platform Engineer based in India. I specialise in designing and
            operating internal developer platforms that make it easy for product teams to build,
            deploy, and run services reliably on GCP.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            My day-to-day revolves around Kubernetes, Terraform, ArgoCD, and the entire cloud-native
            ecosystem. I care deeply about reducing toil, creating self-service workflows, and making
            the &quot;right path&quot; the easy path for developers.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Outside of work I write about platform engineering patterns, lessons from running
            production infrastructure, and anything else I find worth sharing.
          </p>
        </div>
      </FadeIn>

      {/* ── Timeline ── */}
      <FadeIn delay={140}>
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
            Experience
          </p>
          <ol className="relative border-l border-gray-100 space-y-6 ml-2">
            {TIMELINE.map(({ year, role, detail }) => (
              <li key={year} className="pl-5">
                <span className="absolute -left-1.5 mt-1 w-3 h-3 rounded-full bg-gray-200 border-2 border-white" />
                <p className="text-xs text-gray-400 mb-0.5">{year}</p>
                <p className="text-sm font-semibold text-gray-900 mb-0.5">{role}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </FadeIn>

      {/* ── Links ── */}
      <FadeIn delay={200}>
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
            Find me online
          </p>
          <div className="space-y-1">
            {[
              { label: 'LinkedIn', href: 'https://linkedin.com/in/vadiraj-kulkarni' },
              { label: 'GitHub',   href: 'https://github.com/vadirajkulkarni' },
              { label: 'Blog',     href: '/blog', internal: true },
            ].map(({ label, href, internal }) => (
              <Link
                key={label}
                href={href}
                target={internal ? undefined : '_blank'}
                rel={internal ? undefined : 'noopener noreferrer'}
                className="flex items-center justify-between py-2 text-sm text-gray-700 hover:text-orange-600 transition-colors duration-150 group border-b border-gray-50 last:border-0"
              >
                {label}
                <ArrowUpRight size={14} className="text-gray-300 group-hover:text-orange-400 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </FadeIn>
    </main>
  )
}
