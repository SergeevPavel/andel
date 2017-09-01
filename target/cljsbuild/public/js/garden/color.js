// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('garden.color');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('garden.util');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
garden.color.CSSColor = (function (red,green,blue,hue,saturation,lightness,alpha,__meta,__extmap,__hash){
this.red = red;
this.green = green;
this.blue = blue;
this.hue = hue;
this.saturation = saturation;
this.lightness = lightness;
this.alpha = alpha;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667595;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
garden.color.CSSColor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8352__auto__,k__8353__auto__){
var self__ = this;
var this__8352__auto____$1 = this;
return this__8352__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8353__auto__,null);
});

garden.color.CSSColor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8354__auto__,k18979,else__8355__auto__){
var self__ = this;
var this__8354__auto____$1 = this;
var G__18984 = k18979;
var G__18984__$1 = (((G__18984 instanceof cljs.core.Keyword))?G__18984.fqn:null);
switch (G__18984__$1) {
case "red":
return self__.red;

break;
case "green":
return self__.green;

break;
case "blue":
return self__.blue;

break;
case "hue":
return self__.hue;

break;
case "saturation":
return self__.saturation;

break;
case "lightness":
return self__.lightness;

break;
case "alpha":
return self__.alpha;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18979,else__8355__auto__);

}
});

garden.color.CSSColor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8366__auto__,writer__8367__auto__,opts__8368__auto__){
var self__ = this;
var this__8366__auto____$1 = this;
var pr_pair__8369__auto__ = ((function (this__8366__auto____$1){
return (function (keyval__8370__auto__){
return cljs.core.pr_sequential_writer(writer__8367__auto__,cljs.core.pr_writer,""," ","",opts__8368__auto__,keyval__8370__auto__);
});})(this__8366__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8367__auto__,pr_pair__8369__auto__,"#garden.color.CSSColor{",", ","}",opts__8368__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$red,self__.red],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$green,self__.green],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$blue,self__.blue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$hue,self__.hue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$saturation,self__.saturation],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$lightness,self__.lightness],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$alpha,self__.alpha],null))], null),self__.__extmap));
});

garden.color.CSSColor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18978){
var self__ = this;
var G__18978__$1 = this;
return (new cljs.core.RecordIter((0),G__18978__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$red,cljs.core.cst$kw$green,cljs.core.cst$kw$blue,cljs.core.cst$kw$hue,cljs.core.cst$kw$saturation,cljs.core.cst$kw$lightness,cljs.core.cst$kw$alpha], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

garden.color.CSSColor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8350__auto__){
var self__ = this;
var this__8350__auto____$1 = this;
return self__.__meta;
});

garden.color.CSSColor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8347__auto__){
var self__ = this;
var this__8347__auto____$1 = this;
return (new garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,self__.__hash));
});

garden.color.CSSColor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8356__auto__){
var self__ = this;
var this__8356__auto____$1 = this;
return (7 + cljs.core.count(self__.__extmap));
});

garden.color.CSSColor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8348__auto__){
var self__ = this;
var this__8348__auto____$1 = this;
var h__8120__auto__ = self__.__hash;
if(!((h__8120__auto__ == null))){
return h__8120__auto__;
} else {
var h__8120__auto____$1 = (function (){var fexpr__18985 = ((function (h__8120__auto__,this__8348__auto____$1){
return (function (coll__8349__auto__){
return (1154778435 ^ cljs.core.hash_unordered_coll(coll__8349__auto__));
});})(h__8120__auto__,this__8348__auto____$1))
;
return fexpr__18985(this__8348__auto____$1);
})();
self__.__hash = h__8120__auto____$1;

return h__8120__auto____$1;
}
});

garden.color.CSSColor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18980,other18981){
var self__ = this;
var this18980__$1 = this;
return (!((other18981 == null))) && ((this18980__$1.constructor === other18981.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18980__$1.red,other18981.red)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18980__$1.green,other18981.green)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18980__$1.blue,other18981.blue)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18980__$1.hue,other18981.hue)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18980__$1.saturation,other18981.saturation)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18980__$1.lightness,other18981.lightness)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18980__$1.alpha,other18981.alpha)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18980__$1.__extmap,other18981.__extmap));
});

garden.color.CSSColor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8361__auto__,k__8362__auto__){
var self__ = this;
var this__8361__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$hue,null,cljs.core.cst$kw$saturation,null,cljs.core.cst$kw$green,null,cljs.core.cst$kw$red,null,cljs.core.cst$kw$blue,null,cljs.core.cst$kw$lightness,null,cljs.core.cst$kw$alpha,null], null), null),k__8362__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8361__auto____$1),self__.__meta),k__8362__auto__);
} else {
return (new garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8362__auto__)),null));
}
});

garden.color.CSSColor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8359__auto__,k__8360__auto__,G__18978){
var self__ = this;
var this__8359__auto____$1 = this;
var pred__18986 = cljs.core.keyword_identical_QMARK_;
var expr__18987 = k__8360__auto__;
if(cljs.core.truth_((function (){var G__18989 = cljs.core.cst$kw$red;
var G__18990 = expr__18987;
return (pred__18986.cljs$core$IFn$_invoke$arity$2 ? pred__18986.cljs$core$IFn$_invoke$arity$2(G__18989,G__18990) : pred__18986.call(null,G__18989,G__18990));
})())){
return (new garden.color.CSSColor(G__18978,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18991 = cljs.core.cst$kw$green;
var G__18992 = expr__18987;
return (pred__18986.cljs$core$IFn$_invoke$arity$2 ? pred__18986.cljs$core$IFn$_invoke$arity$2(G__18991,G__18992) : pred__18986.call(null,G__18991,G__18992));
})())){
return (new garden.color.CSSColor(self__.red,G__18978,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18993 = cljs.core.cst$kw$blue;
var G__18994 = expr__18987;
return (pred__18986.cljs$core$IFn$_invoke$arity$2 ? pred__18986.cljs$core$IFn$_invoke$arity$2(G__18993,G__18994) : pred__18986.call(null,G__18993,G__18994));
})())){
return (new garden.color.CSSColor(self__.red,self__.green,G__18978,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18995 = cljs.core.cst$kw$hue;
var G__18996 = expr__18987;
return (pred__18986.cljs$core$IFn$_invoke$arity$2 ? pred__18986.cljs$core$IFn$_invoke$arity$2(G__18995,G__18996) : pred__18986.call(null,G__18995,G__18996));
})())){
return (new garden.color.CSSColor(self__.red,self__.green,self__.blue,G__18978,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18997 = cljs.core.cst$kw$saturation;
var G__18998 = expr__18987;
return (pred__18986.cljs$core$IFn$_invoke$arity$2 ? pred__18986.cljs$core$IFn$_invoke$arity$2(G__18997,G__18998) : pred__18986.call(null,G__18997,G__18998));
})())){
return (new garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,G__18978,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__18999 = cljs.core.cst$kw$lightness;
var G__19000 = expr__18987;
return (pred__18986.cljs$core$IFn$_invoke$arity$2 ? pred__18986.cljs$core$IFn$_invoke$arity$2(G__18999,G__19000) : pred__18986.call(null,G__18999,G__19000));
})())){
return (new garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,G__18978,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19001 = cljs.core.cst$kw$alpha;
var G__19002 = expr__18987;
return (pred__18986.cljs$core$IFn$_invoke$arity$2 ? pred__18986.cljs$core$IFn$_invoke$arity$2(G__19001,G__19002) : pred__18986.call(null,G__19001,G__19002));
})())){
return (new garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,G__18978,self__.__meta,self__.__extmap,null));
} else {
return (new garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8360__auto__,G__18978),null));
}
}
}
}
}
}
}
});

