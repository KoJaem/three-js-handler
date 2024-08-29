"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { LightController } from "./LightController";
import { ModelRenderer } from "./ModelRenderer";

export const ThreeJSHandler = () => {
  const src = "/imgs/crp.glb";
  return (
    <Canvas>
      <ModelRenderer src={src} />
      <OrbitControls />
      <LightController />
    </Canvas>
  );
};
