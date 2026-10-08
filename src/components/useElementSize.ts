import { useCallback, useState } from 'react';

// Tracks an element and its current size. Attach `ref` to the element.
export function useElementSize() {
    const [element, setElement] = useState<HTMLElement | null>(null);
    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    const ref = useCallback((node: HTMLElement | null) => {
        setElement(node);
        if (!node) return;
        const observer = new ResizeObserver(() => {
            setSize({ width: node.offsetWidth, height: node.offsetHeight });
        });
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return { ref, element, ...size };
}
