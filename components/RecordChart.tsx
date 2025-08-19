import getRecords from "@/app/actions/getRecords";
import BarChart from "./BarChart";

const RecordChart = async () => {
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
      <div className="bg-[#eef0f7] flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full text-center transition hover:shadow-2xl">
          <h3 className="text-2xl font-medium mb-4 text-gray-600">
            No Sleep Records Found
          </h3>
          <p className="text-gray-600">
            Start tracking your sleep to see your records here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#eef0f7] flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full transition hover:shadow-2xl">
        <h3 className="text-2xl font-medium text-center mb-6 text-gray-600">
          Sleep Records Chart
        </h3>

        <BarChart
          records={records.map((record) => ({
            ...record,
            date: String(record.date),
          }))}
        />
      </div>
    </div>
  );
};

export default RecordChart;
