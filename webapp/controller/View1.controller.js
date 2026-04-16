sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("test.smartcontrols1.controller.View1", {
        onInit() {
        },

        onBeforeRebindTable : function(event)
        {
            let oBindingParams = event.getParameter("bindingParams");
        }
    });
});