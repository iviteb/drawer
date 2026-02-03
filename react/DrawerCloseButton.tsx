import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { IconClose } from 'vtex.store-icons'
import { defineMessages, useIntl } from 'react-intl'

import { useDrawer } from './DrawerContext'

const CSS_HANDLES = ['closeButton', 'closeButtonLabel'] as const

const messages = defineMessages({
  closeButtonLabel: {
    id: 'store/drawer.close-button.label',
  },
})

interface Props {
  size?: number
  type?: 'filled' | 'line'
  text?: string
  showIcon?: boolean
  showText?: boolean
}

const DrawerCloseButton: React.FC<Props> = ({
  size = 20,
  type = 'line',
  text,
  showIcon = true,
  showText = false,
}) => {
  const { close } = useDrawer()
  const { formatMessage } = useIntl()

  const { handles } = useCssHandles(CSS_HANDLES)

  return (
    <button
      className={`${handles.closeButton} pa4 flex items-center bg-transparent transparent bn pointer`}
      onClick={close}
    >
      {showIcon && <IconClose size={size} type={type} />}
      {showText && (
        <span
          className={`${handles.closeButtonLabel} ${showIcon ? 'ml3' : ''}`}
        >
          {text ?? formatMessage(messages.closeButtonLabel)}
        </span>
      )}
    </button>
  )
}

export default DrawerCloseButton
