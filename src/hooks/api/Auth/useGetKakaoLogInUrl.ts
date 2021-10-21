// import useSWR from "swr";
// import { fetcher } from "utils/api/fetch";
// const key = "/auth/kakaoLogin";

const useGetKakaoLogInUrl = () => {
    // const { data } = useSWR<GetKakaoLogInUrl>(key, fetcher);

    const onClickLoginBtn = () => {
        window.open(
            `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${window.location.origin}/auth/kakaoLoginRedirect&response_type=code`
        );
    };

    return { onClickLoginBtn };
};

export default useGetKakaoLogInUrl;
