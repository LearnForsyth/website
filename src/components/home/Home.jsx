import React from "react"
import AboutCard from "../about/AboutCard"
import HAbout from "./HAbout"
import Hblog from "./Hblog"
import Hprice from "./Hprice"
import Hero from "./hero/Hero"
import Testimonal from "./testimonal/Testimonal"

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonal />
      <Hblog />
      <Hprice />
    </>
  )
}

export default Home
