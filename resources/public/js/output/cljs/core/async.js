// Compiled by ClojureScript 0.0-2138
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t9943 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9943 = (function (f,fn_handler,meta9944){
this.f = f;
this.fn_handler = fn_handler;
this.meta9944 = meta9944;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9943.cljs$lang$type = true;
cljs.core.async.t9943.cljs$lang$ctorStr = "cljs.core.async/t9943";
cljs.core.async.t9943.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9943");
});
cljs.core.async.t9943.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9943.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t9943.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t9943.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9945){var self__ = this;
var _9945__$1 = this;return self__.meta9944;
});
cljs.core.async.t9943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9945,meta9944__$1){var self__ = this;
var _9945__$1 = this;return (new cljs.core.async.t9943(self__.f,self__.fn_handler,meta9944__$1));
});
cljs.core.async.__GT_t9943 = (function __GT_t9943(f__$1,fn_handler__$1,meta9944){return (new cljs.core.async.t9943(f__$1,fn_handler__$1,meta9944));
});
}
return (new cljs.core.async.t9943(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__9947 = buff;if(G__9947)
{var bit__4052__auto__ = null;if(cljs.core.truth_((function (){var or__3408__auto__ = bit__4052__auto__;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return G__9947.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__9947.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9947);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9947);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_9948 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_9948);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_9948);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3396__auto__ = ret;if(cljs.core.truth_(and__3396__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3396__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4250__auto___9949 = n;var x_9950 = 0;while(true){
if((x_9950 < n__4250__auto___9949))
{(a[x_9950] = 0);
{
var G__9951 = (x_9950 + 1);
x_9950 = G__9951;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__9952 = (i + 1);
i = G__9952;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t9956 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9956 = (function (flag,alt_flag,meta9957){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta9957 = meta9957;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9956.cljs$lang$type = true;
cljs.core.async.t9956.cljs$lang$ctorStr = "cljs.core.async/t9956";
cljs.core.async.t9956.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9956");
});
cljs.core.async.t9956.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9956.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t9956.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t9956.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9958){var self__ = this;
var _9958__$1 = this;return self__.meta9957;
});
cljs.core.async.t9956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9958,meta9957__$1){var self__ = this;
var _9958__$1 = this;return (new cljs.core.async.t9956(self__.flag,self__.alt_flag,meta9957__$1));
});
cljs.core.async.__GT_t9956 = (function __GT_t9956(flag__$1,alt_flag__$1,meta9957){return (new cljs.core.async.t9956(flag__$1,alt_flag__$1,meta9957));
});
}
return (new cljs.core.async.t9956(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t9962 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9962 = (function (cb,flag,alt_handler,meta9963){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta9963 = meta9963;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9962.cljs$lang$type = true;
cljs.core.async.t9962.cljs$lang$ctorStr = "cljs.core.async/t9962";
cljs.core.async.t9962.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9962");
});
cljs.core.async.t9962.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9962.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t9962.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t9962.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9964){var self__ = this;
var _9964__$1 = this;return self__.meta9963;
});
cljs.core.async.t9962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9964,meta9963__$1){var self__ = this;
var _9964__$1 = this;return (new cljs.core.async.t9962(self__.cb,self__.flag,self__.alt_handler,meta9963__$1));
});
cljs.core.async.__GT_t9962 = (function __GT_t9962(cb__$1,flag__$1,alt_handler__$1,meta9963){return (new cljs.core.async.t9962(cb__$1,flag__$1,alt_handler__$1,meta9963));
});
}
return (new cljs.core.async.t9962(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9965_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9965_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3408__auto__ = wport;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__9966 = (i + 1);
i = G__9966;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3408__auto__ = ret;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3396__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3396__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3396__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__9967){var map__9969 = p__9967;var map__9969__$1 = ((cljs.core.seq_QMARK_.call(null,map__9969))?cljs.core.apply.call(null,cljs.core.hash_map,map__9969):map__9969);var opts = map__9969__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__9967 = null;if (arguments.length > 1) {
  p__9967 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__9967);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9970){
var ports = cljs.core.first(arglist__9970);
var p__9967 = cljs.core.rest(arglist__9970);
return alts_BANG___delegate(ports,p__9967);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t9978 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9978 = (function (ch,f,map_LT_,meta9979){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9979 = meta9979;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9978.cljs$lang$type = true;
cljs.core.async.t9978.cljs$lang$ctorStr = "cljs.core.async/t9978";
cljs.core.async.t9978.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9978");
});
cljs.core.async.t9978.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9978.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t9978.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9978.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t9981 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9981 = (function (fn1,_,meta9979,ch,f,map_LT_,meta9982){
this.fn1 = fn1;
this._ = _;
this.meta9979 = meta9979;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9982 = meta9982;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9981.cljs$lang$type = true;
cljs.core.async.t9981.cljs$lang$ctorStr = "cljs.core.async/t9981";
cljs.core.async.t9981.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9981");
});
cljs.core.async.t9981.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9981.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t9981.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t9981.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__9971_SHARP_){return f1.call(null,(((p1__9971_SHARP_ == null))?null:self__.f.call(null,p1__9971_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t9981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9983){var self__ = this;
var _9983__$1 = this;return self__.meta9982;
});
cljs.core.async.t9981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9983,meta9982__$1){var self__ = this;
var _9983__$1 = this;return (new cljs.core.async.t9981(self__.fn1,self__._,self__.meta9979,self__.ch,self__.f,self__.map_LT_,meta9982__$1));
});
cljs.core.async.__GT_t9981 = (function __GT_t9981(fn1__$1,___$2,meta9979__$1,ch__$2,f__$2,map_LT___$2,meta9982){return (new cljs.core.async.t9981(fn1__$1,___$2,meta9979__$1,ch__$2,f__$2,map_LT___$2,meta9982));
});
}
return (new cljs.core.async.t9981(fn1,___$1,self__.meta9979,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3396__auto__ = ret;if(cljs.core.truth_(and__3396__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3396__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t9978.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9978.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9980){var self__ = this;
var _9980__$1 = this;return self__.meta9979;
});
cljs.core.async.t9978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9980,meta9979__$1){var self__ = this;
var _9980__$1 = this;return (new cljs.core.async.t9978(self__.ch,self__.f,self__.map_LT_,meta9979__$1));
});
cljs.core.async.__GT_t9978 = (function __GT_t9978(ch__$1,f__$1,map_LT___$1,meta9979){return (new cljs.core.async.t9978(ch__$1,f__$1,map_LT___$1,meta9979));
});
}
return (new cljs.core.async.t9978(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t9987 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9987 = (function (ch,f,map_GT_,meta9988){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta9988 = meta9988;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9987.cljs$lang$type = true;
cljs.core.async.t9987.cljs$lang$ctorStr = "cljs.core.async/t9987";
cljs.core.async.t9987.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9987");
});
cljs.core.async.t9987.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9987.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t9987.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9987.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9987.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9987.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9987.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9989){var self__ = this;
var _9989__$1 = this;return self__.meta9988;
});
cljs.core.async.t9987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9989,meta9988__$1){var self__ = this;
var _9989__$1 = this;return (new cljs.core.async.t9987(self__.ch,self__.f,self__.map_GT_,meta9988__$1));
});
cljs.core.async.__GT_t9987 = (function __GT_t9987(ch__$1,f__$1,map_GT___$1,meta9988){return (new cljs.core.async.t9987(ch__$1,f__$1,map_GT___$1,meta9988));
});
}
return (new cljs.core.async.t9987(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t9993 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9993 = (function (ch,p,filter_GT_,meta9994){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta9994 = meta9994;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9993.cljs$lang$type = true;
cljs.core.async.t9993.cljs$lang$ctorStr = "cljs.core.async/t9993";
cljs.core.async.t9993.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t9993");
});
cljs.core.async.t9993.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9993.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t9993.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9993.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9993.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9993.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9993.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9995){var self__ = this;
var _9995__$1 = this;return self__.meta9994;
});
cljs.core.async.t9993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9995,meta9994__$1){var self__ = this;
var _9995__$1 = this;return (new cljs.core.async.t9993(self__.ch,self__.p,self__.filter_GT_,meta9994__$1));
});
cljs.core.async.__GT_t9993 = (function __GT_t9993(ch__$1,p__$1,filter_GT___$1,meta9994){return (new cljs.core.async.t9993(ch__$1,p__$1,filter_GT___$1,meta9994));
});
}
return (new cljs.core.async.t9993(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5523__auto___10078 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_10057){var state_val_10058 = (state_10057[1]);if((state_val_10058 === 1))
{var state_10057__$1 = state_10057;var statearr_10059_10079 = state_10057__$1;(statearr_10059_10079[2] = null);
(statearr_10059_10079[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10058 === 2))
{var state_10057__$1 = state_10057;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10057__$1,4,ch);
} else
{if((state_val_10058 === 3))
{var inst_10055 = (state_10057[2]);var state_10057__$1 = state_10057;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10057__$1,inst_10055);
} else
{if((state_val_10058 === 4))
{var inst_10039 = (state_10057[7]);var inst_10039__$1 = (state_10057[2]);var inst_10040 = (inst_10039__$1 == null);var state_10057__$1 = (function (){var statearr_10060 = state_10057;(statearr_10060[7] = inst_10039__$1);
return statearr_10060;
})();if(cljs.core.truth_(inst_10040))
{var statearr_10061_10080 = state_10057__$1;(statearr_10061_10080[1] = 5);
} else
{var statearr_10062_10081 = state_10057__$1;(statearr_10062_10081[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10058 === 5))
{var inst_10042 = cljs.core.async.close_BANG_.call(null,out);var state_10057__$1 = state_10057;var statearr_10063_10082 = state_10057__$1;(statearr_10063_10082[2] = inst_10042);
(statearr_10063_10082[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10058 === 6))
{var inst_10039 = (state_10057[7]);var inst_10044 = p.call(null,inst_10039);var state_10057__$1 = state_10057;if(cljs.core.truth_(inst_10044))
{var statearr_10064_10083 = state_10057__$1;(statearr_10064_10083[1] = 8);
} else
{var statearr_10065_10084 = state_10057__$1;(statearr_10065_10084[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10058 === 7))
{var inst_10053 = (state_10057[2]);var state_10057__$1 = state_10057;var statearr_10066_10085 = state_10057__$1;(statearr_10066_10085[2] = inst_10053);
(statearr_10066_10085[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10058 === 8))
{var inst_10039 = (state_10057[7]);var state_10057__$1 = state_10057;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10057__$1,11,out,inst_10039);
} else
{if((state_val_10058 === 9))
{var state_10057__$1 = state_10057;var statearr_10067_10086 = state_10057__$1;(statearr_10067_10086[2] = null);
(statearr_10067_10086[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10058 === 10))
{var inst_10050 = (state_10057[2]);var state_10057__$1 = (function (){var statearr_10068 = state_10057;(statearr_10068[8] = inst_10050);
return statearr_10068;
})();var statearr_10069_10087 = state_10057__$1;(statearr_10069_10087[2] = null);
(statearr_10069_10087[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10058 === 11))
{var inst_10047 = (state_10057[2]);var state_10057__$1 = state_10057;var statearr_10070_10088 = state_10057__$1;(statearr_10070_10088[2] = inst_10047);
(statearr_10070_10088[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_10074 = [null,null,null,null,null,null,null,null,null];(statearr_10074[0] = state_machine__5509__auto__);
(statearr_10074[1] = 1);
return statearr_10074;
});
var state_machine__5509__auto____1 = (function (state_10057){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_10057);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e10075){if((e10075 instanceof Object))
{var ex__5512__auto__ = e10075;var statearr_10076_10089 = state_10057;(statearr_10076_10089[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10057);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10075;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10090 = state_10057;
state_10057 = G__10090;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_10057){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_10057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_10077 = f__5524__auto__.call(null);(statearr_10077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___10078);
return statearr_10077;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5523__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_10242){var state_val_10243 = (state_10242[1]);if((state_val_10243 === 1))
{var state_10242__$1 = state_10242;var statearr_10244_10281 = state_10242__$1;(statearr_10244_10281[2] = null);
(statearr_10244_10281[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10243 === 2))
{var state_10242__$1 = state_10242;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10242__$1,4,in$);
} else
{if((state_val_10243 === 3))
{var inst_10240 = (state_10242[2]);var state_10242__$1 = state_10242;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10242__$1,inst_10240);
} else
{if((state_val_10243 === 4))
{var inst_10188 = (state_10242[7]);var inst_10188__$1 = (state_10242[2]);var inst_10189 = (inst_10188__$1 == null);var state_10242__$1 = (function (){var statearr_10245 = state_10242;(statearr_10245[7] = inst_10188__$1);
return statearr_10245;
})();if(cljs.core.truth_(inst_10189))
{var statearr_10246_10282 = state_10242__$1;(statearr_10246_10282[1] = 5);
} else
{var statearr_10247_10283 = state_10242__$1;(statearr_10247_10283[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10243 === 5))
{var inst_10191 = cljs.core.async.close_BANG_.call(null,out);var state_10242__$1 = state_10242;var statearr_10248_10284 = state_10242__$1;(statearr_10248_10284[2] = inst_10191);
(statearr_10248_10284[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10243 === 6))
{var inst_10188 = (state_10242[7]);var inst_10193 = f.call(null,inst_10188);var inst_10198 = cljs.core.seq.call(null,inst_10193);var inst_10199 = inst_10198;var inst_10200 = null;var inst_10201 = 0;var inst_10202 = 0;var state_10242__$1 = (function (){var statearr_10249 = state_10242;(statearr_10249[8] = inst_10202);
(statearr_10249[9] = inst_10201);
(statearr_10249[10] = inst_10200);
(statearr_10249[11] = inst_10199);
return statearr_10249;
})();var statearr_10250_10285 = state_10242__$1;(statearr_10250_10285[2] = null);
(statearr_10250_10285[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10243 === 7))
{var inst_10238 = (state_10242[2]);var state_10242__$1 = state_10242;var statearr_10251_10286 = state_10242__$1;(statearr_10251_10286[2] = inst_10238);
(statearr_10251_10286[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10243 === 8))
{var inst_10202 = (state_10242[8]);var inst_10201 = (state_10242[9]);var inst_10204 = (inst_10202 < inst_10201);var inst_10205 = inst_10204;var state_10242__$1 = state_10242;if(cljs.core.truth_(inst_10205))
{var statearr_10252_10287 = state_10242__$1;(statearr_10252_10287[1] = 10);
} else
{var statearr_10253_10288 = state_10242__$1;(statearr_10253_10288[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10243 === 9))
{var inst_10235 = (state_10242[2]);var state_10242__$1 = (function (){var statearr_10254 = state_10242;(statearr_10254[12] = inst_10235);
return statearr_10254;
})();var statearr_10255_10289 = state_10242__$1;(statearr_10255_10289[2] = null);
(statearr_10255_10289[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10243 === 10))
{var inst_10202 = (state_10242[8]);var inst_10200 = (state_10242[10]);var inst_10207 = cljs.core._nth.call(null,inst_10200,inst_10202);var state_10242__$1 = state_10242;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10242__$1,13,out,inst_10207);
} else
{if((state_val_10243 === 11))
{var inst_10199 = (state_10242[11]);var inst_10213 = (state_10242[13]);var inst_10213__$1 = cljs.core.seq.call(null,inst_10199);var state_10242__$1 = (function (){var statearr_10259 = state_10242;(statearr_10259[13] = inst_10213__$1);
return statearr_10259;
})();if(inst_10213__$1)
{var statearr_10260_10290 = state_10242__$1;(statearr_10260_10290[1] = 14);
} else
{var statearr_10261_10291 = state_10242__$1;(statearr_10261_10291[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10243 === 12))
{var inst_10233 = (state_10242[2]);var state_10242__$1 = state_10242;var statearr_10262_10292 = state_10242__$1;(statearr_10262_10292[2] = inst_10233);
(statearr_10262_10292[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10243 === 13))
{var inst_10202 = (state_10242[8]);var inst_10201 = (state_10242[9]);var inst_10200 = (state_10242[10]);var inst_10199 = (state_10242[11]);var inst_10209 = (state_10242[2]);var inst_10210 = (inst_10202 + 1);var tmp10256 = inst_10201;var tmp10257 = inst_10200;var tmp10258 = inst_10199;var inst_10199__$1 = tmp10258;var inst_10200__$1 = tmp10257;var inst_10201__$1 = tmp10256;var inst_10202__$1 = inst_10210;var state_10242__$1 = (function (){var statearr_10263 = state_10242;(statearr_10263[8] = inst_10202__$1);
(statearr_10263[9] = inst_10201__$1);
(statearr_10263[10] = inst_10200__$1);
(statearr_10263[11] = inst_10199__$1);
(statearr_10263[14] = inst_10209);
return statearr_10263;
})();var statearr_10264_10293 = state_10242__$1;(statearr_10264_10293[2] = null);
(statearr_10264_10293[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10243 === 14))
{var inst_10213 = (state_10242[13]);var inst_10215 = cljs.core.chunked_seq_QMARK_.call(null,inst_10213);var state_10242__$1 = state_10242;if(inst_10215)
{var statearr_10265_10294 = state_10242__$1;(statearr_10265_10294[1] = 17);
} else
{var statearr_10266_10295 = state_10242__$1;(statearr_10266_10295[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10243 === 15))
{var state_10242__$1 = state_10242;var statearr_10267_10296 = state_10242__$1;(statearr_10267_10296[2] = null);
(statearr_10267_10296[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10243 === 16))
{var inst_10231 = (state_10242[2]);var state_10242__$1 = state_10242;var statearr_10268_10297 = state_10242__$1;(statearr_10268_10297[2] = inst_10231);
(statearr_10268_10297[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10243 === 17))
{var inst_10213 = (state_10242[13]);var inst_10217 = cljs.core.chunk_first.call(null,inst_10213);var inst_10218 = cljs.core.chunk_rest.call(null,inst_10213);var inst_10219 = cljs.core.count.call(null,inst_10217);var inst_10199 = inst_10218;var inst_10200 = inst_10217;var inst_10201 = inst_10219;var inst_10202 = 0;var state_10242__$1 = (function (){var statearr_10269 = state_10242;(statearr_10269[8] = inst_10202);
(statearr_10269[9] = inst_10201);
(statearr_10269[10] = inst_10200);
(statearr_10269[11] = inst_10199);
return statearr_10269;
})();var statearr_10270_10298 = state_10242__$1;(statearr_10270_10298[2] = null);
(statearr_10270_10298[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10243 === 18))
{var inst_10213 = (state_10242[13]);var inst_10222 = cljs.core.first.call(null,inst_10213);var state_10242__$1 = state_10242;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10242__$1,20,out,inst_10222);
} else
{if((state_val_10243 === 19))
{var inst_10228 = (state_10242[2]);var state_10242__$1 = state_10242;var statearr_10271_10299 = state_10242__$1;(statearr_10271_10299[2] = inst_10228);
(statearr_10271_10299[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10243 === 20))
{var inst_10213 = (state_10242[13]);var inst_10224 = (state_10242[2]);var inst_10225 = cljs.core.next.call(null,inst_10213);var inst_10199 = inst_10225;var inst_10200 = null;var inst_10201 = 0;var inst_10202 = 0;var state_10242__$1 = (function (){var statearr_10272 = state_10242;(statearr_10272[8] = inst_10202);
(statearr_10272[9] = inst_10201);
(statearr_10272[10] = inst_10200);
(statearr_10272[15] = inst_10224);
(statearr_10272[11] = inst_10199);
return statearr_10272;
})();var statearr_10273_10300 = state_10242__$1;(statearr_10273_10300[2] = null);
(statearr_10273_10300[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_10277 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10277[0] = state_machine__5509__auto__);
(statearr_10277[1] = 1);
return statearr_10277;
});
var state_machine__5509__auto____1 = (function (state_10242){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_10242);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e10278){if((e10278 instanceof Object))
{var ex__5512__auto__ = e10278;var statearr_10279_10301 = state_10242;(statearr_10279_10301[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10242);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10278;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10302 = state_10242;
state_10242 = G__10302;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_10242){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_10242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_10280 = f__5524__auto__.call(null);(statearr_10280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto__);
return statearr_10280;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return c__5523__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5523__auto___10383 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_10362){var state_val_10363 = (state_10362[1]);if((state_val_10363 === 1))
{var state_10362__$1 = state_10362;var statearr_10364_10384 = state_10362__$1;(statearr_10364_10384[2] = null);
(statearr_10364_10384[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10363 === 2))
{var state_10362__$1 = state_10362;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10362__$1,4,from);
} else
{if((state_val_10363 === 3))
{var inst_10360 = (state_10362[2]);var state_10362__$1 = state_10362;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10362__$1,inst_10360);
} else
{if((state_val_10363 === 4))
{var inst_10345 = (state_10362[7]);var inst_10345__$1 = (state_10362[2]);var inst_10346 = (inst_10345__$1 == null);var state_10362__$1 = (function (){var statearr_10365 = state_10362;(statearr_10365[7] = inst_10345__$1);
return statearr_10365;
})();if(cljs.core.truth_(inst_10346))
{var statearr_10366_10385 = state_10362__$1;(statearr_10366_10385[1] = 5);
} else
{var statearr_10367_10386 = state_10362__$1;(statearr_10367_10386[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10363 === 5))
{var state_10362__$1 = state_10362;if(cljs.core.truth_(close_QMARK_))
{var statearr_10368_10387 = state_10362__$1;(statearr_10368_10387[1] = 8);
} else
{var statearr_10369_10388 = state_10362__$1;(statearr_10369_10388[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10363 === 6))
{var inst_10345 = (state_10362[7]);var state_10362__$1 = state_10362;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10362__$1,11,to,inst_10345);
} else
{if((state_val_10363 === 7))
{var inst_10358 = (state_10362[2]);var state_10362__$1 = state_10362;var statearr_10370_10389 = state_10362__$1;(statearr_10370_10389[2] = inst_10358);
(statearr_10370_10389[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10363 === 8))
{var inst_10349 = cljs.core.async.close_BANG_.call(null,to);var state_10362__$1 = state_10362;var statearr_10371_10390 = state_10362__$1;(statearr_10371_10390[2] = inst_10349);
(statearr_10371_10390[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10363 === 9))
{var state_10362__$1 = state_10362;var statearr_10372_10391 = state_10362__$1;(statearr_10372_10391[2] = null);
(statearr_10372_10391[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10363 === 10))
{var inst_10352 = (state_10362[2]);var state_10362__$1 = state_10362;var statearr_10373_10392 = state_10362__$1;(statearr_10373_10392[2] = inst_10352);
(statearr_10373_10392[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10363 === 11))
{var inst_10355 = (state_10362[2]);var state_10362__$1 = (function (){var statearr_10374 = state_10362;(statearr_10374[8] = inst_10355);
return statearr_10374;
})();var statearr_10375_10393 = state_10362__$1;(statearr_10375_10393[2] = null);
(statearr_10375_10393[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_10379 = [null,null,null,null,null,null,null,null,null];(statearr_10379[0] = state_machine__5509__auto__);
(statearr_10379[1] = 1);
return statearr_10379;
});
var state_machine__5509__auto____1 = (function (state_10362){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_10362);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e10380){if((e10380 instanceof Object))
{var ex__5512__auto__ = e10380;var statearr_10381_10394 = state_10362;(statearr_10381_10394[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10362);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10380;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10395 = state_10362;
state_10362 = G__10395;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_10362){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_10362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_10382 = f__5524__auto__.call(null);(statearr_10382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___10383);
return statearr_10382;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5523__auto___10482 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_10460){var state_val_10461 = (state_10460[1]);if((state_val_10461 === 1))
{var state_10460__$1 = state_10460;var statearr_10462_10483 = state_10460__$1;(statearr_10462_10483[2] = null);
(statearr_10462_10483[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10461 === 2))
{var state_10460__$1 = state_10460;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10460__$1,4,ch);
} else
{if((state_val_10461 === 3))
{var inst_10458 = (state_10460[2]);var state_10460__$1 = state_10460;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10460__$1,inst_10458);
} else
{if((state_val_10461 === 4))
{var inst_10441 = (state_10460[7]);var inst_10441__$1 = (state_10460[2]);var inst_10442 = (inst_10441__$1 == null);var state_10460__$1 = (function (){var statearr_10463 = state_10460;(statearr_10463[7] = inst_10441__$1);
return statearr_10463;
})();if(cljs.core.truth_(inst_10442))
{var statearr_10464_10484 = state_10460__$1;(statearr_10464_10484[1] = 5);
} else
{var statearr_10465_10485 = state_10460__$1;(statearr_10465_10485[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10461 === 5))
{var inst_10444 = cljs.core.async.close_BANG_.call(null,tc);var inst_10445 = cljs.core.async.close_BANG_.call(null,fc);var state_10460__$1 = (function (){var statearr_10466 = state_10460;(statearr_10466[8] = inst_10444);
return statearr_10466;
})();var statearr_10467_10486 = state_10460__$1;(statearr_10467_10486[2] = inst_10445);
(statearr_10467_10486[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10461 === 6))
{var inst_10441 = (state_10460[7]);var inst_10447 = p.call(null,inst_10441);var state_10460__$1 = state_10460;if(cljs.core.truth_(inst_10447))
{var statearr_10468_10487 = state_10460__$1;(statearr_10468_10487[1] = 9);
} else
{var statearr_10469_10488 = state_10460__$1;(statearr_10469_10488[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10461 === 7))
{var inst_10456 = (state_10460[2]);var state_10460__$1 = state_10460;var statearr_10470_10489 = state_10460__$1;(statearr_10470_10489[2] = inst_10456);
(statearr_10470_10489[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10461 === 8))
{var inst_10453 = (state_10460[2]);var state_10460__$1 = (function (){var statearr_10471 = state_10460;(statearr_10471[9] = inst_10453);
return statearr_10471;
})();var statearr_10472_10490 = state_10460__$1;(statearr_10472_10490[2] = null);
(statearr_10472_10490[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10461 === 9))
{var state_10460__$1 = state_10460;var statearr_10473_10491 = state_10460__$1;(statearr_10473_10491[2] = tc);
(statearr_10473_10491[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10461 === 10))
{var state_10460__$1 = state_10460;var statearr_10474_10492 = state_10460__$1;(statearr_10474_10492[2] = fc);
(statearr_10474_10492[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10461 === 11))
{var inst_10441 = (state_10460[7]);var inst_10451 = (state_10460[2]);var state_10460__$1 = state_10460;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10460__$1,8,inst_10451,inst_10441);
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
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_10478 = [null,null,null,null,null,null,null,null,null,null];(statearr_10478[0] = state_machine__5509__auto__);
(statearr_10478[1] = 1);
return statearr_10478;
});
var state_machine__5509__auto____1 = (function (state_10460){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_10460);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e10479){if((e10479 instanceof Object))
{var ex__5512__auto__ = e10479;var statearr_10480_10493 = state_10460;(statearr_10480_10493[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10460);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10479;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10494 = state_10460;
state_10460 = G__10494;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_10460){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_10460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_10481 = f__5524__auto__.call(null);(statearr_10481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___10482);
return statearr_10481;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5523__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_10541){var state_val_10542 = (state_10541[1]);if((state_val_10542 === 7))
{var inst_10537 = (state_10541[2]);var state_10541__$1 = state_10541;var statearr_10543_10559 = state_10541__$1;(statearr_10543_10559[2] = inst_10537);
(statearr_10543_10559[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10542 === 6))
{var inst_10530 = (state_10541[7]);var inst_10527 = (state_10541[8]);var inst_10534 = f.call(null,inst_10527,inst_10530);var inst_10527__$1 = inst_10534;var state_10541__$1 = (function (){var statearr_10544 = state_10541;(statearr_10544[8] = inst_10527__$1);
return statearr_10544;
})();var statearr_10545_10560 = state_10541__$1;(statearr_10545_10560[2] = null);
(statearr_10545_10560[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10542 === 5))
{var inst_10527 = (state_10541[8]);var state_10541__$1 = state_10541;var statearr_10546_10561 = state_10541__$1;(statearr_10546_10561[2] = inst_10527);
(statearr_10546_10561[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10542 === 4))
{var inst_10530 = (state_10541[7]);var inst_10530__$1 = (state_10541[2]);var inst_10531 = (inst_10530__$1 == null);var state_10541__$1 = (function (){var statearr_10547 = state_10541;(statearr_10547[7] = inst_10530__$1);
return statearr_10547;
})();if(cljs.core.truth_(inst_10531))
{var statearr_10548_10562 = state_10541__$1;(statearr_10548_10562[1] = 5);
} else
{var statearr_10549_10563 = state_10541__$1;(statearr_10549_10563[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10542 === 3))
{var inst_10539 = (state_10541[2]);var state_10541__$1 = state_10541;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10541__$1,inst_10539);
} else
{if((state_val_10542 === 2))
{var state_10541__$1 = state_10541;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10541__$1,4,ch);
} else
{if((state_val_10542 === 1))
{var inst_10527 = init;var state_10541__$1 = (function (){var statearr_10550 = state_10541;(statearr_10550[8] = inst_10527);
return statearr_10550;
})();var statearr_10551_10564 = state_10541__$1;(statearr_10551_10564[2] = null);
(statearr_10551_10564[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_10555 = [null,null,null,null,null,null,null,null,null];(statearr_10555[0] = state_machine__5509__auto__);
(statearr_10555[1] = 1);
return statearr_10555;
});
var state_machine__5509__auto____1 = (function (state_10541){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_10541);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e10556){if((e10556 instanceof Object))
{var ex__5512__auto__ = e10556;var statearr_10557_10565 = state_10541;(statearr_10557_10565[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10541);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10556;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10566 = state_10541;
state_10541 = G__10566;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_10541){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_10541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_10558 = f__5524__auto__.call(null);(statearr_10558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto__);
return statearr_10558;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return c__5523__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5523__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_10628){var state_val_10629 = (state_10628[1]);if((state_val_10629 === 1))
{var inst_10608 = cljs.core.seq.call(null,coll);var inst_10609 = inst_10608;var state_10628__$1 = (function (){var statearr_10630 = state_10628;(statearr_10630[7] = inst_10609);
return statearr_10630;
})();var statearr_10631_10649 = state_10628__$1;(statearr_10631_10649[2] = null);
(statearr_10631_10649[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10629 === 2))
{var inst_10609 = (state_10628[7]);var state_10628__$1 = state_10628;if(cljs.core.truth_(inst_10609))
{var statearr_10632_10650 = state_10628__$1;(statearr_10632_10650[1] = 4);
} else
{var statearr_10633_10651 = state_10628__$1;(statearr_10633_10651[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10629 === 3))
{var inst_10626 = (state_10628[2]);var state_10628__$1 = state_10628;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10628__$1,inst_10626);
} else
{if((state_val_10629 === 4))
{var inst_10609 = (state_10628[7]);var inst_10612 = cljs.core.first.call(null,inst_10609);var state_10628__$1 = state_10628;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10628__$1,7,ch,inst_10612);
} else
{if((state_val_10629 === 5))
{var state_10628__$1 = state_10628;if(cljs.core.truth_(close_QMARK_))
{var statearr_10634_10652 = state_10628__$1;(statearr_10634_10652[1] = 8);
} else
{var statearr_10635_10653 = state_10628__$1;(statearr_10635_10653[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10629 === 6))
{var inst_10624 = (state_10628[2]);var state_10628__$1 = state_10628;var statearr_10636_10654 = state_10628__$1;(statearr_10636_10654[2] = inst_10624);
(statearr_10636_10654[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10629 === 7))
{var inst_10609 = (state_10628[7]);var inst_10614 = (state_10628[2]);var inst_10615 = cljs.core.next.call(null,inst_10609);var inst_10609__$1 = inst_10615;var state_10628__$1 = (function (){var statearr_10637 = state_10628;(statearr_10637[8] = inst_10614);
(statearr_10637[7] = inst_10609__$1);
return statearr_10637;
})();var statearr_10638_10655 = state_10628__$1;(statearr_10638_10655[2] = null);
(statearr_10638_10655[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10629 === 8))
{var inst_10619 = cljs.core.async.close_BANG_.call(null,ch);var state_10628__$1 = state_10628;var statearr_10639_10656 = state_10628__$1;(statearr_10639_10656[2] = inst_10619);
(statearr_10639_10656[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10629 === 9))
{var state_10628__$1 = state_10628;var statearr_10640_10657 = state_10628__$1;(statearr_10640_10657[2] = null);
(statearr_10640_10657[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10629 === 10))
{var inst_10622 = (state_10628[2]);var state_10628__$1 = state_10628;var statearr_10641_10658 = state_10628__$1;(statearr_10641_10658[2] = inst_10622);
(statearr_10641_10658[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_10645 = [null,null,null,null,null,null,null,null,null];(statearr_10645[0] = state_machine__5509__auto__);
(statearr_10645[1] = 1);
return statearr_10645;
});
var state_machine__5509__auto____1 = (function (state_10628){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_10628);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e10646){if((e10646 instanceof Object))
{var ex__5512__auto__ = e10646;var statearr_10647_10659 = state_10628;(statearr_10647_10659[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10628);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10646;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10660 = state_10628;
state_10628 = G__10660;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_10628){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_10628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_10648 = f__5524__auto__.call(null);(statearr_10648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto__);
return statearr_10648;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return c__5523__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj10662 = {};return obj10662;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3396__auto__ = _;if(and__3396__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4029__auto__ = (((_ == null))?null:_);return (function (){var or__3408__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj10664 = {};return obj10664;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t10888 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10888 = (function (cs,ch,mult,meta10889){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta10889 = meta10889;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10888.cljs$lang$type = true;
cljs.core.async.t10888.cljs$lang$ctorStr = "cljs.core.async/t10888";
cljs.core.async.t10888.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10888");
});})(cs))
;
cljs.core.async.t10888.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t10888.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t10888.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t10888.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t10888.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10888.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t10888.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10890){var self__ = this;
var _10890__$1 = this;return self__.meta10889;
});})(cs))
;
cljs.core.async.t10888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10890,meta10889__$1){var self__ = this;
var _10890__$1 = this;return (new cljs.core.async.t10888(self__.cs,self__.ch,self__.mult,meta10889__$1));
});})(cs))
;
cljs.core.async.__GT_t10888 = ((function (cs){
return (function __GT_t10888(cs__$1,ch__$1,mult__$1,meta10889){return (new cljs.core.async.t10888(cs__$1,ch__$1,mult__$1,meta10889));
});})(cs))
;
}
return (new cljs.core.async.t10888(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5523__auto___11111 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_11025){var state_val_11026 = (state_11025[1]);if((state_val_11026 === 32))
{var inst_10893 = (state_11025[7]);var inst_10969 = (state_11025[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11025,31,Object,null,30);var inst_10976 = cljs.core.async.put_BANG_.call(null,inst_10969,inst_10893,done);var state_11025__$1 = state_11025;var statearr_11027_11112 = state_11025__$1;(statearr_11027_11112[2] = inst_10976);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11025__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 1))
{var state_11025__$1 = state_11025;var statearr_11028_11113 = state_11025__$1;(statearr_11028_11113[2] = null);
(statearr_11028_11113[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 33))
{var inst_10982 = (state_11025[9]);var inst_10984 = cljs.core.chunked_seq_QMARK_.call(null,inst_10982);var state_11025__$1 = state_11025;if(inst_10984)
{var statearr_11029_11114 = state_11025__$1;(statearr_11029_11114[1] = 36);
} else
{var statearr_11030_11115 = state_11025__$1;(statearr_11030_11115[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 2))
{var state_11025__$1 = state_11025;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11025__$1,4,ch);
} else
{if((state_val_11026 === 34))
{var state_11025__$1 = state_11025;var statearr_11031_11116 = state_11025__$1;(statearr_11031_11116[2] = null);
(statearr_11031_11116[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 3))
{var inst_11023 = (state_11025[2]);var state_11025__$1 = state_11025;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11025__$1,inst_11023);
} else
{if((state_val_11026 === 35))
{var inst_11007 = (state_11025[2]);var state_11025__$1 = state_11025;var statearr_11032_11117 = state_11025__$1;(statearr_11032_11117[2] = inst_11007);
(statearr_11032_11117[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 4))
{var inst_10893 = (state_11025[7]);var inst_10893__$1 = (state_11025[2]);var inst_10894 = (inst_10893__$1 == null);var state_11025__$1 = (function (){var statearr_11033 = state_11025;(statearr_11033[7] = inst_10893__$1);
return statearr_11033;
})();if(cljs.core.truth_(inst_10894))
{var statearr_11034_11118 = state_11025__$1;(statearr_11034_11118[1] = 5);
} else
{var statearr_11035_11119 = state_11025__$1;(statearr_11035_11119[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 36))
{var inst_10982 = (state_11025[9]);var inst_10986 = cljs.core.chunk_first.call(null,inst_10982);var inst_10987 = cljs.core.chunk_rest.call(null,inst_10982);var inst_10988 = cljs.core.count.call(null,inst_10986);var inst_10961 = inst_10987;var inst_10962 = inst_10986;var inst_10963 = inst_10988;var inst_10964 = 0;var state_11025__$1 = (function (){var statearr_11036 = state_11025;(statearr_11036[10] = inst_10961);
(statearr_11036[11] = inst_10962);
(statearr_11036[12] = inst_10963);
(statearr_11036[13] = inst_10964);
return statearr_11036;
})();var statearr_11037_11120 = state_11025__$1;(statearr_11037_11120[2] = null);
(statearr_11037_11120[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 5))
{var inst_10900 = cljs.core.deref.call(null,cs);var inst_10901 = cljs.core.seq.call(null,inst_10900);var inst_10902 = inst_10901;var inst_10903 = null;var inst_10904 = 0;var inst_10905 = 0;var state_11025__$1 = (function (){var statearr_11038 = state_11025;(statearr_11038[14] = inst_10902);
(statearr_11038[15] = inst_10905);
(statearr_11038[16] = inst_10903);
(statearr_11038[17] = inst_10904);
return statearr_11038;
})();var statearr_11039_11121 = state_11025__$1;(statearr_11039_11121[2] = null);
(statearr_11039_11121[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 37))
{var inst_10982 = (state_11025[9]);var inst_10991 = cljs.core.first.call(null,inst_10982);var state_11025__$1 = (function (){var statearr_11040 = state_11025;(statearr_11040[18] = inst_10991);
return statearr_11040;
})();var statearr_11041_11122 = state_11025__$1;(statearr_11041_11122[2] = null);
(statearr_11041_11122[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 6))
{var inst_10953 = (state_11025[19]);var inst_10952 = cljs.core.deref.call(null,cs);var inst_10953__$1 = cljs.core.keys.call(null,inst_10952);var inst_10954 = cljs.core.count.call(null,inst_10953__$1);var inst_10955 = cljs.core.reset_BANG_.call(null,dctr,inst_10954);var inst_10960 = cljs.core.seq.call(null,inst_10953__$1);var inst_10961 = inst_10960;var inst_10962 = null;var inst_10963 = 0;var inst_10964 = 0;var state_11025__$1 = (function (){var statearr_11042 = state_11025;(statearr_11042[10] = inst_10961);
(statearr_11042[11] = inst_10962);
(statearr_11042[12] = inst_10963);
(statearr_11042[13] = inst_10964);
(statearr_11042[19] = inst_10953__$1);
(statearr_11042[20] = inst_10955);
return statearr_11042;
})();var statearr_11043_11123 = state_11025__$1;(statearr_11043_11123[2] = null);
(statearr_11043_11123[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 38))
{var inst_11004 = (state_11025[2]);var state_11025__$1 = state_11025;var statearr_11044_11124 = state_11025__$1;(statearr_11044_11124[2] = inst_11004);
(statearr_11044_11124[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 7))
{var inst_11021 = (state_11025[2]);var state_11025__$1 = state_11025;var statearr_11045_11125 = state_11025__$1;(statearr_11045_11125[2] = inst_11021);
(statearr_11045_11125[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 39))
{var inst_10982 = (state_11025[9]);var inst_11000 = (state_11025[2]);var inst_11001 = cljs.core.next.call(null,inst_10982);var inst_10961 = inst_11001;var inst_10962 = null;var inst_10963 = 0;var inst_10964 = 0;var state_11025__$1 = (function (){var statearr_11046 = state_11025;(statearr_11046[10] = inst_10961);
(statearr_11046[11] = inst_10962);
(statearr_11046[12] = inst_10963);
(statearr_11046[13] = inst_10964);
(statearr_11046[21] = inst_11000);
return statearr_11046;
})();var statearr_11047_11126 = state_11025__$1;(statearr_11047_11126[2] = null);
(statearr_11047_11126[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 8))
{var inst_10905 = (state_11025[15]);var inst_10904 = (state_11025[17]);var inst_10907 = (inst_10905 < inst_10904);var inst_10908 = inst_10907;var state_11025__$1 = state_11025;if(cljs.core.truth_(inst_10908))
{var statearr_11048_11127 = state_11025__$1;(statearr_11048_11127[1] = 10);
} else
{var statearr_11049_11128 = state_11025__$1;(statearr_11049_11128[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 40))
{var inst_10991 = (state_11025[18]);var inst_10992 = (state_11025[2]);var inst_10993 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10994 = cljs.core.async.untap_STAR_.call(null,m,inst_10991);var state_11025__$1 = (function (){var statearr_11050 = state_11025;(statearr_11050[22] = inst_10993);
(statearr_11050[23] = inst_10992);
return statearr_11050;
})();var statearr_11051_11129 = state_11025__$1;(statearr_11051_11129[2] = inst_10994);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11025__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 9))
{var inst_10950 = (state_11025[2]);var state_11025__$1 = state_11025;var statearr_11052_11130 = state_11025__$1;(statearr_11052_11130[2] = inst_10950);
(statearr_11052_11130[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 41))
{var inst_10893 = (state_11025[7]);var inst_10991 = (state_11025[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11025,40,Object,null,39);var inst_10998 = cljs.core.async.put_BANG_.call(null,inst_10991,inst_10893,done);var state_11025__$1 = state_11025;var statearr_11053_11131 = state_11025__$1;(statearr_11053_11131[2] = inst_10998);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11025__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 10))
{var inst_10905 = (state_11025[15]);var inst_10903 = (state_11025[16]);var inst_10911 = cljs.core._nth.call(null,inst_10903,inst_10905);var inst_10912 = cljs.core.nth.call(null,inst_10911,0,null);var inst_10913 = cljs.core.nth.call(null,inst_10911,1,null);var state_11025__$1 = (function (){var statearr_11054 = state_11025;(statearr_11054[24] = inst_10912);
return statearr_11054;
})();if(cljs.core.truth_(inst_10913))
{var statearr_11055_11132 = state_11025__$1;(statearr_11055_11132[1] = 13);
} else
{var statearr_11056_11133 = state_11025__$1;(statearr_11056_11133[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 42))
{var state_11025__$1 = state_11025;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11025__$1,45,dchan);
} else
{if((state_val_11026 === 11))
{var inst_10902 = (state_11025[14]);var inst_10922 = (state_11025[25]);var inst_10922__$1 = cljs.core.seq.call(null,inst_10902);var state_11025__$1 = (function (){var statearr_11057 = state_11025;(statearr_11057[25] = inst_10922__$1);
return statearr_11057;
})();if(inst_10922__$1)
{var statearr_11058_11134 = state_11025__$1;(statearr_11058_11134[1] = 16);
} else
{var statearr_11059_11135 = state_11025__$1;(statearr_11059_11135[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 43))
{var state_11025__$1 = state_11025;var statearr_11060_11136 = state_11025__$1;(statearr_11060_11136[2] = null);
(statearr_11060_11136[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 12))
{var inst_10948 = (state_11025[2]);var state_11025__$1 = state_11025;var statearr_11061_11137 = state_11025__$1;(statearr_11061_11137[2] = inst_10948);
(statearr_11061_11137[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 44))
{var inst_11018 = (state_11025[2]);var state_11025__$1 = (function (){var statearr_11062 = state_11025;(statearr_11062[26] = inst_11018);
return statearr_11062;
})();var statearr_11063_11138 = state_11025__$1;(statearr_11063_11138[2] = null);
(statearr_11063_11138[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 13))
{var inst_10912 = (state_11025[24]);var inst_10915 = cljs.core.async.close_BANG_.call(null,inst_10912);var state_11025__$1 = state_11025;var statearr_11064_11139 = state_11025__$1;(statearr_11064_11139[2] = inst_10915);
(statearr_11064_11139[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 45))
{var inst_11015 = (state_11025[2]);var state_11025__$1 = state_11025;var statearr_11068_11140 = state_11025__$1;(statearr_11068_11140[2] = inst_11015);
(statearr_11068_11140[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 14))
{var state_11025__$1 = state_11025;var statearr_11069_11141 = state_11025__$1;(statearr_11069_11141[2] = null);
(statearr_11069_11141[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 15))
{var inst_10902 = (state_11025[14]);var inst_10905 = (state_11025[15]);var inst_10903 = (state_11025[16]);var inst_10904 = (state_11025[17]);var inst_10918 = (state_11025[2]);var inst_10919 = (inst_10905 + 1);var tmp11065 = inst_10902;var tmp11066 = inst_10903;var tmp11067 = inst_10904;var inst_10902__$1 = tmp11065;var inst_10903__$1 = tmp11066;var inst_10904__$1 = tmp11067;var inst_10905__$1 = inst_10919;var state_11025__$1 = (function (){var statearr_11070 = state_11025;(statearr_11070[14] = inst_10902__$1);
(statearr_11070[15] = inst_10905__$1);
(statearr_11070[16] = inst_10903__$1);
(statearr_11070[17] = inst_10904__$1);
(statearr_11070[27] = inst_10918);
return statearr_11070;
})();var statearr_11071_11142 = state_11025__$1;(statearr_11071_11142[2] = null);
(statearr_11071_11142[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 16))
{var inst_10922 = (state_11025[25]);var inst_10924 = cljs.core.chunked_seq_QMARK_.call(null,inst_10922);var state_11025__$1 = state_11025;if(inst_10924)
{var statearr_11072_11143 = state_11025__$1;(statearr_11072_11143[1] = 19);
} else
{var statearr_11073_11144 = state_11025__$1;(statearr_11073_11144[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 17))
{var state_11025__$1 = state_11025;var statearr_11074_11145 = state_11025__$1;(statearr_11074_11145[2] = null);
(statearr_11074_11145[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 18))
{var inst_10946 = (state_11025[2]);var state_11025__$1 = state_11025;var statearr_11075_11146 = state_11025__$1;(statearr_11075_11146[2] = inst_10946);
(statearr_11075_11146[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 19))
{var inst_10922 = (state_11025[25]);var inst_10926 = cljs.core.chunk_first.call(null,inst_10922);var inst_10927 = cljs.core.chunk_rest.call(null,inst_10922);var inst_10928 = cljs.core.count.call(null,inst_10926);var inst_10902 = inst_10927;var inst_10903 = inst_10926;var inst_10904 = inst_10928;var inst_10905 = 0;var state_11025__$1 = (function (){var statearr_11076 = state_11025;(statearr_11076[14] = inst_10902);
(statearr_11076[15] = inst_10905);
(statearr_11076[16] = inst_10903);
(statearr_11076[17] = inst_10904);
return statearr_11076;
})();var statearr_11077_11147 = state_11025__$1;(statearr_11077_11147[2] = null);
(statearr_11077_11147[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 20))
{var inst_10922 = (state_11025[25]);var inst_10932 = cljs.core.first.call(null,inst_10922);var inst_10933 = cljs.core.nth.call(null,inst_10932,0,null);var inst_10934 = cljs.core.nth.call(null,inst_10932,1,null);var state_11025__$1 = (function (){var statearr_11078 = state_11025;(statearr_11078[28] = inst_10933);
return statearr_11078;
})();if(cljs.core.truth_(inst_10934))
{var statearr_11079_11148 = state_11025__$1;(statearr_11079_11148[1] = 22);
} else
{var statearr_11080_11149 = state_11025__$1;(statearr_11080_11149[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 21))
{var inst_10943 = (state_11025[2]);var state_11025__$1 = state_11025;var statearr_11081_11150 = state_11025__$1;(statearr_11081_11150[2] = inst_10943);
(statearr_11081_11150[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 22))
{var inst_10933 = (state_11025[28]);var inst_10936 = cljs.core.async.close_BANG_.call(null,inst_10933);var state_11025__$1 = state_11025;var statearr_11082_11151 = state_11025__$1;(statearr_11082_11151[2] = inst_10936);
(statearr_11082_11151[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 23))
{var state_11025__$1 = state_11025;var statearr_11083_11152 = state_11025__$1;(statearr_11083_11152[2] = null);
(statearr_11083_11152[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 24))
{var inst_10922 = (state_11025[25]);var inst_10939 = (state_11025[2]);var inst_10940 = cljs.core.next.call(null,inst_10922);var inst_10902 = inst_10940;var inst_10903 = null;var inst_10904 = 0;var inst_10905 = 0;var state_11025__$1 = (function (){var statearr_11084 = state_11025;(statearr_11084[29] = inst_10939);
(statearr_11084[14] = inst_10902);
(statearr_11084[15] = inst_10905);
(statearr_11084[16] = inst_10903);
(statearr_11084[17] = inst_10904);
return statearr_11084;
})();var statearr_11085_11153 = state_11025__$1;(statearr_11085_11153[2] = null);
(statearr_11085_11153[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 25))
{var inst_10963 = (state_11025[12]);var inst_10964 = (state_11025[13]);var inst_10966 = (inst_10964 < inst_10963);var inst_10967 = inst_10966;var state_11025__$1 = state_11025;if(cljs.core.truth_(inst_10967))
{var statearr_11086_11154 = state_11025__$1;(statearr_11086_11154[1] = 27);
} else
{var statearr_11087_11155 = state_11025__$1;(statearr_11087_11155[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 26))
{var inst_10953 = (state_11025[19]);var inst_11011 = (state_11025[2]);var inst_11012 = cljs.core.seq.call(null,inst_10953);var state_11025__$1 = (function (){var statearr_11088 = state_11025;(statearr_11088[30] = inst_11011);
return statearr_11088;
})();if(inst_11012)
{var statearr_11089_11156 = state_11025__$1;(statearr_11089_11156[1] = 42);
} else
{var statearr_11090_11157 = state_11025__$1;(statearr_11090_11157[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 27))
{var inst_10962 = (state_11025[11]);var inst_10964 = (state_11025[13]);var inst_10969 = cljs.core._nth.call(null,inst_10962,inst_10964);var state_11025__$1 = (function (){var statearr_11091 = state_11025;(statearr_11091[8] = inst_10969);
return statearr_11091;
})();var statearr_11092_11158 = state_11025__$1;(statearr_11092_11158[2] = null);
(statearr_11092_11158[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 28))
{var inst_10961 = (state_11025[10]);var inst_10982 = (state_11025[9]);var inst_10982__$1 = cljs.core.seq.call(null,inst_10961);var state_11025__$1 = (function (){var statearr_11096 = state_11025;(statearr_11096[9] = inst_10982__$1);
return statearr_11096;
})();if(inst_10982__$1)
{var statearr_11097_11159 = state_11025__$1;(statearr_11097_11159[1] = 33);
} else
{var statearr_11098_11160 = state_11025__$1;(statearr_11098_11160[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 29))
{var inst_11009 = (state_11025[2]);var state_11025__$1 = state_11025;var statearr_11099_11161 = state_11025__$1;(statearr_11099_11161[2] = inst_11009);
(statearr_11099_11161[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 30))
{var inst_10961 = (state_11025[10]);var inst_10962 = (state_11025[11]);var inst_10963 = (state_11025[12]);var inst_10964 = (state_11025[13]);var inst_10978 = (state_11025[2]);var inst_10979 = (inst_10964 + 1);var tmp11093 = inst_10961;var tmp11094 = inst_10962;var tmp11095 = inst_10963;var inst_10961__$1 = tmp11093;var inst_10962__$1 = tmp11094;var inst_10963__$1 = tmp11095;var inst_10964__$1 = inst_10979;var state_11025__$1 = (function (){var statearr_11100 = state_11025;(statearr_11100[31] = inst_10978);
(statearr_11100[10] = inst_10961__$1);
(statearr_11100[11] = inst_10962__$1);
(statearr_11100[12] = inst_10963__$1);
(statearr_11100[13] = inst_10964__$1);
return statearr_11100;
})();var statearr_11101_11162 = state_11025__$1;(statearr_11101_11162[2] = null);
(statearr_11101_11162[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11026 === 31))
{var inst_10969 = (state_11025[8]);var inst_10970 = (state_11025[2]);var inst_10971 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10972 = cljs.core.async.untap_STAR_.call(null,m,inst_10969);var state_11025__$1 = (function (){var statearr_11102 = state_11025;(statearr_11102[32] = inst_10971);
(statearr_11102[33] = inst_10970);
return statearr_11102;
})();var statearr_11103_11163 = state_11025__$1;(statearr_11103_11163[2] = inst_10972);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11025__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_11107 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11107[0] = state_machine__5509__auto__);
(statearr_11107[1] = 1);
return statearr_11107;
});
var state_machine__5509__auto____1 = (function (state_11025){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_11025);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e11108){if((e11108 instanceof Object))
{var ex__5512__auto__ = e11108;var statearr_11109_11164 = state_11025;(statearr_11109_11164[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11025);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11108;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11165 = state_11025;
state_11025 = G__11165;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_11025){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_11025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_11110 = f__5524__auto__.call(null);(statearr_11110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___11111);
return statearr_11110;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj11167 = {};return obj11167;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t11277 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11277 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta11278){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta11278 = meta11278;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11277.cljs$lang$type = true;
cljs.core.async.t11277.cljs$lang$ctorStr = "cljs.core.async/t11277";
cljs.core.async.t11277.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11277");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11277.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t11277.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11277.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11277.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11277.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11277.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11277.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11277.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11277.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11279){var self__ = this;
var _11279__$1 = this;return self__.meta11278;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11279,meta11278__$1){var self__ = this;
var _11279__$1 = this;return (new cljs.core.async.t11277(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta11278__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t11277 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11277(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11278){return (new cljs.core.async.t11277(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11278));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t11277(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5523__auto___11386 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_11344){var state_val_11345 = (state_11344[1]);if((state_val_11345 === 1))
{var inst_11283 = (state_11344[7]);var inst_11283__$1 = calc_state.call(null);var inst_11284 = cljs.core.seq_QMARK_.call(null,inst_11283__$1);var state_11344__$1 = (function (){var statearr_11346 = state_11344;(statearr_11346[7] = inst_11283__$1);
return statearr_11346;
})();if(inst_11284)
{var statearr_11347_11387 = state_11344__$1;(statearr_11347_11387[1] = 2);
} else
{var statearr_11348_11388 = state_11344__$1;(statearr_11348_11388[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11345 === 2))
{var inst_11283 = (state_11344[7]);var inst_11286 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11283);var state_11344__$1 = state_11344;var statearr_11349_11389 = state_11344__$1;(statearr_11349_11389[2] = inst_11286);
(statearr_11349_11389[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11345 === 3))
{var inst_11283 = (state_11344[7]);var state_11344__$1 = state_11344;var statearr_11350_11390 = state_11344__$1;(statearr_11350_11390[2] = inst_11283);
(statearr_11350_11390[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11345 === 4))
{var inst_11283 = (state_11344[7]);var inst_11289 = (state_11344[2]);var inst_11290 = cljs.core.get.call(null,inst_11289,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11291 = cljs.core.get.call(null,inst_11289,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11292 = cljs.core.get.call(null,inst_11289,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_11293 = inst_11283;var state_11344__$1 = (function (){var statearr_11351 = state_11344;(statearr_11351[8] = inst_11291);
(statearr_11351[9] = inst_11290);
(statearr_11351[10] = inst_11293);
(statearr_11351[11] = inst_11292);
return statearr_11351;
})();var statearr_11352_11391 = state_11344__$1;(statearr_11352_11391[2] = null);
(statearr_11352_11391[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11345 === 5))
{var inst_11293 = (state_11344[10]);var inst_11296 = cljs.core.seq_QMARK_.call(null,inst_11293);var state_11344__$1 = state_11344;if(inst_11296)
{var statearr_11353_11392 = state_11344__$1;(statearr_11353_11392[1] = 7);
} else
{var statearr_11354_11393 = state_11344__$1;(statearr_11354_11393[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11345 === 6))
{var inst_11342 = (state_11344[2]);var state_11344__$1 = state_11344;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11344__$1,inst_11342);
} else
{if((state_val_11345 === 7))
{var inst_11293 = (state_11344[10]);var inst_11298 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11293);var state_11344__$1 = state_11344;var statearr_11355_11394 = state_11344__$1;(statearr_11355_11394[2] = inst_11298);
(statearr_11355_11394[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11345 === 8))
{var inst_11293 = (state_11344[10]);var state_11344__$1 = state_11344;var statearr_11356_11395 = state_11344__$1;(statearr_11356_11395[2] = inst_11293);
(statearr_11356_11395[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11345 === 9))
{var inst_11301 = (state_11344[12]);var inst_11301__$1 = (state_11344[2]);var inst_11302 = cljs.core.get.call(null,inst_11301__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11303 = cljs.core.get.call(null,inst_11301__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11304 = cljs.core.get.call(null,inst_11301__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_11344__$1 = (function (){var statearr_11357 = state_11344;(statearr_11357[12] = inst_11301__$1);
(statearr_11357[13] = inst_11303);
(statearr_11357[14] = inst_11304);
return statearr_11357;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11344__$1,10,inst_11302);
} else
{if((state_val_11345 === 10))
{var inst_11309 = (state_11344[15]);var inst_11308 = (state_11344[16]);var inst_11307 = (state_11344[2]);var inst_11308__$1 = cljs.core.nth.call(null,inst_11307,0,null);var inst_11309__$1 = cljs.core.nth.call(null,inst_11307,1,null);var inst_11310 = (inst_11308__$1 == null);var inst_11311 = cljs.core._EQ_.call(null,inst_11309__$1,change);var inst_11312 = (inst_11310) || (inst_11311);var state_11344__$1 = (function (){var statearr_11358 = state_11344;(statearr_11358[15] = inst_11309__$1);
(statearr_11358[16] = inst_11308__$1);
return statearr_11358;
})();if(cljs.core.truth_(inst_11312))
{var statearr_11359_11396 = state_11344__$1;(statearr_11359_11396[1] = 11);
} else
{var statearr_11360_11397 = state_11344__$1;(statearr_11360_11397[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11345 === 11))
{var inst_11308 = (state_11344[16]);var inst_11314 = (inst_11308 == null);var state_11344__$1 = state_11344;if(cljs.core.truth_(inst_11314))
{var statearr_11361_11398 = state_11344__$1;(statearr_11361_11398[1] = 14);
} else
{var statearr_11362_11399 = state_11344__$1;(statearr_11362_11399[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11345 === 12))
{var inst_11309 = (state_11344[15]);var inst_11323 = (state_11344[17]);var inst_11304 = (state_11344[14]);var inst_11323__$1 = inst_11304.call(null,inst_11309);var state_11344__$1 = (function (){var statearr_11363 = state_11344;(statearr_11363[17] = inst_11323__$1);
return statearr_11363;
})();if(cljs.core.truth_(inst_11323__$1))
{var statearr_11364_11400 = state_11344__$1;(statearr_11364_11400[1] = 17);
} else
{var statearr_11365_11401 = state_11344__$1;(statearr_11365_11401[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11345 === 13))
{var inst_11340 = (state_11344[2]);var state_11344__$1 = state_11344;var statearr_11366_11402 = state_11344__$1;(statearr_11366_11402[2] = inst_11340);
(statearr_11366_11402[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11345 === 14))
{var inst_11309 = (state_11344[15]);var inst_11316 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11309);var state_11344__$1 = state_11344;var statearr_11367_11403 = state_11344__$1;(statearr_11367_11403[2] = inst_11316);
(statearr_11367_11403[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11345 === 15))
{var state_11344__$1 = state_11344;var statearr_11368_11404 = state_11344__$1;(statearr_11368_11404[2] = null);
(statearr_11368_11404[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11345 === 16))
{var inst_11319 = (state_11344[2]);var inst_11320 = calc_state.call(null);var inst_11293 = inst_11320;var state_11344__$1 = (function (){var statearr_11369 = state_11344;(statearr_11369[10] = inst_11293);
(statearr_11369[18] = inst_11319);
return statearr_11369;
})();var statearr_11370_11405 = state_11344__$1;(statearr_11370_11405[2] = null);
(statearr_11370_11405[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11345 === 17))
{var inst_11323 = (state_11344[17]);var state_11344__$1 = state_11344;var statearr_11371_11406 = state_11344__$1;(statearr_11371_11406[2] = inst_11323);
(statearr_11371_11406[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11345 === 18))
{var inst_11309 = (state_11344[15]);var inst_11303 = (state_11344[13]);var inst_11304 = (state_11344[14]);var inst_11326 = cljs.core.empty_QMARK_.call(null,inst_11304);var inst_11327 = inst_11303.call(null,inst_11309);var inst_11328 = cljs.core.not.call(null,inst_11327);var inst_11329 = (inst_11326) && (inst_11328);var state_11344__$1 = state_11344;var statearr_11372_11407 = state_11344__$1;(statearr_11372_11407[2] = inst_11329);
(statearr_11372_11407[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11345 === 19))
{var inst_11331 = (state_11344[2]);var state_11344__$1 = state_11344;if(cljs.core.truth_(inst_11331))
{var statearr_11373_11408 = state_11344__$1;(statearr_11373_11408[1] = 20);
} else
{var statearr_11374_11409 = state_11344__$1;(statearr_11374_11409[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11345 === 20))
{var inst_11308 = (state_11344[16]);var state_11344__$1 = state_11344;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11344__$1,23,out,inst_11308);
} else
{if((state_val_11345 === 21))
{var state_11344__$1 = state_11344;var statearr_11375_11410 = state_11344__$1;(statearr_11375_11410[2] = null);
(statearr_11375_11410[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11345 === 22))
{var inst_11301 = (state_11344[12]);var inst_11337 = (state_11344[2]);var inst_11293 = inst_11301;var state_11344__$1 = (function (){var statearr_11376 = state_11344;(statearr_11376[10] = inst_11293);
(statearr_11376[19] = inst_11337);
return statearr_11376;
})();var statearr_11377_11411 = state_11344__$1;(statearr_11377_11411[2] = null);
(statearr_11377_11411[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11345 === 23))
{var inst_11334 = (state_11344[2]);var state_11344__$1 = state_11344;var statearr_11378_11412 = state_11344__$1;(statearr_11378_11412[2] = inst_11334);
(statearr_11378_11412[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_11382 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11382[0] = state_machine__5509__auto__);
(statearr_11382[1] = 1);
return statearr_11382;
});
var state_machine__5509__auto____1 = (function (state_11344){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_11344);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e11383){if((e11383 instanceof Object))
{var ex__5512__auto__ = e11383;var statearr_11384_11413 = state_11344;(statearr_11384_11413[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11344);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11383;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11414 = state_11344;
state_11344 = G__11414;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_11344){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_11344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_11385 = f__5524__auto__.call(null);(statearr_11385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___11386);
return statearr_11385;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj11416 = {};return obj11416;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3408__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3408__auto__,mults){
return (function (p1__11417_SHARP_){if(cljs.core.truth_(p1__11417_SHARP_.call(null,topic)))
{return p1__11417_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__11417_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3408__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t11542 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11542 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta11543){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta11543 = meta11543;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11542.cljs$lang$type = true;
cljs.core.async.t11542.cljs$lang$ctorStr = "cljs.core.async/t11542";
cljs.core.async.t11542.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11542");
});})(mults,ensure_mult))
;
cljs.core.async.t11542.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t11542.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t11542.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t11542.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t11542.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t11542.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11542.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t11542.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11544){var self__ = this;
var _11544__$1 = this;return self__.meta11543;
});})(mults,ensure_mult))
;
cljs.core.async.t11542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11544,meta11543__$1){var self__ = this;
var _11544__$1 = this;return (new cljs.core.async.t11542(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta11543__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t11542 = ((function (mults,ensure_mult){
return (function __GT_t11542(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11543){return (new cljs.core.async.t11542(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11543));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t11542(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5523__auto___11666 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_11618){var state_val_11619 = (state_11618[1]);if((state_val_11619 === 1))
{var state_11618__$1 = state_11618;var statearr_11620_11667 = state_11618__$1;(statearr_11620_11667[2] = null);
(statearr_11620_11667[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11619 === 2))
{var state_11618__$1 = state_11618;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11618__$1,4,ch);
} else
{if((state_val_11619 === 3))
{var inst_11616 = (state_11618[2]);var state_11618__$1 = state_11618;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11618__$1,inst_11616);
} else
{if((state_val_11619 === 4))
{var inst_11547 = (state_11618[7]);var inst_11547__$1 = (state_11618[2]);var inst_11548 = (inst_11547__$1 == null);var state_11618__$1 = (function (){var statearr_11621 = state_11618;(statearr_11621[7] = inst_11547__$1);
return statearr_11621;
})();if(cljs.core.truth_(inst_11548))
{var statearr_11622_11668 = state_11618__$1;(statearr_11622_11668[1] = 5);
} else
{var statearr_11623_11669 = state_11618__$1;(statearr_11623_11669[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11619 === 5))
{var inst_11554 = cljs.core.deref.call(null,mults);var inst_11555 = cljs.core.vals.call(null,inst_11554);var inst_11556 = cljs.core.seq.call(null,inst_11555);var inst_11557 = inst_11556;var inst_11558 = null;var inst_11559 = 0;var inst_11560 = 0;var state_11618__$1 = (function (){var statearr_11624 = state_11618;(statearr_11624[8] = inst_11559);
(statearr_11624[9] = inst_11557);
(statearr_11624[10] = inst_11558);
(statearr_11624[11] = inst_11560);
return statearr_11624;
})();var statearr_11625_11670 = state_11618__$1;(statearr_11625_11670[2] = null);
(statearr_11625_11670[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11619 === 6))
{var inst_11597 = (state_11618[12]);var inst_11547 = (state_11618[7]);var inst_11595 = (state_11618[13]);var inst_11595__$1 = topic_fn.call(null,inst_11547);var inst_11596 = cljs.core.deref.call(null,mults);var inst_11597__$1 = cljs.core.get.call(null,inst_11596,inst_11595__$1);var state_11618__$1 = (function (){var statearr_11626 = state_11618;(statearr_11626[12] = inst_11597__$1);
(statearr_11626[13] = inst_11595__$1);
return statearr_11626;
})();if(cljs.core.truth_(inst_11597__$1))
{var statearr_11627_11671 = state_11618__$1;(statearr_11627_11671[1] = 19);
} else
{var statearr_11628_11672 = state_11618__$1;(statearr_11628_11672[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11619 === 7))
{var inst_11614 = (state_11618[2]);var state_11618__$1 = state_11618;var statearr_11629_11673 = state_11618__$1;(statearr_11629_11673[2] = inst_11614);
(statearr_11629_11673[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11619 === 8))
{var inst_11559 = (state_11618[8]);var inst_11560 = (state_11618[11]);var inst_11562 = (inst_11560 < inst_11559);var inst_11563 = inst_11562;var state_11618__$1 = state_11618;if(cljs.core.truth_(inst_11563))
{var statearr_11633_11674 = state_11618__$1;(statearr_11633_11674[1] = 10);
} else
{var statearr_11634_11675 = state_11618__$1;(statearr_11634_11675[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11619 === 9))
{var inst_11593 = (state_11618[2]);var state_11618__$1 = state_11618;var statearr_11635_11676 = state_11618__$1;(statearr_11635_11676[2] = inst_11593);
(statearr_11635_11676[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11619 === 10))
{var inst_11559 = (state_11618[8]);var inst_11557 = (state_11618[9]);var inst_11558 = (state_11618[10]);var inst_11560 = (state_11618[11]);var inst_11565 = cljs.core._nth.call(null,inst_11558,inst_11560);var inst_11566 = cljs.core.async.muxch_STAR_.call(null,inst_11565);var inst_11567 = cljs.core.async.close_BANG_.call(null,inst_11566);var inst_11568 = (inst_11560 + 1);var tmp11630 = inst_11559;var tmp11631 = inst_11557;var tmp11632 = inst_11558;var inst_11557__$1 = tmp11631;var inst_11558__$1 = tmp11632;var inst_11559__$1 = tmp11630;var inst_11560__$1 = inst_11568;var state_11618__$1 = (function (){var statearr_11636 = state_11618;(statearr_11636[8] = inst_11559__$1);
(statearr_11636[14] = inst_11567);
(statearr_11636[9] = inst_11557__$1);
(statearr_11636[10] = inst_11558__$1);
(statearr_11636[11] = inst_11560__$1);
return statearr_11636;
})();var statearr_11637_11677 = state_11618__$1;(statearr_11637_11677[2] = null);
(statearr_11637_11677[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11619 === 11))
{var inst_11571 = (state_11618[15]);var inst_11557 = (state_11618[9]);var inst_11571__$1 = cljs.core.seq.call(null,inst_11557);var state_11618__$1 = (function (){var statearr_11638 = state_11618;(statearr_11638[15] = inst_11571__$1);
return statearr_11638;
})();if(inst_11571__$1)
{var statearr_11639_11678 = state_11618__$1;(statearr_11639_11678[1] = 13);
} else
{var statearr_11640_11679 = state_11618__$1;(statearr_11640_11679[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11619 === 12))
{var inst_11591 = (state_11618[2]);var state_11618__$1 = state_11618;var statearr_11641_11680 = state_11618__$1;(statearr_11641_11680[2] = inst_11591);
(statearr_11641_11680[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11619 === 13))
{var inst_11571 = (state_11618[15]);var inst_11573 = cljs.core.chunked_seq_QMARK_.call(null,inst_11571);var state_11618__$1 = state_11618;if(inst_11573)
{var statearr_11642_11681 = state_11618__$1;(statearr_11642_11681[1] = 16);
} else
{var statearr_11643_11682 = state_11618__$1;(statearr_11643_11682[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11619 === 14))
{var state_11618__$1 = state_11618;var statearr_11644_11683 = state_11618__$1;(statearr_11644_11683[2] = null);
(statearr_11644_11683[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11619 === 15))
{var inst_11589 = (state_11618[2]);var state_11618__$1 = state_11618;var statearr_11645_11684 = state_11618__$1;(statearr_11645_11684[2] = inst_11589);
(statearr_11645_11684[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11619 === 16))
{var inst_11571 = (state_11618[15]);var inst_11575 = cljs.core.chunk_first.call(null,inst_11571);var inst_11576 = cljs.core.chunk_rest.call(null,inst_11571);var inst_11577 = cljs.core.count.call(null,inst_11575);var inst_11557 = inst_11576;var inst_11558 = inst_11575;var inst_11559 = inst_11577;var inst_11560 = 0;var state_11618__$1 = (function (){var statearr_11646 = state_11618;(statearr_11646[8] = inst_11559);
(statearr_11646[9] = inst_11557);
(statearr_11646[10] = inst_11558);
(statearr_11646[11] = inst_11560);
return statearr_11646;
})();var statearr_11647_11685 = state_11618__$1;(statearr_11647_11685[2] = null);
(statearr_11647_11685[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11619 === 17))
{var inst_11571 = (state_11618[15]);var inst_11580 = cljs.core.first.call(null,inst_11571);var inst_11581 = cljs.core.async.muxch_STAR_.call(null,inst_11580);var inst_11582 = cljs.core.async.close_BANG_.call(null,inst_11581);var inst_11583 = cljs.core.next.call(null,inst_11571);var inst_11557 = inst_11583;var inst_11558 = null;var inst_11559 = 0;var inst_11560 = 0;var state_11618__$1 = (function (){var statearr_11648 = state_11618;(statearr_11648[16] = inst_11582);
(statearr_11648[8] = inst_11559);
(statearr_11648[9] = inst_11557);
(statearr_11648[10] = inst_11558);
(statearr_11648[11] = inst_11560);
return statearr_11648;
})();var statearr_11649_11686 = state_11618__$1;(statearr_11649_11686[2] = null);
(statearr_11649_11686[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11619 === 18))
{var inst_11586 = (state_11618[2]);var state_11618__$1 = state_11618;var statearr_11650_11687 = state_11618__$1;(statearr_11650_11687[2] = inst_11586);
(statearr_11650_11687[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11619 === 19))
{var state_11618__$1 = state_11618;var statearr_11651_11688 = state_11618__$1;(statearr_11651_11688[2] = null);
(statearr_11651_11688[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11619 === 20))
{var state_11618__$1 = state_11618;var statearr_11652_11689 = state_11618__$1;(statearr_11652_11689[2] = null);
(statearr_11652_11689[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11619 === 21))
{var inst_11611 = (state_11618[2]);var state_11618__$1 = (function (){var statearr_11653 = state_11618;(statearr_11653[17] = inst_11611);
return statearr_11653;
})();var statearr_11654_11690 = state_11618__$1;(statearr_11654_11690[2] = null);
(statearr_11654_11690[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11619 === 22))
{var inst_11608 = (state_11618[2]);var state_11618__$1 = state_11618;var statearr_11655_11691 = state_11618__$1;(statearr_11655_11691[2] = inst_11608);
(statearr_11655_11691[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11619 === 23))
{var inst_11595 = (state_11618[13]);var inst_11599 = (state_11618[2]);var inst_11600 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11595);var state_11618__$1 = (function (){var statearr_11656 = state_11618;(statearr_11656[18] = inst_11599);
return statearr_11656;
})();var statearr_11657_11692 = state_11618__$1;(statearr_11657_11692[2] = inst_11600);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11618__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11619 === 24))
{var inst_11597 = (state_11618[12]);var inst_11547 = (state_11618[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11618,23,Object,null,22);var inst_11604 = cljs.core.async.muxch_STAR_.call(null,inst_11597);var state_11618__$1 = state_11618;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11618__$1,25,inst_11604,inst_11547);
} else
{if((state_val_11619 === 25))
{var inst_11606 = (state_11618[2]);var state_11618__$1 = state_11618;var statearr_11658_11693 = state_11618__$1;(statearr_11658_11693[2] = inst_11606);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11618__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_11662 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11662[0] = state_machine__5509__auto__);
(statearr_11662[1] = 1);
return statearr_11662;
});
var state_machine__5509__auto____1 = (function (state_11618){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_11618);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e11663){if((e11663 instanceof Object))
{var ex__5512__auto__ = e11663;var statearr_11664_11694 = state_11618;(statearr_11664_11694[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11618);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11663;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11695 = state_11618;
state_11618 = G__11695;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_11618){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_11618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_11665 = f__5524__auto__.call(null);(statearr_11665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___11666);
return statearr_11665;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5523__auto___11832 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_11802){var state_val_11803 = (state_11802[1]);if((state_val_11803 === 1))
{var state_11802__$1 = state_11802;var statearr_11804_11833 = state_11802__$1;(statearr_11804_11833[2] = null);
(statearr_11804_11833[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11803 === 2))
{var inst_11765 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_11766 = 0;var state_11802__$1 = (function (){var statearr_11805 = state_11802;(statearr_11805[7] = inst_11765);
(statearr_11805[8] = inst_11766);
return statearr_11805;
})();var statearr_11806_11834 = state_11802__$1;(statearr_11806_11834[2] = null);
(statearr_11806_11834[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11803 === 3))
{var inst_11800 = (state_11802[2]);var state_11802__$1 = state_11802;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11802__$1,inst_11800);
} else
{if((state_val_11803 === 4))
{var inst_11766 = (state_11802[8]);var inst_11768 = (inst_11766 < cnt);var state_11802__$1 = state_11802;if(cljs.core.truth_(inst_11768))
{var statearr_11807_11835 = state_11802__$1;(statearr_11807_11835[1] = 6);
} else
{var statearr_11808_11836 = state_11802__$1;(statearr_11808_11836[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11803 === 5))
{var inst_11786 = (state_11802[2]);var state_11802__$1 = (function (){var statearr_11809 = state_11802;(statearr_11809[9] = inst_11786);
return statearr_11809;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11802__$1,12,dchan);
} else
{if((state_val_11803 === 6))
{var state_11802__$1 = state_11802;var statearr_11810_11837 = state_11802__$1;(statearr_11810_11837[2] = null);
(statearr_11810_11837[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11803 === 7))
{var state_11802__$1 = state_11802;var statearr_11811_11838 = state_11802__$1;(statearr_11811_11838[2] = null);
(statearr_11811_11838[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11803 === 8))
{var inst_11784 = (state_11802[2]);var state_11802__$1 = state_11802;var statearr_11812_11839 = state_11802__$1;(statearr_11812_11839[2] = inst_11784);
(statearr_11812_11839[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11803 === 9))
{var inst_11766 = (state_11802[8]);var inst_11779 = (state_11802[2]);var inst_11780 = (inst_11766 + 1);var inst_11766__$1 = inst_11780;var state_11802__$1 = (function (){var statearr_11813 = state_11802;(statearr_11813[8] = inst_11766__$1);
(statearr_11813[10] = inst_11779);
return statearr_11813;
})();var statearr_11814_11840 = state_11802__$1;(statearr_11814_11840[2] = null);
(statearr_11814_11840[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11803 === 10))
{var inst_11770 = (state_11802[2]);var inst_11771 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_11802__$1 = (function (){var statearr_11815 = state_11802;(statearr_11815[11] = inst_11770);
return statearr_11815;
})();var statearr_11816_11841 = state_11802__$1;(statearr_11816_11841[2] = inst_11771);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11802__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11803 === 11))
{var inst_11766 = (state_11802[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11802,10,Object,null,9);var inst_11775 = chs__$1.call(null,inst_11766);var inst_11776 = done.call(null,inst_11766);var inst_11777 = cljs.core.async.take_BANG_.call(null,inst_11775,inst_11776);var state_11802__$1 = state_11802;var statearr_11817_11842 = state_11802__$1;(statearr_11817_11842[2] = inst_11777);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11802__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11803 === 12))
{var inst_11788 = (state_11802[12]);var inst_11788__$1 = (state_11802[2]);var inst_11789 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11788__$1);var state_11802__$1 = (function (){var statearr_11818 = state_11802;(statearr_11818[12] = inst_11788__$1);
return statearr_11818;
})();if(cljs.core.truth_(inst_11789))
{var statearr_11819_11843 = state_11802__$1;(statearr_11819_11843[1] = 13);
} else
{var statearr_11820_11844 = state_11802__$1;(statearr_11820_11844[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11803 === 13))
{var inst_11791 = cljs.core.async.close_BANG_.call(null,out);var state_11802__$1 = state_11802;var statearr_11821_11845 = state_11802__$1;(statearr_11821_11845[2] = inst_11791);
(statearr_11821_11845[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11803 === 14))
{var inst_11788 = (state_11802[12]);var inst_11793 = cljs.core.apply.call(null,f,inst_11788);var state_11802__$1 = state_11802;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11802__$1,16,out,inst_11793);
} else
{if((state_val_11803 === 15))
{var inst_11798 = (state_11802[2]);var state_11802__$1 = state_11802;var statearr_11822_11846 = state_11802__$1;(statearr_11822_11846[2] = inst_11798);
(statearr_11822_11846[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11803 === 16))
{var inst_11795 = (state_11802[2]);var state_11802__$1 = (function (){var statearr_11823 = state_11802;(statearr_11823[13] = inst_11795);
return statearr_11823;
})();var statearr_11824_11847 = state_11802__$1;(statearr_11824_11847[2] = null);
(statearr_11824_11847[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
}
}
}
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_11828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11828[0] = state_machine__5509__auto__);
(statearr_11828[1] = 1);
return statearr_11828;
});
var state_machine__5509__auto____1 = (function (state_11802){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_11802);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e11829){if((e11829 instanceof Object))
{var ex__5512__auto__ = e11829;var statearr_11830_11848 = state_11802;(statearr_11830_11848[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11802);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11829;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11849 = state_11802;
state_11802 = G__11849;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_11802){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_11802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_11831 = f__5524__auto__.call(null);(statearr_11831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___11832);
return statearr_11831;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5523__auto___11957 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_11933){var state_val_11934 = (state_11933[1]);if((state_val_11934 === 1))
{var inst_11904 = cljs.core.vec.call(null,chs);var inst_11905 = inst_11904;var state_11933__$1 = (function (){var statearr_11935 = state_11933;(statearr_11935[7] = inst_11905);
return statearr_11935;
})();var statearr_11936_11958 = state_11933__$1;(statearr_11936_11958[2] = null);
(statearr_11936_11958[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11934 === 2))
{var inst_11905 = (state_11933[7]);var inst_11907 = cljs.core.count.call(null,inst_11905);var inst_11908 = (inst_11907 > 0);var state_11933__$1 = state_11933;if(cljs.core.truth_(inst_11908))
{var statearr_11937_11959 = state_11933__$1;(statearr_11937_11959[1] = 4);
} else
{var statearr_11938_11960 = state_11933__$1;(statearr_11938_11960[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11934 === 3))
{var inst_11931 = (state_11933[2]);var state_11933__$1 = state_11933;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11933__$1,inst_11931);
} else
{if((state_val_11934 === 4))
{var inst_11905 = (state_11933[7]);var state_11933__$1 = state_11933;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11933__$1,7,inst_11905);
} else
{if((state_val_11934 === 5))
{var inst_11927 = cljs.core.async.close_BANG_.call(null,out);var state_11933__$1 = state_11933;var statearr_11939_11961 = state_11933__$1;(statearr_11939_11961[2] = inst_11927);
(statearr_11939_11961[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11934 === 6))
{var inst_11929 = (state_11933[2]);var state_11933__$1 = state_11933;var statearr_11940_11962 = state_11933__$1;(statearr_11940_11962[2] = inst_11929);
(statearr_11940_11962[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11934 === 7))
{var inst_11912 = (state_11933[8]);var inst_11913 = (state_11933[9]);var inst_11912__$1 = (state_11933[2]);var inst_11913__$1 = cljs.core.nth.call(null,inst_11912__$1,0,null);var inst_11914 = cljs.core.nth.call(null,inst_11912__$1,1,null);var inst_11915 = (inst_11913__$1 == null);var state_11933__$1 = (function (){var statearr_11941 = state_11933;(statearr_11941[8] = inst_11912__$1);
(statearr_11941[10] = inst_11914);
(statearr_11941[9] = inst_11913__$1);
return statearr_11941;
})();if(cljs.core.truth_(inst_11915))
{var statearr_11942_11963 = state_11933__$1;(statearr_11942_11963[1] = 8);
} else
{var statearr_11943_11964 = state_11933__$1;(statearr_11943_11964[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11934 === 8))
{var inst_11905 = (state_11933[7]);var inst_11912 = (state_11933[8]);var inst_11914 = (state_11933[10]);var inst_11913 = (state_11933[9]);var inst_11917 = (function (){var c = inst_11914;var v = inst_11913;var vec__11910 = inst_11912;var cs = inst_11905;return ((function (c,v,vec__11910,cs,inst_11905,inst_11912,inst_11914,inst_11913,state_val_11934){
return (function (p1__11850_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__11850_SHARP_);
});
;})(c,v,vec__11910,cs,inst_11905,inst_11912,inst_11914,inst_11913,state_val_11934))
})();var inst_11918 = cljs.core.filterv.call(null,inst_11917,inst_11905);var inst_11905__$1 = inst_11918;var state_11933__$1 = (function (){var statearr_11944 = state_11933;(statearr_11944[7] = inst_11905__$1);
return statearr_11944;
})();var statearr_11945_11965 = state_11933__$1;(statearr_11945_11965[2] = null);
(statearr_11945_11965[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11934 === 9))
{var inst_11913 = (state_11933[9]);var state_11933__$1 = state_11933;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11933__$1,11,out,inst_11913);
} else
{if((state_val_11934 === 10))
{var inst_11925 = (state_11933[2]);var state_11933__$1 = state_11933;var statearr_11947_11966 = state_11933__$1;(statearr_11947_11966[2] = inst_11925);
(statearr_11947_11966[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11934 === 11))
{var inst_11905 = (state_11933[7]);var inst_11922 = (state_11933[2]);var tmp11946 = inst_11905;var inst_11905__$1 = tmp11946;var state_11933__$1 = (function (){var statearr_11948 = state_11933;(statearr_11948[7] = inst_11905__$1);
(statearr_11948[11] = inst_11922);
return statearr_11948;
})();var statearr_11949_11967 = state_11933__$1;(statearr_11949_11967[2] = null);
(statearr_11949_11967[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_11953 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11953[0] = state_machine__5509__auto__);
(statearr_11953[1] = 1);
return statearr_11953;
});
var state_machine__5509__auto____1 = (function (state_11933){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_11933);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e11954){if((e11954 instanceof Object))
{var ex__5512__auto__ = e11954;var statearr_11955_11968 = state_11933;(statearr_11955_11968[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11933);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11954;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11969 = state_11933;
state_11933 = G__11969;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_11933){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_11933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_11956 = f__5524__auto__.call(null);(statearr_11956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___11957);
return statearr_11956;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5523__auto___12062 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_12039){var state_val_12040 = (state_12039[1]);if((state_val_12040 === 1))
{var inst_12016 = 0;var state_12039__$1 = (function (){var statearr_12041 = state_12039;(statearr_12041[7] = inst_12016);
return statearr_12041;
})();var statearr_12042_12063 = state_12039__$1;(statearr_12042_12063[2] = null);
(statearr_12042_12063[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12040 === 2))
{var inst_12016 = (state_12039[7]);var inst_12018 = (inst_12016 < n);var state_12039__$1 = state_12039;if(cljs.core.truth_(inst_12018))
{var statearr_12043_12064 = state_12039__$1;(statearr_12043_12064[1] = 4);
} else
{var statearr_12044_12065 = state_12039__$1;(statearr_12044_12065[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12040 === 3))
{var inst_12036 = (state_12039[2]);var inst_12037 = cljs.core.async.close_BANG_.call(null,out);var state_12039__$1 = (function (){var statearr_12045 = state_12039;(statearr_12045[8] = inst_12036);
return statearr_12045;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12039__$1,inst_12037);
} else
{if((state_val_12040 === 4))
{var state_12039__$1 = state_12039;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12039__$1,7,ch);
} else
{if((state_val_12040 === 5))
{var state_12039__$1 = state_12039;var statearr_12046_12066 = state_12039__$1;(statearr_12046_12066[2] = null);
(statearr_12046_12066[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12040 === 6))
{var inst_12034 = (state_12039[2]);var state_12039__$1 = state_12039;var statearr_12047_12067 = state_12039__$1;(statearr_12047_12067[2] = inst_12034);
(statearr_12047_12067[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12040 === 7))
{var inst_12021 = (state_12039[9]);var inst_12021__$1 = (state_12039[2]);var inst_12022 = (inst_12021__$1 == null);var inst_12023 = cljs.core.not.call(null,inst_12022);var state_12039__$1 = (function (){var statearr_12048 = state_12039;(statearr_12048[9] = inst_12021__$1);
return statearr_12048;
})();if(inst_12023)
{var statearr_12049_12068 = state_12039__$1;(statearr_12049_12068[1] = 8);
} else
{var statearr_12050_12069 = state_12039__$1;(statearr_12050_12069[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12040 === 8))
{var inst_12021 = (state_12039[9]);var state_12039__$1 = state_12039;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12039__$1,11,out,inst_12021);
} else
{if((state_val_12040 === 9))
{var state_12039__$1 = state_12039;var statearr_12051_12070 = state_12039__$1;(statearr_12051_12070[2] = null);
(statearr_12051_12070[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12040 === 10))
{var inst_12031 = (state_12039[2]);var state_12039__$1 = state_12039;var statearr_12052_12071 = state_12039__$1;(statearr_12052_12071[2] = inst_12031);
(statearr_12052_12071[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12040 === 11))
{var inst_12016 = (state_12039[7]);var inst_12026 = (state_12039[2]);var inst_12027 = (inst_12016 + 1);var inst_12016__$1 = inst_12027;var state_12039__$1 = (function (){var statearr_12053 = state_12039;(statearr_12053[10] = inst_12026);
(statearr_12053[7] = inst_12016__$1);
return statearr_12053;
})();var statearr_12054_12072 = state_12039__$1;(statearr_12054_12072[2] = null);
(statearr_12054_12072[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_12058 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12058[0] = state_machine__5509__auto__);
(statearr_12058[1] = 1);
return statearr_12058;
});
var state_machine__5509__auto____1 = (function (state_12039){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_12039);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e12059){if((e12059 instanceof Object))
{var ex__5512__auto__ = e12059;var statearr_12060_12073 = state_12039;(statearr_12060_12073[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12039);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12059;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12074 = state_12039;
state_12039 = G__12074;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_12039){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_12039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_12061 = f__5524__auto__.call(null);(statearr_12061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___12062);
return statearr_12061;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5523__auto___12171 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_12146){var state_val_12147 = (state_12146[1]);if((state_val_12147 === 1))
{var inst_12123 = null;var state_12146__$1 = (function (){var statearr_12148 = state_12146;(statearr_12148[7] = inst_12123);
return statearr_12148;
})();var statearr_12149_12172 = state_12146__$1;(statearr_12149_12172[2] = null);
(statearr_12149_12172[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12147 === 2))
{var state_12146__$1 = state_12146;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12146__$1,4,ch);
} else
{if((state_val_12147 === 3))
{var inst_12143 = (state_12146[2]);var inst_12144 = cljs.core.async.close_BANG_.call(null,out);var state_12146__$1 = (function (){var statearr_12150 = state_12146;(statearr_12150[8] = inst_12143);
return statearr_12150;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12146__$1,inst_12144);
} else
{if((state_val_12147 === 4))
{var inst_12126 = (state_12146[9]);var inst_12126__$1 = (state_12146[2]);var inst_12127 = (inst_12126__$1 == null);var inst_12128 = cljs.core.not.call(null,inst_12127);var state_12146__$1 = (function (){var statearr_12151 = state_12146;(statearr_12151[9] = inst_12126__$1);
return statearr_12151;
})();if(inst_12128)
{var statearr_12152_12173 = state_12146__$1;(statearr_12152_12173[1] = 5);
} else
{var statearr_12153_12174 = state_12146__$1;(statearr_12153_12174[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12147 === 5))
{var inst_12126 = (state_12146[9]);var inst_12123 = (state_12146[7]);var inst_12130 = cljs.core._EQ_.call(null,inst_12126,inst_12123);var state_12146__$1 = state_12146;if(inst_12130)
{var statearr_12154_12175 = state_12146__$1;(statearr_12154_12175[1] = 8);
} else
{var statearr_12155_12176 = state_12146__$1;(statearr_12155_12176[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12147 === 6))
{var state_12146__$1 = state_12146;var statearr_12157_12177 = state_12146__$1;(statearr_12157_12177[2] = null);
(statearr_12157_12177[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12147 === 7))
{var inst_12141 = (state_12146[2]);var state_12146__$1 = state_12146;var statearr_12158_12178 = state_12146__$1;(statearr_12158_12178[2] = inst_12141);
(statearr_12158_12178[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12147 === 8))
{var inst_12123 = (state_12146[7]);var tmp12156 = inst_12123;var inst_12123__$1 = tmp12156;var state_12146__$1 = (function (){var statearr_12159 = state_12146;(statearr_12159[7] = inst_12123__$1);
return statearr_12159;
})();var statearr_12160_12179 = state_12146__$1;(statearr_12160_12179[2] = null);
(statearr_12160_12179[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12147 === 9))
{var inst_12126 = (state_12146[9]);var state_12146__$1 = state_12146;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12146__$1,11,out,inst_12126);
} else
{if((state_val_12147 === 10))
{var inst_12138 = (state_12146[2]);var state_12146__$1 = state_12146;var statearr_12161_12180 = state_12146__$1;(statearr_12161_12180[2] = inst_12138);
(statearr_12161_12180[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12147 === 11))
{var inst_12126 = (state_12146[9]);var inst_12135 = (state_12146[2]);var inst_12123 = inst_12126;var state_12146__$1 = (function (){var statearr_12162 = state_12146;(statearr_12162[10] = inst_12135);
(statearr_12162[7] = inst_12123);
return statearr_12162;
})();var statearr_12163_12181 = state_12146__$1;(statearr_12163_12181[2] = null);
(statearr_12163_12181[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_12167 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12167[0] = state_machine__5509__auto__);
(statearr_12167[1] = 1);
return statearr_12167;
});
var state_machine__5509__auto____1 = (function (state_12146){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_12146);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e12168){if((e12168 instanceof Object))
{var ex__5512__auto__ = e12168;var statearr_12169_12182 = state_12146;(statearr_12169_12182[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12146);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12168;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12183 = state_12146;
state_12146 = G__12183;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_12146){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_12146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_12170 = f__5524__auto__.call(null);(statearr_12170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___12171);
return statearr_12170;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5523__auto___12318 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_12288){var state_val_12289 = (state_12288[1]);if((state_val_12289 === 1))
{var inst_12251 = (new Array(n));var inst_12252 = inst_12251;var inst_12253 = 0;var state_12288__$1 = (function (){var statearr_12290 = state_12288;(statearr_12290[7] = inst_12253);
(statearr_12290[8] = inst_12252);
return statearr_12290;
})();var statearr_12291_12319 = state_12288__$1;(statearr_12291_12319[2] = null);
(statearr_12291_12319[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12289 === 2))
{var state_12288__$1 = state_12288;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12288__$1,4,ch);
} else
{if((state_val_12289 === 3))
{var inst_12286 = (state_12288[2]);var state_12288__$1 = state_12288;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12288__$1,inst_12286);
} else
{if((state_val_12289 === 4))
{var inst_12256 = (state_12288[9]);var inst_12256__$1 = (state_12288[2]);var inst_12257 = (inst_12256__$1 == null);var inst_12258 = cljs.core.not.call(null,inst_12257);var state_12288__$1 = (function (){var statearr_12292 = state_12288;(statearr_12292[9] = inst_12256__$1);
return statearr_12292;
})();if(inst_12258)
{var statearr_12293_12320 = state_12288__$1;(statearr_12293_12320[1] = 5);
} else
{var statearr_12294_12321 = state_12288__$1;(statearr_12294_12321[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12289 === 5))
{var inst_12261 = (state_12288[10]);var inst_12256 = (state_12288[9]);var inst_12253 = (state_12288[7]);var inst_12252 = (state_12288[8]);var inst_12260 = (inst_12252[inst_12253] = inst_12256);var inst_12261__$1 = (inst_12253 + 1);var inst_12262 = (inst_12261__$1 < n);var state_12288__$1 = (function (){var statearr_12295 = state_12288;(statearr_12295[10] = inst_12261__$1);
(statearr_12295[11] = inst_12260);
return statearr_12295;
})();if(cljs.core.truth_(inst_12262))
{var statearr_12296_12322 = state_12288__$1;(statearr_12296_12322[1] = 8);
} else
{var statearr_12297_12323 = state_12288__$1;(statearr_12297_12323[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12289 === 6))
{var inst_12253 = (state_12288[7]);var inst_12274 = (inst_12253 > 0);var state_12288__$1 = state_12288;if(cljs.core.truth_(inst_12274))
{var statearr_12299_12324 = state_12288__$1;(statearr_12299_12324[1] = 12);
} else
{var statearr_12300_12325 = state_12288__$1;(statearr_12300_12325[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12289 === 7))
{var inst_12284 = (state_12288[2]);var state_12288__$1 = state_12288;var statearr_12301_12326 = state_12288__$1;(statearr_12301_12326[2] = inst_12284);
(statearr_12301_12326[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12289 === 8))
{var inst_12261 = (state_12288[10]);var inst_12252 = (state_12288[8]);var tmp12298 = inst_12252;var inst_12252__$1 = tmp12298;var inst_12253 = inst_12261;var state_12288__$1 = (function (){var statearr_12302 = state_12288;(statearr_12302[7] = inst_12253);
(statearr_12302[8] = inst_12252__$1);
return statearr_12302;
})();var statearr_12303_12327 = state_12288__$1;(statearr_12303_12327[2] = null);
(statearr_12303_12327[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12289 === 9))
{var inst_12252 = (state_12288[8]);var inst_12266 = cljs.core.vec.call(null,inst_12252);var state_12288__$1 = state_12288;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12288__$1,11,out,inst_12266);
} else
{if((state_val_12289 === 10))
{var inst_12272 = (state_12288[2]);var state_12288__$1 = state_12288;var statearr_12304_12328 = state_12288__$1;(statearr_12304_12328[2] = inst_12272);
(statearr_12304_12328[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12289 === 11))
{var inst_12268 = (state_12288[2]);var inst_12269 = (new Array(n));var inst_12252 = inst_12269;var inst_12253 = 0;var state_12288__$1 = (function (){var statearr_12305 = state_12288;(statearr_12305[12] = inst_12268);
(statearr_12305[7] = inst_12253);
(statearr_12305[8] = inst_12252);
return statearr_12305;
})();var statearr_12306_12329 = state_12288__$1;(statearr_12306_12329[2] = null);
(statearr_12306_12329[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12289 === 12))
{var inst_12252 = (state_12288[8]);var inst_12276 = cljs.core.vec.call(null,inst_12252);var state_12288__$1 = state_12288;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12288__$1,15,out,inst_12276);
} else
{if((state_val_12289 === 13))
{var state_12288__$1 = state_12288;var statearr_12307_12330 = state_12288__$1;(statearr_12307_12330[2] = null);
(statearr_12307_12330[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12289 === 14))
{var inst_12281 = (state_12288[2]);var inst_12282 = cljs.core.async.close_BANG_.call(null,out);var state_12288__$1 = (function (){var statearr_12308 = state_12288;(statearr_12308[13] = inst_12281);
return statearr_12308;
})();var statearr_12309_12331 = state_12288__$1;(statearr_12309_12331[2] = inst_12282);
(statearr_12309_12331[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12289 === 15))
{var inst_12278 = (state_12288[2]);var state_12288__$1 = state_12288;var statearr_12310_12332 = state_12288__$1;(statearr_12310_12332[2] = inst_12278);
(statearr_12310_12332[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
}
}
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_12314 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12314[0] = state_machine__5509__auto__);
(statearr_12314[1] = 1);
return statearr_12314;
});
var state_machine__5509__auto____1 = (function (state_12288){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_12288);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e12315){if((e12315 instanceof Object))
{var ex__5512__auto__ = e12315;var statearr_12316_12333 = state_12288;(statearr_12316_12333[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12288);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12315;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12334 = state_12288;
state_12288 = G__12334;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_12288){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_12288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_12317 = f__5524__auto__.call(null);(statearr_12317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___12318);
return statearr_12317;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5523__auto___12477 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5524__auto__ = (function (){var switch__5508__auto__ = (function (state_12447){var state_val_12448 = (state_12447[1]);if((state_val_12448 === 1))
{var inst_12406 = [];var inst_12407 = inst_12406;var inst_12408 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_12447__$1 = (function (){var statearr_12449 = state_12447;(statearr_12449[7] = inst_12407);
(statearr_12449[8] = inst_12408);
return statearr_12449;
})();var statearr_12450_12478 = state_12447__$1;(statearr_12450_12478[2] = null);
(statearr_12450_12478[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12448 === 2))
{var state_12447__$1 = state_12447;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12447__$1,4,ch);
} else
{if((state_val_12448 === 3))
{var inst_12445 = (state_12447[2]);var state_12447__$1 = state_12447;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12447__$1,inst_12445);
} else
{if((state_val_12448 === 4))
{var inst_12411 = (state_12447[9]);var inst_12411__$1 = (state_12447[2]);var inst_12412 = (inst_12411__$1 == null);var inst_12413 = cljs.core.not.call(null,inst_12412);var state_12447__$1 = (function (){var statearr_12451 = state_12447;(statearr_12451[9] = inst_12411__$1);
return statearr_12451;
})();if(inst_12413)
{var statearr_12452_12479 = state_12447__$1;(statearr_12452_12479[1] = 5);
} else
{var statearr_12453_12480 = state_12447__$1;(statearr_12453_12480[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12448 === 5))
{var inst_12408 = (state_12447[8]);var inst_12415 = (state_12447[10]);var inst_12411 = (state_12447[9]);var inst_12415__$1 = f.call(null,inst_12411);var inst_12416 = cljs.core._EQ_.call(null,inst_12415__$1,inst_12408);var inst_12417 = cljs.core.keyword_identical_QMARK_.call(null,inst_12408,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_12418 = (inst_12416) || (inst_12417);var state_12447__$1 = (function (){var statearr_12454 = state_12447;(statearr_12454[10] = inst_12415__$1);
return statearr_12454;
})();if(cljs.core.truth_(inst_12418))
{var statearr_12455_12481 = state_12447__$1;(statearr_12455_12481[1] = 8);
} else
{var statearr_12456_12482 = state_12447__$1;(statearr_12456_12482[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12448 === 6))
{var inst_12407 = (state_12447[7]);var inst_12432 = inst_12407.length;var inst_12433 = (inst_12432 > 0);var state_12447__$1 = state_12447;if(cljs.core.truth_(inst_12433))
{var statearr_12458_12483 = state_12447__$1;(statearr_12458_12483[1] = 12);
} else
{var statearr_12459_12484 = state_12447__$1;(statearr_12459_12484[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12448 === 7))
{var inst_12443 = (state_12447[2]);var state_12447__$1 = state_12447;var statearr_12460_12485 = state_12447__$1;(statearr_12460_12485[2] = inst_12443);
(statearr_12460_12485[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12448 === 8))
{var inst_12407 = (state_12447[7]);var inst_12415 = (state_12447[10]);var inst_12411 = (state_12447[9]);var inst_12420 = inst_12407.push(inst_12411);var tmp12457 = inst_12407;var inst_12407__$1 = tmp12457;var inst_12408 = inst_12415;var state_12447__$1 = (function (){var statearr_12461 = state_12447;(statearr_12461[7] = inst_12407__$1);
(statearr_12461[8] = inst_12408);
(statearr_12461[11] = inst_12420);
return statearr_12461;
})();var statearr_12462_12486 = state_12447__$1;(statearr_12462_12486[2] = null);
(statearr_12462_12486[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12448 === 9))
{var inst_12407 = (state_12447[7]);var inst_12423 = cljs.core.vec.call(null,inst_12407);var state_12447__$1 = state_12447;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12447__$1,11,out,inst_12423);
} else
{if((state_val_12448 === 10))
{var inst_12430 = (state_12447[2]);var state_12447__$1 = state_12447;var statearr_12463_12487 = state_12447__$1;(statearr_12463_12487[2] = inst_12430);
(statearr_12463_12487[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12448 === 11))
{var inst_12415 = (state_12447[10]);var inst_12411 = (state_12447[9]);var inst_12425 = (state_12447[2]);var inst_12426 = [];var inst_12427 = inst_12426.push(inst_12411);var inst_12407 = inst_12426;var inst_12408 = inst_12415;var state_12447__$1 = (function (){var statearr_12464 = state_12447;(statearr_12464[12] = inst_12425);
(statearr_12464[13] = inst_12427);
(statearr_12464[7] = inst_12407);
(statearr_12464[8] = inst_12408);
return statearr_12464;
})();var statearr_12465_12488 = state_12447__$1;(statearr_12465_12488[2] = null);
(statearr_12465_12488[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12448 === 12))
{var inst_12407 = (state_12447[7]);var inst_12435 = cljs.core.vec.call(null,inst_12407);var state_12447__$1 = state_12447;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12447__$1,15,out,inst_12435);
} else
{if((state_val_12448 === 13))
{var state_12447__$1 = state_12447;var statearr_12466_12489 = state_12447__$1;(statearr_12466_12489[2] = null);
(statearr_12466_12489[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12448 === 14))
{var inst_12440 = (state_12447[2]);var inst_12441 = cljs.core.async.close_BANG_.call(null,out);var state_12447__$1 = (function (){var statearr_12467 = state_12447;(statearr_12467[14] = inst_12440);
return statearr_12467;
})();var statearr_12468_12490 = state_12447__$1;(statearr_12468_12490[2] = inst_12441);
(statearr_12468_12490[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12448 === 15))
{var inst_12437 = (state_12447[2]);var state_12447__$1 = state_12447;var statearr_12469_12491 = state_12447__$1;(statearr_12469_12491[2] = inst_12437);
(statearr_12469_12491[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
}
}
}
}
}
}
});return ((function (switch__5508__auto__){
return (function() {
var state_machine__5509__auto__ = null;
var state_machine__5509__auto____0 = (function (){var statearr_12473 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12473[0] = state_machine__5509__auto__);
(statearr_12473[1] = 1);
return statearr_12473;
});
var state_machine__5509__auto____1 = (function (state_12447){while(true){
var ret_value__5510__auto__ = (function (){try{while(true){
var result__5511__auto__ = switch__5508__auto__.call(null,state_12447);if(cljs.core.keyword_identical_QMARK_.call(null,result__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5511__auto__;
}
break;
}
}catch (e12474){if((e12474 instanceof Object))
{var ex__5512__auto__ = e12474;var statearr_12475_12492 = state_12447;(statearr_12475_12492[5] = ex__5512__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12447);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12474;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5510__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12493 = state_12447;
state_12447 = G__12493;
continue;
}
} else
{return ret_value__5510__auto__;
}
break;
}
});
state_machine__5509__auto__ = function(state_12447){
switch(arguments.length){
case 0:
return state_machine__5509__auto____0.call(this);
case 1:
return state_machine__5509__auto____1.call(this,state_12447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5509__auto____0;
state_machine__5509__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5509__auto____1;
return state_machine__5509__auto__;
})()
;})(switch__5508__auto__))
})();var state__5525__auto__ = (function (){var statearr_12476 = f__5524__auto__.call(null);(statearr_12476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5523__auto___12477);
return statearr_12476;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5525__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map