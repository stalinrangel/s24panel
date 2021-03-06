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

import { HeaderToPedidosEventService } from '../../../services/eventos-services/header-to-pedidos-event-service/header-to-pedidos-event.service';
import { HeaderService } from '../../../services/header-service/header.service';


@Component({
  selector: 'ngx-incompletos-socios',
  templateUrl: './socios-incompletos.component.html',
  /*styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],*/
  styleUrls: ['./socios-incompletos.component.scss'],
})
export class SociosIncompletosComponent implements OnInit{

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
  public productListA:any;
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
  public pais = localStorage.getItem('mouvers_pais');

  public edit_contrato=false;
  public contrato:any;
  public user:any;
  public id_operacion:any="";

  registro_estado = {
    nombre:{
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    email:{
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    telefono:{
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    ciudad: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    estado: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    tipo: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    tipo2: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    ruc: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    latitud: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    longitud: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    email_empresa: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    contacto_nombre: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    contacto_cedula: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    contacto_cargo: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    logo: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    cedula: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    nacionalidad: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    direccion: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    direccion_exacta: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    fecha_nacimiento: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    formacion: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    experiencia: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    experiencia2: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    anos_experiencia: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    idoneidad: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    disponibilidad: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    disponibilidad2: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    idiomas: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    idiomas2: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    urgencias: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    factura: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    referencias: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    referencias2: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    referencias12: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    referencias22: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    operaciones: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    foto: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    pasaporte: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    idoneidad_file: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    estado2: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    sexo: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    contrato: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    lunes_i: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    lunes_f: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    martes_i: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    martes_f: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    miercoles_i: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    miercoles_f: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    jueves_i: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    jueves_f: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    viernes_i: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    viernes_f: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    sabado_i: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    sabado_f: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    domingo_i: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    domingo_f: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    lat: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    lng: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    contrato_nombre: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    contrato_ci: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    contrato_fecha: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    contrato_costo: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    contrato_plan: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    contrato_plan2: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    fotos: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    recibo_servicio: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    contrato_aux: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
  };

  registro_estado_aux = {
    nombre:{
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    email:{
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    telefono:{
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    ciudad: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    estado: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    tipo: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    tipo2: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    ruc: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    latitud: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    longitud: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    email_empresa: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    contacto_nombre: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    contacto_cedula: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    contacto_cargo: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    logo: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    cedula: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    nacionalidad: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    direccion: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    direccion_exacta: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    fecha_nacimiento: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    formacion: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    experiencia: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    experiencia2: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    anos_experiencia: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    idoneidad: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    disponibilidad: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    disponibilidad2: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    idiomas: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    idiomas2: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    urgencias: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    factura: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    referencias: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    referencias2: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    referencias12: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    referencias22: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    operaciones: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    foto: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    pasaporte: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    idoneidad_file: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    estado2: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    sexo: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    contrato: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    lunes_i: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    lunes_f: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    martes_i: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    martes_f: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    miercoles_i: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    miercoles_f: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    jueves_i: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    jueves_f: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    viernes_i: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    viernes_f: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    sabado_i: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    sabado_f: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    domingo_i: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    domingo_f: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    lat: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    lng: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    contrato_nombre: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    contrato_ci: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    contrato_fecha: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    contrato_costo: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    contrato_plan: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    contrato_plan2: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    fotos: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    recibo_servicio: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
    contrato_aux: {
      estado: 0,
      icon:'ion-alert-circled',
      color: '#ffa100',
    },
  };

  constructor( private modalService: NgbModal,
               private toasterService: ToasterService,
               private http: HttpClient,
               private router: Router,
               private route: ActivatedRoute,
               private rutaService: RutaBaseService,
               public fb: FormBuilder,
               private headerToPedidosEventService: HeaderToPedidosEventService,
               private headerService: HeaderService)
  {
    //Detectar evento cargar pedido de notificacion entrante
    this.headerToPedidosEventService.headerToPedidosData.subscribe(
        (data: any) => {
            console.log(data);
            this.id_operacion=data;
            this.id_operacion=this.id_operacion.usuario_id;
            console.log( this.id_operacion); 
            localStorage.setItem('id_operacion', this.id_operacion);
          setTimeout(()=>{
            localStorage.setItem('id_operacion', "");
          },49600);
      });

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
    this.http.get(this.rutaService.getRutaApi()+'repartidores/estado/registro?token='+localStorage.getItem('mouvers_token')+'&ciudad_id='+localStorage.getItem('mouvers_ciudad'))
       .toPromise()
       .then(
         data => { // Success

           //this.getEstados();

           console.log(data);
           this.data=data;
           this.productListA = this.data.repartidoresA;
           this.productList = this.data.repartidoresB;


           //Cambiar el formato de la fecha y hora
           var dia : any;
           var mes : any;
           var anio : any;
           var fecha : any;
           var hora : any;
           var minutos : any;
           var segundos : any;

           for (var i = 0; i < this.productListA.length; ++i) {
             //console.log(this.productListA[i].usuario.registro);
             if(this.productListA[i].usuario.tipo_usuario==2) {
               this.productListA[i].tipo2='Empresa';
             }else if(this.productListA[i].usuario.tipo_usuario==1) {
               this.productListA[i].tipo2='Individuo';
             }

             fecha = new Date(this.productListA[i].usuario.created_at);
             dia = fecha.getDate();
             mes = fecha.getMonth() + 1;
             anio = fecha.getFullYear();

             hora = fecha.getHours();
             minutos = fecha.getMinutes();
             segundos = fecha.getSeconds();

             this.productListA[i].usuario.fecha = dia+'/'+mes+'/'+anio;
             //this.productListA[i].usuario.horaAux = hora+':'+minutos+':'+segundos;

           }
           
           this.productListA = this.productListA.sort((a, b) => b.enfinalizados - a.enfinalizados);
           
           this.filteredItemsA = this.productListA;

           //console.log(this.productList);

           this.initA();           

           for (var i = 0; i < this.productList.length; ++i) {
             //console.log(this.productList[i].usuario.registro);
             if(this.productList[i].usuario.registro.tipo==2) {
               this.productList[i].tipo2='Empresa';
             }else if(this.productList[i].usuario.registro.tipo==1) {
               this.productList[i].tipo2='Individuo';
             }

             fecha = new Date(this.productList[i].usuario.created_at);
             dia = fecha.getDate();
             mes = fecha.getMonth() + 1;
             anio = fecha.getFullYear();

             hora = fecha.getHours();
             minutos = fecha.getMinutes();
             segundos = fecha.getSeconds();

             this.productList[i].usuario.fecha = dia+'/'+mes+'/'+anio;
             //this.productList[i].usuario.horaAux = hora+':'+minutos+':'+segundos;

           }
           
           this.productList = this.productList.sort((a, b) => b.enfinalizados - a.enfinalizados);
           
           this.filteredItems = this.productList;
           this.datos=this.productList;
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

  public datos:any;
  buscar_id_operacion(){
     console.log('buscar_id_operacion');
     console.log(localStorage.getItem('id_operacion'));
     var id_operacion = localStorage.getItem('id_operacion');
     if (id_operacion!="") {
       var prod=this.datos;
       console.log(prod);
       for (var i = 0; i < prod.length; i++) {
         
         if (id_operacion==prod[i].usuario_id) {
           console.log(prod[i]);
           var selec= prod[i];
           setTimeout(()=>{
                 console.log(selec);
                 this.aEditar(selec);
                },1000);
           
         }
       }
     }
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
    this.http.get(this.rutaService.getRutaApi()+'entidades/municipios?token='+localStorage.getItem('mouvers_token'))
  
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
      localStorage.setItem('id_operacion', "");
      this.registro_estado = this.registro_estado_aux;
    }


    public establecimiento_id=0;
    public refer=true;
    public token_notificacion:any;

    aEditar(obj): void {
      //console.log(obj);
      this.establecimiento_id=obj.establecimiento.id;
      this.editando = true;
      //this.objAEditar = Object.assign({},obj);
      this.objAEditar = JSON.parse(JSON.stringify(obj));

       this.token_notificacion=this.objAEditar.usuario.token_notificacion;

      for (var i = 0; i < this.objAEditar.establecimiento.productos.length; i++) {
        //console.log(this.objAEditar.establecimiento.productos[i].fotos);
        if( this.objAEditar.establecimiento.productos[i].fotos!=null) {
          if(this.objAEditar.establecimiento.productos[i].fotos.length!=0) {
            this.objAEditar.establecimiento.productos[i].fotos=JSON.parse(this.objAEditar.establecimiento.productos[i].fotos);
          }
        }
      }
      //console.log(this.objAEditar);

      if (obj.usuario.contrato.length > 0) {
        var tam_contrato=obj.usuario.contrato.length;
        this.contrato=obj.usuario.contrato[tam_contrato-1].url;
        console.log(this.contrato);
      }else{
        this.contrato = null;
      }

      

      this.user=obj.usuario;

      this.myFormEditar.patchValue({id : this.objAEditar.id});
      this.myFormEditar.patchValue({nombre : this.objAEditar.usuario.nombre});
      this.myFormEditar.patchValue({email : this.objAEditar.usuario.email});
      this.myFormEditar.patchValue({telefono : this.objAEditar.usuario.telefono});
      this.myFormEditar.patchValue({estado : this.objAEditar.usuario.estado});
      this.myFormEditar.patchValue({ciudad : this.objAEditar.usuario.ciudad});

      
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
      this.myFormEditar.patchValue({usuario_id : this.objAEditar.usuario.id});
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
      this.myFormEditar.patchValue({direccion_exacta : this.objAEditar.usuario.registro.direccion_exacta});
      this.myFormEditar.patchValue({lat : this.objAEditar.usuario.registro.latitud});
      this.myFormEditar.patchValue({lng : this.objAEditar.usuario.registro.longitud});
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
      if(this.objAEditar.usuario.registro.referencias==null) {
        this.refer=false;
      }
      this.myFormEditar.patchValue({referencias : this.objAEditar.usuario.registro.referencias});
      this.myFormEditar.patchValue({referencias2 : JSON.parse(this.objAEditar.usuario.registro.referencias)});
      this.myFormEditar.patchValue({referencias12 : this.objAEditar.usuario.registro.referencias2});
      this.myFormEditar.patchValue({referencias22 : JSON.parse(this.objAEditar.usuario.registro.referencias2)});
      
      //this.myFormEditar.patchValue({referencias22 : JSON.parse(this.objAEditar.usuario.registro.referencias}));
      this.myFormEditar.patchValue({foto : this.objAEditar.usuario.imagen});
      this.myFormEditar.patchValue({pasaporte : this.objAEditar.usuario.registro.pasaporte});
      this.myFormEditar.patchValue({recibo_servicio : this.objAEditar.usuario.registro.recibo_servicio});
      this.myFormEditar.patchValue({idoneidad_file : this.objAEditar.usuario.registro.idoneidad_file});
      this.myFormEditar.patchValue({operaciones : this.objAEditar.usuario.registro.operaciones});
      this.myFormEditar.patchValue({estado2 : this.objAEditar.usuario.registro.estado2});
      this.myFormEditar.patchValue({usuario_id : this.objAEditar.usuario.registro.usuario_id});
      this.myFormEditar.patchValue({sexo : this.objAEditar.usuario.registro.sexo});
      this.myFormEditar.patchValue({contrato : this.objAEditar.usuario.registro.contrato});
      var disp=  JSON.parse(this.objAEditar.usuario.registro.disponibilidad);
      this.myFormEditar.patchValue({lunes_i : disp.lunes_i});
      this.myFormEditar.patchValue({lunes_f : disp.lunes_f});
      this.myFormEditar.patchValue({martes_i : disp.martes_i});
      this.myFormEditar.patchValue({martes_f : disp.martes_f});
      this.myFormEditar.patchValue({miercoles_i : disp.miercoles_i});
      this.myFormEditar.patchValue({miercoles_f : disp.miercoles_f});
      this.myFormEditar.patchValue({jueves_i : disp.jueves_i});
      this.myFormEditar.patchValue({jueves_f : disp.jueves_f});
      this.myFormEditar.patchValue({viernes_i : disp.viernes_i});
      this.myFormEditar.patchValue({viernes_f : disp.viernes_f});
      this.myFormEditar.patchValue({sabado_i : disp.sabado_i});
      this.myFormEditar.patchValue({sabado_f : disp.sabado_f});
      this.myFormEditar.patchValue({domingo_i : disp.domingo_i});
      this.myFormEditar.patchValue({domingo_f : disp.domingo_f});

      this.myFormEditar.patchValue({contrato_nombre : this.objAEditar.usuario.nombre});
      this.myFormEditar.patchValue({contrato_ci : this.objAEditar.usuario.registro.ruc});
     // this.myFormEditar.patchValue({contrato_fecha : 1});

      if (this.objAEditar.plan) {
        var plan = JSON.parse(this.objAEditar.plan);
        this.myFormEditar.patchValue({contrato_costo : plan.costo});
        this.myFormEditar.patchValue({contrato_plan : plan.tipo_plan});
        this.myFormEditar.patchValue({contrato_plan2 : plan.tipo_plan});
      }
            
      //this.setEstado1(this.objAEditar.usuario.estado);
      console.log(this.myFormEditar.value);

      this.evaluarEstadoRegistro();
     
    }

    evaluarEstadoRegistro(){
      if (this.myFormEditar.value.nombre == null || this.myFormEditar.value.nombre == '') {
        this.registro_estado.nombre.estado = 0;
        this.registro_estado.nombre.icon ='ion-alert-circled';
        this.registro_estado.nombre.color = '#ffa100';
      }else{
        this.registro_estado.nombre.estado = 1;
        this.registro_estado.nombre.icon ='ion-checkmark';
        this.registro_estado.nombre.color = '#28a745';
      }

      if (this.myFormEditar.value.email == null || this.myFormEditar.value.email == '') {
        this.registro_estado.email.estado = 0;
        this.registro_estado.email.icon ='ion-alert-circled';
        this.registro_estado.email.color = '#ffa100';
      }else{
        this.registro_estado.email.estado = 1;
        this.registro_estado.email.icon ='ion-checkmark';
        this.registro_estado.email.color = '#28a745';
      }

      if (this.myFormEditar.value.telefono == null || this.myFormEditar.value.telefono == '') {
        this.registro_estado.telefono.estado = 0;
        this.registro_estado.telefono.icon ='ion-alert-circled';
        this.registro_estado.telefono.color = '#ffa100';
      }else{
        this.registro_estado.telefono.estado = 1;
        this.registro_estado.telefono.icon ='ion-checkmark';
        this.registro_estado.telefono.color = '#28a745';
      }

      if (this.myFormEditar.value.foto == null || this.myFormEditar.value.foto == '') {
        this.registro_estado.foto.estado = 0;
        this.registro_estado.foto.icon ='ion-alert-circled';
        this.registro_estado.foto.color = '#ffa100';
      }else{
        this.registro_estado.foto.estado = 1;
        this.registro_estado.foto.icon ='ion-checkmark';
        this.registro_estado.foto.color = '#28a745';
      }

      if (this.myFormEditar.value.cedula == null || this.myFormEditar.value.cedula == '') {
        this.registro_estado.cedula.estado = 0;
        this.registro_estado.cedula.icon ='ion-alert-circled';
        this.registro_estado.cedula.color = '#ffa100';
      }else{
        this.registro_estado.cedula.estado = 1;
        this.registro_estado.cedula.icon ='ion-checkmark';
        this.registro_estado.cedula.color = '#28a745';
      }

      if (this.myFormEditar.value.nacionalidad == null || this.myFormEditar.value.nacionalidad == '') {
        this.registro_estado.nacionalidad.estado = 0;
        this.registro_estado.nacionalidad.icon ='ion-alert-circled';
        this.registro_estado.nacionalidad.color = '#ffa100';
      }else{
        this.registro_estado.nacionalidad.estado = 1;
        this.registro_estado.nacionalidad.icon ='ion-checkmark';
        this.registro_estado.nacionalidad.color = '#28a745';
      }

      if (this.myFormEditar.value.direccion == null || this.myFormEditar.value.direccion == '') {
        this.registro_estado.direccion.estado = 0;
        this.registro_estado.direccion.icon ='ion-alert-circled';
        this.registro_estado.direccion.color = '#ffa100';
      }else{
        this.registro_estado.direccion.estado = 1;
        this.registro_estado.direccion.icon ='ion-checkmark';
        this.registro_estado.direccion.color = '#28a745';
      }

      if (this.myFormEditar.value.direccion_exacta == null || this.myFormEditar.value.direccion_exacta == '') {
        this.registro_estado.direccion_exacta.estado = 0;
        this.registro_estado.direccion_exacta.icon ='ion-alert-circled';
        this.registro_estado.direccion_exacta.color = '#ffa100';
      }else{
        this.registro_estado.direccion_exacta.estado = 1;
        this.registro_estado.direccion_exacta.icon ='ion-checkmark';
        this.registro_estado.direccion_exacta.color = '#28a745';
      }

      if (this.myFormEditar.value.sexo == null || this.myFormEditar.value.sexo == '') {
        this.registro_estado.sexo.estado = 0;
        this.registro_estado.sexo.icon ='ion-alert-circled';
        this.registro_estado.sexo.color = '#ffa100';
      }else{
        this.registro_estado.sexo.estado = 1;
        this.registro_estado.sexo.icon ='ion-checkmark';
        this.registro_estado.sexo.color = '#28a745';
      }

      if (this.myFormEditar.value.fecha_nacimiento == null || this.myFormEditar.value.fecha_nacimiento == '') {
        this.registro_estado.fecha_nacimiento.estado = 0;
        this.registro_estado.fecha_nacimiento.icon ='ion-alert-circled';
        this.registro_estado.fecha_nacimiento.color = '#ffa100';
      }else{
        this.registro_estado.fecha_nacimiento.estado = 1;
        this.registro_estado.fecha_nacimiento.icon ='ion-checkmark';
        this.registro_estado.fecha_nacimiento.color = '#28a745';
      }

      if (this.myFormEditar.value.formacion == null || this.myFormEditar.value.formacion == '') {
        this.registro_estado.formacion.estado = 0;
        this.registro_estado.formacion.icon ='ion-alert-circled';
        this.registro_estado.formacion.color = '#ffa100';
      }else{
        this.registro_estado.formacion.estado = 1;
        this.registro_estado.formacion.icon ='ion-checkmark';
        this.registro_estado.formacion.color = '#28a745';
      }

      if (this.myFormEditar.value.tipo2 == null || this.myFormEditar.value.tipo2 == '') {
        this.registro_estado.tipo2.estado = 0;
        this.registro_estado.tipo2.icon ='ion-alert-circled';
        this.registro_estado.tipo2.color = '#ffa100';
      }else{
        this.registro_estado.tipo2.estado = 1;
        this.registro_estado.tipo2.icon ='ion-checkmark';
        this.registro_estado.tipo2.color = '#28a745';
      }

      if (this.myFormEditar.value.ruc == null || this.myFormEditar.value.ruc == '') {
        this.registro_estado.ruc.estado = 0;
        this.registro_estado.ruc.icon ='ion-alert-circled';
        this.registro_estado.ruc.color = '#ffa100';
      }else{
        this.registro_estado.ruc.estado = 1;
        this.registro_estado.ruc.icon ='ion-checkmark';
        this.registro_estado.ruc.color = '#28a745';
      }

      if (this.myFormEditar.value.email_empresa == null || this.myFormEditar.value.email_empresa == '') {
        this.registro_estado.email_empresa.estado = 0;
        this.registro_estado.email_empresa.icon ='ion-alert-circled';
        this.registro_estado.email_empresa.color = '#ffa100';
      }else{
        this.registro_estado.email_empresa.estado = 1;
        this.registro_estado.email_empresa.icon ='ion-checkmark';
        this.registro_estado.email_empresa.color = '#28a745';
      }

      if (this.myFormEditar.value.contacto_nombre == null || this.myFormEditar.value.contacto_nombre == '') {
        this.registro_estado.contacto_nombre.estado = 0;
        this.registro_estado.contacto_nombre.icon ='ion-alert-circled';
        this.registro_estado.contacto_nombre.color = '#ffa100';
      }else{
        this.registro_estado.contacto_nombre.estado = 1;
        this.registro_estado.contacto_nombre.icon ='ion-checkmark';
        this.registro_estado.contacto_nombre.color = '#28a745';
      }

      if (this.myFormEditar.value.urgencias == null || this.myFormEditar.value.urgencias == '') {
        this.registro_estado.urgencias.estado = 0;
        this.registro_estado.urgencias.icon ='ion-alert-circled';
        this.registro_estado.urgencias.color = '#ffa100';
      }else{
        this.registro_estado.urgencias.estado = 1;
        this.registro_estado.urgencias.icon ='ion-checkmark';
        this.registro_estado.urgencias.color = '#28a745';
      }

      if (this.myFormEditar.value.factura == null || this.myFormEditar.value.factura == '') {
        this.registro_estado.factura.estado = 0;
        this.registro_estado.factura.icon ='ion-alert-circled';
        this.registro_estado.factura.color = '#ffa100';
      }else{
        this.registro_estado.factura.estado = 1;
        this.registro_estado.factura.icon ='ion-checkmark';
        this.registro_estado.factura.color = '#28a745';
      }

      if (this.myFormEditar.value.contacto_cargo == null || this.myFormEditar.value.contacto_cargo == '') {
        this.registro_estado.contacto_cargo.estado = 0;
        this.registro_estado.contacto_cargo.icon ='ion-alert-circled';
        this.registro_estado.contacto_cargo.color = '#ffa100';
      }else{
        this.registro_estado.contacto_cargo.estado = 1;
        this.registro_estado.contacto_cargo.icon ='ion-checkmark';
        this.registro_estado.contacto_cargo.color = '#28a745';
      }

      if (this.myFormEditar.value.idoneidad == null || this.myFormEditar.value.idoneidad == '') {
        this.registro_estado.idoneidad.estado = 0;
        this.registro_estado.idoneidad.icon ='ion-alert-circled';
        this.registro_estado.idoneidad.color = '#ffa100';
      }else{
        this.registro_estado.idoneidad.estado = 1;
        this.registro_estado.idoneidad.icon ='ion-checkmark';
        this.registro_estado.idoneidad.color = '#28a745';
      }

      if (this.myFormEditar.value.anos_experiencia == null || this.myFormEditar.value.anos_experiencia == '') {
        this.registro_estado.anos_experiencia.estado = 0;
        this.registro_estado.anos_experiencia.icon ='ion-alert-circled';
        this.registro_estado.anos_experiencia.color = '#ffa100';
      }else{
        this.registro_estado.anos_experiencia.estado = 1;
        this.registro_estado.anos_experiencia.icon ='ion-checkmark';
        this.registro_estado.anos_experiencia.color = '#28a745';
      }

      if (this.myFormEditar.value.experiencia2 == null || this.myFormEditar.value.experiencia2 == '') {
        this.registro_estado.experiencia2.estado = 0;
        this.registro_estado.experiencia2.icon ='ion-alert-circled';
        this.registro_estado.experiencia2.color = '#ffa100';
      }else{
        this.registro_estado.experiencia2.estado = 1;
        this.registro_estado.experiencia2.icon ='ion-checkmark';
        this.registro_estado.experiencia2.color = '#28a745';
      }

      if (this.myFormEditar.value.idiomas2 == null || this.myFormEditar.value.idiomas2 == '') {
        this.registro_estado.idiomas2.estado = 0;
        this.registro_estado.idiomas2.icon ='ion-alert-circled';
        this.registro_estado.idiomas2.color = '#ffa100';
      }else{
        this.registro_estado.idiomas2.estado = 1;
        this.registro_estado.idiomas2.icon ='ion-checkmark';
        this.registro_estado.idiomas2.color = '#28a745';
      }

      if (this.myFormEditar.value.pasaporte == null || this.myFormEditar.value.pasaporte == '') {
        this.registro_estado.pasaporte.estado = 0;
        this.registro_estado.pasaporte.icon ='ion-alert-circled';
        this.registro_estado.pasaporte.color = '#ffa100';
      }else{
        this.registro_estado.pasaporte.estado = 1;
        this.registro_estado.pasaporte.icon ='ion-checkmark';
        this.registro_estado.pasaporte.color = '#28a745';
      }

      if (this.myFormEditar.value.logo == null || this.myFormEditar.value.logo == '') {
        this.registro_estado.logo.estado = 0;
        this.registro_estado.logo.icon ='ion-alert-circled';
        this.registro_estado.logo.color = '#ffa100';
      }else{
        this.registro_estado.logo.estado = 1;
        this.registro_estado.logo.icon ='ion-checkmark';
        this.registro_estado.logo.color = '#28a745';
      }

      if (this.myFormEditar.value.operaciones == null || this.myFormEditar.value.operaciones == '') {
        this.registro_estado.operaciones.estado = 0;
        this.registro_estado.operaciones.icon ='ion-alert-circled';
        this.registro_estado.operaciones.color = '#ffa100';
      }else{
        this.registro_estado.operaciones.estado = 1;
        this.registro_estado.operaciones.icon ='ion-checkmark';
        this.registro_estado.operaciones.color = '#28a745';
      }

      if (this.myFormEditar.value.idoneidad_file == null || this.myFormEditar.value.idoneidad_file == '') {
        this.registro_estado.idoneidad_file.estado = 0;
        this.registro_estado.idoneidad_file.icon ='ion-alert-circled';
        this.registro_estado.idoneidad_file.color = '#ffa100';
      }else{
        this.registro_estado.idoneidad_file.estado = 1;
        this.registro_estado.idoneidad_file.icon ='ion-checkmark';
        this.registro_estado.idoneidad_file.color = '#28a745';
      }

      if (this.myFormEditar.value.recibo_servicio == null || this.myFormEditar.value.recibo_servicio == '') {
        this.registro_estado.recibo_servicio.estado = 0;
        this.registro_estado.recibo_servicio.icon ='ion-alert-circled';
        this.registro_estado.recibo_servicio.color = '#ffa100';
      }else{
        this.registro_estado.recibo_servicio.estado = 1;
        this.registro_estado.recibo_servicio.icon ='ion-checkmark';
        this.registro_estado.recibo_servicio.color = '#28a745';
      }

      if (this.objAEditar.usuario.contrato.length == 0) {
        this.registro_estado.contrato_aux.estado = 0;
        this.registro_estado.contrato_aux.icon ='ion-alert-circled';
        this.registro_estado.contrato_aux.color = '#ffa100';
      }else{
        this.registro_estado.contrato_aux.estado = 1;
        this.registro_estado.contrato_aux.icon ='ion-checkmark';
        this.registro_estado.contrato_aux.color = '#28a745';
      }

    }

    editar_contrato(){
      
      var pl={
            tipo_plan:this.myFormEditar.value.contrato_plan,
            costo:this.myFormEditar.value.contrato_costo
        };
      var datos= {
        token: localStorage.getItem('mouvers_token'),
        nombre: this.myFormEditar.value.contrato_nombre,
        ci: this.myFormEditar.value.contrato_ci,
        telefono: this.myFormEditar.value.telefono,
        direccion: this.myFormEditar.value.direccion,
        plan: JSON.stringify(pl),
        usuario_id:this.myFormEditar.value.usuario_id
      }
      this.loading = true;
      console.log(datos);
      this.http.post(this.rutaService.getRutaApi()+'con_contratos', datos)
         .toPromise()
         .then(
           data => { // Success
              console.log(data);
              
              this.contrato=data;
              this.contrato=this.contrato.Contratos.url;
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

    borrarfoto(id,fotos,index){
      console.log(id);
      console.log(fotos);
      console.log(index);
      fotos.splice(index,1); 
      console.log(fotos);
      this.loading = true;
      var send={
        fotos: JSON.stringify(fotos)
      };
      this.http.put(this.rutaService.getRutaApi()+'productos/'+id,send)
         .toPromise()
         .then(
           data => { // Success
              console.log(data);

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

    editar(): void {

      /*var usr= {
        token: localStorage.getItem('mouvers_token'),
        imagen: this.myFormEditar.value.foto
      }

      this.http.put(this.rutaService.getRutaApi()+'usuarios/'+this.objAEditar.usuario.id, usr)
       .toPromise()
       .then(
         data => { // Success
            console.log(data);
            this.data = data;

            for (var i = 0; i < this.productList.length; ++i) {
              if (this.productList[i].id == this.objAEditar.usuario.id) {
                 this.productList[i].usuario.imagen = this.myFormEditar.value.foto;
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
      );*/
     
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
                   this.productList[i].usuario.imagen = this.myFormEditar.value.foto;
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

              this.evaluarEstadoRegistro();
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


         var disponibilidad={
            lunes_i: this.myFormEditar.value.lunes_i,
            lunes_f: this.myFormEditar.value.lunes_f,
            martes_i: this.myFormEditar.value.martes_i,
            martes_f: this.myFormEditar.value.martes_f,
            miercoles_i: this.myFormEditar.value.miercoles_i,
            miercoles_f: this.myFormEditar.value.miercoles_f,
            jueves_i: this.myFormEditar.value.jueves_i,
            jueves_f: this.myFormEditar.value.jueves_f,
            viernes_i: this.myFormEditar.value.viernes_i,
            viernes_f: this.myFormEditar.value.viernes_f,
            sabado_i: this.myFormEditar.value.sabado_i,
            sabado_f: this.myFormEditar.value.sabado_f,
            domingo_i: this.myFormEditar.value.domingo_i,
            domingo_f: this.myFormEditar.value.domingo_f,
            lat: this.myFormEditar.value.lat,
            lng: this.myFormEditar.value.lng,
         };
         var datos2={
            imagen: this.myFormEditar.value.foto,
            direccion: this.myFormEditar.value.direccion,
            direccion_exacta: this.myFormEditar.value.direccion_exacta,
            lunes_i: this.myFormEditar.value.lunes_i,
            lunes_f: this.myFormEditar.value.lunes_f,
            martes_i: this.myFormEditar.value.martes_i,
            martes_f: this.myFormEditar.value.martes_f,
            miercoles_i: this.myFormEditar.value.miercoles_i,
            miercoles_f: this.myFormEditar.value.miercoles_f,
            jueves_i: this.myFormEditar.value.jueves_i,
            jueves_f: this.myFormEditar.value.jueves_f,
            viernes_i: this.myFormEditar.value.viernes_i,
            viernes_f: this.myFormEditar.value.viernes_f,
            sabado_i: this.myFormEditar.value.sabado_i,
            sabado_f: this.myFormEditar.value.sabado_f,
            domingo_i: this.myFormEditar.value.domingo_i,
            domingo_f: this.myFormEditar.value.domingo_f,
            lat: this.myFormEditar.value.lat,
            lng: this.myFormEditar.value.lng,
            disponibilidad:JSON.stringify(disponibilidad),
            logo: this.myFormEditar.value.logo,
            pasaporte: this.myFormEditar.value.pasaporte,
            operaciones: this.myFormEditar.value.operaciones,
            idoneidad_file: this.myFormEditar.value.idoneidad_file,
            recibo_servicio: this.myFormEditar.value.recibo_servicio,
         }
         console.log(datos2);
         this.http.put(this.rutaService.getRutaApi()+'establecimientos/'+this.establecimiento_id, datos2)
         .toPromise()
         .then(
           data => { // Success
              console.log(data);
              this.data = data;
              for (var i = 0; i < this.productList.length; ++i) {
              if (this.productList[i].id == this.objAEditar.usuario.id) {
                 this.productList[i].usuario.imagen = this.myFormEditar.value.foto;
                 this.productList[i].usuario.registro.logo = this.myFormEditar.value.logo;
              }
            }

            this.objAEditar.usuario.registro.disponibilidad=JSON.stringify(disponibilidad);

            this.filteredItems = this.productList;
            this.init();
            
            //console.log(this.productList);
            //alert(this.data.message);

            this.loading = false;
            this.editando = false;

            this.showToast('success', 'Success!', this.data.message); 

            this.evaluarEstadoRegistro();
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


    //Para el producto
    cambiarEstado2(obj): void {

      var v_estado: any;
      var mensaje_producto='';
      if (obj.estado == 'ON') {
        //obj.estado = 'OFF';
        v_estado = 'OFF';
        mensaje_producto="Su servicio "+obj.nombre+" se ha desactivado. Para mayor información contacta a soporte.";
      }else{
        //obj.estado = 'ON';
        v_estado = 'ON';
        mensaje_producto="Felicidades! Su servicio "+obj.nombre+" se ha activado!";
      }

      var datos= {
        token: localStorage.getItem('mouvers_token'),
        estado: v_estado
      }

      this.http.put(this.rutaService.getRutaApi()+'productos/'+obj.id, datos)
         .toPromise()
         .then(
           data => { // Success
              console.log(data);
              this.data = data;
              this.showToast('success', 'Success!', this.data.message);
              obj.estado = v_estado;

              this.http.get(this.rutaService.getRutaApi()+'onesignal.php?accion=17&token_notificacion='+this.token_notificacion+'&contenido='+mensaje_producto)
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


    
   //----TablaA<
   filteredItemsA : any;
   pagesA : number = 4;
   pageSizeA : number = 5;
   pageNumberA : number = 0;
   currentIndexA : number = 1;
   itemsA: any;
   pagesIndexA : Array<number>;
   pageStartA : number = 1;
   inputNameA : string = '';

   initA(){
         this.currentIndexA = 1;
         this.pageStartA = 1;
         this.pagesA = 4;

         this.pageNumberA = parseInt(""+ (this.filteredItemsA.length / this.pageSizeA));
         if(this.filteredItemsA.length % this.pageSizeA != 0){
            this.pageNumberA ++;
         }
    
         if(this.pageNumberA  < this.pagesA){
               this.pagesA =  this.pageNumberA;
         }
       
         this.refreshItemsA();
         console.log("this.pageNumber :  "+this.pageNumberA);
         //this.buscar_id_operacion();
   }

   FilterByNameA(){
      this.filteredItemsA = [];
      if(this.inputNameA != ""){
            for (var i = 0; i < this.productListA.length; ++i) {
              if (this.productListA[i].usuario.nombre.toUpperCase().indexOf(this.inputNameA.toUpperCase())>=0) {
                 this.filteredItemsA.push(this.productListA[i]);
              }else if (this.productListA[i].usuario.email.toUpperCase().indexOf(this.inputNameA.toUpperCase())>=0) {
                 this.filteredItemsA.push(this.productListA[i]);
              }else if (this.productListA[i].usuario.fecha.toUpperCase().indexOf(this.inputNameA.toUpperCase())>=0) {
                 this.filteredItemsA.push(this.productListA[i]);
              }
            }
      }else{
         this.filteredItemsA = this.productListA;
      }
      console.log(this.filteredItemsA);
      this.initA();
   }
   fillArrayA(): any{
      var obj = new Array();
      for(var index = this.pageStartA; index< this.pageStartA + this.pagesA; index ++) {
                  obj.push(index);
      }
      return obj;
   }
   refreshItemsA(){
       this.itemsA = this.filteredItemsA.slice((this.currentIndexA - 1)*this.pageSizeA, (this.currentIndexA) * this.pageSizeA);
       this.pagesIndexA =  this.fillArrayA();
   }
   prevPageA(){
      if(this.currentIndexA>1){
         this.currentIndexA --;
      } 
      if(this.currentIndexA < this.pageStartA){
         this.pageStartA = this.currentIndexA;
      }
      this.refreshItemsA();
   }
   nextPageA(){
      if(this.currentIndexA < this.pageNumberA){
            this.currentIndexA ++;
      }
      if(this.currentIndexA >= (this.pageStartA + this.pagesA)){
         this.pageStartA = this.currentIndexA - this.pagesA + 1;
      }
 
      this.refreshItemsA();
   }
    setPageA(index : number){
         this.currentIndexA = index;
         this.refreshItemsA();
    }
  //----Tabla>

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
         this.buscar_id_operacion();
   }

   FilterByName(){
      this.filteredItems = [];
      if(this.inputName != ""){
            for (var i = 0; i < this.productList.length; ++i) {
              if (this.productList[i].usuario.nombre.toUpperCase().indexOf(this.inputName.toUpperCase())>=0) {
                 this.filteredItems.push(this.productList[i]);
              }else if (this.productList[i].usuario.email.toUpperCase().indexOf(this.inputName.toUpperCase())>=0) {
                 this.filteredItems.push(this.productList[i]);
              }else if (this.productList[i].usuario.fecha.toUpperCase().indexOf(this.inputName.toUpperCase())>=0) {
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
