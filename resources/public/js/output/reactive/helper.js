// Compiled by ClojureScript 0.0-2138
goog.provide('reactive.helper');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events');
goog.require('cljs.core.async');
reactive.helper.get_element = (function get_element(element){return goog.dom.getElement(element);
});
/**
* @param {...*} var_args
*/
reactive.helper.log = (function() { 
var log__delegate = function (string_to_log){return console.log(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",string_to_log)));
};
var log = function (var_args){
var string_to_log = null;if (arguments.length > 0) {
  string_to_log = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,string_to_log);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__8602){
var string_to_log = cljs.core.seq(arglist__8602);
return log__delegate(string_to_log);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
reactive.helper.listen = (function listen(element,type){var out = cljs.core.async.chan.call(null);goog.events.listen(element,type,(function (e){return cljs.core.async.put_BANG_.call(null,out,e);
}));
return out;
});

//# sourceMappingURL=helper.js.map