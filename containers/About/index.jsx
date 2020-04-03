import React from 'react'
import Head from 'next/head'
import Layout from '../layouts'
import styled from 'styled-components'

const Url = styled.span`
    font-weight: bolder;
    cursor: pointer;
    &:hover {
        color: #bb3535;
    }
`

const AboutPage = () => (
    <Layout>
        <Head>
            <title>About</title>
        </Head>
        <h1 style={{marginBottom: 20}}>About Us</h1>
        <div>
            <p>Aplikasi Web ini menyajikan informasi seputar perkembangan Jumlah 
                COVID 19 / Virus Corona berupa yang terkonfirmasi, sembuh, dan meninggal
                dan juga berita terkait Virus Corona yang diambil dari <b onClick={() => window.open('https://www.detik.com/tag/news/virus-corona/')}>detik.com</b>
            </p>
        </div>
        <div style={{marginTop: 20}}>
            <h3>Jika Ada Bugs Hubungi Developer Kami :</h3>
            <br />
            <span>Github: <Url onClick={() => window.open('https://github.com/ihsandev')}>@ihsandev</Url></span>
            <br />
            <span>WA: 082348635212</span>
        </div>
        <div style={{marginTop: 20}}>
            <div>Source API :</div>
            <Url onClick={() => window.open('https://github.com/mathdroid/covid-19-api')}>https://github.com/mathdroid/covid-19-api</Url>
        </div>
        <div style={{marginTop: 20}}>
            <div>Referensi News / Berita :</div>
            <Url onClick={() => window.open('https://www.detik.com/tag/news/virus-corona/')}>https://www.detik.com/tag/news/virus-corona/</Url>
        </div>
    </Layout>
)

export default AboutPage