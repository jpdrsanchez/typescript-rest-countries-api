import Heading from 'components/common/Heading'
import List from 'components/List'
import Link from 'next/link'
import { Country } from 'templates/Home'
import { formatNumber } from 'utils'
import Icon from './Icon'
import * as S from './styles'

export type DetailsTemplateProps = {
  country: Country
  borders: Country[]
}

const DetailsTemplate = (props: DetailsTemplateProps) => {
  const { country, borders } = props
  return (
    <S.Wrapper>
      <S.WrapperContainer>
        <Link href="/" passHref>
          <S.Back>
            <Icon title="Arrow Back Icon" />
            Back
          </S.Back>
        </Link>
        <S.Main>
          <S.Flag>
            <img src={country.flags.svg} alt={`Flag Of ${country.name}`} />
          </S.Flag>
          <S.Informations>
            <Heading
              level={1}
              size={{ mobile: 22, desktop: 32 }}
              lineHeight={{ mobile: 30, desktop: 44 }}
              weight={800}
            >
              {country.name}
            </Heading>
            <S.Lists>
              <List
                nativeName={country.nativeName}
                population={
                  country.population ? formatNumber(country.population) : '-'
                }
                region={country.region || '-'}
                subregion={country.subregion || '-'}
                capital={country.capital || '-'}
              />
              <List
                topLevelDomain={
                  country.topLevelDomain.length
                    ? country.topLevelDomain.join(', ')
                    : '-'
                }
                currencies={
                  country.currencies.length
                    ? country.currencies
                        .map(currencie => currencie.name)
                        .join(', ')
                    : '-'
                }
                languages={
                  country.languages.length
                    ? country.languages
                        .map(language => language.name)
                        .join(', ')
                    : '-'
                }
              />
            </S.Lists>
            <S.Borders>
              <h3>Border Countries:</h3>
              {borders.length ? (
                <ul>
                  {borders.map(border => (
                    <li key={border.alpha3Code}>
                      <Link
                        href={`/details/${border.alpha3Code.toLocaleLowerCase()}`}
                      >
                        {border.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                '-'
              )}
            </S.Borders>
          </S.Informations>
        </S.Main>
      </S.WrapperContainer>
    </S.Wrapper>
  )
}

export default DetailsTemplate
