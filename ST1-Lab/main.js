function calculateResult() {
     let n = document.getElementById("Subjects").value;
     let total = 500;
    let get = 0;
    for(let i=1; i<=n; i++){
        let marks = parseFloat(prompt("Enter marks for Subjects " + i));
        get += marks;
    }
    let percentage;
    percentage = (get/total)*100;

    let average = get / n;
    let grade;

    if(average >= 90){
       grade ="Distinction";
    }else if(average >=75){
        grade = "First Class";
    }else if(average >= 60){
        grade = "Second Class";
    }else{
        grade ="Fail";
    }



     document.getElementById("result").innerHTML =
        "Total Marks: " + get + "<br>" +
        "Percentage : " + percentage +"%" + "<br>" +
        "Average Marks: " + average + "<br>" +
        "Grade: " + grade;

}