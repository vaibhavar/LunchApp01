sap.ui.controller("lunchapp.CalorieHistory", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf lunchapp.CalorieHistory
*/
onInit: function() {
	
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf lunchapp.CalorieHistory
*/
	onBeforeRendering: function() {
		//console.log( sap.ui.getCore().AppContext.selItems);
		var selItems = sap.ui.getCore().AppContext.selItems;
		
		var selectedData = [];//{};
		
		
		var calories = 0;
		
		var text = '';

			for(var i=0;i<selItems.length;i++){
				text = text+' '+selItems[i].getTitle();
				calories = calories + parseInt(selItems[i].getInfo());
				selectedData.push({'Item': selItems[i].getTitle() , 'Calories': parseInt(selItems[i].getInfo()) })
			}
			
			
			var selectedDataJSON = JSON.parse(JSON.stringify(selectedData));
       		
       		var oModel = new sap.ui.model.json.JSONModel();

       		oModel.setData(selectedDataJSON);
       		console.log(oModel);
       		this.getView().setModel(oModel);
			
			sap.m.MessageToast.show(" Recording "+text+' Calories = '+calories);
	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf lunchapp.CalorieHistory
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf lunchapp.CalorieHistory
*/
//	onExit: function() {
//
//	}

});