import Heading from 'components/common/Heading'
import Link from 'next/link'
import { Country } from 'templates/Home'
import { formatNumber } from 'utils'
import * as S from './styles'

const Card = (props: Country) => {
  const {
    capital,
    flags: { svg },
    name,
    population,
    region
  } = props

  return (
    <Link href={`/details/${props.alpha3Code.toLocaleLowerCase()}`} passHref>
      <S.Card>
        <article>
          <img src={svg} alt={`Flag of ${name}`} />
          <div>
            <Heading
              level={1}
              lineHeight={{ mobile: 26, desktop: 26 }}
              size={{ mobile: 18, desktop: 18 }}
              weight={800}
            >
              {name}
            </Heading>
            <ul>
              <li>
                <span>Population: </span>
                {formatNumber(population)}
              </li>
              <li>
                <span>Region: </span>
                {region ?? '-'}
              </li>
              <li>
                <span>Capital: </span>
                {capital ?? '-'}
              </li>
            </ul>
          </div>
        </article>
      </S.Card>
    </Link>
  )
}

export default Card
