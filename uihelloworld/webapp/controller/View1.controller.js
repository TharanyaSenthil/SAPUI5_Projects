//module definition
sap.ui.define([         // this tells - I'm creating a new JavaScript module
    "sap/ui/core/mvc/Controller", //dependency array - libraries,  it is a basic controller class
    "sap/m/MessageToast"         //MessageToast control,  two lines load these libraries
], function (Controller, MessageToast) {  //UI5 passes the loaded dependencies into your function
    "use strict";  //It enables Strict Mode.  It helps catch mistakes.

    return Controller.extend("uihelloworld.controller.View1", {  //Create a new controller(view1.controller) by extending SAP's Controller.

        onInit: function () {
            alert("insid on init");
        },
        onClick: function () {             //called because of the xml i wrote <Button press="onClick"/>
           MessageToast.show("UI5 Demo");  //shows the message down at the bottom of the screen
           alert("Button Clicked");
        },
        //You cannot have two functions with the same name in a JavaScript object.
        //so we write in same onClick function or give them different name and create 2 <button> in xml
        // onClick: function () {
        //    alert("Button Clicked");
        // }

    });
});