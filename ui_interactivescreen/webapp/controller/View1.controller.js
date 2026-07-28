sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("uiinteractivescreen.controller.View1", {
        onLogon: function () {
            var user=this.byId("txtUser").getValue();
            var pwd=this.byId("txtPwd").getValue();

            if(user==="" || pwd===""){
                MessageToast.show("Please enter all values!");
                return;
            }
            MessageToast.show("Welcome,"+user+"!");
        },
        onReset: function () {
            this.byId("txtUser").setValue("");
            this.byId("txtPwd").setValue("");

            MessageToast.show("Reset successful!");
        }
    });
});