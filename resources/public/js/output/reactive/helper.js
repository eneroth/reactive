// Compiled by ClojureScript 0.0-2411
goog.provide('reactive.helper');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events');
goog.require('cljs.core.async');
reactive.helper.get_element = (function get_element(element_tag){
return goog.dom.getElement(cljs.core.name.call(null,element_tag));
});
reactive.helper.get_element_by_id = (function get_element_by_id(element_id){
return goog.dom.getElement(element_id);
});
reactive.helper.query_element = (function query_element(selector){
return goog.dom.query(selector);
});
/**
* @param {...*} var_args
*/
reactive.helper.log = (function() {
var log = null;
var log__1 = (function (one_thing){
return console.log(one_thing);
});
var log__2 = (function() { 
var G__9426__delegate = function (one_thing,string_to_log){
return console.log([cljs.core.str(one_thing),cljs.core.str(" "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",string_to_log)))].join(''));
};
var G__9426 = function (one_thing,var_args){
var string_to_log = null;
if (arguments.length > 1) {
  string_to_log = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9426__delegate.call(this,one_thing,string_to_log);};
G__9426.cljs$lang$maxFixedArity = 1;
G__9426.cljs$lang$applyTo = (function (arglist__9427){
var one_thing = cljs.core.first(arglist__9427);
var string_to_log = cljs.core.rest(arglist__9427);
return G__9426__delegate(one_thing,string_to_log);
});
G__9426.cljs$core$IFn$_invoke$arity$variadic = G__9426__delegate;
return G__9426;
})()
;
log = function(one_thing,var_args){
var string_to_log = var_args;
switch(arguments.length){
case 1:
return log__1.call(this,one_thing);
default:
return log__2.cljs$core$IFn$_invoke$arity$variadic(one_thing, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = log__2.cljs$lang$applyTo;
log.cljs$core$IFn$_invoke$arity$1 = log__1;
log.cljs$core$IFn$_invoke$arity$variadic = log__2.cljs$core$IFn$_invoke$arity$variadic;
return log;
})()
;
/**
* @param {...*} var_args
*/
reactive.helper.log_str = (function() { 
var log_str__delegate = function (others){
return cljs.core.apply.call(null,reactive.helper.log,cljs.core.map.call(null,cljs.core.str,others));
};
var log_str = function (var_args){
var others = null;
if (arguments.length > 0) {
  others = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log_str__delegate.call(this,others);};
log_str.cljs$lang$maxFixedArity = 0;
log_str.cljs$lang$applyTo = (function (arglist__9428){
var others = cljs.core.seq(arglist__9428);
return log_str__delegate(others);
});
log_str.cljs$core$IFn$_invoke$arity$variadic = log_str__delegate;
return log_str;
})()
;
reactive.helper.listen = (function listen(element,event_type){

var out = cljs.core.async.chan.call(null);
goog.events.listen(element,event_type,((function (out){
return (function (e){
return cljs.core.async.put_BANG_.call(null,out,e);
});})(out))
);

return out;
});
reactive.helper.type_route = (function type_route(channel,message_types){

var channel__$1 = channel;
var message_types__$1 = message_types;
var new_channels = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,message_types__$1)){
return cljs.core.assoc.call(null,new_channels,new cljs.core.Keyword(null,"other","other",995793544),channel__$1);
} else {
var the_type = cljs.core.first.call(null,message_types__$1);
var vec__9431 = cljs.core.async.split.call(null,((function (channel__$1,message_types__$1,new_channels,the_type){
return (function (p1__9429_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__9429_SHARP_),the_type);
});})(channel__$1,message_types__$1,new_channels,the_type))
,channel__$1);
var new$ = cljs.core.nth.call(null,vec__9431,(0),null);
var other = cljs.core.nth.call(null,vec__9431,(1),null);
var new_content = cljs.core.async.map_LT_.call(null,new cljs.core.Keyword(null,"content","content",15833224),new$);
var G__9432 = other;
var G__9433 = cljs.core.rest.call(null,message_types__$1);
var G__9434 = cljs.core.assoc.call(null,new_channels,the_type,new_content);
channel__$1 = G__9432;
message_types__$1 = G__9433;
new_channels = G__9434;
continue;
}
break;
}
});

//# sourceMappingURL=helper.js.map?rel=1418725957439