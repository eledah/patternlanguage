// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <div className='w-4/5 mx-auto flex flex-col justify-center items-center space-y-4'>
        <h1 className='text-4xl font-semibold'>این الگو هنوز ترجمه نشده است</h1>
        <div className='space-x-4'>
          <Link
            href='/'
          >
            برگشت به صفحهٔ اول
          </Link>
          &nbsp; | &nbsp;
          <Link
            href='https://github.com/eledah/patternlanguage/'
            target='_blank'
          >
            مشارکت در تکمیل الگوها
          </Link>
        </div>
      </div>
    </>
  );
}