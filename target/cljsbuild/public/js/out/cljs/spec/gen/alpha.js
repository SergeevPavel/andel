// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__41721__auto__,writer__41722__auto__,opt__41723__auto__){
return cljs.core._write.call(null,writer__41722__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66768 = arguments.length;
var i__42298__auto___66769 = (0);
while(true){
if((i__42298__auto___66769 < len__42297__auto___66768)){
args__42304__auto__.push((arguments[i__42298__auto___66769]));

var G__66770 = (i__42298__auto___66769 + (1));
i__42298__auto___66769 = G__66770;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq66767){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66767));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66772 = arguments.length;
var i__42298__auto___66773 = (0);
while(true){
if((i__42298__auto___66773 < len__42297__auto___66772)){
args__42304__auto__.push((arguments[i__42298__auto___66773]));

var G__66774 = (i__42298__auto___66773 + (1));
i__42298__auto___66773 = G__66774;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq66771){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66771));
});

var g_QMARK__66775 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_66776 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__66775){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__66775))
,null));
var mkg_66777 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__66775,g_66776){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__66775,g_66776))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__66775,g_66776,mkg_66777){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__66775).call(null,x);
});})(g_QMARK__66775,g_66776,mkg_66777))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__66775,g_66776,mkg_66777){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_66777).call(null,gfn);
});})(g_QMARK__66775,g_66776,mkg_66777))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__66775,g_66776,mkg_66777){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_66776).call(null,generator);
});})(g_QMARK__66775,g_66776,mkg_66777))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__42403__auto___66797 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__42403__auto___66797){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66798 = arguments.length;
var i__42298__auto___66799 = (0);
while(true){
if((i__42298__auto___66799 < len__42297__auto___66798)){
args__42304__auto__.push((arguments[i__42298__auto___66799]));

var G__66800 = (i__42298__auto___66799 + (1));
i__42298__auto___66799 = G__66800;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});})(g__42403__auto___66797))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42403__auto___66797){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42403__auto___66797),args);
});})(g__42403__auto___66797))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__42403__auto___66797){
return (function (seq66778){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66778));
});})(g__42403__auto___66797))
;


var g__42403__auto___66801 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__42403__auto___66801){
return (function cljs$spec$gen$alpha$list(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66802 = arguments.length;
var i__42298__auto___66803 = (0);
while(true){
if((i__42298__auto___66803 < len__42297__auto___66802)){
args__42304__auto__.push((arguments[i__42298__auto___66803]));

var G__66804 = (i__42298__auto___66803 + (1));
i__42298__auto___66803 = G__66804;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});})(g__42403__auto___66801))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42403__auto___66801){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42403__auto___66801),args);
});})(g__42403__auto___66801))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__42403__auto___66801){
return (function (seq66779){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66779));
});})(g__42403__auto___66801))
;


var g__42403__auto___66805 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__42403__auto___66805){
return (function cljs$spec$gen$alpha$map(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66806 = arguments.length;
var i__42298__auto___66807 = (0);
while(true){
if((i__42298__auto___66807 < len__42297__auto___66806)){
args__42304__auto__.push((arguments[i__42298__auto___66807]));

var G__66808 = (i__42298__auto___66807 + (1));
i__42298__auto___66807 = G__66808;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});})(g__42403__auto___66805))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42403__auto___66805){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42403__auto___66805),args);
});})(g__42403__auto___66805))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__42403__auto___66805){
return (function (seq66780){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66780));
});})(g__42403__auto___66805))
;


var g__42403__auto___66809 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__42403__auto___66809){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66810 = arguments.length;
var i__42298__auto___66811 = (0);
while(true){
if((i__42298__auto___66811 < len__42297__auto___66810)){
args__42304__auto__.push((arguments[i__42298__auto___66811]));

var G__66812 = (i__42298__auto___66811 + (1));
i__42298__auto___66811 = G__66812;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});})(g__42403__auto___66809))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42403__auto___66809){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42403__auto___66809),args);
});})(g__42403__auto___66809))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__42403__auto___66809){
return (function (seq66781){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66781));
});})(g__42403__auto___66809))
;


