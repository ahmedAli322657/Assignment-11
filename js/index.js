
let btn = document.querySelector('.btn');
let search = document.querySelector('#search');
let country = search.value





btn.addEventListener('click', function () {
    timeZone(search.value)

})


async function timeZone(country) {
    let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=044e2fec39824a088b683502240712&q=${country}`);
    let data = await response.json();
    countryName = data.location.name
    temp = data.current.temp_c;
    condition = data.current.condition;
    windSpeed = data.current.wind_mph;
    humidity = data.current.humidity;
    wind_dir = data.current.wind_dir;
    is_day = data.current.is_day;
    localtime = data.location.localtime;
    dewpoint_c = data.current.dewpoint_c

    // Day name
    days = ["Sunday", "Monday", "Tuesday", "Wendnesday", "Thursday", "Friday", "Saturday"];
    dayNumber = is_day;
    dayName = days[dayNumber];

    // Day number
    specificDate = new Date(localtime);
    dayOfMonth = specificDate.getDate();

    // Month name
    specificDate = new Date('2024-12-25');
    monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    monthName = monthNames[specificDate.getMonth()];

    display();
    console.log(data);


}




function display() {
    cartona = '';

    cartona += `<div class="card border-dark mb-3 col-md-4 input-edit text-white">
                            <div class="card-header d-flex justify-content-between align-items-center">
                                <p class="m-0">${dayName}</p>
                                <p class="m-0">${dayOfMonth} ${monthName}</p>
                            </div>
                            <div class="card-body">
                                <p>${countryName}</p>
                              <h5 class="card-title fs">${temp}</h5>
                             <img src="${condition.icon}" alt="">

                              <p class="card-text text-primary">${condition.text}</p>
                              <div>
                                <span class="me-2">
                                    <img src="./img/icon-umberella@2x.png" style="width: 20px;" class="" alt="">
                                    <span>${humidity}%</span>
                                </span>

                                <span class="me-2">
                                    <img src="./img/icon-wind@2x.png" style="width: 20px;" class="" alt="">
                                    <span>${windSpeed}%</span>
                                </span>

                                <span class="">
                                    <img src="./img/icon-compass@2x.png" style="width: 20px;" class="" alt="">
                                    <span>${wind_dir}</span>
                                </span>
                              </div>
                            </div>
                        </div>  
                          
                  <div class="card border-dark mb-3 col-md-4 input-edit2 text-white">
                        <div class="card-header d-flex justify-content-center align-items-center">
                            <p class="m-0">${dayName}</p>
                        </div>
                        <div class="card-body mt-5">
                            <h5 class="card-title fs-5 text-center">${temp}</h5>
                            <h6 class="card-title text-center">${dewpoint_c}</h6>
                            <div class="d-flex justify-content-center"> 
                                <img class="text-center" src="${condition.icon}" alt="">

                            </div>
                            <p class="card-text text-primary text-center">${condition.text}</p>
                        </div>
                    </div>
                    
             
                  <div class="card border-dark mb-3 col-md-4 input-edit text-white">
                        <div class="card-header d-flex justify-content-center align-items-center">
                            <p class="m-0">${dayName}</p>
                        </div>
                        <div class="card-body mt-5">
                            <h5 class="card-title fs-5 text-center">${temp}</h5>
                            <h6 class="card-title text-center">${dewpoint_c}</h6>
                            <div class="d-flex justify-content-center"> 
                                <img class="text-center" src="${condition.icon}" alt="">

                            </div>
                            <p class="card-text text-primary text-center">${condition.text}</p>
                        </div>
                    </div>`
// coudnt get the endpoint to tell the weather for the next two days


    document.getElementById('rowData').innerHTML = cartona;

}

timeZone('cairo')




