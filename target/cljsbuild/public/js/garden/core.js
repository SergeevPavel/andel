// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('garden.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
garden.core.css = (function garden$core$css(var_args){
var args__8918__auto__ = [];
var len__8911__auto___19657 = arguments.length;
var i__8912__auto___19658 = (0);
while(true){
if((i__8912__auto___19658 < len__8911__auto___19657)){
args__8918__auto__.push((arguments[i__8912__auto___19658]));

var G__19659 = (i__8912__auto___19658 + (1));
i__8912__auto___19658 = G__19659;
continue;
} else {
}
break;
}

var argseq__8919__auto__ = ((((0) < args__8918__auto__.length))?(new cljs.core.IndexedSeq(args__8918__auto__.slice((0)),(0),null)):null);
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__8919__auto__);
});

garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(garden.compiler.compile_css,rules);
});

garden.core.css.cljs$lang$maxFixedArity = (0);

garden.core.css.cljs$lang$applyTo = (function (seq19656){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19656));
});

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__8918__auto__ = [];
var len__8911__auto___19661 = arguments.length;
var i__8912__auto___19662 = (0);
while(true){
if((i__8912__auto___19662 < len__8911__auto___19661)){
args__8918__auto__.push((arguments[i__8912__auto___19662]));

var G__19663 = (i__8912__auto___19662 + (1));
i__8912__auto___19662 = G__19663;
continue;
} else {
}
break;
}

var argseq__8919__auto__ = ((((0) < args__8918__auto__.length))?(new cljs.core.IndexedSeq(args__8918__auto__.slice((0)),(0),null)):null);
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__8919__auto__);
});

garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return garden.compiler.compile_style(maps);
});

garden.core.style.cljs$lang$maxFixedArity = (0);

garden.core.style.cljs$lang$applyTo = (function (seq19660){
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19660));
});

