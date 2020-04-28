
import {Hero} from './hero.js'

class Orc extends Hero {
    firePrimary(){
        this.mana -= 5;
    }
    fireSecondary() {
        this.mana -= 1;
    }
    reciveHit(){
        this.life -= 1;
    }
}

export {Orc}