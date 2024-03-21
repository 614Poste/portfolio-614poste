"use client";
import Link from "next/link";
import Image from "next/image";
import Umami from "@/web/umami.png"
import Gemi from "@/web/geminis.jpg"
import Terra from "@/web/terraplot.png"
import Port from "@/web/port.png"
import { Tabs } from "@/components/ui/tabs";

export default function TabsDemo() {
  const tabs = [
    {
      title: "Umami Annany ",
      value: "Umami",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#E64D3D] to-[#46C1C0]">
          <p>Umami Annany (WIP)</p>
          <p className="text-sm font-light">Proyecto con Cesar Marines @Commmodore64. Front-end by: me (Git en privado por petición del cliente)</p>
          <Link href={"https://umami-project.vercel.app"} className="text-sm font-normal "> Mira la web Aquí</Link>
          <Uma />
        </div>
      ),
    },
    {
      title: "The Geminis Dog Coven ",
      value: "geminis",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#ffd75c] to-[#483152]">
          <p>The Geminis Dog Coven</p>
          <p className="text-sm font-light">Proyecto con Pedro Corona @rickydepapel. Mecánicas y coding by: me</p>
          <Link href={"https://github.com/614Poste/The-Gemini-dogs-coven"} className="text-sm font-normal "> Mira el Git aquí</Link>
          <Gemini />
        </div>
      ),
    },
    {
      title: "Terra Plot",
      value: "terraplot",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#6d9886] to-[#3f3d56]">
          <p>Terra Plot</p>
          <p className="text-sm font-light">Proyecto de Hackaton con compañeros, sus nombres están en el git. </p>
          <Link href={"https://github.com/NathanLazo/terraplot"} className="text-sm font-normal "> Mira el Git aquí</Link>
          <Link href={"https://terraplot.vercel.app"} className="text-sm font-normal "> Mira la web aquí</Link>
          <TerraP/>
        </div>
      ),
    },
    {
      title: "Portafolio",
      value: "Portafolio",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#b869d2] to-[#1c9bb3]">
          <p>Mi portafolio</p>
          <p className="text-sm font-light">No se si es muy egocientrico, pero la verdad estuve trabajando en los efectos. </p>
          <Link href={"https://github.com/614Poste/portfolio-614poste"} className="text-sm font-normal "> Mira el Git aquí</Link>
          
          <Porta/>
        </div>
      ),
    },
    
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const Uma = () => {
  return (
    <Image
      src={Umami}
      alt="umami"
      width="2500"
      height="2500"
      className="object-cover object-left-top h-[50%]  md:h-[70%] absolute bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
const TerraP = () => {
  return (
    <Image
      src={Terra}
      alt="umami"
      width="2500"
      height="2500"
      className="object-cover object-left-top h-[50%]  md:h-[70%] absolute bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const Gemini = () => {
  return (
    <Image
      src={Gemi}
      alt="gemini"
      width="2500"
      height="2500"
      className="object-cover object-left-top h-[50%]  md:h-[70%] absolute bottom-10 inset-x-0 w-[50%] rounded-xl mx-auto"
    />
  );
};
const Porta= () => {
  return (
    <Image
      src={Port}
      alt="gemini"
      width="2500"
      height="2500"
      className="object-cover object-left-top h-[50%]  md:h-[70%] absolute bottom-5 inset-x-0 w-[80%] rounded-xl mx-auto"
    />
  );
};

const DummyContent = () => {
  return (
    <Image
      src={Umami}
      alt="umami"
      width="2500"
      height="2500"
      className="object-cover object-left-top h-[50%]  md:h-[70%] absolute bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
