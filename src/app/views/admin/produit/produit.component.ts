import { Component, OnInit } from '@angular/core';
import { DataProduitService } from '../service/data-produit.service';
import { FormBuilder, FormControl, Validators, FormGroup, FormGroupDirective, NgForm, FormArray } from '@angular/forms';
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
    Produit:any
    refProd=""
    nameProd=""
    quantite=""
    prixProd=""
    

  
  constructor(public dp:DataProduitService) { }

  ngOnInit(): void {
    this.Produit={refProd:"",nameProd:"",quantite:"",prixProd:""}

  }

  Add(){
    console.log("eeeeeeee")
    this.dp.AjouteProduit(this.Produit).subscribe(res=>
      {console.log(res)
      
      })
    console.log("eeeeeeee1")

  }
}