garden.color.CSSColor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8364__auto__){
var self__ = this;
var this__8364__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$red,self__.red],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$green,self__.green],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$blue,self__.blue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$hue,self__.hue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$saturation,self__.saturation],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$lightness,self__.lightness],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$alpha,self__.alpha],null))], null),self__.__extmap));
});

garden.color.CSSColor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8351__auto__,G__18978){
var self__ = this;
var this__8351__auto____$1 = this;
return (new garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,G__18978,self__.__extmap,self__.__hash));
});

garden.color.CSSColor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8357__auto__,entry__8358__auto__){
var self__ = this;
var this__8357__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8358__auto__)){
return this__8357__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8358__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8358__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8357__auto____$1,entry__8358__auto__);
}
});

garden.color.CSSColor.prototype.call = (function() {
var G__19004 = null;
var G__19004__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$;
});
var G__19004__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(this$,k);
});
var G__19004__3 = (function (self__,k,missing){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(this$,k,missing);
});
G__19004 = function(self__,k,missing){
switch(arguments.length){
case 1:
return G__19004__1.call(this,self__);
case 2:
return G__19004__2.call(this,self__,k);
case 3:
return G__19004__3.call(this,self__,k,missing);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__19004.cljs$core$IFn$_invoke$arity$1 = G__19004__1;
G__19004.cljs$core$IFn$_invoke$arity$2 = G__19004__2;
G__19004.cljs$core$IFn$_invoke$arity$3 = G__19004__3;
return G__19004;
})()
;

garden.color.CSSColor.prototype.apply = (function (self__,args18983){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args18983)));
});

garden.color.CSSColor.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
return this$;
});

garden.color.CSSColor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(this$,k);
});

garden.color.CSSColor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,missing){
var self__ = this;
var this$ = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(this$,k,missing);
});

garden.color.CSSColor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$red,cljs.core.cst$sym$green,cljs.core.cst$sym$blue,cljs.core.cst$sym$hue,cljs.core.cst$sym$saturation,cljs.core.cst$sym$lightness,cljs.core.cst$sym$alpha], null);
});

garden.color.CSSColor.cljs$lang$type = true;

garden.color.CSSColor.cljs$lang$ctorPrSeq = (function (this__8390__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"garden.color/CSSColor");
});

garden.color.CSSColor.cljs$lang$ctorPrWriter = (function (this__8390__auto__,writer__8391__auto__){
return cljs.core._write(writer__8391__auto__,"garden.color/CSSColor");
});

garden.color.__GT_CSSColor = (function garden$color$__GT_CSSColor(red,green,blue,hue,saturation,lightness,alpha){
return (new garden.color.CSSColor(red,green,blue,hue,saturation,lightness,alpha,null,null,null));
});

garden.color.map__GT_CSSColor = (function garden$color$map__GT_CSSColor(G__18982){
return (new garden.color.CSSColor(cljs.core.cst$kw$red.cljs$core$IFn$_invoke$arity$1(G__18982),cljs.core.cst$kw$green.cljs$core$IFn$_invoke$arity$1(G__18982),cljs.core.cst$kw$blue.cljs$core$IFn$_invoke$arity$1(G__18982),cljs.core.cst$kw$hue.cljs$core$IFn$_invoke$arity$1(G__18982),cljs.core.cst$kw$saturation.cljs$core$IFn$_invoke$arity$1(G__18982),cljs.core.cst$kw$lightness.cljs$core$IFn$_invoke$arity$1(G__18982),cljs.core.cst$kw$alpha.cljs$core$IFn$_invoke$arity$1(G__18982),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18982,cljs.core.cst$kw$red,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$green,cljs.core.cst$kw$blue,cljs.core.cst$kw$hue,cljs.core.cst$kw$saturation,cljs.core.cst$kw$lightness,cljs.core.cst$kw$alpha], 0))),null));
});

garden.color.as_color = garden.color.map__GT_CSSColor;
/**
 * Create an RGB color.
 */
garden.color.rgb = (function garden$color$rgb(var_args){
var G__19007 = arguments.length;
switch (G__19007) {
case 1:
return garden.color.rgb.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return garden.color.rgb.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

garden.color.rgb.cljs$core$IFn$_invoke$arity$1 = (function (p__19008){
var vec__19009 = p__19008;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19009,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19009,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19009,(2),null);
var vs = vec__19009;
if(cljs.core.every_QMARK_(((function (vec__19009,r,g,b,vs){
return (function (p1__19005_SHARP_){
return garden.util.between_QMARK_(p1__19005_SHARP_,(0),(255));
});})(vec__19009,r,g,b,vs))
,vs)){
var G__19012 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$red,r,cljs.core.cst$kw$green,g,cljs.core.cst$kw$blue,b], null);
return (garden.color.as_color.cljs$core$IFn$_invoke$arity$1 ? garden.color.as_color.cljs$core$IFn$_invoke$arity$1(G__19012) : garden.color.as_color.call(null,G__19012));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("RGB values must be between 0 and 255",cljs.core.PersistentArrayMap.EMPTY);
}
});

garden.color.rgb.cljs$core$IFn$_invoke$arity$3 = (function (r,g,b){
return garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});

garden.color.rgb.cljs$lang$maxFixedArity = 3;

/**
 * Create an RGBA color.
 */
garden.color.rgba = (function garden$color$rgba(var_args){
var G__19015 = arguments.length;
switch (G__19015) {
case 1:
return garden.color.rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return garden.color.rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

garden.color.rgba.cljs$core$IFn$_invoke$arity$1 = (function (p__19016){
var vec__19017 = p__19016;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19017,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19017,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19017,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19017,(3),null);
if(cljs.core.truth_(garden.util.between_QMARK_(a,(0),(1)))){
var G__19020 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null)),cljs.core.cst$kw$alpha,a);
return (garden.color.as_color.cljs$core$IFn$_invoke$arity$1 ? garden.color.as_color.cljs$core$IFn$_invoke$arity$1(G__19020) : garden.color.as_color.call(null,G__19020));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Alpha value must be between 0 and 1",cljs.core.PersistentArrayMap.EMPTY);
}
});

garden.color.rgba.cljs$core$IFn$_invoke$arity$4 = (function (r,g,b,a){
return garden.color.rgba.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b,a], null));
});

garden.color.rgba.cljs$lang$maxFixedArity = 4;

/**
 * Create an HSL color.
 */
