import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  produit:any
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

  }
  ajouter(){
    this.produit={nameProd:"Parfun",valeurProm:"50"}
    this.http.post('http://localhost:1000/produit/Createproduit',this.produit).subscribe(res=>{
    console.log(res)
    console.log("habib1")
    })
    console.log("habib")

  }

}
