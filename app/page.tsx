import TypeWriter from '../components/TypeWriter'

export default function HomePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <section className="mb-12">
        <p className="dim text-sm mb-2">vadiraj@vadislab:~$ whoami</p>
        <h1 className="text-4xl font-bold mb-6 glow">
          <TypeWriter text="Vadiraj Kulkarni" />
        </h1>

        <p className="dim text-sm mb-2">vadiraj@vadislab:~$ cat role.txt</p>
        <p className="text-lg mb-10 leading-relaxed">
          Platform Engineer · GCP · Kubernetes · Infrastructure Automation
        </p>

        <p className="dim text-sm mb-3">vadiraj@vadislab:~$ cat links.txt</p>
        <div className="flex gap-8 text-base">
          <a
            href="https://linkedin.com/in/vadiraj-kulkarni"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-hover"
          >
            [linkedin]
          </a>
          <a
            href="https://github.com/vadirajkulkarni"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-hover"
          >
            [github]
          </a>
        </div>
      </section>
    </main>
  )
}
