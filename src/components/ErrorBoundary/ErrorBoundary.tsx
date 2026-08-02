import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
    children?: ReactNode;
    fallback?: ReactNode;
}

interface State {
    error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        error: null
    };

    public static getDerivedStateFromError(error: Error): State {
        return { error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error: ", error, errorInfo);
    }

    public render() {
        const { error } = this.state;

        if (error) {
            return <h1>Something went wrong: {error.message}</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary