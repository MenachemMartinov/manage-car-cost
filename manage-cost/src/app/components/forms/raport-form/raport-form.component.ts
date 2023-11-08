import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-report-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    CommonModule,
    TranslateModule,
  ],
  templateUrl: './raport-form.component.html',
  styleUrls: ['./raport-form.component.scss'],
})
export default class RaportFormComponent {

  raportTypes = ['raport1', 'raport2', 'raport3']
  constructor() { }

}
