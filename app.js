const apiKey = "ab1b0a4733924d97a18114247201109";
const searchForm = document.getElementById("searchForm");

const weather = document.getElementById("weather");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchText = document.getElementById("searchText").value;

  axios
    .get(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchText}`
    )
    .then(function (response) {
      console.log(response);
      const { temp_c } = response.data.current;
      const { name, country, region, localtime } = response.data.location;
      const { text, icon } = response.data.current.condition;
      console.log(temp_c, name, country, localtime, text, icon);

      let html = `
      <h2 class="loction">${name} <span class="country">${region},${country}</span></h2>
        <h5 class="date">${localtime}</h5>
        <div class="icon">
          <img src="${icon}" />
        </div>
        <div class="temperature">
          <h1 class="temperature__value">${temp_c}<span>c</span></h1>
          <p class="temperature__text">${text}</p>
        </div>
      `;

      weather.innerHTML = html;
    });
});
