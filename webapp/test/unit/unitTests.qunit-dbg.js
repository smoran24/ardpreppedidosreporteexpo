/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"AR_DP_REP_PEDIDOSREPORTE_EXPO/AR_DP_REP_PEDIDOSREPORTE_EXPO/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});