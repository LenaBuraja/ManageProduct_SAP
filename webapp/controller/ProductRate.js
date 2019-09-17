sap.ui.define(
	["sap/ui/core/Control"],
	function(Control) {
		"use strict";
		
		return Control.extend("opensap.manageproducts.control.ProductRate", {
			metadata : {
				properties : {},
				aggregations : {},
				events : {}
			},
			
			init : function() {
			},
			
			renderer : function(oRm, oControl) {
				oRm.write("<div>Hello World!</div>");
			}
		});
	}
);
