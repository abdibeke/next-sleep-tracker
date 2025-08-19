import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import Guest from "@/components/Guest";
import AddNewRecord from "@/components/AddNewRecord";
import Image from "next/image";
import RecordChart from "@/components/RecordChart";
import AverageSleep from "@/components/AverageSleep";
import BestWorstSleep from "@/components/BestWorstSleep";
import RecordHistory from "@/components/RecordHistory";

export default async function page() {
  const user = await currentUser();
  if (!user) return <Guest />;

  return (
    <main className="bg-[#eef0f7] text-[#1a1f3a] font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Profile Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col sm:flex-row items-center sm:items-start gap-6 transition hover:shadow-2xl">
            <div className="rounded-full border border-gray-300 p-1">
              <Image
                src={user.imageUrl}
                alt={`${user.firstName}'s profile`}
                width={128}
                height={128}
                className="rounded-full shadow-md object-cover"
                priority
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#f4a261] mb-2">
                Welcome, {user.firstName} 👋
              </h2>
              <p className="text-gray-700 mb-4">
                Here’s a summary of your recent sleep activity.
              </p>

              <div className="space-y-1 text-gray-700">
                <p>
                  <span className="font-semibold">Joined:</span>{" "}
                  {new Date(user.createdAt).toLocaleDateString()}
                </p>
                <p>
                  <span className="font-semibold">Last Active:</span>{" "}
                  {user.lastActiveAt
                    ? new Date(user.lastActiveAt).toLocaleString()
                    : "N/A"}
                </p>
              </div>
            </div>
          </div>

          {/* Add New Sleep Record */}
          <AddNewRecord />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <RecordChart />
          <AverageSleep />
          <BestWorstSleep />
        </div>
      </div>

      {/* Sleep History */}
      <div className="max-w-7xl mx-auto mt-10">
        <RecordHistory />
      </div>
    </main>
  );
}
