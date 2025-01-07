import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='py-4 flex w-full text-center flex-col items-center border-t border-muted'>
      <p className='text-xs '>
        GNU {new Date().getFullYear()} ©{' '}
        <Link href='https://ppanel.dev' target='_blank'>
          PPANEL
        </Link>
        .
      </p>
    </footer>
  );
}
