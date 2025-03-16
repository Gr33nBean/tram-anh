import { wait } from '@/util/util'
import { useEffect, useRef, useState } from 'react'
import Join from './join'
import Reject from './reject'
import { sendData } from '@/service'

const From = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<undefined | number>(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const param = new URLSearchParams(window.location.search)
  const name = param.get('name')
  const [data, setData] = useState<{
    name: string
    title: string
    content: string
  }>({
    name: name ?? '',
    title: '',
    content: '',
  })
  useEffect(() => {
    if (name) {
      setData({ ...data, name })
    }
  }, [name])
  return (
    <div className="flex w-full flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center">
          <p className="text-xl">Bạn sẽ đến dự chứ?</p>
          <p className="text-sm">(Chọn đáp án!)</p>
        </div>
        <ChooseOptions
          value={active}
          onChange={async (value) => {
            if (ref.current) {
              ref.current.dataset.expand = 'true'
              setActive(value)
              await wait(300)
              ref.current.scrollIntoView({ behavior: 'smooth' })
            } else {
              setActive(value)
            }
          }}
        />
      </div>

      <div
        data-expand={false}
        className="max-h-0 w-full overflow-hidden pt-8 transition-all duration-150 data-[expand=true]:max-h-[1200px]"
        ref={ref}
      >
        <div className="flex h-[calc(100dvh-4rem)] w-full flex-col rounded-xl border border-primary bg-[url('/src/assets/images/mobile.png')] bg-cover bg-bottom bg-no-repeat p-4 md:bg-[url('/src/assets/images/bg.jpg')]">
          <div className="flex w-full flex-1 flex-col overflow-hidden rounded-[10px] bg-white/50 backdrop-blur-sm">
            {active == 1 && <Join />}
            {active == 2 && <Reject {...data} onChange={setData} />}
          </div>

          {active == 2 && (
            <div
              data-disabled={Object.values(data).some((item) => !item)}
              className="flex max-h-[60px] w-full items-center justify-center gap-2 overflow-hidden transition-all duration-300 data-[disabled=true]:max-h-0"
            >
              <button
                data-loading={isLoading}
                disabled={Object.values(data).some((item) => !item) || isLoading}
                className="group relative mt-4 rounded-[10px] bg-primary p-2 text-white shadow-lg disabled:opacity-60"
                onClick={async () => {
                  setIsLoading(true)
                  const res = await sendData({ name: data.name, title: data.title, content: data.content })
                  setIsLoading(false)
                  if (res) {
                    setData({ name: name ?? '', title: '', content: '' })
                    alert('Nhận được rùi nha!')
                  } else {
                    alert('Lỗi rồi bà ơi. Inbox tui đi.')
                  }
                }}
              >
                {isLoading && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="aspect-square w-[20%] animate-spin rounded-full border-y-2 border-white"></span>
                  </span>
                )}

                <span className="relative group-data-[loading=true]:opacity-0">Gửi luôn</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default From

function ChooseOptions({ value, onChange }: { value?: number; onChange: (value: number) => void }) {
  return (
    <div className=" overflow-hidden rounded-[16px] border border-primary bg-background bg-white/30 py-2 shadow-xl">
      <div className="relative flex items-center [&>div]:w-[100px]">
        <div
          data-hide={value == undefined}
          data-left={value == 1}
          className="absolute -top-2 left-0 h-[calc(100%+1rem)] translate-x-0 bg-primary opacity-100 transition-all duration-300 data-[hide=true]:!-translate-x-full data-[left=false]:translate-x-full data-[hide=true]:opacity-0"
        ></div>
        {[
          { title: 'Đi chứ', value: 1 },
          { title: 'Tiếc quá', value: 2 },
        ].map((item) => {
          const isActive = item.value === value
          return (
            <div
              key={item.value}
              data-active={isActive}
              className={`relative flex cursor-pointer justify-center border-primary px-4 ${
                value == undefined ? 'last:border-l' : ''
              } data-[active=true]:text-white `}
              onClick={() => onChange(item.value)}
            >
              {item.title}
            </div>
          )
        })}
      </div>
    </div>
  )
}