var g__42403__auto___66813 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__42403__auto___66813){
return (function cljs$spec$gen$alpha$set(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66814 = arguments.length;
var i__42298__auto___66815 = (0);
while(true){
if((i__42298__auto___66815 < len__42297__auto___66814)){
args__42304__auto__.push((arguments[i__42298__auto___66815]));

var G__66816 = (i__42298__auto___66815 + (1));
i__42298__auto___66815 = G__66816;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});})(g__42403__auto___66813))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42403__auto___66813){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42403__auto___66813),args);
});})(g__42403__auto___66813))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__42403__auto___66813){
return (function (seq66782){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66782));
});})(g__42403__auto___66813))
;


var g__42403__auto___66817 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__42403__auto___66817){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66818 = arguments.length;
var i__42298__auto___66819 = (0);
while(true){
if((i__42298__auto___66819 < len__42297__auto___66818)){
args__42304__auto__.push((arguments[i__42298__auto___66819]));

var G__66820 = (i__42298__auto___66819 + (1));
i__42298__auto___66819 = G__66820;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});})(g__42403__auto___66817))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42403__auto___66817){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42403__auto___66817),args);
});})(g__42403__auto___66817))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__42403__auto___66817){
return (function (seq66783){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66783));
});})(g__42403__auto___66817))
;


var g__42403__auto___66821 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__42403__auto___66821){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66822 = arguments.length;
var i__42298__auto___66823 = (0);
while(true){
if((i__42298__auto___66823 < len__42297__auto___66822)){
args__42304__auto__.push((arguments[i__42298__auto___66823]));

var G__66824 = (i__42298__auto___66823 + (1));
i__42298__auto___66823 = G__66824;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});})(g__42403__auto___66821))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42403__auto___66821){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42403__auto___66821),args);
});})(g__42403__auto___66821))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__42403__auto___66821){
return (function (seq66784){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66784));
});})(g__42403__auto___66821))
;


var g__42403__auto___66825 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__42403__auto___66825){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66826 = arguments.length;
var i__42298__auto___66827 = (0);
while(true){
if((i__42298__auto___66827 < len__42297__auto___66826)){
args__42304__auto__.push((arguments[i__42298__auto___66827]));

var G__66828 = (i__42298__auto___66827 + (1));
i__42298__auto___66827 = G__66828;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});})(g__42403__auto___66825))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42403__auto___66825){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42403__auto___66825),args);
});})(g__42403__auto___66825))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__42403__auto___66825){
return (function (seq66785){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66785));
});})(g__42403__auto___66825))
;


var g__42403__auto___66829 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__42403__auto___66829){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66830 = arguments.length;
var i__42298__auto___66831 = (0);
while(true){
if((i__42298__auto___66831 < len__42297__auto___66830)){
args__42304__auto__.push((arguments[i__42298__auto___66831]));

var G__66832 = (i__42298__auto___66831 + (1));
i__42298__auto___66831 = G__66832;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});})(g__42403__auto___66829))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42403__auto___66829){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42403__auto___66829),args);
});})(g__42403__auto___66829))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__42403__auto___66829){
return (function (seq66786){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66786));
});})(g__42403__auto___66829))
;


var g__42403__auto___66833 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__42403__auto___66833){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66834 = arguments.length;
var i__42298__auto___66835 = (0);
while(true){
if((i__42298__auto___66835 < len__42297__auto___66834)){
args__42304__auto__.push((arguments[i__42298__auto___66835]));

var G__66836 = (i__42298__auto___66835 + (1));
i__42298__auto___66835 = G__66836;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});})(g__42403__auto___66833))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42403__auto___66833){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42403__auto___66833),args);
});})(g__42403__auto___66833))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__42403__auto___66833){
return (function (seq66787){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66787));
});})(g__42403__auto___66833))
;


