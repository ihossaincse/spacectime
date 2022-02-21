import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

const Layout = ({children}) => {
    return (
    <div>
      <Head>
        <title>Spacectime</title>
        <meta name="description" content="Spacectime" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Header />
        <main className="main">
          {children}
        </main>
        <Footer />
      </div>
    </div>
    )
}

export default Layout
