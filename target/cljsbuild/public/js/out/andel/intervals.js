// Compiled by ClojureScript 1.9.671 {}
goog.provide('andel.intervals');
goog.require('cljs.core');
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
andel.intervals.IntervalNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__41738__auto__,k__41739__auto__){
var self__ = this;
var this__41738__auto____$1 = this;
return this__41738__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__41739__auto__,null);
});

andel.intervals.IntervalNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__41740__auto__,k63122,else__41741__auto__){
var self__ = this;
var this__41740__auto____$1 = this;
var G__63126 = k63122;
var G__63126__$1 = (((G__63126 instanceof cljs.core.Keyword))?G__63126.fqn:null);
switch (G__63126__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k63122,else__41741__auto__);

}
});

andel.intervals.IntervalNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__41752__auto__,writer__41753__auto__,opts__41754__auto__){
var self__ = this;
var this__41752__auto____$1 = this;
var pr_pair__41755__auto__ = ((function (this__41752__auto____$1){
return (function (keyval__41756__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__41753__auto__,cljs.core.pr_writer,""," ","",opts__41754__auto__,keyval__41756__auto__);
});})(this__41752__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__41753__auto__,pr_pair__41755__auto__,"#andel.intervals.IntervalNode{",", ","}",opts__41754__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"length","length",588987862),self__.length],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rightest","rightest",1225570510),self__.rightest],null))], null),self__.__extmap));
});

andel.intervals.IntervalNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63121){
var self__ = this;
var G__63121__$1 = this;
return (new cljs.core.RecordIter((0),G__63121__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.Keyword(null,"rightest","rightest",1225570510)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

andel.intervals.IntervalNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__41736__auto__){
var self__ = this;
var this__41736__auto____$1 = this;
return self__.__meta;
});

andel.intervals.IntervalNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__41733__auto__){
var self__ = this;
var this__41733__auto____$1 = this;
return (new andel.intervals.IntervalNode(self__.offset,self__.length,self__.rightest,self__.__meta,self__.__extmap,self__.__hash));
});

andel.intervals.IntervalNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__41742__auto__){
var self__ = this;
var this__41742__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

andel.intervals.IntervalNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__41734__auto__){
var self__ = this;
var this__41734__auto____$1 = this;
var h__41506__auto__ = self__.__hash;
if(!((h__41506__auto__ == null))){
return h__41506__auto__;
} else {
var h__41506__auto____$1 = ((function (h__41506__auto__,this__41734__auto____$1){
return (function (coll__41735__auto__){
return (2129495910 ^ cljs.core.hash_unordered_coll.call(null,coll__41735__auto__));
});})(h__41506__auto__,this__41734__auto____$1))
.call(null,this__41734__auto____$1);
self__.__hash = h__41506__auto____$1;

return h__41506__auto____$1;
}
});

andel.intervals.IntervalNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63123,other63124){
var self__ = this;
var this63123__$1 = this;
return (!((other63124 == null))) && ((this63123__$1.constructor === other63124.constructor)) && (cljs.core._EQ_.call(null,this63123__$1.offset,other63124.offset)) && (cljs.core._EQ_.call(null,this63123__$1.length,other63124.length)) && (cljs.core._EQ_.call(null,this63123__$1.rightest,other63124.rightest)) && (cljs.core._EQ_.call(null,this63123__$1.__extmap,other63124.__extmap));
});

andel.intervals.IntervalNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__41747__auto__,k__41748__auto__){
var self__ = this;
var this__41747__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"rightest","rightest",1225570510),null,new cljs.core.Keyword(null,"length","length",588987862),null], null), null),k__41748__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__41747__auto____$1),self__.__meta),k__41748__auto__);
} else {
return (new andel.intervals.IntervalNode(self__.offset,self__.length,self__.rightest,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__41748__auto__)),null));
}
});

andel.intervals.IntervalNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__41745__auto__,k__41746__auto__,G__63121){
var self__ = this;
var this__41745__auto____$1 = this;
var pred__63127 = cljs.core.keyword_identical_QMARK_;
var expr__63128 = k__41746__auto__;
if(cljs.core.truth_(pred__63127.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__63128))){
return (new andel.intervals.IntervalNode(G__63121,self__.length,self__.rightest,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__63127.call(null,new cljs.core.Keyword(null,"length","length",588987862),expr__63128))){
return (new andel.intervals.IntervalNode(self__.offset,G__63121,self__.rightest,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__63127.call(null,new cljs.core.Keyword(null,"rightest","rightest",1225570510),expr__63128))){
return (new andel.intervals.IntervalNode(self__.offset,self__.length,G__63121,self__.__meta,self__.__extmap,null));
} else {
return (new andel.intervals.IntervalNode(self__.offset,self__.length,self__.rightest,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__41746__auto__,G__63121),null));
}
}
}
});

andel.intervals.IntervalNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__41750__auto__){
var self__ = this;
var this__41750__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"length","length",588987862),self__.length],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rightest","rightest",1225570510),self__.rightest],null))], null),self__.__extmap));
});

andel.intervals.IntervalNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__41737__auto__,G__63121){
var self__ = this;
var this__41737__auto____$1 = this;
return (new andel.intervals.IntervalNode(self__.offset,self__.length,self__.rightest,G__63121,self__.__extmap,self__.__hash));
});

andel.intervals.IntervalNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__41743__auto__,entry__41744__auto__){
var self__ = this;
var this__41743__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__41744__auto__)){
return this__41743__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__41744__auto__,(0)),cljs.core._nth.call(null,entry__41744__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__41743__auto____$1,entry__41744__auto__);
}
});

andel.intervals.IntervalNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"length","length",-2065447907,null),new cljs.core.Symbol(null,"rightest","rightest",-1428865259,null)], null);
});

andel.intervals.IntervalNode.cljs$lang$type = true;

andel.intervals.IntervalNode.cljs$lang$ctorPrSeq = (function (this__41776__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"andel.intervals/IntervalNode");
});

andel.intervals.IntervalNode.cljs$lang$ctorPrWriter = (function (this__41776__auto__,writer__41777__auto__){
return cljs.core._write.call(null,writer__41777__auto__,"andel.intervals/IntervalNode");
});

