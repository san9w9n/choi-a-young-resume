import Image from "next/image";
import { facts, hero, site } from "@/content/resume";
import { keepDotGroups } from "./text";

export function Hero() {
  return (
    <>
      <div className="hero-outer">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title" className="serif">
              {hero.headline}
            </h1>
            <p className="lead">{keepDotGroups(hero.lead)}</p>
            <p className="sub">{keepDotGroups(hero.sub)}</p>
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

          {/* 좁은 화면에서는 사진을 작게 줄여 글 위로 올립니다. 보호자가 첫 화면에서
              치료사의 얼굴과 이름을 바로 보게 하려는 것입니다. */}
          <figure className="hero-media">
            <div className="slot portrait">
              {/* 첫 화면에 보이는 사진이라 lazy 로딩을 끕니다(priority).
                  표시 폭은 최대 340px 이므로 sizes 로 알려 줘야
                  Next 가 원본이 아닌 작은 변형을 고릅니다. */}
              <Image
                src="/profile.jpeg"
                alt={hero.portraitAlt}
                width={800}
                height={1000}
                sizes="(min-width: 860px) 340px, 120px"
                priority
              />
            </div>
            <figcaption className="hero-id">
              <span className="hero-name">{site.name}</span>
              <span className="hero-role">{site.role}</span>
            </figcaption>
          </figure>
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
