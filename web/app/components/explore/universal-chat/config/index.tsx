'use client'
import type { FC } from 'react'
import React from 'react'
import ModelConfig from './model-config'
import DataConfig from './data-config'
// import PluginConfig from './plugins-config'
import type { ProviderEnum } from '@/app/components/header/account-setting/model-page/declarations'
import type { DataSet } from '@/models/datasets'
import { useAppContext } from '@/context/app-context'

export type IConfigProps = {
  className?: string
  readonly?: boolean
  modelId: string
  providerName: ProviderEnum
  onModelChange?: (modelId: string, providerName: ProviderEnum) => void
  plugins: Record<string, boolean>
  onPluginChange?: (key: string, value: boolean) => void
  dataSets: DataSet[]
  onDataSetsChange?: (contexts: DataSet[]) => void
}

const Config: FC<IConfigProps> = ({
  className,
  readonly,
  modelId,
  providerName,
  onModelChange,
  // plugins,
  // onPluginChange,
  dataSets,
  onDataSetsChange,
}) => {
  const { isCurrentWorkspaceManager } = useAppContext()
  return (
    <div className={className}>
      <ModelConfig
        readonly={readonly}
        modelId={modelId}
        providerName={providerName}
        onChange={onModelChange}
      />
      {/* [Hekaiji 2023-10-16]: 屏蔽智聊组件中的 "插件" 功能, 为数据集增加权限控制(仅空间管理员可查看) */}
      {/* <PluginConfig
        readonly={readonly}
        config={plugins}
        onChange={onPluginChange}
      /> */}
      {isCurrentWorkspaceManager && (!readonly || (readonly && dataSets.length > 0)) && (
        <DataConfig
          readonly={readonly}
          dataSets={dataSets}
          onChange={onDataSetsChange}
        />
      )}
    </div>
  )
}
export default React.memo(Config)