var g__42403__auto___66837 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__42403__auto___66837){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66838 = arguments.length;
var i__42298__auto___66839 = (0);
while(true){
if((i__42298__auto___66839 < len__42297__auto___66838)){
args__42304__auto__.push((arguments[i__42298__auto___66839]));

var G__66840 = (i__42298__auto___66839 + (1));
i__42298__auto___66839 = G__66840;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});})(g__42403__auto___66837))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42403__auto___66837){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42403__auto___66837),args);
});})(g__42403__auto___66837))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__42403__auto___66837){
return (function (seq66788){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66788));
});})(g__42403__auto___66837))
;


var g__42403__auto___66841 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__42403__auto___66841){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66842 = arguments.length;
var i__42298__auto___66843 = (0);
while(true){
if((i__42298__auto___66843 < len__42297__auto___66842)){
args__42304__auto__.push((arguments[i__42298__auto___66843]));

var G__66844 = (i__42298__auto___66843 + (1));
i__42298__auto___66843 = G__66844;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});})(g__42403__auto___66841))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42403__auto___66841){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42403__auto___66841),args);
});})(g__42403__auto___66841))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__42403__auto___66841){
return (function (seq66789){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66789));
});})(g__42403__auto___66841))
;


var g__42403__auto___66845 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__42403__auto___66845){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66846 = arguments.length;
var i__42298__auto___66847 = (0);
while(true){
if((i__42298__auto___66847 < len__42297__auto___66846)){
args__42304__auto__.push((arguments[i__42298__auto___66847]));

var G__66848 = (i__42298__auto___66847 + (1));
i__42298__auto___66847 = G__66848;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});})(g__42403__auto___66845))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42403__auto___66845){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42403__auto___66845),args);
});})(g__42403__auto___66845))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__42403__auto___66845){
return (function (seq66790){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66790));
});})(g__42403__auto___66845))
;


var g__42403__auto___66849 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__42403__auto___66849){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66850 = arguments.length;
var i__42298__auto___66851 = (0);
while(true){
if((i__42298__auto___66851 < len__42297__auto___66850)){
args__42304__auto__.push((arguments[i__42298__auto___66851]));

var G__66852 = (i__42298__auto___66851 + (1));
i__42298__auto___66851 = G__66852;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});})(g__42403__auto___66849))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42403__auto___66849){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42403__auto___66849),args);
});})(g__42403__auto___66849))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__42403__auto___66849){
return (function (seq66791){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66791));
});})(g__42403__auto___66849))
;


var g__42403__auto___66853 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__42403__auto___66853){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66854 = arguments.length;
var i__42298__auto___66855 = (0);
while(true){
if((i__42298__auto___66855 < len__42297__auto___66854)){
args__42304__auto__.push((arguments[i__42298__auto___66855]));

var G__66856 = (i__42298__auto___66855 + (1));
i__42298__auto___66855 = G__66856;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});})(g__42403__auto___66853))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42403__auto___66853){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42403__auto___66853),args);
});})(g__42403__auto___66853))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__42403__auto___66853){
return (function (seq66792){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66792));
});})(g__42403__auto___66853))
;


var g__42403__auto___66857 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__42403__auto___66857){
return (function cljs$spec$gen$alpha$return(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66858 = arguments.length;
var i__42298__auto___66859 = (0);
while(true){
if((i__42298__auto___66859 < len__42297__auto___66858)){
args__42304__auto__.push((arguments[i__42298__auto___66859]));

var G__66860 = (i__42298__auto___66859 + (1));
i__42298__auto___66859 = G__66860;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});})(g__42403__auto___66857))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42403__auto___66857){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42403__auto___66857),args);
});})(g__42403__auto___66857))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__42403__auto___66857){
return (function (seq66793){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66793));
});})(g__42403__auto___66857))
;


var g__42403__auto___66861 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__42403__auto___66861){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66862 = arguments.length;
var i__42298__auto___66863 = (0);
while(true){
if((i__42298__auto___66863 < len__42297__auto___66862)){
args__42304__auto__.push((arguments[i__42298__auto___66863]));

var G__66864 = (i__42298__auto___66863 + (1));
i__42298__auto___66863 = G__66864;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});})(g__42403__auto___66861))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42403__auto___66861){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42403__auto___66861),args);
});})(g__42403__auto___66861))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__42403__auto___66861){
return (function (seq66794){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66794));
});})(g__42403__auto___66861))
;


