import { useThree } from "@react-three/fiber";
import { useEffect, useMemo } from "react";
import * as THREE from "three";

export function CameraBootRig() {
  const { camera } = useThree();
  const settledPosition = useMemo(() => new THREE.Vector3(0, 2.2, 6.8), []);
  const target = useMemo(() => new THREE.Vector3(0, 0, 0), []);

  useEffect(() => {
    camera.position.copy(settledPosition);
    camera.lookAt(target);
  }, [camera, settledPosition, target]);

  return null;
}
