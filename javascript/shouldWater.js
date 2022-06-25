const arg1 = process.argv[2];
const arg2 = process.argv[3];

const lifeStatus = Number(arg1);
const drynessLevel = Number(arg2);

if(lifeStatus === 0 && drynessLevel > 10){
   console.log("WATER");
}
