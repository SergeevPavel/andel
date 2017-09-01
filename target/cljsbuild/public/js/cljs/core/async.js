// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15843 = arguments.length;
switch (G__15843) {
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
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async15844 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15844 = (function (f,blockable,meta15845){
this.f = f;
this.blockable = blockable;
this.meta15845 = meta15845;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15846,meta15845__$1){
var self__ = this;
var _15846__$1 = this;
return (new cljs.core.async.t_cljs$core$async15844(self__.f,self__.blockable,meta15845__$1));
});

cljs.core.async.t_cljs$core$async15844.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15846){
var self__ = this;
var _15846__$1 = this;
return self__.meta15845;
});

cljs.core.async.t_cljs$core$async15844.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15844.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15844.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async15844.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async15844.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta15845], null);
});

cljs.core.async.t_cljs$core$async15844.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15844.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15844";

cljs.core.async.t_cljs$core$async15844.cljs$lang$ctorPrWriter = (function (this__8335__auto__,writer__8336__auto__,opt__8337__auto__){
return cljs.core._write(writer__8336__auto__,"cljs.core.async/t_cljs$core$async15844");
});

cljs.core.async.__GT_t_cljs$core$async15844 = (function cljs$core$async$__GT_t_cljs$core$async15844(f__$1,blockable__$1,meta15845){
return (new cljs.core.async.t_cljs$core$async15844(f__$1,blockable__$1,meta15845));
});

}

return (new cljs.core.async.t_cljs$core$async15844(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
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
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__15850 = arguments.length;
switch (G__15850) {
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
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__15853 = arguments.length;
switch (G__15853) {
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
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__15856 = arguments.length;
switch (G__15856) {
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
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_15858 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15858) : fn1.call(null,val_15858));
} else {
cljs.core.async.impl.dispatch.run(((function (val_15858,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15858) : fn1.call(null,val_15858));
});})(val_15858,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
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
var G__15860 = arguments.length;
switch (G__15860) {
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
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5276__auto__)){
var ret = temp__5276__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5276__auto__)){
var retb = temp__5276__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5276__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
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
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__8700__auto___15862 = n;
var x_15863 = (0);
while(true){
if((x_15863 < n__8700__auto___15862)){
(a[x_15863] = (0));

var G__15864 = (x_15863 + (1));
x_15863 = G__15864;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__15865 = (i + (1));
i = G__15865;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async15866 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15866 = (function (flag,meta15867){
this.flag = flag;
this.meta15867 = meta15867;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15868,meta15867__$1){
var self__ = this;
var _15868__$1 = this;
return (new cljs.core.async.t_cljs$core$async15866(self__.flag,meta15867__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async15866.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15868){
var self__ = this;
var _15868__$1 = this;
return self__.meta15867;
});})(flag))
;

cljs.core.async.t_cljs$core$async15866.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15866.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async15866.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15866.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15866.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta15867], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async15866.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15866.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15866";

cljs.core.async.t_cljs$core$async15866.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8335__auto__,writer__8336__auto__,opt__8337__auto__){
return cljs.core._write(writer__8336__auto__,"cljs.core.async/t_cljs$core$async15866");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async15866 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15866(flag__$1,meta15867){
return (new cljs.core.async.t_cljs$core$async15866(flag__$1,meta15867));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async15866(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async15869 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15869 = (function (flag,cb,meta15870){
this.flag = flag;
this.cb = cb;
this.meta15870 = meta15870;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15871,meta15870__$1){
var self__ = this;
var _15871__$1 = this;
return (new cljs.core.async.t_cljs$core$async15869(self__.flag,self__.cb,meta15870__$1));
});

cljs.core.async.t_cljs$core$async15869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15871){
var self__ = this;
var _15871__$1 = this;
return self__.meta15870;
});

cljs.core.async.t_cljs$core$async15869.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15869.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async15869.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15869.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async15869.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta15870], null);
});

cljs.core.async.t_cljs$core$async15869.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15869.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15869";

cljs.core.async.t_cljs$core$async15869.cljs$lang$ctorPrWriter = (function (this__8335__auto__,writer__8336__auto__,opt__8337__auto__){
return cljs.core._write(writer__8336__auto__,"cljs.core.async/t_cljs$core$async15869");
});

cljs.core.async.__GT_t_cljs$core$async15869 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15869(flag__$1,cb__$1,meta15870){
return (new cljs.core.async.t_cljs$core$async15869(flag__$1,cb__$1,meta15870));
});

}

