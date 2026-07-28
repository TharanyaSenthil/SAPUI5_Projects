sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("routingdemo.controller.View2", {

        onBack: function () {

            this.getOwnerComponent()
                .getRouter()
                .navTo("RouteView1");

        }

    });

});