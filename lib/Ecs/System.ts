import { Component, ComponentStore } from "../index.ts";
import { v4 } from "https://deno.land/std@0.58.0/uuid/mod.ts";

export abstract class System {
  readonly id: string;

  constructor() {
    this.id = v4.generate();
  }

  abstract run(components: ComponentStore<Component>): void;
}
