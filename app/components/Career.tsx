import { career } from "@/content/resume";

export function Career() {
  return (
    <section id="career" className="section">
      <div className="wrap">
        <p className="eyebrow">{career.eyebrow}</p>
        <h2 className="serif h2 career-title">{career.heading}</h2>

        <div className="timeline">
          {career.jobs.map((job) => (
            <div className="job" key={`${job.period}-${job.org}`}>
              <p className="period">{job.period}</p>
              <div>
                <p className="org">{job.org}</p>
                {job.role ? <p className="role">{job.role}</p> : null}
                {job.detail ? <p className="detail">{job.detail}</p> : null}
              </div>
            </div>
          ))}
        </div>

        <div className="creds">
          {career.credentials.map((group) => (
            <div key={group.heading}>
              <h3>{group.heading}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item.text}>
                    {item.text} <span className="meta">{item.meta}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
