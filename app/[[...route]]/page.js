import { notFound } from 'next/navigation';
import { content, press, profiles, projectHref, query, sample, sections } from '../content.js';
import { PressVideo, PrintButton } from '../controls.js';

const siteUrl = 'https://brunodevoceanoazul.github.io/portfolio';
const languages = Object.keys(content);

function path(lang, section = 'home') {
  const segment = sections[lang][section];
  return `/${lang}/${segment ? segment + '/' : ''}`;
}

function href(lang, section, fragment = '') {
  return `${process.env.NEXT_PUBLIC_BASE_PATH}${path(lang, section)}${fragment}`;
}

function resolve(route = []) {
  const [lang = 'pt', segment = ''] = route;
  if (route.length > 2 || !Object.hasOwn(sections, lang)) notFound();
  const section = Object.keys(sections[lang]).find(key => sections[lang][key] === segment);
  if (!section) notFound();
  return { lang, section, copy: content[lang] };
}

export function generateStaticParams() {
  return [
    { route: [] },
    ...languages.flatMap(lang => Object.values(sections[lang]).map(segment => (
      { route: segment ? [lang, segment] : [lang] }
    ))),
  ];
}

export async function generateMetadata({ params }) {
  const { route } = await params;
  const { lang, section, copy } = resolve(route);
  const title = section === 'home' ? 'Bruno Bisogni · ' + copy.eyebrow : copy.nav[section] + ' · Bruno Bisogni';
  const descriptions = {
    home: copy.intro, projects: copy.projectsIntro, data: copy.dataIntro,
    freelance: copy.freelanceIntro, press: press[lang].intro, resume: copy.summary,
  };
  return {
    title,
    description: descriptions[section],
    alternates: {
      canonical: siteUrl + path(lang, section),
      languages: {
        'pt-BR': siteUrl + path('pt', section),
        en: siteUrl + path('en', section),
        'x-default': siteUrl + path('pt', section),
      },
    },
    openGraph: { title, description: descriptions[section], url: siteUrl + path(lang, section), type: 'website' },
  };
}

function Header({ lang, section, copy }) {
  return (
    <header className="wrap top screen-only">
      <a className="brand" href={href(lang, 'home')}><span className="mark" aria-hidden="true">B.</span> Bruno Bisogni</a>
      <nav className="main-nav" aria-label={copy.primary}>
        {Object.entries(copy.nav).filter(([key]) => key !== 'home').map(([key, label]) => (
          <a href={href(lang, key)} key={key} aria-current={key === section ? 'page' : undefined}>{label}</a>
        ))}
      </nav>
      <nav className="language" aria-label={copy.language}>
        <a href={href('pt', section)} hrefLang="pt-BR" lang="pt-BR" aria-label="Português" aria-current={lang === 'pt' ? 'true' : undefined}>PT</a>
        <a href={href('en', section)} hrefLang="en" lang="en" aria-label="English" aria-current={lang === 'en' ? 'true' : undefined}>EN</a>
      </nav>
    </header>
  );
}

function Diagram({ lang }) {
  const labels = lang === 'en' ? ['PRODUCT', 'ENGINEERING', 'IMPACT'] : ['PRODUTO', 'ENGENHARIA', 'IMPACTO'];
  return (
    <figure className="hero-figure" aria-hidden="true">
      <div className="figure-label"><span>BRUNO BISOGNI</span><span>FIG. 02</span></div>
      <svg viewBox="0 0 440 340" width="440" height="340">
        <defs>
          <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0v24" fill="none" stroke="#507366" strokeWidth=".6" /></pattern>
        </defs>
        <path fill="url(#grid)" d="M0 0h440v340H0z" />
        <g fill="none" strokeWidth="1.25">
          <circle cx="175" cy="139" r="99" stroke="#d9e6d6" />
          <circle cx="267" cy="139" r="99" stroke="#e0b682" />
          <circle cx="221" cy="219" r="99" stroke="#91b7a0" />
          <path d="M221 12v315M36 168h373" stroke="#91b7a0" strokeDasharray="3 7" opacity=".66" />
        </g>
        <g fill="#e0b682"><circle cx="221" cy="168" r="5" /><circle cx="105" cy="69" r="3" /><circle cx="337" cy="69" r="3" /><circle cx="221" cy="318" r="3" /></g>
        <g fontFamily="monospace" fontSize="12" fill="#f6f3ea" letterSpacing="1.6">
          <text x="38" y="47">{labels[0]}</text><text x="305" y="47">{labels[1]}</text><text x="236" y="307">{labels[2]}</text>
        </g>
      </svg>
      <figcaption>{lang === 'en' ? '01 Listen  /  02 Prioritize  /  03 Build' : '01 Escutar  /  02 Priorizar  /  03 Construir'}</figcaption>
    </figure>
  );
}

