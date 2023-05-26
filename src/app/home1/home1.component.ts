import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {

  produit:any
  produits:any[]=[]
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

  }
    ajouter(){
    this.produit={refProd:"2",nameProd:"ParfunAA",valeurProm:"5",coleur:"rouge"}
    
     this.http.post('http://localhost:1000/produit/Createproduit',this.produit).subscribe(res=>{
    console.log(res)
    console.log("habib1")
    })
    console.log("habib")

  }
  Afficher(){
    this.http.get('http://localhost:1000/produit/GetAllProduit').subscribe(res=>{
    var rep:any  
    rep=res.valueOf()
    this.produits=rep

  })
      
  }

}
