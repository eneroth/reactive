// Compiled by ClojureScript 0.0-2138
goog.provide('reagent.impl.component');
goog.require('cljs.core');
goog.require('reagent.impl.template');
goog.require('reagent.debug');
goog.require('reagent.ratom');
goog.require('reagent.ratom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.template');
reagent.impl.component.cljs_state = "cljsState";
reagent.impl.component.state = (function state(this$){return (this$[reagent.impl.component.cljs_state]);
});
reagent.impl.component.replace_state = (function replace_state(this$,new_state){var old_state = reagent.impl.component.state.call(null,this$);if((old_state === new_state))
{return null;
} else
{(this$[reagent.impl.component.cljs_state] = new_state);
return this$.forceUpdate();
}
});
reagent.impl.component.set_state = (function set_state(this$,new_state){return reagent.impl.component.replace_state.call(null,this$,cljs.core.merge.call(null,reagent.impl.component.state.call(null,this$),new_state));
});
reagent.impl.component.js_props = (function js_props(C){return (C["props"]);
});
reagent.impl.component.props_in_props = (function props_in_props(props){return (props[reagent.impl.template.cljs_props]);
});
reagent.impl.component.get_props = (function get_props(C){return reagent.impl.component.props_in_props.call(null,reagent.impl.component.js_props.call(null,C));
});
reagent.impl.component.get_children = (function get_children(C){return (reagent.impl.component.js_props.call(null,C)[reagent.impl.template.cljs_children]);
});
reagent.impl.component.replace_props = (function replace_props(C,newprops){return C.setProps((function (){var obj9733 = {};(obj9733[reagent.impl.template.cljs_props] = newprops);
return obj9733;
})());
});
reagent.impl.component.set_props = (function set_props(C,newprops){return reagent.impl.component.replace_props.call(null,C,cljs.core.merge.call(null,reagent.impl.component.get_props.call(null,C),newprops));
});
reagent.impl.component.fake_raf = (function fake_raf(f){return setTimeout(f,16);
});
reagent.impl.component.next_tick = ((cljs.core.not.call(null,reagent.impl.template.isClient))?reagent.impl.component.fake_raf:(function (){var w = window;var or__3408__auto__ = w.requestAnimationFrame;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = w.webkitRequestAnimationFrame;if(cljs.core.truth_(or__3408__auto____$1))
{return or__3408__auto____$1;
} else
{var or__3408__auto____$2 = w.mozRequestAnimationFrame;if(cljs.core.truth_(or__3408__auto____$2))
{return or__3408__auto____$2;
} else
{var or__3408__auto____$3 = w.msRequestAnimationFrame;if(cljs.core.truth_(or__3408__auto____$3))
{return or__3408__auto____$3;
} else
{return reagent.impl.component.fake_raf;
}
}
}
}
})());
reagent.impl.component.compare_levels = (function compare_levels(c1,c2){return ((reagent.impl.component.js_props.call(null,c1)[reagent.impl.template.cljs_level]) - (reagent.impl.component.js_props.call(null,c2)[reagent.impl.template.cljs_level]));
});
reagent.impl.component.run_queue = (function run_queue(a){a.sort(reagent.impl.component.compare_levels);
var n__4250__auto__ = a.length;var i = 0;while(true){
if((i < n__4250__auto__))
{var C_9734 = (a[i]);if(cljs.core.truth_(C_9734.cljsIsDirty))
{C_9734.forceUpdate();
} else
{}
{
var G__9735 = (i + 1);
i = G__9735;
continue;
}
} else
{return null;
}
break;
}
});

