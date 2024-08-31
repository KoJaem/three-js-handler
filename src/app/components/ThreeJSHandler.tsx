"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { LightController } from "./LightController";
import { ModelRenderer } from "./ModelRenderer";
import { useControls } from "leva";

export const ThreeJSHandler = () => {

  const { src, lighting, handling, lightIntensity } = useControls({
    src: "/imgs/crp.glb",
    handling: true,
    lighting: true,
    lightIntensity: {
      value: 1.0,
      min: 0,
      max: 10,
      step: 0.1,
      label: "Light Intensity",
    },
  });

  return (
    <Canvas>
      <ModelRenderer src={src} />
      {handling && <OrbitControls />}
      {lighting && <LightController lightIntensity={lightIntensity} />}
    </Canvas>
  );
};
