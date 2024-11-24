import React from 'react'
import styled from 'styled-components';
import AlbumList from './AlbumList.jsx';

export default function MyAlbum() {
    return (
        <MainLayout>
            {/* 나의 앨범 리스트 */}
            <AlbumList/>
        </MainLayout>
      )
    }

    const MainLayout = styled.div`
    height: 40%;
    width: calc(100% - 28rem); // 양쪽 14rem 여백을 고려해 너비 계산
    display: flex;
    margin: 0 auto; // 가운데 정렬
    box-sizing: border-box; // width와 height 계산에 padding 포함
  `;
  
  