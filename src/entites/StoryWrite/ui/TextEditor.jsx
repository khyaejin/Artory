// <path-to-your-build>/src/ckeditor.ts or file containing editor configuration if you are integrating an editor from source.

// The editor creator to use.
import '../../../css/ckeditor.css'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useState } from 'react';
import ImgaeLoader from './ImageLoader';
import EmojiPicker from './EmojiPicker';
import styled from 'styled-components';

const TextEditor = () => {
  const [keyword, setKeyword] = useState();
  const [data, setData] = useState();
  const editorConfiguration = {
    contentRenderer: (view, model, writer) => {
      if (model.isText()) {
        // 텍스트 노드인 경우에만 처리
        writer.setAttribute('data-emoji', true, model);
      }
    },
    toolbar: {
      items: [
        'heading',
        '|',
        'bold',
        'italic',
        'link',
        'bulletedList',
        'numberedList',
        '|',
        'outdent',
        'indent',
        'blockQuote',
        '|',
        'insertTable',
        'undo',
        'redo',
        'alignment',
        'codeBlock',
        'code',
        'findAndReplace',
        'fontBackgroundColor',
        'fontColor',
        'fontSize',
        'fontFamily',
        'highlight',
        'horizontalLine',
        'pageBreak',
        'removeFormat',
        'sourceEditing',
        'specialCharacters',
        'strikethrough',
        'restrictedEditingException',
        'subscript',
        'style',
        'superscript',
        'textPartLanguage',
        'todoList',
        'underline'
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
      ],
    },
    table: {
      contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
    },
    heading: {
      options: [
        {
          model: 'paragraph',
          view: 'p',
          title: '본문',
          class: 'ck-heading_paragraph',
        },
        {
          model: 'heading2',
          view: 'h2',
          title: '제목',
          class: 'ck-heading_heading2',
        },
        {
          model: 'heading3',
          view: 'h3',
          title: '부제목',
          class: 'ck-heading_heading3',
        },
        {
          model: 'heading4',
          view: 'h4',
          title: '소제목',
          class: 'ck-heading_heading4',
        },
      ],
    },
    placeholder: '이곳에 내용을 작성해 주세요',
  };

  return (
    <div style={{ width: '100%' }}>
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
        onChange={async (event, editor) => {
          try {
            await setData(editor.getData()); // 에디터 작성 내용 저장
          } catch (error) {
            console.log('이모지 테스트', error.response.data);
          }
        }}
      >
      </CKEditor>
      <ImgaeLoader setData={setData} />
      <EmojiPicker setData={setData} data={data} className="이모티콘" />
    </div>
  );
};

export default TextEditor;


const Keyword = styled.div`
  padding: 2.69rem 0 0 2.5rem;
  z-index: 101;
  /* width: 100%; */
  width: 50rem;
  background: none;
  font-size: 1.3rem;
  font-weight: bold;
  position : absolute;
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