function Project({ project, lang, compact = false }) {
  const [id, title, label, detail, stack, link] = project;
  if (compact) {
    return (
      <article className="card">
        <p className="eyebrow">{label}</p>
        <h3>{title}</h3>
        <p>{detail}</p>
        <a className="text-link" href={href(lang, 'projects', '#' + id)}>{lang === 'en' ? 'View case study' : 'Ler estudo de caso'} <span aria-hidden="true">↗</span></a>
      </article>
    );
  }
  return (
    <article className="card" id={id}>
      <p className="eyebrow">{label}</p>
      <h2>{title}</h2>
      <p>{detail}</p>
      <p className="stack">{stack}</p>
      <a className="text-link" href={projectHref(id)}>{link} <span aria-hidden="true">↗</span></a>
    </article>
  );
}

function Home({ lang, copy }) {
  return (
    <>
      <section className="hero wrap" aria-labelledby="headline">
        <div>
          <p className="eyebrow"><span className="dot" />{copy.eyebrow}</p>
          <h1 id="headline">{copy.headline[0]}<br /><em>{copy.headline[1]}</em></h1>
          <p className="intro">{copy.intro}</p>
          <div className="actions">
            <a className="button" href={href(lang, 'projects')}>{copy.cta} <span aria-hidden="true">↗</span></a>
            <a className="button button-light" href={href(lang, 'resume')}>{copy.nav.resume}</a>
          </div>
        </div>
        <Diagram lang={lang} />
      </section>
      <div className="audience-band">
        <div className="wrap audience">
          {copy.paths.map(([key, title, detail], index) => (
            <a className="audience-link" href={href(lang, key)} key={key}>
              <span className="eyebrow">0{index + 1} <span aria-hidden="true">↗</span></span>
              <strong>{title}</strong>
              <span>{detail}</span>
            </a>
          ))}
        </div>
      </div>
      <section className="wrap section" aria-labelledby="featured">
        <div className="section-heading">
          <h2 id="featured">{copy.featured}</h2>
          <a className="text-link" href={href(lang, 'projects')}>{copy.viewAll} <span aria-hidden="true">↗</span></a>
        </div>
        <div className="cards cards-three">
          {[copy.projectList[0], copy.projectList[1], copy.projectList[4]].map(project => <Project key={project[0]} project={project} lang={lang} compact />)}
        </div>
      </section>
      <section className="bio"><div className="wrap section split"><h2>{copy.trajectory}</h2><div><p className="intro">{copy.bio}</p><div className="actions"><a className="text-link" href={href(lang, 'press')}>{press[lang].title} ↗</a></div></div></div></section>
    </>
  );
}

function PageHeading({ title, detail, label }) {
  return <header className="page-heading"><p className="eyebrow">{label}</p><h1>{title}</h1><p className="intro">{detail}</p></header>;
}

function Projects({ lang, copy }) {
  return (
    <div className="wrap content">
      <PageHeading title={copy.nav.projects} detail={copy.projectsIntro} label={copy.eyebrow} />
      <div className="cards">{copy.projectList.map(project => <Project key={project[0]} project={project} lang={lang} />)}</div>
      <div className="actions"><a href={profiles.current}>GitHub · BrunoBDevOceanoAzul ↗</a><a href={profiles.archive}>GitHub · brunobisognidev ↗</a></div>
    </div>
  );
}

