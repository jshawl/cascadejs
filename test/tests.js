(function(){
  module("Create", {
    beforeEach: function(){
      this.c = new cascade(".class #id")
    }
  })
  test('can be created', function( assert ){
    assert.notEqual( this.c, undefined )
  })
  test('it has a selector', function( assert ){
    var c = new cascade(".class #id")
    assert.equal( c.selector, ".class #id" )
  })
  test('it has rules', function( assert ){
    var c = new cascade(".class #id")
    assert.equal( c.rules.constructor, Object )
  })
  test('it has a css method', function( assert ){
    assert.equal( typeof this.c.css, "function"  )
  })
  test('it returns the rules without arguments', function( assert ){
    assert.equal( this.c.css(), this.c.rules )
    var c = this.c.css()
    assert.equal( c.constructor, Object )
  })
  test('it supports getter setter arguments', function( assert ){
    var c = this.c.css( 'color','blue' );
    assert.equal( c.rules.color, "blue" )
  })
  test('it supports object arguments', function( assert ){
    var c = this.c.css({ color: 'blue' })
    assert.equal( c.rules.color, "blue" )
  })
})()
