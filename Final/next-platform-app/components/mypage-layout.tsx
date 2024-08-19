import { NextPage } from 'next';

import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon, count: '5', current: true },
  { name: 'Profile', href: '/mypage/profile', icon: UsersIcon, current: false },
  {
    name: 'Blogs',
    href: '/mypage/blog/list',
    icon: DocumentDuplicateIcon,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

import Header from '@/components/header';
import Container from '@/components/container';
import Footer from '@/components/footer';

type MyPageLayoutProps = {
  children: React.ReactNode;
};

const MyPageLayout: NextPage<MyPageLayoutProps> = props => {
  return (
    <Container>
      <Header />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-8xl px-2 lg:px-2">
          {/* 화면 분할 컨테이너 */}
          <div className="flex">
            {/* 좌측 컨텐츠 영역 (1/3) */}
            <div className="w-1/4  p-4 hidden lg:block">
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6">
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map(item => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? 'bg-gray-50 text-indigo-600'
                                  : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                                'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                              )}
                            >
                              <item.icon
                                className={classNames(
                                  item.current
                                    ? 'text-indigo-600'
                                    : 'text-gray-400 group-hover:text-indigo-600',
                                  'h-6 w-6 shrink-0',
                                )}
                                aria-hidden="true"
                              />
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* 우측 컨텐츠 영역 (2/3) */}
            <div className="w-full lg:w-3/4  p-4">{props.children}</div>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default MyPageLayout;