andel.intervals.__GT_IntervalNode = (function andel$intervals$__GT_IntervalNode(offset,length,rightest){
return (new andel.intervals.IntervalNode(offset,length,rightest,null,null,null));
});

andel.intervals.map__GT_IntervalNode = (function andel$intervals$map__GT_IntervalNode(G__63125){
return (new andel.intervals.IntervalNode(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__63125),new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(G__63125),new cljs.core.Keyword(null,"rightest","rightest",1225570510).cljs$core$IFn$_invoke$arity$1(G__63125),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__63125,new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.Keyword(null,"rightest","rightest",1225570510))),null));
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
andel.intervals.IntervalLeaf.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__41738__auto__,k__41739__auto__){
var self__ = this;
var this__41738__auto____$1 = this;
return this__41738__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__41739__auto__,null);
});

andel.intervals.IntervalLeaf.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__41740__auto__,k63132,else__41741__auto__){
var self__ = this;
var this__41740__auto____$1 = this;
var G__63136 = k63132;
var G__63136__$1 = (((G__63136 instanceof cljs.core.Keyword))?G__63136.fqn:null);
switch (G__63136__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k63132,else__41741__auto__);

}
});

andel.intervals.IntervalLeaf.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__41752__auto__,writer__41753__auto__,opts__41754__auto__){
var self__ = this;
var this__41752__auto____$1 = this;
var pr_pair__41755__auto__ = ((function (this__41752__auto____$1){
return (function (keyval__41756__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__41753__auto__,cljs.core.pr_writer,""," ","",opts__41754__auto__,keyval__41756__auto__);
});})(this__41752__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__41753__auto__,pr_pair__41755__auto__,"#andel.intervals.IntervalLeaf{",", ","}",opts__41754__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"length","length",588987862),self__.length],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rightest","rightest",1225570510),self__.rightest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"greedy-left?","greedy-left?",50845847),self__.greedy_left_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"greedy-right?","greedy-right?",-416296163),self__.greedy_right_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"background","background",-863952629),self__.background],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"foreground","foreground",499022036),self__.foreground],null))], null),self__.__extmap));
});

andel.intervals.IntervalLeaf.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63131){
var self__ = this;
var G__63131__$1 = this;
return (new cljs.core.RecordIter((0),G__63131__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.Keyword(null,"rightest","rightest",1225570510),new cljs.core.Keyword(null,"greedy-left?","greedy-left?",50845847),new cljs.core.Keyword(null,"greedy-right?","greedy-right?",-416296163),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"foreground","foreground",499022036)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

andel.intervals.IntervalLeaf.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__41736__auto__){
var self__ = this;
var this__41736__auto____$1 = this;
return self__.__meta;
});

andel.intervals.IntervalLeaf.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__41733__auto__){
var self__ = this;
var this__41733__auto____$1 = this;
return (new andel.intervals.IntervalLeaf(self__.offset,self__.length,self__.rightest,self__.greedy_left_QMARK_,self__.greedy_right_QMARK_,self__.background,self__.foreground,self__.__meta,self__.__extmap,self__.__hash));
});

andel.intervals.IntervalLeaf.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__41742__auto__){
var self__ = this;
var this__41742__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

andel.intervals.IntervalLeaf.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__41734__auto__){
var self__ = this;
var this__41734__auto____$1 = this;
var h__41506__auto__ = self__.__hash;
if(!((h__41506__auto__ == null))){
return h__41506__auto__;
} else {
var h__41506__auto____$1 = ((function (h__41506__auto__,this__41734__auto____$1){
return (function (coll__41735__auto__){
return (1881782143 ^ cljs.core.hash_unordered_coll.call(null,coll__41735__auto__));
});})(h__41506__auto__,this__41734__auto____$1))
.call(null,this__41734__auto____$1);
self__.__hash = h__41506__auto____$1;

return h__41506__auto____$1;
}
});

andel.intervals.IntervalLeaf.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63133,other63134){
var self__ = this;
var this63133__$1 = this;
return (!((other63134 == null))) && ((this63133__$1.constructor === other63134.constructor)) && (cljs.core._EQ_.call(null,this63133__$1.offset,other63134.offset)) && (cljs.core._EQ_.call(null,this63133__$1.length,other63134.length)) && (cljs.core._EQ_.call(null,this63133__$1.rightest,other63134.rightest)) && (cljs.core._EQ_.call(null,this63133__$1.greedy_left_QMARK_,other63134.greedy_left_QMARK_)) && (cljs.core._EQ_.call(null,this63133__$1.greedy_right_QMARK_,other63134.greedy_right_QMARK_)) && (cljs.core._EQ_.call(null,this63133__$1.background,other63134.background)) && (cljs.core._EQ_.call(null,this63133__$1.foreground,other63134.foreground)) && (cljs.core._EQ_.call(null,this63133__$1.__extmap,other63134.__extmap));
});

andel.intervals.IntervalLeaf.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__41747__auto__,k__41748__auto__){
var self__ = this;
var this__41747__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"background","background",-863952629),null,new cljs.core.Keyword(null,"rightest","rightest",1225570510),null,new cljs.core.Keyword(null,"foreground","foreground",499022036),null,new cljs.core.Keyword(null,"length","length",588987862),null,new cljs.core.Keyword(null,"greedy-left?","greedy-left?",50845847),null,new cljs.core.Keyword(null,"greedy-right?","greedy-right?",-416296163),null], null), null),k__41748__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__41747__auto____$1),self__.__meta),k__41748__auto__);
} else {
return (new andel.intervals.IntervalLeaf(self__.offset,self__.length,self__.rightest,self__.greedy_left_QMARK_,self__.greedy_right_QMARK_,self__.background,self__.foreground,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__41748__auto__)),null));
}
});

