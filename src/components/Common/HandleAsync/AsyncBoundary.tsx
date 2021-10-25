import { ComponentProps, FunctionComponent, ReactNode, Suspense } from "react";
import { ErrorBoundary } from "@sentry/react";

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
            <Suspense fallback={PendingFallback}>{children}</Suspense>
        </ErrorBoundary>
    );
};

export default AsyncBoundary;
