#!/usr/bin/env node

import { Checklist } from "./Checklist.js";

try {
  const checklist = new Checklist();
  await checklist.generate();
} catch (err) {
  console.error(err);
}
