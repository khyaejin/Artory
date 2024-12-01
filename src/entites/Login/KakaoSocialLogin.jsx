import React, { useEffect } from 'react';
import styled from 'styled-components';
import KakaoLoginButtonImage from '../../assets/login/kakao_login_large_narrow 2.svg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const KAKAO_CLIENT_ID = process.env.REACT_APP_KAKAO_CLIENT_ID; // .env에서 가져오기
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI; // .env에서 가져오기

const KakaoSocialLogin = () => {
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate 훅

  useEffect(() => {
    const url = new URL(window.location.href);
    // 1. 인증 코드 가져오기
    const code = url.searchParams.get('code'); // 인증 코드 가져오기

    if (code) {
      getAccessToken(code); // 내부 함수로
    }
    else{
        console.log("code 없음");
    }
  }, []);

  // 2. 인증코드를 사용해 접근 토큰 받아오기
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
      getUserInfo(access_token); // 내부 함수로
    } catch (error) {
      console.error('Access Token 요청 실패:', error);
    }
  };

  // 3. 접근토큰으로 유저 정보 가져오기
  const getUserInfo = async (accessToken) => {
    try {
      const response = await axios.get('https://kapi.kakao.com/v2/user/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      const { profile_image, nickname } = response.data.properties;
  
      // 4. 정보 저장 (백 로직이 없으므로 로컬스토리지에 사용자 정보 저장)
      localStorage.setItem('profileImage', profile_image);
      localStorage.setItem('nickname', nickname);
      console.log('User Info:', response.data);

      // onboarding1으로 페이지 이동
      navigate('/onboarding1');
    } catch (error) {
      console.error('사용자 정보 요청 실패:', error);
    }
  };

  const handleKakaoLogin = () => {
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
    window.location.href = KAKAO_AUTH_URL; // 카카오 인증 페이지로 이동
  };

  return (
    <SocialButton onClick={handleKakaoLogin}>
      <img src={KakaoLoginButtonImage} alt="카카오 로그인" />
    </SocialButton>
  );
};

export default KakaoSocialLogin;

const SocialButton = styled.div`
  flex: 1;
  max-width: 48%;
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
