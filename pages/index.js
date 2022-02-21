import ExploreSection from '../components/ExploreSection'
import InfoBox from '../components/InfoBox'
import Layout from '../components/Layout'
import MapBox from '../components/MapBox'

export default function Home() {
  return (
    <Layout>
      <InfoBox />
      <div className="container">
        <div className="outer">
          <MapBox lat={39.0294891} long={-112.0635889} />
        </div>
      </div>
      <ExploreSection />
    </Layout>
  )
}
