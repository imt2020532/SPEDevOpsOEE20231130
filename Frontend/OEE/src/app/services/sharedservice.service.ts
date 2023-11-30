import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {

  //readonly APIUrl = 'http://103.189.89.135/AnwitOEEWebAPI/api';

  readonly APIUrl = 'https://localhost:44342/api';

  //https://localhost:44342/weatherforecast
 
  

  constructor(private http:HttpClient) { }


  getmlist():Observable<any[]>{
    alert("checking if getmlist works...");
    return this.http.get<any>(this.APIUrl+'/Machine');
  }


  getmaterialsList(){
    return this.http.get<any>(this.APIUrl+'/Material');
  }
  

  // addMachine(machineData: any){
  //   alert("checking if add machine works...");
  //   return this.http.post<any>(this.APIUrl + '/Machine', machineData);
  // }

  addMachine(machineData: any): Observable<any> {
    alert('Machine added');
    return this.http.post<any>(this.APIUrl + '/Machine', machineData);
    
  }

  login(Username: string, Password: string): Observable<any> {
    const body = { Username: Username, Password: Password };
    return this.http.post<any>(this.APIUrl + '/admins/login', body);
  }

  // getMaterialOperations(input: string): Observable<any[]> {
  //   // Create an object with the input string
  //   const body = { input: input };
  
  //   // Make a POST request to the API endpoint and return the response as an observable
  //   return this.http.post<any[]>(this.APIUrl + '/your-endpoint', body);
  // }
  getMaterialOperations(numberList: string): Observable<any[]> {
    const params = { numberList: numberList }; // Create an object with the parameter
  
    return this.http.get<any[]>(this.APIUrl + '/Inputs', { params: params });
  }
  
  
}
