// Compiled by ClojureScript 0.0-2138
goog.provide('reagent.ratom');
goog.require('cljs.core');
reagent.ratom._running = cljs.core.atom.call(null,0);
reagent.ratom.running = (function running(){return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.capture_derefed = (function capture_derefed(f){var _STAR_ratom_context_STAR_9627 = reagent.ratom._STAR_ratom_context_STAR_;try{reagent.ratom._STAR_ratom_context_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null),cljs.core.deref.call(null,reagent.ratom._STAR_ratom_context_STAR_)], null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_9627;
}});
reagent.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){if((reagent.ratom._STAR_ratom_context_STAR_ == null))
{return null;
} else
{return cljs.core.swap_BANG_.call(null,reagent.ratom._STAR_ratom_context_STAR_,cljs.core.conj,derefable);
}
});

/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
reagent.ratom.RAtom.cljs$lang$type = true;
reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";
reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"reagent.ratom/RAtom");
});
reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;return cljs.core.reduce_kv.call(null,(function (_,key,f){f.call(null,key,this$__$1,oldval,newval);
return null;
}),null,self__.watches);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var self__ = this;
var a__$1 = this;cljs.core._write.call(null,writer,"#<Atom: ");
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.meta;
});
reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);
return self__.state;
});
reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){return (new reagent.ratom.RAtom(state,meta,validator,watches));
});
/**
* Like clojure.core/atom, except that it keeps track of derefs.
* @param {...*} var_args
*/
reagent.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){return (new reagent.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__9631__delegate = function (x,p__9628){var map__9630 = p__9628;var map__9630__$1 = ((cljs.core.seq_QMARK_.call(null,map__9630))?cljs.core.apply.call(null,cljs.core.hash_map,map__9630):map__9630);var validator = cljs.core.get.call(null,map__9630__$1,new cljs.core.Keyword(null,"validator","validator",4199087812));var meta = cljs.core.get.call(null,map__9630__$1,new cljs.core.Keyword(null,"meta","meta",1017252215));return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__9631 = function (x,var_args){
var p__9628 = null;if (arguments.length > 1) {
  p__9628 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__9631__delegate.call(this,x,p__9628);};
G__9631.cljs$lang$maxFixedArity = 1;
G__9631.cljs$lang$applyTo = (function (arglist__9632){
var x = cljs.core.first(arglist__9632);
var p__9628 = cljs.core.rest(arglist__9632);
return G__9631__delegate(x,p__9628);
});
G__9631.cljs$core$IFn$_invoke$arity$variadic = G__9631__delegate;
return G__9631;
})()
;
atom = function(x,var_args){
var p__9628 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;
reagent.ratom.IDisposable = (function (){var obj9634 = {};return obj9634;
})();
reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){if((function (){var and__3396__auto__ = this$;if(and__3396__auto__)
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else
{var x__4029__auto__ = (((this$ == null))?null:this$);return (function (){var or__3408__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});
reagent.ratom.IRunnable = (function (){var obj9636 = {};return obj9636;
})();
reagent.ratom.run = (function run(this$){if((function (){var and__3396__auto__ = this$;if(and__3396__auto__)
{return this$.reagent$ratom$IRunnable$run$arity$1;
} else
{return and__3396__auto__;
}
})())
{return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else
{var x__4029__auto__ = (((this$ == null))?null:this$);return (function (){var or__3408__auto__ = (reagent.ratom.run[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (reagent.ratom.run["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
})().call(null,this$);
}
});
reagent.ratom.IComputedImpl = (function (){var obj9638 = {};return obj9638;
})();
reagent.ratom._update_watching = (function _update_watching(this$,derefed){if((function (){var and__3396__auto__ = this$;if(and__3396__auto__)
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else
{return and__3396__auto__;
}
})())
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else
{var x__4029__auto__ = (((this$ == null))?null:this$);return (function (){var or__3408__auto__ = (reagent.ratom._update_watching[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (reagent.ratom._update_watching["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});
reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){if((function (){var and__3396__auto__ = k;if(and__3396__auto__)
{return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else
{return and__3396__auto__;
}
})())
{return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else
{var x__4029__auto__ = (((k == null))?null:k);return (function (){var or__3408__auto__ = (reagent.ratom._handle_change[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (reagent.ratom._handle_change["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});
reagent.ratom.call_watches = (function call_watches(obs,watches,oldval,newval){return cljs.core.reduce_kv.call(null,(function (_,key,f){f.call(null,key,obs,oldval,newval);
return null;
}),null,watches);
});

/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
reagent.ratom.Reaction.cljs$lang$type = true;
reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";
reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"reagent.ratom/Reaction");
});
reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;cljs.core._write.call(null,writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash.call(null,this$__$1)),cljs.core.str(": ")].join(''));
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var seq__9639_9652 = cljs.core.seq.call(null,self__.watching);var chunk__9640_9653 = null;var count__9641_9654 = 0;var i__9642_9655 = 0;while(true){
if((i__9642_9655 < count__9641_9654))
{var w_9656 = cljs.core._nth.call(null,chunk__9640_9653,i__9642_9655);cljs.core.remove_watch.call(null,w_9656,this$__$1);
{
var G__9657 = seq__9639_9652;
var G__9658 = chunk__9640_9653;
var G__9659 = count__9641_9654;
var G__9660 = (i__9642_9655 + 1);
seq__9639_9652 = G__9657;
chunk__9640_9653 = G__9658;
count__9641_9654 = G__9659;
i__9642_9655 = G__9660;
continue;
}
} else
{var temp__4092__auto___9661 = cljs.core.seq.call(null,seq__9639_9652);if(temp__4092__auto___9661)
{var seq__9639_9662__$1 = temp__4092__auto___9661;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9639_9662__$1))
{var c__4150__auto___9663 = cljs.core.chunk_first.call(null,seq__9639_9662__$1);{
var G__9664 = cljs.core.chunk_rest.call(null,seq__9639_9662__$1);
var G__9665 = c__4150__auto___9663;
var G__9666 = cljs.core.count.call(null,c__4150__auto___9663);
var G__9667 = 0;
seq__9639_9652 = G__9664;
chunk__9640_9653 = G__9665;
count__9641_9654 = G__9666;
i__9642_9655 = G__9667;
continue;
}
} else
{var w_9668 = cljs.core.first.call(null,seq__9639_9662__$1);cljs.core.remove_watch.call(null,w_9668,this$__$1);
{
var G__9669 = cljs.core.next.call(null,seq__9639_9662__$1);
var G__9670 = null;
var G__9671 = 0;
var G__9672 = 0;
seq__9639_9652 = G__9669;
chunk__9640_9653 = G__9670;
count__9641_9654 = G__9671;
i__9642_9655 = G__9672;
continue;
}
}
} else
{}
}
break;
}
self__.watching = cljs.core.PersistentHashSet.EMPTY;
self__.state = null;
self__.dirty_QMARK_ = true;
if(cljs.core.truth_(self__.active_QMARK_))
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.dec);
self__.active_QMARK_ = false;
} else
{}
if(cljs.core.truth_(self__.on_dispose))
{return self__.on_dispose.call(null);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core.not.call(null,(function (){var or__3408__auto__ = self__.auto_run;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return reagent.ratom._STAR_ratom_context_STAR_;
}
})()))
{var x__8348__auto___9673 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,reagent.ratom._STAR_ratom_context_STAR_], null);if(!((console.log == null)))
{console.log([cljs.core.str([cljs.core.str("dbg "),cljs.core.str("reagent.ratom"),cljs.core.str(":"),cljs.core.str(124),cljs.core.str(": "),cljs.core.str("[auto-run *ratom-context*]"),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.call(null,x__8348__auto___9673))].join(''))].join(''));
} else
{}
} else
{}
if(cljs.core.truth_((function (){var or__3408__auto__ = self__.auto_run;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return reagent.ratom._STAR_ratom_context_STAR_;
}
})()))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Reaction derefed outside auto-running context"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),new cljs.core.Symbol(null,"auto-run","auto-run",-202959066,null),new cljs.core.Symbol(null,"*ratom-context*","*ratom-context*",1304741512,null))))].join('')));
}
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);
if(cljs.core.truth_(self__.dirty_QMARK_))
{return reagent.ratom.run.call(null,this$__$1);
} else
{return self__.state;
}
});
reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var oldstate = self__.state;var vec__9643 = reagent.ratom.capture_derefed.call(null,self__.f);var res = cljs.core.nth.call(null,vec__9643,0,null);var derefed = cljs.core.nth.call(null,vec__9643,1,null);if(cljs.core.not_EQ_.call(null,derefed,self__.watching))
{reagent.ratom._update_watching.call(null,this$__$1,derefed);
} else
{}
if(cljs.core.truth_(self__.active_QMARK_))
{} else
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
self__.active_QMARK_ = true;
}
self__.dirty_QMARK_ = false;
self__.state = res;
reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldstate,self__.state);
return res;
});
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_((function (){var and__3396__auto__ = self__.active_QMARK_;if(cljs.core.truth_(and__3396__auto__))
{return (cljs.core.not.call(null,self__.dirty_QMARK_)) && (!((oldval === newval)));
} else
{return and__3396__auto__;
}
})()))
{self__.dirty_QMARK_ = true;
return (function (){var or__3408__auto__ = self__.auto_run;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return reagent.ratom.run;
}
})().call(null,this$__$1);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){var self__ = this;
var this$__$1 = this;var seq__9644_9674 = cljs.core.seq.call(null,derefed);var chunk__9645_9675 = null;var count__9646_9676 = 0;var i__9647_9677 = 0;while(true){
if((i__9647_9677 < count__9646_9676))
{var w_9678 = cljs.core._nth.call(null,chunk__9645_9675,i__9647_9677);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_9678))
{} else
{cljs.core.add_watch.call(null,w_9678,this$__$1,reagent.ratom._handle_change);
}
{
var G__9679 = seq__9644_9674;
var G__9680 = chunk__9645_9675;
var G__9681 = count__9646_9676;
var G__9682 = (i__9647_9677 + 1);
seq__9644_9674 = G__9679;
chunk__9645_9675 = G__9680;
count__9646_9676 = G__9681;
i__9647_9677 = G__9682;
continue;
}
} else
{var temp__4092__auto___9683 = cljs.core.seq.call(null,seq__9644_9674);if(temp__4092__auto___9683)
{var seq__9644_9684__$1 = temp__4092__auto___9683;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9644_9684__$1))
{var c__4150__auto___9685 = cljs.core.chunk_first.call(null,seq__9644_9684__$1);{
var G__9686 = cljs.core.chunk_rest.call(null,seq__9644_9684__$1);
var G__9687 = c__4150__auto___9685;
var G__9688 = cljs.core.count.call(null,c__4150__auto___9685);
var G__9689 = 0;
seq__9644_9674 = G__9686;
chunk__9645_9675 = G__9687;
count__9646_9676 = G__9688;
i__9647_9677 = G__9689;
continue;
}
} else
{var w_9690 = cljs.core.first.call(null,seq__9644_9684__$1);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_9690))
{} else
{cljs.core.add_watch.call(null,w_9690,this$__$1,reagent.ratom._handle_change);
}
{
var G__9691 = cljs.core.next.call(null,seq__9644_9684__$1);
var G__9692 = null;
var G__9693 = 0;
var G__9694 = 0;
seq__9644_9674 = G__9691;
chunk__9645_9675 = G__9692;
count__9646_9676 = G__9693;
i__9647_9677 = G__9694;
continue;
}
}
} else
{}
}
break;
}
var seq__9648_9695 = cljs.core.seq.call(null,self__.watching);var chunk__9649_9696 = null;var count__9650_9697 = 0;var i__9651_9698 = 0;while(true){
if((i__9651_9698 < count__9650_9697))
{var w_9699 = cljs.core._nth.call(null,chunk__9649_9696,i__9651_9698);if(cljs.core.contains_QMARK_.call(null,derefed,w_9699))
{} else
{cljs.core.remove_watch.call(null,w_9699,this$__$1);
}
{
var G__9700 = seq__9648_9695;
var G__9701 = chunk__9649_9696;
var G__9702 = count__9650_9697;
var G__9703 = (i__9651_9698 + 1);
seq__9648_9695 = G__9700;
chunk__9649_9696 = G__9701;
count__9650_9697 = G__9702;
i__9651_9698 = G__9703;
continue;
}
} else
{var temp__4092__auto___9704 = cljs.core.seq.call(null,seq__9648_9695);if(temp__4092__auto___9704)
{var seq__9648_9705__$1 = temp__4092__auto___9704;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9648_9705__$1))
{var c__4150__auto___9706 = cljs.core.chunk_first.call(null,seq__9648_9705__$1);{
var G__9707 = cljs.core.chunk_rest.call(null,seq__9648_9705__$1);
var G__9708 = c__4150__auto___9706;
var G__9709 = cljs.core.count.call(null,c__4150__auto___9706);
var G__9710 = 0;
seq__9648_9695 = G__9707;
chunk__9649_9696 = G__9708;
count__9650_9697 = G__9709;
i__9651_9698 = G__9710;
continue;
}
} else
{var w_9711 = cljs.core.first.call(null,seq__9648_9705__$1);if(cljs.core.contains_QMARK_.call(null,derefed,w_9711))
{} else
{cljs.core.remove_watch.call(null,w_9711,this$__$1);
}
{
var G__9712 = cljs.core.next.call(null,seq__9648_9705__$1);
var G__9713 = null;
var G__9714 = 0;
var G__9715 = 0;
seq__9648_9695 = G__9712;
chunk__9649_9696 = G__9713;
count__9650_9697 = G__9714;
i__9651_9698 = G__9715;
continue;
}
}
} else
{}
}
break;
}
return self__.watching = derefed;
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(self__.on_set))
{self__.on_set.call(null,oldval,newval);
} else
{}
return reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldval,newval);
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.assoc.call(null,self__.watches,k,wf);
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;self__.watches = cljs.core.dissoc.call(null,self__.watches,k);
if(cljs.core.empty_QMARK_.call(null,self__.watches))
{return reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else
{return null;
}
});
reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});
/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__9716){var map__9718 = p__9716;var map__9718__$1 = ((cljs.core.seq_QMARK_.call(null,map__9718))?cljs.core.apply.call(null,cljs.core.hash_map,map__9718):map__9718);var on_dispose = cljs.core.get.call(null,map__9718__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2213067683));var on_set = cljs.core.get.call(null,map__9718__$1,new cljs.core.Keyword(null,"on-set","on-set",4294781670));var auto_run = cljs.core.get.call(null,map__9718__$1,new cljs.core.Keyword(null,"auto-run","auto-run",2451476703));var runner = ((cljs.core._EQ_.call(null,auto_run,true))?reagent.ratom.run:auto_run);return (new reagent.ratom.Reaction(f,null,true,false,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,runner,on_set,on_dispose));
};
var make_reaction = function (f,var_args){
var p__9716 = null;if (arguments.length > 1) {
  p__9716 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return make_reaction__delegate.call(this,f,p__9716);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__9719){
var f = cljs.core.first(arglist__9719);
var p__9716 = cljs.core.rest(arglist__9719);
return make_reaction__delegate(f,p__9716);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;

//# sourceMappingURL=ratom.js.map