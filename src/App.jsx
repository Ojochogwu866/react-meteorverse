import React, { Suspense, useEffect } from "react";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import Scene from "./Scene";
import { useThree } from "@react-three/fiber";
import Meteor from "./Meteor";
import { NodeToyTick } from "@nodetoy/react-nodetoy";
import Beams from "./Beams";
function App() {
  const state = useThree();

  useEffect(() => {
    state.gl.toneMappingExposure = 5;
  }, [state.gl]);
  return (
    <>
      <Environment
        background={"only"}
        files={"/assets/texture/envmap_blur.hdr"}
        ground={{ height: 100, radius: 300 }}
      />
      <Environment background={false} files={"/assets/texture/envmap.hdr"} />
      <PerspectiveCamera
        makeDefault
        fov={33}
        position={[-0.09, 16.01, -27.9]}
      />
      <OrbitControls
        target={[0.304, 0.806, 0.427]}
        maxPolarAngle={Math.PI * 0.45}
      />
      <NodeToyTick />
      <Suspense fallback={null}>
        <Scene />
        <Meteor />
        <Beams />
      </Suspense>
    </>
  );
}

export default App;