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
        마케팅 정보 수신 동의
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
`;
