import { v4 } from "https://deno.land/std@0.58.0/uuid/mod.ts";
import {
  assert,
  assertEquals,
} from "https://deno.land/std@0.58.0/testing/asserts.ts";

import { Component, Entity, System, World } from "./index.ts";

class TestComponent extends Component {
  constructor(entity: Entity) {
    super("test", entity);
  }
}

class TestSystem extends System {
  aspect: string = "test";
  tick(components: Set<Component>): void {
    throw new Error("Method not implemented.");
  }
}

Deno.test("World creates components", () => {
  const world = new World();
  const testEntity = world.createEntity();
  world.createComponent(new TestComponent(testEntity));
  world.createComponent(new TestComponent(testEntity));
  world.createComponents([new TestComponent(testEntity)]);

  assertEquals(world.getComponentsByType("test")?.size, 3);
});

Deno.test("World creates systems", () => {
  const world = new World();
  world.createSystem(new TestSystem());
  world.createSystems([new TestSystem()]);

  assertEquals(world.getSystemCount(), 2);
});

Deno.test("World creates entities", () => {
  const world = new World();
  world.createEntity();
  world.createEntity();

  assertEquals(world.getEntityCount(), 2);
});

Deno.test("World creates a new entity as a v4 uuid", () => {
  const world = new World();
  const entity = world.createEntity();
  assert(v4.validate(entity));
});

Deno.test("World gets component counts by type", () => {
  const world = new World();
  const testEntity = world.createEntity();
  world.createComponent(new TestComponent(testEntity));
  world.createComponent(new TestComponent(testEntity));
  world.createComponent(new TestComponent(testEntity));

  assertEquals(world.getComponentCounts().test, 3);
});
