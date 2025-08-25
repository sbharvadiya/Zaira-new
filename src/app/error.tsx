'use client';

import { useEffect } from 'react';

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
   useEffect(() => {
      console.error(error);
   }, [error]);

   return (
      <div style={{ textAlign: 'center', padding: '3rem' }}>
         <h2>Something went wrong!</h2>
         <p>{error.message}</p>
         <button onClick={() => reset()}>Try again</button>
      </div>
   );
}
