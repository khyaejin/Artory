import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import KakaoLoginButtonImage from '../../assets/login/kakao_login.svg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Splash from '../../shared/components/Splash';

const KAKAO_CLIENT_ID = process.env.REACT_APP_KAKAO_CLIENT_ID; // .env에서 가져오기
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI; // .env에서 가져오기

const KakaoSocialLogin = () => {
  const navigate = useNavigate();
  const [showSplash, setShowSplash] = useState(false); // 스플래시 상태 추가

  useEffect(() => {
    const url = new URL(window.location.href);
    // 1. 인증코드 가져오기
    const code = url.searchParams.get('code'); 

    if (code) {
      setShowSplash(true); // 인증코드가 있을 경우 스플래시 활성화
      getAccessToken(code);
    } else {
      console.log('code 없음');
    }
  }, []);

  // 2. 인증코드로 접근토큰 가져오기
  const getAccessToken = async (code) => {
    try {
      const response = await axios.post(
        'https://kauth.kakao.com/oauth/token',
        null,
        {
          params: {
            grant_type: 'authorization_code',
            client_id: KAKAO_CLIENT_ID,
            redirect_uri: REDIRECT_URI,
            code: code,
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      const { access_token } = response.data;
      console.log('Access Token:', access_token);
      getUserInfo(access_token);
    } catch (error) {
      console.error('Access Token 요청 실패:', error);
      setShowSplash(false); // 실패 시 스플래시 종료
    }
  };

  // 3. 접근토큰으로 사용자 정보 가져오기
  const getUserInfo = async (accessToken) => {
    try {
      const response = await axios.get('https://kapi.kakao.com/v2/user/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const { profile_image, nickname, id } = response.data.properties;

      // 4-1. 회원가입 여부 확인 (로컬스토리지에 저장된 사용자 데이터가 있는지 확인)
      const isNewUser = !localStorage.getItem(`user_${id}`); // `user_${id}`가 없다면 신규 유저

      // 사용자 정보 저장
      localStorage.setItem('profileImage', profile_image);
      localStorage.setItem('nickname', nickname);
      localStorage.setItem(`user_${id}`, JSON.stringify(response.data));

      console.log('User Info:', response.data);

      // 4-2. 회원가입 여부에 따라 페이지 이동
      setTimeout(() => {
        setShowSplash(false); // 4초 후 스플래시 종료
        if (isNewUser) {
          navigate('/onboarding1'); // 회원가입인 경우 : 온보딩 페이지로 이동
        } else {
          navigate('/exhibition'); // 로그인인 경우 : 바로 /exhibition으로 이동
        }
      }, 4000); // 스플래시 화면 유지 시간 설정
    } catch (error) {
      console.error('사용자 정보 요청 실패:', error);
      setShowSplash(false); // 실패 시 스플래시 종료
    }
  };

  const handleKakaoLogin = () => {
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
    window.location.href = KAKAO_AUTH_URL; // 카카오 인증 페이지로 이동
  };

  return (
    <>
      {showSplash ? (
        <Splash /> // 스플래시 화면 표시
      ) : (
        <SocialButton onClick={handleKakaoLogin}>
          <img src={KakaoLoginButtonImage} alt="카카오 로그인" />
        </SocialButton>
      )}
    </>
  );
};

export default KakaoSocialLogin;

const SocialButton = styled.div`
  flex: 1;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 150%;
    height: auto;
    object-fit: cover;
  }
`;

const SplashScreen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
  color: white;
  font-size: 1.5rem;
`;
