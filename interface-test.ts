import {Saver} from './Saver';
import {Savable} from './interface-save';
import {Chien} from './chien';


const saver = new Saver();
saver.save(new Chien('toto', 'tata'));
saver.save(new Chien('titi', 'tutu'));
saver.display();