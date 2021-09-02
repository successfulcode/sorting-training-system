# sorting-training-system

Technology stack: Vue.js 3, Bulma

How app work:
After clicking "Start sorting", show a modal where its possible to enter a number of people to add to the list.
The modal window needs to accept a number between 20 and 100.
After clicking Start, generate the provided number of people, add them to the table as separate entries, and start a timer. 
Each entry has a random email, a number of potatoes that this person has (must be unique) and a random name.
The user has to drag and drop the rows from the most potatoes at the top to the least potatoes at the bottom.
After the list is sorted in the correct order, stop the timer and show a success message with his score.

![timer](https://user-images.githubusercontent.com/56683358/131925099-da76acf7-be6d-41f2-af16-37e66a1406bc.jpg)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
