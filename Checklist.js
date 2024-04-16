import inquirer from "inquirer";
import { questionAnswerPairs } from "./questionAnswerPairData.js";

export class Checklist {
  constructor() {
    this.checklist = [];
  }

  async generate() {
    const questions = Object.keys(questionAnswerPairs);

    for (const question of questions) {
      const answer = await inquirer.prompt({
        type: "confirm",
        name: "answer",
        message: question,
      });

      this.checklist.push({ question, answer: answer.answer });
    }
  }

  calcScore() {
    const countTrueAnswers = this.checklist.filter(item => item.answer === true).length;
    return countTrueAnswers * 10
  }
}
