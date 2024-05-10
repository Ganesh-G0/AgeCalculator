$(document).ready(() => {

$("#btn").click(() => {
  let ageInYears; 
  let ageInMonths; 
  let ageInDays; 
  
  const d = new Date();
  const currentYear = d.getFullYear();
  const currentMonth = d.getMonth() + 1;
  const currentDate = d.getDate();
  
  const inputYear = parseInt($("#year").val());
  const inputMonth = parseInt($("#month").val());
  const inputDate = parseInt($("#date").val());
  
  let months = [31, 30, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];   
  const totalDays = months[inputMonth - 1] - inputDate + currentDate;
  console.log(months[inputMonth - 1], inputDate, currentDate)
  /*
  console.log( months[inputMonth -1], inputDate, currentDate);
  console.log('Total Days: ', totalDays); calculateYears(); calculateMonthsDays();
  console.log(inputYear, inputMonth, inputDate);
  console.log(currentYear, currentMonth, currentDate);
  console.log(ageInYears, ageInMonths, ageInDays);
*/ 
  calculateYears(); 
  calculateMonthsDays();
  if (
    inputDate >= 0 && inputYear >= 0 && inputMonth >= 0) {    
    $('.yearsOld').text(ageInYears);
    $(".monthsOld").text(ageInMonths);
    $(".daysOld").text(ageInDays);  
  } else { alert("Fill the Required Fields"); }; 

  
  function calculateMonthsDays () {
    if (currentMonth == inputMonth ) {
      if (currentDate >= inputDate) {
        ageInMonths =  currentMonth - inputMonth ; 
        ageInDays = currentDate - inputDate;       
      }
      else if (currentDate < inputDate) {
        ageInMonths =  12 - 1 ; 
        if (months[currentMonth] == 31 || months[inputMonth - 1] == 31) {
          ageInDays = totalDays - 1;       
        }
        else {
          ageInDays = totalDays;
        }
      }
    }
    else if (currentMonth < inputMonth) {
      if (currentDate >= inputDate) {
        ageInMonths = 12 - inputMonth + currentMonth ; 
        ageInDays = currentDate - inputDate;       
      }
      else if (currentDate < inputDate) {
        ageInMonths =  12 - inputMonth + currentMonth - 1 ; 
        if (months[currentMonth] == 31 || months[inputMonth - 1] == 31) {
          ageInDays = totalDays - 1;       
        }
        else {
          ageInDays = totalDays;
        }
      }
    }
    else if (currentMonth > inputMonth) {
      if (currentDate >= inputDate) {
        ageInMonths =  currentMonth - inputMonth; 
        ageInDays = currentDate - inputDate;       
      }
      else if (currentDate < inputDate) {
        ageInMonths =  currentMonth - inputMonth - 1; 
        if (months[currentMonth] == 31 || months[inputMonth - 1] == 31) {
          ageInDays = totalDays - 1;       
        }
        else {
          ageInDays = totalDays;
        }
      }
    }  
  } 
  function calculateYears() {
    if (currentMonth > inputMonth) { ageInYears = currentYear - inputYear; }
    else if (currentMonth == inputMonth) { 
      if (currentDate >= inputDate) { ageInYears = currentYear - inputYear; }
      else { ageInYears = currentYear - inputYear - 1; }
    } 
    else { ageInYears = currentYear - inputYear - 1; }
  }  
});
  
console.log();
});