andel.intervals.IntervalLeaf.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__41745__auto__,k__41746__auto__,G__63131){
var self__ = this;
var this__41745__auto____$1 = this;
var pred__63137 = cljs.core.keyword_identical_QMARK_;
var expr__63138 = k__41746__auto__;
if(cljs.core.truth_(pred__63137.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__63138))){
return (new andel.intervals.IntervalLeaf(G__63131,self__.length,self__.rightest,self__.greedy_left_QMARK_,self__.greedy_right_QMARK_,self__.background,self__.foreground,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__63137.call(null,new cljs.core.Keyword(null,"length","length",588987862),expr__63138))){
return (new andel.intervals.IntervalLeaf(self__.offset,G__63131,self__.rightest,self__.greedy_left_QMARK_,self__.greedy_right_QMARK_,self__.background,self__.foreground,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__63137.call(null,new cljs.core.Keyword(null,"rightest","rightest",1225570510),expr__63138))){
return (new andel.intervals.IntervalLeaf(self__.offset,self__.length,G__63131,self__.greedy_left_QMARK_,self__.greedy_right_QMARK_,self__.background,self__.foreground,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__63137.call(null,new cljs.core.Keyword(null,"greedy-left?","greedy-left?",50845847),expr__63138))){
return (new andel.intervals.IntervalLeaf(self__.offset,self__.length,self__.rightest,G__63131,self__.greedy_right_QMARK_,self__.background,self__.foreground,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__63137.call(null,new cljs.core.Keyword(null,"greedy-right?","greedy-right?",-416296163),expr__63138))){
return (new andel.intervals.IntervalLeaf(self__.offset,self__.length,self__.rightest,self__.greedy_left_QMARK_,G__63131,self__.background,self__.foreground,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__63137.call(null,new cljs.core.Keyword(null,"background","background",-863952629),expr__63138))){
return (new andel.intervals.IntervalLeaf(self__.offset,self__.length,self__.rightest,self__.greedy_left_QMARK_,self__.greedy_right_QMARK_,G__63131,self__.foreground,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__63137.call(null,new cljs.core.Keyword(null,"foreground","foreground",499022036),expr__63138))){
return (new andel.intervals.IntervalLeaf(self__.offset,self__.length,self__.rightest,self__.greedy_left_QMARK_,self__.greedy_right_QMARK_,self__.background,G__63131,self__.__meta,self__.__extmap,null));
} else {
return (new andel.intervals.IntervalLeaf(self__.offset,self__.length,self__.rightest,self__.greedy_left_QMARK_,self__.greedy_right_QMARK_,self__.background,self__.foreground,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__41746__auto__,G__63131),null));
}
}
}
}
}
}
}
});

andel.intervals.IntervalLeaf.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__41750__auto__){
var self__ = this;
var this__41750__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"length","length",588987862),self__.length],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rightest","rightest",1225570510),self__.rightest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"greedy-left?","greedy-left?",50845847),self__.greedy_left_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"greedy-right?","greedy-right?",-416296163),self__.greedy_right_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"background","background",-863952629),self__.background],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"foreground","foreground",499022036),self__.foreground],null))], null),self__.__extmap));
});

andel.intervals.IntervalLeaf.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__41737__auto__,G__63131){
var self__ = this;
var this__41737__auto____$1 = this;
return (new andel.intervals.IntervalLeaf(self__.offset,self__.length,self__.rightest,self__.greedy_left_QMARK_,self__.greedy_right_QMARK_,self__.background,self__.foreground,G__63131,self__.__extmap,self__.__hash));
});

andel.intervals.IntervalLeaf.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__41743__auto__,entry__41744__auto__){
var self__ = this;
var this__41743__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__41744__auto__)){
return this__41743__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__41744__auto__,(0)),cljs.core._nth.call(null,entry__41744__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__41743__auto____$1,entry__41744__auto__);
}
});

andel.intervals.IntervalLeaf.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"length","length",-2065447907,null),new cljs.core.Symbol(null,"rightest","rightest",-1428865259,null),new cljs.core.Symbol(null,"greedy-left?","greedy-left?",1691377374,null),new cljs.core.Symbol(null,"greedy-right?","greedy-right?",1224235364,null),new cljs.core.Symbol(null,"background","background",776578898,null),new cljs.core.Symbol(null,"foreground","foreground",2139553563,null)], null);
});

andel.intervals.IntervalLeaf.cljs$lang$type = true;

andel.intervals.IntervalLeaf.cljs$lang$ctorPrSeq = (function (this__41776__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"andel.intervals/IntervalLeaf");
});

andel.intervals.IntervalLeaf.cljs$lang$ctorPrWriter = (function (this__41776__auto__,writer__41777__auto__){
return cljs.core._write.call(null,writer__41777__auto__,"andel.intervals/IntervalLeaf");
});

andel.intervals.__GT_IntervalLeaf = (function andel$intervals$__GT_IntervalLeaf(offset,length,rightest,greedy_left_QMARK_,greedy_right_QMARK_,background,foreground){
return (new andel.intervals.IntervalLeaf(offset,length,rightest,greedy_left_QMARK_,greedy_right_QMARK_,background,foreground,null,null,null));
});

andel.intervals.map__GT_IntervalLeaf = (function andel$intervals$map__GT_IntervalLeaf(G__63135){
return (new andel.intervals.IntervalLeaf(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__63135),new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(G__63135),new cljs.core.Keyword(null,"rightest","rightest",1225570510).cljs$core$IFn$_invoke$arity$1(G__63135),new cljs.core.Keyword(null,"greedy-left?","greedy-left?",50845847).cljs$core$IFn$_invoke$arity$1(G__63135),new cljs.core.Keyword(null,"greedy-right?","greedy-right?",-416296163).cljs$core$IFn$_invoke$arity$1(G__63135),new cljs.core.Keyword(null,"background","background",-863952629).cljs$core$IFn$_invoke$arity$1(G__63135),new cljs.core.Keyword(null,"foreground","foreground",499022036).cljs$core$IFn$_invoke$arity$1(G__63135),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__63135,new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.Keyword(null,"rightest","rightest",1225570510),new cljs.core.Keyword(null,"greedy-left?","greedy-left?",50845847),new cljs.core.Keyword(null,"greedy-right?","greedy-right?",-416296163),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"foreground","foreground",499022036))),null));
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
andel.intervals.Marker.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__41738__auto__,k__41739__auto__){
var self__ = this;
var this__41738__auto____$1 = this;
return this__41738__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__41739__auto__,null);
});

