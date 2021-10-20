import { del } from "utils/api/client";

const useDeleteAnalysis = (anSeq: string) => {
    const deleteAnalysis = async () => {
        const response = await del(`/analyses/${anSeq}`);
        console.log(response);
    };

    return { deleteAnalysis };
};

export default useDeleteAnalysis;
