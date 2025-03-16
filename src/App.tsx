import { useRef } from 'react'
import { wait } from './util/util'
import Card from './components/card'
import TimeCount from './components/time-count'
import From from './components/form'

const App = () => {
  const param = new URLSearchParams(window.location.search)
  const name = param.get('name') ?? 'bạn'

  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} data-scroll={false} className="size-full  bg-background data-[scroll=true]:overflow-auto">
      <div className="flex h-[100dvh] w-full items-center justify-center bg-[url('/src/assets/images/mobile.png')] bg-cover bg-bottom bg-no-repeat md:bg-[url('/src/assets/images/bg.jpg')]">
        <div className="flex w-full flex-col items-center gap-4 px-8 md:w-[60%] lg:w-[50%]">
          <p className="text-center font-greatVibes text-5xl font-medium text-primary md:text-6xl  lg:text-7xl">
            Happy graduation
          </p>
          <p className="text-center font-normal text-black md:text-xl">Đến Huỳnh Trâm Anh tại</p>
          <p className="text-center text-lg font-extrabold text-primary md:text-xl">
            University of Economics <br></br> Ho Chi Minh City
          </p>
          <p className="text-center font-medium text-black md:text-xl">
            "Muốn làm công chúa nhưng cuộc đời bắt làm công ăn lương."
          </p>

          <div className="w-full pt-4">
            <div className="flex w-full flex-col items-center gap-2 rounded-[20px] border border-primary bg-white/30 p-8 text-sm backdrop-blur-sm">
              <p className="w-full">
                <span className="font-bold capitalize">{name}</span> thân yêu,
              </p>
              <p className="w-full">
                Trâm Anh hân hạnh mời bạn tham dự buổi lễ tốt nghiệp, đánh dấu chuỗi ngày làm công ăn lương của Trâm
                Anh.
              </p>
              <p className="w-full">Trâm Anh hi vọng có thể gặp mặt bạn để chia sẻ khoảng khắc đáng nhớ này!</p>
              <p className="w-full">Thương yêu,</p>
              <p className="w-full">Trâm Anh,</p>
            </div>
          </div>
          <div className="pt-2">
            <button
              className="rounded-lg bg-primary px-2 py-1 pb-1.5 text-white"
              onClick={async () => {
                if (!containerRef.current) return
                const secondChild = containerRef.current.children[1]
                if (!secondChild) return
                containerRef.current.dataset.scroll = 'true'
                await wait(200)
                secondChild.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Mở thiệp mời!
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <div className="flex flex-col items-center gap-12 px-8 py-16 md:w-[60%] lg:w-[50%]">
          {/*  */}
          <div className="flex w-full flex-col items-center gap-8">
            <p className="w-full text-center">
              Trân trọng mời, <span className="font-bold">"{name}"</span> tham dự buổi lễ tốt nghiệp của Trâm Anh
            </p>
            <div className="flex w-full flex-col gap-6">
              {[
                {
                  title: 'Lễ tốt nghiệp',
                  date: '19 Tháng 03 2025',
                  time: '15:30 - 17:15',
                  location: 'Cơ sở A UEH, 59C Nguyễn Đình Chiểu, Phường 6, Quận 3, Hồ Chí Minh, Việt Nam',
                },
              ].map((item, index) => (
                <Card {...item} key={index} />
              ))}
            </div>
          </div>

          {/*  */}
          <Divider />

          {/*  */}
          <div className="w-full">
            <TimeCount />
          </div>

          {/*  */}
          <Divider />

          {/*  */}
          <From />

          {/*  */}
          <Divider />

          {/*  */}
          <div className="w-full text-center">
            Copyright 2025{' '}
            <a href="https://www.facebook.com/htanhh123" target="_blank" className="inline-block underline">
              @TrâmAnh
            </a>
            <br></br>
            <span className="inline-block text-sm">All Rights Reserved</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

function Divider() {
  return <div className="h-[1px] w-[60%] bg-primary"></div>
}
