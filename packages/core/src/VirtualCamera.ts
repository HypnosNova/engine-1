import { Matrix, Vector3 } from "@oasis-engine/math";

/**
 * @internal
 */
export class VirtualCamera {
  position: Vector3 = new Vector3();
  isOrthographic: boolean = false;
  viewMatrix: Matrix = new Matrix();
  projectionMatrix: Matrix = new Matrix();
  viewProjectionMatrix: Matrix = new Matrix();
  /** Only orth mode use. */
  forward: Vector3 = new Vector3();
}
