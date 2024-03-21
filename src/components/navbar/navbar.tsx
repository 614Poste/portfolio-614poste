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
      link: "https://github.com/614Poste",
      
    },
    {
      name: "Contacto",
      link: "mailto:rikardolujan98@gmail.com",
      
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      
    </div>
  );
}
