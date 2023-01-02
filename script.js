var board = document.createElement("div")
board.style.width = "1030"
board.style.display = "flex"
board.style.flexDirection = "row"
board.style.flexWrap = "wrap"
board.style.border = "2px solid black"

board.style.backgroundColor = "white";

fetch("https://restcountries.com/v2/all")
    .then(function (data) {
        return data.json();
    })
    .then(function (dataObj) {
        console.log(dataObj)

        dataObj.forEach(element => {
              var box = document.createElement("div")

            box.style.height = "400px"
            box.style.width = "200px"
            box.style.display = "flex"
            box.style.flexDirection = "column"
            box.style.marginTop = "10px";
            box.style.marginBottom = "10px"
            box.style.marginLeft = "40px";
            box.style.border = "3px solid green"
            box.style.backgroundColor="aliceblue"
            board.appendChild(box)
        
            var smallBox2 = document.createElement("div")
            smallBox2.style.color = "white";
            smallBox2.style.width = "199px"
            smallBox2.style.height = "50px"
            smallBox2.style.marginTop = "5px"
            smallBox2.style.textAlign = "center"                    
            smallBox2.style.fontWeight = "900";
            smallBox2.style.paddingTop = "1px";
            smallBox2.style.backgroundColor = "black";
            smallBox2.innerText = element.name;

            box.appendChild(smallBox2)

            var smallBox1 = document.createElement("img")
            smallBox1.setAttribute('src', element.flags.png)
            smallBox1.setAttribute('alt', "image")
            smallBox1.style.width = "199px"
            smallBox1.style.height = "100px"
            smallBox1.style.border = "1px solid black";
            box.appendChild(smallBox1)


            var smallBox3 = document.createElement("div")
            smallBox3.style.color = "blue";
            smallBox3.style.width = "199px"
            smallBox3.style.height = "50px"
            smallBox3.style.marginTop = "10px"
            smallBox3.style.textAlign = "center"
             smallBox3.style.fontWeight = "900";
            smallBox3.style.paddingTop = "15px";
            smallBox3.style.backgroundColor = "#f18973";
            smallBox3.innerText = `capital:${element.capital}`
            
           
              box.appendChild(smallBox3)

            var smallBox3 = document.createElement("div")
            smallBox3.style.width = "199px"
            smallBox3.style.height = "50px"
            smallBox3.style.marginTop = "10px"
            smallBox3.style.textAlign = "center"
            smallBox3.style.color = "blue"
             smallBox3.style.fontWeight = "bold";
            smallBox3.style.paddingTop = "15px";
            smallBox3.style.backgroundColor = "powderblue";
            smallBox3.innerText = `region:${element.region}`
            box.appendChild(smallBox3)
        
            
            var smallBox4 = document.createElement("div")
            smallBox4.style.width = "199px"
            smallBox4.style.height = "50px"
            smallBox4.style.marginTop = "10px"
            smallBox4.style.textAlign = "center"
            smallBox4.style.color = "blue"
            smallBox4.style.fontWeight = "bold";
            smallBox4.style.paddingTop = "10px";
            smallBox4.style.backgroundColor = "powderblue";
            smallBox4.innerText = `country code:${element.callingCodes}`
            box.appendChild(smallBox4)


            var button = document.createElement("button")
            button.style.width = "100px";
            button.style.height = "50px";
            button.style.marginLeft = "50px";
            button.innerText = "Get weather"
            button.addEventListener('click', function () {

                var popup = document.createElement('div')
                popup.style.width = "300px"
                popup.style.height = "500px"
                popup.style.fontSize = "20px"
                popup.style.textAlign = "center"
                popup.style.position = "fixed"
                popup.style.marginTop = "40px"
                popup.style.marginLeft = "500px"
                popup.style.backgroundColor = "pink"
                popup.style.position = "fixed";
                empty.appendChild(popup)


                var popbutton = document.createElement("button")
                popbutton.style.backgroundColor = "pink"
                popbutton.style.width = "40px";
                popbutton.style.height = "40px";
                popbutton.style.fontSize = "large";
                popbutton.style.position = "fixed"
                popbutton.style.marginTop = "55px";
                popbutton.style.marginLeft = "110px";
                popbutton.style.left = "620px"
                popbutton.innerText = "X"
                popbutton.style.borderRadius = "25px"
                popbutton.addEventListener("click", function () {
                    popup.style.display = "none"

                })
                popup.appendChild(popbutton)

                var main = document.createElement("h2")
                main.style.with = "299px"
                main.style.height = "50px"
                main.innerText = element.name.common + " " + "Wether"
                popup.appendChild(main)



                fetch('https://api.openweathermap.org/data/2.5/weather?q=' + smallBox2.innerText + '&appid=4e63ea6400e78f70f0c65b3743ca88bd')
                    .then(function (res) {
                        return res.json();
                    })
                    .then(function (data1) {
                        console.log(data1);

                        var temp1 = document.createElement("h4");
                        temp1.innerText = "Temperatures :" + data1.main.temp;
                        temp1.style.textAlign = "center";
                        popup.appendChild(temp1)

                        var feel = document.createElement("h4");
                        feel.innerText = "Feelslike :" + data1.main.feels_like;
                        feel.style.textAlign = "center";
                        popup.appendChild(feel)

                        var ground = document.createElement("h4");
                        ground.innerText = "Groundlevel :" + data1.main.grnd_level;
                        ground.style.textAlign = "center";
                        popup.appendChild(ground)

                        var humity = document.createElement("h4");
                        humity.innerText = "Humidity :" + data1.main.humidity;
                        humity.style.textAlign = "center";
                        popup.appendChild(humity)

                        var pressure = document.createElement("h4");
                        pressure.innerText = "pressure :" + data1.main.pressure;
                        pressure.style.textAlign = "center";
                        popup.appendChild(pressure)

                        var sea_level = document.createElement("h4");
                        sea_level.innerText = "seaLevel :" + data1.main.sea_level;
                        sea_level.style.textAlign = "center";
                        popup.appendChild(sea_level)

                        var temp_max = document.createElement("h4");
                        temp_max.innerText = "TempMax :" + data1.main.temp_max;
                        temp_max.style.textAlign = "center";
                        popup.appendChild(temp_max)

                        var temp_min = document.createElement("h4");
                        temp_min.innerText = "TempMin :" + data1.main.temp_min;
                        temp_min.style.textAlign = "center";
                        popup.appendChild(temp_min)


                    })


            })




            box.appendChild(button)


        })

    })
    .catch(function (err) {
        console.log(err)
    })



document.body.appendChild(board);