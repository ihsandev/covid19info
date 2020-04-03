import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import NewsList from '../../../components/NewsList'

const WrapTimeLine = styled.div`
   display: grid;
   grid-template-columns: 1fr 1.3fr;
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
     grid-row-gap: 1.5rem;
     margin-bottom: 4rem;
   }
`

const TimeLineTitle = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  > span {
    a {
      color: #232323;
      font-size: 0.9em;
      text-decoration: underline;
      cursor: pointer;
      &:hover {
        color: #bb3535;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    > h1 {
      font-size: 1em;
    }
  }
`

const TimeLine = ({ newsData }) => {
    return (
        <div style={{marginBottom: 30}}>
          <TimeLineTitle>
            <h1 style={{marginBottom: 20}}>Covid Timeline</h1>
            <span>
              <Link href="/covid-news">
                <a>
                  More Covid News
                </a>
              </Link>
            </span>
          </TimeLineTitle>
            <WrapTimeLine>
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
            </WrapTimeLine>
        </div>
    )
}

export default TimeLine