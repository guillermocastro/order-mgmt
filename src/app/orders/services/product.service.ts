import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ProductModel } from '../models/product.model';
@Injectable()
export class ProductService {

  productList:AngularFireList<any>;
  selectedProduct: ProductModel=new ProductModel();
  constructor(private firebase :AngularFireDatabase) { }

  getData(){
    this.productList=this.firebase.list('products');
    return this.productList;
  }
  insertProduct(product:ProductModel){
    this.productList.push({
      ean:product.ean,
      name:product.name,
      description:product.description,
      imageUrl:product.imageUrl,
      price:product.price
    });
  }
  updateProduct(product:ProductModel){
    this.productList.update(product.$key,{
      ean:product.ean,
      name:product.name,
      description:product.description,
      imageUrl:product.imageUrl,
      price:product.price
    });
  }
  deleteProduct($key:string){
    this.productList.remove($key);
  }
}
