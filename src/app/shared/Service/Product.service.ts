import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly API_URL = 'http://192.168.56.3:8082/SpringMVC/produit';

  constructor(private httpClient: HttpClient) { }
  getAllProducts() {
    return this.httpClient.get(`${this.API_URL}/retrieve-all-produits`)
  }
  addProduct(product : any) {
    return this.httpClient.post(`${this.API_URL}/add-produit`, product)
  }
  editProduct(product : any){
    return this.httpClient.put(`${this.API_URL}/modify-produit`, product)
  }
  deleteProduct(idProduct : any){
    return  this.httpClient.delete(`${this.API_URL}/remove-produit/${idProduct}`)
  }

}
