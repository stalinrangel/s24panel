import { Injectable } from '@angular/core';

@Injectable()
export class RutaBaseService {

	//Local freddy
	//public api_base = 'http://localhost/apii/public/';
	//public images_base = 'http://localhost/apii/public/images_uploads/';


	public api_base = 'https://service24.app/apii/public/';
	public images_base = 'https://service24.app/apii/public/images_uploads/';

	constructor() { }

	getRutaApi(){
		return this.api_base;
	}

	getRutaImages(){
		return this.images_base;
	}

}
