import React from 'react'
import Navbar from '../../components/Navbar'
import styled from 'styled-components'

const Main = styled.main`
  max-width: 960px;
  margin: 0 auto;
  padding: 20px 0px;
  box-sizing: border-box;
  @media only screen and (max-width: 600px) {
    padding: 20px;
    min-height: 100vh;
  }
`

const Layout = ({children}) => {
    return (
      <>
        <Navbar />
        <Main>
          {children}
        </Main>
      </>
    )
}

export default Layout