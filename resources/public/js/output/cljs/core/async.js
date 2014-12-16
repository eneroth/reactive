// Compiled by ClojureScript 0.0-2411
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t10873 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10873 = (function (f,fn_handler,meta10874){
this.f = f;
this.fn_handler = fn_handler;
this.meta10874 = meta10874;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10873.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t10873.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t10873.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t10873.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10875){
var self__ = this;
var _10875__$1 = this;
return self__.meta10874;
});

cljs.core.async.t10873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10875,meta10874__$1){
var self__ = this;
var _10875__$1 = this;
return (new cljs.core.async.t10873(self__.f,self__.fn_handler,meta10874__$1));
});

cljs.core.async.t10873.cljs$lang$type = true;

cljs.core.async.t10873.cljs$lang$ctorStr = "cljs.core.async/t10873";

cljs.core.async.t10873.cljs$lang$ctorPrWriter = (function (this__4210__auto__,writer__4211__auto__,opt__4212__auto__){
return cljs.core._write.call(null,writer__4211__auto__,"cljs.core.async/t10873");
});

cljs.core.async.__GT_t10873 = (function __GT_t10873(f__$1,fn_handler__$1,meta10874){
return (new cljs.core.async.t10873(f__$1,fn_handler__$1,meta10874));
});

}

return (new cljs.core.async.t10873(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/henrik/Documents/Projects/Programming/reactive/resources/public/js/output/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__10877 = buff;
if(G__10877){
var bit__4304__auto__ = null;
if(cljs.core.truth_((function (){var or__3628__auto__ = bit__4304__auto__;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return G__10877.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__10877.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10877);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10877);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_10878 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_10878);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_10878,ret){
return (function (){
return fn1.call(null,val_10878);
});})(val_10878,ret))
);
}
} else {
}

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
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4510__auto___10879 = n;
var x_10880 = (0);
while(true){
if((x_10880 < n__4510__auto___10879)){
(a[x_10880] = (0));

var G__10881 = (x_10880 + (1));
x_10880 = G__10881;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__10882 = (i + (1));
i = G__10882;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t10886 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10886 = (function (flag,alt_flag,meta10887){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10887 = meta10887;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10886.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t10886.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t10886.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t10886.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10888){
var self__ = this;
var _10888__$1 = this;
return self__.meta10887;
});})(flag))
;

cljs.core.async.t10886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10888,meta10887__$1){
var self__ = this;
var _10888__$1 = this;
return (new cljs.core.async.t10886(self__.flag,self__.alt_flag,meta10887__$1));
});})(flag))
;

cljs.core.async.t10886.cljs$lang$type = true;

cljs.core.async.t10886.cljs$lang$ctorStr = "cljs.core.async/t10886";

cljs.core.async.t10886.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4210__auto__,writer__4211__auto__,opt__4212__auto__){
return cljs.core._write.call(null,writer__4211__auto__,"cljs.core.async/t10886");
});})(flag))
;

cljs.core.async.__GT_t10886 = ((function (flag){
return (function __GT_t10886(flag__$1,alt_flag__$1,meta10887){
return (new cljs.core.async.t10886(flag__$1,alt_flag__$1,meta10887));
});})(flag))
;

}

return (new cljs.core.async.t10886(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/henrik/Documents/Projects/Programming/reactive/resources/public/js/output/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t10892 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10892 = (function (cb,flag,alt_handler,meta10893){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10893 = meta10893;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10892.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t10892.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t10892.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t10892.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10894){
var self__ = this;
var _10894__$1 = this;
return self__.meta10893;
});

cljs.core.async.t10892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10894,meta10893__$1){
var self__ = this;
var _10894__$1 = this;
return (new cljs.core.async.t10892(self__.cb,self__.flag,self__.alt_handler,meta10893__$1));
});

cljs.core.async.t10892.cljs$lang$type = true;

cljs.core.async.t10892.cljs$lang$ctorStr = "cljs.core.async/t10892";

cljs.core.async.t10892.cljs$lang$ctorPrWriter = (function (this__4210__auto__,writer__4211__auto__,opt__4212__auto__){
return cljs.core._write.call(null,writer__4211__auto__,"cljs.core.async/t10892");
});

cljs.core.async.__GT_t10892 = (function __GT_t10892(cb__$1,flag__$1,alt_handler__$1,meta10893){
return (new cljs.core.async.t10892(cb__$1,flag__$1,alt_handler__$1,meta10893));
});

}

