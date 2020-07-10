import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

//Mis imports
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { RutaBaseService } from '../../services/ruta-base/ruta-base.service';

import { FormBuilder, FormArray, FormGroup, Validators  } from '@angular/forms';

import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import 'style-loader!angular2-toaster/toaster.css';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'sistema',
  styleUrls: ['./sistema.component.scss'],
  templateUrl: './sistema.component.html',
})

export class SistemaComponent implements OnInit{

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

	public sistConfigurado=false;
	public idVarSistema:any;
	public costoxkm:any;
	public gastos_envio:any;

	@ViewChild('fileInput') fileInput: ElementRef;
	clear = false; //puedo borrar?
	fileIMG = null;
	imgUpload = null;
	loadinImg = false;

	slider = [];

	public mouvers_user_tipo = localStorage.getItem('mouvers_user_tipo');

	constructor( private modalService: NgbModal,
	       private toasterService: ToasterService,
	       private http: HttpClient,
	       private router: Router,
	       private rutaService: RutaBaseService,
	       public fb: FormBuilder)
	{
		

	}


	ngOnInit() {

		if (this.mouvers_user_tipo != '1') {
	      localStorage.removeItem('mouvers_token');
	      localStorage.removeItem('mouvers_user_id');
	      localStorage.removeItem('mouvers_user_nombre');
	      localStorage.removeItem('mouvers_user_tipo');
	      localStorage.removeItem('mouvers_establecimiento_id');

	      this.router.navigateByUrl('/pagessimples/loginf');
	    }

	    this.getSlider();

		this.loading = true;
		this.http.get(this.rutaService.getRutaApi()+'sistema?token='+localStorage.getItem('mouvers_token'))
		   .toPromise()
		   .then(
		     data => { // Success
		       console.log(data);
		       this.data=data;
		       this.idVarSistema=this.data.varSistema.id;
		       this.costoxkm=this.data.varSistema.costoxkm;
		       this.gastos_envio=this.data.varSistema.gastos_envio;

		       this.loading = false;
		       this.sistConfigurado = true;


		     },
		     msg => { // Error
		       console.log(msg);
		       //console.log(msg.error.error);

		       this.loading = false;

		       //token invalido/ausente o token expiro
		       if(msg.status == 400 || msg.status == 401){ 
		            //alert(msg.error.error);
		            this.showToast('warning', 'Warning!', msg.error.error);
		            setTimeout(()=>{
	                  this.router.navigateByUrl('/pagessimples/loginf');
	                },1000);
		        }
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

	//Configurar costo por km
	configurarSist() {
		if (!this.sistConfigurado) {
			this.crearVarSist();
		}else{
			this.actualizarVarSist();
		}
	}

	//Configurar gastos de envio
	configurarSist2() {
		if (!this.sistConfigurado) {
			this.crearVarSist();
		}else{
			this.actualizarVarSist2();
		}
	}

	crearVarSist() {

		this.loading = true;

		var datos= {
	        token: localStorage.getItem('mouvers_token'),
	        costoxkm: this.costoxkm,
	        gastos_envio: this.gastos_envio,
	      }
	    console.log(datos);

		this.http.post(this.rutaService.getRutaApi()+'sistema', datos)
		   .toPromise()
		   .then(
		     data => { // Success
		       console.log(data);
		       this.data = data;

		       this.idVarSistema=this.data.varSistema.id;
		       this.costoxkm=this.data.varSistema.costoxkm;
		       this.gastos_envio=this.data.varSistema.gastos_envio;

		       this.loading = false;
		       this.showToast('success', 'Success!', this.data.message);

		       this.sistConfigurado = true;

		     },
		     msg => { // Error
		       console.log(msg);
		       //console.log(msg.error.error);

		       this.loading = false;

		       //token invalido/ausente o token expiro
		       if(msg.status == 400 || msg.status == 401){ 
		            //alert(msg.error.error);
		            this.showToast('warning', 'Warning!', msg.error.error);
		        }
		        else { 
		            //alert(msg.error.error);
		            this.showToast('error', 'Erro!', msg.error.error);
		        }   

		     }
		   );
	}

	actualizarVarSist() {

		this.loading = true;

		var datos= {
	        token: localStorage.getItem('mouvers_token'),
	        costoxkm: this.costoxkm,
	      }
	    console.log(datos);

		this.http.put(this.rutaService.getRutaApi()+'sistema/'+this.idVarSistema, datos)
		   .toPromise()
		   .then(
		     data => { // Success
		       console.log(data);
		       this.data = data;

		       this.idVarSistema=this.data.varSistema.id;
		       this.costoxkm=this.data.varSistema.costoxkm;

		       this.loading = false;
		       this.showToast('success', 'Success!', this.data.message);

		     },
		     msg => { // Error
		       console.log(msg);
		       //console.log(msg.error.error);

		       this.loading = false;

		       //token invalido/ausente o token expiro
		       if(msg.status == 400 || msg.status == 401){ 
		            //alert(msg.error.error);
		            this.showToast('warning', 'Warning!', msg.error.error);
		        }
		        else { 
		            //alert(msg.error.error);
		            this.showToast('error', 'Erro!', msg.error.error);
		        }   

		     }
		   );
	}

	actualizarVarSist2() {

		this.loading = true;

		var datos= {
	        token: localStorage.getItem('mouvers_token'),
	        gastos_envio: this.gastos_envio,
	      }
	    console.log(datos);

		this.http.put(this.rutaService.getRutaApi()+'sistema/'+this.idVarSistema, datos)
		   .toPromise()
		   .then(
		     data => { // Success
		       console.log(data);
		       this.data = data;

		       this.idVarSistema=this.data.varSistema.id;
		       this.gastos_envio=this.data.varSistema.gastos_envio;

		       this.loading = false;
		       this.showToast('success', 'Success!', this.data.message);

		     },
		     msg => { // Error
		       console.log(msg);
		       //console.log(msg.error.error);

		       this.loading = false;

		       //token invalido/ausente o token expiro
		       if(msg.status == 400 || msg.status == 401){ 
		            //alert(msg.error.error);
		            this.showToast('warning', 'Warning!', msg.error.error);
		        }
		        else { 
		            //alert(msg.error.error);
		            this.showToast('error', 'Erro!', msg.error.error);
		        }   

		     }
		   );
	}

	getSlider(){
		this.loading = true;
		this.http.get(this.rutaService.getRutaApi()+'slider?token='+localStorage.getItem('mouvers_token'))
		   .toPromise()
		   .then(
		     data => { // Success
		       console.log(data);
		       this.data=data;
		       this.slider=JSON.parse(this.data.slider.slider);

		       this.loading = false;

		     },
		     msg => { // Error
		       console.log(msg);
		       //console.log(msg.error.error);

		       this.loading = false;

		       //token invalido/ausente o token expiro
		       if(msg.status == 400 || msg.status == 401){ 
		            //alert(msg.error.error);
		            this.showToast('warning', 'Warning!', msg.error.error);
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

	actualizarSlider() {

		this.loading = true;

		var datos= {
	        token: localStorage.getItem('mouvers_token'),
	        slider: JSON.stringify(this.slider),
	      }
	    console.log(datos);

		this.http.put(this.rutaService.getRutaApi()+'slider/1', datos)
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
		       //console.log(msg.error.error);

		       this.loading = false;

		       //token invalido/ausente o token expiro
		       if(msg.status == 400 || msg.status == 401){ 
		            //alert(msg.error.error);
		            this.showToast('warning', 'Warning!', msg.error.error);
		        }
		        else { 
		            //alert(msg.error.error);
		            this.showToast('error', 'Erro!', msg.error.error);
		        }   

		     }
		   );
	}

	clearImagen(index){
		this.slider.splice(index, 1);
		this.actualizarSlider();
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
              //this.myFormAgregar.patchValue({imagen : this.imgUpload});
              this.slider.push({url:this.imgUpload})

              //Solo admitimos imágenes.
               if (!this.fileIMG.type.match('image.*')) {
                    return;
               }

               var reader = new FileReader();

               reader.onload = (function(theFile) {
                   return function(e) {
                   // Creamos la imagen.
                    //document.getElementById("list").innerHTML = ['<img class="thumb" src="', e.target.result, '" height="160px"/>'].join('');
                   };
               })(this.fileIMG);
     
               reader.readAsDataURL(this.fileIMG);

               this.clear = true;

              this.loading = false;
              this.showToast('success', 'Success!', this.data.message);
              this.clearFile(); 
              this.actualizarSlider();
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
      input.append('carpeta', 'slider');
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

      //this.myFormAgregar.patchValue({imagen : null});
    }
    //Carga de img--->



}
