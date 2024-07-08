var totalCost;

totalCost = function (callOutCharge, costPerHour, numberOfHours, discount) {
    return callOutCharge + costPerHour * numberOfHours - discount;
};

// Cost for 12 hours of work
var costFor12Hours = totalCost(30, 40, 12, 0);
console.log("Cost for 12 hours: $" + costFor12Hours);

// Total cost for 3 hours with a $20 discount
console.log("$" + totalCost(30, 40, 3, 20));