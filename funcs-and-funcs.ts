interface Coordinate {
    x: number;
    y: number;
}

 function receiveCoordinate(coordinate: Coordinate): Coordinate;

 function receiveCoordinate(str: string): Coordinate;

 function receiveCoordinate(x: number, y: number) : Coordinate;

 function receiveCoordinate(arg1: unknown, arg2?: unknown) : Coordinate|null {
    if(typeof arg1 === 'object') {
        return {
            ...(arg1 as Coordinate)
        }
    }
    else if(typeof arg1 === 'string') {
        let xAndY: string[] = arg1.split(',');
        let xstr = xAndY[0];
        let ystr = xAndY[1];
        const x: number = Number.parseInt (xstr.split(':')[1]);
        const y:number = Number.parseInt(xstr.split(':')[1]);
        return {
            x,
            y
        }
    }
    else if(typeof arg1 === 'number' && typeof arg2 === 'number') {
        return {
            x: arg1 as number,
            y: arg2 as number
        }
    }else {
        return null;
    }
}

console.log(receiveCoordinate({x: 11, y: 22}));
console.log(receiveCoordinate(11,  22));
console.log(receiveCoordinate("{x:11,y:22}"));