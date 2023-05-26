import { Component, OnInit,ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataProduitService } from '../service/data-produit.service';
//
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
//pagination
import {PageEvent} from '@angular/material/paginator';



@Component({
  selector: 'app-all-produits',
  templateUrl: './all-produits.component.html',
  styleUrls: ['./all-produits.component.css']
})
export class AllProduitsComponent implements OnInit {
  
  TableauProduits:any[]=[] 
  res:any
  rechercheRef=""
  rechercheName=""
  rechercheQuantite=""
  
  class="Nosidenav"
  produitModifier:any
  affichFormModif=false

  


  //
  myControl = new FormControl<string | any>('');
  
  filteredOptions: Observable<any[]>;
  //
 

  
  constructor(public dp:DataProduitService) {
    this.dp.getAllProduit().subscribe(res=>{
      var rep:any  
      rep=res.valueOf()
      this.dp.Produits=rep;
      this.TableauProduits=this.dp.Produits 
      console.log(rep)}) 
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const ref= typeof value === 'string' ? value : value?.name;
        return ref? this._filter(ref as string) : this.dp.Produits.slice();
      }),
      
    );
    
   
    }

  ngOnInit(): void {
   
//autocomplete
this.filteredOptions = this.myControl.valueChanges.pipe(
  startWith(''),
  map(value => {
    const ref= typeof value === 'string' ? value : value?.name;
    return ref? this._filter(ref as string) : this.dp.Produits.slice();
  }),
  
);

  
}


//
RechercheParRef(e:any){
    this.dp.Produits=this.TableauProduits
    console.log("taher")
    var text=e.target.value
    console.log(text)
    
    this.dp.Produits=this.dp.Produits.filter(ele=>ele.refProd.trim().includes(text.trim())==true )

    this.dp.Produits=this.dp.Produits.filter(ele=>ele.nameProd.trim().includes(this.rechercheName.trim())==true )

    this.dp.Produits=this.dp.Produits.filter(ele=>ele.quantite.trim().includes(this.rechercheQuantite.trim())==true )

  }
  
  RechercheParName(name:any){

    this.dp.Produits=this.TableauProduits
    this.dp.Produits=this.dp.Produits.filter(ele=>ele.nameProd.trim().includes(name.target.value.trim())==true )
    this.dp.Produits=this.dp.Produits.filter(ele=>ele.quantite.trim().includes(this.rechercheQuantite.trim())==true )
    this.dp.Produits=this.dp.Produits.filter(ele=>ele.refProd.trim().includes(this.rechercheRef.trim())==true )

  }
  RechercheParQuantite(quantite:any){
    //var QuantiteR=quantite.target.value
    
    this.dp.Produits=this.TableauProduits
    this.dp.Produits=this.dp.Produits.filter(ele=>ele.quantite.trim().includes(quantite.target.value.trim())==true )
    this.dp.Produits=this.dp.Produits.filter(ele=>ele.nameProd.trim().includes(this.rechercheName.trim())==true )
    this.dp.Produits=this.dp.Produits.filter(ele=>ele.refProd.trim().includes(this.rechercheRef.trim())==true )


  }
  delete(id:any,i:number){
    console.log("eeee")
    this.dp.deleProduit(id).subscribe(res=>{

      var rep:any  
      rep=res.valueOf()
      this.dp.Produits=rep; 
      console.log(rep)
      if(rep.message==true){
        alert("Le Produit est supprimé")
        this.dp.Produits=rep.prods
      }else{
        alert("Le Produit est nn supprimé")
        }
    })
  }
  openNav(i:any){
    this.affichFormModif=true
   this.produitModifier= this.dp.Produits[i]
   console.log( this.produitModifier)
  this.class="sidenav"
}
Update(){
  console.log( this.produitModifier)
  this.dp.UpdateProduit(this.produitModifier._id,this.produitModifier).subscribe(res=>{

      var rep:any  
      rep=res.valueOf()
      this.dp.Produits=rep; 
      console.log(rep)
    }
  )
}

  closeNav(){
    this.class="Nosidenav"
  }

  //
 /* displayFn(user: any): string {
    return user && user.refProd ? user.refProd : '';
  }*/



  private _filter(refEnt: string): any[] {
    const filterValue = refEnt.toLowerCase();
   
    return this.dp.Produits.filter(ele => ele.refProd.toLowerCase().includes(filterValue));
  }

  verif(option:any){
    console.log(option)
  }
 


   
}
