'use client'
import type { FC } from 'react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Button from '@/app/components/base/button'

export type IModalFootProps = {
  onRename: () => void
  onCancel: () => void
}

const ModalFoot: FC<IModalFootProps> = ({
  onRename,
  onCancel,
}) => {
  const { t } = useTranslation()
  return (
    <div className='flex justify-end gap-2'>
      <Button onClick={onCancel}>{t('common.operation.cancel')}</Button>
      <Button type='primary' onClick={onRename}>{t('common.operation.save')}</Button>
    </div>
  )
}
export default React.memo(ModalFoot)
