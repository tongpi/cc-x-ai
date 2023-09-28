import Link from 'next/link'
import style from './index.module.css'
import IntroduceItems from './introduce-items'

const AppHome = () => {
  const introduceList = [
    {
      title: '畅所欲言',
      icon: 'csyy',
      describe: '以你喜欢的方式方式进行提问。话题没有限制，你可以畅所欲言。AI问答创作平台会一步步了解你想要的，并给出你意想不到的答案。',
    },
    {
      title: '精准反馈',
      icon: 'jzfk',
      describe: '直接反馈答案。不是提供大量类似搜索结果，AI问答创作平台会结合你的多次提问给出最贴合问题的具体答案。',
    },
    {
      title: '提供灵感',
      icon: 'tglg',
      describe: '提供灵感。根据你的提问AI问答创作平台将竭尽所能地为你提供一个思路或者一个计划草稿，你可以在此基础上进行完善。我也将会根据你的反馈不断完善我自己，让我们一起携手共进。',
    },
  ]
  return (
    <div className={style.home}>
      <div className="p-[20px] text-center">
        <p className="text-center mt-[3.75rem] flex justify-center">
          <b className={style.title_bg}>AI&nbsp;</b>
          <b className="text-color-[#333333] text-[46px] leading-[1]" >问答创作平台</b></p>
        <p className="text-[18px] text-center w-[50rem] mt-[2.5rem] inline-block">
          <span className="text-color-[#32354e] h-[36px] leading-[36px]" >用AI问答模型可以进行AI对话、AI创作，内置智能对话机器人、图片设计、文案生成、方案创作、营销内容创作等数十项功能，并且包含海量提示词和AI模型库</span>
        </p>
        <Link href='/' className={style.start_button}>
          <b>开始 AI 对话 </b>
        </Link>
      </div>
      <IntroduceItems introduceList={introduceList} />
    </div>
  )
}

export default AppHome
