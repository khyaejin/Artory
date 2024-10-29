import React, { useState } from 'react'
import styled from 'styled-components'

export default function Memo() {
  const [isInputClick, setIsInputClick] = useState(false);
  return (
    <MainLayout>
      <StyledMemo 
        onFocus={()=>setIsInputClick(true)}
        onBlur={()=>setIsInputClick(false)}
        placeholder={ isInputClick ? "" : "메모하고 싶은 내용을 적어주세요"}/>
    </MainLayout>
  )
}

const MainLayout = styled.div`
margin-left : 13.38rem;
`

const StyledMemo = styled.textarea`
background-color: #F4f5f7;
width: 16.1875rem;
height: 32.625rem;
resize: none;
border : none;
padding : 0.94rem 0 0 0.94rem;
&::placeholder {
    color: #ababab;
    font-family: 'Pretendard';
}
&:focus {
    outline: none;
}
`
