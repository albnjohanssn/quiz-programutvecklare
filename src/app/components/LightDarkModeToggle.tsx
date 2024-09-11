'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { BiSun, BiMoon } from 'react-icons/bi';
import Image from 'next/image';

export default function LightDarkModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <Image
        src=''
        width={32}
        height={32}
        sizes=''
        alt=''
        priority={false}
        title=''
      />
    );

  if (resolvedTheme === 'dark') {
    return (
      <BiSun
        size={20}
        className='bg-transparent rounded-lg text-zinc-50 antialiased transition duration-100 ease-out hover:bg-zinc-50 hover:text-zinc-950'
        onClick={() => setTheme('light')}
      />
    );
  }

  if (resolvedTheme === 'light') {
    return (
      <BiMoon
        size={20}
        className='bg-transparent rounded-lg text-zinc-950 antialiased transition duration-100 ease-out hover:bg-zinc-950 hover:text-zinc-50'
        onClick={() => setTheme('dark')}
      />
    );
  }
}
