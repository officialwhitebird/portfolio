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
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <main id="main-content">
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="officialwhitebird home">
          <span className="brand-mark" aria-hidden="true">W</span>
          <span>officialwhitebird</span>
        </a>
        <div className="nav-cluster">
          <a className="nav-anchor" href="#work">Work</a>
          <a className="nav-anchor" href="#about">About</a>
          <a
            className="nav-link"
            href="https://github.com/officialwhitebird"
            target="_blank"
            rel="noreferrer"
          >
            <span className="nav-github-label">GitHub</span> <ArrowIcon /><span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
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
              <GitHubIcon /> GitHub profile<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>

        <div className="hero-system" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="system-core"><span>HUMAN</span><strong>IN THE LOOP</strong></div>
          <span className="signal signal-one">observable</span>
          <span className="signal signal-two">reversible</span>
          <span className="signal signal-three">useful</span>
        </div>
      </section>

      <section className="manifesto" id="approach" aria-label="Working philosophy">
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
              aria-label="View repo-ready on GitHub (opens in a new tab)"
            >
              <GitHubIcon /><span>View repository</span><ArrowIcon />
            </a>
          </div>
          <div className="case-study-grid" aria-label="repo-ready case study">
            <div><span>Problem</span><p>公開直前の確認が人の記憶と目視に依存し、見落としを再現できませんでした。</p></div>
            <div><span>Design</span><p>値を表示しないsecret検査と、対象を書き換えないread-only設計を採用しました。</p></div>
            <div><span>Evidence</span><p>CI、JSON出力、strict mode、明示的なexit codeを備え、v0.1.0として公開しています。</p></div>
          </div>
          <div className="evidence-links" aria-label="repo-ready evidence links">
            <a href="https://github.com/officialwhitebird/repo-ready/actions" target="_blank" rel="noreferrer">CI runs <ArrowIcon /><span className="sr-only"> (opens in a new tab)</span></a>
            <a href="https://github.com/officialwhitebird/repo-ready/releases/tag/v0.1.0" target="_blank" rel="noreferrer">v0.1.0 release <ArrowIcon /><span className="sr-only"> (opens in a new tab)</span></a>
            <a href="https://github.com/officialwhitebird/repo-ready/blob/main/LICENSE" target="_blank" rel="noreferrer">MIT license <ArrowIcon /><span className="sr-only"> (opens in a new tab)</span></a>
          </div>
          <figure className="terminal">
            <figcaption className="terminal-top"><i /><i /><i /><span>preflight</span></figcaption>
            <pre><code><span>$</span> python -m repo_ready check .{`\n`}<b>✓</b> repository is ready for review</code></pre>
          </figure>
        </article>

        <article className="project-card project-card-secondary">
          <div className="project-meta">
            <span className="status"><i /> Live · GitHub Pages</span>
            <span>Next.js · TypeScript</span>
          </div>
          <div className="project-body compact">
            <div>
              <p className="project-kicker">Public delivery system</p>
              <h3>portfolio</h3>
              <p className="project-description">
                このサイト自体も公開プロジェクトです。変更はPull RequestとCIを通し、静的ビルドをGitHub Pagesへ継続的に配信します。
                セキュリティ報告経路と保護されたmainを含め、見せることと安全に運用することを一つの仕組みにしています。
              </p>
              <div className="tags" aria-label="Portfolio project features">
                <span>Protected main</span><span>Continuous verification</span><span>Static export</span>
              </div>
            </div>
            <a
              className="project-link project-link-dark"
              href="https://github.com/officialwhitebird/portfolio"
              target="_blank"
              rel="noreferrer"
              aria-label="View the portfolio source on GitHub (opens in a new tab)"
            >
              <GitHubIcon /><span>View source</span><ArrowIcon />
            </a>
          </div>
          <div className="case-study-grid" aria-label="Portfolio delivery evidence">
            <div><span>Quality gate</span><p>Node.js 22でlintとproduction buildをPull Requestごとに検証します。</p></div>
            <div><span>Delivery</span><p>公式GitHub Actionsを使い、mainからPagesへ静的成果物をデプロイします。</p></div>
            <div><span>Trust</span><p>Private Vulnerability Reportingとbranch protectionを有効化しています。</p></div>
          </div>
        </article>
      </section>

      <section className="about" id="about">
        <div>
          <p className="section-label">03 / About</p>
          <h2>Systems people can<br />understand and trust.</h2>
        </div>
        <div className="about-copy">
          <p>
            日本で活動するindependent builderです。複雑な作業を、観察でき、戻すことができ、日常で使えるソフトウェアへ変える方法を探っています。
          </p>
          <ul>
            <li><span>01</span> Read first. Make small changes.</li>
            <li><span>02</span> Keep decisions and evidence visible.</li>
            <li><span>03</span> Leave judgment with the human.</li>
          </ul>
        </div>
      </section>

      <section className="domains">
        <div className="section-heading">
          <div>
            <p className="section-label">04 / Systems in progress</p>
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
        <p className="section-label">05 / Keep watching</p>
        <h2>More useful things<br />are on the way.</h2>
        <a
          className="button light"
          href="https://github.com/officialwhitebird?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          Follow the work on GitHub <ArrowIcon /><span className="sr-only"> (opens in a new tab)</span>
        </a>
      </section>

      <footer>
        <a className="brand" href="#top"><span className="brand-mark" aria-hidden="true">W</span><span>officialwhitebird</span></a>
        <p>Designed and built with care in Japan.</p>
        <div className="footer-meta">
          <a href="https://github.com/officialwhitebird/portfolio/security/policy" target="_blank" rel="noreferrer">Security<span className="sr-only"> (opens in a new tab)</span></a>
          <p>© {new Date().getFullYear()}</p>
        </div>
      </footer>
      </main>
    </>
  )
}
