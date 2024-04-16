#!/usr/bin/env node

import { Checklist } from "./Checklist.js";

try {
  const checklist = new Checklist();
  await checklist.generate();

  const score = checklist.calcScore();
  console.log(`あなたの睡眠準備度は、${score}点です。`)
} catch (err) {
  console.error(err);
}
