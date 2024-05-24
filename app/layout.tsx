import Image from 'next/image';
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Maiti Labs',
  description: 'Global youth-led Non-Profit Organization',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="text-green-900 p-4">
          <div className="container mx-auto flex justify-between items-center my-5">
            <div className="text-3xl flex items-center font-thin">
              <Image src="/logo.png" alt="Maiti Labs Logo" width={40} height={40} />
              <div className='ml-1'>Maiti Labs</div>
            </div>
            <nav className='poppins-regular text-lg'>
              <a href="#" className="mx-4 my-2">Home</a>
              <a href="#" className="mx-4 my-2">About</a>
              <a href="#" className="mx-4 my-2">Awareness Portal</a>
              <a href="#" className="mx-4 my-2">Career</a>
              <a href="#" className="mx-4 my-2">Contact</a>
              <a href="#" className="mx-4 my-2">Team</a>
            </nav>
            <button className="group relative  font-mediumcursor-pointer w-[150px] h-[40px] delay-75 rounded-full bg-[#1e3a2b] hover:bg-slate-100/50 hover:shadow-md hover:shadow-emerald-800/50 text-slate-100 transition-colors duration-[300ms] hover:text-[#1e3a2b]">
              <div className='transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 mx-3 my-2 cursor-pointer hover:text-[#496c62]'>
                Login
              </div>
            </button>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
