// Compiled by ClojureScript 1.9.671 {}
goog.provide('andel.styles');
goog.require('cljs.core');
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
var res = cljs.core.async.promise_chan.call(null);
var G__62906_62907 = e;
G__62906_62907.setAttribute("type","text/javascript");

G__62906_62907.setAttribute("src",src);


(e["onload"] = ((function (e,res){
return (function (){
return cljs.core.async.put_BANG_.call(null,res,new cljs.core.Keyword(null,"done","done",-889844188));
});})(e,res))
);

andel.styles.head.call(null).appendChild(e);

return res;
});
andel.styles.include_style = (function andel$styles$include_style(src,cb){
var e = document.createElement("link");
(e["onload"] = cb);

var G__62908_62909 = e;
G__62908_62909.setAttribute("type","text/css");

G__62908_62909.setAttribute("rel","stylesheet");

G__62908_62909.setAttribute("href",src);


return andel.styles.head.call(null).appendChild(e);
});
andel.styles.defstyle_impl = (function andel$styles$defstyle_impl(var_args){
var G__62911 = arguments.length;
switch (G__62911) {
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
var id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("style_"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(key)?cljs.core.name.call(null,key):cljs.core.hash_coll.call(null,style)))].join('');
var e = (function (){var or__41064__auto__ = document.getElementById(id);
if(cljs.core.truth_(or__41064__auto__)){
return or__41064__auto__;
} else {
var e = document.createElement("style");
(e["id"] = id);

(e["type"] = "text/css");

andel.styles.head.call(null).appendChild(e);

return e;
}
})();
var css = garden.core.css.call(null,style);
return (e["innerHTML"] = css);
});

andel.styles.defstyle_impl.cljs$core$IFn$_invoke$arity$1 = (function (style){
return andel.styles.defstyle_impl.call(null,null,style);
});

andel.styles.defstyle_impl.cljs$lang$maxFixedArity = 2;

if(typeof andel.styles.defstyle !== 'undefined'){
} else {
andel.styles.defstyle = cljs.core.memoize.call(null,andel.styles.defstyle_impl);
}
andel.styles.style__GT_class = (function andel$styles$style__GT_class(style){
var name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("style__"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash_coll.call(null,style))].join('');
andel.styles.defstyle.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),style], null));

return name;
});
andel.styles.px = (function andel$styles$px(x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join('');
});

//# sourceMappingURL=styles.js.map?rel=1504289158553