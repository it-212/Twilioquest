class Ducktypium{
    colors = ["red", "blue", "yellow"];
    calibrationSequence = [];

    constructor(crystalColor){
        
        if(crystalColor == "red" || crystalColor == "blue" || crystalColor == "yellow"){
            this.color = crystalColor;
        }else{
            let error = new Error("Wrong color");
            throw error;
        }

        
    }

    refract(string){
        if(string == "red" || string == "blue" || string == "yellow"){
            if(string == this.color){
                return string;
            }else{
                let twoColors = [];
                twoColors.push(string);
                twoColors.push(this.color);
                let blend = {
                    red: 0,
                    blue: 0,
                    yellow: 0
                };

                for(let i = 0; i < 2; i++){
                    if(twoColors[i] == "red"){
                            blend.red=1;
                    }
                    else if(twoColors[i] == "blue"){
                        blend.blue=1;
                    }
                    else{
                        blend.yellow=1;
                    }
                }
                
                if(blend.red && blend.blue){
                    return "purple";
                }else if(blend.red && blend.yellow){
                    return "orange";
                }else{
                    return "green";
                }
            }
        }else{
            let error = new Error("Wrong color");
            throw error;
        }
    }

    calibrate(numberArray){
        numberArray = numberArray.sort();
        let newArray = numberArray.map(one => one*3);
        this.calibrationSequence = newArray;
    }
}

const dt = new Ducktypium("red");
console.log(dt.refract("blue"));