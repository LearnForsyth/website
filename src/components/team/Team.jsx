import React from "react"
import Awrapper from "../about/Awrapper"
import "../about/about.css"
import Back from "../common/back/Back"
import TeamCard from "./TeamCard"
import "./team.css"

const Team = () => {
  return (
    <>
      <Back title='Team' />
      <section className='team padding'>
        <div className='container grid'>
          <TeamCard />
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default Team
