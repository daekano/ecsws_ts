import { Component, Entity } from "../../lib/index.ts";

export class DensityComponent extends Component {
  constructor(entity: Entity, public density: number) {
    super("density", entity);
  }
}
