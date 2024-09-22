import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { PhotoService } from '../app-core/services/photo.service';
import { FormBaseComponent } from '../app-core/services/form-base.component';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ToastAppService } from '../app-core/services/toastapp.service';
import { Router } from '@angular/router';
import { CustomValidators } from 'ng2-validation';
import { Usuario } from '../app-core/models/usuario';

@Component({
  selector: 'app-edit-page',
  templateUrl: 'edit.page.html',
  styleUrls: ['edit.page.scss']
})
export class EditPage extends FormBaseComponent implements OnInit, AfterViewInit {
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements!: ElementRef[];
  controlsFormBase: any;
  public componentForm: FormGroup = new FormGroup({});
  usuario!: Usuario;

  constructor(public photoService: PhotoService,
    private fb: FormBuilder,
    private toastr: ToastAppService,
    private router: Router,
  ) {
    super();

    this.controlsFormBase = {
      produto: ['', [Validators.required]],
      cliente: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
      cidade: ['', [Validators.required]],


    };
    this.validationMessages = {
      // password: {
      //   rangeLength: 'Tamanho deve ser entre 6 e 15 caracteres',
      // },
    }
  }

  ngOnInit(): void {
    this.componentForm = this.fb.group(this.controlsFormBase);
  }
  ngAfterViewInit(): void {
    super.configurarMensagensValidacaoBase(this.validationMessages);
    super.configurarValidacaoFormularioBase(this.formInputElements, this.componentForm)
  }
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  submitForm() {

    super.validarFormulario(this.componentForm, true);
    if (this.componentForm.dirty && this.componentForm.valid) {
      this.usuario = Object.assign({}, this.usuario, this.componentForm.value)

      // this.contaService.login(this.usuario)
      //   .subscribe(
      //     sucesso =>
      //  { this.processarSucesso(null) }
      //     falha => { this.processarFalha(falha) }
      //   );
    }
  }

  save() { this.submitForm(); }
}
