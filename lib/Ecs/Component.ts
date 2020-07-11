import { Entity } from "./Entity.ts";

export abstract class Component {
  readonly entity: Entity;
  readonly type: string;

  constructor(type: string, entity: Entity) {
    this.entity = entity;
    this.type = type;
  }
}
