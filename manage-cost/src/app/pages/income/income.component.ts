import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import reportFormComponent, {
  reportForm,
} from '../../components/forms/report-form/report-form.component';

@Component({
  selector: 'app-income',
  standalone: true,
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss'],
  imports: [CommonModule, reportFormComponent],
})
export class IncomeComponent {
  formData: reportForm = {
    formType: 'income',
    amount: 100,
    note: 'note',
    eventName: 'event name',
    tip: 10,
    tipTo: 'tip to me',
  };

  updateData($event: reportForm) {
    this.formData = $event;

    console.log(this.formData);
  }

  constructor() {}

  ngOnInit(): void {}
}
