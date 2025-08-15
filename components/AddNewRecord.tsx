'use client';
import { useRef, useState } from 'react';
import addSleepRecord from '@/app/actions/addSleepRecord';

const AddRecord = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [amount, setAmount] = useState(6);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<'success' | 'error' | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [sleepQuality, setSleepQuality] = useState('');

  const clientAction = async (formData: FormData) => {
    setIsLoading(true);
    setAlertMessage(null);

    formData.set('amount', amount.toString());
    formData.set('text', sleepQuality);

    const { error } = await addSleepRecord(formData);

    if (error) {
      setAlertMessage(`Error: ${error}`);
      setAlertType('error');
    } else {
      setAlertMessage('Sleep record added successfully!');
      setAlertType('success');
      formRef.current?.reset();
      setAmount(6);
      setSleepQuality('');
    }

    setIsLoading(false);
  };

  return (
    <div className='bg-gray-100 flex items-center justify-center min-h-screen'>
      <div className='bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl'>
        {/* Heading */}
        <h3 className='text-2xl font-bold text-center mb-6 text-[#f4a261]'>
          Track Your Sleep
        </h3>

        {/* Sleep Record Form */}
        <form
          ref={formRef}
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(formRef.current!);
            clientAction(formData);
          }}
          className='space-y-6'
        >
          {/* Sleep Quality & Date */}
          <div className='flex flex-col md:flex-row md:space-x-4'>
            {/* Sleep Quality */}
            <div className='flex-1'>
              <label htmlFor='text' className='block text-sm font-medium text-gray-700 mb-2'>
                Sleep Quality
              </label>
              <select
                id='text'
                name='text'
                value={sleepQuality}
                onChange={(e) => setSleepQuality(e.target.value)}
                className='block w-full border border-gray-300 rounded-md shadow-sm focus:ring-[#f4a261] focus:border-[#f4a261] px-4 py-2'
                required
              >
                <option value='' disabled>
                  Select sleep quality...
                </option>
                <option value='Energetic'>⚡ Energetic</option>
                <option value='Refreshed'>🌞 Refreshed</option>
                <option value='Neutral'>😐 Neutral</option>
                <option value='Tired'>😴 Tired</option>
                <option value='Exhausted'>😫 Exhausted</option>
              </select>
            </div>

            {/* Sleep Date */}
            <div className='flex-1'>
              <label htmlFor='date' className='block text-sm font-medium text-gray-700 mb-2'>
                Sleep Date
              </label>
              <input
                type='date'
                name='date'
                id='date'
                className='block w-full border border-gray-300 rounded-md shadow-sm focus:ring-[#f4a261] focus:border-[#f4a261] px-4 py-2'
                required
                onFocus={(e) => e.target.showPicker()}
              />
            </div>
          </div>

          {/* Hours Slept */}
          <div>
            <label htmlFor='amount' className='block text-sm font-medium text-gray-700 mb-2'>
              Hours Slept
              <br />
              <span className='text-xs text-gray-500'>(0 - 12, step 0.5)</span>
            </label>
            <input
              type='range'
              name='amount'
              id='amount'
              min='0'
              max='12'
              step='0.5'
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
              className='w-full cursor-pointer accent-[#f4a261]'
            />
            <div className='text-center text-gray-700 mt-2'>{amount} hours</div>
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='w-full bg-[#f4a261] hover:bg-[#e07a3e] text-white px-4 py-2 rounded-md font-medium shadow-md transition flex items-center justify-center cursor-pointer'
            disabled={isLoading}
          >
            {isLoading ? (
              <svg
                className='animate-spin h-5 w-5 text-white'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
              >
                <circle cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' className='opacity-25'></circle>
                <path fill='currentColor' className='opacity-75' d='M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z'></path>
              </svg>
            ) : (
              'Add Sleep Record'
            )}
          </button>
        </form>

        {/* Alert Message */}
        {alertMessage && (
          <div
            className={`mt-4 p-3 rounded-md text-sm ${
              alertType === 'success'
                ? 'bg-green-100 text-green-800 border border-green-300'
                : 'bg-red-100 text-red-800 border border-red-300'
            }`}
          >
            {alertMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddRecord;
