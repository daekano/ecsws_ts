import { Component, Entity } from "../../lib/index.ts";

export class PhysicalComponent extends Component {
  constructor(entity: Entity) {
    super("physical", entity);
  }
}
