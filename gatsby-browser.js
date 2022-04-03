import React, { Fragment } from 'react'
import WebFont from 'webfontloader'

import Layout from './src/screens/components/layout'

WebFont.load({
  google: {
    families: ['Nunito:400,500,600,700'],
  },
})

const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export { wrapPageElement }
