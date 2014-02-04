// Compiled by ClojureScript 0.0-2138
goog.provide('reactive.plato');
goog.require('cljs.core');
goog.require('reactive.helper');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('reactive.helper');
reactive.plato.keyify = (function keyify(base_key,m){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4119__auto__ = (function iter__19719(s__19720){return (new cljs.core.LazySeq(null,(function (){var s__19720__$1 = s__19720;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__19720__$1);if(temp__4092__auto__)
{var s__19720__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19720__$2))
{var c__4117__auto__ = cljs.core.chunk_first.call(null,s__19720__$2);var size__4118__auto__ = cljs.core.count.call(null,c__4117__auto__);var b__19722 = cljs.core.chunk_buffer.call(null,size__4118__auto__);if((function (){var i__19721 = 0;while(true){
if((i__19721 < size__4118__auto__))
{var vec__19725 = cljs.core._nth.call(null,c__4117__auto__,i__19721);var k = cljs.core.nth.call(null,vec__19725,0,null);var v = cljs.core.nth.call(null,vec__19725,1,null);cljs.core.chunk_append.call(null,b__19722,(function (){var built_key = [cljs.core.str(base_key),cljs.core.str(k)].join('');if(cljs.core.map_QMARK_.call(null,v))
{return keyify.call(null,built_key,v);
} else
{return new cljs.core.PersistentArrayMap.fromArray([built_key,cljs.core.pr_str.call(null,v)], true, false);
}
})());
{
var G__19727 = (i__19721 + 1);
i__19721 = G__19727;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19722),iter__19719.call(null,cljs.core.chunk_rest.call(null,s__19720__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19722),null);
}
} else
{var vec__19726 = cljs.core.first.call(null,s__19720__$2);var k = cljs.core.nth.call(null,vec__19726,0,null);var v = cljs.core.nth.call(null,vec__19726,1,null);return cljs.core.cons.call(null,(function (){var built_key = [cljs.core.str(base_key),cljs.core.str(k)].join('');if(cljs.core.map_QMARK_.call(null,v))
{return keyify.call(null,built_key,v);
} else
{return new cljs.core.PersistentArrayMap.fromArray([built_key,cljs.core.pr_str.call(null,v)], true, false);
}
})(),iter__19719.call(null,cljs.core.rest.call(null,s__19720__$2)));
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
/**
* Returns a list of keys as split from a nested key string.
*/
reactive.plato.split_key = (function split_key(nested_key){return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.keyword,clojure.string.split.call(null,nested_key,/:/)));
});
/**
* Removes the base-key from the nested-key.
* Note: The : is added to base-key to avoid getting a trailing :
* when the nested key is turned into a collection
*/
reactive.plato.clean_key = (function clean_key(base_key,nested_key){return clojure.string.replace_first.call(null,nested_key,[cljs.core.str(base_key),cljs.core.str(":")].join(''),"");
});
/**
* Takes a base-key and a map of entries on format
* {com.example:a 1
* com.example:nested:c 2}
* and returns a map such that the base-key is removed from the beginning
* of each key, and the rest is parsed into a map structure. The example above
* should return
* {:a 1 :nested {:c 2}}
*/
reactive.plato.unkeyify = (function unkeyify(base_key,keyified_map){var unkeyified_map = cljs.core.map.call(null,(function (p1__19728_SHARP_){var vec__19732 = p1__19728_SHARP_;var k = cljs.core.nth.call(null,vec__19732,0,null);var v = cljs.core.nth.call(null,vec__19732,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reactive.plato.split_key.call(null,reactive.plato.clean_key.call(null,base_key,k)),cljs.reader.read_string.call(null,v)], null);
}),keyified_map);return cljs.core.reduce.call(null,(function (p1__19729_SHARP_,p2__19730_SHARP_){return cljs.core.apply.call(null,cljs.core.assoc_in,p1__19729_SHARP_,p2__19730_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,unkeyified_map);
});
reactive.plato.put = (function put(base_key,state){var serialized_state = reactive.plato.keyify.call(null,base_key,state);return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__19733_SHARP_){return localStorage.setItem(cljs.core.key.call(null,p1__19733_SHARP_),cljs.core.val.call(null,p1__19733_SHARP_));
}),serialized_state));
});
/**
* From a list of all keys, return a list with the keys that
* contains our base-key only.
*/
reactive.plato.filter_our_keys = (function filter_our_keys(base_key,all_keys){var base_pattern = cljs.core.re_pattern.call(null,[cljs.core.str("^"),cljs.core.str(base_key)].join(''));return cljs.core.filter.call(null,(function (p1__19734_SHARP_){return cljs.core.re_find.call(null,base_pattern,p1__19734_SHARP_);
}),all_keys);
});
reactive.plato.get = (function get(base_key){var all_keys = Object.keys(localStorage);var our_keys = reactive.plato.filter_our_keys.call(null,base_key,all_keys);var all_data = cljs.core.reduce.call(null,((function (all_keys,our_keys){
return (function (p1__19735_SHARP_,p2__19736_SHARP_){return cljs.core.assoc.call(null,p1__19735_SHARP_,p2__19736_SHARP_,(localStorage[p2__19736_SHARP_]));
});})(all_keys,our_keys))
,cljs.core.PersistentArrayMap.EMPTY,our_keys);return reactive.plato.unkeyify.call(null,base_key,all_data);
});
reactive.plato.reset_BANG_ = (function reset_BANG_(base_key,state_atom){return cljs.core.reset_BANG_.call(null,state_atom,reactive.plato.get.call(null,base_key));
});

//# sourceMappingURL=plato.js.map