import { Component, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-answer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.scss'
})
export class AnswerComponent {
  @Input() answer: any = { type: 'Yes', content: '' }
}
