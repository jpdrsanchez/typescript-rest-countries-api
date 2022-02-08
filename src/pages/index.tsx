import { DropdownItem } from 'components/Dropdown'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { getAll } from 'services/api'
import HomeTemplate, { Country, HomeTemplateProps } from 'templates/Home'

const Home = (props: HomeTemplateProps) => {
  return (
    <div className="fade">
      <Head>
        <title>Home | Where in the world?</title>
      </Head>
      <HomeTemplate {...props} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const regions: DropdownItem[] = [
    {
      id: 1,
      slug: 'africa',
      title: 'Africa'
    },
    {
      id: 2,
      slug: 'americas',
      title: 'America'
    },
    {
      id: 3,
      slug: 'asia',
      title: 'Asia'
    },
    {
      id: 4,
      slug: 'europe',
      title: 'Europe'
    },
    {
      id: 5,
      slug: 'oceania',
      title: 'Oceania'
    }
  ]

  let countries: Array<unknown>

  try {
    const { data }: { data: Country[] } = await getAll()
    countries = data
  } catch (error) {
    countries = []
  }

  return {
    props: {
      countries,
      regions
    },
    revalidate: 3600
  }
}

export default Home
