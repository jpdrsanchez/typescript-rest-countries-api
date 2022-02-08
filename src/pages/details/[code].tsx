import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { getAll, getByCode, getSomeByCode } from 'services/api'
import DetailsTemplate, { DetailsTemplateProps } from 'templates/Details'
import { Countrie } from 'templates/Home'
import LoadingTemplate from 'templates/Loading'

type DetailsParams = {
  code: string
} & ParsedUrlQuery

const Details = (props: DetailsTemplateProps) => {
  const { isFallback } = useRouter()
  if (isFallback) return <LoadingTemplate />
  return <DetailsTemplate {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data }: { data: Countrie[] } = await getAll()

  const paths = data.map(countrie => ({
    params: { code: countrie.alpha3Code }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async context => {
  try {
    const { code } = context.params as DetailsParams
    const { data: countrie } = await getByCode(code)

    const borders = await getSomeByCode(countrie.borders)

    if (countrie.status >= 400) throw new Error()

    return {
      props: {
        countrie,
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
