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
  /* Есть над чем подумать */
  ngOnInit() {
    let firstRequest = this.service.getData().subscribe(() => {
      this.curFormGroup.patchValue({
        firstCur: {
          curNum: '1',
          curType: 'UAH',
        },
        secondCur: {
          curNum: `${(1 / this.service.currenciesMap.get('USD')).toFixed(3)}`,
          curType: 'USD',
        },
      });
      firstRequest.unsubscribe();
    });
  }

  onInputChange(e: any, form: FormGroup) {
    let name: string = e.target.parentNode.name;
    let relativeName: string = name == 'firstCur' ? 'secondCur' : 'firstCur';
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
      let convertToUAH =
        this.service.currenciesMap.get(form.value[name].curType) *
        form.value[name].curNum;
      let convertedValue = (
        convertToUAH /
        this.service.currenciesMap.get(form.value[relativeName].curType)
      ).toFixed(3);
      form.patchValue({
        [relativeName]: {
          curNum: `${convertedValue}`,
        },
      });
    }
  }
}
