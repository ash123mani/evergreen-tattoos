import React, { Fragment } from 'react'
import { node } from 'prop-types'

import { GlobalStyleVars, ResetStyles } from '../../../common/styles'
import Header from '../header'

import { Wrapper } from './styles'

const Layout = ({ children }) => {
  return (
    <Fragment>
      <GlobalStyleVars />
      <ResetStyles />
      <Wrapper>
        {children}
        <Header />
      </Wrapper>
    </Fragment>
  )
}

Layout.propTypes = {
  children: node,
}

Layout.defaultProps = {
  children: null
}

export default Layout
