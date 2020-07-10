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
  selector: 'planes',
  styleUrls: ['./planes.component.scss'],
  templateUrl: './planes.component.html',
})

export class planesComponent implements OnInit{

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
		this.http.get(this.rutaService.getRutaApi()+'planes?panel=1&pais_id='+localStorage.getItem('mouvers_pais'))
	         .toPromise()
	         .then(
	           data => { // Success
	             console.log(data);
	             this.data=data;
	             this.planes=this.data.Planes;
	             console.log(this.planes);
	             for (var i = 0; i < this.planes.length; ++i) {
	             	this.planes[i].descripcion=JSON.parse(this.planes[i].descripcion);
	             	if (this.planes[i].tipo_plan=="Opciones") {
	             		this.opciones=this.planes[i];
	             	}
	             }
	             console.log(this.opciones);
			     
			    this.loading = false;

	           },
	           msg => { // Error
	             console.log(msg);
	             console.log(msg.error.error);
	             this.loading = false;
	             //this.showToast('success', 'Success!', 'éxito');
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



	cambiarEstado2(item){
		if (item==0) {
			this.plan.recomendado=1;
		}else{
			this.plan.recomendado=0;
		}
		console.log(this.plan.recomendado);
	}

	public agregar_plan_check=true;
	agregar_plan(){
		this.plan={
			tipo_plan:"",
			costo:0,
			descripcion:[]
		}
		console.log(this.plan);
		this.ver_plan=false;
		this.agregar_plan_check=false;
	}

	agregar_plan2(){
		console.log(this.plan);
		var datos= {
		  tipo_plan:this.plan.tipo_plan,
		  costo:this.plan.costo,
          descripcion:JSON.stringify(this.plan.descripcion),
          pais_id:localStorage.getItem('mouvers_pais')
        }
        console.log(datos);

        this.http.post(this.rutaService.getRutaApi()+'planes', datos)
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

	eliminar_plan2(item){
		console.log(this.plan);
		this.plan=item;

        this.http.delete(this.rutaService.getRutaApi()+'planes/'+this.plan.id)
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

	add_plan(item){
		console.log(item);
		this.plan.descripcion.push(item);
	}
	aEliminar(obj,index): void {
      this.objAEliminar = obj;
      console.log(this.objAEliminar);
      console.log(index);
      this.opciones.descripcion.splice(index, 1);
      this.eliminar_descripcion();
    }
    eliminar_descripcion(){
		console.log(this.opciones);
		var datos= {
          descripcion:JSON.stringify(this.opciones.descripcion)
        }
        console.log(datos);

        this.http.put(this.rutaService.getRutaApi()+'planes/'+this.opciones.id, datos)
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
    aEliminar2(obj,index): void {
      this.objAEliminar = obj;
      console.log(this.objAEliminar);
      console.log(index);
      this.plan.descripcion.splice(index, 1);
      this.eliminar_descripcion2();
    }
    eliminar_descripcion2(){
		console.log(this.plan);
		var datos= {
          descripcion:JSON.stringify(this.plan.descripcion)
        }
        console.log(datos);

        this.http.put(this.rutaService.getRutaApi()+'planes/'+this.plan.id, datos)
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

	editar_plan(){
		console.log(this.plan);
		var datos= {
		  tipo_plan:this.plan.tipo_plan,
		  costo:this.plan.costo,
		  descuento:this.plan.descuento,
		  recomendado:this.plan.recomendado,
          descripcion:JSON.stringify(this.plan.descripcion)
        }
        console.log(datos);

        this.http.put(this.rutaService.getRutaApi()+'planes/'+this.plan.id, datos)
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
    
	crear_descripcion(){
		console.log(this.opciones);
		console.log(this.inputName);
		this.opciones.descripcion.push({
			"descripcion":this.inputName
		});
		var datos= {
          descripcion:JSON.stringify(this.opciones.descripcion)
        }
        console.log(datos);

        this.http.put(this.rutaService.getRutaApi()+'planes/'+this.opciones.id, datos)
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

	public ver_plan=true;
	public plan:any;
	ver(item){
		console.log(item);
		this.plan=item;
		this.ver_plan=false;
	}
	atras(){
		this.ver_plan=true;
		this.agregar_plan_check=true;
	}
	public plan_a_editar="";
	edit_plan(item){
		this.plan_a_editar=item.descripcion;
		console.log(item);
	}
	eliminar_plan(item){
		console.log(item);
	}

}
