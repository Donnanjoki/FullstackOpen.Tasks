# Exercise 0.5

```mermaid
sequenceDiagram
autonumber
participant user
participant browser
participant server

user->>browser: Opens browser via: https://studies.cs.helsinki.fi/exampleapp/spa.

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
server-->>browser: HTML document
Note right of browser: spa.html

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
Note right of browser: fetch main.css

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
Note right of browser: fetch spa.js

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
Note right of browser: fetch spa.json: AJAX Request

server-->>browser: Provide data.json


```
