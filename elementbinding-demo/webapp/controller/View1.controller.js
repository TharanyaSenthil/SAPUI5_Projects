sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("elementbindingdemo.controller.View1", {
        onInit() {
        },
        onItemSelected: function (oEvent) {
            var oSelectedItem = oEvent.getSource();
            var oContext = oSelectedItem.getBindingContext("empdetails");
            var sPath = oContext.getPath();
            var oEmpDetailPanel = this.byId("empDetailsPanel");
            
            oEmpDetailPanel.bindElement({
            path: sPath,
            model: "empdetails"
    });
}
    });
});