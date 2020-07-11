import { Entity } from "./Entity.ts";
import { v4 } from "https://deno.land/std@0.58.0/uuid/mod.ts";

export abstract class Component {
  readonly id: string;
  readonly entity: Entity;
  readonly type: string;

  constructor(type: string, entity: Entity) {
    this.entity = entity;
    this.id = v4.generate();
    this.type = type;
  }
}
