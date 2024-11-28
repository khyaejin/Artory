import React from 'react'
import styled from 'styled-components'

//이미지
import GLASSES from '../../assets/searchicon.svg'

export default function StandardInput({ 
    placeholder,
    width,
    height,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    isInputClick,
    onFocus,
    onBlur,
    onKeyDown,
    onChange
}) {
  return (
    <MainLayout>

      <StyledImg src={GLASSES} /> 
      <StyledInput 
        placeholder={isInputClick ? "" : placeholder} 
        width={width}
        height={height}
        onFocus={onFocus} 
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        onChange={onChange}
        marginTop={marginTop}
        marginRight={marginRight}
        marginBottom={marginBottom}
        marginLeft={marginLeft}
        />

    </MainLayout>
  )
}

const MainLayout = styled.div`
width: ${({ width }) => (width  || "34.89513rem")};
height:${({ height }) => (height || "3.69913rem")};
`;

const StyledInput = styled.input`
width: 100%;
height: 100%;
margin-top : ${({marginTop}) => (marginTop || "0")};
margin-right : ${({marginRight}) => (marginRight || "0")};
margin-bottom : ${({marginBottom}) => (marginBottom || "0")};
margin-left : ${({marginLeft}) => (marginLeft || "0")};
border: none;
background-color: #F4F5F7;
font-size: 1.2rem;
font-style: normal;
font-weight: 500;
padding-left : 4rem;
color : #A6A9AF;
&:focus {
    outline: none;
}
&::placeholder {
    color: #a6a9af;
    font-size: 1rem;
}
`;

const StyledImg = styled.img`
width: 2.2195rem;
height: 2.2195rem;
position: absolute;
margin-top : 0.74rem;
margin-left : 5.5rem;
`;
