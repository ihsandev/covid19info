import React from 'react'
import styled from 'styled-components'

const CardStyle = styled.div`
    background-color: #fff;
    border: 1px solid;
    ${({status}) => status === 'Terkonfirmasi' && `border-color: orange`};
    ${({status}) => status === 'Sembuh' && `border-color: green`};
    ${({status}) => status === 'Meninggal' && `border-color: red`};
    border-radius: 8px;
    padding: 15px 10px;
    box-sizing: border-box;
    text-align: center;
    font-size: 2em;
    position: relative;
`

const Caption = styled.span`
    position: absolute;
    font-size: 16px;
    font-weight: bold;
    top: -10px;
    left: 1rem;
    background-color: #fff;
    padding: 0px 6px;
    ${({status}) => status === 'Confirmed' && `color: orange`};
    ${({status}) => status === 'Recovered' && `color: green`};
    ${({status}) => status === 'Death' && `color: red`};
    border-radius: 8px;
`

const Card = (props) => {
    const formatNumber = (number) => {
        return new Intl.NumberFormat().format(number)
    }
    return (
        <CardStyle status={props.title}>
            <Caption status={props.title}>{props.title}</Caption>
            <h2>{formatNumber(props.value)}</h2>
        </CardStyle>
    )
}

export default Card