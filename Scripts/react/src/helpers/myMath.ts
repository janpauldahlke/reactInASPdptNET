
export default class MyMath{
    //contructor
    constructor(){

    }
    //
    public calculateCircle(radius: number) : number {
        return Math.PI * (radius) * 2
    }

    public calculateRectangle(width: number, height: number) : number {
        return width * height
    }
}

