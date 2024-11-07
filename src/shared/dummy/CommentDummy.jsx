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

export const comments = [
    {
        "아이디": 1,
        "작성자아이디":1,
        "프로필": USER1,
        "작성자": "맴맴",
        "이모지": FACE_B1,
        "댓글":'SNS에서 많이 봐서 궁금했는데 저도 보러 가야겠어요!',
        "대댓글": [
            {
                "아이디":1,
                "작성자아이디": 2,
                "프로필": USER2,
                "댓글": "SNS에서 많이 봐서 궁금했는데 저도 보러 가야겠어요!!",
            },
        ]

    },
    {
        "아이디": 2,
        "작성자아이디":2,
        "프로필": USER2,
        "작성자": "일기는 작심삼일",
        "이모지": FACE_B8,
        "댓글":"저도 보러 갔었는데,, 작가님은 못 만났진만 재밌었어요!",
        "대댓글": [
        ]


    },
    {
        "아이디": 3,
        "작성자아이디":3,
        "프로필": USER3,
        "작성자": "마니또",
        "이모지": FACE_B5,
        "댓글":"굿즈에 있는 사진이 진짜 같고 이쁜데,  품절이라 저도 구매 못했어요ㅜ",
        "대댓글": [

        ]


    },
    {
        "아이디": 4,
        "작성자아이디":4,
        "프로필": USER4,
        "작성자": "전시덕후",
        "이모지": FACE_B1,
        "댓글": "전시 보고 나니 작가의 다른 작품들도 궁금해졌어요!",
        "대댓글": [
  
        ]

    },
    {
        "아이디": 5,
        "작성자아이디":5,
        "프로필": USER5,
        "작성자": "새벽감성",
        "이모지": FACE_B2,
        "댓글": "전시 분위기가 정말 좋더라고요~ 나중에 또 가고 싶어요.",
        "대댓글": [

        ]

    },
    {
        "아이디": 6,
        "작성자아이디":6,
        "프로필": USER6,
        "작성자": "빵덕",
        "이모지": FACE_B6,
        "댓글": "카페랑 같이 있어서 전시 보고 빵 먹었어요. 완벽한 조합!",
        "대댓글": [

        ]

    },
    {
        "아이디": 7,
        "작성자아이디":7,
        "프로필": USER7,
        "작성자": "지나가는 관객",
        "이모지": FACE_B4,
        "댓글": "기대보단 아쉬웠지만, 그래도 독특한 경험이었어요.",
        "대댓글": [
        ]

    }
]