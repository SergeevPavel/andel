// Compiled by ClojureScript 1.9.671 {}
goog.provide('garden.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('garden.types');
goog.require('goog.string');
goog.require('goog.string.format');
/**
 * Formats a string using goog.string.format.
 */
garden.util.format = (function garden$util$format(var_args){
var args__42304__auto__ = [];
var len__42297__auto___62363 = arguments.length;
var i__42298__auto___62364 = (0);
while(true){
if((i__42298__auto___62364 < len__42297__auto___62363)){
args__42304__auto__.push((arguments[i__42298__auto___62364]));

var G__62365 = (i__42298__auto___62364 + (1));
i__42298__auto___62364 = G__62365;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((1) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((1)),(0),null)):null);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42305__auto__);
});

garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

garden.util.format.cljs$lang$maxFixedArity = (1);

garden.util.format.cljs$lang$applyTo = (function (seq62361){
var G__62362 = cljs.core.first.call(null,seq62361);
var seq62361__$1 = cljs.core.next.call(null,seq62361);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic(G__62362,seq62361__$1);
});


/**
 * @interface
 */
garden.util.ToString = function(){};

/**
 * Convert a value into a string.
 */
garden.util.to_str = (function garden$util$to_str(this$){
if((!((this$ == null))) && (!((this$.garden$util$ToString$to_str$arity$1 == null)))){
return this$.garden$util$ToString$to_str$arity$1(this$);
} else {
var x__41783__auto__ = (((this$ == null))?null:this$);
var m__41784__auto__ = (garden.util.to_str[goog.typeOf(x__41783__auto__)]);
if(!((m__41784__auto__ == null))){
return m__41784__auto__.call(null,this$);
} else {
var m__41784__auto____$1 = (garden.util.to_str["_"]);
if(!((m__41784__auto____$1 == null))){
return m__41784__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ToString.to-str",this$);
}
}
}
});

cljs.core.Keyword.prototype.garden$util$ToString$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.garden$util$ToString$to_str$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name.call(null,this$__$1);
});

(garden.util.ToString["_"] = true);

(garden.util.to_str["_"] = (function (this$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
}));

(garden.util.ToString["null"] = true);

(garden.util.to_str["null"] = (function (this$){
return "";
}));
/**
 * Convert a variable number of values into strings.
 */
garden.util.as_str = (function garden$util$as_str(var_args){
var args__42304__auto__ = [];
var len__42297__auto___62367 = arguments.length;
var i__42298__auto___62368 = (0);
while(true){
if((i__42298__auto___62368 < len__42297__auto___62367)){
args__42304__auto__.push((arguments[i__42298__auto___62368]));

var G__62369 = (i__42298__auto___62368 + (1));
i__42298__auto___62368 = G__62369;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});

garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,garden.util.to_str,args));
});

garden.util.as_str.cljs$lang$maxFixedArity = (0);

garden.util.as_str.cljs$lang$applyTo = (function (seq62366){
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62366));
});

/**
 * Convert a string to an integer with optional base.
 */
garden.util.string__GT_int = (function garden$util$string__GT_int(var_args){
var args__42304__auto__ = [];
var len__42297__auto___62376 = arguments.length;
var i__42298__auto___62377 = (0);
while(true){
if((i__42298__auto___62377 < len__42297__auto___62376)){
args__42304__auto__.push((arguments[i__42298__auto___62377]));

var G__62378 = (i__42298__auto___62377 + (1));
i__42298__auto___62377 = G__62378;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((1) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((1)),(0),null)):null);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42305__auto__);
});

garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__62372){
var vec__62373 = p__62372;
var radix = cljs.core.nth.call(null,vec__62373,(0),null);
var radix__$1 = (function (){var or__41064__auto__ = radix;
if(cljs.core.truth_(or__41064__auto__)){
return or__41064__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
});

garden.util.string__GT_int.cljs$lang$maxFixedArity = (1);

garden.util.string__GT_int.cljs$lang$applyTo = (function (seq62370){
var G__62371 = cljs.core.first.call(null,seq62370);
var seq62370__$1 = cljs.core.next.call(null,seq62370);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic(G__62371,seq62370__$1);
});

/**
 * Convert an integer to a string with optional base.
 */
garden.util.int__GT_string = (function garden$util$int__GT_string(var_args){
var args__42304__auto__ = [];
var len__42297__auto___62385 = arguments.length;
var i__42298__auto___62386 = (0);
while(true){
if((i__42298__auto___62386 < len__42297__auto___62385)){
args__42304__auto__.push((arguments[i__42298__auto___62386]));

var G__62387 = (i__42298__auto___62386 + (1));
i__42298__auto___62386 = G__62387;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((1) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((1)),(0),null)):null);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42305__auto__);
});

garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__62381){
var vec__62382 = p__62381;
var radix = cljs.core.nth.call(null,vec__62382,(0),null);
var radix__$1 = (function (){var or__41064__auto__ = radix;
if(cljs.core.truth_(or__41064__auto__)){
return or__41064__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
});

garden.util.int__GT_string.cljs$lang$maxFixedArity = (1);

garden.util.int__GT_string.cljs$lang$applyTo = (function (seq62379){
var G__62380 = cljs.core.first.call(null,seq62379);
var seq62379__$1 = cljs.core.next.call(null,seq62379);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic(G__62380,seq62379__$1);
});

/**
 * Return a space separated list of values.
 */
garden.util.space_join = (function garden$util$space_join(xs){
return clojure.string.join.call(null," ",cljs.core.map.call(null,garden.util.to_str,xs));
});
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
garden.util.comma_join = (function garden$util$comma_join(xs){
var ys = (function (){var iter__41927__auto__ = (function garden$util$comma_join_$_iter__62388(s__62389){
return (new cljs.core.LazySeq(null,(function (){
var s__62389__$1 = s__62389;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__62389__$1);
if(temp__5278__auto__){
var s__62389__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__62389__$2)){
var c__41925__auto__ = cljs.core.chunk_first.call(null,s__62389__$2);
var size__41926__auto__ = cljs.core.count.call(null,c__41925__auto__);
var b__62391 = cljs.core.chunk_buffer.call(null,size__41926__auto__);
if((function (){var i__62390 = (0);
while(true){
if((i__62390 < size__41926__auto__)){
var x = cljs.core._nth.call(null,c__41925__auto__,i__62390);
cljs.core.chunk_append.call(null,b__62391,((cljs.core.sequential_QMARK_.call(null,x))?garden.util.space_join.call(null,x):garden.util.to_str.call(null,x)));

var G__62392 = (i__62390 + (1));
i__62390 = G__62392;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62391),garden$util$comma_join_$_iter__62388.call(null,cljs.core.chunk_rest.call(null,s__62389__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62391),null);
}
} else {
var x = cljs.core.first.call(null,s__62389__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?garden.util.space_join.call(null,x):garden.util.to_str.call(null,x)),garden$util$comma_join_$_iter__62388.call(null,cljs.core.rest.call(null,s__62389__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__41927__auto__.call(null,xs);
})();
return clojure.string.join.call(null,", ",ys);
});
/**
 * Wrap a string with double quotes.
 */
garden.util.wrap_quotes = (function garden$util$wrap_quotes(s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
/**
 * True if `(map? x)` and `x` does not satisfy `clojure.lang.IRecord`.
 */
garden.util.hash_map_QMARK_ = (function garden$util$hash_map_QMARK_(x){
return (cljs.core.map_QMARK_.call(null,x)) && (!(cljs.core.record_QMARK_.call(null,x)));
});
/**
 * Alias to `vector?`.
 */
garden.util.rule_QMARK_ = cljs.core.vector_QMARK_;
/**
 * Alias to `hash-map?`.
 */
garden.util.declaration_QMARK_ = garden.util.hash_map_QMARK_;
garden.util.at_rule_QMARK_ = (function garden$util$at_rule_QMARK_(x){
return (x instanceof garden.types.CSSAtRule);
});
/**
 * True if `x` is a CSS `@media` rule.
 */
garden.util.at_media_QMARK_ = (function garden$util$at_media_QMARK_(x){
var and__41052__auto__ = garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__41052__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"media","media",-1066138403));
} else {
return and__41052__auto__;
}
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
garden.util.at_keyframes_QMARK_ = (function garden$util$at_keyframes_QMARK_(x){
var and__41052__auto__ = garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__41052__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012));
} else {
return and__41052__auto__;
}
});
/**
 * True if `x` is a CSS `@import` rule.
 */
garden.util.at_import_QMARK_ = (function garden$util$at_import_QMARK_(x){
var and__41052__auto__ = garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__41052__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"import","import",-1399500709));
} else {
return and__41052__auto__;
}
});
/**
 * Attach a CSS style prefix to s.
 */
garden.util.prefix = (function garden$util$prefix(p,s){
var p__$1 = garden.util.to_str.call(null,p);
if(cljs.core._EQ_.call(null,"-",cljs.core.last.call(null,p__$1))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}
});
/**
 * Attach a CSS vendor prefix to s.
 */
garden.util.vendor_prefix = (function garden$util$vendor_prefix(p,s){
var p__$1 = garden.util.to_str.call(null,p);
if(cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,p__$1))){
return garden.util.prefix.call(null,p__$1,s);
} else {
return garden.util.prefix.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1)].join(''),s);
}
});
/**
 * True if n is a natural number.
 */
garden.util.natural_QMARK_ = (function garden$util$natural_QMARK_(n){
return (cljs.core.integer_QMARK_.call(null,n)) && ((n > (0)));
});
/**
 * True if n is a number between a and b.
 */
garden.util.between_QMARK_ = (function garden$util$between_QMARK_(n,a,b){
var bottom = (function (){var x__41409__auto__ = a;
var y__41410__auto__ = b;
return ((x__41409__auto__ < y__41410__auto__) ? x__41409__auto__ : y__41410__auto__);
})();
var top = (function (){var x__41402__auto__ = a;
var y__41403__auto__ = b;
return ((x__41402__auto__ > y__41403__auto__) ? x__41402__auto__ : y__41403__auto__);
})();
return ((n >= bottom)) && ((n <= top));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
garden.util.clip = (function garden$util$clip(a,b,n){
var vec__62393 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.call(null,vec__62393,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__62393,(1),null);
var x__41402__auto__ = a__$1;
var y__41403__auto__ = (function (){var x__41409__auto__ = b__$1;
var y__41410__auto__ = n;
return ((x__41409__auto__ < y__41410__auto__) ? x__41409__auto__ : y__41410__auto__);
})();
return ((x__41402__auto__ > y__41403__auto__) ? x__41402__auto__ : y__41403__auto__);
});
/**
 * Return the average of two or more numbers.
 */
garden.util.average = (function garden$util$average(var_args){
var args__42304__auto__ = [];
var len__42297__auto___62399 = arguments.length;
var i__42298__auto___62400 = (0);
while(true){
if((i__42298__auto___62400 < len__42297__auto___62399)){
args__42304__auto__.push((arguments[i__42298__auto___62400]));

var G__62401 = (i__42298__auto___62400 + (1));
i__42298__auto___62400 = G__62401;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((2) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((2)),(0),null)):null);
return garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__42305__auto__);
});

garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.call(null,cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count.call(null,more)));
});

