import houses from './houses.json';

interface House {
    name: string,
    planets: string[] | string;
}

interface HouseWithID extends House{
    id: number
}

type HouseFilterFn =  (house: House) => boolean;

// function findHouses(houses: string): HouseWithID[];
// function findHouses(houses: string, filter: (house: House) => boolean): HouseWithID[];

// function findHouses(houses: House[]): HouseWithID[];

function findHouses(houses: string| House[], filter?: (house: House)=> boolean): HouseWithID[];

function findHouses(houses: string|House[], filterFn?: HouseFilterFn) : HouseWithID[]{
    let housesArr: House[] = [];
    if(typeof houses === 'string') {
        housesArr = JSON.parse(houses) as House[];
    }else {
        housesArr = houses as House[];
    }
    if(filterFn === undefined) {
     
        return housesArr.map(house => {
            return {
                id: Math.random(),
                ...house
            }
        })
    }else {
        return housesArr.filter(filterFn).map(house => {
            return {
                id: Math.random()*10,
                ...house
            }
        });
    }
}

console.log(
    findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
  );

  console.log(
    findHouses(JSON.stringify(houses)
  ));
  
  console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));

  console.log(JSON.stringify(findHouses(houses)));
  

