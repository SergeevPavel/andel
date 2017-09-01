// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('andel.intervals');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('andel.tree');
andel.intervals.plus_infinity = 1.0E9;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
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
andel.intervals.IntervalNode = (function (offset,length,rightest,__meta,__extmap,__hash){
this.offset = offset;
this.length = length;
this.rightest = rightest;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
andel.intervals.IntervalNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8352__auto__,k__8353__auto__){
var self__ = this;
var this__8352__auto____$1 = this;
return this__8352__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8353__auto__,null);
});

andel.intervals.IntervalNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8354__auto__,k19967,else__8355__auto__){
var self__ = this;
var this__8354__auto____$1 = this;
var G__19971 = k19967;
var G__19971__$1 = (((G__19971 instanceof cljs.core.Keyword))?G__19971.fqn:null);
switch (G__19971__$1) {
case "offset":
return self__.offset;

break;
case "length":
return self__.length;

break;
case "rightest":
return self__.rightest;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19967,else__8355__auto__);

}
});

andel.intervals.IntervalNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8366__auto__,writer__8367__auto__,opts__8368__auto__){
var self__ = this;
var this__8366__auto____$1 = this;
var pr_pair__8369__auto__ = ((function (this__8366__auto____$1){
return (function (keyval__8370__auto__){
return cljs.core.pr_sequential_writer(writer__8367__auto__,cljs.core.pr_writer,""," ","",opts__8368__auto__,keyval__8370__auto__);
});})(this__8366__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8367__auto__,pr_pair__8369__auto__,"#andel.intervals.IntervalNode{",", ","}",opts__8368__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$length,self__.length],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rightest,self__.rightest],null))], null),self__.__extmap));
});

andel.intervals.IntervalNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19966){
var self__ = this;
var G__19966__$1 = this;
return (new cljs.core.RecordIter((0),G__19966__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$offset,cljs.core.cst$kw$length,cljs.core.cst$kw$rightest], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

andel.intervals.IntervalNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8350__auto__){
var self__ = this;
var this__8350__auto____$1 = this;
return self__.__meta;
});

andel.intervals.IntervalNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8347__auto__){
var self__ = this;
var this__8347__auto____$1 = this;
return (new andel.intervals.IntervalNode(self__.offset,self__.length,self__.rightest,self__.__meta,self__.__extmap,self__.__hash));
});

andel.intervals.IntervalNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8356__auto__){
var self__ = this;
var this__8356__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

andel.intervals.IntervalNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8348__auto__){
var self__ = this;
var this__8348__auto____$1 = this;
var h__8120__auto__ = self__.__hash;
if(!((h__8120__auto__ == null))){
return h__8120__auto__;
} else {
var h__8120__auto____$1 = (function (){var fexpr__19972 = ((function (h__8120__auto__,this__8348__auto____$1){
return (function (coll__8349__auto__){
return (2129495910 ^ cljs.core.hash_unordered_coll(coll__8349__auto__));
});})(h__8120__auto__,this__8348__auto____$1))
;
return fexpr__19972(this__8348__auto____$1);
})();
self__.__hash = h__8120__auto____$1;

return h__8120__auto____$1;
}
});

andel.intervals.IntervalNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19968,other19969){
var self__ = this;
var this19968__$1 = this;
return (!((other19969 == null))) && ((this19968__$1.constructor === other19969.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19968__$1.offset,other19969.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19968__$1.length,other19969.length)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19968__$1.rightest,other19969.rightest)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19968__$1.__extmap,other19969.__extmap));
});

andel.intervals.IntervalNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8361__auto__,k__8362__auto__){
var self__ = this;
var this__8361__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$rightest,null,cljs.core.cst$kw$length,null], null), null),k__8362__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8361__auto____$1),self__.__meta),k__8362__auto__);
} else {
return (new andel.intervals.IntervalNode(self__.offset,self__.length,self__.rightest,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8362__auto__)),null));
}
});

andel.intervals.IntervalNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8359__auto__,k__8360__auto__,G__19966){
var self__ = this;
var this__8359__auto____$1 = this;
var pred__19973 = cljs.core.keyword_identical_QMARK_;
var expr__19974 = k__8360__auto__;
if(cljs.core.truth_((function (){var G__19976 = cljs.core.cst$kw$offset;
var G__19977 = expr__19974;
return (pred__19973.cljs$core$IFn$_invoke$arity$2 ? pred__19973.cljs$core$IFn$_invoke$arity$2(G__19976,G__19977) : pred__19973.call(null,G__19976,G__19977));
})())){
return (new andel.intervals.IntervalNode(G__19966,self__.length,self__.rightest,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19978 = cljs.core.cst$kw$length;
var G__19979 = expr__19974;
return (pred__19973.cljs$core$IFn$_invoke$arity$2 ? pred__19973.cljs$core$IFn$_invoke$arity$2(G__19978,G__19979) : pred__19973.call(null,G__19978,G__19979));
})())){
return (new andel.intervals.IntervalNode(self__.offset,G__19966,self__.rightest,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19980 = cljs.core.cst$kw$rightest;
var G__19981 = expr__19974;
return (pred__19973.cljs$core$IFn$_invoke$arity$2 ? pred__19973.cljs$core$IFn$_invoke$arity$2(G__19980,G__19981) : pred__19973.call(null,G__19980,G__19981));
})())){
return (new andel.intervals.IntervalNode(self__.offset,self__.length,G__19966,self__.__meta,self__.__extmap,null));
} else {
return (new andel.intervals.IntervalNode(self__.offset,self__.length,self__.rightest,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8360__auto__,G__19966),null));
}
}
}
});

andel.intervals.IntervalNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8364__auto__){
var self__ = this;
var this__8364__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$length,self__.length],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rightest,self__.rightest],null))], null),self__.__extmap));
});

andel.intervals.IntervalNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8351__auto__,G__19966){
var self__ = this;
var this__8351__auto____$1 = this;
return (new andel.intervals.IntervalNode(self__.offset,self__.length,self__.rightest,G__19966,self__.__extmap,self__.__hash));
});

andel.intervals.IntervalNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8357__auto__,entry__8358__auto__){
var self__ = this;
var this__8357__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8358__auto__)){
return this__8357__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8358__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8358__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8357__auto____$1,entry__8358__auto__);
}
});

andel.intervals.IntervalNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$offset,cljs.core.cst$sym$length,cljs.core.cst$sym$rightest], null);
});

andel.intervals.IntervalNode.cljs$lang$type = true;

andel.intervals.IntervalNode.cljs$lang$ctorPrSeq = (function (this__8390__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"andel.intervals/IntervalNode");
});

andel.intervals.IntervalNode.cljs$lang$ctorPrWriter = (function (this__8390__auto__,writer__8391__auto__){
return cljs.core._write(writer__8391__auto__,"andel.intervals/IntervalNode");
});

