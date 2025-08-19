import getRecords from "@/app/actions/getRecords";
import RecordItem from "./RecordItem";
import { Record } from "@/types/Record";

const RecordHistory = async () => {
  const { records, error } = await getRecords();

  if (error) {
    return (
      <div className="bg-red-100 text-red-800 border border-red-300 rounded-lg p-4 text-center">
        {error}
      </div>
    );
  }

  if (!records || records.length === 0) {
    return (
      <div className="bg-[#eef0f7] flex items-center justify-center pb-6">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full text-center transition hover:shadow-2xl">
          <h3 className="text-2xl font-medium mb-4 text-gray-600">
            No Sleep Records Found
          </h3>
          <p className="text-gray-600">
            Start tracking your sleep to see your history here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#eef0f7] p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 mx-auto transition hover:shadow-2xl">
        <h3 className="text-2xl font-bold text-center mb-6 text-gray-600 border-b border-gray-200 pb-6">
          Sleep History
        </h3>

        <ul className="space-y-4">
          {records.map((record: Record) => (
            <RecordItem key={record.id} record={record} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecordHistory;
