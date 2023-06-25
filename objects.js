let car= {
    year: 2011,
    model: 'Rxtli90',
    make: 'Benz',
    theprice : function() {
        return 9000;
    },
    pricedescription: function() {
        console.log(this. make + ' ' + this. model );
    }
}
car.pricedescription()
console.log(car.year)

let studentdata = [
    {firstname:'Catherine', lastname:'Nkwor', age:'12', class:'JS2 Gold'},
    {firstname:'Christiana', lastname:'Obi', age:'18', class:'SS3 Diamond'},
    {firstname:'Peter', lastname:'Ezenagu', age:'15', class:'SS1 Silver'},
]

console.log(studentdata)
