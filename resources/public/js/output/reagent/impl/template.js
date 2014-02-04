// Compiled by ClojureScript 0.0-2138
goog.provide('reagent.impl.template');
goog.require('cljs.core');
goog.require('reagent.debug');
goog.require('reagent.impl.util');
goog.require('reagent.impl.util');
goog.require('reagent.impl.reactimport');
goog.require('reagent.impl.reactimport');
goog.require('clojure.string');
goog.require('clojure.string');
reagent.impl.template.React = reagent.impl.reactimport.React;
reagent.impl.template.cljs_props = "cljsProps";
reagent.impl.template.cljs_children = "cljsChildren";
reagent.impl.template.cljs_level = "cljsLevel";
reagent.impl.template.isClient = !(((function (){try{return window.document;
}catch (e9780){if((e9780 instanceof Object))
{var e = e9780;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9780;
} else
{return null;
}
}
}})() == null));
reagent.impl.template.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.template.dash_to_camel = (function dash_to_camel(dashed){if(typeof dashed === 'string')
{return dashed;
} else
{var name_str = cljs.core.name.call(null,dashed);var vec__9782 = clojure.string.split.call(null,name_str,/-/);var start = cljs.core.nth.call(null,vec__9782,0,null);var parts = cljs.core.nthnext.call(null,vec__9782,1);if(cljs.core.truth_(reagent.impl.template.dont_camel_case.call(null,start)))
{return name_str;
} else
{return cljs.core.apply.call(null,cljs.core.str,start,cljs.core.map.call(null,clojure.string.capitalize,parts));
}
}
});
reagent.impl.template.attr_aliases = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",1108647146),"className",new cljs.core.Keyword(null,"for","for",1014005819),"htmlFor",new cljs.core.Keyword(null,"charset","charset",1752978622),"charSet"], null);
reagent.impl.template.undash_prop_name = (function undash_prop_name(n){var or__3408__auto__ = reagent.impl.template.attr_aliases.call(null,n);if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return reagent.impl.template.dash_to_camel.call(null,n);
}
});
reagent.impl.template.cached_prop_name = cljs.core.memoize.call(null,reagent.impl.template.undash_prop_name);
reagent.impl.template.cached_style_name = cljs.core.memoize.call(null,reagent.impl.template.dash_to_camel);
reagent.impl.template.to_js_val = (function to_js_val(v){if(!(cljs.core.ifn_QMARK_.call(null,v)))
{return v;
} else
{if((v instanceof cljs.core.Keyword))
{return cljs.core.name.call(null,v);
} else
{if((v instanceof cljs.core.Symbol))
{return [cljs.core.str(v)].join('');
} else
{if(cljs.core.coll_QMARK_.call(null,v))
{return cljs.core.clj__GT_js.call(null,v);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return (function() { 
var G__9783__delegate = function (args){return cljs.core.apply.call(null,v,args);
};
var G__9783 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9783__delegate.call(this,args);};
G__9783.cljs$lang$maxFixedArity = 0;
G__9783.cljs$lang$applyTo = (function (arglist__9784){
var args = cljs.core.seq(arglist__9784);
return G__9783__delegate(args);
});
G__9783.cljs$core$IFn$_invoke$arity$variadic = G__9783__delegate;
return G__9783;
})()
;
} else
{return null;
}
}
}
}
}
});
reagent.impl.template.convert_prop_value = (function convert_prop_value(val){if(cljs.core.map_QMARK_.call(null,val))
{return cljs.core.reduce_kv.call(null,(function (res,k,v){var G__9788 = res;(G__9788[reagent.impl.template.cached_prop_name.call(null,k)] = reagent.impl.template.to_js_val.call(null,v));
return G__9788;
}),(function (){var obj9790 = {};return obj9790;
})(),val);
} else
{return reagent.impl.template.to_js_val.call(null,val);
}
});
reagent.impl.template.set_id_class = (function set_id_class(props,p__9791){var vec__9793 = p__9791;var id = cljs.core.nth.call(null,vec__9793,0,null);var class$ = cljs.core.nth.call(null,vec__9793,1,null);(props["id"] = (function (){var or__3408__auto__ = (props["id"]);if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return id;
}
})());
if(cljs.core.truth_(class$))
{return (props["className"] = (function (){var temp__4090__auto__ = (props["className"]);if(cljs.core.truth_(temp__4090__auto__))
{var old = temp__4090__auto__;return [cljs.core.str(class$),cljs.core.str(" "),cljs.core.str(old)].join('');
} else
{return class$;
}
})());
} else
{return null;
}
});
reagent.impl.template.convert_props = (function convert_props(props,id_class){var is_empty = cljs.core.empty_QMARK_.call(null,props);if((is_empty) && ((id_class == null)))
{return null;
} else
{if((cljs.core.type.call(null,props) === Object))
{return props;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var objprops = (function (){var obj9798 = {};return obj9798;
})();if(is_empty)
{} else
{cljs.core.reduce_kv.call(null,(function (o,k,v){var G__9799 = o;(G__9799[reagent.impl.template.cached_prop_name.call(null,k)] = reagent.impl.template.convert_prop_value.call(null,v));
return G__9799;
}),objprops,props);
}
if((id_class == null))
{} else
{reagent.impl.template.set_id_class.call(null,objprops,id_class);
}
return objprops;
} else
{return null;
}
}
}
});
reagent.impl.template.map_into_array = (function map_into_array(f,arg,coll){return cljs.core.reduce.call(null,(function (a,x){var G__9801 = a;G__9801.push(f.call(null,x,arg));
return G__9801;
}),[],coll);
});
reagent.impl.template.DOM = (reagent.impl.template.React["DOM"]);
reagent.impl.template.input_components = cljs.core.PersistentHashSet.fromArray([(reagent.impl.template.DOM["input"]),(reagent.impl.template.DOM["textarea"])], true);
reagent.impl.template.get_props = (function get_props(this$){return ((this$["props"])[reagent.impl.template.cljs_props]);
});
reagent.impl.template.input_initial_state = (function input_initial_state(this$){var props = reagent.impl.template.get_props.call(null,this$);return {"checked": new cljs.core.Keyword(null,"checked","checked",1756218137).cljs$core$IFn$_invoke$arity$1(props), "value": new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(props)};
});
reagent.impl.template.input_handle_change = (function input_handle_change(this$,e){var props = reagent.impl.template.get_props.call(null,this$);var on_change = (function (){var or__3408__auto__ = props.call(null,new cljs.core.Keyword(null,"on-change","on-change",606853840));if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return props.call(null,"onChange");
}
})();if((on_change == null))
{return null;
} else
{var target_9802 = e.target;this$.setState({"checked": target_9802.checked, "value": target_9802.value});
return on_change.call(null,e);
}
});
reagent.impl.template.input_will_receive_props = (function input_will_receive_props(this$,new_props){var props = (new_props[reagent.impl.template.cljs_props]);return this$.setState({"checked": new cljs.core.Keyword(null,"checked","checked",1756218137).cljs$core$IFn$_invoke$arity$1(props), "value": new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(props)});
});
reagent.impl.template.input_render_setup = (function input_render_setup(this$,jsprops){var state = (this$["state"]);var G__9804 = jsprops;(G__9804["value"] = state.value);
(G__9804["checked"] = state.checked);
(G__9804["onChange"] = (this$["handleChange"]));
return G__9804;
});
reagent.impl.template.wrapped_render = (function wrapped_render(this$,comp,id_class){var inprops = (this$["props"]);var props = (inprops[reagent.impl.template.cljs_props]);var level = (inprops[reagent.impl.template.cljs_level]);var hasprops = ((props == null)) || (cljs.core.map_QMARK_.call(null,props));var jsargs = reagent.impl.template.map_into_array.call(null,reagent.impl.template.as_component,(level + 1),(inprops[reagent.impl.template.cljs_children]));var jsprops = reagent.impl.template.convert_props.call(null,props,id_class);if(cljs.core.truth_(reagent.impl.template.input_components.call(null,comp)))
{reagent.impl.template.input_render_setup.call(null,this$,jsprops);
} else
{}
jsargs.unshift(jsprops);
return comp.apply(null,jsargs);
});
reagent.impl.template.wrapped_should_update = (function wrapped_should_update(C,nextprops,nextstate){var inprops = (C["props"]);var p1 = (inprops[reagent.impl.template.cljs_props]);var c1 = (inprops[reagent.impl.template.cljs_children]);var p2 = (nextprops[reagent.impl.template.cljs_props]);var c2 = (nextprops[reagent.impl.template.cljs_children]);return cljs.core.not.call(null,reagent.impl.util.equal_args.call(null,p1,c1,p2,c2));
});
reagent.impl.template.wrap_component = (function wrap_component(comp,extras,name){var def = {"displayName": (function (){var or__3408__auto__ = name;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return "ComponentWrapper";
}
})(), "shouldComponentUpdate": (function (p1__9805_SHARP_,p2__9806_SHARP_){var C = this;return reagent.impl.template.wrapped_should_update.call(null,C,p1__9805_SHARP_,p2__9806_SHARP_);
}), "render": (function (){var C = this;return reagent.impl.template.wrapped_render.call(null,C,comp,extras);
})};if(cljs.core.truth_(reagent.impl.template.input_components.call(null,comp)))
{var G__9810_9811 = def;(G__9810_9811["shouldComponentUpdate"] = null);
(G__9810_9811["getInitialState"] = (function (){var C = this;return reagent.impl.template.input_initial_state.call(null,C);
}));
(G__9810_9811["handleChange"] = (function (p1__9807_SHARP_){var C = this;return reagent.impl.template.input_handle_change.call(null,C,p1__9807_SHARP_);
}));
(G__9810_9811["componentWillReceiveProps"] = (function (p1__9808_SHARP_){var C = this;return reagent.impl.template.input_will_receive_props.call(null,C,p1__9808_SHARP_);
}));
} else
{}
return reagent.impl.template.React.createClass(def);
});
/**
* Regular expression that parses a CSS-style id and class
* from a tag name.
*/
reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
reagent.impl.template.parse_tag = (function parse_tag(hiccup_tag){var vec__9813 = cljs.core.next.call(null,cljs.core.re_matches.call(null,reagent.impl.template.re_tag,cljs.core.name.call(null,hiccup_tag)));var tag = cljs.core.nth.call(null,vec__9813,0,null);var id = cljs.core.nth.call(null,vec__9813,1,null);var class$ = cljs.core.nth.call(null,vec__9813,2,null);var comp = (reagent.impl.template.DOM[tag]);var class_SINGLEQUOTE_ = (cljs.core.truth_(class$)?clojure.string.replace.call(null,class$,/\./," "):null);if(cljs.core.truth_(comp))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Unknown tag: '"),cljs.core.str(hiccup_tag),cljs.core.str("'")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"comp","comp",-1637472056,null)))].join('')));
}
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,(cljs.core.truth_((function (){var or__3408__auto__ = id;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return class_SINGLEQUOTE_;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,class_SINGLEQUOTE_], null):null)], null);
});
reagent.impl.template.get_wrapper = (function get_wrapper(tag){var vec__9815 = reagent.impl.template.parse_tag.call(null,tag);var comp = cljs.core.nth.call(null,vec__9815,0,null);var id_class = cljs.core.nth.call(null,vec__9815,1,null);return reagent.impl.template.wrap_component.call(null,comp,id_class,[cljs.core.str(tag)].join(''));
});
reagent.impl.template.cached_wrapper = cljs.core.memoize.call(null,reagent.impl.template.get_wrapper);
reagent.impl.template.fn_to_class = (function fn_to_class(f){var spec = cljs.core.meta.call(null,f);var withrender = cljs.core.merge.call(null,spec,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",4374279432),f], null));var res = reagent.core.create_class.call(null,withrender);var wrapf = res.cljsReactClass;f.cljsReactClass = wrapf;
return wrapf;
});
reagent.impl.template.as_class = (function as_class(tag){if((tag instanceof cljs.core.Keyword))
{return reagent.impl.template.cached_wrapper.call(null,tag);
} else
{if(cljs.core.fn_QMARK_.call(null,tag))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",-1640430032,null),new cljs.core.Symbol(null,"tag","tag",-1640416941,null))))].join('')));
}
var cached_class = tag.cljsReactClass;if(!((cached_class == null)))
{return cached_class;
} else
{if(cljs.core.truth_(reagent.impl.template.React.isValidClass(tag)))
{return tag.cljsReactClass = reagent.impl.template.wrap_component.call(null,tag,null,null);
} else
{return reagent.impl.template.fn_to_class.call(null,tag);
}
}
}
});
reagent.impl.template.vec_to_comp = (function vec_to_comp(v,level){if((cljs.core.count.call(null,v) > 0))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-1637084636,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"v","v",-1640531409,null)))))].join('')));
}
var vec__9819 = v;var tag = cljs.core.nth.call(null,vec__9819,0,null);var props = cljs.core.nth.call(null,vec__9819,1,null);var hasmap = cljs.core.map_QMARK_.call(null,props);var first_child = (((hasmap) || ((props == null)))?2:1);var c = reagent.impl.template.as_class.call(null,tag);var jsprops = (function (){var obj9821 = {};(obj9821[reagent.impl.template.cljs_props] = ((hasmap)?props:null));
(obj9821[reagent.impl.template.cljs_children] = (((cljs.core.count.call(null,v) > first_child))?cljs.core.subvec.call(null,v,first_child):null));
(obj9821[reagent.impl.template.cljs_level] = level);
return obj9821;
})();if(hasmap)
{var key_9822 = new cljs.core.Keyword(null,"key","key",1014010321).cljs$core$IFn$_invoke$arity$1(props);if((key_9822 == null))
{} else
{(jsprops["key"] = key_9822);
}
} else
{}
return c.call(null,jsprops);
});
reagent.impl.template.as_component = (function() {
var as_component = null;
var as_component__1 = (function (x){return as_component.call(null,x,0);
});
var as_component__2 = (function (x,level){if(cljs.core.vector_QMARK_.call(null,x))
{return reagent.impl.template.vec_to_comp.call(null,x,level);
} else
{if(cljs.core.seq_QMARK_.call(null,x))
{return reagent.impl.template.map_into_array.call(null,as_component,level,x);
} else
{if(true)
{return x;
} else
{return null;
}
}
}
});
as_component = function(x,level){
switch(arguments.length){
case 1:
return as_component__1.call(this,x);
case 2:
return as_component__2.call(this,x,level);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
as_component.cljs$core$IFn$_invoke$arity$1 = as_component__1;
as_component.cljs$core$IFn$_invoke$arity$2 = as_component__2;
return as_component;
})()
;

//# sourceMappingURL=template.js.map