garden.color.hsl = (function garden$color$hsl(var_args){
var G__19024 = arguments.length;
switch (G__19024) {
case 1:
return garden.color.hsl.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return garden.color.hsl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

garden.color.hsl.cljs$core$IFn$_invoke$arity$1 = (function (p__19025){
var vec__19026 = p__19025;
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19026,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19026,(1),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19026,(2),null);
var vec__19029 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__19026,h,s,l){
return (function (p1__19022_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(p1__19022_SHARP_,cljs.core.cst$kw$magnitude,p1__19022_SHARP_);
});})(vec__19026,h,s,l))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
var h__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19029,(0),null);
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19029,(1),null);
var l__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19029,(2),null);
if(cljs.core.truth_((function (){var and__7666__auto__ = garden.util.between_QMARK_(s__$1,(0),(100));
if(cljs.core.truth_(and__7666__auto__)){
return garden.util.between_QMARK_(l__$1,(0),(100));
} else {
return and__7666__auto__;
}
})())){
var G__19032 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$hue,cljs.core.mod(h__$1,(360)),cljs.core.cst$kw$saturation,s__$1,cljs.core.cst$kw$lightness,l__$1], null);
return (garden.color.as_color.cljs$core$IFn$_invoke$arity$1 ? garden.color.as_color.cljs$core$IFn$_invoke$arity$1(G__19032) : garden.color.as_color.call(null,G__19032));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Saturation and lightness must be between 0(%) and 100(%)",cljs.core.PersistentArrayMap.EMPTY);
}
});

garden.color.hsl.cljs$core$IFn$_invoke$arity$3 = (function (h,s,l){
return garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

garden.color.hsl.cljs$lang$maxFixedArity = 3;

/**
 * Create an HSLA color.
 */
garden.color.hsla = (function garden$color$hsla(var_args){
var G__19035 = arguments.length;
switch (G__19035) {
case 1:
return garden.color.hsla.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return garden.color.hsla.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

garden.color.hsla.cljs$core$IFn$_invoke$arity$1 = (function (p__19036){
var vec__19037 = p__19036;
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19037,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19037,(1),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19037,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19037,(3),null);
if(cljs.core.truth_(garden.util.between_QMARK_(a,(0),(1)))){
var G__19040 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null)),cljs.core.cst$kw$alpha,a);
return (garden.color.as_color.cljs$core$IFn$_invoke$arity$1 ? garden.color.as_color.cljs$core$IFn$_invoke$arity$1(G__19040) : garden.color.as_color.call(null,G__19040));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Alpha value must be between 0 and 1",cljs.core.PersistentArrayMap.EMPTY);
}
});

garden.color.hsla.cljs$core$IFn$_invoke$arity$4 = (function (h,s,l,a){
return garden.color.hsla.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l,a], null));
});

garden.color.hsla.cljs$lang$maxFixedArity = 4;

/**
 * Return true if color is an RGB color.
 */
garden.color.rgb_QMARK_ = (function garden$color$rgb_QMARK_(color){
return (cljs.core.map_QMARK_(color)) && (cljs.core.every_QMARK_(color,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$green,null,cljs.core.cst$kw$red,null,cljs.core.cst$kw$blue,null], null), null)));
});
/**
 * Return true if color is an HSL color.
 */
garden.color.hsl_QMARK_ = (function garden$color$hsl_QMARK_(color){
return (cljs.core.map_QMARK_(color)) && (cljs.core.every_QMARK_(color,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$hue,null,cljs.core.cst$kw$saturation,null,cljs.core.cst$kw$lightness,null], null), null)));
});
/**
 * Return true if x is a color.
 */
garden.color.color_QMARK_ = (function garden$color$color_QMARK_(x){
var or__7678__auto__ = garden.color.rgb_QMARK_(x);
if(cljs.core.truth_(or__7678__auto__)){
return or__7678__auto__;
} else {
return garden.color.hsl_QMARK_(x);
}
});
/**
 * Regular expression for matching a hexadecimal color.
 *           Matches hexadecimal colors of length three or six possibly
 *           lead by a "#". The color portion is captured.
 */
garden.color.hex_re = /#?([\da-fA-F]{6}|[\da-fA-F]{3})/;
/**
 * Returns true if x is a hexadecimal color.
 */
garden.color.hex_QMARK_ = (function garden$color$hex_QMARK_(x){
return cljs.core.boolean$((function (){var and__7666__auto__ = typeof x === 'string';
if(and__7666__auto__){
return cljs.core.re_matches(garden.color.hex_re,x);
} else {
return and__7666__auto__;
}
})());
});
/**
 * Convert a hexadecimal color to an RGB color map.
 */
garden.color.hex__GT_rgb = (function garden$color$hex__GT_rgb(s){
var temp__5278__auto__ = cljs.core.re_matches(garden.color.hex_re,s);
if(cljs.core.truth_(temp__5278__auto__)){
var vec__19044 = temp__5278__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19044,(0),null);
var hex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19044,(1),null);
var hex__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(hex)))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (vec__19044,_,hex,temp__5278__auto__){
return (function (p1__19042_SHARP_){
var x__8613__auto__ = p1__19042_SHARP_;
return cljs.core._conj((function (){var x__8613__auto____$1 = p1__19042_SHARP_;
return cljs.core._conj(cljs.core.List.EMPTY,x__8613__auto____$1);
})(),x__8613__auto__);
});})(vec__19044,_,hex,temp__5278__auto__))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hex], 0))):hex);
return garden.color.rgb.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (hex__$1,vec__19044,_,hex,temp__5278__auto__){
return (function (p1__19043_SHARP_){
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic(p1__19043_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(16)], 0));
});})(hex__$1,vec__19044,_,hex,temp__5278__auto__))
,cljs.core.re_seq(/[\da-fA-F]{2}/,hex__$1)));
} else {
return null;
}
});
/**
 * Convert an RGB color map to a hexadecimal color.
 */
