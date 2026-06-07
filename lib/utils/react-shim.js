import * as React from "next/dist/compiled/react";
export * from "next/dist/compiled/react";
export default React;

// Polyfill useEffectEvent since it is not exported in Next.js's pre-bundled React 19 version
export const useEffectEvent =
  React.useEffectEvent ||
  function useEffectEvent(fn) {
    const ref = React.useRef(fn);
    React.useEffect(() => {
      ref.current = fn;
    });
    return React.useCallback((...args) => {
      return ref.current.apply(void 0, args);
    }, []);
  };
