import { cases, type CaseRecord } from "@/content/resume";

function Row({ label, paragraphs }: { label: string; paragraphs: readonly string[] }) {
  return (
    <div className="row">
      <p className="k">{label}</p>
      <div className="stack">
        {paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
    </div>
  );
}

function Case({ record }: { record: CaseRecord }) {
  return (
    <article className="case">
      <div className="case-head">
        <div>
          <p className="case-label">{record.label}</p>
          <h3 className="serif case-title">{record.title}</h3>
          <p className="case-meta">{record.meta}</p>
        </div>
        <p className="badge">{record.badge}</p>
      </div>

      <div className="case-body">
        <Row label="01 분석" paragraphs={record.analysis} />
        <Row label="02 목표" paragraphs={record.goal} />
        <Row label="03 활동" paragraphs={record.activity} />
        <div className="row">
          <p className="k">04 변화</p>
          <div>
            <div className="changes">
              {record.changes.map((change) => (
                <div className="change" key={change.when}>
                  <span className="when">{change.when}</span>
                  <span className="what">{change.what}</span>
                </div>
              ))}
            </div>
            {record.note ? <p className="note">{record.note}</p> : null}
          </div>
        </div>
      </div>
    </article>
  );
}

export function Cases() {
  return (
    <section id="case" className="section">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <p className="eyebrow">{cases.eyebrow}</p>
            <h2 className="serif h2">{cases.heading}</h2>
          </div>
          <p className="sec-note">{cases.note}</p>
        </div>

        {cases.records.map((record) => (
          <Case key={record.label} record={record} />
        ))}

        {/* 사례를 추가하면 content/resume.ts 의 records 에 넣고 pending 에서 지우면 됩니다. */}
        {cases.pending.length > 0 && (
          <ul className="pending">
            {cases.pending.map((item) => (
              <li key={item.n}>
                <p className="n">{item.n}</p>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
