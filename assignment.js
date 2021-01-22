// git hub code link
//convert kilometer to meter
function kilometerToMeter(kilometer){
    if(kilometer<0){
        return console.log("distance can not be negative . please input a vaild number of kilometer")
    }
    var meter= kilometer*1000;
    return meter;
}
//console.log(kilometerToMeter(-5));

// budget calculation
function budgetCalculator( watch,phone,laptop){
    if(watch<0 || phone<0 || laptop<0){
        return console.log ("you inpute invalid format of quantitiy. please check it !")
    }
    
    var WatchCost= watch*50;
    var PhoneCost=phone*100;
    var LaptopCost=laptop*500;
    var totalcost= WatchCost + PhoneCost + LaptopCost;
    return totalcost;
    
}
console.log(budgetCalculator(2,0,-1));

//hostel cost calculation 
function hotelCost(day){
    var total_cost=0;
    if(day<=10){
        total_cost= day*100;
    }
    else if(day>10 && day<=20){
        var day1=(day-10);
        total_cost= 1000 +(day1*80);
    }
    else if (day>20){
        var day2=(day-20);
        total_cost= 1800+(day2*50);
    }
   return total_cost;
}
//console.log(hotelCost(25));

// find the lagest name of my friend list
function megaFriend(ar){
    
}

var ar=['rana','faysal', 'roni']
//console.log(ar);
