import { Component, Entity } from "../../lib/index.ts";

export class DensityComponent extends Component {
  readonly density: number;
  constructor(entity: Entity, density: number) {
    super("density", entity);

    this.density = density;
  }
}
