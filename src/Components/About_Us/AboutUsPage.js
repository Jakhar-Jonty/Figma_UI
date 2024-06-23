import React from 'react'
import { HeroAboutUs } from './HeroAboutUs'
import { ContentOneAboutUs } from './ContentOneAboutUs'
import { ContentTwoAboutUs } from './ContentTwoAboutUs'
import { MembersAboutUs } from './MembersAboutUs'
import { FooterAboutUs } from './FooterAboutUs'

export const AboutUsPage = () => {
  return (
    <div>
        <HeroAboutUs/>
        <ContentOneAboutUs/>
        <ContentTwoAboutUs/>
        <MembersAboutUs/>
        <FooterAboutUs/>
    </div>
  )
}
