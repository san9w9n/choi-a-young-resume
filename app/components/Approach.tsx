import { approach } from "@/content/resume";

/** 실제로 순서가 있는 과정이라 번호를 크게 쓰고 선으로 잇습니다. */
export function Approach() {
  return (
    <section id="approach" className="section band-dark">
      <div className="wrap">
        <h2 className="serif h2">{approach.heading}</h2>
        <ol className="steps">
          {approach.steps.map((step, i) => (
            <li className="step" key={step.step}>
              <span className="step-num serif">{i + 1}</span>
              <div className="step-text">
                <p className="step-label">{step.step}</p>
                <h3>{step.title}</h3>
                <p className="step-body">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
