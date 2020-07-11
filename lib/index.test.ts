import { v4 } from "https://deno.land/std@0.58.0/uuid/mod.ts";
import {
  assert,
  assertEquals,
} from "https://deno.land/std@0.58.0/testing/asserts.ts";

import { Component, Entity, World } from "./index.ts";

Deno.test("creates a new entity as a v4 uuid", () => {
  const world = new World();
  const entity = world.createEntity();
  assert(v4.validate(entity));
});

class TestComponent extends Component {
  constructor(entity: Entity) {
    super("test", entity);
  }
}

Deno.test("adds components to the world", () => {
  const world = new World();
  const testEntity = world.createEntity();
  world.createComponent(new TestComponent(testEntity));
  world.createComponent(new TestComponent(testEntity));
  world.createComponents([new TestComponent(testEntity)]);

  assertEquals(world.getComponentsByType("test")?.size, 3);
});

Deno.test("gets counts of component types", () => {
  const world = new World();
  const testEntity = world.createEntity();
  world.createComponent(new TestComponent(testEntity));
  world.createComponent(new TestComponent(testEntity));
  world.createComponent(new TestComponent(testEntity));

  assertEquals(world.getComponentCounts().test, 3);
});
