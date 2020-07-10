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
  selector: 'ngx-ver-cobros',
  templateUrl: './cobro-ver.component.html',
  /*styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],*/
  styleUrls: ['./cobro-ver.component.scss'],
})
export class CobroVerComponent implements OnInit{

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
    this.http.get(this.rutaService.getRutaApi()+'cobros?token='+localStorage.getItem('mouvers_token')+'&ciudad_id='+localStorage.getItem('mouvers_ciudad'))
       .toPromise()
       .then(
         data => { // Success

           //this.getEstados();

           console.log(data);
           this.data=data;
           this.data= this.data.repartidores;
           //this.productList = this.data.repartidores;
           this.productList=[];
           //console.log(this.productList);
           for (var i = 0; i < this.data.length; ++i) {
               try{
                  if(this.data[i].usuario.nombre) {
                    this.productList.push(this.data[i]);
                  }
               }catch (e){

               }
           }
           
           this.filteredItems = this.productList;
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

  getEstados(): void {
    /*this.http.get(this.rutaService.getRutaApi()+'entidades/municipios?token='+localStorage.getItem('mouvers_token'))
  
       .toPromise()
       .then(
         data => { // Success
           console.log(data);
           this.data = data;
           this.estados=this.data.entidades; 
         },
         msg => { // Error
           //console.log(msg);
           console.log(msg.error.error);

           //token invalido/ausente o token expiro
           if(msg.status == 400 || msg.status == 401){ 
                //alert(msg.error.error);
                //ir a login
                this.showToast('warning', 'Warning!', msg.error.error);
                setTimeout(()=>{
                  this.router.navigateByUrl('/pagessimples/loginf');
                },1000);
            }
            //sin categorias o todas deshabilitadas OFF
            else if(msg.status == 404){ 
                //alert(msg.error.error);
                this.showToast('info', 'Info!', msg.error.error);
            }

         }
       );
    */  
  }

  setEstado1(estado): void {
    console.log(estado);
    for (var i = 0; i < this.estados.length; ++i) {
      if (estado == this.estados[i].nom_ent) {
        this.ciudades = this.estados[i].municipios;
      }
    }
  }  

  setEstado2(estado): void {
    console.log(estado);
    for (var i = 0; i < this.estados.length; ++i) {
      if (estado == this.estados[i].nom_ent) {
        this.ciudades = this.estados[i].municipios;

        this.myFormEditar.patchValue({ciudad : this.ciudades[0].nom_mun});
      }
    }
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
      this.token_notificacion=this.objAEditar.usuario.token_notificacion;

      this.myFormEditar.patchValue({id : this.objAEditar.id});
      this.myFormEditar.patchValue({nombre : this.objAEditar.usuario.nombre});
      this.myFormEditar.patchValue({email : this.objAEditar.usuario.email});
      this.myFormEditar.patchValue({telefono : this.objAEditar.usuario.telefono});
      this.myFormEditar.patchValue({estado : this.objAEditar.usuario.estado});
      this.myFormEditar.patchValue({ciudad : this.objAEditar.usuario.ciudad});
      this.myFormEditar.patchValue({monto : this.objAEditar.monto});
      this.myFormEditar.patchValue({observacion : this.objAEditar.observacion});
      this.myFormEditar.patchValue({usuario_id : this.objAEditar.usuario.id});
      this.myFormEditar.patchValue({fecha : this.objAEditar.created_at});

      
      var tipo="";
      if(this.objAEditar.usuario.registro.tipo==1) {
        tipo='Persona';
      }else if(this.objAEditar.usuario.registro.tipo==2){
        tipo='Empresa';
      }else{
        tipo='Sin tipo de registro';
      }

      if(this.objAEditar.usuario.registro.referencias==null) {
        var refe={nombre1:"",telefono1:"",direccion1:"",contacto1:"",cargo1:"",nombre2:"",telefono2:"",direccion2:"",contacto2:"",cargo2:"",nombre3:"",telefono3:"",direccion3:"",contacto3:"",cargo3:""};

        this.myFormEditar.patchValue({referencias22 : refe});
      }else{
        this.myFormEditar.patchValue({referencias22 : JSON.parse(this.objAEditar.usuario.registro.referencias)});
      }
      this.myFormEditar.patchValue({tipo2 : tipo});
      this.myFormEditar.patchValue({tipo : this.objAEditar.usuario.registro.tipo});
      this.myFormEditar.patchValue({ruc : this.objAEditar.usuario.registro.ruc});
      this.myFormEditar.patchValue({latitud : this.objAEditar.usuario.registro.latitud});
      this.myFormEditar.patchValue({longitud : this.objAEditar.usuario.registro.longitud});
      this.myFormEditar.patchValue({email_empresa : this.objAEditar.usuario.registro.email_empresa});
      this.myFormEditar.patchValue({contacto_nombre : this.objAEditar.usuario.registro.contacto_nombre});
      this.myFormEditar.patchValue({contacto_cedula : this.objAEditar.usuario.registro.contacto_cedula});
      this.myFormEditar.patchValue({contacto_cargo : this.objAEditar.usuario.registro.contacto_cargo});
      this.myFormEditar.patchValue({logo : this.objAEditar.usuario.registro.logo});
      this.myFormEditar.patchValue({cedula : this.objAEditar.usuario.registro.cedula});
      this.myFormEditar.patchValue({nacionalidad : this.objAEditar.usuario.registro.nacionalidad});
      this.myFormEditar.patchValue({direccion : this.objAEditar.usuario.registro.direccion});
      this.myFormEditar.patchValue({fecha_nacimiento : this.objAEditar.usuario.registro.fecha_nacimiento});
      this.myFormEditar.patchValue({formacion : this.objAEditar.usuario.registro.formacion});
      this.myFormEditar.patchValue({experiencia : this.objAEditar.usuario.registro.experiencia});
      this.myFormEditar.patchValue({experiencia2 : JSON.parse(this.objAEditar.usuario.registro.experiencia)});
      this.myFormEditar.patchValue({anos_experiencia : this.objAEditar.usuario.registro.anos_experiencia});
      this.myFormEditar.patchValue({idoneidad : this.objAEditar.usuario.registro.idoneidad});
      this.myFormEditar.patchValue({disponibilidad : this.objAEditar.usuario.registro.disponibilidad});
      this.myFormEditar.patchValue({disponibilidad2 : JSON.parse(this.objAEditar.usuario.registro.disponibilidad)});
      this.myFormEditar.patchValue({idiomas : this.objAEditar.usuario.registro.idiomas});
      this.myFormEditar.patchValue({idiomas2 : JSON.parse(this.objAEditar.usuario.registro.idiomas)});
      this.myFormEditar.patchValue({urgencias : this.objAEditar.usuario.registro.urgencias});
      this.myFormEditar.patchValue({factura : this.objAEditar.usuario.registro.factura});
      this.myFormEditar.patchValue({referencias : this.objAEditar.usuario.registro.referencias});
      this.myFormEditar.patchValue({referencias2 : this.objAEditar.usuario.registro.referencias2});
      this.myFormEditar.patchValue({referencias : this.objAEditar.usuario.registro.referencias});
      this.myFormEditar.patchValue({referencias12 : JSON.parse(this.objAEditar.usuario.registro.referencias2)});
      
      //this.myFormEditar.patchValue({referencias22 : JSON.parse(this.objAEditar.usuario.registro.referencias}));
      this.myFormEditar.patchValue({foto : this.objAEditar.usuario.registro.foto});
      this.myFormEditar.patchValue({pasaporte : this.objAEditar.usuario.registro.pasaporte});
      this.myFormEditar.patchValue({idoneidad_file : this.objAEditar.usuario.registro.idoneidad_file});
      this.myFormEditar.patchValue({estado2 : this.objAEditar.usuario.registro.estado2});
      this.myFormEditar.patchValue({usuario_id : this.objAEditar.usuario.id});
      this.myFormEditar.patchValue({sexo : this.objAEditar.usuario.registro.sexo});

      this.setEstado1(this.objAEditar.usuario.estado);
      console.log(this.myFormEditar.value);
     
    }

    editar(): void {
     
      this.loading = true;

      var datos= {
        token: localStorage.getItem('mouvers_token'),
        nombre: this.myFormEditar.value.nombre,
        email: this.myFormEditar.value.email,
        telefono: this.myFormEditar.value.telefono,
        ciudad: this.myFormEditar.value.ciudad,
        estado: this.myFormEditar.value.estado,
      }

      this.http.put(this.rutaService.getRutaApi()+'repartidores/'+this.myFormEditar.value.id, datos)
         .toPromise()
         .then(
           data => { // Success
              console.log(data);
              this.data = data;

              for (var i = 0; i < this.productList.length; ++i) {
                if (this.productList[i].id == this.myFormEditar.value.id) {
                   this.productList[i].usuario.nombre = this.myFormEditar.value.nombre;
                   this.productList[i].usuario.email = this.myFormEditar.value.email;
                   this.productList[i].usuario.telefono = this.myFormEditar.value.telefono;
                   this.productList[i].usuario.ciudad = this.myFormEditar.value.ciudad;
                   this.productList[i].usuario.estado = this.myFormEditar.value.estado;
                }
              }

              this.filteredItems = this.productList;
              this.init();
              
              //console.log(this.productList);
              //alert(this.data.message);

              this.loading = false;
              this.editando = false;
              this.showToast('success', 'Success!', this.data.message); 
           },
           msg => { // Error
             console.log(msg);
             console.log(msg.error.error);

             this.loading = false;

             //token invalido/ausente o token expiro
             if(msg.status == 400 || msg.status == 401){ 
                  //alert(msg.error.error);
                  //ir a login
                  this.editando = true;
                  this.showToast('warning', 'Warning!', msg.error.error);
              }
              else { 
                  //alert(msg.error.error);
                  this.editando = true;
                  this.showToast('error', 'Erro!', msg.error.error);
              }
           }
         );
         var datos2={
            direccion: this.myFormEditar.value.direccion,
            lunes_i: this.myFormEditar.value.disponibilidad2.lunes_i,
            lunes_f: this.myFormEditar.value.disponibilidad2.lunes_f,
            martes_i: this.myFormEditar.value.disponibilidad2.martes_i,
            martes_f: this.myFormEditar.value.disponibilidad2.martes_f,
            miercoles_i: this.myFormEditar.value.disponibilidad2.miercoles_i,
            miercoles_f: this.myFormEditar.value.disponibilidad2.miercoles_f,
            jueves_i: this.myFormEditar.value.disponibilidad2.jueves_i,
            jueves_f: this.myFormEditar.value.disponibilidad2.jueves_f,
            viernes_i: this.myFormEditar.value.disponibilidad2.viernes_i,
            viernes_f: this.myFormEditar.value.disponibilidad2.viernes_f,
            sabado_i: this.myFormEditar.value.disponibilidad2.sabado_i,
            sabado_f: this.myFormEditar.value.disponibilidad2.sabado_f,
            domingo_i: this.myFormEditar.value.disponibilidad2.domingo_i,
            domingo_f: this.myFormEditar.value.disponibilidad2.domingo_f
         }
         console.log(datos2);
         this.http.put(this.rutaService.getRutaApi()+'establecimientos/'+this.establecimiento_id, datos2)
         .toPromise()
         .then(
           data => { // Success
              console.log(data);
              this.data = data;
              this.loading = false;
              this.showToast('success', 'Success!', this.data.message); 
           },
           msg => { // Error
             console.log(msg);
             console.log(msg.error.error);

             this.loading = false;

             //token invalido/ausente o token expiro
             if(msg.status == 400 || msg.status == 401){ 
                  //alert(msg.error.error);
                  //ir a login
                  this.editando = true;
                  this.showToast('warning', 'Warning!', msg.error.error);
              }
              else { 
                  //alert(msg.error.error);
                  this.editando = true;
                  this.showToast('error', 'Erro!', msg.error.error);
              }
           }
         );

    }

    aEliminar(obj): void {
      this.objAEliminar = obj;
      //console.log(this.objAEliminar);
      this.eliminar_id = this.objAEliminar.id;
      this.eliminar_nombre = this.objAEliminar.usuario.nombre;
    }

    eliminar(): void {
      console.log(this.objAEliminar);
      
      this.loading = true;

      var datos= {
        token: localStorage.getItem('mouvers_token')
      }

      this.http.delete(this.rutaService.getRutaApi()+'repartidores/'+this.eliminar_id+'?token='+localStorage.getItem('mouvers_token'))
         .toPromise()
         .then(
           data => { // Success
              console.log(data);
              this.data = data;

              var aux = this.productList;
              this.productList = [];

              for (var i = 0; i < aux.length; ++i) {
                if (aux[i].id != this.eliminar_id) {
                   this.productList.push(aux[i]);
                }
              }

              this.filteredItems = this.productList;
              this.init();
              
              //console.log(this.productList);
              //alert(this.data.message);
              this.loading = false;
              this.showToast('success', 'Success!', this.data.message);    
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
              }
              //no encontrada o confilto
              else if(msg.status == 404 || msg.status == 409){ 
                  //alert(msg.error.error);
                  this.showToast('error', 'Erro!', msg.error.error);
              }

           }
         );
    }

    //Para el repartidor
    cambiarEstado(obj): void {

      var v_estado: any;

      if (obj.estado == 'ON') {
        //obj.estado = 'OFF';
        v_estado = 'OFF';
      }else{
        //obj.estado = 'ON';
        v_estado = 'ON';
      }

      var datos= {
        token: localStorage.getItem('mouvers_token'),
        rep_estado: v_estado
      }

      this.http.put(this.rutaService.getRutaApi()+'repartidores/'+obj.id, datos)
         .toPromise()
         .then(
           data => { // Success
              console.log(data);
              this.data = data;
              this.showToast('success', 'Success!', this.data.message);
              obj.estado = v_estado;
              
           },
           msg => { // Error
             console.log(msg);
             console.log(msg.error.error);

              //Regresar el switch en caso de error
              if (v_estado == 'ON') {
                //obj.estado = 'OFF';
                obj.estado = 'OFF';
              }else{
                //obj.estado = 'ON';
                obj.estado = 'ON';
              }

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
    public send:any;
    public token_notificacion:any;
    public contenido='Se ha creado un recibo de cobro. Entra a la sección de pagos para más información.';
    
    pagar(){

     console.log(this.myFormEditar.value);

     this.send={
        monto: this.myFormEditar.value.monto,
        establecimiento_id: this.myFormEditar.value.establecimiento_id,
        usuario_id: this.myFormEditar.value.usuario_id,
        observacion: this.myFormEditar.value.observacion,
     };

      this.http.put(this.rutaService.getRutaApi()+'pagar/'+this.myFormEditar.value.id, this.send)
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
