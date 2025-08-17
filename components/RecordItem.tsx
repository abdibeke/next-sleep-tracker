"use client";
import { useState } from "react";
import { Record } from "@/types/Record";
import deleteRecord from "@/app/actions/deleteRecord";
import { Trash2 } from "lucide-react";

const RecordItem = ({ record }: { record: Record }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteRecord = async (recordId: string) => {
    setIsLoading(true);
    await deleteRecord(recordId);
    setIsLoading(false);
  };

  return (
    <li
      className={`flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-4 border-t border-t-gray-100 ${
        record?.amount < 7
          ? "border-l-4 border-[#e76f51]" 
          : "border-l-4 border-[#2a9d8f]"
      }`}
    >
      <div className="flex flex-col">
        <span className="text-sm text-gray-500">
          {new Date(record?.date).toLocaleDateString()}
        </span>
        <span className="text-lg font-bold text-gray-800">
          {record?.amount} hours
        </span>
        <span className="text-sm text-gray-600">
          Sleep Mode: {record?.text}
        </span>
      </div>

      {/* Delete Button */}
      <button
        onClick={() => handleDeleteRecord(record.id)}
        disabled={isLoading}
        className={`flex items-center gap-1 px-3 py-1 rounded-md font-medium text-white transition-all duration-300 ${
          isLoading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-red-500 hover:bg-red-600 hover:shadow-lg cursor-pointer"
        }`}
        aria-label="Delete record"
      >
        {isLoading ? (
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
        ) : (
          <>
            <Trash2 className="w-4 h-4" />
            <span>Delete</span>
          </>
        )}
      </button>
    </li>
  );
};

export default RecordItem;
