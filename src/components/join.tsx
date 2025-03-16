const Join = () => {
  return (
    <div className="flex size-full flex-col gap-3 text-xl">
      <div className="flex w-full items-center justify-between gap-1 p-4 pb-0">
        <p>Liên hệ tui:</p>
        <a href="tel:0939921278" className="underline">
          0939 921 278
        </a>
      </div>
      <div className="flex w-full flex-col gap-1.5">
        <p className="w-full bg-primary py-1 text-center text-white shadow-lg ">Gửi xe</p>

        <div className="flex w-full flex-col gap-1.5 p-4 pt-0">
          {[
            'Nhà giữ xe gần Hồ Con Rùa',
            'Đối diện cổng Nguyễn Đình Chiểu Cơ sở A - UEH',
            'Nhà Văn Hóa Thanh Niên',
            'Coopmart Nguyễn Đình Chiểu',
          ].map((item, index) => (
            <div key={index} className="flex w-full items-start gap-2">
              <span>{index + 1}.</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1468.0519360470214!2d106.69404733335064!3d10.782832712005135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f36c74caa99%3A0x743c446a2eef20a5!2zxJDhuqFpIGjhu41jIEtpbmggdOG6vyBUUC5IQ00gKFVFSCkgLSBDxqEgc-G7nyBB!5e0!3m2!1svi!2s!4v1742120639035!5m2!1svi!2s"
          className="size-full border-none"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}

export default Join
