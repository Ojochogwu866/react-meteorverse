import {
  MeshTransmissionMaterial,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { data as meteorShaderData } from "./shader";
import { NodeToyMaterial } from "@nodetoy/react-nodetoy";
export default function Meteor() {
  const { nodes } = useGLTF("/assets/model/meteor.glb");

  const { normalMap } = useTexture(["/assets/texture/meteor_normals.png"]);

  return (
    <>
      <mesh>
        <MeshTransmissionMaterial
          normalMap={normalMap}
          normalScale={[0.3, 0.3]}
          roughness={0}
          ior={1.5}
          thickness={0.035}
          transmission={1}
          chromaticAberration={1}
          anisotropy={20}
          distortion={0}
          distortionScale={0}
          samples={10}
          backside={true}
          color={"#fff"}
          attenuationDistance={0.2}
          attenuationColor={"#e2eab5b"}
        />
      </mesh>
      <mesh geometry={nodes.meteor.geometry} scale={[1.02, 1.02, 1.02]}>
        <NodeToyMaterial data={meteorShaderData} />
      </mesh>
    </>
  );
}
