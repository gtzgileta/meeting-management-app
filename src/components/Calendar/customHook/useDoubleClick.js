import { useCallback, useRef } from 'react';

const useDoubleClick = (doubleClick, click, timeout = 200) => {
    // useRef for the useCallback to rememeber the timeout
    const clickTimeout = useRef();

    const clearClickTimeout = () => {
        if (clickTimeout) {
            clearTimeout(clickTimeout.current);
            clickTimeout.current = undefined;
        }
    };

    // Return a memoized version of the callback
    return useCallback((event) => {
        clearClickTimeout();
        if (click && event.detail === 1) {
            clickTimeout.current = setTimeout(() => {
                click(event);
            }, timeout);
        }
        if (event.detail % 2 === 0) doubleClick(event);
    }, [click, doubleClick]);
};

export default useDoubleClick;
