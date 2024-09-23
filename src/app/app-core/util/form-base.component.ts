import { ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Observable, fromEvent, merge } from 'rxjs';
import { DisplayMessage, GenericValidator, ValidationMessages } from './generic-form-validation';
import { CustomValidators } from 'ng2-validation';
import { NgxBrazilValidators } from 'ngx-brazil';
import { FormValidations } from './form-validations';
import { DateUtils } from './date-utils';

export abstract class FormBaseComponent implements IFormComponent {

  mudancasNaoSalvas!: boolean;
  errors: any[] = [];
  validations: any[] = [];
  displayMessage: DisplayMessage | any = {};
  genericValidator!: GenericValidator;
  validationMessages!: ValidationMessages;

  MASKS: any = NgxBrazilValidators.MASKS;
  DateMask = DateUtils.DataMask;
  DataDayMask = DateUtils.DataDayMask;

  protected configurarMensagensValidacaoBase(validationMessages: ValidationMessages) {
    this.genericValidator = new GenericValidator(validationMessages);
  }

  protected configurarValidacaoFormularioBase(formInputElements: ElementRef[], formGroup: FormGroup) {

    let controlBlurs: Observable<any>[] = formInputElements
      .map((formControl: ElementRef) => {
        this.configurarCssClass(formControl, formGroup);
        return fromEvent(formControl.nativeElement, 'blur');
      });

    merge(...controlBlurs).subscribe(() => {
      this.validarFormulario(formGroup)
    });
  }



  protected validarFormulario(formGroup: FormGroup, allControls: boolean = false) {

    const reavaliadas = this.genericValidator.processaMensgens(formGroup, allControls);
    this.displayMessage = Object.assign(this.displayMessage, reavaliadas);
    this.mudancasNaoSalvas = true;
  }


  protected configurarCssClass(formControl: ElementRef, formGroup: FormGroup) {

    const formcontrolname = formControl.nativeElement.attributes['formcontrolname']?.value;
    let control = formGroup.get(formcontrolname);

    if (control?.hasValidator(CustomValidators.number) || control?.hasValidator(NgxBrazilValidators.currency)) {
      this.addClass(formControl, 'text-right')
    }

    if (control?.hasValidator(FormValidations.data)) {
      this.addClass(formControl, 'text-center')
    }

  }



  parseFormArrayToValues(values: Number[]): string[] {
    return Object.assign([], values.map((value: any, i: number) => value.toString())
      .filter((value: any) => value !== null));
  }


  private addClass(formControl: ElementRef, cssClass: string) {
    formControl.nativeElement.classList.add(cssClass);
  }
}

export interface IFormComponent {
  mudancasNaoSalvas: boolean;

}
