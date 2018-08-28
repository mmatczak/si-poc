import {Component, ContentChild, Input, OnInit} from '@angular/core';
import {FormControlName} from '@angular/forms';

@Component({
  selector: 'app-with-error-msg',
  templateUrl: './with-error-msg.component.html',
  styleUrls: ['./with-error-msg.component.scss']
})
export class WithErrorMsgComponent implements OnInit {
  @Input()
  label;

  @ContentChild(FormControlName)
  private formControl;

  constructor() {
  }

  getErrors() {
    if (this.formControl) {
      let errorMsg = '';
      const errors = this.formControl.control.errors;

      if (errors) {
        Object.keys(errors)
          .forEach(errorKey => {
            errorMsg = errorMsg + ' ' + errorKey;
          });
      }

      return errorMsg;

    }
  }

  ngOnInit() {
  }

}
