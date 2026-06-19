const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 .7a11.3 11.3 0 0 0-3.6 22c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.9 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.2c0 .4.2.7.8.6A11.3 11.3 0 0 0 12 .7Z"
    />
  </svg>
)

const ArrowIcon = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="m6 14 8-8m-6 0h6v6" fill="none" stroke="currentColor" strokeWidth="1.7" />
  </svg>
)

const domains = [
  {
    number: '01',
    title: 'Automation systems',
    description:
      '反復作業を、観察可能で再現できるワークフローへ。人間が判断すべき場所は残します。',
  },
  {
    number: '02',
    title: 'Decision support',
    description:
      '複雑な情報を整理し、次の一手を見つけやすくするための道具とインターフェース。',
  },
  {
    number: '03',
    title: 'AI orchestration',
    description:
      'AIを単発の回答者ではなく、役割と境界を持つ協働システムとして設計します。',
  },
]

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="officialwhitebird home">
          <span className="brand-mark" aria-hidden="true">W</span>
          <span>officialwhitebird</span>
        </a>
        <a
          className="nav-link"
          href="https://github.com/officialwhitebird"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <ArrowIcon />
        </a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Independent builder · Japan</p>
          <h1>
            Useful systems,
            <br />
            built <em>with intent.</em>
          </h1>
          <p className="hero-lead">
            自動化、意思決定支援、AI協働。複雑さを隠すのではなく、
            <strong>扱える形にする</strong>ためのソフトウェアを作っています。
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">View selected work <ArrowIcon /></a>
            <a
              className="button secondary"
              href="https://github.com/officialwhitebird"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon /> GitHub profile
            </a>
          </div>
        </div>

        <div className="hero-system" aria-label="Design principles">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="system-core"><span>HUMAN</span><strong>IN THE LOOP</strong></div>
          <span className="signal signal-one">observable</span>
          <span className="signal signal-two">reversible</span>
          <span className="signal signal-three">useful</span>
        </div>
      </section>

      <section className="manifesto" aria-label="Working philosophy">
        <p className="section-label">01 / Approach</p>
        <p className="manifesto-text">
          目指すのは、派手なデモではなく
          <span>毎日きちんと使える仕組み。</span>
          安全性、透明性、そして人間の判断を中心に設計します。
        </p>
      </section>

      <section className="work" id="work">
        <div className="section-heading">
          <div>
            <p className="section-label">02 / Selected work</p>
            <h2>Built in public.</h2>
          </div>
          <p>小さく公開し、検証しながら育てていくプロジェクト。</p>
        </div>

        <article className="project-card">
          <div className="project-meta">
            <span className="status"><i /> Public · v0.1.0</span>
            <span>Python · CLI</span>
          </div>
          <div className="project-body">
            <div>
              <p className="project-kicker">Repository preflight checker</p>
              <h3>repo-ready</h3>
              <p className="project-description">
                GitHubへ公開する前に、機密情報・大容量ファイル・基本設定の不備を読み取り専用で検査するCLI。
                「公開して大丈夫か」という最後の不安を、再現可能なチェックへ変えます。
              </p>
              <div className="tags" aria-label="Project features">
                <span>Safety first</span><span>Zero runtime deps</span><span>JSON output</span>
              </div>
            </div>
            <a
              className="project-link"
              href="https://github.com/officialwhitebird/repo-ready"
              target="_blank"
              rel="noreferrer"
              aria-label="View repo-ready on GitHub"
            >
              <GitHubIcon /><span>View repository</span><ArrowIcon />
            </a>
          </div>
          <div className="terminal" aria-label="repo-ready command example">
            <div className="terminal-top"><i /><i /><i /><span>preflight</span></div>
            <code><span>$</span> python -m repo_ready .<br /><b>✓</b> repository is ready for review</code>
          </div>
        </article>
      </section>

      <section className="domains">
        <div className="section-heading">
          <div>
            <p className="section-label">03 / Systems in progress</p>
            <h2>Quietly building.</h2>
          </div>
          <p>非公開プロジェクトで磨いている、三つの実践領域。</p>
        </div>
        <div className="domain-grid">
          {domains.map(domain => (
            <article className="domain-card" key={domain.number}>
              <span>{domain.number}</span>
              <h3>{domain.title}</h3>
              <p>{domain.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="closing">
        <p className="section-label">04 / Keep watching</p>
        <h2>More useful things<br />are on the way.</h2>
        <a
          className="button light"
          href="https://github.com/officialwhitebird?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          Follow the work on GitHub <ArrowIcon />
        </a>
      </section>

      <footer>
        <a className="brand" href="#top"><span className="brand-mark">W</span><span>officialwhitebird</span></a>
        <p>Designed and built with care in Japan.</p>
        <p>© {new Date().getFullYear()}</p>
      </footer>
    </main>
  )
}
