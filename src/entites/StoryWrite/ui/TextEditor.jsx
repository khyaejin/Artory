// <path-to-your-build>/src/ckeditor.ts or file containing editor configuration if you are integrating an editor from source.

// The editor creator to use.
import '../../../css/ckeditor.css'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react';


const TextEditor = () => {
    const [data,setData] = useState();
    const edrtorConfiguration = {
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
				'imageUpload',
				'blockQuote',
				'|',
				'insertTable',
				'mediaEmbed',
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
				'htmlEmbed',
				'imageInsert',
				'pageBreak',
				'selectAll',
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
			]
		},
		language: 'ko',
		image: {
			toolbar: [
				'imageTextAlternative',
				'toggleImageCaption',
				'imageStyle:inline',
				'imageStyle:block',
				'imageStyle:side',
				'linkImage'
			]
		},
		table: {
			contentToolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells',
				'tableCellProperties',
				'tableProperties'
			]
		}
    };

    return (
        <CKEditor 
        editor={ClassicEditor}
        config={edrtorConfiguration}
        data = "<p> 이곳에 내용을 작성해 주세요!</p>"
        onChange={(event, editor) => {
            setData(editor.getData()); // 에디터 작성 내용 저장 
        }}
        />
    )
}

export default TextEditor;