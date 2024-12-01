import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ExhibitionMap = ({ address, place }) => {
  const mapContainer = useRef(null);
  const KAKAO_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;

  useEffect(() => {
    const existingScript = document.querySelector(`script[src*="dapi.kakao.com"]`);
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&libraries=services&autoload=false`;
      script.async = true;

      script.onload = () => {
        if (!window.kakao || !window.kakao.maps) {
          console.error('카카오 SDK가 로드되지 않음');
          return;
        }

        window.kakao.maps.load(() => {
          initializeMap(address, place);
        });
      };

      document.head.appendChild(script);
    } else if (window.kakao && window.kakao.maps) {
      window.kakao.maps.load(() => initializeMap(address, place));
    }
  }, [address, place, KAKAO_API_KEY]);

  const initializeMap = (address, place) => {
    if (!window.kakao || !window.kakao.maps) {
      return;
    }

    const geocoder = new window.kakao.maps.services.Geocoder();
    const places = new window.kakao.maps.services.Places();

    // 1. 주소 먼저 검색
    if (address) {
      geocoder.addressSearch(address, (result, status) => {
        // 주소로 위치를 찾을 수 있다면
        if (status === window.kakao.maps.services.Status.OK && result.length > 0) {
          const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

          // 지도 생성
          const map = new window.kakao.maps.Map(mapContainer.current, {
            center: coords,
            level: 3, // 확대 레벨
          });

          // 마커 추가
          new window.kakao.maps.Marker({
            position: coords,
            map: map,
          });
        } else { // 주소로 검색 실패 시 장소로 검색
          searchByPlace(places, place);
        }
      });
    } else {
      // 주소가 없으면 바로 장소 검색
      searchByPlace(places, place);
    }
  };

  // 2. 장소로 검색
  const searchByPlace = (places, place) => {
    places.keywordSearch(place, (result, status) => {
      if (status === window.kakao.maps.services.Status.OK && result.length > 0) {
        const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

        // 지도 생성
        const map = new window.kakao.maps.Map(mapContainer.current, {
          center: coords,
          level: 3, // 확대 레벨
        });

        // 지도 위 마커 추가
        new window.kakao.maps.Marker({
          position: coords,
          map: map,
        });
      }
    });
  };

  return (
    <MapLayout>
      <MapContainer ref={mapContainer} />
      <AddressContainer>
        <AddresText>위치 :&nbsp;</AddresText>
        <Address>{address} {place}</Address>
      </AddressContainer>
    </MapLayout>
  );
};

export default ExhibitionMap;

const MapLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const MapContainer = styled.div`
width:1014px;
  height: 406px;
`;

const AddressContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 286px;
`;

const AddresText = styled.div`
  color: var(--3, #505154);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 133.072%;
  letter-spacing: 0.56px;
`;

const Address = styled.div`
  color: var(--3, #505154);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 133.072%;
  letter-spacing: 0.56px;
`;
