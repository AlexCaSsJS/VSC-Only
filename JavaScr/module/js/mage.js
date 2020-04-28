
import { Hero } from './hero.js';

class Mage extends Hero {
    firePrimary() {
        this.mana -= 20;
        this.life += 2;
    }
    fireSecondary() {
        this.mana -= 10;
        this.life += 1;
    }
    reciveHit() {
        this.life -= 10;
    }
}

export { Mage }