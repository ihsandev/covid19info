import React from 'react'
import Head from 'next/head'
import Layout from '../layouts'

const AboutPage = () => (
    <Layout>
        <Head>
            <title>About</title>
        </Head>
        <h1 style={{marginBottom: 20}}>About Us</h1>
        <div>
            <p>Aplikasi Web ini menyajikan informasi seputar perkembangan Jumlah 
                COVID 19 / Virus Corona berupa yang terkonfirmasi, sembuh, dan meninggal
            </p>
        </div>
        <div style={{marginTop: 20}}>
            <h3>Jika Ada Bugs Hubungi Developer Kami :</h3>
            <br />
            <span>Github: @ihsandev</span>
            <br />
            <span>WA: 082348635212</span>
        </div>
        <div style={{marginTop: 20}}>
            <div>Source API :</div>
            <div>https://github.com/mathdroid/covid-19-api</div>
        </div>
    </Layout>
)

export default AboutPage