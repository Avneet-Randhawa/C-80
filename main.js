var name_of_the_students_array=[];
function submit(){
    display_student_name=[];
    for (i=1;i<=4;i++){
        var name_of_student=document.getElementById("name_of_the_student_"+i).value;
        console.log(name_of_student);
        name_of_the_students_array.push(name_of_student);
        
    }
    console.log(name_of_the_students_array);
    var length=name_of_the_students_array.length;
    for(a=0;a<length;a++){
        display_student_name.push("<h4> Name -"+name_of_the_students_array[a]+"</h4>");
        console.log(display_student_name);
    }
    console.log(display_student_name);
    document.getElementById("display_name_with_commas").innerHTML=display_student_name;
    var remove_comas=display_student_name.join(" ");
    console.log(remove_comas);
    document.getElementById("display_name_without_commas").innerHTML=remove_comas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
    document.getElementById("update_button").style.display="inline-block";
}
function sorting() {
    name_of_the_students_array.sort();
    console.log(name_of_the_students_array);
    var sorting=[];
    var length = name_of_the_students_array.length;
    for (a=0;a<length;a++){
        sorting.push("<h4>Name -"+name_of_the_students_array[a]+"</h4>");
        console.log(sorting);
    }
    console.log(sorting);
    var remove_comas=sorting.join(" ");
    console.log(remove_comas);
    document.getElementById("display_name_without_commas").innerHTML=remove_comas;
}
function update() {
    document.getElementById("display_name_without_commas").innerHTML="<h1>"+name_of_the_students_array+"</h1>";
}


