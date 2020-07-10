import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, HostListener, NgZone } from '@angular/core';

// Mis imports
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { RutaBaseService } from '../../../services/ruta-base/ruta-base.service';

import { FormBuilder, FormArray, FormGroup, Validators  } from '@angular/forms';

import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import 'style-loader!angular2-toaster/toaster.css';

declare const $: any;
declare var google: any;
//declare var google;

@Component({
  selector: 'ngx-agregar-super-ciudades',
  styleUrls: ['./super-ciudades-agregar.component.scss'],
  templateUrl: './super-ciudades-agregar.component.html',
})
export class SuperCiudadesAgregarComponent implements OnInit, AfterViewInit{

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

	public loading = false;

	//Formularios
	myFormAgregar: FormGroup;

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

  constructor( private toasterService: ToasterService,
           private http: HttpClient,
           private router: Router,
           private rutaService: RutaBaseService,
           public fb: FormBuilder,
           public zone: NgZone)
  {

  	this.myFormAgregar = this.fb.group({
        nombre: ['', [Validators.required]],
        ciudad_id: ['', [Validators.required]],
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
  public productList:any;
  public filteredItems:any;

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
                  this.router.navigateByUrl('/pagessimples/loginf');
                },1000);
            }
            //sin categorias o todas deshabilitadas OFF
            else if(msg.status == 404){ 
                //alert(msg.error.error);
                //this.showToast('info', 'Info!', msg.error.error);
            }

         }
       );

       this.geolocalizar();
  

       
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

           //this.init();

           this.loading = false;

           setTimeout(()=>{
                // this.zonas(this.productList);
                },2000);
            setTimeout(()=>{
                this.geolocalizar();
                },5000);
         },
         msg => { // Error
           console.log(msg);
           console.log(msg.error.error);

           this.loading = false;

           //token invalido/ausente o token expiro
           if(msg.status == 400 || msg.status == 401){ 
                //alert(msg.error.error);

                this.showToast('warning', 'Warning!', msg.error.error);
               
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


       
    
  }
  public triangleCoords2:any=[];
  zonas(obj){
      let ultimoPunto={
          lat: 0,
          lng: 0
        };
      if (localStorage.getItem("mouvers_pais")=='1') {
        console.log('uru');
        ultimoPunto={
          lat: -34.4626456,
          lng: -57.8409687
        };
      }
      if (localStorage.getItem("mouvers_pais")=='2') {
        console.log('pana');
        ultimoPunto={
          lat:8.96622821620688,
          lng:-79.54461472797337};
      }

      
      let mapEle: HTMLElement = document.getElementById('map');
        this.myLatLng = ultimoPunto;

        this.map = new google.maps.Map(mapEle, {
          center: this.myLatLng,
          zoom: 10,
          mapTypeControl: true,
          fullscreenControl: true,
          streetViewControl:true,
          zoomControl: true
        });

      this.areaTriangle=[];
      this.triangleCoords2 = obj;
      console.log(this.triangleCoords2);

      
      console.log('entro ZONAS');
        for (var i = 0; i < this.triangleCoords2.length; ++i) {
          console.log(JSON.parse(this.triangleCoords2[i].coordenadas));
          
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
        
       
       
    }


  ngAfterViewInit(): void {
    const options = {
      types: ['address'],
      //componentRestrictions: { country: "uy" }
    };
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
          this.map.setZoom(14);

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

    crear() {

      if (this.triangleCoords.length == 0 || this.triangleCoords[0].coordenada.length < 3) {
        this.showToast('warning', 'Warning!', 'El área de coordenadas debe estar formada por al menos 3 puntos.');
      }
      else{


        //console.log(this.myFormAgregar.value);

        this.loading = true;
        console.log(this.triangleCoords[0].coordenada);
        var pais=1;
        for (var i = 0; i < this.cuidad.length; ++i) {
          if(this.cuidad[i].id==this.myFormAgregar.value.ciudad_id) {
            pais=this.cuidad[i].pais_id;
          }
        }

        var datos= {
          token: localStorage.getItem('mouvers_token'),
          nombre: this.myFormAgregar.value.nombre,
          ciudad_id: this.myFormAgregar.value.ciudad_id,
          pais_id: pais,
          estado: 'ON',
          costo: 0,
          coordenadas: JSON.stringify(this.triangleCoords[0].coordenada),
        }
        console.log(datos);

        this.http.post(this.rutaService.getRutaApi()+'zonas', datos)
           .toPromise()
           .then(
             data => { // Success
                console.log(data);
                this.data = data;

                //alert(this.data.message);
                this.loading = false;
                this.showToast('success', 'Success!', this.data.message);

                this.myFormAgregar.reset();
    
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

            this.loadMap(this.myPosition);
            this.map.setZoom(14);

          });

        }
        else{

          this.myPosition = {
            lat: -34.4626456,
            lng: -57.8409687
          };
          this.loadMap(this.myPosition);
          this.map.setZoom(14);

        }
  }

  loadMap(position){
    //this.loading.dismiss();
    let mapEle: HTMLElement = document.getElementById('map');
    this.myLatLng = position;

    this.map = new google.maps.Map(mapEle, {
      center: this.myLatLng,
      zoom: 19,
      mapTypeControl: true,
        fullscreenControl: true,
        streetViewControl:true,
        zoomControl: true
    });

    //Reiniciar el area
    this.areaTriangle = [];
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

     // this.areaTriangle=[];
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

  loadMap2(position){
    //this.loading.dismiss();
    let mapEle: HTMLElement = document.getElementById('map');
    this.myLatLng = position;

    this.map = new google.maps.Map(mapEle, {
      center: this.myLatLng,
      zoom: 19,
      mapTypeControl: true,
        fullscreenControl: true,
        streetViewControl:true,
        zoomControl: true
    });

    //Reiniciar el area
    this.areaTriangle = [];
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
    console.log(this.triangleCoords);
    if (this.triangleCoords.length == 0) {

      this.triangleCoords.push({coordenada:[this.myLatLng]});
      this.loadMap2(this.myLatLng);
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
   
}
