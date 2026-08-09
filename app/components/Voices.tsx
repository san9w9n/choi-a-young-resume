import { voices } from "@/content/resume";

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
              <p className="body">{item.body}</p>
              <figcaption className="who">{item.who}</figcaption>
            </figure>
          ))}
        </div>

        <p className="foot-note">{voices.footNote}</p>
      </div>
    </section>
  );
}
