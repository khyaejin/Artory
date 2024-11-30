import React, { useState } from 'react'
import styled from 'styled-components'
import StandardButton from '../../../shared/components/StandardButton';

export default function Memo() {
  const [isInputClick, setIsInputClick] = useState(false);
  return (
    <MainLayout style={{position:'relative'}}>

      {/* 메모 */}
      <StyledMemo
        onFocus={() => setIsInputClick(true)}
        onBlur={() => setIsInputClick(false)}
        placeholder={isInputClick ? "" : "메모하고 싶은 내용을 적어주세요"}
      />

      {/* 저장 버튼 */}
      <WrapButton>
        <StandardButton text="저장" width="4.375rem" height="1.75rem" onClick={()=>alert("메모가 저장되었습니다.")} />
      </WrapButton>

    </MainLayout>
  )
}

const MainLayout = styled.div`
margin-left : 13.38rem;
position : relative;
box-sizing: border-box;
`

const StyledMemo = styled.textarea`
background-color: #F4f5f7;
width: 18vw;
height: 66.5vh;
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

const WrapButton = styled.div`
    position : absolute;
    bottom : 3%;
    right : 5%;
`
