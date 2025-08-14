import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import Guest from "@/components/Guest";

export default async function page() {
  const user = await currentUser();
  if (!user) {
    return <Guest />;
  }
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-4xl font-bold text-amber-400 mb-4">Sleep Tracker</h1>
      <p className="text-lg text-amber-200">
        Monitor your rest, improve your life
      </p>
    </div>
  );
}
