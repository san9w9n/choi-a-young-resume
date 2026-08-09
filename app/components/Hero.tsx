import { facts, hero } from "@/content/resume";

export function Hero() {
  return (
    <>
      <div className="hero-outer">
        <section className="hero">
          <div className="hero-copy">
            <p className="hero-kicker">{hero.kicker}</p>
            <h1 className="serif">{hero.headline}</h1>
            <p className="lead">{hero.lead}</p>
            <p className="sub">{hero.sub}</p>
            <div className="hero-actions">
              {hero.actions.map((action) => (
                <a
                  key={action.href}
                  className={`hero-action ${action.variant}`}
                  href={action.href}
                >
                  {action.label}
                </a>
              ))}
            </div>
          </div>
          <div className="hero-media">
            {/* 사진을 넣으려면 이 div 안에 <img> 를 두면 칸을 꽉 채웁니다. */}
            <div className="slot portrait">{hero.portraitPlaceholder}</div>
            <p className="hero-caption">{hero.caption}</p>
          </div>
        </section>
      </div>

      <section className="wrap facts-wrap" aria-label="요약">
        <dl className="facts">
          {facts.map((fact) => (
            <div className="fact" key={fact.term}>
              <dt>{fact.term}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