andel.intervals.__GT_IntervalNode = (function andel$intervals$__GT_IntervalNode(offset,length,rightest){
return (new andel.intervals.IntervalNode(offset,length,rightest,null,null,null));
});

andel.intervals.map__GT_IntervalNode = (function andel$intervals$map__GT_IntervalNode(G__19970){
return (new andel.intervals.IntervalNode(cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__19970),cljs.core.cst$kw$length.cljs$core$IFn$_invoke$arity$1(G__19970),cljs.core.cst$kw$rightest.cljs$core$IFn$_invoke$arity$1(G__19970),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19970,cljs.core.cst$kw$offset,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$length,cljs.core.cst$kw$rightest], 0))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
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
andel.intervals.IntervalLeaf = (function (offset,length,rightest,greedy_left_QMARK_,greedy_right_QMARK_,background,foreground,__meta,__extmap,__hash){
this.offset = offset;
this.length = length;
this.rightest = rightest;
this.greedy_left_QMARK_ = greedy_left_QMARK_;
this.greedy_right_QMARK_ = greedy_right_QMARK_;
this.background = background;
this.foreground = foreground;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
andel.intervals.IntervalLeaf.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8352__auto__,k__8353__auto__){
var self__ = this;
var this__8352__auto____$1 = this;
return this__8352__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8353__auto__,null);
});

andel.intervals.IntervalLeaf.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8354__auto__,k19984,else__8355__auto__){
var self__ = this;
var this__8354__auto____$1 = this;
var G__19988 = k19984;
var G__19988__$1 = (((G__19988 instanceof cljs.core.Keyword))?G__19988.fqn:null);
switch (G__19988__$1) {
case "offset":
return self__.offset;

break;
case "length":
return self__.length;

break;
case "rightest":
return self__.rightest;

break;
case "greedy-left?":
return self__.greedy_left_QMARK_;

break;
case "greedy-right?":
return self__.greedy_right_QMARK_;

break;
case "background":
return self__.background;

break;
case "foreground":
return self__.foreground;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19984,else__8355__auto__);

}
});

andel.intervals.IntervalLeaf.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8366__auto__,writer__8367__auto__,opts__8368__auto__){
var self__ = this;
var this__8366__auto____$1 = this;
var pr_pair__8369__auto__ = ((function (this__8366__auto____$1){
return (function (keyval__8370__auto__){
return cljs.core.pr_sequential_writer(writer__8367__auto__,cljs.core.pr_writer,""," ","",opts__8368__auto__,keyval__8370__auto__);
});})(this__8366__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8367__auto__,pr_pair__8369__auto__,"#andel.intervals.IntervalLeaf{",", ","}",opts__8368__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$length,self__.length],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rightest,self__.rightest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$greedy_DASH_left_QMARK_,self__.greedy_left_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$greedy_DASH_right_QMARK_,self__.greedy_right_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$background,self__.background],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$foreground,self__.foreground],null))], null),self__.__extmap));
});

andel.intervals.IntervalLeaf.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19983){
var self__ = this;
var G__19983__$1 = this;
return (new cljs.core.RecordIter((0),G__19983__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$offset,cljs.core.cst$kw$length,cljs.core.cst$kw$rightest,cljs.core.cst$kw$greedy_DASH_left_QMARK_,cljs.core.cst$kw$greedy_DASH_right_QMARK_,cljs.core.cst$kw$background,cljs.core.cst$kw$foreground], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

andel.intervals.IntervalLeaf.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8350__auto__){
var self__ = this;
var this__8350__auto____$1 = this;
return self__.__meta;
});

andel.intervals.IntervalLeaf.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8347__auto__){
var self__ = this;
var this__8347__auto____$1 = this;
return (new andel.intervals.IntervalLeaf(self__.offset,self__.length,self__.rightest,self__.greedy_left_QMARK_,self__.greedy_right_QMARK_,self__.background,self__.foreground,self__.__meta,self__.__extmap,self__.__hash));
});

andel.intervals.IntervalLeaf.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8356__auto__){
var self__ = this;
var this__8356__auto____$1 = this;
return (7 + cljs.core.count(self__.__extmap));
});

andel.intervals.IntervalLeaf.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8348__auto__){
var self__ = this;
var this__8348__auto____$1 = this;
var h__8120__auto__ = self__.__hash;
if(!((h__8120__auto__ == null))){
return h__8120__auto__;
} else {
var h__8120__auto____$1 = (function (){var fexpr__19989 = ((function (h__8120__auto__,this__8348__auto____$1){
return (function (coll__8349__auto__){
return (1881782143 ^ cljs.core.hash_unordered_coll(coll__8349__auto__));
});})(h__8120__auto__,this__8348__auto____$1))
;
return fexpr__19989(this__8348__auto____$1);
})();
self__.__hash = h__8120__auto____$1;

return h__8120__auto____$1;
}
});

andel.intervals.IntervalLeaf.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19985,other19986){
var self__ = this;
var this19985__$1 = this;
return (!((other19986 == null))) && ((this19985__$1.constructor === other19986.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19985__$1.offset,other19986.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19985__$1.length,other19986.length)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19985__$1.rightest,other19986.rightest)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19985__$1.greedy_left_QMARK_,other19986.greedy_left_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19985__$1.greedy_right_QMARK_,other19986.greedy_right_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19985__$1.background,other19986.background)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19985__$1.foreground,other19986.foreground)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19985__$1.__extmap,other19986.__extmap));
});

andel.intervals.IntervalLeaf.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8361__auto__,k__8362__auto__){
var self__ = this;
var this__8361__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$background,null,cljs.core.cst$kw$rightest,null,cljs.core.cst$kw$foreground,null,cljs.core.cst$kw$length,null,cljs.core.cst$kw$greedy_DASH_left_QMARK_,null,cljs.core.cst$kw$greedy_DASH_right_QMARK_,null], null), null),k__8362__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8361__auto____$1),self__.__meta),k__8362__auto__);
} else {
return (new andel.intervals.IntervalLeaf(self__.offset,self__.length,self__.rightest,self__.greedy_left_QMARK_,self__.greedy_right_QMARK_,self__.background,self__.foreground,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8362__auto__)),null));
}
});

