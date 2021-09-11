import { Component, ErrorInfo, ReactNode } from "react";

type RenderFallbackProps<ErrorType extends Error = Error> = {
    error: ErrorType;
    reset: (...args: unknown[]) => void;
};

type RenderFallbackType = <ErrorType extends Error>(
    props: RenderFallbackProps<ErrorType>
) => ReactNode;

interface ErrorBoundaryProps {
    children: ReactNode;
    renderFallback: RenderFallbackType; // fallback ui component
    resetKeys: unknown[]; // error reset dependency array
}

interface ErrorBoundaryState {
    error: Error | null;
}

const initialState: ErrorBoundaryState = { error: null };

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = initialState;
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log("Uncaught Error: ", error, errorInfo);
    }

    render() {
        const { children, renderFallback } = this.props;
        const { error } = this.state;

        if (error !== null) {
            return renderFallback({ error });
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
