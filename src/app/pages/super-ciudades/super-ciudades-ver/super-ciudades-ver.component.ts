import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, HostListener, NgZone } from '@angular/core';

//Mis imports
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { RutaBaseService } from '../../../services/ruta-base/ruta-base.service';

import { FormBuilder, FormArray, FormGroup, Validators  } from '@angular/forms';

import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import 'style-loader!angular2-toaster/toaster.css';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

declare const $: any;
declare var google: any;
//declare var google;

@Component({
  selector: 'ngx-ver-super-ciudades',
  templateUrl: './super-ciudades-ver.component.html',
  /*styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],*/
  styleUrls: ['./super-ciudades-ver.component.scss'],
})
export class SuperCiudadesVerComponent implements OnInit, AfterViewInit{

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

  public mostrarSwiches = true;

  public admin = false;

  closeResult: string;

  @ViewChild('fileInput') fileInput: ElementRef;
  clear = false; //puedo borrar?
  fileIMG = null;
  imgUpload = null;
  loadinImg = false;

  public mouvers_user_tipo = localStorage.getItem('mouvers_user_tipo');

  map: any;
  mark: any;
  myPosition: any = {};
  address: any;
  refresh: boolean = false;
  //loading: Loading;
  directionsService: any = null;
  directionsDisplay: any = null;
  geocoder: any = null;
  infowindow: any = null;
  bounds: any = null;
  bounds1: any = null;
  myLatLng: any;
  waypoints: any[] = [];
  locations: any;
  markers: any[] = [];
  origin: any;
  dirOrigin: string;
  inside: boolean = false;
  areaTriangle: any = [];
  datosC: any;
  coordenates: any = [];
  triangleCoords = [];
  toastD: boolean;
  reference: string = '';

  @ViewChild("places") 
  public places: ElementRef;

  public Origin:any;
  public Destination:any;
  //public directionsService = new google.maps.DirectionsService;
  //directionsService: any = null;

  ciudad_id = null;

  constructor( private modalService: NgbModal,
               private toasterService: ToasterService,
               private http: HttpClient,
               private router: Router,
               private rutaService: RutaBaseService,
               public fb: FormBuilder,
               public zone: NgZone)
  {
    
    this.myFormEditar = this.fb.group({
      id: [''],
      nombre: ['', [Validators.required]],
      ciudad_id: ['', [Validators.required]],
      //imagen: ['', [Validators.required]]
    });


    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer({
      suppressMarkers: true,
      polylineOptions: {
          strokeColor: "#222220"
        }
    });
    this.geocoder = new google.maps.Geocoder;
    this.infowindow = new google.maps.InfoWindow;
    this.bounds = new google.maps.LatLngBounds();
    this.bounds1 = new google.maps.LatLngBounds();

    
  }

  public cuidad:any;

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

    
    this.http.get(this.rutaService.getRutaApi()+'ciudad?pais_id='+localStorage.getItem('mouvers_pais')+'token='+localStorage.getItem('mouvers_token'))
       .toPromise()
       .then(
         data => { // Success
           
           this.data = data;
           this.cuidad=this.data.coordenadas; 
           console.log(this.cuidad);
           this.loading = false;   
         },
         msg => { // Error
           console.log(msg);
           console.log(msg.error.error);

           this.loading = false;

           //token invalido/ausente o token expiro
           if(msg.status == 400 || msg.status == 401){ 
                //alert(msg.error.error);
                //ir a login
                //this.showToast('warning', 'Warning!', msg.error.error);
                setTimeout(()=>{
                  //this.router.navigateByUrl('/pagessimples/loginf');
                },1000);
            }
            //sin categorias o todas deshabilitadas OFF
            else if(msg.status == 404){ 
                //alert(msg.error.error);
                //this.showToast('info', 'Info!', msg.error.error);
            }

         }
       );
    