andel.intervals.IntervalLeaf.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8359__auto__,k__8360__auto__,G__19983){
var self__ = this;
var this__8359__auto____$1 = this;
var pred__19990 = cljs.core.keyword_identical_QMARK_;
var expr__19991 = k__8360__auto__;
if(cljs.core.truth_((function (){var G__19993 = cljs.core.cst$kw$offset;
var G__19994 = expr__19991;
return (pred__19990.cljs$core$IFn$_invoke$arity$2 ? pred__19990.cljs$core$IFn$_invoke$arity$2(G__19993,G__19994) : pred__19990.call(null,G__19993,G__19994));
})())){
return (new andel.intervals.IntervalLeaf(G__19983,self__.length,self__.rightest,self__.greedy_left_QMARK_,self__.greedy_right_QMARK_,self__.background,self__.foreground,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19995 = cljs.core.cst$kw$length;
var G__19996 = expr__19991;
return (pred__19990.cljs$core$IFn$_invoke$arity$2 ? pred__19990.cljs$core$IFn$_invoke$arity$2(G__19995,G__19996) : pred__19990.call(null,G__19995,G__19996));
})())){
return (new andel.intervals.IntervalLeaf(self__.offset,G__19983,self__.rightest,self__.greedy_left_QMARK_,self__.greedy_right_QMARK_,self__.background,self__.foreground,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19997 = cljs.core.cst$kw$rightest;
var G__19998 = expr__19991;
return (pred__19990.cljs$core$IFn$_invoke$arity$2 ? pred__19990.cljs$core$IFn$_invoke$arity$2(G__19997,G__19998) : pred__19990.call(null,G__19997,G__19998));
})())){
return (new andel.intervals.IntervalLeaf(self__.offset,self__.length,G__19983,self__.greedy_left_QMARK_,self__.greedy_right_QMARK_,self__.background,self__.foreground,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19999 = cljs.core.cst$kw$greedy_DASH_left_QMARK_;
var G__20000 = expr__19991;
return (pred__19990.cljs$core$IFn$_invoke$arity$2 ? pred__19990.cljs$core$IFn$_invoke$arity$2(G__19999,G__20000) : pred__19990.call(null,G__19999,G__20000));
})())){
return (new andel.intervals.IntervalLeaf(self__.offset,self__.length,self__.rightest,G__19983,self__.greedy_right_QMARK_,self__.background,self__.foreground,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20001 = cljs.core.cst$kw$greedy_DASH_right_QMARK_;
var G__20002 = expr__19991;
return (pred__19990.cljs$core$IFn$_invoke$arity$2 ? pred__19990.cljs$core$IFn$_invoke$arity$2(G__20001,G__20002) : pred__19990.call(null,G__20001,G__20002));
})())){
return (new andel.intervals.IntervalLeaf(self__.offset,self__.length,self__.rightest,self__.greedy_left_QMARK_,G__19983,self__.background,self__.foreground,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20003 = cljs.core.cst$kw$background;
var G__20004 = expr__19991;
return (pred__19990.cljs$core$IFn$_invoke$arity$2 ? pred__19990.cljs$core$IFn$_invoke$arity$2(G__20003,G__20004) : pred__19990.call(null,G__20003,G__20004));
})())){
return (new andel.intervals.IntervalLeaf(self__.offset,self__.length,self__.rightest,self__.greedy_left_QMARK_,self__.greedy_right_QMARK_,G__19983,self__.foreground,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20005 = cljs.core.cst$kw$foreground;
var G__20006 = expr__19991;
return (pred__19990.cljs$core$IFn$_invoke$arity$2 ? pred__19990.cljs$core$IFn$_invoke$arity$2(G__20005,G__20006) : pred__19990.call(null,G__20005,G__20006));
})())){
return (new andel.intervals.IntervalLeaf(self__.offset,self__.length,self__.rightest,self__.greedy_left_QMARK_,self__.greedy_right_QMARK_,self__.background,G__19983,self__.__meta,self__.__extmap,null));
} else {
return (new andel.intervals.IntervalLeaf(self__.offset,self__.length,self__.rightest,self__.greedy_left_QMARK_,self__.greedy_right_QMARK_,self__.background,self__.foreground,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8360__auto__,G__19983),null));
}
}
}
}
}
}
}
});

andel.intervals.IntervalLeaf.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8364__auto__){
var self__ = this;
var this__8364__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$length,self__.length],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rightest,self__.rightest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$greedy_DASH_left_QMARK_,self__.greedy_left_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$greedy_DASH_right_QMARK_,self__.greedy_right_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$background,self__.background],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$foreground,self__.foreground],null))], null),self__.__extmap));
});

andel.intervals.IntervalLeaf.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8351__auto__,G__19983){
var self__ = this;
var this__8351__auto____$1 = this;
return (new andel.intervals.IntervalLeaf(self__.offset,self__.length,self__.rightest,self__.greedy_left_QMARK_,self__.greedy_right_QMARK_,self__.background,self__.foreground,G__19983,self__.__extmap,self__.__hash));
});

andel.intervals.IntervalLeaf.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8357__auto__,entry__8358__auto__){
var self__ = this;
var this__8357__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8358__auto__)){
return this__8357__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8358__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8358__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8357__auto____$1,entry__8358__auto__);
}
});

andel.intervals.IntervalLeaf.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$offset,cljs.core.cst$sym$length,cljs.core.cst$sym$rightest,cljs.core.cst$sym$greedy_DASH_left_QMARK_,cljs.core.cst$sym$greedy_DASH_right_QMARK_,cljs.core.cst$sym$background,cljs.core.cst$sym$foreground], null);
});

andel.intervals.IntervalLeaf.cljs$lang$type = true;

andel.intervals.IntervalLeaf.cljs$lang$ctorPrSeq = (function (this__8390__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"andel.intervals/IntervalLeaf");
});

andel.intervals.IntervalLeaf.cljs$lang$ctorPrWriter = (function (this__8390__auto__,writer__8391__auto__){
return cljs.core._write(writer__8391__auto__,"andel.intervals/IntervalLeaf");
});

andel.intervals.__GT_IntervalLeaf = (function andel$intervals$__GT_IntervalLeaf(offset,length,rightest,greedy_left_QMARK_,greedy_right_QMARK_,background,foreground){
return (new andel.intervals.IntervalLeaf(offset,length,rightest,greedy_left_QMARK_,greedy_right_QMARK_,background,foreground,null,null,null));
});

andel.intervals.map__GT_IntervalLeaf = (function andel$intervals$map__GT_IntervalLeaf(G__19987){
return (new andel.intervals.IntervalLeaf(cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__19987),cljs.core.cst$kw$length.cljs$core$IFn$_invoke$arity$1(G__19987),cljs.core.cst$kw$rightest.cljs$core$IFn$_invoke$arity$1(G__19987),cljs.core.cst$kw$greedy_DASH_left_QMARK_.cljs$core$IFn$_invoke$arity$1(G__19987),cljs.core.cst$kw$greedy_DASH_right_QMARK_.cljs$core$IFn$_invoke$arity$1(G__19987),cljs.core.cst$kw$background.cljs$core$IFn$_invoke$arity$1(G__19987),cljs.core.cst$kw$foreground.cljs$core$IFn$_invoke$arity$1(G__19987),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19987,cljs.core.cst$kw$offset,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$length,cljs.core.cst$kw$rightest,cljs.core.cst$kw$greedy_DASH_left_QMARK_,cljs.core.cst$kw$greedy_DASH_right_QMARK_,cljs.core.cst$kw$background,cljs.core.cst$kw$foreground], 0))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
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
andel.intervals.Marker = (function (from,to,greedy_left_QMARK_,greedy_right_QMARK_,background,foreground,__meta,__extmap,__hash){
this.from = from;
this.to = to;
this.greedy_left_QMARK_ = greedy_left_QMARK_;
this.greedy_right_QMARK_ = greedy_right_QMARK_;
this.background = background;
this.foreground = foreground;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
andel.intervals.Marker.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8352__auto__,k__8353__auto__){
var self__ = this;
var this__8352__auto____$1 = this;
return this__8352__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8353__auto__,null);
});

