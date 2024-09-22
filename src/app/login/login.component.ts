import { Component, ElementRef, OnInit, ViewChildren, AfterViewInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';

import { CustomValidators } from 'ng2-validation';

import { Usuario } from '../app-core/models/usuario';

import { ActivatedRoute, Router } from '@angular/router';

import { ToastAppService } from '../app-core/services/toastapp.service';
import { FormBaseComponent } from '../app-core/util/form-base.component';
import { AuthService } from '../app-core/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent extends FormBaseComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements!: ElementRef[];

  controlsFormBase: any;
  public componentForm: FormGroup = new FormGroup({});
  usuario!: Usuario
  formResult: string = '';
  returnUrl: string;


  constructor(private fb: FormBuilder,
    private contaService: AuthService,
    private toastr: ToastAppService,
    private router: Router,
    private route: ActivatedRoute) {
    super()

    this.controlsFormBase = {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, CustomValidators.rangeLength([6, 15])]],
    };

    this.validationMessages = {
      password: {
        rangeLength: 'Tamanho deve ser entre 6 e 15 caracteres',
      },
    }

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];

  }

  ngOnInit(): void {
    this.componentForm = this.fb.group(this.controlsFormBase);
  }

  ngAfterViewInit(): void {
    super.configurarMensagensValidacaoBase(this.validationMessages);
    super.configurarValidacaoFormularioBase(this.formInputElements, this.componentForm)
  }

  submitForm() {

    super.validarFormulario(this.componentForm, true);
    if (this.componentForm.dirty && this.componentForm.valid) {
      this.usuario = Object.assign({}, this.usuario, this.componentForm.value)

      // this.contaService.login(this.usuario)
      //   .subscribe(
      //     sucesso =>
              { this.processarSucesso(null) }
      //     falha => { this.processarFalha(falha) }
      //   );
    }
  }

  private processarSucesso(response: any) {
    this.componentForm.reset();
    this.errors = [];
    //this.contaService.LocalStorage.salvarDadosLocaisUsuario(response);

    this.toastr.success(["Login realizado com sucesso"], "Bem vindo!", () => {
      this.returnUrl
        ? this.router.navigate([this.returnUrl])
        : this.router.navigate(['/inspection'])
    });
  }

  override processarFalha(fail: any) {
    this.errors = fail.error.errors;
    this.toastr.error(fail.error.errors.join(), "Erro");
  }

}

