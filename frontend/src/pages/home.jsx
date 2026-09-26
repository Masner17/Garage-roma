import Header from '../components/Header'
import Hero from '../components/Hero'
import ClubSection from '../components/ClubSection'
import EventSection from '../components/EventSection'
import TrackSection from '../components/TrackSection'
import RankingSection from '../components/RankingSection'
import ServicesSection from '../components/ServicesSection'
import GallerySection from '../components/GallerySection'
import Footer from '../components/Footer'

function Home(){
    return(
        <>
        <Header/>
        <Hero/>
        <ClubSection />
        <EventSection />
        <TrackSection />
        <div className="grid lg:grid-cols-2">
          <RankingSection />
          <ServicesSection />
        </div>
        <GallerySection />
        <Footer />
        </>
    )
}

export default Home
