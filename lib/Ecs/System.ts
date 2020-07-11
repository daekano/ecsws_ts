import { Component, ComponentStore } from "../index.ts";
import { v4 } from "https://deno.land/std@0.58.0/uuid/mod.ts";

export abstract class System {
  abstract readonly aspect: string;
  readonly id: string;

  constructor() {
    this.id = v4.generate();
  }

  abstract tick(components: Set<Component>): void;
}