garden.color.rgb__GT_hex = (function garden$color$rgb__GT_hex(p__19047){
var map__19048 = p__19047;
var map__19048__$1 = ((((!((map__19048 == null)))?((((map__19048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19048.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19048):map__19048);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19048__$1,cljs.core.cst$kw$red);
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19048__$1,cljs.core.cst$kw$green);
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19048__$1,cljs.core.cst$kw$blue);
var hex_part = ((function (map__19048,map__19048__$1,r,g,b){
return (function garden$color$rgb__GT_hex_$_hex_part(v){
return clojure.string.replace(garden.util.format.cljs$core$IFn$_invoke$arity$variadic("%2s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(16)], 0))], 0))," ","0");
});})(map__19048,map__19048__$1,r,g,b))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"#",cljs.core.map.cljs$core$IFn$_invoke$arity$2(hex_part,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null)));
});
garden.color.trim_one = (function garden$color$trim_one(x){
if(((1) < x)){
return (1);
} else {
return x;
}
});
/**
 * Convert an RGB color map to an HSL color map.
 */
garden.color.rgb__GT_hsl = (function garden$color$rgb__GT_hsl(p__19051){
var map__19052 = p__19051;
var map__19052__$1 = ((((!((map__19052 == null)))?((((map__19052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19052.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19052):map__19052);
var color = map__19052__$1;
var red = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19052__$1,cljs.core.cst$kw$red);
var green = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19052__$1,cljs.core.cst$kw$green);
var blue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19052__$1,cljs.core.cst$kw$blue);
if(cljs.core.truth_(garden.color.hsl_QMARK_(color))){
return color;
} else {
var vec__19054 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__19052,map__19052__$1,color,red,green,blue){
return (function (p1__19050_SHARP_){
return (p1__19050_SHARP_ / (255));
});})(map__19052,map__19052__$1,color,red,green,blue))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [red,green,blue], null));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19054,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19054,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19054,(2),null);
var mx = (function (){var x__8016__auto__ = (function (){var x__8016__auto__ = r;
var y__8017__auto__ = g;
return ((x__8016__auto__ > y__8017__auto__) ? x__8016__auto__ : y__8017__auto__);
})();
var y__8017__auto__ = b;
return ((x__8016__auto__ > y__8017__auto__) ? x__8016__auto__ : y__8017__auto__);
})();
var mn = (function (){var x__8023__auto__ = (function (){var x__8023__auto__ = r;
var y__8024__auto__ = g;
return ((x__8023__auto__ < y__8024__auto__) ? x__8023__auto__ : y__8024__auto__);
})();
var y__8024__auto__ = b;
return ((x__8023__auto__ < y__8024__auto__) ? x__8023__auto__ : y__8024__auto__);
})();
var d = (mx - mn);
var h = (function (){var pred__19057 = cljs.core._EQ_;
var expr__19058 = mx;
if(cljs.core.truth_((pred__19057.cljs$core$IFn$_invoke$arity$2 ? pred__19057.cljs$core$IFn$_invoke$arity$2(mn,expr__19058) : pred__19057.call(null,mn,expr__19058)))){
return (0);
} else {
if(cljs.core.truth_((pred__19057.cljs$core$IFn$_invoke$arity$2 ? pred__19057.cljs$core$IFn$_invoke$arity$2(r,expr__19058) : pred__19057.call(null,r,expr__19058)))){
return ((60) * ((g - b) / d));
} else {
if(cljs.core.truth_((pred__19057.cljs$core$IFn$_invoke$arity$2 ? pred__19057.cljs$core$IFn$_invoke$arity$2(g,expr__19058) : pred__19057.call(null,g,expr__19058)))){
return (((60) * ((b - r) / d)) + (120));
} else {
if(cljs.core.truth_((pred__19057.cljs$core$IFn$_invoke$arity$2 ? pred__19057.cljs$core$IFn$_invoke$arity$2(b,expr__19058) : pred__19057.call(null,b,expr__19058)))){
return (((60) * ((r - g) / d)) + (240));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__19058)].join('')));
}
}
}
}
})();
var l = garden.color.trim_one(((mx + mn) / (2)));
var s = garden.color.trim_one(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mx,mn))?(0):(((l < 0.5))?(d / ((2) * l)):(d / ((2) - ((2) * l)))
)));
return garden.color.hsl.cljs$core$IFn$_invoke$arity$3(cljs.core.mod(h,(360)),((100) * s),((100) * l));
}
});
/**
 * Convert an HSL color map to an RGB color map.
 */
garden.color.hsl__GT_rgb = (function garden$color$hsl__GT_rgb(p__19061){
var map__19062 = p__19061;
var map__19062__$1 = ((((!((map__19062 == null)))?((((map__19062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19062.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19062):map__19062);
var color = map__19062__$1;
var hue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19062__$1,cljs.core.cst$kw$hue);
var saturation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19062__$1,cljs.core.cst$kw$saturation);
var lightness = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19062__$1,cljs.core.cst$kw$lightness);
if(cljs.core.truth_(garden.color.rgb_QMARK_(color))){
return color;
} else {
var h = (hue / 360.0);
var s = (saturation / 100.0);
var l = (lightness / 100.0);
var m2 = (((l <= 0.5))?(l * (s + (1))):((l + s) - (l * s)));
var m1 = (((2) * l) - m2);
var vec__19064 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (h,s,l,m2,m1,map__19062,map__19062__$1,color,hue,saturation,lightness){
return (function (p1__19060_SHARP_){
var G__19067 = (p1__19060_SHARP_ * (255));
return Math.round(G__19067);
});})(h,s,l,m2,m1,map__19062,map__19062__$1,color,hue,saturation,lightness))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19068 = m1;
var G__19069 = m2;
var G__19070 = (h + (1.0 / (3)));
return (garden.color.hue__GT_rgb.cljs$core$IFn$_invoke$arity$3 ? garden.color.hue__GT_rgb.cljs$core$IFn$_invoke$arity$3(G__19068,G__19069,G__19070) : garden.color.hue__GT_rgb.call(null,G__19068,G__19069,G__19070));
})(),(garden.color.hue__GT_rgb.cljs$core$IFn$_invoke$arity$3 ? garden.color.hue__GT_rgb.cljs$core$IFn$_invoke$arity$3(m1,m2,h) : garden.color.hue__GT_rgb.call(null,m1,m2,h)),(function (){var G__19071 = m1;
var G__19072 = m2;
var G__19073 = (h - (1.0 / (3)));
return (garden.color.hue__GT_rgb.cljs$core$IFn$_invoke$arity$3 ? garden.color.hue__GT_rgb.cljs$core$IFn$_invoke$arity$3(G__19071,G__19072,G__19073) : garden.color.hue__GT_rgb.call(null,G__19071,G__19072,G__19073));
})()], null));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19064,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19064,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19064,(2),null);
return garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
}
});
garden.color.hue__GT_rgb = (function garden$color$hue__GT_rgb(m1,m2,h){
var h__$1 = (((h < (0)))?(h + (1)):(((h > (1)))?(h - (1)):h
));
if((((6) * h__$1) < (1))){
return (m1 + (((m2 - m1) * h__$1) * (6)));
} else {
if((((2) * h__$1) < (1))){
return m2;
} else {
if((((3) * h__$1) < (2))){
return (m1 + (((m2 - m1) * ((2.0 / (3)) - h__$1)) * (6)));
} else {
return m1;

}
}
}
});
/**
 * Convert an HSL color map to a hexadecimal string.
 */
garden.color.hsl__GT_hex = (function garden$color$hsl__GT_hex(color){
return garden.color.rgb__GT_hex(garden.color.hsl__GT_rgb(color));
});
/**
 * Convert a hexadecimal color to an HSL color.
 */
garden.color.hex__GT_hsl = (function garden$color$hex__GT_hsl(color){
return garden.color.rgb__GT_hsl(garden.color.hex__GT_rgb(color));
});
garden.color.percent_clip = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(garden.util.clip,(0),(100));
garden.color.rgb_clip = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(garden.util.clip,(0),(255));
/**
 * Convert a color to a hexadecimal string.
 */
