import { Component, Input } from '@angular/core';
import { AnswerComponent } from "../answer/answer.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [AnswerComponent, FormsModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {
  // interface question
  @Input() question: any;
  @Input() index!: number;

  addAnswer(){
    this.question.answers.push({ type: 'true', content: ''});
  }
}
