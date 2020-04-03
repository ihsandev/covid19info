import React from 'react'
import styled from 'styled-components'
import NewsList from '../../../components/NewsList'

const WrapTimeLine = styled.div`
   display: grid;
   grid-template-columns: 1.2fr 1fr;
   grid-gap: 1rem;
   min-height: 400px;
   overflow: hidden;
   box-sizing: border-box;
   div.list-news-timeline {
      padding: 0px 10px;
      max-height: 400px;
      overflow: auto;
      display: grid;
      > article {
          margin-bottom: 1rem;
          h2 {
              font-size: 0.7em;
          }
          p {
              font-size: 0.6em;
          }
      } 
   }
   @media only screen and (max-width: 600px) {
     grid-template-columns : 1fr;
     grid-template-rows: 1fr 1fr;
     grid-gap: 1rem;
     margin-bottom: 4rem;
   }
`

const TimeLine = ({ newsData }) => {
    return (
        <div>
            <h1 style={{marginBottom: 20}}>Covid News</h1>
            <WrapTimeLine>
                <div className="list-news-timeline">
                    {
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
                    })
                    }
                </div>
                <div>
                    <iframe  
                        width="100%"
                        height="100%" 
                        src="https://www.youtube.com/embed/1APwq1df6Mw" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen 
                    />
                </div>
            </WrapTimeLine>
        </div>
    )
}

export default TimeLine