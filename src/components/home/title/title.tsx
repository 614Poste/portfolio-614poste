"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `Estos son algunos de mis proyectos
`;

export default function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
