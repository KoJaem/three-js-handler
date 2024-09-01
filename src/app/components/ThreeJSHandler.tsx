"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva, useControls } from "leva";
import { LightController } from "./LightController";
import { ModelRenderer } from "./ModelRenderer";

export const ThreeJSHandler = () => {
  const { src, lighting, handling, lightIntensity, autoAnimation } =
    useControls({
      src: { value: "/imgs/crp.glb", editable: false },
      handling: true,
      lighting: true,
      lightIntensity: {
        value: 1.0,
        min: 0,
        max: 10,
        step: 0.1,
        label: "Light Intensity",
      },
      autoAnimation: true,
    });

  return (
    <>
      <Leva
        theme={{
          colors: {
            // accent1: "#ff0000", // 강조 색상 1
            // accent2: "#00ff00", // 강조 색상 2
            // accent3: "#0000ff", // 강조 색상 3
            // highlight1: "#ff00ff", // 강조 요소 색상
            // highlight2: "#00ffff", // 강조 요소 색상
            // highlight3: "#ffff00", // 강조 요소 색상
            // vivid1: "#ff9900", // 생생한 색상
          },
          sizes: {
            rootWidth: "400px", // 패널의 기본 너비
            controlWidth: "200px", // 각 컨트롤의 너비
            // scrubberWidth: "10px", // 슬라이더 스크러버의 너비
            // scrubberHeight: "20px", // 슬라이더 스크러버의 높이
            // rowHeight: "40px", // 각 행의 높이
            // folderTitleHeight: "30px", // 폴더 제목의 높이
          },
          radii: {},
        }}
      />
      <Canvas>
        <ModelRenderer src={src} autoAnimation={autoAnimation} />
        {handling && <OrbitControls />}
        {lighting && <LightController lightIntensity={lightIntensity} />}
      </Canvas>
    </>
  );
};
