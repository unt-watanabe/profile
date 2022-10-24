import { FC } from 'react';

export const Footer: FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='mt-[60px] text-[4rem]'>
      <p className='leading-[0.7em]'>
        <small>&copy; {year} p_toro All Rights Reserved.</small>
      </p>
      <ul className='mt-[12px] flex flex-wrap gap-x-[1rem] text-[2rem]'>
        <li>Next.js</li>
        <li>TypeScript</li>
        <li>Tailwind</li>
        <li>Emotion</li>
        <li>Contentful</li>
        <li>Netlify</li>
      </ul>
    </footer>
  );
};
