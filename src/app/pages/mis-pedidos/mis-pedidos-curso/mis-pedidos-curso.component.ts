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
  selector: 'ngx-mis-curso-prod',
  templateUrl: './mis-pedidos-curso.component.html',
  /*styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],*/
  styleUrls: ['./mis-pedidos-curso.component.scss'],
})
export class MisPedidosCursoComponent implements OnInit, OnDestroy{

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

  public establecimiento_id = localStorage.getItem('mouvers_establecimiento_id');
  public establecimiento_nom = localStorage.getItem('mouvers_user_nombre');
  public mouvers_user_tipo = localStorage.getItem('mouvers_user_tipo');

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
          //console.log(data); 
          this.headerEvent();
      });

    

  }

  ngOnInit() {

    if (this.mouvers_user_tipo != '4') {
      localStorage.removeItem('mouvers_token');
      localStorage.removeItem('mouvers_user_id');
      localStorage.removeItem('mouvers_user_nombre');
      localStorage.removeItem('mouvers_user_tipo');
      localStorage.removeItem('mouvers_establecimiento_id');

      this.router.navigateByUrl('/pagessimples/loginf');
    }

    this.viendo = null;
    this.loading = true;
    this.http.get(this.rutaService.getRutaApi()+'pedidos/establecimiento/'+this.establecimiento_id+'?despachado='+1+'&token='+localStorage.getItem('mouvers_token'))
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

             //Control de estados del pedido
             if(this.data.pedidos[i].estado == 1){
               this.data.pedidos[i].estado = 'No asignado';
             }else if (this.data.pedidos[i].estado == 2) {
               this.data.pedidos[i].estado = 'Asignado';
             }else if (this.data.pedidos[i].estado == 3) {
               this.data.pedidos[i].estado = 'En camino';
             }else if (this.data.pedidos[i].estado == 4) {
               this.data.pedidos[i].estado = 'Entregado';
             }
           }

           setTimeout(()=>{
               this.productList = this.data.pedidos;
               this.filteredItems = this.productList;
               //console.log(this.productList);
               this.init();

               //verificar si hay que cargar un pedido de una notificacion
               setTimeout(()=>{
                  this.checkHeaderEvent();
                  this.loading = false;
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

    /*Cargar los repartidores disponibles*/
    getRepDisponibles(obj, modal): void {

      this.repartidor_id = null;
      this.selectedObj = Object.assign({},obj);
      console.log(this.selectedObj);

      this.loading = true;
      this.http.get(this.rutaService.getRutaApi()+'repartidores/disponibles?token='+localStorage.getItem('mouvers_token'))
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
              //this.headerService.clearNotificationCliAux(this.selectedObj.id);

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
      this.viendo = true;
      this.selectedObj = Object.assign({},obj);
      console.log(this.selectedObj);

      if (this.selectedObj.lat && this.selectedObj.lng) {
        this.selectedObj.lat = parseFloat(this.selectedObj.lat);
        this.selectedObj.lng = parseFloat(this.selectedObj.lng);
      }

      //Recalcular el total para el establecimiento
      var est_id = parseInt(this.establecimiento_id);
      this.selectedObj.costoEst = 0;
      for (var i = 0; i < this.selectedObj.productos.length; i++) {
        if (this.selectedObj.productos[i].establecimiento_id == est_id) {
          this.selectedObj.costoEst += this.selectedObj.productos[i].pivot.cantidad * this.selectedObj.productos[i].pivot.precio_unitario;  
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
            /*if (this.productList[i].estado == 'Asignado' || this.productList[i].estado == 'En camino') {
              this.headerService.clearNotificationCliAux(this.productList[i].id);
            }*/
            existe = true;
          }
        }

        if (!existe) {
          this.showToast('warning', 'Warning!', 'El pedido solicitado ya no está en esta sección.');
        }
      }
    }

    despacho(obj, modal): void {
      this.selectedObj = Object.assign({},obj);
      console.log(this.selectedObj);

      this.open(modal);
    }

    despachar(): void {
      
      this.loading = true;

      var datos= {
        token: localStorage.getItem('mouvers_token'),
        pedido_id: this.selectedObj.id,
        establecimiento_id: parseInt(this.establecimiento_id)
      }

      this.http.put(this.rutaService.getRutaApi()+'rutas/despachar/pedido?token='+localStorage.getItem('mouvers_token'), datos)
         .toPromise()
         .then(
           data => { // Success
              console.log(data);
              this.data = data;

              var aux = this.productList;
              this.productList = [];

              for (var i = 0; i < aux.length; ++i) {
                if (aux[i].id != this.selectedObj.id) {
                   this.productList.push(aux[i]);
                }
              }

              this.filteredItems = this.productList;
              this.init();
              
              //console.log(this.productList);
              //alert(this.data.message);
              this.loading = false;
              this.showToast('success', 'Success!', this.data.message);
              this.headerService.clearNotificationCliAux(this.selectedObj.id); 
              this.atras();   
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
              }/*else if (this.productList[i].estado.toUpperCase().indexOf(this.inputName.toUpperCase())>=0) {
                 this.filteredItems.push(this.productList[i]);
              }*/else if (this.productList[i].ref.toUpperCase().indexOf(this.inputName.toUpperCase())>=0) {
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
