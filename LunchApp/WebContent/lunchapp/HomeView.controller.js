sap.ui.controller("lunchapp.HomeView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf lunchapp.HomeView
*/
	onInit: function() {
		var mainData = {};
		var mainData = {'lunch': new Array(), 'snacks': new Array(), 'dinner' : new Array()};
		//mainData['lunch'] = new Array();
		var that = this;
		
		// lunch data
		  $.ajax({
		        type: "GET",
		        url: "lunch.csv",
		        dataType: "text",
		        success: function(data) {
		        		var lines = [];
		        		lines = data.split('\n');
		        		var count = 0;
		        		
		        		for(var i=0;i<lines.length;i++){
		        				var line = lines[i];
		        				var words = line.split(",");
		        				var check = line.split(",").join("").replace(/[^\w\s]/gi, '').replace(/\s+/, "");//.replace(/ /g,'');
		        				if(check!='')
		        					{
		        							//console.log(line);
		        						if( line.indexOf('Monday') == -1 && line.indexOf('Caterer') == -1 && line.indexOf('Logo') == -1 && line.indexOf('Category') == -1 ){
		        								//console.log(line);
		        								var items = line.split(",");
		        								//console.log(items);
		        								for(var j=0;j<6;j++){
		        									if(!mainData['lunch'][j])
		        										mainData['lunch'][j] =new Array();
		        									//mainData[j][items[0]] = items[1+(j*3)];
		        									mainData['lunch'][j]['Category'] = items[0];
		        									mainData['lunch'][j]['Item'] = items[1+(j*3)];
		        									
		        									var calories =  items[2+(j*3)];
   		        									var infoType = 'Success';
    		        									if(parseInt(calories) > 120 && parseInt(calories) <= 140)
    		        										infoType = 'Warning';
    		        									if(parseInt(calories) > 140)
    		        										infoType = 'Error';
    		        								
		        									
		        									var item = {'Category': items[0], 'Item' : items[1+(j*3)]  , 'Calories': items[2+(j*3)]+' kCal' , 'InfoType': infoType};
		        									mainData['lunch'][j].push(item);
		        									//mainData[j][i] = item;
		        								}
		        							}
		        					
		        					}
		        		}
		        		
		        		
		      		  // snacks data
		       		 $.ajax({
		       		        type: "GET",
		       		        url: "snacks.csv",
		       		        dataType: "text",
		       		        success: function(data) {
		       		        		var lines = [];
		       		        		lines = data.split('\n');
		       		        		var count = 0;
		       		        		
		       		        		for(var i=0;i<lines.length;i++){
		       		        				var line = lines[i];
		       		        				var words = line.split(",");
		       		        				var check = line.split(",").join("").replace(/[^\w\s]/gi, '').replace(/\s+/, "");//.replace(/ /g,'');
		       		        				if(check!='')
		       		        					{
		       		        							//console.log(line);
		       		        						if( line.indexOf('MONDAY') == -1 && line.indexOf('DATE') == -1 && line.indexOf('Evening') == -1 ){
		       		        								//console.log(line);
		       		        								var items = line.split(",");
		       		        								//console.log(items);
		       		        								for(var j=0;j<6;j++){
		       		        									if(!mainData['snacks'][j])
		       		        										mainData['snacks'][j] =new Array();
		       		        									//mainData[j][items[0]] = items[1+(j*3)];
		       		        									mainData['snacks'][j]['Category'] = items[1];
		       		        									mainData['snacks'][j]['Item'] = items[2+(j*2)];
		       		        									
		       		        									var calories =  items[3+(j*2)];
		       		        									var infoType = 'Success';
 		       		        									if(parseInt(calories) > 120 && parseInt(calories) <= 140)
 		       		        										infoType = 'Warning';
 		       		        									if(parseInt(calories) > 140)
 		       		        										infoType = 'Error';
 		       		        								
		       		        									
		       		        									var item = {'Category': items[1], 'Item' : items[2+(j*2)] , 'Calories': items[3+(j*2)]+' kCal', 'InfoType': infoType};
		       		        									mainData['snacks'][j].push(item);
		       		        									//mainData[j][i] = item;
		       		        								}
		       		        							}
		       		        					
		       		        					}
		       		        		}
		       		     
		       		        		
		       		        		// dinner data
		       		        	 $.ajax({
		 		       		        type: "GET",
		 		       		        url: "dinner.csv",
		 		       		        dataType: "text",
		 		       		        success: function(data) {
		 		       		        		var lines = [];
		 		       		        		lines = data.split('\n');
		 		       		        		var count = 0;
		 		       		        		
		 		       		        		for(var i=0;i<lines.length;i++){
		 		       		        				var line = lines[i];
		 		       		        				var words = line.split(",");
		 		       		        				var check = line.split(",").join("").replace(/[^\w\s]/gi, '').replace(/\s+/, "");//.replace(/ /g,'');
		 		       		        				if(check!='')
		 		       		        					{
		 		       		        							//console.log(line);
		 		       		        						if( line.indexOf('Monday') == -1 && line.indexOf('Category') == -1 && line.indexOf('Logo') == -1 && line.indexOf('Caterer') == -1 ){
		 		       		        								//console.log(line);
		 		       		        								var items = line.split(",");
		 		       		        								//console.log(items);
		 		       		        								for(var j=0;j<6;j++){
		 		       		        									if(!mainData['dinner'][j])
		 		       		        										mainData['dinner'][j] =new Array();
		 		       		        									//mainData[j][items[0]] = items[1+(j*3)];
		 		       		        									mainData['dinner'][j]['Category'] = items[1];
		 		       		        									mainData['dinner'][j]['Item'] = items[1+(j*2)];
		 		       		        									
		 		       		        									var infoType = 'Success';
		 		       		        									if(parseInt(items[2+(j*3)]) > 120 && parseInt(items[2+(j*3)]) <= 140)
		 		       		        										infoType = 'Warning';
		 		       		        									if(parseInt(items[2+(j*3)]) > 140)
		 		       		        										infoType = 'Error';
		 		       		        								
		 		       		        									var item = {'Category': items[0], 'Item' : items[1+(j*3)] , 'Calories': items[2+(j*3)]+' kCal', 'InfoType': infoType};
		 		       		        									mainData['dinner'][j].push(item);
		 		       		        									//mainData[j][i] = item;
		 		       		        								}
		 		       		        							}
		 		       		        					
		 		       		        					}
		 		       		        		}
		 		       		        		//console.log(mainData);
		 		       		        		//alert(count);
		 		       		        		
		 		       		        		// get current day
		 		       		        		
		 		       		        		// get current day
		 		    		        		// set model  
		 		    		        		var today = new Date();
		 		    		          		var today_d = today.getDay();
		 		    		          		
		 		    		          		var mainDataJSON = JSON.parse(JSON.stringify(mainData));
		 		    		          		
		 		    		          		oModel=new sap.ui.model.json.JSONModel();

		 		    		          		oModel.setData(mainDataJSON);
		 		    		          		that.getView().setModel(oModel);
		 		    		          		//console.log(oModel);  		
		 		       		        		
		 		       		        	}
		 		       		     });

		       		        	}
		       		     });
		        		
		        		//console.log(mainData);
		        		//alert(count);
		        		
		        		
		        		      		
		        		
		        	}
		     });
		  

		  
		  // dinner data
		  
		  
		  
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf lunchapp.HomeView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf lunchapp.HomeView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf lunchapp.HomeView
*/
//	onExit: function() {
//
//	}

});