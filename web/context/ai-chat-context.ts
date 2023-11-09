import { createContext } from 'use-context-selector'
import type { App, AppCategoryDetail, InstalledApp } from '@/models/ai-chat'

type AIChatContextValue = {
  controlUpdateInstalledApps: number
  setControlUpdateInstalledApps: (controlUpdateInstalledApps: number) => void
  installedApps: InstalledApp[]
  setInstalledApps: (installedApps: InstalledApp[]) => void
  categoryDetails: AppCategoryDetail[]
  setCategoryDetails: (category: AppCategoryDetail[]) => void
  apps: App[]
  setApps: (apps: App[]) => void
}

const AIChatContext = createContext<AIChatContextValue>({
  controlUpdateInstalledApps: 0,
  setControlUpdateInstalledApps: () => { },
  installedApps: [],
  setInstalledApps: () => { },
  categoryDetails: [],
  setCategoryDetails: () => { },
  apps: [],
  setApps: () => { },
})

export default AIChatContext
