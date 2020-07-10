import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

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

@Component({
  selector: 'ngx-categorias-agregar',
  styleUrls: ['./categorias-agregar.component.scss'],
  templateUrl: './categorias-agregar.component.html',
})
export class CategoriasAgregarComponent implements OnInit{

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

  constructor( private toasterService: ToasterService,
           private http: HttpClient,
           private router: Router,
           private rutaService: RutaBaseService,
           public fb: FormBuilder)
  {

  	this.myFormAgregar = this.fb.group({
        nombre: ['', [Validators.required]],
        ingles: ['', [Validators.required]],
        imagen: [''],
        catprincipales_id: ['', [Validators.required]],
        ciudad_id: ['', [Validators.required]]
      });

    
      
  }
  public categorias:any;
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
    this.ciudades();
    this.http.get(this.rutaService.getRutaApi()+'catprincipales?ciudad_id='+localStorage.getItem('mouvers_ciudad')+'token='+localStorage.getItem('mouvers_token'))
       .toPromise()
       .then(
         data => { // Success
           console.log(data);
           this.data = data;
           this.categorias=this.data.categorias; 
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

  public todaslasciudades:any;
  public ciudad:any;
  ciudades(){
    this.http.get(this.rutaService.getRutaApi()+'ciudad?pais_id='+localStorage.getItem('mouvers_pais')+'&token='+localStorage.getItem('mouvers_token'))
       .toPromise()
       .then(
         data => { // Success
           
           this.data = data;
           this.todaslasciudades=this.data.coordenadas; 
           this.ciudad=this.data.coordenadas; 
           console.log(this.ciudad);  
           
         },
         msg => { // Error
           console.log(msg);
           console.log(msg.error.error);
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

    crear() {
      console.log(this.myFormAgregar.value);

      this.loading = true;
      if (this.myFormAgregar.value.catprincipales_id==0 || this.myFormAgregar.value.catprincipales_id=='') {
        alert('Debe seleccionar una categoria principal!');
      }
      var datos= {
        token: localStorage.getItem('mouvers_token'),
        nombre: this.myFormAgregar.value.nombre,
        ingles: this.myFormAgregar.value.ingles,
        imagen: this.myFormAgregar.value.imagen,
        estado: 'ON',
        catprincipales_id:this.myFormAgregar.value.catprincipales_id,
        ciudad_id: this.myFormAgregar.value.ciudad_id
      }
      console.log(datos);


      this.http.post(this.rutaService.getRutaApi()+'categorias', datos)
         .toPromise()
         .then(
           data => { // Success
              console.log(data);
              this.data = data;

              //alert(this.data.message);
              this.loading = false;
              this.showToast('success', 'Success!', this.data.message);

              this.myFormAgregar.reset();
              this.clearFile();
  
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

    //Carga de img---<
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
              this.myFormAgregar.patchValue({imagen : this.imgUpload});

              //Solo admitimos imágenes.
               if (!this.fileIMG.type.match('image.*')) {
                    return;
               }

               var reader = new FileReader();

               reader.onload = (function(theFile) {
                   return function(e) {
                   // Creamos la imagen.
                    document.getElementById("list").innerHTML = ['<img class="thumb" src="', e.target.result, '" height="160px"/>'].join('');
                   };
               })(this.fileIMG);
     
               reader.readAsDataURL(this.fileIMG);

               this.clear = true;

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

      this.myFormAgregar.patchValue({imagen : null});
    }
    //Carga de img--->

    
}
