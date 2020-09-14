import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private httpClient:HttpClient) { }

getContactInfo(): Observable<any>{
  return this.httpClient.get('https://api.rootnet.in/covid19-in/contacts');
}
getnotification(): Observable<any>{
  return this.httpClient.get('https://api.rootnet.in/covid19-in/notifications');
}
getMedicalInfo(): Observable<any>{
  return this.httpClient.get('https://api.rootnet.in/covid19-in/hospitals/medical-colleges');
}
getHospitalInfo(): Observable<any>{
  return this.httpClient.get('https://api.rootnet.in/covid19-in/hospitals/beds');
}
}
