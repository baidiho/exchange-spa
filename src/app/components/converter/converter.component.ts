import { CurrencyDataService } from './../../shared/currency-data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent implements OnInit {
  curFormGroup = this.fb.group({
    firstCur: this.fb.group({
      curNum: [''],
      curType: [''],
    }),
    secondCur: this.fb.group({
      curNum: [''],
      curType: [''],
    }),
  });

  constructor(public service: CurrencyDataService, private fb: FormBuilder) {}

  ngOnInit() {
    this.service.getData().subscribe(() => {
      this.curFormGroup.patchValue({
        firstCur: {
          curNum: '1',
          curType: 'UAH',
        },
        secondCur: {
          curNum: `${(1 / this.service.curMap.get('USD')).toFixed(3)}`,
          curType: 'USD',
        },
      });
    });
  }

  onInputChange(e: any, form: FormGroup) {
    let name: string = e.target.parentNode.name;
    let relativeName: string = name == 'firstCur' ? 'secondCur' : 'firstCur';
    // A  little bit validation
    if (form.value[name].curNum <= -1) {
      form.patchValue({
        [name]: {
          curNum: '',
        },
      });
    }
    if (
      form.value[name].curNum !== '' &&
      form.value[name].curType &&
      form.value[relativeName].curType
    ) {
      /* Execution is divide for parts on purpose. It`s more clear and readability  */
      let convertToUAH =
        this.service.curMap.get(form.value[name].curType) *
        form.value[name].curNum;
      let convertToRelativeCur = (
        convertToUAH / this.service.curMap.get(form.value[relativeName].curType)
      ).toFixed(3);
      form.patchValue({
        [relativeName]: {
          curNum: `${convertToRelativeCur}`,
        },
      });
    }
  }
}
