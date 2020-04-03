import React from 'react'
import styled from 'styled-components'

const Box = styled.article`
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid gray;
    background-color: #fff;
    h2 {
        font-size: 1em;
    }
    display: flex;
    align-items: flex-start;
    .wrap-image {
        overflow: hidden;
        width: 200px;
        height: 120px;
        border-radius: 5px;
        img {
            object-fit: cover;
            width: 200px;
            height: 120px;
        }
        margin-right: 1rem;
    }
    .wrap-desc {
        span {
            display: block;
            margin-bottom: 1rem;
            font-size: 0.8em;
            color: #7c7c7c;
            font-weight: bolder;
        }
        h2.title {
            cursor: pointer;
            margin-bottom: 0.7rem;
            &:hover {
                color: #bb3535;
            }
        }
    }
    @media only screen and (max-width: 600px) {
        .wrap-desc {
            font-size: 0.6em;
        }
        .wrap-image {
        width: 140px;
        height: 120px;
        img {
            object-fit: cover;
            width: 140px;
            height: 120px;
        }
            margin-right: 1rem;
        }
        p {
            font-size: 0.8em;
        }
    }
`

const NewsList = ({ title, url, image, date, desc }) => {
    return (
        <Box>
            <div>
                <div className="wrap-image">
                    <img alt={title} src={image} />
                </div>
            </div>
            <div className="wrap-desc">
                <span>{date}</span>
                <h2 className="title" onClick={() => window.open(url)}>
                    {title}
                </h2>
                <p>{desc}</p>
            </div>
        </Box>
    )
}

export default NewsList