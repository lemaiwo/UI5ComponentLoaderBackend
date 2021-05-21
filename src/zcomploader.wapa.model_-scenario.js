"use strict";sap.ui.define(["be/wl/zcomploaderlib/objects/BaseObject","./Component"],function(t,e){"use strict";return t.extend("be.wl.CompLoaderApp.model.Scenario",{constructor:function e(n){t.call(this,n);this.id=n.scenario;this.startupParameters=n.sta+
rtupParameters;this.components=[]},setComponents:function t(n){this.components=n.map(function(t){return new e(t)})},setTitle:function t(e){this.title=e},addComponent:function t(n){this.components.push(new e(n))},getNextLevel:function t(e){var n=++e;if(n<+
=this.components.length){return n}return false},getPreviousLevel:function t(e){var n=--e;if(n>0){return n}return false},hasComponents:function t(){return this.components&&Array.isArray(this.components)&&this.components.length>0},getComponent:function t(e+
){return this.components.find(function(t){return t.getLevel()==e})},getUIComponentData:function t(e){var n;if(this.getPreviousComponent(e)){n=this.getPreviousComponent(e).getData()}return n},getUIComponent:function t(e){return this.getComponent(e).getUIC+
omponent({data:this.getUIComponentData(e),level:e,startupParameters:this.startupParameters,scenario:this.getJSON()})},updateUIComponent:function t(e){return this.getComponent(e).updateUIComponentInput({data:this.getUIComponentData(e),level:e,scenario:thi+
s.getJSON()})},updateNextUIComponent:function t(e){var n=this.getNextComponent(e).getLevel();return this.updateUIComponent(n)},getNextComponent:function t(e){var n=this.getNextLevel(e);return n&&this.getComponent(n)},getPreviousComponent:function t(e){va+
r n=this.getPreviousLevel(e);return n&&this.getComponent(n)},getComponentIdByLevel:function t(e){return this.getComponent(e).getComponentId()},getRouteByLevel:function t(e){return this.getComponent(e).getView()},getNextComponentRoute:function t(e){var n=+
this.getNextLevel(e);if(n<this.components.length){return this.getRouteByLevel(n)}return false},getPreviousComponentRoute:function t(e){var n=this.getPreviousLevel(e);if(n<this.components.length){return this.getRouteByLevel(n)}return false},getComponents:+
function t(){return this.components},getJSON:function t(){var e=this.getJSONObject(["id","type"]);e.components=this.getComponents().map(function(t){return t.getJSON()});return e}})});                                                                        