"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";

export default function FloatingNavDemo() {
  const navItems = [
    {
      name: "Inicio",
      link: "/",
     
    },
    {
      name: "GitHub",
      link: "/about",
      
    },
    {
      name: "Contacto",
      link: "/contact",
      
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      
    </div>
  );
}
