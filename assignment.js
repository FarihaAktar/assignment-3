
// convert kilometers to meters formula   

function kilometerToMeter(kilo) {
    if (typeof (kilo) == "string") {
        return "Please Input a Number!";
    }
    else if (kilo < 0) {
        return "Please Input a Positive Value!"
    }
    else if (kilo == null) {
        return "Please Enter a Value...";
    }
    else {
        var meter = kilo * 1000;
        return meter;
    }
}


//budget calculation of watch, phone & laptop

function budgetCalculator(watch, phone, laptop) {
    if (laptop == null) {
        return "Input a number of watch, phone & laptop you want to buy."
    }
    else if (watch % 1 != 0 || phone % 1 != 0 || laptop % 1 != 0) {
        return "Enter integer numbers!"
    }
    else if (watch < 0 || phone < 0 || laptop < 0) {
        return "Input positive values!"

    }
    else {
        var value1 = watch * 50;
        var value2 = phone * 100;
        var value3 = laptop * 500;
        var totalValue = value1 + value2 + value3;
        return totalValue;
    }
}



// Total cost of Hotel stay

function hotelCost(stay) {
    if (stay == null || stay < 0 || stay < 1 || stay % 1 != 0) {
        return "How many days you want to stay? Enter a positive integer number!"
    }
    else if (stay <= 10) {
        var money = stay * 100;
        return money;
    }
    else if (stay <= 20) {
        var firstTenDays = 100 * 10;
        var secondTenDays = (stay - 10) * 80;
        var totalMoney = firstTenDays + secondTenDays;
        return totalMoney;
    }
    else if (stay > 20) {
        var firstTenDays = 100 * 10;
        var secondTenDays = 80 * 10;
        var restDays = (stay - 20) * 50;
        var totalMoney = firstTenDays + secondTenDays + restDays;
        return totalMoney;
    }
    else {
        return "Input an integer number!"
    }
}


//which string is longer than the other in an array?

function megaFriend(string) {
    if (typeof (string) == "string" || typeof (string) == "number" || string == null) {
        return "Enter an array of string as an input!"
    }
    else if (string.length == 0) {
        return "You can't input an empty array!";
    }
    else {
        var bigString = string[0];
        for (var i = 0; i < string.length; i++) {
            var str = string[i];
            if (str.length > bigString.length) {
                bigString = str;
            }
        }
    }
    return bigString;
}

