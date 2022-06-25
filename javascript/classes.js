class Materializer{
    activated = false;
    constructor(arg1){
        this.target = arg1;
    }

    activate(){
        this.activated = true;
    }

    materialize(){
        if(this.activated == true){
            return this.target;
        }
        else{
            return undefined;
        }
    }
}