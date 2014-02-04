// Compiled by ClojureScript 0.0-2138
goog.provide('reactive.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('reactive.helper');
goog.require('cljs.reader');
goog.require('reactive.plato');
goog.require('cljs.core.async');
goog.require('reactive.helper');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('reagent.core');
goog.require('reactive.plato');
goog.require('cljs.core.async');
reactive.core.greet = (function greet(person_name){return reactive.helper.log.call(null,"Hello",person_name,"!");
});
reactive.core.greet.call(null,"visitor");
reactive.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"version","version",1365512266),2,new cljs.core.Keyword(null,"collection","collection",3567559184),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kalle","kalle",1115717953),8,new cljs.core.Keyword(null,"ake","ake",1014000877),9], null),new cljs.core.Keyword(null,"x","x",1013904362),0,new cljs.core.Keyword(null,"y","y",1013904363),0], null));
reactive.core.base_key = "com.watercooler";
console.log(localStorage);
reactive.core.coord_div = (function coord_div(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"coords"], null),[cljs.core.str(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reactive.core.app_state))),cljs.core.str(" - "),cljs.core.str(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reactive.core.app_state)))].join('')], null);
});
reactive.core.extract_coords = (function extract_coords(mouse_event){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mouse_event.clientX,mouse_event.clientY], null);
});
reactive.core.constrain = (function constrain(p__19654){var vec__19656 = p__19654;var x = cljs.core.nth.call(null,vec__19656,0,null);var y = cljs.core.nth.call(null,vec__19656,1,null);var coords = vec__19656;return true;
});
reactive.core.mouse_channel = reactive.helper.listen.call(null,reactive.helper.get_element.call(null,"test"),"click");
reactive.core.coords_channel = cljs.core.async.map_LT_.call(null,reactive.core.extract_coords,reactive.core.mouse_channel);
reactive.core.constrained_channel = cljs.core.async.filter_LT_.call(null,reactive.core.constrain,reactive.core.coords_channel);
reactive.core.mouse_handler = (function mouse_handler(p__19657){var vec__19659 = p__19657;var x = cljs.core.nth.call(null,vec__19659,0,null);var y = cljs.core.nth.call(null,vec__19659,1,null);var coords = vec__19659;var pointer = reactive.helper.get_element.call(null,"coords");cljs.core.swap_BANG_.call(null,reactive.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"x","x",1013904362),x);
cljs.core.swap_BANG_.call(null,reactive.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"y","y",1013904363),y);
return reactive.plato.put.call(null,reactive.core.base_key,cljs.core.deref.call(null,reactive.core.app_state));
});
var c__5523__auto___19680 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_19668){var state_val_19669 = (state_19668[1]);if((state_val_19669 === 4))
{var inst_19662 = (state_19668[2]);var inst_19663 = reactive.core.mouse_handler.call(null,inst_19662);var state_19668__$1 = (function (){var statearr_19670 = state_19668;(statearr_19670[7] = inst_19663);
return statearr_19670;
})();var statearr_19671_19681 = state_19668__$1;(statearr_19671_19681[2] = null);
(statearr_19671_19681[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19669 === 3))
{var inst_19666 = (state_19668[2]);var state_19668__$1 = state_19668;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19668__$1,inst_19666);
} else
{if((state_val_19669 === 2))
{var state_19668__$1 = state_19668;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19668__$1,4,reactive.core.constrained_channel);
} else
{if((state_val_19669 === 1))
{var state_19668__$1 = state_19668;var statearr_19672_19682 = state_19668__$1;(statearr_19672_19682[2] = null);
(statearr_19672_19682[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_19676 = [null,null,null,null,null,null,null,null];(statearr_19676[0] = state_machine__5509__auto__);
(statearr_19676[1] = 1);
return statearr_19676;
});
var state_machine__5509__auto____1 = (function (state_19668){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_19668);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e19677){if((e19677 instanceof Object))
{var ex__5512__auto__ = e19677;var statearr_19678_19683 = state_19668;(statearr_19678_19683[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19668);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19677;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19684 = state_19668;
state_19668 = G__19684;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_19668){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_19668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_19679 = f__5524__auto__.call(null);(statearr_19679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___19680);
return statearr_19679;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
reactive.core.mountit = (function mountit(){return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reactive.core.coord_div], null),document.body);
});
reactive.core.mountit.call(null);
reactive.core.main = (function main(n){return reactive.plato.reset_BANG_.call(null,reactive.core.base_key,reactive.core.app_state);
});
goog.exportSymbol('reactive.core.main', reactive.core.main);

//# sourceMappingURL=core.js.map