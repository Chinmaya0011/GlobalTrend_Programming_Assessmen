//Q-Implement a simple HashMap class with put, get, and remove methods.

class HashMap{
    constructor(){
        this.map={};
    }

    put(key,value){
        this.map[key]=value;
    }

    get(key){
        return this.map[key];
    }

    remove(key){
        if(this.map.hasOwnProperty(key)){
            delete this.map[key]
        }
    }
}

const myMap=new HashMap();
myMap.put("a",1);
myMap.put("b",2);
myMap.put("c",3);

console.log(myMap.get("b"));
myMap.remove("b");
console.log(myMap.get("b"))