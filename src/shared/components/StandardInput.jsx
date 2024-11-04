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
    isInputClick,
    onFocus,
    onBlur,
    onKeyDown
}) {
  return (
    <MainLayout>

      {/* <StyledImg src={GLASSES} />  */}
      <StyledInput 
        placeholder={isInputClick ? "" : placeholder} 
        width={width}
        height={height}
        onFocus={onFocus} 
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        marginTop={marginTop}
        marginRight={marginRight}
        marginBottom={marginBottom}
        />

    </MainLayout>
  )
}

const MainLayout = styled.div`
position: relative; 
width: ${({ width }) => (width  || "34.89513rem")};
height:${({ height }) => (height || "3.69913rem")};
`;

const StyledInput = styled.input`
width: 100%;
height: 100%;
margin-top : ${({marginTop}) => (marginTop || "0")};
margin-right : ${({marginRight}) => (marginRight || "0")};
margin-bottom : ${({marginBottom}) => (marginBottom || "0")};
border: none;
background-color: #F4F5F7;
padding-left: 5.19rem;
font-size: 1.2rem;
font-style: normal;
font-weight: 500;
color : #A6A9AF;
&:focus {
    outline: none;
}
`;

const StyledImg = styled.img`
width: 2.2195rem;
height: 2.2195rem;
position: absolute;
top: 22%;
left: 5%;
`;
