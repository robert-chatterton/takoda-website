import { useEffect } from 'react';

export function useScripts() {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://widgetv3.bandsintown.com/main.min.js';
    script.async = true;
    script.charset = 'utf-8';

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
}
