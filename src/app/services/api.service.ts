import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // URL : any = 'https://api.phaplyvietnam.com' ;
  // localhost :3000
  URL : any = '/api' ;
  // URL : any = 'http://api.drto.vn' ;
  // kiến thức mới
  // URL : any = '/api'

  constructor(
    private authservice : AuthService,
    private http : HttpClient
    ) { }

  async post(path: any, body: any) {
    const nonce = this.authservice.generateNonce();
    const stime = this.authservice.getCurrentStime();
    const key = 'drto.vn'; // Thay thế bằng khóa bí mật thực tế
    const signature = this.authservice.createSignature(nonce , stime  , key) ;
    const headers = new HttpHeaders({
      'X-Nonce': nonce,
      'X-Stime': stime.toString(),
      'X-Signature': signature.toString()
    });
    return await this.http.post(`${this.URL}${path}`,body ,{ headers});
  }

  async get(path : any) {
    const nonce = this.authservice.generateNonce();
    const stime = this.authservice.getCurrentStime();
    const key = 'drto.vn'; // Thay thế bằng khóa bí mật thực tế
    const signature = this.authservice.createSignature(nonce , stime  , key) ;
    const headers = new HttpHeaders({
      'X-Nonce': nonce,
      'X-Stime': stime.toString(),
      'X-Signature': signature.toString()
    });

    return await this.http.get(`${this.URL}${path}` , { headers });
  }
}
