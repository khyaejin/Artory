import React from 'react';
import styled from 'styled-components';

export default function AgreementSection({ agreements, onChange }) {
  return (
    <AgreementWrapper>
      <AgreementItem>
        <Checkbox
          type="checkbox"
          checked={agreements.all}
          onChange={() => onChange('all')}
        />
        모두 동의합니다.
      </AgreementItem>
      <AgreementItem>
        <Checkbox
          type="checkbox"
          checked={agreements.terms}
          onChange={() => onChange('terms')}
        />
        이용약관 동의
      </AgreementItem>
      <AgreementItem>
        <Checkbox
          type="checkbox"
          checked={agreements.personalInfo}
          onChange={() => onChange('personalInfo')}
        />
        개인정보 취급방침 동의
      </AgreementItem>
      <AgreementItem>
        <Checkbox
          type="checkbox"
          checked={agreements.marketing}
          onChange={() => onChange('marketing')}
        />
        마케팅 정보 수신 동의(선택)
      </AgreementItem>
    </AgreementWrapper>
  );
}

const AgreementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const AgreementItem = styled.label`
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  appearance: none; // 기본 체크박스 스타일 제거
  border: 1px solid #000; // 테두리 검정색 설정
  border-radius: 4px; // 네모 박스에 약간의 둥근 모서리 추가
  outline: none;
  cursor: pointer;

  &:checked {
    background-color: #000; // 체크박스 내부를 검정색으로 채움
    border: 1px solid #000; // 테두리 유지
  }

  &:focus {
    outline: 2px solid rgba(0, 0, 0, 0.5); // 포커스 시 외곽선 추가
  }
`;
