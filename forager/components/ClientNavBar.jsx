"use client"

import { usePathname } from "next/navigation";
import NavBar from "@/components/NavBar";

export default function ClientNavBar() {
  const pathname = usePathname();

  if (pathname == "/photosearch") return null;

  return <NavBar />;
}