return (new cljs.core.async.t10892(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/henrik/Documents/Projects/Programming/reactive/resources/public/js/output/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10895_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10895_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10896_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10896_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3628__auto__ = wport;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return port;
}
})()], null));
} else {
var G__10897 = (i + (1));
i = G__10897;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3628__auto__ = ret;
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3616__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3616__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3616__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
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
var alts_BANG___delegate = function (ports,p__10898){
var map__10900 = p__10898;
var map__10900__$1 = ((cljs.core.seq_QMARK_.call(null,map__10900))?cljs.core.apply.call(null,cljs.core.hash_map,map__10900):map__10900);
var opts = map__10900__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__10898 = null;
if (arguments.length > 1) {
  p__10898 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return alts_BANG___delegate.call(this,ports,p__10898);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10901){
var ports = cljs.core.first(arglist__10901);
var p__10898 = cljs.core.rest(arglist__10901);
return alts_BANG___delegate(ports,p__10898);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__5829__auto___10996 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5829__auto___10996){
return (function (){
var f__5830__auto__ = (function (){var switch__5814__auto__ = ((function (c__5829__auto___10996){
return (function (state_10972){
var state_val_10973 = (state_10972[(1)]);
if((state_val_10973 === (7))){
var inst_10968 = (state_10972[(2)]);
var state_10972__$1 = state_10972;
var statearr_10974_10997 = state_10972__$1;
(statearr_10974_10997[(2)] = inst_10968);

(statearr_10974_10997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10973 === (1))){
var state_10972__$1 = state_10972;
var statearr_10975_10998 = state_10972__$1;
(statearr_10975_10998[(2)] = null);

(statearr_10975_10998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10973 === (4))){
var inst_10951 = (state_10972[(7)]);
var inst_10951__$1 = (state_10972[(2)]);
var inst_10952 = (inst_10951__$1 == null);
var state_10972__$1 = (function (){var statearr_10976 = state_10972;
(statearr_10976[(7)] = inst_10951__$1);

return statearr_10976;
})();
if(cljs.core.truth_(inst_10952)){
var statearr_10977_10999 = state_10972__$1;
(statearr_10977_10999[(1)] = (5));

} else {
var statearr_10978_11000 = state_10972__$1;
(statearr_10978_11000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10973 === (13))){
var state_10972__$1 = state_10972;
var statearr_10979_11001 = state_10972__$1;
(statearr_10979_11001[(2)] = null);

(statearr_10979_11001[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10973 === (6))){
var inst_10951 = (state_10972[(7)]);
var state_10972__$1 = state_10972;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10972__$1,(11),to,inst_10951);
} else {
if((state_val_10973 === (3))){
var inst_10970 = (state_10972[(2)]);
var state_10972__$1 = state_10972;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10972__$1,inst_10970);
} else {
if((state_val_10973 === (12))){
var state_10972__$1 = state_10972;
var statearr_10980_11002 = state_10972__$1;
(statearr_10980_11002[(2)] = null);

(statearr_10980_11002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10973 === (2))){
var state_10972__$1 = state_10972;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10972__$1,(4),from);
} else {
if((state_val_10973 === (11))){
var inst_10961 = (state_10972[(2)]);
var state_10972__$1 = state_10972;
if(cljs.core.truth_(inst_10961)){
var statearr_10981_11003 = state_10972__$1;
(statearr_10981_11003[(1)] = (12));

} else {
var statearr_10982_11004 = state_10972__$1;
(statearr_10982_11004[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10973 === (9))){
var state_10972__$1 = state_10972;
var statearr_10983_11005 = state_10972__$1;
(statearr_10983_11005[(2)] = null);

(statearr_10983_11005[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10973 === (5))){
var state_10972__$1 = state_10972;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10984_11006 = state_10972__$1;
(statearr_10984_11006[(1)] = (8));

} else {
var statearr_10985_11007 = state_10972__$1;
(statearr_10985_11007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10973 === (14))){
var inst_10966 = (state_10972[(2)]);
var state_10972__$1 = state_10972;
var statearr_10986_11008 = state_10972__$1;
(statearr_10986_11008[(2)] = inst_10966);

(statearr_10986_11008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10973 === (10))){
var inst_10958 = (state_10972[(2)]);
var state_10972__$1 = state_10972;
var statearr_10987_11009 = state_10972__$1;
(statearr_10987_11009[(2)] = inst_10958);

(statearr_10987_11009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10973 === (8))){
var inst_10955 = cljs.core.async.close_BANG_.call(null,to);
var state_10972__$1 = state_10972;
var statearr_10988_11010 = state_10972__$1;
(statearr_10988_11010[(2)] = inst_10955);

(statearr_10988_11010[(1)] = (10));


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
}
}
}
}
}
}
}
});})(c__5829__auto___10996))
;
return ((function (switch__5814__auto__,c__5829__auto___10996){
return (function() {
var state_machine__5815__auto__ = null;
var state_machine__5815__auto____0 = (function (){
var statearr_10992 = [null,null,null,null,null,null,null,null];
(statearr_10992[(0)] = state_machine__5815__auto__);

(statearr_10992[(1)] = (1));

return statearr_10992;
});
var state_machine__5815__auto____1 = (function (state_10972){
while(true){
var ret_value__5816__auto__ = (function (){try{while(true){
var result__5817__auto__ = switch__5814__auto__.call(null,state_10972);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5817__auto__;
}
break;
}
}catch (e10993){if((e10993 instanceof Object)){
var ex__5818__auto__ = e10993;
var statearr_10994_11011 = state_10972;
(statearr_10994_11011[(5)] = ex__5818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11012 = state_10972;
state_10972 = G__11012;
continue;
} else {
return ret_value__5816__auto__;
}
break;
}
});
state_machine__5815__auto__ = function(state_10972){
switch(arguments.length){
case 0:
return state_machine__5815__auto____0.call(this);
case 1:
return state_machine__5815__auto____1.call(this,state_10972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5815__auto____0;
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5815__auto____1;
return state_machine__5815__auto__;
})()
;})(switch__5814__auto__,c__5829__auto___10996))
})();
var state__5831__auto__ = (function (){var statearr_10995 = f__5830__auto__.call(null);
(statearr_10995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5829__auto___10996);

return statearr_10995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5831__auto__);
});})(c__5829__auto___10996))
);


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
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__11196){
var vec__11197 = p__11196;
var v = cljs.core.nth.call(null,vec__11197,(0),null);
var p = cljs.core.nth.call(null,vec__11197,(1),null);
var job = vec__11197;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__5829__auto___11379 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5829__auto___11379,res,vec__11197,v,p,job,jobs,results){
return (function (){
var f__5830__auto__ = (function (){var switch__5814__auto__ = ((function (c__5829__auto___11379,res,vec__11197,v,p,job,jobs,results){
return (function (state_11202){
var state_val_11203 = (state_11202[(1)]);
if((state_val_11203 === (2))){
var inst_11199 = (state_11202[(2)]);
var inst_11200 = cljs.core.async.close_BANG_.call(null,res);
var state_11202__$1 = (function (){var statearr_11204 = state_11202;
(statearr_11204[(7)] = inst_11199);

return statearr_11204;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11202__$1,inst_11200);
} else {
if((state_val_11203 === (1))){
var state_11202__$1 = state_11202;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11202__$1,(2),res,v);
} else {
return null;
}
}
});})(c__5829__auto___11379,res,vec__11197,v,p,job,jobs,results))
;
return ((function (switch__5814__auto__,c__5829__auto___11379,res,vec__11197,v,p,job,jobs,results){
return (function() {
var state_machine__5815__auto__ = null;
var state_machine__5815__auto____0 = (function (){
var statearr_11208 = [null,null,null,null,null,null,null,null];
(statearr_11208[(0)] = state_machine__5815__auto__);

(statearr_11208[(1)] = (1));

return statearr_11208;
});
var state_machine__5815__auto____1 = (function (state_11202){
while(true){
var ret_value__5816__auto__ = (function (){try{while(true){
var result__5817__auto__ = switch__5814__auto__.call(null,state_11202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5817__auto__;
}
break;
}
}catch (e11209){if((e11209 instanceof Object)){
var ex__5818__auto__ = e11209;
var statearr_11210_11380 = state_11202;
(statearr_11210_11380[(5)] = ex__5818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11381 = state_11202;
state_11202 = G__11381;
continue;
} else {
return ret_value__5816__auto__;
}
break;
}
});
state_machine__5815__auto__ = function(state_11202){
switch(arguments.length){
case 0:
return state_machine__5815__auto____0.call(this);
case 1:
return state_machine__5815__auto____1.call(this,state_11202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5815__auto____0;
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5815__auto____1;
return state_machine__5815__auto__;
})()
;})(switch__5814__auto__,c__5829__auto___11379,res,vec__11197,v,p,job,jobs,results))
})();
var state__5831__auto__ = (function (){var statearr_11211 = f__5830__auto__.call(null);
(statearr_11211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5829__auto___11379);

return statearr_11211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5831__auto__);
});})(c__5829__auto___11379,res,vec__11197,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__11212){
var vec__11213 = p__11212;
var v = cljs.core.nth.call(null,vec__11213,(0),null);
var p = cljs.core.nth.call(null,vec__11213,(1),null);
var job = vec__11213;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4510__auto___11382 = n;
var __11383 = (0);
while(true){
if((__11383 < n__4510__auto___11382)){
var G__11214_11384 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__11214_11384) {
case "async":
var c__5829__auto___11386 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11383,c__5829__auto___11386,G__11214_11384,n__4510__auto___11382,jobs,results,process,async){
return (function (){
var f__5830__auto__ = (function (){var switch__5814__auto__ = ((function (__11383,c__5829__auto___11386,G__11214_11384,n__4510__auto___11382,jobs,results,process,async){
return (function (state_11227){
var state_val_11228 = (state_11227[(1)]);
if((state_val_11228 === (7))){
var inst_11223 = (state_11227[(2)]);
var state_11227__$1 = state_11227;
var statearr_11229_11387 = state_11227__$1;
(statearr_11229_11387[(2)] = inst_11223);

(statearr_11229_11387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11228 === (6))){
var state_11227__$1 = state_11227;
var statearr_11230_11388 = state_11227__$1;
(statearr_11230_11388[(2)] = null);

(statearr_11230_11388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11228 === (5))){
var state_11227__$1 = state_11227;
var statearr_11231_11389 = state_11227__$1;
(statearr_11231_11389[(2)] = null);

(statearr_11231_11389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11228 === (4))){
var inst_11217 = (state_11227[(2)]);
var inst_11218 = async.call(null,inst_11217);
var state_11227__$1 = state_11227;
if(cljs.core.truth_(inst_11218)){
var statearr_11232_11390 = state_11227__$1;
(statearr_11232_11390[(1)] = (5));

} else {
var statearr_11233_11391 = state_11227__$1;
(statearr_11233_11391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11228 === (3))){
var inst_11225 = (state_11227[(2)]);
var state_11227__$1 = state_11227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11227__$1,inst_11225);
} else {
if((state_val_11228 === (2))){
var state_11227__$1 = state_11227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11227__$1,(4),jobs);
} else {
if((state_val_11228 === (1))){
var state_11227__$1 = state_11227;
var statearr_11234_11392 = state_11227__$1;
(statearr_11234_11392[(2)] = null);

(statearr_11234_11392[(1)] = (2));


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
});})(__11383,c__5829__auto___11386,G__11214_11384,n__4510__auto___11382,jobs,results,process,async))
;
return ((function (__11383,switch__5814__auto__,c__5829__auto___11386,G__11214_11384,n__4510__auto___11382,jobs,results,process,async){
return (function() {
var state_machine__5815__auto__ = null;
var state_machine__5815__auto____0 = (function (){
var statearr_11238 = [null,null,null,null,null,null,null];
(statearr_11238[(0)] = state_machine__5815__auto__);

(statearr_11238[(1)] = (1));

return statearr_11238;
});
var state_machine__5815__auto____1 = (function (state_11227){
while(true){
var ret_value__5816__auto__ = (function (){try{while(true){
var result__5817__auto__ = switch__5814__auto__.call(null,state_11227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5817__auto__;
}
break;
}
}catch (e11239){if((e11239 instanceof Object)){
var ex__5818__auto__ = e11239;
var statearr_11240_11393 = state_11227;
(statearr_11240_11393[(5)] = ex__5818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11394 = state_11227;
state_11227 = G__11394;
continue;
} else {
return ret_value__5816__auto__;
}
break;
}
});
state_machine__5815__auto__ = function(state_11227){
switch(arguments.length){
case 0:
return state_machine__5815__auto____0.call(this);
case 1:
return state_machine__5815__auto____1.call(this,state_11227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5815__auto____0;
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5815__auto____1;
return state_machine__5815__auto__;
})()
;})(__11383,switch__5814__auto__,c__5829__auto___11386,G__11214_11384,n__4510__auto___11382,jobs,results,process,async))
})();
var state__5831__auto__ = (function (){var statearr_11241 = f__5830__auto__.call(null);
(statearr_11241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5829__auto___11386);

return statearr_11241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5831__auto__);
});})(__11383,c__5829__auto___11386,G__11214_11384,n__4510__auto___11382,jobs,results,process,async))
);


break;
case "compute":
var c__5829__auto___11395 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11383,c__5829__auto___11395,G__11214_11384,n__4510__auto___11382,jobs,results,process,async){
return (function (){
var f__5830__auto__ = (function (){var switch__5814__auto__ = ((function (__11383,c__5829__auto___11395,G__11214_11384,n__4510__auto___11382,jobs,results,process,async){
return (function (state_11254){
var state_val_11255 = (state_11254[(1)]);
if((state_val_11255 === (7))){
var inst_11250 = (state_11254[(2)]);
var state_11254__$1 = state_11254;
var statearr_11256_11396 = state_11254__$1;
(statearr_11256_11396[(2)] = inst_11250);

(statearr_11256_11396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11255 === (6))){
var state_11254__$1 = state_11254;
var statearr_11257_11397 = state_11254__$1;
(statearr_11257_11397[(2)] = null);

(statearr_11257_11397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11255 === (5))){
var state_11254__$1 = state_11254;
var statearr_11258_11398 = state_11254__$1;
(statearr_11258_11398[(2)] = null);

(statearr_11258_11398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11255 === (4))){
var inst_11244 = (state_11254[(2)]);
var inst_11245 = process.call(null,inst_11244);
var state_11254__$1 = state_11254;
if(cljs.core.truth_(inst_11245)){
var statearr_11259_11399 = state_11254__$1;
(statearr_11259_11399[(1)] = (5));

} else {
var statearr_11260_11400 = state_11254__$1;
(statearr_11260_11400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11255 === (3))){
var inst_11252 = (state_11254[(2)]);
var state_11254__$1 = state_11254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11254__$1,inst_11252);
} else {
if((state_val_11255 === (2))){
var state_11254__$1 = state_11254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11254__$1,(4),jobs);
} else {
if((state_val_11255 === (1))){
var state_11254__$1 = state_11254;
var statearr_11261_11401 = state_11254__$1;
(statearr_11261_11401[(2)] = null);

(statearr_11261_11401[(1)] = (2));


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
});})(__11383,c__5829__auto___11395,G__11214_11384,n__4510__auto___11382,jobs,results,process,async))
;
return ((function (__11383,switch__5814__auto__,c__5829__auto___11395,G__11214_11384,n__4510__auto___11382,jobs,results,process,async){
return (function() {
var state_machine__5815__auto__ = null;
var state_machine__5815__auto____0 = (function (){
var statearr_11265 = [null,null,null,null,null,null,null];
(statearr_11265[(0)] = state_machine__5815__auto__);

(statearr_11265[(1)] = (1));

return statearr_11265;
});
var state_machine__5815__auto____1 = (function (state_11254){
while(true){
var ret_value__5816__auto__ = (function (){try{while(true){
var result__5817__auto__ = switch__5814__auto__.call(null,state_11254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5817__auto__;
}
break;
}
}catch (e11266){if((e11266 instanceof Object)){
var ex__5818__auto__ = e11266;
var statearr_11267_11402 = state_11254;
(statearr_11267_11402[(5)] = ex__5818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11403 = state_11254;
state_11254 = G__11403;
continue;
} else {
return ret_value__5816__auto__;
}
break;
}
});
state_machine__5815__auto__ = function(state_11254){
switch(arguments.length){
case 0:
return state_machine__5815__auto____0.call(this);
case 1:
return state_machine__5815__auto____1.call(this,state_11254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5815__auto____0;
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5815__auto____1;
return state_machine__5815__auto__;
})()
;})(__11383,switch__5814__auto__,c__5829__auto___11395,G__11214_11384,n__4510__auto___11382,jobs,results,process,async))
})();
var state__5831__auto__ = (function (){var statearr_11268 = f__5830__auto__.call(null);
(statearr_11268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5829__auto___11395);

return statearr_11268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5831__auto__);
});})(__11383,c__5829__auto___11395,G__11214_11384,n__4510__auto___11382,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__11404 = (__11383 + (1));
__11383 = G__11404;
continue;
} else {
}
break;
}

var c__5829__auto___11405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5829__auto___11405,jobs,results,process,async){
return (function (){
var f__5830__auto__ = (function (){var switch__5814__auto__ = ((function (c__5829__auto___11405,jobs,results,process,async){
return (function (state_11290){
var state_val_11291 = (state_11290[(1)]);
if((state_val_11291 === (9))){
var inst_11283 = (state_11290[(2)]);
var state_11290__$1 = (function (){var statearr_11292 = state_11290;
(statearr_11292[(7)] = inst_11283);

return statearr_11292;
})();
var statearr_11293_11406 = state_11290__$1;
(statearr_11293_11406[(2)] = null);

(statearr_11293_11406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11291 === (8))){
var inst_11276 = (state_11290[(8)]);
var inst_11281 = (state_11290[(2)]);
var state_11290__$1 = (function (){var statearr_11294 = state_11290;
(statearr_11294[(9)] = inst_11281);

return statearr_11294;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11290__$1,(9),results,inst_11276);
} else {
if((state_val_11291 === (7))){
var inst_11286 = (state_11290[(2)]);
var state_11290__$1 = state_11290;
var statearr_11295_11407 = state_11290__$1;
(statearr_11295_11407[(2)] = inst_11286);

(statearr_11295_11407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11291 === (6))){
var inst_11276 = (state_11290[(8)]);
var inst_11271 = (state_11290[(10)]);
var inst_11276__$1 = cljs.core.async.chan.call(null,(1));
var inst_11277 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11278 = [inst_11271,inst_11276__$1];
var inst_11279 = (new cljs.core.PersistentVector(null,2,(5),inst_11277,inst_11278,null));
var state_11290__$1 = (function (){var statearr_11296 = state_11290;
(statearr_11296[(8)] = inst_11276__$1);

return statearr_11296;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11290__$1,(8),jobs,inst_11279);
} else {
if((state_val_11291 === (5))){
var inst_11274 = cljs.core.async.close_BANG_.call(null,jobs);
var state_11290__$1 = state_11290;
var statearr_11297_11408 = state_11290__$1;
(statearr_11297_11408[(2)] = inst_11274);

(statearr_11297_11408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11291 === (4))){
var inst_11271 = (state_11290[(10)]);
var inst_11271__$1 = (state_11290[(2)]);
var inst_11272 = (inst_11271__$1 == null);
var state_11290__$1 = (function (){var statearr_11298 = state_11290;
(statearr_11298[(10)] = inst_11271__$1);

return statearr_11298;
})();
if(cljs.core.truth_(inst_11272)){
var statearr_11299_11409 = state_11290__$1;
(statearr_11299_11409[(1)] = (5));

} else {
var statearr_11300_11410 = state_11290__$1;
(statearr_11300_11410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11291 === (3))){
var inst_11288 = (state_11290[(2)]);
var state_11290__$1 = state_11290;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11290__$1,inst_11288);
} else {
if((state_val_11291 === (2))){
var state_11290__$1 = state_11290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11290__$1,(4),from);
} else {
if((state_val_11291 === (1))){
var state_11290__$1 = state_11290;
var statearr_11301_11411 = state_11290__$1;
(statearr_11301_11411[(2)] = null);

(statearr_11301_11411[(1)] = (2));


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
}
}
});})(c__5829__auto___11405,jobs,results,process,async))
;
return ((function (switch__5814__auto__,c__5829__auto___11405,jobs,results,process,async){
return (function() {
var state_machine__5815__auto__ = null;
var state_machine__5815__auto____0 = (function (){
var statearr_11305 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11305[(0)] = state_machine__5815__auto__);

(statearr_11305[(1)] = (1));

return statearr_11305;
});
var state_machine__5815__auto____1 = (function (state_11290){
while(true){
var ret_value__5816__auto__ = (function (){try{while(true){
var result__5817__auto__ = switch__5814__auto__.call(null,state_11290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5817__auto__;
}
break;
}
}catch (e11306){if((e11306 instanceof Object)){
var ex__5818__auto__ = e11306;
var statearr_11307_11412 = state_11290;
(statearr_11307_11412[(5)] = ex__5818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11413 = state_11290;
state_11290 = G__11413;
continue;
} else {
return ret_value__5816__auto__;
}
break;
}
});
state_machine__5815__auto__ = function(state_11290){
switch(arguments.length){
case 0:
return state_machine__5815__auto____0.call(this);
case 1:
return state_machine__5815__auto____1.call(this,state_11290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5815__auto____0;
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5815__auto____1;
return state_machine__5815__auto__;
})()
;})(switch__5814__auto__,c__5829__auto___11405,jobs,results,process,async))
})();
var state__5831__auto__ = (function (){var statearr_11308 = f__5830__auto__.call(null);
(statearr_11308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5829__auto___11405);

return statearr_11308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5831__auto__);
});})(c__5829__auto___11405,jobs,results,process,async))
);


var c__5829__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5829__auto__,jobs,results,process,async){
return (function (){
var f__5830__auto__ = (function (){var switch__5814__auto__ = ((function (c__5829__auto__,jobs,results,process,async){
return (function (state_11346){
var state_val_11347 = (state_11346[(1)]);
if((state_val_11347 === (7))){
var inst_11342 = (state_11346[(2)]);
var state_11346__$1 = state_11346;
var statearr_11348_11414 = state_11346__$1;
(statearr_11348_11414[(2)] = inst_11342);

(statearr_11348_11414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11347 === (20))){
var state_11346__$1 = state_11346;
var statearr_11349_11415 = state_11346__$1;
(statearr_11349_11415[(2)] = null);

(statearr_11349_11415[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11347 === (1))){
var state_11346__$1 = state_11346;
var statearr_11350_11416 = state_11346__$1;
(statearr_11350_11416[(2)] = null);

(statearr_11350_11416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11347 === (4))){
var inst_11311 = (state_11346[(7)]);
var inst_11311__$1 = (state_11346[(2)]);
var inst_11312 = (inst_11311__$1 == null);
var state_11346__$1 = (function (){var statearr_11351 = state_11346;
(statearr_11351[(7)] = inst_11311__$1);

return statearr_11351;
})();
if(cljs.core.truth_(inst_11312)){
var statearr_11352_11417 = state_11346__$1;
(statearr_11352_11417[(1)] = (5));

} else {
var statearr_11353_11418 = state_11346__$1;
(statearr_11353_11418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11347 === (15))){
var inst_11324 = (state_11346[(8)]);
var state_11346__$1 = state_11346;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11346__$1,(18),to,inst_11324);
} else {
if((state_val_11347 === (21))){
var inst_11337 = (state_11346[(2)]);
var state_11346__$1 = state_11346;
var statearr_11354_11419 = state_11346__$1;
(statearr_11354_11419[(2)] = inst_11337);

(statearr_11354_11419[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11347 === (13))){
var inst_11339 = (state_11346[(2)]);
var state_11346__$1 = (function (){var statearr_11355 = state_11346;
(statearr_11355[(9)] = inst_11339);

return statearr_11355;
})();
var statearr_11356_11420 = state_11346__$1;
(statearr_11356_11420[(2)] = null);

(statearr_11356_11420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11347 === (6))){
var inst_11311 = (state_11346[(7)]);
var state_11346__$1 = state_11346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11346__$1,(11),inst_11311);
} else {
if((state_val_11347 === (17))){
var inst_11332 = (state_11346[(2)]);
var state_11346__$1 = state_11346;
if(cljs.core.truth_(inst_11332)){
var statearr_11357_11421 = state_11346__$1;
(statearr_11357_11421[(1)] = (19));

} else {
var statearr_11358_11422 = state_11346__$1;
(statearr_11358_11422[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11347 === (3))){
var inst_11344 = (state_11346[(2)]);
var state_11346__$1 = state_11346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11346__$1,inst_11344);
} else {
if((state_val_11347 === (12))){
var inst_11321 = (state_11346[(10)]);
var state_11346__$1 = state_11346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11346__$1,(14),inst_11321);
} else {
if((state_val_11347 === (2))){
var state_11346__$1 = state_11346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11346__$1,(4),results);
} else {
if((state_val_11347 === (19))){
var state_11346__$1 = state_11346;
var statearr_11359_11423 = state_11346__$1;
(statearr_11359_11423[(2)] = null);

(statearr_11359_11423[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11347 === (11))){
var inst_11321 = (state_11346[(2)]);
var state_11346__$1 = (function (){var statearr_11360 = state_11346;
(statearr_11360[(10)] = inst_11321);

return statearr_11360;
})();
var statearr_11361_11424 = state_11346__$1;
(statearr_11361_11424[(2)] = null);

(statearr_11361_11424[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11347 === (9))){
var state_11346__$1 = state_11346;
var statearr_11362_11425 = state_11346__$1;
(statearr_11362_11425[(2)] = null);

(statearr_11362_11425[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11347 === (5))){
var state_11346__$1 = state_11346;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11363_11426 = state_11346__$1;
(statearr_11363_11426[(1)] = (8));

} else {
var statearr_11364_11427 = state_11346__$1;
(statearr_11364_11427[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11347 === (14))){
var inst_11326 = (state_11346[(11)]);
var inst_11324 = (state_11346[(8)]);
var inst_11324__$1 = (state_11346[(2)]);
var inst_11325 = (inst_11324__$1 == null);
var inst_11326__$1 = cljs.core.not.call(null,inst_11325);
var state_11346__$1 = (function (){var statearr_11365 = state_11346;
(statearr_11365[(11)] = inst_11326__$1);

(statearr_11365[(8)] = inst_11324__$1);

return statearr_11365;
})();
if(inst_11326__$1){
var statearr_11366_11428 = state_11346__$1;
(statearr_11366_11428[(1)] = (15));

} else {
var statearr_11367_11429 = state_11346__$1;
(statearr_11367_11429[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11347 === (16))){
var inst_11326 = (state_11346[(11)]);
var state_11346__$1 = state_11346;
var statearr_11368_11430 = state_11346__$1;
(statearr_11368_11430[(2)] = inst_11326);

(statearr_11368_11430[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11347 === (10))){
var inst_11318 = (state_11346[(2)]);
var state_11346__$1 = state_11346;
var statearr_11369_11431 = state_11346__$1;
(statearr_11369_11431[(2)] = inst_11318);

(statearr_11369_11431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11347 === (18))){
var inst_11329 = (state_11346[(2)]);
var state_11346__$1 = state_11346;
var statearr_11370_11432 = state_11346__$1;
(statearr_11370_11432[(2)] = inst_11329);

(statearr_11370_11432[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11347 === (8))){
var inst_11315 = cljs.core.async.close_BANG_.call(null,to);
var state_11346__$1 = state_11346;
var statearr_11371_11433 = state_11346__$1;
(statearr_11371_11433[(2)] = inst_11315);

(statearr_11371_11433[(1)] = (10));


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
});})(c__5829__auto__,jobs,results,process,async))
;
return ((function (switch__5814__auto__,c__5829__auto__,jobs,results,process,async){
return (function() {
var state_machine__5815__auto__ = null;
var state_machine__5815__auto____0 = (function (){
var statearr_11375 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11375[(0)] = state_machine__5815__auto__);

(statearr_11375[(1)] = (1));

return statearr_11375;
});
var state_machine__5815__auto____1 = (function (state_11346){
while(true){
var ret_value__5816__auto__ = (function (){try{while(true){
var result__5817__auto__ = switch__5814__auto__.call(null,state_11346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5817__auto__;
}
break;
}
}catch (e11376){if((e11376 instanceof Object)){
var ex__5818__auto__ = e11376;
var statearr_11377_11434 = state_11346;
(statearr_11377_11434[(5)] = ex__5818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11435 = state_11346;
state_11346 = G__11435;
continue;
} else {
return ret_value__5816__auto__;
}
break;
}
});
state_machine__5815__auto__ = function(state_11346){
switch(arguments.length){
case 0:
return state_machine__5815__auto____0.call(this);
case 1:
return state_machine__5815__auto____1.call(this,state_11346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5815__auto____0;
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5815__auto____1;
return state_machine__5815__auto__;
})()
;})(switch__5814__auto__,c__5829__auto__,jobs,results,process,async))
})();
var state__5831__auto__ = (function (){var statearr_11378 = f__5830__auto__.call(null);
(statearr_11378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5829__auto__);

return statearr_11378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5831__auto__);
});})(c__5829__auto__,jobs,results,process,async))
);

return c__5829__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
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
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__5829__auto___11536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5829__auto___11536,tc,fc){
return (function (){
var f__5830__auto__ = (function (){var switch__5814__auto__ = ((function (c__5829__auto___11536,tc,fc){
return (function (state_11511){
var state_val_11512 = (state_11511[(1)]);
if((state_val_11512 === (7))){
var inst_11507 = (state_11511[(2)]);
var state_11511__$1 = state_11511;
var statearr_11513_11537 = state_11511__$1;
(statearr_11513_11537[(2)] = inst_11507);

(statearr_11513_11537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11512 === (1))){
var state_11511__$1 = state_11511;
var statearr_11514_11538 = state_11511__$1;
(statearr_11514_11538[(2)] = null);

(statearr_11514_11538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11512 === (4))){
var inst_11488 = (state_11511[(7)]);
var inst_11488__$1 = (state_11511[(2)]);
var inst_11489 = (inst_11488__$1 == null);
var state_11511__$1 = (function (){var statearr_11515 = state_11511;
(statearr_11515[(7)] = inst_11488__$1);

return statearr_11515;
})();
if(cljs.core.truth_(inst_11489)){
var statearr_11516_11539 = state_11511__$1;
(statearr_11516_11539[(1)] = (5));

} else {
var statearr_11517_11540 = state_11511__$1;
(statearr_11517_11540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11512 === (13))){
var state_11511__$1 = state_11511;
var statearr_11518_11541 = state_11511__$1;
(statearr_11518_11541[(2)] = null);

(statearr_11518_11541[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11512 === (6))){
var inst_11488 = (state_11511[(7)]);
var inst_11494 = p.call(null,inst_11488);
var state_11511__$1 = state_11511;
if(cljs.core.truth_(inst_11494)){
var statearr_11519_11542 = state_11511__$1;
(statearr_11519_11542[(1)] = (9));

} else {
var statearr_11520_11543 = state_11511__$1;
(statearr_11520_11543[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11512 === (3))){
var inst_11509 = (state_11511[(2)]);
var state_11511__$1 = state_11511;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11511__$1,inst_11509);
} else {
if((state_val_11512 === (12))){
var state_11511__$1 = state_11511;
var statearr_11521_11544 = state_11511__$1;
(statearr_11521_11544[(2)] = null);

(statearr_11521_11544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11512 === (2))){
var state_11511__$1 = state_11511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11511__$1,(4),ch);
} else {
if((state_val_11512 === (11))){
var inst_11488 = (state_11511[(7)]);
var inst_11498 = (state_11511[(2)]);
var state_11511__$1 = state_11511;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11511__$1,(8),inst_11498,inst_11488);
} else {
if((state_val_11512 === (9))){
var state_11511__$1 = state_11511;
var statearr_11522_11545 = state_11511__$1;
(statearr_11522_11545[(2)] = tc);

(statearr_11522_11545[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11512 === (5))){
var inst_11491 = cljs.core.async.close_BANG_.call(null,tc);
var inst_11492 = cljs.core.async.close_BANG_.call(null,fc);
var state_11511__$1 = (function (){var statearr_11523 = state_11511;
(statearr_11523[(8)] = inst_11491);

return statearr_11523;
})();
var statearr_11524_11546 = state_11511__$1;
(statearr_11524_11546[(2)] = inst_11492);

(statearr_11524_11546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11512 === (14))){
var inst_11505 = (state_11511[(2)]);
var state_11511__$1 = state_11511;
var statearr_11525_11547 = state_11511__$1;
(statearr_11525_11547[(2)] = inst_11505);

(statearr_11525_11547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11512 === (10))){
var state_11511__$1 = state_11511;
var statearr_11526_11548 = state_11511__$1;
(statearr_11526_11548[(2)] = fc);

(statearr_11526_11548[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11512 === (8))){
var inst_11500 = (state_11511[(2)]);
var state_11511__$1 = state_11511;
if(cljs.core.truth_(inst_11500)){
var statearr_11527_11549 = state_11511__$1;
(statearr_11527_11549[(1)] = (12));

} else {
var statearr_11528_11550 = state_11511__$1;
(statearr_11528_11550[(1)] = (13));

}

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
}
}
}
}
}
}
}
});})(c__5829__auto___11536,tc,fc))
;
return ((function (switch__5814__auto__,c__5829__auto___11536,tc,fc){
return (function() {
var state_machine__5815__auto__ = null;
var state_machine__5815__auto____0 = (function (){
var statearr_11532 = [null,null,null,null,null,null,null,null,null];
(statearr_11532[(0)] = state_machine__5815__auto__);

(statearr_11532[(1)] = (1));

return statearr_11532;
});
var state_machine__5815__auto____1 = (function (state_11511){
while(true){
var ret_value__5816__auto__ = (function (){try{while(true){
var result__5817__auto__ = switch__5814__auto__.call(null,state_11511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5817__auto__;
}
break;
}
}catch (e11533){if((e11533 instanceof Object)){
var ex__5818__auto__ = e11533;
var statearr_11534_11551 = state_11511;
(statearr_11534_11551[(5)] = ex__5818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11552 = state_11511;
state_11511 = G__11552;
continue;
} else {
return ret_value__5816__auto__;
}
break;
}
});
state_machine__5815__auto__ = function(state_11511){
switch(arguments.length){
case 0:
return state_machine__5815__auto____0.call(this);
case 1:
return state_machine__5815__auto____1.call(this,state_11511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5815__auto____0;
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5815__auto____1;
return state_machine__5815__auto__;
})()
;})(switch__5814__auto__,c__5829__auto___11536,tc,fc))
})();
var state__5831__auto__ = (function (){var statearr_11535 = f__5830__auto__.call(null);
(statearr_11535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5829__auto___11536);

return statearr_11535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5831__auto__);
});})(c__5829__auto___11536,tc,fc))
);


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
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__5829__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5829__auto__){
return (function (){
var f__5830__auto__ = (function (){var switch__5814__auto__ = ((function (c__5829__auto__){
return (function (state_11599){
var state_val_11600 = (state_11599[(1)]);
if((state_val_11600 === (7))){
var inst_11595 = (state_11599[(2)]);
var state_11599__$1 = state_11599;
var statearr_11601_11617 = state_11599__$1;
(statearr_11601_11617[(2)] = inst_11595);

(statearr_11601_11617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (6))){
var inst_11585 = (state_11599[(7)]);
var inst_11588 = (state_11599[(8)]);
var inst_11592 = f.call(null,inst_11585,inst_11588);
var inst_11585__$1 = inst_11592;
var state_11599__$1 = (function (){var statearr_11602 = state_11599;
(statearr_11602[(7)] = inst_11585__$1);

return statearr_11602;
})();
var statearr_11603_11618 = state_11599__$1;
(statearr_11603_11618[(2)] = null);

(statearr_11603_11618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (5))){
var inst_11585 = (state_11599[(7)]);
var state_11599__$1 = state_11599;
var statearr_11604_11619 = state_11599__$1;
(statearr_11604_11619[(2)] = inst_11585);

(statearr_11604_11619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (4))){
var inst_11588 = (state_11599[(8)]);
var inst_11588__$1 = (state_11599[(2)]);
var inst_11589 = (inst_11588__$1 == null);
var state_11599__$1 = (function (){var statearr_11605 = state_11599;
(statearr_11605[(8)] = inst_11588__$1);

return statearr_11605;
})();
if(cljs.core.truth_(inst_11589)){
var statearr_11606_11620 = state_11599__$1;
(statearr_11606_11620[(1)] = (5));

} else {
var statearr_11607_11621 = state_11599__$1;
(statearr_11607_11621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (3))){
var inst_11597 = (state_11599[(2)]);
var state_11599__$1 = state_11599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11599__$1,inst_11597);
} else {
if((state_val_11600 === (2))){
var state_11599__$1 = state_11599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11599__$1,(4),ch);
} else {
if((state_val_11600 === (1))){
var inst_11585 = init;
var state_11599__$1 = (function (){var statearr_11608 = state_11599;
(statearr_11608[(7)] = inst_11585);

return statearr_11608;
})();
var statearr_11609_11622 = state_11599__$1;
(statearr_11609_11622[(2)] = null);

(statearr_11609_11622[(1)] = (2));


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
});})(c__5829__auto__))
;
return ((function (switch__5814__auto__,c__5829__auto__){
return (function() {
var state_machine__5815__auto__ = null;
var state_machine__5815__auto____0 = (function (){
var statearr_11613 = [null,null,null,null,null,null,null,null,null];
(statearr_11613[(0)] = state_machine__5815__auto__);

(statearr_11613[(1)] = (1));

return statearr_11613;
});
var state_machine__5815__auto____1 = (function (state_11599){
while(true){
var ret_value__5816__auto__ = (function (){try{while(true){
var result__5817__auto__ = switch__5814__auto__.call(null,state_11599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5817__auto__;
}
break;
}
}catch (e11614){if((e11614 instanceof Object)){
var ex__5818__auto__ = e11614;
var statearr_11615_11623 = state_11599;
(statearr_11615_11623[(5)] = ex__5818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11624 = state_11599;
state_11599 = G__11624;
continue;
} else {
return ret_value__5816__auto__;
}
break;
}
});
state_machine__5815__auto__ = function(state_11599){
switch(arguments.length){
case 0:
return state_machine__5815__auto____0.call(this);
case 1:
return state_machine__5815__auto____1.call(this,state_11599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5815__auto____0;
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5815__auto____1;
return state_machine__5815__auto__;
})()
;})(switch__5814__auto__,c__5829__auto__))
})();
var state__5831__auto__ = (function (){var statearr_11616 = f__5830__auto__.call(null);
(statearr_11616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5829__auto__);

return statearr_11616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5831__auto__);
});})(c__5829__auto__))
);

return c__5829__auto__;
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
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__5829__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5829__auto__){
return (function (){
var f__5830__auto__ = (function (){var switch__5814__auto__ = ((function (c__5829__auto__){
return (function (state_11698){
var state_val_11699 = (state_11698[(1)]);
if((state_val_11699 === (7))){
var inst_11680 = (state_11698[(2)]);
var state_11698__$1 = state_11698;
var statearr_11700_11723 = state_11698__$1;
(statearr_11700_11723[(2)] = inst_11680);

(statearr_11700_11723[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11699 === (1))){
var inst_11674 = cljs.core.seq.call(null,coll);
var inst_11675 = inst_11674;
var state_11698__$1 = (function (){var statearr_11701 = state_11698;
(statearr_11701[(7)] = inst_11675);

return statearr_11701;
})();
var statearr_11702_11724 = state_11698__$1;
(statearr_11702_11724[(2)] = null);

(statearr_11702_11724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11699 === (4))){
var inst_11675 = (state_11698[(7)]);
var inst_11678 = cljs.core.first.call(null,inst_11675);
var state_11698__$1 = state_11698;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11698__$1,(7),ch,inst_11678);
} else {
if((state_val_11699 === (13))){
var inst_11692 = (state_11698[(2)]);
var state_11698__$1 = state_11698;
var statearr_11703_11725 = state_11698__$1;
(statearr_11703_11725[(2)] = inst_11692);

(statearr_11703_11725[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11699 === (6))){
var inst_11683 = (state_11698[(2)]);
var state_11698__$1 = state_11698;
if(cljs.core.truth_(inst_11683)){
var statearr_11704_11726 = state_11698__$1;
(statearr_11704_11726[(1)] = (8));

} else {
var statearr_11705_11727 = state_11698__$1;
(statearr_11705_11727[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11699 === (3))){
var inst_11696 = (state_11698[(2)]);
var state_11698__$1 = state_11698;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11698__$1,inst_11696);
} else {
if((state_val_11699 === (12))){
var state_11698__$1 = state_11698;
var statearr_11706_11728 = state_11698__$1;
(statearr_11706_11728[(2)] = null);

(statearr_11706_11728[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11699 === (2))){
var inst_11675 = (state_11698[(7)]);
var state_11698__$1 = state_11698;
if(cljs.core.truth_(inst_11675)){
var statearr_11707_11729 = state_11698__$1;
(statearr_11707_11729[(1)] = (4));

} else {
var statearr_11708_11730 = state_11698__$1;
(statearr_11708_11730[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11699 === (11))){
var inst_11689 = cljs.core.async.close_BANG_.call(null,ch);
var state_11698__$1 = state_11698;
var statearr_11709_11731 = state_11698__$1;
(statearr_11709_11731[(2)] = inst_11689);

(statearr_11709_11731[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11699 === (9))){
var state_11698__$1 = state_11698;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11710_11732 = state_11698__$1;
(statearr_11710_11732[(1)] = (11));

} else {
var statearr_11711_11733 = state_11698__$1;
(statearr_11711_11733[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11699 === (5))){
var inst_11675 = (state_11698[(7)]);
var state_11698__$1 = state_11698;
var statearr_11712_11734 = state_11698__$1;
(statearr_11712_11734[(2)] = inst_11675);

(statearr_11712_11734[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11699 === (10))){
var inst_11694 = (state_11698[(2)]);
var state_11698__$1 = state_11698;
var statearr_11713_11735 = state_11698__$1;
(statearr_11713_11735[(2)] = inst_11694);

(statearr_11713_11735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11699 === (8))){
var inst_11675 = (state_11698[(7)]);
var inst_11685 = cljs.core.next.call(null,inst_11675);
var inst_11675__$1 = inst_11685;
var state_11698__$1 = (function (){var statearr_11714 = state_11698;
(statearr_11714[(7)] = inst_11675__$1);

return statearr_11714;
})();
var statearr_11715_11736 = state_11698__$1;
(statearr_11715_11736[(2)] = null);

(statearr_11715_11736[(1)] = (2));


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
}
}
}
}
}
}
});})(c__5829__auto__))
;
return ((function (switch__5814__auto__,c__5829__auto__){
return (function() {
var state_machine__5815__auto__ = null;
var state_machine__5815__auto____0 = (function (){
var statearr_11719 = [null,null,null,null,null,null,null,null];
(statearr_11719[(0)] = state_machine__5815__auto__);

(statearr_11719[(1)] = (1));

return statearr_11719;
});
var state_machine__5815__auto____1 = (function (state_11698){
while(true){
var ret_value__5816__auto__ = (function (){try{while(true){
var result__5817__auto__ = switch__5814__auto__.call(null,state_11698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5817__auto__;
}
break;
}
}catch (e11720){if((e11720 instanceof Object)){
var ex__5818__auto__ = e11720;
var statearr_11721_11737 = state_11698;
(statearr_11721_11737[(5)] = ex__5818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11738 = state_11698;
state_11698 = G__11738;
continue;
} else {
return ret_value__5816__auto__;
}
break;
}
});
state_machine__5815__auto__ = function(state_11698){
switch(arguments.length){
case 0:
return state_machine__5815__auto____0.call(this);
case 1:
return state_machine__5815__auto____1.call(this,state_11698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5815__auto____0;
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5815__auto____1;
return state_machine__5815__auto__;
})()
;})(switch__5814__auto__,c__5829__auto__))
})();
var state__5831__auto__ = (function (){var statearr_11722 = f__5830__auto__.call(null);
(statearr_11722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5829__auto__);

return statearr_11722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5831__auto__);
});})(c__5829__auto__))
);

return c__5829__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj11740 = {};
return obj11740;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3616__auto__ = _;
if(and__3616__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3616__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4267__auto__ = (((_ == null))?null:_);
return (function (){var or__3628__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4267__auto__)]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj11742 = {};
return obj11742;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3616__auto__ = m;
if(and__3616__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3616__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4267__auto__ = (((m == null))?null:m);
return (function (){var or__3628__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4267__auto__)]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3616__auto__ = m;
if(and__3616__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3616__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4267__auto__ = (((m == null))?null:m);
return (function (){var or__3628__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4267__auto__)]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3616__auto__ = m;
if(and__3616__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3616__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4267__auto__ = (((m == null))?null:m);
return (function (){var or__3628__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4267__auto__)]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t11964 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11964 = (function (cs,ch,mult,meta11965){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11965 = meta11965;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11964.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t11964.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t11964.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t11964.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t11964.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t11964.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t11964.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11966){
var self__ = this;
var _11966__$1 = this;
return self__.meta11965;
});})(cs))
;

cljs.core.async.t11964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11966,meta11965__$1){
var self__ = this;
var _11966__$1 = this;
return (new cljs.core.async.t11964(self__.cs,self__.ch,self__.mult,meta11965__$1));
});})(cs))
;

cljs.core.async.t11964.cljs$lang$type = true;

cljs.core.async.t11964.cljs$lang$ctorStr = "cljs.core.async/t11964";

cljs.core.async.t11964.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4210__auto__,writer__4211__auto__,opt__4212__auto__){
return cljs.core._write.call(null,writer__4211__auto__,"cljs.core.async/t11964");
});})(cs))
;

cljs.core.async.__GT_t11964 = ((function (cs){
return (function __GT_t11964(cs__$1,ch__$1,mult__$1,meta11965){
return (new cljs.core.async.t11964(cs__$1,ch__$1,mult__$1,meta11965));
});})(cs))
;

}

return (new cljs.core.async.t11964(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/henrik/Documents/Projects/Programming/reactive/resources/public/js/output/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__5829__auto___12185 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5829__auto___12185,cs,m,dchan,dctr,done){
return (function (){
var f__5830__auto__ = (function (){var switch__5814__auto__ = ((function (c__5829__auto___12185,cs,m,dchan,dctr,done){
return (function (state_12097){
var state_val_12098 = (state_12097[(1)]);
if((state_val_12098 === (7))){
var inst_12093 = (state_12097[(2)]);
var state_12097__$1 = state_12097;
var statearr_12099_12186 = state_12097__$1;
(statearr_12099_12186[(2)] = inst_12093);

(statearr_12099_12186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (20))){
var inst_11998 = (state_12097[(7)]);
var inst_12008 = cljs.core.first.call(null,inst_11998);
var inst_12009 = cljs.core.nth.call(null,inst_12008,(0),null);
var inst_12010 = cljs.core.nth.call(null,inst_12008,(1),null);
var state_12097__$1 = (function (){var statearr_12100 = state_12097;
(statearr_12100[(8)] = inst_12009);

return statearr_12100;
})();
if(cljs.core.truth_(inst_12010)){
var statearr_12101_12187 = state_12097__$1;
(statearr_12101_12187[(1)] = (22));

} else {
var statearr_12102_12188 = state_12097__$1;
(statearr_12102_12188[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (27))){
var inst_11969 = (state_12097[(9)]);
var inst_12038 = (state_12097[(10)]);
var inst_12045 = (state_12097[(11)]);
var inst_12040 = (state_12097[(12)]);
var inst_12045__$1 = cljs.core._nth.call(null,inst_12038,inst_12040);
var inst_12046 = cljs.core.async.put_BANG_.call(null,inst_12045__$1,inst_11969,done);
var state_12097__$1 = (function (){var statearr_12103 = state_12097;
(statearr_12103[(11)] = inst_12045__$1);

return statearr_12103;
})();
if(cljs.core.truth_(inst_12046)){
var statearr_12104_12189 = state_12097__$1;
(statearr_12104_12189[(1)] = (30));

} else {
var statearr_12105_12190 = state_12097__$1;
(statearr_12105_12190[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (1))){
var state_12097__$1 = state_12097;
var statearr_12106_12191 = state_12097__$1;
(statearr_12106_12191[(2)] = null);

(statearr_12106_12191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (24))){
var inst_11998 = (state_12097[(7)]);
var inst_12015 = (state_12097[(2)]);
var inst_12016 = cljs.core.next.call(null,inst_11998);
var inst_11978 = inst_12016;
var inst_11979 = null;
var inst_11980 = (0);
var inst_11981 = (0);
var state_12097__$1 = (function (){var statearr_12107 = state_12097;
(statearr_12107[(13)] = inst_11979);

(statearr_12107[(14)] = inst_11978);

(statearr_12107[(15)] = inst_11981);

(statearr_12107[(16)] = inst_11980);

(statearr_12107[(17)] = inst_12015);

return statearr_12107;
})();
var statearr_12108_12192 = state_12097__$1;
(statearr_12108_12192[(2)] = null);

(statearr_12108_12192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (39))){
var state_12097__$1 = state_12097;
var statearr_12112_12193 = state_12097__$1;
(statearr_12112_12193[(2)] = null);

(statearr_12112_12193[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (4))){
var inst_11969 = (state_12097[(9)]);
var inst_11969__$1 = (state_12097[(2)]);
var inst_11970 = (inst_11969__$1 == null);
var state_12097__$1 = (function (){var statearr_12113 = state_12097;
(statearr_12113[(9)] = inst_11969__$1);

return statearr_12113;
})();
if(cljs.core.truth_(inst_11970)){
var statearr_12114_12194 = state_12097__$1;
(statearr_12114_12194[(1)] = (5));

} else {
var statearr_12115_12195 = state_12097__$1;
(statearr_12115_12195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (15))){
var inst_11979 = (state_12097[(13)]);
var inst_11978 = (state_12097[(14)]);
var inst_11981 = (state_12097[(15)]);
var inst_11980 = (state_12097[(16)]);
var inst_11994 = (state_12097[(2)]);
var inst_11995 = (inst_11981 + (1));
var tmp12109 = inst_11979;
var tmp12110 = inst_11978;
var tmp12111 = inst_11980;
var inst_11978__$1 = tmp12110;
var inst_11979__$1 = tmp12109;
var inst_11980__$1 = tmp12111;
var inst_11981__$1 = inst_11995;
var state_12097__$1 = (function (){var statearr_12116 = state_12097;
(statearr_12116[(13)] = inst_11979__$1);

(statearr_12116[(14)] = inst_11978__$1);

(statearr_12116[(15)] = inst_11981__$1);

(statearr_12116[(16)] = inst_11980__$1);

(statearr_12116[(18)] = inst_11994);

return statearr_12116;
})();
var statearr_12117_12196 = state_12097__$1;
(statearr_12117_12196[(2)] = null);

(statearr_12117_12196[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (21))){
var inst_12019 = (state_12097[(2)]);
var state_12097__$1 = state_12097;
var statearr_12121_12197 = state_12097__$1;
(statearr_12121_12197[(2)] = inst_12019);

(statearr_12121_12197[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (31))){
var inst_12045 = (state_12097[(11)]);
var inst_12049 = done.call(null,null);
var inst_12050 = cljs.core.async.untap_STAR_.call(null,m,inst_12045);
var state_12097__$1 = (function (){var statearr_12122 = state_12097;
(statearr_12122[(19)] = inst_12049);

return statearr_12122;
})();
var statearr_12123_12198 = state_12097__$1;
(statearr_12123_12198[(2)] = inst_12050);

(statearr_12123_12198[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (32))){
var inst_12038 = (state_12097[(10)]);
var inst_12039 = (state_12097[(20)]);
var inst_12037 = (state_12097[(21)]);
var inst_12040 = (state_12097[(12)]);
var inst_12052 = (state_12097[(2)]);
var inst_12053 = (inst_12040 + (1));
var tmp12118 = inst_12038;
var tmp12119 = inst_12039;
var tmp12120 = inst_12037;
var inst_12037__$1 = tmp12120;
var inst_12038__$1 = tmp12118;
var inst_12039__$1 = tmp12119;
var inst_12040__$1 = inst_12053;
var state_12097__$1 = (function (){var statearr_12124 = state_12097;
(statearr_12124[(10)] = inst_12038__$1);

(statearr_12124[(22)] = inst_12052);

(statearr_12124[(20)] = inst_12039__$1);

(statearr_12124[(21)] = inst_12037__$1);

(statearr_12124[(12)] = inst_12040__$1);

return statearr_12124;
})();
var statearr_12125_12199 = state_12097__$1;
(statearr_12125_12199[(2)] = null);

(statearr_12125_12199[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (40))){
var inst_12065 = (state_12097[(23)]);
var inst_12069 = done.call(null,null);
var inst_12070 = cljs.core.async.untap_STAR_.call(null,m,inst_12065);
var state_12097__$1 = (function (){var statearr_12126 = state_12097;
(statearr_12126[(24)] = inst_12069);

return statearr_12126;
})();
var statearr_12127_12200 = state_12097__$1;
(statearr_12127_12200[(2)] = inst_12070);

(statearr_12127_12200[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (33))){
var inst_12056 = (state_12097[(25)]);
var inst_12058 = cljs.core.chunked_seq_QMARK_.call(null,inst_12056);
var state_12097__$1 = state_12097;
if(inst_12058){
var statearr_12128_12201 = state_12097__$1;
(statearr_12128_12201[(1)] = (36));

} else {
var statearr_12129_12202 = state_12097__$1;
(statearr_12129_12202[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (13))){
var inst_11988 = (state_12097[(26)]);
var inst_11991 = cljs.core.async.close_BANG_.call(null,inst_11988);
var state_12097__$1 = state_12097;
var statearr_12130_12203 = state_12097__$1;
(statearr_12130_12203[(2)] = inst_11991);

(statearr_12130_12203[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (22))){
var inst_12009 = (state_12097[(8)]);
var inst_12012 = cljs.core.async.close_BANG_.call(null,inst_12009);
var state_12097__$1 = state_12097;
var statearr_12131_12204 = state_12097__$1;
(statearr_12131_12204[(2)] = inst_12012);

(statearr_12131_12204[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (36))){
var inst_12056 = (state_12097[(25)]);
var inst_12060 = cljs.core.chunk_first.call(null,inst_12056);
var inst_12061 = cljs.core.chunk_rest.call(null,inst_12056);
var inst_12062 = cljs.core.count.call(null,inst_12060);
var inst_12037 = inst_12061;
var inst_12038 = inst_12060;
var inst_12039 = inst_12062;
var inst_12040 = (0);
var state_12097__$1 = (function (){var statearr_12132 = state_12097;
(statearr_12132[(10)] = inst_12038);

(statearr_12132[(20)] = inst_12039);

(statearr_12132[(21)] = inst_12037);

(statearr_12132[(12)] = inst_12040);

return statearr_12132;
})();
var statearr_12133_12205 = state_12097__$1;
(statearr_12133_12205[(2)] = null);

(statearr_12133_12205[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (41))){
var inst_12056 = (state_12097[(25)]);
var inst_12072 = (state_12097[(2)]);
var inst_12073 = cljs.core.next.call(null,inst_12056);
var inst_12037 = inst_12073;
var inst_12038 = null;
var inst_12039 = (0);
var inst_12040 = (0);
var state_12097__$1 = (function (){var statearr_12134 = state_12097;
(statearr_12134[(10)] = inst_12038);

(statearr_12134[(20)] = inst_12039);

(statearr_12134[(27)] = inst_12072);

(statearr_12134[(21)] = inst_12037);

(statearr_12134[(12)] = inst_12040);

return statearr_12134;
})();
var statearr_12135_12206 = state_12097__$1;
(statearr_12135_12206[(2)] = null);

(statearr_12135_12206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (43))){
var state_12097__$1 = state_12097;
var statearr_12136_12207 = state_12097__$1;
(statearr_12136_12207[(2)] = null);

(statearr_12136_12207[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (29))){
var inst_12081 = (state_12097[(2)]);
var state_12097__$1 = state_12097;
var statearr_12137_12208 = state_12097__$1;
(statearr_12137_12208[(2)] = inst_12081);

(statearr_12137_12208[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (44))){
var inst_12090 = (state_12097[(2)]);
var state_12097__$1 = (function (){var statearr_12138 = state_12097;
(statearr_12138[(28)] = inst_12090);

return statearr_12138;
})();
var statearr_12139_12209 = state_12097__$1;
(statearr_12139_12209[(2)] = null);

(statearr_12139_12209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (6))){
var inst_12029 = (state_12097[(29)]);
var inst_12028 = cljs.core.deref.call(null,cs);
var inst_12029__$1 = cljs.core.keys.call(null,inst_12028);
var inst_12030 = cljs.core.count.call(null,inst_12029__$1);
var inst_12031 = cljs.core.reset_BANG_.call(null,dctr,inst_12030);
var inst_12036 = cljs.core.seq.call(null,inst_12029__$1);
var inst_12037 = inst_12036;
var inst_12038 = null;
var inst_12039 = (0);
var inst_12040 = (0);
var state_12097__$1 = (function (){var statearr_12140 = state_12097;
(statearr_12140[(10)] = inst_12038);

(statearr_12140[(30)] = inst_12031);

(statearr_12140[(20)] = inst_12039);

(statearr_12140[(29)] = inst_12029__$1);

(statearr_12140[(21)] = inst_12037);

(statearr_12140[(12)] = inst_12040);

return statearr_12140;
})();
var statearr_12141_12210 = state_12097__$1;
(statearr_12141_12210[(2)] = null);

(statearr_12141_12210[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (28))){
var inst_12056 = (state_12097[(25)]);
var inst_12037 = (state_12097[(21)]);
var inst_12056__$1 = cljs.core.seq.call(null,inst_12037);
var state_12097__$1 = (function (){var statearr_12142 = state_12097;
(statearr_12142[(25)] = inst_12056__$1);

return statearr_12142;
})();
if(inst_12056__$1){
var statearr_12143_12211 = state_12097__$1;
(statearr_12143_12211[(1)] = (33));

} else {
var statearr_12144_12212 = state_12097__$1;
(statearr_12144_12212[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (25))){
var inst_12039 = (state_12097[(20)]);
var inst_12040 = (state_12097[(12)]);
var inst_12042 = (inst_12040 < inst_12039);
var inst_12043 = inst_12042;
var state_12097__$1 = state_12097;
if(cljs.core.truth_(inst_12043)){
var statearr_12145_12213 = state_12097__$1;
(statearr_12145_12213[(1)] = (27));

} else {
var statearr_12146_12214 = state_12097__$1;
(statearr_12146_12214[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (34))){
var state_12097__$1 = state_12097;
var statearr_12147_12215 = state_12097__$1;
(statearr_12147_12215[(2)] = null);

(statearr_12147_12215[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (17))){
var state_12097__$1 = state_12097;
var statearr_12148_12216 = state_12097__$1;
(statearr_12148_12216[(2)] = null);

(statearr_12148_12216[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (3))){
var inst_12095 = (state_12097[(2)]);
var state_12097__$1 = state_12097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12097__$1,inst_12095);
} else {
if((state_val_12098 === (12))){
var inst_12024 = (state_12097[(2)]);
var state_12097__$1 = state_12097;
var statearr_12149_12217 = state_12097__$1;
(statearr_12149_12217[(2)] = inst_12024);

(statearr_12149_12217[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (2))){
var state_12097__$1 = state_12097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12097__$1,(4),ch);
} else {
if((state_val_12098 === (23))){
var state_12097__$1 = state_12097;
var statearr_12150_12218 = state_12097__$1;
(statearr_12150_12218[(2)] = null);

(statearr_12150_12218[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (35))){
var inst_12079 = (state_12097[(2)]);
var state_12097__$1 = state_12097;
var statearr_12151_12219 = state_12097__$1;
(statearr_12151_12219[(2)] = inst_12079);

(statearr_12151_12219[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (19))){
var inst_11998 = (state_12097[(7)]);
var inst_12002 = cljs.core.chunk_first.call(null,inst_11998);
var inst_12003 = cljs.core.chunk_rest.call(null,inst_11998);
var inst_12004 = cljs.core.count.call(null,inst_12002);
var inst_11978 = inst_12003;
var inst_11979 = inst_12002;
var inst_11980 = inst_12004;
var inst_11981 = (0);
var state_12097__$1 = (function (){var statearr_12152 = state_12097;
(statearr_12152[(13)] = inst_11979);

(statearr_12152[(14)] = inst_11978);

(statearr_12152[(15)] = inst_11981);

(statearr_12152[(16)] = inst_11980);

return statearr_12152;
})();
var statearr_12153_12220 = state_12097__$1;
(statearr_12153_12220[(2)] = null);

(statearr_12153_12220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (11))){
var inst_11998 = (state_12097[(7)]);
var inst_11978 = (state_12097[(14)]);
var inst_11998__$1 = cljs.core.seq.call(null,inst_11978);
var state_12097__$1 = (function (){var statearr_12154 = state_12097;
(statearr_12154[(7)] = inst_11998__$1);

return statearr_12154;
})();
if(inst_11998__$1){
var statearr_12155_12221 = state_12097__$1;
(statearr_12155_12221[(1)] = (16));

} else {
var statearr_12156_12222 = state_12097__$1;
(statearr_12156_12222[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (9))){
var inst_12026 = (state_12097[(2)]);
var state_12097__$1 = state_12097;
var statearr_12157_12223 = state_12097__$1;
(statearr_12157_12223[(2)] = inst_12026);

(statearr_12157_12223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (5))){
var inst_11976 = cljs.core.deref.call(null,cs);
var inst_11977 = cljs.core.seq.call(null,inst_11976);
var inst_11978 = inst_11977;
var inst_11979 = null;
var inst_11980 = (0);
var inst_11981 = (0);
var state_12097__$1 = (function (){var statearr_12158 = state_12097;
(statearr_12158[(13)] = inst_11979);

(statearr_12158[(14)] = inst_11978);

(statearr_12158[(15)] = inst_11981);

(statearr_12158[(16)] = inst_11980);

return statearr_12158;
})();
var statearr_12159_12224 = state_12097__$1;
(statearr_12159_12224[(2)] = null);

(statearr_12159_12224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (14))){
var state_12097__$1 = state_12097;
var statearr_12160_12225 = state_12097__$1;
(statearr_12160_12225[(2)] = null);

(statearr_12160_12225[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (45))){
var inst_12087 = (state_12097[(2)]);
var state_12097__$1 = state_12097;
var statearr_12161_12226 = state_12097__$1;
(statearr_12161_12226[(2)] = inst_12087);

(statearr_12161_12226[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (26))){
var inst_12029 = (state_12097[(29)]);
var inst_12083 = (state_12097[(2)]);
var inst_12084 = cljs.core.seq.call(null,inst_12029);
var state_12097__$1 = (function (){var statearr_12162 = state_12097;
(statearr_12162[(31)] = inst_12083);

return statearr_12162;
})();
if(inst_12084){
var statearr_12163_12227 = state_12097__$1;
(statearr_12163_12227[(1)] = (42));

} else {
var statearr_12164_12228 = state_12097__$1;
(statearr_12164_12228[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (16))){
var inst_11998 = (state_12097[(7)]);
var inst_12000 = cljs.core.chunked_seq_QMARK_.call(null,inst_11998);
var state_12097__$1 = state_12097;
if(inst_12000){
var statearr_12165_12229 = state_12097__$1;
(statearr_12165_12229[(1)] = (19));

} else {
var statearr_12166_12230 = state_12097__$1;
(statearr_12166_12230[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (38))){
var inst_12076 = (state_12097[(2)]);
var state_12097__$1 = state_12097;
var statearr_12167_12231 = state_12097__$1;
(statearr_12167_12231[(2)] = inst_12076);

(statearr_12167_12231[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (30))){
var state_12097__$1 = state_12097;
var statearr_12168_12232 = state_12097__$1;
(statearr_12168_12232[(2)] = null);

(statearr_12168_12232[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (10))){
var inst_11979 = (state_12097[(13)]);
var inst_11981 = (state_12097[(15)]);
var inst_11987 = cljs.core._nth.call(null,inst_11979,inst_11981);
var inst_11988 = cljs.core.nth.call(null,inst_11987,(0),null);
var inst_11989 = cljs.core.nth.call(null,inst_11987,(1),null);
var state_12097__$1 = (function (){var statearr_12169 = state_12097;
(statearr_12169[(26)] = inst_11988);

return statearr_12169;
})();
if(cljs.core.truth_(inst_11989)){
var statearr_12170_12233 = state_12097__$1;
(statearr_12170_12233[(1)] = (13));

} else {
var statearr_12171_12234 = state_12097__$1;
(statearr_12171_12234[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (18))){
var inst_12022 = (state_12097[(2)]);
var state_12097__$1 = state_12097;
var statearr_12172_12235 = state_12097__$1;
(statearr_12172_12235[(2)] = inst_12022);

(statearr_12172_12235[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (42))){
var state_12097__$1 = state_12097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12097__$1,(45),dchan);
} else {
if((state_val_12098 === (37))){
var inst_11969 = (state_12097[(9)]);
var inst_12065 = (state_12097[(23)]);
var inst_12056 = (state_12097[(25)]);
var inst_12065__$1 = cljs.core.first.call(null,inst_12056);
var inst_12066 = cljs.core.async.put_BANG_.call(null,inst_12065__$1,inst_11969,done);
var state_12097__$1 = (function (){var statearr_12173 = state_12097;
(statearr_12173[(23)] = inst_12065__$1);

return statearr_12173;
})();
if(cljs.core.truth_(inst_12066)){
var statearr_12174_12236 = state_12097__$1;
(statearr_12174_12236[(1)] = (39));

} else {
var statearr_12175_12237 = state_12097__$1;
(statearr_12175_12237[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12098 === (8))){
var inst_11981 = (state_12097[(15)]);
var inst_11980 = (state_12097[(16)]);
var inst_11983 = (inst_11981 < inst_11980);
var inst_11984 = inst_11983;
var state_12097__$1 = state_12097;
if(cljs.core.truth_(inst_11984)){
var statearr_12176_12238 = state_12097__$1;
(statearr_12176_12238[(1)] = (10));

} else {
var statearr_12177_12239 = state_12097__$1;
(statearr_12177_12239[(1)] = (11));

}

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
});})(c__5829__auto___12185,cs,m,dchan,dctr,done))
;
return ((function (switch__5814__auto__,c__5829__auto___12185,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5815__auto__ = null;
var state_machine__5815__auto____0 = (function (){
var statearr_12181 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12181[(0)] = state_machine__5815__auto__);

(statearr_12181[(1)] = (1));

return statearr_12181;
});
var state_machine__5815__auto____1 = (function (state_12097){
while(true){
var ret_value__5816__auto__ = (function (){try{while(true){
var result__5817__auto__ = switch__5814__auto__.call(null,state_12097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5817__auto__;
}
break;
}
}catch (e12182){if((e12182 instanceof Object)){
var ex__5818__auto__ = e12182;
var statearr_12183_12240 = state_12097;
(statearr_12183_12240[(5)] = ex__5818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12241 = state_12097;
state_12097 = G__12241;
continue;
} else {
return ret_value__5816__auto__;
}
break;
}
});
state_machine__5815__auto__ = function(state_12097){
switch(arguments.length){
case 0:
return state_machine__5815__auto____0.call(this);
case 1:
return state_machine__5815__auto____1.call(this,state_12097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5815__auto____0;
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5815__auto____1;
return state_machine__5815__auto__;
})()
;})(switch__5814__auto__,c__5829__auto___12185,cs,m,dchan,dctr,done))
})();
var state__5831__auto__ = (function (){var statearr_12184 = f__5830__auto__.call(null);
(statearr_12184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5829__auto___12185);

return statearr_12184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5831__auto__);
});})(c__5829__auto___12185,cs,m,dchan,dctr,done))
);


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
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

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
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj12243 = {};
return obj12243;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3616__auto__ = m;
if(and__3616__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3616__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4267__auto__ = (((m == null))?null:m);
return (function (){var or__3628__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4267__auto__)]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3616__auto__ = m;
if(and__3616__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3616__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4267__auto__ = (((m == null))?null:m);
return (function (){var or__3628__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4267__auto__)]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3616__auto__ = m;
if(and__3616__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3616__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4267__auto__ = (((m == null))?null:m);
return (function (){var or__3628__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4267__auto__)]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3616__auto__ = m;
if(and__3616__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3616__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4267__auto__ = (((m == null))?null:m);
return (function (){var or__3628__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4267__auto__)]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3616__auto__ = m;
if(and__3616__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3616__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4267__auto__ = (((m == null))?null:m);
return (function (){var or__3628__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4267__auto__)]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__12244){
var map__12249 = p__12244;
var map__12249__$1 = ((cljs.core.seq_QMARK_.call(null,map__12249))?cljs.core.apply.call(null,cljs.core.hash_map,map__12249):map__12249);
var opts = map__12249__$1;
var statearr_12250_12253 = state;
(statearr_12250_12253[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__12249,map__12249__$1,opts){
return (function (val){
var statearr_12251_12254 = state;
(statearr_12251_12254[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__12249,map__12249__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_12252_12255 = state;
(statearr_12252_12255[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__12244 = null;
if (arguments.length > 3) {
  p__12244 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__12244);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__12256){
var state = cljs.core.first(arglist__12256);
arglist__12256 = cljs.core.next(arglist__12256);
var cont_block = cljs.core.first(arglist__12256);
arglist__12256 = cljs.core.next(arglist__12256);
var ports = cljs.core.first(arglist__12256);
var p__12244 = cljs.core.rest(arglist__12256);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__12244);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
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
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t12376 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12376 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12377){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12377 = meta12377;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12376.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t12376.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12376.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12376.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12376.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12376.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12376.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t12376.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12376.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12378){
var self__ = this;
var _12378__$1 = this;
return self__.meta12377;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12378,meta12377__$1){
var self__ = this;
var _12378__$1 = this;
return (new cljs.core.async.t12376(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12377__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t12376.cljs$lang$type = true;

cljs.core.async.t12376.cljs$lang$ctorStr = "cljs.core.async/t12376";

cljs.core.async.t12376.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4210__auto__,writer__4211__auto__,opt__4212__auto__){
return cljs.core._write.call(null,writer__4211__auto__,"cljs.core.async/t12376");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t12376 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12376(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12377){
return (new cljs.core.async.t12376(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12377));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t12376(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/henrik/Documents/Projects/Programming/reactive/resources/public/js/output/cljs/core/async.cljs"], null)));
})()
;
var c__5829__auto___12495 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5829__auto___12495,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__5830__auto__ = (function (){var switch__5814__auto__ = ((function (c__5829__auto___12495,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12448){
var state_val_12449 = (state_12448[(1)]);
if((state_val_12449 === (7))){
var inst_12392 = (state_12448[(7)]);
var inst_12397 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12392);
var state_12448__$1 = state_12448;
var statearr_12450_12496 = state_12448__$1;
(statearr_12450_12496[(2)] = inst_12397);

(statearr_12450_12496[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (20))){
var inst_12407 = (state_12448[(8)]);
var state_12448__$1 = state_12448;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12448__$1,(23),out,inst_12407);
} else {
if((state_val_12449 === (1))){
var inst_12382 = (state_12448[(9)]);
var inst_12382__$1 = calc_state.call(null);
var inst_12383 = cljs.core.seq_QMARK_.call(null,inst_12382__$1);
var state_12448__$1 = (function (){var statearr_12451 = state_12448;
(statearr_12451[(9)] = inst_12382__$1);

return statearr_12451;
})();
if(inst_12383){
var statearr_12452_12497 = state_12448__$1;
(statearr_12452_12497[(1)] = (2));

} else {
var statearr_12453_12498 = state_12448__$1;
(statearr_12453_12498[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (24))){
var inst_12400 = (state_12448[(10)]);
var inst_12392 = inst_12400;
var state_12448__$1 = (function (){var statearr_12454 = state_12448;
(statearr_12454[(7)] = inst_12392);

return statearr_12454;
})();
var statearr_12455_12499 = state_12448__$1;
(statearr_12455_12499[(2)] = null);

(statearr_12455_12499[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (4))){
var inst_12382 = (state_12448[(9)]);
var inst_12388 = (state_12448[(2)]);
var inst_12389 = cljs.core.get.call(null,inst_12388,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12390 = cljs.core.get.call(null,inst_12388,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12391 = cljs.core.get.call(null,inst_12388,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12392 = inst_12382;
var state_12448__$1 = (function (){var statearr_12456 = state_12448;
(statearr_12456[(11)] = inst_12389);

(statearr_12456[(12)] = inst_12390);

(statearr_12456[(7)] = inst_12392);

(statearr_12456[(13)] = inst_12391);

return statearr_12456;
})();
var statearr_12457_12500 = state_12448__$1;
(statearr_12457_12500[(2)] = null);

(statearr_12457_12500[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (15))){
var state_12448__$1 = state_12448;
var statearr_12458_12501 = state_12448__$1;
(statearr_12458_12501[(2)] = null);

(statearr_12458_12501[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (21))){
var inst_12400 = (state_12448[(10)]);
var inst_12392 = inst_12400;
var state_12448__$1 = (function (){var statearr_12459 = state_12448;
(statearr_12459[(7)] = inst_12392);

return statearr_12459;
})();
var statearr_12460_12502 = state_12448__$1;
(statearr_12460_12502[(2)] = null);

(statearr_12460_12502[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (13))){
var inst_12444 = (state_12448[(2)]);
var state_12448__$1 = state_12448;
var statearr_12461_12503 = state_12448__$1;
(statearr_12461_12503[(2)] = inst_12444);

(statearr_12461_12503[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (22))){
var inst_12442 = (state_12448[(2)]);
var state_12448__$1 = state_12448;
var statearr_12462_12504 = state_12448__$1;
(statearr_12462_12504[(2)] = inst_12442);

(statearr_12462_12504[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (6))){
var inst_12446 = (state_12448[(2)]);
var state_12448__$1 = state_12448;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12448__$1,inst_12446);
} else {
if((state_val_12449 === (25))){
var state_12448__$1 = state_12448;
var statearr_12463_12505 = state_12448__$1;
(statearr_12463_12505[(2)] = null);

(statearr_12463_12505[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (17))){
var inst_12422 = (state_12448[(14)]);
var state_12448__$1 = state_12448;
var statearr_12464_12506 = state_12448__$1;
(statearr_12464_12506[(2)] = inst_12422);

(statearr_12464_12506[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (3))){
var inst_12382 = (state_12448[(9)]);
var state_12448__$1 = state_12448;
var statearr_12465_12507 = state_12448__$1;
(statearr_12465_12507[(2)] = inst_12382);

(statearr_12465_12507[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (12))){
var inst_12403 = (state_12448[(15)]);
var inst_12408 = (state_12448[(16)]);
var inst_12422 = (state_12448[(14)]);
var inst_12422__$1 = inst_12403.call(null,inst_12408);
var state_12448__$1 = (function (){var statearr_12466 = state_12448;
(statearr_12466[(14)] = inst_12422__$1);

return statearr_12466;
})();
if(cljs.core.truth_(inst_12422__$1)){
var statearr_12467_12508 = state_12448__$1;
(statearr_12467_12508[(1)] = (17));

} else {
var statearr_12468_12509 = state_12448__$1;
(statearr_12468_12509[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (2))){
var inst_12382 = (state_12448[(9)]);
var inst_12385 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12382);
var state_12448__$1 = state_12448;
var statearr_12469_12510 = state_12448__$1;
(statearr_12469_12510[(2)] = inst_12385);

(statearr_12469_12510[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (23))){
var inst_12433 = (state_12448[(2)]);
var state_12448__$1 = state_12448;
if(cljs.core.truth_(inst_12433)){
var statearr_12470_12511 = state_12448__$1;
(statearr_12470_12511[(1)] = (24));

} else {
var statearr_12471_12512 = state_12448__$1;
(statearr_12471_12512[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (19))){
var inst_12430 = (state_12448[(2)]);
var state_12448__$1 = state_12448;
if(cljs.core.truth_(inst_12430)){
var statearr_12472_12513 = state_12448__$1;
(statearr_12472_12513[(1)] = (20));

} else {
var statearr_12473_12514 = state_12448__$1;
(statearr_12473_12514[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (11))){
var inst_12407 = (state_12448[(8)]);
var inst_12413 = (inst_12407 == null);
var state_12448__$1 = state_12448;
if(cljs.core.truth_(inst_12413)){
var statearr_12474_12515 = state_12448__$1;
(statearr_12474_12515[(1)] = (14));

} else {
var statearr_12475_12516 = state_12448__$1;
(statearr_12475_12516[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (9))){
var inst_12400 = (state_12448[(10)]);
var inst_12400__$1 = (state_12448[(2)]);
var inst_12401 = cljs.core.get.call(null,inst_12400__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12402 = cljs.core.get.call(null,inst_12400__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12403 = cljs.core.get.call(null,inst_12400__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_12448__$1 = (function (){var statearr_12476 = state_12448;
(statearr_12476[(10)] = inst_12400__$1);

(statearr_12476[(15)] = inst_12403);

(statearr_12476[(17)] = inst_12402);

return statearr_12476;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12448__$1,(10),inst_12401);
} else {
if((state_val_12449 === (5))){
var inst_12392 = (state_12448[(7)]);
var inst_12395 = cljs.core.seq_QMARK_.call(null,inst_12392);
var state_12448__$1 = state_12448;
if(inst_12395){
var statearr_12477_12517 = state_12448__$1;
(statearr_12477_12517[(1)] = (7));

} else {
var statearr_12478_12518 = state_12448__$1;
(statearr_12478_12518[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (14))){
var inst_12408 = (state_12448[(16)]);
var inst_12415 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12408);
var state_12448__$1 = state_12448;
var statearr_12479_12519 = state_12448__$1;
(statearr_12479_12519[(2)] = inst_12415);

(statearr_12479_12519[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (26))){
var inst_12438 = (state_12448[(2)]);
var state_12448__$1 = state_12448;
var statearr_12480_12520 = state_12448__$1;
(statearr_12480_12520[(2)] = inst_12438);

(statearr_12480_12520[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (16))){
var inst_12418 = (state_12448[(2)]);
var inst_12419 = calc_state.call(null);
var inst_12392 = inst_12419;
var state_12448__$1 = (function (){var statearr_12481 = state_12448;
(statearr_12481[(7)] = inst_12392);

(statearr_12481[(18)] = inst_12418);

return statearr_12481;
})();
var statearr_12482_12521 = state_12448__$1;
(statearr_12482_12521[(2)] = null);

(statearr_12482_12521[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (10))){
var inst_12407 = (state_12448[(8)]);
var inst_12408 = (state_12448[(16)]);
var inst_12406 = (state_12448[(2)]);
var inst_12407__$1 = cljs.core.nth.call(null,inst_12406,(0),null);
var inst_12408__$1 = cljs.core.nth.call(null,inst_12406,(1),null);
var inst_12409 = (inst_12407__$1 == null);
var inst_12410 = cljs.core._EQ_.call(null,inst_12408__$1,change);
var inst_12411 = (inst_12409) || (inst_12410);
var state_12448__$1 = (function (){var statearr_12483 = state_12448;
(statearr_12483[(8)] = inst_12407__$1);

(statearr_12483[(16)] = inst_12408__$1);

return statearr_12483;
})();
if(cljs.core.truth_(inst_12411)){
var statearr_12484_12522 = state_12448__$1;
(statearr_12484_12522[(1)] = (11));

} else {
var statearr_12485_12523 = state_12448__$1;
(statearr_12485_12523[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (18))){
var inst_12403 = (state_12448[(15)]);
var inst_12402 = (state_12448[(17)]);
var inst_12408 = (state_12448[(16)]);
var inst_12425 = cljs.core.empty_QMARK_.call(null,inst_12403);
var inst_12426 = inst_12402.call(null,inst_12408);
var inst_12427 = cljs.core.not.call(null,inst_12426);
var inst_12428 = (inst_12425) && (inst_12427);
var state_12448__$1 = state_12448;
var statearr_12486_12524 = state_12448__$1;
(statearr_12486_12524[(2)] = inst_12428);

(statearr_12486_12524[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12449 === (8))){
var inst_12392 = (state_12448[(7)]);
var state_12448__$1 = state_12448;
var statearr_12487_12525 = state_12448__$1;
(statearr_12487_12525[(2)] = inst_12392);

(statearr_12487_12525[(1)] = (9));


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
});})(c__5829__auto___12495,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__5814__auto__,c__5829__auto___12495,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5815__auto__ = null;
var state_machine__5815__auto____0 = (function (){
var statearr_12491 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12491[(0)] = state_machine__5815__auto__);

(statearr_12491[(1)] = (1));

return statearr_12491;
});
var state_machine__5815__auto____1 = (function (state_12448){
while(true){
var ret_value__5816__auto__ = (function (){try{while(true){
var result__5817__auto__ = switch__5814__auto__.call(null,state_12448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5817__auto__;
}
break;
}
}catch (e12492){if((e12492 instanceof Object)){
var ex__5818__auto__ = e12492;
var statearr_12493_12526 = state_12448;
(statearr_12493_12526[(5)] = ex__5818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12527 = state_12448;
state_12448 = G__12527;
continue;
} else {
return ret_value__5816__auto__;
}
break;
}
});
state_machine__5815__auto__ = function(state_12448){
switch(arguments.length){
case 0:
return state_machine__5815__auto____0.call(this);
case 1:
return state_machine__5815__auto____1.call(this,state_12448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5815__auto____0;
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5815__auto____1;
return state_machine__5815__auto__;
})()
;})(switch__5814__auto__,c__5829__auto___12495,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__5831__auto__ = (function (){var statearr_12494 = f__5830__auto__.call(null);
(statearr_12494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5829__auto___12495);

return statearr_12494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5831__auto__);
});})(c__5829__auto___12495,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj12529 = {};
return obj12529;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3616__auto__ = p;
if(and__3616__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3616__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4267__auto__ = (((p == null))?null:p);
return (function (){var or__3628__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4267__auto__)]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3616__auto__ = p;
if(and__3616__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3616__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4267__auto__ = (((p == null))?null:p);
return (function (){var or__3628__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4267__auto__)]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3616__auto__ = p;
if(and__3616__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3616__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4267__auto__ = (((p == null))?null:p);
return (function (){var or__3628__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4267__auto__)]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3616__auto__ = p;
if(and__3616__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3616__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4267__auto__ = (((p == null))?null:p);
return (function (){var or__3628__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4267__auto__)]);
if(or__3628__auto__){
return or__3628__auto__;
} else {
var or__3628__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3628__auto____$1){
return or__3628__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3628__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3628__auto__)){
return or__3628__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3628__auto__,mults){
return (function (p1__12530_SHARP_){
if(cljs.core.truth_(p1__12530_SHARP_.call(null,topic))){
return p1__12530_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12530_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3628__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t12653 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12653 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12654){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12654 = meta12654;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12653.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t12653.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t12653.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t12653.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t12653.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t12653.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t12653.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t12653.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12655){
var self__ = this;
var _12655__$1 = this;
return self__.meta12654;
});})(mults,ensure_mult))
;

cljs.core.async.t12653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12655,meta12654__$1){
var self__ = this;
var _12655__$1 = this;
return (new cljs.core.async.t12653(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12654__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t12653.cljs$lang$type = true;

cljs.core.async.t12653.cljs$lang$ctorStr = "cljs.core.async/t12653";

cljs.core.async.t12653.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4210__auto__,writer__4211__auto__,opt__4212__auto__){
return cljs.core._write.call(null,writer__4211__auto__,"cljs.core.async/t12653");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t12653 = ((function (mults,ensure_mult){
return (function __GT_t12653(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12654){
return (new cljs.core.async.t12653(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12654));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t12653(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/henrik/Documents/Projects/Programming/reactive/resources/public/js/output/cljs/core/async.cljs"], null)));
})()
;
var c__5829__auto___12775 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5829__auto___12775,mults,ensure_mult,p){
return (function (){
var f__5830__auto__ = (function (){var switch__5814__auto__ = ((function (c__5829__auto___12775,mults,ensure_mult,p){
return (function (state_12727){
var state_val_12728 = (state_12727[(1)]);
if((state_val_12728 === (7))){
var inst_12723 = (state_12727[(2)]);
var state_12727__$1 = state_12727;
var statearr_12729_12776 = state_12727__$1;
(statearr_12729_12776[(2)] = inst_12723);

(statearr_12729_12776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12728 === (20))){
var state_12727__$1 = state_12727;
var statearr_12730_12777 = state_12727__$1;
(statearr_12730_12777[(2)] = null);

(statearr_12730_12777[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12728 === (1))){
var state_12727__$1 = state_12727;
var statearr_12731_12778 = state_12727__$1;
(statearr_12731_12778[(2)] = null);

(statearr_12731_12778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12728 === (24))){
var inst_12706 = (state_12727[(7)]);
var inst_12715 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12706);
var state_12727__$1 = state_12727;
var statearr_12732_12779 = state_12727__$1;
(statearr_12732_12779[(2)] = inst_12715);

(statearr_12732_12779[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12728 === (4))){
var inst_12658 = (state_12727[(8)]);
var inst_12658__$1 = (state_12727[(2)]);
var inst_12659 = (inst_12658__$1 == null);
var state_12727__$1 = (function (){var statearr_12733 = state_12727;
(statearr_12733[(8)] = inst_12658__$1);

return statearr_12733;
})();
if(cljs.core.truth_(inst_12659)){
var statearr_12734_12780 = state_12727__$1;
(statearr_12734_12780[(1)] = (5));

} else {
var statearr_12735_12781 = state_12727__$1;
(statearr_12735_12781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12728 === (15))){
var inst_12700 = (state_12727[(2)]);
var state_12727__$1 = state_12727;
var statearr_12736_12782 = state_12727__$1;
(statearr_12736_12782[(2)] = inst_12700);

(statearr_12736_12782[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12728 === (21))){
var inst_12720 = (state_12727[(2)]);
var state_12727__$1 = (function (){var statearr_12737 = state_12727;
(statearr_12737[(9)] = inst_12720);

return statearr_12737;
})();
var statearr_12738_12783 = state_12727__$1;
(statearr_12738_12783[(2)] = null);

(statearr_12738_12783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12728 === (13))){
var inst_12682 = (state_12727[(10)]);
var inst_12684 = cljs.core.chunked_seq_QMARK_.call(null,inst_12682);
var state_12727__$1 = state_12727;
if(inst_12684){
var statearr_12739_12784 = state_12727__$1;
(statearr_12739_12784[(1)] = (16));

} else {
var statearr_12740_12785 = state_12727__$1;
(statearr_12740_12785[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12728 === (22))){
var inst_12712 = (state_12727[(2)]);
var state_12727__$1 = state_12727;
if(cljs.core.truth_(inst_12712)){
var statearr_12741_12786 = state_12727__$1;
(statearr_12741_12786[(1)] = (23));

} else {
var statearr_12742_12787 = state_12727__$1;
(statearr_12742_12787[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12728 === (6))){
var inst_12658 = (state_12727[(8)]);
var inst_12706 = (state_12727[(7)]);
var inst_12708 = (state_12727[(11)]);
var inst_12706__$1 = topic_fn.call(null,inst_12658);
var inst_12707 = cljs.core.deref.call(null,mults);
var inst_12708__$1 = cljs.core.get.call(null,inst_12707,inst_12706__$1);
var state_12727__$1 = (function (){var statearr_12743 = state_12727;
(statearr_12743[(7)] = inst_12706__$1);

(statearr_12743[(11)] = inst_12708__$1);

return statearr_12743;
})();
if(cljs.core.truth_(inst_12708__$1)){
var statearr_12744_12788 = state_12727__$1;
(statearr_12744_12788[(1)] = (19));

} else {
var statearr_12745_12789 = state_12727__$1;
(statearr_12745_12789[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12728 === (25))){
var inst_12717 = (state_12727[(2)]);
var state_12727__$1 = state_12727;
var statearr_12746_12790 = state_12727__$1;
(statearr_12746_12790[(2)] = inst_12717);

(statearr_12746_12790[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12728 === (17))){
var inst_12682 = (state_12727[(10)]);
var inst_12691 = cljs.core.first.call(null,inst_12682);
var inst_12692 = cljs.core.async.muxch_STAR_.call(null,inst_12691);
var inst_12693 = cljs.core.async.close_BANG_.call(null,inst_12692);
var inst_12694 = cljs.core.next.call(null,inst_12682);
var inst_12668 = inst_12694;
var inst_12669 = null;
var inst_12670 = (0);
var inst_12671 = (0);
var state_12727__$1 = (function (){var statearr_12747 = state_12727;
(statearr_12747[(12)] = inst_12669);

(statearr_12747[(13)] = inst_12693);

(statearr_12747[(14)] = inst_12670);

(statearr_12747[(15)] = inst_12668);

(statearr_12747[(16)] = inst_12671);

return statearr_12747;
})();
var statearr_12748_12791 = state_12727__$1;
(statearr_12748_12791[(2)] = null);

(statearr_12748_12791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12728 === (3))){
var inst_12725 = (state_12727[(2)]);
var state_12727__$1 = state_12727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12727__$1,inst_12725);
} else {
if((state_val_12728 === (12))){
var inst_12702 = (state_12727[(2)]);
var state_12727__$1 = state_12727;
var statearr_12749_12792 = state_12727__$1;
(statearr_12749_12792[(2)] = inst_12702);

(statearr_12749_12792[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12728 === (2))){
var state_12727__$1 = state_12727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12727__$1,(4),ch);
} else {
if((state_val_12728 === (23))){
var state_12727__$1 = state_12727;
var statearr_12750_12793 = state_12727__$1;
(statearr_12750_12793[(2)] = null);

(statearr_12750_12793[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12728 === (19))){
var inst_12658 = (state_12727[(8)]);
var inst_12708 = (state_12727[(11)]);
var inst_12710 = cljs.core.async.muxch_STAR_.call(null,inst_12708);
var state_12727__$1 = state_12727;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12727__$1,(22),inst_12710,inst_12658);
} else {
if((state_val_12728 === (11))){
var inst_12682 = (state_12727[(10)]);
var inst_12668 = (state_12727[(15)]);
var inst_12682__$1 = cljs.core.seq.call(null,inst_12668);
var state_12727__$1 = (function (){var statearr_12751 = state_12727;
(statearr_12751[(10)] = inst_12682__$1);

return statearr_12751;
})();
if(inst_12682__$1){
var statearr_12752_12794 = state_12727__$1;
(statearr_12752_12794[(1)] = (13));

} else {
var statearr_12753_12795 = state_12727__$1;
(statearr_12753_12795[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12728 === (9))){
var inst_12704 = (state_12727[(2)]);
var state_12727__$1 = state_12727;
var statearr_12754_12796 = state_12727__$1;
(statearr_12754_12796[(2)] = inst_12704);

(statearr_12754_12796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12728 === (5))){
var inst_12665 = cljs.core.deref.call(null,mults);
var inst_12666 = cljs.core.vals.call(null,inst_12665);
var inst_12667 = cljs.core.seq.call(null,inst_12666);
var inst_12668 = inst_12667;
var inst_12669 = null;
var inst_12670 = (0);
var inst_12671 = (0);
var state_12727__$1 = (function (){var statearr_12755 = state_12727;
(statearr_12755[(12)] = inst_12669);

(statearr_12755[(14)] = inst_12670);

(statearr_12755[(15)] = inst_12668);

(statearr_12755[(16)] = inst_12671);

return statearr_12755;
})();
var statearr_12756_12797 = state_12727__$1;
(statearr_12756_12797[(2)] = null);

(statearr_12756_12797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12728 === (14))){
var state_12727__$1 = state_12727;
var statearr_12760_12798 = state_12727__$1;
(statearr_12760_12798[(2)] = null);

(statearr_12760_12798[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12728 === (16))){
var inst_12682 = (state_12727[(10)]);
var inst_12686 = cljs.core.chunk_first.call(null,inst_12682);
var inst_12687 = cljs.core.chunk_rest.call(null,inst_12682);
var inst_12688 = cljs.core.count.call(null,inst_12686);
var inst_12668 = inst_12687;
var inst_12669 = inst_12686;
var inst_12670 = inst_12688;
var inst_12671 = (0);
var state_12727__$1 = (function (){var statearr_12761 = state_12727;
(statearr_12761[(12)] = inst_12669);

(statearr_12761[(14)] = inst_12670);

(statearr_12761[(15)] = inst_12668);

(statearr_12761[(16)] = inst_12671);

return statearr_12761;
})();
var statearr_12762_12799 = state_12727__$1;
(statearr_12762_12799[(2)] = null);

(statearr_12762_12799[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12728 === (10))){
var inst_12669 = (state_12727[(12)]);
var inst_12670 = (state_12727[(14)]);
var inst_12668 = (state_12727[(15)]);
var inst_12671 = (state_12727[(16)]);
var inst_12676 = cljs.core._nth.call(null,inst_12669,inst_12671);
var inst_12677 = cljs.core.async.muxch_STAR_.call(null,inst_12676);
var inst_12678 = cljs.core.async.close_BANG_.call(null,inst_12677);
var inst_12679 = (inst_12671 + (1));
var tmp12757 = inst_12669;
var tmp12758 = inst_12670;
var tmp12759 = inst_12668;
var inst_12668__$1 = tmp12759;
var inst_12669__$1 = tmp12757;
var inst_12670__$1 = tmp12758;
var inst_12671__$1 = inst_12679;
var state_12727__$1 = (function (){var statearr_12763 = state_12727;
(statearr_12763[(12)] = inst_12669__$1);

(statearr_12763[(17)] = inst_12678);

(statearr_12763[(14)] = inst_12670__$1);

(statearr_12763[(15)] = inst_12668__$1);

(statearr_12763[(16)] = inst_12671__$1);

return statearr_12763;
})();
var statearr_12764_12800 = state_12727__$1;
(statearr_12764_12800[(2)] = null);

(statearr_12764_12800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12728 === (18))){
var inst_12697 = (state_12727[(2)]);
var state_12727__$1 = state_12727;
var statearr_12765_12801 = state_12727__$1;
(statearr_12765_12801[(2)] = inst_12697);

(statearr_12765_12801[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12728 === (8))){
var inst_12670 = (state_12727[(14)]);
var inst_12671 = (state_12727[(16)]);
var inst_12673 = (inst_12671 < inst_12670);
var inst_12674 = inst_12673;
var state_12727__$1 = state_12727;
if(cljs.core.truth_(inst_12674)){
var statearr_12766_12802 = state_12727__$1;
(statearr_12766_12802[(1)] = (10));

} else {
var statearr_12767_12803 = state_12727__$1;
(statearr_12767_12803[(1)] = (11));

}

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
});})(c__5829__auto___12775,mults,ensure_mult,p))
;
return ((function (switch__5814__auto__,c__5829__auto___12775,mults,ensure_mult,p){
return (function() {
var state_machine__5815__auto__ = null;
var state_machine__5815__auto____0 = (function (){
var statearr_12771 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12771[(0)] = state_machine__5815__auto__);

(statearr_12771[(1)] = (1));

return statearr_12771;
});
var state_machine__5815__auto____1 = (function (state_12727){
while(true){
var ret_value__5816__auto__ = (function (){try{while(true){
var result__5817__auto__ = switch__5814__auto__.call(null,state_12727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5817__auto__;
}
break;
}
}catch (e12772){if((e12772 instanceof Object)){
var ex__5818__auto__ = e12772;
var statearr_12773_12804 = state_12727;
(statearr_12773_12804[(5)] = ex__5818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12805 = state_12727;
state_12727 = G__12805;
continue;
} else {
return ret_value__5816__auto__;
}
break;
}
});
state_machine__5815__auto__ = function(state_12727){
switch(arguments.length){
case 0:
return state_machine__5815__auto____0.call(this);
case 1:
return state_machine__5815__auto____1.call(this,state_12727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5815__auto____0;
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5815__auto____1;
return state_machine__5815__auto__;
})()
;})(switch__5814__auto__,c__5829__auto___12775,mults,ensure_mult,p))
})();
var state__5831__auto__ = (function (){var statearr_12774 = f__5830__auto__.call(null);
(statearr_12774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5829__auto___12775);

return statearr_12774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5831__auto__);
});})(c__5829__auto___12775,mults,ensure_mult,p))
);


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
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
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
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__5829__auto___12942 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5829__auto___12942,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__5830__auto__ = (function (){var switch__5814__auto__ = ((function (c__5829__auto___12942,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12912){
var state_val_12913 = (state_12912[(1)]);
if((state_val_12913 === (7))){
var state_12912__$1 = state_12912;
var statearr_12914_12943 = state_12912__$1;
(statearr_12914_12943[(2)] = null);

(statearr_12914_12943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12913 === (1))){
var state_12912__$1 = state_12912;
var statearr_12915_12944 = state_12912__$1;
(statearr_12915_12944[(2)] = null);

(statearr_12915_12944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12913 === (4))){
var inst_12876 = (state_12912[(7)]);
var inst_12878 = (inst_12876 < cnt);
var state_12912__$1 = state_12912;
if(cljs.core.truth_(inst_12878)){
var statearr_12916_12945 = state_12912__$1;
(statearr_12916_12945[(1)] = (6));

} else {
var statearr_12917_12946 = state_12912__$1;
(statearr_12917_12946[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12913 === (15))){
var inst_12908 = (state_12912[(2)]);
var state_12912__$1 = state_12912;
var statearr_12918_12947 = state_12912__$1;
(statearr_12918_12947[(2)] = inst_12908);

(statearr_12918_12947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12913 === (13))){
var inst_12901 = cljs.core.async.close_BANG_.call(null,out);
var state_12912__$1 = state_12912;
var statearr_12919_12948 = state_12912__$1;
(statearr_12919_12948[(2)] = inst_12901);

(statearr_12919_12948[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12913 === (6))){
var state_12912__$1 = state_12912;
var statearr_12920_12949 = state_12912__$1;
(statearr_12920_12949[(2)] = null);

(statearr_12920_12949[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12913 === (3))){
var inst_12910 = (state_12912[(2)]);
var state_12912__$1 = state_12912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12912__$1,inst_12910);
} else {
if((state_val_12913 === (12))){
var inst_12898 = (state_12912[(8)]);
var inst_12898__$1 = (state_12912[(2)]);
var inst_12899 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12898__$1);
var state_12912__$1 = (function (){var statearr_12921 = state_12912;
(statearr_12921[(8)] = inst_12898__$1);

return statearr_12921;
})();
if(cljs.core.truth_(inst_12899)){
var statearr_12922_12950 = state_12912__$1;
(statearr_12922_12950[(1)] = (13));

} else {
var statearr_12923_12951 = state_12912__$1;
(statearr_12923_12951[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12913 === (2))){
var inst_12875 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_12876 = (0);
var state_12912__$1 = (function (){var statearr_12924 = state_12912;
(statearr_12924[(7)] = inst_12876);

(statearr_12924[(9)] = inst_12875);

return statearr_12924;
})();
var statearr_12925_12952 = state_12912__$1;
(statearr_12925_12952[(2)] = null);

(statearr_12925_12952[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12913 === (11))){
var inst_12876 = (state_12912[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12912,(10),Object,null,(9));
var inst_12885 = chs__$1.call(null,inst_12876);
var inst_12886 = done.call(null,inst_12876);
var inst_12887 = cljs.core.async.take_BANG_.call(null,inst_12885,inst_12886);
var state_12912__$1 = state_12912;
var statearr_12926_12953 = state_12912__$1;
(statearr_12926_12953[(2)] = inst_12887);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12912__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12913 === (9))){
var inst_12876 = (state_12912[(7)]);
var inst_12889 = (state_12912[(2)]);
var inst_12890 = (inst_12876 + (1));
var inst_12876__$1 = inst_12890;
var state_12912__$1 = (function (){var statearr_12927 = state_12912;
(statearr_12927[(10)] = inst_12889);

(statearr_12927[(7)] = inst_12876__$1);

return statearr_12927;
})();
var statearr_12928_12954 = state_12912__$1;
(statearr_12928_12954[(2)] = null);

(statearr_12928_12954[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12913 === (5))){
var inst_12896 = (state_12912[(2)]);
var state_12912__$1 = (function (){var statearr_12929 = state_12912;
(statearr_12929[(11)] = inst_12896);

return statearr_12929;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12912__$1,(12),dchan);
} else {
if((state_val_12913 === (14))){
var inst_12898 = (state_12912[(8)]);
var inst_12903 = cljs.core.apply.call(null,f,inst_12898);
var state_12912__$1 = state_12912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12912__$1,(16),out,inst_12903);
} else {
if((state_val_12913 === (16))){
var inst_12905 = (state_12912[(2)]);
var state_12912__$1 = (function (){var statearr_12930 = state_12912;
(statearr_12930[(12)] = inst_12905);

return statearr_12930;
})();
var statearr_12931_12955 = state_12912__$1;
(statearr_12931_12955[(2)] = null);

(statearr_12931_12955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12913 === (10))){
var inst_12880 = (state_12912[(2)]);
var inst_12881 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_12912__$1 = (function (){var statearr_12932 = state_12912;
(statearr_12932[(13)] = inst_12880);

return statearr_12932;
})();
var statearr_12933_12956 = state_12912__$1;
(statearr_12933_12956[(2)] = inst_12881);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12912__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12913 === (8))){
var inst_12894 = (state_12912[(2)]);
var state_12912__$1 = state_12912;
var statearr_12934_12957 = state_12912__$1;
(statearr_12934_12957[(2)] = inst_12894);

(statearr_12934_12957[(1)] = (5));


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
}
}
}
}
}
}
}
}
}
});})(c__5829__auto___12942,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__5814__auto__,c__5829__auto___12942,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5815__auto__ = null;
var state_machine__5815__auto____0 = (function (){
var statearr_12938 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12938[(0)] = state_machine__5815__auto__);

(statearr_12938[(1)] = (1));

return statearr_12938;
});
var state_machine__5815__auto____1 = (function (state_12912){
while(true){
var ret_value__5816__auto__ = (function (){try{while(true){
var result__5817__auto__ = switch__5814__auto__.call(null,state_12912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5817__auto__;
}
break;
}
}catch (e12939){if((e12939 instanceof Object)){
var ex__5818__auto__ = e12939;
var statearr_12940_12958 = state_12912;
(statearr_12940_12958[(5)] = ex__5818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12959 = state_12912;
state_12912 = G__12959;
continue;
} else {
return ret_value__5816__auto__;
}
break;
}
});
state_machine__5815__auto__ = function(state_12912){
switch(arguments.length){
case 0:
return state_machine__5815__auto____0.call(this);
case 1:
return state_machine__5815__auto____1.call(this,state_12912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5815__auto____0;
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5815__auto____1;
return state_machine__5815__auto__;
})()
;})(switch__5814__auto__,c__5829__auto___12942,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__5831__auto__ = (function (){var statearr_12941 = f__5830__auto__.call(null);
(statearr_12941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5829__auto___12942);

return statearr_12941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5831__auto__);
});})(c__5829__auto___12942,chs__$1,out,cnt,rets,dchan,dctr,done))
);


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
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__5829__auto___13067 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5829__auto___13067,out){
return (function (){
var f__5830__auto__ = (function (){var switch__5814__auto__ = ((function (c__5829__auto___13067,out){
return (function (state_13043){
var state_val_13044 = (state_13043[(1)]);
if((state_val_13044 === (7))){
var inst_13023 = (state_13043[(7)]);
var inst_13022 = (state_13043[(8)]);
var inst_13022__$1 = (state_13043[(2)]);
var inst_13023__$1 = cljs.core.nth.call(null,inst_13022__$1,(0),null);
var inst_13024 = cljs.core.nth.call(null,inst_13022__$1,(1),null);
var inst_13025 = (inst_13023__$1 == null);
var state_13043__$1 = (function (){var statearr_13045 = state_13043;
(statearr_13045[(7)] = inst_13023__$1);

(statearr_13045[(8)] = inst_13022__$1);

(statearr_13045[(9)] = inst_13024);

return statearr_13045;
})();
if(cljs.core.truth_(inst_13025)){
var statearr_13046_13068 = state_13043__$1;
(statearr_13046_13068[(1)] = (8));

} else {
var statearr_13047_13069 = state_13043__$1;
(statearr_13047_13069[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13044 === (1))){
var inst_13014 = cljs.core.vec.call(null,chs);
var inst_13015 = inst_13014;
var state_13043__$1 = (function (){var statearr_13048 = state_13043;
(statearr_13048[(10)] = inst_13015);

return statearr_13048;
})();
var statearr_13049_13070 = state_13043__$1;
(statearr_13049_13070[(2)] = null);

(statearr_13049_13070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13044 === (4))){
var inst_13015 = (state_13043[(10)]);
var state_13043__$1 = state_13043;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13043__$1,(7),inst_13015);
} else {
if((state_val_13044 === (6))){
var inst_13039 = (state_13043[(2)]);
var state_13043__$1 = state_13043;
var statearr_13050_13071 = state_13043__$1;
(statearr_13050_13071[(2)] = inst_13039);

(statearr_13050_13071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13044 === (3))){
var inst_13041 = (state_13043[(2)]);
var state_13043__$1 = state_13043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13043__$1,inst_13041);
} else {
if((state_val_13044 === (2))){
var inst_13015 = (state_13043[(10)]);
var inst_13017 = cljs.core.count.call(null,inst_13015);
var inst_13018 = (inst_13017 > (0));
var state_13043__$1 = state_13043;
if(cljs.core.truth_(inst_13018)){
var statearr_13052_13072 = state_13043__$1;
(statearr_13052_13072[(1)] = (4));

} else {
var statearr_13053_13073 = state_13043__$1;
(statearr_13053_13073[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13044 === (11))){
var inst_13015 = (state_13043[(10)]);
var inst_13032 = (state_13043[(2)]);
var tmp13051 = inst_13015;
var inst_13015__$1 = tmp13051;
var state_13043__$1 = (function (){var statearr_13054 = state_13043;
(statearr_13054[(10)] = inst_13015__$1);

(statearr_13054[(11)] = inst_13032);

return statearr_13054;
})();
var statearr_13055_13074 = state_13043__$1;
(statearr_13055_13074[(2)] = null);

(statearr_13055_13074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13044 === (9))){
var inst_13023 = (state_13043[(7)]);
var state_13043__$1 = state_13043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13043__$1,(11),out,inst_13023);
} else {
if((state_val_13044 === (5))){
var inst_13037 = cljs.core.async.close_BANG_.call(null,out);
var state_13043__$1 = state_13043;
var statearr_13056_13075 = state_13043__$1;
(statearr_13056_13075[(2)] = inst_13037);

(statearr_13056_13075[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13044 === (10))){
var inst_13035 = (state_13043[(2)]);
var state_13043__$1 = state_13043;
var statearr_13057_13076 = state_13043__$1;
(statearr_13057_13076[(2)] = inst_13035);

(statearr_13057_13076[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13044 === (8))){
var inst_13015 = (state_13043[(10)]);
var inst_13023 = (state_13043[(7)]);
var inst_13022 = (state_13043[(8)]);
var inst_13024 = (state_13043[(9)]);
var inst_13027 = (function (){var c = inst_13024;
var v = inst_13023;
var vec__13020 = inst_13022;
var cs = inst_13015;
return ((function (c,v,vec__13020,cs,inst_13015,inst_13023,inst_13022,inst_13024,state_val_13044,c__5829__auto___13067,out){
return (function (p1__12960_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__12960_SHARP_);
});
;})(c,v,vec__13020,cs,inst_13015,inst_13023,inst_13022,inst_13024,state_val_13044,c__5829__auto___13067,out))
})();
var inst_13028 = cljs.core.filterv.call(null,inst_13027,inst_13015);
var inst_13015__$1 = inst_13028;
var state_13043__$1 = (function (){var statearr_13058 = state_13043;
(statearr_13058[(10)] = inst_13015__$1);

return statearr_13058;
})();
var statearr_13059_13077 = state_13043__$1;
(statearr_13059_13077[(2)] = null);

(statearr_13059_13077[(1)] = (2));


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
}
}
}
}
});})(c__5829__auto___13067,out))
;
return ((function (switch__5814__auto__,c__5829__auto___13067,out){
return (function() {
var state_machine__5815__auto__ = null;
var state_machine__5815__auto____0 = (function (){
var statearr_13063 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13063[(0)] = state_machine__5815__auto__);

(statearr_13063[(1)] = (1));

return statearr_13063;
});
var state_machine__5815__auto____1 = (function (state_13043){
while(true){
var ret_value__5816__auto__ = (function (){try{while(true){
var result__5817__auto__ = switch__5814__auto__.call(null,state_13043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5817__auto__;
}
break;
}
}catch (e13064){if((e13064 instanceof Object)){
var ex__5818__auto__ = e13064;
var statearr_13065_13078 = state_13043;
(statearr_13065_13078[(5)] = ex__5818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13079 = state_13043;
state_13043 = G__13079;
continue;
} else {
return ret_value__5816__auto__;
}
break;
}
});
state_machine__5815__auto__ = function(state_13043){
switch(arguments.length){
case 0:
return state_machine__5815__auto____0.call(this);
case 1:
return state_machine__5815__auto____1.call(this,state_13043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5815__auto____0;
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5815__auto____1;
return state_machine__5815__auto__;
})()
;})(switch__5814__auto__,c__5829__auto___13067,out))
})();
var state__5831__auto__ = (function (){var statearr_13066 = f__5830__auto__.call(null);
(statearr_13066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5829__auto___13067);

return statearr_13066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5831__auto__);
});})(c__5829__auto___13067,out))
);


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
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__5829__auto___13172 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5829__auto___13172,out){
return (function (){
var f__5830__auto__ = (function (){var switch__5814__auto__ = ((function (c__5829__auto___13172,out){
return (function (state_13149){
var state_val_13150 = (state_13149[(1)]);
if((state_val_13150 === (7))){
var inst_13131 = (state_13149[(7)]);
var inst_13131__$1 = (state_13149[(2)]);
var inst_13132 = (inst_13131__$1 == null);
var inst_13133 = cljs.core.not.call(null,inst_13132);
var state_13149__$1 = (function (){var statearr_13151 = state_13149;
(statearr_13151[(7)] = inst_13131__$1);

return statearr_13151;
})();
if(inst_13133){
var statearr_13152_13173 = state_13149__$1;
(statearr_13152_13173[(1)] = (8));

} else {
var statearr_13153_13174 = state_13149__$1;
(statearr_13153_13174[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13150 === (1))){
var inst_13126 = (0);
var state_13149__$1 = (function (){var statearr_13154 = state_13149;
(statearr_13154[(8)] = inst_13126);

return statearr_13154;
})();
var statearr_13155_13175 = state_13149__$1;
(statearr_13155_13175[(2)] = null);

(statearr_13155_13175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13150 === (4))){
var state_13149__$1 = state_13149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13149__$1,(7),ch);
} else {
if((state_val_13150 === (6))){
var inst_13144 = (state_13149[(2)]);
var state_13149__$1 = state_13149;
var statearr_13156_13176 = state_13149__$1;
(statearr_13156_13176[(2)] = inst_13144);

(statearr_13156_13176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13150 === (3))){
var inst_13146 = (state_13149[(2)]);
var inst_13147 = cljs.core.async.close_BANG_.call(null,out);
var state_13149__$1 = (function (){var statearr_13157 = state_13149;
(statearr_13157[(9)] = inst_13146);

return statearr_13157;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13149__$1,inst_13147);
} else {
if((state_val_13150 === (2))){
var inst_13126 = (state_13149[(8)]);
var inst_13128 = (inst_13126 < n);
var state_13149__$1 = state_13149;
if(cljs.core.truth_(inst_13128)){
var statearr_13158_13177 = state_13149__$1;
(statearr_13158_13177[(1)] = (4));

} else {
var statearr_13159_13178 = state_13149__$1;
(statearr_13159_13178[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13150 === (11))){
var inst_13126 = (state_13149[(8)]);
var inst_13136 = (state_13149[(2)]);
var inst_13137 = (inst_13126 + (1));
var inst_13126__$1 = inst_13137;
var state_13149__$1 = (function (){var statearr_13160 = state_13149;
(statearr_13160[(10)] = inst_13136);

(statearr_13160[(8)] = inst_13126__$1);

return statearr_13160;
})();
var statearr_13161_13179 = state_13149__$1;
(statearr_13161_13179[(2)] = null);

(statearr_13161_13179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13150 === (9))){
var state_13149__$1 = state_13149;
var statearr_13162_13180 = state_13149__$1;
(statearr_13162_13180[(2)] = null);

(statearr_13162_13180[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13150 === (5))){
var state_13149__$1 = state_13149;
var statearr_13163_13181 = state_13149__$1;
(statearr_13163_13181[(2)] = null);

(statearr_13163_13181[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13150 === (10))){
var inst_13141 = (state_13149[(2)]);
var state_13149__$1 = state_13149;
var statearr_13164_13182 = state_13149__$1;
(statearr_13164_13182[(2)] = inst_13141);

(statearr_13164_13182[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13150 === (8))){
var inst_13131 = (state_13149[(7)]);
var state_13149__$1 = state_13149;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13149__$1,(11),out,inst_13131);
} else {
return null;
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
});})(c__5829__auto___13172,out))
;
return ((function (switch__5814__auto__,c__5829__auto___13172,out){
return (function() {
var state_machine__5815__auto__ = null;
var state_machine__5815__auto____0 = (function (){
var statearr_13168 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13168[(0)] = state_machine__5815__auto__);

(statearr_13168[(1)] = (1));

return statearr_13168;
});
var state_machine__5815__auto____1 = (function (state_13149){
while(true){
var ret_value__5816__auto__ = (function (){try{while(true){
var result__5817__auto__ = switch__5814__auto__.call(null,state_13149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5817__auto__;
}
break;
}
}catch (e13169){if((e13169 instanceof Object)){
var ex__5818__auto__ = e13169;
var statearr_13170_13183 = state_13149;
(statearr_13170_13183[(5)] = ex__5818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13184 = state_13149;
state_13149 = G__13184;
continue;
} else {
return ret_value__5816__auto__;
}
break;
}
});
state_machine__5815__auto__ = function(state_13149){
switch(arguments.length){
case 0:
return state_machine__5815__auto____0.call(this);
case 1:
return state_machine__5815__auto____1.call(this,state_13149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5815__auto____0;
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5815__auto____1;
return state_machine__5815__auto__;
})()
;})(switch__5814__auto__,c__5829__auto___13172,out))
})();
var state__5831__auto__ = (function (){var statearr_13171 = f__5830__auto__.call(null);
(statearr_13171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5829__auto___13172);

return statearr_13171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5831__auto__);
});})(c__5829__auto___13172,out))
);


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
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t13192 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13192 = (function (ch,f,map_LT_,meta13193){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13193 = meta13193;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13192.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t13192.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t13192.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t13192.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t13195 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13195 = (function (fn1,_,meta13193,map_LT_,f,ch,meta13196){
this.fn1 = fn1;
this._ = _;
this.meta13193 = meta13193;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta13196 = meta13196;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13195.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13195.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t13195.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__13185_SHARP_){
return f1.call(null,(((p1__13185_SHARP_ == null))?null:self__.f.call(null,p1__13185_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t13195.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_13197){
var self__ = this;
var _13197__$1 = this;
return self__.meta13196;
});})(___$1))
;

cljs.core.async.t13195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_13197,meta13196__$1){
var self__ = this;
var _13197__$1 = this;
return (new cljs.core.async.t13195(self__.fn1,self__._,self__.meta13193,self__.map_LT_,self__.f,self__.ch,meta13196__$1));
});})(___$1))
;

cljs.core.async.t13195.cljs$lang$type = true;

cljs.core.async.t13195.cljs$lang$ctorStr = "cljs.core.async/t13195";

cljs.core.async.t13195.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4210__auto__,writer__4211__auto__,opt__4212__auto__){
return cljs.core._write.call(null,writer__4211__auto__,"cljs.core.async/t13195");
});})(___$1))
;

cljs.core.async.__GT_t13195 = ((function (___$1){
return (function __GT_t13195(fn1__$1,___$2,meta13193__$1,map_LT___$1,f__$1,ch__$1,meta13196){
return (new cljs.core.async.t13195(fn1__$1,___$2,meta13193__$1,map_LT___$1,f__$1,ch__$1,meta13196));
});})(___$1))
;

}

return (new cljs.core.async.t13195(fn1,___$1,self__.meta13193,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/henrik/Documents/Projects/Programming/reactive/resources/public/js/output/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3616__auto__ = ret;
if(cljs.core.truth_(and__3616__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3616__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t13192.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t13192.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t13192.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t13192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13194){
var self__ = this;
var _13194__$1 = this;
return self__.meta13193;
});

cljs.core.async.t13192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13194,meta13193__$1){
var self__ = this;
var _13194__$1 = this;
return (new cljs.core.async.t13192(self__.ch,self__.f,self__.map_LT_,meta13193__$1));
});

cljs.core.async.t13192.cljs$lang$type = true;

cljs.core.async.t13192.cljs$lang$ctorStr = "cljs.core.async/t13192";

cljs.core.async.t13192.cljs$lang$ctorPrWriter = (function (this__4210__auto__,writer__4211__auto__,opt__4212__auto__){
return cljs.core._write.call(null,writer__4211__auto__,"cljs.core.async/t13192");
});

cljs.core.async.__GT_t13192 = (function __GT_t13192(ch__$1,f__$1,map_LT___$1,meta13193){
return (new cljs.core.async.t13192(ch__$1,f__$1,map_LT___$1,meta13193));
});

}

return (new cljs.core.async.t13192(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/henrik/Documents/Projects/Programming/reactive/resources/public/js/output/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t13201 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13201 = (function (ch,f,map_GT_,meta13202){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13202 = meta13202;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13201.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t13201.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t13201.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t13201.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t13201.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t13201.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t13201.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13203){
var self__ = this;
var _13203__$1 = this;
return self__.meta13202;
});

cljs.core.async.t13201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13203,meta13202__$1){
var self__ = this;
var _13203__$1 = this;
return (new cljs.core.async.t13201(self__.ch,self__.f,self__.map_GT_,meta13202__$1));
});

cljs.core.async.t13201.cljs$lang$type = true;

cljs.core.async.t13201.cljs$lang$ctorStr = "cljs.core.async/t13201";

cljs.core.async.t13201.cljs$lang$ctorPrWriter = (function (this__4210__auto__,writer__4211__auto__,opt__4212__auto__){
return cljs.core._write.call(null,writer__4211__auto__,"cljs.core.async/t13201");
});

cljs.core.async.__GT_t13201 = (function __GT_t13201(ch__$1,f__$1,map_GT___$1,meta13202){
return (new cljs.core.async.t13201(ch__$1,f__$1,map_GT___$1,meta13202));
});

}

return (new cljs.core.async.t13201(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/henrik/Documents/Projects/Programming/reactive/resources/public/js/output/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t13207 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13207 = (function (ch,p,filter_GT_,meta13208){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13208 = meta13208;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13207.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t13207.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t13207.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t13207.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t13207.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t13207.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t13207.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t13207.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13209){
var self__ = this;
var _13209__$1 = this;
return self__.meta13208;
});

cljs.core.async.t13207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13209,meta13208__$1){
var self__ = this;
var _13209__$1 = this;
return (new cljs.core.async.t13207(self__.ch,self__.p,self__.filter_GT_,meta13208__$1));
});

cljs.core.async.t13207.cljs$lang$type = true;

cljs.core.async.t13207.cljs$lang$ctorStr = "cljs.core.async/t13207";

cljs.core.async.t13207.cljs$lang$ctorPrWriter = (function (this__4210__auto__,writer__4211__auto__,opt__4212__auto__){
return cljs.core._write.call(null,writer__4211__auto__,"cljs.core.async/t13207");
});

cljs.core.async.__GT_t13207 = (function __GT_t13207(ch__$1,p__$1,filter_GT___$1,meta13208){
return (new cljs.core.async.t13207(ch__$1,p__$1,filter_GT___$1,meta13208));
});

}

return (new cljs.core.async.t13207(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/henrik/Documents/Projects/Programming/reactive/resources/public/js/output/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__5829__auto___13292 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5829__auto___13292,out){
return (function (){
var f__5830__auto__ = (function (){var switch__5814__auto__ = ((function (c__5829__auto___13292,out){
return (function (state_13271){
var state_val_13272 = (state_13271[(1)]);
if((state_val_13272 === (7))){
var inst_13267 = (state_13271[(2)]);
var state_13271__$1 = state_13271;
var statearr_13273_13293 = state_13271__$1;
(statearr_13273_13293[(2)] = inst_13267);

(statearr_13273_13293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13272 === (1))){
var state_13271__$1 = state_13271;
var statearr_13274_13294 = state_13271__$1;
(statearr_13274_13294[(2)] = null);

(statearr_13274_13294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13272 === (4))){
var inst_13253 = (state_13271[(7)]);
var inst_13253__$1 = (state_13271[(2)]);
var inst_13254 = (inst_13253__$1 == null);
var state_13271__$1 = (function (){var statearr_13275 = state_13271;
(statearr_13275[(7)] = inst_13253__$1);

return statearr_13275;
})();
if(cljs.core.truth_(inst_13254)){
var statearr_13276_13295 = state_13271__$1;
(statearr_13276_13295[(1)] = (5));

} else {
var statearr_13277_13296 = state_13271__$1;
(statearr_13277_13296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13272 === (6))){
var inst_13253 = (state_13271[(7)]);
var inst_13258 = p.call(null,inst_13253);
var state_13271__$1 = state_13271;
if(cljs.core.truth_(inst_13258)){
var statearr_13278_13297 = state_13271__$1;
(statearr_13278_13297[(1)] = (8));

} else {
var statearr_13279_13298 = state_13271__$1;
(statearr_13279_13298[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13272 === (3))){
var inst_13269 = (state_13271[(2)]);
var state_13271__$1 = state_13271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13271__$1,inst_13269);
} else {
if((state_val_13272 === (2))){
var state_13271__$1 = state_13271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13271__$1,(4),ch);
} else {
if((state_val_13272 === (11))){
var inst_13261 = (state_13271[(2)]);
var state_13271__$1 = state_13271;
var statearr_13280_13299 = state_13271__$1;
(statearr_13280_13299[(2)] = inst_13261);

(statearr_13280_13299[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13272 === (9))){
var state_13271__$1 = state_13271;
var statearr_13281_13300 = state_13271__$1;
(statearr_13281_13300[(2)] = null);

(statearr_13281_13300[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13272 === (5))){
var inst_13256 = cljs.core.async.close_BANG_.call(null,out);
var state_13271__$1 = state_13271;
var statearr_13282_13301 = state_13271__$1;
(statearr_13282_13301[(2)] = inst_13256);

(statearr_13282_13301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13272 === (10))){
var inst_13264 = (state_13271[(2)]);
var state_13271__$1 = (function (){var statearr_13283 = state_13271;
(statearr_13283[(8)] = inst_13264);

return statearr_13283;
})();
var statearr_13284_13302 = state_13271__$1;
(statearr_13284_13302[(2)] = null);

(statearr_13284_13302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13272 === (8))){
var inst_13253 = (state_13271[(7)]);
var state_13271__$1 = state_13271;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13271__$1,(11),out,inst_13253);
} else {
return null;
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
});})(c__5829__auto___13292,out))
;
return ((function (switch__5814__auto__,c__5829__auto___13292,out){
return (function() {
var state_machine__5815__auto__ = null;
var state_machine__5815__auto____0 = (function (){
var statearr_13288 = [null,null,null,null,null,null,null,null,null];
(statearr_13288[(0)] = state_machine__5815__auto__);

(statearr_13288[(1)] = (1));

return statearr_13288;
});
var state_machine__5815__auto____1 = (function (state_13271){
while(true){
var ret_value__5816__auto__ = (function (){try{while(true){
var result__5817__auto__ = switch__5814__auto__.call(null,state_13271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5817__auto__;
}
break;
}
}catch (e13289){if((e13289 instanceof Object)){
var ex__5818__auto__ = e13289;
var statearr_13290_13303 = state_13271;
(statearr_13290_13303[(5)] = ex__5818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13304 = state_13271;
state_13271 = G__13304;
continue;
} else {
return ret_value__5816__auto__;
}
break;
}
});
state_machine__5815__auto__ = function(state_13271){
switch(arguments.length){
case 0:
return state_machine__5815__auto____0.call(this);
case 1:
return state_machine__5815__auto____1.call(this,state_13271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5815__auto____0;
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5815__auto____1;
return state_machine__5815__auto__;
})()
;})(switch__5814__auto__,c__5829__auto___13292,out))
})();
var state__5831__auto__ = (function (){var statearr_13291 = f__5830__auto__.call(null);
(statearr_13291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5829__auto___13292);

return statearr_13291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5831__auto__);
});})(c__5829__auto___13292,out))
);


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
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__5829__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5829__auto__){
return (function (){
var f__5830__auto__ = (function (){var switch__5814__auto__ = ((function (c__5829__auto__){
return (function (state_13470){
var state_val_13471 = (state_13470[(1)]);
if((state_val_13471 === (7))){
var inst_13466 = (state_13470[(2)]);
var state_13470__$1 = state_13470;
var statearr_13472_13513 = state_13470__$1;
(statearr_13472_13513[(2)] = inst_13466);

(statearr_13472_13513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13471 === (20))){
var inst_13436 = (state_13470[(7)]);
var inst_13447 = (state_13470[(2)]);
var inst_13448 = cljs.core.next.call(null,inst_13436);
var inst_13422 = inst_13448;
var inst_13423 = null;
var inst_13424 = (0);
var inst_13425 = (0);
var state_13470__$1 = (function (){var statearr_13473 = state_13470;
(statearr_13473[(8)] = inst_13423);

(statearr_13473[(9)] = inst_13424);

(statearr_13473[(10)] = inst_13447);

(statearr_13473[(11)] = inst_13425);

(statearr_13473[(12)] = inst_13422);

return statearr_13473;
})();
var statearr_13474_13514 = state_13470__$1;
(statearr_13474_13514[(2)] = null);

(statearr_13474_13514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13471 === (1))){
var state_13470__$1 = state_13470;
var statearr_13475_13515 = state_13470__$1;
(statearr_13475_13515[(2)] = null);

(statearr_13475_13515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13471 === (4))){
var inst_13411 = (state_13470[(13)]);
var inst_13411__$1 = (state_13470[(2)]);
var inst_13412 = (inst_13411__$1 == null);
var state_13470__$1 = (function (){var statearr_13476 = state_13470;
(statearr_13476[(13)] = inst_13411__$1);

return statearr_13476;
})();
if(cljs.core.truth_(inst_13412)){
var statearr_13477_13516 = state_13470__$1;
(statearr_13477_13516[(1)] = (5));

} else {
var statearr_13478_13517 = state_13470__$1;
(statearr_13478_13517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13471 === (15))){
var state_13470__$1 = state_13470;
var statearr_13482_13518 = state_13470__$1;
(statearr_13482_13518[(2)] = null);

(statearr_13482_13518[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13471 === (21))){
var state_13470__$1 = state_13470;
var statearr_13483_13519 = state_13470__$1;
(statearr_13483_13519[(2)] = null);

(statearr_13483_13519[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13471 === (13))){
var inst_13423 = (state_13470[(8)]);
var inst_13424 = (state_13470[(9)]);
var inst_13425 = (state_13470[(11)]);
var inst_13422 = (state_13470[(12)]);
var inst_13432 = (state_13470[(2)]);
var inst_13433 = (inst_13425 + (1));
var tmp13479 = inst_13423;
var tmp13480 = inst_13424;
var tmp13481 = inst_13422;
var inst_13422__$1 = tmp13481;
var inst_13423__$1 = tmp13479;
var inst_13424__$1 = tmp13480;
var inst_13425__$1 = inst_13433;
var state_13470__$1 = (function (){var statearr_13484 = state_13470;
(statearr_13484[(8)] = inst_13423__$1);

(statearr_13484[(14)] = inst_13432);

(statearr_13484[(9)] = inst_13424__$1);

(statearr_13484[(11)] = inst_13425__$1);

(statearr_13484[(12)] = inst_13422__$1);

return statearr_13484;
})();
var statearr_13485_13520 = state_13470__$1;
(statearr_13485_13520[(2)] = null);

(statearr_13485_13520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13471 === (22))){
var state_13470__$1 = state_13470;
var statearr_13486_13521 = state_13470__$1;
(statearr_13486_13521[(2)] = null);

(statearr_13486_13521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13471 === (6))){
var inst_13411 = (state_13470[(13)]);
var inst_13420 = f.call(null,inst_13411);
var inst_13421 = cljs.core.seq.call(null,inst_13420);
var inst_13422 = inst_13421;
var inst_13423 = null;
var inst_13424 = (0);
var inst_13425 = (0);
var state_13470__$1 = (function (){var statearr_13487 = state_13470;
(statearr_13487[(8)] = inst_13423);

(statearr_13487[(9)] = inst_13424);

(statearr_13487[(11)] = inst_13425);

(statearr_13487[(12)] = inst_13422);

return statearr_13487;
})();
var statearr_13488_13522 = state_13470__$1;
(statearr_13488_13522[(2)] = null);

(statearr_13488_13522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13471 === (17))){
var inst_13436 = (state_13470[(7)]);
var inst_13440 = cljs.core.chunk_first.call(null,inst_13436);
var inst_13441 = cljs.core.chunk_rest.call(null,inst_13436);
var inst_13442 = cljs.core.count.call(null,inst_13440);
var inst_13422 = inst_13441;
var inst_13423 = inst_13440;
var inst_13424 = inst_13442;
var inst_13425 = (0);
var state_13470__$1 = (function (){var statearr_13489 = state_13470;
(statearr_13489[(8)] = inst_13423);

(statearr_13489[(9)] = inst_13424);

(statearr_13489[(11)] = inst_13425);

(statearr_13489[(12)] = inst_13422);

return statearr_13489;
})();
var statearr_13490_13523 = state_13470__$1;
(statearr_13490_13523[(2)] = null);

(statearr_13490_13523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13471 === (3))){
var inst_13468 = (state_13470[(2)]);
var state_13470__$1 = state_13470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13470__$1,inst_13468);
} else {
if((state_val_13471 === (12))){
var inst_13456 = (state_13470[(2)]);
var state_13470__$1 = state_13470;
var statearr_13491_13524 = state_13470__$1;
(statearr_13491_13524[(2)] = inst_13456);

(statearr_13491_13524[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13471 === (2))){
var state_13470__$1 = state_13470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13470__$1,(4),in$);
} else {
if((state_val_13471 === (23))){
var inst_13464 = (state_13470[(2)]);
var state_13470__$1 = state_13470;
var statearr_13492_13525 = state_13470__$1;
(statearr_13492_13525[(2)] = inst_13464);

(statearr_13492_13525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13471 === (19))){
var inst_13451 = (state_13470[(2)]);
var state_13470__$1 = state_13470;
var statearr_13493_13526 = state_13470__$1;
(statearr_13493_13526[(2)] = inst_13451);

(statearr_13493_13526[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13471 === (11))){
var inst_13436 = (state_13470[(7)]);
var inst_13422 = (state_13470[(12)]);
var inst_13436__$1 = cljs.core.seq.call(null,inst_13422);
var state_13470__$1 = (function (){var statearr_13494 = state_13470;
(statearr_13494[(7)] = inst_13436__$1);

return statearr_13494;
})();
if(inst_13436__$1){
var statearr_13495_13527 = state_13470__$1;
(statearr_13495_13527[(1)] = (14));

} else {
var statearr_13496_13528 = state_13470__$1;
(statearr_13496_13528[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13471 === (9))){
var inst_13458 = (state_13470[(2)]);
var inst_13459 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_13470__$1 = (function (){var statearr_13497 = state_13470;
(statearr_13497[(15)] = inst_13458);

return statearr_13497;
})();
if(cljs.core.truth_(inst_13459)){
var statearr_13498_13529 = state_13470__$1;
(statearr_13498_13529[(1)] = (21));

} else {
var statearr_13499_13530 = state_13470__$1;
(statearr_13499_13530[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13471 === (5))){
var inst_13414 = cljs.core.async.close_BANG_.call(null,out);
var state_13470__$1 = state_13470;
var statearr_13500_13531 = state_13470__$1;
(statearr_13500_13531[(2)] = inst_13414);

(statearr_13500_13531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13471 === (14))){
var inst_13436 = (state_13470[(7)]);
var inst_13438 = cljs.core.chunked_seq_QMARK_.call(null,inst_13436);
var state_13470__$1 = state_13470;
if(inst_13438){
var statearr_13501_13532 = state_13470__$1;
(statearr_13501_13532[(1)] = (17));

} else {
var statearr_13502_13533 = state_13470__$1;
(statearr_13502_13533[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13471 === (16))){
var inst_13454 = (state_13470[(2)]);
var state_13470__$1 = state_13470;
var statearr_13503_13534 = state_13470__$1;
(statearr_13503_13534[(2)] = inst_13454);

(statearr_13503_13534[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13471 === (10))){
var inst_13423 = (state_13470[(8)]);
var inst_13425 = (state_13470[(11)]);
var inst_13430 = cljs.core._nth.call(null,inst_13423,inst_13425);
var state_13470__$1 = state_13470;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13470__$1,(13),out,inst_13430);
} else {
if((state_val_13471 === (18))){
var inst_13436 = (state_13470[(7)]);
var inst_13445 = cljs.core.first.call(null,inst_13436);
var state_13470__$1 = state_13470;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13470__$1,(20),out,inst_13445);
} else {
if((state_val_13471 === (8))){
var inst_13424 = (state_13470[(9)]);
var inst_13425 = (state_13470[(11)]);
var inst_13427 = (inst_13425 < inst_13424);
var inst_13428 = inst_13427;
var state_13470__$1 = state_13470;
if(cljs.core.truth_(inst_13428)){
var statearr_13504_13535 = state_13470__$1;
(statearr_13504_13535[(1)] = (10));

} else {
var statearr_13505_13536 = state_13470__$1;
(statearr_13505_13536[(1)] = (11));

}

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
});})(c__5829__auto__))
;
return ((function (switch__5814__auto__,c__5829__auto__){
return (function() {
var state_machine__5815__auto__ = null;
var state_machine__5815__auto____0 = (function (){
var statearr_13509 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13509[(0)] = state_machine__5815__auto__);

(statearr_13509[(1)] = (1));

return statearr_13509;
});
var state_machine__5815__auto____1 = (function (state_13470){
while(true){
var ret_value__5816__auto__ = (function (){try{while(true){
var result__5817__auto__ = switch__5814__auto__.call(null,state_13470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5817__auto__;
}
break;
}
}catch (e13510){if((e13510 instanceof Object)){
var ex__5818__auto__ = e13510;
var statearr_13511_13537 = state_13470;
(statearr_13511_13537[(5)] = ex__5818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13538 = state_13470;
state_13470 = G__13538;
continue;
} else {
return ret_value__5816__auto__;
}
break;
}
});
state_machine__5815__auto__ = function(state_13470){
switch(arguments.length){
case 0:
return state_machine__5815__auto____0.call(this);
case 1:
return state_machine__5815__auto____1.call(this,state_13470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5815__auto____0;
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5815__auto____1;
return state_machine__5815__auto__;
})()
;})(switch__5814__auto__,c__5829__auto__))
})();
var state__5831__auto__ = (function (){var statearr_13512 = f__5830__auto__.call(null);
(statearr_13512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5829__auto__);

return statearr_13512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5831__auto__);
});})(c__5829__auto__))
);

return c__5829__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

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
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

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
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__5829__auto___13635 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5829__auto___13635,out){
return (function (){
var f__5830__auto__ = (function (){var switch__5814__auto__ = ((function (c__5829__auto___13635,out){
return (function (state_13610){
var state_val_13611 = (state_13610[(1)]);
if((state_val_13611 === (7))){
var inst_13605 = (state_13610[(2)]);
var state_13610__$1 = state_13610;
var statearr_13612_13636 = state_13610__$1;
(statearr_13612_13636[(2)] = inst_13605);

(statearr_13612_13636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13611 === (1))){
var inst_13587 = null;
var state_13610__$1 = (function (){var statearr_13613 = state_13610;
(statearr_13613[(7)] = inst_13587);

return statearr_13613;
})();
var statearr_13614_13637 = state_13610__$1;
(statearr_13614_13637[(2)] = null);

(statearr_13614_13637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13611 === (4))){
var inst_13590 = (state_13610[(8)]);
var inst_13590__$1 = (state_13610[(2)]);
var inst_13591 = (inst_13590__$1 == null);
var inst_13592 = cljs.core.not.call(null,inst_13591);
var state_13610__$1 = (function (){var statearr_13615 = state_13610;
(statearr_13615[(8)] = inst_13590__$1);

return statearr_13615;
})();
if(inst_13592){
var statearr_13616_13638 = state_13610__$1;
(statearr_13616_13638[(1)] = (5));

} else {
var statearr_13617_13639 = state_13610__$1;
(statearr_13617_13639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13611 === (6))){
var state_13610__$1 = state_13610;
var statearr_13618_13640 = state_13610__$1;
(statearr_13618_13640[(2)] = null);

(statearr_13618_13640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13611 === (3))){
var inst_13607 = (state_13610[(2)]);
var inst_13608 = cljs.core.async.close_BANG_.call(null,out);
var state_13610__$1 = (function (){var statearr_13619 = state_13610;
(statearr_13619[(9)] = inst_13607);

return statearr_13619;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13610__$1,inst_13608);
} else {
if((state_val_13611 === (2))){
var state_13610__$1 = state_13610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13610__$1,(4),ch);
} else {
if((state_val_13611 === (11))){
var inst_13590 = (state_13610[(8)]);
var inst_13599 = (state_13610[(2)]);
var inst_13587 = inst_13590;
var state_13610__$1 = (function (){var statearr_13620 = state_13610;
(statearr_13620[(10)] = inst_13599);

(statearr_13620[(7)] = inst_13587);

return statearr_13620;
})();
var statearr_13621_13641 = state_13610__$1;
(statearr_13621_13641[(2)] = null);

(statearr_13621_13641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13611 === (9))){
var inst_13590 = (state_13610[(8)]);
var state_13610__$1 = state_13610;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13610__$1,(11),out,inst_13590);
} else {
if((state_val_13611 === (5))){
var inst_13590 = (state_13610[(8)]);
var inst_13587 = (state_13610[(7)]);
var inst_13594 = cljs.core._EQ_.call(null,inst_13590,inst_13587);
var state_13610__$1 = state_13610;
if(inst_13594){
var statearr_13623_13642 = state_13610__$1;
(statearr_13623_13642[(1)] = (8));

} else {
var statearr_13624_13643 = state_13610__$1;
(statearr_13624_13643[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13611 === (10))){
var inst_13602 = (state_13610[(2)]);
var state_13610__$1 = state_13610;
var statearr_13625_13644 = state_13610__$1;
(statearr_13625_13644[(2)] = inst_13602);

(statearr_13625_13644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13611 === (8))){
var inst_13587 = (state_13610[(7)]);
var tmp13622 = inst_13587;
var inst_13587__$1 = tmp13622;
var state_13610__$1 = (function (){var statearr_13626 = state_13610;
(statearr_13626[(7)] = inst_13587__$1);

return statearr_13626;
})();
var statearr_13627_13645 = state_13610__$1;
(statearr_13627_13645[(2)] = null);

(statearr_13627_13645[(1)] = (2));


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
}
}
}
}
});})(c__5829__auto___13635,out))
;
return ((function (switch__5814__auto__,c__5829__auto___13635,out){
return (function() {
var state_machine__5815__auto__ = null;
var state_machine__5815__auto____0 = (function (){
var statearr_13631 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13631[(0)] = state_machine__5815__auto__);

(statearr_13631[(1)] = (1));

return statearr_13631;
});
var state_machine__5815__auto____1 = (function (state_13610){
while(true){
var ret_value__5816__auto__ = (function (){try{while(true){
var result__5817__auto__ = switch__5814__auto__.call(null,state_13610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5817__auto__;
}
break;
}
}catch (e13632){if((e13632 instanceof Object)){
var ex__5818__auto__ = e13632;
var statearr_13633_13646 = state_13610;
(statearr_13633_13646[(5)] = ex__5818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13647 = state_13610;
state_13610 = G__13647;
continue;
} else {
return ret_value__5816__auto__;
}
break;
}
});
state_machine__5815__auto__ = function(state_13610){
switch(arguments.length){
case 0:
return state_machine__5815__auto____0.call(this);
case 1:
return state_machine__5815__auto____1.call(this,state_13610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5815__auto____0;
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5815__auto____1;
return state_machine__5815__auto__;
})()
;})(switch__5814__auto__,c__5829__auto___13635,out))
})();
var state__5831__auto__ = (function (){var statearr_13634 = f__5830__auto__.call(null);
(statearr_13634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5829__auto___13635);

return statearr_13634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5831__auto__);
});})(c__5829__auto___13635,out))
);


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
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__5829__auto___13782 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5829__auto___13782,out){
return (function (){
var f__5830__auto__ = (function (){var switch__5814__auto__ = ((function (c__5829__auto___13782,out){
return (function (state_13752){
var state_val_13753 = (state_13752[(1)]);
if((state_val_13753 === (7))){
var inst_13748 = (state_13752[(2)]);
var state_13752__$1 = state_13752;
var statearr_13754_13783 = state_13752__$1;
(statearr_13754_13783[(2)] = inst_13748);

(statearr_13754_13783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13753 === (1))){
var inst_13715 = (new Array(n));
var inst_13716 = inst_13715;
var inst_13717 = (0);
var state_13752__$1 = (function (){var statearr_13755 = state_13752;
(statearr_13755[(7)] = inst_13717);

(statearr_13755[(8)] = inst_13716);

return statearr_13755;
})();
var statearr_13756_13784 = state_13752__$1;
(statearr_13756_13784[(2)] = null);

(statearr_13756_13784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13753 === (4))){
var inst_13720 = (state_13752[(9)]);
var inst_13720__$1 = (state_13752[(2)]);
var inst_13721 = (inst_13720__$1 == null);
var inst_13722 = cljs.core.not.call(null,inst_13721);
var state_13752__$1 = (function (){var statearr_13757 = state_13752;
(statearr_13757[(9)] = inst_13720__$1);

return statearr_13757;
})();
if(inst_13722){
var statearr_13758_13785 = state_13752__$1;
(statearr_13758_13785[(1)] = (5));

} else {
var statearr_13759_13786 = state_13752__$1;
(statearr_13759_13786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13753 === (15))){
var inst_13742 = (state_13752[(2)]);
var state_13752__$1 = state_13752;
var statearr_13760_13787 = state_13752__$1;
(statearr_13760_13787[(2)] = inst_13742);

(statearr_13760_13787[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13753 === (13))){
var state_13752__$1 = state_13752;
var statearr_13761_13788 = state_13752__$1;
(statearr_13761_13788[(2)] = null);

(statearr_13761_13788[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13753 === (6))){
var inst_13717 = (state_13752[(7)]);
var inst_13738 = (inst_13717 > (0));
var state_13752__$1 = state_13752;
if(cljs.core.truth_(inst_13738)){
var statearr_13762_13789 = state_13752__$1;
(statearr_13762_13789[(1)] = (12));

} else {
var statearr_13763_13790 = state_13752__$1;
(statearr_13763_13790[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13753 === (3))){
var inst_13750 = (state_13752[(2)]);
var state_13752__$1 = state_13752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13752__$1,inst_13750);
} else {
if((state_val_13753 === (12))){
var inst_13716 = (state_13752[(8)]);
var inst_13740 = cljs.core.vec.call(null,inst_13716);
var state_13752__$1 = state_13752;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13752__$1,(15),out,inst_13740);
} else {
if((state_val_13753 === (2))){
var state_13752__$1 = state_13752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13752__$1,(4),ch);
} else {
if((state_val_13753 === (11))){
var inst_13732 = (state_13752[(2)]);
var inst_13733 = (new Array(n));
var inst_13716 = inst_13733;
var inst_13717 = (0);
var state_13752__$1 = (function (){var statearr_13764 = state_13752;
(statearr_13764[(7)] = inst_13717);

(statearr_13764[(8)] = inst_13716);

(statearr_13764[(10)] = inst_13732);

return statearr_13764;
})();
var statearr_13765_13791 = state_13752__$1;
(statearr_13765_13791[(2)] = null);

(statearr_13765_13791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13753 === (9))){
var inst_13716 = (state_13752[(8)]);
var inst_13730 = cljs.core.vec.call(null,inst_13716);
var state_13752__$1 = state_13752;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13752__$1,(11),out,inst_13730);
} else {
if((state_val_13753 === (5))){
var inst_13717 = (state_13752[(7)]);
var inst_13720 = (state_13752[(9)]);
var inst_13716 = (state_13752[(8)]);
var inst_13725 = (state_13752[(11)]);
var inst_13724 = (inst_13716[inst_13717] = inst_13720);
var inst_13725__$1 = (inst_13717 + (1));
var inst_13726 = (inst_13725__$1 < n);
var state_13752__$1 = (function (){var statearr_13766 = state_13752;
(statearr_13766[(12)] = inst_13724);

(statearr_13766[(11)] = inst_13725__$1);

return statearr_13766;
})();
if(cljs.core.truth_(inst_13726)){
var statearr_13767_13792 = state_13752__$1;
(statearr_13767_13792[(1)] = (8));

} else {
var statearr_13768_13793 = state_13752__$1;
(statearr_13768_13793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13753 === (14))){
var inst_13745 = (state_13752[(2)]);
var inst_13746 = cljs.core.async.close_BANG_.call(null,out);
var state_13752__$1 = (function (){var statearr_13770 = state_13752;
(statearr_13770[(13)] = inst_13745);

return statearr_13770;
})();
var statearr_13771_13794 = state_13752__$1;
(statearr_13771_13794[(2)] = inst_13746);

(statearr_13771_13794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13753 === (10))){
var inst_13736 = (state_13752[(2)]);
var state_13752__$1 = state_13752;
var statearr_13772_13795 = state_13752__$1;
(statearr_13772_13795[(2)] = inst_13736);

(statearr_13772_13795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13753 === (8))){
var inst_13716 = (state_13752[(8)]);
var inst_13725 = (state_13752[(11)]);
var tmp13769 = inst_13716;
var inst_13716__$1 = tmp13769;
var inst_13717 = inst_13725;
var state_13752__$1 = (function (){var statearr_13773 = state_13752;
(statearr_13773[(7)] = inst_13717);

(statearr_13773[(8)] = inst_13716__$1);

return statearr_13773;
})();
var statearr_13774_13796 = state_13752__$1;
(statearr_13774_13796[(2)] = null);

(statearr_13774_13796[(1)] = (2));


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
}
}
}
}
}
}
}
}
});})(c__5829__auto___13782,out))
;
return ((function (switch__5814__auto__,c__5829__auto___13782,out){
return (function() {
var state_machine__5815__auto__ = null;
var state_machine__5815__auto____0 = (function (){
var statearr_13778 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13778[(0)] = state_machine__5815__auto__);

(statearr_13778[(1)] = (1));

return statearr_13778;
});
var state_machine__5815__auto____1 = (function (state_13752){
while(true){
var ret_value__5816__auto__ = (function (){try{while(true){
var result__5817__auto__ = switch__5814__auto__.call(null,state_13752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5817__auto__;
}
break;
}
}catch (e13779){if((e13779 instanceof Object)){
var ex__5818__auto__ = e13779;
var statearr_13780_13797 = state_13752;
(statearr_13780_13797[(5)] = ex__5818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13798 = state_13752;
state_13752 = G__13798;
continue;
} else {
return ret_value__5816__auto__;
}
break;
}
});
state_machine__5815__auto__ = function(state_13752){
switch(arguments.length){
case 0:
return state_machine__5815__auto____0.call(this);
case 1:
return state_machine__5815__auto____1.call(this,state_13752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5815__auto____0;
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5815__auto____1;
return state_machine__5815__auto__;
})()
;})(switch__5814__auto__,c__5829__auto___13782,out))
})();
var state__5831__auto__ = (function (){var statearr_13781 = f__5830__auto__.call(null);
(statearr_13781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5829__auto___13782);

return statearr_13781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5831__auto__);
});})(c__5829__auto___13782,out))
);


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
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__5829__auto___13941 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5829__auto___13941,out){
return (function (){
var f__5830__auto__ = (function (){var switch__5814__auto__ = ((function (c__5829__auto___13941,out){
return (function (state_13911){
var state_val_13912 = (state_13911[(1)]);
if((state_val_13912 === (7))){
var inst_13907 = (state_13911[(2)]);
var state_13911__$1 = state_13911;
var statearr_13913_13942 = state_13911__$1;
(statearr_13913_13942[(2)] = inst_13907);

(statearr_13913_13942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13912 === (1))){
var inst_13870 = [];
var inst_13871 = inst_13870;
var inst_13872 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_13911__$1 = (function (){var statearr_13914 = state_13911;
(statearr_13914[(7)] = inst_13872);

(statearr_13914[(8)] = inst_13871);

return statearr_13914;
})();
var statearr_13915_13943 = state_13911__$1;
(statearr_13915_13943[(2)] = null);

(statearr_13915_13943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13912 === (4))){
var inst_13875 = (state_13911[(9)]);
var inst_13875__$1 = (state_13911[(2)]);
var inst_13876 = (inst_13875__$1 == null);
var inst_13877 = cljs.core.not.call(null,inst_13876);
var state_13911__$1 = (function (){var statearr_13916 = state_13911;
(statearr_13916[(9)] = inst_13875__$1);

return statearr_13916;
})();
if(inst_13877){
var statearr_13917_13944 = state_13911__$1;
(statearr_13917_13944[(1)] = (5));

} else {
var statearr_13918_13945 = state_13911__$1;
(statearr_13918_13945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13912 === (15))){
var inst_13901 = (state_13911[(2)]);
var state_13911__$1 = state_13911;
var statearr_13919_13946 = state_13911__$1;
(statearr_13919_13946[(2)] = inst_13901);

(statearr_13919_13946[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13912 === (13))){
var state_13911__$1 = state_13911;
var statearr_13920_13947 = state_13911__$1;
(statearr_13920_13947[(2)] = null);

(statearr_13920_13947[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13912 === (6))){
var inst_13871 = (state_13911[(8)]);
var inst_13896 = inst_13871.length;
var inst_13897 = (inst_13896 > (0));
var state_13911__$1 = state_13911;
if(cljs.core.truth_(inst_13897)){
var statearr_13921_13948 = state_13911__$1;
(statearr_13921_13948[(1)] = (12));

} else {
var statearr_13922_13949 = state_13911__$1;
(statearr_13922_13949[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13912 === (3))){
var inst_13909 = (state_13911[(2)]);
var state_13911__$1 = state_13911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13911__$1,inst_13909);
} else {
if((state_val_13912 === (12))){
var inst_13871 = (state_13911[(8)]);
var inst_13899 = cljs.core.vec.call(null,inst_13871);
var state_13911__$1 = state_13911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13911__$1,(15),out,inst_13899);
} else {
if((state_val_13912 === (2))){
var state_13911__$1 = state_13911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13911__$1,(4),ch);
} else {
if((state_val_13912 === (11))){
var inst_13879 = (state_13911[(10)]);
var inst_13875 = (state_13911[(9)]);
var inst_13889 = (state_13911[(2)]);
var inst_13890 = [];
var inst_13891 = inst_13890.push(inst_13875);
var inst_13871 = inst_13890;
var inst_13872 = inst_13879;
var state_13911__$1 = (function (){var statearr_13923 = state_13911;
(statearr_13923[(7)] = inst_13872);

(statearr_13923[(11)] = inst_13891);

(statearr_13923[(12)] = inst_13889);

(statearr_13923[(8)] = inst_13871);

return statearr_13923;
})();
var statearr_13924_13950 = state_13911__$1;
(statearr_13924_13950[(2)] = null);

(statearr_13924_13950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13912 === (9))){
var inst_13871 = (state_13911[(8)]);
var inst_13887 = cljs.core.vec.call(null,inst_13871);
var state_13911__$1 = state_13911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13911__$1,(11),out,inst_13887);
} else {
if((state_val_13912 === (5))){
var inst_13872 = (state_13911[(7)]);
var inst_13879 = (state_13911[(10)]);
var inst_13875 = (state_13911[(9)]);
var inst_13879__$1 = f.call(null,inst_13875);
var inst_13880 = cljs.core._EQ_.call(null,inst_13879__$1,inst_13872);
var inst_13881 = cljs.core.keyword_identical_QMARK_.call(null,inst_13872,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_13882 = (inst_13880) || (inst_13881);
var state_13911__$1 = (function (){var statearr_13925 = state_13911;
(statearr_13925[(10)] = inst_13879__$1);

return statearr_13925;
})();
if(cljs.core.truth_(inst_13882)){
var statearr_13926_13951 = state_13911__$1;
(statearr_13926_13951[(1)] = (8));

} else {
var statearr_13927_13952 = state_13911__$1;
(statearr_13927_13952[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13912 === (14))){
var inst_13904 = (state_13911[(2)]);
var inst_13905 = cljs.core.async.close_BANG_.call(null,out);
var state_13911__$1 = (function (){var statearr_13929 = state_13911;
(statearr_13929[(13)] = inst_13904);

return statearr_13929;
})();
var statearr_13930_13953 = state_13911__$1;
(statearr_13930_13953[(2)] = inst_13905);

(statearr_13930_13953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13912 === (10))){
var inst_13894 = (state_13911[(2)]);
var state_13911__$1 = state_13911;
var statearr_13931_13954 = state_13911__$1;
(statearr_13931_13954[(2)] = inst_13894);

(statearr_13931_13954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13912 === (8))){
var inst_13879 = (state_13911[(10)]);
var inst_13875 = (state_13911[(9)]);
var inst_13871 = (state_13911[(8)]);
var inst_13884 = inst_13871.push(inst_13875);
var tmp13928 = inst_13871;
var inst_13871__$1 = tmp13928;
var inst_13872 = inst_13879;
var state_13911__$1 = (function (){var statearr_13932 = state_13911;
(statearr_13932[(7)] = inst_13872);

(statearr_13932[(14)] = inst_13884);

(statearr_13932[(8)] = inst_13871__$1);

return statearr_13932;
})();
var statearr_13933_13955 = state_13911__$1;
(statearr_13933_13955[(2)] = null);

(statearr_13933_13955[(1)] = (2));


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
}
}
}
}
}
}
}
}
});})(c__5829__auto___13941,out))
;
return ((function (switch__5814__auto__,c__5829__auto___13941,out){
return (function() {
var state_machine__5815__auto__ = null;
var state_machine__5815__auto____0 = (function (){
var statearr_13937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13937[(0)] = state_machine__5815__auto__);

(statearr_13937[(1)] = (1));

return statearr_13937;
});
var state_machine__5815__auto____1 = (function (state_13911){
while(true){
var ret_value__5816__auto__ = (function (){try{while(true){
var result__5817__auto__ = switch__5814__auto__.call(null,state_13911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5817__auto__;
}
break;
}
}catch (e13938){if((e13938 instanceof Object)){
var ex__5818__auto__ = e13938;
var statearr_13939_13956 = state_13911;
(statearr_13939_13956[(5)] = ex__5818__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13957 = state_13911;
state_13911 = G__13957;
continue;
} else {
return ret_value__5816__auto__;
}
break;
}
});
state_machine__5815__auto__ = function(state_13911){
switch(arguments.length){
case 0:
return state_machine__5815__auto____0.call(this);
case 1:
return state_machine__5815__auto____1.call(this,state_13911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5815__auto____0;
state_machine__5815__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5815__auto____1;
return state_machine__5815__auto__;
})()
;})(switch__5814__auto__,c__5829__auto___13941,out))
})();
var state__5831__auto__ = (function (){var statearr_13940 = f__5830__auto__.call(null);
(statearr_13940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5829__auto___13941);

return statearr_13940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5831__auto__);
});})(c__5829__auto___13941,out))
);


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

//# sourceMappingURL=async.js.map?rel=1418725964805