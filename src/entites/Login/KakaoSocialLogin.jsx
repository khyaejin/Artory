import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import KakaoLoginButtonImage from '../../assets/login/kakao_login.svg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const KAKAO_CLIENT_ID = process.env.REACT_APP_KAKAO_CLIENT_ID; // .env에서 가져오기
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI; // .env에서 가져오기

const KakaoSocialLogin = () => {
  const navigate = useNavigate();
  const [showSplash, setShowSplash] = useState(false); // 스플래시 화면 상태

  useEffect(() => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get('code'); // 인증 코드 가져오기

    if (code) {
      getAccessToken(code);
    } else {
      console.log('code 없음');
    }
  }, []);

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
    }
  };

  const getUserInfo = async (accessToken) => {
    try {
      const response = await axios.get('https://kapi.kakao.com/v2/user/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const { profile_image, nickname, id } = response.data.properties;

      // 회원가입 여부 확인 (로컬스토리지에 저장된 사용자 데이터가 있는지 확인)
      const isNewUser = !localStorage.getItem(`user_${id}`); // `user_${id}`가 없다면 신규 유저

      // 사용자 정보 저장
      localStorage.setItem('profileImage', profile_image);
      localStorage.setItem('nickname', nickname);
      localStorage.setItem(`user_${id}`, JSON.stringify(response.data));

      console.log('User Info:', response.data);

      // 회원가입 여부에 따라 페이지 이동
      if (isNewUser) {
        navigate('/onboarding1'); // 회원가입인 경우 : 온보딩 페이지로 이동
      } else {
        handleStart(); // 로그인 인 경우 : 스플래시 화면 후 /exhibition으로 이동
      }
    } catch (error) {
      console.error('사용자 정보 요청 실패:', error);
    }
  };

  // 버튼 클릭 시 스플래시 화면 표시 후 /exhibition으로 이동
  const handleStart = () => {
    setShowSplash(true); // 스플래시 화면 활성화
    setTimeout(() => {
      setShowSplash(false); // 스플래시 화면 비활성화
      navigate('/exhibition');
    }, 1500); // 1.5초 후 /exhibition으로 이동
  };

  const handleKakaoLogin = () => {
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
    window.location.href = KAKAO_AUTH_URL; // 카카오 인증 페이지로 이동
  };

  return (
    <>
      {showSplash ? (
        <SplashScreen>스플래시 화면</SplashScreen> // 스플래시 화면
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