andel.intervals.Marker.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__41740__auto__,k63142,else__41741__auto__){
var self__ = this;
var this__41740__auto____$1 = this;
var G__63146 = k63142;
var G__63146__$1 = (((G__63146 instanceof cljs.core.Keyword))?G__63146.fqn:null);
switch (G__63146__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k63142,else__41741__auto__);

}
});

andel.intervals.Marker.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__41752__auto__,writer__41753__auto__,opts__41754__auto__){
var self__ = this;
var this__41752__auto____$1 = this;
var pr_pair__41755__auto__ = ((function (this__41752__auto____$1){
return (function (keyval__41756__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__41753__auto__,cljs.core.pr_writer,""," ","",opts__41754__auto__,keyval__41756__auto__);
});})(this__41752__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__41753__auto__,pr_pair__41755__auto__,"#andel.intervals.Marker{",", ","}",opts__41754__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"from","from",1815293044),self__.from],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"to","to",192099007),self__.to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"greedy-left?","greedy-left?",50845847),self__.greedy_left_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"greedy-right?","greedy-right?",-416296163),self__.greedy_right_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"background","background",-863952629),self__.background],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"foreground","foreground",499022036),self__.foreground],null))], null),self__.__extmap));
});

andel.intervals.Marker.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63141){
var self__ = this;
var G__63141__$1 = this;
return (new cljs.core.RecordIter((0),G__63141__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"greedy-left?","greedy-left?",50845847),new cljs.core.Keyword(null,"greedy-right?","greedy-right?",-416296163),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"foreground","foreground",499022036)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

andel.intervals.Marker.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__41736__auto__){
var self__ = this;
var this__41736__auto____$1 = this;
return self__.__meta;
});

andel.intervals.Marker.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__41733__auto__){
var self__ = this;
var this__41733__auto____$1 = this;
return (new andel.intervals.Marker(self__.from,self__.to,self__.greedy_left_QMARK_,self__.greedy_right_QMARK_,self__.background,self__.foreground,self__.__meta,self__.__extmap,self__.__hash));
});

andel.intervals.Marker.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__41742__auto__){
var self__ = this;
var this__41742__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

andel.intervals.Marker.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__41734__auto__){
var self__ = this;
var this__41734__auto____$1 = this;
var h__41506__auto__ = self__.__hash;
if(!((h__41506__auto__ == null))){
return h__41506__auto__;
} else {
var h__41506__auto____$1 = ((function (h__41506__auto__,this__41734__auto____$1){
return (function (coll__41735__auto__){
return (645397536 ^ cljs.core.hash_unordered_coll.call(null,coll__41735__auto__));
});})(h__41506__auto__,this__41734__auto____$1))
.call(null,this__41734__auto____$1);
self__.__hash = h__41506__auto____$1;

return h__41506__auto____$1;
}
});

andel.intervals.Marker.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63143,other63144){
var self__ = this;
var this63143__$1 = this;
return (!((other63144 == null))) && ((this63143__$1.constructor === other63144.constructor)) && (cljs.core._EQ_.call(null,this63143__$1.from,other63144.from)) && (cljs.core._EQ_.call(null,this63143__$1.to,other63144.to)) && (cljs.core._EQ_.call(null,this63143__$1.greedy_left_QMARK_,other63144.greedy_left_QMARK_)) && (cljs.core._EQ_.call(null,this63143__$1.greedy_right_QMARK_,other63144.greedy_right_QMARK_)) && (cljs.core._EQ_.call(null,this63143__$1.background,other63144.background)) && (cljs.core._EQ_.call(null,this63143__$1.foreground,other63144.foreground)) && (cljs.core._EQ_.call(null,this63143__$1.__extmap,other63144.__extmap));
});

andel.intervals.Marker.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__41747__auto__,k__41748__auto__){
var self__ = this;
var this__41747__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),null,new cljs.core.Keyword(null,"from","from",1815293044),null,new cljs.core.Keyword(null,"foreground","foreground",499022036),null,new cljs.core.Keyword(null,"greedy-left?","greedy-left?",50845847),null,new cljs.core.Keyword(null,"greedy-right?","greedy-right?",-416296163),null,new cljs.core.Keyword(null,"to","to",192099007),null], null), null),k__41748__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__41747__auto____$1),self__.__meta),k__41748__auto__);
} else {
return (new andel.intervals.Marker(self__.from,self__.to,self__.greedy_left_QMARK_,self__.greedy_right_QMARK_,self__.background,self__.foreground,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__41748__auto__)),null));
}
});

andel.intervals.Marker.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__41745__auto__,k__41746__auto__,G__63141){
var self__ = this;
var this__41745__auto____$1 = this;
var pred__63147 = cljs.core.keyword_identical_QMARK_;
var expr__63148 = k__41746__auto__;
if(cljs.core.truth_(pred__63147.call(null,new cljs.core.Keyword(null,"from","from",1815293044),expr__63148))){
return (new andel.intervals.Marker(G__63141,self__.to,self__.greedy_left_QMARK_,self__.greedy_right_QMARK_,self__.background,self__.foreground,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__63147.call(null,new cljs.core.Keyword(null,"to","to",192099007),expr__63148))){
return (new andel.intervals.Marker(self__.from,G__63141,self__.greedy_left_QMARK_,self__.greedy_right_QMARK_,self__.background,self__.foreground,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__63147.call(null,new cljs.core.Keyword(null,"greedy-left?","greedy-left?",50845847),expr__63148))){
return (new andel.intervals.Marker(self__.from,self__.to,G__63141,self__.greedy_right_QMARK_,self__.background,self__.foreground,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__63147.call(null,new cljs.core.Keyword(null,"greedy-right?","greedy-right?",-416296163),expr__63148))){
return (new andel.intervals.Marker(self__.from,self__.to,self__.greedy_left_QMARK_,G__63141,self__.background,self__.foreground,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__63147.call(null,new cljs.core.Keyword(null,"background","background",-863952629),expr__63148))){
return (new andel.intervals.Marker(self__.from,self__.to,self__.greedy_left_QMARK_,self__.greedy_right_QMARK_,G__63141,self__.foreground,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__63147.call(null,new cljs.core.Keyword(null,"foreground","foreground",499022036),expr__63148))){
return (new andel.intervals.Marker(self__.from,self__.to,self__.greedy_left_QMARK_,self__.greedy_right_QMARK_,self__.background,G__63141,self__.__meta,self__.__extmap,null));
} else {
return (new andel.intervals.Marker(self__.from,self__.to,self__.greedy_left_QMARK_,self__.greedy_right_QMARK_,self__.background,self__.foreground,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__41746__auto__,G__63141),null));
}
}
}
}
}
}
});

