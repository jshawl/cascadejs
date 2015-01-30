var cascade = (function(){

  var Cascade = function( selector ){
    this.selector =  selector
    this.rules = {}
  }

  Cascade.prototype = {
    css: function( property, value ){
      if ( arguments.length == 0 )
	return this.rules
      if ( arguments.length == 1 && property.constructor == Object ){
	for( var prop in property ){
          this.rules[prop] = property[prop]	
	}
	return this
      }
      if ( arguments.length == 2 ){
	this.rules[property] = value
	return this
      }
    } 
  }

  return Cascade;

})()