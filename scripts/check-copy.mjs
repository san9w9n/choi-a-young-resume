/**
 * 이력서 문안이 읽기 좋은 길이를 넘지 않는지 검사합니다.
 *
 *   node scripts/check-copy.mjs
 *
 * 이력서는 읽는 문서가 아니라 훑는 문서입니다. 그래서 세 가지를 봅니다.
 *   1. 한 문장이 길면 좁은 화면에서 문단이 벽처럼 보입니다.
 *   2. 한 문단이 두 문장을 넘으면 훑어보기가 어려워집니다.
 *   3. 문장 하나하나가 짧아도 총량이 늘면 결국 읽을 양이 많아집니다.
 *
 * content/resume.ts 를 고칠 때 이 검사를 같이 돌리세요.
 */
import {
  approach,
  career,
  contact,
  hero,
  site,
  voices,
} from "../content/resume.ts";

const MAX_SENTENCE_CHARS = 45;
const MAX_SENTENCES_PER_PARAGRAPH = 2;
/** 검색 결과 스니펫은 화면에 흐르는 문장이 아니라 한 덩어리라 상한이 다릅니다. */
const MAX_META_CHARS = 160;
/** 쉼표로 이어진 나열은 문장이 아니라 목록이라 상한을 따로 둡니다. */
const MAX_LIST_CHARS = 60;
/**
 * 본문 총량 상한. 여기에 걸리면 **사실을 지우기 전에 수식어와 중복 문장부터**
 * 찾으세요. 기관명·날짜·평가도구·치료 기법·변화 내용은 상한을 넘더라도
 * 지우지 않습니다. 이 규칙이 생긴 경위는 README 의 "문안 길이"에 있습니다.
 */
const MAX_BODY_CHARS = 1370;

/** 마침표·물음표·느낌표 뒤 공백을 문장 경계로 봅니다. */
function sentencesOf(text) {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

const problems = [];
/** 총량 계산에 들어간 문안. 중복 없이 한 번씩만 더합니다. */
const bodyTexts = [];

/** @param {string} where @param {string} text @param {number} maxSentences */
function check(where, text, maxSentences = MAX_SENTENCES_PER_PARAGRAPH) {
  bodyTexts.push(text);
  const sentences = sentencesOf(text);
  if (sentences.length > maxSentences) {
    problems.push(
      `${where}: ${sentences.length}문장 (최대 ${maxSentences}문장) — ${text}`,
    );
  }
  for (const sentence of sentences) {
    if (sentence.length > MAX_SENTENCE_CHARS) {
      problems.push(
        `${where}: ${sentence.length}자 (최대 ${MAX_SENTENCE_CHARS}자) — ${sentence}`,
      );
    }
  }
}

/**
 * 쉼표로 이어진 나열(이수한 평가 도구, 실습 과목 같은 것)은 문장이 아닙니다.
 * 45자 규칙을 들이대면 항목을 지우는 수밖에 없는데, 그건 분량이 아니라
 * 정보를 줄이는 일입니다. 그래서 나열은 총량만 봅니다.
 */
function checkList(where, text) {
  bodyTexts.push(text);
  if (text.length > MAX_LIST_CHARS) {
    problems.push(
      `${where}: 나열 ${text.length}자 (최대 ${MAX_LIST_CHARS}자) — ${text}`,
    );
  }
  if (sentencesOf(text).length > 1) {
    problems.push(`${where}: 나열은 한 줄이어야 합니다 — ${text}`);
  }
}

/** 메타 문안은 화면에 안 나오므로 문장 규칙 대신 전체 길이만 봅니다. */
function checkMeta(where, text) {
  if (text.length > MAX_META_CHARS) {
    problems.push(
      `${where}: ${text.length}자 (최대 ${MAX_META_CHARS}자) — ${text}`,
    );
  }
}

checkMeta("site.description", site.description);
checkMeta("site.ogDescription", site.ogDescription);
checkMeta("site.title", site.title);

check("hero.lead", hero.lead, 1);
check("hero.sub", hero.sub, 1);

approach.steps.forEach((step, i) => {
  check(`approach.steps[${i}].title`, step.title, 1);
  check(`approach.steps[${i}].body`, step.body, 1);
});


voices.items.forEach((item, i) => {
  check(`voices.items[${i}].quote`, item.quote, 1);
  // 보호자 원문을 옮긴 것이라 한 문장으로 못 줄이는 경우가 있습니다.
  // 총량 상한이 진짜 제어 장치이고, 문장 수는 그 보조 수단입니다.
  check(`voices.items[${i}].body`, item.body);
});
check("voices.footNote", voices.footNote, 1);

career.jobs.forEach((job, i) => {
  // role·detail 모두 문장이 아니라 직함/과목 나열이라 목록 규칙으로 봅니다
  if (job.role) checkList(`career.jobs[${i}].role`, job.role);
  if (job.detail) checkList(`career.jobs[${i}].detail`, job.detail);
});

check("contact.body", contact.body, 1);

const bodyChars = bodyTexts.join("").length;
if (bodyChars > MAX_BODY_CHARS) {
  problems.push(
    `본문 총량: ${bodyChars}자 (최대 ${MAX_BODY_CHARS}자) — 문장을 더 줄이거나 문단을 지우세요`,
  );
}

if (problems.length > 0) {
  console.error(`문안 검사 실패 — ${problems.length}건\n`);
  for (const problem of problems) console.error(`  · ${problem}`);
  process.exit(1);
}

console.log(
  `문안 검사 통과 — 본문 ${bodyChars}자 / ${MAX_BODY_CHARS}자, ` +
    `문장 ${MAX_SENTENCE_CHARS}자 이하.`,
);
