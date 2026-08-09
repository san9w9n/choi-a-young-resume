import Image from "next/image";
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
            <div className="slot portrait">
              {/* 첫 화면에 보이는 사진이라 lazy 로딩을 끕니다(priority).
                  실제 표시 폭은 최대 340px 이므로 sizes 로 알려 줘야
                  Next 가 원본이 아닌 작은 변형을 고릅니다. */}
              <Image
                src="/profile.jpeg"
                alt={hero.portraitAlt}
                width={800}
                height={1000}
                sizes="(min-width: 860px) 340px, (min-width: 460px) 460px, 100vw"
                priority
              />
            </div>
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