var g__42403__auto___66865 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__42403__auto___66865){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66866 = arguments.length;
var i__42298__auto___66867 = (0);
while(true){
if((i__42298__auto___66867 < len__42297__auto___66866)){
args__42304__auto__.push((arguments[i__42298__auto___66867]));

var G__66868 = (i__42298__auto___66867 + (1));
i__42298__auto___66867 = G__66868;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});})(g__42403__auto___66865))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42403__auto___66865){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42403__auto___66865),args);
});})(g__42403__auto___66865))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__42403__auto___66865){
return (function (seq66795){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66795));
});})(g__42403__auto___66865))
;


var g__42403__auto___66869 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__42403__auto___66869){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66870 = arguments.length;
var i__42298__auto___66871 = (0);
while(true){
if((i__42298__auto___66871 < len__42297__auto___66870)){
args__42304__auto__.push((arguments[i__42298__auto___66871]));

var G__66872 = (i__42298__auto___66871 + (1));
i__42298__auto___66871 = G__66872;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});})(g__42403__auto___66869))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42403__auto___66869){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__42403__auto___66869),args);
});})(g__42403__auto___66869))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__42403__auto___66869){
return (function (seq66796){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66796));
});})(g__42403__auto___66869))
;

var g__42416__auto___66894 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__42416__auto___66894){
return (function cljs$spec$gen$alpha$any(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66895 = arguments.length;
var i__42298__auto___66896 = (0);
while(true){
if((i__42298__auto___66896 < len__42297__auto___66895)){
args__42304__auto__.push((arguments[i__42298__auto___66896]));

var G__66897 = (i__42298__auto___66896 + (1));
i__42298__auto___66896 = G__66897;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});})(g__42416__auto___66894))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42416__auto___66894){
return (function (args){
return cljs.core.deref.call(null,g__42416__auto___66894);
});})(g__42416__auto___66894))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__42416__auto___66894){
return (function (seq66873){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66873));
});})(g__42416__auto___66894))
;


var g__42416__auto___66898 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__42416__auto___66898){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66899 = arguments.length;
var i__42298__auto___66900 = (0);
while(true){
if((i__42298__auto___66900 < len__42297__auto___66899)){
args__42304__auto__.push((arguments[i__42298__auto___66900]));

var G__66901 = (i__42298__auto___66900 + (1));
i__42298__auto___66900 = G__66901;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});})(g__42416__auto___66898))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42416__auto___66898){
return (function (args){
return cljs.core.deref.call(null,g__42416__auto___66898);
});})(g__42416__auto___66898))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__42416__auto___66898){
return (function (seq66874){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66874));
});})(g__42416__auto___66898))
;


var g__42416__auto___66902 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__42416__auto___66902){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66903 = arguments.length;
var i__42298__auto___66904 = (0);
while(true){
if((i__42298__auto___66904 < len__42297__auto___66903)){
args__42304__auto__.push((arguments[i__42298__auto___66904]));

var G__66905 = (i__42298__auto___66904 + (1));
i__42298__auto___66904 = G__66905;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});})(g__42416__auto___66902))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42416__auto___66902){
return (function (args){
return cljs.core.deref.call(null,g__42416__auto___66902);
});})(g__42416__auto___66902))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__42416__auto___66902){
return (function (seq66875){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66875));
});})(g__42416__auto___66902))
;


var g__42416__auto___66906 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__42416__auto___66906){
return (function cljs$spec$gen$alpha$char(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66907 = arguments.length;
var i__42298__auto___66908 = (0);
while(true){
if((i__42298__auto___66908 < len__42297__auto___66907)){
args__42304__auto__.push((arguments[i__42298__auto___66908]));

var G__66909 = (i__42298__auto___66908 + (1));
i__42298__auto___66908 = G__66909;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});})(g__42416__auto___66906))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42416__auto___66906){
return (function (args){
return cljs.core.deref.call(null,g__42416__auto___66906);
});})(g__42416__auto___66906))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__42416__auto___66906){
return (function (seq66876){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66876));
});})(g__42416__auto___66906))
;


