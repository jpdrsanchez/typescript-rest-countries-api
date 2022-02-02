import { MouseEvent } from 'react'

import Icon from './Icon'
import * as S from './styles'

type SwitchProps = {
  label: string
  value: string
  onInputChange: <T extends unknown[]>(...args: T) => void
}

const Switch = ({ onInputChange, label, value }: SwitchProps) => {
  const handleChange = (e: MouseEvent) => {
    e.preventDefault()
    onInputChange()
  }

  return (
    <S.Wrapper onClick={handleChange}>
      <input
        type="checkbox"
        value={value}
        checked={value === 'dark'}
        onChange={() => {
          return
        }}
      />
      <Icon title="Switch Color Mode" />
      {label}
    </S.Wrapper>
  )
}

export default Switch