garden.color.as_hex = (function garden$color$as_hex(x){
if(cljs.core.truth_(garden.color.hex_QMARK_(x))){
return x;
} else {
if(cljs.core.truth_(garden.color.rgb_QMARK_(x))){
return garden.color.rgb__GT_hex(x);
} else {
if(cljs.core.truth_(garden.color.hsl_QMARK_(x))){
return garden.color.hsl__GT_hex(x);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Can't convert "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" to a color.")].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
});
/**
 * Convert a color to a RGB.
 */
garden.color.as_rgb = (function garden$color$as_rgb(x){
if(cljs.core.truth_(garden.color.rgb_QMARK_(x))){
return x;
} else {
if(cljs.core.truth_(garden.color.hsl_QMARK_(x))){
return garden.color.hsl__GT_rgb(x);
} else {
if(cljs.core.truth_(garden.color.hex_QMARK_(x))){
return garden.color.hex__GT_rgb(x);
} else {
if(typeof x === 'number'){
return garden.color.rgb.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.color.rgb_clip,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x,x], null)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Can't convert "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" to a color.")].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
});
/**
 * Convert a color to a HSL.
 */
garden.color.as_hsl = (function garden$color$as_hsl(x){
if(cljs.core.truth_(garden.color.hsl_QMARK_(x))){
return x;
} else {
if(cljs.core.truth_(garden.color.rgb_QMARK_(x))){
return garden.color.rgb__GT_hsl(x);
} else {
if(cljs.core.truth_(garden.color.hex_QMARK_(x))){
return garden.color.hex__GT_hsl(x);
} else {
if(typeof x === 'number'){
return garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(garden.color.percent_clip.cljs$core$IFn$_invoke$arity$1 ? garden.color.percent_clip.cljs$core$IFn$_invoke$arity$1(x) : garden.color.percent_clip.call(null,x)),(garden.color.percent_clip.cljs$core$IFn$_invoke$arity$1 ? garden.color.percent_clip.cljs$core$IFn$_invoke$arity$1(x) : garden.color.percent_clip.call(null,x))], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Can't convert "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" to a color.")].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
});
garden.color.restrict_rgb = (function garden$color$restrict_rgb(m){
return cljs.core.select_keys(m,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$red,cljs.core.cst$kw$green,cljs.core.cst$kw$blue], null));
});
garden.color.make_color_operation = (function garden$color$make_color_operation(op){
return (function() {
var garden$color$make_color_operation_$_color_op = null;
var garden$color$make_color_operation_$_color_op__1 = (function (a){
return a;
});
var garden$color$make_color_operation_$_color_op__2 = (function (a,b){
var o = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(garden.color.rgb_clip,op);
var a__$1 = garden.color.restrict_rgb(garden.color.as_rgb(a));
var b__$1 = garden.color.restrict_rgb(garden.color.as_rgb(b));
var G__19074 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(o,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a__$1,b__$1], 0));
return (garden.color.as_color.cljs$core$IFn$_invoke$arity$1 ? garden.color.as_color.cljs$core$IFn$_invoke$arity$1(G__19074) : garden.color.as_color.call(null,G__19074));
});
var garden$color$make_color_operation_$_color_op__3 = (function() { 
var G__19075__delegate = function (a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(garden$color$make_color_operation_$_color_op,garden$color$make_color_operation_$_color_op.cljs$core$IFn$_invoke$arity$2(a,b),more);
};
var G__19075 = function (a,b,var_args){
var more = null;
if (arguments.length > 2) {
var G__19076__i = 0, G__19076__a = new Array(arguments.length -  2);
while (G__19076__i < G__19076__a.length) {G__19076__a[G__19076__i] = arguments[G__19076__i + 2]; ++G__19076__i;}
  more = new cljs.core.IndexedSeq(G__19076__a,0,null);
} 
return G__19075__delegate.call(this,a,b,more);};
G__19075.cljs$lang$maxFixedArity = 2;
G__19075.cljs$lang$applyTo = (function (arglist__19077){
var a = cljs.core.first(arglist__19077);
arglist__19077 = cljs.core.next(arglist__19077);
var b = cljs.core.first(arglist__19077);
var more = cljs.core.rest(arglist__19077);
return G__19075__delegate(a,b,more);
});
G__19075.cljs$core$IFn$_invoke$arity$variadic = G__19075__delegate;
return G__19075;
})()
;
garden$color$make_color_operation_$_color_op = function(a,b,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return garden$color$make_color_operation_$_color_op__1.call(this,a);
case 2:
return garden$color$make_color_operation_$_color_op__2.call(this,a,b);
default:
var G__19078 = null;
if (arguments.length > 2) {
var G__19079__i = 0, G__19079__a = new Array(arguments.length -  2);
while (G__19079__i < G__19079__a.length) {G__19079__a[G__19079__i] = arguments[G__19079__i + 2]; ++G__19079__i;}
G__19078 = new cljs.core.IndexedSeq(G__19079__a,0,null);
}
return garden$color$make_color_operation_$_color_op__3.cljs$core$IFn$_invoke$arity$variadic(a,b, G__19078);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
garden$color$make_color_operation_$_color_op.cljs$lang$maxFixedArity = 2;
garden$color$make_color_operation_$_color_op.cljs$lang$applyTo = garden$color$make_color_operation_$_color_op__3.cljs$lang$applyTo;
garden$color$make_color_operation_$_color_op.cljs$core$IFn$_invoke$arity$1 = garden$color$make_color_operation_$_color_op__1;
garden$color$make_color_operation_$_color_op.cljs$core$IFn$_invoke$arity$2 = garden$color$make_color_operation_$_color_op__2;
garden$color$make_color_operation_$_color_op.cljs$core$IFn$_invoke$arity$variadic = garden$color$make_color_operation_$_color_op__3.cljs$core$IFn$_invoke$arity$variadic;
return garden$color$make_color_operation_$_color_op;
})()
});
/**
 * Add the RGB components of two or more colors.
 */
garden.color.color_PLUS_ = garden.color.make_color_operation(cljs.core._PLUS_);
/**
 * Subtract the RGB components of two or more colors.
 */
garden.color.color_ = garden.color.make_color_operation(cljs.core._);
/**
 * Multiply the RGB components of two or more colors.
 */
garden.color.color_STAR_ = garden.color.make_color_operation(cljs.core._STAR_);
/**
 * Multiply the RGB components of two or more colors.
 */
garden.color.color_div = garden.color.make_color_operation(cljs.core._SLASH_);
garden.color.update_color = (function garden$color$update_color(color,field,f,v){
var v__$1 = (function (){var or__7678__auto__ = cljs.core.cst$kw$magnitude.cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(or__7678__auto__)){
return or__7678__auto__;
} else {
return v;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(garden.color.as_hsl(color),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null),f,v__$1);
});
/**
 * Rotates the hue value of a given color by amount.
 */
garden.color.rotate_hue = (function garden$color$rotate_hue(color,amount){
return garden.color.update_color(color,cljs.core.cst$kw$hue,cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__19080_SHARP_){
return cljs.core.mod(p1__19080_SHARP_,(360));
}),cljs.core._PLUS_),amount);
});
/**
 * Increase the saturation value of a given color by amount.
 */
garden.color.saturate = (function garden$color$saturate(color,amount){
return garden.color.update_color(color,cljs.core.cst$kw$saturation,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(garden.color.percent_clip,cljs.core._PLUS_),amount);
});
/**
 * Decrease the saturation value of a given color by amount.
 */
garden.color.desaturate = (function garden$color$desaturate(color,amount){
return garden.color.update_color(color,cljs.core.cst$kw$saturation,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(garden.color.percent_clip,cljs.core._),amount);
});
/**
 * Increase the lightness value a given color by amount.
 */
garden.color.lighten = (function garden$color$lighten(color,amount){
return garden.color.update_color(color,cljs.core.cst$kw$lightness,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(garden.color.percent_clip,cljs.core._PLUS_),amount);
});
/**
 * Decrease the lightness value a given color by amount.
 */
garden.color.darken = (function garden$color$darken(color,amount){
return garden.color.update_color(color,cljs.core.cst$kw$lightness,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(garden.color.percent_clip,cljs.core._),amount);
});
/**
 * Return the inversion of a color.
 */
garden.color.invert = (function garden$color$invert(color){
var G__19081 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$red,(255),cljs.core.cst$kw$green,(255),cljs.core.cst$kw$blue,(255)], null),garden.color.as_rgb(color)], 0));
return (garden.color.as_color.cljs$core$IFn$_invoke$arity$1 ? garden.color.as_color.cljs$core$IFn$_invoke$arity$1(G__19081) : garden.color.as_color.call(null,G__19081));
});
/**
 * Mix two or more colors by averaging their RGB channels.
 */
