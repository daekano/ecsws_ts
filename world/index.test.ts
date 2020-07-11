import { assertEquals } from "https://deno.land/std@0.58.0/testing/asserts.ts";

import { World } from "../lib/index.ts";
import { MassComponent, ErosionSystem } from "./index.ts";

Deno.test("ErosionSystem reduces mass", () => {
  const erosionSystem = new ErosionSystem(1);
  const massComponent = new MassComponent("entity_1", 100);
  erosionSystem.tick(new Set([massComponent]));

  assertEquals(massComponent.mass, 99.9);
});
