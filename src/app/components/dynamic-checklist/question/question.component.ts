import { Component, inject, Input } from '@angular/core';
import { AnswerComponent } from "../answer/answer.component";
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [AnswerComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {

  // interface question to be implemented

  @Input() questionForm!: FormGroup;

  // injects FormBuilder service to be used on createAnswer for generating new dynamic FormGroups
  private fb = inject(FormBuilder);

  // gets all answers so you can iterate them at html
  get answers() {
    return this.questionForm.get('answers') as FormArray;
  }

  // get answer form group
  getAnswerFormGroup(index: number): FormGroup {
    return this.answers.at(index) as FormGroup;
  }

  // adds new answer to questionForm FormGroup
  addAnswer(){
    this.answers.push( this.createAnswer() );
  }

  // generates new answer with formBuilder service
  createAnswer(): FormGroup {
    return this.fb.group({
      type: ['true'],
      content: ['']
    });
  }

}