garden.color.mix = (function garden$color$mix(var_args){
var G__19086 = arguments.length;
switch (G__19086) {
case 2:
return garden.color.mix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__8934__auto__ = [];
var len__8911__auto___19089 = arguments.length;
var i__8912__auto___19090 = (0);
while(true){
if((i__8912__auto___19090 < len__8911__auto___19089)){
args_arr__8934__auto__.push((arguments[i__8912__auto___19090]));

var G__19091 = (i__8912__auto___19090 + (1));
i__8912__auto___19090 = G__19091;
continue;
} else {
}
break;
}

var argseq__8935__auto__ = (new cljs.core.IndexedSeq(args_arr__8934__auto__.slice((2)),(0),null));
return garden.color.mix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8935__auto__);

}
});

garden.color.mix.cljs$core$IFn$_invoke$arity$2 = (function (color_1,color_2){
var c1 = garden.color.restrict_rgb(garden.color.as_rgb(color_1));
var c2 = garden.color.restrict_rgb(garden.color.as_rgb(color_2));
var G__19087 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(garden.util.average,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c1,c2], 0));
return (garden.color.as_color.cljs$core$IFn$_invoke$arity$1 ? garden.color.as_color.cljs$core$IFn$_invoke$arity$1(G__19087) : garden.color.as_color.call(null,G__19087));
});

garden.color.mix.cljs$core$IFn$_invoke$arity$variadic = (function (color_1,color_2,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(garden.color.mix,garden.color.mix.cljs$core$IFn$_invoke$arity$2(color_1,color_2),more);
});

garden.color.mix.cljs$lang$applyTo = (function (seq19083){
var G__19084 = cljs.core.first(seq19083);
var seq19083__$1 = cljs.core.next(seq19083);
var G__19085 = cljs.core.first(seq19083__$1);
var seq19083__$2 = cljs.core.next(seq19083__$1);
return garden.color.mix.cljs$core$IFn$_invoke$arity$variadic(G__19084,G__19085,seq19083__$2);
});

garden.color.mix.cljs$lang$maxFixedArity = (2);

/**
 * Return the complement of a color.
 */
garden.color.complement = (function garden$color$complement(color){
return garden.color.rotate_hue(color,(180));
});
garden.color.hue_rotations = (function garden$color$hue_rotations(var_args){
var args__8918__auto__ = [];
var len__8911__auto___19094 = arguments.length;
var i__8912__auto___19095 = (0);
while(true){
if((i__8912__auto___19095 < len__8911__auto___19094)){
args__8918__auto__.push((arguments[i__8912__auto___19095]));

var G__19096 = (i__8912__auto___19095 + (1));
i__8912__auto___19095 = G__19096;
continue;
} else {
}
break;
}

var argseq__8919__auto__ = ((((1) < args__8918__auto__.length))?(new cljs.core.IndexedSeq(args__8918__auto__.slice((1)),(0),null)):null);
return garden.color.hue_rotations.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8919__auto__);
});

garden.color.hue_rotations.cljs$core$IFn$_invoke$arity$variadic = (function (color,amounts){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(garden.color.rotate_hue,color),amounts);
});

garden.color.hue_rotations.cljs$lang$maxFixedArity = (1);

garden.color.hue_rotations.cljs$lang$applyTo = (function (seq19092){
var G__19093 = cljs.core.first(seq19092);
var seq19092__$1 = cljs.core.next(seq19092);
return garden.color.hue_rotations.cljs$core$IFn$_invoke$arity$variadic(G__19093,seq19092__$1);
});

/**
 * Given a color return a triple of colors which are 0, 30, and 60
 *   degrees clockwise from it. If a second falsy argument is passed the
 *   returned values will be in a counter-clockwise direction.
 */
garden.color.analogous = (function garden$color$analogous(var_args){
var G__19098 = arguments.length;
switch (G__19098) {
case 1:
return garden.color.analogous.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return garden.color.analogous.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

garden.color.analogous.cljs$core$IFn$_invoke$arity$1 = (function (color){
return garden.color.analogous.cljs$core$IFn$_invoke$arity$2(color,true);
});

garden.color.analogous.cljs$core$IFn$_invoke$arity$2 = (function (color,clockwise_QMARK_){
var sign = (cljs.core.truth_(clockwise_QMARK_)?cljs.core._PLUS_:cljs.core._);
return garden.color.hue_rotations.cljs$core$IFn$_invoke$arity$variadic(color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0),(sign.cljs$core$IFn$_invoke$arity$1 ? sign.cljs$core$IFn$_invoke$arity$1((30)) : sign.call(null,(30))),(sign.cljs$core$IFn$_invoke$arity$1 ? sign.cljs$core$IFn$_invoke$arity$1((60)) : sign.call(null,(60)))], 0));
});

garden.color.analogous.cljs$lang$maxFixedArity = 2;

/**
 * Given a color return a triple of colors which are equidistance apart
 *   on the color wheel.
 */
garden.color.triad = (function garden$color$triad(color){
return garden.color.hue_rotations.cljs$core$IFn$_invoke$arity$variadic(color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0),(120),(240)], 0));
});
/**
 * Given a color return a triple of the color and the two colors on
 *   either side of it's complement.
 */
garden.color.split_complement = (function garden$color$split_complement(var_args){
var G__19101 = arguments.length;
switch (G__19101) {
case 1:
return garden.color.split_complement.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return garden.color.split_complement.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

garden.color.split_complement.cljs$core$IFn$_invoke$arity$1 = (function (color){
return garden.color.split_complement.cljs$core$IFn$_invoke$arity$2(color,(130));
});

garden.color.split_complement.cljs$core$IFn$_invoke$arity$2 = (function (color,distance_from_complement){
var d = garden.util.clip((1),(179),distance_from_complement);
return garden.color.hue_rotations.cljs$core$IFn$_invoke$arity$variadic(color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0),d,(- d)], 0));
});

garden.color.split_complement.cljs$lang$maxFixedArity = 2;

/**
 * Given a color return a quadruple of four colors which are
 *   equidistance on the color wheel (ie. a pair of complements). An
 *   optional angle may be given for color of the second complement in the
 *   pair (this defaults to 90 when only color is passed).
 */
