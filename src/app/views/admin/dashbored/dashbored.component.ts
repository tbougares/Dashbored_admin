import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbored',
  templateUrl: './dashbored.component.html',
  styleUrls: ['./dashbored.component.css']
})
export class DashboredComponent implements OnInit {
  afficherProduit=false
  ajouterProduit=false
  constructor() { }

  ngOnInit(): void {
  }
  AfficherProduit(){
    this.afficherProduit=true
    

    this.ajouterProduit=false
  }
  AjouterProduit(){
    this.ajouterProduit=true
    this.afficherProduit=false
  }
}
