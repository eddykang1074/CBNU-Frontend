//사용자간 기초 채팅기능구현 컴포넌트
import { useState, useEffect, useContext } from 'react';

//전역컨텍스트 참조하기
import { GlobalContext } from '@/library/globalContext';

import { useRouter } from 'next/router';

import { IMessage } from '@/interfaces/message';

//채팅 클라이언트 socket객체 참조하기
import { socket } from '@/library/socket';

//채팅 컴포넌트 정의
const Chat = () => {
  //라우터 객체 생성
  const router = useRouter();

  //전역 상태값에서 로그인한 사용자의 정보 조회하기 위해 컨텍스트 객체 생성
  const { globalData, setGlobalData } = useContext(GlobalContext);

  //사용자 인증토큰정보 관리 상태값 정의하기
  const [memberToken, setMemberToken] = useState<string>('');

  //현재 접속채널 상태값 정의하기
  const [channel, setChannel] = useState<number>(0);

  //채팅 메시지 입력 요소 바인딩 텍스트 상태값 정의
  const [message, setMessage] = useState<string>('');

  //채팅 메시지 목록(채팅이력정보) 상태값 정의하기
  const [messageList, setMessageList] = useState<IMessage[]>([]);

  //useEffect훅은 CSR환경에서 작동되고 userRouter훅은 SSR/CSR순서로 2번작동됨.
  //useEffect훅에서 userRouter훅이용해 URL키값이 추출안되는 문제는  useRouter.isReady값을 이용해 해결가능
  //useRouter.isReady 값이 기본은 false->true로 변경되는 시점에 관련 기능 구현하면됨..
  useEffect(() => {
    console.log('현재 URL주소에서 채널번호 추출하기:', router.query.cid);
    //URL주소를통해 사용자 고유번호가 전달된 경우에만 실행
    if (router.query.cid != undefined) {
      //현재 채널 고유번호 상태값 설정해주기
      setChannel(Number(router.query.cid));
    }
  }, [router.isReady]);

  //현재 접속 채널정보가 변경될때마다 실행되는 useEffect함수
  //채널번호가 바뀌면 바뀐번호 채널로 채팅방에 입장하기 처리
  useEffect(() => {
    //채팅방 입장처리하기
    console.log('채팅방 채널이 변경되었습니다.', channel);
    if (channel > 0) {
      console.log('채팅방에 입장합니다.', channel);
      //해당 변경된 채팅방에 입장처리하기
      socket.emit('entry', channel.toString(), globalData.member);
    }
  }, [channel]);

  //최초 1회 화면이 렌더링되는 시점(마운팅되는시점)에 실행되는 useEffect함수
  //프로젝트 루트에 next.config.mjs파일내 reactStrictMode(엄격모드)값을 false로 변경해야 정확히 1회만 실행됨
  //채팅서버와 연결되는 클라이언트 채팅 소켓 객체 생성 및 각종 채팅 이벤트 기능 구현영역
  useEffect(() => {
    //웹브라우저 저장소에 저장된 서버에서 발급해준 JWT사용자인증정보 토큰추출하기
    const token = localStorage.getItem('token');
    if (token == undefined) {
      router.push('/login');
    }

    console.log('전역 데이터 정보 확인하기:', globalData);
    setMemberToken(token as string);

    //최초 화면이 렌더링되는 시점(최초1회)에 서버소켓 연결하기
    socket.connect();

    //서버소켓과 연결이 완료되면 실행되는 이벤트처리함수
    //서버 소켓과 연결이 완료되면 자동으로 client 소켓에서connect이벤트가 실행되고
    //connect이벤트가 실행되면 처리할 이벤트 처리할 기능 구현
    //소켓 시스템 이벤트
    socket.on('connect', () => {
      console.log('정상적으로 서버소켓과 연결이 완료되었습니다.');
      console.log('전역 데이터 정보 확인하기:', globalData);
    });

    //disconnect 이벤트는 서버소켓이 끊어진경우 발생하는 이벤트
    //서버와의 연결소켓이 끊어진경우 처리할 기능을 핸들러함수에서처리합니다.
    //소켓 시스템 이벤트
    socket.on('disconnect', () => {
      console.log('서버소켓 연결이 종료되었습니다.');
    });

    //개발자 정의 클라이언트 소켓 이벤트 수신기 정의하기
    //socket.on('클라이언트 이벤트 수신기명',서버에서 전달해준 데이터를 받는함수정의);
    socket.on('receiveAll', function (msg: IMessage) {
      console.log('서버소켓에서 전달된 데이터 확인-receiveAll:', msg);
      setMessageList(prev => [...prev, msg]);
    });

    //사용자 지정 채널 입장완료 이벤트 수신기
    socket.on('entryOk', function (msg: IMessage) {
      console.log('서버소켓에서 전달된 데이터 확인-receiveAll:', msg);
      setMessageList(prev => [...prev, msg]);
    });

    //채팅채널별 메시지 수신기 정의 하기
    socket.on('receiveChannel', function (msg: IMessage) {
      console.log('서버소켓에서 전달된 데이터 확인-receiveChannel:', msg);
      setMessageList(prev => [...prev, msg]);
    });

    //해당 채팅 컴포넌트가 화면에서 사라질때(언마운팅시점)
    //소켓관련 이벤트를 모두 제거해워야합니다. 그렇지 않으면 메시지를 여러번 수신할수 있음
    return () => {
      //socket.off(클라이언트 이벤트 수신기명); //이벤트 제거
      socket.off('connect');
      socket.off('disconnect');
      socket.off('receiveAll');
      socket.off('entryOk');
      socket.off('receiveChannel');
    };
  }, []);

  //채팅 메시지 전송 이벤트 처리함수
  const sendMessage = () => {
    //채팅서버소켓으로 메시지를 전송합니다.
    const msgData = {
      member_id: globalData.member.member_id,
      name: globalData.member.name,
      profile: `http://localhost:5000/img/user${globalData.member.member_id.toString()}.png`,
      message: message,
      send_date: Date.now().toString(),
    };

    //socket.emit('서버 이벤트 수신기명',전달할 데이터);
    //채팅서버소켓으로 메시지 전송하기
    socket.emit('channelMsg', channel.toString(), msgData);

    //메시지 입력박스 초기화
    setMessage('');
  };

  return (
    <div className="flex h-screen antialiased text-gray-800 mt-14 pb-10">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <div className="flex flex-col flex-auto h-full p-6">
          <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
            {/* 메시지 목록 출력영역 */}
            <div className="flex flex-col h-full overflow-x-auto mb-4">
              <div className="flex flex-col h-full">
                <div className="grid grid-cols-12 gap-y-2">
                  {messageList.map((msg, index) =>
                    msg.member_id === globalData.member.member_id ? (
                      <div
                        key={index}
                        className="col-start-6 col-end-13 p-3 rounded-lg"
                      >
                        <div className="flex items-center justify-start flex-row-reverse">
                          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                            A
                          </div>
                          <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                            <div>{msg.message}</div>
                            <div className="absolute w-[200px] text-right text-xs bottom-0 right-0 -mb-5 text-gray-500">
                              {msg.name} {msg.send_date}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        key={index}
                        className="col-start-1 col-end-8 p-3 rounded-lg"
                      >
                        <div className="flex flex-row items-center">
                          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                            A
                          </div>
                          <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                            <div>{msg.message}</div>
                            <div className="absolute w-[200px] text-xs bottom-0 left-0 -mb-5 text-gray-500">
                              {msg.name} {msg.send_date}
                            </div>
                          </div>
                        </div>
                      </div>
                    ),
                  )}

                  {/* 왼쪾 다른 사용자 메시지 출력 영역 */}
                  {/* <div className="col-start-1 col-end-8 p-3 rounded-lg">
                    <div className="flex flex-row items-center">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                        A
                      </div>
                      <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                        <div>Hey How are you today?</div>
                      </div>
                    </div>
                  </div> */}

                  {/* 오른쪽 본인 메시지 출력영역 */}
                  {/* <div className="col-start-6 col-end-13 p-3 rounded-lg">
                    <div className="flex items-center justify-start flex-row-reverse">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                        A
                      </div>
                      <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                        <div>
                          Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            {/* 메시지 입력 및 보내기 영역 */}
            <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
              {/* 파일첨부버튼영역 */}
              <div>
                <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                  </svg>
                </button>
              </div>

              {/* 메시지 입력요소 영역 */}
              <div className="flex-grow ml-4">
                <div className="relative w-full">
                  <input
                    type="text"
                    name={message}
                    value={message}
                    onChange={e => {
                      setMessage(e.target.value);
                    }}
                    className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                  />
                </div>
              </div>

              {/* 메시지 전송버튼 영역 */}
              <div className="ml-4">
                <button
                  type="button"
                  onClick={sendMessage}
                  className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                >
                  <span>Send</span>
                  <span className="ml-2">
                    <svg
                      className="w-4 h-4 transform rotate-45 -mt-px"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
