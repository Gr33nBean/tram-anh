const Reject = ({
  ...props
}: {
  name: string
  title: string
  content: string
  onChange: (value: { name: string; title: string; content: string }) => void
}) => {
  return (
    <div className="flex size-full flex-col gap-2">
      <div className="flex w-full items-center justify-center p-4 pb-2">
        <p>Kể tui nghe đi</p>
      </div>
      <Label label="Bạn là?">
        <input
          value={props.name}
          onChange={(e) => {
            props.onChange({ ...props, name: e.target.value })
          }}
          placeholder="Là ai vậy ta?"
          className="rounded-md bg-transparent px-4 py-2 text-black outline-none"
        />
      </Label>

      <Label label="Tiêu đề">
        <input
          value={props.title}
          onChange={(e) => {
            props.onChange({ ...props, title: e.target.value })
          }}
          placeholder="Bạn muốn nhắn nhủ gì?"
          className="rounded-md bg-transparent px-4 py-2 text-black outline-none"
        />
      </Label>

      <Label label="Nội dung" className="flex-1">
        <div className="w-full flex-1 p-4 pt-0">
          <textarea
            value={props.content}
            onChange={(e) => {
              props.onChange({ ...props, content: e.target.value })
            }}
            placeholder="Nhắn nhủ dài dài đi tui đọc hết!"
            className="size-full rounded-md bg-transparent outline-none"
          />
        </div>
      </Label>
    </div>
  )
}

export default Reject

function Label({
  label,
  ...props
}: React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> & { label: string }) {
  return (
    <label {...props} className={`flex w-full flex-col gap-1 ${props.className}`}>
      <p className="w-full bg-primary px-2 py-1 text-white shadow-lg">
        {label}
        <span className="text-red-500">*</span>
      </p>
      {props.children}
    </label>
  )
}
