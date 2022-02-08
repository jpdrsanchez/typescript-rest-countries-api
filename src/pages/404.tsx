import Head from 'next/head'
import ErrorTemplate from 'templates/Error'

const Custom404 = () => {
  return (
    <div className="fade">
      <Head>
        <title>Page not found | Where in the world?</title>
      </Head>
      <ErrorTemplate />
    </div>
  )
}

export default Custom404
