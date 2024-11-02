import styled from "styled-components"

export default function StandardPoster({poster}) {
    // const [isLikeClick, setIsLikeClick] = useState(false)
    // const [isSaveClick, setIsSaveClick] = useState(false)
    
  return (
    <MainLayout>

        {/* 포스터 이미지 */}
        <StyledPoster src={poster}/>
        <Linear/>

        {/* 좋아요와 저장 버튼
        <Like src={isLikeClick ? FILLLIKE : LIKE} onClick={()=>{isLikeClick ? setIsLikeClick(false) : setIsLikeClick(true)}}/>
        <Save src={isSaveClick ? FILLSAVE : SAVE} onClick={()=>{isSaveClick ? setIsSaveClick(false) : setIsSaveClick(true)}}/> */}

    </MainLayout>
  )
}

// 메인 레이아웃 컴포넌트
const MainLayout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

// 포스터 이미지 스타일
const StyledPoster = styled.img`
  width: 100%;
  height: auto;
`;

// 좋아요 버튼 스타일
const Like = styled.img`
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

// 저장 버튼 스타일
const Save = styled.img`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

// Linear 컴포넌트 스타일
const Linear = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
`;