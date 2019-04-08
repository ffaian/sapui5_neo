/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ui5/neo/my_sapui5_neo/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});