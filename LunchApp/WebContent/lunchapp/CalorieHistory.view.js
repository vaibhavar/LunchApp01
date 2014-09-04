sap.ui.jsview("lunchapp.CalorieHistory", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf lunchapp.CalorieHistory
	*/ 
	getControllerName : function() {
		return "lunchapp.CalorieHistory";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf lunchapp.CalorieHistory
	*/ 
	createContent : function(oController) {
		var inpList = new sap.m.List('sList', {
			headerText: 'Enter the servings of each item'
			
		});
		
		var headerBar = new sap.m.Bar("headerFM",{contentMiddle:	
													[
													 new sap.m.Button("saveB", {text:"Save", type:"Accept", press:onPress2}),
													 new sap.m.Button("cancelB", {text:"Back", type:"Reject", press:onPress2})
		
													]}
									  );
		
		inpList.bindItems({
			path : "/", 
			template : new sap.m.InputListItem({
				label: "{Item}",
				content: [new sap.m.Input({
					placeholder: 'Servings',
					type :'Number',
					value: '1'
					}),
					new sap.m.Input({
						placeholder: 'Calories',
						type: 'Number',
						visible: false,
						value : "{Calories}"
					})
				]
			})
		});
		//console.log(inpList);
		
 		return new sap.m.Page({
			title: "Fitness Meter",
			showNavButton: true,
			headerContent: headerBar,
			content: [inpList
			
			]
		});
	}

});