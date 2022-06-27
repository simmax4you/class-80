student_array = [];
function submit()
{
    var display_student_array = [];
    for(j=1; j<=4; j++)
    {
        var student_name = document.getElementById("name_of_the_student_"+j).value;
        console.log(student_name);
        student_array.push(student_name);
    }
    console.log(student_array);
    var length_of_array = student_array.length;
    console.log(length_of_array);
    for(var k=0; k<length_of_array; k++)
    {
        display_student_array.push("<h4>Name -"+student_array[k]+"</h4>");
        console.log(display_student_array);
    }
    console.log(display_student_array);
    document.getElementById("display_name_with_commas").innerHTML=display_student_array;
    var remove_commas = display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML= remove_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting()
{
    student_array.sort();
    console.log(student_array);
    var display_student_array_sorting = [];
    var length_of_array = student_array.length;
    console.log(length_of_array);
    for(var k=0; k<length_of_array; k++)
    {
        display_student_array_sorting.push("<h4>Name -"+student_array[k]+"</h4>");
        console.log(display_student_array_sorting);
    }
    var remove_commas = display_student_array_sorting.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML= remove_commas;
}
function new_update()
{
    document.getElementById("display_name_without_commas").innerHTML="<h1>"+student_array+"</h1>";
}