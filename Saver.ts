//Class Saver qui utilise l'interface.
import {Savable} from './interface-save';
export class Saver{
    constructor(private saves: string[] = []){}

    save(tosave : Savable):void {
        this.saves.push(tosave.getinfos());
    }

    display() {
        console.log(this.saves);
    }
}