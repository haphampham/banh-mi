import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'





const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <header>
     <a class="logo" href="#">Bánh Mì Việt</a>
  {/* Thẻ nav để tạo menu */}
  <nav>
   <Link href="./Home">Trang chủ</Link>
   <Link href="./Instruct">Giới thiệu</Link>
   <Link href="./Menu">Menu</Link>
   <Link href="./New">Tin Tức</Link>
   <Link href="./Introduce">Hướng dẫn</Link>
   <Link href="./Contact">Liên hệ</Link>

  </nav>
</header>
    </>
  )
}
