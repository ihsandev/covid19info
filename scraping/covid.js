const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')

axios.get('https://www.detik.com/tag/news/virus-corona/')
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
            fs.writeFile('data/newsCovid.json', 
                JSON.stringify(newsListTrim, null, 4), (err) => {
                    console.log('Write Scrapping success')
                }
            )
        }
    }), (err) => console.log(err)