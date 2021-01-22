function kilometerToMeter(kilometer){
    if(kilometer<0){
        console.log("distance can not be negative . please input a vaild number of kilometer")
    }
    var meter= kilometer*1000;
    return meter;
}
//console.log(kilometerToMeter(15.5));
function budgetCalculator( watch,phone,laptop){
    var watchCost= watch*50;
    var PhoneCost=phone*100;
    var LaptopCost=laptop*500;
    var totalcost= watchCost+PhoneCost+ LaptopCost;
    return totalcost;
}
//console.log(budgetCalculator(2,8,1));
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
function megaFriend(){

}
