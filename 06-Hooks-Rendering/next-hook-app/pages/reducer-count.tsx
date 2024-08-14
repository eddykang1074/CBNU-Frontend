//useReducer 훅을 이용한 데이터 관리하기
import { useReducer } from "react";

//재사용 가능한 리듀서 함수와 관련 타입 참조하기
import { CountActionType } from "@/interfaces/common";
import { countReducer } from "@/utils/reducers";

//리듀서함수 정의하기
//리듀서함수(관리하는 상태값 매개변수,로직처리타입)
// function countReducer(state: number, action: string): number {
//   //처리 로직 유형에 따른 비지니스로직 처리후
//   //관리하는 상태값 반환하기,기본값은 현재 상태값 변환
//   switch (action) {
//     case "plus":
//       return state + 1;
//     case "minus":
//       return state - 1;
//     case "init":
//       return 0;
//     default:
//       return state;
//   }
// }

//카운트 상태값 로직 처리 유형 열거형 정의
// enum CountActionType {
//   PLUS = "Plus",
//   MINUS = "Minus",
//   INIT = "Init",
// }

//액션 타입 정의하기
// interface ActionType {
//   type: CountActionType;
// }

// function countReducer(state: number, action: ActionType): number {
//   const { type } = action;
//   switch (type) {
//     case CountActionType.PLUS:
//       return state + 1;
//     case CountActionType.MINUS:
//       return state - 1;
//     case CountActionType.INIT:
//       return 0;
//     default:
//       return state;
//   }
// }

const ReducerCount = () => {
  //useReducer훅 생성하기
  //useReducer(리듀서함수-재사용/통합 로직처리함수,초기데이터값);
  //useReducer()함수는 관리하는 상태값과 해당 리듀서함수를 호출하는 디스패치함수를 반환합니다.
  //dispatch의 의미는 이벤트 발생시 해당 이벤트를 처리해주는 함수를 의미.
  //dispatch함수명은 임의로 지정합니다. ex) data,dispatchData
  //UI이벤트 발생->디스패치함수호출 ->리듀서함수실행->상태값이 변경됨->화면이 변경된값으로 렌더링됨.
  const [count, dispatchCount] = useReducer(countReducer, 100);

  return (
    <div>
      {/* Count page 현재 카운트 값 표시영역 */}
      <div className="text-center mt-4">
        <h1 className="text-lg">{count}</h1>
      </div>

      {/* 카운트 값 증감/초기화 버튼영역 */}
      <div className="text-center mt-6">
        <button
          onClick={() => dispatchCount({ type: CountActionType.PLUS })}
          className="ml-3 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          증가
        </button>

        <button
          onClick={() => dispatchCount({ type: CountActionType.MINUS })}
          className="ml-3 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          감소
        </button>

        <button
          onClick={() => dispatchCount({ type: CountActionType.INIT })}
          className="ml-3 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          초기화
        </button>
      </div>
    </div>
  );
};

export default ReducerCount;