return (new cljs.core.async.t_cljs$core$async15869(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15872_SHARP_){
var G__15874 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15872_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15874) : fret.call(null,G__15874));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15873_SHARP_){
var G__15875 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15873_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15875) : fret.call(null,G__15875));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__7678__auto__ = wport;
if(cljs.core.truth_(or__7678__auto__)){
return or__7678__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15876 = (i + (1));
i = G__15876;
continue;
}
} else {
return null;
}
break;
}
})();
var or__7678__auto__ = ret;
if(cljs.core.truth_(or__7678__auto__)){
return or__7678__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5278__auto__ = (function (){var and__7666__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__7666__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__7666__auto__;
}
})();
if(cljs.core.truth_(temp__5278__auto__)){
var got = temp__5278__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
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
var args__8918__auto__ = [];
var len__8911__auto___15882 = arguments.length;
var i__8912__auto___15883 = (0);
while(true){
if((i__8912__auto___15883 < len__8911__auto___15882)){
args__8918__auto__.push((arguments[i__8912__auto___15883]));

var G__15884 = (i__8912__auto___15883 + (1));
i__8912__auto___15883 = G__15884;
continue;
} else {
}
break;
}

var argseq__8919__auto__ = ((((1) < args__8918__auto__.length))?(new cljs.core.IndexedSeq(args__8918__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8919__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15879){
var map__15880 = p__15879;
var map__15880__$1 = ((((!((map__15880 == null)))?((((map__15880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15880.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15880):map__15880);
var opts = map__15880__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15877){
var G__15878 = cljs.core.first(seq15877);
var seq15877__$1 = cljs.core.next(seq15877);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15878,seq15877__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__15886 = arguments.length;
switch (G__15886) {
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
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15783__auto___15932 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15783__auto___15932){
return (function (){
var f__15784__auto__ = (function (){var switch__15681__auto__ = ((function (c__15783__auto___15932){
return (function (state_15910){
var state_val_15911 = (state_15910[(1)]);
if((state_val_15911 === (7))){
var inst_15906 = (state_15910[(2)]);
var state_15910__$1 = state_15910;
var statearr_15912_15933 = state_15910__$1;
(statearr_15912_15933[(2)] = inst_15906);

(statearr_15912_15933[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15911 === (1))){
var state_15910__$1 = state_15910;
var statearr_15913_15934 = state_15910__$1;
(statearr_15913_15934[(2)] = null);

(statearr_15913_15934[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15911 === (4))){
var inst_15889 = (state_15910[(7)]);
var inst_15889__$1 = (state_15910[(2)]);
var inst_15890 = (inst_15889__$1 == null);
var state_15910__$1 = (function (){var statearr_15914 = state_15910;
(statearr_15914[(7)] = inst_15889__$1);

return statearr_15914;
})();
if(cljs.core.truth_(inst_15890)){
var statearr_15915_15935 = state_15910__$1;
(statearr_15915_15935[(1)] = (5));

} else {
var statearr_15916_15936 = state_15910__$1;
(statearr_15916_15936[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15911 === (13))){
var state_15910__$1 = state_15910;
var statearr_15917_15937 = state_15910__$1;
(statearr_15917_15937[(2)] = null);

(statearr_15917_15937[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15911 === (6))){
var inst_15889 = (state_15910[(7)]);
var state_15910__$1 = state_15910;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15910__$1,(11),to,inst_15889);
} else {
if((state_val_15911 === (3))){
var inst_15908 = (state_15910[(2)]);
var state_15910__$1 = state_15910;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15910__$1,inst_15908);
} else {
if((state_val_15911 === (12))){
var state_15910__$1 = state_15910;
var statearr_15918_15938 = state_15910__$1;
(statearr_15918_15938[(2)] = null);

(statearr_15918_15938[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15911 === (2))){
var state_15910__$1 = state_15910;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15910__$1,(4),from);
} else {
if((state_val_15911 === (11))){
var inst_15899 = (state_15910[(2)]);
var state_15910__$1 = state_15910;
if(cljs.core.truth_(inst_15899)){
var statearr_15919_15939 = state_15910__$1;
(statearr_15919_15939[(1)] = (12));

} else {
var statearr_15920_15940 = state_15910__$1;
(statearr_15920_15940[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15911 === (9))){
var state_15910__$1 = state_15910;
var statearr_15921_15941 = state_15910__$1;
(statearr_15921_15941[(2)] = null);

(statearr_15921_15941[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15911 === (5))){
var state_15910__$1 = state_15910;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15922_15942 = state_15910__$1;
(statearr_15922_15942[(1)] = (8));

} else {
var statearr_15923_15943 = state_15910__$1;
(statearr_15923_15943[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15911 === (14))){
var inst_15904 = (state_15910[(2)]);
var state_15910__$1 = state_15910;
var statearr_15924_15944 = state_15910__$1;
(statearr_15924_15944[(2)] = inst_15904);

(statearr_15924_15944[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15911 === (10))){
var inst_15896 = (state_15910[(2)]);
var state_15910__$1 = state_15910;
var statearr_15925_15945 = state_15910__$1;
(statearr_15925_15945[(2)] = inst_15896);

(statearr_15925_15945[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15911 === (8))){
var inst_15893 = cljs.core.async.close_BANG_(to);
var state_15910__$1 = state_15910;
var statearr_15926_15946 = state_15910__$1;
(statearr_15926_15946[(2)] = inst_15893);

(statearr_15926_15946[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__15783__auto___15932))
;
return ((function (switch__15681__auto__,c__15783__auto___15932){
return (function() {
var cljs$core$async$state_machine__15682__auto__ = null;
var cljs$core$async$state_machine__15682__auto____0 = (function (){
var statearr_15927 = [null,null,null,null,null,null,null,null];
(statearr_15927[(0)] = cljs$core$async$state_machine__15682__auto__);

(statearr_15927[(1)] = (1));

return statearr_15927;
});
var cljs$core$async$state_machine__15682__auto____1 = (function (state_15910){
while(true){
var ret_value__15683__auto__ = (function (){try{while(true){
var result__15684__auto__ = switch__15681__auto__(state_15910);
if(cljs.core.keyword_identical_QMARK_(result__15684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15684__auto__;
}
break;
}
}catch (e15928){if((e15928 instanceof Object)){
var ex__15685__auto__ = e15928;
var statearr_15929_15947 = state_15910;
(statearr_15929_15947[(5)] = ex__15685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15910);

return cljs.core.cst$kw$recur;
} else {
throw e15928;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15683__auto__,cljs.core.cst$kw$recur)){
var G__15948 = state_15910;
state_15910 = G__15948;
continue;
} else {
return ret_value__15683__auto__;
}
break;
}
});
cljs$core$async$state_machine__15682__auto__ = function(state_15910){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15682__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15682__auto____1.call(this,state_15910);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15682__auto____0;
cljs$core$async$state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15682__auto____1;
return cljs$core$async$state_machine__15682__auto__;
})()
;})(switch__15681__auto__,c__15783__auto___15932))
})();
var state__15785__auto__ = (function (){var statearr_15930 = (f__15784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15784__auto__.cljs$core$IFn$_invoke$arity$0() : f__15784__auto__.call(null));
(statearr_15930[(6)] = c__15783__auto___15932);

return statearr_15930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15785__auto__);
});})(c__15783__auto___15932))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__15949){
var vec__15950 = p__15949;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15950,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15950,(1),null);
var job = vec__15950;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15783__auto___16121 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15783__auto___16121,res,vec__15950,v,p,job,jobs,results){
return (function (){
var f__15784__auto__ = (function (){var switch__15681__auto__ = ((function (c__15783__auto___16121,res,vec__15950,v,p,job,jobs,results){
return (function (state_15957){
var state_val_15958 = (state_15957[(1)]);
if((state_val_15958 === (1))){
var state_15957__$1 = state_15957;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15957__$1,(2),res,v);
} else {
if((state_val_15958 === (2))){
var inst_15954 = (state_15957[(2)]);
var inst_15955 = cljs.core.async.close_BANG_(res);
var state_15957__$1 = (function (){var statearr_15959 = state_15957;
(statearr_15959[(7)] = inst_15954);

return statearr_15959;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15957__$1,inst_15955);
} else {
return null;
}
}
});})(c__15783__auto___16121,res,vec__15950,v,p,job,jobs,results))
;
return ((function (switch__15681__auto__,c__15783__auto___16121,res,vec__15950,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15682__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15682__auto____0 = (function (){
var statearr_15960 = [null,null,null,null,null,null,null,null];
(statearr_15960[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15682__auto__);

(statearr_15960[(1)] = (1));

return statearr_15960;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15682__auto____1 = (function (state_15957){
while(true){
var ret_value__15683__auto__ = (function (){try{while(true){
var result__15684__auto__ = switch__15681__auto__(state_15957);
if(cljs.core.keyword_identical_QMARK_(result__15684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15684__auto__;
}
break;
}
}catch (e15961){if((e15961 instanceof Object)){
var ex__15685__auto__ = e15961;
var statearr_15962_16122 = state_15957;
(statearr_15962_16122[(5)] = ex__15685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15957);

return cljs.core.cst$kw$recur;
} else {
throw e15961;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15683__auto__,cljs.core.cst$kw$recur)){
var G__16123 = state_15957;
state_15957 = G__16123;
continue;
} else {
return ret_value__15683__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15682__auto__ = function(state_15957){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15682__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15682__auto____1.call(this,state_15957);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15682__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15682__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15682__auto__;
})()
;})(switch__15681__auto__,c__15783__auto___16121,res,vec__15950,v,p,job,jobs,results))
})();
var state__15785__auto__ = (function (){var statearr_15963 = (f__15784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15784__auto__.cljs$core$IFn$_invoke$arity$0() : f__15784__auto__.call(null));
(statearr_15963[(6)] = c__15783__auto___16121);

return statearr_15963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15785__auto__);
});})(c__15783__auto___16121,res,vec__15950,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15964){
var vec__15965 = p__15964;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15965,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15965,(1),null);
var job = vec__15965;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__8700__auto___16124 = n;
var __16125 = (0);
while(true){
if((__16125 < n__8700__auto___16124)){
var G__15968_16126 = type;
var G__15968_16127__$1 = (((G__15968_16126 instanceof cljs.core.Keyword))?G__15968_16126.fqn:null);
switch (G__15968_16127__$1) {
case "compute":
var c__15783__auto___16129 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16125,c__15783__auto___16129,G__15968_16126,G__15968_16127__$1,n__8700__auto___16124,jobs,results,process,async){
return (function (){
var f__15784__auto__ = (function (){var switch__15681__auto__ = ((function (__16125,c__15783__auto___16129,G__15968_16126,G__15968_16127__$1,n__8700__auto___16124,jobs,results,process,async){
return (function (state_15981){
var state_val_15982 = (state_15981[(1)]);
if((state_val_15982 === (1))){
var state_15981__$1 = state_15981;
var statearr_15983_16130 = state_15981__$1;
(statearr_15983_16130[(2)] = null);

(statearr_15983_16130[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15982 === (2))){
var state_15981__$1 = state_15981;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15981__$1,(4),jobs);
} else {
if((state_val_15982 === (3))){
var inst_15979 = (state_15981[(2)]);
var state_15981__$1 = state_15981;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15981__$1,inst_15979);
} else {
if((state_val_15982 === (4))){
var inst_15971 = (state_15981[(2)]);
var inst_15972 = process(inst_15971);
var state_15981__$1 = state_15981;
if(cljs.core.truth_(inst_15972)){
var statearr_15984_16131 = state_15981__$1;
(statearr_15984_16131[(1)] = (5));

} else {
var statearr_15985_16132 = state_15981__$1;
(statearr_15985_16132[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15982 === (5))){
var state_15981__$1 = state_15981;
var statearr_15986_16133 = state_15981__$1;
(statearr_15986_16133[(2)] = null);

(statearr_15986_16133[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15982 === (6))){
var state_15981__$1 = state_15981;
var statearr_15987_16134 = state_15981__$1;
(statearr_15987_16134[(2)] = null);

(statearr_15987_16134[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15982 === (7))){
var inst_15977 = (state_15981[(2)]);
var state_15981__$1 = state_15981;
var statearr_15988_16135 = state_15981__$1;
(statearr_15988_16135[(2)] = inst_15977);

(statearr_15988_16135[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__16125,c__15783__auto___16129,G__15968_16126,G__15968_16127__$1,n__8700__auto___16124,jobs,results,process,async))
;
return ((function (__16125,switch__15681__auto__,c__15783__auto___16129,G__15968_16126,G__15968_16127__$1,n__8700__auto___16124,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15682__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15682__auto____0 = (function (){
var statearr_15989 = [null,null,null,null,null,null,null];
(statearr_15989[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15682__auto__);

(statearr_15989[(1)] = (1));

return statearr_15989;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15682__auto____1 = (function (state_15981){
while(true){
var ret_value__15683__auto__ = (function (){try{while(true){
var result__15684__auto__ = switch__15681__auto__(state_15981);
if(cljs.core.keyword_identical_QMARK_(result__15684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15684__auto__;
}
break;
}
}catch (e15990){if((e15990 instanceof Object)){
var ex__15685__auto__ = e15990;
var statearr_15991_16136 = state_15981;
(statearr_15991_16136[(5)] = ex__15685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15981);

return cljs.core.cst$kw$recur;
} else {
throw e15990;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15683__auto__,cljs.core.cst$kw$recur)){
var G__16137 = state_15981;
state_15981 = G__16137;
continue;
} else {
return ret_value__15683__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15682__auto__ = function(state_15981){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15682__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15682__auto____1.call(this,state_15981);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15682__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15682__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15682__auto__;
})()
;})(__16125,switch__15681__auto__,c__15783__auto___16129,G__15968_16126,G__15968_16127__$1,n__8700__auto___16124,jobs,results,process,async))
})();
var state__15785__auto__ = (function (){var statearr_15992 = (f__15784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15784__auto__.cljs$core$IFn$_invoke$arity$0() : f__15784__auto__.call(null));
(statearr_15992[(6)] = c__15783__auto___16129);

return statearr_15992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15785__auto__);
});})(__16125,c__15783__auto___16129,G__15968_16126,G__15968_16127__$1,n__8700__auto___16124,jobs,results,process,async))
);


break;
case "async":
var c__15783__auto___16138 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16125,c__15783__auto___16138,G__15968_16126,G__15968_16127__$1,n__8700__auto___16124,jobs,results,process,async){
return (function (){
var f__15784__auto__ = (function (){var switch__15681__auto__ = ((function (__16125,c__15783__auto___16138,G__15968_16126,G__15968_16127__$1,n__8700__auto___16124,jobs,results,process,async){
return (function (state_16005){
var state_val_16006 = (state_16005[(1)]);
if((state_val_16006 === (1))){
var state_16005__$1 = state_16005;
var statearr_16007_16139 = state_16005__$1;
(statearr_16007_16139[(2)] = null);

(statearr_16007_16139[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16006 === (2))){
var state_16005__$1 = state_16005;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16005__$1,(4),jobs);
} else {
if((state_val_16006 === (3))){
var inst_16003 = (state_16005[(2)]);
var state_16005__$1 = state_16005;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16005__$1,inst_16003);
} else {
if((state_val_16006 === (4))){
var inst_15995 = (state_16005[(2)]);
var inst_15996 = async(inst_15995);
var state_16005__$1 = state_16005;
if(cljs.core.truth_(inst_15996)){
var statearr_16008_16140 = state_16005__$1;
(statearr_16008_16140[(1)] = (5));

} else {
var statearr_16009_16141 = state_16005__$1;
(statearr_16009_16141[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16006 === (5))){
var state_16005__$1 = state_16005;
var statearr_16010_16142 = state_16005__$1;
(statearr_16010_16142[(2)] = null);

(statearr_16010_16142[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16006 === (6))){
var state_16005__$1 = state_16005;
var statearr_16011_16143 = state_16005__$1;
(statearr_16011_16143[(2)] = null);

(statearr_16011_16143[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16006 === (7))){
var inst_16001 = (state_16005[(2)]);
var state_16005__$1 = state_16005;
var statearr_16012_16144 = state_16005__$1;
(statearr_16012_16144[(2)] = inst_16001);

(statearr_16012_16144[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__16125,c__15783__auto___16138,G__15968_16126,G__15968_16127__$1,n__8700__auto___16124,jobs,results,process,async))
;
return ((function (__16125,switch__15681__auto__,c__15783__auto___16138,G__15968_16126,G__15968_16127__$1,n__8700__auto___16124,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15682__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15682__auto____0 = (function (){
var statearr_16013 = [null,null,null,null,null,null,null];
(statearr_16013[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15682__auto__);

(statearr_16013[(1)] = (1));

return statearr_16013;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15682__auto____1 = (function (state_16005){
while(true){
var ret_value__15683__auto__ = (function (){try{while(true){
var result__15684__auto__ = switch__15681__auto__(state_16005);
if(cljs.core.keyword_identical_QMARK_(result__15684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15684__auto__;
}
break;
}
}catch (e16014){if((e16014 instanceof Object)){
var ex__15685__auto__ = e16014;
var statearr_16015_16145 = state_16005;
(statearr_16015_16145[(5)] = ex__15685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16005);

return cljs.core.cst$kw$recur;
} else {
throw e16014;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15683__auto__,cljs.core.cst$kw$recur)){
var G__16146 = state_16005;
state_16005 = G__16146;
continue;
} else {
return ret_value__15683__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15682__auto__ = function(state_16005){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15682__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15682__auto____1.call(this,state_16005);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15682__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15682__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15682__auto__;
})()
;})(__16125,switch__15681__auto__,c__15783__auto___16138,G__15968_16126,G__15968_16127__$1,n__8700__auto___16124,jobs,results,process,async))
})();
var state__15785__auto__ = (function (){var statearr_16016 = (f__15784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15784__auto__.cljs$core$IFn$_invoke$arity$0() : f__15784__auto__.call(null));
(statearr_16016[(6)] = c__15783__auto___16138);

return statearr_16016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15785__auto__);
});})(__16125,c__15783__auto___16138,G__15968_16126,G__15968_16127__$1,n__8700__auto___16124,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15968_16127__$1)].join('')));

}

var G__16147 = (__16125 + (1));
__16125 = G__16147;
continue;
} else {
}
break;
}

var c__15783__auto___16148 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15783__auto___16148,jobs,results,process,async){
return (function (){
var f__15784__auto__ = (function (){var switch__15681__auto__ = ((function (c__15783__auto___16148,jobs,results,process,async){
return (function (state_16038){
var state_val_16039 = (state_16038[(1)]);
if((state_val_16039 === (1))){
var state_16038__$1 = state_16038;
var statearr_16040_16149 = state_16038__$1;
(statearr_16040_16149[(2)] = null);

(statearr_16040_16149[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16039 === (2))){
var state_16038__$1 = state_16038;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16038__$1,(4),from);
} else {
if((state_val_16039 === (3))){
var inst_16036 = (state_16038[(2)]);
var state_16038__$1 = state_16038;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16038__$1,inst_16036);
} else {
if((state_val_16039 === (4))){
var inst_16019 = (state_16038[(7)]);
var inst_16019__$1 = (state_16038[(2)]);
var inst_16020 = (inst_16019__$1 == null);
var state_16038__$1 = (function (){var statearr_16041 = state_16038;
(statearr_16041[(7)] = inst_16019__$1);

return statearr_16041;
})();
if(cljs.core.truth_(inst_16020)){
var statearr_16042_16150 = state_16038__$1;
(statearr_16042_16150[(1)] = (5));

} else {
var statearr_16043_16151 = state_16038__$1;
(statearr_16043_16151[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16039 === (5))){
var inst_16022 = cljs.core.async.close_BANG_(jobs);
var state_16038__$1 = state_16038;
var statearr_16044_16152 = state_16038__$1;
(statearr_16044_16152[(2)] = inst_16022);

(statearr_16044_16152[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16039 === (6))){
var inst_16019 = (state_16038[(7)]);
var inst_16024 = (state_16038[(8)]);
var inst_16024__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16025 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16026 = [inst_16019,inst_16024__$1];
var inst_16027 = (new cljs.core.PersistentVector(null,2,(5),inst_16025,inst_16026,null));
var state_16038__$1 = (function (){var statearr_16045 = state_16038;
(statearr_16045[(8)] = inst_16024__$1);

return statearr_16045;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16038__$1,(8),jobs,inst_16027);
} else {
if((state_val_16039 === (7))){
var inst_16034 = (state_16038[(2)]);
var state_16038__$1 = state_16038;
var statearr_16046_16153 = state_16038__$1;
(statearr_16046_16153[(2)] = inst_16034);

(statearr_16046_16153[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16039 === (8))){
var inst_16024 = (state_16038[(8)]);
var inst_16029 = (state_16038[(2)]);
var state_16038__$1 = (function (){var statearr_16047 = state_16038;
(statearr_16047[(9)] = inst_16029);

return statearr_16047;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16038__$1,(9),results,inst_16024);
} else {
if((state_val_16039 === (9))){
var inst_16031 = (state_16038[(2)]);
var state_16038__$1 = (function (){var statearr_16048 = state_16038;
(statearr_16048[(10)] = inst_16031);

return statearr_16048;
})();
var statearr_16049_16154 = state_16038__$1;
(statearr_16049_16154[(2)] = null);

(statearr_16049_16154[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__15783__auto___16148,jobs,results,process,async))
;
return ((function (switch__15681__auto__,c__15783__auto___16148,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15682__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15682__auto____0 = (function (){
var statearr_16050 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16050[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15682__auto__);

(statearr_16050[(1)] = (1));

return statearr_16050;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15682__auto____1 = (function (state_16038){
while(true){
var ret_value__15683__auto__ = (function (){try{while(true){
var result__15684__auto__ = switch__15681__auto__(state_16038);
if(cljs.core.keyword_identical_QMARK_(result__15684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15684__auto__;
}
break;
}
}catch (e16051){if((e16051 instanceof Object)){
var ex__15685__auto__ = e16051;
var statearr_16052_16155 = state_16038;
(statearr_16052_16155[(5)] = ex__15685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16038);

return cljs.core.cst$kw$recur;
} else {
throw e16051;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15683__auto__,cljs.core.cst$kw$recur)){
var G__16156 = state_16038;
state_16038 = G__16156;
continue;
} else {
return ret_value__15683__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15682__auto__ = function(state_16038){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15682__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15682__auto____1.call(this,state_16038);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15682__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15682__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15682__auto__;
})()
;})(switch__15681__auto__,c__15783__auto___16148,jobs,results,process,async))
})();
var state__15785__auto__ = (function (){var statearr_16053 = (f__15784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15784__auto__.cljs$core$IFn$_invoke$arity$0() : f__15784__auto__.call(null));
(statearr_16053[(6)] = c__15783__auto___16148);

return statearr_16053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15785__auto__);
});})(c__15783__auto___16148,jobs,results,process,async))
);


var c__15783__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15783__auto__,jobs,results,process,async){
return (function (){
var f__15784__auto__ = (function (){var switch__15681__auto__ = ((function (c__15783__auto__,jobs,results,process,async){
return (function (state_16091){
var state_val_16092 = (state_16091[(1)]);
if((state_val_16092 === (7))){
var inst_16087 = (state_16091[(2)]);
var state_16091__$1 = state_16091;
var statearr_16093_16157 = state_16091__$1;
(statearr_16093_16157[(2)] = inst_16087);

(statearr_16093_16157[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16092 === (20))){
var state_16091__$1 = state_16091;
var statearr_16094_16158 = state_16091__$1;
(statearr_16094_16158[(2)] = null);

(statearr_16094_16158[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16092 === (1))){
var state_16091__$1 = state_16091;
var statearr_16095_16159 = state_16091__$1;
(statearr_16095_16159[(2)] = null);

(statearr_16095_16159[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16092 === (4))){
var inst_16056 = (state_16091[(7)]);
var inst_16056__$1 = (state_16091[(2)]);
var inst_16057 = (inst_16056__$1 == null);
var state_16091__$1 = (function (){var statearr_16096 = state_16091;
(statearr_16096[(7)] = inst_16056__$1);

return statearr_16096;
})();
if(cljs.core.truth_(inst_16057)){
var statearr_16097_16160 = state_16091__$1;
(statearr_16097_16160[(1)] = (5));

} else {
var statearr_16098_16161 = state_16091__$1;
(statearr_16098_16161[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16092 === (15))){
var inst_16069 = (state_16091[(8)]);
var state_16091__$1 = state_16091;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16091__$1,(18),to,inst_16069);
} else {
if((state_val_16092 === (21))){
var inst_16082 = (state_16091[(2)]);
var state_16091__$1 = state_16091;
var statearr_16099_16162 = state_16091__$1;
(statearr_16099_16162[(2)] = inst_16082);

(statearr_16099_16162[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16092 === (13))){
var inst_16084 = (state_16091[(2)]);
var state_16091__$1 = (function (){var statearr_16100 = state_16091;
(statearr_16100[(9)] = inst_16084);

return statearr_16100;
})();
var statearr_16101_16163 = state_16091__$1;
(statearr_16101_16163[(2)] = null);

(statearr_16101_16163[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16092 === (6))){
var inst_16056 = (state_16091[(7)]);
var state_16091__$1 = state_16091;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16091__$1,(11),inst_16056);
} else {
if((state_val_16092 === (17))){
var inst_16077 = (state_16091[(2)]);
var state_16091__$1 = state_16091;
if(cljs.core.truth_(inst_16077)){
var statearr_16102_16164 = state_16091__$1;
(statearr_16102_16164[(1)] = (19));

} else {
var statearr_16103_16165 = state_16091__$1;
(statearr_16103_16165[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16092 === (3))){
var inst_16089 = (state_16091[(2)]);
var state_16091__$1 = state_16091;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16091__$1,inst_16089);
} else {
if((state_val_16092 === (12))){
var inst_16066 = (state_16091[(10)]);
var state_16091__$1 = state_16091;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16091__$1,(14),inst_16066);
} else {
if((state_val_16092 === (2))){
var state_16091__$1 = state_16091;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16091__$1,(4),results);
} else {
if((state_val_16092 === (19))){
var state_16091__$1 = state_16091;
var statearr_16104_16166 = state_16091__$1;
(statearr_16104_16166[(2)] = null);

(statearr_16104_16166[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16092 === (11))){
var inst_16066 = (state_16091[(2)]);
var state_16091__$1 = (function (){var statearr_16105 = state_16091;
(statearr_16105[(10)] = inst_16066);

return statearr_16105;
})();
var statearr_16106_16167 = state_16091__$1;
(statearr_16106_16167[(2)] = null);

(statearr_16106_16167[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16092 === (9))){
var state_16091__$1 = state_16091;
var statearr_16107_16168 = state_16091__$1;
(statearr_16107_16168[(2)] = null);

(statearr_16107_16168[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16092 === (5))){
var state_16091__$1 = state_16091;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16108_16169 = state_16091__$1;
(statearr_16108_16169[(1)] = (8));

} else {
var statearr_16109_16170 = state_16091__$1;
(statearr_16109_16170[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16092 === (14))){
var inst_16071 = (state_16091[(11)]);
var inst_16069 = (state_16091[(8)]);
var inst_16069__$1 = (state_16091[(2)]);
var inst_16070 = (inst_16069__$1 == null);
var inst_16071__$1 = cljs.core.not(inst_16070);
var state_16091__$1 = (function (){var statearr_16110 = state_16091;
(statearr_16110[(11)] = inst_16071__$1);

(statearr_16110[(8)] = inst_16069__$1);

return statearr_16110;
})();
if(inst_16071__$1){
var statearr_16111_16171 = state_16091__$1;
(statearr_16111_16171[(1)] = (15));

} else {
var statearr_16112_16172 = state_16091__$1;
(statearr_16112_16172[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16092 === (16))){
var inst_16071 = (state_16091[(11)]);
var state_16091__$1 = state_16091;
var statearr_16113_16173 = state_16091__$1;
(statearr_16113_16173[(2)] = inst_16071);

(statearr_16113_16173[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16092 === (10))){
var inst_16063 = (state_16091[(2)]);
var state_16091__$1 = state_16091;
var statearr_16114_16174 = state_16091__$1;
(statearr_16114_16174[(2)] = inst_16063);

(statearr_16114_16174[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16092 === (18))){
var inst_16074 = (state_16091[(2)]);
var state_16091__$1 = state_16091;
var statearr_16115_16175 = state_16091__$1;
(statearr_16115_16175[(2)] = inst_16074);

(statearr_16115_16175[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16092 === (8))){
var inst_16060 = cljs.core.async.close_BANG_(to);
var state_16091__$1 = state_16091;
var statearr_16116_16176 = state_16091__$1;
(statearr_16116_16176[(2)] = inst_16060);

(statearr_16116_16176[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__15783__auto__,jobs,results,process,async))
;
return ((function (switch__15681__auto__,c__15783__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15682__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15682__auto____0 = (function (){
var statearr_16117 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16117[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15682__auto__);

(statearr_16117[(1)] = (1));

return statearr_16117;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15682__auto____1 = (function (state_16091){
while(true){
var ret_value__15683__auto__ = (function (){try{while(true){
var result__15684__auto__ = switch__15681__auto__(state_16091);
if(cljs.core.keyword_identical_QMARK_(result__15684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15684__auto__;
}
break;
}
}catch (e16118){if((e16118 instanceof Object)){
var ex__15685__auto__ = e16118;
var statearr_16119_16177 = state_16091;
(statearr_16119_16177[(5)] = ex__15685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16091);

return cljs.core.cst$kw$recur;
} else {
throw e16118;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15683__auto__,cljs.core.cst$kw$recur)){
var G__16178 = state_16091;
state_16091 = G__16178;
continue;
} else {
return ret_value__15683__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15682__auto__ = function(state_16091){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15682__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15682__auto____1.call(this,state_16091);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15682__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15682__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15682__auto__;
})()
;})(switch__15681__auto__,c__15783__auto__,jobs,results,process,async))
})();
var state__15785__auto__ = (function (){var statearr_16120 = (f__15784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15784__auto__.cljs$core$IFn$_invoke$arity$0() : f__15784__auto__.call(null));
(statearr_16120[(6)] = c__15783__auto__);

return statearr_16120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15785__auto__);
});})(c__15783__auto__,jobs,results,process,async))
);

return c__15783__auto__;
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
var G__16180 = arguments.length;
switch (G__16180) {
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
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
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
var G__16183 = arguments.length;
switch (G__16183) {
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
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
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
var G__16186 = arguments.length;
switch (G__16186) {
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
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15783__auto___16235 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15783__auto___16235,tc,fc){
return (function (){
var f__15784__auto__ = (function (){var switch__15681__auto__ = ((function (c__15783__auto___16235,tc,fc){
return (function (state_16212){
var state_val_16213 = (state_16212[(1)]);
if((state_val_16213 === (7))){
var inst_16208 = (state_16212[(2)]);
var state_16212__$1 = state_16212;
var statearr_16214_16236 = state_16212__$1;
(statearr_16214_16236[(2)] = inst_16208);

(statearr_16214_16236[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (1))){
var state_16212__$1 = state_16212;
var statearr_16215_16237 = state_16212__$1;
(statearr_16215_16237[(2)] = null);

(statearr_16215_16237[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (4))){
var inst_16189 = (state_16212[(7)]);
var inst_16189__$1 = (state_16212[(2)]);
var inst_16190 = (inst_16189__$1 == null);
var state_16212__$1 = (function (){var statearr_16216 = state_16212;
(statearr_16216[(7)] = inst_16189__$1);

return statearr_16216;
})();
if(cljs.core.truth_(inst_16190)){
var statearr_16217_16238 = state_16212__$1;
(statearr_16217_16238[(1)] = (5));

} else {
var statearr_16218_16239 = state_16212__$1;
(statearr_16218_16239[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (13))){
var state_16212__$1 = state_16212;
var statearr_16219_16240 = state_16212__$1;
(statearr_16219_16240[(2)] = null);

(statearr_16219_16240[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (6))){
var inst_16189 = (state_16212[(7)]);
var inst_16195 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16189) : p.call(null,inst_16189));
var state_16212__$1 = state_16212;
if(cljs.core.truth_(inst_16195)){
var statearr_16220_16241 = state_16212__$1;
(statearr_16220_16241[(1)] = (9));

} else {
var statearr_16221_16242 = state_16212__$1;
(statearr_16221_16242[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (3))){
var inst_16210 = (state_16212[(2)]);
var state_16212__$1 = state_16212;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16212__$1,inst_16210);
} else {
if((state_val_16213 === (12))){
var state_16212__$1 = state_16212;
var statearr_16222_16243 = state_16212__$1;
(statearr_16222_16243[(2)] = null);

(statearr_16222_16243[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (2))){
var state_16212__$1 = state_16212;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16212__$1,(4),ch);
} else {
if((state_val_16213 === (11))){
var inst_16189 = (state_16212[(7)]);
var inst_16199 = (state_16212[(2)]);
var state_16212__$1 = state_16212;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16212__$1,(8),inst_16199,inst_16189);
} else {
if((state_val_16213 === (9))){
var state_16212__$1 = state_16212;
var statearr_16223_16244 = state_16212__$1;
(statearr_16223_16244[(2)] = tc);

(statearr_16223_16244[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (5))){
var inst_16192 = cljs.core.async.close_BANG_(tc);
var inst_16193 = cljs.core.async.close_BANG_(fc);
var state_16212__$1 = (function (){var statearr_16224 = state_16212;
(statearr_16224[(8)] = inst_16192);

return statearr_16224;
})();
var statearr_16225_16245 = state_16212__$1;
(statearr_16225_16245[(2)] = inst_16193);

(statearr_16225_16245[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (14))){
var inst_16206 = (state_16212[(2)]);
var state_16212__$1 = state_16212;
var statearr_16226_16246 = state_16212__$1;
(statearr_16226_16246[(2)] = inst_16206);

(statearr_16226_16246[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (10))){
var state_16212__$1 = state_16212;
var statearr_16227_16247 = state_16212__$1;
(statearr_16227_16247[(2)] = fc);

(statearr_16227_16247[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16213 === (8))){
var inst_16201 = (state_16212[(2)]);
var state_16212__$1 = state_16212;
if(cljs.core.truth_(inst_16201)){
var statearr_16228_16248 = state_16212__$1;
(statearr_16228_16248[(1)] = (12));

} else {
var statearr_16229_16249 = state_16212__$1;
(statearr_16229_16249[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
});})(c__15783__auto___16235,tc,fc))
;
return ((function (switch__15681__auto__,c__15783__auto___16235,tc,fc){
return (function() {
var cljs$core$async$state_machine__15682__auto__ = null;
var cljs$core$async$state_machine__15682__auto____0 = (function (){
var statearr_16230 = [null,null,null,null,null,null,null,null,null];
(statearr_16230[(0)] = cljs$core$async$state_machine__15682__auto__);

(statearr_16230[(1)] = (1));

return statearr_16230;
});
var cljs$core$async$state_machine__15682__auto____1 = (function (state_16212){
while(true){
var ret_value__15683__auto__ = (function (){try{while(true){
var result__15684__auto__ = switch__15681__auto__(state_16212);
if(cljs.core.keyword_identical_QMARK_(result__15684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15684__auto__;
}
break;
}
}catch (e16231){if((e16231 instanceof Object)){
var ex__15685__auto__ = e16231;
var statearr_16232_16250 = state_16212;
(statearr_16232_16250[(5)] = ex__15685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16212);

return cljs.core.cst$kw$recur;
} else {
throw e16231;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15683__auto__,cljs.core.cst$kw$recur)){
var G__16251 = state_16212;
state_16212 = G__16251;
continue;
} else {
return ret_value__15683__auto__;
}
break;
}
});
cljs$core$async$state_machine__15682__auto__ = function(state_16212){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15682__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15682__auto____1.call(this,state_16212);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15682__auto____0;
cljs$core$async$state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15682__auto____1;
return cljs$core$async$state_machine__15682__auto__;
})()
;})(switch__15681__auto__,c__15783__auto___16235,tc,fc))
})();
var state__15785__auto__ = (function (){var statearr_16233 = (f__15784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15784__auto__.cljs$core$IFn$_invoke$arity$0() : f__15784__auto__.call(null));
(statearr_16233[(6)] = c__15783__auto___16235);

return statearr_16233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15785__auto__);
});})(c__15783__auto___16235,tc,fc))
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
var c__15783__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15783__auto__){
return (function (){
var f__15784__auto__ = (function (){var switch__15681__auto__ = ((function (c__15783__auto__){
return (function (state_16272){
var state_val_16273 = (state_16272[(1)]);
if((state_val_16273 === (7))){
var inst_16268 = (state_16272[(2)]);
var state_16272__$1 = state_16272;
var statearr_16274_16292 = state_16272__$1;
(statearr_16274_16292[(2)] = inst_16268);

(statearr_16274_16292[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16273 === (1))){
var inst_16252 = init;
var state_16272__$1 = (function (){var statearr_16275 = state_16272;
(statearr_16275[(7)] = inst_16252);

return statearr_16275;
})();
var statearr_16276_16293 = state_16272__$1;
(statearr_16276_16293[(2)] = null);

(statearr_16276_16293[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16273 === (4))){
var inst_16255 = (state_16272[(8)]);
var inst_16255__$1 = (state_16272[(2)]);
var inst_16256 = (inst_16255__$1 == null);
var state_16272__$1 = (function (){var statearr_16277 = state_16272;
(statearr_16277[(8)] = inst_16255__$1);

return statearr_16277;
})();
if(cljs.core.truth_(inst_16256)){
var statearr_16278_16294 = state_16272__$1;
(statearr_16278_16294[(1)] = (5));

} else {
var statearr_16279_16295 = state_16272__$1;
(statearr_16279_16295[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16273 === (6))){
var inst_16259 = (state_16272[(9)]);
var inst_16252 = (state_16272[(7)]);
var inst_16255 = (state_16272[(8)]);
var inst_16259__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16252,inst_16255) : f.call(null,inst_16252,inst_16255));
var inst_16260 = cljs.core.reduced_QMARK_(inst_16259__$1);
var state_16272__$1 = (function (){var statearr_16280 = state_16272;
(statearr_16280[(9)] = inst_16259__$1);

return statearr_16280;
})();
if(inst_16260){
var statearr_16281_16296 = state_16272__$1;
(statearr_16281_16296[(1)] = (8));

} else {
var statearr_16282_16297 = state_16272__$1;
(statearr_16282_16297[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16273 === (3))){
var inst_16270 = (state_16272[(2)]);
var state_16272__$1 = state_16272;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16272__$1,inst_16270);
} else {
if((state_val_16273 === (2))){
var state_16272__$1 = state_16272;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16272__$1,(4),ch);
} else {
if((state_val_16273 === (9))){
var inst_16259 = (state_16272[(9)]);
var inst_16252 = inst_16259;
var state_16272__$1 = (function (){var statearr_16283 = state_16272;
(statearr_16283[(7)] = inst_16252);

return statearr_16283;
})();
var statearr_16284_16298 = state_16272__$1;
(statearr_16284_16298[(2)] = null);

(statearr_16284_16298[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16273 === (5))){
var inst_16252 = (state_16272[(7)]);
var state_16272__$1 = state_16272;
var statearr_16285_16299 = state_16272__$1;
(statearr_16285_16299[(2)] = inst_16252);

(statearr_16285_16299[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16273 === (10))){
var inst_16266 = (state_16272[(2)]);
var state_16272__$1 = state_16272;
var statearr_16286_16300 = state_16272__$1;
(statearr_16286_16300[(2)] = inst_16266);

(statearr_16286_16300[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16273 === (8))){
var inst_16259 = (state_16272[(9)]);
var inst_16262 = cljs.core.deref(inst_16259);
var state_16272__$1 = state_16272;
var statearr_16287_16301 = state_16272__$1;
(statearr_16287_16301[(2)] = inst_16262);

(statearr_16287_16301[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__15783__auto__))
;
return ((function (switch__15681__auto__,c__15783__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15682__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15682__auto____0 = (function (){
var statearr_16288 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16288[(0)] = cljs$core$async$reduce_$_state_machine__15682__auto__);

(statearr_16288[(1)] = (1));

return statearr_16288;
});
var cljs$core$async$reduce_$_state_machine__15682__auto____1 = (function (state_16272){
while(true){
var ret_value__15683__auto__ = (function (){try{while(true){
var result__15684__auto__ = switch__15681__auto__(state_16272);
if(cljs.core.keyword_identical_QMARK_(result__15684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15684__auto__;
}
break;
}
}catch (e16289){if((e16289 instanceof Object)){
var ex__15685__auto__ = e16289;
var statearr_16290_16302 = state_16272;
(statearr_16290_16302[(5)] = ex__15685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16272);

return cljs.core.cst$kw$recur;
} else {
throw e16289;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15683__auto__,cljs.core.cst$kw$recur)){
var G__16303 = state_16272;
state_16272 = G__16303;
continue;
} else {
return ret_value__15683__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15682__auto__ = function(state_16272){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15682__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15682__auto____1.call(this,state_16272);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15682__auto____0;
cljs$core$async$reduce_$_state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15682__auto____1;
return cljs$core$async$reduce_$_state_machine__15682__auto__;
})()
;})(switch__15681__auto__,c__15783__auto__))
})();
var state__15785__auto__ = (function (){var statearr_16291 = (f__15784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15784__auto__.cljs$core$IFn$_invoke$arity$0() : f__15784__auto__.call(null));
(statearr_16291[(6)] = c__15783__auto__);

return statearr_16291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15785__auto__);
});})(c__15783__auto__))
);

return c__15783__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15783__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15783__auto__,f__$1){
return (function (){
var f__15784__auto__ = (function (){var switch__15681__auto__ = ((function (c__15783__auto__,f__$1){
return (function (state_16309){
var state_val_16310 = (state_16309[(1)]);
if((state_val_16310 === (1))){
var inst_16304 = cljs.core.async.reduce(f__$1,init,ch);
var state_16309__$1 = state_16309;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16309__$1,(2),inst_16304);
} else {
if((state_val_16310 === (2))){
var inst_16306 = (state_16309[(2)]);
var inst_16307 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16306) : f__$1.call(null,inst_16306));
var state_16309__$1 = state_16309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16309__$1,inst_16307);
} else {
return null;
}
}
});})(c__15783__auto__,f__$1))
;
return ((function (switch__15681__auto__,c__15783__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__15682__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15682__auto____0 = (function (){
var statearr_16311 = [null,null,null,null,null,null,null];
(statearr_16311[(0)] = cljs$core$async$transduce_$_state_machine__15682__auto__);

(statearr_16311[(1)] = (1));

return statearr_16311;
});
var cljs$core$async$transduce_$_state_machine__15682__auto____1 = (function (state_16309){
while(true){
var ret_value__15683__auto__ = (function (){try{while(true){
var result__15684__auto__ = switch__15681__auto__(state_16309);
if(cljs.core.keyword_identical_QMARK_(result__15684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15684__auto__;
}
break;
}
}catch (e16312){if((e16312 instanceof Object)){
var ex__15685__auto__ = e16312;
var statearr_16313_16315 = state_16309;
(statearr_16313_16315[(5)] = ex__15685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16309);

return cljs.core.cst$kw$recur;
} else {
throw e16312;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15683__auto__,cljs.core.cst$kw$recur)){
var G__16316 = state_16309;
state_16309 = G__16316;
continue;
} else {
return ret_value__15683__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15682__auto__ = function(state_16309){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15682__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15682__auto____1.call(this,state_16309);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15682__auto____0;
cljs$core$async$transduce_$_state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15682__auto____1;
return cljs$core$async$transduce_$_state_machine__15682__auto__;
})()
;})(switch__15681__auto__,c__15783__auto__,f__$1))
})();
var state__15785__auto__ = (function (){var statearr_16314 = (f__15784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15784__auto__.cljs$core$IFn$_invoke$arity$0() : f__15784__auto__.call(null));
(statearr_16314[(6)] = c__15783__auto__);

return statearr_16314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15785__auto__);
});})(c__15783__auto__,f__$1))
);

return c__15783__auto__;
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
var G__16318 = arguments.length;
switch (G__16318) {
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
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15783__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15783__auto__){
return (function (){
var f__15784__auto__ = (function (){var switch__15681__auto__ = ((function (c__15783__auto__){
return (function (state_16343){
var state_val_16344 = (state_16343[(1)]);
if((state_val_16344 === (7))){
var inst_16325 = (state_16343[(2)]);
var state_16343__$1 = state_16343;
var statearr_16345_16366 = state_16343__$1;
(statearr_16345_16366[(2)] = inst_16325);

(statearr_16345_16366[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16344 === (1))){
var inst_16319 = cljs.core.seq(coll);
var inst_16320 = inst_16319;
var state_16343__$1 = (function (){var statearr_16346 = state_16343;
(statearr_16346[(7)] = inst_16320);

return statearr_16346;
})();
var statearr_16347_16367 = state_16343__$1;
(statearr_16347_16367[(2)] = null);

(statearr_16347_16367[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16344 === (4))){
var inst_16320 = (state_16343[(7)]);
var inst_16323 = cljs.core.first(inst_16320);
var state_16343__$1 = state_16343;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16343__$1,(7),ch,inst_16323);
} else {
if((state_val_16344 === (13))){
var inst_16337 = (state_16343[(2)]);
var state_16343__$1 = state_16343;
var statearr_16348_16368 = state_16343__$1;
(statearr_16348_16368[(2)] = inst_16337);

(statearr_16348_16368[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16344 === (6))){
var inst_16328 = (state_16343[(2)]);
var state_16343__$1 = state_16343;
if(cljs.core.truth_(inst_16328)){
var statearr_16349_16369 = state_16343__$1;
(statearr_16349_16369[(1)] = (8));

} else {
var statearr_16350_16370 = state_16343__$1;
(statearr_16350_16370[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16344 === (3))){
var inst_16341 = (state_16343[(2)]);
var state_16343__$1 = state_16343;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16343__$1,inst_16341);
} else {
if((state_val_16344 === (12))){
var state_16343__$1 = state_16343;
var statearr_16351_16371 = state_16343__$1;
(statearr_16351_16371[(2)] = null);

(statearr_16351_16371[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16344 === (2))){
var inst_16320 = (state_16343[(7)]);
var state_16343__$1 = state_16343;
if(cljs.core.truth_(inst_16320)){
var statearr_16352_16372 = state_16343__$1;
(statearr_16352_16372[(1)] = (4));

} else {
var statearr_16353_16373 = state_16343__$1;
(statearr_16353_16373[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16344 === (11))){
var inst_16334 = cljs.core.async.close_BANG_(ch);
var state_16343__$1 = state_16343;
var statearr_16354_16374 = state_16343__$1;
(statearr_16354_16374[(2)] = inst_16334);

(statearr_16354_16374[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16344 === (9))){
var state_16343__$1 = state_16343;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16355_16375 = state_16343__$1;
(statearr_16355_16375[(1)] = (11));

} else {
var statearr_16356_16376 = state_16343__$1;
(statearr_16356_16376[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16344 === (5))){
var inst_16320 = (state_16343[(7)]);
var state_16343__$1 = state_16343;
var statearr_16357_16377 = state_16343__$1;
(statearr_16357_16377[(2)] = inst_16320);

(statearr_16357_16377[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16344 === (10))){
var inst_16339 = (state_16343[(2)]);
var state_16343__$1 = state_16343;
var statearr_16358_16378 = state_16343__$1;
(statearr_16358_16378[(2)] = inst_16339);

(statearr_16358_16378[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16344 === (8))){
var inst_16320 = (state_16343[(7)]);
var inst_16330 = cljs.core.next(inst_16320);
var inst_16320__$1 = inst_16330;
var state_16343__$1 = (function (){var statearr_16359 = state_16343;
(statearr_16359[(7)] = inst_16320__$1);

return statearr_16359;
})();
var statearr_16360_16379 = state_16343__$1;
(statearr_16360_16379[(2)] = null);

(statearr_16360_16379[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__15783__auto__))
;
return ((function (switch__15681__auto__,c__15783__auto__){
return (function() {
var cljs$core$async$state_machine__15682__auto__ = null;
var cljs$core$async$state_machine__15682__auto____0 = (function (){
var statearr_16361 = [null,null,null,null,null,null,null,null];
(statearr_16361[(0)] = cljs$core$async$state_machine__15682__auto__);

(statearr_16361[(1)] = (1));

return statearr_16361;
});
var cljs$core$async$state_machine__15682__auto____1 = (function (state_16343){
while(true){
var ret_value__15683__auto__ = (function (){try{while(true){
var result__15684__auto__ = switch__15681__auto__(state_16343);
if(cljs.core.keyword_identical_QMARK_(result__15684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15684__auto__;
}
break;
}
}catch (e16362){if((e16362 instanceof Object)){
var ex__15685__auto__ = e16362;
var statearr_16363_16380 = state_16343;
(statearr_16363_16380[(5)] = ex__15685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16343);

return cljs.core.cst$kw$recur;
} else {
throw e16362;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15683__auto__,cljs.core.cst$kw$recur)){
var G__16381 = state_16343;
state_16343 = G__16381;
continue;
} else {
return ret_value__15683__auto__;
}
break;
}
});
cljs$core$async$state_machine__15682__auto__ = function(state_16343){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15682__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15682__auto____1.call(this,state_16343);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15682__auto____0;
cljs$core$async$state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15682__auto____1;
return cljs$core$async$state_machine__15682__auto__;
})()
;})(switch__15681__auto__,c__15783__auto__))
})();
var state__15785__auto__ = (function (){var statearr_16364 = (f__15784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15784__auto__.cljs$core$IFn$_invoke$arity$0() : f__15784__auto__.call(null));
(statearr_16364[(6)] = c__15783__auto__);

return statearr_16364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15785__auto__);
});})(c__15783__auto__))
);

return c__15783__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

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
var x__8397__auto__ = (((_ == null))?null:_);
var m__8398__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8397__auto__)]);
if(!((m__8398__auto__ == null))){
return (m__8398__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8398__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8398__auto__.call(null,_));
} else {
var m__8398__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__8398__auto____$1 == null))){
return (m__8398__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8398__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8398__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
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
var x__8397__auto__ = (((m == null))?null:m);
var m__8398__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8397__auto__)]);
if(!((m__8398__auto__ == null))){
return (m__8398__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8398__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__8398__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__8398__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__8398__auto____$1 == null))){
return (m__8398__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8398__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__8398__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__8397__auto__ = (((m == null))?null:m);
var m__8398__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8397__auto__)]);
if(!((m__8398__auto__ == null))){
return (m__8398__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8398__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8398__auto__.call(null,m,ch));
} else {
var m__8398__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__8398__auto____$1 == null))){
return (m__8398__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8398__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8398__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__8397__auto__ = (((m == null))?null:m);
var m__8398__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8397__auto__)]);
if(!((m__8398__auto__ == null))){
return (m__8398__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8398__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__8398__auto__.call(null,m));
} else {
var m__8398__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__8398__auto____$1 == null))){
return (m__8398__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8398__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__8398__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async16382 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16382 = (function (ch,cs,meta16383){
this.ch = ch;
this.cs = cs;
this.meta16383 = meta16383;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16384,meta16383__$1){
var self__ = this;
var _16384__$1 = this;
return (new cljs.core.async.t_cljs$core$async16382(self__.ch,self__.cs,meta16383__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async16382.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16384){
var self__ = this;
var _16384__$1 = this;
return self__.meta16383;
});})(cs))
;

cljs.core.async.t_cljs$core$async16382.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16382.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async16382.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16382.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16382.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16382.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16382.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta16383], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async16382.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16382.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16382";

cljs.core.async.t_cljs$core$async16382.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8335__auto__,writer__8336__auto__,opt__8337__auto__){
return cljs.core._write(writer__8336__auto__,"cljs.core.async/t_cljs$core$async16382");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async16382 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async16382(ch__$1,cs__$1,meta16383){
return (new cljs.core.async.t_cljs$core$async16382(ch__$1,cs__$1,meta16383));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async16382(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__15783__auto___16604 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15783__auto___16604,cs,m,dchan,dctr,done){
return (function (){
var f__15784__auto__ = (function (){var switch__15681__auto__ = ((function (c__15783__auto___16604,cs,m,dchan,dctr,done){
return (function (state_16519){
var state_val_16520 = (state_16519[(1)]);
if((state_val_16520 === (7))){
var inst_16515 = (state_16519[(2)]);
var state_16519__$1 = state_16519;
var statearr_16521_16605 = state_16519__$1;
(statearr_16521_16605[(2)] = inst_16515);

(statearr_16521_16605[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16520 === (20))){
var inst_16418 = (state_16519[(7)]);
var inst_16430 = cljs.core.first(inst_16418);
var inst_16431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16430,(0),null);
var inst_16432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16430,(1),null);
var state_16519__$1 = (function (){var statearr_16522 = state_16519;
(statearr_16522[(8)] = inst_16431);

return statearr_16522;
})();
if(cljs.core.truth_(inst_16432)){
var statearr_16523_16606 = state_16519__$1;
(statearr_16523_16606[(1)] = (22));

} else {
var statearr_16524_16607 = state_16519__$1;
(statearr_16524_16607[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16520 === (27))){
var inst_16462 = (state_16519[(9)]);
var inst_16387 = (state_16519[(10)]);
var inst_16467 = (state_16519[(11)]);
var inst_16460 = (state_16519[(12)]);
var inst_16467__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16460,inst_16462);
var inst_16468 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16467__$1,inst_16387,done);
var state_16519__$1 = (function (){var statearr_16525 = state_16519;
(statearr_16525[(11)] = inst_16467__$1);

return statearr_16525;
})();
if(cljs.core.truth_(inst_16468)){
var statearr_16526_16608 = state_16519__$1;
(statearr_16526_16608[(1)] = (30));

} else {
var statearr_16527_16609 = state_16519__$1;
(statearr_16527_16609[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16520 === (1))){
var state_16519__$1 = state_16519;
var statearr_16528_16610 = state_16519__$1;
(statearr_16528_16610[(2)] = null);

(statearr_16528_16610[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16520 === (24))){
var inst_16418 = (state_16519[(7)]);
var inst_16437 = (state_16519[(2)]);
var inst_16438 = cljs.core.next(inst_16418);
var inst_16396 = inst_16438;
var inst_16397 = null;
var inst_16398 = (0);
var inst_16399 = (0);
var state_16519__$1 = (function (){var statearr_16529 = state_16519;
(statearr_16529[(13)] = inst_16399);

(statearr_16529[(14)] = inst_16396);

(statearr_16529[(15)] = inst_16437);

(statearr_16529[(16)] = inst_16397);

(statearr_16529[(17)] = inst_16398);

return statearr_16529;
})();
var statearr_16530_16611 = state_16519__$1;
(statearr_16530_16611[(2)] = null);

(statearr_16530_16611[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16520 === (39))){
var state_16519__$1 = state_16519;
var statearr_16534_16612 = state_16519__$1;
(statearr_16534_16612[(2)] = null);

(statearr_16534_16612[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16520 === (4))){
var inst_16387 = (state_16519[(10)]);
var inst_16387__$1 = (state_16519[(2)]);
var inst_16388 = (inst_16387__$1 == null);
var state_16519__$1 = (function (){var statearr_16535 = state_16519;
(statearr_16535[(10)] = inst_16387__$1);

return statearr_16535;
})();
if(cljs.core.truth_(inst_16388)){
var statearr_16536_16613 = state_16519__$1;
(statearr_16536_16613[(1)] = (5));

} else {
var statearr_16537_16614 = state_16519__$1;
(statearr_16537_16614[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16520 === (15))){
var inst_16399 = (state_16519[(13)]);
var inst_16396 = (state_16519[(14)]);
var inst_16397 = (state_16519[(16)]);
var inst_16398 = (state_16519[(17)]);
var inst_16414 = (state_16519[(2)]);
var inst_16415 = (inst_16399 + (1));
var tmp16531 = inst_16396;
var tmp16532 = inst_16397;
var tmp16533 = inst_16398;
var inst_16396__$1 = tmp16531;
var inst_16397__$1 = tmp16532;
var inst_16398__$1 = tmp16533;
var inst_16399__$1 = inst_16415;
var state_16519__$1 = (function (){var statearr_16538 = state_16519;
(statearr_16538[(13)] = inst_16399__$1);

(statearr_16538[(14)] = inst_16396__$1);

(statearr_16538[(18)] = inst_16414);

(statearr_16538[(16)] = inst_16397__$1);

(statearr_16538[(17)] = inst_16398__$1);

return statearr_16538;
})();
var statearr_16539_16615 = state_16519__$1;
(statearr_16539_16615[(2)] = null);

(statearr_16539_16615[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16520 === (21))){
var inst_16441 = (state_16519[(2)]);
var state_16519__$1 = state_16519;
var statearr_16543_16616 = state_16519__$1;
(statearr_16543_16616[(2)] = inst_16441);

(statearr_16543_16616[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16520 === (31))){
var inst_16467 = (state_16519[(11)]);
var inst_16471 = done(null);
var inst_16472 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16467);
var state_16519__$1 = (function (){var statearr_16544 = state_16519;
(statearr_16544[(19)] = inst_16471);

return statearr_16544;
})();
var statearr_16545_16617 = state_16519__$1;
(statearr_16545_16617[(2)] = inst_16472);

(statearr_16545_16617[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16520 === (32))){
var inst_16462 = (state_16519[(9)]);
var inst_16461 = (state_16519[(20)]);
var inst_16460 = (state_16519[(12)]);
var inst_16459 = (state_16519[(21)]);
var inst_16474 = (state_16519[(2)]);
var inst_16475 = (inst_16462 + (1));
var tmp16540 = inst_16461;
var tmp16541 = inst_16460;
var tmp16542 = inst_16459;
var inst_16459__$1 = tmp16542;
var inst_16460__$1 = tmp16541;
var inst_16461__$1 = tmp16540;
var inst_16462__$1 = inst_16475;
var state_16519__$1 = (function (){var statearr_16546 = state_16519;
(statearr_16546[(9)] = inst_16462__$1);

(statearr_16546[(20)] = inst_16461__$1);

(statearr_16546[(12)] = inst_16460__$1);

(statearr_16546[(22)] = inst_16474);

(statearr_16546[(21)] = inst_16459__$1);

return statearr_16546;
})();
var statearr_16547_16618 = state_16519__$1;
(statearr_16547_16618[(2)] = null);

(statearr_16547_16618[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16520 === (40))){
var inst_16487 = (state_16519[(23)]);
var inst_16491 = done(null);
var inst_16492 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16487);
var state_16519__$1 = (function (){var statearr_16548 = state_16519;
(statearr_16548[(24)] = inst_16491);

return statearr_16548;
})();
var statearr_16549_16619 = state_16519__$1;
(statearr_16549_16619[(2)] = inst_16492);

(statearr_16549_16619[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16520 === (33))){
var inst_16478 = (state_16519[(25)]);
var inst_16480 = cljs.core.chunked_seq_QMARK_(inst_16478);
var state_16519__$1 = state_16519;
if(inst_16480){
var statearr_16550_16620 = state_16519__$1;
(statearr_16550_16620[(1)] = (36));

} else {
var statearr_16551_16621 = state_16519__$1;
(statearr_16551_16621[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16520 === (13))){
var inst_16408 = (state_16519[(26)]);
var inst_16411 = cljs.core.async.close_BANG_(inst_16408);
var state_16519__$1 = state_16519;
var statearr_16552_16622 = state_16519__$1;
(statearr_16552_16622[(2)] = inst_16411);

(statearr_16552_16622[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16520 === (22))){
var inst_16431 = (state_16519[(8)]);
var inst_16434 = cljs.core.async.close_BANG_(inst_16431);
var state_16519__$1 = state_16519;
var statearr_16553_16623 = state_16519__$1;
(statearr_16553_16623[(2)] = inst_16434);

(statearr_16553_16623[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16520 === (36))){
var inst_16478 = (state_16519[(25)]);
var inst_16482 = cljs.core.chunk_first(inst_16478);
var inst_16483 = cljs.core.chunk_rest(inst_16478);
var inst_16484 = cljs.core.count(inst_16482);
var inst_16459 = inst_16483;
var inst_16460 = inst_16482;
var inst_16461 = inst_16484;
var inst_16462 = (0);
var state_16519__$1 = (function (){var statearr_16554 = state_16519;
(statearr_16554[(9)] = inst_16462);

(statearr_16554[(20)] = inst_16461);

(statearr_16554[(12)] = inst_16460);

(statearr_16554[(21)] = inst_16459);

return statearr_16554;
})();
var statearr_16555_16624 = state_16519__$1;
(statearr_16555_16624[(2)] = null);

(statearr_16555_16624[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16520 === (41))){
var inst_16478 = (state_16519[(25)]);
var inst_16494 = (state_16519[(2)]);
var inst_16495 = cljs.core.next(inst_16478);
var inst_16459 = inst_16495;
var inst_16460 = null;
var inst_16461 = (0);
var inst_16462 = (0);
var state_16519__$1 = (function (){var statearr_16556 = state_16519;
(statearr_16556[(9)] = inst_16462);

(statearr_16556[(27)] = inst_16494);

(statearr_16556[(20)] = inst_16461);

(statearr_16556[(12)] = inst_16460);

(statearr_16556[(21)] = inst_16459);

return statearr_16556;
})();
var statearr_16557_16625 = state_16519__$1;
(statearr_16557_16625[(2)] = null);

(statearr_16557_16625[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16520 === (43))){
var state_16519__$1 = state_16519;
var statearr_16558_16626 = state_16519__$1;
(statearr_16558_16626[(2)] = null);

(statearr_16558_16626[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16520 === (29))){
var inst_16503 = (state_16519[(2)]);
var state_16519__$1 = state_16519;
var statearr_16559_16627 = state_16519__$1;
(statearr_16559_16627[(2)] = inst_16503);

(statearr_16559_16627[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16520 === (44))){
var inst_16512 = (state_16519[(2)]);
var state_16519__$1 = (function (){var statearr_16560 = state_16519;
(statearr_16560[(28)] = inst_16512);

return statearr_16560;
})();
var statearr_16561_16628 = state_16519__$1;
(statearr_16561_16628[(2)] = null);

(statearr_16561_16628[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16520 === (6))){
var inst_16451 = (state_16519[(29)]);
var inst_16450 = cljs.core.deref(cs);
var inst_16451__$1 = cljs.core.keys(inst_16450);
var inst_16452 = cljs.core.count(inst_16451__$1);
var inst_16453 = cljs.core.reset_BANG_(dctr,inst_16452);
var inst_16458 = cljs.core.seq(inst_16451__$1);
var inst_16459 = inst_16458;
var inst_16460 = null;
var inst_16461 = (0);
var inst_16462 = (0);
var state_16519__$1 = (function (){var statearr_16562 = state_16519;
(statearr_16562[(9)] = inst_16462);

(statearr_16562[(20)] = inst_16461);

(statearr_16562[(30)] = inst_16453);

(statearr_16562[(29)] = inst_16451__$1);

(statearr_16562[(12)] = inst_16460);

(statearr_16562[(21)] = inst_16459);

return statearr_16562;
})();
var statearr_16563_16629 = state_16519__$1;
(statearr_16563_16629[(2)] = null);

(statearr_16563_16629[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16520 === (28))){
var inst_16478 = (state_16519[(25)]);
var inst_16459 = (state_16519[(21)]);
var inst_16478__$1 = cljs.core.seq(inst_16459);
var state_16519__$1 = (function (){var statearr_16564 = state_16519;
(statearr_16564[(25)] = inst_16478__$1);

return statearr_16564;
})();
if(inst_16478__$1){
var statearr_16565_16630 = state_16519__$1;
(statearr_16565_16630[(1)] = (33));

} else {
var statearr_16566_16631 = state_16519__$1;
(statearr_16566_16631[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16520 === (25))){
var inst_16462 = (state_16519[(9)]);
var inst_16461 = (state_16519[(20)]);
var inst_16464 = (inst_16462 < inst_16461);
var inst_16465 = inst_16464;
var state_16519__$1 = state_16519;
if(cljs.core.truth_(inst_16465)){
var statearr_16567_16632 = state_16519__$1;
(statearr_16567_16632[(1)] = (27));

} else {
var statearr_16568_16633 = state_16519__$1;
(statearr_16568_16633[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16520 === (34))){
var state_16519__$1 = state_16519;
var statearr_16569_16634 = state_16519__$1;
(statearr_16569_16634[(2)] = null);

(statearr_16569_16634[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16520 === (17))){
var state_16519__$1 = state_16519;
var statearr_16570_16635 = state_16519__$1;
(statearr_16570_16635[(2)] = null);

(statearr_16570_16635[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16520 === (3))){
var inst_16517 = (state_16519[(2)]);
var state_16519__$1 = state_16519;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16519__$1,inst_16517);
} else {
if((state_val_16520 === (12))){
var inst_16446 = (state_16519[(2)]);
var state_16519__$1 = state_16519;
var statearr_16571_16636 = state_16519__$1;
(statearr_16571_16636[(2)] = inst_16446);

(statearr_16571_16636[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16520 === (2))){
var state_16519__$1 = state_16519;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16519__$1,(4),ch);
} else {
if((state_val_16520 === (23))){
var state_16519__$1 = state_16519;
var statearr_16572_16637 = state_16519__$1;
(statearr_16572_16637[(2)] = null);

(statearr_16572_16637[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16520 === (35))){
var inst_16501 = (state_16519[(2)]);
var state_16519__$1 = state_16519;
var statearr_16573_16638 = state_16519__$1;
(statearr_16573_16638[(2)] = inst_16501);

(statearr_16573_16638[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16520 === (19))){
var inst_16418 = (state_16519[(7)]);
var inst_16422 = cljs.core.chunk_first(inst_16418);
var inst_16423 = cljs.core.chunk_rest(inst_16418);
var inst_16424 = cljs.core.count(inst_16422);
var inst_16396 = inst_16423;
var inst_16397 = inst_16422;
var inst_16398 = inst_16424;
var inst_16399 = (0);
var state_16519__$1 = (function (){var statearr_16574 = state_16519;
(statearr_16574[(13)] = inst_16399);

(statearr_16574[(14)] = inst_16396);

(statearr_16574[(16)] = inst_16397);

(statearr_16574[(17)] = inst_16398);

return statearr_16574;
})();
var statearr_16575_16639 = state_16519__$1;
(statearr_16575_16639[(2)] = null);

(statearr_16575_16639[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16520 === (11))){
var inst_16396 = (state_16519[(14)]);
var inst_16418 = (state_16519[(7)]);
var inst_16418__$1 = cljs.core.seq(inst_16396);
var state_16519__$1 = (function (){var statearr_16576 = state_16519;
(statearr_16576[(7)] = inst_16418__$1);

return statearr_16576;
})();
if(inst_16418__$1){
var statearr_16577_16640 = state_16519__$1;
(statearr_16577_16640[(1)] = (16));

} else {
var statearr_16578_16641 = state_16519__$1;
(statearr_16578_16641[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16520 === (9))){
var inst_16448 = (state_16519[(2)]);
var state_16519__$1 = state_16519;
var statearr_16579_16642 = state_16519__$1;
(statearr_16579_16642[(2)] = inst_16448);

(statearr_16579_16642[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16520 === (5))){
var inst_16394 = cljs.core.deref(cs);
var inst_16395 = cljs.core.seq(inst_16394);
var inst_16396 = inst_16395;
var inst_16397 = null;
var inst_16398 = (0);
var inst_16399 = (0);
var state_16519__$1 = (function (){var statearr_16580 = state_16519;
(statearr_16580[(13)] = inst_16399);

(statearr_16580[(14)] = inst_16396);

(statearr_16580[(16)] = inst_16397);

(statearr_16580[(17)] = inst_16398);

return statearr_16580;
})();
var statearr_16581_16643 = state_16519__$1;
(statearr_16581_16643[(2)] = null);

(statearr_16581_16643[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16520 === (14))){
var state_16519__$1 = state_16519;
var statearr_16582_16644 = state_16519__$1;
(statearr_16582_16644[(2)] = null);

(statearr_16582_16644[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16520 === (45))){
var inst_16509 = (state_16519[(2)]);
var state_16519__$1 = state_16519;
var statearr_16583_16645 = state_16519__$1;
(statearr_16583_16645[(2)] = inst_16509);

(statearr_16583_16645[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16520 === (26))){
var inst_16451 = (state_16519[(29)]);
var inst_16505 = (state_16519[(2)]);
var inst_16506 = cljs.core.seq(inst_16451);
var state_16519__$1 = (function (){var statearr_16584 = state_16519;
(statearr_16584[(31)] = inst_16505);

return statearr_16584;
})();
if(inst_16506){
var statearr_16585_16646 = state_16519__$1;
(statearr_16585_16646[(1)] = (42));

} else {
var statearr_16586_16647 = state_16519__$1;
(statearr_16586_16647[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16520 === (16))){
var inst_16418 = (state_16519[(7)]);
var inst_16420 = cljs.core.chunked_seq_QMARK_(inst_16418);
var state_16519__$1 = state_16519;
if(inst_16420){
var statearr_16587_16648 = state_16519__$1;
(statearr_16587_16648[(1)] = (19));

} else {
var statearr_16588_16649 = state_16519__$1;
(statearr_16588_16649[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16520 === (38))){
var inst_16498 = (state_16519[(2)]);
var state_16519__$1 = state_16519;
var statearr_16589_16650 = state_16519__$1;
(statearr_16589_16650[(2)] = inst_16498);

(statearr_16589_16650[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16520 === (30))){
var state_16519__$1 = state_16519;
var statearr_16590_16651 = state_16519__$1;
(statearr_16590_16651[(2)] = null);

(statearr_16590_16651[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16520 === (10))){
var inst_16399 = (state_16519[(13)]);
var inst_16397 = (state_16519[(16)]);
var inst_16407 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16397,inst_16399);
var inst_16408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16407,(0),null);
var inst_16409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16407,(1),null);
var state_16519__$1 = (function (){var statearr_16591 = state_16519;
(statearr_16591[(26)] = inst_16408);

return statearr_16591;
})();
if(cljs.core.truth_(inst_16409)){
var statearr_16592_16652 = state_16519__$1;
(statearr_16592_16652[(1)] = (13));

} else {
var statearr_16593_16653 = state_16519__$1;
(statearr_16593_16653[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16520 === (18))){
var inst_16444 = (state_16519[(2)]);
var state_16519__$1 = state_16519;
var statearr_16594_16654 = state_16519__$1;
(statearr_16594_16654[(2)] = inst_16444);

(statearr_16594_16654[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16520 === (42))){
var state_16519__$1 = state_16519;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16519__$1,(45),dchan);
} else {
if((state_val_16520 === (37))){
var inst_16387 = (state_16519[(10)]);
var inst_16478 = (state_16519[(25)]);
var inst_16487 = (state_16519[(23)]);
var inst_16487__$1 = cljs.core.first(inst_16478);
var inst_16488 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16487__$1,inst_16387,done);
var state_16519__$1 = (function (){var statearr_16595 = state_16519;
(statearr_16595[(23)] = inst_16487__$1);

return statearr_16595;
})();
if(cljs.core.truth_(inst_16488)){
var statearr_16596_16655 = state_16519__$1;
(statearr_16596_16655[(1)] = (39));

} else {
var statearr_16597_16656 = state_16519__$1;
(statearr_16597_16656[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16520 === (8))){
var inst_16399 = (state_16519[(13)]);
var inst_16398 = (state_16519[(17)]);
var inst_16401 = (inst_16399 < inst_16398);
var inst_16402 = inst_16401;
var state_16519__$1 = state_16519;
if(cljs.core.truth_(inst_16402)){
var statearr_16598_16657 = state_16519__$1;
(statearr_16598_16657[(1)] = (10));

} else {
var statearr_16599_16658 = state_16519__$1;
(statearr_16599_16658[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__15783__auto___16604,cs,m,dchan,dctr,done))
;
return ((function (switch__15681__auto__,c__15783__auto___16604,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15682__auto__ = null;
var cljs$core$async$mult_$_state_machine__15682__auto____0 = (function (){
var statearr_16600 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16600[(0)] = cljs$core$async$mult_$_state_machine__15682__auto__);

(statearr_16600[(1)] = (1));

return statearr_16600;
});
var cljs$core$async$mult_$_state_machine__15682__auto____1 = (function (state_16519){
while(true){
var ret_value__15683__auto__ = (function (){try{while(true){
var result__15684__auto__ = switch__15681__auto__(state_16519);
if(cljs.core.keyword_identical_QMARK_(result__15684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15684__auto__;
}
break;
}
}catch (e16601){if((e16601 instanceof Object)){
var ex__15685__auto__ = e16601;
var statearr_16602_16659 = state_16519;
(statearr_16602_16659[(5)] = ex__15685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16519);

return cljs.core.cst$kw$recur;
} else {
throw e16601;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15683__auto__,cljs.core.cst$kw$recur)){
var G__16660 = state_16519;
state_16519 = G__16660;
continue;
} else {
return ret_value__15683__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15682__auto__ = function(state_16519){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15682__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15682__auto____1.call(this,state_16519);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15682__auto____0;
cljs$core$async$mult_$_state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15682__auto____1;
return cljs$core$async$mult_$_state_machine__15682__auto__;
})()
;})(switch__15681__auto__,c__15783__auto___16604,cs,m,dchan,dctr,done))
})();
var state__15785__auto__ = (function (){var statearr_16603 = (f__15784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15784__auto__.cljs$core$IFn$_invoke$arity$0() : f__15784__auto__.call(null));
(statearr_16603[(6)] = c__15783__auto___16604);

return statearr_16603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15785__auto__);
});})(c__15783__auto___16604,cs,m,dchan,dctr,done))
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
var G__16662 = arguments.length;
switch (G__16662) {
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
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__8397__auto__ = (((m == null))?null:m);
var m__8398__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8397__auto__)]);
if(!((m__8398__auto__ == null))){
return (m__8398__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8398__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8398__auto__.call(null,m,ch));
} else {
var m__8398__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__8398__auto____$1 == null))){
return (m__8398__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8398__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8398__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__8397__auto__ = (((m == null))?null:m);
var m__8398__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8397__auto__)]);
if(!((m__8398__auto__ == null))){
return (m__8398__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8398__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8398__auto__.call(null,m,ch));
} else {
var m__8398__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__8398__auto____$1 == null))){
return (m__8398__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8398__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8398__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__8397__auto__ = (((m == null))?null:m);
var m__8398__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8397__auto__)]);
if(!((m__8398__auto__ == null))){
return (m__8398__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8398__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__8398__auto__.call(null,m));
} else {
var m__8398__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__8398__auto____$1 == null))){
return (m__8398__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8398__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__8398__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__8397__auto__ = (((m == null))?null:m);
var m__8398__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8397__auto__)]);
if(!((m__8398__auto__ == null))){
return (m__8398__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8398__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__8398__auto__.call(null,m,state_map));
} else {
var m__8398__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__8398__auto____$1 == null))){
return (m__8398__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8398__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__8398__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__8397__auto__ = (((m == null))?null:m);
var m__8398__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8397__auto__)]);
if(!((m__8398__auto__ == null))){
return (m__8398__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8398__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__8398__auto__.call(null,m,mode));
} else {
var m__8398__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__8398__auto____$1 == null))){
return (m__8398__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8398__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__8398__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__8918__auto__ = [];
var len__8911__auto___16674 = arguments.length;
var i__8912__auto___16675 = (0);
while(true){
if((i__8912__auto___16675 < len__8911__auto___16674)){
args__8918__auto__.push((arguments[i__8912__auto___16675]));

var G__16676 = (i__8912__auto___16675 + (1));
i__8912__auto___16675 = G__16676;
continue;
} else {
}
break;
}

var argseq__8919__auto__ = ((((3) < args__8918__auto__.length))?(new cljs.core.IndexedSeq(args__8918__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8919__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16668){
var map__16669 = p__16668;
var map__16669__$1 = ((((!((map__16669 == null)))?((((map__16669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16669.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16669):map__16669);
var opts = map__16669__$1;
var statearr_16671_16677 = state;
(statearr_16671_16677[(1)] = cont_block);


var temp__5278__auto__ = cljs.core.async.do_alts(((function (map__16669,map__16669__$1,opts){
return (function (val){
var statearr_16672_16678 = state;
(statearr_16672_16678[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__16669,map__16669__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5278__auto__)){
var cb = temp__5278__auto__;
var statearr_16673_16679 = state;
(statearr_16673_16679[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16664){
var G__16665 = cljs.core.first(seq16664);
var seq16664__$1 = cljs.core.next(seq16664);
var G__16666 = cljs.core.first(seq16664__$1);
var seq16664__$2 = cljs.core.next(seq16664__$1);
var G__16667 = cljs.core.first(seq16664__$2);
var seq16664__$3 = cljs.core.next(seq16664__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16665,G__16666,G__16667,seq16664__$3);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async16680 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16680 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta16681){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta16681 = meta16681;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16682,meta16681__$1){
var self__ = this;
var _16682__$1 = this;
return (new cljs.core.async.t_cljs$core$async16680(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta16681__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16680.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16682){
var self__ = this;
var _16682__$1 = this;
return self__.meta16681;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16680.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16680.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16680.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16680.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16680.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16680.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16680.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16680.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16680.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta16681], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16680.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16680.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16680";

cljs.core.async.t_cljs$core$async16680.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8335__auto__,writer__8336__auto__,opt__8337__auto__){
return cljs.core._write(writer__8336__auto__,"cljs.core.async/t_cljs$core$async16680");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async16680 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async16680(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta16681){
return (new cljs.core.async.t_cljs$core$async16680(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta16681));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async16680(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15783__auto___16844 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15783__auto___16844,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15784__auto__ = (function (){var switch__15681__auto__ = ((function (c__15783__auto___16844,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16784){
var state_val_16785 = (state_16784[(1)]);
if((state_val_16785 === (7))){
var inst_16699 = (state_16784[(2)]);
var state_16784__$1 = state_16784;
var statearr_16786_16845 = state_16784__$1;
(statearr_16786_16845[(2)] = inst_16699);

(statearr_16786_16845[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16785 === (20))){
var inst_16711 = (state_16784[(7)]);
var state_16784__$1 = state_16784;
var statearr_16787_16846 = state_16784__$1;
(statearr_16787_16846[(2)] = inst_16711);

(statearr_16787_16846[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16785 === (27))){
var state_16784__$1 = state_16784;
var statearr_16788_16847 = state_16784__$1;
(statearr_16788_16847[(2)] = null);

(statearr_16788_16847[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16785 === (1))){
var inst_16686 = (state_16784[(8)]);
var inst_16686__$1 = calc_state();
var inst_16688 = (inst_16686__$1 == null);
var inst_16689 = cljs.core.not(inst_16688);
var state_16784__$1 = (function (){var statearr_16789 = state_16784;
(statearr_16789[(8)] = inst_16686__$1);

return statearr_16789;
})();
if(inst_16689){
var statearr_16790_16848 = state_16784__$1;
(statearr_16790_16848[(1)] = (2));

} else {
var statearr_16791_16849 = state_16784__$1;
(statearr_16791_16849[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16785 === (24))){
var inst_16744 = (state_16784[(9)]);
var inst_16735 = (state_16784[(10)]);
var inst_16758 = (state_16784[(11)]);
var inst_16758__$1 = (inst_16735.cljs$core$IFn$_invoke$arity$1 ? inst_16735.cljs$core$IFn$_invoke$arity$1(inst_16744) : inst_16735.call(null,inst_16744));
var state_16784__$1 = (function (){var statearr_16792 = state_16784;
(statearr_16792[(11)] = inst_16758__$1);

return statearr_16792;
})();
if(cljs.core.truth_(inst_16758__$1)){
var statearr_16793_16850 = state_16784__$1;
(statearr_16793_16850[(1)] = (29));

} else {
var statearr_16794_16851 = state_16784__$1;
(statearr_16794_16851[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16785 === (4))){
var inst_16702 = (state_16784[(2)]);
var state_16784__$1 = state_16784;
if(cljs.core.truth_(inst_16702)){
var statearr_16795_16852 = state_16784__$1;
(statearr_16795_16852[(1)] = (8));

} else {
var statearr_16796_16853 = state_16784__$1;
(statearr_16796_16853[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16785 === (15))){
var inst_16729 = (state_16784[(2)]);
var state_16784__$1 = state_16784;
if(cljs.core.truth_(inst_16729)){
var statearr_16797_16854 = state_16784__$1;
(statearr_16797_16854[(1)] = (19));

} else {
var statearr_16798_16855 = state_16784__$1;
(statearr_16798_16855[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16785 === (21))){
var inst_16734 = (state_16784[(12)]);
var inst_16734__$1 = (state_16784[(2)]);
var inst_16735 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16734__$1,cljs.core.cst$kw$solos);
var inst_16736 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16734__$1,cljs.core.cst$kw$mutes);
var inst_16737 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16734__$1,cljs.core.cst$kw$reads);
var state_16784__$1 = (function (){var statearr_16799 = state_16784;
(statearr_16799[(10)] = inst_16735);

(statearr_16799[(12)] = inst_16734__$1);

(statearr_16799[(13)] = inst_16736);

return statearr_16799;
})();
return cljs.core.async.ioc_alts_BANG_(state_16784__$1,(22),inst_16737);
} else {
if((state_val_16785 === (31))){
var inst_16766 = (state_16784[(2)]);
var state_16784__$1 = state_16784;
if(cljs.core.truth_(inst_16766)){
var statearr_16800_16856 = state_16784__$1;
(statearr_16800_16856[(1)] = (32));

} else {
var statearr_16801_16857 = state_16784__$1;
(statearr_16801_16857[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16785 === (32))){
var inst_16743 = (state_16784[(14)]);
var state_16784__$1 = state_16784;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16784__$1,(35),out,inst_16743);
} else {
if((state_val_16785 === (33))){
var inst_16734 = (state_16784[(12)]);
var inst_16711 = inst_16734;
var state_16784__$1 = (function (){var statearr_16802 = state_16784;
(statearr_16802[(7)] = inst_16711);

return statearr_16802;
})();
var statearr_16803_16858 = state_16784__$1;
(statearr_16803_16858[(2)] = null);

(statearr_16803_16858[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16785 === (13))){
var inst_16711 = (state_16784[(7)]);
var inst_16718 = inst_16711.cljs$lang$protocol_mask$partition0$;
var inst_16719 = (inst_16718 & (64));
var inst_16720 = inst_16711.cljs$core$ISeq$;
var inst_16721 = (cljs.core.PROTOCOL_SENTINEL === inst_16720);
var inst_16722 = (inst_16719) || (inst_16721);
var state_16784__$1 = state_16784;
if(cljs.core.truth_(inst_16722)){
var statearr_16804_16859 = state_16784__$1;
(statearr_16804_16859[(1)] = (16));

} else {
var statearr_16805_16860 = state_16784__$1;
(statearr_16805_16860[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16785 === (22))){
var inst_16744 = (state_16784[(9)]);
var inst_16743 = (state_16784[(14)]);
var inst_16742 = (state_16784[(2)]);
var inst_16743__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16742,(0),null);
var inst_16744__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16742,(1),null);
var inst_16745 = (inst_16743__$1 == null);
var inst_16746 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16744__$1,change);
var inst_16747 = (inst_16745) || (inst_16746);
var state_16784__$1 = (function (){var statearr_16806 = state_16784;
(statearr_16806[(9)] = inst_16744__$1);

(statearr_16806[(14)] = inst_16743__$1);

return statearr_16806;
})();
if(cljs.core.truth_(inst_16747)){
var statearr_16807_16861 = state_16784__$1;
(statearr_16807_16861[(1)] = (23));

} else {
var statearr_16808_16862 = state_16784__$1;
(statearr_16808_16862[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16785 === (36))){
var inst_16734 = (state_16784[(12)]);
var inst_16711 = inst_16734;
var state_16784__$1 = (function (){var statearr_16809 = state_16784;
(statearr_16809[(7)] = inst_16711);

return statearr_16809;
})();
var statearr_16810_16863 = state_16784__$1;
(statearr_16810_16863[(2)] = null);

(statearr_16810_16863[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16785 === (29))){
var inst_16758 = (state_16784[(11)]);
var state_16784__$1 = state_16784;
var statearr_16811_16864 = state_16784__$1;
(statearr_16811_16864[(2)] = inst_16758);

(statearr_16811_16864[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16785 === (6))){
var state_16784__$1 = state_16784;
var statearr_16812_16865 = state_16784__$1;
(statearr_16812_16865[(2)] = false);

(statearr_16812_16865[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16785 === (28))){
var inst_16754 = (state_16784[(2)]);
var inst_16755 = calc_state();
var inst_16711 = inst_16755;
var state_16784__$1 = (function (){var statearr_16813 = state_16784;
(statearr_16813[(15)] = inst_16754);

(statearr_16813[(7)] = inst_16711);

return statearr_16813;
})();
var statearr_16814_16866 = state_16784__$1;
(statearr_16814_16866[(2)] = null);

(statearr_16814_16866[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16785 === (25))){
var inst_16780 = (state_16784[(2)]);
var state_16784__$1 = state_16784;
var statearr_16815_16867 = state_16784__$1;
(statearr_16815_16867[(2)] = inst_16780);

(statearr_16815_16867[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16785 === (34))){
var inst_16778 = (state_16784[(2)]);
var state_16784__$1 = state_16784;
var statearr_16816_16868 = state_16784__$1;
(statearr_16816_16868[(2)] = inst_16778);

(statearr_16816_16868[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16785 === (17))){
var state_16784__$1 = state_16784;
var statearr_16817_16869 = state_16784__$1;
(statearr_16817_16869[(2)] = false);

(statearr_16817_16869[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16785 === (3))){
var state_16784__$1 = state_16784;
var statearr_16818_16870 = state_16784__$1;
(statearr_16818_16870[(2)] = false);

(statearr_16818_16870[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16785 === (12))){
var inst_16782 = (state_16784[(2)]);
var state_16784__$1 = state_16784;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16784__$1,inst_16782);
} else {
if((state_val_16785 === (2))){
var inst_16686 = (state_16784[(8)]);
var inst_16691 = inst_16686.cljs$lang$protocol_mask$partition0$;
var inst_16692 = (inst_16691 & (64));
var inst_16693 = inst_16686.cljs$core$ISeq$;
var inst_16694 = (cljs.core.PROTOCOL_SENTINEL === inst_16693);
var inst_16695 = (inst_16692) || (inst_16694);
var state_16784__$1 = state_16784;
if(cljs.core.truth_(inst_16695)){
var statearr_16819_16871 = state_16784__$1;
(statearr_16819_16871[(1)] = (5));

} else {
var statearr_16820_16872 = state_16784__$1;
(statearr_16820_16872[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16785 === (23))){
var inst_16743 = (state_16784[(14)]);
var inst_16749 = (inst_16743 == null);
var state_16784__$1 = state_16784;
if(cljs.core.truth_(inst_16749)){
var statearr_16821_16873 = state_16784__$1;
(statearr_16821_16873[(1)] = (26));

} else {
var statearr_16822_16874 = state_16784__$1;
(statearr_16822_16874[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16785 === (35))){
var inst_16769 = (state_16784[(2)]);
var state_16784__$1 = state_16784;
if(cljs.core.truth_(inst_16769)){
var statearr_16823_16875 = state_16784__$1;
(statearr_16823_16875[(1)] = (36));

} else {
var statearr_16824_16876 = state_16784__$1;
(statearr_16824_16876[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16785 === (19))){
var inst_16711 = (state_16784[(7)]);
var inst_16731 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16711);
var state_16784__$1 = state_16784;
var statearr_16825_16877 = state_16784__$1;
(statearr_16825_16877[(2)] = inst_16731);

(statearr_16825_16877[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16785 === (11))){
var inst_16711 = (state_16784[(7)]);
var inst_16715 = (inst_16711 == null);
var inst_16716 = cljs.core.not(inst_16715);
var state_16784__$1 = state_16784;
if(inst_16716){
var statearr_16826_16878 = state_16784__$1;
(statearr_16826_16878[(1)] = (13));

} else {
var statearr_16827_16879 = state_16784__$1;
(statearr_16827_16879[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16785 === (9))){
var inst_16686 = (state_16784[(8)]);
var state_16784__$1 = state_16784;
var statearr_16828_16880 = state_16784__$1;
(statearr_16828_16880[(2)] = inst_16686);

(statearr_16828_16880[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16785 === (5))){
var state_16784__$1 = state_16784;
var statearr_16829_16881 = state_16784__$1;
(statearr_16829_16881[(2)] = true);

(statearr_16829_16881[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16785 === (14))){
var state_16784__$1 = state_16784;
var statearr_16830_16882 = state_16784__$1;
(statearr_16830_16882[(2)] = false);

(statearr_16830_16882[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16785 === (26))){
var inst_16744 = (state_16784[(9)]);
var inst_16751 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16744);
var state_16784__$1 = state_16784;
var statearr_16831_16883 = state_16784__$1;
(statearr_16831_16883[(2)] = inst_16751);

(statearr_16831_16883[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16785 === (16))){
var state_16784__$1 = state_16784;
var statearr_16832_16884 = state_16784__$1;
(statearr_16832_16884[(2)] = true);

(statearr_16832_16884[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16785 === (38))){
var inst_16774 = (state_16784[(2)]);
var state_16784__$1 = state_16784;
var statearr_16833_16885 = state_16784__$1;
(statearr_16833_16885[(2)] = inst_16774);

(statearr_16833_16885[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16785 === (30))){
var inst_16744 = (state_16784[(9)]);
var inst_16735 = (state_16784[(10)]);
var inst_16736 = (state_16784[(13)]);
var inst_16761 = cljs.core.empty_QMARK_(inst_16735);
var inst_16762 = (inst_16736.cljs$core$IFn$_invoke$arity$1 ? inst_16736.cljs$core$IFn$_invoke$arity$1(inst_16744) : inst_16736.call(null,inst_16744));
var inst_16763 = cljs.core.not(inst_16762);
var inst_16764 = (inst_16761) && (inst_16763);
var state_16784__$1 = state_16784;
var statearr_16834_16886 = state_16784__$1;
(statearr_16834_16886[(2)] = inst_16764);

(statearr_16834_16886[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16785 === (10))){
var inst_16686 = (state_16784[(8)]);
var inst_16707 = (state_16784[(2)]);
var inst_16708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16707,cljs.core.cst$kw$solos);
var inst_16709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16707,cljs.core.cst$kw$mutes);
var inst_16710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16707,cljs.core.cst$kw$reads);
var inst_16711 = inst_16686;
var state_16784__$1 = (function (){var statearr_16835 = state_16784;
(statearr_16835[(16)] = inst_16709);

(statearr_16835[(17)] = inst_16710);

(statearr_16835[(7)] = inst_16711);

(statearr_16835[(18)] = inst_16708);

return statearr_16835;
})();
var statearr_16836_16887 = state_16784__$1;
(statearr_16836_16887[(2)] = null);

(statearr_16836_16887[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16785 === (18))){
var inst_16726 = (state_16784[(2)]);
var state_16784__$1 = state_16784;
var statearr_16837_16888 = state_16784__$1;
(statearr_16837_16888[(2)] = inst_16726);

(statearr_16837_16888[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16785 === (37))){
var state_16784__$1 = state_16784;
var statearr_16838_16889 = state_16784__$1;
(statearr_16838_16889[(2)] = null);

(statearr_16838_16889[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16785 === (8))){
var inst_16686 = (state_16784[(8)]);
var inst_16704 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16686);
var state_16784__$1 = state_16784;
var statearr_16839_16890 = state_16784__$1;
(statearr_16839_16890[(2)] = inst_16704);

(statearr_16839_16890[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__15783__auto___16844,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15681__auto__,c__15783__auto___16844,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15682__auto__ = null;
var cljs$core$async$mix_$_state_machine__15682__auto____0 = (function (){
var statearr_16840 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16840[(0)] = cljs$core$async$mix_$_state_machine__15682__auto__);

(statearr_16840[(1)] = (1));

return statearr_16840;
});
var cljs$core$async$mix_$_state_machine__15682__auto____1 = (function (state_16784){
while(true){
var ret_value__15683__auto__ = (function (){try{while(true){
var result__15684__auto__ = switch__15681__auto__(state_16784);
if(cljs.core.keyword_identical_QMARK_(result__15684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15684__auto__;
}
break;
}
}catch (e16841){if((e16841 instanceof Object)){
var ex__15685__auto__ = e16841;
var statearr_16842_16891 = state_16784;
(statearr_16842_16891[(5)] = ex__15685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16784);

return cljs.core.cst$kw$recur;
} else {
throw e16841;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15683__auto__,cljs.core.cst$kw$recur)){
var G__16892 = state_16784;
state_16784 = G__16892;
continue;
} else {
return ret_value__15683__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15682__auto__ = function(state_16784){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15682__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15682__auto____1.call(this,state_16784);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15682__auto____0;
cljs$core$async$mix_$_state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15682__auto____1;
return cljs$core$async$mix_$_state_machine__15682__auto__;
})()
;})(switch__15681__auto__,c__15783__auto___16844,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15785__auto__ = (function (){var statearr_16843 = (f__15784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15784__auto__.cljs$core$IFn$_invoke$arity$0() : f__15784__auto__.call(null));
(statearr_16843[(6)] = c__15783__auto___16844);

return statearr_16843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15785__auto__);
});})(c__15783__auto___16844,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__8397__auto__ = (((p == null))?null:p);
var m__8398__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8397__auto__)]);
if(!((m__8398__auto__ == null))){
return (m__8398__auto__.cljs$core$IFn$_invoke$arity$4 ? m__8398__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__8398__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__8398__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__8398__auto____$1 == null))){
return (m__8398__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__8398__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__8398__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__8397__auto__ = (((p == null))?null:p);
var m__8398__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8397__auto__)]);
if(!((m__8398__auto__ == null))){
return (m__8398__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8398__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__8398__auto__.call(null,p,v,ch));
} else {
var m__8398__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__8398__auto____$1 == null))){
return (m__8398__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8398__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__8398__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16894 = arguments.length;
switch (G__16894) {
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
var x__8397__auto__ = (((p == null))?null:p);
var m__8398__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8397__auto__)]);
if(!((m__8398__auto__ == null))){
return (m__8398__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8398__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__8398__auto__.call(null,p));
} else {
var m__8398__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8398__auto____$1 == null))){
return (m__8398__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8398__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__8398__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__8397__auto__ = (((p == null))?null:p);
var m__8398__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8397__auto__)]);
if(!((m__8398__auto__ == null))){
return (m__8398__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8398__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__8398__auto__.call(null,p,v));
} else {
var m__8398__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8398__auto____$1 == null))){
return (m__8398__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8398__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__8398__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
var G__16898 = arguments.length;
switch (G__16898) {
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
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__7678__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__7678__auto__)){
return or__7678__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__7678__auto__,mults){
return (function (p1__16896_SHARP_){
if(cljs.core.truth_((p1__16896_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16896_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16896_SHARP_.call(null,topic)))){
return p1__16896_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16896_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__7678__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async16899 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16899 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16900){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16900 = meta16900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16901,meta16900__$1){
var self__ = this;
var _16901__$1 = this;
return (new cljs.core.async.t_cljs$core$async16899(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16900__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16899.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16901){
var self__ = this;
var _16901__$1 = this;
return self__.meta16900;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16899.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16899.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16899.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16899.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16899.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5278__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5278__auto__)){
var m = temp__5278__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16899.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16899.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16899.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta16900], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16899.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16899.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16899";

cljs.core.async.t_cljs$core$async16899.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8335__auto__,writer__8336__auto__,opt__8337__auto__){
return cljs.core._write(writer__8336__auto__,"cljs.core.async/t_cljs$core$async16899");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async16899 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async16899(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16900){
return (new cljs.core.async.t_cljs$core$async16899(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16900));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async16899(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15783__auto___17019 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15783__auto___17019,mults,ensure_mult,p){
return (function (){
var f__15784__auto__ = (function (){var switch__15681__auto__ = ((function (c__15783__auto___17019,mults,ensure_mult,p){
return (function (state_16973){
var state_val_16974 = (state_16973[(1)]);
if((state_val_16974 === (7))){
var inst_16969 = (state_16973[(2)]);
var state_16973__$1 = state_16973;
var statearr_16975_17020 = state_16973__$1;
(statearr_16975_17020[(2)] = inst_16969);

(statearr_16975_17020[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16974 === (20))){
var state_16973__$1 = state_16973;
var statearr_16976_17021 = state_16973__$1;
(statearr_16976_17021[(2)] = null);

(statearr_16976_17021[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16974 === (1))){
var state_16973__$1 = state_16973;
var statearr_16977_17022 = state_16973__$1;
(statearr_16977_17022[(2)] = null);

(statearr_16977_17022[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16974 === (24))){
var inst_16952 = (state_16973[(7)]);
var inst_16961 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16952);
var state_16973__$1 = state_16973;
var statearr_16978_17023 = state_16973__$1;
(statearr_16978_17023[(2)] = inst_16961);

(statearr_16978_17023[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16974 === (4))){
var inst_16904 = (state_16973[(8)]);
var inst_16904__$1 = (state_16973[(2)]);
var inst_16905 = (inst_16904__$1 == null);
var state_16973__$1 = (function (){var statearr_16979 = state_16973;
(statearr_16979[(8)] = inst_16904__$1);

return statearr_16979;
})();
if(cljs.core.truth_(inst_16905)){
var statearr_16980_17024 = state_16973__$1;
(statearr_16980_17024[(1)] = (5));

} else {
var statearr_16981_17025 = state_16973__$1;
(statearr_16981_17025[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16974 === (15))){
var inst_16946 = (state_16973[(2)]);
var state_16973__$1 = state_16973;
var statearr_16982_17026 = state_16973__$1;
(statearr_16982_17026[(2)] = inst_16946);

(statearr_16982_17026[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16974 === (21))){
var inst_16966 = (state_16973[(2)]);
var state_16973__$1 = (function (){var statearr_16983 = state_16973;
(statearr_16983[(9)] = inst_16966);

return statearr_16983;
})();
var statearr_16984_17027 = state_16973__$1;
(statearr_16984_17027[(2)] = null);

(statearr_16984_17027[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16974 === (13))){
var inst_16928 = (state_16973[(10)]);
var inst_16930 = cljs.core.chunked_seq_QMARK_(inst_16928);
var state_16973__$1 = state_16973;
if(inst_16930){
var statearr_16985_17028 = state_16973__$1;
(statearr_16985_17028[(1)] = (16));

} else {
var statearr_16986_17029 = state_16973__$1;
(statearr_16986_17029[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16974 === (22))){
var inst_16958 = (state_16973[(2)]);
var state_16973__$1 = state_16973;
if(cljs.core.truth_(inst_16958)){
var statearr_16987_17030 = state_16973__$1;
(statearr_16987_17030[(1)] = (23));

} else {
var statearr_16988_17031 = state_16973__$1;
(statearr_16988_17031[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16974 === (6))){
var inst_16952 = (state_16973[(7)]);
var inst_16954 = (state_16973[(11)]);
var inst_16904 = (state_16973[(8)]);
var inst_16952__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16904) : topic_fn.call(null,inst_16904));
var inst_16953 = cljs.core.deref(mults);
var inst_16954__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16953,inst_16952__$1);
var state_16973__$1 = (function (){var statearr_16989 = state_16973;
(statearr_16989[(7)] = inst_16952__$1);

(statearr_16989[(11)] = inst_16954__$1);

return statearr_16989;
})();
if(cljs.core.truth_(inst_16954__$1)){
var statearr_16990_17032 = state_16973__$1;
(statearr_16990_17032[(1)] = (19));

} else {
var statearr_16991_17033 = state_16973__$1;
(statearr_16991_17033[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16974 === (25))){
var inst_16963 = (state_16973[(2)]);
var state_16973__$1 = state_16973;
var statearr_16992_17034 = state_16973__$1;
(statearr_16992_17034[(2)] = inst_16963);

(statearr_16992_17034[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16974 === (17))){
var inst_16928 = (state_16973[(10)]);
var inst_16937 = cljs.core.first(inst_16928);
var inst_16938 = cljs.core.async.muxch_STAR_(inst_16937);
var inst_16939 = cljs.core.async.close_BANG_(inst_16938);
var inst_16940 = cljs.core.next(inst_16928);
var inst_16914 = inst_16940;
var inst_16915 = null;
var inst_16916 = (0);
var inst_16917 = (0);
var state_16973__$1 = (function (){var statearr_16993 = state_16973;
(statearr_16993[(12)] = inst_16916);

(statearr_16993[(13)] = inst_16917);

(statearr_16993[(14)] = inst_16915);

(statearr_16993[(15)] = inst_16939);

(statearr_16993[(16)] = inst_16914);

return statearr_16993;
})();
var statearr_16994_17035 = state_16973__$1;
(statearr_16994_17035[(2)] = null);

(statearr_16994_17035[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16974 === (3))){
var inst_16971 = (state_16973[(2)]);
var state_16973__$1 = state_16973;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16973__$1,inst_16971);
} else {
if((state_val_16974 === (12))){
var inst_16948 = (state_16973[(2)]);
var state_16973__$1 = state_16973;
var statearr_16995_17036 = state_16973__$1;
(statearr_16995_17036[(2)] = inst_16948);

(statearr_16995_17036[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16974 === (2))){
var state_16973__$1 = state_16973;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16973__$1,(4),ch);
} else {
if((state_val_16974 === (23))){
var state_16973__$1 = state_16973;
var statearr_16996_17037 = state_16973__$1;
(statearr_16996_17037[(2)] = null);

(statearr_16996_17037[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16974 === (19))){
var inst_16954 = (state_16973[(11)]);
var inst_16904 = (state_16973[(8)]);
var inst_16956 = cljs.core.async.muxch_STAR_(inst_16954);
var state_16973__$1 = state_16973;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16973__$1,(22),inst_16956,inst_16904);
} else {
if((state_val_16974 === (11))){
var inst_16928 = (state_16973[(10)]);
var inst_16914 = (state_16973[(16)]);
var inst_16928__$1 = cljs.core.seq(inst_16914);
var state_16973__$1 = (function (){var statearr_16997 = state_16973;
(statearr_16997[(10)] = inst_16928__$1);

return statearr_16997;
})();
if(inst_16928__$1){
var statearr_16998_17038 = state_16973__$1;
(statearr_16998_17038[(1)] = (13));

} else {
var statearr_16999_17039 = state_16973__$1;
(statearr_16999_17039[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16974 === (9))){
var inst_16950 = (state_16973[(2)]);
var state_16973__$1 = state_16973;
var statearr_17000_17040 = state_16973__$1;
(statearr_17000_17040[(2)] = inst_16950);

(statearr_17000_17040[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16974 === (5))){
var inst_16911 = cljs.core.deref(mults);
var inst_16912 = cljs.core.vals(inst_16911);
var inst_16913 = cljs.core.seq(inst_16912);
var inst_16914 = inst_16913;
var inst_16915 = null;
var inst_16916 = (0);
var inst_16917 = (0);
var state_16973__$1 = (function (){var statearr_17001 = state_16973;
(statearr_17001[(12)] = inst_16916);

(statearr_17001[(13)] = inst_16917);

(statearr_17001[(14)] = inst_16915);

(statearr_17001[(16)] = inst_16914);

return statearr_17001;
})();
var statearr_17002_17041 = state_16973__$1;
(statearr_17002_17041[(2)] = null);

(statearr_17002_17041[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16974 === (14))){
var state_16973__$1 = state_16973;
var statearr_17006_17042 = state_16973__$1;
(statearr_17006_17042[(2)] = null);

(statearr_17006_17042[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16974 === (16))){
var inst_16928 = (state_16973[(10)]);
var inst_16932 = cljs.core.chunk_first(inst_16928);
var inst_16933 = cljs.core.chunk_rest(inst_16928);
var inst_16934 = cljs.core.count(inst_16932);
var inst_16914 = inst_16933;
var inst_16915 = inst_16932;
var inst_16916 = inst_16934;
var inst_16917 = (0);
var state_16973__$1 = (function (){var statearr_17007 = state_16973;
(statearr_17007[(12)] = inst_16916);

(statearr_17007[(13)] = inst_16917);

(statearr_17007[(14)] = inst_16915);

(statearr_17007[(16)] = inst_16914);

return statearr_17007;
})();
var statearr_17008_17043 = state_16973__$1;
(statearr_17008_17043[(2)] = null);

(statearr_17008_17043[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16974 === (10))){
var inst_16916 = (state_16973[(12)]);
var inst_16917 = (state_16973[(13)]);
var inst_16915 = (state_16973[(14)]);
var inst_16914 = (state_16973[(16)]);
var inst_16922 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16915,inst_16917);
var inst_16923 = cljs.core.async.muxch_STAR_(inst_16922);
var inst_16924 = cljs.core.async.close_BANG_(inst_16923);
var inst_16925 = (inst_16917 + (1));
var tmp17003 = inst_16916;
var tmp17004 = inst_16915;
var tmp17005 = inst_16914;
var inst_16914__$1 = tmp17005;
var inst_16915__$1 = tmp17004;
var inst_16916__$1 = tmp17003;
var inst_16917__$1 = inst_16925;
var state_16973__$1 = (function (){var statearr_17009 = state_16973;
(statearr_17009[(17)] = inst_16924);

(statearr_17009[(12)] = inst_16916__$1);

(statearr_17009[(13)] = inst_16917__$1);

(statearr_17009[(14)] = inst_16915__$1);

(statearr_17009[(16)] = inst_16914__$1);

return statearr_17009;
})();
var statearr_17010_17044 = state_16973__$1;
(statearr_17010_17044[(2)] = null);

(statearr_17010_17044[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16974 === (18))){
var inst_16943 = (state_16973[(2)]);
var state_16973__$1 = state_16973;
var statearr_17011_17045 = state_16973__$1;
(statearr_17011_17045[(2)] = inst_16943);

(statearr_17011_17045[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16974 === (8))){
var inst_16916 = (state_16973[(12)]);
var inst_16917 = (state_16973[(13)]);
var inst_16919 = (inst_16917 < inst_16916);
var inst_16920 = inst_16919;
var state_16973__$1 = state_16973;
if(cljs.core.truth_(inst_16920)){
var statearr_17012_17046 = state_16973__$1;
(statearr_17012_17046[(1)] = (10));

} else {
var statearr_17013_17047 = state_16973__$1;
(statearr_17013_17047[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__15783__auto___17019,mults,ensure_mult,p))
;
return ((function (switch__15681__auto__,c__15783__auto___17019,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15682__auto__ = null;
var cljs$core$async$state_machine__15682__auto____0 = (function (){
var statearr_17014 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17014[(0)] = cljs$core$async$state_machine__15682__auto__);

(statearr_17014[(1)] = (1));

return statearr_17014;
});
var cljs$core$async$state_machine__15682__auto____1 = (function (state_16973){
while(true){
var ret_value__15683__auto__ = (function (){try{while(true){
var result__15684__auto__ = switch__15681__auto__(state_16973);
if(cljs.core.keyword_identical_QMARK_(result__15684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15684__auto__;
}
break;
}
}catch (e17015){if((e17015 instanceof Object)){
var ex__15685__auto__ = e17015;
var statearr_17016_17048 = state_16973;
(statearr_17016_17048[(5)] = ex__15685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16973);

return cljs.core.cst$kw$recur;
} else {
throw e17015;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15683__auto__,cljs.core.cst$kw$recur)){
var G__17049 = state_16973;
state_16973 = G__17049;
continue;
} else {
return ret_value__15683__auto__;
}
break;
}
});
cljs$core$async$state_machine__15682__auto__ = function(state_16973){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15682__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15682__auto____1.call(this,state_16973);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15682__auto____0;
cljs$core$async$state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15682__auto____1;
return cljs$core$async$state_machine__15682__auto__;
})()
;})(switch__15681__auto__,c__15783__auto___17019,mults,ensure_mult,p))
})();
var state__15785__auto__ = (function (){var statearr_17017 = (f__15784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15784__auto__.cljs$core$IFn$_invoke$arity$0() : f__15784__auto__.call(null));
(statearr_17017[(6)] = c__15783__auto___17019);

return statearr_17017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15785__auto__);
});})(c__15783__auto___17019,mults,ensure_mult,p))
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
var G__17051 = arguments.length;
switch (G__17051) {
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
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__17054 = arguments.length;
switch (G__17054) {
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
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var G__17057 = arguments.length;
switch (G__17057) {
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
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__15783__auto___17124 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15783__auto___17124,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15784__auto__ = (function (){var switch__15681__auto__ = ((function (c__15783__auto___17124,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17096){
var state_val_17097 = (state_17096[(1)]);
if((state_val_17097 === (7))){
var state_17096__$1 = state_17096;
var statearr_17098_17125 = state_17096__$1;
(statearr_17098_17125[(2)] = null);

(statearr_17098_17125[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17097 === (1))){
var state_17096__$1 = state_17096;
var statearr_17099_17126 = state_17096__$1;
(statearr_17099_17126[(2)] = null);

(statearr_17099_17126[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17097 === (4))){
var inst_17060 = (state_17096[(7)]);
var inst_17062 = (inst_17060 < cnt);
var state_17096__$1 = state_17096;
if(cljs.core.truth_(inst_17062)){
var statearr_17100_17127 = state_17096__$1;
(statearr_17100_17127[(1)] = (6));

} else {
var statearr_17101_17128 = state_17096__$1;
(statearr_17101_17128[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17097 === (15))){
var inst_17092 = (state_17096[(2)]);
var state_17096__$1 = state_17096;
var statearr_17102_17129 = state_17096__$1;
(statearr_17102_17129[(2)] = inst_17092);

(statearr_17102_17129[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17097 === (13))){
var inst_17085 = cljs.core.async.close_BANG_(out);
var state_17096__$1 = state_17096;
var statearr_17103_17130 = state_17096__$1;
(statearr_17103_17130[(2)] = inst_17085);

(statearr_17103_17130[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17097 === (6))){
var state_17096__$1 = state_17096;
var statearr_17104_17131 = state_17096__$1;
(statearr_17104_17131[(2)] = null);

(statearr_17104_17131[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17097 === (3))){
var inst_17094 = (state_17096[(2)]);
var state_17096__$1 = state_17096;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17096__$1,inst_17094);
} else {
if((state_val_17097 === (12))){
var inst_17082 = (state_17096[(8)]);
var inst_17082__$1 = (state_17096[(2)]);
var inst_17083 = cljs.core.some(cljs.core.nil_QMARK_,inst_17082__$1);
var state_17096__$1 = (function (){var statearr_17105 = state_17096;
(statearr_17105[(8)] = inst_17082__$1);

return statearr_17105;
})();
if(cljs.core.truth_(inst_17083)){
var statearr_17106_17132 = state_17096__$1;
(statearr_17106_17132[(1)] = (13));

} else {
var statearr_17107_17133 = state_17096__$1;
(statearr_17107_17133[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17097 === (2))){
var inst_17059 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17060 = (0);
var state_17096__$1 = (function (){var statearr_17108 = state_17096;
(statearr_17108[(7)] = inst_17060);

(statearr_17108[(9)] = inst_17059);

return statearr_17108;
})();
var statearr_17109_17134 = state_17096__$1;
(statearr_17109_17134[(2)] = null);

(statearr_17109_17134[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17097 === (11))){
var inst_17060 = (state_17096[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_17096,(10),Object,null,(9));
var inst_17069 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17060) : chs__$1.call(null,inst_17060));
var inst_17070 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17060) : done.call(null,inst_17060));
var inst_17071 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17069,inst_17070);
var state_17096__$1 = state_17096;
var statearr_17110_17135 = state_17096__$1;
(statearr_17110_17135[(2)] = inst_17071);


cljs.core.async.impl.ioc_helpers.process_exception(state_17096__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_17097 === (9))){
var inst_17060 = (state_17096[(7)]);
var inst_17073 = (state_17096[(2)]);
var inst_17074 = (inst_17060 + (1));
var inst_17060__$1 = inst_17074;
var state_17096__$1 = (function (){var statearr_17111 = state_17096;
(statearr_17111[(10)] = inst_17073);

(statearr_17111[(7)] = inst_17060__$1);

return statearr_17111;
})();
var statearr_17112_17136 = state_17096__$1;
(statearr_17112_17136[(2)] = null);

(statearr_17112_17136[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17097 === (5))){
var inst_17080 = (state_17096[(2)]);
var state_17096__$1 = (function (){var statearr_17113 = state_17096;
(statearr_17113[(11)] = inst_17080);

return statearr_17113;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17096__$1,(12),dchan);
} else {
if((state_val_17097 === (14))){
var inst_17082 = (state_17096[(8)]);
var inst_17087 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17082);
var state_17096__$1 = state_17096;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17096__$1,(16),out,inst_17087);
} else {
if((state_val_17097 === (16))){
var inst_17089 = (state_17096[(2)]);
var state_17096__$1 = (function (){var statearr_17114 = state_17096;
(statearr_17114[(12)] = inst_17089);

return statearr_17114;
})();
var statearr_17115_17137 = state_17096__$1;
(statearr_17115_17137[(2)] = null);

(statearr_17115_17137[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17097 === (10))){
var inst_17064 = (state_17096[(2)]);
var inst_17065 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17096__$1 = (function (){var statearr_17116 = state_17096;
(statearr_17116[(13)] = inst_17064);

return statearr_17116;
})();
var statearr_17117_17138 = state_17096__$1;
(statearr_17117_17138[(2)] = inst_17065);


cljs.core.async.impl.ioc_helpers.process_exception(state_17096__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_17097 === (8))){
var inst_17078 = (state_17096[(2)]);
var state_17096__$1 = state_17096;
var statearr_17118_17139 = state_17096__$1;
(statearr_17118_17139[(2)] = inst_17078);

(statearr_17118_17139[(1)] = (5));


return cljs.core.cst$kw$recur;
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
});})(c__15783__auto___17124,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15681__auto__,c__15783__auto___17124,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15682__auto__ = null;
var cljs$core$async$state_machine__15682__auto____0 = (function (){
var statearr_17119 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17119[(0)] = cljs$core$async$state_machine__15682__auto__);

(statearr_17119[(1)] = (1));

return statearr_17119;
});
var cljs$core$async$state_machine__15682__auto____1 = (function (state_17096){
while(true){
var ret_value__15683__auto__ = (function (){try{while(true){
var result__15684__auto__ = switch__15681__auto__(state_17096);
if(cljs.core.keyword_identical_QMARK_(result__15684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15684__auto__;
}
break;
}
}catch (e17120){if((e17120 instanceof Object)){
var ex__15685__auto__ = e17120;
var statearr_17121_17140 = state_17096;
(statearr_17121_17140[(5)] = ex__15685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17096);

return cljs.core.cst$kw$recur;
} else {
throw e17120;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15683__auto__,cljs.core.cst$kw$recur)){
var G__17141 = state_17096;
state_17096 = G__17141;
continue;
} else {
return ret_value__15683__auto__;
}
break;
}
});
cljs$core$async$state_machine__15682__auto__ = function(state_17096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15682__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15682__auto____1.call(this,state_17096);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15682__auto____0;
cljs$core$async$state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15682__auto____1;
return cljs$core$async$state_machine__15682__auto__;
})()
;})(switch__15681__auto__,c__15783__auto___17124,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15785__auto__ = (function (){var statearr_17122 = (f__15784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15784__auto__.cljs$core$IFn$_invoke$arity$0() : f__15784__auto__.call(null));
(statearr_17122[(6)] = c__15783__auto___17124);

return statearr_17122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15785__auto__);
});})(c__15783__auto___17124,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__17144 = arguments.length;
switch (G__17144) {
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
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15783__auto___17198 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15783__auto___17198,out){
return (function (){
var f__15784__auto__ = (function (){var switch__15681__auto__ = ((function (c__15783__auto___17198,out){
return (function (state_17176){
var state_val_17177 = (state_17176[(1)]);
if((state_val_17177 === (7))){
var inst_17156 = (state_17176[(7)]);
var inst_17155 = (state_17176[(8)]);
var inst_17155__$1 = (state_17176[(2)]);
var inst_17156__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17155__$1,(0),null);
var inst_17157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17155__$1,(1),null);
var inst_17158 = (inst_17156__$1 == null);
var state_17176__$1 = (function (){var statearr_17178 = state_17176;
(statearr_17178[(7)] = inst_17156__$1);

(statearr_17178[(9)] = inst_17157);

(statearr_17178[(8)] = inst_17155__$1);

return statearr_17178;
})();
if(cljs.core.truth_(inst_17158)){
var statearr_17179_17199 = state_17176__$1;
(statearr_17179_17199[(1)] = (8));

} else {
var statearr_17180_17200 = state_17176__$1;
(statearr_17180_17200[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17177 === (1))){
var inst_17145 = cljs.core.vec(chs);
var inst_17146 = inst_17145;
var state_17176__$1 = (function (){var statearr_17181 = state_17176;
(statearr_17181[(10)] = inst_17146);

return statearr_17181;
})();
var statearr_17182_17201 = state_17176__$1;
(statearr_17182_17201[(2)] = null);

(statearr_17182_17201[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17177 === (4))){
var inst_17146 = (state_17176[(10)]);
var state_17176__$1 = state_17176;
return cljs.core.async.ioc_alts_BANG_(state_17176__$1,(7),inst_17146);
} else {
if((state_val_17177 === (6))){
var inst_17172 = (state_17176[(2)]);
var state_17176__$1 = state_17176;
var statearr_17183_17202 = state_17176__$1;
(statearr_17183_17202[(2)] = inst_17172);

(statearr_17183_17202[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17177 === (3))){
var inst_17174 = (state_17176[(2)]);
var state_17176__$1 = state_17176;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17176__$1,inst_17174);
} else {
if((state_val_17177 === (2))){
var inst_17146 = (state_17176[(10)]);
var inst_17148 = cljs.core.count(inst_17146);
var inst_17149 = (inst_17148 > (0));
var state_17176__$1 = state_17176;
if(cljs.core.truth_(inst_17149)){
var statearr_17185_17203 = state_17176__$1;
(statearr_17185_17203[(1)] = (4));

} else {
var statearr_17186_17204 = state_17176__$1;
(statearr_17186_17204[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17177 === (11))){
var inst_17146 = (state_17176[(10)]);
var inst_17165 = (state_17176[(2)]);
var tmp17184 = inst_17146;
var inst_17146__$1 = tmp17184;
var state_17176__$1 = (function (){var statearr_17187 = state_17176;
(statearr_17187[(11)] = inst_17165);

(statearr_17187[(10)] = inst_17146__$1);

return statearr_17187;
})();
var statearr_17188_17205 = state_17176__$1;
(statearr_17188_17205[(2)] = null);

(statearr_17188_17205[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17177 === (9))){
var inst_17156 = (state_17176[(7)]);
var state_17176__$1 = state_17176;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17176__$1,(11),out,inst_17156);
} else {
if((state_val_17177 === (5))){
var inst_17170 = cljs.core.async.close_BANG_(out);
var state_17176__$1 = state_17176;
var statearr_17189_17206 = state_17176__$1;
(statearr_17189_17206[(2)] = inst_17170);

(statearr_17189_17206[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17177 === (10))){
var inst_17168 = (state_17176[(2)]);
var state_17176__$1 = state_17176;
var statearr_17190_17207 = state_17176__$1;
(statearr_17190_17207[(2)] = inst_17168);

(statearr_17190_17207[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17177 === (8))){
var inst_17156 = (state_17176[(7)]);
var inst_17157 = (state_17176[(9)]);
var inst_17146 = (state_17176[(10)]);
var inst_17155 = (state_17176[(8)]);
var inst_17160 = (function (){var cs = inst_17146;
var vec__17151 = inst_17155;
var v = inst_17156;
var c = inst_17157;
return ((function (cs,vec__17151,v,c,inst_17156,inst_17157,inst_17146,inst_17155,state_val_17177,c__15783__auto___17198,out){
return (function (p1__17142_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17142_SHARP_);
});
;})(cs,vec__17151,v,c,inst_17156,inst_17157,inst_17146,inst_17155,state_val_17177,c__15783__auto___17198,out))
})();
var inst_17161 = cljs.core.filterv(inst_17160,inst_17146);
var inst_17146__$1 = inst_17161;
var state_17176__$1 = (function (){var statearr_17191 = state_17176;
(statearr_17191[(10)] = inst_17146__$1);

return statearr_17191;
})();
var statearr_17192_17208 = state_17176__$1;
(statearr_17192_17208[(2)] = null);

(statearr_17192_17208[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__15783__auto___17198,out))
;
return ((function (switch__15681__auto__,c__15783__auto___17198,out){
return (function() {
var cljs$core$async$state_machine__15682__auto__ = null;
var cljs$core$async$state_machine__15682__auto____0 = (function (){
var statearr_17193 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17193[(0)] = cljs$core$async$state_machine__15682__auto__);

(statearr_17193[(1)] = (1));

return statearr_17193;
});
var cljs$core$async$state_machine__15682__auto____1 = (function (state_17176){
while(true){
var ret_value__15683__auto__ = (function (){try{while(true){
var result__15684__auto__ = switch__15681__auto__(state_17176);
if(cljs.core.keyword_identical_QMARK_(result__15684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15684__auto__;
}
break;
}
}catch (e17194){if((e17194 instanceof Object)){
var ex__15685__auto__ = e17194;
var statearr_17195_17209 = state_17176;
(statearr_17195_17209[(5)] = ex__15685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17176);

return cljs.core.cst$kw$recur;
} else {
throw e17194;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15683__auto__,cljs.core.cst$kw$recur)){
var G__17210 = state_17176;
state_17176 = G__17210;
continue;
} else {
return ret_value__15683__auto__;
}
break;
}
});
cljs$core$async$state_machine__15682__auto__ = function(state_17176){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15682__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15682__auto____1.call(this,state_17176);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15682__auto____0;
cljs$core$async$state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15682__auto____1;
return cljs$core$async$state_machine__15682__auto__;
})()
;})(switch__15681__auto__,c__15783__auto___17198,out))
})();
var state__15785__auto__ = (function (){var statearr_17196 = (f__15784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15784__auto__.cljs$core$IFn$_invoke$arity$0() : f__15784__auto__.call(null));
(statearr_17196[(6)] = c__15783__auto___17198);

return statearr_17196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15785__auto__);
});})(c__15783__auto___17198,out))
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17212 = arguments.length;
switch (G__17212) {
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
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15783__auto___17257 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15783__auto___17257,out){
return (function (){
var f__15784__auto__ = (function (){var switch__15681__auto__ = ((function (c__15783__auto___17257,out){
return (function (state_17236){
var state_val_17237 = (state_17236[(1)]);
if((state_val_17237 === (7))){
var inst_17218 = (state_17236[(7)]);
var inst_17218__$1 = (state_17236[(2)]);
var inst_17219 = (inst_17218__$1 == null);
var inst_17220 = cljs.core.not(inst_17219);
var state_17236__$1 = (function (){var statearr_17238 = state_17236;
(statearr_17238[(7)] = inst_17218__$1);

return statearr_17238;
})();
if(inst_17220){
var statearr_17239_17258 = state_17236__$1;
(statearr_17239_17258[(1)] = (8));

} else {
var statearr_17240_17259 = state_17236__$1;
(statearr_17240_17259[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17237 === (1))){
var inst_17213 = (0);
var state_17236__$1 = (function (){var statearr_17241 = state_17236;
(statearr_17241[(8)] = inst_17213);

return statearr_17241;
})();
var statearr_17242_17260 = state_17236__$1;
(statearr_17242_17260[(2)] = null);

(statearr_17242_17260[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17237 === (4))){
var state_17236__$1 = state_17236;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17236__$1,(7),ch);
} else {
if((state_val_17237 === (6))){
var inst_17231 = (state_17236[(2)]);
var state_17236__$1 = state_17236;
var statearr_17243_17261 = state_17236__$1;
(statearr_17243_17261[(2)] = inst_17231);

(statearr_17243_17261[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17237 === (3))){
var inst_17233 = (state_17236[(2)]);
var inst_17234 = cljs.core.async.close_BANG_(out);
var state_17236__$1 = (function (){var statearr_17244 = state_17236;
(statearr_17244[(9)] = inst_17233);

return statearr_17244;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17236__$1,inst_17234);
} else {
if((state_val_17237 === (2))){
var inst_17213 = (state_17236[(8)]);
var inst_17215 = (inst_17213 < n);
var state_17236__$1 = state_17236;
if(cljs.core.truth_(inst_17215)){
var statearr_17245_17262 = state_17236__$1;
(statearr_17245_17262[(1)] = (4));

} else {
var statearr_17246_17263 = state_17236__$1;
(statearr_17246_17263[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17237 === (11))){
var inst_17213 = (state_17236[(8)]);
var inst_17223 = (state_17236[(2)]);
var inst_17224 = (inst_17213 + (1));
var inst_17213__$1 = inst_17224;
var state_17236__$1 = (function (){var statearr_17247 = state_17236;
(statearr_17247[(10)] = inst_17223);

(statearr_17247[(8)] = inst_17213__$1);

return statearr_17247;
})();
var statearr_17248_17264 = state_17236__$1;
(statearr_17248_17264[(2)] = null);

(statearr_17248_17264[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17237 === (9))){
var state_17236__$1 = state_17236;
var statearr_17249_17265 = state_17236__$1;
(statearr_17249_17265[(2)] = null);

(statearr_17249_17265[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17237 === (5))){
var state_17236__$1 = state_17236;
var statearr_17250_17266 = state_17236__$1;
(statearr_17250_17266[(2)] = null);

(statearr_17250_17266[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17237 === (10))){
var inst_17228 = (state_17236[(2)]);
var state_17236__$1 = state_17236;
var statearr_17251_17267 = state_17236__$1;
(statearr_17251_17267[(2)] = inst_17228);

(statearr_17251_17267[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17237 === (8))){
var inst_17218 = (state_17236[(7)]);
var state_17236__$1 = state_17236;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17236__$1,(11),out,inst_17218);
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
});})(c__15783__auto___17257,out))
;
return ((function (switch__15681__auto__,c__15783__auto___17257,out){
return (function() {
var cljs$core$async$state_machine__15682__auto__ = null;
var cljs$core$async$state_machine__15682__auto____0 = (function (){
var statearr_17252 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17252[(0)] = cljs$core$async$state_machine__15682__auto__);

(statearr_17252[(1)] = (1));

return statearr_17252;
});
var cljs$core$async$state_machine__15682__auto____1 = (function (state_17236){
while(true){
var ret_value__15683__auto__ = (function (){try{while(true){
var result__15684__auto__ = switch__15681__auto__(state_17236);
if(cljs.core.keyword_identical_QMARK_(result__15684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15684__auto__;
}
break;
}
}catch (e17253){if((e17253 instanceof Object)){
var ex__15685__auto__ = e17253;
var statearr_17254_17268 = state_17236;
(statearr_17254_17268[(5)] = ex__15685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17236);

return cljs.core.cst$kw$recur;
} else {
throw e17253;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15683__auto__,cljs.core.cst$kw$recur)){
var G__17269 = state_17236;
state_17236 = G__17269;
continue;
} else {
return ret_value__15683__auto__;
}
break;
}
});
cljs$core$async$state_machine__15682__auto__ = function(state_17236){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15682__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15682__auto____1.call(this,state_17236);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15682__auto____0;
cljs$core$async$state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15682__auto____1;
return cljs$core$async$state_machine__15682__auto__;
})()
;})(switch__15681__auto__,c__15783__auto___17257,out))
})();
var state__15785__auto__ = (function (){var statearr_17255 = (f__15784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15784__auto__.cljs$core$IFn$_invoke$arity$0() : f__15784__auto__.call(null));
(statearr_17255[(6)] = c__15783__auto___17257);

return statearr_17255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15785__auto__);
});})(c__15783__auto___17257,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17271 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17271 = (function (f,ch,meta17272){
this.f = f;
this.ch = ch;
this.meta17272 = meta17272;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17273,meta17272__$1){
var self__ = this;
var _17273__$1 = this;
return (new cljs.core.async.t_cljs$core$async17271(self__.f,self__.ch,meta17272__$1));
});

cljs.core.async.t_cljs$core$async17271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17273){
var self__ = this;
var _17273__$1 = this;
return self__.meta17272;
});

cljs.core.async.t_cljs$core$async17271.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17271.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17271.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17271.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17271.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async17274 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17274 = (function (f,ch,meta17272,_,fn1,meta17275){
this.f = f;
this.ch = ch;
this.meta17272 = meta17272;
this._ = _;
this.fn1 = fn1;
this.meta17275 = meta17275;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17276,meta17275__$1){
var self__ = this;
var _17276__$1 = this;
return (new cljs.core.async.t_cljs$core$async17274(self__.f,self__.ch,self__.meta17272,self__._,self__.fn1,meta17275__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async17274.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17276){
var self__ = this;
var _17276__$1 = this;
return self__.meta17275;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17274.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17274.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17274.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17274.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17270_SHARP_){
var G__17277 = (((p1__17270_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17270_SHARP_) : self__.f.call(null,p1__17270_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17277) : f1.call(null,G__17277));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async17274.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17272,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async17271], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta17275], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17274.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17274.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17274";

cljs.core.async.t_cljs$core$async17274.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8335__auto__,writer__8336__auto__,opt__8337__auto__){
return cljs.core._write(writer__8336__auto__,"cljs.core.async/t_cljs$core$async17274");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async17274 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17274(f__$1,ch__$1,meta17272__$1,___$2,fn1__$1,meta17275){
return (new cljs.core.async.t_cljs$core$async17274(f__$1,ch__$1,meta17272__$1,___$2,fn1__$1,meta17275));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async17274(self__.f,self__.ch,self__.meta17272,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__7666__auto__ = ret;
if(cljs.core.truth_(and__7666__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__7666__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17278 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17278) : self__.f.call(null,G__17278));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async17271.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17271.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async17271.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17272], null);
});

cljs.core.async.t_cljs$core$async17271.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17271.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17271";

cljs.core.async.t_cljs$core$async17271.cljs$lang$ctorPrWriter = (function (this__8335__auto__,writer__8336__auto__,opt__8337__auto__){
return cljs.core._write(writer__8336__auto__,"cljs.core.async/t_cljs$core$async17271");
});

cljs.core.async.__GT_t_cljs$core$async17271 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17271(f__$1,ch__$1,meta17272){
return (new cljs.core.async.t_cljs$core$async17271(f__$1,ch__$1,meta17272));
});

}

return (new cljs.core.async.t_cljs$core$async17271(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17279 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17279 = (function (f,ch,meta17280){
this.f = f;
this.ch = ch;
this.meta17280 = meta17280;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17281,meta17280__$1){
var self__ = this;
var _17281__$1 = this;
return (new cljs.core.async.t_cljs$core$async17279(self__.f,self__.ch,meta17280__$1));
});

cljs.core.async.t_cljs$core$async17279.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17281){
var self__ = this;
var _17281__$1 = this;
return self__.meta17280;
});

cljs.core.async.t_cljs$core$async17279.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17279.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17279.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17279.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17279.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17279.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async17279.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17280], null);
});

cljs.core.async.t_cljs$core$async17279.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17279.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17279";

cljs.core.async.t_cljs$core$async17279.cljs$lang$ctorPrWriter = (function (this__8335__auto__,writer__8336__auto__,opt__8337__auto__){
return cljs.core._write(writer__8336__auto__,"cljs.core.async/t_cljs$core$async17279");
});

cljs.core.async.__GT_t_cljs$core$async17279 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17279(f__$1,ch__$1,meta17280){
return (new cljs.core.async.t_cljs$core$async17279(f__$1,ch__$1,meta17280));
});

}

return (new cljs.core.async.t_cljs$core$async17279(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async17282 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17282 = (function (p,ch,meta17283){
this.p = p;
this.ch = ch;
this.meta17283 = meta17283;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17284,meta17283__$1){
var self__ = this;
var _17284__$1 = this;
return (new cljs.core.async.t_cljs$core$async17282(self__.p,self__.ch,meta17283__$1));
});

cljs.core.async.t_cljs$core$async17282.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17284){
var self__ = this;
var _17284__$1 = this;
return self__.meta17283;
});

cljs.core.async.t_cljs$core$async17282.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17282.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17282.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17282.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17282.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17282.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17282.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async17282.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17283], null);
});

cljs.core.async.t_cljs$core$async17282.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17282.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17282";

cljs.core.async.t_cljs$core$async17282.cljs$lang$ctorPrWriter = (function (this__8335__auto__,writer__8336__auto__,opt__8337__auto__){
return cljs.core._write(writer__8336__auto__,"cljs.core.async/t_cljs$core$async17282");
});

cljs.core.async.__GT_t_cljs$core$async17282 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17282(p__$1,ch__$1,meta17283){
return (new cljs.core.async.t_cljs$core$async17282(p__$1,ch__$1,meta17283));
});

}

return (new cljs.core.async.t_cljs$core$async17282(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17286 = arguments.length;
switch (G__17286) {
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
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15783__auto___17326 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15783__auto___17326,out){
return (function (){
var f__15784__auto__ = (function (){var switch__15681__auto__ = ((function (c__15783__auto___17326,out){
return (function (state_17307){
var state_val_17308 = (state_17307[(1)]);
if((state_val_17308 === (7))){
var inst_17303 = (state_17307[(2)]);
var state_17307__$1 = state_17307;
var statearr_17309_17327 = state_17307__$1;
(statearr_17309_17327[(2)] = inst_17303);

(statearr_17309_17327[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17308 === (1))){
var state_17307__$1 = state_17307;
var statearr_17310_17328 = state_17307__$1;
(statearr_17310_17328[(2)] = null);

(statearr_17310_17328[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17308 === (4))){
var inst_17289 = (state_17307[(7)]);
var inst_17289__$1 = (state_17307[(2)]);
var inst_17290 = (inst_17289__$1 == null);
var state_17307__$1 = (function (){var statearr_17311 = state_17307;
(statearr_17311[(7)] = inst_17289__$1);

return statearr_17311;
})();
if(cljs.core.truth_(inst_17290)){
var statearr_17312_17329 = state_17307__$1;
(statearr_17312_17329[(1)] = (5));

} else {
var statearr_17313_17330 = state_17307__$1;
(statearr_17313_17330[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17308 === (6))){
var inst_17289 = (state_17307[(7)]);
var inst_17294 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17289) : p.call(null,inst_17289));
var state_17307__$1 = state_17307;
if(cljs.core.truth_(inst_17294)){
var statearr_17314_17331 = state_17307__$1;
(statearr_17314_17331[(1)] = (8));

} else {
var statearr_17315_17332 = state_17307__$1;
(statearr_17315_17332[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17308 === (3))){
var inst_17305 = (state_17307[(2)]);
var state_17307__$1 = state_17307;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17307__$1,inst_17305);
} else {
if((state_val_17308 === (2))){
var state_17307__$1 = state_17307;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17307__$1,(4),ch);
} else {
if((state_val_17308 === (11))){
var inst_17297 = (state_17307[(2)]);
var state_17307__$1 = state_17307;
var statearr_17316_17333 = state_17307__$1;
(statearr_17316_17333[(2)] = inst_17297);

(statearr_17316_17333[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17308 === (9))){
var state_17307__$1 = state_17307;
var statearr_17317_17334 = state_17307__$1;
(statearr_17317_17334[(2)] = null);

(statearr_17317_17334[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17308 === (5))){
var inst_17292 = cljs.core.async.close_BANG_(out);
var state_17307__$1 = state_17307;
var statearr_17318_17335 = state_17307__$1;
(statearr_17318_17335[(2)] = inst_17292);

(statearr_17318_17335[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17308 === (10))){
var inst_17300 = (state_17307[(2)]);
var state_17307__$1 = (function (){var statearr_17319 = state_17307;
(statearr_17319[(8)] = inst_17300);

return statearr_17319;
})();
var statearr_17320_17336 = state_17307__$1;
(statearr_17320_17336[(2)] = null);

(statearr_17320_17336[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17308 === (8))){
var inst_17289 = (state_17307[(7)]);
var state_17307__$1 = state_17307;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17307__$1,(11),out,inst_17289);
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
});})(c__15783__auto___17326,out))
;
return ((function (switch__15681__auto__,c__15783__auto___17326,out){
return (function() {
var cljs$core$async$state_machine__15682__auto__ = null;
var cljs$core$async$state_machine__15682__auto____0 = (function (){
var statearr_17321 = [null,null,null,null,null,null,null,null,null];
(statearr_17321[(0)] = cljs$core$async$state_machine__15682__auto__);

(statearr_17321[(1)] = (1));

return statearr_17321;
});
var cljs$core$async$state_machine__15682__auto____1 = (function (state_17307){
while(true){
var ret_value__15683__auto__ = (function (){try{while(true){
var result__15684__auto__ = switch__15681__auto__(state_17307);
if(cljs.core.keyword_identical_QMARK_(result__15684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15684__auto__;
}
break;
}
}catch (e17322){if((e17322 instanceof Object)){
var ex__15685__auto__ = e17322;
var statearr_17323_17337 = state_17307;
(statearr_17323_17337[(5)] = ex__15685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17307);

return cljs.core.cst$kw$recur;
} else {
throw e17322;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15683__auto__,cljs.core.cst$kw$recur)){
var G__17338 = state_17307;
state_17307 = G__17338;
continue;
} else {
return ret_value__15683__auto__;
}
break;
}
});
cljs$core$async$state_machine__15682__auto__ = function(state_17307){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15682__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15682__auto____1.call(this,state_17307);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15682__auto____0;
cljs$core$async$state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15682__auto____1;
return cljs$core$async$state_machine__15682__auto__;
})()
;})(switch__15681__auto__,c__15783__auto___17326,out))
})();
var state__15785__auto__ = (function (){var statearr_17324 = (f__15784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15784__auto__.cljs$core$IFn$_invoke$arity$0() : f__15784__auto__.call(null));
(statearr_17324[(6)] = c__15783__auto___17326);

return statearr_17324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15785__auto__);
});})(c__15783__auto___17326,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17340 = arguments.length;
switch (G__17340) {
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
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15783__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15783__auto__){
return (function (){
var f__15784__auto__ = (function (){var switch__15681__auto__ = ((function (c__15783__auto__){
return (function (state_17403){
var state_val_17404 = (state_17403[(1)]);
if((state_val_17404 === (7))){
var inst_17399 = (state_17403[(2)]);
var state_17403__$1 = state_17403;
var statearr_17405_17443 = state_17403__$1;
(statearr_17405_17443[(2)] = inst_17399);

(statearr_17405_17443[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17404 === (20))){
var inst_17369 = (state_17403[(7)]);
var inst_17380 = (state_17403[(2)]);
var inst_17381 = cljs.core.next(inst_17369);
var inst_17355 = inst_17381;
var inst_17356 = null;
var inst_17357 = (0);
var inst_17358 = (0);
var state_17403__$1 = (function (){var statearr_17406 = state_17403;
(statearr_17406[(8)] = inst_17357);

(statearr_17406[(9)] = inst_17355);

(statearr_17406[(10)] = inst_17358);

(statearr_17406[(11)] = inst_17380);

(statearr_17406[(12)] = inst_17356);

return statearr_17406;
})();
var statearr_17407_17444 = state_17403__$1;
(statearr_17407_17444[(2)] = null);

(statearr_17407_17444[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17404 === (1))){
var state_17403__$1 = state_17403;
var statearr_17408_17445 = state_17403__$1;
(statearr_17408_17445[(2)] = null);

(statearr_17408_17445[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17404 === (4))){
var inst_17344 = (state_17403[(13)]);
var inst_17344__$1 = (state_17403[(2)]);
var inst_17345 = (inst_17344__$1 == null);
var state_17403__$1 = (function (){var statearr_17409 = state_17403;
(statearr_17409[(13)] = inst_17344__$1);

return statearr_17409;
})();
if(cljs.core.truth_(inst_17345)){
var statearr_17410_17446 = state_17403__$1;
(statearr_17410_17446[(1)] = (5));

} else {
var statearr_17411_17447 = state_17403__$1;
(statearr_17411_17447[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17404 === (15))){
var state_17403__$1 = state_17403;
var statearr_17415_17448 = state_17403__$1;
(statearr_17415_17448[(2)] = null);

(statearr_17415_17448[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17404 === (21))){
var state_17403__$1 = state_17403;
var statearr_17416_17449 = state_17403__$1;
(statearr_17416_17449[(2)] = null);

(statearr_17416_17449[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17404 === (13))){
var inst_17357 = (state_17403[(8)]);
var inst_17355 = (state_17403[(9)]);
var inst_17358 = (state_17403[(10)]);
var inst_17356 = (state_17403[(12)]);
var inst_17365 = (state_17403[(2)]);
var inst_17366 = (inst_17358 + (1));
var tmp17412 = inst_17357;
var tmp17413 = inst_17355;
var tmp17414 = inst_17356;
var inst_17355__$1 = tmp17413;
var inst_17356__$1 = tmp17414;
var inst_17357__$1 = tmp17412;
var inst_17358__$1 = inst_17366;
var state_17403__$1 = (function (){var statearr_17417 = state_17403;
(statearr_17417[(8)] = inst_17357__$1);

(statearr_17417[(9)] = inst_17355__$1);

(statearr_17417[(10)] = inst_17358__$1);

(statearr_17417[(14)] = inst_17365);

(statearr_17417[(12)] = inst_17356__$1);

return statearr_17417;
})();
var statearr_17418_17450 = state_17403__$1;
(statearr_17418_17450[(2)] = null);

(statearr_17418_17450[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17404 === (22))){
var state_17403__$1 = state_17403;
var statearr_17419_17451 = state_17403__$1;
(statearr_17419_17451[(2)] = null);

(statearr_17419_17451[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17404 === (6))){
var inst_17344 = (state_17403[(13)]);
var inst_17353 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17344) : f.call(null,inst_17344));
var inst_17354 = cljs.core.seq(inst_17353);
var inst_17355 = inst_17354;
var inst_17356 = null;
var inst_17357 = (0);
var inst_17358 = (0);
var state_17403__$1 = (function (){var statearr_17420 = state_17403;
(statearr_17420[(8)] = inst_17357);

(statearr_17420[(9)] = inst_17355);

(statearr_17420[(10)] = inst_17358);

(statearr_17420[(12)] = inst_17356);

return statearr_17420;
})();
var statearr_17421_17452 = state_17403__$1;
(statearr_17421_17452[(2)] = null);

(statearr_17421_17452[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17404 === (17))){
var inst_17369 = (state_17403[(7)]);
var inst_17373 = cljs.core.chunk_first(inst_17369);
var inst_17374 = cljs.core.chunk_rest(inst_17369);
var inst_17375 = cljs.core.count(inst_17373);
var inst_17355 = inst_17374;
var inst_17356 = inst_17373;
var inst_17357 = inst_17375;
var inst_17358 = (0);
var state_17403__$1 = (function (){var statearr_17422 = state_17403;
(statearr_17422[(8)] = inst_17357);

(statearr_17422[(9)] = inst_17355);

(statearr_17422[(10)] = inst_17358);

(statearr_17422[(12)] = inst_17356);

return statearr_17422;
})();
var statearr_17423_17453 = state_17403__$1;
(statearr_17423_17453[(2)] = null);

(statearr_17423_17453[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17404 === (3))){
var inst_17401 = (state_17403[(2)]);
var state_17403__$1 = state_17403;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17403__$1,inst_17401);
} else {
if((state_val_17404 === (12))){
var inst_17389 = (state_17403[(2)]);
var state_17403__$1 = state_17403;
var statearr_17424_17454 = state_17403__$1;
(statearr_17424_17454[(2)] = inst_17389);

(statearr_17424_17454[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17404 === (2))){
var state_17403__$1 = state_17403;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17403__$1,(4),in$);
} else {
if((state_val_17404 === (23))){
var inst_17397 = (state_17403[(2)]);
var state_17403__$1 = state_17403;
var statearr_17425_17455 = state_17403__$1;
(statearr_17425_17455[(2)] = inst_17397);

(statearr_17425_17455[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17404 === (19))){
var inst_17384 = (state_17403[(2)]);
var state_17403__$1 = state_17403;
var statearr_17426_17456 = state_17403__$1;
(statearr_17426_17456[(2)] = inst_17384);

(statearr_17426_17456[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17404 === (11))){
var inst_17355 = (state_17403[(9)]);
var inst_17369 = (state_17403[(7)]);
var inst_17369__$1 = cljs.core.seq(inst_17355);
var state_17403__$1 = (function (){var statearr_17427 = state_17403;
(statearr_17427[(7)] = inst_17369__$1);

return statearr_17427;
})();
if(inst_17369__$1){
var statearr_17428_17457 = state_17403__$1;
(statearr_17428_17457[(1)] = (14));

} else {
var statearr_17429_17458 = state_17403__$1;
(statearr_17429_17458[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17404 === (9))){
var inst_17391 = (state_17403[(2)]);
var inst_17392 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17403__$1 = (function (){var statearr_17430 = state_17403;
(statearr_17430[(15)] = inst_17391);

return statearr_17430;
})();
if(cljs.core.truth_(inst_17392)){
var statearr_17431_17459 = state_17403__$1;
(statearr_17431_17459[(1)] = (21));

} else {
var statearr_17432_17460 = state_17403__$1;
(statearr_17432_17460[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17404 === (5))){
var inst_17347 = cljs.core.async.close_BANG_(out);
var state_17403__$1 = state_17403;
var statearr_17433_17461 = state_17403__$1;
(statearr_17433_17461[(2)] = inst_17347);

(statearr_17433_17461[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17404 === (14))){
var inst_17369 = (state_17403[(7)]);
var inst_17371 = cljs.core.chunked_seq_QMARK_(inst_17369);
var state_17403__$1 = state_17403;
if(inst_17371){
var statearr_17434_17462 = state_17403__$1;
(statearr_17434_17462[(1)] = (17));

} else {
var statearr_17435_17463 = state_17403__$1;
(statearr_17435_17463[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17404 === (16))){
var inst_17387 = (state_17403[(2)]);
var state_17403__$1 = state_17403;
var statearr_17436_17464 = state_17403__$1;
(statearr_17436_17464[(2)] = inst_17387);

(statearr_17436_17464[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17404 === (10))){
var inst_17358 = (state_17403[(10)]);
var inst_17356 = (state_17403[(12)]);
var inst_17363 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17356,inst_17358);
var state_17403__$1 = state_17403;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17403__$1,(13),out,inst_17363);
} else {
if((state_val_17404 === (18))){
var inst_17369 = (state_17403[(7)]);
var inst_17378 = cljs.core.first(inst_17369);
var state_17403__$1 = state_17403;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17403__$1,(20),out,inst_17378);
} else {
if((state_val_17404 === (8))){
var inst_17357 = (state_17403[(8)]);
var inst_17358 = (state_17403[(10)]);
var inst_17360 = (inst_17358 < inst_17357);
var inst_17361 = inst_17360;
var state_17403__$1 = state_17403;
if(cljs.core.truth_(inst_17361)){
var statearr_17437_17465 = state_17403__$1;
(statearr_17437_17465[(1)] = (10));

} else {
var statearr_17438_17466 = state_17403__$1;
(statearr_17438_17466[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__15783__auto__))
;
return ((function (switch__15681__auto__,c__15783__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15682__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15682__auto____0 = (function (){
var statearr_17439 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17439[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15682__auto__);

(statearr_17439[(1)] = (1));

return statearr_17439;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15682__auto____1 = (function (state_17403){
while(true){
var ret_value__15683__auto__ = (function (){try{while(true){
var result__15684__auto__ = switch__15681__auto__(state_17403);
if(cljs.core.keyword_identical_QMARK_(result__15684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15684__auto__;
}
break;
}
}catch (e17440){if((e17440 instanceof Object)){
var ex__15685__auto__ = e17440;
var statearr_17441_17467 = state_17403;
(statearr_17441_17467[(5)] = ex__15685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17403);

return cljs.core.cst$kw$recur;
} else {
throw e17440;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15683__auto__,cljs.core.cst$kw$recur)){
var G__17468 = state_17403;
state_17403 = G__17468;
continue;
} else {
return ret_value__15683__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15682__auto__ = function(state_17403){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15682__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15682__auto____1.call(this,state_17403);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15682__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15682__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15682__auto__;
})()
;})(switch__15681__auto__,c__15783__auto__))
})();
var state__15785__auto__ = (function (){var statearr_17442 = (f__15784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15784__auto__.cljs$core$IFn$_invoke$arity$0() : f__15784__auto__.call(null));
(statearr_17442[(6)] = c__15783__auto__);

return statearr_17442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15785__auto__);
});})(c__15783__auto__))
);

return c__15783__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17470 = arguments.length;
switch (G__17470) {
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
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17473 = arguments.length;
switch (G__17473) {
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
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17476 = arguments.length;
switch (G__17476) {
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
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15783__auto___17523 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15783__auto___17523,out){
return (function (){
var f__15784__auto__ = (function (){var switch__15681__auto__ = ((function (c__15783__auto___17523,out){
return (function (state_17500){
var state_val_17501 = (state_17500[(1)]);
if((state_val_17501 === (7))){
var inst_17495 = (state_17500[(2)]);
var state_17500__$1 = state_17500;
var statearr_17502_17524 = state_17500__$1;
(statearr_17502_17524[(2)] = inst_17495);

(statearr_17502_17524[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17501 === (1))){
var inst_17477 = null;
var state_17500__$1 = (function (){var statearr_17503 = state_17500;
(statearr_17503[(7)] = inst_17477);

return statearr_17503;
})();
var statearr_17504_17525 = state_17500__$1;
(statearr_17504_17525[(2)] = null);

(statearr_17504_17525[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17501 === (4))){
var inst_17480 = (state_17500[(8)]);
var inst_17480__$1 = (state_17500[(2)]);
var inst_17481 = (inst_17480__$1 == null);
var inst_17482 = cljs.core.not(inst_17481);
var state_17500__$1 = (function (){var statearr_17505 = state_17500;
(statearr_17505[(8)] = inst_17480__$1);

return statearr_17505;
})();
if(inst_17482){
var statearr_17506_17526 = state_17500__$1;
(statearr_17506_17526[(1)] = (5));

} else {
var statearr_17507_17527 = state_17500__$1;
(statearr_17507_17527[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17501 === (6))){
var state_17500__$1 = state_17500;
var statearr_17508_17528 = state_17500__$1;
(statearr_17508_17528[(2)] = null);

(statearr_17508_17528[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17501 === (3))){
var inst_17497 = (state_17500[(2)]);
var inst_17498 = cljs.core.async.close_BANG_(out);
var state_17500__$1 = (function (){var statearr_17509 = state_17500;
(statearr_17509[(9)] = inst_17497);

return statearr_17509;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17500__$1,inst_17498);
} else {
if((state_val_17501 === (2))){
var state_17500__$1 = state_17500;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17500__$1,(4),ch);
} else {
if((state_val_17501 === (11))){
var inst_17480 = (state_17500[(8)]);
var inst_17489 = (state_17500[(2)]);
var inst_17477 = inst_17480;
var state_17500__$1 = (function (){var statearr_17510 = state_17500;
(statearr_17510[(10)] = inst_17489);

(statearr_17510[(7)] = inst_17477);

return statearr_17510;
})();
var statearr_17511_17529 = state_17500__$1;
(statearr_17511_17529[(2)] = null);

(statearr_17511_17529[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17501 === (9))){
var inst_17480 = (state_17500[(8)]);
var state_17500__$1 = state_17500;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17500__$1,(11),out,inst_17480);
} else {
if((state_val_17501 === (5))){
var inst_17480 = (state_17500[(8)]);
var inst_17477 = (state_17500[(7)]);
var inst_17484 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17480,inst_17477);
var state_17500__$1 = state_17500;
if(inst_17484){
var statearr_17513_17530 = state_17500__$1;
(statearr_17513_17530[(1)] = (8));

} else {
var statearr_17514_17531 = state_17500__$1;
(statearr_17514_17531[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17501 === (10))){
var inst_17492 = (state_17500[(2)]);
var state_17500__$1 = state_17500;
var statearr_17515_17532 = state_17500__$1;
(statearr_17515_17532[(2)] = inst_17492);

(statearr_17515_17532[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17501 === (8))){
var inst_17477 = (state_17500[(7)]);
var tmp17512 = inst_17477;
var inst_17477__$1 = tmp17512;
var state_17500__$1 = (function (){var statearr_17516 = state_17500;
(statearr_17516[(7)] = inst_17477__$1);

return statearr_17516;
})();
var statearr_17517_17533 = state_17500__$1;
(statearr_17517_17533[(2)] = null);

(statearr_17517_17533[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__15783__auto___17523,out))
;
return ((function (switch__15681__auto__,c__15783__auto___17523,out){
return (function() {
var cljs$core$async$state_machine__15682__auto__ = null;
var cljs$core$async$state_machine__15682__auto____0 = (function (){
var statearr_17518 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17518[(0)] = cljs$core$async$state_machine__15682__auto__);

(statearr_17518[(1)] = (1));

return statearr_17518;
});
var cljs$core$async$state_machine__15682__auto____1 = (function (state_17500){
while(true){
var ret_value__15683__auto__ = (function (){try{while(true){
var result__15684__auto__ = switch__15681__auto__(state_17500);
if(cljs.core.keyword_identical_QMARK_(result__15684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15684__auto__;
}
break;
}
}catch (e17519){if((e17519 instanceof Object)){
var ex__15685__auto__ = e17519;
var statearr_17520_17534 = state_17500;
(statearr_17520_17534[(5)] = ex__15685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17500);

return cljs.core.cst$kw$recur;
} else {
throw e17519;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15683__auto__,cljs.core.cst$kw$recur)){
var G__17535 = state_17500;
state_17500 = G__17535;
continue;
} else {
return ret_value__15683__auto__;
}
break;
}
});
cljs$core$async$state_machine__15682__auto__ = function(state_17500){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15682__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15682__auto____1.call(this,state_17500);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15682__auto____0;
cljs$core$async$state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15682__auto____1;
return cljs$core$async$state_machine__15682__auto__;
})()
;})(switch__15681__auto__,c__15783__auto___17523,out))
})();
var state__15785__auto__ = (function (){var statearr_17521 = (f__15784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15784__auto__.cljs$core$IFn$_invoke$arity$0() : f__15784__auto__.call(null));
(statearr_17521[(6)] = c__15783__auto___17523);

return statearr_17521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15785__auto__);
});})(c__15783__auto___17523,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17537 = arguments.length;
switch (G__17537) {
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
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15783__auto___17603 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15783__auto___17603,out){
return (function (){
var f__15784__auto__ = (function (){var switch__15681__auto__ = ((function (c__15783__auto___17603,out){
return (function (state_17575){
var state_val_17576 = (state_17575[(1)]);
if((state_val_17576 === (7))){
var inst_17571 = (state_17575[(2)]);
var state_17575__$1 = state_17575;
var statearr_17577_17604 = state_17575__$1;
(statearr_17577_17604[(2)] = inst_17571);

(statearr_17577_17604[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17576 === (1))){
var inst_17538 = (new Array(n));
var inst_17539 = inst_17538;
var inst_17540 = (0);
var state_17575__$1 = (function (){var statearr_17578 = state_17575;
(statearr_17578[(7)] = inst_17539);

(statearr_17578[(8)] = inst_17540);

return statearr_17578;
})();
var statearr_17579_17605 = state_17575__$1;
(statearr_17579_17605[(2)] = null);

(statearr_17579_17605[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17576 === (4))){
var inst_17543 = (state_17575[(9)]);
var inst_17543__$1 = (state_17575[(2)]);
var inst_17544 = (inst_17543__$1 == null);
var inst_17545 = cljs.core.not(inst_17544);
var state_17575__$1 = (function (){var statearr_17580 = state_17575;
(statearr_17580[(9)] = inst_17543__$1);

return statearr_17580;
})();
if(inst_17545){
var statearr_17581_17606 = state_17575__$1;
(statearr_17581_17606[(1)] = (5));

} else {
var statearr_17582_17607 = state_17575__$1;
(statearr_17582_17607[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17576 === (15))){
var inst_17565 = (state_17575[(2)]);
var state_17575__$1 = state_17575;
var statearr_17583_17608 = state_17575__$1;
(statearr_17583_17608[(2)] = inst_17565);

(statearr_17583_17608[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17576 === (13))){
var state_17575__$1 = state_17575;
var statearr_17584_17609 = state_17575__$1;
(statearr_17584_17609[(2)] = null);

(statearr_17584_17609[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17576 === (6))){
var inst_17540 = (state_17575[(8)]);
var inst_17561 = (inst_17540 > (0));
var state_17575__$1 = state_17575;
if(cljs.core.truth_(inst_17561)){
var statearr_17585_17610 = state_17575__$1;
(statearr_17585_17610[(1)] = (12));

} else {
var statearr_17586_17611 = state_17575__$1;
(statearr_17586_17611[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17576 === (3))){
var inst_17573 = (state_17575[(2)]);
var state_17575__$1 = state_17575;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17575__$1,inst_17573);
} else {
if((state_val_17576 === (12))){
var inst_17539 = (state_17575[(7)]);
var inst_17563 = cljs.core.vec(inst_17539);
var state_17575__$1 = state_17575;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17575__$1,(15),out,inst_17563);
} else {
if((state_val_17576 === (2))){
var state_17575__$1 = state_17575;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17575__$1,(4),ch);
} else {
if((state_val_17576 === (11))){
var inst_17555 = (state_17575[(2)]);
var inst_17556 = (new Array(n));
var inst_17539 = inst_17556;
var inst_17540 = (0);
var state_17575__$1 = (function (){var statearr_17587 = state_17575;
(statearr_17587[(7)] = inst_17539);

(statearr_17587[(8)] = inst_17540);

(statearr_17587[(10)] = inst_17555);

return statearr_17587;
})();
var statearr_17588_17612 = state_17575__$1;
(statearr_17588_17612[(2)] = null);

(statearr_17588_17612[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17576 === (9))){
var inst_17539 = (state_17575[(7)]);
var inst_17553 = cljs.core.vec(inst_17539);
var state_17575__$1 = state_17575;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17575__$1,(11),out,inst_17553);
} else {
if((state_val_17576 === (5))){
var inst_17539 = (state_17575[(7)]);
var inst_17540 = (state_17575[(8)]);
var inst_17543 = (state_17575[(9)]);
var inst_17548 = (state_17575[(11)]);
var inst_17547 = (inst_17539[inst_17540] = inst_17543);
var inst_17548__$1 = (inst_17540 + (1));
var inst_17549 = (inst_17548__$1 < n);
var state_17575__$1 = (function (){var statearr_17589 = state_17575;
(statearr_17589[(11)] = inst_17548__$1);

(statearr_17589[(12)] = inst_17547);

return statearr_17589;
})();
if(cljs.core.truth_(inst_17549)){
var statearr_17590_17613 = state_17575__$1;
(statearr_17590_17613[(1)] = (8));

} else {
var statearr_17591_17614 = state_17575__$1;
(statearr_17591_17614[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17576 === (14))){
var inst_17568 = (state_17575[(2)]);
var inst_17569 = cljs.core.async.close_BANG_(out);
var state_17575__$1 = (function (){var statearr_17593 = state_17575;
(statearr_17593[(13)] = inst_17568);

return statearr_17593;
})();
var statearr_17594_17615 = state_17575__$1;
(statearr_17594_17615[(2)] = inst_17569);

(statearr_17594_17615[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17576 === (10))){
var inst_17559 = (state_17575[(2)]);
var state_17575__$1 = state_17575;
var statearr_17595_17616 = state_17575__$1;
(statearr_17595_17616[(2)] = inst_17559);

(statearr_17595_17616[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17576 === (8))){
var inst_17539 = (state_17575[(7)]);
var inst_17548 = (state_17575[(11)]);
var tmp17592 = inst_17539;
var inst_17539__$1 = tmp17592;
var inst_17540 = inst_17548;
var state_17575__$1 = (function (){var statearr_17596 = state_17575;
(statearr_17596[(7)] = inst_17539__$1);

(statearr_17596[(8)] = inst_17540);

return statearr_17596;
})();
var statearr_17597_17617 = state_17575__$1;
(statearr_17597_17617[(2)] = null);

(statearr_17597_17617[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__15783__auto___17603,out))
;
return ((function (switch__15681__auto__,c__15783__auto___17603,out){
return (function() {
var cljs$core$async$state_machine__15682__auto__ = null;
var cljs$core$async$state_machine__15682__auto____0 = (function (){
var statearr_17598 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17598[(0)] = cljs$core$async$state_machine__15682__auto__);

(statearr_17598[(1)] = (1));

return statearr_17598;
});
var cljs$core$async$state_machine__15682__auto____1 = (function (state_17575){
while(true){
var ret_value__15683__auto__ = (function (){try{while(true){
var result__15684__auto__ = switch__15681__auto__(state_17575);
if(cljs.core.keyword_identical_QMARK_(result__15684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15684__auto__;
}
break;
}
}catch (e17599){if((e17599 instanceof Object)){
var ex__15685__auto__ = e17599;
var statearr_17600_17618 = state_17575;
(statearr_17600_17618[(5)] = ex__15685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17575);

return cljs.core.cst$kw$recur;
} else {
throw e17599;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15683__auto__,cljs.core.cst$kw$recur)){
var G__17619 = state_17575;
state_17575 = G__17619;
continue;
} else {
return ret_value__15683__auto__;
}
break;
}
});
cljs$core$async$state_machine__15682__auto__ = function(state_17575){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15682__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15682__auto____1.call(this,state_17575);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15682__auto____0;
cljs$core$async$state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15682__auto____1;
return cljs$core$async$state_machine__15682__auto__;
})()
;})(switch__15681__auto__,c__15783__auto___17603,out))
})();
var state__15785__auto__ = (function (){var statearr_17601 = (f__15784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15784__auto__.cljs$core$IFn$_invoke$arity$0() : f__15784__auto__.call(null));
(statearr_17601[(6)] = c__15783__auto___17603);

return statearr_17601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15785__auto__);
});})(c__15783__auto___17603,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17621 = arguments.length;
switch (G__17621) {
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
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15783__auto___17691 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15783__auto___17691,out){
return (function (){
var f__15784__auto__ = (function (){var switch__15681__auto__ = ((function (c__15783__auto___17691,out){
return (function (state_17663){
var state_val_17664 = (state_17663[(1)]);
if((state_val_17664 === (7))){
var inst_17659 = (state_17663[(2)]);
var state_17663__$1 = state_17663;
var statearr_17665_17692 = state_17663__$1;
(statearr_17665_17692[(2)] = inst_17659);

(statearr_17665_17692[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17664 === (1))){
var inst_17622 = [];
var inst_17623 = inst_17622;
var inst_17624 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_17663__$1 = (function (){var statearr_17666 = state_17663;
(statearr_17666[(7)] = inst_17623);

(statearr_17666[(8)] = inst_17624);

return statearr_17666;
})();
var statearr_17667_17693 = state_17663__$1;
(statearr_17667_17693[(2)] = null);

(statearr_17667_17693[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17664 === (4))){
var inst_17627 = (state_17663[(9)]);
var inst_17627__$1 = (state_17663[(2)]);
var inst_17628 = (inst_17627__$1 == null);
var inst_17629 = cljs.core.not(inst_17628);
var state_17663__$1 = (function (){var statearr_17668 = state_17663;
(statearr_17668[(9)] = inst_17627__$1);

return statearr_17668;
})();
if(inst_17629){
var statearr_17669_17694 = state_17663__$1;
(statearr_17669_17694[(1)] = (5));

} else {
var statearr_17670_17695 = state_17663__$1;
(statearr_17670_17695[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17664 === (15))){
var inst_17653 = (state_17663[(2)]);
var state_17663__$1 = state_17663;
var statearr_17671_17696 = state_17663__$1;
(statearr_17671_17696[(2)] = inst_17653);

(statearr_17671_17696[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17664 === (13))){
var state_17663__$1 = state_17663;
var statearr_17672_17697 = state_17663__$1;
(statearr_17672_17697[(2)] = null);

(statearr_17672_17697[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17664 === (6))){
var inst_17623 = (state_17663[(7)]);
var inst_17648 = inst_17623.length;
var inst_17649 = (inst_17648 > (0));
var state_17663__$1 = state_17663;
if(cljs.core.truth_(inst_17649)){
var statearr_17673_17698 = state_17663__$1;
(statearr_17673_17698[(1)] = (12));

} else {
var statearr_17674_17699 = state_17663__$1;
(statearr_17674_17699[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17664 === (3))){
var inst_17661 = (state_17663[(2)]);
var state_17663__$1 = state_17663;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17663__$1,inst_17661);
} else {
if((state_val_17664 === (12))){
var inst_17623 = (state_17663[(7)]);
var inst_17651 = cljs.core.vec(inst_17623);
var state_17663__$1 = state_17663;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17663__$1,(15),out,inst_17651);
} else {
if((state_val_17664 === (2))){
var state_17663__$1 = state_17663;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17663__$1,(4),ch);
} else {
if((state_val_17664 === (11))){
var inst_17631 = (state_17663[(10)]);
var inst_17627 = (state_17663[(9)]);
var inst_17641 = (state_17663[(2)]);
var inst_17642 = [];
var inst_17643 = inst_17642.push(inst_17627);
var inst_17623 = inst_17642;
var inst_17624 = inst_17631;
var state_17663__$1 = (function (){var statearr_17675 = state_17663;
(statearr_17675[(11)] = inst_17643);

(statearr_17675[(7)] = inst_17623);

(statearr_17675[(8)] = inst_17624);

(statearr_17675[(12)] = inst_17641);

return statearr_17675;
})();
var statearr_17676_17700 = state_17663__$1;
(statearr_17676_17700[(2)] = null);

(statearr_17676_17700[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17664 === (9))){
var inst_17623 = (state_17663[(7)]);
var inst_17639 = cljs.core.vec(inst_17623);
var state_17663__$1 = state_17663;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17663__$1,(11),out,inst_17639);
} else {
if((state_val_17664 === (5))){
var inst_17631 = (state_17663[(10)]);
var inst_17624 = (state_17663[(8)]);
var inst_17627 = (state_17663[(9)]);
var inst_17631__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17627) : f.call(null,inst_17627));
var inst_17632 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17631__$1,inst_17624);
var inst_17633 = cljs.core.keyword_identical_QMARK_(inst_17624,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_17634 = (inst_17632) || (inst_17633);
var state_17663__$1 = (function (){var statearr_17677 = state_17663;
(statearr_17677[(10)] = inst_17631__$1);

return statearr_17677;
})();
if(cljs.core.truth_(inst_17634)){
var statearr_17678_17701 = state_17663__$1;
(statearr_17678_17701[(1)] = (8));

} else {
var statearr_17679_17702 = state_17663__$1;
(statearr_17679_17702[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17664 === (14))){
var inst_17656 = (state_17663[(2)]);
var inst_17657 = cljs.core.async.close_BANG_(out);
var state_17663__$1 = (function (){var statearr_17681 = state_17663;
(statearr_17681[(13)] = inst_17656);

return statearr_17681;
})();
var statearr_17682_17703 = state_17663__$1;
(statearr_17682_17703[(2)] = inst_17657);

(statearr_17682_17703[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17664 === (10))){
var inst_17646 = (state_17663[(2)]);
var state_17663__$1 = state_17663;
var statearr_17683_17704 = state_17663__$1;
(statearr_17683_17704[(2)] = inst_17646);

(statearr_17683_17704[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17664 === (8))){
var inst_17623 = (state_17663[(7)]);
var inst_17631 = (state_17663[(10)]);
var inst_17627 = (state_17663[(9)]);
var inst_17636 = inst_17623.push(inst_17627);
var tmp17680 = inst_17623;
var inst_17623__$1 = tmp17680;
var inst_17624 = inst_17631;
var state_17663__$1 = (function (){var statearr_17684 = state_17663;
(statearr_17684[(14)] = inst_17636);

(statearr_17684[(7)] = inst_17623__$1);

(statearr_17684[(8)] = inst_17624);

return statearr_17684;
})();
var statearr_17685_17705 = state_17663__$1;
(statearr_17685_17705[(2)] = null);

(statearr_17685_17705[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__15783__auto___17691,out))
;
return ((function (switch__15681__auto__,c__15783__auto___17691,out){
return (function() {
var cljs$core$async$state_machine__15682__auto__ = null;
var cljs$core$async$state_machine__15682__auto____0 = (function (){
var statearr_17686 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17686[(0)] = cljs$core$async$state_machine__15682__auto__);

(statearr_17686[(1)] = (1));

return statearr_17686;
});
var cljs$core$async$state_machine__15682__auto____1 = (function (state_17663){
while(true){
var ret_value__15683__auto__ = (function (){try{while(true){
var result__15684__auto__ = switch__15681__auto__(state_17663);
if(cljs.core.keyword_identical_QMARK_(result__15684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15684__auto__;
}
break;
}
}catch (e17687){if((e17687 instanceof Object)){
var ex__15685__auto__ = e17687;
var statearr_17688_17706 = state_17663;
(statearr_17688_17706[(5)] = ex__15685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17663);

return cljs.core.cst$kw$recur;
} else {
throw e17687;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15683__auto__,cljs.core.cst$kw$recur)){
var G__17707 = state_17663;
state_17663 = G__17707;
continue;
} else {
return ret_value__15683__auto__;
}
break;
}
});
cljs$core$async$state_machine__15682__auto__ = function(state_17663){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15682__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15682__auto____1.call(this,state_17663);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15682__auto____0;
cljs$core$async$state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15682__auto____1;
return cljs$core$async$state_machine__15682__auto__;
})()
;})(switch__15681__auto__,c__15783__auto___17691,out))
})();
var state__15785__auto__ = (function (){var statearr_17689 = (f__15784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15784__auto__.cljs$core$IFn$_invoke$arity$0() : f__15784__auto__.call(null));
(statearr_17689[(6)] = c__15783__auto___17691);

return statearr_17689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15785__auto__);
});})(c__15783__auto___17691,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

