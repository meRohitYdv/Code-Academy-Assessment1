const {score, bestScore} = require('../bowlingUtility');

describe('bowling utility', ()=>{
    
    describe('score', ()=>{
        
        it('should throw error when array is not passed',()=>{
            expect( ()=>{ score('testString') }).toThrow(Error);
        });       

        it('should throw error when array contains other datatypes than numbers', ()=>{
            expect( ()=>{ score(['testString']) }).toThrow(Error);
        });
        
        it('should throw error when game is not 10 frame game', ()=>{
            expect( ()=>{ score([1,2,2,4]) }).toThrow(Error);
        });
        
        it('should calculate score when game is 10 frame game', ()=>{
            const result1 = score([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]);
            expect(result1).toBe(90);
            const result2 = score([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]);
            expect(result2).toBe(30);
            const result3 = score([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            expect(result3).toBe(16);
        });

    });
    
    describe('best score', ()=>{
        
        it('should throw error when input array is not passed',()=>{
            expect( ()=>{ bestScore('testString') } ).toThrow(Error);
        });       

        
        it('should throw error when input array contains other datatypes than array', ()=>{        //as expected array is 2D array
            expect( ()=>{ bestScore(['testString']) } ).toThrow(Error);
        });
        
        it('should throw error when game is not 10 frame game', ()=>{
            expect( ()=>{ bestScore([1,2,2,4]) } ).toThrow(Error);
        });
        
        it('should calculate the best score when game is 10 frame game', ()=>{
            const result = bestScore([
                [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10],
                [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ]);
            
            expect(result).toBe(90);
        });

    });
});