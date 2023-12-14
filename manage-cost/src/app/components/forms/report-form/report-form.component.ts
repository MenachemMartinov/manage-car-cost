import {
  Component,
  Input,
  OnInit,
  Output,
  forwardRef,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { TranslateModule } from '@ngx-translate/core';
import {
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { Subject, takeUntil, debounceTime, distinctUntilChanged } from 'rxjs';

export type reportFormGroup = {
  formType: FormControl<string | null>;
  amount: FormControl<number | null>;
  note: FormControl<string | null>;
  eventName: FormControl<string | null>;
  tip: FormControl<number | null>;
  tipTo: FormControl<string | null>;
};
export interface reportForm {
  formType: string | null;
  amount: number | null;
  note: string | null;
  eventName: string | null;
  tip: number | null;
  tipTo: string | null;
}

@Component({
  selector: 'app-report-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => reportFormComponent),
      multi: true,
    },
  ],
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.scss'],
})
export default class reportFormComponent implements OnInit {
  @Input() reportFormData!: reportForm;
  reportFormGroup!: FormGroup<reportFormGroup>;

  reportTypes = ['income', 'outcome', 'tip'];
  private unsubscribe$ = new Subject<void>();
  @Output() updateDetailsEmit = new EventEmitter<reportForm>();

  constructor() {}
  ngOnInit() {
    this.reportFormGroup = new FormGroup<reportFormGroup>({
      formType: new FormControl<string | null>(
        this.reportFormData.formType || ''
      ),
      amount: new FormControl<number | null>(
        this.reportFormData.amount || null
      ),
      note: new FormControl<string | null>(this.reportFormData.note || ''),
      eventName: new FormControl<string | null>(
        this.reportFormData.eventName || ''
      ),
      tip: new FormControl<number | null>(this.reportFormData.tip || null),
      tipTo: new FormControl<string | null>(this.reportFormData.tipTo || ''),
    });

    this.reportFormGroup.valueChanges
      .pipe(
        takeUntil(this.unsubscribe$),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((value) => {
        this.updateDetailsEmit.emit(value as reportForm);
      });
  }
}
