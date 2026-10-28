import { career } from "@/content/resume";
import { keepDotGroups } from "./text";

/** "감각통합치료사 — 아동 평가·…" 처럼 직함과 업무가 한 줄에 붙은 문안을
 *  둘로 나눠, 줄표 대신 글자 굵기로 구분합니다. 줄표가 없으면 전부 업무로 봅니다. */
function splitRole(role: string): { title?: string; duty: string } {
  const at = role.indexOf(" — ");
  return at < 0 ? { duty: role } : { title: role.slice(0, at), duty: role.slice(at + 3) };
}

export function Career() {
  return (
    <section id="career" className="section">
      <div className="wrap">
        <h2 className="serif h2 career-title">{career.heading}</h2>

        <ol className="timeline">
          {career.jobs.map((job) => {
            // 기간 문안에 "재직 중"이 있으면 지금 다니는 곳으로 표시합니다.
            const current = job.period.includes("재직 중");
            const role = job.role ? splitRole(job.role) : null;
            return (
              <li
                className={current ? "job is-current" : "job"}
                key={`${job.period}-${job.org}`}
              >
                <p className="period">{job.period}</p>
                <div className="job-body">
                  <p className="org">{job.org}</p>
                  {role ? (
                    <p className="role">
                      {role.title ? <span className="role-title">{role.title}</span> : null}
                      <span className="role-duty">{keepDotGroups(role.duty)}</span>
                    </p>
                  ) : null}
                  {job.detail ? <p className="detail">{keepDotGroups(job.detail)}</p> : null}
                </div>
              </li>
            );
          })}
        </ol>

        <div className="creds">
          {career.credentials.map((group) => (
            <div className="cred-group" key={group.heading}>
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
