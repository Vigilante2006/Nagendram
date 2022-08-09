function gradeingSystem(score){
    if(score>=90){
        console.log("Grade A");
    }
    else if(score>80 && score<=89){
        console.log("Grade B");

    }else if(score>60 && score<=79){
        console.log("Grade C");
    }else if(score>33 && score<=59){
        console.log("Grade D");

    }else{
        console.log("Fail");
    }
}

gradeingSystem(98);
gradeingSystem(85);
gradeingSystem(68);
gradeingSystem(46);
gradeingSystem(20);









/*function gradeingSystem(marks){
    if(marks>=90){
        console.log("Grade A");

    }else if(marks>80 && marks<=89){
        console.log("Grade B");
    }else if(marks>60 && marks<=79){
        console.log("Grade C");

    }else if(marks>33 && marks<=59){
        console.log("Grade D");
    }else {

        console.log("Fail");
    }
}
gradeingSystem(98);
gradeingSystem(85);
gradeingSystem(75);
gradeingSystem(55);
gradeingSystem(20);*/
