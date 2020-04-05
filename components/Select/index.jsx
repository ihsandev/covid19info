import React from 'react'
import styled from 'styled-components'

const SelectStyle = styled.div`
  select {
    color: #000;
    font-size: 1em;
    font-weight: bold;
    padding: 5px;
    background: none;
    border-radius: 5px;
    outline: none;
  }
  @media only screen and (max-width: 600px) {
     select {
      font-size: 1em;
      width: 100%;
     }
      width: 100%;
    }
`

const Select = ({ data, selected, ...props }) => {
  return (
    <SelectStyle>
      <select {...props} defaultValue="IDN">
        {
          data && data.map((item, i) => {
            return (
              <option value={item.iso3} key={i}>{item.name}</option>
            )
          })
        }
      </select>
    </SelectStyle>
  )
}

export default Select