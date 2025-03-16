import { useEffect, useState } from 'react'

const targetDate = new Date('2025-03-19T15:30:00')

const TimeCount = () => {
  const [remain, setRemain] = useState({
    total: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  useEffect(() => {
    const getTimeRemaining = () => {
      const total = Date.parse(targetDate.toString()) - Date.parse(new Date().toString())
      const seconds = Math.floor((total / 1000) % 60)
      const minutes = Math.floor((total / 1000 / 60) % 60)
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
      const days = Math.floor(total / (1000 * 60 * 60 * 24))
      return {
        total,
        days,
        hours,
        minutes,
        seconds,
      }
    }
    const interval = setInterval(() => {
      setRemain(getTimeRemaining())
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  return (
    <div className="flex w-full items-center justify-center gap-8 max-md:flex-col">
      <p className="md:flex-1 ">
        {remain.days > 1
          ? 'Còn mấy ngày nữa nữa là tới rồi đó bà'
          : remain.days == 1
            ? 'Mai là tới rồi đó bà'
            : 'Bửa nay diễn ra nè bà'}
      </p>
      <div className="flex items-center justify-center gap-3 max-md:w-full md:w-[60%]">
        {[remain.days, remain.hours, remain.minutes, remain.seconds].map((item, index) => (
          <div key={index} className="flex flex-1 translate-x-[12px] items-center [&_.divider]:last:opacity-0">
            <div className="flex w-full flex-col items-center justify-center gap-1 rounded-[10px] bg-primary p-2 text-4xl text-white max-md:aspect-square">
              {item.toString().padStart(2, '0')}
              <p className="text-sm">{['Ngày', 'Giờ', 'Phút', 'Giây'][index]}</p>
            </div>
            <div className="divider pl-3">:</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TimeCount
