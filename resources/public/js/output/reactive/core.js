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
var c__5829__auto___14788 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5829__auto___14788){
return (function (){
var f__5830__auto__ = (function (){var switch__5814__auto__ = ((function (c__5829__auto___14788){
return (function (state_14771){
var state_val_14772 = (state_14771[(1)]);
if((state_val_14772 === (7))){
var inst_14760 = (state_14771[(2)]);
var inst_14761 = cljs.core.get.call(null,inst_14760,new cljs.core.Keyword(null,"y","y",-1757859776));
var inst_14762 = cljs.core.get.call(null,inst_14760,new cljs.core.Keyword(null,"x","x",2099068185));
var inst_14763 = [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)];
var inst_14764 = [inst_14762,inst_14761];
var inst_14765 = cljs.core.PersistentHashMap.fromArrays(inst_14763,inst_14764);
var inst_14766 = cljs.core.swap_BANG_.call(null,reactive.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"coords","coords",-599429112),inst_14765);
var state_14771__$1 = (function (){var statearr_14773 = state_14771;
(statearr_14773[(7)] = inst_14766);

return statearr_14773;
})();
var statearr_14774_14789 = state_14771__$1;
(statearr_14774_14789[(2)] = null);

(statearr_14774_14789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14772 === (6))){
var inst_14754 = (state_14771[(8)]);
var state_14771__$1 = state_14771;
var statearr_14775_14790 = state_14771__$1;
(statearr_14775_14790[(2)] = inst_14754);

(statearr_14775_14790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14772 === (5))){
var inst_14754 = (state_14771[(8)]);
var inst_14757 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14754);
var state_14771__$1 = state_14771;
var statearr_14776_14791 = state_14771__$1;
(statearr_14776_14791[(2)] = inst_14757);

(statearr_14776_14791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14772 === (4))){
var inst_14754 = (state_14771[(8)]);
var inst_14754__$1 = (state_14771[(2)]);
var inst_14755 = cljs.core.seq_QMARK_.call(null,inst_14754__$1);
var state_14771__$1 = (function (){var statearr_14777 = state_14771;
(statearr_14777[(8)] = inst_14754__$1);

return statearr_14777;
})();
if(inst_14755){
var statearr_14778_14792 = state_14771__$1;
(statearr_14778_14792[(1)] = (5));

} else {
var statearr_14779_14793 = state_14771__$1;
(statearr_14779_14793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14772 === (3))){
var inst_14769 = (state_14771[(2)]);
var state_14771__$1 = state_14771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14771__$1,inst_14769);
} else {
if((state_val_14772 === (2))){
var state_14771__$1 = state_14771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14771__$1,(4),reactive.core.coords_channel);
} else {
if((state_val_14772 === (1))){
var state_14771__$1 = state_14771;
var statearr_14780_14794 = state_14771__$1;
(statearr_14780_14794[(2)] = null);

(statearr_14780_14794[(1)] = (2));


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
});})(c__5829__auto___14788))
;
return ((function (switch__5814__auto__,c__5829__auto___14788){
return (function() {
var state_machine__5815__auto__ = null;
var state_machine__5815__auto____0 = (function (){
var statearr_14784 = [null,null,null,null,null,null,null,null,null];
(statearr_14784[(0)] = state_machine__5815__auto__);

(statearr_14784[(1)] = (1));

return statearr_14784;
});
var state_machine__5815__auto____1 = (function (state_14771){
while(true){
var ret_value__5816__auto__ = (function (){try{while(true){
var result__5817__auto__ = switch__5814__auto__.call(null,state_14771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5817__auto__;
}
break;
}
}catch (e14785){if((e14785 instanceof Object)){
var ex__5818__auto__ = e14785;
var statearr_14786_14795 = state_14771;
(statearr_14786_14795[(5)] = ex__5818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14796 = state_14771;
state_14771 = G__14796;
continue;
} else {
return ret_value__5816__auto__;
}
break;
}
});
state_machine__5815__auto__ = function(state_14771){
switch(arguments.length){
case 0:
return state_machine__5815__auto____0.call(this);
case 1:
return state_machine__5815__auto____1.call(this,state_14771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5815__auto____0;
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5815__auto____1;
return state_machine__5815__auto__;
})()
;})(switch__5814__auto__,c__5829__auto___14788))
})();
var state__5831__auto__ = (function (){var statearr_14787 = f__5830__auto__.call(null);
(statearr_14787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5829__auto___14788);

return statearr_14787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5831__auto__);
});})(c__5829__auto___14788))
);

reactive.core.coords_div = (function coords_div(){
var map__14798 = new cljs.core.Keyword(null,"coords","coords",-599429112).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reactive.core.app_state));
var map__14798__$1 = ((cljs.core.seq_QMARK_.call(null,map__14798))?cljs.core.apply.call(null,cljs.core.hash_map,map__14798):map__14798);
var y = cljs.core.get.call(null,map__14798__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var x = cljs.core.get.call(null,map__14798__$1,new cljs.core.Keyword(null,"x","x",2099068185));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str(x),cljs.core.str(" - "),cljs.core.str(y)].join('')], null);
});
reactive.core.main = (function main(n){
reactive.core.base_key = "com.reactive";

plato.core.restore_atom_BANG_.call(null,reactive.core.base_key,reactive.core.app_state);

plato.core.keep_updated_BANG_.call(null,reactive.core.base_key,reactive.core.app_state,false);

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reactive.core.coords_div], null),reactive.helper.get_element.call(null,new cljs.core.Keyword(null,"body","body",-2049205669)));
});
goog.exportSymbol('reactive.core.main', reactive.core.main);

//# sourceMappingURL=core.js.map?rel=1418743559739