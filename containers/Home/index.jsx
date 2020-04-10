import React, { useState, useEffect } from 'react'
import Layout from '../layouts'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import Card from '../../components/Card'
import Select from '../../components/Select'
import styled from 'styled-components'
import { getNewsCovid, getCovidData } from '../../config/actions'
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

const ChooseCountry = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 1rem;
  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 1em;
      margin-bottom: 0.5rem;
    }
    padding-right: 0;
    flex-direction: column;
    align-items: flex-start;
  }
`

const HomePage = ({ covid, country }) => {

  const [newsData, setNewsData] = useState([])
  const [page, setPage] = useState(1)
  const [countryIso, setCountryIso] = useState('IDN')
  const [randomCountry, setRandomCountry] = useState({})
  // const [loadingMore, setLoadingMore] = useState(false)

  useEffect(() => {
      getNewsCovid(page)
          .then((data) => {
              setNewsData(data)
          })
  },[page])

  useEffect(() => {
    getCovidData(countryIso)
      .then((data) => {
        setRandomCountry(data)
      })
  }, [countryIso])

  const handleSelectCountry = (e) => {
    setCountryIso(e.target.value)
  }

    return (
        <Layout>
            <Head>
                <title>Info Corona</title>
            </Head>
            <CardGlobal>
                <h1>Global Info</h1>
                <div>
                    <Card 
                      title="Terkonfirmasi"
                      value={covid.confirmed.value} 
                    />
                    <Card 
                      title="Sembuh"
                      value={covid.recovered.value} 
                    />
                    <Card 
                      title="Meninggal"
                      value={covid.deaths.value} 
                    />
                </div>
            </CardGlobal>

              <ChooseCountry>
                <h2>Choose Country</h2>
                <Select 
                  data={country.countries}
                  onChange={handleSelectCountry} 
                />
              </ChooseCountry>

            <CardGlobal>
                <div>
                  <Card 
                    title="Terkonfirmasi"
                    value={randomCountry.confirmed && randomCountry.confirmed.value || 0} 
                  />
                  <Card 
                    title="Sembuh"
                    value={randomCountry.recovered && randomCountry.recovered.value || 0} 
                  />
                  <Card 
                    title="Meninggal"
                    value={randomCountry.deaths && randomCountry.deaths.value || 0} 
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
    const resCountry = await fetch('https://covid19.mathdro.id/api/countries')
    const listCountry = await resCountry.json()
    return {
        covid: dataGlobal,
        country: listCountry
    }
}

export default HomePage