garden.util.average.cljs$lang$maxFixedArity = (2);

garden.util.average.cljs$lang$applyTo = (function (seq62396){
var G__62397 = cljs.core.first.call(null,seq62396);
var seq62396__$1 = cljs.core.next.call(null,seq62396);
var G__62398 = cljs.core.first.call(null,seq62396__$1);
var seq62396__$2 = cljs.core.next.call(null,seq62396__$1);
return garden.util.average.cljs$core$IFn$_invoke$arity$variadic(G__62397,G__62398,seq62396__$2);
});

/**
 * All the ways to take one item from each sequence.
 */
garden.util.cartesian_product = (function garden$util$cartesian_product(var_args){
var args__42304__auto__ = [];
var len__42297__auto___62403 = arguments.length;
var i__42298__auto___62404 = (0);
while(true){
if((i__42298__auto___62404 < len__42297__auto___62403)){
args__42304__auto__.push((arguments[i__42298__auto___62404]));

var G__62405 = (i__42298__auto___62404 + (1));
i__42298__auto___62404 = G__62405;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});

garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec.call(null,seqs);
var step = ((function (v_original_seqs){
return (function garden$util$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count.call(null,v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.call(null,i,(-1))){
return null;
} else {
var temp__5276__auto__ = cljs.core.next.call(null,v_seqs__$2.call(null,i));
if(temp__5276__auto__){
var rst = temp__5276__auto__;
return cljs.core.assoc.call(null,v_seqs__$2,i,rst);
} else {
var G__62406 = (i - (1));
var G__62407 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__62406;
v_seqs__$2 = G__62407;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons.call(null,cljs.core.map.call(null,cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return garden$util$step.call(null,increment.call(null,v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step.call(null,v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

garden.util.cartesian_product.cljs$lang$maxFixedArity = (0);

garden.util.cartesian_product.cljs$lang$applyTo = (function (seq62402){
return garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62402));
});


//# sourceMappingURL=util.js.map?rel=1504289157322