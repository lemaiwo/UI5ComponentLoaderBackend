"use strict";sap.ui.define(["be/wl/zcomploaderlib/cl/UIComponent","sap/ui/Device","be/wl/detailcomponentgeneric/model/models"],function(e,t,i){"use strict";return e.extend("be.wl.detailcomponentgeneric.Component",{metadata:{manifest:"json"},init:function+
 t(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device")}})});                                                                                                                                  