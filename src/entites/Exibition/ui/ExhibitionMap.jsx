import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ExhibtionMap = ({ address }) => {
  const mapContainer = useRef(null); // 지도 DOM 참조
  const KAKAO_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&libraries=services&autoload=false`;
    script.async = true;

    script.onload = () => {
      window.kakao.maps.load(() => {
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소를 좌표로
        geocoder.addressSearch(address, (result, status) => {
          if (status === window.kakao.maps.services.Status.OK && result.length > 0) {
            const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

            const map = new window.kakao.maps.Map(mapContainer.current, {
              center: coords,
              level: 3,
            });

            new window.kakao.maps.Marker({
              position: coords,
              map: map,
            });
          } else {
            console.error('Invalid address or no results found.');
          };
        });
      });
    };

    script.onerror = () => {
      console.error('Failed to load Kakao Maps script.');
    };

    document.head.appendChild(script);
  }, [address, KAKAO_API_KEY]);

  return(
    <MapLayout>
      {/* 지도 */}
      <MapContainer ref={mapContainer} />

      {/* 주소 */}
      <AddressContainer>
      <AddresText>위치 : </AddresText>
      <Address>{address}</Address>
      </AddressContainer>

    </MapLayout>
  ); 
};

export default ExhibtionMap;

const MapLayout=styled.div`
display:flex;
flex-direction: column;
gap:15px;
`;

const MapContainer = styled.div`
  width: 1012px;
  height: 406px;
`;

const AddressContainer=styled.div`
display:flex;
flex-direction:row;
margin-bottom:286px;
`;

const AddresText=styled.div`
color: var(--3, #505154);
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 133.072%; /* 21.292px */
letter-spacing: 0.56px;`;

const Address=styled.div`
color: var(--3, #505154);
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 133.072%;
letter-spacing: 0.56px;
`;