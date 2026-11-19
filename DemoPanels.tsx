import { RoundedBox } from "@react-three/drei";
import { VinylDecal } from "./VinylDecal";
function Panel({position,color="#f36b12"}:{position:[number,number,number];color?:string}){
  return <group position={position}><RoundedBox args={[1.65,0.16,0.72]} radius={0.12} smoothness={6} castShadow receiveShadow>
    <meshPhysicalMaterial color={color} roughness={0.34} metalness={0} clearcoat={0.8} clearcoatRoughness={0.18} envMapIntensity={1.1}/>
    <VinylDecal src="/assets/mountain-decal.svg" position={[0,0.085,0]} rotation={[-Math.PI/2,0,0]} scale={[1.25,0.52,0.12]}/>
  </RoundedBox></group>;
}
export function DemoPanels(){return <group>
  <Panel position={[-1.05,0,0]}/><Panel position={[1.05,0,0]} color="#24262b"/>
  <mesh rotation={[-Math.PI/2,0,0]} position={[0,-0.78,0]} receiveShadow><planeGeometry args={[200,200]}/><meshStandardMaterial color="#171a20" roughness={0.82}/></mesh>
</group>}