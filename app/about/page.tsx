import FadeIn from '../../components/FadeIn'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export const metadata = {
  title: 'About — Vadiraj Kulkarni',
  description: 'Platform Engineer with 3+ years of experience automating and managing cloud infrastructure on GCP and Kubernetes.',
}

const EXPERIENCE = [
  {
    period: 'Jul 2022 – Present',
    role: 'Engineer',
    company: 'ANZ Banking Group',
    location: 'Melbourne, Australia',
    bullets: [
      'Built Golang-based platform components for an internal developer platform, enabling teams to self-serve Config Connector–backed GCP resources via Kubernetes.',
      'Implemented platform-level validation, defaults, and governance logic in Golang — reducing manual YAML and enforcing secure, compliant provisioning.',
      'Automated GCP infrastructure provisioning and management using Terraform and Config Connector.',
      'Implemented OPA (Open Policy Agent) policies for organisational compliance and security baselines across the platform.',
      'Built and configured Prometheus monitoring and alerting across Kubernetes and GCP workloads, improving incident detection and response times.',
      'Optimised Kubernetes custom controller performance, reducing reconciliation time from 1 hour to 10 minutes.',
      'Developed acceptance and integration tests in CI/CD pipelines using GitHub Actions and Cloud Build.',
      'Created Looker Studio dashboards to visualise system health, FinOps metrics, and cloud performance trends.',
    ],
    tech: 'Kubernetes · GCP · Terraform · OPA · Prometheus · Golang · Python · GitHub Actions · Cloud Build',
  },
  {
    period: 'Aug 2021 – Mar 2022',
    role: 'Full-Stack Developer',
    company: 'Autonio',
    location: 'Bristol, UK',
    bullets: [
      'Built and deployed smart contracts on the Cardano blockchain and developed an Ethereum–Cardano bridge.',
      'Designed Flask APIs and React front-ends, deployed on AWS via automated CI/CD pipelines.',
      'Improved system observability using AWS CloudWatch and custom metrics dashboards.',
    ],
    tech: 'Python · Haskell · Flask · React.js · AWS · Solidity · web3.js',
  },
  {
    period: 'Nov 2020 – Apr 2021',
    role: 'Software Engineer',
    company: 'CIPD, KLE Tech',
    location: 'Hubballi, India',
    bullets: [
      'Developed object detection and tracking systems using OpenCV and TensorFlow.',
      'Integrated Intel RealSense for depth capture and 3D point-cloud visualisation.',
    ],
    tech: 'Python · TensorFlow · OpenCV · Pandas · NumPy',
  },
]

const EDUCATION = [
  {
    degree: 'Master of Science, Computer Science',
    institution: 'University of Melbourne',
    period: '2018 – 2019',
  },
  {
    degree: 'Bachelor of Engineering, Information Science & Engineering',
    institution: 'BMS College of Engineering',
    period: '2013 – 2017',
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

      {/* ── Bio ── */}
      <FadeIn delay={60}>
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-5">
          <p className="text-gray-700 leading-relaxed mb-4">
            I&apos;m Vadiraj — a Platform Engineer with 3+ years of experience automating and
            managing cloud infrastructure on GCP and Kubernetes. Based in Melbourne, Australia,
            I currently work at ANZ Banking Group building internal developer platforms.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            My focus is on making the &quot;right path&quot; the easy path — writing platform
            components in Golang, enforcing policy-as-code with OPA, and building self-service
            workflows so product teams can provision infrastructure without filing tickets.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Outside of work I write about platform engineering patterns, Kubernetes internals,
            and lessons learned running production infrastructure at scale.
          </p>
        </div>
      </FadeIn>

      {/* ── Experience ── */}
      <FadeIn delay={120}>
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
            Experience
          </p>
          <div className="space-y-8">
            {EXPERIENCE.map(({ period, role, company, location, bullets, tech }) => (
              <div key={company} className="border-b border-gray-50 last:border-0 pb-8 last:pb-0">
                <div className="flex items-start justify-between gap-4 mb-1">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{role}</p>
                    <p className="text-sm text-gray-600">{company} · {location}</p>
                  </div>
                  <span className="text-xs text-gray-400 whitespace-nowrap shrink-0 mt-0.5">{period}</span>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-gray-500 leading-relaxed">
                      <span className="text-gray-300 mt-1 shrink-0">–</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-gray-400">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* ── Education ── */}
      <FadeIn delay={180}>
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
            Education
          </p>
          <div className="space-y-4">
            {EDUCATION.map(({ degree, institution, period }) => (
              <div key={institution} className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-gray-900">{degree}</p>
                  <p className="text-sm text-gray-500">{institution}</p>
                </div>
                <span className="text-xs text-gray-400 whitespace-nowrap shrink-0 mt-0.5">{period}</span>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* ── Links ── */}
      <FadeIn delay={240}>
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
