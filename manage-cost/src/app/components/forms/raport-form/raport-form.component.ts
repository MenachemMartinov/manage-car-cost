import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateModule } from '@ngx-translate/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

interface RaportFormGroup {
  formType: FormControl<string | null>;
  amount: FormControl<number | null>;
  note: FormControl<string | null>;
  eventName: FormControl<string | null>;
  tip: FormControl<number | null>;
  tipTo: FormControl<string | null>;
}

@Component({
  selector: 'app-raport-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
  ],
  templateUrl: './raport-form.component.html',
  styleUrls: ['./raport-form.component.scss'],
})
export default class RaportFormComponent {
  raportFormGroup = new FormGroup<RaportFormGroup>({
    formType: new FormControl<string | null>(''),
    amount: new FormControl<number | null>(0),
    note: new FormControl<string | null>(''),
    eventName: new FormControl<string | null>(''),
    tip: new FormControl<number | null>(0),
    tipTo: new FormControl<string | null>(''),
  });

  raportTypes = ['income', 'outcome', 'tip'];

  constructor() {
    this.raportFormGroup.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }
}
