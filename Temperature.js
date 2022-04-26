let temperature = 0;

while(temperature < 40) {
    if (temperature < 10) {
        console.log("Temp =" + temperature + " cold!")
    } else if (temperature >=10 && temperature < 30){
        console.log("Temp =" + temperature + " warm!")
    } else {
        console.log("Temp =" + temperature + " AAAAA!")
    }
    temperature ++ 
} 