garden.color.tetrad = (function garden$color$tetrad(var_args){
var G__19104 = arguments.length;
switch (G__19104) {
case 1:
return garden.color.tetrad.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return garden.color.tetrad.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

garden.color.tetrad.cljs$core$IFn$_invoke$arity$1 = (function (color){
return garden.color.tetrad.cljs$core$IFn$_invoke$arity$2(color,(90));
});

garden.color.tetrad.cljs$core$IFn$_invoke$arity$2 = (function (color,angle){
var a = garden.util.clip((1),(90),(function (){var G__19105 = cljs.core.cst$kw$magnitude.cljs$core$IFn$_invoke$arity$2(angle,angle);
return Math.abs(G__19105);
})());
var color_2 = garden.color.rotate_hue(color,a);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.color.rotate_hue(color,(0)),garden.color.complement(color),color_2,garden.color.complement(color_2)], null);
});

garden.color.tetrad.cljs$lang$maxFixedArity = 2;

/**
 * Given a color return a list of shades from lightest to darkest by
 *   a step. By default the step is 10. White and black are excluded from
 *   the returned list.
 */
garden.color.shades = (function garden$color$shades(var_args){
var G__19108 = arguments.length;
switch (G__19108) {
case 1:
return garden.color.shades.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return garden.color.shades.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

garden.color.shades.cljs$core$IFn$_invoke$arity$1 = (function (color){
return garden.color.shades.cljs$core$IFn$_invoke$arity$2(color,(10));
});

garden.color.shades.cljs$core$IFn$_invoke$arity$2 = (function (color,step){
var c = garden.color.as_hsl(color);
var iter__8541__auto__ = ((function (c){
return (function garden$color$iter__19109(s__19110){
return (new cljs.core.LazySeq(null,((function (c){
return (function (){
var s__19110__$1 = s__19110;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__19110__$1);
if(temp__5278__auto__){
var s__19110__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19110__$2)){
var c__8539__auto__ = cljs.core.chunk_first(s__19110__$2);
var size__8540__auto__ = cljs.core.count(c__8539__auto__);
var b__19112 = cljs.core.chunk_buffer(size__8540__auto__);
if((function (){var i__19111 = (0);
while(true){
if((i__19111 < size__8540__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8539__auto__,i__19111);
cljs.core.chunk_append(b__19112,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c,cljs.core.cst$kw$lightness,(i * step)));

var G__19115 = (i__19111 + (1));
i__19111 = G__19115;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19112),garden$color$iter__19109(cljs.core.chunk_rest(s__19110__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19112),null);
}
} else {
var i = cljs.core.first(s__19110__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c,cljs.core.cst$kw$lightness,(i * step)),garden$color$iter__19109(cljs.core.rest(s__19110__$2)));
}
} else {
return null;
}
break;
}
});})(c))
,null,null));
});})(c))
;
return iter__8541__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(function (){var G__19113 = (100.0 / step);
return Math.floor(G__19113);
})()));
});

garden.color.shades.cljs$lang$maxFixedArity = 2;

garden.color.color_name__GT_hex = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$aquamarine,cljs.core.cst$kw$lime,cljs.core.cst$kw$deepskyblue,cljs.core.cst$kw$darksalmon,cljs.core.cst$kw$antiquewhite,cljs.core.cst$kw$mediumturquoise,cljs.core.cst$kw$slategrey,cljs.core.cst$kw$slategray,cljs.core.cst$kw$sienna,cljs.core.cst$kw$orange,cljs.core.cst$kw$navajowhite,cljs.core.cst$kw$lavenderblush,cljs.core.cst$kw$firebrick,cljs.core.cst$kw$orangered,cljs.core.cst$kw$palevioletred,cljs.core.cst$kw$lawngreen,cljs.core.cst$kw$seashell,cljs.core.cst$kw$lightpink,cljs.core.cst$kw$darkolivegreen,cljs.core.cst$kw$aliceblue,cljs.core.cst$kw$gray,cljs.core.cst$kw$lightsteelblue,cljs.core.cst$kw$whitesmoke,cljs.core.cst$kw$darkgoldenrod,cljs.core.cst$kw$tan,cljs.core.cst$kw$bisque,cljs.core.cst$kw$white,cljs.core.cst$kw$lightgreen,cljs.core.cst$kw$darkseagreen,cljs.core.cst$kw$crimson,cljs.core.cst$kw$darkslategray,cljs.core.cst$kw$mistyrose,cljs.core.cst$kw$chocolate,cljs.core.cst$kw$yellow,cljs.core.cst$kw$cadetblue,cljs.core.cst$kw$navy,cljs.core.cst$kw$ghostwhite,cljs.core.cst$kw$dimgrey,cljs.core.cst$kw$seagreen,cljs.core.cst$kw$green,cljs.core.cst$kw$mediumseagreen,cljs.core.cst$kw$indigo,cljs.core.cst$kw$olivedrab,cljs.core.cst$kw$cyan,cljs.core.cst$kw$peachpuff,cljs.core.cst$kw$limegreen,cljs.core.cst$kw$mediumslateblue,cljs.core.cst$kw$violet,cljs.core.cst$kw$sandybrown,cljs.core.cst$kw$yellowgreen,cljs.core.cst$kw$mediumspringgreen,cljs.core.cst$kw$steelblue,cljs.core.cst$kw$rosybrown,cljs.core.cst$kw$cornflowerblue,cljs.core.cst$kw$ivory,cljs.core.cst$kw$lightgoldenrodyellow,cljs.core.cst$kw$salmon,cljs.core.cst$kw$darkcyan,cljs.core.cst$kw$peru,cljs.core.cst$kw$cornsilk,cljs.core.cst$kw$lightslategray,cljs.core.cst$kw$blueviolet,cljs.core.cst$kw$forestgreen,cljs.core.cst$kw$lightseagreen,cljs.core.cst$kw$gold,cljs.core.cst$kw$gainsboro,cljs.core.cst$kw$darkorchid,cljs.core.cst$kw$burlywood,cljs.core.cst$kw$lightskyblue,cljs.core.cst$kw$chartreuse,cljs.core.cst$kw$snow,cljs.core.cst$kw$moccasin,cljs.core.cst$kw$honeydew,cljs.core.cst$kw$aqua,cljs.core.cst$kw$darkred,cljs.core.cst$kw$mediumorchid,cljs.core.cst$kw$lightsalmon,cljs.core.cst$kw$saddlebrown,cljs.core.cst$kw$wheat,cljs.core.cst$kw$springgreen,cljs.core.cst$kw$lightslategrey,cljs.core.cst$kw$darkblue,cljs.core.cst$kw$powderblue,cljs.core.cst$kw$turquoise,cljs.core.cst$kw$blanchedalmond,cljs.core.cst$kw$papayawhip,cljs.core.cst$kw$slateblue,cljs.core.cst$kw$lightblue,cljs.core.cst$kw$skyblue,cljs.core.cst$kw$red,cljs.core.cst$kw$lightyellow,cljs.core.cst$kw$blue,cljs.core.cst$kw$palegreen,cljs.core.cst$kw$greenyellow,cljs.core.cst$kw$khaki,cljs.core.cst$kw$maroon,cljs.core.cst$kw$darkgrey,cljs.core.cst$kw$midnightblue,cljs.core.cst$kw$floralwhite,cljs.core.cst$kw$deeppink,cljs.core.cst$kw$paleturquoise,cljs.core.cst$kw$darkkhaki,cljs.core.cst$kw$azure,cljs.core.cst$kw$indianred,cljs.core.cst$kw$darkviolet,cljs.core.cst$kw$mediumpurple,cljs.core.cst$kw$fuchsia,cljs.core.cst$kw$coral,cljs.core.cst$kw$mediumvioletred,cljs.core.cst$kw$lemonchiffon,cljs.core.cst$kw$mediumblue,cljs.core.cst$kw$darkmagenta,cljs.core.cst$kw$goldenrod,cljs.core.cst$kw$darkorange,cljs.core.cst$kw$orchid,cljs.core.cst$kw$plum,cljs.core.cst$kw$pink,cljs.core.cst$kw$teal,cljs.core.cst$kw$magenta,cljs.core.cst$kw$lightgrey,cljs.core.cst$kw$purple,cljs.core.cst$kw$dodgerblue,cljs.core.cst$kw$darkturquoise,cljs.core.cst$kw$mintcream,cljs.core.cst$kw$hotpink,cljs.core.cst$kw$thistle,cljs.core.cst$kw$royalblue,cljs.core.cst$kw$darkgreen,cljs.core.cst$kw$darkslateblue,cljs.core.cst$kw$silver,cljs.core.cst$kw$darkgray,cljs.core.cst$kw$oldlace,cljs.core.cst$kw$mediumaquamarine,cljs.core.cst$kw$brown,cljs.core.cst$kw$lightgray,cljs.core.cst$kw$olive,cljs.core.cst$kw$lightcoral,cljs.core.cst$kw$tomato,cljs.core.cst$kw$lightcyan,cljs.core.cst$kw$linen,cljs.core.cst$kw$darkslategrey,cljs.core.cst$kw$lavender,cljs.core.cst$kw$dimgray,cljs.core.cst$kw$palegoldenrod,cljs.core.cst$kw$beige,cljs.core.cst$kw$black],["#7fffd4","#00ff00","#00bfff","#e9967a","#faebd7","#48d1cc","#708090","#708090","#a0522d","#ffa500","#ffdead","#fff0f5","#b22222","#ff4500","#db7093","#7cfc00","#fff5ee","#ffb6c1","#556b2f","#f0f8ff","#808080","#b0c4de","#f5f5f5","#b8860b","#d2b48c","#ffe4c4","#ffffff","#90ee90","#8fbc8f","#dc143c","#2f4f4f","#ffe4e1","#d2691e","#ffff00","#5f9ea0","#000080","#f8f8ff","#696969","#2e8b57","#008000","#3cb371","#4b0082","#6b8e23","#00ffff","#ffdab9","#32cd32","#7b68ee","#ee82ee","#f4a460","#9acd32","#00fa9a","#4682b4","#bc8f8f","#6495ed","#fffff0","#fafad2","#fa8072","#008b8b","#cd853f","#fff8dc","#778899","#8a2be2","#228b22","#20b2aa","#ffd700","#dcdcdc","#9932cc","#deb887","#87cefa","#7fff00","#fffafa","#ffe4b5","#f0fff0","#00ffff","#8b0000","#ba55d3","#ffa07a","#8b4513","#f5deb3","#00ff7f","#778899","#00008b","#b0e0e6","#40e0d0","#ffebcd","#ffefd5","#6a5acd","#add8e6","#87ceeb","#ff0000","#ffffe0","#0000ff","#98fb98","#adff2f","#f0e68c","#800000","#a9a9a9","#191970","#fffaf0","#ff1493","#afeeee","#bdb76b","#f0ffff","#cd5c5c","#9400d3","#9370db","#ff00ff","#ff7f50","#c71585","#fffacd","#0000cd","#8b008b","#daa520","#ff8c00","#da70d6","#dda0dd","#ffc0cb","#008080","#ff00ff","#d3d3d3","#800080","#1e90ff","#00ced1","#f5fffa","#ff69b4","#d8bfd8","#4169e1","#006400","#483d8b","#c0c0c0","#a9a9a9","#fdf5e6","#66cdaa","#a52a2a","#d3d3d3","#808000","#f08080","#ff6347","#e0ffff","#faf0e6","#2f4f4f","#e6e6fa","#696969","#eee8aa","#f5f5dc","#000000"]);
/**
 * Helper function for from-name. Returns an instance of ExceptionInfo
 *   for unknown colors.
 */
