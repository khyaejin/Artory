import React from 'react';
import styled from 'styled-components';
import { Stories } from '../../shared/dummy/StoryDummy'; // 스토리 더미 데이터
import BasicImg from '../../assets/story/basic-story.svg'; // 기본 이미지
import StandardPoster from '../../shared/components/StandardPoster';

export default function StoryList() {
    return (
        <MainLayout>
            <ExhibitionContainer>
                {
                    Stories.slice(0, 4).map((story, index) => {
                        // 글내용에서 이미지가 없을 경우 기본 이미지 넣도록 설정
                        const imageSrc = story.글내용.find(item => item.type === 'image')?.src || BasicImg;

                        return (
                            <StandardPoster 
                                key={index} 
                                poster={imageSrc} 
                            />
                        );
                    })
                }
            </ExhibitionContainer>
        </MainLayout>
    );
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
  display: flex;
  justify-content: space-between; // 양쪽 끝에 맞추고 나머지는 동일 간격
  align-items: center; // 세로 중앙 정렬
  width: 100%; 
  gap: 1rem; // 포스터 간 간격 추가
  box-sizing: border-box;
`;
