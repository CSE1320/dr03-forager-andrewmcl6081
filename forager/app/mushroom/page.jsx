"use client"

import Link from 'next/link';
import { useMushroomContext } from '@/contexts/MushroomContext';

export default function MushroomPage() {
  const { getSelectedMushroom } = useMushroomContext();
  const mushroom = getSelectedMushroom();

  if (!mushroom) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page">
      <h1>Mushroom Page</h1>
      <h1>{mushroom.name}</h1>
      <Link href="/comparison">
        <button>Go to Mushroom Comparison Page</button>
      </Link>
    </div>
  );
}
