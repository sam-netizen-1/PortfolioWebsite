import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { SceneContent } from "./SceneContent";
import { SceneLoadingFallback } from "./SceneLoadingFallback";
import type { CommandCenterSceneProps } from "./types";

export default function CommandCenterScene({ isSceneVisible: _isSceneVisible, ...props }: CommandCenterSceneProps) {
  const [isSceneReady, setIsSceneReady] = useState(false);

  return (
    <>
      <Canvas
        dpr={[1, 1.25]}
        frameloop="demand"
        gl={{ antialias: false, alpha: true, powerPreference: "default" }}
        className="command-canvas"
        onCreated={() => setIsSceneReady(true)}
      >
        <Suspense fallback={<SceneLoadingFallback />}>
          <SceneContent {...props} />
        </Suspense>
      </Canvas>
      <div className={isSceneReady ? "scene-loader is-hidden" : "scene-loader"} aria-hidden="true">
        <div className="scene-loader-panel">
          <span aria-hidden="true" />
          <strong>Loading project map</strong>
        </div>
      </div>
    </>
  );
}
