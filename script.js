let hotel = {
    name : "park",
    roomRate : 240,
    discount : 15,
    offerPrice: function () {
        let offerRate = this.roomRate * ((100 - this.discount)/100);

    }

};

let hotelName, roomRate, specialRate;

hotelName = document.getElementById(hotelName);
roomRate = document.getElementById(roomRate);
spicialRate = document.getElementById(specialRate);

hotelName.textContent = hotelName;
roomRate.textContent = "$" + hotel.offerPrice().toFixed(2);
specialRate.textContent = "$" + hotel.offerPrice();

let expiryMsg, today, elEnds;
function offerExpires(input) {
    let weekFromToday, day, date, month, year, dayNames, monthNames;
    weekFromToday = new date(today.getTime() +7 * 24 * 60 * 60 * 1000);
    dayNames = ("Sunnudagur", "Mánudagur",
                "Þriðjudagur", "Miðvikudagur",
                "Fimmtudagur", "Föstudagur",
                "Laugardagur");
    monthNames =        ("janúar", "febrúar", "mars",
                        "apríl", "maí", "júní",
                        "júlí", "ágúst", "september",
                        "október", "nóvember", "desember");
    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDay();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();

    expiryMsg = "Offer expires next";
    expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
    return expiryMsg;

}

today = new Date();
elEnds = document.getElementById("offerEnds");
elEnds.innerHTML = offerExpires(today);