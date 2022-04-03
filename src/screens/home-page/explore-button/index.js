import React from 'react'

import { Explore } from './styles'

const ExploreButton = (props) => {
  return (
    <Explore 
      to="/tattoo-categories"
      {...props}
    >Explore Tattoos</Explore>
  )
}

export default ExploreButton
