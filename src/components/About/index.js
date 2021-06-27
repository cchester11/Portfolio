import React from 'react';
import solarsytem from '../../assets/cover/solarsystem.jpeg'

function About () {
  return (
    <section>
      <h1 id="about">Charles Chester</h1>
      <img src={solarsytem} className="my-2" style={{width: "100%"}} alt="cover" />
    </section>
  )
}

export default About;