const translation = {
  title: 'Chat',
  sidebar: {
    discovery: 'Discovery',
    chat: 'Chat',
    workspace: 'Workspace',
    category: 'App Category',
  },
  category: {
    All: 'All Apps',
    Assistant: 'Assistant',
    Writing: 'Writing',
    Translate: 'Translate',
    Programming: 'Programming',
    HR: 'HR',
  },
  universalChat: {
    welcome: 'Start chat with CC-Bots',
    welcomeDescribe: 'Your AI conversation companion for personalized assistance',
    model: 'Model',
    plugins: {
      name: 'Plugins',
      google_search: {
        name: 'Google Search',
        more: {
          left: 'Enable the plugin, ',
          link: 'set up your SerpAPI key',
          right: ' first.',
        },
      },
      web_reader: {
        name: 'Web Reader',
        description: 'Get needed information from any web link',
      },
      wikipedia: {
        name: 'Wikipedia',
      },
    },
    thought: {
      show: 'Show',
      hide: 'Hide',
      processOfThought: ' the process of thinking',
      res: {
        webReader: {
          normal: 'Reading {url}',
          hasPageInfo: 'Reading next page of {url}',
        },
        google: 'Searching Google {{query}}',
        wikipedia: 'Searching Wikipedia {{query}}',
        dataset: 'Retrieving dataset {datasetName}',
        date: 'Searching date',
      },
    },
    viewConfigDetailTip: 'In conversation, cannot change above settings',
  },
}

export default translation
