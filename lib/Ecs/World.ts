import { Component, Entity, System } from "../index.ts";

import { v4 } from "https://deno.land/std@0.58.0/uuid/mod.ts";

export class World {
  static RUN_INTERVAL: number = 500;
  private components: Map<string, Set<Component>>;
  private entities: Set<Entity>;
  private loop: number;
  private started: boolean;
  private systems: Set<System>;
  readonly id: string;

  constructor() {
    this.components = new Map();
    this.entities = new Set();
    this.loop = 0;
    this.started = false;
    this.systems = new Set();
    this.id = v4.generate();
  }

  createComponent(component: Component) {
    if (!this.components.has(component.type)) {
      this.components.set(component.type, new Set());
    }
    this.components.get(component.type)?.add(component);
  }

  createComponents(components: Component[]) {
    components.forEach((component) => {
      this.createComponent(component);
    });
  }

  createEntity(): Entity {
    const entity = v4.generate();
    this.entities.add(entity);

    return entity;
  }

  createSystem(system: System) {
    this.systems.add(system);
  }

  createSystems(systems: System[]) {
    systems.forEach((system) => {
      this.systems.add(system);
    });
  }

  getComponents() {
    return new Map(this.components);
  }

  getComponentsByType(componentType: string) {
    return this.components.get(componentType) ?? new Set();
  }

  getComponentCounts() {
    const counts: { [key: string]: number } = {};
    this.components.forEach((value, key) => {
      counts[key] = value.size;
    });

    return counts;
  }

  getEntities() {
    return this.entities;
  }

  getEntityCount() {
    return this.entities.size;
  }

  getSystemCount() {
    return this.systems.size;
  }

  start() {
    if (this.started) {
      return;
    }

    this.started = true;
    this.loop = setInterval(() => {
      this.systems.forEach((system) => {
        system.tick(this.getComponentsByType(system.aspect));
      });
    }, World.RUN_INTERVAL);
  }

  stop() {
    clearInterval(this.loop);
  }
}
