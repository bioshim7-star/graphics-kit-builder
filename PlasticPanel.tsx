import type { ReactNode } from "react";
import type * as THREE from "three";
import { PbrPlasticMaterial } from "../materials/PbrPlasticMaterial";
type Props={geometry:THREE.BufferGeometry;position?:[number,number,number];rotation?:[number,number,number];scale?:[number,number,number];children?:ReactNode;color?:string};
export function PlasticPanel({geometry,position=[0,0,0],rotation=[0,0,0],scale=[1,1,1],children,color}:Props){
  return <mesh geometry={geometry} position={position} rotation={rotation} scale={scale} castShadow receiveShadow>
    <PbrPlasticMaterial color={color}/>{children}
  </mesh>;
}