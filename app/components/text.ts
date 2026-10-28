/**
 * "평가·치료·상담을" 같은 가운뎃점 나열은 한 덩어리로 묶습니다.
 * 그대로 두면 브라우저가 점 앞에서 줄을 바꿔 다음 줄이 "·치료"로
 * 시작합니다. 점 양옆에 보이지 않는 WORD JOINER(U+2060)를 넣어
 * 나열 앞 공백에서만 줄이 바뀌게 합니다.
 */
export function keepDotGroups(text: string): string {
  return text.replace(/\s*·\s*/g, (m) => (m.trim() === m ? "⁠·⁠" : m));
}
