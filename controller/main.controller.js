sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/Device",
    "sap/hello/lib/MessageManager"
], function(Controller, Device, MessageManager) {
    "use strict";

    return Controller.extend("sap.hello.controller.main", {
        onInit: function() {
            this.getView().addStyleClass(
                Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact");
        },

        onPressBtn: function () {
            MessageManager.reportSuccess("привет sap!", "приветствие");
        },


        onPressBtn_2: function () {
            sap.ui.require(["sap/hello/lib/MessageManager"], function(MessageManager_2) {
                MessageManager_2.reportSuccess("привет мир", "заголовок");
            });
        }
    });
});