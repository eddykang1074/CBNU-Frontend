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
