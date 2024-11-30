import '../../../css/ckeditor.css';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useState } from 'react';
import styled from 'styled-components';
import ImageLoader from './ImageLoader';

const TextEditor = () => {
  const [keyword, setKeyword] = useState('');
  const [data, setData] = useState('');

  const editorConfiguration = {
    toolbar: {
      items: [
        'undo',
        'redo',
        '|',
        'heading',
        'fontFamily',
        'fontSize',
        '|',
        'bold',
        'italic',
        'underline',
        'strikethrough',
        '|',
        'bulletedList',
        'numberedList',
        'alignment',
        '|',
        'blockQuote',
        'link',
        'imageStyle:inline',
        'imageStyle:block',
        'imageStyle:side',
        '|',
        'resizeImage:50',
        'resizeImage:75',
        'resizeImage:original',
      ],
    },
    language: 'ko',
    image: {
      toolbar: [
        'imageTextAlternative',
        'toggleImageCaption',
        'imageStyle:inline',
        'imageStyle:block',
        'imageStyle:side',
        '|',
        'resizeImage:50',
        'resizeImage:75',
        'resizeImage:original',
      ],
      resizeUnit: '%', // 크기 조정 단위
      styles: ['inline', 'block', 'side'],
    },
    placeholder: '이곳에 내용을 작성해 주세요',
  };

  return (
    <div style={{ width: '100%', position: 'relative' }}>
      <Keyword>
        <p>오늘의 전시 키워드</p>
        <KeywordInput
          type="text"
          value={keyword}
          placeholder="#키워드를 입력해주세요"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <br />
        <p>오늘의 전시 스토리</p>
      </Keyword>
      <CKEditor
        id="ckeditor"
        editor={ClassicEditor}
        config={editorConfiguration}
        data={data}
        onChange={(event, editor) => {
          setData(editor.getData());
        }}
      />
      <ImageLoaderContainer>
        <ImageLoader setData={setData} />
      </ImageLoaderContainer>
    </div>
  );
};

export default TextEditor;

const Keyword = styled.div`
  padding: 0 0 0 2.5rem;
  z-index: 101;
  width: 50rem;
  background: none;
  font-size: 1.3rem;
  font-weight: bold;
  position : absolute;
  margin-top : 2.5rem;
`;

const KeywordInput = styled.input`
  font-family: 'Pretendard';
  color: #5a5c62;
  font-size: 0.95rem;
  border: none;
  outline: none;
  width: 90%;
  &::placeholder {
    color: #5a5c62;
  }
`;
const ImageLoaderContainer = styled.div`
position : absolute;
bottom : 1rem;
right : 5%;

`