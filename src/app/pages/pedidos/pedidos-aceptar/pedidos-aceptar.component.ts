import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';

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
  selector: 'ngx-curso-prod',
  templateUrl: './pedidos-aceptar.component.html',
  /*styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],*/
  styleUrls: ['./pedidos-aceptar.component.scss'],
})
export class PedidosAceptarComponent implements OnInit, OnDestroy{

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
  public viendo = false;
  public mostrar = true;

  selectedObj: any;

  public productList2:any;
  public repartidor:any;
  public repartidor_id = null;

  public mouvers_user_tipo = localStorage.getItem('mouvers_user_tipo');
  public id_operacion:any="";
  public codigo_pais:any=[
    {
      id:1,
      code:598
    },
    {
      id:2,
      code:507
    },
    {
      id:3,
      code:58
    },
    {
      id:4,
      code:54
    },
  ];
   public codigo_pais_selec:any="";
  constructor( private modalService: NgbModal,
               private toasterService: ToasterService,
               private http: HttpClient,
               private router: Router,
               private rutaService: RutaBaseService,
               private headerToPedidosEventService: HeaderToPedidosEventService,
               private headerService: HeaderService
               )
  {
    
    //Detectar evento cargar pedido de notificacion entrante
    this.headerToPedidosEventService.headerToPedidosData.subscribe(
        (data: any) => {
          console.log(data); 
          //setTimeout(()=>{
            console.log(data);
            this.id_operacion=data;
            this.id_operacion=this.id_operacion.id_operacion;
            console.log( this.id_operacion); 
            localStorage.setItem('id_operacion', this.id_operacion);
            //this.headerEvent();
            //this.buscar_id_operacion();
          //},6600);
          setTimeout(()=>{
            localStorage.setItem('id_operacion', "");
          },49600);
      });

    

  }

