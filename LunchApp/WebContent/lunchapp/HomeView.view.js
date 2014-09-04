sap.ui.jsview("lunchapp.HomeView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf lunchapp.HomeView
	*/ 
	getControllerName : function() {
		return "lunchapp.HomeView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf lunchapp.HomeView
	*/ 
	createContent : function(oController) {
		
		//var oName = new sap.m.Text({text: "{ProductName}"});  
		//var oQty = new sap.m.Text({text: "{QuantityPerUnit}"});  
		//var oPrice = new sap.m.Text({text: "{UnitPrice}"});  
		// corresponding columns  
		//var oColName = new sap.m.Column({header: new sap.m.Text({text:"Product Name"}) });  
		//var oColDesc = new sap.m.Column({header: new sap.m.Text({text:"Quantity per Unit"}) });  
		//var oColPrice = new sap.m.Column({header: new sap.m.Text({text:"Unit Price"}) });  
		// row template  
		//var oRow = new sap.m.ColumnListItem();  
		//oRow.addCell(oName).addCell(oQty).addCell(oPrice);  
		
		//console.log(oModel);
		var listLunch = new sap.m.List("lunchList",{
			headerText:"Lunch",
			mode: 'MultiSelect',
			includeItemInSelection: true
		});
		
		// bind the List items to the data collection
		
		var today = new Date();
  		var today_d = today.getDay();
  		today_d = today_d - 1;
		
		listLunch.bindItems({
			path : "/lunch/"+today_d, 
			template : new sap.m.StandardListItem({
				title: "{Item}",
				description: "{Category}",
				info: "{Calories}",
				infoState: "{InfoType}",
				type: sap.m.ListType.Inactive
			})
		});
	
		
		var listSnacks = new sap.m.List({
			headerText:"Snacks"
		});
		
		// bind the List items to the data collection
		
		listSnacks.bindItems({
			path : "/snacks/"+today_d, 
			template : new sap.m.StandardListItem({
				title: "{Item}",
				description: "{Category}",
				info: "{Calories}",
				infoState: "{InfoType}",
				type: sap.m.ListType.Active
			})
		});
	
		var listDinner = new sap.m.List({
			headerText:"Dinner"
		});
		
		// bind the List items to the data collection
		
		listDinner.bindItems({
			path : "/dinner/"+today_d, 
			template : new sap.m.StandardListItem({
				title: "{Item}",
				description: "{Category}",
				info: "{Calories}",
				infoState: "{InfoType}",
				
				type: sap.m.ListType.Active
			})
		});
	
		
	var defaultContent = listLunch;
	var currentTime = today.getHours();
	if(currentTime>14 && currentTime<= 19)
		defaultContent = listSnacks;
	else if(currentTime > 19)
		defaultContent = listDinner;
		
		//oTable.bindRows("/clients");
		//oTable.placeAt("master");

	
		
		
				
					var oShell = new sap.ui.ux3.Shell("myShell", {
					appTitle: "Menu Assist",
					appIcon: "images/logo.gif",
					appIconTooltip: "Lunch App",
					showLogoutButton: false,
					showSearchTool: false,
					showInspectorTool: false,
					showFeederTool: false,
					worksetItems: [new sap.ui.ux3.NavigationItem("WI_home",{key:"wi_home",text:"Lunch"}),
					               new sap.ui.ux3.NavigationItem("WI_Snacks",{key:"wi_Snacks",text:"Snacks"}),
					               new sap.ui.ux3.NavigationItem("WI_Dinner",{key:"wi_api",text:"Dinner"})],
					/*paneBarItems: [ 
					                new sap.ui.core.Item("PI_Feedback",{key:"pi_feedback",text:"Feedback"})],*/
					content: defaultContent,
			
				
					worksetItemSelected: function(oEvent){
						var sId = oEvent.getParameter("id");
						var oShell = oEvent.oSource;
						switch (sId) {
						case "WI_home":
							oShell.setContent(listLunch);
							break;
						case "WI_Snacks":
							oShell.setContent(listSnacks);
							break;
						case "WI_Dinner":
							oShell.setContent(listDinner);
							break;
						default:
							break;
						}
					},
					paneBarItemSelected: function(oEvent){
						var sKey = oEvent.getParameter("key");
						var oShell = oEvent.oSource;
						switch (sKey) {
						case "pi_feedback":
							oShell.setPaneContent(new sap.ui.commons.TextView({text:"You browser provides the following information:\n"+navigator.userAgent}), true);
							break;
						default:
							break;
						}
					},
				 	paneClosed : function(oEvent) {
				 	    alert("Pane has been closed: " + oEvent.getParameter("id"));
				 	}
				});
		
					var footerBar = new sap.m.Bar('footerBar', {contentMiddle: [new sap.m.Button({text:"Today",icon:"images/iconCompetitors.png"} ),
					                        									
					                        									new sap.m.Text("showingContent", {text:new Date()} ),
					                        									new sap.m.Button({text:"Tomorrow",icon:"images/iconCompetitors.png"} )]}
													);
					
					var headerBar = new sap.m.Bar('headerBar', {contentMiddle: [new sap.m.Button('button1', {text:'Fitness Dashboard'}),
					                                                            new sap.m.Button('button2', {text:'Food Menu'}),
					                                                            new sap.m.Button('recordBtn', {text:'Record Consumption', type:'Accept',press:onPress})
																				]
																}
												  );
					
 		return new sap.m.Page({
			title: "What's Cooking at SAP",
			content: [oShell],
			footer: footerBar,
			subHeader: headerBar
		});
	}

});