    this.loading = true;
    this.http.get(this.rutaService.getRutaApi()+'zonas?ciudad_id='+localStorage.getItem('mouvers_ciudad')+'token='+localStorage.getItem('mouvers_token'))
       .toPromise()
       .then(
         data => { // Success
           console.log(data);
           this.data=data;
           this.productList = this.data.coordenadas;
           
           this.productList = this.productList.sort((a, b) => b.nombre - a.nombre);

           this.filteredItems = this.productList;
           console.log(this.productList);

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
                 // this.router.navigateByUrl('/pagessimples/loginf');
                },1000);
                   
            }
            //sin ciudades
            else if(msg.status == 404){ 
                //alert(msg.error.error);
                this.showToast('info', 'Info!', msg.error.error);
            }
            

         }
       );


       this.geolocalizar();
 
  }

  ngAfterViewInit(): void {
    const options = {
      types: ['address'],
      //componentRestrictions: { country: "mx" }
    };//
    if (document.getElementById('places')) {
      const inputElement = document.getElementById('places')/*.getElementsByTagName('input')[0]*/;
      let autocomplete = new google.maps.places.Autocomplete(inputElement, options);
      google.maps.event.addListener(autocomplete, 'place_changed', () => {
        let place = autocomplete.getPlace();


        var pt = new google.maps.LatLng(place.geometry.location.lat(),place.geometry.location.lng());
        for (var i = 0; i < this.markers.length; i++) {
          //this.markers[i].setMap(null);
          
          this.markers[i].setPosition(pt);
        }  

        //let coordAux = new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());  
        //this.createMarker(coordAux);
        //this.direccion = place.formatted_address;

        this.myLatLng = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        };

        setTimeout(()=>{

          //this.createMarker(this.myLatLng);

          this.map.setCenter(place.geometry.location);
          this.map.setZoom(18);

          },100);

      });
    };
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

    aEditar(obj): void {

      console.log(obj);
      this.ressetArea();

      this.editando = true;
      this.objAEditar = Object.assign({},obj);
      console.log(this.objAEditar);

      this.myFormEditar.patchValue({id : this.objAEditar.id});
      this.myFormEditar.patchValue({nombre : this.objAEditar.nombre});
      this.myFormEditar.patchValue({ciudad_id : this.objAEditar.ciudad_id});

      //this.ciudad_id = this.objAEditar.id;
      //this.getCoordinates();
      //this.triangleCoords = [];
      this.objAEditar.coordenadas=JSON.parse(this.objAEditar.coordenadas);
      for (var i = 0; i < this.objAEditar.coordenadas.length; ++i) {
        this.myLatLng=this.objAEditar.coordenadas[i];
        if (this.triangleCoords.length == 0) {
          this.triangleCoords.push({coordenada:[this.myLatLng]});
          //this.loadMap(this.myLatLng);
        }else{
          if (this.triangleCoords[0].coordenada[this.triangleCoords[0].coordenada.length - 1]  != this.myLatLng) {
            this.triangleCoords[0].coordenada.push(this.myLatLng);
           // 
          }else{
            this.showToast('warning', 'Warning!', 'Por favor mueve el pin rojo a otra ubicación.');
          }
        }
      }
      console.log(this.triangleCoords);
      let ultimoPunto = {
            lat:this.triangleCoords[0].coordenada[this.triangleCoords[0].coordenada.length - 1].lat,
            lng: this.triangleCoords[0].coordenada[this.triangleCoords[0].coordenada.length - 1].lng
          };

        this.loadMap(ultimoPunto);    
    }

    editar(): void {

      if (this.triangleCoords.length == 0 || this.triangleCoords[0].coordenada.length < 3) {
        this.showToast('warning', 'Warning!', 'El área de coordenadas debe estar formada por al menos 3 puntos.');
      }
      else{
     
        this.loading = true;

        var datos= {
          token: localStorage.getItem('mouvers_token'),
          nombre: this.myFormEditar.value.nombre,
          ciudad_id: this.myFormEditar.value.ciudad_id,
          coordenada: JSON.stringify(this.triangleCoords[0].coordenada),
        }

        this.http.put(this.rutaService.getRutaApi()+'zonas/'+this.myFormEditar.value.id, datos)
           .toPromise()
           .then(
             data => { // Success
                console.log(data);
                this.data = data;

                for (var i = 0; i < this.productList.length; ++i) {
                  if (this.productList[i].id == this.myFormEditar.value.id) {
                     this.productList[i].nombre = this.myFormEditar.value.nombre;
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

      }
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

      this.http.delete(this.rutaService.getRutaApi()+'categorias/'+this.eliminar_id+'?token='+localStorage.getItem('mouvers_token'))
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

    //Para la ciiudad
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
        estado: v_estado
      }

      this.http.put(this.rutaService.getRutaApi()+'ciudades/'+obj.id, datos)
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


    geolocalizar(){
      if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {

              console.log(position.coords.latitude);
              console.log(position.coords.longitude);

              this.myPosition = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };

              //this.loadMap(this.myPosition);

            });

          }
          else{

            /*this.myPosition = {
              lat: -34.4626456,
              lng: -57.8409687
            };*/

            if (localStorage.getItem("mouvers_pais")=='1') {
              console.log('uru');
              this.myPosition={
                lat: -34.4626456,
                lng: -57.8409687
              };
            }
            if (localStorage.getItem("mouvers_pais")=='2') {
              console.log('pana');
              this.myPosition={
                lat:8.96622821620688,
                lng:-79.54461472797337};
            }
            //this.loadMap(this.myPosition);

          }
    }

    getCoordinates(){
      this.loading = true;
      this.http.get(this.rutaService.getRutaApi()+'coordenadas/ciudad/'+this.ciudad_id+'?token='+localStorage.getItem('mouvers_token'))
      .toPromise()
      .then(
      data => {
          this.datosC = data;
          this.triangleCoords = this.datosC.coordenadas;
          for (var i = 0; i < this.triangleCoords.length; ++i) {
            this.triangleCoords[i].coordenada = JSON.parse(this.triangleCoords[i].coordenada);
          }

          let ultimoPunto = {
            lat:this.triangleCoords[0].coordenada[this.triangleCoords[0].coordenada.length - 1].lat,
            lng: this.triangleCoords[0].coordenada[this.triangleCoords[0].coordenada.length - 1].lng
          };

        this.loadMap(ultimoPunto);
        this.loading = false;  

      },
      msg => {
          console.log(msg);
               console.log(msg.error.error);

               this.loading = false;

               //token invalido/ausente o token expiro
               if(msg.status == 400 || msg.status == 401){ 
                    //alert(msg.error.error);

                    this.showToast('warning', 'Warning!', msg.error.error);
                    //this.mostrar = false;
                    setTimeout(()=>{
                      //this.router.navigateByUrl('/pagessimples/loginf');
                    },1000);
                       
                }
                //sin subcategorias
                else if(msg.status == 404){ 
                    //alert(msg.error.error);
                    this.showToast('info', 'Info!', msg.error.error);
                }
      });
    }


  public triangleCoords2:any=[];
  loadMap(position){
    //this.loading.dismiss();
    let mapEle: HTMLElement = document.getElementById('map');
    this.myLatLng = position;

    this.map = new google.maps.Map(mapEle, {
      center: this.myLatLng,
      zoom: 15,
      mapTypeControl: true,
        fullscreenControl: true,
        streetViewControl:true,
        zoomControl: true
    });

    //Reiniciar el area
    this.areaTriangle = [];
    console.log(this.triangleCoords);
    for (var i = 0; i < this.triangleCoords.length; ++i) {
      this.areaTriangle.push(new google.maps.Polygon({
        paths: this.triangleCoords[i].coordenada,
        strokeColor: '#222220',
        strokeOpacity: 0.5,
        strokeWeight: 2,
        fillColor: '#222220',
        fillOpacity: 0.1
    }));
    }

    this.directionsDisplay.setMap(this.map);
    for (var j = 0; j < this.areaTriangle.length; j++) {
        this.areaTriangle[j].setMap(this.map);
    }  

     this.triangleCoords2 = this.productList;
      console.log(this.triangleCoords2);

      
     
      //console.log(this.triangleCoords2);
        for (var i = 0; i < this.triangleCoords2.length; ++i) {
        //  console.log(JSON.parse(this.triangleCoords2[i].coordenadas));
           console.log('entro ZONAS');
          // Constr=uct the polygon.
          var color='#'+(Math.random()*0xFFFFFF<<0).toString(16);
          var bermudaTriangle = new google.maps.Polygon({
            paths: JSON.parse(this.triangleCoords2[i].coordenadas),
            strokeColor: color,
            strokeOpacity: 0.8,
            strokeWeight: 3,
            fillColor: color,
            fillOpacity: 0.35
          });
          bermudaTriangle.setMap(this.map);
          
        }


    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      //mapEle.classList.add('show-map');
      this.createMarker(this.myLatLng);

    });

  }

  createMarker(latlng) {

    //console.log(latlng);

    var marker = new google.maps.Marker({
      position: latlng,
      map: this.map,
      draggable: true,
      //posRef: posRef,
      //icon: icon,
      title: 'Último Punto'
    });
    this.markers.push(marker);
    var that = this;
    google.maps.event.addListener(marker, 'dragend', function() {

        var end = this.getPosition();
        that.myLatLng = {lat:end.lat(), lng: end.lng()};
        //that.calculateRoute(that.Origin,end);
        console.log(that.myLatLng);

        
    });
  }

  addPunto(){
    console.log(this.myLatLng);
    if (this.triangleCoords.length == 0) {

      this.triangleCoords.push({coordenada:[this.myLatLng]});
      this.loadMap(this.myLatLng);
    }else{
      if (this.triangleCoords[0].coordenada[this.triangleCoords[0].coordenada.length - 1]  != this.myLatLng) {
        this.triangleCoords[0].coordenada.push(this.myLatLng);
        this.loadMap(this.myLatLng);
      }else{
        this.showToast('warning', 'Warning!', 'Por favor mueve el pin rojo a otra ubicación.');
      }
    }
  }

  ressetArea(){
    this.triangleCoords = [];
    if (this.myLatLng) {
      this.loadMap(this.myLatLng);
    }else{
      this.loadMap(this.myPosition);
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
   }

   FilterByName(){
      this.filteredItems = [];
      if(this.inputName != ""){
            for (var i = 0; i < this.productList.length; ++i) {
              if (this.productList[i].nombre.toUpperCase().indexOf(this.inputName.toUpperCase())>=0) {
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

   //Tabla2 Subcategorias de la categoria X----<
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
              if (this.productList2[i].nombre.toUpperCase().indexOf(this.inputName2.toUpperCase())>=0) {
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
    //Tabla2 Subcategorias de la categoria X---->

}
