const translation = {
  title: '聊天',
  sidebar: {
    discovery: '发现',
    chat: '智聊',
    workspace: '工作区',
    category: '应用分类',
    myApp: '我的应用',
    createApp: '创建应用',
  },
  category: {
    All: '全部应用',
    Assistant: '助手',
    Writing: '写作',
    Translate: '翻译',
    Programming: '编程',
    HR: '人力资源',
  },
  universalChat: {
    welcome: '开始和 CC-Bots 聊天吧',
    welcomeDescribe: '您的 AI 对话伴侣，为您提供个性化的帮助',
    model: '模型',
    plugins: {
      name: '插件',
      google_search: {
        name: '谷歌搜索',
        more: {
          left: '启用插件，首先',
          link: '设置您的 SerpAPI 密钥',
          right: '',
        },
      },
      web_reader: {
        name: '解析链接',
        description: '从任何网页链接获取所需信息',
      },
      wikipedia: {
        name: '维基百科',
      },
    },
    thought: {
      show: '显示',
      hide: '隐藏',
      processOfThought: '思考过程',
      res: {
        webReader: {
          normal: '解析链接 {url}',
          hasPageInfo: '解析链接 {url} 的下一页',
        },
        google: '搜索谷歌 {{query}}',
        wikipedia: '搜索维基百科 {{query}}',
        dataset: '检索数据集 {datasetName}',
        date: '查询日期',
      },
    },
    viewConfigDetailTip: '在对话中，无法更改上述设置',
  },
}

export default translation
