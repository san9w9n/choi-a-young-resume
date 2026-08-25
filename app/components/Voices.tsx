import { voices } from "@/content/resume";

/** 보호자 원문이 여러 문단일 수 있어 문자열과 배열을 모두 받습니다. */
function paragraphsOf(body: string | readonly string[]): readonly string[] {
  return typeof body === "string" ? [body] : body;
}

export function Voices() {
  return (
    <section id="voice" className="section band-pale">
      <div className="wrap">
        <p className="eyebrow">{voices.eyebrow}</p>
        <div className="sec-head">
          <h2 className="serif h2">{voices.heading}</h2>
          <p className="sec-note">{voices.note}</p>
        </div>

        <div className="quotes">
          {voices.items.map((item) => (
            <figure className="quote" key={item.quote}>
              <p className="q">&ldquo;{item.quote}&rdquo;</p>
              {paragraphsOf(item.body).map((paragraph) => (
                <p className="body" key={paragraph}>
                  {paragraph}
                </p>
              ))}
              <figcaption className="who">{item.who}</figcaption>
            </figure>
          ))}
        </div>

        <p className="foot-note">{voices.footNote}</p>
      </div>
    </section>
  );
}
