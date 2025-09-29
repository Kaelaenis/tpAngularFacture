import { Component } from '@angular/core';
import { Facture } from '../facture';
import { Item } from '../item';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent {
  item1 : Item = { 
    reference : 'A1', 
    marque : 'BrandA', 
    prixUnitaire : 100 
  };
  item2 : Item = { 
    reference : 'B2', 
    marque : 'BrandB', 
    prixUnitaire : 200 
  };
  
  facture: Facture = {
    client: 'John Doe',
    lignes: [
      { item: this.item1, quantite: 2, prixLigne: function() { return this.item.prixUnitaire * this.quantite; } },
      { item: this.item2, quantite: 1, prixLigne: function() { return this.item.prixUnitaire * this.quantite; } }
    ],
    prixtotal: () => {
      return this.facture.lignes.reduce((total, ligne) => total + ligne.prixLigne(), 0);
    }
  };
}
