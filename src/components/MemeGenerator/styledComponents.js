import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 13%;
`

export const Heading = styled.h1`
  color: #35469c;
  font-family: 'Roboto';
`

// export const LabelUrl = styled.label`
//   color: #7e858e;
// `

export const Label = styled.label`
  color: #7e858e;
  font-family: 'Roboto';
`

export const SelectElement = styled.select`
  color: #7e858e;
`

export const OptionElement = styled.option`
  color: #7e858e;
  font-family: 'Roboto';
`

export const ContainerImage = styled.div`
  background-image: url(${props => props.bgColor});
`

export const TopText = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: ${props => props.fontSize};
`

export const BottomText = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: ${props => props.fontSize};
`

// export const Input = styled.input`
//   color: #7e858e;
// `

export const ButtonElement = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  background-color: #0b69ff;
  width: 100px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  border: none;
  cursor: pointer;
  outline: none;
`
