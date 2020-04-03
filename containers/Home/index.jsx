import React, { useState, useEffect } from 'react'
import Layout from '../layouts'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import Card from '../../components/Card'
import styled from 'styled-components'
import { getNewsCovid } from '../../config/actions'
import TimeLine from './partials/timeline'

const CardGlobal = styled.section`
  margin-bottom: 2rem;
  border-bottom: 1px dashed #000;
  padding-bottom: 2.5rem;
  &:last-child {
    border: none;
  }
  h1 {
    margin-bottom: 1.5rem;
    font-size: 2em;
  }
  > div {
      display: flex;
      > div {
        flex: 1;
        margin-right: 1rem;
      }
  }
  @media only screen and (max-width: 600px) {
    padding-bottom: 1.5rem;
    > div {
      flex-direction: column;
      > div {
        margin-right: 0;
        margin-bottom: 1rem;
      }
    }
  }
`

const HomePage = ({ covid, indo }) => {

  const [newsData, setNewsData] = useState([])
  const [page, setPage] = useState(1)
  // const [loadingMore, setLoadingMore] = useState(false)

  useEffect(() => {
      getNewsCovid(page)
          .then((data) => {
              setNewsData(data)
          })
  },[page])


    return (
        <Layout>
            <Head>
                <title>Homepage Corona</title>
            </Head>
            <CardGlobal>
                <h1>Global Info</h1>
                <div>
                    <Card 
                      title="Confirmed"
                      value={covid.confirmed.value} 
                    />
                    <Card 
                      title="Recovered"
                      value={covid.recovered.value} 
                    />
                    <Card 
                      title="Death"
                      value={covid.deaths.value} 
                    />
                </div>
            </CardGlobal>

            <CardGlobal>
                <h1>Indonesia Info</h1>
                <div>
                  <Card 
                    title="Confirmed"
                    value={indo.confirmed.value} 
                  />
                  <Card 
                    title="Recovered"
                    value={indo.recovered.value} 
                  />
                  <Card 
                    title="Death"
                    value={indo.deaths.value} 
                  />
                </div>
            </CardGlobal>
            <TimeLine 
              newsData={newsData} 
            />
        </Layout>
    )
}

HomePage.getInitialProps = async () => {
    const resGlobal = await fetch('https://covid19.mathdro.id/api')
    const dataGlobal = await resGlobal.json()
    const resIndo = await fetch('https://covid19.mathdro.id/api/countries/IDN')
    const dataIndo = await resIndo.json()
    return {
        covid: dataGlobal,
        indo: dataIndo
    }
}

export default HomePage