var g__42416__auto___66910 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__42416__auto___66910){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66911 = arguments.length;
var i__42298__auto___66912 = (0);
while(true){
if((i__42298__auto___66912 < len__42297__auto___66911)){
args__42304__auto__.push((arguments[i__42298__auto___66912]));

var G__66913 = (i__42298__auto___66912 + (1));
i__42298__auto___66912 = G__66913;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});})(g__42416__auto___66910))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42416__auto___66910){
return (function (args){
return cljs.core.deref.call(null,g__42416__auto___66910);
});})(g__42416__auto___66910))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__42416__auto___66910){
return (function (seq66877){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66877));
});})(g__42416__auto___66910))
;


var g__42416__auto___66914 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__42416__auto___66914){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66915 = arguments.length;
var i__42298__auto___66916 = (0);
while(true){
if((i__42298__auto___66916 < len__42297__auto___66915)){
args__42304__auto__.push((arguments[i__42298__auto___66916]));

var G__66917 = (i__42298__auto___66916 + (1));
i__42298__auto___66916 = G__66917;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});})(g__42416__auto___66914))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42416__auto___66914){
return (function (args){
return cljs.core.deref.call(null,g__42416__auto___66914);
});})(g__42416__auto___66914))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__42416__auto___66914){
return (function (seq66878){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66878));
});})(g__42416__auto___66914))
;


var g__42416__auto___66918 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__42416__auto___66918){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66919 = arguments.length;
var i__42298__auto___66920 = (0);
while(true){
if((i__42298__auto___66920 < len__42297__auto___66919)){
args__42304__auto__.push((arguments[i__42298__auto___66920]));

var G__66921 = (i__42298__auto___66920 + (1));
i__42298__auto___66920 = G__66921;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});})(g__42416__auto___66918))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42416__auto___66918){
return (function (args){
return cljs.core.deref.call(null,g__42416__auto___66918);
});})(g__42416__auto___66918))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__42416__auto___66918){
return (function (seq66879){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66879));
});})(g__42416__auto___66918))
;


var g__42416__auto___66922 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__42416__auto___66922){
return (function cljs$spec$gen$alpha$double(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66923 = arguments.length;
var i__42298__auto___66924 = (0);
while(true){
if((i__42298__auto___66924 < len__42297__auto___66923)){
args__42304__auto__.push((arguments[i__42298__auto___66924]));

var G__66925 = (i__42298__auto___66924 + (1));
i__42298__auto___66924 = G__66925;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});})(g__42416__auto___66922))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42416__auto___66922){
return (function (args){
return cljs.core.deref.call(null,g__42416__auto___66922);
});})(g__42416__auto___66922))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__42416__auto___66922){
return (function (seq66880){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66880));
});})(g__42416__auto___66922))
;


var g__42416__auto___66926 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__42416__auto___66926){
return (function cljs$spec$gen$alpha$int(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66927 = arguments.length;
var i__42298__auto___66928 = (0);
while(true){
if((i__42298__auto___66928 < len__42297__auto___66927)){
args__42304__auto__.push((arguments[i__42298__auto___66928]));

var G__66929 = (i__42298__auto___66928 + (1));
i__42298__auto___66928 = G__66929;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});})(g__42416__auto___66926))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42416__auto___66926){
return (function (args){
return cljs.core.deref.call(null,g__42416__auto___66926);
});})(g__42416__auto___66926))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__42416__auto___66926){
return (function (seq66881){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66881));
});})(g__42416__auto___66926))
;


var g__42416__auto___66930 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__42416__auto___66930){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66931 = arguments.length;
var i__42298__auto___66932 = (0);
while(true){
if((i__42298__auto___66932 < len__42297__auto___66931)){
args__42304__auto__.push((arguments[i__42298__auto___66932]));

var G__66933 = (i__42298__auto___66932 + (1));
i__42298__auto___66932 = G__66933;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});})(g__42416__auto___66930))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42416__auto___66930){
return (function (args){
return cljs.core.deref.call(null,g__42416__auto___66930);
});})(g__42416__auto___66930))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__42416__auto___66930){
return (function (seq66882){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66882));
});})(g__42416__auto___66930))
;


