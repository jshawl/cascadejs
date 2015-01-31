# CascadeJS

An Object oriented CSS lexer

## Usage

```js
  var cascade = new Cascade() // will contain all styles
  var style = new Style(".class #id") // create a new style with a selector
  style.css('color','blue') // add some styles
  style.css({background: 'red'}) // add some more styles
  cascade.styles.push( style ) // add it to the cascade
  cascade.save() // append your styles to the <head>
  cascade.remove() // remove your styles from the <head>
```