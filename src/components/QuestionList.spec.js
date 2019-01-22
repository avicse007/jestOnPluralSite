describe('The question list ',()=>{
    beforeEach(()=>{
        console.log("Before Each");
    });

    beforeAll(()=>{
        console.log("Before All!!");
    });

    it('should not regress',()=>{
        expect(2+2).toEqual(4);
    });

    it.skip('should be meaning of life',()=>{
        expect(2+2).toEqual(46);
    });

    afterEach(()=>{
        console.log("After Each!!");
    });


    afterAll(()=>{
        console.log("After All!!");
    });


});