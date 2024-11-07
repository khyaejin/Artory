import POSTER1 from '../../assets/poster/1.svg';
import POSTER2 from '../../assets/poster/2.svg';
import POSTER3 from '../../assets/poster/3.svg';
import POSTER4 from '../../assets/poster/4.svg';
import POSTER5 from '../../assets/poster/5.svg';
import POSTER6 from '../../assets/poster/6.svg';
import POSTER7 from '../../assets/poster/7.svg';
import POSTER8 from '../../assets/poster/8.svg';
import POSTER9 from '../../assets/poster/9.svg';

// 공감 이미지
import FACE_B1 from '../../assets/face/face_b1.svg';
import FACE_B2 from '../../assets/face/face_b2.svg';
import FACE_B3 from '../../assets/face/face_b3.svg';
import FACE_B4 from '../../assets/face/face_b4.svg';
import FACE_B5 from '../../assets/face/face_b5.svg';
import FACE_B6 from '../../assets/face/face_b6.svg';
import FACE_B7 from '../../assets/face/face_b7.svg';
import FACE_B8 from '../../assets/face/face_b8.svg';
import FACE_B9 from '../../assets/face/face_b9.svg';

// 유저 이미지
import USER1 from '../../assets/user/1.svg';
import USER2 from '../../assets/user/2.svg';
import USER3 from '../../assets/user/3.svg';
import USER4 from '../../assets/user/4.svg';
import USER5 from '../../assets/user/5.svg';
import USER6 from '../../assets/user/6.svg';
import USER7 from '../../assets/user/7.svg';
import USER8 from '../../assets/user/8.svg';
import USER9 from '../../assets/user/9.svg';
// 만족도
import GOODEMOTION from '../../assets/emotion-good.svg';

// 날씨
import CLEARWEATHER from '../../assets/weather-clear.svg';


// 스토리
import STORY1 from '../../assets/story/1.svg';
import STORY2 from '../../assets/story/2.svg';
import STORY3 from '../../assets/story/3.svg';
import STORY4 from '../../assets/story/4.svg';
import STORY5 from '../../assets/story/5.svg';

