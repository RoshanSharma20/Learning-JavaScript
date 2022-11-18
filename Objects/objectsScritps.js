//objects in javascript
const person = {
    name: 'Leonardo',
    shirt: 'white'
}

//accessing the properties of an object
//first method ->dot notation
console.log(person.name);

//second method ->bracket notation
console.log(person['shirt']);

//different ways to assign values in objects
//note if property does not exist then new property is added to the object
person.phone = '123'//dot notation
person['salary'] = 54000//bracket notation

console.log(person)

let introducer = (name, color) => {
    const person = {//object creation 
        name: name,
        shirt: color,
        assets: 10000,
        liabilities: 5000,
        networth: function () {//function inside an object 
            return this.assets - this.liabilities//use of this keyword
        }
    }

    const intro = `hello I am ${person.name} and I am wearing ${person.shirt} shirt and my networth is ${person.networth()}`//template 
    return intro
}

console.log(introducer('roshan', 'black'))