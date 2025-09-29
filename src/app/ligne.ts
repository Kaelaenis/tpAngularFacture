import { Item } from "./item";

export interface Ligne {
    item: Item;
    quantite: number;
    prixLigne(): number;
}
