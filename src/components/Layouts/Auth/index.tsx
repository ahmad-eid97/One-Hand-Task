'use client';
import React from 'react';
//= Styles
import cls from './auth.module.scss';

type Props = {
  children: React.ReactNode;
}

export default function AuthenticationLayout({ children }: Props) {
  return (
    <main className={`${cls.auth} authentication_layout`}>
      <div className={cls.content_wrapper}>
        <div className={cls.page_content}>
          {children}
        </div>
      </div>
    </main>
  )
}