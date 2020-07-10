import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
//import { LocalDataSource } from 'ng2-smart-table';
//import { SmartTableService } from '../../../@core/data/smart-table.service';

//Mis imports
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { RutaBaseService } from '../../../services/ruta-base/ruta-base.service';

import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import 'style-loader!angular2-toaster/toaster.css';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { FormBuilder, FormArray, FormGroup, Validators, FormControl  } from '@angular/forms';


@Component({
  selector: 'ngx-crear-cli',
  templateUrl: './clientes-crear.component.html',
  /*styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],*/
  styleUrls: ['./clientes-crear.component.scss'],
})
export class ClientesCrearComponent implements OnInit{

  //----Alertas---<
  config: ToasterConfig;

  position = 'toast-top-right';
  animationType = 'fade';
  title = 'HI there!';
  content = `I'm cool toaster!`;
  timeout = 5000;
  toastsLimit = 5;
  type = 'default'; // 'default', 'info', 'success', 'warning', 'error'

  isNewestOnTop = true;
  isHideOnClick = true;
  isDuplicatesPrevented = false;
  isCloseButton = true;
  //----Alertas--->

  public data:any;
  private productList:any;

  public loading = false;
  public mostrar = true;

  objAEditar: any;
  objAEliminar: any;
  eliminar_id: any;
  eliminar_nombre: any;

  //Formularios
  myFormAgregar: FormGroup;

  public mouvers_user_tipo = localStorage.getItem('mouvers_user_tipo');

  constructor(private modalService: NgbModal,
              private toasterService: ToasterService,
              private http: HttpClient,
              private router: Router,
              private route: ActivatedRoute,
              private rutaService: RutaBaseService,
              public fb: FormBuilder)
  {
    this.myFormAgregar = this.fb.group({
        nombre: ['', [Validators.required]],
        email: ['', [Validators.required]],
        password: ['', [Validators.required]],
        password2: ['', [Validators.required]],
        telefono: ['', [Validators.required]],
        imagen: [''],
        tipo_usuario: [2],
        tipo_registro: [1],
      });
  }

  ngOnInit() {

    if (this.mouvers_user_tipo == '0' || this.mouvers_user_tipo == '1' || this.mouvers_user_tipo == '5' || this.mouvers_user_tipo == '6' || this.mouvers_user_tipo == '7') {
      
    }else{
          localStorage.removeItem('mouvers_token');
          localStorage.removeItem('mouvers_user_id');
          localStorage.removeItem('mouvers_user_nombre');
          localStorage.removeItem('mouvers_user_tipo');
          localStorage.removeItem('mouvers_establecimiento_id');

          this.router.navigateByUrl('/pagessimples/loginf');
      }
    
    this.loading = false;
  }

  private showToast(type: string, title: string, body: string) {
    this.config = new ToasterConfig({
      positionClass: this.position,
      timeout: this.timeout,
      newestOnTop: this.isNewestOnTop,
      tapToDismiss: this.isHideOnClick,
      preventDuplicates: this.isDuplicatesPrevented,
      animation: this.animationType,
      limit: this.toastsLimit,
    });
    const toast: Toast = {
      type: type,
      title: title,
      body: body,
      timeout: this.timeout,
      showCloseButton: this.isCloseButton,
      bodyOutputType: BodyOutputType.TrustedHtml,
    };
    this.toasterService.popAsync(toast);
  }

  
  //Abrir modal por defecto
  open(modal) {
    this.modalService.open(modal);
  }

  //Abrir modal larga
  open2(modal) {
    this.modalService.open(modal , { size: 'lg', backdrop: 'static', container: 'nb-layout', keyboard: false});
  }

  crear() {
      console.log(this.myFormAgregar.value);

      if (this.myFormAgregar.value.password != this.myFormAgregar.value.password2) {

        this.showToast('warning', 'Warning!', 'Las contraseñas no coinciden.');

      }else{
      
        this.loading = true;

        var datos= {
          //token: localStorage.getItem('mouvers_token'),
          nombre: this.myFormAgregar.value.nombre,
          email: this.myFormAgregar.value.email,
          password: this.myFormAgregar.value.password,
          telefono: this.myFormAgregar.value.telefono,
          imagen: this.myFormAgregar.value.imagen,
          tipo_usuario: this.myFormAgregar.value.tipo_usuario,
          tipo_registro: this.myFormAgregar.value.tipo_registro,
          //ciudad: this.myFormAgregar.value.ciudad,
          //estado_geo: this.myFormAgregar.value.estado_geo,
        }
        console.log(datos);
        this.http.post(this.rutaService.getRutaApi()+'usuarios', datos)
           .toPromise()
           .then(
             data => { // Success
                console.log(data);
                this.data = data;

                //alert(this.data.message);
                this.loading = false;
                this.showToast('success', 'Success!', this.data.message);

                this.myFormAgregar.reset();
                this.imgUpload='';
    
             },
             msg => { // Error
               console.log(msg);
               console.log(msg.error.error);

               this.loading = false;

               //token invalido/ausente o token expiro
               if(msg.status == 400 || msg.status == 401){ 
                    //alert(msg.error.error);
                    //ir a login

                    this.showToast('warning', 'Warning!', msg.error.error);
                    //this.mostrar = false;
                }
                else { 
                    //alert(msg.error.error);
                    this.showToast('error', 'Erro!', msg.error.error);
                }
             }
           );
      }
    }


    //Subir foto
    //----------------------------------------------------------------------------------------------
    @ViewChild('fileInput') fileInput: ElementRef;
    clear = false; //puedo borrar?
    fileIMG = null;
    imgUpload = null;
    loadinImg = false;

    private prepareSave(): any {
      let input = new FormData();
      input.append('imagen', this.fileIMG);
      input.append('carpeta', 'categorias');
      input.append('url_imagen', this.rutaService.getRutaImages());
      return input;
    }

    onFileChange(event) {
      if(event.target.files.length > 0) {
        this.fileIMG = event.target.files[0];

        this.subirImagen();
      }
    }

    clearFile() {
      this.imgUpload = null;
      this.fileInput.nativeElement.value = '';

      this.clear = false;

      this.myFormAgregar.patchValue({foto : null});
    }

    subirImagen(): void {
     
     // this.loading = true;

      const formModel = this.prepareSave();

      this.http.post(this.rutaService.getRutaApi()+'imagenes?token='+localStorage.getItem('mouvers_token'), formModel)
         .toPromise()
         .then(
           data => { // Success
              console.log(data);
              this.data = data;
              this.imgUpload = this.data.imagen;
              this.myFormAgregar.patchValue({imagen : this.imgUpload});

              //Solo admitimos imágenes.
               if (!this.fileIMG.type.match('image.*')) {
                    return;
               }

               var reader = new FileReader();

               reader.onload = (function(theFile) {
                   return function(e) {
                   // Creamos la imagen.
                    document.getElementById("imagen").innerHTML = ['<img class="thumb" src="', e.target.result, '" height="160px"/>'].join('');
                   };
               })(this.fileIMG);
     
               reader.readAsDataURL(this.fileIMG);

               this.clear = true;

              this.loadinImg=true;
              this.showToast('success', 'Success!', this.data.message); 
           },
           msg => { // Error
             console.log(msg);

             this.loading = false;
             if(msg.status == 400 || msg.status == 401){ 
                  this.showToast('warning', 'Warning!', msg.error.error);
              }
              else { 
                  this.showToast('error', 'Erro!', msg.error.error);
              }
           }
         );
    }
    //----------------------------------------------------------------------------------------------
    
   
}
