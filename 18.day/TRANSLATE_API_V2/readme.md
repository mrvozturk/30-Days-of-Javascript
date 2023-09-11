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
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css"
    />
    <title> Translate</title>
  </head>
  <body>
    <div class="container">
      <div class="row">
        <div class="col s8">
          <div id="main" class="card">
            <div class="card-content">
              <span class="card-title"> Translate APP</span>
              <div class="row">
                <form id="translate-form">
                  <div class="input-field col s8">
                    <input type="text" name="word" id="word" value="Nasılsın" />
                    <label for="task">Çevirilecek Kelime</label>
                  </div>

                  <div class="input-field col s8">
                    <select id="language">
                      <option value="en">İngilizce</option>
                      <option value="de">Almanca</option>

                      <option value="es">İspanyolca</option>
                    </select>
                  </div>

                  <input type="submit" value="Çevir" class="btn col s8" />
                </form>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <img
                src="images/en.png"
                id="outputImage"
                height="50px"
                width="50px"
              />
              
              <span class="card-title" id="outputLanguage">İngilizce</span>
            </div>
            <div class="card-content">
              <h5>
                Çevrilen Kelime:
                <span id="outputWord" style="color: red;"> How are you ?</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>
    <script>
      document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems);

        var form = document.getElementById('translate-form');

        form.addEventListener('submit', async function (event) {
          event.preventDefault(); // Sayfanın yenilenmesini engelle
          // Burada form verilerini işleme veya gönderme işlemlerini yapabilirsiniz
          const options = {
            method: 'POST',
            url: 'https://rapid-translate-multi-traduction.p.rapidapi.com/t',
            headers: {
              'content-type': '',
              'X-RapidAPI-Key':
               ,
              'X-RapidAPI-Host':
                ''
            },
            data: {
              from: 'tr',
              to: event.target.language.value,
              q: `${event.target.word.value}`
            }
          };
          const response = await axios.request(options);

          console.log(response.data);
          document.getElementById('outputWord').innerHTML = response.data[0];
        });
      });
    </script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  </body>
</html>

```
-We are installing node modules,package.json  and install axios

