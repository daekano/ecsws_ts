import { Component, Entity } from "../../lib/index.ts";

export enum Elements {
  Earth = "earth",
  Fire = "fire",
  Water = "water",
  Wind = "wind",
}

export class ElementalComponent extends Component {
  readonly element: Elements;
  constructor(entity: Entity, element: Elements) {
    super("elemental", entity);

    this.element = element;
  }
}
