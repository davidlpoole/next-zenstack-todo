"use client";

import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      {session?.user && <h1>Welcome {session?.user?.email}</h1>}
    </div>
  );
}
