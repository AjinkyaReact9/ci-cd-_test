// app/page.tsx
'use client'; // <-- MUST BE THE VERY FIRST LINE OF THE FILE

import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="p-8 max-w-md mx-auto text-center space-y-4">
      <h1 className="text-2xl font-bold" data-testid="main-heading">
        Welcome to CI/CD Demo
      </h1>
      <p className="text-lg">
        Current Count: <span data-testid="counter-value">{count}</span>
      </p>
      <button 
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        data-testid="increment-btn"
      >
        Increment
      </button>
    </main>
  );
}