/**
* @constructor
*/
reagent.impl.component.RenderQueue = (function (queue,scheduled_QMARK_){
this.queue = queue;
this.scheduled_QMARK_ = scheduled_QMARK_;
})
reagent.impl.component.RenderQueue.cljs$lang$type = true;
reagent.impl.component.RenderQueue.cljs$lang$ctorStr = "reagent.impl.component/RenderQueue";
reagent.impl.component.RenderQueue.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"reagent.impl.component/RenderQueue");
});
reagent.impl.component.RenderQueue.prototype.queue_render = (function (C){var self__ = this;
var this$ = this;self__.queue.push(C);
return this$.schedule();
});
reagent.impl.component.RenderQueue.prototype.schedule = (function (){var self__ = this;
var this$ = this;if(cljs.core.truth_(self__.scheduled_QMARK_))
{return null;
} else
{self__.scheduled_QMARK_ = true;
return reagent.impl.component.next_tick.call(null,(function (){return this$.run_queue();
}));
}
});
reagent.impl.component.RenderQueue.prototype.run_queue = (function (){var self__ = this;
var _ = this;var q = self__.queue;self__.queue = [];
self__.scheduled_QMARK_ = false;
return reagent.impl.component.run_queue.call(null,q);
});
reagent.impl.component.__GT_RenderQueue = (function __GT_RenderQueue(queue,scheduled_QMARK_){return (new reagent.impl.component.RenderQueue(queue,scheduled_QMARK_));
});
reagent.impl.component.render_queue = (new reagent.impl.component.RenderQueue([],false));
reagent.impl.component.flush = (function flush(){return reagent.impl.component.render_queue.run_queue();
});
reagent.impl.component.queue_render = (function queue_render(C){C.cljsIsDirty = true;
return reagent.impl.component.render_queue.queue_render(C);
});
reagent.impl.component.do_render = (function do_render(C,f){C.cljsIsDirty = false;
var p = reagent.impl.component.js_props.call(null,C);var props = reagent.impl.component.props_in_props.call(null,p);var children = (p[reagent.impl.template.cljs_children]);var res = f.call(null,props,children,C);var conv = ((cljs.core.vector_QMARK_.call(null,res))?reagent.impl.template.as_component.call(null,res,(p[reagent.impl.template.cljs_level])):((cljs.core.fn_QMARK_.call(null,res))?do_render.call(null,C,C.cljsRenderFn = res):res));return conv;
});
reagent.impl.component.render = (function render(C){if(cljs.core.truth_(C))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"C","C",-1640531460,null)))].join('')));
}
if((C.cljsRatom == null))
{C.cljsRatom = reagent.ratom.make_reaction.call(null,(function (){return reagent.impl.component.do_render.call(null,C,C.cljsRenderFn);
}),new cljs.core.Keyword(null,"auto-run","auto-run",2451476703),(cljs.core.truth_(reagent.impl.template.isClient)?(function (){return reagent.impl.component.queue_render.call(null,C);
}):cljs.core.identity));
} else
{}
return reagent.ratom.run.call(null,C.cljsRatom);
});
reagent.impl.component.custom_wrapper = (function custom_wrapper(key,f){var G__9737 = key;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"render","render",4374279432),G__9737))
{return (function (C){if((C.cljsRenderFn == null))
{C.cljsRenderFn = f;
} else
{}
return reagent.impl.component.render.call(null,C);
});
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",4147620643),G__9737))
{return (function (C){reagent.ratom.dispose_BANG_.call(null,C.cljsRatom);
C.cljsIsDirty = false;
if(cljs.core.truth_(f))
{return f.call(null,C);
} else
{return null;
}
});
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",4103164189),G__9737))
{return (function (C,oldprops){var p = (oldprops[reagent.impl.template.cljs_props]);var c = (oldprops[reagent.impl.template.cljs_children]);return f.call(null,C,p,c);
});
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",2086388618),G__9737))
{return (function (C,nextprops){var p = (nextprops[reagent.impl.template.cljs_props]);var c = (nextprops[reagent.impl.template.cljs_children]);return f.call(null,C,p,c);
});
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",3193956709),G__9737))
{return (function (C,nextprops,nextstate){var inprops = reagent.impl.component.js_props.call(null,C);var p1 = (inprops[reagent.impl.template.cljs_props]);var c1 = (inprops[reagent.impl.template.cljs_children]);var p2 = (nextprops[reagent.impl.template.cljs_props]);var c2 = (nextprops[reagent.impl.template.cljs_children]);if((f == null))
{return cljs.core.not.call(null,reagent.impl.util.equal_args.call(null,p1,c1,p2,c2));
} else
{return f.call(null,C,p1,p2,c1,c2);
}
});
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",2122862542),G__9737))
{return (function (C,props){if(cljs.core.truth_(f))
{return f.call(null,C,reagent.impl.component.props_in_props.call(null,props));
} else
{return null;
}
});
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"getInitialState","getInitialState",2219830677),G__9737))
{return (function (C){if(cljs.core.truth_(f))
{return (C[reagent.impl.component.cljs_state] = cljs.core.merge.call(null,reagent.impl.component.state.call(null,C),f.call(null,C)));
} else
{return null;
}
});
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"getDefaultProps","getDefaultProps",1976256919),G__9737))
{if(false)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("getDefaultProps not supported yet"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,false))].join('')));
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
}
}
}
}
}
}
});
reagent.impl.component.default_wrapper = (function default_wrapper(f){if(cljs.core.fn_QMARK_.call(null,f))
{return (function() { 
var G__9738__delegate = function (args){var C = this;return cljs.core.apply.call(null,f,C,args);
};
var G__9738 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9738__delegate.call(this,args);};
G__9738.cljs$lang$maxFixedArity = 0;
G__9738.cljs$lang$applyTo = (function (arglist__9739){
var args = cljs.core.seq(arglist__9739);
return G__9738__delegate(args);
});
G__9738.cljs$core$IFn$_invoke$arity$variadic = G__9738__delegate;
return G__9738;
})()
;
} else
{return f;
}
});
reagent.impl.component.get_wrapper = (function get_wrapper(key,f,name){var wrap = reagent.impl.component.custom_wrapper.call(null,key,f);if(cljs.core.truth_((function (){var and__3396__auto__ = wrap;if(cljs.core.truth_(and__3396__auto__))
{return f;
} else
{return and__3396__auto__;
}
})()))
{if(cljs.core.fn_QMARK_.call(null,f))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Expected function in "),cljs.core.str(name),cljs.core.str(key),cljs.core.str(" but got "),cljs.core.str(f)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",-1640430032,null),new cljs.core.Symbol(null,"f","f",-1640531425,null))))].join('')));
}
} else
{}
return reagent.impl.component.default_wrapper.call(null,(function (){var or__3408__auto__ = wrap;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return f;
}
})());
});
reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",3193956709),null,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",4147620643),null], null);
reagent.impl.component.camelify_map_keys = (function camelify_map_keys(m){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4119__auto__ = (function iter__9748(s__9749){return (new cljs.core.LazySeq(null,(function (){var s__9749__$1 = s__9749;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9749__$1);if(temp__4092__auto__)
{var s__9749__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9749__$2))
{var c__4117__auto__ = cljs.core.chunk_first.call(null,s__9749__$2);var size__4118__auto__ = cljs.core.count.call(null,c__4117__auto__);var b__9751 = cljs.core.chunk_buffer.call(null,size__4118__auto__);if((function (){var i__9750 = 0;while(true){
if((i__9750 < size__4118__auto__))
{var vec__9754 = cljs.core._nth.call(null,c__4117__auto__,i__9750);var k = cljs.core.nth.call(null,vec__9754,0,null);var v = cljs.core.nth.call(null,vec__9754,1,null);cljs.core.chunk_append.call(null,b__9751,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,reagent.impl.template.dash_to_camel.call(null,k)),v], null));
{
var G__9756 = (i__9750 + 1);
i__9750 = G__9756;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9751),iter__9748.call(null,cljs.core.chunk_rest.call(null,s__9749__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9751),null);
}
} else
{var vec__9755 = cljs.core.first.call(null,s__9749__$2);var k = cljs.core.nth.call(null,vec__9755,0,null);var v = cljs.core.nth.call(null,vec__9755,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,reagent.impl.template.dash_to_camel.call(null,k)),v], null),iter__9748.call(null,cljs.core.rest.call(null,s__9749__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4119__auto__.call(null,m);
})());
});
reagent.impl.component.add_obligatory = (function add_obligatory(fun_map){return cljs.core.merge.call(null,reagent.impl.component.obligatory,fun_map);
});
reagent.impl.component.wrap_funs = (function wrap_funs(fun_map){var name = (function (){var or__3408__auto__ = new cljs.core.Keyword(null,"displayName","displayName",2728053215).cljs$core$IFn$_invoke$arity$1(fun_map);if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{var temp__4092__auto__ = new cljs.core.Keyword(null,"render","render",4374279432).cljs$core$IFn$_invoke$arity$1(fun_map);if(cljs.core.truth_(temp__4092__auto__))
{var r = temp__4092__auto__;var or__3408__auto____$1 = r.displayName;if(cljs.core.truth_(or__3408__auto____$1))
{return or__3408__auto____$1;
} else
{return r.name;
}
} else
{return null;
}
}
})();var name1 = ((cljs.core.empty_QMARK_.call(null,name))?[cljs.core.str(cljs.core.gensym.call(null,"reagent"))].join(''):name);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4119__auto__ = (function iter__9765(s__9766){return (new cljs.core.LazySeq(null,(function (){var s__9766__$1 = s__9766;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9766__$1);if(temp__4092__auto__)
{var s__9766__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9766__$2))
{var c__4117__auto__ = cljs.core.chunk_first.call(null,s__9766__$2);var size__4118__auto__ = cljs.core.count.call(null,c__4117__auto__);var b__9768 = cljs.core.chunk_buffer.call(null,size__4118__auto__);if((function (){var i__9767 = 0;while(true){
if((i__9767 < size__4118__auto__))
{var vec__9771 = cljs.core._nth.call(null,c__4117__auto__,i__9767);var k = cljs.core.nth.call(null,vec__9771,0,null);var v = cljs.core.nth.call(null,vec__9771,1,null);cljs.core.chunk_append.call(null,b__9768,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,reagent.impl.component.get_wrapper.call(null,k,v,name1)], null));
{
var G__9773 = (i__9767 + 1);
i__9767 = G__9773;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9768),iter__9765.call(null,cljs.core.chunk_rest.call(null,s__9766__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9768),null);
}
} else
{var vec__9772 = cljs.core.first.call(null,s__9766__$2);var k = cljs.core.nth.call(null,vec__9772,0,null);var v = cljs.core.nth.call(null,vec__9772,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,reagent.impl.component.get_wrapper.call(null,k,v,name1)], null),iter__9765.call(null,cljs.core.rest.call(null,s__9766__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4119__auto__.call(null,cljs.core.assoc.call(null,fun_map,new cljs.core.Keyword(null,"displayName","displayName",2728053215),name1));
})());
});
reagent.impl.component.cljsify = (function cljsify(body){return cljs.core.clj__GT_js.call(null,reagent.impl.component.wrap_funs.call(null,reagent.impl.component.add_obligatory.call(null,reagent.impl.component.camelify_map_keys.call(null,body))));
});
reagent.impl.component.create_class = (function create_class(body){if(cljs.core.map_QMARK_.call(null,body))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1637187556,null),new cljs.core.Symbol(null,"body","body",-1637502117,null))))].join('')));
}
var spec = reagent.impl.component.cljsify.call(null,body);var res = reagent.impl.template.React.createClass(spec);var f = ((function (spec,res){
return (function() { 
var G__9778__delegate = function (args){var props = cljs.core.nth.call(null,args,0,null);var hasmap = cljs.core.map_QMARK_.call(null,props);var first_child = (((hasmap) || ((props == null)))?1:0);return res.call(null,(function (){var obj9777 = {};(obj9777[reagent.impl.template.cljs_props] = ((hasmap)?props:null));
(obj9777[reagent.impl.template.cljs_children] = (((cljs.core.count.call(null,args) > first_child))?cljs.core.subvec.call(null,args,first_child):null));
return obj9777;
})());
};
var G__9778 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9778__delegate.call(this,args);};
G__9778.cljs$lang$maxFixedArity = 0;
G__9778.cljs$lang$applyTo = (function (arglist__9779){
var args = cljs.core.seq(arglist__9779);
return G__9778__delegate(args);
});
G__9778.cljs$core$IFn$_invoke$arity$variadic = G__9778__delegate;
return G__9778;
})()
;})(spec,res))
;f.cljsReactClass = res;
res.cljsReactClass = res;
return f;
});

//# sourceMappingURL=component.js.map