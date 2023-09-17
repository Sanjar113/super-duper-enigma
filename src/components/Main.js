import React from 'react'
import { Cards } from './Cards'
import { Route, Routes } from 'react-router-dom'
import { About } from './About'
import { Gallery } from './Gallery'
import { Where } from './Where'
import { Tours } from './Tours'
import { Hotels } from './Hotels'
import { Map } from './Map'
import { Flight } from './Flight'
import StudLogin from './auth/StudLogin'
import StudRegistr from './auth/StudRegistr'

const Mainrow = () => {
    return (
        <div>
            <Cards />
        </div>
    )
}

export const Main = () => {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Mainrow />} />
          <Route path="about" element={<About />} />
          <Route path="where" element={<Where />} />
          <Route path="tours" element={<Tours />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="hotels" element={<Hotels />} />
          <Route path="flights" element={<Flight />} />
          <Route path="map" element={<Map />} />
          <Route path="/login" element={<StudLogin />} />
          <Route path="/registr" element={<StudRegistr />} />
        </Routes>
      </div>
    );
}
