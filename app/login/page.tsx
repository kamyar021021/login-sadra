// app/(auth)/login/page.tsx
import Image from "next/image";
import FLOWER from "../../public/bak2 (1).jpg";
import LoginCard from "../../components/LoginCard";

// این یک Server Component است (بدون 'use client')
export default function LoginPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      {/* تصویر بکگراند */}
      <Image
        src={FLOWER}
        alt="Background"
        fill
        className="object-cover"
        priority
        quality={100}
      />

      {/* لایه‌های تیره */}
      <div className="absolute inset-0 bg-linear-to-t from-black/20 via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-linear-to-r from-black/20 via-transparent to-black/20" />

      {/* کارت لاگین با قابلیت چرخش - کلاینت کامپوننت */}
      <div className="relative w-full">
        <LoginCard />
      </div>
    </div>
  );
}