class Hero {
    constructor(name, life, mana) {
        this.name = name;
        this.life = life;
        this.mana = mana;
    }
    firePrimary() {}
    fireSecondary() {}
    reciveHit() {}
    isAlive() {
        return this.life > 0;
    }
}

export { Hero }