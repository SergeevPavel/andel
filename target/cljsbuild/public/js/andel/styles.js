// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('andel.styles');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('garden.core');
andel.styles.head = (function andel$styles$head(){
return (document.getElementsByTagName("head")[(0)]);
});
andel.styles.body = (function andel$styles$body(){
return document.body;
});
andel.styles.wait_for_all = (function andel$styles$wait_for_all(prs){
return null;
});
andel.styles.include_script = (function andel$styles$include_script(src){
var e = document.createElement("script");
var res = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var G__19666_19667 = e;
G__19666_19667.setAttribute("type","text/javascript");

G__19666_19667.setAttribute("src",src);


(e["onload"] = ((function (e,res){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(res,cljs.core.cst$kw$done);
});})(e,res))
);

andel.styles.head().appendChild(e);

return res;
});
andel.styles.include_style = (function andel$styles$include_style(src,cb){
var e = document.createElement("link");
(e["onload"] = cb);

var G__19668_19669 = e;
G__19668_19669.setAttribute("type","text/css");

G__19668_19669.setAttribute("rel","stylesheet");

G__19668_19669.setAttribute("href",src);


return andel.styles.head().appendChild(e);
});
andel.styles.defstyle_impl = (function andel$styles$defstyle_impl(var_args){
var G__19671 = arguments.length;
switch (G__19671) {
case 2:
return andel.styles.defstyle_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return andel.styles.defstyle_impl.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

andel.styles.defstyle_impl.cljs$core$IFn$_invoke$arity$2 = (function (key,style){
var id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("style_"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(key)?cljs.core.name(key):cljs.core.hash_coll(style)))].join('');
var e = (function (){var or__7678__auto__ = document.getElementById(id);
if(cljs.core.truth_(or__7678__auto__)){
return or__7678__auto__;
} else {
var e = document.createElement("style");
(e["id"] = id);

(e["type"] = "text/css");

andel.styles.head().appendChild(e);

return e;
}
})();
var css = garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0));
return (e["innerHTML"] = css);
});

andel.styles.defstyle_impl.cljs$core$IFn$_invoke$arity$1 = (function (style){
return andel.styles.defstyle_impl.cljs$core$IFn$_invoke$arity$2(null,style);
});

andel.styles.defstyle_impl.cljs$lang$maxFixedArity = 2;

if(typeof andel.styles.defstyle !== 'undefined'){
} else {
andel.styles.defstyle = cljs.core.memoize(andel.styles.defstyle_impl);
}
andel.styles.style__GT_class = (function andel$styles$style__GT_class(style){
var name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("style__"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash_coll(style))].join('');
var G__19673_19674 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),style], null);
(andel.styles.defstyle.cljs$core$IFn$_invoke$arity$1 ? andel.styles.defstyle.cljs$core$IFn$_invoke$arity$1(G__19673_19674) : andel.styles.defstyle.call(null,G__19673_19674));

return name;
});
andel.styles.px = (function andel$styles$px(x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join('');
});
