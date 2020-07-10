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
  selector: 'notificaciones',
  styleUrls: ['./notificaciones.component.scss'],
  templateUrl: './notificaciones.component.html',
})

export class notificacionesComponent implements OnInit{

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

	constructor( private modalService: NgbModal,
	       private toasterService: ToasterService,
	       private http: HttpClient,
	       private router: Router,
	       private rutaService: RutaBaseService,
	       public fb: FormBuilder)
	{


	}

	public notificaciones_clientes:any=[];
	public notificaciones_proveedores:any=[];

	public mouvers_user_tipo = localStorage.getItem('mouvers_user_tipo');
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

		this.http.get(this.rutaService.getRutaApi()+'notificaciones_generales?ciudad_id='+localStorage.getItem('mouvers_ciudad'))
	         .toPromise()
	         .then(
	           data => { // Success
	           	 this.notificaciones_clientes=[];
	           	 this.notificaciones_proveedores=[];
	             console.log(data);
	             this.data=data;
	             this.data=this.data.Notificaciones_generales;

	             for (var i = 0; i < this.data.length; ++i) {
	             	if(this.data[i].tipo_usuario==2) {
	             		this.notificaciones_clientes.push(this.data[i]);
	             	}
	             	if(this.data[i].tipo_usuario==3) {
	             		this.notificaciones_proveedores.push(this.data[i]);
	             	}
	             }

	             console.log(this.notificaciones_clientes);
	             console.log(this.notificaciones_proveedores);
			     
			    this.loading = false;

	           },
	           msg => { // Error
	             console.log(msg);
	             console.log(msg.error.error);
	             this.loading = false;
	             //this.showToast('success', 'Success!', 'Mensaje enviado con éxito');
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
	public objAEliminar:any;
    public eliminar_id:any;
    public eliminar_nombre:any;

	aEliminar(obj): void {
      this.objAEliminar = obj;
      console.log(this.objAEliminar);
      this.eliminar_id = this.objAEliminar.id;
      this.eliminar_nombre = this.objAEliminar.nombre;
    }

    eliminar(): void {
      console.log(this.objAEliminar);
      
      this.loading = true;

      var datos= {
        token: localStorage.getItem('mouvers_token')
      }

      this.http.delete(this.rutaService.getRutaApi()+'notificaciones_generales/'+this.eliminar_id+'?token='+localStorage.getItem('mouvers_token'))
         .toPromise()
         .then(
           data => { // Success
              console.log(data);
             
              this.ngOnInit();
              
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

	public msg='';

	enviar_clientes(){
		this.loading = true;

	    var datos= {
          token: localStorage.getItem('mouvers_token'),
          mensaje: this.msg,
          tipo_usuario: 2,
          ciudad_id: localStorage.getItem('mouvers_ciudad'),
          zona_id: 1,
         
        }
        console.log(datos);

        this.http.post(this.rutaService.getRutaApi()+'notificaciones_generales?ciudad_id='+localStorage.getItem('mouvers_ciudad'), datos)
	         .toPromise()
	         .then(
	           data => { // Success
	             console.log(data);
	             this.data=data;

	            //this.showToast('success', 'Success!', 'Mensaje enviado con éxito');
			    
			    this.loading = false;
			    this.ngOnInit();
			    this.showToast('success', 'Success!', 'Mensaje enviado con éxito');
			    this.enviarNotificaciones();

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
	}

	enviar_proveedores(){
		this.loading = true;

	    var datos= {
          token: localStorage.getItem('mouvers_token'),
          mensaje: this.msgp,
          tipo_usuario: 3,
          ciudad_id: localStorage.getItem('mouvers_ciudad'),
          zona_id: 1,
         
        }
        console.log(datos);

        this.http.post(this.rutaService.getRutaApi()+'notificaciones_generales?ciudad_id='+localStorage.getItem('mouvers_ciudad'), datos)
	         .toPromise()
	         .then(
	           data => { // Success
	             console.log(data);
	             this.data=data;

	           
			     
			    this.loading = false;
			    this.ngOnInit();
			  
			    
			   
			    this.enviarNotificacionesP();
			    this.showToast('success', 'Success!', 'Mensaje enviado con éxito');
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
	}

	enviarNotificaciones(): void {
      this.loading = true;

      this.http.get(this.rutaService.getRutaApi()+'onesignalNotificaciones.php?accion=17&ciudad_id='+localStorage.getItem('mouvers_ciudad')+'&contenido='+this.msg)
         .toPromise()
         .then(
           data => { // Success
             console.log(data);
             this.data=data;

            this.showToast('success', 'Success!', 'Mensaje enviado con éxito');
		     
		    this.loading = false;

		   this.msg='';

           },
           msg => { // Error
             console.log(msg);
             this.msg='';
             //console.log(msg.error.error);
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
    }
    public msgp='';
    enviarNotificacionesP(): void {
      this.loading = true;

      this.http.get(this.rutaService.getRutaApi()+'onesignalNotificacionesp.php?accion=17&ciudad_id='+localStorage.getItem('mouvers_ciudad')+'&contenido='+this.msgp)
         .toPromise()
         .then(
           data => { // Success
             console.log(data);
             this.data=data;

            this.showToast('success', 'Success!', 'Mensaje enviado con éxito');
		    this.ngOnInit();
		    this.loading = false;
		      this.msgp='';
           },
           msg => { // Error
             console.log(msg);
             this.msgp='';
             //console.log(msg.error.error);
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
    }


	


}
