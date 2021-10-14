
import Layout from "components/Common/Layout";
import MotionLoading from "components/Common/MotionLoading";
import BasicInfoSection from "components/Review/BasicInfoSection";
import { AnimatePresence } from "framer-motion";
import useGetCurrentUserStatics from "hooks/api/Review/useGetCurrentUserStatics";
import Hr from "components/Common/Hr";
import StaticSection from "components/Review/StaticSection";

const Review = () => {
    const { data } = useGetCurrentUserStatics();

    return (
        <Layout>
            <BasicInfoSection />

            <Hr margin="60px 0" />

            <AnimatePresence exitBeforeEnter>
                {data ? (
                    <StaticSection key="staticSection" />
                ) : (
                    <MotionLoading key="reviewLoading" />
                )}
            </AnimatePresence>
        </Layout>
    );
};

export default Review;
