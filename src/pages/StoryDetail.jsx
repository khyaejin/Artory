import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom';
import { Stories } from '../shared/dummy/StoryDummy';
import Comment from '../entites/StoryDetail/Comment';

export default function StroyDetail() {
    const { id } = useParams();
    const story = Stories[id];

    return (
        <StoryDetailLayout>
            <StoryDetailBanner>
                <BannerImg src={story.포스터} />
                <BannerTitle>
                    <h3>{story.전시이름}</h3>
                </BannerTitle>
            </StoryDetailBanner>
            <StoryDetailContents>
                <AuthorInfoContainer>
                    <AuthorImg src={story.작성자프로필} />
                    <div style={{ marginTop: '20px', marginLeft: '5px' }}>
                        <AuthorText>작성자</AuthorText>
                        <AuthorName>{story.작성자}</AuthorName>
                    </div>
                </AuthorInfoContainer>
                {/* 스토리 제목 */}
                <CommonBox>{story.글제목}</CommonBox>
                {/* 오늘의 전시 */}
                <CommonBox>
                    <CommonTitleText>오늘의 전시</CommonTitleText>
                    <Table>
                        <tbody>
                            <tr>
                                <th>방문일</th>
                                <th>관람소요시간</th>
                                <th>만족도</th>
                                <th style={{ paddingLeft: '6px' }}>날씨</th>
                                <th>동행인</th>
                                <th>카테고리</th>
                            </tr>
                            <tr>
                                <td>
                                    {' '}
                                    <HighlightTagBox>{story.방문일}</HighlightTagBox>
                                </td>
                                <td>
                                    <HighlightTagBox>
                                        {story.관람소요시간}
                                    </HighlightTagBox>
                                </td>
                                <td>
                                    {' '}
                                    <img
                                        src={story.만족도}
                                        alt="표정"
                                        style={{ height: '35px' }}
                                    />
                                </td>
                                <td>
                                    <img
                                        src={story.날씨}
                                        alt="날씨"
                                        style={{ height: '35px' }}
                                    />
                                </td>
                                <td>
                                    <HighlightTagBox >
                                        {story.동행인}
                                    </HighlightTagBox>
                                </td>
                                <td>
                                    <CategoryContainer>
                                        {
                                            story.카테고리.map((data, i) => (
                                                <HighlightTagBox>{story.카테고리[i]}</HighlightTagBox>
                                            ))
                                        }
                                    </CategoryContainer>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </CommonBox>
                {/* 글 내용 (전시 키워드, 전시 스토리) */}
                <CommonBox>
                    <CommonTitleText>오늘의 전시 키워드</CommonTitleText>
                    <KeywordContainer>
                        {
                            story.키워드.map((data, i) => (
                                <div>{story.키워드[i]}</div>
                            ))
                        }
                    </KeywordContainer>
                    <CommonTitleText>오늘의 전시 스토리</CommonTitleText>
                    <StoryContent>
                        {
                            story.글내용.map((data, i) => {
                                if (data.type == 'text') {
                                    return <p>{data.content}</p>;
                                } else {
                                    return <img src={data.src} />
                                }
                            })
                        }
                    </StoryContent>
                </CommonBox>
                {/* 댓글 작성 및 댓글 리스트*/}
                <Comment/>
                
            </StoryDetailContents>
        </StoryDetailLayout>
    )
}

const StoryDetailLayout = styled.div`
width: 100%;
display:flex;
flex-direction:column;
align-items: center;
`;


const StoryDetailContents = styled.div`
width: 70%;

`;

const AuthorInfoContainer = styled.div`
display:flex;
margin: 67px 0 39px;


`;
const AuthorImg = styled.img`
width: 59px;
height: 59px;

`;
const AuthorText = styled.div`
font-size: small;
font-weight: 300;
color: #9BA0AE;
`;
const AuthorName = styled.div`
margin-top: 3px;
font-weight: 700;
color: #717276;
`;

const CommonBox = styled.div`
  box-shadow: 1px 2px 8px #f3f3f3;
  border: none;
  font-size: small;
  font-weight: 600;
  padding: 14px;
  height: fit-content;
  margin-bottom: 16px;

`;

const CommonTitleText = styled.h3`
font-weight: 700;
`;


const StoryDetailBanner = styled.div`
width: 100%;
height: 268px;
display:flex;
justify-content:center;
position:relative;

`;

const BannerImg = styled.img`
position: absolute;
z-index: 5;

`;

const BannerTitle = styled.div`
position: absolute;
z-index: 6;
background-color: rgba(0, 0, 0, 0.65);
width: 100%;
height:100%;
color: white;
font-size: 4rem;
display:flex;
align-items:center;
justify-content: center;
font-weight: 700;

`;

const Table = styled.table`
max-width: 100%;
margin-top: 20px;

td {
width: fit-content;
padding-top: 5px;
vertical-align: middle;
padding-right: 20px;
}
th {
padding-right: 20px;

width: fit-content;

text-align: start;
vertical-align: middle;
color: #9ba0ae;
font-weight: 500;
min-width: 30px;
padding-bottom: 8px;
}
`;

const HighlightTagBox = styled.div`
background-color: #28292A;
padding: 3px;
color: white;
text-align: center;
`;

const CategoryContainer = styled.div`
display: flex;
gap: 5px;
`;

const KeywordContainer = styled.div`
display: flex;
gap: 15px;
color: #737373;
font-size: 0.75rem;
`;

const StoryContent = styled.div`

`;