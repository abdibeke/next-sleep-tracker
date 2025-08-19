import React from "react";
import getUserRecord from "@/app/actions/getUserRecord";

const AverageSleep = async () => {
  try {
    const { record, daysWithRecords } = await getUserRecord();

    const validRecord = record || 0;
    const validDays =
      daysWithRecords && daysWithRecords > 0 ? daysWithRecords : 1;

    const averageSleep = validRecord / validDays;
    const hours = Math.floor(averageSleep);
    const minutes = Math.round((averageSleep - hours) * 60);

    return (
      <div className="bg-gray-100 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full text-center">
          <h3 className="text-2xl font-medium text-gray-600 mb-2">
            Your Average Sleep Last Month
          </h3>

          <h1
            className={`sm:text-3xl text-2xl font-bold ${
              hours >= 7
                ? "text-[#2a9d8f] text-opacity-90"
                : "text-[#e76f51] text-opacity-90"
            }`}
          >
            {hours} hours {minutes} minutes
          </h1>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching user record:", error);
    return (
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
          <h4 className="text-lg font-medium text-gray-600 mb-2">Error</h4>
          <p className="text-red-600">Unable to calculate average sleep.</p>
        </div>
      </div>
    );
  }
};

export default AverageSleep;
