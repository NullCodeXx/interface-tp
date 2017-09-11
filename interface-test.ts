// 4 On test et appel les func avec des valeur concrete. (node Dist/interface-test).

import {Saver} from './Saver';
import {Chien} from './chien';

const saver = new Saver();
saver.save(new Chien('Milo', 'jack ressel')); //on peut l'utiliser a plusieur reprise.
saver.save(new Chien('Nikita', 'staff america'));
saver.save(new Chien('Rex', 'rot'));
saver.display();
//Supprimer une valeur de l'array.
saver.delete(1);
saver.display();