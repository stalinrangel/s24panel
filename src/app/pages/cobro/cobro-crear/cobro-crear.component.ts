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

@Component({
  selector: 'ngx-crear-cobros',
  templateUrl: './cobro-crear.component.html',
  /*styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],*/
  styleUrls: ['./cobro-crear.component.scss'],
})
export class CobroCrearComponent implements OnInit{

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
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
      estado: ['', [Validators.required]],
        tipo: [''],
      monto: [''],
      fecha: [''],
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
      usuario_id: [''],
      establecimiento_id: [''],
      sexo: [''],
      observacion: [''],
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
    this.http.get(this.rutaService.getRutaApi()+'repartidores?token='+localStorage.getItem('mouvers_token')+'&ciudad_id='+localStorage.getItem('mouvers_ciudad'))
       .toPromise()
       .then(
         data => { // Success

           //this.getEstados();

           console.log(data);
           this.data=data;
           this.productList = this.data.repartidores;

           for (var i = 0; i < this.productList.length; ++i) {
             //console.log(this.productList[i].usuario.registro);
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


    atras(): void {
      this.editando = false;
      this.objAEditar = null;
      //console.log(this.objAEditar);

      //this.uploadFile = null;
      this.myFormEditar.reset();
    }
    public establecimiento_id=0;
    aEditar(obj): void {
      console.log(obj);
      this.establecimiento_id=obj.establecimiento.id;
      this.editando = true;
      this.objAEditar = Object.assign({},obj);
      console.log(this.objAEditar);

      this.myFormEditar.patchValue({id : ''});
      this.myFormEditar.patchValue({nombre : this.objAEditar.usuario.nombre});
      this.myFormEditar.patchValue({email : this.objAEditar.usuario.email});
      this.myFormEditar.patchValue({telefono : this.objAEditar.usuario.telefono});
      this.myFormEditar.patchValue({estado : this.objAEditar.usuario.estado});
      this.myFormEditar.patchValue({ciudad : this.objAEditar.usuario.zonas.ciudad.nombre});
      this.myFormEditar.patchValue({monto : 0});
      this.myFormEditar.patchValue({observacion : ''});
      this.myFormEditar.patchValue({usuario_id : this.objAEditar.usuario.id});
      this.myFormEditar.patchValue({establecimiento_id : this.objAEditar.establecimiento.id});
      this.myFormEditar.patchValue({fecha : new Date()});
      this.myFormEditar.patchValue({foto : this.objAEditar.usuario.imagen});
      this.myFormEditar.patchValue({cedula : this.objAEditar.usuario.registro.cedula});

      this.token_notificacion=this.objAEditar.usuario.token_notificacion;

      
      var tipo="";
      if(this.objAEditar.usuario.registro.tipo==1) {
        tipo='Persona';
      }else if(this.objAEditar.usuario.registro.tipo==2){
        tipo='Empresa';
      }else{
        tipo='Sin tipo de registro';
      }

      
      console.log(this.myFormEditar.value);
     
    }

    public send:any;
    public token_notificacion:any;
    public contenido='Se ha creado un recibo de cobro. Entra a la sección de pagos para más información.';
    pagar(){

     console.log(this.myFormEditar.value);

     this.send={
        estado: 0,
        monto: this.myFormEditar.value.monto,
        establecimiento_id: this.myFormEditar.value.establecimiento_id,
        usuario_id: this.myFormEditar.value.usuario_id,
        observacion: this.myFormEditar.value.observacion,
     };

      this.http.post(this.rutaService.getRutaApi()+'cobros', this.send)
         .toPromise()
         .then(
           data => { // Success
              console.log(data);
              this.data = data;
              this.showToast('success', 'Success!', this.data.message);
              this.atras();
              this.ngOnInit();

              this.http.get(this.rutaService.getRutaApi()+'onesignal.php?accion=18&token_notificacion='+this.token_notificacion+'&contenido='+this.contenido)
               .toPromise()
               .then(
                 data => { // Success
                   console.log(data);
                   this.data=data;

                  this.showToast('success', 'Success!', 'Mensaje enviado con éxito');
               
              this.loading = false;
                 },
                 msg => { // Error
                   console.log(msg);
                   console.log(msg.error.error);
                   this.loading = false;
                   this.showToast('success', 'Success!', 'Mensaje enviado con éxito');
                  if(msg.status == 400 || msg.status == 401){ 
                    //alert(msg.error.error);
                   // this.showToast('warning', 'Warning!', 'msg.error.error');
                }
                else { 
                    //alert(msg.error.error);
                    //this.showToast('error', 'Erro!', 'msg.error.error');
                }   
                    
                 }
               );
              
           },
           msg => { // Error
             console.log(msg);
             console.log(msg.error.error);

             //token invalido/ausente o token expiro
             if(msg.status == 400 || msg.status == 401){ 
                  //alert(msg.error.error);
                  //ir a login

                  this.showToast('warning', 'Warning!', msg.error.error);
              }
              else { 
                  //alert(msg.error.error);
                  this.showToast('error', 'Erro!', msg.error.error);
              }
              
           }
         );
    }
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
              }else if (this.productList[i].usuario.telefono.toUpperCase().indexOf(this.inputName.toUpperCase())>=0) {
                 this.filteredItems.push(this.productList[i]);
              }else if (this.productList[i].usuario.estado.toUpperCase().indexOf(this.inputName.toUpperCase())>=0) {
                 this.filteredItems.push(this.productList[i]);
              }else if (this.productList[i].usuario.ciudad.toUpperCase().indexOf(this.inputName.toUpperCase())>=0) {
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
