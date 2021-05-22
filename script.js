function display(){
    var height= document.getElementById("height").value
    var weight= document.getElementById("weight").value

    var BMI = weight/(height*height);

if(BMI<18.5)
{
    document.getElementById('para').innerHTML="You are underweight"
}
else if(BMI>18.5 && BMI<24.9)
{
    document.getElementById('para').innerHTML="You are normal"
}
else if(BMI>=25 && BMI<=29.9)
{
    document.getElementById('para').innerHTML="You are overweight"
}
else if(BMI>30)
{
    document.getElementById('para').innerHTML="You are obese"
}
}