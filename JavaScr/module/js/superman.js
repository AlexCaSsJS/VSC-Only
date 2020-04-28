
import { Hero } from './hero.js';
 
class Superman extends Hero {
    firePrimary() {
        this.mana -= 5;
    }
    fireSecondary() {
        this.mana -= 1;
    }
    reciveHit() {
        this.life -= 0.1;
    }
}

export { Superman }