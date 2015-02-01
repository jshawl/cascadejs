(function(){
  module("Cascade", {
    beforeEach: function(){
      this.c = new Cascade()
    }
  })
  test('can be created', function( assert ){
    assert.notEqual( this.c, undefined )
  })
  test('it has many styles', function( assert ){
    var style = this.c.style('.class #id')
    assert.equal( this.c.styles.length, 1 )
  })
  test('it can be saved', function( assert ){
    this.c.save()
    var styles = document.querySelector("[cascade]")
    assert.notEqual( styles, null )
  })
  test('it can be removed', function( assert ){
    this.c.remove()
    var styles = document.querySelector("[cascade]")
    assert.equal( styles, null )
  })
  module("Style", {
    beforeEach: function(){
      this.c = new Cascade()
      this.s =  this.c.style(".class #id")
    }
  })
  test('it has a selector', function( assert ){
    assert.equal( this.s.selector, ".class #id" )
  })
  test('it has rules', function( assert ){
    assert.equal( this.s.rules.constructor, Object )
  })
  test('it has a string representation', function( assert ){
    this.s.rules.color = 'red'
    assert.equal( this.s.stringify(), ".class #id { color: red; }")
  })
  test('it has a css method', function( assert ){
    this.s.rules.color = 'red'
    assert.equal( this.s.css(), ".class #id { color: red; }")
  })
  test('it has a css method that supports getter setter syntax', function( assert ){
    this.s.css('color','blue')
    assert.equal( this.s.css(), ".class #id { color: blue; }")
  })
  test('it has a css method that supports object syntax', function( assert ){
    this.s.css({color:'green'})
    assert.equal( this.s.css(), ".class #id { color: green; }")
  })
})()
