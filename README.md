# Cypress 
- https://www.youtube.com/watch?v=UFVne43jgxo&t=13s

- inicializar 
npm init

test command: test
keywords: cypress testing javascript typescript
author: Seba
- Con esto crea el package.json


- instalamos cypress
npm install cypress --save-dev

- Cambiar en package.json "test": "test"
test": "cypress open"

- Ejecutamos test runner
npm run test

Se abriá una ventana, seleccionar "E2E Testing" y luego abajo continuar, elegimos el navegador y listo

Luego entrar en "Scaffold Example Specs" para descargar test realizados

- Agregamos en package.json el nuevo test2
- Ejecutamos automaticamente  E2E en navegador
"test2": "cypress open --browser firefox:dev --e2e"
npm run test2


```css
- Selectores css
ID: #usuario01
Clase: .botonVerde
Tag: div, input, button, h1~6, form, etc
Child: ul > li = match con los "li" que estén en un "ul"
  div>input#userID 
Adyacente: h2 + p, se usa en formularios
  div label + input#username
Atributos: input[name]  input[name=password]
Especifico: form > div:nth-child(1) - Seleccionamos el primero "div"
Sub-String Matches: ^ Prefijo, $sufijo * substring(contains)

  a[target='_blank']  // Ejemplo default
  ^: prefijo = a[target^='_'] 
  $: sufijo = a[target$='nk'] 
  *: contiene = a[target*='blank'] 
```



- Los tests van en /cypress/integration  "integration ahora es e2e"

- /cypress/downloads/ se genera automáticamente


yarn add cypress-dark


Install Dark theme

Add to your cypress/support/e2e.js 
require('cypress-dark')




















