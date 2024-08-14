const Child31 = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[300px] bg-red-300">
      Child31
      <div>{children}</div>
    </div>
  );
};

export default Child31;
