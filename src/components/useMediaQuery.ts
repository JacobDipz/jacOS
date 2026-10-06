import { useCallback, useSyncExternalStore } from 'react';

// Screens narrow enough that windows open full screen instead of floating
export const SMALL_SCREEN = '(max-width: 640px)';
// Devices without a mouse (phones, tablets), where a single tap opens icons
export const TOUCH_SCREEN = '(hover: none)';

// Whether a CSS media query currently matches, updating when it changes (e.g. on rotate or resize)
export function useMediaQuery(query: string): boolean {
    const subscribe = useCallback((onChange: () => void) => {
        const mediaQuery = window.matchMedia(query);
        mediaQuery.addEventListener('change', onChange);
        return () => mediaQuery.removeEventListener('change', onChange);
    }, [query]);
    return useSyncExternalStore(subscribe, () => window.matchMedia(query).matches);
}
