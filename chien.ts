// 3 On crée une class chien avec la function getinfos de l'interface.

import {Savable} from './interface-save';

export class Chien implements Savable{ //si implement d'autre interface ajouter une virgule et ajouter la nouvelle interface sans oublier d'importerle fichier.
    nom: string;
    race: string;

    constructor(nom:string, race:string) {
        this.nom = nom;
        this.race = race;
    }

    getinfos() {
        return "Nom du chien:" + this.nom + ";Race du chien: " + this.race;
    }
}