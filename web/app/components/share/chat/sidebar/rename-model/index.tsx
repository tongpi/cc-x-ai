'use client'
import type { FC } from 'react'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ModalFoot from './modal-foot'
import s from './style.module.css'
import Modal from '@/app/components/base/modal'

import Input from '@/app/components/base/input'

export type IRenameModalProps = {
  oldName?: string
  isShow: boolean
  onClose: () => void
  onRename: (newName: string) => void
}

const RenameModal: FC<IRenameModalProps> = ({
  oldName,
  isShow,
  onClose,
  onRename,
}) => {
  const { t } = useTranslation()

  const [newName, setNewName] = useState(oldName)

  return (
    <Modal
      title="重命名"
      isShow={isShow}
      onClose={onClose}
    >
      <div className='mb-8'>
        <div className='mb-2'>
          <div className={s.title}>{oldName}</div>
          <div className='flex space-x-2'>
            <Input type='string' placeholder='至少2个字' value={newName} onChange={setNewName} />
          </div>
        </div>
      </div>
      <ModalFoot
        onRename={() => onRename(newName || '')}
        onCancel={onClose}
      />
    </Modal>
  )
}
export default React.memo(RenameModal)
