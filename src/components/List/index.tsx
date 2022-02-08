import { Countrie } from 'templates/Home'
import { capitalize } from 'utils'
import * as S from './styles'

type ListProps = {
  [Property in keyof Countrie]?: string | number
}

const List = (props: ListProps) => {
  return (
    <S.List>
      {Object.entries(props).map((entrie, index) => (
        <li key={index}>
          <span>{capitalize(entrie[0].replace(/([A-Z]+)/g, ' $1'))}: </span>
          {entrie[1]}
        </li>
      ))}
    </S.List>
  )
}

export default List
