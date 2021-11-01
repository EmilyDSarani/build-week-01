const exponent = require ('./pow')

//the goal of this test is that I want it to be able to read any of the numbers I would put in for the actualy number and the exponent number
// as of 3:25 Central Time (2 hours ahead of pacific time) my test is coming up as NaN

describe ('Exponent', () => {
    it('should multiply number acording to exponent', async () => {
        const total = exponent(3, 2);
        
        expect(total).toEqual(9);
    });
});