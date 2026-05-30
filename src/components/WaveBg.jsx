import React, { Suspense, lazy, useEffect, useState } from 'react';

const WaveBgImpl = lazy(() => import('./WaveBgImpl.jsx'));

export default function WaveBg() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const shouldShow = Math.random() < 0.1;
    setShow(shouldShow);
    if (shouldShow) {
      console.log('Congratulations! You have found an Easter egg!');
    }
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {show && (
        <Suspense fallback={null}>
          <WaveBgImpl />
        </Suspense>
      )}
    </div>
  );
}
