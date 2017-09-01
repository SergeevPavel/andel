// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__60435 = arguments.length;
switch (G__60435) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async60436 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60436 = (function (f,blockable,meta60437){
this.f = f;
this.blockable = blockable;
this.meta60437 = meta60437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async60436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60438,meta60437__$1){
var self__ = this;
var _60438__$1 = this;
return (new cljs.core.async.t_cljs$core$async60436(self__.f,self__.blockable,meta60437__$1));
});

cljs.core.async.t_cljs$core$async60436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60438){
var self__ = this;
var _60438__$1 = this;
return self__.meta60437;
});

cljs.core.async.t_cljs$core$async60436.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60436.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async60436.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async60436.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async60436.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta60437","meta60437",1646363647,null)], null);
});

cljs.core.async.t_cljs$core$async60436.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60436.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60436";

cljs.core.async.t_cljs$core$async60436.cljs$lang$ctorPrWriter = (function (this__41721__auto__,writer__41722__auto__,opt__41723__auto__){
return cljs.core._write.call(null,writer__41722__auto__,"cljs.core.async/t_cljs$core$async60436");
});

cljs.core.async.__GT_t_cljs$core$async60436 = (function cljs$core$async$__GT_t_cljs$core$async60436(f__$1,blockable__$1,meta60437){
return (new cljs.core.async.t_cljs$core$async60436(f__$1,blockable__$1,meta60437));
});

}

return (new cljs.core.async.t_cljs$core$async60436(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__60442 = arguments.length;
switch (G__60442) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__60445 = arguments.length;
switch (G__60445) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__60448 = arguments.length;
switch (G__60448) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_60450 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_60450);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_60450,ret){
return (function (){
return fn1.call(null,val_60450);
});})(val_60450,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__60452 = arguments.length;
switch (G__60452) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5276__auto__)){
var ret = temp__5276__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5276__auto__)){
var retb = temp__5276__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5276__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5276__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__42086__auto___60454 = n;
var x_60455 = (0);
while(true){
if((x_60455 < n__42086__auto___60454)){
(a[x_60455] = (0));

var G__60456 = (x_60455 + (1));
x_60455 = G__60456;
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

var G__60457 = (i + (1));
i = G__60457;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async60458 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60458 = (function (flag,meta60459){
this.flag = flag;
this.meta60459 = meta60459;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async60458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_60460,meta60459__$1){
var self__ = this;
var _60460__$1 = this;
return (new cljs.core.async.t_cljs$core$async60458(self__.flag,meta60459__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async60458.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_60460){
var self__ = this;
var _60460__$1 = this;
return self__.meta60459;
});})(flag))
;

cljs.core.async.t_cljs$core$async60458.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60458.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async60458.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async60458.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async60458.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta60459","meta60459",951147296,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async60458.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60458.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60458";

cljs.core.async.t_cljs$core$async60458.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__41721__auto__,writer__41722__auto__,opt__41723__auto__){
return cljs.core._write.call(null,writer__41722__auto__,"cljs.core.async/t_cljs$core$async60458");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async60458 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async60458(flag__$1,meta60459){
return (new cljs.core.async.t_cljs$core$async60458(flag__$1,meta60459));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async60458(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async60461 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60461 = (function (flag,cb,meta60462){
this.flag = flag;
this.cb = cb;
this.meta60462 = meta60462;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async60461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60463,meta60462__$1){
var self__ = this;
var _60463__$1 = this;
return (new cljs.core.async.t_cljs$core$async60461(self__.flag,self__.cb,meta60462__$1));
});

cljs.core.async.t_cljs$core$async60461.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60463){
var self__ = this;
var _60463__$1 = this;
return self__.meta60462;
});

cljs.core.async.t_cljs$core$async60461.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60461.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async60461.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async60461.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async60461.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta60462","meta60462",265504110,null)], null);
});

cljs.core.async.t_cljs$core$async60461.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60461.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60461";

cljs.core.async.t_cljs$core$async60461.cljs$lang$ctorPrWriter = (function (this__41721__auto__,writer__41722__auto__,opt__41723__auto__){
return cljs.core._write.call(null,writer__41722__auto__,"cljs.core.async/t_cljs$core$async60461");
});

cljs.core.async.__GT_t_cljs$core$async60461 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async60461(flag__$1,cb__$1,meta60462){
return (new cljs.core.async.t_cljs$core$async60461(flag__$1,cb__$1,meta60462));
});

}

