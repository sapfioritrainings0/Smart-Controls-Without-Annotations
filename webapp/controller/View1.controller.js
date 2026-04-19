sap.ui.define([
    "sap/ui/core/mvc/Controller",
], (Controller) => {
    "use strict";

    return Controller.extend("test.smartcontrols1.controller.View1", {
        onInit() {
           var oSmartTable = this.byId("smartTable");
           oSmartTable.attachEventOnce("initialise", function()
        {
            oSmartTable.getTable().setMode("MultiSelect");
        });

        oSmartTable.getTable().attachSelectionChange(function(oevent)
    {
        var list = oevent.getParameter("listItem");
        var context = list.getBindingContext().getObject();
        console.log(context);
    });

    sap.m.MessageBox.show("Hello");
        },

        onBeforeRebindTable : function(event)
        {
            let oBindingParams = event.getParameter("bindingParams");
        },

        onAfterRendering : function(event)
        {
            var oSmartTable = this.byId("smartTable");
            oSmartTable.attachEventOnce("initialise", function()
        {
            var oTable = oSmartTable.getTable();
            oTable.attachEventOnce("updateFinished", function()
        {
            var oBinding = oTable.getBinding("items");
            var contexts = oBinding.getCurrentContexts();
            var firstObject = contexts[0];

            let oModel = oTable.getModel();
            oModel.setProperty(firstObject.getPath()+"/LastName", "Watson");
        })
        })
        }

    });
});