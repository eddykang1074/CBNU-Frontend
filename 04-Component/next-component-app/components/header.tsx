import Image from 'next/image';
import { Children } from 'react';

type HeaderProps = {
  mainPage: string;
  children: string;
  onClick: (url: string) => void;
};

const Header = ({ mainPage, children, onClick }: HeaderProps) => {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <h1>{children}</h1>
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Get started by editing&nbsp;
        <code className="font-mono font-bold">{mainPage}</code>
      </p>
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        onClick={() => onClick('http://www.naver.com')}
      >
        자식컴포넌트에서 부모이벤트 호출하기
      </button>

      {/* <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        onClick={() => onClick('테스트입니다.')}
      >
        자식에서 부모이벤트 호출하기
      </button> */}
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{' '}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
