// Compiled by ClojureScript 0.0-2411
goog.provide('reactive.core');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('reactive.helper');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('reactive.helper');
goog.require('plato.core');
goog.require('cljs.core.async');
goog.require('plato.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.reader');
reactive.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coords","coords",-599429112),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)], null));
reactive.core.mouse_channel = reactive.helper.listen.call(null,reactive.helper.get_element.call(null,new cljs.core.Keyword(null,"body","body",-2049205669)),"mousemove");
reactive.core.coords = (function coords(event){

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),event.clientX,new cljs.core.Keyword(null,"y","y",-1757859776),event.clientY], null);
});
reactive.core.coords_channel = cljs.core.async.map_LT_.call(null,reactive.core.coords,reactive.core.mouse_channel);
var c__5829__auto___14452 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5829__auto___14452){
return (function (){
var f__5830__auto__ = (function (){var switch__5814__auto__ = ((function (c__5829__auto___14452){
return (function (state_14435){
var state_val_14436 = (state_14435[(1)]);
if((state_val_14436 === (7))){
var inst_14424 = (state_14435[(2)]);
var inst_14425 = cljs.core.get.call(null,inst_14424,new cljs.core.Keyword(null,"y","y",-1757859776));
var inst_14426 = cljs.core.get.call(null,inst_14424,new cljs.core.Keyword(null,"x","x",2099068185));
var inst_14427 = [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)];
var inst_14428 = [inst_14426,inst_14425];
var inst_14429 = cljs.core.PersistentHashMap.fromArrays(inst_14427,inst_14428);
var inst_14430 = cljs.core.swap_BANG_.call(null,reactive.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"coords","coords",-599429112),inst_14429);
var state_14435__$1 = (function (){var statearr_14437 = state_14435;
(statearr_14437[(7)] = inst_14430);

return statearr_14437;
})();
var statearr_14438_14453 = state_14435__$1;
(statearr_14438_14453[(2)] = null);

(statearr_14438_14453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (6))){
var inst_14418 = (state_14435[(8)]);
var state_14435__$1 = state_14435;
var statearr_14439_14454 = state_14435__$1;
(statearr_14439_14454[(2)] = inst_14418);

(statearr_14439_14454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (5))){
var inst_14418 = (state_14435[(8)]);
var inst_14421 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14418);
var state_14435__$1 = state_14435;
var statearr_14440_14455 = state_14435__$1;
(statearr_14440_14455[(2)] = inst_14421);

(statearr_14440_14455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (4))){
var inst_14418 = (state_14435[(8)]);
var inst_14418__$1 = (state_14435[(2)]);
var inst_14419 = cljs.core.seq_QMARK_.call(null,inst_14418__$1);
var state_14435__$1 = (function (){var statearr_14441 = state_14435;
(statearr_14441[(8)] = inst_14418__$1);

return statearr_14441;
})();
if(inst_14419){
var statearr_14442_14456 = state_14435__$1;
(statearr_14442_14456[(1)] = (5));

} else {
var statearr_14443_14457 = state_14435__$1;
(statearr_14443_14457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14436 === (3))){
var inst_14433 = (state_14435[(2)]);
var state_14435__$1 = state_14435;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14435__$1,inst_14433);
} else {
if((state_val_14436 === (2))){
var state_14435__$1 = state_14435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14435__$1,(4),reactive.core.coords_channel);
} else {
if((state_val_14436 === (1))){
var state_14435__$1 = state_14435;
var statearr_14444_14458 = state_14435__$1;
(statearr_14444_14458[(2)] = null);

(statearr_14444_14458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__5829__auto___14452))
;
return ((function (switch__5814__auto__,c__5829__auto___14452){
return (function() {
var state_machine__5815__auto__ = null;
var state_machine__5815__auto____0 = (function (){
var statearr_14448 = [null,null,null,null,null,null,null,null,null];
(statearr_14448[(0)] = state_machine__5815__auto__);

(statearr_14448[(1)] = (1));

return statearr_14448;
});
var state_machine__5815__auto____1 = (function (state_14435){
while(true){
var ret_value__5816__auto__ = (function (){try{while(true){
var result__5817__auto__ = switch__5814__auto__.call(null,state_14435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5817__auto__;
}
break;
}
}catch (e14449){if((e14449 instanceof Object)){
var ex__5818__auto__ = e14449;
var statearr_14450_14459 = state_14435;
(statearr_14450_14459[(5)] = ex__5818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14460 = state_14435;
state_14435 = G__14460;
continue;
} else {
return ret_value__5816__auto__;
}
break;
}
});
state_machine__5815__auto__ = function(state_14435){
switch(arguments.length){
case 0:
return state_machine__5815__auto____0.call(this);
case 1:
return state_machine__5815__auto____1.call(this,state_14435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5815__auto____0;
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5815__auto____1;
return state_machine__5815__auto__;
})()
;})(switch__5814__auto__,c__5829__auto___14452))
})();
var state__5831__auto__ = (function (){var statearr_14451 = f__5830__auto__.call(null);
(statearr_14451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5829__auto___14452);

return statearr_14451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5831__auto__);
});})(c__5829__auto___14452))
);

reactive.core.coords_div = (function coords_div(){
var map__14462 = new cljs.core.Keyword(null,"coords","coords",-599429112).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reactive.core.app_state));
var map__14462__$1 = ((cljs.core.seq_QMARK_.call(null,map__14462))?cljs.core.apply.call(null,cljs.core.hash_map,map__14462):map__14462);
var y = cljs.core.get.call(null,map__14462__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__14462__$1,new cljs.core.Keyword(null,"x","x",2099068185));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str(x),cljs.core.str(" - "),cljs.core.str(y)].join('')], null);
});
reactive.core.main = (function main(n){
reactive.core.base_key = "com.reactive";

plato.core.restore_atom_BANG_.call(null,reactive.core.base_key,reactive.core.app_state);

plato.core.keep_updated_BANG_.call(null,reactive.core.base_key,reactive.core.app_state,false);

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reactive.core.coords_div], null),reactive.helper.get_element.call(null,new cljs.core.Keyword(null,"body","body",-2049205669)));
});
goog.exportSymbol('reactive.core.main', reactive.core.main);

//# sourceMappingURL=core.js.map?rel=1418726098414