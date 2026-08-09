import { approach } from "@/content/resume";

export function Approach() {
  return (
    <section id="approach" className="section band-dark">
      <div className="wrap">
        <p className="eyebrow">{approach.eyebrow}</p>
        <h2 className="serif h2">{approach.heading}</h2>
        <div className="cards">
          {approach.steps.map((step) => (
            <article className="card" key={step.step}>
              <p className="step">{step.step}</p>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
