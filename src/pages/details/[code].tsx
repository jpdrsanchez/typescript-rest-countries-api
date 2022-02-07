import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { getAll, getByCode } from 'services/api'
import { Countrie } from 'templates/Home'

type DetailsParams = {
  code: string
} & ParsedUrlQuery

type DetailsProps = {
  countrie: Countrie
}

const Details = (props: DetailsProps) => {
  const { isFallback } = useRouter()
  if (isFallback) return <div>Carregando...</div>
  return <div>{props.countrie.name}</div>
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

    if (countrie.status === 404) throw new Error()

    return {
      props: {
        countrie
      }
    }
  } catch {
    return {
      notFound: true
    }
  }
}

export default Details
