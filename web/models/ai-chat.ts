export type { AppBasicInfo, App, InstalledApp } from './explore'

export type AppCategory = 'All' | 'Writing' | 'Translate' | 'HR' | 'Programming' | 'Assistant'

export type AppCategoryDetail = {
  key: AppCategory
  name: String
}
