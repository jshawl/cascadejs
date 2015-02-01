var Cascade = (function(){

  var Cascade = function(){
    this.styles = []
  }

  Cascade.prototype = {
    save: function(){
      var style = document.createElement("style")	  
      style.setAttribute('cascade','')
      var styles = ''
      var i = 0, len = this.styles.length
      for( ; i < len; i++ ){
        styles += this.styles[i].stringify() 
      }
      style.innerText = styles
      document.head.appendChild( style )
    },
    remove: function(){
      var style = document.querySelector("[cascade]")	    
      document.head.removeChild( style )
    },
    styles: function(){
      return this	    
    },
    style: function( args, rules ){
      return new Style( args, rules, this )	   
    }
  }

  var Style = function( selector, rules, context){
    this.selector = selector
    if( rules ){
      this.rules = rules
    } else {
      this.rules = {} 
    }
    context.styles.push( this )
    return this
  }

  Style.prototype = {
    new: function( selector ){
      var style = new Style( selector )
      this.styles.push( style )
      return this
    },
    stringify: function(){
      var string = this.selector + " { "
      for( var prop in this.rules ){
        string += prop + ": "
        string += this.rules[prop] + ";"
      }
      string += " }"
      return string
    },
    css: function( property, value ){
      if ( arguments.length == 0 )
	return this.stringify()
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
    },
  }
  return Cascade
})()