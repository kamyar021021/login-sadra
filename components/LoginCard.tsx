"use client";

import { useState } from "react";
import Image from "next/image";
import SADRA from "../public/sadralogo3.png";
import {
  User,
  Lock,
  Building2,
  UserCircle,
  Phone,
  FileText,
} from "lucide-react";

export default function LoginCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    requesterName: "",
    position: "",
    phone: "",
    description: "",
  });

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted");
  };

  return (
    <div className="relative w-full max-w-md mx-auto perspective-[1000px]">
      <div
        className={`relative w-full transition-all duration-700 transform-3d ${
          isFlipped ? "transform-[rotateY(180deg)]" : ""
        }`}
      >
        <div className="backface-hidden w-full backdrop-blur-md bg-[#393F57]/80 rounded-2xl px-8 py-3 shadow-2xl border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={handleFlip}
              className="text-[#eddbd1] gap-2 cursor-pointer flex justify-around hover:text-[#c8aa08] transition-colors"
            >
              <User size={24} />
              ورود کاربر
            </button>
            <h2 className="text-[30px] flex items-center font-bold text-[#c8aa08]">
              درخواست مشاوره
            </h2>
            <Image src={SADRA} alt="sadra" width={50} height={50} />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[#eddbd1] text-[22px] mb-2 text-right">
                نام شرکت
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <Building2 size={18} className="text-[#393F57]" />
                </div>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full text-[22px] px-4 py-2 pr-10 bg-[#eddbd1] border-2 border-[#c8aa08] rounded-lg text-[#393F57] placeholder-[#393F57]/60 text-right focus:outline-none focus:ring-2 focus:ring-[#c8aa08] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#eddbd1] text-[22px] mb-2 text-right">
                نام درخواست دهنده
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <UserCircle size={18} className="text-[#393F57]" />
                </div>
                <input
                  type="text"
                  name="requesterName"
                  value={formData.requesterName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 pr-10 bg-[#eddbd1] text-[22px] border-2 border-[#c8aa08] rounded-lg text-[#393F57] placeholder-[#393F57]/60 text-right focus:outline-none focus:ring-2 focus:ring-[#c8aa08] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#eddbd1] text-[22px] mb-2 text-right">
                سمت درخواست دهنده
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <User size={18} className="text-[#393F57]" />
                </div>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  className="w-full text-[22px] px-4 py-2 pr-10 bg-[#eddbd1] border-2 border-[#c8aa08] rounded-lg text-[#393F57] placeholder-[#393F57]/60 text-right focus:outline-none focus:ring-2 focus:ring-[#c8aa08] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#eddbd1] text-[22px] mb-2 text-right">
                شماره تماس
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <Phone size={18} className="text-[#393F57]" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full text-[22px] px-4 py-2 pr-10 bg-[#eddbd1] border-2 border-[#c8aa08] rounded-lg text-[#393F57] placeholder-[#393F57]/60 text-right focus:outline-none focus:ring-2 focus:ring-[#c8aa08] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#eddbd1] text-[22px] mb-2 text-right">
                توضیحات
              </label>
              <div className="relative">
                <div className="absolute top-3 right-0 flex items-center pr-3 pointer-events-none">
                  <FileText size={18} className="text-[#393F57]" />
                </div>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 pr-10 text-[22px] bg-[#eddbd1] border-2 border-[#c8aa08] rounded-lg text-[#393F57] placeholder-[#393F57]/60 text-right focus:outline-none focus:ring-2 focus:ring-[#c8aa08] transition-all resize-none"
                  placeholder="..."
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleFlip}
                className="flex-1 cursor-pointer py-2 border-2 border-[#c8aa08] text-[#eddbd1] hover:text-[#212121] rounded-lg font-semibold hover:bg-[#c8aa08] transition-all"
              >
                بازگشت به سایت
              </button>
              <button
                type="submit"
                className="flex-1 cursor-pointer py-2 bg-[#c8aa08] text-[#212121] rounded-lg font-semibold transition-all transform hover:scale-[1.02]"
              >
                ثبت درخواست
              </button>
            </div>
          </form>
        </div>

        <div className="backface-hidden absolute inset-0 w-full backdrop-blur-md bg-[#393F57]/80 rounded-2xl px-8 py-3 shadow-2xl border border-gray-200 transform-[rotateY(180deg)]">
          <div className="flex justify-center">
            <div className="flex items-center justify-center">
              <Image src={SADRA} alt="سدرا-لوگو" width={100} height={100} />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-[#eddbd1] text-center mb-2">
            خوش آمدید
          </h1>
          <p className="text-[#eddbd1] text-center mb-8 text-sm">
            برای ورود به حساب کاربری، اطلاعات زیر را وارد کنید
          </p>

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div className="group">
              <label className="block text-[#eddbd1] text-[22px] mb-2 mr-2 text-right">
                نام کاربری
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <User size={20} className="text-[#393F57]" />
                </div>
                <input
                  type="text"
                  className="w-full px-4 py-2 text-2xl pr-10 bg-[#eddbd1] border-2 border-[#c8aa08] rounded-lg text-[#393F57] placeholder-[#393F57]/60 placeholder:text-2xl text-right focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            <div className="group">
              <label className="block text-[#eddbd1] text-[22px] mb-2 text-right mr-2">
                رمز عبور
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <Lock size={20} className="text-[#393F57]" />
                </div>
                <input
                  type="password"
                  className="w-full px-4 py-2 text-2xl pr-10 bg-[#eddbd1] border-2 border-[#c8aa08] rounded-lg text-[#393F57] placeholder-[#393F57]/60 placeholder:text-2xl text-right focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-4">
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handleFlip}
                  className="flex-1 cursor-pointer py-2 border-2 border-[#c8aa08] text-[#eddbd1] hover:text-[#393F57] rounded-lg font-semibold hover:bg-[#c8aa08] transition-all"
                >
                  درخواست مشاوره
                </button>
                <button
                  type="submit"
                  className="flex-1 cursor-pointer py-2 bg-[#c8aa08] text-[#393F57] rounded-lg font-semibold transition-all transform hover:scale-[1.02]"
                >
                  ورود
                </button>
              </div>
              <p className="text-[#eddbd1] mt-5 text-center">
                ورود شما به معنای پذیرش قوانین و حریم خصوصی است
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
