"use strict";sap.ui.define(["be/wl/zcomploaderlib/cl/BaseController","be/wl/zcomploaderlib/library"],function(t,e){"use strict";return t.extend("be.wl.listcomponent2.controller.App",{onInit:function e(){t.prototype.onInit.apply(this,arguments)},onSelecti+
onChange:function t(n){var i,o;var l=n===null||n===void 0?void 0:(i=n.getParameter("listItem"))===null||i===void 0?void 0:(o=i.getBindingContext())===null||o===void 0?void 0:o.getObject();if(l){this.getOwnerComponent().fireAction({type:e.CentralEntryPoin+
tType.Navigate,data:{item:l}})}}})});                                                                                                                                                                                                                          