//전역상태 데이터를 관리하려면 반드시 페이지 컴포넌트간 이동시 Link컴포넌트를 이용해야한다.
//Link컴포넌트를 이용하지 않으면 페이지 이동시 전역상태 데이터가 초기화된다.

import { createContext, ReactNode, useState } from 'react';

//전역 데이터 타입 참조
import { IGlobalData, ILoginMember } from '@/interfaces/global';

export const GlobalContext = createContext({
  globalData: { token: '', member: { member_id: 0, name: '', email: '' } },
  setGlobalData: (data: IGlobalData) => {},
});

type Props = { children: ReactNode };

export default function GlobalProvider({ children }: Props) {
  const [globalData, setGlobalData] = useState<IGlobalData>({
    token: '',
    member: { member_id: 0, name: '', email: '' },
  });

  return (
    <GlobalContext.Provider value={{ globalData, setGlobalData }}>
      {children}
    </GlobalContext.Provider>
  );
}
