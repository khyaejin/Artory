import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Stories } from '../../shared/dummy/StoryDummy';

import SEARCH from '../../assets/searchicon.svg';

export default function Search({ searchStories, setSearchStories }) {
    const [input, setInput] = useState('');

    useEffect(() => {
        if (input === '') {
            setSearchStories([]); // 빈 입력일 때 캐러셀 표시
        }
    }, [input, setSearchStories])

    // 엔터 키를 눌렀을 때 검색 실행
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if(input === '') {
                setSearchStories([]); // 빈 입력일 때 캐러셀 표시
            } else {
                const filteredData = Stories.filter(story => story.전시이름.includes(input));
                setSearchStories(filteredData);
            }
            
        }
    };

    return (
        <SearchLayout>
            <SearchContainer>
                <SearchImg src={SEARCH} />
                <SearchInput
                    type='text'
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </SearchContainer>
        </SearchLayout>
    )
}

const SearchLayout = styled.div`
width: 70%;
margin: 30px 0;
`;

const SearchContainer = styled.div`
width: 419px;
display:flex;
gap: 10px;
padding: 9px;
box-shadow: 1px 2px 8px #f3f3f3;
border: none;


`;

const SearchImg = styled.img`
width: 18px;
height: 18px;
`;

const SearchInput = styled.input`
width: 100%;
border: none;
outline: none; /* focus 상태에서도 border가 나타나지 않음 */
`;