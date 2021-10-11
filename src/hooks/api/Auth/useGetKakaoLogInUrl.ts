import useSWR from "swr";
import { fetcher } from "utils/api/fetch";

const key = "/auth/kakaoLogin";

const useGetKakaoLogInUrl = () => {
    const { data } = useSWR<GetKakaoLogInUrl>(key, fetcher);

    const onClickLoginBtn = () => {
        console.log("get kakato login url", data);

        window.open(
            `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${window.location.origin}/auth/kakaoLoginRedirect&response_type=code`
        );
    };

    return { onClickLoginBtn };
};

export default useGetKakaoLogInUrl;

interface GetKakaoLogInUrl {
    ok: boolean;
    url: string;
}

// https://kauth.kakao.com/oauth/authorize?client_id=120245589ab57eb723b470a76d5b00b1&redirect_uri=http://localhost:3000/auth/kakaoLoginRedirect&response_type=code
