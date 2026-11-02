let salaries = [35000, 45000, 65000, 25000, 89000]
let newSalary = salaries.map((salary) => 
{
    return salary = salary + 5000
} )
console.log(newSalary)


let names = ["jaya", "Bala", "Akash","Prakash"]
let capitalize = names.map((name) =>
{
   return name.toUpperCase();
})
console.log(capitalize)

let marks = [20,49,23,43,54,76,86,23,55,42,22,12]
let result = marks.map((mark) => mark <=40 ? 40:mark)
console.log(result);

let doy = [2002,1994,1998, 1994, 1943, 1873, 2007]
let age = doy.map((year) => 
{
    return 2026-year
})
console.log(age)

let prices = [123,234,345,678,890]
let priceswithgst = prices.map((price) =>
{
    let calc = (price + ((price*18)/100))
    return calc
})
console.log(priceswithgst)

let values = [10,20,44,33,66,33]
let res = values.map((value, index) => {
 return value = value + index
})
console.log(res)

let employees = [
    {name:"jaya", age:"24"},
    {name:"bala", age:"24"},
    {name:"tharun", age:"24"},
    {name:"sk", age:"24"},
    {name:"kamalesh", age:"24"},
    {name:"akki", age:"24"},
]
console.log(employees[3].name)
let empnames = employees.map((employee) => 
{
    return employee.name
})
console.log(empnames)

let list1 = [10,30,29,39,40,28,83,67, 10,34, 23,43,23,43,3,10,20,30]
let set1 = new Set(list1)
let set2 = [...new Set(list1)]
console.log(set1)
console.log(set2)

let str = "a quick Brown fox 4jumps over the lay dog"
let charArray = str.replaceAll(" ", "").replace(/[^a-zA-Z]/g, "").toLowerCase().split("")
let uniqueArray = [...new Set(charArray)].sort()
let final = uniqueArray.join("").trim()
if(final === "abcdefghijklmnopqrstuvwxyz")
{
    console.log("pangram")
}
else
{
    console.log("not pangram")
}

console.log([2,32,134,1,23].sort((a,b) => b - a))

console.log(["a","A","c","C","b","B"].sort())
console.log(["a","A","c","C","b","B"].sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase())))
console.log(["a","A","c","C","b","B"].sort((a,b) => b.toLowerCase().localeCompare(a.toLowerCase())))


const cart = [
    {productname: "soap", prize: 120, quantity: 6},
    {productname: "shampoo", prize: 150, quantity: 2},
    {productname: "chocalates", prize: 25, quantity: 5}, 
];

const itemTotals = cart.map(item => item.prize * item.quantity);

let totalprice= 0
for(let i = 0; i<itemTotals.length;i++)
{
    totalprice=totalprice + itemTotals[i]
}

// 3. Apply the 3% discount if total is greater than 1000
const finalPrize = totalprice > 1000 ? totalprice - (totalprice * (5/100)) : totalprice;

console.log("Subtotal:", totalprice); // 905
console.log("Final Price:", finalPrize); // 905