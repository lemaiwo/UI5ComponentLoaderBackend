"use strict";sap.ui.define(["be/wl/zcomploaderlib/objects/BaseObject"],function(e){"use strict";return e.extend("be.wl.CompLoaderApp.model.Param",{constructor:function t(u){e.call(this,u)},getConvertedValue:function e(){switch(this.value){case"true":retu+
rn true;case"false":return false;default:if(isNaN(this.value)){return this.value}else{return Number(this.value)}}},getJSON:function e(){return this.getJSONObject(["id","value"])}})});                                                                        