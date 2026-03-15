import FadeIn from '../../components/FadeIn'
import { ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    name: 'ConvertPDF',
    url: 'https://convertpdf4u.com',
    description:
      'A free, browser-based tool to split, merge, compress, rotate, and convert PDF files — no sign-up required.',
    tags: ['PDF', 'Free Tool', 'Web App'],
  },
]

export const metadata = {
  title: 'Projects — Vadiraj Kulkarni',
  description: 'Side projects and tools built by Vadiraj Kulkarni.',
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-8 py-12 max-w-2xl">
      <FadeIn delay={0}>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-1">Projects</h1>
        <p className="text-gray-400 text-sm mb-10">Things I&apos;ve built outside of work.</p>
      </FadeIn>

      <div className="space-y-4">
        {PROJECTS.map((project, i) => (
          <FadeIn key={project.name} delay={i * 80}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:border-orange-200 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <h2 className="text-base font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                  {project.name}
                </h2>
                <ExternalLink
                  size={14}
                  className="text-gray-300 group-hover:text-orange-400 transition-colors shrink-0 mt-0.5"
                />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs text-gray-500 bg-gray-50 border border-gray-200 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </FadeIn>
        ))}
      </div>

      <footer className="mt-10 flex items-center justify-between text-xs text-gray-400">
        <span>Vadiraj Kulkarni</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </main>
  )
}
