'use client';
import Link from 'next/link';
//= Styles
import cls from './styles.module.scss';

type Props = {}

export default function Navbar({ }: Props) {
  return (
    <nav className={cls.navbar}>
      <div className={cls.title}>
        <img src="/imgs/navbar_icon.svg" alt="logo_image" loading="lazy" />
        <p>Black IN Dashboard</p>
      </div>
      <Link href="/">
        <button>
          <img src="/imgs/website_icon.svg" alt="website_icon" loading="lazy" />
          Go To Website
        </button>
      </Link>
    </nav>
  )
}