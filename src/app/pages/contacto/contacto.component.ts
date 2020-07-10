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
  selector: 'contacto',
  styleUrls: ['./contacto.component.scss'],
  templateUrl: './contacto.component.html',
})

export class contactoComponent implements OnInit{

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

	public opciones:any;
	public planes:any;
	public inputName="";
	public plan:any={
		contacto:"",
		correo:"",
		telefono:"",
		direccion:"",
	}

	constructor( private modalService: NgbModal,
	       private toasterService: ToasterService,
	       private http: HttpClient,
	       private router: Router,
	       private rutaService: RutaBaseService,
	       public fb: FormBuilder)
	{


	}

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
	    this.loading = true;
		this.http.get(this.rutaService.getRutaApi()+'/sistema/contacto?pais_id='+localStorage.getItem('mouvers_pais'))
	         .toPromise()
	         .then(
	           data => { // Success
	             console.log(data);
	             this.data=data;
	             this.plan=this.data.contacto;
			     this.loading = false;
	           },
	           msg => { // Error
	             console.log(msg);
	             console.log(msg.error.error);
	             this.loading = false;
	             this.showToast('warning', 'Warning!', 'msg.error.error');
	            
	              
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


    //public plan:any;

	editar_plan(){
		
		
		var datos= {
	        token: localStorage.getItem('mouvers_token'),
	        contacto:this.plan.contacto,
			correo:this.plan.correo,
			telefono:this.plan.telefono,
			direccion:this.plan.direccion,
	      }
	    console.log(datos);
        this.http.put(this.rutaService.getRutaApi()+'sistema/contacto/'+this.plan.id, datos)
	         .toPromise()
	         .then(
	           data => { // Success
	             console.log(data);
	             this.data=data;

	            //this.showToast('success', 'Success!', 'éxito');
			    
			    this.loading = false;
			    this.ngOnInit();
			    this.showToast('success', 'Success!', 'éxito');

	           },
	           msg => { // Error
	             console.log(msg);
	             console.log(msg.error.error);
	             this.loading = false;
	            if(msg.status == 400 || msg.status == 401){ 
		            //alert(msg.error.error);
		            this.showToast('warning', 'Warning!', 'msg.error.error');
		        }
		        
	              
	           }
	         );
	}
    
	
	
	

}
