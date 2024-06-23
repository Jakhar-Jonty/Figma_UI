import React from 'react'
import { TitlePricingAndPlans } from './TitlePricingAndPlans'
import { PlansCards } from './PlansCards'
import { FrequentlyAskedQue } from './FrequentlyAskedQue'

export const PricingAndPlans = () => {
  return (

    <div>
        <TitlePricingAndPlans/>
        <PlansCards/>
        <FrequentlyAskedQue/>
    </div>
  )
}
