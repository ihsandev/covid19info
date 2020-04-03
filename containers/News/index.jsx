import React, { useState, useEffect } from 'react'
import Layout from '../layouts'
import Head from 'next/head'
import NewsList from '../../components/NewsList'
import styled from 'styled-components'
import axios from 'axios'
import cheerio from 'cheerio'
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

    const getNewsCovid = () => {
        setLoadingMore(true)
        axios.get(`https://www.detik.com/tag/news/virus-corona/?sortby=time&page=${page}`)
        .then((res) => {
            if(res.status === 200) {
                setLoadingMore(true)
                const html = res.data;
                const $ = cheerio.load(html)
                let newsList = []
                $('.list article').each(function(i, elm) {
                    newsList[i] = {
                        title: $(this).find('h2.title').text().trim(),
                        url: $(this).find('a').attr('href'),
                        img: $(this).find('img').attr('src'),
                        date: $(this).find('.date').text().trim(),
                        desc: $(this).find('p').text().trim()
                    }
                })
                const newsListTrim = newsList.filter(n => n != undefined)
                // const toJson = JSON.stringify(newsListTrim, null, 4)
                setNewsData(newsListTrim)
            }
        })
        .catch((err) => console.log(err))
        .finally(() => setLoadingMore(false))
    }

    useEffect(() => {
        getNewsCovid()
    },[page])

    const handleNext = () => {
        setPage(page + 1)
    };
    const handlePrev = () => {
        page > 0 &&
        setPage(page - 1)
    };

    console.log('newsdata', newsData)

    return (
    <Layout>
        <Head>
            <title>News Corona</title>
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