"use client"

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FaHome, FaSearch } from 'react-icons/fa';
import { TbMushroom } from "react-icons/tb";
import { useMushroomContext } from '@/contexts/MushroomContext';

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const { resetSelection } = useMushroomContext();

  const handleNavigation = (path) => {
    // Reset selection when navigating back to dashboard
    if (path === "/dashboard") {
      resetSelection();
    }

    router.push(path);
  }
  
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[50] bg-[#579076] shadow-lg p-3 flex flex-col items-center rounded-t-2xl">
      <div className="flex justify-around w-full">
        <div 
          className="text-2xl cursor-pointer flex justify-center items-center p-3"
          onClick={() => handleNavigation("/mushroom")}
        >
          <TbMushroom color={pathname === "/mushroom" ? "#B6EEA6" : "#FFFFFF"}/>
        </div>
        <div 
          className="text-2xl cursor-pointer flex justify-center items-center p-3"
          onClick={() => handleNavigation("/dashboard")}
        >
          <FaHome color={pathname === "/dashboard" ? "#B6EEA6" : "#FFFFFF"}/>
        </div>
        <Link href="/photosearch" passHref>
          <div className="text-2xl cursor-pointer flex justify-center items-center p-3">
            <FaSearch color={pathname === "/photosearch" ? "#B6EEA6" : "#FFFFFF"}/>
          </div>
        </Link>
      </div>

      <div className="flex justify-center w-full">
        <div className="w-24 h-1 bg-white rounded-full"/>
      </div>
    </div>
  );
};
