import { ChangeEvent } from 'react'

import Icon from './Icon'
import * as S from './styles'

type SwitchProps = {
  label: string
  isChecked: boolean
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Switch = ({ onInputChange, label, isChecked }: SwitchProps) => {
  return (
    <S.Wrapper>
      <input type="checkbox" checked={isChecked} onChange={onInputChange} />
      <Icon title="Set to Dark Mode" color="light" />
      {label}
    </S.Wrapper>
  )
}

export default Switch
