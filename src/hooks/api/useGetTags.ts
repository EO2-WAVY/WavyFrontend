const dummyData: Tag[] = [
    {
        name: "BTS",
        image: "https://img0.yna.co.kr/etc/inner/KR/2021/06/19/AKR20210619028500005_01_i_P2.jpg",
    },
    {
        name: "브레이브걸스",
        image: "https://cdn.mhnse.com/news/photo/202108/82074_58262_2751.jpg",
    },
    {
        name: "프로미스나인",
        image: "https://img.sbs.co.kr/newsnet/etv/upload/2019/06/03/30000628847_1280.jpg",
    },
    {
        name: "STAYC",
        image: "https://img.wowtv.co.kr/wowtv_news/dnrs/20210401/2021040107331202747d3244b4fed182172186127.jpg",
    },
    {
        name: "에스파",
        image: "https://news.nateimg.co.kr/orgImg/tn/2021/05/17/tn_1621210324430_240612_0.jpg",
    },
    {
        name: "트와이스",
        image: "https://file.mk.co.kr/meet/neds/2021/06/image_readtop_2021_629774_16250076624698013.jpg",
    },
    {
        name: "블랙핑크",
        image: "http://image.newsis.com/2021/04/13/NISI20210413_0000725383_web.jpg",
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

const useGetTags = () => {
    return { data: dummyData };
};

export default useGetTags;

export interface Tag {
    name: string;
    image: string;
}
