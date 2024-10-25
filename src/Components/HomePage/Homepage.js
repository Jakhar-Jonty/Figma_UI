import React from 'react'
import { Hero } from './Hero'
import { Content1 } from './Content1'
import { Content2 } from './Content2'
import { Content3 } from './Content3'
import { Pricing } from './Pricing'
import { CTAimg } from './CTAimg'
// import { Footer } from './Footer'


export const Homepage = () => {

  return (
    <div>
    <Hero/>
    <Content1/>
    <Content2/>
    <Content3/>
    <Pricing/>
    <CTAimg/>
    {/* <Footer/> */}
    </div>
  )
}
