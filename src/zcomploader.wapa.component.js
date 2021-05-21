"use strict";sap.ui.define(["sap/ui/core/UIComponent","sap/ui/core/mvc/View","sap/ui/core/mvc/ViewType","sap/ui/model/json/JSONModel","sap/ui/Device","be/wl/CompLoaderApp/model/models","./service/ConfigService","./service/ScenarioService","./state/Config+
State","sap/f/library"],function(e,t,i,a,o,r,s,n,c,u){"use strict";return e.extend("be.wl.CompLoaderApp.Component",{metadata:{manifest:"json",properties:{currentRouteName:{}}},CONFIG:"Config",init:function t(){var i;var o=this.getComponentData();e.protot+
ype.init.apply(this,arguments);if(o&&o.startupParameters){i={scenario:o.startupParameters.scenario[0],type:o.startupParameters.type[0],startupParameters:o.startupParameters}}if(!i){i={scenario:"S0000001",type:"T0000001"}}this._ocConfigService=new s(this.+
getModel("config"));this._oScenarioService=new n(this.getModel("scenario"));this._oConfigState=new c({config:this._ocConfigService},i);var u=new a;this.setModel(u);var p=this.getRouter();p.attachBeforeRouteMatched(this._onBeforeRouteMatched,this);p.initi+
alize();this.setModel(r.createDeviceModel(),"device");this.updateTitle(i.scenario)},updateTitle:function e(t){Promise.all([this.getService("ShellUIService"),this._oScenarioService.getTitle(t)]).then(function(e){e[0].setTitle(e[1].data.scenario_descr)})},+
_onBeforeRouteMatched:function e(t){var i=this.getModel(),a=t.getParameters().arguments.layout;this.setCurrentRouteName(t.getParameter("name"));if(!a){a=u.LayoutType.OneColumn}i.setProperty("/layout",a)},getState:function e(t){return this["_o"+t+"State"]+
}})});                                                                                                                                                                                                                                                         