andel.intervals.Marker.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__41750__auto__){
var self__ = this;
var this__41750__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"from","from",1815293044),self__.from],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"to","to",192099007),self__.to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"greedy-left?","greedy-left?",50845847),self__.greedy_left_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"greedy-right?","greedy-right?",-416296163),self__.greedy_right_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"background","background",-863952629),self__.background],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"foreground","foreground",499022036),self__.foreground],null))], null),self__.__extmap));
});

andel.intervals.Marker.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__41737__auto__,G__63141){
var self__ = this;
var this__41737__auto____$1 = this;
return (new andel.intervals.Marker(self__.from,self__.to,self__.greedy_left_QMARK_,self__.greedy_right_QMARK_,self__.background,self__.foreground,G__63141,self__.__extmap,self__.__hash));
});

andel.intervals.Marker.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__41743__auto__,entry__41744__auto__){
var self__ = this;
var this__41743__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__41744__auto__)){
return this__41743__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__41744__auto__,(0)),cljs.core._nth.call(null,entry__41744__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__41743__auto____$1,entry__41744__auto__);
}
});

andel.intervals.Marker.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"greedy-left?","greedy-left?",1691377374,null),new cljs.core.Symbol(null,"greedy-right?","greedy-right?",1224235364,null),new cljs.core.Symbol(null,"background","background",776578898,null),new cljs.core.Symbol(null,"foreground","foreground",2139553563,null)], null);
});

andel.intervals.Marker.cljs$lang$type = true;

andel.intervals.Marker.cljs$lang$ctorPrSeq = (function (this__41776__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"andel.intervals/Marker");
});

andel.intervals.Marker.cljs$lang$ctorPrWriter = (function (this__41776__auto__,writer__41777__auto__){
return cljs.core._write.call(null,writer__41777__auto__,"andel.intervals/Marker");
});

andel.intervals.__GT_Marker = (function andel$intervals$__GT_Marker(from,to,greedy_left_QMARK_,greedy_right_QMARK_,background,foreground){
return (new andel.intervals.Marker(from,to,greedy_left_QMARK_,greedy_right_QMARK_,background,foreground,null,null,null));
});

andel.intervals.map__GT_Marker = (function andel$intervals$map__GT_Marker(G__63145){
return (new andel.intervals.Marker(new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(G__63145),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(G__63145),new cljs.core.Keyword(null,"greedy-left?","greedy-left?",50845847).cljs$core$IFn$_invoke$arity$1(G__63145),new cljs.core.Keyword(null,"greedy-right?","greedy-right?",-416296163).cljs$core$IFn$_invoke$arity$1(G__63145),new cljs.core.Keyword(null,"background","background",-863952629).cljs$core$IFn$_invoke$arity$1(G__63145),new cljs.core.Keyword(null,"foreground","foreground",499022036).cljs$core$IFn$_invoke$arity$1(G__63145),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__63145,new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"greedy-left?","greedy-left?",50845847),new cljs.core.Keyword(null,"greedy-right?","greedy-right?",-416296163),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"foreground","foreground",499022036))),null));
});

