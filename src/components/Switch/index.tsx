import Icon from './Icon'
import * as S from './styles'

const Switch = () => {
  return (
    <S.Wrapper>
      <input type="checkbox" />
      <Icon color="light" />
      Dark Mode
    </S.Wrapper>
  )
}

export default Switch
