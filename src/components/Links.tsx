export default function Links() {
  return (
    <div className="flex flex-col gap-4 mt-4 mb-4">
      <h2 className="text-2xl font-bold">My Links</h2>

      {/* TODO: Replace the basic links with icons (Resume GitHub Linkedin Itch.io icons). */}
      <section className="mb-4">
        <div className="grid grid-cols-4 md:grid-cols-4 gap-4 mt-4">
          <a href="/portfolio_cv.pdf" target="_blank" rel="noopener noreferrer">
            <div className="card">
              <h3 className="text-secondary">Resume</h3>
            </div>
          </a>
          <a
            href="https://github.com/vraus"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card">
              <h3 className="text-secondary">GitHub</h3>
            </div>
          </a>
          <a
            href="https://vraus.itch.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card">
              <h3 className="text-secondary">Itch.io</h3>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/hadrien-belleville-b25463176/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card">
              <h3 className="text-secondary">Linkedin</h3>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