andel.intervals.reducing_fn = (function andel$intervals$reducing_fn(var_args){
var G__63152 = arguments.length;
switch (G__63152) {
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
return (new andel.intervals.IntervalNode(l_offset,(function (){var x__41402__auto__ = l_length;
var y__41403__auto__ = ((l_rightest + r_offset) + r_length);
return ((x__41402__auto__ > y__41403__auto__) ? x__41402__auto__ : y__41403__auto__);
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
andel.intervals.tree_config = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reducing-fn","reducing-fn",-210667109),andel.intervals.reducing_fn,new cljs.core.Keyword(null,"metrics-fn","metrics-fn",-902159656),andel.intervals.metrics_fn,new cljs.core.Keyword(null,"leaf-overflown?","leaf-overflown?",-1100480296),cljs.core.constantly.call(null,false),new cljs.core.Keyword(null,"split-thresh","split-thresh",-792823054),(16),new cljs.core.Keyword(null,"leaf-underflown?","leaf-underflown?",877072017),cljs.core.constantly.call(null,false)], null);
andel.intervals.zipper = (function andel$intervals$zipper(it){
return andel.tree.zipper.call(null,it,andel.intervals.tree_config);
});
andel.intervals.root = (function andel$intervals$root(loc){
return andel.tree.root.call(null,loc);
});
andel.intervals.mark_changed = (function andel$intervals$mark_changed(loc){
return cljs.core.update.call(null,loc,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.assoc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true);
});
andel.intervals.by_offset = (function andel$intervals$by_offset(offset){
return (function (acc,m){
var m__$1 = andel.intervals.reducing_fn.call(null,acc,m);
return (offset < (m__$1.offset + m__$1.rightest));
});
});
andel.intervals.loc__GT_metrics = (function andel$intervals$loc__GT_metrics(loc){
return andel.tree.node.call(null,loc).metrics;
});
andel.intervals.loc__GT_data = (function andel$intervals$loc__GT_data(loc){
if(andel.tree.leaf_QMARK_.call(null,loc)){
} else {
throw (new Error("Assert failed: (tree/leaf? loc)"));
}

return andel.tree.node.call(null,loc).data;
});
andel.intervals.loc__GT_Marker = (function andel$intervals$loc__GT_Marker(loc){
var metrics = andel.intervals.loc__GT_metrics.call(null,loc);
var leaf_data = andel.intervals.loc__GT_data.call(null,loc);
var rightest = (function (){var or__41064__auto__ = (function (){var G__63155 = andel.tree.loc_acc.call(null,loc);
if((G__63155 == null)){
return null;
} else {
return G__63155.rightest;
}
})();
if(cljs.core.truth_(or__41064__auto__)){
return or__41064__auto__;
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
return (new andel.intervals.Marker(andel.intervals.offset__GT_tree_basis.call(null,from),andel.intervals.offset__GT_tree_basis.call(null,to),g_l_QMARK_,g_r_QMARK_,bg,fg,null,null,null));
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
return (new andel.intervals.Marker(andel.intervals.tree_basis__GT_offset.call(null,from),andel.intervals.tree_basis__GT_offset.call(null,to),g_l_QMARK_,g_r_QMARK_,bg,fg,null,null,null));
});
andel.intervals.update_leaf = (function andel$intervals$update_leaf(loc,f){
if(andel.tree.leaf_QMARK_.call(null,andel.tree.node.call(null,loc))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("update-leaf should recieve leaf"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(tree/leaf? (tree/node loc))")].join('')));
}

return andel.tree.edit.call(null,loc,(function (leaf){
var data = leaf.data;
var fixed_interval = f.call(null,data);
return andel.tree.__GT_Leaf.call(null,fixed_interval,fixed_interval);
}));
});
andel.intervals.update_leaf_offset = (function andel$intervals$update_leaf_offset(loc,f){
return andel.intervals.update_leaf.call(null,loc,(function (data){
var offset = data.offset;
var length = data.length;
var rightest = data.rightest;
var g_l_QMARK_ = data.greedy_left_QMARK_;
var g_r_QMARK_ = data.greedy_right_QMARK_;
var bg = data.background;
var fg = data.foreground;
return (new andel.intervals.IntervalLeaf(f.call(null,offset),length,rightest,g_l_QMARK_,g_r_QMARK_,bg,fg,null,null,null));
}));
});
andel.intervals.update_leaf_length = (function andel$intervals$update_leaf_length(loc,f){
return andel.intervals.update_leaf.call(null,loc,(function (data){
var offset = data.offset;
var length = data.length;
var rightest = data.rightest;
var g_l_QMARK_ = data.greedy_left_QMARK_;
var g_r_QMARK_ = data.greedy_right_QMARK_;
var bg = data.background;
var fg = data.foreground;
return (new andel.intervals.IntervalLeaf(offset,f.call(null,length),rightest,g_l_QMARK_,g_r_QMARK_,bg,fg,null,null,null));
}));
});
andel.intervals.tree__GT_intervals = (function andel$intervals$tree__GT_intervals(tr){
var loc = andel.intervals.zipper.call(null,tr);
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(andel.tree.end_QMARK_.call(null,loc))){
return cljs.core.vec.call(null,cljs.core.map.call(null,andel.intervals.tree_basis__GT_interval,cljs.core.drop_last.call(null,(1),cljs.core.drop.call(null,(1),acc))));
} else {
if(andel.tree.leaf_QMARK_.call(null,andel.tree.node.call(null,loc))){
var G__63156 = andel.tree.next.call(null,loc);
var G__63157 = cljs.core.conj.call(null,acc,andel.intervals.loc__GT_Marker.call(null,loc));
loc = G__63156;
acc = G__63157;
continue;
} else {
var G__63158 = andel.tree.next.call(null,loc);
var G__63159 = acc;
loc = G__63158;
acc = G__63159;
continue;

}
}
break;
}
});
andel.intervals.intersect = (function andel$intervals$intersect(a,b){
var vec__63160 = (((a.from < b.from))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var fst = cljs.core.nth.call(null,vec__63160,(0),null);
var snd = cljs.core.nth.call(null,vec__63160,(1),null);
var fst_len = (fst.to - fst.from);
var snd_len = (snd.to - snd.from);
if(((fst_len === (0))) || ((snd_len === (0)))){
return false;
} else {
return (snd.from < fst.to);
}
});
andel.intervals.intersect_inclusive = (function andel$intervals$intersect_inclusive(a,b){
var vec__63163 = (((a.from < b.from))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var fst = cljs.core.nth.call(null,vec__63163,(0),null);
var snd = cljs.core.nth.call(null,vec__63163,(1),null);
return (snd.from <= fst.to);
});
andel.intervals.scan_intersect = (function andel$intervals$scan_intersect(loc,interval){
return andel.tree.scan.call(null,loc,(function (acc_metrics,node_metrics){
var metrics = andel.intervals.reducing_fn.call(null,acc_metrics,node_metrics);
var rightest = (function (){var or__41064__auto__ = (function (){var G__63167 = acc_metrics;
if((G__63167 == null)){
return null;
} else {
return G__63167.rightest;
}
})();
if(cljs.core.truth_(or__41064__auto__)){
return or__41064__auto__;
} else {
return (0);
}
})();
var offset = node_metrics.offset;
var length = node_metrics.length;
var from = (offset + rightest);
return andel.intervals.intersect.call(null,(new andel.intervals.Marker(from,(from + length),null,null,null,null,null,null,null)),interval);
}));
});
andel.intervals.make_leaf = (function andel$intervals$make_leaf(offset,length,greedy_left_QMARK_,greedy_right_QMARK_,background,foreground){
return andel.tree.make_leaf.call(null,(new andel.intervals.IntervalLeaf(offset,length,(0),greedy_left_QMARK_,greedy_right_QMARK_,background,foreground,null,null,null)),andel.intervals.tree_config);
});
andel.intervals.intervals__GT_tree = (function andel$intervals$intervals__GT_tree(intervals){
return andel.intervals.root.call(null,andel.intervals.mark_changed.call(null,andel.intervals.zipper.call(null,andel.tree.make_node.call(null,cljs.core.map.call(null,(function (p1__63168_SHARP_){
return andel.tree.make_leaf.call(null,p1__63168_SHARP_,andel.intervals.tree_config);
}),intervals),andel.intervals.tree_config))));
});
andel.intervals.make_interval_tree = (function andel$intervals$make_interval_tree(){
return andel.intervals.intervals__GT_tree.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new andel.intervals.IntervalLeaf((0),(0),(0),false,false,null,null,null,null,null)),(new andel.intervals.IntervalLeaf(andel.intervals.plus_infinity,(0),(0),false,false,null,null,null,null,null))], null));
});
andel.intervals.insert_one = (function andel$intervals$insert_one(loc,interval){
var from = interval.from;
var to = interval.to;
var greedy_left_QMARK_ = interval.greedy_left_QMARK_;
var greedy_right_QMARK_ = interval.greedy_right_QMARK_;
var bg = interval.background;
var fg = interval.foreground;
var r_sibling_loc = andel.tree.scan.call(null,loc,andel.intervals.by_offset.call(null,from));
var r_offset = andel.tree.node.call(null,r_sibling_loc).metrics.offset;
var r_sibling_marker = andel.intervals.loc__GT_Marker.call(null,r_sibling_loc);
var r_from = r_sibling_marker.from;
var r_to = r_sibling_marker.to;
var len = (to - from);
var new_r_offset = (r_from - from);
var offset = (r_offset - new_r_offset);
return andel.intervals.update_leaf_offset.call(null,andel.tree.insert_left.call(null,r_sibling_loc,andel.intervals.make_leaf.call(null,offset,len,greedy_left_QMARK_,greedy_right_QMARK_,bg,fg)),cljs.core.constantly.call(null,new_r_offset));
});
andel.intervals.add_intervals = (function andel$intervals$add_intervals(itree,intervals){
return andel.intervals.root.call(null,cljs.core.reduce.call(null,andel.intervals.insert_one,andel.intervals.zipper.call(null,itree),cljs.core.map.call(null,andel.intervals.interval__GT_tree_basis,intervals)));
});
andel.intervals.remove_leaf = (function andel$intervals$remove_leaf(loc){
var data = andel.intervals.loc__GT_data.call(null,loc);
var offset = data.offset;
var length = data.length;
var marker = andel.intervals.loc__GT_Marker.call(null,loc);
var from = marker.from;
var to = marker.to;
return andel.intervals.update_leaf_offset.call(null,((function (data,offset,length,marker,from,to){
return (function (loc__$1){
if(!(andel.tree.leaf_QMARK_.call(null,andel.tree.node.call(null,loc__$1)))){
return andel.tree.next_leaf.call(null,loc__$1);
} else {
return loc__$1;
}
});})(data,offset,length,marker,from,to))
.call(null,andel.tree.remove.call(null,loc)),((function (data,offset,length,marker,from,to){
return (function (p1__63169_SHARP_){
return (p1__63169_SHARP_ + offset);
});})(data,offset,length,marker,from,to))
);
});
andel.intervals.next_changed = (function andel$intervals$next_changed(loc,offset){
return andel.tree.scan.call(null,loc,(function (acc_metrics,node_metrics){
var metrics = andel.intervals.reducing_fn.call(null,acc_metrics,node_metrics);
var rightest = (function (){var or__41064__auto__ = (function (){var G__63171 = acc_metrics;
if((G__63171 == null)){
return null;
} else {
return G__63171.rightest;
}
})();
if(cljs.core.truth_(or__41064__auto__)){
return or__41064__auto__;
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
var loc = andel.intervals.zipper.call(null,itree);
var acc = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var new_loc = andel.intervals.next_changed.call(null,loc,offset);
if(cljs.core.truth_(andel.tree.end_QMARK_.call(null,new_loc))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [andel.tree.root.call(null,new_loc),acc], null);
} else {
var from_to = andel.intervals.loc__GT_Marker.call(null,new_loc);
var from = from_to.from;
var to = from_to.to;
if((offset < from)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [andel.tree.root.call(null,andel.intervals.update_leaf_offset.call(null,new_loc,((function (loc,acc,from_to,from,to,new_loc){
return (function (p1__63172_SHARP_){
return (p1__63172_SHARP_ + size);
});})(loc,acc,from_to,from,to,new_loc))
)),cljs.core.persistent_BANG_.call(null,acc)], null);
} else {
var G__63173 = andel.intervals.remove_leaf.call(null,new_loc);
var G__63174 = cljs.core.conj_BANG_.call(null,acc,from_to);
loc = G__63173;
acc = G__63174;
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
if(cljs.core.truth_((function (){var and__41052__auto__ = greedy_left_QMARK_;
if(cljs.core.truth_(and__41052__auto__)){
return cljs.core._EQ_.call(null,offset,from);
} else {
return and__41052__auto__;
}
})())){
return cljs.core.assoc.call(null,interval,new cljs.core.Keyword(null,"to","to",192099007),(to + size));
} else {
if(cljs.core.truth_((function (){var and__41052__auto__ = greedy_right_QMARK_;
if(cljs.core.truth_(and__41052__auto__)){
return cljs.core._EQ_.call(null,offset,to);
} else {
return and__41052__auto__;
}
})())){
return cljs.core.assoc.call(null,interval,new cljs.core.Keyword(null,"to","to",192099007),(to + size));
} else {
if(((from < offset)) && ((offset < to))){
return cljs.core.assoc.call(null,interval,new cljs.core.Keyword(null,"to","to",192099007),(to + size));
} else {
if((offset <= from)){
return cljs.core.assoc.call(null,interval,new cljs.core.Keyword(null,"to","to",192099007),(to + size),new cljs.core.Keyword(null,"from","from",1815293044),(from + size));
} else {
return interval;

}
}
}
}
});
andel.intervals.type_in = (function andel$intervals$type_in(itree,p__63176){
var vec__63177 = p__63176;
var offset = cljs.core.nth.call(null,vec__63177,(0),null);
var size = cljs.core.nth.call(null,vec__63177,(1),null);
var offset__$1 = andel.intervals.offset__GT_tree_basis.call(null,offset);
var vec__63180 = andel.intervals.collect_with_remove.call(null,itree,offset__$1,size);
var itree_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__63180,(0),null);
var intervals = cljs.core.nth.call(null,vec__63180,(1),null);
var intervals_SINGLEQUOTE_ = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"from","from",1815293044),cljs.core.map.call(null,((function (offset__$1,vec__63180,itree_SINGLEQUOTE_,intervals,vec__63177,offset,size){
return (function (p1__63175_SHARP_){
return andel.intervals.process_interval.call(null,p1__63175_SHARP_,offset__$1,size);
});})(offset__$1,vec__63180,itree_SINGLEQUOTE_,intervals,vec__63177,offset,size))
,intervals));
return andel.intervals.root.call(null,cljs.core.reduce.call(null,andel.intervals.insert_one,andel.intervals.zipper.call(null,itree_SINGLEQUOTE_),intervals_SINGLEQUOTE_));
});
andel.intervals.collect_with_remove_changed = (function andel$intervals$collect_with_remove_changed(itree,offset,size){
var changed_QMARK_ = (function (acc_metrics,node_metrics){
var metrics = andel.intervals.reducing_fn.call(null,acc_metrics,node_metrics);
var rightest = (function (){var or__41064__auto__ = (function (){var G__63185 = acc_metrics;
if((G__63185 == null)){
return null;
} else {
return G__63185.rightest;
}
})();
if(cljs.core.truth_(or__41064__auto__)){
return or__41064__auto__;
} else {
return (0);
}
})();
var node_offset = node_metrics.offset;
var length = node_metrics.length;
var from = (node_offset + rightest);
var to = (from + length);
var or__41064__auto__ = andel.intervals.intersect_inclusive.call(null,(new andel.intervals.Marker(from,to,null,null,null,null,null,null,null)),(new andel.intervals.Marker(offset,(offset + size),null,null,null,null,null,null,null)));
if(cljs.core.truth_(or__41064__auto__)){
return or__41064__auto__;
} else {
return ((offset + size) < (metrics.offset + metrics.rightest));
}
});
var loc = andel.intervals.zipper.call(null,itree);
var acc = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var new_loc = andel.tree.scan.call(null,loc,changed_QMARK_);
if(cljs.core.truth_(andel.tree.end_QMARK_.call(null,new_loc))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [andel.tree.root.call(null,new_loc),acc], null);
} else {
var from_to = andel.intervals.loc__GT_Marker.call(null,new_loc);
var from = from_to.from;
var to = from_to.to;
if(((offset + size) < from)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [andel.tree.root.call(null,andel.intervals.update_leaf_offset.call(null,new_loc,((function (loc,acc,from_to,from,to,new_loc,changed_QMARK_){
return (function (p1__63183_SHARP_){
return (p1__63183_SHARP_ - size);
});})(loc,acc,from_to,from,to,new_loc,changed_QMARK_))
)),cljs.core.persistent_BANG_.call(null,acc)], null);
} else {
var G__63186 = andel.intervals.remove_leaf.call(null,new_loc);
var G__63187 = cljs.core.conj_BANG_.call(null,acc,from_to);
loc = G__63186;
acc = G__63187;
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
var x__41402__auto__ = offset__$1;
var y__41403__auto__ = (point - length__$1);
return ((x__41402__auto__ > y__41403__auto__) ? x__41402__auto__ : y__41403__auto__);
} else {
return point;
}
});})(from,to,g_l_QMARK_,g_r_QMARK_,bg,fg))
;
return (new andel.intervals.Marker(update_point.call(null,from,offset,length),update_point.call(null,to,offset,length),g_l_QMARK_,g_r_QMARK_,bg,fg,null,null,null));
});
andel.intervals.delete_range = (function andel$intervals$delete_range(itree,p__63189){
var vec__63190 = p__63189;
var offset = cljs.core.nth.call(null,vec__63190,(0),null);
var size = cljs.core.nth.call(null,vec__63190,(1),null);
var offset__$1 = andel.intervals.offset__GT_tree_basis.call(null,offset);
var vec__63193 = andel.intervals.collect_with_remove_changed.call(null,itree,offset__$1,size);
var itree_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__63193,(0),null);
var intervals = cljs.core.nth.call(null,vec__63193,(1),null);
var intervals_SINGLEQUOTE_ = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"from","from",1815293044),cljs.core.map.call(null,((function (offset__$1,vec__63193,itree_SINGLEQUOTE_,intervals,vec__63190,offset,size){
return (function (p1__63188_SHARP_){
return andel.intervals.process_single_interval_deletion.call(null,p1__63188_SHARP_,offset__$1,size);
});})(offset__$1,vec__63193,itree_SINGLEQUOTE_,intervals,vec__63190,offset,size))
,intervals));
return andel.intervals.root.call(null,cljs.core.reduce.call(null,andel.intervals.insert_one,andel.intervals.zipper.call(null,itree_SINGLEQUOTE_),intervals_SINGLEQUOTE_));
});
andel.intervals.query_intervals = (function andel$intervals$query_intervals(itree,interval){
var interval__$1 = andel.intervals.interval__GT_tree_basis.call(null,andel.intervals.map__GT_Marker.call(null,interval));
var from = interval__$1.from;
var to = interval__$1.to;
var loc = andel.intervals.zipper.call(null,itree);
var markers = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.truth_(andel.tree.end_QMARK_.call(null,loc))){
return cljs.core.persistent_BANG_.call(null,markers);
} else {
if(andel.tree.leaf_QMARK_.call(null,andel.tree.node.call(null,loc))){
var G__63196 = andel.intervals.scan_intersect.call(null,andel.tree.next.call(null,loc),interval__$1);
var G__63197 = cljs.core.conj_BANG_.call(null,markers,andel.intervals.tree_basis__GT_interval.call(null,andel.intervals.loc__GT_Marker.call(null,loc)));
loc = G__63196;
markers = G__63197;
continue;
} else {
var G__63198 = andel.intervals.scan_intersect.call(null,loc,interval__$1);
var G__63199 = markers;
loc = G__63198;
markers = G__63199;
continue;

}
}
break;
}
});

//# sourceMappingURL=intervals.js.map?rel=1504289159185