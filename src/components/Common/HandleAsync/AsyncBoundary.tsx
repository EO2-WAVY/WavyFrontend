import { ComponentProps, FunctionComponent, ReactNode, Suspense } from "react";
import { ErrorBoundary } from "@sentry/react";
import { AnimatePresence } from "framer-motion";

type RejectFallbackProps = { error: Error; resetError: () => void };
type SuspenseProps = ComponentProps<typeof Suspense>;

interface AsyncBoundaryProps {
    PendingFallback: SuspenseProps["fallback"];
    RejectedFallback: FunctionComponent<RejectFallbackProps>;
    children: ReactNode;
}

const AsyncBoundary = ({
    PendingFallback,
    RejectedFallback,
    children,
}: AsyncBoundaryProps) => {
    return (
        <ErrorBoundary
            fallback={({ error, resetError }) => (
                <RejectedFallback error={error} resetError={resetError} />
            )}
        >
            <AnimatePresence exitBeforeEnter>
                <Suspense fallback={PendingFallback}>{children}</Suspense>
            </AnimatePresence>
        </ErrorBoundary>
    );
};

export default AsyncBoundary;
