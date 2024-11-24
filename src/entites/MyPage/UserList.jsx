import React from 'react';
import styled from 'styled-components';
import { Users } from '../../shared/dummy/UserDummy'; // 유저 더미 데이터
import BasicImg from '../../assets/user/basic-user.svg'; // 기본 이미지

export default function UserList() {
    return (
        <MainLayout>
            <ExhibitionContainer>
                {
                    Users.slice(0, 6).map((user, index) => ( // 상위 6개 유저만 보여주기
                        <UserAvatar 
                            key={user.id} 
                            src={user.profile || BasicImg} // 유저 프로필 이미지가 없는 경우 기본 이미지로 설정
                            alt={`${user.name}의 프로필`}
                        />
                    ))
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
  align-items: center; 
  width: 100%; 
  gap: 1rem; 
  box-sizing: border-box;
`;

const UserAvatar = styled.img`
  width: 13%; // 비율로 너비 설정
  max-width: 8.0625rem; // 최대 너비
  min-width: 3rem; // 최소 너비
  height: auto; // 높이는 비율에 맞게 자동으로 설정
  
  flex-shrink: 0; // 크기 고정 방지
  object-fit: cover; // 이미지 비율 유지하며 크기 조정
`;

