import { Country } from 'templates/Home'
import { capitalize } from 'utils'
import * as S from './styles'

type ListProps = {
  [Property in keyof Country]?: string | number
}

const List = (props: ListProps) => {
  return (
    <S.List>
      {Object.entries(props).map((entry, index) => (
        <li key={index}>
          <span>{capitalize(entry[0].replace(/([A-Z]+)/g, ' $1'))}: </span>
          {entry[1]}
        </li>
      ))}
    </S.List>
  )
}

export default List
