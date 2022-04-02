const Database = require('../../db')

class Group {

    collection;

    constructor() {
        //Set collection
        this.collection = Database.collection('group')
    }

    getAll(){
        return new Promise((accept, reject)=>{
            this.collection.find().toArray((err, results) => {
                if(err){
                    reject(err);
                }else{
                    accept(results);
                }
            });
        });
        /*SIMULAR PROMESA
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([]); //Mock data
            }, 1000);
        });*/
}}

module.exports = Group;