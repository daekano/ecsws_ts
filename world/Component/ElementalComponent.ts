import { Component, Entity } from "../../lib/index.ts";

export enum Elements {
  Earth = "earth",
  Fire = "fire",
  Water = "water",
  Wind = "wind",
}

export class ElementalComponent extends Component {
  constructor(entity: Entity, readonly element: Elements) {
    super("elemental", entity);
  }
}
