// 4 On test et appel les func avec des valeur concrete. (node Dist/interface-test).

import {Saver} from './Saver';
import {Savable} from './interface-save';
import {Chien} from './chien';

const saver = new Saver();
saver.save(new Chien('toto', 'tata')); //on peut l'utiliser a plusieur reprise.
saver.save(new Chien('titi', 'tutu'));
saver.display();
//Supprimer une valeur de l'array.
saver.delete(1);
saver.display();