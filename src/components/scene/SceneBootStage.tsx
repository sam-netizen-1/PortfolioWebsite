import type { ReactNode } from "react";

type SceneBootStageProps = {
  children: ReactNode;
};

export function SceneBootStage({ children }: SceneBootStageProps) {
  return (
    <group scale={1} position={[0, 0, 0]}>
      {children}
    </group>
  );
}
