import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {PageEvent} from '@angular/material/paginator';
import { DataProduitService } from '../views/admin/service/data-produit.service';




@Component({
  selector: 'app-autocomplete-display-example',
  templateUrl: './autocomplete-display-example.component.html',
  styleUrls: ['./autocomplete-display-example.component.css']
})
export class AutocompleteDisplayExampleComponent  {
  Produits:any
  // MatPaginator Inputs
  length :any
  pageSize = 10;
  pageSizeOptions: number[] = [1,5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;
 

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
  constructor(public dp:DataProduitService){
    this.dp.getAllProduit().subscribe(res=>{
      var rep:any  
      rep=res.valueOf()
      this.dp.Produits=rep;
      this.length=this.dp.Produits.length;
      
      console.log(rep)}) 
    

  }
  page(e:any){
    console.log(e)
    this.dp.Produits=this.dp.Produits.slice(e.pageSize)
  
  
  
  }
}
