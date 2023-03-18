const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
const PART_TIME_HR=4
const FULL_TIME_HR=8
const WAGE_PER_HR=20
let totalEmpHrs =0
let totalWage=0
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();

let calcDailyWage=(empHrs)=> {
return empHrs * WAGE_PER_HR;
}
let getworkingHours =(empCheck)=>{
    switch(empCheck){
        case 1:
            return PART_TIME_HR;
        case 2:
            return FULL_TIME_HR;
        default:
            return 0;    
    }
}
while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
totalWorkingDays < NUM_OF_WORKING_DAYS) {
totalWorkingDays++;
let empCheck = Math. floor (Math. random() * 10) % 3;
let empHrs = getworkingHours (empCheck) ;
totalEmpHrs += empHrs;
empDailyWageArr. push(calcDailyWage (empHrs)) ;
empDailyWageMap. set (totalWorkingDays, calcDailyWage (empHrs));
}
console. log(empDailyWageMap) ;
function totalWages(totalWage, dailyWage) {
return totalWage + dailyWage;
}
console. log(" Emp Wage Map totalHrs: " +
Array. from(empDailyWageMap. values ()). reduce(totalWages, 0));
