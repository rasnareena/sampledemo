import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable()
export class TabSystemService{

	 private myMessage = new Subject<string>();

	sendRouteData():Observable<any>{
		return this.myMessage.asObservable();
	}

	updateRouteData(message: string) {
  		this.myMessage.next(message);
	}
	
}