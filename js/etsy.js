//for the first one I had this function add all of the prices together and found the average by dividing the sum by how many items there were to get the average 

// var totalPrice = [12,20,50,25,41.95,5.75,32.99,15,28.95,24.95,18,2.99,38,20,28,13.59,17,48,15,14,80,22,6.99,6.99,3.50].reduce(function(prev,next) then I saw I shouldn't do this because the numbers could change and learned this was the right solution
    
    var sum= 0;
    items.forEach(function(item) {
        sum += item.price;
    });
   

console.log('the average price is ' + (Math.round((sum/ items.length)* 100) / 100));


//2

var cheapItems = items.filter(function(item) {
  return (item.price >= 14 && item.price <= 18 && item.currency_code === "USD");
});

cheapItems.forEach(function(item) {


console.log(item.title);

});

//3

var searchTerm = 'GBP';
var currency = items.filter(function(item) {
    return item.currency_code.includes(searchTerm);
}); 

currency.forEach(function(item) {


console.log(item.title);

});

//4 

var search = 'wood'
var wooden = items.filter(function(item) {
    return item.description.includes(search);
});

wooden.forEach(function(item) {


console.log(item.title);
});

//5

var moreThanEight = items.filter(function(item) {
  return (item.materials.length >= [8]);
});
moreThanEight.forEach(function(item){
console.log(item.title);
});
//6

var made = 'i_did';
var created = items.filter(function(item) {
    return item.who_made.includes(made);
});

created.forEach(function(item) {

console.log(item.title);
});