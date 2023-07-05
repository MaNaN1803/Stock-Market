async function getData(){
let response = await fetch('        "https://firebasestorage.googleapis.com/v0/b/pulsestock-93663.appspot.com/o/model.json?alt=media&token=c81ee734-0ef1-4018-9757-99b104889104&_gl=1*9j1prr*_ga*NzYxMzc1MzcwLjE2ODYzMjQ4MDU.*_ga_CW55HFfrbg8NVT*MTY4NjQ2MTAwNC4xMC4xLjE2ODY0NjIyODUuMC4wLjA.")
let data = await response.json()
return data;
}
getData().then(data=>console.log(data));

