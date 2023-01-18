function score(throws){
    if(!Array.isArray(throws))
        return new Error(`expected input to be array but got ${typeof throws}`);
    
    let frameCount=0;
    let frameThrow=0;
    let prevThrowScore=0;
    let result=0;

    for(let i=0; i<throws.length; i++){
        if(frameThrow==0 && throws[i]==10){
            result += 10+throws[i+1]+throws[i+2];
            frameCount++;
            prevThrowScore = 0;
        }
        if(frameThrow==1 && throws[i]==10-prevThrowScore){
            result += prevThrowScore+throws[i]+throws[i+1];
            frameThrow = 0;
            frameCount++;
        }
        if(frameThrow==1){
            result += prevThrowScore+throws[i];
            frameThrow = 0;
            frameCount++;
        }
        frameThrow++;
        prevThrowScore = throws[i];
    }
    return result;
}

console.log(score([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));

function bestScore(){

}

module.exports = {score, bestScore};
