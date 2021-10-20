import { useRecoilValue } from "recoil";
import { currentUserState } from "store/Auth";
import useSWR from "swr";
import { fetcher } from "utils/api/fetch";

const useGetCurrentUserStatics = () => {
    const currentUser = useRecoilValue(currentUserState);
    const response = useSWR<IGetStatics>(
        `/members/${currentUser?.mbrSeq}/statics?dancegoodlimit=3&danceoftenlimit=3`,
        fetcher
    );

    return response;
};

export default useGetCurrentUserStatics;

interface IDanceGoodAt {
    name: string;
    bestScore: number;
}

interface IDanceOften {
    name: string;
    times: number;
}

interface IStatics {
    totalPracticeTime: string;
    favorateDancer: string;
    dancesGoodAt: IDanceGoodAt[];
    dancesOften: IDanceOften[];
}

interface IGetStatics {
    ok: boolean;
    statics: IStatics;
}
