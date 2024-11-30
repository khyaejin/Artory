import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Stories } from '../../shared/dummy/StoryDummy';
import { Exhibitions } from '../../shared/dummy/ExhibitionDummy';

import SEARCH from '../../assets/searchicon.svg';

export default function Search({ searchItems, setSearchItems, placeholder, type }) {
    const [input, setInput] = useState('');

    useEffect(() => {
        /* 이거 주석 해제하면 Exhibition Search에서 문제 발생 */
        // if (input === '') {
        //     setSearchItems([]); // 빈 입력일 때 캐러셀 표시
        // } 
    }, [input, setSearchItems])

    // 엔터 키를 눌렀을 때 검색 실행
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if(input === '') {
                //setSearchItems([]); // 빈 입력일 때 캐러셀 표시
                // 빈 입력일 경우 전체 데이터 표시
                const allData = type === 'story' ? Stories : Exhibitions;
                setSearchItems(allData);
            } 
            else {
                let filteredData=[];
                if(type === 'story'){
                    filteredData = Stories.filter(story => story.전시이름.includes(input));
                } else if(type === 'exhibition'){
                    filteredData = Exhibitions.filter(exhibition => exhibition.제목.includes(input));
                }
                setSearchItems(filteredData);
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
                    placeholder={placeholder} // exhibition 페이지에는 placdeholder가 필으하므로 props로 받음
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
padding: 10px;
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