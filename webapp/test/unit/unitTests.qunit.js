/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"opensap/managepropducts/ManageProducts/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});