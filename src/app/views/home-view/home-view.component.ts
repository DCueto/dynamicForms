import { Component } from '@angular/core';
import { ChecklistComponent } from '../../components/dynamic-checklist/checklist/checklist.component';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [ChecklistComponent],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.scss'
})
export class HomeViewComponent {

}