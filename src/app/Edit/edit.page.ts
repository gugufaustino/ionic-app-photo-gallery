import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { PhotoService } from '../app-core/services/photo.service';
import { FormBaseComponent } from '../app-core/util/form-base.component';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ToastAppService } from '../app-core/services/toastapp.service';
import { Router } from '@angular/router';
import { FirestoreService } from '../app-core/services/firestore.service';
import { InspecoesModel } from '../app-core/models/inspecoes.model';
import { DateUtils } from '../app-core/util/date-utils';

@Component({
  selector: 'app-edit-page',
  templateUrl: 'edit.page.html',
  styleUrls: ['edit.page.scss']
})
export class EditPage extends FormBaseComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements!: ElementRef[];
  controlsFormBase: any;
  public componentForm: FormGroup = new FormGroup({});
  inspecaoEdit!: InspecoesModel;

  constructor(public photoService: PhotoService,
    private fb: FormBuilder,
    private toastr: ToastAppService,
    private router: Router,
    private fStorage: FirestoreService
  ) {
    super();

    this.controlsFormBase = {
      produto: ['', [Validators.required]],
      cliente: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
      cidade: ['', [Validators.required]],


    };
    this.validationMessages = {}
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
      this.inspecaoEdit = Object.assign({}, this.inspecaoEdit, this.componentForm.value)
      this.inspecaoEdit.date =  DateUtils.Format(new Date());

      this.fStorage.addDocument('inspecoes', this.inspecaoEdit).then(() => {
        this.toastr.success(['Inspeção cadastrado com sucesso!'], 'Sucesso', () => {
          this.router.navigate(['/inspection/list'])
        });

      }).catch((error) => { this.toastr.error(error.message, 'Erro') });
    }
  }

  save() { this.submitForm(); }
}