export const Stories = [
    {
        "아이디": 0,
        "포스터": POSTER1,
        "전시이름": "황성욱 개인전 <GIWOOLGI>",
        "작성자": "성공한덕후",
        "작성자프로필": USER9,
        "글제목": "전시 보러갔다가 작가님 만난 후기,,",
        "방문일": "2024.03.05",
        "관람소요시간": "2시간",
        "만족도": GOODEMOTION,
        "날씨": CLEARWEATHER,
        "동행인": "친구",
        "카테고리": ["현대 미술", "색채 예술"],
        "키워드": ["# 황성욱", "# 개인전", "# 실물영접"],
        "글내용": [
            { "type": "text", "content": "오늘은 드디어 꼭 가고 싶던..요시다 유니 작가님의 개인전을 보러 갔다!!!!!!!" },
            { "type": "image", "src": POSTER1 },
            { "type": "text", "content": "또 이번 개인전에서 공개한 작가님의 트럼프 카드 작업까지 볼 수 있었습니다!" },
            { "type": "image", "src": STORY4 },
            { "type": "text", "content": "다들 전시 종료 전에 꼭 요시다 유니 전시 보러 가시길 추천드립니답!" },
            { "type": "image", "src": STORY2 },
        ],
        "작성날짜": '2024.03.10',
        "좋아요": 35,
        "스크랩": 10,
        "댓글": [
            {
                "아이디": 1,
                "작성자아이디": 1,
                "프로필": USER1,
                "작성자": "맴맴",
                "이모지": FACE_B1,
                "댓글": "저도 꼭 보러 가야겠어요!",
                "대댓글": [
                    {
                        "아이디": 1,
                        "작성자아이디": 2,
                        "프로필": USER2,
                        "댓글": "정말 재밌었어요!"
                    }
                ]
            },
            {
                "아이디": 2,
                "작성자아이디": 3,
                "프로필": USER3,
                "작성자": "마니또",
                "이모지": FACE_B5,
                "댓글": "이번 전시 정말 인상 깊어요.",
                "대댓글": []
            }
        ]
    },
    {
        "아이디": 1,
        "포스터": POSTER2,
        "전시이름": "반고흐 인 서울",
        "작성자": "김영희",
        "작성자프로필": USER2,
        "글제목": "미래 도시를 꿈꾸며",
        "방문일": "2024.04.10",
        "관람소요시간": "1시간 30분",
        "만족도": GOODEMOTION,
        "날씨": CLEARWEATHER,
        "동행인": "가족",
        "카테고리": ["건축", "미래 디자인"],
        "키워드": ["#반고흐", "#서울전시"],
        "글내용": [
            { "type": "text", "content": "미래의 건축과 도시 디자인을 볼 수 있는 좋은 기회였습니다." },
            { "type": "image", "src": STORY3 },
            { "type": "text", "content": "특히 친환경 건축에 대한 전시물이 흥미로웠어요." }
        ],
        "작성날짜": '2024.04.11',
        "좋아요": 30,
        "스크랩": 10,
        "댓글": [
            {
                "아이디": 1,
                "작성자아이디": 4,
                "프로필": USER4,
                "작성자": "전시덕후",
                "이모지": FACE_B1,
                "댓글": "전시 분위기가 너무 좋았어요!",
                "대댓글": []
            },
            {
                "아이디": 2,
                "작성자아이디": 5,
                "프로필": USER5,
                "작성자": "새벽감성",
                "이모지": FACE_B2,
                "댓글": "친구들과 함께 보러 갔었어요.",
                "대댓글": [
                    {
                        "아이디": 1,
                        "작성자아이디": 6,
                        "프로필": USER6,
                        "댓글": "전시 끝나기 전에 꼭 다시 가보고 싶네요."
                    }
                ]
            }
        ]
    },
    {
        "아이디": 2,
        "포스터": POSTER3,
        "전시이름": "일리야 밀스타인: 기억의 캐비닛",
        "작성자": "이민호",
        "작성자프로필": USER3,
        "글제목": "디지털 아트의 세계로",
        "방문일": "2024.05.15",
        "관람소요시간": "2시간 30분",
        "만족도": GOODEMOTION,
        "날씨": CLEARWEATHER,
        "동행인": "혼자",
        "카테고리": ["디지털 아트", "미디어 아트"],
        "키워드": ["#디지털아트", "#기억의캐비닛"],
        "글내용": [
            { "type": "text", "content": "디지털 아트와 기술의 결합이 너무 놀라웠습니다." },
            { "type": "image", "src": STORY4 },
            { "type": "text", "content": "작품들이 생동감 있고, 미래 기술의 발전을 알게 되었어요." }
        ],
        "작성날짜": '2024.05.20',
        "좋아요": 0,
        "스크랩": 0,
        "댓글": [
            {
                "아이디": 1,
                "작성자아이디": 7,
                "프로필": USER7,
                "작성자": "지나가는 관객",
                "이모지": FACE_B4,
                "댓글": "특별한 경험이었어요.",
                "대댓글": []
            }
        ]
    },
    {
        "아이디": 3,
        "포스터": POSTER4,
        "전시이름": "클로드 오스카 모네: Meets The Scent",
        "작성자": "박수진",
        "작성자프로필": USER4,
        "글제목": "고대 문명 전시, 시간 여행",
        "방문일": "2024.06.15",
        "관람소요시간": "3시간",
        "만족도": GOODEMOTION,
        "날씨": CLEARWEATHER,
        "동행인": "연인",
        "카테고리": ["역사", "고고학"],
        "키워드": ["#고대문명", "#시간여행"],
        "글내용": [
            { "type": "text", "content": "고대 문명의 신비로움을 느낄 수 있었던 전시회였습니다." },
            { "type": "image", "src": STORY2 },
            { "type": "text", "content": "유물들이 정말 잘 보존되어 있었고, 설명도 상세했어요." }
        ],
        "작성날짜": '2024.06.15',
        "좋아요": 5,
        "스크랩": 10,
        "댓글": [
            {
                "아이디": 1,
                "작성자아이디": 8,
                "프로필": USER8,
                "작성자": "감성러",
                "이모지": FACE_B6,
                "댓글": "유물들이 잘 보존되어 있어 인상 깊었어요.",
                "대댓글": []
            }
        ]
    },
    {
        "아이디": 4,
        "포스터": POSTER5,
        "전시이름": "미래 도시와 스마트 라이프 체험",
        "작성자": "최지훈",
        "작성자프로필": USER5,
        "글제목": "미래 도시와 스마트 라이프 체험",
        "방문일": "2024.07.20",
        "관람소요시간": "1시간",
        "만족도": GOODEMOTION,
        "날씨": CLEARWEATHER,
        "동행인": "동료",
        "카테고리": ["스마트 테크", "미래 생활"],
        "키워드": ["#스마트도시", "#미래생활"],
        "글내용": [
            { "type": "text", "content": "스마트 도시 기술을 소개하는 전시였습니다." },
            { "type": "image", "src": POSTER5 },
            { "type": "text", "content": "흥미로운 내용이 많았지만, 더운 날씨라 집중하기 힘들었어요." }
        ],
        "작성날짜": '2024.07.28',
        "좋아요": 9,
        "스크랩": 8,
        "댓글": [
            {
                "아이디": 1,
                "작성자아이디": 9,
                "프로필": USER9,
                "작성자": "성공한덕후",
                "이모지": FACE_B3,
                "댓글": "기술적인 요소들이 정말 놀라웠어요!",
                "대댓글": [
                    {
                        "아이디": 1,
                        "작성자아이디": 5,
                        "프로필": USER5,
                        "댓글": "저도 그 부분에서 감동 받았어요!"
                    }
                ]
            }
        ]
    },
    {
        "아이디": 5,
        "포스터": POSTER6,
        "전시이름": "피카소와 현대미술",
        "작성자": "예술혼",
        "작성자프로필": USER6,
        "글제목": "피카소의 예술세계에 빠져들다",
        "방문일": "2024.08.10",
        "관람소요시간": "2시간",
        "만족도": GOODEMOTION,
        "날씨": CLEARWEATHER,
        "동행인": "가족",
        "카테고리": ["현대 미술", "피카소"],
        "키워드": ["#피카소", "#현대미술"],
        "글내용": [
            { "type": "text", "content": "피카소의 작품을 직접 보니 감동적이었습니다!" },
            { "type": "image", "src": STORY1 },
            { "type": "text", "content": "그의 색채와 형태 표현이 인상 깊었어요." }
        ],
        "작성날짜": '2024.08.12',
        "좋아요": 12,
        "스크랩": 6,
        "댓글": [
            {
                "아이디": 1,
                "작성자아이디": 10,
                "프로필": USER7,
                "작성자": "미술좋아",
                "이모지": FACE_B4,
                "댓글": "피카소 전시를 놓치지 말아야겠네요!",
                "대댓글": []
            }
        ]
    },
    {
        "아이디": 6,
        "포스터": POSTER7,
        "전시이름": "미래의 기술",
        "작성자": "기술매니아",
        "작성자프로필": USER7,
        "글제목": "미래의 기술을 엿보다",
        "방문일": "2024.09.01",
        "관람소요시간": "1시간 30분",
        "만족도": GOODEMOTION,
        "날씨": CLEARWEATHER,
        "동행인": "혼자",
        "카테고리": ["테크놀로지", "미래"],
        "키워드": ["#미래기술", "#AI"],
        "글내용": [
            { "type": "text", "content": "AI와 로봇 기술이 인상적이었어요!" },
            { "type": "image", "src": STORY2 },
            { "type": "text", "content": "미래를 체험하는 기분이었습니다." }
        ],
        "작성날짜": '2024.09.03',
        "좋아요": 22,
        "스크랩": 15,
        "댓글": [
            {
                "아이디": 1,
                "작성자아이디": 11,
                "프로필": USER8,
                "작성자": "기술러버",
                "이모지": FACE_B6,
                "댓글": "정말 흥미로운 전시였어요!",
                "대댓글": []
            }
        ]
    },
    {
        "아이디": 7,
        "포스터": POSTER8,
        "전시이름": "자연의 미학",
        "작성자": "자연인",
        "작성자프로필": USER8,
        "글제목": "자연의 아름다움을 다시 보다",
        "방문일": "2024.10.05",
        "관람소요시간": "2시간",
        "만족도": GOODEMOTION,
        "날씨": CLEARWEATHER,
        "동행인": "친구",
        "카테고리": ["자연", "예술"],
        "키워드": ["#자연", "#힐링"],
        "글내용": [
            { "type": "text", "content": "자연의 색채와 조화를 느낄 수 있었던 전시회였어요." },
            { "type": "image", "src": STORY3 },
            { "type": "text", "content": "편안함과 힐링을 얻고 갑니다." }
        ],
        "작성날짜": '2024.10.08',
        "좋아요": 18,
        "스크랩": 9,
        "댓글": [
            {
                "아이디": 1,
                "작성자아이디": 12,
                "프로필": USER9,
                "작성자": "힐링러",
                "이모지": FACE_B5,
                "댓글": "자연의 예술을 느껴보고 싶네요!",
                "대댓글": []
            }
        ]
    },
    {
        "아이디": 8,
        "포스터": POSTER9,
        "전시이름": "미디어 아트 페스티벌",
        "작성자": "예술가",
        "작성자프로필": USER9,
        "글제목": "빛과 색의 향연, 미디어 아트",
        "방문일": "2024.11.01",
        "관람소요시간": "2시간 30분",
        "만족도": GOODEMOTION,
        "날씨": CLEARWEATHER,
        "동행인": "연인",
        "카테고리": ["미디어 아트", "현대 예술"],
        "키워드": ["#미디어아트", "#빛과색"],
        "글내용": [
            { "type": "text", "content": "빛과 색이 어우러진 환상적인 경험이었습니다." },
            { "type": "image", "src": STORY4 },
            { "type": "text", "content": "가장 인상적인 전시였어요." }
        ],
        "작성날짜": '2024.11.04',
        "좋아요": 32,
        "스크랩": 20,
        "댓글": [
            {
                "아이디": 1,
                "작성자아이디": 13,
                "프로필": USER1,
                "작성자": "빛사랑",
                "이모지": FACE_B8,
                "댓글": "미디어 아트는 언제나 기대 이상이죠!",
                "대댓글": []
            }
        ]
    }
    
];