  checkid_operacion() {
    console.log( this.id_operacion); 
  }
  public datos:any;
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
    this.codigo_pais_selec= localStorage.getItem('mouvers_pais');
    this.viendo = null;
    this.loading = true;
    this.http.get(this.rutaService.getRutaApi()+'pedidos/estado/curso?token='+localStorage.getItem('mouvers_token')+'&ciudad_id='+localStorage.getItem('mouvers_ciudad')+'&ciudad_id='+localStorage.getItem('mouvers_ciudad'))
       .toPromise()
       .then(
         data => { // Success

           console.log(data);
           this.data=data;

           //Cambiar el formato de la fecha y hora
           var dia : any;
           var mes : any;
           var anio : any;
           var fecha : any;
           var hora : any;
           var minutos : any;
           var segundos : any;
           this.productList=[];
           for (var i = 0; i < this.data.pedidos.length; i++) {
             fecha = new Date(this.data.pedidos[i].created_at);
             dia = fecha.getDate();
             mes = fecha.getMonth() + 1;
             anio = fecha.getFullYear();

             hora = fecha.getHours();
             minutos = fecha.getMinutes();
             segundos = fecha.getSeconds();

             this.data.pedidos[i].fecha = dia+'/'+mes+'/'+anio;
             this.data.pedidos[i].hora = hora+':'+minutos+':'+segundos;

             this.data.pedidos[i].ref = 'M00'+this.data.pedidos[i].id;

             this.data.pedidos[i].telefono=this.data.pedidos[i].repartidor.usuario.telefono;
             //Control de estados del pedido
             
             if(this.data.pedidos[i].estado == 1){
               this.data.pedidos[i].estado = 'No asignado';
             }else if (this.data.pedidos[i].estado == 2) {
               this.data.pedidos[i].estado = 'Asignado no aceptado por proveedor';
               this.productList.push(this.data.pedidos[i]);
             }else if (this.data.pedidos[i].estado == 3) {
               this.data.pedidos[i].estado = 'En camino';
             }else if (this.data.pedidos[i].estado == 4) {
               this.data.pedidos[i].estado = 'Entregado';
             }
           }

           setTimeout(()=>{
               //this.productList = this.data.pedidos;
               this.datos=this.productList;
               this.filteredItems = this.productList;
               //console.log(this.productList);
               this.init();
               this.loading = false;
               setTimeout(()=>{      
                  this.checkid_operacion(); 
                },6600);
               //verificar si hay que cargar un pedido de una notificacion
               setTimeout(()=>{
                 // this.checkHeaderEvent();
                
                  
                },600);

             },1000);
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

  buscar_id_operacion(){
     console.log('buscar_id_operacion');
     console.log(localStorage.getItem('id_operacion'));
     var id_operacion = localStorage.getItem('id_operacion');
     if (id_operacion!="") {
       var prod=this.datos;
       console.log(prod);
       for (var i = 0; i < prod.length; i++) {
         
         if (id_operacion==prod[i].id) {
           console.log(prod[i]);
           var selec= prod[i];
           setTimeout(()=>{
                 console.log(selec);
                 this.ver(selec);
                },1000);
           
         }
       }
     }
  }

  ngOnDestroy() {
    // acciones de destrucción
    localStorage.setItem('mouvers_pedido_id', '');

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

  refreshTabla() {
    this.productList = [];
     this.filteredItems = this.productList;
     this.init();
    localStorage.setItem('mouvers_pedido_id', '');
    this.ngOnInit();
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
      this.viendo = false;
      this.selectedObj = null;
      this.objAEliminar = null; 
      this.repartidor_id = null;
      localStorage.setItem('id_operacion', "");
    }

    aEliminar(obj): void {
      this.objAEliminar = obj;
      //console.log(this.objAEliminar);
      this.eliminar_id = this.objAEliminar.id;
      this.eliminar_nombre = this.objAEliminar.nombre;
    }

    eliminar(): void {
      console.log(this.objAEliminar);
      
      this.loading = true;

      var datos= {
        token: localStorage.getItem('mouvers_token')
      }

      this.http.delete(this.rutaService.getRutaApi()+'productos/'+this.eliminar_id+'?token='+localStorage.getItem('mouvers_token'))
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
              //no encontrado o conflicto
              else if(msg.status == 404 || msg.status == 409){ 
                  //alert(msg.error.error);
                  this.showToast('error', 'Erro!', msg.error.error);
              }

           }
         );
    }
    public comentarios="Finalizado por Administrador";
    cancelar(): void {
      console.log(this.selectedObj);
      
      this.loading = true;

      var datos= {
        token: localStorage.getItem('mouvers_token'),
        finalizo:1,
        comentario: this.comentarios,
      }

      this.http.post(this.rutaService.getRutaApi()+'/cancelar_pedidos/'+this.selectedObj.id+'?token='+localStorage.getItem('mouvers_token'),datos)
         .toPromise()
         .then(
           data => { // Success
              console.log(data);
              this.ngOnInit();
              this.viendo = false;
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
              //no encontrado o conflicto
              else if(msg.status == 404 || msg.status == 409){ 
                  //alert(msg.error.error);
                  this.showToast('error', 'Erro!', msg.error.error);
              }

           }
         );
    }

    /*Cargar los repartidores disponibles*/
    getRepDisponibles(obj, modal): void {

      this.repartidor_id = null;
      this.selectedObj = Object.assign({},obj);
      console.log(this.selectedObj);

      let zona_id = this.selectedObj.zona_id;
      let subcategoria_id = this.selectedObj.productos[0].subcategoria_id;

      this.loading = true;
      this.http.get(this.rutaService.getRutaApi()+'repartidores/disponibles?zona_id='+zona_id+'&subcategoria_id='+subcategoria_id+'&token='+localStorage.getItem('mouvers_token'))
       .toPromise()
       .then(
         data => { // Success

           console.log(data);
           this.data=data;
           this.productList2 = this.data.repartidores;
           this.filteredItems2 = this.productList2;
           //console.log(this.productList);

           this.init2();

           this.loading = false;

           this.open2(modal);

         },
         msg => { // Error
           console.log(msg);
           console.log(msg.error.error);

           this.loading = false;

           //token invalido/ausente o token expiro
           if(msg.status == 400 || msg.status == 401){ 
                //alert(msg.error.error);

                this.showToast('warning', 'Warning!', msg.error.error);
            }
            //sin repartidores disponibles
            else if(msg.status == 404){ 
                //alert(msg.error.error);
                this.showToast('info', 'Info!', msg.error.error);
            }
            

         }
       );
    }

    setRepartidor(repartidor): void {
      this.repartidor_id = repartidor.id;
    }

    asignar(): void {
      this.loading = true;

      var datos= {
        token: localStorage.getItem('mouvers_token'),
        pedido_id: this.selectedObj.id,
      }

      this.http.put(this.rutaService.getRutaApi()+'notificaciones/'+this.repartidor_id+'/asignar/pedido', datos)
         .toPromise()
         .then(
           data => { // Success
              console.log(data);
              this.data = data;
              this.repartidor = this.data.repartidor;

              //Actualiza la vista del detalle del pedido
              this.selectedObj.repartidor = this.repartidor;
              this.selectedObj.repartidor_nom = this.repartidor.usuario.nombre;
              if (this.selectedObj.estado == 'No asignado') {
                this.selectedObj.estado = 'Asignado';
              }
              this.headerService.clearNotificationCliAux(this.selectedObj.id);

              for (var i = 0; i < this.productList.length; ++i) {
                if (this.productList[i].id == this.selectedObj.id) {
                  if (this.productList[i].estado == 'No asignado') {
                    this.productList[i].estado = 'Asignado';
                  }
                   this.productList[i].repartidor_id = this.repartidor.id;
                   this.productList[i].repartidor_nom = this.repartidor.usuario.nombre;
                   this.productList[i].repartidor = this.repartidor;
                }
              }

              this.filteredItems = this.productList;
              this.init();

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
              else { 
                  //alert(msg.error.error);
                  this.showToast('error', 'Erro!', msg.error.error);
              }
           }
         );
    }

    ver(obj): void {
      console.log( this.id_operacion); 
      console.log(obj);
      this.viendo = true;
      this.selectedObj = Object.assign({},obj);
      this.selectedObj.telefono1 = this.selectedObj.telefono.substr(1);
      console.log(this.selectedObj);

      this.codigo_pais_selec = this.codigo_pais_selec_code(localStorage.getItem('mouvers_pais'));

      if (this.selectedObj.lat && this.selectedObj.lng) {
        this.selectedObj.lat = parseFloat(this.selectedObj.lat);
        this.selectedObj.lng = parseFloat(this.selectedObj.lng);
      }
    }

    codigo_pais_selec_code(id){
      for (var i = 0; i < this.codigo_pais.length; ++i) {
        if (id==this.codigo_pais[i].id) {
          return this.codigo_pais[i].code;
        }
      }
    }

    headerEvent(){

      this.ngOnInit();
      
    }

    checkHeaderEvent(){
      if (localStorage.getItem('mouvers_pedido_id') &&
          localStorage.getItem('mouvers_pedido_id') != '' &&
          localStorage.getItem('mouvers_pedido_id') != 'null') {
      
        var existe = false;
        var pedido_id = parseInt( localStorage.getItem('mouvers_pedido_id') );
        for (var i = 0; i < this.productList.length; i++) {
          if (this.productList[i].id == pedido_id) {
            this.ver(this.productList[i]);
            localStorage.setItem('mouvers_pedido_id', '');
            if (this.productList[i].estado == 'Asignado' || this.productList[i].estado == 'En camino') {
              this.headerService.clearNotificationCliAux(this.productList[i].id);
            }
            existe = true;
          }
        }

        if (!existe) {
          this.showToast('warning', 'Warning!', 'El pedido solicitado ya no está en esta sección.');
        }
      }
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
          this.buscar_id_operacion();
   }

   FilterByName(){
      this.filteredItems = [];
      if(this.inputName != ""){
            for (var i = 0; i < this.productList.length; ++i) {
              if (!this.productList[i].repartidor_nom) {
                this.productList[i].repartidor_nom = ' ';
              }

              if (this.productList[i].usuario.nombre.toUpperCase().indexOf(this.inputName.toUpperCase())>=0) {
                 this.filteredItems.push(this.productList[i]);
              }else if (this.productList[i].fecha.toUpperCase().indexOf(this.inputName.toUpperCase())>=0) {
                 this.filteredItems.push(this.productList[i]);
              }
              else if (this.productList[i].hora.toUpperCase().indexOf(this.inputName.toUpperCase())>=0) {
                 this.filteredItems.push(this.productList[i]);
              }else if (this.productList[i].repartidor_nom.toUpperCase().indexOf(this.inputName.toUpperCase())>=0) {
                 this.filteredItems.push(this.productList[i]);
              }else if (this.productList[i].estado.toUpperCase().indexOf(this.inputName.toUpperCase())>=0) {
                 this.filteredItems.push(this.productList[i]);
              }else if (this.productList[i].ref.toUpperCase().indexOf(this.inputName.toUpperCase())>=0) {
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

     //Tabla2 repartidores disponibles----<
   filteredItems2 : any;
   pages2 : number = 4;
   pageSize2 : number = 5;
   pageNumber2 : number = 0;
   currentIndex2 : number = 1;
   items2: any;
   pagesIndex2 : Array<number>;
   pageStart2 : number = 1;
   inputName2 : string = '';

   init2(){
         this.currentIndex2 = 1;
         this.pageStart2 = 1;
         this.pages2 = 4;

         this.pageNumber2 = parseInt(""+ (this.filteredItems2.length / this.pageSize2));
         if(this.filteredItems2.length % this.pageSize2 != 0){
            this.pageNumber2 ++;
         }
    
         if(this.pageNumber2  < this.pages2){
               this.pages2 =  this.pageNumber2;
         }
       
         this.refreshItems2();
         console.log("this.pageNumber2 :  "+this.pageNumber2);
   }

   FilterByName2(){
      this.filteredItems2 = [];
      if(this.inputName2 != ""){
            for (var i = 0; i < this.productList2.length; ++i) {
              if (this.productList2[i].usuario.nombre.toUpperCase().indexOf(this.inputName2.toUpperCase())>=0) {
                 this.filteredItems2.push(this.productList2[i]);
              }else if (this.productList2[i].usuario.email.toUpperCase().indexOf(this.inputName2.toUpperCase())>=0) {
                 this.filteredItems2.push(this.productList2[i]);
              }else if (this.productList2[i].usuario.telefono.toUpperCase().indexOf(this.inputName2.toUpperCase())>=0) {
                 this.filteredItems2.push(this.productList2[i]);
              }
            }
      }else{
         this.filteredItems2 = this.productList2;
      }
      console.log(this.filteredItems2);
      this.init2();
   }
   fillArray2(): any{
      var obj = new Array();
      for(var index = this.pageStart2; index< this.pageStart2 + this.pages2; index ++) {
                  obj.push(index);
      }
      return obj;
   }
   refreshItems2(){
       this.items2 = this.filteredItems2.slice((this.currentIndex2 - 1)*this.pageSize2, (this.currentIndex2) * this.pageSize2);
       this.pagesIndex2 =  this.fillArray2();
   }
   prevPage2(){
      if(this.currentIndex2>1){
         this.currentIndex2 --;
      } 
      if(this.currentIndex2 < this.pageStart2){
         this.pageStart2 = this.currentIndex2;
      }
      this.refreshItems2();
   }
   nextPage2(){
      if(this.currentIndex2 < this.pageNumber2){
            this.currentIndex2 ++;
      }
      if(this.currentIndex2 >= (this.pageStart2 + this.pages2)){
         this.pageStart2 = this.currentIndex2 - this.pages2 + 1;
      }
 
      this.refreshItems2();
   }
    setPage2(index : number){
         this.currentIndex2 = index;
         this.refreshItems2();
    }
    //Tabla2 repartidores disponibles---->

}
