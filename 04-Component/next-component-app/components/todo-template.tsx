const TodoTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    // 할일 컨테이너 영역
    <div className="container mx-auto max-w-md p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      {children}
    </div>
  );
};

export default TodoTemplate;
