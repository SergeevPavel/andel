// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('garden.stylesheet');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('garden.util');
goog.require('garden.color');
goog.require('garden.types');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
garden.stylesheet.rule = (function garden$stylesheet$rule(var_args){
var args__8918__auto__ = [];
var len__8911__auto___21274 = arguments.length;
var i__8912__auto___21275 = (0);
while(true){
if((i__8912__auto___21275 < len__8911__auto___21274)){
args__8918__auto__.push((arguments[i__8912__auto___21275]));

var G__21276 = (i__8912__auto___21275 + (1));
i__8912__auto___21275 = G__21276;
continue;
} else {
}
break;
}

var argseq__8919__auto__ = ((((1) < args__8918__auto__.length))?(new cljs.core.IndexedSeq(args__8918__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8919__auto__);
});

garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if(!(((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__21277__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__21277 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__21278__i = 0, G__21278__a = new Array(arguments.length -  0);
while (G__21278__i < G__21278__a.length) {G__21278__a[G__21278__i] = arguments[G__21278__i + 0]; ++G__21278__i;}
  children = new cljs.core.IndexedSeq(G__21278__a,0,null);
} 
return G__21277__delegate.call(this,children);};
G__21277.cljs$lang$maxFixedArity = 0;
G__21277.cljs$lang$applyTo = (function (arglist__21279){
var children = cljs.core.seq(arglist__21279);
return G__21277__delegate(children);
});
G__21277.cljs$core$IFn$_invoke$arity$variadic = G__21277__delegate;
return G__21277;
})()
;
}
});

garden.stylesheet.rule.cljs$lang$maxFixedArity = (1);

garden.stylesheet.rule.cljs$lang$applyTo = (function (seq21272){
var G__21273 = cljs.core.first(seq21272);
var seq21272__$1 = cljs.core.next(seq21272);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic(G__21273,seq21272__$1);
});

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__21280__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__21280 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21281__i = 0, G__21281__a = new Array(arguments.length -  0);
while (G__21281__i < G__21281__a.length) {G__21281__a[G__21281__i] = arguments[G__21281__i + 0]; ++G__21281__i;}
  args = new cljs.core.IndexedSeq(G__21281__a,0,null);
} 
return G__21280__delegate.call(this,args);};
G__21280.cljs$lang$maxFixedArity = 0;
G__21280.cljs$lang$applyTo = (function (arglist__21282){
var args = cljs.core.seq(arglist__21282);
return G__21280__delegate(args);
});
G__21280.cljs$core$IFn$_invoke$arity$variadic = G__21280__delegate;
return G__21280;
})()
;
});
garden.stylesheet.at_rule = (function garden$stylesheet$at_rule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
garden.stylesheet.at_font_face = (function garden$stylesheet$at_font_face(var_args){
var args__8918__auto__ = [];
var len__8911__auto___21284 = arguments.length;
var i__8912__auto___21285 = (0);
while(true){
if((i__8912__auto___21285 < len__8911__auto___21284)){
args__8918__auto__.push((arguments[i__8912__auto___21285]));

var G__21286 = (i__8912__auto___21285 + (1));
i__8912__auto___21285 = G__21286;
continue;
} else {
}
break;
}

var argseq__8919__auto__ = ((((0) < args__8918__auto__.length))?(new cljs.core.IndexedSeq(args__8918__auto__.slice((0)),(0),null)):null);
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__8919__auto__);
});

garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
});

garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0);

garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq21283){
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21283));
});

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__21290 = arguments.length;
switch (G__21290) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__8934__auto__ = [];
var len__8911__auto___21292 = arguments.length;
var i__8912__auto___21293 = (0);
while(true){
if((i__8912__auto___21293 < len__8911__auto___21292)){
args_arr__8934__auto__.push((arguments[i__8912__auto___21293]));

var G__21294 = (i__8912__auto___21293 + (1));
i__8912__auto___21293 = G__21294;
continue;
} else {
}
break;
}

var argseq__8935__auto__ = (new cljs.core.IndexedSeq(args_arr__8934__auto__.slice((1)),(0),null));
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8935__auto__);

}
});

garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return garden.stylesheet.at_rule(cljs.core.cst$kw$import,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$url,url,cljs.core.cst$kw$media_DASH_queries,null], null));
});

garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule(cljs.core.cst$kw$import,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$url,url,cljs.core.cst$kw$media_DASH_queries,media_queries], null));
});

garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq21288){
var G__21289 = cljs.core.first(seq21288);
var seq21288__$1 = cljs.core.next(seq21288);
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic(G__21289,seq21288__$1);
});

garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1);

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__8918__auto__ = [];
var len__8911__auto___21297 = arguments.length;
var i__8912__auto___21298 = (0);
while(true){
if((i__8912__auto___21298 < len__8911__auto___21297)){
args__8918__auto__.push((arguments[i__8912__auto___21298]));

var G__21299 = (i__8912__auto___21298 + (1));
i__8912__auto___21298 = G__21299;
continue;
} else {
}
break;
}

var argseq__8919__auto__ = ((((1) < args__8918__auto__.length))?(new cljs.core.IndexedSeq(args__8918__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8919__auto__);
});

garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule(cljs.core.cst$kw$media,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$media_DASH_queries,media_queries,cljs.core.cst$kw$rules,rules], null));
});

garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1);

garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq21295){
var G__21296 = cljs.core.first(seq21295);
var seq21295__$1 = cljs.core.next(seq21295);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic(G__21296,seq21295__$1);
});

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__8918__auto__ = [];
var len__8911__auto___21302 = arguments.length;
var i__8912__auto___21303 = (0);
while(true){
if((i__8912__auto___21303 < len__8911__auto___21302)){
args__8918__auto__.push((arguments[i__8912__auto___21303]));

var G__21304 = (i__8912__auto___21303 + (1));
i__8912__auto___21303 = G__21304;
continue;
} else {
}
break;
}

var argseq__8919__auto__ = ((((1) < args__8918__auto__.length))?(new cljs.core.IndexedSeq(args__8918__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8919__auto__);
});

garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule(cljs.core.cst$kw$keyframes,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$identifier,identifier,cljs.core.cst$kw$frames,frames], null));
});

garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1);

garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq21300){
var G__21301 = cljs.core.first(seq21300);
var seq21300__$1 = cljs.core.next(seq21300);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic(G__21301,seq21300__$1);
});

/**
 * Create a color from RGB values.
 */
garden.stylesheet.rgb = (function garden$stylesheet$rgb(r,g,b){
return garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
garden.stylesheet.hsl = (function garden$stylesheet$hsl(h,s,l){
return garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});
