import { ComponentStore, System } from "../../lib/index.ts";
import { MassComponent } from "../index.ts";

export class ErosionSystem extends System {
  private aspect = "mass";
  static EROSION_RATE = 0.001;
  constructor(readonly rateCoefficient: number) {
    super();
  }

  run(components: ComponentStore<MassComponent>): void {
    const massComponents = components?.get(this.aspect);
    massComponents?.forEach((component) => {
      component.mass =
        component.mass -
        component.mass * (ErosionSystem.EROSION_RATE * this.rateCoefficient);
    });
  }
}
