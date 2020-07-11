import { Component, Entity } from "../../lib/index.ts";

export class LabelComponent extends Component {
  constructor(entity: Entity, readonly label: string) {
    super("label", entity);
  }
}
