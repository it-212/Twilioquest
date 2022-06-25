class TargetingSolution{
    constructor(objLiteral){
        this.x = objLiteral.x;
        this.y = objLiteral.y;
        this.z = objLiteral.z;
    }

    target(){
        return "(" + this.x + ", " + this.y + ", " + this.z + ")";
    }
}