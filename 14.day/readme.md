<div align-items="center">
<a class="header-badge" target="_blank" href="https://www.linkedin.com/in/merve-%C3%B6-5062a5260/">
    <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>

  <a class="header-badge" target="_blank" href="https://github.com/mrvozturk">
    <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

<sub>Author:
<a href="https://www.linkedin.com/in/merve-%C3%B6-5062a5260/" target="_blank">Merve Öztürk</a><br>
<small> May, 2023</small>
</sub>
</div>

[<< Day 2](../readMe.md) | [Day 3 >>](../02_Day_Introduction_to_React/02_introduction_to_react.md)


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css">
    <style>
        body {
            background-color: #f2f2f2;
        }
        .container {
            padding: 50px;
            margin-top: 50px;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
        .card {
            border-radius: 10px;
            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
        }
        .card-title {
            font-size: 24px;
            color: #333333;
        }
        #outputResult {
            font-size: 20px;
            font-weight: bold;
            text-align: center;
            border: none;
            background-color: #f2f2f2;
        }
       
        img {
            position: absolute;
            top: 100px;
            right: 100px;
            height: 300px;
            border-radius: 50%;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease-in-out;
        }

        img:hover {
            transform: scale(1.1);
        }
    </style>
    <title>Currency App</title>
</head>
<body>
   
    <div class="profile-image">
        <img src="images/img.jpg" alt="Profile Image">
    </div>
    <div class="container">
        <div class="row">
            <div class="col s8">
                <div class="card">
                    <div class="card-content">
                        <span class="card-title">Currency App</span>
                        <div class="row">
                            <form id="currency-form">
                                <div class="input-field col s8">
                                    <input type="number" name="amount" id="amount" placeholder="Amount">
                                </div>
                                <div class="input-field col s8">
                                    <select id="firstCurrency">
                                        <option selected>USD</option>
                                        <option>EUR</option>
                                        <option>JPY</option>
                                        <option>BGN</option>
                                        <option>CZK</option>
                                        <option>DKK</option>
                                        <option>GBP</option>          
                                        <option>HUF</option>
                                        <option>PLN</option>
                                        <option>RON</option>
                                        <option>SEK</option>
                                        <option>CHF</option>
                                        <option>ISK</option>
                                        <option>NOK</option>          
                                        <option>HRK</option>
                                        <option>RUB</option>
                                        <option>TRY</option>
                                        <option>AUD</option>
                                        <option>BRL</option>          
                                        <option>CAD</option>
                                        <option>CNY</option>
                                        <option>HKD</option>
                                        <option>IDR</option>          
                                        <option>ILS</option>
                                        <option>INR</option>
                                        <option>KRW</option>
                                        <option>MXN</option>          
                                        <option>MYR</option>
                                        <option>NZD</option>
                                        <option>PHP</option>
                                        <option>SGD</option>
                                        <option>THB</option>          
                                        <option>ZAR</option>
                                    </select>
                                    <select id="secondCurrency">
                                        <option selected>TRY</option>
                                        <option>EUR</option>
                                        <option>JPY</option>
                                        <option>BGN</option>
                                        <option>CZK</option>
                                        <option>DKK</option>
                                        <option>GBP</option>          
                                        <option>HUF</option>
                                        <option>PLN</option>
                                        <option>RON</option>
                                        <option>SEK</option>
                                        <option>CHF</option>
                                        <option>ISK</option>
                                        <option>NOK</option>          
                                        <option>HRK</option>
                                        <option>RUB</option>
                                        <option>TRY</option>
                                        <option>AUD</option>
                                        <option>BRL</option>          
                                        <option>CAD</option>
                                        <option>CNY</option>
                                        <option>HKD</option>
                                        <option>IDR</option>          
                                        <option>ILS</option>
                                        <option>INR</option>
                                        <option>KRW</option>
                                        <option>MXN</option>          
                                        <option>MYR</option>
                                        <option>NZD</option>
                                        <option>PHP</option>
                                        <option>SGD</option>
                                        <option>THB</option>          
                                        <option>ZAR</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <span class="card-title" id="outputFirst">USD</span>
                        <span>-</span>
                        <span class="card-title" id="outputSecond">TRY</span>
                    </div>
                    <div class="card-content">
                        <input type="text" name="outputResult" id="outputResult" placeholder="Result" readonly>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems);
        });
      
    </script>
    
    
    <script src="ui.js"></script>
    <script src="currency.js"></script>
    <script src="app.js"></script>
</body>
</html>

```
-app.js currency.js and ui.js files open

```js
// app.js
const amountElement = document.querySelector("#amount");

const firstSelect = document.querySelector("#firstCurrency");

const secondSelect = document.querySelector("#secondCurrency");

const currency = new Currency("USD", "TRY");
const ui = new UI(firstSelect, secondSelect);

eventListeners();

function eventListeners() {
    amountElement.addEventListener("input", exchangeCurrency);
    firstSelect.onchange = function () {

        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent)
        ui.changeFirst();
    };
    secondSelect.onchange = function () {
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent)
        ui.changeSecond();
    }
}
function exchangeCurrency() {
    currency.changeAmount(amountElement.value);

    currency.exchange()
        .then(result => {
            ui.displayResult(result);
        })
        .catch(err => console.log(err));
}
```

```js
// currency.js
class Currency {
    constructor(firstCurrency, secondCurrency) {
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "https://api.exchangerate.host/latest?base="
        this.amount = null;
    }
    exchange() {

        return new Promise((resolve, reject) => {
            fetch(this.url + this.firstCurrency)
                .then(response => response.json())
                .then(data => {
                    const parity = data["rates"][this.secondCurrency];
                    const amount2 = Number(this.amount);

                    let total = parity * amount2;
                    resolve(total);
                })
                .catch(err => reject(err))
        });

    }
    changeAmount(amount) {
        this.amount = amount;
    }
    changeFirstCurrency(newFirstCurrency) {
        this.firstCurrency = newFirstCurrency;
    }
    changeSecondCurrency(newSecondCurrency) {
        this.secondCurrency = newSecondCurrency;
    }
}

```

```js
//ui.js
class UI {
    constructor(firstSelect, secondSelect) {
        this.firstSelect = firstSelect;
        this.secondSelect = secondSelect;

        this.outputFirst = document.getElementById("outputFirst");
        this.outputSecond = document.getElementById("outputSecond");
        this.outputResult = document.getElementById("outputResult");


    }
    changeFirst() {
        this.outputFirst.textContent = this.firstSelect.options[this.firstSelect.selectedIndex].textContent;
    }
    changeSecond(){
        this.outputSecond.textContent = this.secondSelect.options[this.secondSelect.selectedIndex].textContent;

    }
    displayResult(result){
        this.outputResult.value=result;
    }
}
```