import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
    children?: ReactNode;
    fallback?: ReactNode;
}

interface State {
    error?: Error;
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
            if (error.message.includes("Duplicate metadata found at ")){
                return <h2>Duplicate metadata found</h2>;
            }
            return (
                <h2>{this.props.fallback}</h2>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary