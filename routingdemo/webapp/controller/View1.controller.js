sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("routingdemo.controller.View1", {

        onNext: function () {

            this.getOwnerComponent()
                .getRouter()
                .navTo("RouteView2");

        }

    });

});