import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuestionComponent } from '../question/question.component';

@Component({
  selector: 'app-checklist',
  standalone: true,
  imports: [FormsModule, QuestionComponent],
  templateUrl: './checklist.component.html',
  styleUrl: './checklist.component.scss'
})
export class ChecklistComponent {
  // implement interface for array of questions
  questions: any[] = [
    {
      answers: [
        { type: 'true', content: ''},
        { type: 'false', content: ''}
      ]
    }
  ];

  addQuestion() {
    this.questions.push({
      answers: [
        { type: 'true', content: ''},
        { type: 'false', content: ''}
      ]
    });
    console.log(this.questions);
  }

  // Send to endpoint all data for backend api to generate checklist template
  saveChecklist() {
    const checklistData = { questions: this.questions };
    console.log( checklistData );
  }

}
