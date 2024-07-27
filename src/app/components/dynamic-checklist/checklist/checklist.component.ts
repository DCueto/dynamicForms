import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionComponent } from '../question/question.component';

@Component({
  selector: 'app-checklist',
  standalone: true,
  imports: [FormsModule, QuestionComponent, ReactiveFormsModule],
  templateUrl: './checklist.component.html',
  styleUrl: './checklist.component.scss'
})
export class ChecklistComponent {

  checkListForm: FormGroup;

  // injects formBuilder service and initializes the checklist Form Group with a Form Array with one Question
  constructor(private fb: FormBuilder) {
    this.checkListForm = this.fb.group({
      questions: this.fb.array([ this.createQuestion() ])
    });
  }

  // get all questions so you can iterate through at html
  get questions() {
    return this.checkListForm.get('questions') as FormArray;
  }

  // get question form group
  getQuestionFormGroup(index: number): FormGroup {
    return this.questions.at(index) as FormGroup;
  }

  // generates new question
  createQuestion(): FormGroup {
    return this.fb.group({
      content: [''],
      answers: this.fb.array([
        this.createAnswer(),
        this.createAnswer()
      ])
    });
  }

  // generates new answer
  createAnswer(): FormGroup {
    return this.fb.group({
      type: ['true'],
      content: ['']
    });
  }


  // event that adds new question to checklistFormGroup
  addQuestion(){
    this.questions.push(this.createQuestion());
    console.log( this.checkListForm );
  }


  // Send to endpoint all data for backend api to generate checklist template
  saveChecklist() {
    const checklistData = this.checkListForm.value;
    console.log( checklistData );
  }

}
