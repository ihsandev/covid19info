import axios from 'axios'
import cheerio from 'cheerio'

export const getNewsCovid = (page) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.detik.com/tag/news/virus-corona/?sortby=time&page=${page}`)
        .then((res) => {
            if(res.status === 200) {
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
                resolve(newsListTrim)
            }
        })
        .catch((err) => reject(err))
    })
}

export const getCovidData = (iso) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://covid19.mathdro.id/api/countries/${iso}`)
            .then((res) => {
                if(res.status === 200) {
                    const data = res.data
                    resolve(data)
                }
            })
            .catch((err) => reject(err))
    })
}