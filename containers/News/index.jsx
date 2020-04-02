import React from 'react'
import Layout from '../layouts'
import Head from 'next/head'
import NewsList from '../../components/NewsList'
import data from '../../scraping/data/newsCovid.json'
import styled from 'styled-components'

const WrapList = styled.div`
    display: flex;
    flex-direction: column;
    > article {
        margin-bottom: 1rem;
        &:last-child {
            margin-bottom: 2.8rem;
        }
    }
`

const NewsPage = () => {
    console.log(data)
    return (
    <Layout>
        <Head>
            <title>News Corona</title>
        </Head>
        {/* <h1>This is News page</h1> */}
        <WrapList>
            {data && data.map((item, i) => {
                return (
                    <NewsList 
                        key={i} 
                        title={item.title} 
                        url={item.url} 
                        image={item.img} 
                        date={item.date} 
                        desc={item.desc}
                    />
                )
            })}
        </WrapList>
    </Layout>
    )
}

export default NewsPage