import { del } from "utils/api/client";

const useDeleteAnalysis = (anSeq: string) => {
    const deleteAnalysis = async () => {
        await del(`/analyses/${anSeq}`);
    };

    return { deleteAnalysis };
};

export default useDeleteAnalysis;
