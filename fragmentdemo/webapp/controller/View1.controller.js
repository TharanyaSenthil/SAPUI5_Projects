sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "sap/m/MessageToast"
], (Controller,toast) => {
    "use strict";

    return Controller.extend("fragmentdemo.controller.View1", {
        onClickBtn: function () {

            var dataModel = this.getOwnerComponent().getModel("products");

            this.dialog = sap.ui.xmlfragment("fragmentdemo.fragments.DialogDemo",this);

            this.dialog.setModel(dataModel, "ProdData");

            this.dialog.open();
        },
        onCloseDialog: function () {

            this.dialog.close();

        }
    });
});