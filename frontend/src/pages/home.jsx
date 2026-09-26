import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ClubSection from '../components/ClubSection'
import EventSection from '../components/EventSection'
import TrackSection from '../components/TrackSection'
import RankingSection from '../components/RankingSection'
import ServicesSection from '../components/ServicesSection'
import GallerySection from '../components/GallerySection'
import Footer from '../components/Footer'
import tracks from '../data/tracks'
import rankingServicesBackground from '../assets/backgroundServiceRank.png'

const TRACK_CHANGE_INTERVAL = 6000

function Home(){
    const [activeTrackIndex, setActiveTrackIndex] = useState(0)

    useEffect(() => {
      const timeoutId = window.setTimeout(() => {
        setActiveTrackIndex((currentIndex) => (currentIndex + 1) % tracks.length)
      }, TRACK_CHANGE_INTERVAL)

      return () => window.clearTimeout(timeoutId)
    }, [activeTrackIndex])

    const activeTrack = tracks[activeTrackIndex]

    return(
        <>
        <Header/>
        <Hero/>
        <ClubSection />
        <EventSection />
        <TrackSection
          tracks={tracks}
          activeTrackIndex={activeTrackIndex}
          onSelectTrack={setActiveTrackIndex}
        />
        <div
          className="relative grid overflow-hidden bg-[#0c171d] bg-cover bg-center lg:grid-cols-2"
          style={{ backgroundImage: `url(${rankingServicesBackground})` }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[#071117]/25" aria-hidden="true" />
          <RankingSection activeTrack={activeTrack} />
          <ServicesSection />
        </div>
        <GallerySection />
        <Footer />
        </>
    )
}

export default Home
