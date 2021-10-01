import { SWRConfiguration } from "swr/dist/types";

const swrConfig: SWRConfiguration = {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateOnMount: true,
};

export default swrConfig;
