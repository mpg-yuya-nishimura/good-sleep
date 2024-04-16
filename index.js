#!/usr/bin/env node

import { Checklist } from "./Checklist.js";

try {
  const checklist = new Checklist();
  await checklist.generate();

  checklist.evaluate();

  const score = checklist.calcScore();
  console.log(`あなたの快眠準備度は、${score}点です。`)
} catch (err) {
  console.error(err);
}
