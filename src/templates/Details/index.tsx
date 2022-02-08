import Heading from 'components/common/Heading'
import List from 'components/List'
import Link from 'next/link'
import { Countrie } from 'templates/Home'
import { formatNumber } from 'utils'
import Icon from './Icon'
import * as S from './styles'

export type DetailsTemplateProps = {
  countrie: Countrie
  borders: Countrie[]
}

const DetailsTemplate = (props: DetailsTemplateProps) => {
  const { countrie, borders } = props
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
            <img src={countrie.flags.svg} alt={`Flag Of ${countrie.name}`} />
          </S.Flag>
          <S.Informations>
            <Heading
              level={1}
              size={{ mobile: 22, desktop: 32 }}
              lineHeight={{ mobile: 30, desktop: 44 }}
              weight={800}
            >
              {countrie.name}
            </Heading>
            <S.Lists>
              <List
                nativeName={countrie.nativeName}
                population={formatNumber(countrie.population)}
                region={countrie.region}
                subregion={countrie.subregion}
                capital={countrie.capital}
              />
              <List
                topLevelDomain={countrie.topLevelDomain.join(', ')}
                currencies={countrie.currencies
                  .map(currencie => currencie.name)
                  .join(', ')}
                languages={countrie.languages
                  .map(language => language.name)
                  .join(', ')}
              />
            </S.Lists>
            <S.Borders>
              <h3>Border Countries:</h3>
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
            </S.Borders>
          </S.Informations>
        </S.Main>
      </S.WrapperContainer>
    </S.Wrapper>
  )
}

export default DetailsTemplate
