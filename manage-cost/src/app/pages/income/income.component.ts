import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import RaportFormComponent from "../../components/forms/raport-form/raport-form.component";

@Component({
  selector: 'app-income',
  standalone: true,
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss'],
  imports: [CommonModule, RaportFormComponent]
})
export class IncomeComponent {

}