andel.intervals.Marker.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8354__auto__,k20009,else__8355__auto__){
var self__ = this;
var this__8354__auto____$1 = this;
var G__20013 = k20009;
var G__20013__$1 = (((G__20013 instanceof cljs.core.Keyword))?G__20013.fqn:null);
switch (G__20013__$1) {
case "from":
return self__.from;

break;
case "to":
return self__.to;

break;
case "greedy-left?":
return self__.greedy_left_QMARK_;

break;
case "greedy-right?":
return self__.greedy_right_QMARK_;

break;
case "background":
return self__.background;

break;
case "foreground":
return self__.foreground;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20009,else__8355__auto__);

}
});

andel.intervals.Marker.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8366__auto__,writer__8367__auto__,opts__8368__auto__){
var self__ = this;
var this__8366__auto____$1 = this;
var pr_pair__8369__auto__ = ((function (this__8366__auto____$1){
return (function (keyval__8370__auto__){
return cljs.core.pr_sequential_writer(writer__8367__auto__,cljs.core.pr_writer,""," ","",opts__8368__auto__,keyval__8370__auto__);
});})(this__8366__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8367__auto__,pr_pair__8369__auto__,"#andel.intervals.Marker{",", ","}",opts__8368__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$from,self__.from],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$to,self__.to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$greedy_DASH_left_QMARK_,self__.greedy_left_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$greedy_DASH_right_QMARK_,self__.greedy_right_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$background,self__.background],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$foreground,self__.foreground],null))], null),self__.__extmap));
});

andel.intervals.Marker.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20008){
var self__ = this;
var G__20008__$1 = this;
return (new cljs.core.RecordIter((0),G__20008__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$from,cljs.core.cst$kw$to,cljs.core.cst$kw$greedy_DASH_left_QMARK_,cljs.core.cst$kw$greedy_DASH_right_QMARK_,cljs.core.cst$kw$background,cljs.core.cst$kw$foreground], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

andel.intervals.Marker.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8350__auto__){
var self__ = this;
var this__8350__auto____$1 = this;
return self__.__meta;
});

andel.intervals.Marker.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8347__auto__){
var self__ = this;
var this__8347__auto____$1 = this;
return (new andel.intervals.Marker(self__.from,self__.to,self__.greedy_left_QMARK_,self__.greedy_right_QMARK_,self__.background,self__.foreground,self__.__meta,self__.__extmap,self__.__hash));
});

andel.intervals.Marker.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8356__auto__){
var self__ = this;
var this__8356__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
});

andel.intervals.Marker.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8348__auto__){
var self__ = this;
var this__8348__auto____$1 = this;
var h__8120__auto__ = self__.__hash;
if(!((h__8120__auto__ == null))){
return h__8120__auto__;
} else {
var h__8120__auto____$1 = (function (){var fexpr__20014 = ((function (h__8120__auto__,this__8348__auto____$1){
return (function (coll__8349__auto__){
return (645397536 ^ cljs.core.hash_unordered_coll(coll__8349__auto__));
});})(h__8120__auto__,this__8348__auto____$1))
;
return fexpr__20014(this__8348__auto____$1);
})();
self__.__hash = h__8120__auto____$1;

return h__8120__auto____$1;
}
});

andel.intervals.Marker.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20010,other20011){
var self__ = this;
var this20010__$1 = this;
return (!((other20011 == null))) && ((this20010__$1.constructor === other20011.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20010__$1.from,other20011.from)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20010__$1.to,other20011.to)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20010__$1.greedy_left_QMARK_,other20011.greedy_left_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20010__$1.greedy_right_QMARK_,other20011.greedy_right_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20010__$1.background,other20011.background)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20010__$1.foreground,other20011.foreground)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20010__$1.__extmap,other20011.__extmap));
});

andel.intervals.Marker.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8361__auto__,k__8362__auto__){
var self__ = this;
var this__8361__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$background,null,cljs.core.cst$kw$from,null,cljs.core.cst$kw$foreground,null,cljs.core.cst$kw$greedy_DASH_left_QMARK_,null,cljs.core.cst$kw$greedy_DASH_right_QMARK_,null,cljs.core.cst$kw$to,null], null), null),k__8362__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8361__auto____$1),self__.__meta),k__8362__auto__);
} else {
return (new andel.intervals.Marker(self__.from,self__.to,self__.greedy_left_QMARK_,self__.greedy_right_QMARK_,self__.background,self__.foreground,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8362__auto__)),null));
}
});

andel.intervals.Marker.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8359__auto__,k__8360__auto__,G__20008){
var self__ = this;
var this__8359__auto____$1 = this;
var pred__20015 = cljs.core.keyword_identical_QMARK_;
var expr__20016 = k__8360__auto__;
if(cljs.core.truth_((function (){var G__20018 = cljs.core.cst$kw$from;
var G__20019 = expr__20016;
return (pred__20015.cljs$core$IFn$_invoke$arity$2 ? pred__20015.cljs$core$IFn$_invoke$arity$2(G__20018,G__20019) : pred__20015.call(null,G__20018,G__20019));
})())){
return (new andel.intervals.Marker(G__20008,self__.to,self__.greedy_left_QMARK_,self__.greedy_right_QMARK_,self__.background,self__.foreground,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20020 = cljs.core.cst$kw$to;
var G__20021 = expr__20016;
return (pred__20015.cljs$core$IFn$_invoke$arity$2 ? pred__20015.cljs$core$IFn$_invoke$arity$2(G__20020,G__20021) : pred__20015.call(null,G__20020,G__20021));
})())){
return (new andel.intervals.Marker(self__.from,G__20008,self__.greedy_left_QMARK_,self__.greedy_right_QMARK_,self__.background,self__.foreground,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20022 = cljs.core.cst$kw$greedy_DASH_left_QMARK_;
var G__20023 = expr__20016;
return (pred__20015.cljs$core$IFn$_invoke$arity$2 ? pred__20015.cljs$core$IFn$_invoke$arity$2(G__20022,G__20023) : pred__20015.call(null,G__20022,G__20023));
})())){
return (new andel.intervals.Marker(self__.from,self__.to,G__20008,self__.greedy_right_QMARK_,self__.background,self__.foreground,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20024 = cljs.core.cst$kw$greedy_DASH_right_QMARK_;
var G__20025 = expr__20016;
return (pred__20015.cljs$core$IFn$_invoke$arity$2 ? pred__20015.cljs$core$IFn$_invoke$arity$2(G__20024,G__20025) : pred__20015.call(null,G__20024,G__20025));
})())){
return (new andel.intervals.Marker(self__.from,self__.to,self__.greedy_left_QMARK_,G__20008,self__.background,self__.foreground,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20026 = cljs.core.cst$kw$background;
var G__20027 = expr__20016;
return (pred__20015.cljs$core$IFn$_invoke$arity$2 ? pred__20015.cljs$core$IFn$_invoke$arity$2(G__20026,G__20027) : pred__20015.call(null,G__20026,G__20027));
})())){
return (new andel.intervals.Marker(self__.from,self__.to,self__.greedy_left_QMARK_,self__.greedy_right_QMARK_,G__20008,self__.foreground,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20028 = cljs.core.cst$kw$foreground;
var G__20029 = expr__20016;
return (pred__20015.cljs$core$IFn$_invoke$arity$2 ? pred__20015.cljs$core$IFn$_invoke$arity$2(G__20028,G__20029) : pred__20015.call(null,G__20028,G__20029));
})())){
return (new andel.intervals.Marker(self__.from,self__.to,self__.greedy_left_QMARK_,self__.greedy_right_QMARK_,self__.background,G__20008,self__.__meta,self__.__extmap,null));
} else {
return (new andel.intervals.Marker(self__.from,self__.to,self__.greedy_left_QMARK_,self__.greedy_right_QMARK_,self__.background,self__.foreground,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8360__auto__,G__20008),null));
}
}
}
}
}
}
});

