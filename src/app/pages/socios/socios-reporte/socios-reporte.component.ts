import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

//Mis imports
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { RutaBaseService } from '../../../services/ruta-base/ruta-base.service';

import { FormBuilder, FormArray, FormGroup, Validators  } from '@angular/forms';

import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import 'style-loader!angular2-toaster/toaster.css';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import * as XLSX from 'xlsx';


@Component({
  selector: 'ngx-reporte-socios',
  templateUrl: './socios-reporte.component.html',
  /*styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],*/
  styleUrls: ['./socios-reporte.component.scss'],
})
export class SociosReporteComponent implements OnInit{

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

  private data:any;
  public productList:any;

  objAEditar: any;
  objAEliminar: any;
  eliminar_id: any;
  eliminar_nombre: any;

  public loading = false;
  public editando = false;
  public agregando = false;
  public mostrar = true;

  //Formularios
  myFormEditar: FormGroup;

  public productList2:any;

  public habCategoria:any;

  public catSelecAux:any;

  public admin = false;

  closeResult: string;

  public estados:any;
  public ciudades:any;

  public mouvers_user_tipo = localStorage.getItem('mouvers_user_tipo');

  public edit_contrato=false;
  public contrato:any;
  public user:any;

  constructor( private modalService: NgbModal,
               private toasterService: ToasterService,
               private http: HttpClient,
               private router: Router,
               private route: ActivatedRoute,
               private rutaService: RutaBaseService,
               public fb: FormBuilder)
  {
    
    this.myFormEditar = this.fb.group({
      id: [''],
      usuario_id: [''],
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      tipo: [''],
      tipo2: [''],
      ruc: [''],
      latitud: [''],
      longitud: [''],
      email_empresa: [''],
      contacto_nombre: [''],
      contacto_cedula: [''],
      contacto_cargo: [''],
      logo: [''],
      cedula: [''],
      nacionalidad: [''],
      direccion: [''],
      direccion_exacta: [''],
      fecha_nacimiento: [''],
      formacion: [''],
      experiencia: [''],
      experiencia2: [''],
      anos_experiencia: [''],
      idoneidad: [''],
      disponibilidad: [''],
      disponibilidad2: [''],
      idiomas: [''],
      idiomas2: [''],
      urgencias: [''],
      factura: [''],
      referencias: [''],
      referencias2: [''],
      referencias12: [''],
      referencias22: [''],
      operaciones: [''],
      foto: [''],
      pasaporte: [''],
      idoneidad_file: [''],
      estado2: [''],
      sexo: [''],
      contrato: [''],
      lunes_i: [''],
      lunes_f: [''],
      martes_i: [''],
      martes_f: [''],
      miercoles_i: [''],
      miercoles_f: [''],
      jueves_i: [''],
      jueves_f: [''],
      viernes_i: [''],
      viernes_f: [''],
      sabado_i: [''],
      sabado_f: [''],
      domingo_i: [''],
      domingo_f: [''],
      lat: [''],
      lng: [''],
      contrato_nombre: [''],
      contrato_ci: [''],
      contrato_fecha: [''],
      contrato_costo: [''],
      contrato_plan: [''],
      contrato_plan2: [''],
       fotos: [''],
       recibo_servicio: [''],
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
    
    this.loading = true;
    this.http.get(this.rutaService.getRutaApi()+'reporte?token='+localStorage.getItem('mouvers_token')+'&ciudad_id='+localStorage.getItem('mouvers_ciudad'))
       .toPromise()
       .then(
         data => { // Success

           //this.getEstados();

           console.log(data);
           this.data=data;
           this.productList = this.data.repartidores;

           for (var i = 0; i < this.productList.length; ++i) {
             console.log(this.productList[i].usuario.registro);
             if(this.productList[i].usuario.registro.tipo==2) {
               this.productList[i].tipo2='Empresa';
             }else if(this.productList[i].usuario.registro.tipo==1) {
               this.productList[i].tipo2='Individuo';
             }
           }
           
           this.productList = this.productList.sort((a, b) => b.enfinalizados - a.enfinalizados);
           
           this.filteredItems = this.productList;
           //console.log(this.productList);

           this.init();

           this.loading = false;

         },
         msg => { // Error
           console.log(msg);
           console.log(msg.error.error);

           this.loading = false;

           //token invalido/ausente o token expiro
           if(msg.status == 400 || msg.status == 401){ 
                //alert(msg.error.error);

                this.showToast('warning', 'Warning!', msg.error.error);
                this.mostrar = false;
                setTimeout(()=>{
                  this.router.navigateByUrl('/pagessimples/loginf');
                },1000);
            }
            //sin usuarios
            else if(msg.status == 404){ 
                //alert(msg.error.error);
                this.showToast('info', 'Info!', msg.error.error);
            }
            

         }
       );
  }

  //Redirigir al chat
  chat(repartidor) {
    console.log(repartidor);

    if (repartidor.usuario.chat_repartidor) {
      localStorage.setItem('mouvers_chat_id', repartidor.usuario.chat_repartidor.id);
    }else{
      localStorage.setItem('mouvers_chat_id', '');
    }
    localStorage.setItem('mouvers_usuario_id', repartidor.usuario.id);
    localStorage.setItem('mouvers_usuario_tipo', repartidor.usuario.tipo_usuario);
    localStorage.setItem('mouvers_usuario_nombre', repartidor.usuario.nombre);
    localStorage.setItem('mouvers_usuario_imagen', repartidor.usuario.imagen);
    localStorage.setItem('mouvers_usuario_token_notifi', repartidor.usuario.token_notificacion);

    this.router.navigateByUrl('/pages/chat-box');
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


  excel(){
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.productList);
     const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
     XLSX.writeFile(workbook, 'my_file.xls', { bookType: 'xls', type: 'buffer' });

    }


  
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

      this.myFormEditar.patchValue({foto : null});
    }

    subirImagen(): void {
     
      this.loading = true;

      const formModel = this.prepareSave();

      this.http.post(this.rutaService.getRutaApi()+'imagenes?token='+localStorage.getItem('mouvers_token'), formModel)
         .toPromise()
         .then(
           data => { // Success
              console.log(data);
              this.data = data;
              this.imgUpload = this.data.imagen;
              this.myFormEditar.patchValue({foto : this.imgUpload});

              //Solo admitimos imágenes.
               if (!this.fileIMG.type.match('image.*')) {
                    return;
               }

               var reader = new FileReader();

               reader.onload = (function(theFile) {
                   return function(e) {
                   // Creamos la imagen.
                    document.getElementById("foto").innerHTML = ['<img class="thumb" src="', e.target.result, '" height="160px"/>'].join('');
                   };
               })(this.fileIMG);
     
               reader.readAsDataURL(this.fileIMG);

               this.clear = true;

              this.loading = false;
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
    

    //----------------------------------------------------------------------------------------------
      //Logo
        //----------------------------------------------------------------------------------------------
    //@ViewChild('fileInput') fileInput: ElementRef;
    clearLogo = false; //puedo borrar?
    fileIMGLogo = null;
    imgUploadLogo = null;
    loadinImgLogo = false;

    private prepareSaveLogo(): any {
      let inputLogo = new FormData();
      inputLogo.append('imagen', this.fileIMGLogo);
      inputLogo.append('carpeta', 'categorias');
      inputLogo.append('url_imagen', this.rutaService.getRutaImages());
      return inputLogo;
    }

    onFileChangeLogo(event) {
      if(event.target.files.length > 0) {
        this.fileIMGLogo = event.target.files[0];

        this.subirImagenLogo();
      }
    }

    clearFileLogo() {
      this.imgUploadLogo = null;
      this.fileInput.nativeElement.value = '';

      this.clearLogo = false;

      this.myFormEditar.patchValue({logo : null});
    }

    subirImagenLogo(): void {
     
      this.loading = true;

      const formModel = this.prepareSaveLogo();

      this.http.post(this.rutaService.getRutaApi()+'imagenes?token='+localStorage.getItem('mouvers_token'), formModel)
         .toPromise()
         .then(
           data => { // Success
              console.log(data);
              this.data = data;
              this.imgUploadLogo = this.data.imagen;
              this.myFormEditar.patchValue({logo : this.imgUploadLogo});
              this.objAEditar.usuario.registro.logo=this.imgUploadLogo;
              //Solo admitimos imágenes.
               if (!this.fileIMGLogo.type.match('image.*')) {
                    return;
               }

               var reader = new FileReader();

               reader.onload = (function(theFile) {
                   return function(e) {
                   // Creamos la imagen.
                    document.getElementById("logo").innerHTML = ['<img class="thumb" src="', e.target.result, '" height="160px"/>'].join('');
                   };
               })(this.fileIMGLogo);
     
               reader.readAsDataURL(this.fileIMGLogo);

               this.clearLogo = true;

              this.loading = false;
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
    //----------------------------------------------------------------------------------------------
    

    //----------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------
   // @ViewChild('fileInput') fileInput: ElementRef;
    clearPasaporte = false; //puedo borrar?
    fileIMGPasaporte = null;
    imgUploadPasaporte = null;
    loadinImgPasaporte = false;

    private prepareSavePasaporte(): any {
      let inputPasaporte = new FormData();
      inputPasaporte.append('imagen', this.fileIMGPasaporte);
      inputPasaporte.append('carpeta', 'categorias');
      inputPasaporte.append('url_imagen', this.rutaService.getRutaImages());
      return inputPasaporte;
    }

    onFileChangePasaporte(event) {
      if(event.target.files.length > 0) {
        this.fileIMGPasaporte = event.target.files[0];

        this.subirImagenPasaporte();
      }
    }

    clearFilePasaporte() {
      this.imgUploadPasaporte = null;
      this.fileInput.nativeElement.value = '';

      this.clearPasaporte = false;

      this.myFormEditar.patchValue({Pasaporte : null});
    }

    subirImagenPasaporte(): void {
     
      this.loading = true;

      const formModel = this.prepareSavePasaporte();

      this.http.post(this.rutaService.getRutaApi()+'imagenes?token='+localStorage.getItem('mouvers_token'), formModel)
         .toPromise()
         .then(
           data => { // Success
              console.log(data);
              this.data = data;
              this.imgUploadPasaporte = this.data.imagen;
              this.myFormEditar.patchValue({pasaporte : this.imgUploadPasaporte});
              this.objAEditar.usuario.registro.pasaporte=this.imgUploadPasaporte;
              //Solo admitimos imágenes.
               if (!this.fileIMGPasaporte.type.match('image.*')) {
                    return;
               }

               var reader = new FileReader();

               reader.onload = (function(theFile) {
                   return function(e) {
                   // Creamos la imagen.
                    document.getElementById("pasaporte").innerHTML = ['<img class="thumb" src="', e.target.result, '" height="160px"/>'].join('');
                   };
               })(this.fileIMGPasaporte);
     
               reader.readAsDataURL(this.fileIMGPasaporte);

               this.clearPasaporte = true;

              this.loading = false;
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
    //----------------------------------------------------------------------------------------------

    //----------------------------------------------------------------------------------------------
    // operaciones Operaciones

    //@ViewChild('fileInput') fileInput: ElementRef;
    clearOperaciones = false; //puedo borrar?
    fileIMGOperaciones = null;
    imgUploadOperaciones = null;
    loadinImgOperaciones = false;

    private prepareSaveOperaciones(): any {
      let inputOperaciones = new FormData();
      inputOperaciones.append('imagen', this.fileIMGOperaciones);
      inputOperaciones.append('carpeta', 'categorias');
      inputOperaciones.append('url_imagen', this.rutaService.getRutaImages());
      return inputOperaciones;
    }

    onFileChangeOperaciones(event) {
      if(event.target.files.length > 0) {
        this.fileIMGOperaciones = event.target.files[0];

        this.subirImagenOperaciones();
      }
    }

    clearFileOperaciones() {
      this.imgUploadOperaciones = null;
      this.fileInput.nativeElement.value = '';

      this.clearOperaciones = false;

      this.myFormEditar.patchValue({Operaciones : null});
    }

    subirImagenOperaciones(): void {
     
      this.loading = true;

      const formModel = this.prepareSaveOperaciones();

      this.http.post(this.rutaService.getRutaApi()+'imagenes?token='+localStorage.getItem('mouvers_token'), formModel)
         .toPromise()
         .then(
           data => { // Success
              console.log(data);
              this.data = data;
              this.imgUploadOperaciones = this.data.imagen;
              this.myFormEditar.patchValue({operaciones : this.imgUploadOperaciones});
              this.objAEditar.usuario.registro.operaciones=this.imgUploadOperaciones;
              //Solo admitimos imágenes.
               if (!this.fileIMGOperaciones.type.match('image.*')) {
                    return;
               }

               var reader = new FileReader();

               reader.onload = (function(theFile) {
                   return function(e) {
                   // Creamos la imagen.
                    document.getElementById("Operaciones").innerHTML = ['<img class="thumb" src="', e.target.result, '" height="160px"/>'].join('');
                   };
               })(this.fileIMGOperaciones);
     
               reader.readAsDataURL(this.fileIMGOperaciones);

               this.clearOperaciones = true;

              this.loading = false;
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
    

    //----------------------------------------------------------------------------------------------
    // idoneidad_file Idoneidad_file
    //@ViewChild('fileInput') fileInput: ElementRef;
    clearIdoneidad_file = false; //puedo borrar?
    fileIMGIdoneidad_file = null;
    imgUploadIdoneidad_file = null;
    loadinImgIdoneidad_file = false;

    private prepareSaveIdoneidad_file(): any {
      console.log('prepare');
      let inputIdoneidad_file = new FormData();
      inputIdoneidad_file.append('imagen', this.fileIMGIdoneidad_file);
      inputIdoneidad_file.append('carpeta', 'categorias');
      inputIdoneidad_file.append('url_imagen', this.rutaService.getRutaImages());
      return inputIdoneidad_file;
    }

    onFileChangeIdoneidad_file(event) {
      console.log('onfilechange');
      if(event.target.files.length > 0) {
        this.fileIMGIdoneidad_file = event.target.files[0];

        this.subirImagenIdoneidad_file();
      }
    }

    clearFileIdoneidad_file() {
      console.log('clearfile');
      this.imgUploadIdoneidad_file = null;
      this.fileInput.nativeElement.value = '';

      this.clearIdoneidad_file = false;

      this.myFormEditar.patchValue({idoneidad_file : null});
    }

    subirImagenIdoneidad_file(): void {
      console.log('subirimagen');
      this.loading = true;

      const formModel = this.prepareSaveIdoneidad_file();

      this.http.post(this.rutaService.getRutaApi()+'imagenes?token='+localStorage.getItem('mouvers_token'), formModel)
         .toPromise()
         .then(
           data => { // Success
              console.log(data);
              this.data = data;
              this.imgUploadIdoneidad_file = this.data.imagen;
              this.myFormEditar.patchValue({idoneidad_file : this.imgUploadIdoneidad_file});
              this.objAEditar.usuario.registro.idoneidad_file=this.imgUploadIdoneidad_file;
              //Solo admitimos imágenes.
               if (!this.fileIMGIdoneidad_file.type.match('image.*')) {
                    return;
               }

               var reader = new FileReader();

               reader.onload = (function(theFile) {
                   return function(e) {
                   // Creamos la imagen.
                    document.getElementById("idoneidad_file").innerHTML = ['<img class="thumb" src="', e.target.result, '" height="160px"/>'].join('');
                   };
               })(this.fileIMGIdoneidad_file);
     
               reader.readAsDataURL(this.fileIMGIdoneidad_file);

               this.clearIdoneidad_file = true;

              this.loading = false;
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


        //----------------------------------------------------------------------------------------------
    // idoneidad_file Idoneidad_file
    //@ViewChild('fileInput') fileInput: ElementRef;
    clearrecibo_servicio = false; //puedo borrar?
    fileIMGrecibo_servicio = null;
    imgUploadrecibo_servicio = null;
    loadinImgrecibo_servicio = false;

    private prepareSaverecibo_servicio(): any {
      console.log('prepareSaverecibo_servicio');
      let inputrecibo_servicio = new FormData();
      inputrecibo_servicio.append('imagen', this.fileIMGrecibo_servicio);
      inputrecibo_servicio.append('carpeta', 'categorias');
      inputrecibo_servicio.append('url_imagen', this.rutaService.getRutaImages());
      return inputrecibo_servicio;
    }

    onFileChangerecibo_servicio(event) {
      console.log('onFileChangeRecibo_servicio');
      if(event.target.files.length > 0) {
        this.fileIMGrecibo_servicio = event.target.files[0];

        this.subirImagenrecibo_servicio();
      }
    }

    clearFilerecibo_servicio() {
      console.log('clearFilerecibo_servicio');
      this.imgUploadrecibo_servicio = null;
      this.fileInput.nativeElement.value = '';

      this.clearrecibo_servicio = false;

      this.myFormEditar.patchValue({recibo_servicio : null});
    }

    subirImagenrecibo_servicio(): void {
     console.log('subirImagenrecibo_servicio');
      this.loading = true;

      const formModel = this.prepareSaverecibo_servicio();

      this.http.post(this.rutaService.getRutaApi()+'imagenes?token='+localStorage.getItem('mouvers_token'), formModel)
         .toPromise()
         .then(
           data => { // Success
              console.log(data);
              this.data = data;
              this.imgUploadrecibo_servicio = this.data.imagen;
              this.myFormEditar.patchValue({recibo_servicio : this.imgUploadrecibo_servicio});
              this.objAEditar.usuario.registro.recibo_servicio=this.imgUploadrecibo_servicio;
              //Solo admitimos imágenes.
               if (!this.fileIMGrecibo_servicio.type.match('image.*')) {
                    return;
               }

               var reader = new FileReader();

               reader.onload = (function(theFile) {
                   return function(e) {
                   // Creamos la imagen.
                    document.getElementById("recibo_servicio").innerHTML = ['<img class="thumb" src="', e.target.result, '" height="160px"/>'].join('');
                   };
               })(this.fileIMGrecibo_servicio);
     
               reader.readAsDataURL(this.fileIMGrecibo_servicio);

               this.clearrecibo_servicio = true;

              this.loading = false;
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


    vercontrato(){
      if(this.edit_contrato==false) {
        this.edit_contrato=true;
      }else if(this.edit_contrato==true) {
        this.edit_contrato=false;
      }
    }

    //----------------------------------------------------------------------------------------------


    
   //----Tabla<
   filteredItems : any;
   pages : number = 4;
   pageSize : number = 5;
   pageNumber : number = 0;
   currentIndex : number = 1;
   items: any;
   pagesIndex : Array<number>;
   pageStart : number = 1;
   inputName : string = '';

   init(){
         this.currentIndex = 1;
         this.pageStart = 1;
         this.pages = 4;

         this.pageNumber = parseInt(""+ (this.filteredItems.length / this.pageSize));
         if(this.filteredItems.length % this.pageSize != 0){
            this.pageNumber ++;
         }
    
         if(this.pageNumber  < this.pages){
               this.pages =  this.pageNumber;
         }
       
         this.refreshItems();
         console.log("this.pageNumber :  "+this.pageNumber);
   }

   FilterByName(){
      this.filteredItems = [];
      if(this.inputName != ""){
            for (var i = 0; i < this.productList.length; ++i) {
              if (this.productList[i].usuario.nombre.toUpperCase().indexOf(this.inputName.toUpperCase())>=0) {
                 this.filteredItems.push(this.productList[i]);
              }else if (this.productList[i].usuario.email.toUpperCase().indexOf(this.inputName.toUpperCase())>=0) {
                 this.filteredItems.push(this.productList[i]);
              }
            }
      }else{
         this.filteredItems = this.productList;
      }
      console.log(this.filteredItems);
      this.init();
   }
   fillArray(): any{
      var obj = new Array();
      for(var index = this.pageStart; index< this.pageStart + this.pages; index ++) {
                  obj.push(index);
      }
      return obj;
   }
   refreshItems(){
       this.items = this.filteredItems.slice((this.currentIndex - 1)*this.pageSize, (this.currentIndex) * this.pageSize);
       this.pagesIndex =  this.fillArray();
   }
   prevPage(){
      if(this.currentIndex>1){
         this.currentIndex --;
      } 
      if(this.currentIndex < this.pageStart){
         this.pageStart = this.currentIndex;
      }
      this.refreshItems();
   }
   nextPage(){
      if(this.currentIndex < this.pageNumber){
            this.currentIndex ++;
      }
      if(this.currentIndex >= (this.pageStart + this.pages)){
         this.pageStart = this.currentIndex - this.pages + 1;
      }
 
      this.refreshItems();
   }
    setPage(index : number){
         this.currentIndex = index;
         this.refreshItems();
    }
  //----Tabla>

}
