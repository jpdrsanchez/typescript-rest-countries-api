import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { getAll, getByCode, getSomeByCode } from 'services/api'
import DetailsTemplate, { DetailsTemplateProps } from 'templates/Details'
import { Country } from 'templates/Home'
import LoadingTemplate from 'templates/Loading'

type DetailsParams = {
  code: string
} & ParsedUrlQuery

const Details = (props: DetailsTemplateProps) => {
  const { isFallback } = useRouter()
  if (isFallback)
    return (
      <div className="fade">
        <Head>
          <title>Loading... | Where in the world?</title>
        </Head>
        <LoadingTemplate />
      </div>
    )
  return (
    <div className="fade">
      <Head>
        <title>{props.country.name} | Where in the world?</title>
      </Head>
      <DetailsTemplate {...props} />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data }: { data: Country[] } = await getAll()

  const paths = data.map(country => ({
    params: { code: country.alpha3Code }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async context => {
  try {
    const { code } = context.params as DetailsParams
    const { data: country } = await getByCode(code)

    const borders = country.borders ? await getSomeByCode(country.borders) : []

    if (country.status >= 400) throw new Error()

    return {
      props: {
        country: { topLevelDomain: [], currencies: [], ...country },
        borders
      }
    }
  } catch {
    return {
      notFound: true
    }
  }
}

export default Details
