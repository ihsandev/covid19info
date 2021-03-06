import React, { useState, useEffect } from 'react'
import Layout from '../layouts'
import Head from 'next/head'
import NewsList from '../../components/NewsList'
import styled from 'styled-components'
import { getNewsCovid } from '../../config/actions'
import Loading from '../../components/Loading'

const WrapList = styled.div`
    display: flex;
    flex-direction: column;
    > article {
        margin-bottom: 1rem;
    }
`

const Title = styled.h1`
    margin-bottom: 1rem;
`

const WrapAction = styled.div`
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
        border: none;
        cursor: pointer;
        background-color: #232323;
        border-radius: 4px;
        padding: 10px 20px;
        box-sizing: border-box;
        color: #fff;
        &:hover {
            background-color: #bb3535;
        }
    }
    button.prev {
        visibility: ${({page}) => page > 1 ? 'visible' : 'hidden'};
    }
`

const NewsPage = () => {
    const [newsData, setNewsData] = useState([])
    const [page, setPage] = useState(1)
    const [loadingMore, setLoadingMore] = useState(false)

    useEffect(() => {
        setLoadingMore(true)
        getNewsCovid(page)
            .then((data) => {
                setNewsData(data)
            })
            .finally(() => setLoadingMore(false))
    },[page])

    const handleNext = () => {
        setPage(page + 1)
    };
    const handlePrev = () => {
        page > 0 &&
        setPage(page - 1)
    };

    // console.log('newsdata', newsData)

    return (
    <Layout>
        <Head>
            <title>News Corona</title>
            <meta 
                property="og:image" 
                content="https://ewscripps.brightspotcdn.com/dims4/default/7671677/2147483647/strip/true/crop/1303x733+15+0/resize/1280x720!/quality/90/?url=https%3A%2F%2Fewscripps.brightspotcdn.com%2F0a%2Ff2%2F72b1b4d94794992a0772cb593ce5%2Fscreen-shot-2020-02-25-at-10.49.27%20AM.png" 
            />
        </Head>
        <Title>Corona News</Title>
        <WrapList>
            {
            !loadingMore ?
            newsData && newsData.map((item, i) => {
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
            }) : (
                <Loading />
            )}
        </WrapList>
        <WrapAction page={page}>
            <button className="prev" onClick={() => handlePrev()}>
                Previous
            </button>
            <button onClick={() => handleNext()}>Next</button>
        </WrapAction>
    </Layout>
    )
}

export default NewsPage