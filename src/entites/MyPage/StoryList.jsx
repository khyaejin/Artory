import React from 'react'
import styled from 'styled-components'
import { Exhibitions } from '../../shared/dummy/ExhibitionDummy';
import StandardPoster from '../../shared/components/StandardPoster';

export default function StoryList() {
    return (
        <MainLayout>
            <ExhibitionContainer>
                {
                    Exhibitions.slice(0, 4).map((e, i) => ( // 상위 4개만 렌더링
                        <StandardPoster key={i} poster={e.포스터}/>
                    ))
                }
            </ExhibitionContainer>
        </MainLayout>
    )
}

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;

const ExhibitionContainer = styled.div`
  display: flex; // 플렉스 레이아웃 사용
  justify-content: space-between; // 양쪽 끝에 맞추고 나머지는 동일 간격
  align-items: center; // 세로 중앙 정렬
  width: 100%; // 부모 컨테이너 너비를 꽉 채움
  gap: 1rem; // 포스터 간 간격 추가
  box-sizing: border-box;
  background-color: blue;
`;
