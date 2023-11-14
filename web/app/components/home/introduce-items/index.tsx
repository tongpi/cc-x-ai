import style from '../index.module.css'

type Introduce = {
  title: string
  icon: string
  describe: string
}

type IntroduceItemsProps = {
  introduceList: Introduce[]
}

const IntroduceItems = ({
  introduceList = [],
}: IntroduceItemsProps) => {
  return (
    <div className="flex justify-center mx-auto mt-10">
      {introduceList.map((item, index) => (
        <div key={index} className={style.introduce}>
          <div className={style.introduce_head}>
            <div className={`${style.icon} ${style[item.icon]}`}></div>
            <p className={style.introduce_title}>{item.title}</p>
          </div>
          <div className={style.introduce_line}></div>
          <div className='text-[14px] leading-[30px] color-[#6a6a6a] mt-[15px]'>{item.describe}</div>
        </div>
      ))}
    </div>
  )
}

export default IntroduceItems
