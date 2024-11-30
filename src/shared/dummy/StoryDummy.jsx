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
import STORY6 from '../../assets/story/6.svg';
import STORY7 from '../../assets/story/7.svg';
import STORY8 from '../../assets/story/8.svg';


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
            { "type": "text", "content": "오늘은 드디어 꼭 가고 싶던.. 황성욱 작가님의 개인전을 보러 갔다!!!!!!!" },
            { "type": "image", "src": POSTER1 },
            { "type": "text", "content": "또 이번 개인전에서 공개한 작가님의 트럼프 카드 작업까지 볼 수 있었습니다!" },
            { "type": "image", "src": STORY4 },
            { "type": "text", "content": "이렇게 신기한 조형물도 봤어요:)" },
            { "type": "image", "src": STORY7 },
            { "type": "text", "content": "다들 전시 종료 전에 꼭 황성욱 전시 보러 가시길 추천드립니답!" },
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
                "작성자": "나야나",
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
                "이모지": FACE_B6,
                "댓글": "이번 전시 정말 인상 깊어요.",
                "대댓글": []
            },
            {
                "아이디": 3,
                "작성자아이디": 4,
                "프로필": USER4,
                "작성자": "전시덕후",
                "이모지": FACE_B7,
                "댓글": "저도 저번에 보러갔었는데 너무너무 좋았어요!!",
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
        "글제목": "반고흐, 그림에 반하고 인생에 반하다! - 홍대 띠아트 '반고흐 인 서울' 전시회 솔직한 후기",
        "방문일": "2024.04.10",
        "관람소요시간": "1시간 30분",
        "만족도": GOODEMOTION,
        "날씨": CLEARWEATHER,
        "동행인": "가족",
        "카테고리": ["예술", "전시"],
        "키워드": ["#반고흐", "#서울전시", "#스토리 몰입형전시"],
        "글내용": [
            { "type": "text", "content": "오래전부터 반고흐 작품을 좋아했는데, 이번 서울 전시회에서 원화들을 직접 보게 되어 너무 설렜어요!" },
            { "type": "image", "src": POSTER2 },
            { "type": "text", "content": "시간대별로 인원을 제한해서 그런지 사람이 많지 않았습니다. " },
            { "type": "text", "content": "<아를의 반 고흐의 방> 작품이 가장 인상이 깊었는데요, 실제로 작품 속에 들어간 듯한 사진을 찍을 수 있었거든요" },
            { "type": "text", "content": "개인적으로 크게 추천드리고 싶진 않았어요. 왜냐하면 전체적인 스토리가 부실했고, 작은 크기의 미디어 아트 전시회임에도 불구하고 해상도가 낮게 느껴졌어요. 그래도 추운 날씨에 갈만한 실내 장소를 찾으신다면 한번쯤 방문해서 관람하는 거 추천드립니다:) 연인 또는 가족, 친구랑 추억 남기기에는 너무 좋은 전시예요." },
            { "type": "text", "content": "어디까지나 저의 주관적인 의견일뿐이며 다른 분께서는 다르게 느껴질 수 있습니다. 한번은 가는 거 추천드려요!!!" },
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
                "댓글": "친구들과 함께 보러 갔었어요. 친구들이 다 재밌었대요! 다들 전시 끝나기 전에 꼭 가세요ㅜㅠ 정말 추천합니다",
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
        "전시이름": "미셸 들라크루아, 파리의 벨 에포크",
        "작성자": "파리지앵",
        "작성자프로필": USER7,
        "글제목": "파리의 낭만과 미셸 들라크루아를 만나다",
        "방문일": "2024.09.01",
        "관람소요시간": "1시간 30분",
        "만족도": GOODEMOTION,
        "날씨": CLEARWEATHER,
        "동행인": "혼자",
        "카테고리": ["회화", "역사"],
        "키워드": ["#파리", "#겨울느낌"],
        "글내용": [
            { "type": "text", "content": "크리스마스 연휴 기념으로 서울 예술의전당으로 전시회를 다녀왔습니다. 여러 전시회 중에 '미셸 들라크루아'의 파리의 벨 에포크 전시가 있었는데요, 평생 전쟁 전 1930년대의 파리를 그리워하며 그림을 그리던 화가는, 90세가 넘은 지금도 여전히 파리의 그림을 그리고 있습니다. 탄생 90주년을 맞아 한국경제에서 주관한 이번 전시회는 그런 작가의 최근 작품을 모아서 보여줍니다."},
            { "type": "image", "src": POSTER7 },
            { "type": "text", "content": "작품마다 상당히 비슷한 느낌을 받았습니다. 같은 거리를 여러 번 그린 것들이 많고, 포인트만 다르게 한 것도 많았습니다. 그럼에도 모든 작품마다 차이는 존재하고, 그 차이를 오롯이 독자가 찾고 느끼게 하는 점이 신선했습니다."},
            { "type": "image", "src": STORY6 },
        ],
        "작성날짜": '2024.09.03',
        "좋아요": 22,
        "스크랩": 15,
        "댓글": [
            {
                "아이디": 1,
                "작성자아이디": 11,
                "프로필": USER8,
                "작성자": "전시러버",
                "이모지": FACE_B6,
                "댓글": "정말 흥미로운 전시였어요!",
                "대댓글": []
            }
        ]
    },
    {
        "아이디": 7,
        "포스터": POSTER8,
        "전시이름": "우연히 웨스 앤더슨 2 : 모험은 계속된다",
        "작성자": "탐험가",
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
        ]
    },
    {
        "아이디": 8,
        "포스터": POSTER9,
        "전시이름": "서울 미디어아트 '앙리마티스'",
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
            { "type": "text", "content": "CXC 아트 뮤지엄에서 선보이는 이번 앙리 마티스 특별전은 마티스의 후기 작품들이 주를 이루는 전시로, 그가 남긴 드로잉과 아트북, 포스터, 판화 작품들을 만나볼 수 있었다." },
            { "type": "image", "src": STORY7 },
            { "type": "text", "content": "생생하고 강렬한 색채의 종이를 오려 만든 이 작품들은 마티스가 아픈 와중에 만들어 낸 것이 맞는지 의심이 들 정도로 흥에 넘치고 재기 발랄하다. 색의 조화와 대비는 시각적인 리듬감을 불러일으키고, 자른 조각의 크고 작음, 화면 위에 배치한 형태들은 생동감을 느끼게 한다." },
            { "type": "image", "src": STORY8 },
            { "type": "text", "content":"앙리마티스의 작품은 전체적으로 다채로운 색의 스테인드 글라스가 눈길을 사로잡았다. 다시 한번 보러오고 싶을 만큼 인상깊은 전시였다."}
        ],
        "작성날짜": '2024.03.04',
        "좋아요": 32,
        "스크랩": 20,
        "댓글": [
            {
                "아이디": 1,
                "작성자아이디": 13,
                "프로필": USER8,
                "작성자": "빛사랑",
                "이모지": FACE_B2,
                "댓글": "미디어 아트는 언제나 기대 이상이죠!",
                "대댓글": []
            },
            {
                "아이디": 1,
                "작성자아이디": 12,
                "프로필": USER9,
                "작성자": "힐링러",
                "이모지": FACE_B5,
                "댓글": "저는 전시가 생각보다 너무 잔잔했어요ㅠ 마티스의 생동감과 율동감, 리듬감이 미디어 아트와 접목되면 더 즐거웠을 것 같다는 아쉬움이 있었습니다",
                "대댓글": [
                    {
                        "아이디": 1,
                        "작성자아이디": 1,
                        "프로필": USER1,
                        "댓글": "헉 맞아요.. 저도 그 생각했었어요"
                    }
                ]
            }
        ]
    }
    
];
