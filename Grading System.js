function calculateGrade (score){
    if (score>= 90 && score<=100){
        return "A";
    } else if(score >=80 ){
        return"B";

    }else if( score >=70 ){
        return"C";

    }else if( score >= 60 ){
        return"D";
    }else if(score <= 59){
        return"F";
    } else{
        return"invalid input";
    }

}

let score = 89;
let grade = calculateGrade(score);
console.log ("Grade: ", grade);