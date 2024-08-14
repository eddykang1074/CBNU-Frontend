//카운트 상태값 로직 처리 유형 열거형 정의
export enum CountActionType {
  PLUS = "Plus",
  MINUS = "Minus",
  INIT = "Init",
}

//액션 타입 정의하기
export interface ActionType {
  type: CountActionType;
}
