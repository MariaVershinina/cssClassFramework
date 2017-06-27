(function(){
	/* 
	методы Element.prototype
	*/
 	Element.prototype.hasClass = Element.prototype.hasClass || function(classArr){

 		var className =this.className;
 		var classNameArr = className.split(" ");
 		
 		if( this == null || !classArr ) 
 			return false;
  
    	if( !(classArr instanceof Array) ) 
    		classArr = classArr.split(' ');

    	for( var i=0; i<classArr.length; i++) {
    		if(classNameArr.indexOf(classArr[i]) === -1){
    			return false;
    		}
        }
        return true;
	};

	Element.prototype.addClass = Element.prototype.addClass || function(classArr){

 		var className =this.className;
 		
 		if( this == null || !classArr  ) 
 			return false;
  
    	if( !(classArr instanceof Array) ) 
    		classArr = classArr.split(' ');

    	for( var i=0; i<classArr.length; i++ ) {
			if(!this.hasClass(classArr[i]))
				className = className!==''?(className+' '+ classArr[i]):classArr[i];	
		}
		
		this.className=className;
		return this;
         	
	};

	Element.prototype.removeClass = Element.prototype.removeClass || function(classArr){

		var className =this.className;
		var classNameArr = className.split(" ");

		if( this == null || !classArr  ) return false;
		if( !(classArr instanceof Array) ) classArr = classArr.split(' ');

		for(var i = 0; i < classArr.length; i++){
			if(this.hasClass(classArr[i])){
				classNameArr.splice(classNameArr.indexOf(classArr[i]),1);
			}
		}

		this.className = classNameArr.join(" ");
		return this;
	}

	Element.prototype.toggleClass = Element.prototype.toggleClass || function(classArr){

 		var className =this.className;
 		
 		if( this == null || !classArr) 
 			return false;
  
    	if( !(classArr instanceof Array) ) 
    		classArr = classArr.split(' ');

    	for( var i=0; i<classArr.length; i++ ) {
			if (this.hasClass(classArr[i]))
				this.removeClass(classArr[i]);
			else
				this.addClass(classArr[i]);
							
		}
		return this;	
	};

	/*
	методы NodeList.prototype
	*/
	NodeList.prototype.hasClass = NodeList.prototype.hasClass || function (classArr, data) {

		if( this == null || !classArr) 
 			return false;
	 
		if (data === undefined) data = true;
		for (var i=0; i<this.length; i++) {
			if (data && !this[i].hasClass(classArr)) return false;
			if (!data && this[i].hasClass(classArr))  return true;
		}

		return true;

	};

	NodeList.prototype.addClass = NodeList.prototype.addClass || function (classArr, data) {

		if( this == null || !classArr) 
 			return false;

		for (var i=0; i<this.length; i++) {
			this[i].addClass(classArr);
		};
		return this;
	};

	NodeList.prototype.removeClass = NodeList.prototype.removeClass || function (classArr, data) {

		if( this == null || !classArr) 
 			return false;

		for (var i=0; i<this.length; i++) {
			this[i].removeClass(classArr);
		};

		return this;
	};

	NodeList.prototype.toggleClass = NodeList.prototype.toggleClass || function (classArr, data) {
		
		if( this == null || !classArr) 
 			return false;

 		for (var i=0; i<this.length; i++) {
			this[i].toggleClass(classArr);
		};
		return this;
	};

	HTMLCollection.prototype.hasClass = HTMLCollection.prototype.hasClass || function (classArr, data) {

		if( this == null || !classArr) 
 			return false;
	 
		if (data === undefined) data = true;
		for (var i=0; i<this.length; i++) {
			if (data && !this[i].hasClass(classArr)) return false;
			if (!data && this[i].hasClass(classArr))  return true;
		}

		return true;

	};

	HTMLCollection.prototype.addClass = HTMLCollection.prototype.addClass || function (classArr, data) {

		if( this == null || !classArr) 
 			return false;

		for (var i=0; i<this.length; i++) {
			this[i].addClass(classArr);
		};
		return this;
	};

	HTMLCollection.prototype.removeClass = HTMLCollection.prototype.removeClass || function (classArr, data) {

		if( this == null || !classArr) 
 			return false;

		for (var i=0; i<this.length; i++) {
			this[i].removeClass(classArr);
		};

		return this;
	};

	HTMLCollection.prototype.toggleClass = HTMLCollection.prototype.toggleClass || function (classArr, data) {
		
		if( this == null || !classArr) 
 			return false;

 		for (var i=0; i<this.length; i++) {
			this[i].toggleClass(classArr);
		};
		return this;
	};
})()