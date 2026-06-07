
;function showFlag() {
    let countrySelect = document.getElementById("country");
    let country = countrySelect.value;
    let countryName = countrySelect.options[countrySelect.selectedIndex].text;

    localStorage.setItem("deliveryCountry", countryName);

    let flag = document.getElementById("flag");

    if(country === "india"){
        flag.src = "https://flagcdn.com/w320/in.png";
    }
    else if(country === "usa"){
        flag.src = "https://flagcdn.com/w320/us.png";
    }
    else if(country === "uk"){
        flag.src = "https://flagcdn.com/w320/gb.png";
    }
    else if(country === "canada"){
        flag.src = "https://flagcdn.com/w320/ca.png";
    }
    else if(country === "australia"){
        flag.src = "https://flagcdn.com/w320/au.png";
    }
    else if(country === "japan"){
        flag.src = "https://flagcdn.com/w320/jp.png";
    }
}
window.addEventListener("load", () => {
    const savedCountry = localStorage.getItem("deliveryCountry");

    if(savedCountry){
        document.getElementById("delivery-country").textContent = savedCountry;
    }
});