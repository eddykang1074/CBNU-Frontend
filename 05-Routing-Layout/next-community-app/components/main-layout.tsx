import { NextPage } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
