import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className='flex flex-row gap-x-3'>
      <div>
        <Image
          src='/logo.webp'
          className=''
          width={40}
          height={36}
          alt='logo'
        />
      </div>
      <h1 className='font-sans font-semibold text-2xl text-center text-zinc-950 not-italic no-underline normal-case tracking-wide leading-loose align-middle hyphens-none antialiased dark:text-zinc-50'>
        Programutvecklar Quiz
      </h1>
    </header>
  );
}
