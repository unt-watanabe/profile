import { FC } from 'react';

export const Header: FC = () => {
  return (
    <header>
      <h1 className='flex flex-wrap'>
        <img
          src='/img/ico_me.png'
          alt='ピートロ'
          className='mr-[40px] block'
          width='150'
          height='150'
        />
        <span className='block text-[10rem]'>p_toro</span>
      </h1>
    </header>
  );
};
