import { Ligne } from "./ligne";

export interface Facture {
    client: string;
    lignes: Array<Ligne>;
    prixtotal(): number;
}
