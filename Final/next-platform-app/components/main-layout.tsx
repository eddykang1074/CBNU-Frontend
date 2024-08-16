import Header from '@/components/header';
import Container from '@/components/container';
import Footer from '@/components/footer';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="bg-white">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
