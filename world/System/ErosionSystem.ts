import { System } from "../../lib/index.ts";
import { MassComponent } from "../index.ts";

export class ErosionSystem extends System {
  readonly aspect = "mass";
  static EROSION_RATE = 0.001;
  constructor(readonly rateCoefficient: number) {
    super();
  }

  tick(components: Set<MassComponent>): void {
    components?.forEach((component) => {
      component.mass =
        component.mass -
        component.mass * (ErosionSystem.EROSION_RATE * this.rateCoefficient);
    });
  }
}
