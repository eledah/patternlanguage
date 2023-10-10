// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <div className='w-4/5 mx-auto mt-20 flex flex-col justify-center items-center space-y-4'>
        <h1 className='text-4xl font-semibold'>۴.۴ - این الگو هنوز اضافه نشده است</h1>
        <div className='space-x-4'>
          <Link
            className='underline text-blue-600 hover:text-red-500 duration-300'
            href='/'
          >
            برگشت به صفحهٔ اول
          </Link>
          <Link
            className='underline text-blue-600 hover:text-red-500 duration-300'
            href='https://github.com/eledah/patternlanguage/'
          >
            مشارکت در تکمیل الگوها
          </Link>
        </div>
      </div>
    </>
  );
}