garden.color.ex_info_color_name = (function garden$color$ex_info_color_name(n){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unknown color "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" see (:expected (ex-data e)) for a list of color names")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,n,cljs.core.cst$kw$expected,cljs.core.set(cljs.core.keys(garden.color.color_name__GT_hex))], null));
});
/**
 * Helper function for from-name.
 */
garden.color.color_name__GT_color = cljs.core.memoize((function (k){
return (garden.color.color_name__GT_hex.cljs$core$IFn$_invoke$arity$1 ? garden.color.color_name__GT_hex.cljs$core$IFn$_invoke$arity$1(k) : garden.color.color_name__GT_hex.call(null,k));
}));
/**
 * Given a CSS color name n return an instance of CSSColor.
 */
garden.color.from_name = (function garden$color$from_name(n){
var temp__5276__auto__ = (function (){var G__19116 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(n);
return (garden.color.color_name__GT_color.cljs$core$IFn$_invoke$arity$1 ? garden.color.color_name__GT_color.cljs$core$IFn$_invoke$arity$1(G__19116) : garden.color.color_name__GT_color.call(null,G__19116));
})();
if(cljs.core.truth_(temp__5276__auto__)){
var h = temp__5276__auto__;
return h;
} else {
throw garden.color.ex_info_color_name(n);
}
});
garden.color.scale_color_value = (function garden$color$scale_color_value(value,amount){
return (value + (((amount > (0)))?(((100) - value) * (amount / (100))):((value * amount) / (100))));
});
/**
 * Scale the lightness of a color by amount
 */
garden.color.scale_lightness = (function garden$color$scale_lightness(color,amount){
return garden.color.update_color(color,cljs.core.cst$kw$lightness,garden.color.scale_color_value,amount);
});
/**
 * Scale the saturation of a color by amount
 */
garden.color.scale_saturation = (function garden$color$scale_saturation(color,amount){
return garden.color.update_color(color,cljs.core.cst$kw$saturation,garden.color.scale_color_value,amount);
});
garden.color.decrown_hex = (function garden$color$decrown_hex(hex){
return clojure.string.replace(hex,/^#/,"");
});
garden.color.crown_hex = (function garden$color$crown_hex(hex){
if(cljs.core.truth_(cljs.core.re_find(/^#/,hex))){
return hex;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex)].join('');
}
});
/**
 * (expand-hex "#abc") -> "aabbcc"
 * (expand-hex "333333") -> "333333"
 */
garden.color.expand_hex = (function garden$color$expand_hex(hex){
var _ = garden.color.decrown_hex(hex);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(_))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_,_], 0)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(_))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((6),_));
} else {
return _;

}
}
});
/**
 * (hex->long "#abc") -> 11189196
 */
garden.color.hex__GT_long = (function garden$color$hex__GT_long(hex){
var G__19117 = garden.color.expand_hex(clojure.string.replace(hex,/^#/,""));
var G__19118 = (16);
return parseInt(G__19117,G__19118);
});
/**
 * (long->hex 11189196) -> "aabbcc"
 */
garden.color.long__GT_hex = (function garden$color$long__GT_hex(long$){
return long$.toString((16));
});
/**
 * `weight` is number 0 to 100 (%).
 * At 0, it weighs color-1 at 100%.
 * At 100, it weighs color-2 at 100%.
 * Returns hex string.
 */
garden.color.weighted_mix = (function garden$color$weighted_mix(color_1,color_2,weight){
var vec__19120 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19119_SHARP_){
return (p1__19119_SHARP_ / (100));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((100) - weight),weight], null));
var weight_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19120,(0),null);
var weight_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19120,(1),null);
var vec__19123 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(garden.color.hex__GT_long,garden.color.as_hex),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color_1,color_2], null));
var long_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19123,(0),null);
var long_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19123,(1),null);
return garden.color.crown_hex(garden.color.expand_hex(garden.color.long__GT_hex(((long_1 * weight_1) + (long_2 * weight_2)))));
});
