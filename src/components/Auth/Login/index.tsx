'use client';
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
//= Modules
import Cookies from 'universal-cookie';
//= Components
import Input from '@/components/UIs/Input';
//= Utils
import { toaster } from '@/utils/toaster';
import { startLoadingBtn, stopLoadingBtn } from '@/utils/loadingBtn';
//= Types
import type { Fields } from "@/types";
//= Api
import { handleRequest } from '@/api/login';
//= Styles
import cls from './styles.module.scss';

type Props = {}

export default function Login({ }: Props) {
  const [fields, setFields] = useState<Fields>({
    email: '',
    password: '',
  });
  const searchParams = useSearchParams();
  const uid = searchParams.get("uid");
  const router = useRouter();
  const cookies = new Cookies();

  async function loginHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (!fields.email || !fields.password) return toaster.error("Please fill in all fields");
    startLoadingBtn(e);
    const response = await handleRequest(uid, fields);
    if (response) {
      cookies.set("task-website-token", "one-hand1234", { path: "/" });
      toaster.success("Login successful, Welcome");
      router.push('/');
    } else {
      toaster.error("Invalid email address or password");
    }
    stopLoadingBtn(e);
  }

  return (
    <div className={cls.login}>
      <div className={cls.wrapper}>
        <div className={cls.form}>
          <div className={cls.logo}>
            <img src="/imgs/logo.svg" alt="logo_image" />
          </div>
          <h1>Log In</h1>
          <div className={cls.fields}>
            <div className={cls.field}>
              <Input
                type="email"
                label="Email:"
                placeholder="Enter your email"
                name="email"
                value={fields.email}
                onChange={(e) => setFields({ ...fields, email: e.target.value })}
              />
            </div>
            <div className={cls.field}>
              <Input
                type="password"
                label="Password:"
                placeholder="Enter your email"
                name="email"
                value={fields.password}
                onChange={(e) => setFields({ ...fields, password: e.target.value })}
              />
            </div>
          </div>
          <div className={cls.actions}>
            <button onClick={loginHandler}>Log In</button>
          </div>
        </div>
      </div>
    </div>
  )
}