return (new cljs.core.async.t_cljs$core$async60461(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
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
return (function (p1__60464_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__60464_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__60465_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__60465_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__41064__auto__ = wport;
if(cljs.core.truth_(or__41064__auto__)){
return or__41064__auto__;
} else {
return port;
}
})()], null));
} else {
var G__60466 = (i + (1));
i = G__60466;
continue;
}
} else {
return null;
}
break;
}
})();
var or__41064__auto__ = ret;
if(cljs.core.truth_(or__41064__auto__)){
return or__41064__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5278__auto__ = (function (){var and__41052__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__41052__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__41052__auto__;
}
})();
if(cljs.core.truth_(temp__5278__auto__)){
var got = temp__5278__auto__;
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
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__42304__auto__ = [];
var len__42297__auto___60472 = arguments.length;
var i__42298__auto___60473 = (0);
while(true){
if((i__42298__auto___60473 < len__42297__auto___60472)){
args__42304__auto__.push((arguments[i__42298__auto___60473]));

var G__60474 = (i__42298__auto___60473 + (1));
i__42298__auto___60473 = G__60474;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((1) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42305__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__60469){
var map__60470 = p__60469;
var map__60470__$1 = ((((!((map__60470 == null)))?((((map__60470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60470.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60470):map__60470);
var opts = map__60470__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq60467){
var G__60468 = cljs.core.first.call(null,seq60467);
var seq60467__$1 = cljs.core.next.call(null,seq60467);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__60468,seq60467__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__60476 = arguments.length;
switch (G__60476) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__44106__auto___60522 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44106__auto___60522){
return (function (){
var f__44107__auto__ = (function (){var switch__44016__auto__ = ((function (c__44106__auto___60522){
return (function (state_60500){
var state_val_60501 = (state_60500[(1)]);
if((state_val_60501 === (7))){
var inst_60496 = (state_60500[(2)]);
var state_60500__$1 = state_60500;
var statearr_60502_60523 = state_60500__$1;
(statearr_60502_60523[(2)] = inst_60496);

(statearr_60502_60523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60501 === (1))){
var state_60500__$1 = state_60500;
var statearr_60503_60524 = state_60500__$1;
(statearr_60503_60524[(2)] = null);

(statearr_60503_60524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60501 === (4))){
var inst_60479 = (state_60500[(7)]);
var inst_60479__$1 = (state_60500[(2)]);
var inst_60480 = (inst_60479__$1 == null);
var state_60500__$1 = (function (){var statearr_60504 = state_60500;
(statearr_60504[(7)] = inst_60479__$1);

return statearr_60504;
})();
if(cljs.core.truth_(inst_60480)){
var statearr_60505_60525 = state_60500__$1;
(statearr_60505_60525[(1)] = (5));

} else {
var statearr_60506_60526 = state_60500__$1;
(statearr_60506_60526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60501 === (13))){
var state_60500__$1 = state_60500;
var statearr_60507_60527 = state_60500__$1;
(statearr_60507_60527[(2)] = null);

(statearr_60507_60527[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60501 === (6))){
var inst_60479 = (state_60500[(7)]);
var state_60500__$1 = state_60500;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60500__$1,(11),to,inst_60479);
} else {
if((state_val_60501 === (3))){
var inst_60498 = (state_60500[(2)]);
var state_60500__$1 = state_60500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60500__$1,inst_60498);
} else {
if((state_val_60501 === (12))){
var state_60500__$1 = state_60500;
var statearr_60508_60528 = state_60500__$1;
(statearr_60508_60528[(2)] = null);

(statearr_60508_60528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60501 === (2))){
var state_60500__$1 = state_60500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60500__$1,(4),from);
} else {
if((state_val_60501 === (11))){
var inst_60489 = (state_60500[(2)]);
var state_60500__$1 = state_60500;
if(cljs.core.truth_(inst_60489)){
var statearr_60509_60529 = state_60500__$1;
(statearr_60509_60529[(1)] = (12));

} else {
var statearr_60510_60530 = state_60500__$1;
(statearr_60510_60530[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60501 === (9))){
var state_60500__$1 = state_60500;
var statearr_60511_60531 = state_60500__$1;
(statearr_60511_60531[(2)] = null);

(statearr_60511_60531[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60501 === (5))){
var state_60500__$1 = state_60500;
if(cljs.core.truth_(close_QMARK_)){
var statearr_60512_60532 = state_60500__$1;
(statearr_60512_60532[(1)] = (8));

} else {
var statearr_60513_60533 = state_60500__$1;
(statearr_60513_60533[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60501 === (14))){
var inst_60494 = (state_60500[(2)]);
var state_60500__$1 = state_60500;
var statearr_60514_60534 = state_60500__$1;
(statearr_60514_60534[(2)] = inst_60494);

(statearr_60514_60534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60501 === (10))){
var inst_60486 = (state_60500[(2)]);
var state_60500__$1 = state_60500;
var statearr_60515_60535 = state_60500__$1;
(statearr_60515_60535[(2)] = inst_60486);

(statearr_60515_60535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60501 === (8))){
var inst_60483 = cljs.core.async.close_BANG_.call(null,to);
var state_60500__$1 = state_60500;
var statearr_60516_60536 = state_60500__$1;
(statearr_60516_60536[(2)] = inst_60483);

(statearr_60516_60536[(1)] = (10));


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
});})(c__44106__auto___60522))
;
return ((function (switch__44016__auto__,c__44106__auto___60522){
return (function() {
var cljs$core$async$state_machine__44017__auto__ = null;
var cljs$core$async$state_machine__44017__auto____0 = (function (){
var statearr_60517 = [null,null,null,null,null,null,null,null];
(statearr_60517[(0)] = cljs$core$async$state_machine__44017__auto__);

(statearr_60517[(1)] = (1));

return statearr_60517;
});
var cljs$core$async$state_machine__44017__auto____1 = (function (state_60500){
while(true){
var ret_value__44018__auto__ = (function (){try{while(true){
var result__44019__auto__ = switch__44016__auto__.call(null,state_60500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44019__auto__;
}
break;
}
}catch (e60518){if((e60518 instanceof Object)){
var ex__44020__auto__ = e60518;
var statearr_60519_60537 = state_60500;
(statearr_60519_60537[(5)] = ex__44020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60538 = state_60500;
state_60500 = G__60538;
continue;
} else {
return ret_value__44018__auto__;
}
break;
}
});
cljs$core$async$state_machine__44017__auto__ = function(state_60500){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44017__auto____1.call(this,state_60500);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44017__auto____0;
cljs$core$async$state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44017__auto____1;
return cljs$core$async$state_machine__44017__auto__;
})()
;})(switch__44016__auto__,c__44106__auto___60522))
})();
var state__44108__auto__ = (function (){var statearr_60520 = f__44107__auto__.call(null);
(statearr_60520[(6)] = c__44106__auto___60522);

return statearr_60520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44108__auto__);
});})(c__44106__auto___60522))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__60539){
var vec__60540 = p__60539;
var v = cljs.core.nth.call(null,vec__60540,(0),null);
var p = cljs.core.nth.call(null,vec__60540,(1),null);
var job = vec__60540;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__44106__auto___60711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44106__auto___60711,res,vec__60540,v,p,job,jobs,results){
return (function (){
var f__44107__auto__ = (function (){var switch__44016__auto__ = ((function (c__44106__auto___60711,res,vec__60540,v,p,job,jobs,results){
return (function (state_60547){
var state_val_60548 = (state_60547[(1)]);
if((state_val_60548 === (1))){
var state_60547__$1 = state_60547;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60547__$1,(2),res,v);
} else {
if((state_val_60548 === (2))){
var inst_60544 = (state_60547[(2)]);
var inst_60545 = cljs.core.async.close_BANG_.call(null,res);
var state_60547__$1 = (function (){var statearr_60549 = state_60547;
(statearr_60549[(7)] = inst_60544);

return statearr_60549;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60547__$1,inst_60545);
} else {
return null;
}
}
});})(c__44106__auto___60711,res,vec__60540,v,p,job,jobs,results))
;
return ((function (switch__44016__auto__,c__44106__auto___60711,res,vec__60540,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44017__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44017__auto____0 = (function (){
var statearr_60550 = [null,null,null,null,null,null,null,null];
(statearr_60550[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44017__auto__);

(statearr_60550[(1)] = (1));

return statearr_60550;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44017__auto____1 = (function (state_60547){
while(true){
var ret_value__44018__auto__ = (function (){try{while(true){
var result__44019__auto__ = switch__44016__auto__.call(null,state_60547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44019__auto__;
}
break;
}
}catch (e60551){if((e60551 instanceof Object)){
var ex__44020__auto__ = e60551;
var statearr_60552_60712 = state_60547;
(statearr_60552_60712[(5)] = ex__44020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60713 = state_60547;
state_60547 = G__60713;
continue;
} else {
return ret_value__44018__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44017__auto__ = function(state_60547){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44017__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44017__auto____1.call(this,state_60547);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44017__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44017__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44017__auto__;
})()
;})(switch__44016__auto__,c__44106__auto___60711,res,vec__60540,v,p,job,jobs,results))
})();
var state__44108__auto__ = (function (){var statearr_60553 = f__44107__auto__.call(null);
(statearr_60553[(6)] = c__44106__auto___60711);

return statearr_60553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44108__auto__);
});})(c__44106__auto___60711,res,vec__60540,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__60554){
var vec__60555 = p__60554;
var v = cljs.core.nth.call(null,vec__60555,(0),null);
var p = cljs.core.nth.call(null,vec__60555,(1),null);
var job = vec__60555;
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
var n__42086__auto___60714 = n;
var __60715 = (0);
while(true){
if((__60715 < n__42086__auto___60714)){
var G__60558_60716 = type;
var G__60558_60717__$1 = (((G__60558_60716 instanceof cljs.core.Keyword))?G__60558_60716.fqn:null);
switch (G__60558_60717__$1) {
case "compute":
var c__44106__auto___60719 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__60715,c__44106__auto___60719,G__60558_60716,G__60558_60717__$1,n__42086__auto___60714,jobs,results,process,async){
return (function (){
var f__44107__auto__ = (function (){var switch__44016__auto__ = ((function (__60715,c__44106__auto___60719,G__60558_60716,G__60558_60717__$1,n__42086__auto___60714,jobs,results,process,async){
return (function (state_60571){
var state_val_60572 = (state_60571[(1)]);
if((state_val_60572 === (1))){
var state_60571__$1 = state_60571;
var statearr_60573_60720 = state_60571__$1;
(statearr_60573_60720[(2)] = null);

(statearr_60573_60720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60572 === (2))){
var state_60571__$1 = state_60571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60571__$1,(4),jobs);
} else {
if((state_val_60572 === (3))){
var inst_60569 = (state_60571[(2)]);
var state_60571__$1 = state_60571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60571__$1,inst_60569);
} else {
if((state_val_60572 === (4))){
var inst_60561 = (state_60571[(2)]);
var inst_60562 = process.call(null,inst_60561);
var state_60571__$1 = state_60571;
if(cljs.core.truth_(inst_60562)){
var statearr_60574_60721 = state_60571__$1;
(statearr_60574_60721[(1)] = (5));

} else {
var statearr_60575_60722 = state_60571__$1;
(statearr_60575_60722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60572 === (5))){
var state_60571__$1 = state_60571;
var statearr_60576_60723 = state_60571__$1;
(statearr_60576_60723[(2)] = null);

(statearr_60576_60723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60572 === (6))){
var state_60571__$1 = state_60571;
var statearr_60577_60724 = state_60571__$1;
(statearr_60577_60724[(2)] = null);

(statearr_60577_60724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60572 === (7))){
var inst_60567 = (state_60571[(2)]);
var state_60571__$1 = state_60571;
var statearr_60578_60725 = state_60571__$1;
(statearr_60578_60725[(2)] = inst_60567);

(statearr_60578_60725[(1)] = (3));


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
});})(__60715,c__44106__auto___60719,G__60558_60716,G__60558_60717__$1,n__42086__auto___60714,jobs,results,process,async))
;
return ((function (__60715,switch__44016__auto__,c__44106__auto___60719,G__60558_60716,G__60558_60717__$1,n__42086__auto___60714,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44017__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44017__auto____0 = (function (){
var statearr_60579 = [null,null,null,null,null,null,null];
(statearr_60579[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44017__auto__);

(statearr_60579[(1)] = (1));

return statearr_60579;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44017__auto____1 = (function (state_60571){
while(true){
var ret_value__44018__auto__ = (function (){try{while(true){
var result__44019__auto__ = switch__44016__auto__.call(null,state_60571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44019__auto__;
}
break;
}
}catch (e60580){if((e60580 instanceof Object)){
var ex__44020__auto__ = e60580;
var statearr_60581_60726 = state_60571;
(statearr_60581_60726[(5)] = ex__44020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60727 = state_60571;
state_60571 = G__60727;
continue;
} else {
return ret_value__44018__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44017__auto__ = function(state_60571){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44017__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44017__auto____1.call(this,state_60571);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44017__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44017__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44017__auto__;
})()
;})(__60715,switch__44016__auto__,c__44106__auto___60719,G__60558_60716,G__60558_60717__$1,n__42086__auto___60714,jobs,results,process,async))
})();
var state__44108__auto__ = (function (){var statearr_60582 = f__44107__auto__.call(null);
(statearr_60582[(6)] = c__44106__auto___60719);

return statearr_60582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44108__auto__);
});})(__60715,c__44106__auto___60719,G__60558_60716,G__60558_60717__$1,n__42086__auto___60714,jobs,results,process,async))
);


break;
case "async":
var c__44106__auto___60728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__60715,c__44106__auto___60728,G__60558_60716,G__60558_60717__$1,n__42086__auto___60714,jobs,results,process,async){
return (function (){
var f__44107__auto__ = (function (){var switch__44016__auto__ = ((function (__60715,c__44106__auto___60728,G__60558_60716,G__60558_60717__$1,n__42086__auto___60714,jobs,results,process,async){
return (function (state_60595){
var state_val_60596 = (state_60595[(1)]);
if((state_val_60596 === (1))){
var state_60595__$1 = state_60595;
var statearr_60597_60729 = state_60595__$1;
(statearr_60597_60729[(2)] = null);

(statearr_60597_60729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60596 === (2))){
var state_60595__$1 = state_60595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60595__$1,(4),jobs);
} else {
if((state_val_60596 === (3))){
var inst_60593 = (state_60595[(2)]);
var state_60595__$1 = state_60595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60595__$1,inst_60593);
} else {
if((state_val_60596 === (4))){
var inst_60585 = (state_60595[(2)]);
var inst_60586 = async.call(null,inst_60585);
var state_60595__$1 = state_60595;
if(cljs.core.truth_(inst_60586)){
var statearr_60598_60730 = state_60595__$1;
(statearr_60598_60730[(1)] = (5));

} else {
var statearr_60599_60731 = state_60595__$1;
(statearr_60599_60731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60596 === (5))){
var state_60595__$1 = state_60595;
var statearr_60600_60732 = state_60595__$1;
(statearr_60600_60732[(2)] = null);

(statearr_60600_60732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60596 === (6))){
var state_60595__$1 = state_60595;
var statearr_60601_60733 = state_60595__$1;
(statearr_60601_60733[(2)] = null);

(statearr_60601_60733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60596 === (7))){
var inst_60591 = (state_60595[(2)]);
var state_60595__$1 = state_60595;
var statearr_60602_60734 = state_60595__$1;
(statearr_60602_60734[(2)] = inst_60591);

(statearr_60602_60734[(1)] = (3));


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
});})(__60715,c__44106__auto___60728,G__60558_60716,G__60558_60717__$1,n__42086__auto___60714,jobs,results,process,async))
;
return ((function (__60715,switch__44016__auto__,c__44106__auto___60728,G__60558_60716,G__60558_60717__$1,n__42086__auto___60714,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44017__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44017__auto____0 = (function (){
var statearr_60603 = [null,null,null,null,null,null,null];
(statearr_60603[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44017__auto__);

(statearr_60603[(1)] = (1));

return statearr_60603;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44017__auto____1 = (function (state_60595){
while(true){
var ret_value__44018__auto__ = (function (){try{while(true){
var result__44019__auto__ = switch__44016__auto__.call(null,state_60595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44019__auto__;
}
break;
}
}catch (e60604){if((e60604 instanceof Object)){
var ex__44020__auto__ = e60604;
var statearr_60605_60735 = state_60595;
(statearr_60605_60735[(5)] = ex__44020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60736 = state_60595;
state_60595 = G__60736;
continue;
} else {
return ret_value__44018__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44017__auto__ = function(state_60595){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44017__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44017__auto____1.call(this,state_60595);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44017__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44017__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44017__auto__;
})()
;})(__60715,switch__44016__auto__,c__44106__auto___60728,G__60558_60716,G__60558_60717__$1,n__42086__auto___60714,jobs,results,process,async))
})();
var state__44108__auto__ = (function (){var statearr_60606 = f__44107__auto__.call(null);
(statearr_60606[(6)] = c__44106__auto___60728);

return statearr_60606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44108__auto__);
});})(__60715,c__44106__auto___60728,G__60558_60716,G__60558_60717__$1,n__42086__auto___60714,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60558_60717__$1)].join('')));

}

var G__60737 = (__60715 + (1));
__60715 = G__60737;
continue;
} else {
}
break;
}

var c__44106__auto___60738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44106__auto___60738,jobs,results,process,async){
return (function (){
var f__44107__auto__ = (function (){var switch__44016__auto__ = ((function (c__44106__auto___60738,jobs,results,process,async){
return (function (state_60628){
var state_val_60629 = (state_60628[(1)]);
if((state_val_60629 === (1))){
var state_60628__$1 = state_60628;
var statearr_60630_60739 = state_60628__$1;
(statearr_60630_60739[(2)] = null);

(statearr_60630_60739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60629 === (2))){
var state_60628__$1 = state_60628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60628__$1,(4),from);
} else {
if((state_val_60629 === (3))){
var inst_60626 = (state_60628[(2)]);
var state_60628__$1 = state_60628;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60628__$1,inst_60626);
} else {
if((state_val_60629 === (4))){
var inst_60609 = (state_60628[(7)]);
var inst_60609__$1 = (state_60628[(2)]);
var inst_60610 = (inst_60609__$1 == null);
var state_60628__$1 = (function (){var statearr_60631 = state_60628;
(statearr_60631[(7)] = inst_60609__$1);

return statearr_60631;
})();
if(cljs.core.truth_(inst_60610)){
var statearr_60632_60740 = state_60628__$1;
(statearr_60632_60740[(1)] = (5));

} else {
var statearr_60633_60741 = state_60628__$1;
(statearr_60633_60741[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60629 === (5))){
var inst_60612 = cljs.core.async.close_BANG_.call(null,jobs);
var state_60628__$1 = state_60628;
var statearr_60634_60742 = state_60628__$1;
(statearr_60634_60742[(2)] = inst_60612);

(statearr_60634_60742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60629 === (6))){
var inst_60609 = (state_60628[(7)]);
var inst_60614 = (state_60628[(8)]);
var inst_60614__$1 = cljs.core.async.chan.call(null,(1));
var inst_60615 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_60616 = [inst_60609,inst_60614__$1];
var inst_60617 = (new cljs.core.PersistentVector(null,2,(5),inst_60615,inst_60616,null));
var state_60628__$1 = (function (){var statearr_60635 = state_60628;
(statearr_60635[(8)] = inst_60614__$1);

return statearr_60635;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60628__$1,(8),jobs,inst_60617);
} else {
if((state_val_60629 === (7))){
var inst_60624 = (state_60628[(2)]);
var state_60628__$1 = state_60628;
var statearr_60636_60743 = state_60628__$1;
(statearr_60636_60743[(2)] = inst_60624);

(statearr_60636_60743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60629 === (8))){
var inst_60614 = (state_60628[(8)]);
var inst_60619 = (state_60628[(2)]);
var state_60628__$1 = (function (){var statearr_60637 = state_60628;
(statearr_60637[(9)] = inst_60619);

return statearr_60637;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60628__$1,(9),results,inst_60614);
} else {
if((state_val_60629 === (9))){
var inst_60621 = (state_60628[(2)]);
var state_60628__$1 = (function (){var statearr_60638 = state_60628;
(statearr_60638[(10)] = inst_60621);

return statearr_60638;
})();
var statearr_60639_60744 = state_60628__$1;
(statearr_60639_60744[(2)] = null);

(statearr_60639_60744[(1)] = (2));


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
});})(c__44106__auto___60738,jobs,results,process,async))
;
return ((function (switch__44016__auto__,c__44106__auto___60738,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44017__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44017__auto____0 = (function (){
var statearr_60640 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_60640[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44017__auto__);

(statearr_60640[(1)] = (1));

return statearr_60640;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44017__auto____1 = (function (state_60628){
while(true){
var ret_value__44018__auto__ = (function (){try{while(true){
var result__44019__auto__ = switch__44016__auto__.call(null,state_60628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44019__auto__;
}
break;
}
}catch (e60641){if((e60641 instanceof Object)){
var ex__44020__auto__ = e60641;
var statearr_60642_60745 = state_60628;
(statearr_60642_60745[(5)] = ex__44020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60746 = state_60628;
state_60628 = G__60746;
continue;
} else {
return ret_value__44018__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44017__auto__ = function(state_60628){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44017__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44017__auto____1.call(this,state_60628);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44017__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44017__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44017__auto__;
})()
;})(switch__44016__auto__,c__44106__auto___60738,jobs,results,process,async))
})();
var state__44108__auto__ = (function (){var statearr_60643 = f__44107__auto__.call(null);
(statearr_60643[(6)] = c__44106__auto___60738);

return statearr_60643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44108__auto__);
});})(c__44106__auto___60738,jobs,results,process,async))
);


var c__44106__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44106__auto__,jobs,results,process,async){
return (function (){
var f__44107__auto__ = (function (){var switch__44016__auto__ = ((function (c__44106__auto__,jobs,results,process,async){
return (function (state_60681){
var state_val_60682 = (state_60681[(1)]);
if((state_val_60682 === (7))){
var inst_60677 = (state_60681[(2)]);
var state_60681__$1 = state_60681;
var statearr_60683_60747 = state_60681__$1;
(statearr_60683_60747[(2)] = inst_60677);

(statearr_60683_60747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60682 === (20))){
var state_60681__$1 = state_60681;
var statearr_60684_60748 = state_60681__$1;
(statearr_60684_60748[(2)] = null);

(statearr_60684_60748[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60682 === (1))){
var state_60681__$1 = state_60681;
var statearr_60685_60749 = state_60681__$1;
(statearr_60685_60749[(2)] = null);

(statearr_60685_60749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60682 === (4))){
var inst_60646 = (state_60681[(7)]);
var inst_60646__$1 = (state_60681[(2)]);
var inst_60647 = (inst_60646__$1 == null);
var state_60681__$1 = (function (){var statearr_60686 = state_60681;
(statearr_60686[(7)] = inst_60646__$1);

return statearr_60686;
})();
if(cljs.core.truth_(inst_60647)){
var statearr_60687_60750 = state_60681__$1;
(statearr_60687_60750[(1)] = (5));

} else {
var statearr_60688_60751 = state_60681__$1;
(statearr_60688_60751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60682 === (15))){
var inst_60659 = (state_60681[(8)]);
var state_60681__$1 = state_60681;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60681__$1,(18),to,inst_60659);
} else {
if((state_val_60682 === (21))){
var inst_60672 = (state_60681[(2)]);
var state_60681__$1 = state_60681;
var statearr_60689_60752 = state_60681__$1;
(statearr_60689_60752[(2)] = inst_60672);

(statearr_60689_60752[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60682 === (13))){
var inst_60674 = (state_60681[(2)]);
var state_60681__$1 = (function (){var statearr_60690 = state_60681;
(statearr_60690[(9)] = inst_60674);

return statearr_60690;
})();
var statearr_60691_60753 = state_60681__$1;
(statearr_60691_60753[(2)] = null);

(statearr_60691_60753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60682 === (6))){
var inst_60646 = (state_60681[(7)]);
var state_60681__$1 = state_60681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60681__$1,(11),inst_60646);
} else {
if((state_val_60682 === (17))){
var inst_60667 = (state_60681[(2)]);
var state_60681__$1 = state_60681;
if(cljs.core.truth_(inst_60667)){
var statearr_60692_60754 = state_60681__$1;
(statearr_60692_60754[(1)] = (19));

} else {
var statearr_60693_60755 = state_60681__$1;
(statearr_60693_60755[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60682 === (3))){
var inst_60679 = (state_60681[(2)]);
var state_60681__$1 = state_60681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60681__$1,inst_60679);
} else {
if((state_val_60682 === (12))){
var inst_60656 = (state_60681[(10)]);
var state_60681__$1 = state_60681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60681__$1,(14),inst_60656);
} else {
if((state_val_60682 === (2))){
var state_60681__$1 = state_60681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60681__$1,(4),results);
} else {
if((state_val_60682 === (19))){
var state_60681__$1 = state_60681;
var statearr_60694_60756 = state_60681__$1;
(statearr_60694_60756[(2)] = null);

(statearr_60694_60756[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60682 === (11))){
var inst_60656 = (state_60681[(2)]);
var state_60681__$1 = (function (){var statearr_60695 = state_60681;
(statearr_60695[(10)] = inst_60656);

return statearr_60695;
})();
var statearr_60696_60757 = state_60681__$1;
(statearr_60696_60757[(2)] = null);

(statearr_60696_60757[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60682 === (9))){
var state_60681__$1 = state_60681;
var statearr_60697_60758 = state_60681__$1;
(statearr_60697_60758[(2)] = null);

(statearr_60697_60758[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60682 === (5))){
var state_60681__$1 = state_60681;
if(cljs.core.truth_(close_QMARK_)){
var statearr_60698_60759 = state_60681__$1;
(statearr_60698_60759[(1)] = (8));

} else {
var statearr_60699_60760 = state_60681__$1;
(statearr_60699_60760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60682 === (14))){
var inst_60659 = (state_60681[(8)]);
var inst_60661 = (state_60681[(11)]);
var inst_60659__$1 = (state_60681[(2)]);
var inst_60660 = (inst_60659__$1 == null);
var inst_60661__$1 = cljs.core.not.call(null,inst_60660);
var state_60681__$1 = (function (){var statearr_60700 = state_60681;
(statearr_60700[(8)] = inst_60659__$1);

(statearr_60700[(11)] = inst_60661__$1);

return statearr_60700;
})();
if(inst_60661__$1){
var statearr_60701_60761 = state_60681__$1;
(statearr_60701_60761[(1)] = (15));

} else {
var statearr_60702_60762 = state_60681__$1;
(statearr_60702_60762[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60682 === (16))){
var inst_60661 = (state_60681[(11)]);
var state_60681__$1 = state_60681;
var statearr_60703_60763 = state_60681__$1;
(statearr_60703_60763[(2)] = inst_60661);

(statearr_60703_60763[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60682 === (10))){
var inst_60653 = (state_60681[(2)]);
var state_60681__$1 = state_60681;
var statearr_60704_60764 = state_60681__$1;
(statearr_60704_60764[(2)] = inst_60653);

(statearr_60704_60764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60682 === (18))){
var inst_60664 = (state_60681[(2)]);
var state_60681__$1 = state_60681;
var statearr_60705_60765 = state_60681__$1;
(statearr_60705_60765[(2)] = inst_60664);

(statearr_60705_60765[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60682 === (8))){
var inst_60650 = cljs.core.async.close_BANG_.call(null,to);
var state_60681__$1 = state_60681;
var statearr_60706_60766 = state_60681__$1;
(statearr_60706_60766[(2)] = inst_60650);

(statearr_60706_60766[(1)] = (10));


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
});})(c__44106__auto__,jobs,results,process,async))
;
return ((function (switch__44016__auto__,c__44106__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44017__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44017__auto____0 = (function (){
var statearr_60707 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60707[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44017__auto__);

(statearr_60707[(1)] = (1));

return statearr_60707;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44017__auto____1 = (function (state_60681){
while(true){
var ret_value__44018__auto__ = (function (){try{while(true){
var result__44019__auto__ = switch__44016__auto__.call(null,state_60681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44019__auto__;
}
break;
}
}catch (e60708){if((e60708 instanceof Object)){
var ex__44020__auto__ = e60708;
var statearr_60709_60767 = state_60681;
(statearr_60709_60767[(5)] = ex__44020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60768 = state_60681;
state_60681 = G__60768;
continue;
} else {
return ret_value__44018__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44017__auto__ = function(state_60681){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44017__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44017__auto____1.call(this,state_60681);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44017__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44017__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44017__auto__;
})()
;})(switch__44016__auto__,c__44106__auto__,jobs,results,process,async))
})();
var state__44108__auto__ = (function (){var statearr_60710 = f__44107__auto__.call(null);
(statearr_60710[(6)] = c__44106__auto__);

return statearr_60710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44108__auto__);
});})(c__44106__auto__,jobs,results,process,async))
);

return c__44106__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__60770 = arguments.length;
switch (G__60770) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__60773 = arguments.length;
switch (G__60773) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__60776 = arguments.length;
switch (G__60776) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__44106__auto___60825 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44106__auto___60825,tc,fc){
return (function (){
var f__44107__auto__ = (function (){var switch__44016__auto__ = ((function (c__44106__auto___60825,tc,fc){
return (function (state_60802){
var state_val_60803 = (state_60802[(1)]);
if((state_val_60803 === (7))){
var inst_60798 = (state_60802[(2)]);
var state_60802__$1 = state_60802;
var statearr_60804_60826 = state_60802__$1;
(statearr_60804_60826[(2)] = inst_60798);

(statearr_60804_60826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60803 === (1))){
var state_60802__$1 = state_60802;
var statearr_60805_60827 = state_60802__$1;
(statearr_60805_60827[(2)] = null);

(statearr_60805_60827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60803 === (4))){
var inst_60779 = (state_60802[(7)]);
var inst_60779__$1 = (state_60802[(2)]);
var inst_60780 = (inst_60779__$1 == null);
var state_60802__$1 = (function (){var statearr_60806 = state_60802;
(statearr_60806[(7)] = inst_60779__$1);

return statearr_60806;
})();
if(cljs.core.truth_(inst_60780)){
var statearr_60807_60828 = state_60802__$1;
(statearr_60807_60828[(1)] = (5));

} else {
var statearr_60808_60829 = state_60802__$1;
(statearr_60808_60829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60803 === (13))){
var state_60802__$1 = state_60802;
var statearr_60809_60830 = state_60802__$1;
(statearr_60809_60830[(2)] = null);

(statearr_60809_60830[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60803 === (6))){
var inst_60779 = (state_60802[(7)]);
var inst_60785 = p.call(null,inst_60779);
var state_60802__$1 = state_60802;
if(cljs.core.truth_(inst_60785)){
var statearr_60810_60831 = state_60802__$1;
(statearr_60810_60831[(1)] = (9));

} else {
var statearr_60811_60832 = state_60802__$1;
(statearr_60811_60832[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60803 === (3))){
var inst_60800 = (state_60802[(2)]);
var state_60802__$1 = state_60802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60802__$1,inst_60800);
} else {
if((state_val_60803 === (12))){
var state_60802__$1 = state_60802;
var statearr_60812_60833 = state_60802__$1;
(statearr_60812_60833[(2)] = null);

(statearr_60812_60833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60803 === (2))){
var state_60802__$1 = state_60802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60802__$1,(4),ch);
} else {
if((state_val_60803 === (11))){
var inst_60779 = (state_60802[(7)]);
var inst_60789 = (state_60802[(2)]);
var state_60802__$1 = state_60802;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60802__$1,(8),inst_60789,inst_60779);
} else {
if((state_val_60803 === (9))){
var state_60802__$1 = state_60802;
var statearr_60813_60834 = state_60802__$1;
(statearr_60813_60834[(2)] = tc);

(statearr_60813_60834[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60803 === (5))){
var inst_60782 = cljs.core.async.close_BANG_.call(null,tc);
var inst_60783 = cljs.core.async.close_BANG_.call(null,fc);
var state_60802__$1 = (function (){var statearr_60814 = state_60802;
(statearr_60814[(8)] = inst_60782);

return statearr_60814;
})();
var statearr_60815_60835 = state_60802__$1;
(statearr_60815_60835[(2)] = inst_60783);

(statearr_60815_60835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60803 === (14))){
var inst_60796 = (state_60802[(2)]);
var state_60802__$1 = state_60802;
var statearr_60816_60836 = state_60802__$1;
(statearr_60816_60836[(2)] = inst_60796);

(statearr_60816_60836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60803 === (10))){
var state_60802__$1 = state_60802;
var statearr_60817_60837 = state_60802__$1;
(statearr_60817_60837[(2)] = fc);

(statearr_60817_60837[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60803 === (8))){
var inst_60791 = (state_60802[(2)]);
var state_60802__$1 = state_60802;
if(cljs.core.truth_(inst_60791)){
var statearr_60818_60838 = state_60802__$1;
(statearr_60818_60838[(1)] = (12));

} else {
var statearr_60819_60839 = state_60802__$1;
(statearr_60819_60839[(1)] = (13));

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
});})(c__44106__auto___60825,tc,fc))
;
return ((function (switch__44016__auto__,c__44106__auto___60825,tc,fc){
return (function() {
var cljs$core$async$state_machine__44017__auto__ = null;
var cljs$core$async$state_machine__44017__auto____0 = (function (){
var statearr_60820 = [null,null,null,null,null,null,null,null,null];
(statearr_60820[(0)] = cljs$core$async$state_machine__44017__auto__);

(statearr_60820[(1)] = (1));

return statearr_60820;
});
var cljs$core$async$state_machine__44017__auto____1 = (function (state_60802){
while(true){
var ret_value__44018__auto__ = (function (){try{while(true){
var result__44019__auto__ = switch__44016__auto__.call(null,state_60802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44019__auto__;
}
break;
}
}catch (e60821){if((e60821 instanceof Object)){
var ex__44020__auto__ = e60821;
var statearr_60822_60840 = state_60802;
(statearr_60822_60840[(5)] = ex__44020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60841 = state_60802;
state_60802 = G__60841;
continue;
} else {
return ret_value__44018__auto__;
}
break;
}
});
cljs$core$async$state_machine__44017__auto__ = function(state_60802){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44017__auto____1.call(this,state_60802);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44017__auto____0;
cljs$core$async$state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44017__auto____1;
return cljs$core$async$state_machine__44017__auto__;
})()
;})(switch__44016__auto__,c__44106__auto___60825,tc,fc))
})();
var state__44108__auto__ = (function (){var statearr_60823 = f__44107__auto__.call(null);
(statearr_60823[(6)] = c__44106__auto___60825);

return statearr_60823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44108__auto__);
});})(c__44106__auto___60825,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__44106__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44106__auto__){
return (function (){
var f__44107__auto__ = (function (){var switch__44016__auto__ = ((function (c__44106__auto__){
return (function (state_60862){
var state_val_60863 = (state_60862[(1)]);
if((state_val_60863 === (7))){
var inst_60858 = (state_60862[(2)]);
var state_60862__$1 = state_60862;
var statearr_60864_60882 = state_60862__$1;
(statearr_60864_60882[(2)] = inst_60858);

(statearr_60864_60882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60863 === (1))){
var inst_60842 = init;
var state_60862__$1 = (function (){var statearr_60865 = state_60862;
(statearr_60865[(7)] = inst_60842);

return statearr_60865;
})();
var statearr_60866_60883 = state_60862__$1;
(statearr_60866_60883[(2)] = null);

(statearr_60866_60883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60863 === (4))){
var inst_60845 = (state_60862[(8)]);
var inst_60845__$1 = (state_60862[(2)]);
var inst_60846 = (inst_60845__$1 == null);
var state_60862__$1 = (function (){var statearr_60867 = state_60862;
(statearr_60867[(8)] = inst_60845__$1);

return statearr_60867;
})();
if(cljs.core.truth_(inst_60846)){
var statearr_60868_60884 = state_60862__$1;
(statearr_60868_60884[(1)] = (5));

} else {
var statearr_60869_60885 = state_60862__$1;
(statearr_60869_60885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60863 === (6))){
var inst_60842 = (state_60862[(7)]);
var inst_60845 = (state_60862[(8)]);
var inst_60849 = (state_60862[(9)]);
var inst_60849__$1 = f.call(null,inst_60842,inst_60845);
var inst_60850 = cljs.core.reduced_QMARK_.call(null,inst_60849__$1);
var state_60862__$1 = (function (){var statearr_60870 = state_60862;
(statearr_60870[(9)] = inst_60849__$1);

return statearr_60870;
})();
if(inst_60850){
var statearr_60871_60886 = state_60862__$1;
(statearr_60871_60886[(1)] = (8));

} else {
var statearr_60872_60887 = state_60862__$1;
(statearr_60872_60887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60863 === (3))){
var inst_60860 = (state_60862[(2)]);
var state_60862__$1 = state_60862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60862__$1,inst_60860);
} else {
if((state_val_60863 === (2))){
var state_60862__$1 = state_60862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60862__$1,(4),ch);
} else {
if((state_val_60863 === (9))){
var inst_60849 = (state_60862[(9)]);
var inst_60842 = inst_60849;
var state_60862__$1 = (function (){var statearr_60873 = state_60862;
(statearr_60873[(7)] = inst_60842);

return statearr_60873;
})();
var statearr_60874_60888 = state_60862__$1;
(statearr_60874_60888[(2)] = null);

(statearr_60874_60888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60863 === (5))){
var inst_60842 = (state_60862[(7)]);
var state_60862__$1 = state_60862;
var statearr_60875_60889 = state_60862__$1;
(statearr_60875_60889[(2)] = inst_60842);

(statearr_60875_60889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60863 === (10))){
var inst_60856 = (state_60862[(2)]);
var state_60862__$1 = state_60862;
var statearr_60876_60890 = state_60862__$1;
(statearr_60876_60890[(2)] = inst_60856);

(statearr_60876_60890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60863 === (8))){
var inst_60849 = (state_60862[(9)]);
var inst_60852 = cljs.core.deref.call(null,inst_60849);
var state_60862__$1 = state_60862;
var statearr_60877_60891 = state_60862__$1;
(statearr_60877_60891[(2)] = inst_60852);

(statearr_60877_60891[(1)] = (10));


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
});})(c__44106__auto__))
;
return ((function (switch__44016__auto__,c__44106__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__44017__auto__ = null;
var cljs$core$async$reduce_$_state_machine__44017__auto____0 = (function (){
var statearr_60878 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60878[(0)] = cljs$core$async$reduce_$_state_machine__44017__auto__);

(statearr_60878[(1)] = (1));

return statearr_60878;
});
var cljs$core$async$reduce_$_state_machine__44017__auto____1 = (function (state_60862){
while(true){
var ret_value__44018__auto__ = (function (){try{while(true){
var result__44019__auto__ = switch__44016__auto__.call(null,state_60862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44019__auto__;
}
break;
}
}catch (e60879){if((e60879 instanceof Object)){
var ex__44020__auto__ = e60879;
var statearr_60880_60892 = state_60862;
(statearr_60880_60892[(5)] = ex__44020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60893 = state_60862;
state_60862 = G__60893;
continue;
} else {
return ret_value__44018__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__44017__auto__ = function(state_60862){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__44017__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__44017__auto____1.call(this,state_60862);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__44017__auto____0;
cljs$core$async$reduce_$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__44017__auto____1;
return cljs$core$async$reduce_$_state_machine__44017__auto__;
})()
;})(switch__44016__auto__,c__44106__auto__))
})();
var state__44108__auto__ = (function (){var statearr_60881 = f__44107__auto__.call(null);
(statearr_60881[(6)] = c__44106__auto__);

return statearr_60881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44108__auto__);
});})(c__44106__auto__))
);

return c__44106__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__44106__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44106__auto__,f__$1){
return (function (){
var f__44107__auto__ = (function (){var switch__44016__auto__ = ((function (c__44106__auto__,f__$1){
return (function (state_60899){
var state_val_60900 = (state_60899[(1)]);
if((state_val_60900 === (1))){
var inst_60894 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_60899__$1 = state_60899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60899__$1,(2),inst_60894);
} else {
if((state_val_60900 === (2))){
var inst_60896 = (state_60899[(2)]);
var inst_60897 = f__$1.call(null,inst_60896);
var state_60899__$1 = state_60899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60899__$1,inst_60897);
} else {
return null;
}
}
});})(c__44106__auto__,f__$1))
;
return ((function (switch__44016__auto__,c__44106__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__44017__auto__ = null;
var cljs$core$async$transduce_$_state_machine__44017__auto____0 = (function (){
var statearr_60901 = [null,null,null,null,null,null,null];
(statearr_60901[(0)] = cljs$core$async$transduce_$_state_machine__44017__auto__);

(statearr_60901[(1)] = (1));

return statearr_60901;
});
var cljs$core$async$transduce_$_state_machine__44017__auto____1 = (function (state_60899){
while(true){
var ret_value__44018__auto__ = (function (){try{while(true){
var result__44019__auto__ = switch__44016__auto__.call(null,state_60899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44019__auto__;
}
break;
}
}catch (e60902){if((e60902 instanceof Object)){
var ex__44020__auto__ = e60902;
var statearr_60903_60905 = state_60899;
(statearr_60903_60905[(5)] = ex__44020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60906 = state_60899;
state_60899 = G__60906;
continue;
} else {
return ret_value__44018__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__44017__auto__ = function(state_60899){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__44017__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__44017__auto____1.call(this,state_60899);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__44017__auto____0;
cljs$core$async$transduce_$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__44017__auto____1;
return cljs$core$async$transduce_$_state_machine__44017__auto__;
})()
;})(switch__44016__auto__,c__44106__auto__,f__$1))
})();
var state__44108__auto__ = (function (){var statearr_60904 = f__44107__auto__.call(null);
(statearr_60904[(6)] = c__44106__auto__);

return statearr_60904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44108__auto__);
});})(c__44106__auto__,f__$1))
);

return c__44106__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__60908 = arguments.length;
switch (G__60908) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__44106__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44106__auto__){
return (function (){
var f__44107__auto__ = (function (){var switch__44016__auto__ = ((function (c__44106__auto__){
return (function (state_60933){
var state_val_60934 = (state_60933[(1)]);
if((state_val_60934 === (7))){
var inst_60915 = (state_60933[(2)]);
var state_60933__$1 = state_60933;
var statearr_60935_60956 = state_60933__$1;
(statearr_60935_60956[(2)] = inst_60915);

(statearr_60935_60956[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60934 === (1))){
var inst_60909 = cljs.core.seq.call(null,coll);
var inst_60910 = inst_60909;
var state_60933__$1 = (function (){var statearr_60936 = state_60933;
(statearr_60936[(7)] = inst_60910);

return statearr_60936;
})();
var statearr_60937_60957 = state_60933__$1;
(statearr_60937_60957[(2)] = null);

(statearr_60937_60957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60934 === (4))){
var inst_60910 = (state_60933[(7)]);
var inst_60913 = cljs.core.first.call(null,inst_60910);
var state_60933__$1 = state_60933;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60933__$1,(7),ch,inst_60913);
} else {
if((state_val_60934 === (13))){
var inst_60927 = (state_60933[(2)]);
var state_60933__$1 = state_60933;
var statearr_60938_60958 = state_60933__$1;
(statearr_60938_60958[(2)] = inst_60927);

(statearr_60938_60958[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60934 === (6))){
var inst_60918 = (state_60933[(2)]);
var state_60933__$1 = state_60933;
if(cljs.core.truth_(inst_60918)){
var statearr_60939_60959 = state_60933__$1;
(statearr_60939_60959[(1)] = (8));

} else {
var statearr_60940_60960 = state_60933__$1;
(statearr_60940_60960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60934 === (3))){
var inst_60931 = (state_60933[(2)]);
var state_60933__$1 = state_60933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60933__$1,inst_60931);
} else {
if((state_val_60934 === (12))){
var state_60933__$1 = state_60933;
var statearr_60941_60961 = state_60933__$1;
(statearr_60941_60961[(2)] = null);

(statearr_60941_60961[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60934 === (2))){
var inst_60910 = (state_60933[(7)]);
var state_60933__$1 = state_60933;
if(cljs.core.truth_(inst_60910)){
var statearr_60942_60962 = state_60933__$1;
(statearr_60942_60962[(1)] = (4));

} else {
var statearr_60943_60963 = state_60933__$1;
(statearr_60943_60963[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60934 === (11))){
var inst_60924 = cljs.core.async.close_BANG_.call(null,ch);
var state_60933__$1 = state_60933;
var statearr_60944_60964 = state_60933__$1;
(statearr_60944_60964[(2)] = inst_60924);

(statearr_60944_60964[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60934 === (9))){
var state_60933__$1 = state_60933;
if(cljs.core.truth_(close_QMARK_)){
var statearr_60945_60965 = state_60933__$1;
(statearr_60945_60965[(1)] = (11));

} else {
var statearr_60946_60966 = state_60933__$1;
(statearr_60946_60966[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60934 === (5))){
var inst_60910 = (state_60933[(7)]);
var state_60933__$1 = state_60933;
var statearr_60947_60967 = state_60933__$1;
(statearr_60947_60967[(2)] = inst_60910);

(statearr_60947_60967[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60934 === (10))){
var inst_60929 = (state_60933[(2)]);
var state_60933__$1 = state_60933;
var statearr_60948_60968 = state_60933__$1;
(statearr_60948_60968[(2)] = inst_60929);

(statearr_60948_60968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60934 === (8))){
var inst_60910 = (state_60933[(7)]);
var inst_60920 = cljs.core.next.call(null,inst_60910);
var inst_60910__$1 = inst_60920;
var state_60933__$1 = (function (){var statearr_60949 = state_60933;
(statearr_60949[(7)] = inst_60910__$1);

return statearr_60949;
})();
var statearr_60950_60969 = state_60933__$1;
(statearr_60950_60969[(2)] = null);

(statearr_60950_60969[(1)] = (2));


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
});})(c__44106__auto__))
;
return ((function (switch__44016__auto__,c__44106__auto__){
return (function() {
var cljs$core$async$state_machine__44017__auto__ = null;
var cljs$core$async$state_machine__44017__auto____0 = (function (){
var statearr_60951 = [null,null,null,null,null,null,null,null];
(statearr_60951[(0)] = cljs$core$async$state_machine__44017__auto__);

(statearr_60951[(1)] = (1));

return statearr_60951;
});
var cljs$core$async$state_machine__44017__auto____1 = (function (state_60933){
while(true){
var ret_value__44018__auto__ = (function (){try{while(true){
var result__44019__auto__ = switch__44016__auto__.call(null,state_60933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44019__auto__;
}
break;
}
}catch (e60952){if((e60952 instanceof Object)){
var ex__44020__auto__ = e60952;
var statearr_60953_60970 = state_60933;
(statearr_60953_60970[(5)] = ex__44020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60971 = state_60933;
state_60933 = G__60971;
continue;
} else {
return ret_value__44018__auto__;
}
break;
}
});
cljs$core$async$state_machine__44017__auto__ = function(state_60933){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44017__auto____1.call(this,state_60933);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44017__auto____0;
cljs$core$async$state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44017__auto____1;
return cljs$core$async$state_machine__44017__auto__;
})()
;})(switch__44016__auto__,c__44106__auto__))
})();
var state__44108__auto__ = (function (){var statearr_60954 = f__44107__auto__.call(null);
(statearr_60954[(6)] = c__44106__auto__);

return statearr_60954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44108__auto__);
});})(c__44106__auto__))
);

return c__44106__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__41783__auto__ = (((_ == null))?null:_);
var m__41784__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__41783__auto__)]);
if(!((m__41784__auto__ == null))){
return m__41784__auto__.call(null,_);
} else {
var m__41784__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__41784__auto____$1 == null))){
return m__41784__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__41783__auto__ = (((m == null))?null:m);
var m__41784__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__41783__auto__)]);
if(!((m__41784__auto__ == null))){
return m__41784__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__41784__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__41784__auto____$1 == null))){
return m__41784__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__41783__auto__ = (((m == null))?null:m);
var m__41784__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__41783__auto__)]);
if(!((m__41784__auto__ == null))){
return m__41784__auto__.call(null,m,ch);
} else {
var m__41784__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__41784__auto____$1 == null))){
return m__41784__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__41783__auto__ = (((m == null))?null:m);
var m__41784__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__41783__auto__)]);
if(!((m__41784__auto__ == null))){
return m__41784__auto__.call(null,m);
} else {
var m__41784__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__41784__auto____$1 == null))){
return m__41784__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async60972 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60972 = (function (ch,cs,meta60973){
this.ch = ch;
this.cs = cs;
this.meta60973 = meta60973;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async60972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_60974,meta60973__$1){
var self__ = this;
var _60974__$1 = this;
return (new cljs.core.async.t_cljs$core$async60972(self__.ch,self__.cs,meta60973__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async60972.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_60974){
var self__ = this;
var _60974__$1 = this;
return self__.meta60973;
});})(cs))
;

cljs.core.async.t_cljs$core$async60972.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60972.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async60972.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60972.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async60972.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async60972.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async60972.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta60973","meta60973",-1718493051,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async60972.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60972.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60972";

cljs.core.async.t_cljs$core$async60972.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__41721__auto__,writer__41722__auto__,opt__41723__auto__){
return cljs.core._write.call(null,writer__41722__auto__,"cljs.core.async/t_cljs$core$async60972");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async60972 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async60972(ch__$1,cs__$1,meta60973){
return (new cljs.core.async.t_cljs$core$async60972(ch__$1,cs__$1,meta60973));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async60972(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__44106__auto___61194 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44106__auto___61194,cs,m,dchan,dctr,done){
return (function (){
var f__44107__auto__ = (function (){var switch__44016__auto__ = ((function (c__44106__auto___61194,cs,m,dchan,dctr,done){
return (function (state_61109){
var state_val_61110 = (state_61109[(1)]);
if((state_val_61110 === (7))){
var inst_61105 = (state_61109[(2)]);
var state_61109__$1 = state_61109;
var statearr_61111_61195 = state_61109__$1;
(statearr_61111_61195[(2)] = inst_61105);

(statearr_61111_61195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61110 === (20))){
var inst_61008 = (state_61109[(7)]);
var inst_61020 = cljs.core.first.call(null,inst_61008);
var inst_61021 = cljs.core.nth.call(null,inst_61020,(0),null);
var inst_61022 = cljs.core.nth.call(null,inst_61020,(1),null);
var state_61109__$1 = (function (){var statearr_61112 = state_61109;
(statearr_61112[(8)] = inst_61021);

return statearr_61112;
})();
if(cljs.core.truth_(inst_61022)){
var statearr_61113_61196 = state_61109__$1;
(statearr_61113_61196[(1)] = (22));

} else {
var statearr_61114_61197 = state_61109__$1;
(statearr_61114_61197[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61110 === (27))){
var inst_61052 = (state_61109[(9)]);
var inst_61057 = (state_61109[(10)]);
var inst_61050 = (state_61109[(11)]);
var inst_60977 = (state_61109[(12)]);
var inst_61057__$1 = cljs.core._nth.call(null,inst_61050,inst_61052);
var inst_61058 = cljs.core.async.put_BANG_.call(null,inst_61057__$1,inst_60977,done);
var state_61109__$1 = (function (){var statearr_61115 = state_61109;
(statearr_61115[(10)] = inst_61057__$1);

return statearr_61115;
})();
if(cljs.core.truth_(inst_61058)){
var statearr_61116_61198 = state_61109__$1;
(statearr_61116_61198[(1)] = (30));

} else {
var statearr_61117_61199 = state_61109__$1;
(statearr_61117_61199[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61110 === (1))){
var state_61109__$1 = state_61109;
var statearr_61118_61200 = state_61109__$1;
(statearr_61118_61200[(2)] = null);

(statearr_61118_61200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61110 === (24))){
var inst_61008 = (state_61109[(7)]);
var inst_61027 = (state_61109[(2)]);
var inst_61028 = cljs.core.next.call(null,inst_61008);
var inst_60986 = inst_61028;
var inst_60987 = null;
var inst_60988 = (0);
var inst_60989 = (0);
var state_61109__$1 = (function (){var statearr_61119 = state_61109;
(statearr_61119[(13)] = inst_60989);

(statearr_61119[(14)] = inst_60988);

(statearr_61119[(15)] = inst_60987);

(statearr_61119[(16)] = inst_61027);

(statearr_61119[(17)] = inst_60986);

return statearr_61119;
})();
var statearr_61120_61201 = state_61109__$1;
(statearr_61120_61201[(2)] = null);

(statearr_61120_61201[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61110 === (39))){
var state_61109__$1 = state_61109;
var statearr_61124_61202 = state_61109__$1;
(statearr_61124_61202[(2)] = null);

(statearr_61124_61202[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61110 === (4))){
var inst_60977 = (state_61109[(12)]);
var inst_60977__$1 = (state_61109[(2)]);
var inst_60978 = (inst_60977__$1 == null);
var state_61109__$1 = (function (){var statearr_61125 = state_61109;
(statearr_61125[(12)] = inst_60977__$1);

return statearr_61125;
})();
if(cljs.core.truth_(inst_60978)){
var statearr_61126_61203 = state_61109__$1;
(statearr_61126_61203[(1)] = (5));

} else {
var statearr_61127_61204 = state_61109__$1;
(statearr_61127_61204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61110 === (15))){
var inst_60989 = (state_61109[(13)]);
var inst_60988 = (state_61109[(14)]);
var inst_60987 = (state_61109[(15)]);
var inst_60986 = (state_61109[(17)]);
var inst_61004 = (state_61109[(2)]);
var inst_61005 = (inst_60989 + (1));
var tmp61121 = inst_60988;
var tmp61122 = inst_60987;
var tmp61123 = inst_60986;
var inst_60986__$1 = tmp61123;
var inst_60987__$1 = tmp61122;
var inst_60988__$1 = tmp61121;
var inst_60989__$1 = inst_61005;
var state_61109__$1 = (function (){var statearr_61128 = state_61109;
(statearr_61128[(18)] = inst_61004);

(statearr_61128[(13)] = inst_60989__$1);

(statearr_61128[(14)] = inst_60988__$1);

(statearr_61128[(15)] = inst_60987__$1);

(statearr_61128[(17)] = inst_60986__$1);

return statearr_61128;
})();
var statearr_61129_61205 = state_61109__$1;
(statearr_61129_61205[(2)] = null);

(statearr_61129_61205[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61110 === (21))){
var inst_61031 = (state_61109[(2)]);
var state_61109__$1 = state_61109;
var statearr_61133_61206 = state_61109__$1;
(statearr_61133_61206[(2)] = inst_61031);

(statearr_61133_61206[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61110 === (31))){
var inst_61057 = (state_61109[(10)]);
var inst_61061 = done.call(null,null);
var inst_61062 = cljs.core.async.untap_STAR_.call(null,m,inst_61057);
var state_61109__$1 = (function (){var statearr_61134 = state_61109;
(statearr_61134[(19)] = inst_61061);

return statearr_61134;
})();
var statearr_61135_61207 = state_61109__$1;
(statearr_61135_61207[(2)] = inst_61062);

(statearr_61135_61207[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61110 === (32))){
var inst_61049 = (state_61109[(20)]);
var inst_61052 = (state_61109[(9)]);
var inst_61051 = (state_61109[(21)]);
var inst_61050 = (state_61109[(11)]);
var inst_61064 = (state_61109[(2)]);
var inst_61065 = (inst_61052 + (1));
var tmp61130 = inst_61049;
var tmp61131 = inst_61051;
var tmp61132 = inst_61050;
var inst_61049__$1 = tmp61130;
var inst_61050__$1 = tmp61132;
var inst_61051__$1 = tmp61131;
var inst_61052__$1 = inst_61065;
var state_61109__$1 = (function (){var statearr_61136 = state_61109;
(statearr_61136[(20)] = inst_61049__$1);

(statearr_61136[(9)] = inst_61052__$1);

(statearr_61136[(21)] = inst_61051__$1);

(statearr_61136[(11)] = inst_61050__$1);

(statearr_61136[(22)] = inst_61064);

return statearr_61136;
})();
var statearr_61137_61208 = state_61109__$1;
(statearr_61137_61208[(2)] = null);

(statearr_61137_61208[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61110 === (40))){
var inst_61077 = (state_61109[(23)]);
var inst_61081 = done.call(null,null);
var inst_61082 = cljs.core.async.untap_STAR_.call(null,m,inst_61077);
var state_61109__$1 = (function (){var statearr_61138 = state_61109;
(statearr_61138[(24)] = inst_61081);

return statearr_61138;
})();
var statearr_61139_61209 = state_61109__$1;
(statearr_61139_61209[(2)] = inst_61082);

(statearr_61139_61209[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61110 === (33))){
var inst_61068 = (state_61109[(25)]);
var inst_61070 = cljs.core.chunked_seq_QMARK_.call(null,inst_61068);
var state_61109__$1 = state_61109;
if(inst_61070){
var statearr_61140_61210 = state_61109__$1;
(statearr_61140_61210[(1)] = (36));

} else {
var statearr_61141_61211 = state_61109__$1;
(statearr_61141_61211[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61110 === (13))){
var inst_60998 = (state_61109[(26)]);
var inst_61001 = cljs.core.async.close_BANG_.call(null,inst_60998);
var state_61109__$1 = state_61109;
var statearr_61142_61212 = state_61109__$1;
(statearr_61142_61212[(2)] = inst_61001);

(statearr_61142_61212[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61110 === (22))){
var inst_61021 = (state_61109[(8)]);
var inst_61024 = cljs.core.async.close_BANG_.call(null,inst_61021);
var state_61109__$1 = state_61109;
var statearr_61143_61213 = state_61109__$1;
(statearr_61143_61213[(2)] = inst_61024);

(statearr_61143_61213[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61110 === (36))){
var inst_61068 = (state_61109[(25)]);
var inst_61072 = cljs.core.chunk_first.call(null,inst_61068);
var inst_61073 = cljs.core.chunk_rest.call(null,inst_61068);
var inst_61074 = cljs.core.count.call(null,inst_61072);
var inst_61049 = inst_61073;
var inst_61050 = inst_61072;
var inst_61051 = inst_61074;
var inst_61052 = (0);
var state_61109__$1 = (function (){var statearr_61144 = state_61109;
(statearr_61144[(20)] = inst_61049);

(statearr_61144[(9)] = inst_61052);

(statearr_61144[(21)] = inst_61051);

(statearr_61144[(11)] = inst_61050);

return statearr_61144;
})();
var statearr_61145_61214 = state_61109__$1;
(statearr_61145_61214[(2)] = null);

(statearr_61145_61214[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61110 === (41))){
var inst_61068 = (state_61109[(25)]);
var inst_61084 = (state_61109[(2)]);
var inst_61085 = cljs.core.next.call(null,inst_61068);
var inst_61049 = inst_61085;
var inst_61050 = null;
var inst_61051 = (0);
var inst_61052 = (0);
var state_61109__$1 = (function (){var statearr_61146 = state_61109;
(statearr_61146[(20)] = inst_61049);

(statearr_61146[(9)] = inst_61052);

(statearr_61146[(21)] = inst_61051);

(statearr_61146[(11)] = inst_61050);

(statearr_61146[(27)] = inst_61084);

return statearr_61146;
})();
var statearr_61147_61215 = state_61109__$1;
(statearr_61147_61215[(2)] = null);

(statearr_61147_61215[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61110 === (43))){
var state_61109__$1 = state_61109;
var statearr_61148_61216 = state_61109__$1;
(statearr_61148_61216[(2)] = null);

(statearr_61148_61216[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61110 === (29))){
var inst_61093 = (state_61109[(2)]);
var state_61109__$1 = state_61109;
var statearr_61149_61217 = state_61109__$1;
(statearr_61149_61217[(2)] = inst_61093);

(statearr_61149_61217[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61110 === (44))){
var inst_61102 = (state_61109[(2)]);
var state_61109__$1 = (function (){var statearr_61150 = state_61109;
(statearr_61150[(28)] = inst_61102);

return statearr_61150;
})();
var statearr_61151_61218 = state_61109__$1;
(statearr_61151_61218[(2)] = null);

(statearr_61151_61218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61110 === (6))){
var inst_61041 = (state_61109[(29)]);
var inst_61040 = cljs.core.deref.call(null,cs);
var inst_61041__$1 = cljs.core.keys.call(null,inst_61040);
var inst_61042 = cljs.core.count.call(null,inst_61041__$1);
var inst_61043 = cljs.core.reset_BANG_.call(null,dctr,inst_61042);
var inst_61048 = cljs.core.seq.call(null,inst_61041__$1);
var inst_61049 = inst_61048;
var inst_61050 = null;
var inst_61051 = (0);
var inst_61052 = (0);
var state_61109__$1 = (function (){var statearr_61152 = state_61109;
(statearr_61152[(20)] = inst_61049);

(statearr_61152[(30)] = inst_61043);

(statearr_61152[(9)] = inst_61052);

(statearr_61152[(21)] = inst_61051);

(statearr_61152[(11)] = inst_61050);

(statearr_61152[(29)] = inst_61041__$1);

return statearr_61152;
})();
var statearr_61153_61219 = state_61109__$1;
(statearr_61153_61219[(2)] = null);

(statearr_61153_61219[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61110 === (28))){
var inst_61049 = (state_61109[(20)]);
var inst_61068 = (state_61109[(25)]);
var inst_61068__$1 = cljs.core.seq.call(null,inst_61049);
var state_61109__$1 = (function (){var statearr_61154 = state_61109;
(statearr_61154[(25)] = inst_61068__$1);

return statearr_61154;
})();
if(inst_61068__$1){
var statearr_61155_61220 = state_61109__$1;
(statearr_61155_61220[(1)] = (33));

} else {
var statearr_61156_61221 = state_61109__$1;
(statearr_61156_61221[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61110 === (25))){
var inst_61052 = (state_61109[(9)]);
var inst_61051 = (state_61109[(21)]);
var inst_61054 = (inst_61052 < inst_61051);
var inst_61055 = inst_61054;
var state_61109__$1 = state_61109;
if(cljs.core.truth_(inst_61055)){
var statearr_61157_61222 = state_61109__$1;
(statearr_61157_61222[(1)] = (27));

} else {
var statearr_61158_61223 = state_61109__$1;
(statearr_61158_61223[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61110 === (34))){
var state_61109__$1 = state_61109;
var statearr_61159_61224 = state_61109__$1;
(statearr_61159_61224[(2)] = null);

(statearr_61159_61224[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61110 === (17))){
var state_61109__$1 = state_61109;
var statearr_61160_61225 = state_61109__$1;
(statearr_61160_61225[(2)] = null);

(statearr_61160_61225[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61110 === (3))){
var inst_61107 = (state_61109[(2)]);
var state_61109__$1 = state_61109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61109__$1,inst_61107);
} else {
if((state_val_61110 === (12))){
var inst_61036 = (state_61109[(2)]);
var state_61109__$1 = state_61109;
var statearr_61161_61226 = state_61109__$1;
(statearr_61161_61226[(2)] = inst_61036);

(statearr_61161_61226[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61110 === (2))){
var state_61109__$1 = state_61109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61109__$1,(4),ch);
} else {
if((state_val_61110 === (23))){
var state_61109__$1 = state_61109;
var statearr_61162_61227 = state_61109__$1;
(statearr_61162_61227[(2)] = null);

(statearr_61162_61227[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61110 === (35))){
var inst_61091 = (state_61109[(2)]);
var state_61109__$1 = state_61109;
var statearr_61163_61228 = state_61109__$1;
(statearr_61163_61228[(2)] = inst_61091);

(statearr_61163_61228[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61110 === (19))){
var inst_61008 = (state_61109[(7)]);
var inst_61012 = cljs.core.chunk_first.call(null,inst_61008);
var inst_61013 = cljs.core.chunk_rest.call(null,inst_61008);
var inst_61014 = cljs.core.count.call(null,inst_61012);
var inst_60986 = inst_61013;
var inst_60987 = inst_61012;
var inst_60988 = inst_61014;
var inst_60989 = (0);
var state_61109__$1 = (function (){var statearr_61164 = state_61109;
(statearr_61164[(13)] = inst_60989);

(statearr_61164[(14)] = inst_60988);

(statearr_61164[(15)] = inst_60987);

(statearr_61164[(17)] = inst_60986);

return statearr_61164;
})();
var statearr_61165_61229 = state_61109__$1;
(statearr_61165_61229[(2)] = null);

(statearr_61165_61229[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61110 === (11))){
var inst_61008 = (state_61109[(7)]);
var inst_60986 = (state_61109[(17)]);
var inst_61008__$1 = cljs.core.seq.call(null,inst_60986);
var state_61109__$1 = (function (){var statearr_61166 = state_61109;
(statearr_61166[(7)] = inst_61008__$1);

return statearr_61166;
})();
if(inst_61008__$1){
var statearr_61167_61230 = state_61109__$1;
(statearr_61167_61230[(1)] = (16));

} else {
var statearr_61168_61231 = state_61109__$1;
(statearr_61168_61231[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61110 === (9))){
var inst_61038 = (state_61109[(2)]);
var state_61109__$1 = state_61109;
var statearr_61169_61232 = state_61109__$1;
(statearr_61169_61232[(2)] = inst_61038);

(statearr_61169_61232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61110 === (5))){
var inst_60984 = cljs.core.deref.call(null,cs);
var inst_60985 = cljs.core.seq.call(null,inst_60984);
var inst_60986 = inst_60985;
var inst_60987 = null;
var inst_60988 = (0);
var inst_60989 = (0);
var state_61109__$1 = (function (){var statearr_61170 = state_61109;
(statearr_61170[(13)] = inst_60989);

(statearr_61170[(14)] = inst_60988);

(statearr_61170[(15)] = inst_60987);

(statearr_61170[(17)] = inst_60986);

return statearr_61170;
})();
var statearr_61171_61233 = state_61109__$1;
(statearr_61171_61233[(2)] = null);

(statearr_61171_61233[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61110 === (14))){
var state_61109__$1 = state_61109;
var statearr_61172_61234 = state_61109__$1;
(statearr_61172_61234[(2)] = null);

(statearr_61172_61234[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61110 === (45))){
var inst_61099 = (state_61109[(2)]);
var state_61109__$1 = state_61109;
var statearr_61173_61235 = state_61109__$1;
(statearr_61173_61235[(2)] = inst_61099);

(statearr_61173_61235[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61110 === (26))){
var inst_61041 = (state_61109[(29)]);
var inst_61095 = (state_61109[(2)]);
var inst_61096 = cljs.core.seq.call(null,inst_61041);
var state_61109__$1 = (function (){var statearr_61174 = state_61109;
(statearr_61174[(31)] = inst_61095);

return statearr_61174;
})();
if(inst_61096){
var statearr_61175_61236 = state_61109__$1;
(statearr_61175_61236[(1)] = (42));

} else {
var statearr_61176_61237 = state_61109__$1;
(statearr_61176_61237[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61110 === (16))){
var inst_61008 = (state_61109[(7)]);
var inst_61010 = cljs.core.chunked_seq_QMARK_.call(null,inst_61008);
var state_61109__$1 = state_61109;
if(inst_61010){
var statearr_61177_61238 = state_61109__$1;
(statearr_61177_61238[(1)] = (19));

} else {
var statearr_61178_61239 = state_61109__$1;
(statearr_61178_61239[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61110 === (38))){
var inst_61088 = (state_61109[(2)]);
var state_61109__$1 = state_61109;
var statearr_61179_61240 = state_61109__$1;
(statearr_61179_61240[(2)] = inst_61088);

(statearr_61179_61240[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61110 === (30))){
var state_61109__$1 = state_61109;
var statearr_61180_61241 = state_61109__$1;
(statearr_61180_61241[(2)] = null);

(statearr_61180_61241[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61110 === (10))){
var inst_60989 = (state_61109[(13)]);
var inst_60987 = (state_61109[(15)]);
var inst_60997 = cljs.core._nth.call(null,inst_60987,inst_60989);
var inst_60998 = cljs.core.nth.call(null,inst_60997,(0),null);
var inst_60999 = cljs.core.nth.call(null,inst_60997,(1),null);
var state_61109__$1 = (function (){var statearr_61181 = state_61109;
(statearr_61181[(26)] = inst_60998);

return statearr_61181;
})();
if(cljs.core.truth_(inst_60999)){
var statearr_61182_61242 = state_61109__$1;
(statearr_61182_61242[(1)] = (13));

} else {
var statearr_61183_61243 = state_61109__$1;
(statearr_61183_61243[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61110 === (18))){
var inst_61034 = (state_61109[(2)]);
var state_61109__$1 = state_61109;
var statearr_61184_61244 = state_61109__$1;
(statearr_61184_61244[(2)] = inst_61034);

(statearr_61184_61244[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61110 === (42))){
var state_61109__$1 = state_61109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61109__$1,(45),dchan);
} else {
if((state_val_61110 === (37))){
var inst_61077 = (state_61109[(23)]);
var inst_61068 = (state_61109[(25)]);
var inst_60977 = (state_61109[(12)]);
var inst_61077__$1 = cljs.core.first.call(null,inst_61068);
var inst_61078 = cljs.core.async.put_BANG_.call(null,inst_61077__$1,inst_60977,done);
var state_61109__$1 = (function (){var statearr_61185 = state_61109;
(statearr_61185[(23)] = inst_61077__$1);

return statearr_61185;
})();
if(cljs.core.truth_(inst_61078)){
var statearr_61186_61245 = state_61109__$1;
(statearr_61186_61245[(1)] = (39));

} else {
var statearr_61187_61246 = state_61109__$1;
(statearr_61187_61246[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61110 === (8))){
var inst_60989 = (state_61109[(13)]);
var inst_60988 = (state_61109[(14)]);
var inst_60991 = (inst_60989 < inst_60988);
var inst_60992 = inst_60991;
var state_61109__$1 = state_61109;
if(cljs.core.truth_(inst_60992)){
var statearr_61188_61247 = state_61109__$1;
(statearr_61188_61247[(1)] = (10));

} else {
var statearr_61189_61248 = state_61109__$1;
(statearr_61189_61248[(1)] = (11));

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
});})(c__44106__auto___61194,cs,m,dchan,dctr,done))
;
return ((function (switch__44016__auto__,c__44106__auto___61194,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__44017__auto__ = null;
var cljs$core$async$mult_$_state_machine__44017__auto____0 = (function (){
var statearr_61190 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61190[(0)] = cljs$core$async$mult_$_state_machine__44017__auto__);

(statearr_61190[(1)] = (1));

return statearr_61190;
});
var cljs$core$async$mult_$_state_machine__44017__auto____1 = (function (state_61109){
while(true){
var ret_value__44018__auto__ = (function (){try{while(true){
var result__44019__auto__ = switch__44016__auto__.call(null,state_61109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44019__auto__;
}
break;
}
}catch (e61191){if((e61191 instanceof Object)){
var ex__44020__auto__ = e61191;
var statearr_61192_61249 = state_61109;
(statearr_61192_61249[(5)] = ex__44020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61250 = state_61109;
state_61109 = G__61250;
continue;
} else {
return ret_value__44018__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__44017__auto__ = function(state_61109){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__44017__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__44017__auto____1.call(this,state_61109);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__44017__auto____0;
cljs$core$async$mult_$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__44017__auto____1;
return cljs$core$async$mult_$_state_machine__44017__auto__;
})()
;})(switch__44016__auto__,c__44106__auto___61194,cs,m,dchan,dctr,done))
})();
var state__44108__auto__ = (function (){var statearr_61193 = f__44107__auto__.call(null);
(statearr_61193[(6)] = c__44106__auto___61194);

return statearr_61193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44108__auto__);
});})(c__44106__auto___61194,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__61252 = arguments.length;
switch (G__61252) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__41783__auto__ = (((m == null))?null:m);
var m__41784__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__41783__auto__)]);
if(!((m__41784__auto__ == null))){
return m__41784__auto__.call(null,m,ch);
} else {
var m__41784__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__41784__auto____$1 == null))){
return m__41784__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__41783__auto__ = (((m == null))?null:m);
var m__41784__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__41783__auto__)]);
if(!((m__41784__auto__ == null))){
return m__41784__auto__.call(null,m,ch);
} else {
var m__41784__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__41784__auto____$1 == null))){
return m__41784__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__41783__auto__ = (((m == null))?null:m);
var m__41784__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__41783__auto__)]);
if(!((m__41784__auto__ == null))){
return m__41784__auto__.call(null,m);
} else {
var m__41784__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__41784__auto____$1 == null))){
return m__41784__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__41783__auto__ = (((m == null))?null:m);
var m__41784__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__41783__auto__)]);
if(!((m__41784__auto__ == null))){
return m__41784__auto__.call(null,m,state_map);
} else {
var m__41784__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__41784__auto____$1 == null))){
return m__41784__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__41783__auto__ = (((m == null))?null:m);
var m__41784__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__41783__auto__)]);
if(!((m__41784__auto__ == null))){
return m__41784__auto__.call(null,m,mode);
} else {
var m__41784__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__41784__auto____$1 == null))){
return m__41784__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__42304__auto__ = [];
var len__42297__auto___61264 = arguments.length;
var i__42298__auto___61265 = (0);
while(true){
if((i__42298__auto___61265 < len__42297__auto___61264)){
args__42304__auto__.push((arguments[i__42298__auto___61265]));

var G__61266 = (i__42298__auto___61265 + (1));
i__42298__auto___61265 = G__61266;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((3) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__42305__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__61258){
var map__61259 = p__61258;
var map__61259__$1 = ((((!((map__61259 == null)))?((((map__61259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61259.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61259):map__61259);
var opts = map__61259__$1;
var statearr_61261_61267 = state;
(statearr_61261_61267[(1)] = cont_block);


var temp__5278__auto__ = cljs.core.async.do_alts.call(null,((function (map__61259,map__61259__$1,opts){
return (function (val){
var statearr_61262_61268 = state;
(statearr_61262_61268[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__61259,map__61259__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5278__auto__)){
var cb = temp__5278__auto__;
var statearr_61263_61269 = state;
(statearr_61263_61269[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq61254){
var G__61255 = cljs.core.first.call(null,seq61254);
var seq61254__$1 = cljs.core.next.call(null,seq61254);
var G__61256 = cljs.core.first.call(null,seq61254__$1);
var seq61254__$2 = cljs.core.next.call(null,seq61254__$1);
var G__61257 = cljs.core.first.call(null,seq61254__$2);
var seq61254__$3 = cljs.core.next.call(null,seq61254__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__61255,G__61256,G__61257,seq61254__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
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
if(typeof cljs.core.async.t_cljs$core$async61270 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61270 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta61271){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta61271 = meta61271;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async61270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_61272,meta61271__$1){
var self__ = this;
var _61272__$1 = this;
return (new cljs.core.async.t_cljs$core$async61270(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta61271__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61270.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_61272){
var self__ = this;
var _61272__$1 = this;
return self__.meta61271;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61270.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61270.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61270.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61270.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61270.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61270.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61270.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61270.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61270.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta61271","meta61271",852554607,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61270.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61270.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61270";

cljs.core.async.t_cljs$core$async61270.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__41721__auto__,writer__41722__auto__,opt__41723__auto__){
return cljs.core._write.call(null,writer__41722__auto__,"cljs.core.async/t_cljs$core$async61270");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async61270 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async61270(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta61271){
return (new cljs.core.async.t_cljs$core$async61270(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta61271));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async61270(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44106__auto___61434 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44106__auto___61434,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__44107__auto__ = (function (){var switch__44016__auto__ = ((function (c__44106__auto___61434,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_61374){
var state_val_61375 = (state_61374[(1)]);
if((state_val_61375 === (7))){
var inst_61289 = (state_61374[(2)]);
var state_61374__$1 = state_61374;
var statearr_61376_61435 = state_61374__$1;
(statearr_61376_61435[(2)] = inst_61289);

(statearr_61376_61435[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61375 === (20))){
var inst_61301 = (state_61374[(7)]);
var state_61374__$1 = state_61374;
var statearr_61377_61436 = state_61374__$1;
(statearr_61377_61436[(2)] = inst_61301);

(statearr_61377_61436[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61375 === (27))){
var state_61374__$1 = state_61374;
var statearr_61378_61437 = state_61374__$1;
(statearr_61378_61437[(2)] = null);

(statearr_61378_61437[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61375 === (1))){
var inst_61276 = (state_61374[(8)]);
var inst_61276__$1 = calc_state.call(null);
var inst_61278 = (inst_61276__$1 == null);
var inst_61279 = cljs.core.not.call(null,inst_61278);
var state_61374__$1 = (function (){var statearr_61379 = state_61374;
(statearr_61379[(8)] = inst_61276__$1);

return statearr_61379;
})();
if(inst_61279){
var statearr_61380_61438 = state_61374__$1;
(statearr_61380_61438[(1)] = (2));

} else {
var statearr_61381_61439 = state_61374__$1;
(statearr_61381_61439[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61375 === (24))){
var inst_61334 = (state_61374[(9)]);
var inst_61325 = (state_61374[(10)]);
var inst_61348 = (state_61374[(11)]);
var inst_61348__$1 = inst_61325.call(null,inst_61334);
var state_61374__$1 = (function (){var statearr_61382 = state_61374;
(statearr_61382[(11)] = inst_61348__$1);

return statearr_61382;
})();
if(cljs.core.truth_(inst_61348__$1)){
var statearr_61383_61440 = state_61374__$1;
(statearr_61383_61440[(1)] = (29));

} else {
var statearr_61384_61441 = state_61374__$1;
(statearr_61384_61441[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61375 === (4))){
var inst_61292 = (state_61374[(2)]);
var state_61374__$1 = state_61374;
if(cljs.core.truth_(inst_61292)){
var statearr_61385_61442 = state_61374__$1;
(statearr_61385_61442[(1)] = (8));

} else {
var statearr_61386_61443 = state_61374__$1;
(statearr_61386_61443[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61375 === (15))){
var inst_61319 = (state_61374[(2)]);
var state_61374__$1 = state_61374;
if(cljs.core.truth_(inst_61319)){
var statearr_61387_61444 = state_61374__$1;
(statearr_61387_61444[(1)] = (19));

} else {
var statearr_61388_61445 = state_61374__$1;
(statearr_61388_61445[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61375 === (21))){
var inst_61324 = (state_61374[(12)]);
var inst_61324__$1 = (state_61374[(2)]);
var inst_61325 = cljs.core.get.call(null,inst_61324__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_61326 = cljs.core.get.call(null,inst_61324__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_61327 = cljs.core.get.call(null,inst_61324__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_61374__$1 = (function (){var statearr_61389 = state_61374;
(statearr_61389[(10)] = inst_61325);

(statearr_61389[(12)] = inst_61324__$1);

(statearr_61389[(13)] = inst_61326);

return statearr_61389;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_61374__$1,(22),inst_61327);
} else {
if((state_val_61375 === (31))){
var inst_61356 = (state_61374[(2)]);
var state_61374__$1 = state_61374;
if(cljs.core.truth_(inst_61356)){
var statearr_61390_61446 = state_61374__$1;
(statearr_61390_61446[(1)] = (32));

} else {
var statearr_61391_61447 = state_61374__$1;
(statearr_61391_61447[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61375 === (32))){
var inst_61333 = (state_61374[(14)]);
var state_61374__$1 = state_61374;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61374__$1,(35),out,inst_61333);
} else {
if((state_val_61375 === (33))){
var inst_61324 = (state_61374[(12)]);
var inst_61301 = inst_61324;
var state_61374__$1 = (function (){var statearr_61392 = state_61374;
(statearr_61392[(7)] = inst_61301);

return statearr_61392;
})();
var statearr_61393_61448 = state_61374__$1;
(statearr_61393_61448[(2)] = null);

(statearr_61393_61448[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61375 === (13))){
var inst_61301 = (state_61374[(7)]);
var inst_61308 = inst_61301.cljs$lang$protocol_mask$partition0$;
var inst_61309 = (inst_61308 & (64));
var inst_61310 = inst_61301.cljs$core$ISeq$;
var inst_61311 = (cljs.core.PROTOCOL_SENTINEL === inst_61310);
var inst_61312 = (inst_61309) || (inst_61311);
var state_61374__$1 = state_61374;
if(cljs.core.truth_(inst_61312)){
var statearr_61394_61449 = state_61374__$1;
(statearr_61394_61449[(1)] = (16));

} else {
var statearr_61395_61450 = state_61374__$1;
(statearr_61395_61450[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61375 === (22))){
var inst_61333 = (state_61374[(14)]);
var inst_61334 = (state_61374[(9)]);
var inst_61332 = (state_61374[(2)]);
var inst_61333__$1 = cljs.core.nth.call(null,inst_61332,(0),null);
var inst_61334__$1 = cljs.core.nth.call(null,inst_61332,(1),null);
var inst_61335 = (inst_61333__$1 == null);
var inst_61336 = cljs.core._EQ_.call(null,inst_61334__$1,change);
var inst_61337 = (inst_61335) || (inst_61336);
var state_61374__$1 = (function (){var statearr_61396 = state_61374;
(statearr_61396[(14)] = inst_61333__$1);

(statearr_61396[(9)] = inst_61334__$1);

return statearr_61396;
})();
if(cljs.core.truth_(inst_61337)){
var statearr_61397_61451 = state_61374__$1;
(statearr_61397_61451[(1)] = (23));

} else {
var statearr_61398_61452 = state_61374__$1;
(statearr_61398_61452[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61375 === (36))){
var inst_61324 = (state_61374[(12)]);
var inst_61301 = inst_61324;
var state_61374__$1 = (function (){var statearr_61399 = state_61374;
(statearr_61399[(7)] = inst_61301);

return statearr_61399;
})();
var statearr_61400_61453 = state_61374__$1;
(statearr_61400_61453[(2)] = null);

(statearr_61400_61453[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61375 === (29))){
var inst_61348 = (state_61374[(11)]);
var state_61374__$1 = state_61374;
var statearr_61401_61454 = state_61374__$1;
(statearr_61401_61454[(2)] = inst_61348);

(statearr_61401_61454[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61375 === (6))){
var state_61374__$1 = state_61374;
var statearr_61402_61455 = state_61374__$1;
(statearr_61402_61455[(2)] = false);

(statearr_61402_61455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61375 === (28))){
var inst_61344 = (state_61374[(2)]);
var inst_61345 = calc_state.call(null);
var inst_61301 = inst_61345;
var state_61374__$1 = (function (){var statearr_61403 = state_61374;
(statearr_61403[(7)] = inst_61301);

(statearr_61403[(15)] = inst_61344);

return statearr_61403;
})();
var statearr_61404_61456 = state_61374__$1;
(statearr_61404_61456[(2)] = null);

(statearr_61404_61456[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61375 === (25))){
var inst_61370 = (state_61374[(2)]);
var state_61374__$1 = state_61374;
var statearr_61405_61457 = state_61374__$1;
(statearr_61405_61457[(2)] = inst_61370);

(statearr_61405_61457[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61375 === (34))){
var inst_61368 = (state_61374[(2)]);
var state_61374__$1 = state_61374;
var statearr_61406_61458 = state_61374__$1;
(statearr_61406_61458[(2)] = inst_61368);

(statearr_61406_61458[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61375 === (17))){
var state_61374__$1 = state_61374;
var statearr_61407_61459 = state_61374__$1;
(statearr_61407_61459[(2)] = false);

(statearr_61407_61459[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61375 === (3))){
var state_61374__$1 = state_61374;
var statearr_61408_61460 = state_61374__$1;
(statearr_61408_61460[(2)] = false);

(statearr_61408_61460[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61375 === (12))){
var inst_61372 = (state_61374[(2)]);
var state_61374__$1 = state_61374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61374__$1,inst_61372);
} else {
if((state_val_61375 === (2))){
var inst_61276 = (state_61374[(8)]);
var inst_61281 = inst_61276.cljs$lang$protocol_mask$partition0$;
var inst_61282 = (inst_61281 & (64));
var inst_61283 = inst_61276.cljs$core$ISeq$;
var inst_61284 = (cljs.core.PROTOCOL_SENTINEL === inst_61283);
var inst_61285 = (inst_61282) || (inst_61284);
var state_61374__$1 = state_61374;
if(cljs.core.truth_(inst_61285)){
var statearr_61409_61461 = state_61374__$1;
(statearr_61409_61461[(1)] = (5));

} else {
var statearr_61410_61462 = state_61374__$1;
(statearr_61410_61462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61375 === (23))){
var inst_61333 = (state_61374[(14)]);
var inst_61339 = (inst_61333 == null);
var state_61374__$1 = state_61374;
if(cljs.core.truth_(inst_61339)){
var statearr_61411_61463 = state_61374__$1;
(statearr_61411_61463[(1)] = (26));

} else {
var statearr_61412_61464 = state_61374__$1;
(statearr_61412_61464[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61375 === (35))){
var inst_61359 = (state_61374[(2)]);
var state_61374__$1 = state_61374;
if(cljs.core.truth_(inst_61359)){
var statearr_61413_61465 = state_61374__$1;
(statearr_61413_61465[(1)] = (36));

} else {
var statearr_61414_61466 = state_61374__$1;
(statearr_61414_61466[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61375 === (19))){
var inst_61301 = (state_61374[(7)]);
var inst_61321 = cljs.core.apply.call(null,cljs.core.hash_map,inst_61301);
var state_61374__$1 = state_61374;
var statearr_61415_61467 = state_61374__$1;
(statearr_61415_61467[(2)] = inst_61321);

(statearr_61415_61467[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61375 === (11))){
var inst_61301 = (state_61374[(7)]);
var inst_61305 = (inst_61301 == null);
var inst_61306 = cljs.core.not.call(null,inst_61305);
var state_61374__$1 = state_61374;
if(inst_61306){
var statearr_61416_61468 = state_61374__$1;
(statearr_61416_61468[(1)] = (13));

} else {
var statearr_61417_61469 = state_61374__$1;
(statearr_61417_61469[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61375 === (9))){
var inst_61276 = (state_61374[(8)]);
var state_61374__$1 = state_61374;
var statearr_61418_61470 = state_61374__$1;
(statearr_61418_61470[(2)] = inst_61276);

(statearr_61418_61470[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61375 === (5))){
var state_61374__$1 = state_61374;
var statearr_61419_61471 = state_61374__$1;
(statearr_61419_61471[(2)] = true);

(statearr_61419_61471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61375 === (14))){
var state_61374__$1 = state_61374;
var statearr_61420_61472 = state_61374__$1;
(statearr_61420_61472[(2)] = false);

(statearr_61420_61472[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61375 === (26))){
var inst_61334 = (state_61374[(9)]);
var inst_61341 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_61334);
var state_61374__$1 = state_61374;
var statearr_61421_61473 = state_61374__$1;
(statearr_61421_61473[(2)] = inst_61341);

(statearr_61421_61473[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61375 === (16))){
var state_61374__$1 = state_61374;
var statearr_61422_61474 = state_61374__$1;
(statearr_61422_61474[(2)] = true);

(statearr_61422_61474[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61375 === (38))){
var inst_61364 = (state_61374[(2)]);
var state_61374__$1 = state_61374;
var statearr_61423_61475 = state_61374__$1;
(statearr_61423_61475[(2)] = inst_61364);

(statearr_61423_61475[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61375 === (30))){
var inst_61334 = (state_61374[(9)]);
var inst_61325 = (state_61374[(10)]);
var inst_61326 = (state_61374[(13)]);
var inst_61351 = cljs.core.empty_QMARK_.call(null,inst_61325);
var inst_61352 = inst_61326.call(null,inst_61334);
var inst_61353 = cljs.core.not.call(null,inst_61352);
var inst_61354 = (inst_61351) && (inst_61353);
var state_61374__$1 = state_61374;
var statearr_61424_61476 = state_61374__$1;
(statearr_61424_61476[(2)] = inst_61354);

(statearr_61424_61476[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61375 === (10))){
var inst_61276 = (state_61374[(8)]);
var inst_61297 = (state_61374[(2)]);
var inst_61298 = cljs.core.get.call(null,inst_61297,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_61299 = cljs.core.get.call(null,inst_61297,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_61300 = cljs.core.get.call(null,inst_61297,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_61301 = inst_61276;
var state_61374__$1 = (function (){var statearr_61425 = state_61374;
(statearr_61425[(7)] = inst_61301);

(statearr_61425[(16)] = inst_61298);

(statearr_61425[(17)] = inst_61299);

(statearr_61425[(18)] = inst_61300);

return statearr_61425;
})();
var statearr_61426_61477 = state_61374__$1;
(statearr_61426_61477[(2)] = null);

(statearr_61426_61477[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61375 === (18))){
var inst_61316 = (state_61374[(2)]);
var state_61374__$1 = state_61374;
var statearr_61427_61478 = state_61374__$1;
(statearr_61427_61478[(2)] = inst_61316);

(statearr_61427_61478[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61375 === (37))){
var state_61374__$1 = state_61374;
var statearr_61428_61479 = state_61374__$1;
(statearr_61428_61479[(2)] = null);

(statearr_61428_61479[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61375 === (8))){
var inst_61276 = (state_61374[(8)]);
var inst_61294 = cljs.core.apply.call(null,cljs.core.hash_map,inst_61276);
var state_61374__$1 = state_61374;
var statearr_61429_61480 = state_61374__$1;
(statearr_61429_61480[(2)] = inst_61294);

(statearr_61429_61480[(1)] = (10));


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
});})(c__44106__auto___61434,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__44016__auto__,c__44106__auto___61434,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__44017__auto__ = null;
var cljs$core$async$mix_$_state_machine__44017__auto____0 = (function (){
var statearr_61430 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61430[(0)] = cljs$core$async$mix_$_state_machine__44017__auto__);

(statearr_61430[(1)] = (1));

return statearr_61430;
});
var cljs$core$async$mix_$_state_machine__44017__auto____1 = (function (state_61374){
while(true){
var ret_value__44018__auto__ = (function (){try{while(true){
var result__44019__auto__ = switch__44016__auto__.call(null,state_61374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44019__auto__;
}
break;
}
}catch (e61431){if((e61431 instanceof Object)){
var ex__44020__auto__ = e61431;
var statearr_61432_61481 = state_61374;
(statearr_61432_61481[(5)] = ex__44020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61482 = state_61374;
state_61374 = G__61482;
continue;
} else {
return ret_value__44018__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__44017__auto__ = function(state_61374){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__44017__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__44017__auto____1.call(this,state_61374);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__44017__auto____0;
cljs$core$async$mix_$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__44017__auto____1;
return cljs$core$async$mix_$_state_machine__44017__auto__;
})()
;})(switch__44016__auto__,c__44106__auto___61434,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__44108__auto__ = (function (){var statearr_61433 = f__44107__auto__.call(null);
(statearr_61433[(6)] = c__44106__auto___61434);

return statearr_61433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44108__auto__);
});})(c__44106__auto___61434,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__41783__auto__ = (((p == null))?null:p);
var m__41784__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__41783__auto__)]);
if(!((m__41784__auto__ == null))){
return m__41784__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__41784__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__41784__auto____$1 == null))){
return m__41784__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__41783__auto__ = (((p == null))?null:p);
var m__41784__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__41783__auto__)]);
if(!((m__41784__auto__ == null))){
return m__41784__auto__.call(null,p,v,ch);
} else {
var m__41784__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__41784__auto____$1 == null))){
return m__41784__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__61484 = arguments.length;
switch (G__61484) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__41783__auto__ = (((p == null))?null:p);
var m__41784__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__41783__auto__)]);
if(!((m__41784__auto__ == null))){
return m__41784__auto__.call(null,p);
} else {
var m__41784__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__41784__auto____$1 == null))){
return m__41784__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__41783__auto__ = (((p == null))?null:p);
var m__41784__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__41783__auto__)]);
if(!((m__41784__auto__ == null))){
return m__41784__auto__.call(null,p,v);
} else {
var m__41784__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__41784__auto____$1 == null))){
return m__41784__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__61488 = arguments.length;
switch (G__61488) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__41064__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__41064__auto__)){
return or__41064__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__41064__auto__,mults){
return (function (p1__61486_SHARP_){
if(cljs.core.truth_(p1__61486_SHARP_.call(null,topic))){
return p1__61486_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__61486_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__41064__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async61489 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61489 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta61490){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta61490 = meta61490;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async61489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_61491,meta61490__$1){
var self__ = this;
var _61491__$1 = this;
return (new cljs.core.async.t_cljs$core$async61489(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta61490__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61489.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_61491){
var self__ = this;
var _61491__$1 = this;
return self__.meta61490;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61489.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61489.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61489.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61489.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61489.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5278__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5278__auto__)){
var m = temp__5278__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61489.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61489.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61489.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta61490","meta61490",1983934732,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61489.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61489.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61489";

cljs.core.async.t_cljs$core$async61489.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__41721__auto__,writer__41722__auto__,opt__41723__auto__){
return cljs.core._write.call(null,writer__41722__auto__,"cljs.core.async/t_cljs$core$async61489");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async61489 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async61489(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta61490){
return (new cljs.core.async.t_cljs$core$async61489(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta61490));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async61489(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44106__auto___61609 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44106__auto___61609,mults,ensure_mult,p){
return (function (){
var f__44107__auto__ = (function (){var switch__44016__auto__ = ((function (c__44106__auto___61609,mults,ensure_mult,p){
return (function (state_61563){
var state_val_61564 = (state_61563[(1)]);
if((state_val_61564 === (7))){
var inst_61559 = (state_61563[(2)]);
var state_61563__$1 = state_61563;
var statearr_61565_61610 = state_61563__$1;
(statearr_61565_61610[(2)] = inst_61559);

(statearr_61565_61610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61564 === (20))){
var state_61563__$1 = state_61563;
var statearr_61566_61611 = state_61563__$1;
(statearr_61566_61611[(2)] = null);

(statearr_61566_61611[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61564 === (1))){
var state_61563__$1 = state_61563;
var statearr_61567_61612 = state_61563__$1;
(statearr_61567_61612[(2)] = null);

(statearr_61567_61612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61564 === (24))){
var inst_61542 = (state_61563[(7)]);
var inst_61551 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_61542);
var state_61563__$1 = state_61563;
var statearr_61568_61613 = state_61563__$1;
(statearr_61568_61613[(2)] = inst_61551);

(statearr_61568_61613[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61564 === (4))){
var inst_61494 = (state_61563[(8)]);
var inst_61494__$1 = (state_61563[(2)]);
var inst_61495 = (inst_61494__$1 == null);
var state_61563__$1 = (function (){var statearr_61569 = state_61563;
(statearr_61569[(8)] = inst_61494__$1);

return statearr_61569;
})();
if(cljs.core.truth_(inst_61495)){
var statearr_61570_61614 = state_61563__$1;
(statearr_61570_61614[(1)] = (5));

} else {
var statearr_61571_61615 = state_61563__$1;
(statearr_61571_61615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61564 === (15))){
var inst_61536 = (state_61563[(2)]);
var state_61563__$1 = state_61563;
var statearr_61572_61616 = state_61563__$1;
(statearr_61572_61616[(2)] = inst_61536);

(statearr_61572_61616[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61564 === (21))){
var inst_61556 = (state_61563[(2)]);
var state_61563__$1 = (function (){var statearr_61573 = state_61563;
(statearr_61573[(9)] = inst_61556);

return statearr_61573;
})();
var statearr_61574_61617 = state_61563__$1;
(statearr_61574_61617[(2)] = null);

(statearr_61574_61617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61564 === (13))){
var inst_61518 = (state_61563[(10)]);
var inst_61520 = cljs.core.chunked_seq_QMARK_.call(null,inst_61518);
var state_61563__$1 = state_61563;
if(inst_61520){
var statearr_61575_61618 = state_61563__$1;
(statearr_61575_61618[(1)] = (16));

} else {
var statearr_61576_61619 = state_61563__$1;
(statearr_61576_61619[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61564 === (22))){
var inst_61548 = (state_61563[(2)]);
var state_61563__$1 = state_61563;
if(cljs.core.truth_(inst_61548)){
var statearr_61577_61620 = state_61563__$1;
(statearr_61577_61620[(1)] = (23));

} else {
var statearr_61578_61621 = state_61563__$1;
(statearr_61578_61621[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61564 === (6))){
var inst_61494 = (state_61563[(8)]);
var inst_61544 = (state_61563[(11)]);
var inst_61542 = (state_61563[(7)]);
var inst_61542__$1 = topic_fn.call(null,inst_61494);
var inst_61543 = cljs.core.deref.call(null,mults);
var inst_61544__$1 = cljs.core.get.call(null,inst_61543,inst_61542__$1);
var state_61563__$1 = (function (){var statearr_61579 = state_61563;
(statearr_61579[(11)] = inst_61544__$1);

(statearr_61579[(7)] = inst_61542__$1);

return statearr_61579;
})();
if(cljs.core.truth_(inst_61544__$1)){
var statearr_61580_61622 = state_61563__$1;
(statearr_61580_61622[(1)] = (19));

} else {
var statearr_61581_61623 = state_61563__$1;
(statearr_61581_61623[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61564 === (25))){
var inst_61553 = (state_61563[(2)]);
var state_61563__$1 = state_61563;
var statearr_61582_61624 = state_61563__$1;
(statearr_61582_61624[(2)] = inst_61553);

(statearr_61582_61624[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61564 === (17))){
var inst_61518 = (state_61563[(10)]);
var inst_61527 = cljs.core.first.call(null,inst_61518);
var inst_61528 = cljs.core.async.muxch_STAR_.call(null,inst_61527);
var inst_61529 = cljs.core.async.close_BANG_.call(null,inst_61528);
var inst_61530 = cljs.core.next.call(null,inst_61518);
var inst_61504 = inst_61530;
var inst_61505 = null;
var inst_61506 = (0);
var inst_61507 = (0);
var state_61563__$1 = (function (){var statearr_61583 = state_61563;
(statearr_61583[(12)] = inst_61504);

(statearr_61583[(13)] = inst_61507);

(statearr_61583[(14)] = inst_61529);

(statearr_61583[(15)] = inst_61506);

(statearr_61583[(16)] = inst_61505);

return statearr_61583;
})();
var statearr_61584_61625 = state_61563__$1;
(statearr_61584_61625[(2)] = null);

(statearr_61584_61625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61564 === (3))){
var inst_61561 = (state_61563[(2)]);
var state_61563__$1 = state_61563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61563__$1,inst_61561);
} else {
if((state_val_61564 === (12))){
var inst_61538 = (state_61563[(2)]);
var state_61563__$1 = state_61563;
var statearr_61585_61626 = state_61563__$1;
(statearr_61585_61626[(2)] = inst_61538);

(statearr_61585_61626[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61564 === (2))){
var state_61563__$1 = state_61563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61563__$1,(4),ch);
} else {
if((state_val_61564 === (23))){
var state_61563__$1 = state_61563;
var statearr_61586_61627 = state_61563__$1;
(statearr_61586_61627[(2)] = null);

(statearr_61586_61627[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61564 === (19))){
var inst_61494 = (state_61563[(8)]);
var inst_61544 = (state_61563[(11)]);
var inst_61546 = cljs.core.async.muxch_STAR_.call(null,inst_61544);
var state_61563__$1 = state_61563;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61563__$1,(22),inst_61546,inst_61494);
} else {
if((state_val_61564 === (11))){
var inst_61504 = (state_61563[(12)]);
var inst_61518 = (state_61563[(10)]);
var inst_61518__$1 = cljs.core.seq.call(null,inst_61504);
var state_61563__$1 = (function (){var statearr_61587 = state_61563;
(statearr_61587[(10)] = inst_61518__$1);

return statearr_61587;
})();
if(inst_61518__$1){
var statearr_61588_61628 = state_61563__$1;
(statearr_61588_61628[(1)] = (13));

} else {
var statearr_61589_61629 = state_61563__$1;
(statearr_61589_61629[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61564 === (9))){
var inst_61540 = (state_61563[(2)]);
var state_61563__$1 = state_61563;
var statearr_61590_61630 = state_61563__$1;
(statearr_61590_61630[(2)] = inst_61540);

(statearr_61590_61630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61564 === (5))){
var inst_61501 = cljs.core.deref.call(null,mults);
var inst_61502 = cljs.core.vals.call(null,inst_61501);
var inst_61503 = cljs.core.seq.call(null,inst_61502);
var inst_61504 = inst_61503;
var inst_61505 = null;
var inst_61506 = (0);
var inst_61507 = (0);
var state_61563__$1 = (function (){var statearr_61591 = state_61563;
(statearr_61591[(12)] = inst_61504);

(statearr_61591[(13)] = inst_61507);

(statearr_61591[(15)] = inst_61506);

(statearr_61591[(16)] = inst_61505);

return statearr_61591;
})();
var statearr_61592_61631 = state_61563__$1;
(statearr_61592_61631[(2)] = null);

(statearr_61592_61631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61564 === (14))){
var state_61563__$1 = state_61563;
var statearr_61596_61632 = state_61563__$1;
(statearr_61596_61632[(2)] = null);

(statearr_61596_61632[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61564 === (16))){
var inst_61518 = (state_61563[(10)]);
var inst_61522 = cljs.core.chunk_first.call(null,inst_61518);
var inst_61523 = cljs.core.chunk_rest.call(null,inst_61518);
var inst_61524 = cljs.core.count.call(null,inst_61522);
var inst_61504 = inst_61523;
var inst_61505 = inst_61522;
var inst_61506 = inst_61524;
var inst_61507 = (0);
var state_61563__$1 = (function (){var statearr_61597 = state_61563;
(statearr_61597[(12)] = inst_61504);

(statearr_61597[(13)] = inst_61507);

(statearr_61597[(15)] = inst_61506);

(statearr_61597[(16)] = inst_61505);

return statearr_61597;
})();
var statearr_61598_61633 = state_61563__$1;
(statearr_61598_61633[(2)] = null);

(statearr_61598_61633[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61564 === (10))){
var inst_61504 = (state_61563[(12)]);
var inst_61507 = (state_61563[(13)]);
var inst_61506 = (state_61563[(15)]);
var inst_61505 = (state_61563[(16)]);
var inst_61512 = cljs.core._nth.call(null,inst_61505,inst_61507);
var inst_61513 = cljs.core.async.muxch_STAR_.call(null,inst_61512);
var inst_61514 = cljs.core.async.close_BANG_.call(null,inst_61513);
var inst_61515 = (inst_61507 + (1));
var tmp61593 = inst_61504;
var tmp61594 = inst_61506;
var tmp61595 = inst_61505;
var inst_61504__$1 = tmp61593;
var inst_61505__$1 = tmp61595;
var inst_61506__$1 = tmp61594;
var inst_61507__$1 = inst_61515;
var state_61563__$1 = (function (){var statearr_61599 = state_61563;
(statearr_61599[(12)] = inst_61504__$1);

(statearr_61599[(13)] = inst_61507__$1);

(statearr_61599[(15)] = inst_61506__$1);

(statearr_61599[(16)] = inst_61505__$1);

(statearr_61599[(17)] = inst_61514);

return statearr_61599;
})();
var statearr_61600_61634 = state_61563__$1;
(statearr_61600_61634[(2)] = null);

(statearr_61600_61634[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61564 === (18))){
var inst_61533 = (state_61563[(2)]);
var state_61563__$1 = state_61563;
var statearr_61601_61635 = state_61563__$1;
(statearr_61601_61635[(2)] = inst_61533);

(statearr_61601_61635[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61564 === (8))){
var inst_61507 = (state_61563[(13)]);
var inst_61506 = (state_61563[(15)]);
var inst_61509 = (inst_61507 < inst_61506);
var inst_61510 = inst_61509;
var state_61563__$1 = state_61563;
if(cljs.core.truth_(inst_61510)){
var statearr_61602_61636 = state_61563__$1;
(statearr_61602_61636[(1)] = (10));

} else {
var statearr_61603_61637 = state_61563__$1;
(statearr_61603_61637[(1)] = (11));

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
});})(c__44106__auto___61609,mults,ensure_mult,p))
;
return ((function (switch__44016__auto__,c__44106__auto___61609,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__44017__auto__ = null;
var cljs$core$async$state_machine__44017__auto____0 = (function (){
var statearr_61604 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61604[(0)] = cljs$core$async$state_machine__44017__auto__);

(statearr_61604[(1)] = (1));

return statearr_61604;
});
var cljs$core$async$state_machine__44017__auto____1 = (function (state_61563){
while(true){
var ret_value__44018__auto__ = (function (){try{while(true){
var result__44019__auto__ = switch__44016__auto__.call(null,state_61563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44019__auto__;
}
break;
}
}catch (e61605){if((e61605 instanceof Object)){
var ex__44020__auto__ = e61605;
var statearr_61606_61638 = state_61563;
(statearr_61606_61638[(5)] = ex__44020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61639 = state_61563;
state_61563 = G__61639;
continue;
} else {
return ret_value__44018__auto__;
}
break;
}
});
cljs$core$async$state_machine__44017__auto__ = function(state_61563){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44017__auto____1.call(this,state_61563);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44017__auto____0;
cljs$core$async$state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44017__auto____1;
return cljs$core$async$state_machine__44017__auto__;
})()
;})(switch__44016__auto__,c__44106__auto___61609,mults,ensure_mult,p))
})();
var state__44108__auto__ = (function (){var statearr_61607 = f__44107__auto__.call(null);
(statearr_61607[(6)] = c__44106__auto___61609);

return statearr_61607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44108__auto__);
});})(c__44106__auto___61609,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__61641 = arguments.length;
switch (G__61641) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__61644 = arguments.length;
switch (G__61644) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__61647 = arguments.length;
switch (G__61647) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
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
var c__44106__auto___61714 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44106__auto___61714,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__44107__auto__ = (function (){var switch__44016__auto__ = ((function (c__44106__auto___61714,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_61686){
var state_val_61687 = (state_61686[(1)]);
if((state_val_61687 === (7))){
var state_61686__$1 = state_61686;
var statearr_61688_61715 = state_61686__$1;
(statearr_61688_61715[(2)] = null);

(statearr_61688_61715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61687 === (1))){
var state_61686__$1 = state_61686;
var statearr_61689_61716 = state_61686__$1;
(statearr_61689_61716[(2)] = null);

(statearr_61689_61716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61687 === (4))){
var inst_61650 = (state_61686[(7)]);
var inst_61652 = (inst_61650 < cnt);
var state_61686__$1 = state_61686;
if(cljs.core.truth_(inst_61652)){
var statearr_61690_61717 = state_61686__$1;
(statearr_61690_61717[(1)] = (6));

} else {
var statearr_61691_61718 = state_61686__$1;
(statearr_61691_61718[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61687 === (15))){
var inst_61682 = (state_61686[(2)]);
var state_61686__$1 = state_61686;
var statearr_61692_61719 = state_61686__$1;
(statearr_61692_61719[(2)] = inst_61682);

(statearr_61692_61719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61687 === (13))){
var inst_61675 = cljs.core.async.close_BANG_.call(null,out);
var state_61686__$1 = state_61686;
var statearr_61693_61720 = state_61686__$1;
(statearr_61693_61720[(2)] = inst_61675);

(statearr_61693_61720[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61687 === (6))){
var state_61686__$1 = state_61686;
var statearr_61694_61721 = state_61686__$1;
(statearr_61694_61721[(2)] = null);

(statearr_61694_61721[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61687 === (3))){
var inst_61684 = (state_61686[(2)]);
var state_61686__$1 = state_61686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61686__$1,inst_61684);
} else {
if((state_val_61687 === (12))){
var inst_61672 = (state_61686[(8)]);
var inst_61672__$1 = (state_61686[(2)]);
var inst_61673 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_61672__$1);
var state_61686__$1 = (function (){var statearr_61695 = state_61686;
(statearr_61695[(8)] = inst_61672__$1);

return statearr_61695;
})();
if(cljs.core.truth_(inst_61673)){
var statearr_61696_61722 = state_61686__$1;
(statearr_61696_61722[(1)] = (13));

} else {
var statearr_61697_61723 = state_61686__$1;
(statearr_61697_61723[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61687 === (2))){
var inst_61649 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_61650 = (0);
var state_61686__$1 = (function (){var statearr_61698 = state_61686;
(statearr_61698[(7)] = inst_61650);

(statearr_61698[(9)] = inst_61649);

return statearr_61698;
})();
var statearr_61699_61724 = state_61686__$1;
(statearr_61699_61724[(2)] = null);

(statearr_61699_61724[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61687 === (11))){
var inst_61650 = (state_61686[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_61686,(10),Object,null,(9));
var inst_61659 = chs__$1.call(null,inst_61650);
var inst_61660 = done.call(null,inst_61650);
var inst_61661 = cljs.core.async.take_BANG_.call(null,inst_61659,inst_61660);
var state_61686__$1 = state_61686;
var statearr_61700_61725 = state_61686__$1;
(statearr_61700_61725[(2)] = inst_61661);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61686__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61687 === (9))){
var inst_61650 = (state_61686[(7)]);
var inst_61663 = (state_61686[(2)]);
var inst_61664 = (inst_61650 + (1));
var inst_61650__$1 = inst_61664;
var state_61686__$1 = (function (){var statearr_61701 = state_61686;
(statearr_61701[(10)] = inst_61663);

(statearr_61701[(7)] = inst_61650__$1);

return statearr_61701;
})();
var statearr_61702_61726 = state_61686__$1;
(statearr_61702_61726[(2)] = null);

(statearr_61702_61726[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61687 === (5))){
var inst_61670 = (state_61686[(2)]);
var state_61686__$1 = (function (){var statearr_61703 = state_61686;
(statearr_61703[(11)] = inst_61670);

return statearr_61703;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61686__$1,(12),dchan);
} else {
if((state_val_61687 === (14))){
var inst_61672 = (state_61686[(8)]);
var inst_61677 = cljs.core.apply.call(null,f,inst_61672);
var state_61686__$1 = state_61686;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61686__$1,(16),out,inst_61677);
} else {
if((state_val_61687 === (16))){
var inst_61679 = (state_61686[(2)]);
var state_61686__$1 = (function (){var statearr_61704 = state_61686;
(statearr_61704[(12)] = inst_61679);

return statearr_61704;
})();
var statearr_61705_61727 = state_61686__$1;
(statearr_61705_61727[(2)] = null);

(statearr_61705_61727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61687 === (10))){
var inst_61654 = (state_61686[(2)]);
var inst_61655 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_61686__$1 = (function (){var statearr_61706 = state_61686;
(statearr_61706[(13)] = inst_61654);

return statearr_61706;
})();
var statearr_61707_61728 = state_61686__$1;
(statearr_61707_61728[(2)] = inst_61655);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61686__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61687 === (8))){
var inst_61668 = (state_61686[(2)]);
var state_61686__$1 = state_61686;
var statearr_61708_61729 = state_61686__$1;
(statearr_61708_61729[(2)] = inst_61668);

(statearr_61708_61729[(1)] = (5));


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
});})(c__44106__auto___61714,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__44016__auto__,c__44106__auto___61714,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__44017__auto__ = null;
var cljs$core$async$state_machine__44017__auto____0 = (function (){
var statearr_61709 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61709[(0)] = cljs$core$async$state_machine__44017__auto__);

(statearr_61709[(1)] = (1));

return statearr_61709;
});
var cljs$core$async$state_machine__44017__auto____1 = (function (state_61686){
while(true){
var ret_value__44018__auto__ = (function (){try{while(true){
var result__44019__auto__ = switch__44016__auto__.call(null,state_61686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44019__auto__;
}
break;
}
}catch (e61710){if((e61710 instanceof Object)){
var ex__44020__auto__ = e61710;
var statearr_61711_61730 = state_61686;
(statearr_61711_61730[(5)] = ex__44020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61731 = state_61686;
state_61686 = G__61731;
continue;
} else {
return ret_value__44018__auto__;
}
break;
}
});
cljs$core$async$state_machine__44017__auto__ = function(state_61686){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44017__auto____1.call(this,state_61686);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44017__auto____0;
cljs$core$async$state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44017__auto____1;
return cljs$core$async$state_machine__44017__auto__;
})()
;})(switch__44016__auto__,c__44106__auto___61714,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__44108__auto__ = (function (){var statearr_61712 = f__44107__auto__.call(null);
(statearr_61712[(6)] = c__44106__auto___61714);

return statearr_61712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44108__auto__);
});})(c__44106__auto___61714,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__61734 = arguments.length;
switch (G__61734) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44106__auto___61788 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44106__auto___61788,out){
return (function (){
var f__44107__auto__ = (function (){var switch__44016__auto__ = ((function (c__44106__auto___61788,out){
return (function (state_61766){
var state_val_61767 = (state_61766[(1)]);
if((state_val_61767 === (7))){
var inst_61746 = (state_61766[(7)]);
var inst_61745 = (state_61766[(8)]);
var inst_61745__$1 = (state_61766[(2)]);
var inst_61746__$1 = cljs.core.nth.call(null,inst_61745__$1,(0),null);
var inst_61747 = cljs.core.nth.call(null,inst_61745__$1,(1),null);
var inst_61748 = (inst_61746__$1 == null);
var state_61766__$1 = (function (){var statearr_61768 = state_61766;
(statearr_61768[(9)] = inst_61747);

(statearr_61768[(7)] = inst_61746__$1);

(statearr_61768[(8)] = inst_61745__$1);

return statearr_61768;
})();
if(cljs.core.truth_(inst_61748)){
var statearr_61769_61789 = state_61766__$1;
(statearr_61769_61789[(1)] = (8));

} else {
var statearr_61770_61790 = state_61766__$1;
(statearr_61770_61790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61767 === (1))){
var inst_61735 = cljs.core.vec.call(null,chs);
var inst_61736 = inst_61735;
var state_61766__$1 = (function (){var statearr_61771 = state_61766;
(statearr_61771[(10)] = inst_61736);

return statearr_61771;
})();
var statearr_61772_61791 = state_61766__$1;
(statearr_61772_61791[(2)] = null);

(statearr_61772_61791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61767 === (4))){
var inst_61736 = (state_61766[(10)]);
var state_61766__$1 = state_61766;
return cljs.core.async.ioc_alts_BANG_.call(null,state_61766__$1,(7),inst_61736);
} else {
if((state_val_61767 === (6))){
var inst_61762 = (state_61766[(2)]);
var state_61766__$1 = state_61766;
var statearr_61773_61792 = state_61766__$1;
(statearr_61773_61792[(2)] = inst_61762);

(statearr_61773_61792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61767 === (3))){
var inst_61764 = (state_61766[(2)]);
var state_61766__$1 = state_61766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61766__$1,inst_61764);
} else {
if((state_val_61767 === (2))){
var inst_61736 = (state_61766[(10)]);
var inst_61738 = cljs.core.count.call(null,inst_61736);
var inst_61739 = (inst_61738 > (0));
var state_61766__$1 = state_61766;
if(cljs.core.truth_(inst_61739)){
var statearr_61775_61793 = state_61766__$1;
(statearr_61775_61793[(1)] = (4));

} else {
var statearr_61776_61794 = state_61766__$1;
(statearr_61776_61794[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61767 === (11))){
var inst_61736 = (state_61766[(10)]);
var inst_61755 = (state_61766[(2)]);
var tmp61774 = inst_61736;
var inst_61736__$1 = tmp61774;
var state_61766__$1 = (function (){var statearr_61777 = state_61766;
(statearr_61777[(11)] = inst_61755);

(statearr_61777[(10)] = inst_61736__$1);

return statearr_61777;
})();
var statearr_61778_61795 = state_61766__$1;
(statearr_61778_61795[(2)] = null);

(statearr_61778_61795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61767 === (9))){
var inst_61746 = (state_61766[(7)]);
var state_61766__$1 = state_61766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61766__$1,(11),out,inst_61746);
} else {
if((state_val_61767 === (5))){
var inst_61760 = cljs.core.async.close_BANG_.call(null,out);
var state_61766__$1 = state_61766;
var statearr_61779_61796 = state_61766__$1;
(statearr_61779_61796[(2)] = inst_61760);

(statearr_61779_61796[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61767 === (10))){
var inst_61758 = (state_61766[(2)]);
var state_61766__$1 = state_61766;
var statearr_61780_61797 = state_61766__$1;
(statearr_61780_61797[(2)] = inst_61758);

(statearr_61780_61797[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61767 === (8))){
var inst_61747 = (state_61766[(9)]);
var inst_61746 = (state_61766[(7)]);
var inst_61745 = (state_61766[(8)]);
var inst_61736 = (state_61766[(10)]);
var inst_61750 = (function (){var cs = inst_61736;
var vec__61741 = inst_61745;
var v = inst_61746;
var c = inst_61747;
return ((function (cs,vec__61741,v,c,inst_61747,inst_61746,inst_61745,inst_61736,state_val_61767,c__44106__auto___61788,out){
return (function (p1__61732_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__61732_SHARP_);
});
;})(cs,vec__61741,v,c,inst_61747,inst_61746,inst_61745,inst_61736,state_val_61767,c__44106__auto___61788,out))
})();
var inst_61751 = cljs.core.filterv.call(null,inst_61750,inst_61736);
var inst_61736__$1 = inst_61751;
var state_61766__$1 = (function (){var statearr_61781 = state_61766;
(statearr_61781[(10)] = inst_61736__$1);

return statearr_61781;
})();
var statearr_61782_61798 = state_61766__$1;
(statearr_61782_61798[(2)] = null);

(statearr_61782_61798[(1)] = (2));


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
});})(c__44106__auto___61788,out))
;
return ((function (switch__44016__auto__,c__44106__auto___61788,out){
return (function() {
var cljs$core$async$state_machine__44017__auto__ = null;
var cljs$core$async$state_machine__44017__auto____0 = (function (){
var statearr_61783 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61783[(0)] = cljs$core$async$state_machine__44017__auto__);

(statearr_61783[(1)] = (1));

return statearr_61783;
});
var cljs$core$async$state_machine__44017__auto____1 = (function (state_61766){
while(true){
var ret_value__44018__auto__ = (function (){try{while(true){
var result__44019__auto__ = switch__44016__auto__.call(null,state_61766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44019__auto__;
}
break;
}
}catch (e61784){if((e61784 instanceof Object)){
var ex__44020__auto__ = e61784;
var statearr_61785_61799 = state_61766;
(statearr_61785_61799[(5)] = ex__44020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61800 = state_61766;
state_61766 = G__61800;
continue;
} else {
return ret_value__44018__auto__;
}
break;
}
});
cljs$core$async$state_machine__44017__auto__ = function(state_61766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44017__auto____1.call(this,state_61766);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44017__auto____0;
cljs$core$async$state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44017__auto____1;
return cljs$core$async$state_machine__44017__auto__;
})()
;})(switch__44016__auto__,c__44106__auto___61788,out))
})();
var state__44108__auto__ = (function (){var statearr_61786 = f__44107__auto__.call(null);
(statearr_61786[(6)] = c__44106__auto___61788);

return statearr_61786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44108__auto__);
});})(c__44106__auto___61788,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__61802 = arguments.length;
switch (G__61802) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44106__auto___61847 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44106__auto___61847,out){
return (function (){
var f__44107__auto__ = (function (){var switch__44016__auto__ = ((function (c__44106__auto___61847,out){
return (function (state_61826){
var state_val_61827 = (state_61826[(1)]);
if((state_val_61827 === (7))){
var inst_61808 = (state_61826[(7)]);
var inst_61808__$1 = (state_61826[(2)]);
var inst_61809 = (inst_61808__$1 == null);
var inst_61810 = cljs.core.not.call(null,inst_61809);
var state_61826__$1 = (function (){var statearr_61828 = state_61826;
(statearr_61828[(7)] = inst_61808__$1);

return statearr_61828;
})();
if(inst_61810){
var statearr_61829_61848 = state_61826__$1;
(statearr_61829_61848[(1)] = (8));

} else {
var statearr_61830_61849 = state_61826__$1;
(statearr_61830_61849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61827 === (1))){
var inst_61803 = (0);
var state_61826__$1 = (function (){var statearr_61831 = state_61826;
(statearr_61831[(8)] = inst_61803);

return statearr_61831;
})();
var statearr_61832_61850 = state_61826__$1;
(statearr_61832_61850[(2)] = null);

(statearr_61832_61850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61827 === (4))){
var state_61826__$1 = state_61826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61826__$1,(7),ch);
} else {
if((state_val_61827 === (6))){
var inst_61821 = (state_61826[(2)]);
var state_61826__$1 = state_61826;
var statearr_61833_61851 = state_61826__$1;
(statearr_61833_61851[(2)] = inst_61821);

(statearr_61833_61851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61827 === (3))){
var inst_61823 = (state_61826[(2)]);
var inst_61824 = cljs.core.async.close_BANG_.call(null,out);
var state_61826__$1 = (function (){var statearr_61834 = state_61826;
(statearr_61834[(9)] = inst_61823);

return statearr_61834;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61826__$1,inst_61824);
} else {
if((state_val_61827 === (2))){
var inst_61803 = (state_61826[(8)]);
var inst_61805 = (inst_61803 < n);
var state_61826__$1 = state_61826;
if(cljs.core.truth_(inst_61805)){
var statearr_61835_61852 = state_61826__$1;
(statearr_61835_61852[(1)] = (4));

} else {
var statearr_61836_61853 = state_61826__$1;
(statearr_61836_61853[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61827 === (11))){
var inst_61803 = (state_61826[(8)]);
var inst_61813 = (state_61826[(2)]);
var inst_61814 = (inst_61803 + (1));
var inst_61803__$1 = inst_61814;
var state_61826__$1 = (function (){var statearr_61837 = state_61826;
(statearr_61837[(8)] = inst_61803__$1);

(statearr_61837[(10)] = inst_61813);

return statearr_61837;
})();
var statearr_61838_61854 = state_61826__$1;
(statearr_61838_61854[(2)] = null);

(statearr_61838_61854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61827 === (9))){
var state_61826__$1 = state_61826;
var statearr_61839_61855 = state_61826__$1;
(statearr_61839_61855[(2)] = null);

(statearr_61839_61855[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61827 === (5))){
var state_61826__$1 = state_61826;
var statearr_61840_61856 = state_61826__$1;
(statearr_61840_61856[(2)] = null);

(statearr_61840_61856[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61827 === (10))){
var inst_61818 = (state_61826[(2)]);
var state_61826__$1 = state_61826;
var statearr_61841_61857 = state_61826__$1;
(statearr_61841_61857[(2)] = inst_61818);

(statearr_61841_61857[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61827 === (8))){
var inst_61808 = (state_61826[(7)]);
var state_61826__$1 = state_61826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61826__$1,(11),out,inst_61808);
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
});})(c__44106__auto___61847,out))
;
return ((function (switch__44016__auto__,c__44106__auto___61847,out){
return (function() {
var cljs$core$async$state_machine__44017__auto__ = null;
var cljs$core$async$state_machine__44017__auto____0 = (function (){
var statearr_61842 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_61842[(0)] = cljs$core$async$state_machine__44017__auto__);

(statearr_61842[(1)] = (1));

return statearr_61842;
});
var cljs$core$async$state_machine__44017__auto____1 = (function (state_61826){
while(true){
var ret_value__44018__auto__ = (function (){try{while(true){
var result__44019__auto__ = switch__44016__auto__.call(null,state_61826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44019__auto__;
}
break;
}
}catch (e61843){if((e61843 instanceof Object)){
var ex__44020__auto__ = e61843;
var statearr_61844_61858 = state_61826;
(statearr_61844_61858[(5)] = ex__44020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61859 = state_61826;
state_61826 = G__61859;
continue;
} else {
return ret_value__44018__auto__;
}
break;
}
});
cljs$core$async$state_machine__44017__auto__ = function(state_61826){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44017__auto____1.call(this,state_61826);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44017__auto____0;
cljs$core$async$state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44017__auto____1;
return cljs$core$async$state_machine__44017__auto__;
})()
;})(switch__44016__auto__,c__44106__auto___61847,out))
})();
var state__44108__auto__ = (function (){var statearr_61845 = f__44107__auto__.call(null);
(statearr_61845[(6)] = c__44106__auto___61847);

return statearr_61845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44108__auto__);
});})(c__44106__auto___61847,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async61861 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61861 = (function (f,ch,meta61862){
this.f = f;
this.ch = ch;
this.meta61862 = meta61862;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async61861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61863,meta61862__$1){
var self__ = this;
var _61863__$1 = this;
return (new cljs.core.async.t_cljs$core$async61861(self__.f,self__.ch,meta61862__$1));
});

cljs.core.async.t_cljs$core$async61861.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61863){
var self__ = this;
var _61863__$1 = this;
return self__.meta61862;
});

cljs.core.async.t_cljs$core$async61861.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61861.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async61861.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async61861.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61861.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async61864 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61864 = (function (f,ch,meta61862,_,fn1,meta61865){
this.f = f;
this.ch = ch;
this.meta61862 = meta61862;
this._ = _;
this.fn1 = fn1;
this.meta61865 = meta61865;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async61864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_61866,meta61865__$1){
var self__ = this;
var _61866__$1 = this;
return (new cljs.core.async.t_cljs$core$async61864(self__.f,self__.ch,self__.meta61862,self__._,self__.fn1,meta61865__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async61864.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_61866){
var self__ = this;
var _61866__$1 = this;
return self__.meta61865;
});})(___$1))
;

cljs.core.async.t_cljs$core$async61864.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61864.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async61864.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async61864.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__61860_SHARP_){
return f1.call(null,(((p1__61860_SHARP_ == null))?null:self__.f.call(null,p1__61860_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async61864.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta61862","meta61862",-2096299364,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async61861","cljs.core.async/t_cljs$core$async61861",830319758,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta61865","meta61865",508230257,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async61864.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61864.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61864";

cljs.core.async.t_cljs$core$async61864.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__41721__auto__,writer__41722__auto__,opt__41723__auto__){
return cljs.core._write.call(null,writer__41722__auto__,"cljs.core.async/t_cljs$core$async61864");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async61864 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async61864(f__$1,ch__$1,meta61862__$1,___$2,fn1__$1,meta61865){
return (new cljs.core.async.t_cljs$core$async61864(f__$1,ch__$1,meta61862__$1,___$2,fn1__$1,meta61865));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async61864(self__.f,self__.ch,self__.meta61862,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__41052__auto__ = ret;
if(cljs.core.truth_(and__41052__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__41052__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async61861.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61861.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async61861.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta61862","meta61862",-2096299364,null)], null);
});

cljs.core.async.t_cljs$core$async61861.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61861.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61861";

cljs.core.async.t_cljs$core$async61861.cljs$lang$ctorPrWriter = (function (this__41721__auto__,writer__41722__auto__,opt__41723__auto__){
return cljs.core._write.call(null,writer__41722__auto__,"cljs.core.async/t_cljs$core$async61861");
});

cljs.core.async.__GT_t_cljs$core$async61861 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async61861(f__$1,ch__$1,meta61862){
return (new cljs.core.async.t_cljs$core$async61861(f__$1,ch__$1,meta61862));
});

}

return (new cljs.core.async.t_cljs$core$async61861(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async61867 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61867 = (function (f,ch,meta61868){
this.f = f;
this.ch = ch;
this.meta61868 = meta61868;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async61867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61869,meta61868__$1){
var self__ = this;
var _61869__$1 = this;
return (new cljs.core.async.t_cljs$core$async61867(self__.f,self__.ch,meta61868__$1));
});

cljs.core.async.t_cljs$core$async61867.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61869){
var self__ = this;
var _61869__$1 = this;
return self__.meta61868;
});

cljs.core.async.t_cljs$core$async61867.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61867.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async61867.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61867.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async61867.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61867.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async61867.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta61868","meta61868",5760022,null)], null);
});

cljs.core.async.t_cljs$core$async61867.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61867.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61867";

cljs.core.async.t_cljs$core$async61867.cljs$lang$ctorPrWriter = (function (this__41721__auto__,writer__41722__auto__,opt__41723__auto__){
return cljs.core._write.call(null,writer__41722__auto__,"cljs.core.async/t_cljs$core$async61867");
});

cljs.core.async.__GT_t_cljs$core$async61867 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async61867(f__$1,ch__$1,meta61868){
return (new cljs.core.async.t_cljs$core$async61867(f__$1,ch__$1,meta61868));
});

}

return (new cljs.core.async.t_cljs$core$async61867(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async61870 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61870 = (function (p,ch,meta61871){
this.p = p;
this.ch = ch;
this.meta61871 = meta61871;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async61870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61872,meta61871__$1){
var self__ = this;
var _61872__$1 = this;
return (new cljs.core.async.t_cljs$core$async61870(self__.p,self__.ch,meta61871__$1));
});

cljs.core.async.t_cljs$core$async61870.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61872){
var self__ = this;
var _61872__$1 = this;
return self__.meta61871;
});

cljs.core.async.t_cljs$core$async61870.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61870.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async61870.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async61870.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61870.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async61870.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61870.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async61870.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta61871","meta61871",1979839529,null)], null);
});

cljs.core.async.t_cljs$core$async61870.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61870.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61870";

cljs.core.async.t_cljs$core$async61870.cljs$lang$ctorPrWriter = (function (this__41721__auto__,writer__41722__auto__,opt__41723__auto__){
return cljs.core._write.call(null,writer__41722__auto__,"cljs.core.async/t_cljs$core$async61870");
});

cljs.core.async.__GT_t_cljs$core$async61870 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async61870(p__$1,ch__$1,meta61871){
return (new cljs.core.async.t_cljs$core$async61870(p__$1,ch__$1,meta61871));
});

}

return (new cljs.core.async.t_cljs$core$async61870(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__61874 = arguments.length;
switch (G__61874) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44106__auto___61914 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44106__auto___61914,out){
return (function (){
var f__44107__auto__ = (function (){var switch__44016__auto__ = ((function (c__44106__auto___61914,out){
return (function (state_61895){
var state_val_61896 = (state_61895[(1)]);
if((state_val_61896 === (7))){
var inst_61891 = (state_61895[(2)]);
var state_61895__$1 = state_61895;
var statearr_61897_61915 = state_61895__$1;
(statearr_61897_61915[(2)] = inst_61891);

(statearr_61897_61915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61896 === (1))){
var state_61895__$1 = state_61895;
var statearr_61898_61916 = state_61895__$1;
(statearr_61898_61916[(2)] = null);

(statearr_61898_61916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61896 === (4))){
var inst_61877 = (state_61895[(7)]);
var inst_61877__$1 = (state_61895[(2)]);
var inst_61878 = (inst_61877__$1 == null);
var state_61895__$1 = (function (){var statearr_61899 = state_61895;
(statearr_61899[(7)] = inst_61877__$1);

return statearr_61899;
})();
if(cljs.core.truth_(inst_61878)){
var statearr_61900_61917 = state_61895__$1;
(statearr_61900_61917[(1)] = (5));

} else {
var statearr_61901_61918 = state_61895__$1;
(statearr_61901_61918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61896 === (6))){
var inst_61877 = (state_61895[(7)]);
var inst_61882 = p.call(null,inst_61877);
var state_61895__$1 = state_61895;
if(cljs.core.truth_(inst_61882)){
var statearr_61902_61919 = state_61895__$1;
(statearr_61902_61919[(1)] = (8));

} else {
var statearr_61903_61920 = state_61895__$1;
(statearr_61903_61920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61896 === (3))){
var inst_61893 = (state_61895[(2)]);
var state_61895__$1 = state_61895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61895__$1,inst_61893);
} else {
if((state_val_61896 === (2))){
var state_61895__$1 = state_61895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61895__$1,(4),ch);
} else {
if((state_val_61896 === (11))){
var inst_61885 = (state_61895[(2)]);
var state_61895__$1 = state_61895;
var statearr_61904_61921 = state_61895__$1;
(statearr_61904_61921[(2)] = inst_61885);

(statearr_61904_61921[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61896 === (9))){
var state_61895__$1 = state_61895;
var statearr_61905_61922 = state_61895__$1;
(statearr_61905_61922[(2)] = null);

(statearr_61905_61922[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61896 === (5))){
var inst_61880 = cljs.core.async.close_BANG_.call(null,out);
var state_61895__$1 = state_61895;
var statearr_61906_61923 = state_61895__$1;
(statearr_61906_61923[(2)] = inst_61880);

(statearr_61906_61923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61896 === (10))){
var inst_61888 = (state_61895[(2)]);
var state_61895__$1 = (function (){var statearr_61907 = state_61895;
(statearr_61907[(8)] = inst_61888);

return statearr_61907;
})();
var statearr_61908_61924 = state_61895__$1;
(statearr_61908_61924[(2)] = null);

(statearr_61908_61924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61896 === (8))){
var inst_61877 = (state_61895[(7)]);
var state_61895__$1 = state_61895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61895__$1,(11),out,inst_61877);
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
});})(c__44106__auto___61914,out))
;
return ((function (switch__44016__auto__,c__44106__auto___61914,out){
return (function() {
var cljs$core$async$state_machine__44017__auto__ = null;
var cljs$core$async$state_machine__44017__auto____0 = (function (){
var statearr_61909 = [null,null,null,null,null,null,null,null,null];
(statearr_61909[(0)] = cljs$core$async$state_machine__44017__auto__);

(statearr_61909[(1)] = (1));

return statearr_61909;
});
var cljs$core$async$state_machine__44017__auto____1 = (function (state_61895){
while(true){
var ret_value__44018__auto__ = (function (){try{while(true){
var result__44019__auto__ = switch__44016__auto__.call(null,state_61895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44019__auto__;
}
break;
}
}catch (e61910){if((e61910 instanceof Object)){
var ex__44020__auto__ = e61910;
var statearr_61911_61925 = state_61895;
(statearr_61911_61925[(5)] = ex__44020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61926 = state_61895;
state_61895 = G__61926;
continue;
} else {
return ret_value__44018__auto__;
}
break;
}
});
cljs$core$async$state_machine__44017__auto__ = function(state_61895){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44017__auto____1.call(this,state_61895);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44017__auto____0;
cljs$core$async$state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44017__auto____1;
return cljs$core$async$state_machine__44017__auto__;
})()
;})(switch__44016__auto__,c__44106__auto___61914,out))
})();
var state__44108__auto__ = (function (){var statearr_61912 = f__44107__auto__.call(null);
(statearr_61912[(6)] = c__44106__auto___61914);

return statearr_61912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44108__auto__);
});})(c__44106__auto___61914,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__61928 = arguments.length;
switch (G__61928) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__44106__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44106__auto__){
return (function (){
var f__44107__auto__ = (function (){var switch__44016__auto__ = ((function (c__44106__auto__){
return (function (state_61991){
var state_val_61992 = (state_61991[(1)]);
if((state_val_61992 === (7))){
var inst_61987 = (state_61991[(2)]);
var state_61991__$1 = state_61991;
var statearr_61993_62031 = state_61991__$1;
(statearr_61993_62031[(2)] = inst_61987);

(statearr_61993_62031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61992 === (20))){
var inst_61957 = (state_61991[(7)]);
var inst_61968 = (state_61991[(2)]);
var inst_61969 = cljs.core.next.call(null,inst_61957);
var inst_61943 = inst_61969;
var inst_61944 = null;
var inst_61945 = (0);
var inst_61946 = (0);
var state_61991__$1 = (function (){var statearr_61994 = state_61991;
(statearr_61994[(8)] = inst_61945);

(statearr_61994[(9)] = inst_61968);

(statearr_61994[(10)] = inst_61944);

(statearr_61994[(11)] = inst_61946);

(statearr_61994[(12)] = inst_61943);

return statearr_61994;
})();
var statearr_61995_62032 = state_61991__$1;
(statearr_61995_62032[(2)] = null);

(statearr_61995_62032[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61992 === (1))){
var state_61991__$1 = state_61991;
var statearr_61996_62033 = state_61991__$1;
(statearr_61996_62033[(2)] = null);

(statearr_61996_62033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61992 === (4))){
var inst_61932 = (state_61991[(13)]);
var inst_61932__$1 = (state_61991[(2)]);
var inst_61933 = (inst_61932__$1 == null);
var state_61991__$1 = (function (){var statearr_61997 = state_61991;
(statearr_61997[(13)] = inst_61932__$1);

return statearr_61997;
})();
if(cljs.core.truth_(inst_61933)){
var statearr_61998_62034 = state_61991__$1;
(statearr_61998_62034[(1)] = (5));

} else {
var statearr_61999_62035 = state_61991__$1;
(statearr_61999_62035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61992 === (15))){
var state_61991__$1 = state_61991;
var statearr_62003_62036 = state_61991__$1;
(statearr_62003_62036[(2)] = null);

(statearr_62003_62036[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61992 === (21))){
var state_61991__$1 = state_61991;
var statearr_62004_62037 = state_61991__$1;
(statearr_62004_62037[(2)] = null);

(statearr_62004_62037[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61992 === (13))){
var inst_61945 = (state_61991[(8)]);
var inst_61944 = (state_61991[(10)]);
var inst_61946 = (state_61991[(11)]);
var inst_61943 = (state_61991[(12)]);
var inst_61953 = (state_61991[(2)]);
var inst_61954 = (inst_61946 + (1));
var tmp62000 = inst_61945;
var tmp62001 = inst_61944;
var tmp62002 = inst_61943;
var inst_61943__$1 = tmp62002;
var inst_61944__$1 = tmp62001;
var inst_61945__$1 = tmp62000;
var inst_61946__$1 = inst_61954;
var state_61991__$1 = (function (){var statearr_62005 = state_61991;
(statearr_62005[(8)] = inst_61945__$1);

(statearr_62005[(14)] = inst_61953);

(statearr_62005[(10)] = inst_61944__$1);

(statearr_62005[(11)] = inst_61946__$1);

(statearr_62005[(12)] = inst_61943__$1);

return statearr_62005;
})();
var statearr_62006_62038 = state_61991__$1;
(statearr_62006_62038[(2)] = null);

(statearr_62006_62038[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61992 === (22))){
var state_61991__$1 = state_61991;
var statearr_62007_62039 = state_61991__$1;
(statearr_62007_62039[(2)] = null);

(statearr_62007_62039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61992 === (6))){
var inst_61932 = (state_61991[(13)]);
var inst_61941 = f.call(null,inst_61932);
var inst_61942 = cljs.core.seq.call(null,inst_61941);
var inst_61943 = inst_61942;
var inst_61944 = null;
var inst_61945 = (0);
var inst_61946 = (0);
var state_61991__$1 = (function (){var statearr_62008 = state_61991;
(statearr_62008[(8)] = inst_61945);

(statearr_62008[(10)] = inst_61944);

(statearr_62008[(11)] = inst_61946);

(statearr_62008[(12)] = inst_61943);

return statearr_62008;
})();
var statearr_62009_62040 = state_61991__$1;
(statearr_62009_62040[(2)] = null);

(statearr_62009_62040[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61992 === (17))){
var inst_61957 = (state_61991[(7)]);
var inst_61961 = cljs.core.chunk_first.call(null,inst_61957);
var inst_61962 = cljs.core.chunk_rest.call(null,inst_61957);
var inst_61963 = cljs.core.count.call(null,inst_61961);
var inst_61943 = inst_61962;
var inst_61944 = inst_61961;
var inst_61945 = inst_61963;
var inst_61946 = (0);
var state_61991__$1 = (function (){var statearr_62010 = state_61991;
(statearr_62010[(8)] = inst_61945);

(statearr_62010[(10)] = inst_61944);

(statearr_62010[(11)] = inst_61946);

(statearr_62010[(12)] = inst_61943);

return statearr_62010;
})();
var statearr_62011_62041 = state_61991__$1;
(statearr_62011_62041[(2)] = null);

(statearr_62011_62041[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61992 === (3))){
var inst_61989 = (state_61991[(2)]);
var state_61991__$1 = state_61991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61991__$1,inst_61989);
} else {
if((state_val_61992 === (12))){
var inst_61977 = (state_61991[(2)]);
var state_61991__$1 = state_61991;
var statearr_62012_62042 = state_61991__$1;
(statearr_62012_62042[(2)] = inst_61977);

(statearr_62012_62042[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61992 === (2))){
var state_61991__$1 = state_61991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61991__$1,(4),in$);
} else {
if((state_val_61992 === (23))){
var inst_61985 = (state_61991[(2)]);
var state_61991__$1 = state_61991;
var statearr_62013_62043 = state_61991__$1;
(statearr_62013_62043[(2)] = inst_61985);

(statearr_62013_62043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61992 === (19))){
var inst_61972 = (state_61991[(2)]);
var state_61991__$1 = state_61991;
var statearr_62014_62044 = state_61991__$1;
(statearr_62014_62044[(2)] = inst_61972);

(statearr_62014_62044[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61992 === (11))){
var inst_61957 = (state_61991[(7)]);
var inst_61943 = (state_61991[(12)]);
var inst_61957__$1 = cljs.core.seq.call(null,inst_61943);
var state_61991__$1 = (function (){var statearr_62015 = state_61991;
(statearr_62015[(7)] = inst_61957__$1);

return statearr_62015;
})();
if(inst_61957__$1){
var statearr_62016_62045 = state_61991__$1;
(statearr_62016_62045[(1)] = (14));

} else {
var statearr_62017_62046 = state_61991__$1;
(statearr_62017_62046[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61992 === (9))){
var inst_61979 = (state_61991[(2)]);
var inst_61980 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_61991__$1 = (function (){var statearr_62018 = state_61991;
(statearr_62018[(15)] = inst_61979);

return statearr_62018;
})();
if(cljs.core.truth_(inst_61980)){
var statearr_62019_62047 = state_61991__$1;
(statearr_62019_62047[(1)] = (21));

} else {
var statearr_62020_62048 = state_61991__$1;
(statearr_62020_62048[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61992 === (5))){
var inst_61935 = cljs.core.async.close_BANG_.call(null,out);
var state_61991__$1 = state_61991;
var statearr_62021_62049 = state_61991__$1;
(statearr_62021_62049[(2)] = inst_61935);

(statearr_62021_62049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61992 === (14))){
var inst_61957 = (state_61991[(7)]);
var inst_61959 = cljs.core.chunked_seq_QMARK_.call(null,inst_61957);
var state_61991__$1 = state_61991;
if(inst_61959){
var statearr_62022_62050 = state_61991__$1;
(statearr_62022_62050[(1)] = (17));

} else {
var statearr_62023_62051 = state_61991__$1;
(statearr_62023_62051[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61992 === (16))){
var inst_61975 = (state_61991[(2)]);
var state_61991__$1 = state_61991;
var statearr_62024_62052 = state_61991__$1;
(statearr_62024_62052[(2)] = inst_61975);

(statearr_62024_62052[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61992 === (10))){
var inst_61944 = (state_61991[(10)]);
var inst_61946 = (state_61991[(11)]);
var inst_61951 = cljs.core._nth.call(null,inst_61944,inst_61946);
var state_61991__$1 = state_61991;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61991__$1,(13),out,inst_61951);
} else {
if((state_val_61992 === (18))){
var inst_61957 = (state_61991[(7)]);
var inst_61966 = cljs.core.first.call(null,inst_61957);
var state_61991__$1 = state_61991;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61991__$1,(20),out,inst_61966);
} else {
if((state_val_61992 === (8))){
var inst_61945 = (state_61991[(8)]);
var inst_61946 = (state_61991[(11)]);
var inst_61948 = (inst_61946 < inst_61945);
var inst_61949 = inst_61948;
var state_61991__$1 = state_61991;
if(cljs.core.truth_(inst_61949)){
var statearr_62025_62053 = state_61991__$1;
(statearr_62025_62053[(1)] = (10));

} else {
var statearr_62026_62054 = state_61991__$1;
(statearr_62026_62054[(1)] = (11));

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
});})(c__44106__auto__))
;
return ((function (switch__44016__auto__,c__44106__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__44017__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__44017__auto____0 = (function (){
var statearr_62027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62027[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__44017__auto__);

(statearr_62027[(1)] = (1));

return statearr_62027;
});
var cljs$core$async$mapcat_STAR__$_state_machine__44017__auto____1 = (function (state_61991){
while(true){
var ret_value__44018__auto__ = (function (){try{while(true){
var result__44019__auto__ = switch__44016__auto__.call(null,state_61991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44019__auto__;
}
break;
}
}catch (e62028){if((e62028 instanceof Object)){
var ex__44020__auto__ = e62028;
var statearr_62029_62055 = state_61991;
(statearr_62029_62055[(5)] = ex__44020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62056 = state_61991;
state_61991 = G__62056;
continue;
} else {
return ret_value__44018__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__44017__auto__ = function(state_61991){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__44017__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__44017__auto____1.call(this,state_61991);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__44017__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__44017__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__44017__auto__;
})()
;})(switch__44016__auto__,c__44106__auto__))
})();
var state__44108__auto__ = (function (){var statearr_62030 = f__44107__auto__.call(null);
(statearr_62030[(6)] = c__44106__auto__);

return statearr_62030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44108__auto__);
});})(c__44106__auto__))
);

return c__44106__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__62058 = arguments.length;
switch (G__62058) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__62061 = arguments.length;
switch (G__62061) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__62064 = arguments.length;
switch (G__62064) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44106__auto___62111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44106__auto___62111,out){
return (function (){
var f__44107__auto__ = (function (){var switch__44016__auto__ = ((function (c__44106__auto___62111,out){
return (function (state_62088){
var state_val_62089 = (state_62088[(1)]);
if((state_val_62089 === (7))){
var inst_62083 = (state_62088[(2)]);
var state_62088__$1 = state_62088;
var statearr_62090_62112 = state_62088__$1;
(statearr_62090_62112[(2)] = inst_62083);

(statearr_62090_62112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62089 === (1))){
var inst_62065 = null;
var state_62088__$1 = (function (){var statearr_62091 = state_62088;
(statearr_62091[(7)] = inst_62065);

return statearr_62091;
})();
var statearr_62092_62113 = state_62088__$1;
(statearr_62092_62113[(2)] = null);

(statearr_62092_62113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62089 === (4))){
var inst_62068 = (state_62088[(8)]);
var inst_62068__$1 = (state_62088[(2)]);
var inst_62069 = (inst_62068__$1 == null);
var inst_62070 = cljs.core.not.call(null,inst_62069);
var state_62088__$1 = (function (){var statearr_62093 = state_62088;
(statearr_62093[(8)] = inst_62068__$1);

return statearr_62093;
})();
if(inst_62070){
var statearr_62094_62114 = state_62088__$1;
(statearr_62094_62114[(1)] = (5));

} else {
var statearr_62095_62115 = state_62088__$1;
(statearr_62095_62115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62089 === (6))){
var state_62088__$1 = state_62088;
var statearr_62096_62116 = state_62088__$1;
(statearr_62096_62116[(2)] = null);

(statearr_62096_62116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62089 === (3))){
var inst_62085 = (state_62088[(2)]);
var inst_62086 = cljs.core.async.close_BANG_.call(null,out);
var state_62088__$1 = (function (){var statearr_62097 = state_62088;
(statearr_62097[(9)] = inst_62085);

return statearr_62097;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62088__$1,inst_62086);
} else {
if((state_val_62089 === (2))){
var state_62088__$1 = state_62088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62088__$1,(4),ch);
} else {
if((state_val_62089 === (11))){
var inst_62068 = (state_62088[(8)]);
var inst_62077 = (state_62088[(2)]);
var inst_62065 = inst_62068;
var state_62088__$1 = (function (){var statearr_62098 = state_62088;
(statearr_62098[(7)] = inst_62065);

(statearr_62098[(10)] = inst_62077);

return statearr_62098;
})();
var statearr_62099_62117 = state_62088__$1;
(statearr_62099_62117[(2)] = null);

(statearr_62099_62117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62089 === (9))){
var inst_62068 = (state_62088[(8)]);
var state_62088__$1 = state_62088;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62088__$1,(11),out,inst_62068);
} else {
if((state_val_62089 === (5))){
var inst_62065 = (state_62088[(7)]);
var inst_62068 = (state_62088[(8)]);
var inst_62072 = cljs.core._EQ_.call(null,inst_62068,inst_62065);
var state_62088__$1 = state_62088;
if(inst_62072){
var statearr_62101_62118 = state_62088__$1;
(statearr_62101_62118[(1)] = (8));

} else {
var statearr_62102_62119 = state_62088__$1;
(statearr_62102_62119[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62089 === (10))){
var inst_62080 = (state_62088[(2)]);
var state_62088__$1 = state_62088;
var statearr_62103_62120 = state_62088__$1;
(statearr_62103_62120[(2)] = inst_62080);

(statearr_62103_62120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62089 === (8))){
var inst_62065 = (state_62088[(7)]);
var tmp62100 = inst_62065;
var inst_62065__$1 = tmp62100;
var state_62088__$1 = (function (){var statearr_62104 = state_62088;
(statearr_62104[(7)] = inst_62065__$1);

return statearr_62104;
})();
var statearr_62105_62121 = state_62088__$1;
(statearr_62105_62121[(2)] = null);

(statearr_62105_62121[(1)] = (2));


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
});})(c__44106__auto___62111,out))
;
return ((function (switch__44016__auto__,c__44106__auto___62111,out){
return (function() {
var cljs$core$async$state_machine__44017__auto__ = null;
var cljs$core$async$state_machine__44017__auto____0 = (function (){
var statearr_62106 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_62106[(0)] = cljs$core$async$state_machine__44017__auto__);

(statearr_62106[(1)] = (1));

return statearr_62106;
});
var cljs$core$async$state_machine__44017__auto____1 = (function (state_62088){
while(true){
var ret_value__44018__auto__ = (function (){try{while(true){
var result__44019__auto__ = switch__44016__auto__.call(null,state_62088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44019__auto__;
}
break;
}
}catch (e62107){if((e62107 instanceof Object)){
var ex__44020__auto__ = e62107;
var statearr_62108_62122 = state_62088;
(statearr_62108_62122[(5)] = ex__44020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62123 = state_62088;
state_62088 = G__62123;
continue;
} else {
return ret_value__44018__auto__;
}
break;
}
});
cljs$core$async$state_machine__44017__auto__ = function(state_62088){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44017__auto____1.call(this,state_62088);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44017__auto____0;
cljs$core$async$state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44017__auto____1;
return cljs$core$async$state_machine__44017__auto__;
})()
;})(switch__44016__auto__,c__44106__auto___62111,out))
})();
var state__44108__auto__ = (function (){var statearr_62109 = f__44107__auto__.call(null);
(statearr_62109[(6)] = c__44106__auto___62111);

return statearr_62109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44108__auto__);
});})(c__44106__auto___62111,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__62125 = arguments.length;
switch (G__62125) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44106__auto___62191 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44106__auto___62191,out){
return (function (){
var f__44107__auto__ = (function (){var switch__44016__auto__ = ((function (c__44106__auto___62191,out){
return (function (state_62163){
var state_val_62164 = (state_62163[(1)]);
if((state_val_62164 === (7))){
var inst_62159 = (state_62163[(2)]);
var state_62163__$1 = state_62163;
var statearr_62165_62192 = state_62163__$1;
(statearr_62165_62192[(2)] = inst_62159);

(statearr_62165_62192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62164 === (1))){
var inst_62126 = (new Array(n));
var inst_62127 = inst_62126;
var inst_62128 = (0);
var state_62163__$1 = (function (){var statearr_62166 = state_62163;
(statearr_62166[(7)] = inst_62128);

(statearr_62166[(8)] = inst_62127);

return statearr_62166;
})();
var statearr_62167_62193 = state_62163__$1;
(statearr_62167_62193[(2)] = null);

(statearr_62167_62193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62164 === (4))){
var inst_62131 = (state_62163[(9)]);
var inst_62131__$1 = (state_62163[(2)]);
var inst_62132 = (inst_62131__$1 == null);
var inst_62133 = cljs.core.not.call(null,inst_62132);
var state_62163__$1 = (function (){var statearr_62168 = state_62163;
(statearr_62168[(9)] = inst_62131__$1);

return statearr_62168;
})();
if(inst_62133){
var statearr_62169_62194 = state_62163__$1;
(statearr_62169_62194[(1)] = (5));

} else {
var statearr_62170_62195 = state_62163__$1;
(statearr_62170_62195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62164 === (15))){
var inst_62153 = (state_62163[(2)]);
var state_62163__$1 = state_62163;
var statearr_62171_62196 = state_62163__$1;
(statearr_62171_62196[(2)] = inst_62153);

(statearr_62171_62196[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62164 === (13))){
var state_62163__$1 = state_62163;
var statearr_62172_62197 = state_62163__$1;
(statearr_62172_62197[(2)] = null);

(statearr_62172_62197[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62164 === (6))){
var inst_62128 = (state_62163[(7)]);
var inst_62149 = (inst_62128 > (0));
var state_62163__$1 = state_62163;
if(cljs.core.truth_(inst_62149)){
var statearr_62173_62198 = state_62163__$1;
(statearr_62173_62198[(1)] = (12));

} else {
var statearr_62174_62199 = state_62163__$1;
(statearr_62174_62199[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62164 === (3))){
var inst_62161 = (state_62163[(2)]);
var state_62163__$1 = state_62163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62163__$1,inst_62161);
} else {
if((state_val_62164 === (12))){
var inst_62127 = (state_62163[(8)]);
var inst_62151 = cljs.core.vec.call(null,inst_62127);
var state_62163__$1 = state_62163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62163__$1,(15),out,inst_62151);
} else {
if((state_val_62164 === (2))){
var state_62163__$1 = state_62163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62163__$1,(4),ch);
} else {
if((state_val_62164 === (11))){
var inst_62143 = (state_62163[(2)]);
var inst_62144 = (new Array(n));
var inst_62127 = inst_62144;
var inst_62128 = (0);
var state_62163__$1 = (function (){var statearr_62175 = state_62163;
(statearr_62175[(7)] = inst_62128);

(statearr_62175[(8)] = inst_62127);

(statearr_62175[(10)] = inst_62143);

return statearr_62175;
})();
var statearr_62176_62200 = state_62163__$1;
(statearr_62176_62200[(2)] = null);

(statearr_62176_62200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62164 === (9))){
var inst_62127 = (state_62163[(8)]);
var inst_62141 = cljs.core.vec.call(null,inst_62127);
var state_62163__$1 = state_62163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62163__$1,(11),out,inst_62141);
} else {
if((state_val_62164 === (5))){
var inst_62131 = (state_62163[(9)]);
var inst_62136 = (state_62163[(11)]);
var inst_62128 = (state_62163[(7)]);
var inst_62127 = (state_62163[(8)]);
var inst_62135 = (inst_62127[inst_62128] = inst_62131);
var inst_62136__$1 = (inst_62128 + (1));
var inst_62137 = (inst_62136__$1 < n);
var state_62163__$1 = (function (){var statearr_62177 = state_62163;
(statearr_62177[(11)] = inst_62136__$1);

(statearr_62177[(12)] = inst_62135);

return statearr_62177;
})();
if(cljs.core.truth_(inst_62137)){
var statearr_62178_62201 = state_62163__$1;
(statearr_62178_62201[(1)] = (8));

} else {
var statearr_62179_62202 = state_62163__$1;
(statearr_62179_62202[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62164 === (14))){
var inst_62156 = (state_62163[(2)]);
var inst_62157 = cljs.core.async.close_BANG_.call(null,out);
var state_62163__$1 = (function (){var statearr_62181 = state_62163;
(statearr_62181[(13)] = inst_62156);

return statearr_62181;
})();
var statearr_62182_62203 = state_62163__$1;
(statearr_62182_62203[(2)] = inst_62157);

(statearr_62182_62203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62164 === (10))){
var inst_62147 = (state_62163[(2)]);
var state_62163__$1 = state_62163;
var statearr_62183_62204 = state_62163__$1;
(statearr_62183_62204[(2)] = inst_62147);

(statearr_62183_62204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62164 === (8))){
var inst_62136 = (state_62163[(11)]);
var inst_62127 = (state_62163[(8)]);
var tmp62180 = inst_62127;
var inst_62127__$1 = tmp62180;
var inst_62128 = inst_62136;
var state_62163__$1 = (function (){var statearr_62184 = state_62163;
(statearr_62184[(7)] = inst_62128);

(statearr_62184[(8)] = inst_62127__$1);

return statearr_62184;
})();
var statearr_62185_62205 = state_62163__$1;
(statearr_62185_62205[(2)] = null);

(statearr_62185_62205[(1)] = (2));


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
});})(c__44106__auto___62191,out))
;
return ((function (switch__44016__auto__,c__44106__auto___62191,out){
return (function() {
var cljs$core$async$state_machine__44017__auto__ = null;
var cljs$core$async$state_machine__44017__auto____0 = (function (){
var statearr_62186 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62186[(0)] = cljs$core$async$state_machine__44017__auto__);

(statearr_62186[(1)] = (1));

return statearr_62186;
});
var cljs$core$async$state_machine__44017__auto____1 = (function (state_62163){
while(true){
var ret_value__44018__auto__ = (function (){try{while(true){
var result__44019__auto__ = switch__44016__auto__.call(null,state_62163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44019__auto__;
}
break;
}
}catch (e62187){if((e62187 instanceof Object)){
var ex__44020__auto__ = e62187;
var statearr_62188_62206 = state_62163;
(statearr_62188_62206[(5)] = ex__44020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62207 = state_62163;
state_62163 = G__62207;
continue;
} else {
return ret_value__44018__auto__;
}
break;
}
});
cljs$core$async$state_machine__44017__auto__ = function(state_62163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44017__auto____1.call(this,state_62163);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44017__auto____0;
cljs$core$async$state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44017__auto____1;
return cljs$core$async$state_machine__44017__auto__;
})()
;})(switch__44016__auto__,c__44106__auto___62191,out))
})();
var state__44108__auto__ = (function (){var statearr_62189 = f__44107__auto__.call(null);
(statearr_62189[(6)] = c__44106__auto___62191);

return statearr_62189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44108__auto__);
});})(c__44106__auto___62191,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__62209 = arguments.length;
switch (G__62209) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44106__auto___62279 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44106__auto___62279,out){
return (function (){
var f__44107__auto__ = (function (){var switch__44016__auto__ = ((function (c__44106__auto___62279,out){
return (function (state_62251){
var state_val_62252 = (state_62251[(1)]);
if((state_val_62252 === (7))){
var inst_62247 = (state_62251[(2)]);
var state_62251__$1 = state_62251;
var statearr_62253_62280 = state_62251__$1;
(statearr_62253_62280[(2)] = inst_62247);

(statearr_62253_62280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62252 === (1))){
var inst_62210 = [];
var inst_62211 = inst_62210;
var inst_62212 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_62251__$1 = (function (){var statearr_62254 = state_62251;
(statearr_62254[(7)] = inst_62212);

(statearr_62254[(8)] = inst_62211);

return statearr_62254;
})();
var statearr_62255_62281 = state_62251__$1;
(statearr_62255_62281[(2)] = null);

(statearr_62255_62281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62252 === (4))){
var inst_62215 = (state_62251[(9)]);
var inst_62215__$1 = (state_62251[(2)]);
var inst_62216 = (inst_62215__$1 == null);
var inst_62217 = cljs.core.not.call(null,inst_62216);
var state_62251__$1 = (function (){var statearr_62256 = state_62251;
(statearr_62256[(9)] = inst_62215__$1);

return statearr_62256;
})();
if(inst_62217){
var statearr_62257_62282 = state_62251__$1;
(statearr_62257_62282[(1)] = (5));

} else {
var statearr_62258_62283 = state_62251__$1;
(statearr_62258_62283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62252 === (15))){
var inst_62241 = (state_62251[(2)]);
var state_62251__$1 = state_62251;
var statearr_62259_62284 = state_62251__$1;
(statearr_62259_62284[(2)] = inst_62241);

(statearr_62259_62284[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62252 === (13))){
var state_62251__$1 = state_62251;
var statearr_62260_62285 = state_62251__$1;
(statearr_62260_62285[(2)] = null);

(statearr_62260_62285[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62252 === (6))){
var inst_62211 = (state_62251[(8)]);
var inst_62236 = inst_62211.length;
var inst_62237 = (inst_62236 > (0));
var state_62251__$1 = state_62251;
if(cljs.core.truth_(inst_62237)){
var statearr_62261_62286 = state_62251__$1;
(statearr_62261_62286[(1)] = (12));

} else {
var statearr_62262_62287 = state_62251__$1;
(statearr_62262_62287[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62252 === (3))){
var inst_62249 = (state_62251[(2)]);
var state_62251__$1 = state_62251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62251__$1,inst_62249);
} else {
if((state_val_62252 === (12))){
var inst_62211 = (state_62251[(8)]);
var inst_62239 = cljs.core.vec.call(null,inst_62211);
var state_62251__$1 = state_62251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62251__$1,(15),out,inst_62239);
} else {
if((state_val_62252 === (2))){
var state_62251__$1 = state_62251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62251__$1,(4),ch);
} else {
if((state_val_62252 === (11))){
var inst_62215 = (state_62251[(9)]);
var inst_62219 = (state_62251[(10)]);
var inst_62229 = (state_62251[(2)]);
var inst_62230 = [];
var inst_62231 = inst_62230.push(inst_62215);
var inst_62211 = inst_62230;
var inst_62212 = inst_62219;
var state_62251__$1 = (function (){var statearr_62263 = state_62251;
(statearr_62263[(7)] = inst_62212);

(statearr_62263[(8)] = inst_62211);

(statearr_62263[(11)] = inst_62229);

(statearr_62263[(12)] = inst_62231);

return statearr_62263;
})();
var statearr_62264_62288 = state_62251__$1;
(statearr_62264_62288[(2)] = null);

(statearr_62264_62288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62252 === (9))){
var inst_62211 = (state_62251[(8)]);
var inst_62227 = cljs.core.vec.call(null,inst_62211);
var state_62251__$1 = state_62251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62251__$1,(11),out,inst_62227);
} else {
if((state_val_62252 === (5))){
var inst_62212 = (state_62251[(7)]);
var inst_62215 = (state_62251[(9)]);
var inst_62219 = (state_62251[(10)]);
var inst_62219__$1 = f.call(null,inst_62215);
var inst_62220 = cljs.core._EQ_.call(null,inst_62219__$1,inst_62212);
var inst_62221 = cljs.core.keyword_identical_QMARK_.call(null,inst_62212,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_62222 = (inst_62220) || (inst_62221);
var state_62251__$1 = (function (){var statearr_62265 = state_62251;
(statearr_62265[(10)] = inst_62219__$1);

return statearr_62265;
})();
if(cljs.core.truth_(inst_62222)){
var statearr_62266_62289 = state_62251__$1;
(statearr_62266_62289[(1)] = (8));

} else {
var statearr_62267_62290 = state_62251__$1;
(statearr_62267_62290[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62252 === (14))){
var inst_62244 = (state_62251[(2)]);
var inst_62245 = cljs.core.async.close_BANG_.call(null,out);
var state_62251__$1 = (function (){var statearr_62269 = state_62251;
(statearr_62269[(13)] = inst_62244);

return statearr_62269;
})();
var statearr_62270_62291 = state_62251__$1;
(statearr_62270_62291[(2)] = inst_62245);

(statearr_62270_62291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62252 === (10))){
var inst_62234 = (state_62251[(2)]);
var state_62251__$1 = state_62251;
var statearr_62271_62292 = state_62251__$1;
(statearr_62271_62292[(2)] = inst_62234);

(statearr_62271_62292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62252 === (8))){
var inst_62211 = (state_62251[(8)]);
var inst_62215 = (state_62251[(9)]);
var inst_62219 = (state_62251[(10)]);
var inst_62224 = inst_62211.push(inst_62215);
var tmp62268 = inst_62211;
var inst_62211__$1 = tmp62268;
var inst_62212 = inst_62219;
var state_62251__$1 = (function (){var statearr_62272 = state_62251;
(statearr_62272[(7)] = inst_62212);

(statearr_62272[(8)] = inst_62211__$1);

(statearr_62272[(14)] = inst_62224);

return statearr_62272;
})();
var statearr_62273_62293 = state_62251__$1;
(statearr_62273_62293[(2)] = null);

(statearr_62273_62293[(1)] = (2));


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
});})(c__44106__auto___62279,out))
;
return ((function (switch__44016__auto__,c__44106__auto___62279,out){
return (function() {
var cljs$core$async$state_machine__44017__auto__ = null;
var cljs$core$async$state_machine__44017__auto____0 = (function (){
var statearr_62274 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62274[(0)] = cljs$core$async$state_machine__44017__auto__);

(statearr_62274[(1)] = (1));

return statearr_62274;
});
var cljs$core$async$state_machine__44017__auto____1 = (function (state_62251){
while(true){
var ret_value__44018__auto__ = (function (){try{while(true){
var result__44019__auto__ = switch__44016__auto__.call(null,state_62251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44019__auto__;
}
break;
}
}catch (e62275){if((e62275 instanceof Object)){
var ex__44020__auto__ = e62275;
var statearr_62276_62294 = state_62251;
(statearr_62276_62294[(5)] = ex__44020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62295 = state_62251;
state_62251 = G__62295;
continue;
} else {
return ret_value__44018__auto__;
}
break;
}
});
cljs$core$async$state_machine__44017__auto__ = function(state_62251){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44017__auto____1.call(this,state_62251);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44017__auto____0;
cljs$core$async$state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44017__auto____1;
return cljs$core$async$state_machine__44017__auto__;
})()
;})(switch__44016__auto__,c__44106__auto___62279,out))
})();
var state__44108__auto__ = (function (){var statearr_62277 = f__44107__auto__.call(null);
(statearr_62277[(6)] = c__44106__auto___62279);

return statearr_62277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44108__auto__);
});})(c__44106__auto___62279,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1504289156977