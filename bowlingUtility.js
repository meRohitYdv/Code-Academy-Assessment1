function score(throws){
    if(!Array.isArray(throws))
        return new Error(`expected input to be array but got ${typeof throws}`);
    
    let frameCount=0;
    let frameThrow=0;
    let prevThrow=0;
    let output=0;

    for(let i=0; i<throws.length; i++){
        if(frameThrow==0 && throws[i]==10){
            result += 10+throws[i+1]+throws[i+2];
            frameCount++;
        }
        if(frameThrow==1 && throws[i]==10-prevThrow){
            result += prevThrow+throws[i]+throws[i+1];
            frameThrow = 0;
        }
        if(frameThrow==1){
            result += prevScore+throws[i];
            frameThrow = 0;
        }
        frameThrow++;
    }
    return result;
}

function bestScore(){

}

module.exports = {score, bestScore};
