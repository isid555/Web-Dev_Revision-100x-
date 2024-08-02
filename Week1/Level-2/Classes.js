// Classes means a structure of something that is reusable

class Animal{
    constructor(name,legCount,speak) {
        this.name = name;
        this.legCount = legCount;
        this.speak = speak;
    }


}


//class is a blueprint ,like a blueprint odf an apartment
//the actual house/apartment is an object
let dog = new Animal("Dog",4,"Bark");
