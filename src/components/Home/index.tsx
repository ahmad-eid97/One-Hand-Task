'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
//= Modules
import Cookies from 'universal-cookie';
//= Utils
import { startLoadingBtn, stopLoadingBtn } from '@/utils/loadingBtn';
//= Styles
import cls from './styles.module.scss';

type Props = {}

export default function Home({ }: Props) {
  const router = useRouter();
  const cookies = new Cookies();

  function handleLogout(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    startLoadingBtn(e);
    setTimeout(() => {
      cookies.remove('task-website-token');
      stopLoadingBtn(e);
      router.push('/login');
    }, 1000);
  }

  return (
    <div className={cls.wrapper}>
      <div className={cls.content}>
        <h1>Welcome To Dashboard</h1>
        <button onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  )
}