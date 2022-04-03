import React from 'react'

import Title from '../../components/title'
import { LandingContainer } from './styles'

const LandingSection = () => {
  return (
    <LandingContainer>
        <Title type="no-border" title="Choosing the best category for your tattoo has never been this easy" />
        <Title
          type="no-border"
          category="subtitle"
          title="Most of the time, when clients plan on getting inked, 
          they have a fair idea of what they really want on their body. 
          However, there have been instances where a client decides what they want 
          only to realise how many other options they have at their disposal.
           At Aliens Tattoo, we have mastered every tattoo category ranging from religious tattoos
            to animal tattoos. Be it a small tattoo or one that covers your entire sleeve, we provide tattoo  "
        />
   </LandingContainer>
  )
}

export default LandingSection