var g__42416__auto___66934 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__42416__auto___66934){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66935 = arguments.length;
var i__42298__auto___66936 = (0);
while(true){
if((i__42298__auto___66936 < len__42297__auto___66935)){
args__42304__auto__.push((arguments[i__42298__auto___66936]));

var G__66937 = (i__42298__auto___66936 + (1));
i__42298__auto___66936 = G__66937;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});})(g__42416__auto___66934))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42416__auto___66934){
return (function (args){
return cljs.core.deref.call(null,g__42416__auto___66934);
});})(g__42416__auto___66934))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__42416__auto___66934){
return (function (seq66883){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66883));
});})(g__42416__auto___66934))
;


var g__42416__auto___66938 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__42416__auto___66938){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66939 = arguments.length;
var i__42298__auto___66940 = (0);
while(true){
if((i__42298__auto___66940 < len__42297__auto___66939)){
args__42304__auto__.push((arguments[i__42298__auto___66940]));

var G__66941 = (i__42298__auto___66940 + (1));
i__42298__auto___66940 = G__66941;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});})(g__42416__auto___66938))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42416__auto___66938){
return (function (args){
return cljs.core.deref.call(null,g__42416__auto___66938);
});})(g__42416__auto___66938))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__42416__auto___66938){
return (function (seq66884){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66884));
});})(g__42416__auto___66938))
;


var g__42416__auto___66942 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__42416__auto___66942){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66943 = arguments.length;
var i__42298__auto___66944 = (0);
while(true){
if((i__42298__auto___66944 < len__42297__auto___66943)){
args__42304__auto__.push((arguments[i__42298__auto___66944]));

var G__66945 = (i__42298__auto___66944 + (1));
i__42298__auto___66944 = G__66945;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});})(g__42416__auto___66942))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42416__auto___66942){
return (function (args){
return cljs.core.deref.call(null,g__42416__auto___66942);
});})(g__42416__auto___66942))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__42416__auto___66942){
return (function (seq66885){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66885));
});})(g__42416__auto___66942))
;


var g__42416__auto___66946 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__42416__auto___66946){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66947 = arguments.length;
var i__42298__auto___66948 = (0);
while(true){
if((i__42298__auto___66948 < len__42297__auto___66947)){
args__42304__auto__.push((arguments[i__42298__auto___66948]));

var G__66949 = (i__42298__auto___66948 + (1));
i__42298__auto___66948 = G__66949;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});})(g__42416__auto___66946))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42416__auto___66946){
return (function (args){
return cljs.core.deref.call(null,g__42416__auto___66946);
});})(g__42416__auto___66946))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__42416__auto___66946){
return (function (seq66886){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66886));
});})(g__42416__auto___66946))
;


var g__42416__auto___66950 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__42416__auto___66950){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66951 = arguments.length;
var i__42298__auto___66952 = (0);
while(true){
if((i__42298__auto___66952 < len__42297__auto___66951)){
args__42304__auto__.push((arguments[i__42298__auto___66952]));

var G__66953 = (i__42298__auto___66952 + (1));
i__42298__auto___66952 = G__66953;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});})(g__42416__auto___66950))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42416__auto___66950){
return (function (args){
return cljs.core.deref.call(null,g__42416__auto___66950);
});})(g__42416__auto___66950))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__42416__auto___66950){
return (function (seq66887){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66887));
});})(g__42416__auto___66950))
;


var g__42416__auto___66954 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__42416__auto___66954){
return (function cljs$spec$gen$alpha$string(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66955 = arguments.length;
var i__42298__auto___66956 = (0);
while(true){
if((i__42298__auto___66956 < len__42297__auto___66955)){
args__42304__auto__.push((arguments[i__42298__auto___66956]));

var G__66957 = (i__42298__auto___66956 + (1));
i__42298__auto___66956 = G__66957;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});})(g__42416__auto___66954))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42416__auto___66954){
return (function (args){
return cljs.core.deref.call(null,g__42416__auto___66954);
});})(g__42416__auto___66954))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__42416__auto___66954){
return (function (seq66888){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66888));
});})(g__42416__auto___66954))
;


