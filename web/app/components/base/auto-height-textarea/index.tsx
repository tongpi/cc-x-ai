import { forwardRef, useEffect, useRef } from 'react'
import cn from 'classnames'

type IProps = {
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  className?: string
  wrapperClassName?: string
  minHeight?: number
  maxHeight?: number
  autoFocus?: boolean
  controlFocus?: number
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void
  onKeyUp?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void
}

const AutoHeightTextarea = forwardRef(
  (
    { value, onChange, placeholder, className, wrapperClassName, minHeight = 36, maxHeight = 96, autoFocus, controlFocus, onKeyDown, onKeyUp }: IProps,
    outerRef: any,
  ) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = outerRef || useRef<HTMLTextAreaElement>(null)

    const doFocus = () => {
      if (ref.current) {
        // console.log('focus')
        ref.current.setSelectionRange(value.length, value.length)
        ref.current.focus()
        return true
      }
      // console.log(autoFocus, 'not focus')
      return false
    }

    const focus = () => {
      if (!doFocus()) {
        let hasFocus = false
        const runId = setInterval(() => {
          hasFocus = doFocus()
          if (hasFocus)
            clearInterval(runId)
        }, 100)
      }
    }

    useEffect(() => {
      if (autoFocus)
        focus()
    }, [])
    useEffect(() => {
      if (controlFocus)
        focus()
    }, [controlFocus])

    return (
      <div className={`relative ${wrapperClassName}`}>
        <div className={cn(className, 'invisible whitespace-pre-wrap break-all  overflow-y-auto')} style={{
          minHeight,
          maxHeight,
          paddingRight: (value && value.trim().length > 10000) ? 140 : 130,
        }}>
          {!value ? placeholder : value.replace(/\n$/, '\n ')}
        </div>
        <textarea
          ref={ref}
          autoFocus={autoFocus}
          className={cn(className, 'absolute inset-0 resize-none overflow-auto border-primary-600')}
          style={{
            paddingRight: (value && value.trim().length > 10000) ? 140 : 130,
          }}
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          value={value}
        />
      </div>
    )
  },
)
AutoHeightTextarea.displayName = 'AutoHeightTextarea'

AutoHeightTextarea.displayName = 'AutoHeightTextarea'

export default AutoHeightTextarea
