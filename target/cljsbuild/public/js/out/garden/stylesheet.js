// Compiled by ClojureScript 1.9.671 {}
goog.provide('garden.stylesheet');
goog.require('cljs.core');
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
var args__42304__auto__ = [];
var len__42297__auto___64401 = arguments.length;
var i__42298__auto___64402 = (0);
while(true){
if((i__42298__auto___64402 < len__42297__auto___64401)){
args__42304__auto__.push((arguments[i__42298__auto___64402]));

var G__64403 = (i__42298__auto___64402 + (1));
i__42298__auto___64402 = G__64403;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((1) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42305__auto__);
});

garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if(!(((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))){
throw cljs.core.ex_info.call(null,"Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__64404__delegate = function (children){
return cljs.core.into.call(null,cljs.core.apply.call(null,cljs.core.vector,selector,more),children);
};
var G__64404 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__64405__i = 0, G__64405__a = new Array(arguments.length -  0);
while (G__64405__i < G__64405__a.length) {G__64405__a[G__64405__i] = arguments[G__64405__i + 0]; ++G__64405__i;}
  children = new cljs.core.IndexedSeq(G__64405__a,0,null);
} 
return G__64404__delegate.call(this,children);};
G__64404.cljs$lang$maxFixedArity = 0;
G__64404.cljs$lang$applyTo = (function (arglist__64406){
var children = cljs.core.seq(arglist__64406);
return G__64404__delegate(children);
});
G__64404.cljs$core$IFn$_invoke$arity$variadic = G__64404__delegate;
return G__64404;
})()
;
}
});

garden.stylesheet.rule.cljs$lang$maxFixedArity = (1);

garden.stylesheet.rule.cljs$lang$applyTo = (function (seq64399){
var G__64400 = cljs.core.first.call(null,seq64399);
var seq64399__$1 = cljs.core.next.call(null,seq64399);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic(G__64400,seq64399__$1);
});

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__64407__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__64407 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64408__i = 0, G__64408__a = new Array(arguments.length -  0);
while (G__64408__i < G__64408__a.length) {G__64408__a[G__64408__i] = arguments[G__64408__i + 0]; ++G__64408__i;}
  args = new cljs.core.IndexedSeq(G__64408__a,0,null);
} 
return G__64407__delegate.call(this,args);};
G__64407.cljs$lang$maxFixedArity = 0;
G__64407.cljs$lang$applyTo = (function (arglist__64409){
var args = cljs.core.seq(arglist__64409);
return G__64407__delegate(args);
});
G__64407.cljs$core$IFn$_invoke$arity$variadic = G__64407__delegate;
return G__64407;
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
var args__42304__auto__ = [];
var len__42297__auto___64411 = arguments.length;
var i__42298__auto___64412 = (0);
while(true){
if((i__42298__auto___64412 < len__42297__auto___64411)){
args__42304__auto__.push((arguments[i__42298__auto___64412]));

var G__64413 = (i__42298__auto___64412 + (1));
i__42298__auto___64412 = G__64413;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((0) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((0)),(0),null)):null);
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__42305__auto__);
});

garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
});

garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0);

garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq64410){
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64410));
});

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__64417 = arguments.length;
switch (G__64417) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__42320__auto__ = [];
var len__42297__auto___64419 = arguments.length;
var i__42298__auto___64420 = (0);
while(true){
if((i__42298__auto___64420 < len__42297__auto___64419)){
args_arr__42320__auto__.push((arguments[i__42298__auto___64420]));

var G__64421 = (i__42298__auto___64420 + (1));
i__42298__auto___64420 = G__64421;
continue;
} else {
}
break;
}

var argseq__42321__auto__ = (new cljs.core.IndexedSeq(args_arr__42320__auto__.slice((1)),(0),null));
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42321__auto__);

}
});

garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
});

garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
});

garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq64415){
var G__64416 = cljs.core.first.call(null,seq64415);
var seq64415__$1 = cljs.core.next.call(null,seq64415);
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic(G__64416,seq64415__$1);
});

garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1);

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__42304__auto__ = [];
var len__42297__auto___64424 = arguments.length;
var i__42298__auto___64425 = (0);
while(true){
if((i__42298__auto___64425 < len__42297__auto___64424)){
args__42304__auto__.push((arguments[i__42298__auto___64425]));

var G__64426 = (i__42298__auto___64425 + (1));
i__42298__auto___64425 = G__64426;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((1) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42305__auto__);
});

garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
});

garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1);

garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq64422){
var G__64423 = cljs.core.first.call(null,seq64422);
var seq64422__$1 = cljs.core.next.call(null,seq64422);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic(G__64423,seq64422__$1);
});

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__42304__auto__ = [];
var len__42297__auto___64429 = arguments.length;
var i__42298__auto___64430 = (0);
while(true){
if((i__42298__auto___64430 < len__42297__auto___64429)){
args__42304__auto__.push((arguments[i__42298__auto___64430]));

var G__64431 = (i__42298__auto___64430 + (1));
i__42298__auto___64430 = G__64431;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((1) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42305__auto__);
});

garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
});

garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1);

garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq64427){
var G__64428 = cljs.core.first.call(null,seq64427);
var seq64427__$1 = cljs.core.next.call(null,seq64427);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic(G__64428,seq64427__$1);
});

/**
 * Create a color from RGB values.
 */
garden.stylesheet.rgb = (function garden$stylesheet$rgb(r,g,b){
return garden.color.rgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
garden.stylesheet.hsl = (function garden$stylesheet$hsl(h,s,l){
return garden.color.hsl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=stylesheet.js.map?rel=1504289160767