import { useMemo } from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export function PbrPlasticMaterial({color="#f36b12",roughness=0.34,clearcoat=0.78}:{color?:string;roughness?:number;clearcoat?:number}){
  const [albedo,roughMap,metalMap,normalMap,aoMap]=useTexture([
    "/textures/plastic-basecolor.jpg","/textures/plastic-roughness.jpg","/textures/plastic-metalness.jpg","/textures/plastic-normal.jpg","/textures/plastic-ao.jpg"
  ]);
  useMemo(()=>{
    albedo.colorSpace=THREE.SRGBColorSpace;
    for(const t of [roughMap,metalMap,normalMap,aoMap]) t.colorSpace=THREE.NoColorSpace;
    for(const t of [albedo,roughMap,metalMap,normalMap,aoMap]){t.anisotropy=8;t.needsUpdate=true;}
  },[albedo,roughMap,metalMap,normalMap,aoMap]);
  return <meshPhysicalMaterial color={color} map={albedo} roughness={roughness} roughnessMap={roughMap}
    metalness={0} metalnessMap={metalMap} normalMap={normalMap} normalScale={[0.28,0.28]}
    aoMap={aoMap} aoMapIntensity={0.7} clearcoat={clearcoat} clearcoatRoughness={0.2}
    sheen={0.08} sheenColor="#ffffff" sheenRoughness={0.72} envMapIntensity={1.15}/>;
}