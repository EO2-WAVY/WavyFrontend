const dummyData: Tag[] = [
    {
        name: "BTS",
        image: "https://news.nateimg.co.kr/orgImg/tn/2021/05/17/tn_1621210324430_240612_0.jpg",
    },
    {
        name: "브레이브걸스",
        image: "https://news.nateimg.co.kr/orgImg/tn/2021/05/17/tn_1621210324430_240612_0.jpg",
    },
    {
        name: "프로미스나인",
        image: "https://news.nateimg.co.kr/orgImg/tn/2021/05/17/tn_1621210324430_240612_0.jpg",
    },
    {
        name: "STAYC",
        image: "https://news.nateimg.co.kr/orgImg/tn/2021/05/17/tn_1621210324430_240612_0.jpg",
    },
    {
        name: "에스파",
        image: "https://news.nateimg.co.kr/orgImg/tn/2021/05/17/tn_1621210324430_240612_0.jpg",
    },
    {
        name: "트와이스",
        image: "https://news.nateimg.co.kr/orgImg/tn/2021/05/17/tn_1621210324430_240612_0.jpg",
    },
    {
        name: "블랙핑크",
        image: "https://news.nateimg.co.kr/orgImg/tn/2021/05/17/tn_1621210324430_240612_0.jpg",
    },
    {
        name: "ITZY",
        image: "https://news.nateimg.co.kr/orgImg/tn/2021/05/17/tn_1621210324430_240612_0.jpg",
    },
    {
        name: "위키미키",
        image: "https://news.nateimg.co.kr/orgImg/tn/2021/05/17/tn_1621210324430_240612_0.jpg",
    },
    {
        name: "BTS",
        image: "https://news.nateimg.co.kr/orgImg/tn/2021/05/17/tn_1621210324430_240612_0.jpg",
    },
    {
        name: "BTS",
        image: "https://news.nateimg.co.kr/orgImg/tn/2021/05/17/tn_1621210324430_240612_0.jpg",
    },
    {
        name: "BTS",
        image: "https://news.nateimg.co.kr/orgImg/tn/2021/05/17/tn_1621210324430_240612_0.jpg",
    },
];

const useTags = () => {
    return { data: dummyData };
};

export default useTags;

export interface Tag {
    name: string;
    image: string;
}
