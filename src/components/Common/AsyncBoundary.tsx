import { Component, ComponentProps, Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";

type ErrorBoundaryProps = ComponentProps<typeof ErrorBoundary>;

interface AsyncBoundaryProps extends Omit<ErrorBoundaryProps, "renderFallback"> {
    pendingFallback: Component;
    rejectedFallback: ErrorBoundaryProps["renderFallback"];
}

const AsyncBoundary = ({
    pendingFallback,
    rejectedFallback,
    children,
    ...errorBoundaryProps
}: AsyncBoundaryProps) => {
    return (
        <ErrorBoundary
            renderFallback={rejectedFallback}
            {...errorBoundaryProps}
        >
            <Suspense fallback={pendingFallback}>{children}</Suspense>
        </ErrorBoundary>
    );
};

export default AsyncBoundary;