andel.intervals.Marker.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8364__auto__){
var self__ = this;
var this__8364__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$from,self__.from],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$to,self__.to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$greedy_DASH_left_QMARK_,self__.greedy_left_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$greedy_DASH_right_QMARK_,self__.greedy_right_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$background,self__.background],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$foreground,self__.foreground],null))], null),self__.__extmap));
});

andel.intervals.Marker.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8351__auto__,G__20008){
var self__ = this;
var this__8351__auto____$1 = this;
return (new andel.intervals.Marker(self__.from,self__.to,self__.greedy_left_QMARK_,self__.greedy_right_QMARK_,self__.background,self__.foreground,G__20008,self__.__extmap,self__.__hash));
});

andel.intervals.Marker.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8357__auto__,entry__8358__auto__){
var self__ = this;
var this__8357__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8358__auto__)){
return this__8357__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8358__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8358__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8357__auto____$1,entry__8358__auto__);
}
});

andel.intervals.Marker.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$from,cljs.core.cst$sym$to,cljs.core.cst$sym$greedy_DASH_left_QMARK_,cljs.core.cst$sym$greedy_DASH_right_QMARK_,cljs.core.cst$sym$background,cljs.core.cst$sym$foreground], null);
});

andel.intervals.Marker.cljs$lang$type = true;

andel.intervals.Marker.cljs$lang$ctorPrSeq = (function (this__8390__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"andel.intervals/Marker");
});

andel.intervals.Marker.cljs$lang$ctorPrWriter = (function (this__8390__auto__,writer__8391__auto__){
return cljs.core._write(writer__8391__auto__,"andel.intervals/Marker");
});

andel.intervals.__GT_Marker = (function andel$intervals$__GT_Marker(from,to,greedy_left_QMARK_,greedy_right_QMARK_,background,foreground){
return (new andel.intervals.Marker(from,to,greedy_left_QMARK_,greedy_right_QMARK_,background,foreground,null,null,null));
});

andel.intervals.map__GT_Marker = (function andel$intervals$map__GT_Marker(G__20012){
return (new andel.intervals.Marker(cljs.core.cst$kw$from.cljs$core$IFn$_invoke$arity$1(G__20012),cljs.core.cst$kw$to.cljs$core$IFn$_invoke$arity$1(G__20012),cljs.core.cst$kw$greedy_DASH_left_QMARK_.cljs$core$IFn$_invoke$arity$1(G__20012),cljs.core.cst$kw$greedy_DASH_right_QMARK_.cljs$core$IFn$_invoke$arity$1(G__20012),cljs.core.cst$kw$background.cljs$core$IFn$_invoke$arity$1(G__20012),cljs.core.cst$kw$foreground.cljs$core$IFn$_invoke$arity$1(G__20012),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20012,cljs.core.cst$kw$from,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$to,cljs.core.cst$kw$greedy_DASH_left_QMARK_,cljs.core.cst$kw$greedy_DASH_right_QMARK_,cljs.core.cst$kw$background,cljs.core.cst$kw$foreground], 0))),null));
});

