// Safety guard for sandboxed environments where window.fetch has only a getter
try {
  let _fetch = window.fetch;
  Object.defineProperty(window, 'fetch', {
    get() {
      return _fetch;
    },
    set(newFetch) {
      _fetch = newFetch;
    },
    configurable: true,
    enumerable: true,
  });
} catch (_) {
  // Ignore if already non-configurable
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
