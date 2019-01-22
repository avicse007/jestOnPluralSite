let count =0;

export default{

    __setCount(__count){
        console.log("Settinng count to",__count);
        count = __count;
    },

    async GetNotifications(){
        console.warn("Good JOB USING MOCKS");
        return { count } ;
    }

}