andel.intervals.reducing_fn = (function andel$intervals$reducing_fn(var_args){
var G__20032 = arguments.length;
switch (G__20032) {
case 0:
return andel.intervals.reducing_fn.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return andel.intervals.reducing_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

andel.intervals.reducing_fn.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

andel.intervals.reducing_fn.cljs$core$IFn$_invoke$arity$2 = (function (left,right){
if((left == null)){
return right;
} else {
if((right == null)){
return left;
} else {
var l_offset = left.offset;
var l_length = left.length;
var l_rightest = left.rightest;
var r_offset = right.offset;
var r_rightest = right.rightest;
var r_length = right.length;
return (new andel.intervals.IntervalNode(l_offset,(function (){var x__8016__auto__ = l_length;
var y__8017__auto__ = ((l_rightest + r_offset) + r_length);
return ((x__8016__auto__ > y__8017__auto__) ? x__8016__auto__ : y__8017__auto__);
})(),((l_rightest + r_offset) + r_rightest),null,null,null));

}
}
});

andel.intervals.reducing_fn.cljs$lang$maxFixedArity = 2;

andel.intervals.metrics_fn = (function andel$intervals$metrics_fn(leaf){
var offset = leaf.offset;
var length = leaf.length;
var rightest = leaf.rightest;
return (new andel.intervals.IntervalNode(offset,length,rightest,null,null,null));
});
andel.intervals.tree_config = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$reducing_DASH_fn,andel.intervals.reducing_fn,cljs.core.cst$kw$metrics_DASH_fn,andel.intervals.metrics_fn,cljs.core.cst$kw$leaf_DASH_overflown_QMARK_,cljs.core.constantly(false),cljs.core.cst$kw$split_DASH_thresh,(16),cljs.core.cst$kw$leaf_DASH_underflown_QMARK_,cljs.core.constantly(false)], null);
andel.intervals.zipper = (function andel$intervals$zipper(it){
return andel.tree.zipper(it,andel.intervals.tree_config);
});
andel.intervals.root = (function andel$intervals$root(loc){
return andel.tree.root(loc);
});
andel.intervals.mark_changed = (function andel$intervals$mark_changed(loc){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(loc,cljs.core.cst$kw$path,cljs.core.assoc,cljs.core.cst$kw$changed_QMARK_,true);
});
andel.intervals.by_offset = (function andel$intervals$by_offset(offset){
return (function (acc,m){
var m__$1 = andel.intervals.reducing_fn.cljs$core$IFn$_invoke$arity$2(acc,m);
return (offset < (m__$1.offset + m__$1.rightest));
});
});
andel.intervals.loc__GT_metrics = (function andel$intervals$loc__GT_metrics(loc){
return (andel.tree.node.cljs$core$IFn$_invoke$arity$1 ? andel.tree.node.cljs$core$IFn$_invoke$arity$1(loc) : andel.tree.node.call(null,loc)).metrics;
});
andel.intervals.loc__GT_data = (function andel$intervals$loc__GT_data(loc){
if(andel.tree.leaf_QMARK_(loc)){
} else {
throw (new Error("Assert failed: (tree/leaf? loc)"));
}

return (andel.tree.node.cljs$core$IFn$_invoke$arity$1 ? andel.tree.node.cljs$core$IFn$_invoke$arity$1(loc) : andel.tree.node.call(null,loc)).data;
});
andel.intervals.loc__GT_Marker = (function andel$intervals$loc__GT_Marker(loc){
var metrics = andel.intervals.loc__GT_metrics(loc);
var leaf_data = andel.intervals.loc__GT_data(loc);
var rightest = (function (){var or__7678__auto__ = (function (){var G__20035 = andel.tree.loc_acc(loc);
if((G__20035 == null)){
return null;
} else {
return G__20035.rightest;
}
})();
if(cljs.core.truth_(or__7678__auto__)){
return or__7678__auto__;
} else {
return (0);
}
})();
var from = (metrics.offset + rightest);
var length = metrics.length;
return (new andel.intervals.Marker(from,(from + length),leaf_data.greedy_left_QMARK_,leaf_data.greedy_right_QMARK_,leaf_data.background,leaf_data.foreground,null,null,null));
});
andel.intervals.offset__GT_tree_basis = (function andel$intervals$offset__GT_tree_basis(offset){
return (offset + (1));
});
andel.intervals.interval__GT_tree_basis = (function andel$intervals$interval__GT_tree_basis(interval){
var from = interval.from;
var to = interval.to;
var g_l_QMARK_ = interval.greedy_left_QMARK_;
var g_r_QMARK_ = interval.greedy_right_QMARK_;
var bg = interval.background;
var fg = interval.foreground;
return (new andel.intervals.Marker(andel.intervals.offset__GT_tree_basis(from),andel.intervals.offset__GT_tree_basis(to),g_l_QMARK_,g_r_QMARK_,bg,fg,null,null,null));
});
andel.intervals.tree_basis__GT_offset = (function andel$intervals$tree_basis__GT_offset(offset){
return (offset - (1));
});
andel.intervals.tree_basis__GT_interval = (function andel$intervals$tree_basis__GT_interval(interval){
var from = interval.from;
var to = interval.to;
var g_l_QMARK_ = interval.greedy_left_QMARK_;
var g_r_QMARK_ = interval.greedy_right_QMARK_;
var bg = interval.background;
var fg = interval.foreground;
return (new andel.intervals.Marker(andel.intervals.tree_basis__GT_offset(from),andel.intervals.tree_basis__GT_offset(to),g_l_QMARK_,g_r_QMARK_,bg,fg,null,null,null));
});
andel.intervals.update_leaf = (function andel$intervals$update_leaf(loc,f){
if(andel.tree.leaf_QMARK_((andel.tree.node.cljs$core$IFn$_invoke$arity$1 ? andel.tree.node.cljs$core$IFn$_invoke$arity$1(loc) : andel.tree.node.call(null,loc)))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("update-leaf should recieve leaf"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(tree/leaf? (tree/node loc))")].join('')));
}

var G__20036 = loc;
var G__20037 = ((function (G__20036){
return (function (leaf){
var data = leaf.data;
var fixed_interval = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(data) : f.call(null,data));
return andel.tree.__GT_Leaf(fixed_interval,fixed_interval);
});})(G__20036))
;
return (andel.tree.edit.cljs$core$IFn$_invoke$arity$2 ? andel.tree.edit.cljs$core$IFn$_invoke$arity$2(G__20036,G__20037) : andel.tree.edit.call(null,G__20036,G__20037));
});
andel.intervals.update_leaf_offset = (function andel$intervals$update_leaf_offset(loc,f){
return andel.intervals.update_leaf(loc,(function (data){
var offset = data.offset;
var length = data.length;
var rightest = data.rightest;
var g_l_QMARK_ = data.greedy_left_QMARK_;
var g_r_QMARK_ = data.greedy_right_QMARK_;
var bg = data.background;
var fg = data.foreground;
return (new andel.intervals.IntervalLeaf((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(offset) : f.call(null,offset)),length,rightest,g_l_QMARK_,g_r_QMARK_,bg,fg,null,null,null));
}));
});
andel.intervals.update_leaf_length = (function andel$intervals$update_leaf_length(loc,f){
return andel.intervals.update_leaf(loc,(function (data){
var offset = data.offset;
var length = data.length;
var rightest = data.rightest;
var g_l_QMARK_ = data.greedy_left_QMARK_;
var g_r_QMARK_ = data.greedy_right_QMARK_;
var bg = data.background;
var fg = data.foreground;
return (new andel.intervals.IntervalLeaf(offset,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(length) : f.call(null,length)),rightest,g_l_QMARK_,g_r_QMARK_,bg,fg,null,null,null));
}));
});
andel.intervals.tree__GT_intervals = (function andel$intervals$tree__GT_intervals(tr){
var loc = andel.intervals.zipper(tr);
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(andel.tree.end_QMARK_(loc))){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(andel.intervals.tree_basis__GT_interval,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((1),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),acc))));
} else {
if(andel.tree.leaf_QMARK_((andel.tree.node.cljs$core$IFn$_invoke$arity$1 ? andel.tree.node.cljs$core$IFn$_invoke$arity$1(loc) : andel.tree.node.call(null,loc)))){
var G__20038 = andel.tree.next(loc);
var G__20039 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,andel.intervals.loc__GT_Marker(loc));
loc = G__20038;
acc = G__20039;
continue;
} else {
var G__20040 = andel.tree.next(loc);
var G__20041 = acc;
loc = G__20040;
acc = G__20041;
continue;

}
}
break;
}
});
andel.intervals.intersect = (function andel$intervals$intersect(a,b){
var vec__20042 = (((a.from < b.from))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var fst = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20042,(0),null);
var snd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20042,(1),null);
var fst_len = (fst.to - fst.from);
var snd_len = (snd.to - snd.from);
if(((fst_len === (0))) || ((snd_len === (0)))){
return false;
} else {
return (snd.from < fst.to);
}
});
andel.intervals.intersect_inclusive = (function andel$intervals$intersect_inclusive(a,b){
var vec__20045 = (((a.from < b.from))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var fst = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20045,(0),null);
var snd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20045,(1),null);
return (snd.from <= fst.to);
});
andel.intervals.scan_intersect = (function andel$intervals$scan_intersect(loc,interval){
return andel.tree.scan(loc,(function (acc_metrics,node_metrics){
var metrics = andel.intervals.reducing_fn.cljs$core$IFn$_invoke$arity$2(acc_metrics,node_metrics);
var rightest = (function (){var or__7678__auto__ = (function (){var G__20049 = acc_metrics;
if((G__20049 == null)){
return null;
} else {
return G__20049.rightest;
}
})();
if(cljs.core.truth_(or__7678__auto__)){
return or__7678__auto__;
} else {
return (0);
}
})();
var offset = node_metrics.offset;
var length = node_metrics.length;
var from = (offset + rightest);
return andel.intervals.intersect((new andel.intervals.Marker(from,(from + length),null,null,null,null,null,null,null)),interval);
}));
});
andel.intervals.make_leaf = (function andel$intervals$make_leaf(offset,length,greedy_left_QMARK_,greedy_right_QMARK_,background,foreground){
return andel.tree.make_leaf((new andel.intervals.IntervalLeaf(offset,length,(0),greedy_left_QMARK_,greedy_right_QMARK_,background,foreground,null,null,null)),andel.intervals.tree_config);
});
andel.intervals.intervals__GT_tree = (function andel$intervals$intervals__GT_tree(intervals){
return andel.intervals.root(andel.intervals.mark_changed(andel.intervals.zipper(andel.tree.make_node(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20050_SHARP_){
return andel.tree.make_leaf(p1__20050_SHARP_,andel.intervals.tree_config);
}),intervals),andel.intervals.tree_config))));
});
andel.intervals.make_interval_tree = (function andel$intervals$make_interval_tree(){
return andel.intervals.intervals__GT_tree(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new andel.intervals.IntervalLeaf((0),(0),(0),false,false,null,null,null,null,null)),(new andel.intervals.IntervalLeaf(andel.intervals.plus_infinity,(0),(0),false,false,null,null,null,null,null))], null));
});
andel.intervals.insert_one = (function andel$intervals$insert_one(loc,interval){
var from = interval.from;
var to = interval.to;
var greedy_left_QMARK_ = interval.greedy_left_QMARK_;
var greedy_right_QMARK_ = interval.greedy_right_QMARK_;
var bg = interval.background;
var fg = interval.foreground;
var r_sibling_loc = andel.tree.scan(loc,andel.intervals.by_offset(from));
var r_offset = (andel.tree.node.cljs$core$IFn$_invoke$arity$1 ? andel.tree.node.cljs$core$IFn$_invoke$arity$1(r_sibling_loc) : andel.tree.node.call(null,r_sibling_loc)).metrics.offset;
var r_sibling_marker = andel.intervals.loc__GT_Marker(r_sibling_loc);
var r_from = r_sibling_marker.from;
var r_to = r_sibling_marker.to;
var len = (to - from);
var new_r_offset = (r_from - from);
var offset = (r_offset - new_r_offset);
return andel.intervals.update_leaf_offset(andel.tree.insert_left(r_sibling_loc,andel.intervals.make_leaf(offset,len,greedy_left_QMARK_,greedy_right_QMARK_,bg,fg)),cljs.core.constantly(new_r_offset));
});
andel.intervals.add_intervals = (function andel$intervals$add_intervals(itree,intervals){
return andel.intervals.root(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(andel.intervals.insert_one,andel.intervals.zipper(itree),cljs.core.map.cljs$core$IFn$_invoke$arity$2(andel.intervals.interval__GT_tree_basis,intervals)));
});
andel.intervals.remove_leaf = (function andel$intervals$remove_leaf(loc){
var data = andel.intervals.loc__GT_data(loc);
var offset = data.offset;
var length = data.length;
var marker = andel.intervals.loc__GT_Marker(loc);
var from = marker.from;
var to = marker.to;
return andel.intervals.update_leaf_offset((function (){var G__20053 = andel.tree.remove(loc);
var fexpr__20052 = ((function (G__20053,data,offset,length,marker,from,to){
return (function (loc__$1){
if(!(andel.tree.leaf_QMARK_((andel.tree.node.cljs$core$IFn$_invoke$arity$1 ? andel.tree.node.cljs$core$IFn$_invoke$arity$1(loc__$1) : andel.tree.node.call(null,loc__$1))))){
return andel.tree.next_leaf(loc__$1);
} else {
return loc__$1;
}
});})(G__20053,data,offset,length,marker,from,to))
;
return fexpr__20052(G__20053);
})(),((function (data,offset,length,marker,from,to){
return (function (p1__20051_SHARP_){
return (p1__20051_SHARP_ + offset);
});})(data,offset,length,marker,from,to))
);
});
andel.intervals.next_changed = (function andel$intervals$next_changed(loc,offset){
return andel.tree.scan(loc,(function (acc_metrics,node_metrics){
var metrics = andel.intervals.reducing_fn.cljs$core$IFn$_invoke$arity$2(acc_metrics,node_metrics);
var rightest = (function (){var or__7678__auto__ = (function (){var G__20055 = acc_metrics;
if((G__20055 == null)){
return null;
} else {
return G__20055.rightest;
}
})();
if(cljs.core.truth_(or__7678__auto__)){
return or__7678__auto__;
} else {
return (0);
}
})();
var node_offset = node_metrics.offset;
var length = node_metrics.length;
var from = (node_offset + rightest);
var to = (from + length);
return (((from <= offset)) && ((offset <= to))) || ((offset < (metrics.offset + metrics.rightest)));
}));
});
andel.intervals.collect_with_remove = (function andel$intervals$collect_with_remove(itree,offset,size){
var loc = andel.intervals.zipper(itree);
var acc = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var new_loc = andel.intervals.next_changed(loc,offset);
if(cljs.core.truth_(andel.tree.end_QMARK_(new_loc))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [andel.tree.root(new_loc),acc], null);
} else {
var from_to = andel.intervals.loc__GT_Marker(new_loc);
var from = from_to.from;
var to = from_to.to;
if((offset < from)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [andel.tree.root(andel.intervals.update_leaf_offset(new_loc,((function (loc,acc,from_to,from,to,new_loc){
return (function (p1__20056_SHARP_){
return (p1__20056_SHARP_ + size);
});})(loc,acc,from_to,from,to,new_loc))
)),cljs.core.persistent_BANG_(acc)], null);
} else {
var G__20057 = andel.intervals.remove_leaf(new_loc);
var G__20058 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,from_to);
loc = G__20057;
acc = G__20058;
continue;
}
}
break;
}
});
andel.intervals.process_interval = (function andel$intervals$process_interval(interval,offset,size){
var from = interval.from;
var to = interval.to;
var greedy_left_QMARK_ = interval.greedy_left_QMARK_;
var greedy_right_QMARK_ = interval.greedy_right_QMARK_;
if(cljs.core.truth_((function (){var and__7666__auto__ = greedy_left_QMARK_;
if(cljs.core.truth_(and__7666__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset,from);
} else {
return and__7666__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(interval,cljs.core.cst$kw$to,(to + size));
} else {
if(cljs.core.truth_((function (){var and__7666__auto__ = greedy_right_QMARK_;
if(cljs.core.truth_(and__7666__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset,to);
} else {
return and__7666__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(interval,cljs.core.cst$kw$to,(to + size));
} else {
if(((from < offset)) && ((offset < to))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(interval,cljs.core.cst$kw$to,(to + size));
} else {
if((offset <= from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(interval,cljs.core.cst$kw$to,(to + size),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$from,(from + size)], 0));
} else {
return interval;

}
}
}
}
});
andel.intervals.type_in = (function andel$intervals$type_in(itree,p__20060){
var vec__20061 = p__20060;
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20061,(0),null);
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20061,(1),null);
var offset__$1 = andel.intervals.offset__GT_tree_basis(offset);
var vec__20064 = andel.intervals.collect_with_remove(itree,offset__$1,size);
var itree_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20064,(0),null);
var intervals = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20064,(1),null);
var intervals_SINGLEQUOTE_ = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$from,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (offset__$1,vec__20064,itree_SINGLEQUOTE_,intervals,vec__20061,offset,size){
return (function (p1__20059_SHARP_){
return andel.intervals.process_interval(p1__20059_SHARP_,offset__$1,size);
});})(offset__$1,vec__20064,itree_SINGLEQUOTE_,intervals,vec__20061,offset,size))
,intervals));
return andel.intervals.root(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(andel.intervals.insert_one,andel.intervals.zipper(itree_SINGLEQUOTE_),intervals_SINGLEQUOTE_));
});
andel.intervals.collect_with_remove_changed = (function andel$intervals$collect_with_remove_changed(itree,offset,size){
var changed_QMARK_ = (function (acc_metrics,node_metrics){
var metrics = andel.intervals.reducing_fn.cljs$core$IFn$_invoke$arity$2(acc_metrics,node_metrics);
var rightest = (function (){var or__7678__auto__ = (function (){var G__20069 = acc_metrics;
if((G__20069 == null)){
return null;
} else {
return G__20069.rightest;
}
})();
if(cljs.core.truth_(or__7678__auto__)){
return or__7678__auto__;
} else {
return (0);
}
})();
var node_offset = node_metrics.offset;
var length = node_metrics.length;
var from = (node_offset + rightest);
var to = (from + length);
var or__7678__auto__ = andel.intervals.intersect_inclusive((new andel.intervals.Marker(from,to,null,null,null,null,null,null,null)),(new andel.intervals.Marker(offset,(offset + size),null,null,null,null,null,null,null)));
if(cljs.core.truth_(or__7678__auto__)){
return or__7678__auto__;
} else {
return ((offset + size) < (metrics.offset + metrics.rightest));
}
});
var loc = andel.intervals.zipper(itree);
var acc = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var new_loc = andel.tree.scan(loc,changed_QMARK_);
if(cljs.core.truth_(andel.tree.end_QMARK_(new_loc))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [andel.tree.root(new_loc),acc], null);
} else {
var from_to = andel.intervals.loc__GT_Marker(new_loc);
var from = from_to.from;
var to = from_to.to;
if(((offset + size) < from)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [andel.tree.root(andel.intervals.update_leaf_offset(new_loc,((function (loc,acc,from_to,from,to,new_loc,changed_QMARK_){
return (function (p1__20067_SHARP_){
return (p1__20067_SHARP_ - size);
});})(loc,acc,from_to,from,to,new_loc,changed_QMARK_))
)),cljs.core.persistent_BANG_(acc)], null);
} else {
var G__20070 = andel.intervals.remove_leaf(new_loc);
var G__20071 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,from_to);
loc = G__20070;
acc = G__20071;
continue;
}
}
break;
}
});
andel.intervals.process_single_interval_deletion = (function andel$intervals$process_single_interval_deletion(interval,offset,length){
var from = interval.from;
var to = interval.to;
var g_l_QMARK_ = interval.greedy_left_QMARK_;
var g_r_QMARK_ = interval.greedy_right_QMARK_;
var bg = interval.background;
var fg = interval.foreground;
var update_point = ((function (from,to,g_l_QMARK_,g_r_QMARK_,bg,fg){
return (function (point,offset__$1,length__$1){
if((offset__$1 < point)){
var x__8016__auto__ = offset__$1;
var y__8017__auto__ = (point - length__$1);
return ((x__8016__auto__ > y__8017__auto__) ? x__8016__auto__ : y__8017__auto__);
} else {
return point;
}
});})(from,to,g_l_QMARK_,g_r_QMARK_,bg,fg))
;
return (new andel.intervals.Marker(update_point(from,offset,length),update_point(to,offset,length),g_l_QMARK_,g_r_QMARK_,bg,fg,null,null,null));
});
andel.intervals.delete_range = (function andel$intervals$delete_range(itree,p__20073){
var vec__20074 = p__20073;
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20074,(0),null);
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20074,(1),null);
var offset__$1 = andel.intervals.offset__GT_tree_basis(offset);
var vec__20077 = andel.intervals.collect_with_remove_changed(itree,offset__$1,size);
var itree_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20077,(0),null);
var intervals = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20077,(1),null);
var intervals_SINGLEQUOTE_ = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$from,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (offset__$1,vec__20077,itree_SINGLEQUOTE_,intervals,vec__20074,offset,size){
return (function (p1__20072_SHARP_){
return andel.intervals.process_single_interval_deletion(p1__20072_SHARP_,offset__$1,size);
});})(offset__$1,vec__20077,itree_SINGLEQUOTE_,intervals,vec__20074,offset,size))
,intervals));
return andel.intervals.root(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(andel.intervals.insert_one,andel.intervals.zipper(itree_SINGLEQUOTE_),intervals_SINGLEQUOTE_));
});
andel.intervals.query_intervals = (function andel$intervals$query_intervals(itree,interval){
var interval__$1 = andel.intervals.interval__GT_tree_basis(andel.intervals.map__GT_Marker(interval));
var from = interval__$1.from;
var to = interval__$1.to;
var loc = andel.intervals.zipper(itree);
var markers = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.truth_(andel.tree.end_QMARK_(loc))){
return cljs.core.persistent_BANG_(markers);
} else {
if(andel.tree.leaf_QMARK_((andel.tree.node.cljs$core$IFn$_invoke$arity$1 ? andel.tree.node.cljs$core$IFn$_invoke$arity$1(loc) : andel.tree.node.call(null,loc)))){
var G__20080 = andel.intervals.scan_intersect(andel.tree.next(loc),interval__$1);
var G__20081 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(markers,andel.intervals.tree_basis__GT_interval(andel.intervals.loc__GT_Marker(loc)));
loc = G__20080;
markers = G__20081;
continue;
} else {
var G__20082 = andel.intervals.scan_intersect(loc,interval__$1);
var G__20083 = markers;
loc = G__20082;
markers = G__20083;
continue;

}
}
break;
}
});
