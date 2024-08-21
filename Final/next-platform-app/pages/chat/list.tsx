import { useRouter } from 'next/router';
import { useState, useEffect, useContext } from 'react';

import { IChannel, ChannelState } from '@/interfaces/message';

//전역컨텍스트 참조하기
import { GlobalContext } from '@/library/globalContext';
import { IGlobalData, ILoginMember } from '@/interfaces/global';

import axios from 'axios';

const ChatList = () => {
  const router = useRouter();

  //전역 상태값에서 로그인한 사용자의 정보 조회하기 위해 컨텍스트 객체 생성
  const { globalData, setGlobalData } = useContext(GlobalContext);

  //채널목록 데이터 상태 정의 및 초기화
  const [channels, setChannels] = useState<IChannel[]>([]);

  useEffect(() => {
    getChannelList();
  }, []);

  async function getChannelList() {
    const response = await axios.get('http://localhost:5000/api/channel/list');
    console.log('백엔드에서 제공해준 채널목록:', response.data);
    setChannels(response.data.data);
  }

  //채널목록에서 참여하기 버튼클릭시 선택 채널번호를 이용해 채팅방 컴포넌트로 이동하기
  const entryChannel = async (cid: number) => {
    router.push(`/chat?cid=${cid.toString()}`);
  };

  return (
    <div className="ml-32 mr-32 px-4 sm:px-6 lg:px-8">
      <div className="mt-32 sm:flex sm:items-center">
        {/* 제목 및 설명영역 */}
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            채팅방 목록
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            일대일 사용자 채팅방 목록
          </p>
        </div>

        {/* 신규 채널개설 버튼영역 */}
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            onClick={() => {
              router.push('/chat/create');
            }}
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            신규채널개설
          </button>
        </div>
      </div>

      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      채널명
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      접속자 제한수
                    </th>

                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      참여하기
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {channels.map((channel, index) => (
                    <tr key={channel.channel_id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {channel.channel_name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {channel.user_limit}
                      </td>

                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-center text-sm font-medium sm:pr-6">
                        <button
                          type="button"
                          onClick={() => {
                            entryChannel(channel.channel_id);
                          }}
                          className="rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          참여하기
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
