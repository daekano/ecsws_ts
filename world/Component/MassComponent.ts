import { Component, Entity } from "../../lib/index.ts";

export class MassComponent extends Component {
  public mass: number;
  constructor(entity: Entity, mass: number) {
    super("mass", entity);

    this.mass = mass;
  }
}
