import { NextPage } from "next";

type ContainerProps = {
  children: React.ReactNode;
};

const Container: NextPage<ContainerProps> = (props) => {
  return <div className="bg-white">{props.children}</div>;
};

export default Container;