function Data({ lang, copy }) {
  const percentage = new Intl.NumberFormat(copy.lang, { style: 'percent', maximumFractionDigits: 1 });
  const rate = row => row.completed / row.requested;
  const csv = ['month,requested,completed', ...sample.map(row => [row.month, row.requested, row.completed].join(','))].join('\r\n');
  const delta = (rate(sample.at(-1)) - rate(sample[0])) * 100;
  const points = new Intl.NumberFormat(copy.lang, { maximumFractionDigits: 1 }).format(delta);
  const finding = lang === 'en'
    ? `The completion rate rose from ${percentage.format(rate(sample[0]))} to ${percentage.format(rate(sample.at(-1)))}, an increase of ${points} percentage points.`
    : `A taxa de conclusão subiu de ${percentage.format(rate(sample[0]))} para ${percentage.format(rate(sample.at(-1)))}, um aumento de ${points} pontos percentuais.`;
  return (
    <div className="wrap content">
      <PageHeading title={copy.nav.data} detail={copy.dataIntro} label="SQL · BigQuery · Power BI" />
      <section className="section-tight">
        <h2>{copy.dataWork}</h2>
        <div className="cards">{copy.dataCases.map(([title, detail, url, link]) => (
          <article className="card" key={title}><h3>{title}</h3><p>{detail}</p><a className="text-link" href={url}>{link} ↗</a></article>
        ))}</div>
      </section>
      <section className="data-panel" aria-labelledby="sample">
        <div className="data-summary">
          <p className="eyebrow">{lang === 'en' ? 'Portfolio exercise · Synthetic data' : 'Exercício de portfólio · Dados fictícios'}</p>
          <h2 id="sample">{copy.sampleTitle}</h2>
          <p>{copy.sampleIntro}</p>
          <p><strong>{finding}</strong></p>
          <p>{copy.sampleMethod}</p>
        </div>
        <div className="table-wrap">
          <table aria-label={copy.sampleTitle}>
            <thead><tr>{copy.table.map(label => <th key={label} scope="col">{label}</th>)}</tr></thead>
            <tbody>{sample.map(row => (
              <tr key={row.month}>
                <th scope="row">{row.month}</th><td>{row.requested}</td><td>{row.completed}</td>
                <td><span className="bar" style={{ '--ratio': rate(row) }} aria-hidden="true" />{percentage.format(rate(row))}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
        <details><summary>{copy.sql}</summary><pre><code>{query}</code></pre></details>
        <a className="button button-light" href={'data:text/csv;charset=utf-8,' + encodeURIComponent(csv)} download="requests-synthetic.csv">{copy.download}</a>
      </section>
    </div>
  );
}

function Freelance({ copy }) {
  return (
    <div className="wrap content">
      <PageHeading title={copy.nav.freelance} detail={copy.freelanceIntro} label={copy.eyebrow} />
      <div className="cards cards-three">{copy.services.map(([title, detail], index) => (
        <article className="card" key={title}><p className="eyebrow">0{index + 1}</p><h2>{title}</h2><p>{detail}</p></article>
      ))}</div>
      <section className="section split">
        <h2>{copy.how}</h2>
        <div>
          <ol className="steps">{copy.steps.map(step => <li key={step}>{step}</li>)}</ol>
          <div className="actions"><a className="button" href={`mailto:${profiles.email}?subject=${encodeURIComponent(copy.subject)}`}>{copy.email} ↗</a></div>
        </div>
      </section>
    </div>
  );
}

function Resume({ lang, copy }) {
  return (
    <article className="wrap cv">
      <header className="page-heading">
        <h1>Bruno Bisogni</h1><p className="intro">{copy.resumeTitle}</p>
        <ul className="contacts">
          <li>{copy.location}</li>
          <li><a href={'mailto:' + profiles.email}>{profiles.email}</a></li>
          <li><a href={profiles.linkedin}>linkedin.com/in/brunobisogni</a></li>
          <li><a href={profiles.current}>github.com/BrunoBDevOceanoAzul</a></li>
        </ul>
        <div className="actions screen-only"><PrintButton label={copy.print} /></div>
      </header>
      <p>{copy.summary}</p>
      <section><h2>{copy.skillsTitle}</h2><ul>{copy.skills.map(item => <li key={item}>{item}</li>)}</ul></section>
      <section><h2>{copy.experience}</h2>{copy.roles.map(([role, detail]) => <div className="role" key={role}><h3>{role}</h3><p>{detail}</p></div>)}</section>
      <section>
        <h2>{copy.resumeProjects}</h2>
        <ul>{[copy.projectList[0], copy.projectList[4]].map(([id, title, , detail]) => (
          <li key={id}><strong><a href={href(lang, 'projects', '#' + id)}>{title}</a>.</strong> {detail}</li>
        ))}</ul>
      </section>
      <section><h2>{copy.education}</h2><ul>{copy.qualifications.map(item => <li key={item}>{item}</li>)}</ul></section>
    </article>
  );
}

function Press({ lang, copy }) {
  const media = press[lang];
  return (
    <div className="wrap content">
      <PageHeading title={copy.nav.press} detail={media.intro} label={media.title} />
      <ol className="timeline">
        {media.items.map(([year, title, label, detail, links]) => (
          <li key={title}>
            <time dateTime={year}>{year}</time>
            <article className="card">
              <p className="eyebrow">{label}</p>
              <h2>{title}</h2>
              <p>{detail}</p>
              <ul className="source-links">
                {links.map(([url, text]) => <li key={url}><a className="text-link" href={url}>{text} <span aria-hidden="true">↗</span></a></li>)}
              </ul>
            </article>
          </li>
        ))}
      </ol>
      <section className="data-panel press-video">
        <h2>{media.videoTitle}</h2>
        <PressVideo label={media.videoToggle} title={media.videoTitle} />
        <p className="muted">{media.notes}</p>
      </section>
    </div>
  );
}

const pages = { home: Home, projects: Projects, data: Data, freelance: Freelance, press: Press, resume: Resume };

export default async function PortfolioPage({ params }) {
  const { route } = await params;
  const { lang, section, copy } = resolve(route);
  const Page = pages[section];
  return (
    <>
      <a className="skip screen-only" href="#content">{copy.skip}</a>
      <Header lang={lang} section={section} copy={copy} />
      <main id="content"><Page lang={lang} copy={copy} /></main>
      <footer className="wrap footer screen-only">
        <div><p className="eyebrow">{copy.location}</p><p className="footer-title">{copy.closing}</p></div>
        <nav aria-label={copy.contact}><a href={profiles.linkedin}>LinkedIn ↗</a><a href={profiles.github}>GitHub ↗</a><a href={profiles.instagram}>Instagram ↗</a><a href={'mailto:' + profiles.email}>Email ↗</a></nav>
      </footer>
    </>
  );
}
