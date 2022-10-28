abstract class StreetFighter {
   move(){}
   fight() {
    console.log(`${this.getName} Fighting`);
    
   }
   abstract getSpecialAttack(): string;
   abstract get getName(): string;
}

// const ryu : StreetFighter = new StreetFighter();
class Ryu extends StreetFighter {
    getSpecialAttack(): string {
        return 'Hadoken';
    }

    get getName(): string {
        return "Ryu";
    }
}

const ryu : StreetFighter = new Ryu();
console.log(ryu.getSpecialAttack());
ryu.fight();