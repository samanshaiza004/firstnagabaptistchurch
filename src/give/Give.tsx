import { GiveHero } from "./give-hero"
import { DonationOptions } from "./donation-options"
import { WhyGive } from "./why-give"
import { GratitudeSection } from "./gratitude-section"


export default function GivePage() {
  return (
    <>
      <GiveHero />
      <DonationOptions />
      <WhyGive />
      <GratitudeSection />
    </>
  )
}
