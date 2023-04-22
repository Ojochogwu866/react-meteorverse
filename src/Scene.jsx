import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { NodeToyMaterial } from "@nodetoy/react-nodetoy";
import { data as fragmentsShaderData } from "./fragments-shader";

export default function Scene() {
  const { nodes } = useGLTF("/assets/model/scene.glb");
  const [
    ground,
    ground2,
    ground_debris,
    pipes_and_rover,
    astronauts_white,
    astronauts_orange,
    fragments,
    debris,
  ] = useTexture([
    "/assets/texture/ground.png",
    "/assets/texture/ground2.png",
    "/assets/texture/ground_debris.png",
    "/assets/texture/pipes_and_rover.png",
    "/assets/texture/astronauts_white.png",
    "/assets/texture/astronauts_orange.png",
    "/assets/texture/fragments.png",
    "/assets/texture/debris.png",
  ]);

  return (
    <>
      <mesh geometry={nodes.ground.geometry}>
        <meshBasicMaterial map={ground} />
      </mesh>
      <mesh geometry={nodes.ground2.geometry}>
        <meshBasicMaterial map={ground2} />
      </mesh>
      <mesh geometry={nodes.ground_debris.geometry}>
        <meshBasicMaterial map={ground_debris} />
      </mesh>
      <mesh geometry={nodes.astronauts_orange.geometry}>
        <meshBasicMaterial map={astronauts_orange} />
      </mesh>
      <mesh geometry={nodes.astronauts_white.geometry}>
        <meshBasicMaterial map={astronauts_white} />
      </mesh>
      <mesh geometry={nodes.pipes_and_rover.geometry}>
        <meshBasicMaterial map={pipes_and_rover} />
      </mesh>
      <mesh geometry={nodes.fragments.geometry}>
        <meshBasicMaterial map={fragments} />
      </mesh>
      <mesh geometry={nodes.debris.geometry}>
        <meshBasicMaterial map={debris} />
      </mesh>
      <mesh geometry={nodes.ground.geometry}>
        <NodeToyMaterial data={fragmentsShaderData} />
      </mesh>
      <mesh geometry={nodes.astronauts_visors.geometry}>
        <meshStandardMaterial roughness={0} metalness={1} color={"#b68432"} />
      </mesh>
    </>
  );
}