var g__42416__auto___66958 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__42416__auto___66958){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66959 = arguments.length;
var i__42298__auto___66960 = (0);
while(true){
if((i__42298__auto___66960 < len__42297__auto___66959)){
args__42304__auto__.push((arguments[i__42298__auto___66960]));

var G__66961 = (i__42298__auto___66960 + (1));
i__42298__auto___66960 = G__66961;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});})(g__42416__auto___66958))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42416__auto___66958){
return (function (args){
return cljs.core.deref.call(null,g__42416__auto___66958);
});})(g__42416__auto___66958))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__42416__auto___66958){
return (function (seq66889){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66889));
});})(g__42416__auto___66958))
;


var g__42416__auto___66962 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__42416__auto___66962){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66963 = arguments.length;
var i__42298__auto___66964 = (0);
while(true){
if((i__42298__auto___66964 < len__42297__auto___66963)){
args__42304__auto__.push((arguments[i__42298__auto___66964]));

var G__66965 = (i__42298__auto___66964 + (1));
i__42298__auto___66964 = G__66965;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});})(g__42416__auto___66962))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42416__auto___66962){
return (function (args){
return cljs.core.deref.call(null,g__42416__auto___66962);
});})(g__42416__auto___66962))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__42416__auto___66962){
return (function (seq66890){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66890));
});})(g__42416__auto___66962))
;


var g__42416__auto___66966 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__42416__auto___66966){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66967 = arguments.length;
var i__42298__auto___66968 = (0);
while(true){
if((i__42298__auto___66968 < len__42297__auto___66967)){
args__42304__auto__.push((arguments[i__42298__auto___66968]));

var G__66969 = (i__42298__auto___66968 + (1));
i__42298__auto___66968 = G__66969;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});})(g__42416__auto___66966))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42416__auto___66966){
return (function (args){
return cljs.core.deref.call(null,g__42416__auto___66966);
});})(g__42416__auto___66966))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__42416__auto___66966){
return (function (seq66891){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66891));
});})(g__42416__auto___66966))
;


var g__42416__auto___66970 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__42416__auto___66970){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66971 = arguments.length;
var i__42298__auto___66972 = (0);
while(true){
if((i__42298__auto___66972 < len__42297__auto___66971)){
args__42304__auto__.push((arguments[i__42298__auto___66972]));

var G__66973 = (i__42298__auto___66972 + (1));
i__42298__auto___66972 = G__66973;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});})(g__42416__auto___66970))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42416__auto___66970){
return (function (args){
return cljs.core.deref.call(null,g__42416__auto___66970);
});})(g__42416__auto___66970))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__42416__auto___66970){
return (function (seq66892){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66892));
});})(g__42416__auto___66970))
;


var g__42416__auto___66974 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__42416__auto___66974){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66975 = arguments.length;
var i__42298__auto___66976 = (0);
while(true){
if((i__42298__auto___66976 < len__42297__auto___66975)){
args__42304__auto__.push((arguments[i__42298__auto___66976]));

var G__66977 = (i__42298__auto___66976 + (1));
i__42298__auto___66976 = G__66977;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});})(g__42416__auto___66974))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__42416__auto___66974){
return (function (args){
return cljs.core.deref.call(null,g__42416__auto___66974);
});})(g__42416__auto___66974))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__42416__auto___66974){
return (function (seq66893){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66893));
});})(g__42416__auto___66974))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__42304__auto__ = [];
var len__42297__auto___66980 = arguments.length;
var i__42298__auto___66981 = (0);
while(true){
if((i__42298__auto___66981 < len__42297__auto___66980)){
args__42304__auto__.push((arguments[i__42298__auto___66981]));

var G__66982 = (i__42298__auto___66981 + (1));
i__42298__auto___66981 = G__66982;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__66978_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__66978_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq66979){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66979));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__66983_SHARP_){
return (new Date(p1__66983_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1504289163254