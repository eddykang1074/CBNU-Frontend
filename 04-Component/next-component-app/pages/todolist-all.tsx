import { useState } from 'react';

const TodoListAll = () => {
  //단일 할일 텍스트 상태값 저장변수
  const [todo, setTodo] = useState<string>('');

  //할일목록 문자열 배열 상태값 정의하기
  const [todos, setTodos] = useState<string[]>([]);

  //할일 텍스트 변경 이벤트 처리 함수
  const todoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  //할일 저장 이벤트 처리 함수
  const saveTodo = () => {
    //단일할일정보를 할일목록 배열에 추가하기
    //setTodos('신규배열목록');
    //기존 배열목록의 복사본을 생성하고 해당 복사본배열에 신규아이템을 추가한다.
    setTodos([...todos, todo]);

    //할일입력박스 상태값 초기화
    setTodo('');
  };

  //할일 삭제 이벤트 처리 함수
  const removeItem = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number,
  ) => {
    //todos 배열에서 삭제하려는 index값과 일치하지 않는 모든 목록을 반환한다.
    const filteredTodos = todos.filter(
      (item: string, i: number) => i !== index,
    );

    //필터링된 배열목록으로 다시 할일목록 상태값을 갱신한다.
    setTodos(filteredTodos);
  };

  return (
    // 할일 컨테이너 영역
    <div className="container mx-auto max-w-md p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>

      {/* 할일 등록 영역  */}
      <form className="flex mb-4">
        <input
          type="text"
          value={todo}
          onChange={todoChange}
          className="flex-grow border border-gray-300 rounded px-4 py-2 mr-2"
          placeholder="Enter a todo"
        />
        <button
          type="button"
          onClick={saveTodo}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Add
        </button>
      </form>

      {/* 할일목록영역 */}
      <ul>
        {todos.map((item: string, index: number) => (
          <li
            key={index}
            className="flex items-center justify-between border-b border-gray-300 py-2"
          >
            <span>{item}</span>
            <button
              type="button"
              onClick={(e) => removeItem(e, index)}
              className="text-red-500 hover:text-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListAll;
