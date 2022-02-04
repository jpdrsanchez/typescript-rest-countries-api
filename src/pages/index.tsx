import { DropdownItem } from 'components/Dropdown'
import { GetStaticProps } from 'next'
import { getAll } from 'services/api'
import HomeTemplate, { HomeTemplateProps } from 'templates/Home'

const Home = (props: HomeTemplateProps) => {
  return (
    <>
      <HomeTemplate {...props} />
    </>
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

  let countries
  try {
    const { data } = await getAll()
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
