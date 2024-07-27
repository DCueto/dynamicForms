import { Component, Input, Output } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-answer',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.scss'
})
export class AnswerComponent {
  @Input() answerForm!: FormGroup;
}
