import { CalendarIcon, LocationIcon, TimeIcon } from '@/assets/icons'

const Card = ({ ...props }: { title: string; date: string; time: string; location: string }) => {
  return (
    <div
      className="flex w-full rounded-xl bg-white p-4 max-md:flex-col max-md:gap-2 md:items-center"
      style={{
        boxShadow: '0 4px 8px 0 var(--primary) ',
      }}
    >
      <p className="pr-2 text-2xl font-bold text-primary">{props.title}</p>
      <div className="h-[1px] bg-primary max-md:w-full md:flex-1"></div>
      <div className="flex flex-col gap-2 rounded-[10px] bg-primary/90 p-4 text-white md:w-[60%]">
        <div className="flex items-start gap-2">
          <div className="pt-1.5">
            <CalendarIcon />
          </div>
          <p className="flex-1">{props.date}</p>
        </div>
        <div className="flex items-start gap-2">
          <div className="pt-1.5">
            <TimeIcon />
          </div>
          <p className="flex-1">{props.time}</p>
        </div>

        <div className="flex items-start gap-2">
          <div className="pt-1.5">
            <LocationIcon />
          </div>
          <a className="flex-1 underline" target="_blank" href="https://maps.app.goo.gl/hra57jzxmaeDBCt36">
            {props.location}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
