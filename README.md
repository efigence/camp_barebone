## Efigence Camp example repo

### Setup

1. `npm install`
2. `./node_modules/.bin/gulp`
3. visit http://localhost:8080


### Files

    ├── app.js # main node file (eq web serwer)
    ├── dst # gulp destination dir
    │   ├── css # destination for src/less
    │   │   ├── main.css
    │   │   └── maps
    │   ├── favicon.ico 
    │   ├── fonts
    │   ├── img
    │   ├── index.html # main html file
    │   └── js
    │       ├── app # angular app
    │       │   ├── app.js # main agular app file
    │       │   ├── common
    │       │   │   ├── errors.js # directive for displaying errors
    │       │   │   └── templates
    │       │   └── contact.js # controller for contact form
    │       ├── map.js # google maps
    │       └── vendor # some libs
    ├── gulpfile.js # gulp configuration
    ├── package.json # npm package deps
    ├── README.md # you are reading this
    └── src # src files for css
        └── sass
            ├── _common.scss
            ├── _contact.scss
            ├── _fonts.scss
            ├── _footer.scss
            ├── main.scss
            ├── _menu.scss
            ├── _top-bar.scss
            └── vendor

33 directories, 58 files
