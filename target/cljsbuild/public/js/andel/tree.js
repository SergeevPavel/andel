// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('andel.tree');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.zip');
goog.require('andel.fast_zip');

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
andel.tree.Node = (function (metrics,children,__meta,__extmap,__hash){
this.metrics = metrics;
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
andel.tree.Node.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8352__auto__,k__8353__auto__){
var self__ = this;
var this__8352__auto____$1 = this;
return this__8352__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8353__auto__,null);
});

andel.tree.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8354__auto__,k19842,else__8355__auto__){
var self__ = this;
var this__8354__auto____$1 = this;
var G__19846 = k19842;
var G__19846__$1 = (((G__19846 instanceof cljs.core.Keyword))?G__19846.fqn:null);
switch (G__19846__$1) {
case "metrics":
return self__.metrics;

break;
case "children":
return self__.children;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19842,else__8355__auto__);

}
});

andel.tree.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8366__auto__,writer__8367__auto__,opts__8368__auto__){
var self__ = this;
var this__8366__auto____$1 = this;
var pr_pair__8369__auto__ = ((function (this__8366__auto____$1){
return (function (keyval__8370__auto__){
return cljs.core.pr_sequential_writer(writer__8367__auto__,cljs.core.pr_writer,""," ","",opts__8368__auto__,keyval__8370__auto__);
});})(this__8366__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8367__auto__,pr_pair__8369__auto__,"#andel.tree.Node{",", ","}",opts__8368__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$metrics,self__.metrics],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$children,self__.children],null))], null),self__.__extmap));
});

andel.tree.Node.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19841){
var self__ = this;
var G__19841__$1 = this;
return (new cljs.core.RecordIter((0),G__19841__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$metrics,cljs.core.cst$kw$children], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

andel.tree.Node.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8350__auto__){
var self__ = this;
var this__8350__auto____$1 = this;
return self__.__meta;
});

andel.tree.Node.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8347__auto__){
var self__ = this;
var this__8347__auto____$1 = this;
return (new andel.tree.Node(self__.metrics,self__.children,self__.__meta,self__.__extmap,self__.__hash));
});

andel.tree.Node.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8356__auto__){
var self__ = this;
var this__8356__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

andel.tree.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8348__auto__){
var self__ = this;
var this__8348__auto____$1 = this;
var h__8120__auto__ = self__.__hash;
if(!((h__8120__auto__ == null))){
return h__8120__auto__;
} else {
var h__8120__auto____$1 = (function (){var fexpr__19847 = ((function (h__8120__auto__,this__8348__auto____$1){
return (function (coll__8349__auto__){
return (-1121859487 ^ cljs.core.hash_unordered_coll(coll__8349__auto__));
});})(h__8120__auto__,this__8348__auto____$1))
;
return fexpr__19847(this__8348__auto____$1);
})();
self__.__hash = h__8120__auto____$1;

return h__8120__auto____$1;
}
});

andel.tree.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19843,other19844){
var self__ = this;
var this19843__$1 = this;
return (!((other19844 == null))) && ((this19843__$1.constructor === other19844.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19843__$1.metrics,other19844.metrics)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19843__$1.children,other19844.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19843__$1.__extmap,other19844.__extmap));
});

andel.tree.Node.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8361__auto__,k__8362__auto__){
var self__ = this;
var this__8361__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$children,null,cljs.core.cst$kw$metrics,null], null), null),k__8362__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8361__auto____$1),self__.__meta),k__8362__auto__);
} else {
return (new andel.tree.Node(self__.metrics,self__.children,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8362__auto__)),null));
}
});

andel.tree.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8359__auto__,k__8360__auto__,G__19841){
var self__ = this;
var this__8359__auto____$1 = this;
var pred__19848 = cljs.core.keyword_identical_QMARK_;
var expr__19849 = k__8360__auto__;
if(cljs.core.truth_((function (){var G__19851 = cljs.core.cst$kw$metrics;
var G__19852 = expr__19849;
return (pred__19848.cljs$core$IFn$_invoke$arity$2 ? pred__19848.cljs$core$IFn$_invoke$arity$2(G__19851,G__19852) : pred__19848.call(null,G__19851,G__19852));
})())){
return (new andel.tree.Node(G__19841,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19853 = cljs.core.cst$kw$children;
var G__19854 = expr__19849;
return (pred__19848.cljs$core$IFn$_invoke$arity$2 ? pred__19848.cljs$core$IFn$_invoke$arity$2(G__19853,G__19854) : pred__19848.call(null,G__19853,G__19854));
})())){
return (new andel.tree.Node(self__.metrics,G__19841,self__.__meta,self__.__extmap,null));
} else {
return (new andel.tree.Node(self__.metrics,self__.children,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8360__auto__,G__19841),null));
}
}
});

andel.tree.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8364__auto__){
var self__ = this;
var this__8364__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$metrics,self__.metrics],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$children,self__.children],null))], null),self__.__extmap));
});

andel.tree.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8351__auto__,G__19841){
var self__ = this;
var this__8351__auto____$1 = this;
return (new andel.tree.Node(self__.metrics,self__.children,G__19841,self__.__extmap,self__.__hash));
});

andel.tree.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8357__auto__,entry__8358__auto__){
var self__ = this;
var this__8357__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8358__auto__)){
return this__8357__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8358__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8358__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8357__auto____$1,entry__8358__auto__);
}
});

andel.tree.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$metrics,cljs.core.cst$sym$children], null);
});

andel.tree.Node.cljs$lang$type = true;

andel.tree.Node.cljs$lang$ctorPrSeq = (function (this__8390__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"andel.tree/Node");
});

andel.tree.Node.cljs$lang$ctorPrWriter = (function (this__8390__auto__,writer__8391__auto__){
return cljs.core._write(writer__8391__auto__,"andel.tree/Node");
});

andel.tree.__GT_Node = (function andel$tree$__GT_Node(metrics,children){
return (new andel.tree.Node(metrics,children,null,null,null));
});

andel.tree.map__GT_Node = (function andel$tree$map__GT_Node(G__19845){
return (new andel.tree.Node(cljs.core.cst$kw$metrics.cljs$core$IFn$_invoke$arity$1(G__19845),cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(G__19845),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19845,cljs.core.cst$kw$metrics,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$children], 0))),null));
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
andel.tree.Leaf = (function (metrics,data,__meta,__extmap,__hash){
this.metrics = metrics;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
andel.tree.Leaf.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8352__auto__,k__8353__auto__){
var self__ = this;
var this__8352__auto____$1 = this;
return this__8352__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8353__auto__,null);
});

andel.tree.Leaf.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8354__auto__,k19857,else__8355__auto__){
var self__ = this;
var this__8354__auto____$1 = this;
var G__19861 = k19857;
var G__19861__$1 = (((G__19861 instanceof cljs.core.Keyword))?G__19861.fqn:null);
switch (G__19861__$1) {
case "metrics":
return self__.metrics;

break;
case "data":
return self__.data;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19857,else__8355__auto__);

}
});

andel.tree.Leaf.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8366__auto__,writer__8367__auto__,opts__8368__auto__){
var self__ = this;
var this__8366__auto____$1 = this;
var pr_pair__8369__auto__ = ((function (this__8366__auto____$1){
return (function (keyval__8370__auto__){
return cljs.core.pr_sequential_writer(writer__8367__auto__,cljs.core.pr_writer,""," ","",opts__8368__auto__,keyval__8370__auto__);
});})(this__8366__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8367__auto__,pr_pair__8369__auto__,"#andel.tree.Leaf{",", ","}",opts__8368__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$metrics,self__.metrics],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null))], null),self__.__extmap));
});

andel.tree.Leaf.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19856){
var self__ = this;
var G__19856__$1 = this;
return (new cljs.core.RecordIter((0),G__19856__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$metrics,cljs.core.cst$kw$data], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

andel.tree.Leaf.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8350__auto__){
var self__ = this;
var this__8350__auto____$1 = this;
return self__.__meta;
});

andel.tree.Leaf.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8347__auto__){
var self__ = this;
var this__8347__auto____$1 = this;
return (new andel.tree.Leaf(self__.metrics,self__.data,self__.__meta,self__.__extmap,self__.__hash));
});

andel.tree.Leaf.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8356__auto__){
var self__ = this;
var this__8356__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

andel.tree.Leaf.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8348__auto__){
var self__ = this;
var this__8348__auto____$1 = this;
var h__8120__auto__ = self__.__hash;
if(!((h__8120__auto__ == null))){
return h__8120__auto__;
} else {
var h__8120__auto____$1 = (function (){var fexpr__19862 = ((function (h__8120__auto__,this__8348__auto____$1){
return (function (coll__8349__auto__){
return (-1583083370 ^ cljs.core.hash_unordered_coll(coll__8349__auto__));
});})(h__8120__auto__,this__8348__auto____$1))
;
return fexpr__19862(this__8348__auto____$1);
})();
self__.__hash = h__8120__auto____$1;

return h__8120__auto____$1;
}
});

andel.tree.Leaf.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19858,other19859){
var self__ = this;
var this19858__$1 = this;
return (!((other19859 == null))) && ((this19858__$1.constructor === other19859.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19858__$1.metrics,other19859.metrics)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19858__$1.data,other19859.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19858__$1.__extmap,other19859.__extmap));
});

andel.tree.Leaf.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8361__auto__,k__8362__auto__){
var self__ = this;
var this__8361__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$metrics,null,cljs.core.cst$kw$data,null], null), null),k__8362__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8361__auto____$1),self__.__meta),k__8362__auto__);
} else {
return (new andel.tree.Leaf(self__.metrics,self__.data,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8362__auto__)),null));
}
});

andel.tree.Leaf.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8359__auto__,k__8360__auto__,G__19856){
var self__ = this;
var this__8359__auto____$1 = this;
var pred__19863 = cljs.core.keyword_identical_QMARK_;
var expr__19864 = k__8360__auto__;
if(cljs.core.truth_((function (){var G__19866 = cljs.core.cst$kw$metrics;
var G__19867 = expr__19864;
return (pred__19863.cljs$core$IFn$_invoke$arity$2 ? pred__19863.cljs$core$IFn$_invoke$arity$2(G__19866,G__19867) : pred__19863.call(null,G__19866,G__19867));
})())){
return (new andel.tree.Leaf(G__19856,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19868 = cljs.core.cst$kw$data;
var G__19869 = expr__19864;
return (pred__19863.cljs$core$IFn$_invoke$arity$2 ? pred__19863.cljs$core$IFn$_invoke$arity$2(G__19868,G__19869) : pred__19863.call(null,G__19868,G__19869));
})())){
return (new andel.tree.Leaf(self__.metrics,G__19856,self__.__meta,self__.__extmap,null));
} else {
return (new andel.tree.Leaf(self__.metrics,self__.data,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8360__auto__,G__19856),null));
}
}
});

andel.tree.Leaf.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8364__auto__){
var self__ = this;
var this__8364__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$metrics,self__.metrics],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null))], null),self__.__extmap));
});

andel.tree.Leaf.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8351__auto__,G__19856){
var self__ = this;
var this__8351__auto____$1 = this;
return (new andel.tree.Leaf(self__.metrics,self__.data,G__19856,self__.__extmap,self__.__hash));
});

andel.tree.Leaf.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8357__auto__,entry__8358__auto__){
var self__ = this;
var this__8357__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8358__auto__)){
return this__8357__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8358__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8358__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8357__auto____$1,entry__8358__auto__);
}
});

andel.tree.Leaf.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$metrics,cljs.core.cst$sym$data], null);
});

andel.tree.Leaf.cljs$lang$type = true;

andel.tree.Leaf.cljs$lang$ctorPrSeq = (function (this__8390__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"andel.tree/Leaf");
});

andel.tree.Leaf.cljs$lang$ctorPrWriter = (function (this__8390__auto__,writer__8391__auto__){
return cljs.core._write(writer__8391__auto__,"andel.tree/Leaf");
});

andel.tree.__GT_Leaf = (function andel$tree$__GT_Leaf(metrics,data){
return (new andel.tree.Leaf(metrics,data,null,null,null));
});

andel.tree.map__GT_Leaf = (function andel$tree$map__GT_Leaf(G__19860){
return (new andel.tree.Leaf(cljs.core.cst$kw$metrics.cljs$core$IFn$_invoke$arity$1(G__19860),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__19860),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19860,cljs.core.cst$kw$metrics,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data], 0))),null));
});

andel.tree.make_node = (function andel$tree$make_node(children,p__19871){
var map__19872 = p__19871;
var map__19872__$1 = ((((!((map__19872 == null)))?((((map__19872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19872.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19872):map__19872);
var reducing_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19872__$1,cljs.core.cst$kw$reducing_DASH_fn);
return (new andel.tree.Node(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__19872,map__19872__$1,reducing_fn){
return (function (acc,x){
var G__19874 = acc;
var G__19875 = cljs.core.cst$kw$metrics.cljs$core$IFn$_invoke$arity$1(x);
return (reducing_fn.cljs$core$IFn$_invoke$arity$2 ? reducing_fn.cljs$core$IFn$_invoke$arity$2(G__19874,G__19875) : reducing_fn.call(null,G__19874,G__19875));
});})(map__19872,map__19872__$1,reducing_fn))
,(reducing_fn.cljs$core$IFn$_invoke$arity$0 ? reducing_fn.cljs$core$IFn$_invoke$arity$0() : reducing_fn.call(null)),children),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(children),null,null,null));
});
andel.tree.make_leaf = (function andel$tree$make_leaf(data,p__19876){
var map__19877 = p__19876;
var map__19877__$1 = ((((!((map__19877 == null)))?((((map__19877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19877.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19877):map__19877);
var metrics_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19877__$1,cljs.core.cst$kw$metrics_DASH_fn);
return (new andel.tree.Leaf((metrics_fn.cljs$core$IFn$_invoke$arity$1 ? metrics_fn.cljs$core$IFn$_invoke$arity$1(data) : metrics_fn.call(null,data)),data,null,null,null));
});
andel.tree.node_QMARK_ = (function andel$tree$node_QMARK_(x){
return (x instanceof andel.tree.Node);
});

andel.tree.leaf_QMARK_ = (function andel$tree$leaf_QMARK_(x){
return !(andel.tree.node_QMARK_(x));
});
andel.tree.root_path = andel.fast_zip.__GT_ZipperPath(null,null,cljs.core.cst$kw$root,null,null,null,null);
andel.tree.zipper = (function andel$tree$zipper(tree,p__19880){
var map__19881 = p__19880;
var map__19881__$1 = ((((!((map__19881 == null)))?((((map__19881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19881.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19881):map__19881);
var config = map__19881__$1;
var reducing_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19881__$1,cljs.core.cst$kw$reducing_DASH_fn);
var metrics_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19881__$1,cljs.core.cst$kw$metrics_DASH_fn);
var leaf_overflown_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19881__$1,cljs.core.cst$kw$leaf_DASH_overflown_QMARK_);
var split_thresh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19881__$1,cljs.core.cst$kw$split_DASH_thresh);
var split_leaf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19881__$1,cljs.core.cst$kw$split_DASH_leaf);
var leaf_underflown_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19881__$1,cljs.core.cst$kw$leaf_DASH_underflown_QMARK_);
var merge_leafs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19881__$1,cljs.core.cst$kw$merge_DASH_leafs);
return andel.fast_zip.__GT_ZipperLocation(andel.fast_zip.__GT_ZipperOps(andel.tree.node_QMARK_,((function (map__19881,map__19881__$1,config,reducing_fn,metrics_fn,leaf_overflown_QMARK_,split_thresh,split_leaf,leaf_underflown_QMARK_,merge_leafs){
return (function (p1__19879_SHARP_){
return p1__19879_SHARP_.children;
});})(map__19881,map__19881__$1,config,reducing_fn,metrics_fn,leaf_overflown_QMARK_,split_thresh,split_leaf,leaf_underflown_QMARK_,merge_leafs))
,((function (map__19881,map__19881__$1,config,reducing_fn,metrics_fn,leaf_overflown_QMARK_,split_thresh,split_leaf,leaf_underflown_QMARK_,merge_leafs){
return (function (node,children){
return andel.tree.make_node(children,config);
});})(map__19881,map__19881__$1,config,reducing_fn,metrics_fn,leaf_overflown_QMARK_,split_thresh,split_leaf,leaf_underflown_QMARK_,merge_leafs))
,reducing_fn,metrics_fn,leaf_overflown_QMARK_,split_thresh,split_leaf,leaf_underflown_QMARK_,merge_leafs),tree,andel.tree.root_path);
});
andel.tree.partition_binary = (function andel$tree$partition_binary(s,thresh){
var cs = cljs.core.count(s);
if((cs < thresh)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
} else {
var vec__19883 = cljs.core.split_at(cljs.core.quot(cs,(2)),s);
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19883,(0),null);
var right = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19883,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((andel.tree.partition_binary.cljs$core$IFn$_invoke$arity$2 ? andel.tree.partition_binary.cljs$core$IFn$_invoke$arity$2(left,thresh) : andel.tree.partition_binary.call(null,left,thresh)),(andel.tree.partition_binary.cljs$core$IFn$_invoke$arity$2 ? andel.tree.partition_binary.cljs$core$IFn$_invoke$arity$2(right,thresh) : andel.tree.partition_binary.call(null,right,thresh)));
}
});
andel.tree.fast_some = (function andel$tree$fast_some(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(c) : pred.call(null,c)))){
return cljs.core.reduced(true);
} else {
return false;
}
}),false,coll);
});
andel.tree.nodes_QMARK_ = (function andel$tree$nodes_QMARK_(c){
return andel.tree.node_QMARK_(cljs.core.first(c));
});
andel.tree.split_needed_QMARK_ = (function andel$tree$split_needed_QMARK_(children,config){
var leaf_overflown_QMARK_ = config.leaf_overflown_QMARK_;
var split_thresh = config.split_thresh;
return andel.tree.fast_some((cljs.core.truth_(andel.tree.nodes_QMARK_(children))?((function (leaf_overflown_QMARK_,split_thresh){
return (function (p1__19886_SHARP_){
return (split_thresh <= cljs.core.count(p1__19886_SHARP_.children));
});})(leaf_overflown_QMARK_,split_thresh))
:((function (leaf_overflown_QMARK_,split_thresh){
return (function (p1__19887_SHARP_){
var G__19888 = p1__19887_SHARP_.data;
return (leaf_overflown_QMARK_.cljs$core$IFn$_invoke$arity$1 ? leaf_overflown_QMARK_.cljs$core$IFn$_invoke$arity$1(G__19888) : leaf_overflown_QMARK_.call(null,G__19888));
});})(leaf_overflown_QMARK_,split_thresh))
),children);
});
andel.tree.split_children = (function andel$tree$split_children(children,config){
var leaf_overflown_QMARK_ = config.leaf_overflown_QMARK_;
var split_leaf = config.split_leaf;
var split_thresh = config.split_thresh;
if(cljs.core.truth_(andel.tree.split_needed_QMARK_(children,config))){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (leaf_overflown_QMARK_,split_leaf,split_thresh){
return (function (result,node){
if((andel.tree.node_QMARK_(node)) && ((split_thresh <= cljs.core.count(node.children)))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,result,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (leaf_overflown_QMARK_,split_leaf,split_thresh){
return (function (p1__19889_SHARP_){
return andel.tree.make_node(p1__19889_SHARP_,config);
});})(leaf_overflown_QMARK_,split_leaf,split_thresh))
,andel.tree.partition_binary(node.children,split_thresh)));
} else {
if(cljs.core.truth_((function (){var and__7666__auto__ = andel.tree.leaf_QMARK_(node);
if(and__7666__auto__){
var G__19892 = node.data;
return (leaf_overflown_QMARK_.cljs$core$IFn$_invoke$arity$1 ? leaf_overflown_QMARK_.cljs$core$IFn$_invoke$arity$1(G__19892) : leaf_overflown_QMARK_.call(null,G__19892));
} else {
return and__7666__auto__;
}
})())){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,result,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (leaf_overflown_QMARK_,split_leaf,split_thresh){
return (function (p1__19890_SHARP_){
return andel.tree.make_leaf(p1__19890_SHARP_,config);
});})(leaf_overflown_QMARK_,split_leaf,split_thresh))
,(function (){var G__19893 = node.data;
return (split_leaf.cljs$core$IFn$_invoke$arity$1 ? split_leaf.cljs$core$IFn$_invoke$arity$1(G__19893) : split_leaf.call(null,G__19893));
})()));
} else {
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,node);

}
}
});})(leaf_overflown_QMARK_,split_leaf,split_thresh))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),children));
} else {
return children;
}
});
andel.tree.loc_acc = (function andel$tree$loc_acc(loc){
var path = loc.path;
var acc = path.acc;
var or__7678__auto__ = acc;
if(cljs.core.truth_(or__7678__auto__)){
return or__7678__auto__;
} else {
var fexpr__19894 = loc.ops.reducing_fn;
return (fexpr__19894.cljs$core$IFn$_invoke$arity$0 ? fexpr__19894.cljs$core$IFn$_invoke$arity$0() : fexpr__19894.call(null));
}
});
andel.tree.merge_needed_QMARK_ = (function andel$tree$merge_needed_QMARK_(children,config){
var leaf_underflown_QMARK_ = config.leaf_underflown_QMARK_;
var split_thresh = config.split_thresh;
return andel.tree.fast_some((cljs.core.truth_(andel.tree.nodes_QMARK_(children))?(function (){var merge_thresh = cljs.core.quot(split_thresh,(2));
return ((function (merge_thresh,leaf_underflown_QMARK_,split_thresh){
return (function (p1__19895_SHARP_){
return (cljs.core.count(p1__19895_SHARP_.children) < merge_thresh);
});
;})(merge_thresh,leaf_underflown_QMARK_,split_thresh))
})():((function (leaf_underflown_QMARK_,split_thresh){
return (function (p1__19896_SHARP_){
var G__19897 = p1__19896_SHARP_.data;
return (leaf_underflown_QMARK_.cljs$core$IFn$_invoke$arity$1 ? leaf_underflown_QMARK_.cljs$core$IFn$_invoke$arity$1(G__19897) : leaf_underflown_QMARK_.call(null,G__19897));
});})(leaf_underflown_QMARK_,split_thresh))
),children);
});
andel.tree.merge_children = (function andel$tree$merge_children(children,config){
var leaf_underflown_QMARK_ = config.leaf_underflown_QMARK_;
var merge_leafs = config.merge_leafs;
var leaf_overflown_QMARK_ = config.leaf_overflown_QMARK_;
var split_leaf = config.split_leaf;
var split_thresh = config.split_thresh;
if(cljs.core.truth_(andel.tree.merge_needed_QMARK_(children,config))){
if(cljs.core.truth_(andel.tree.nodes_QMARK_(children))){
var merge_thresh = cljs.core.quot(split_thresh,(2));
var vec__19898 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (merge_thresh,leaf_underflown_QMARK_,merge_leafs,leaf_overflown_QMARK_,split_leaf,split_thresh){
return (function (p__19901,right){
var vec__19902 = p__19901;
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19902,(0),null);
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19902,(1),null);
var left_children = left.children;
var right_children = right.children;
var left_c = cljs.core.count(left_children);
var right_c = cljs.core.count(right_children);
if(((left_c < merge_thresh)) || ((right_c < merge_thresh))){
if((split_thresh <= (left_c + right_c))){
var vec__19905 = andel.tree.partition_binary(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(left_children,right_children),split_thresh);
var children_left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19905,(0),null);
var children_right = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19905,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,andel.tree.make_node((andel.tree.merge_children.cljs$core$IFn$_invoke$arity$2 ? andel.tree.merge_children.cljs$core$IFn$_invoke$arity$2(children_left,config) : andel.tree.merge_children.call(null,children_left,config)),config)),andel.tree.make_node(children_right,config)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,andel.tree.make_node((function (){var G__19908 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(left_children,right_children);
var G__19909 = config;
return (andel.tree.merge_children.cljs$core$IFn$_invoke$arity$2 ? andel.tree.merge_children.cljs$core$IFn$_invoke$arity$2(G__19908,G__19909) : andel.tree.merge_children.call(null,G__19908,G__19909));
})(),config)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,left),right], null);
}
});})(merge_thresh,leaf_underflown_QMARK_,merge_leafs,leaf_overflown_QMARK_,split_leaf,split_thresh))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.first(children)], null),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),children));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19898,(0),null);
var last = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19898,(1),null);
return cljs.core.persistent_BANG_(cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,last));
} else {
var vec__19910 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (leaf_underflown_QMARK_,merge_leafs,leaf_overflown_QMARK_,split_leaf,split_thresh){
return (function (p__19913,right){
var vec__19914 = p__19913;
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19914,(0),null);
var left_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19914,(1),null);
if(cljs.core.truth_((function (){var or__7678__auto__ = (leaf_underflown_QMARK_.cljs$core$IFn$_invoke$arity$1 ? leaf_underflown_QMARK_.cljs$core$IFn$_invoke$arity$1(left_data) : leaf_underflown_QMARK_.call(null,left_data));
if(cljs.core.truth_(or__7678__auto__)){
return or__7678__auto__;
} else {
var G__19917 = right.data;
return (leaf_underflown_QMARK_.cljs$core$IFn$_invoke$arity$1 ? leaf_underflown_QMARK_.cljs$core$IFn$_invoke$arity$1(G__19917) : leaf_underflown_QMARK_.call(null,G__19917));
}
})())){
var merged_data = (function (){var G__19918 = left_data;
var G__19919 = right.data;
return (merge_leafs.cljs$core$IFn$_invoke$arity$2 ? merge_leafs.cljs$core$IFn$_invoke$arity$2(G__19918,G__19919) : merge_leafs.call(null,G__19918,G__19919));
})();
if(cljs.core.truth_((leaf_overflown_QMARK_.cljs$core$IFn$_invoke$arity$1 ? leaf_overflown_QMARK_.cljs$core$IFn$_invoke$arity$1(merged_data) : leaf_overflown_QMARK_.call(null,merged_data)))){
var vec__19920 = (split_leaf.cljs$core$IFn$_invoke$arity$1 ? split_leaf.cljs$core$IFn$_invoke$arity$1(merged_data) : split_leaf.call(null,merged_data));
var left_data__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19920,(0),null);
var right_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19920,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,andel.tree.make_leaf(left_data__$1,config)),right_data], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,merged_data], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,andel.tree.make_leaf(left_data,config)),right.data], null);
}
});})(leaf_underflown_QMARK_,merge_leafs,leaf_overflown_QMARK_,split_leaf,split_thresh))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.first(children).data], null),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),children));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19910,(0),null);
var last = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19910,(1),null);
return cljs.core.persistent_BANG_(cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,andel.tree.make_leaf(last,config)));
}
} else {
return children;
}
});
andel.tree.balance_children = (function andel$tree$balance_children(children,config){
return andel.tree.merge_children(andel.tree.split_children(children,config),config);
});
andel.tree.grow_tree = (function andel$tree$grow_tree(children,config){
while(true){
var split_thresh = config.split_thresh;
var balanced_children = andel.tree.balance_children(children,config);
if((cljs.core.count(balanced_children) < split_thresh)){
return andel.tree.make_node(balanced_children,config);
} else {
var G__19923 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [andel.tree.make_node(balanced_children,config)], null);
var G__19924 = config;
children = G__19923;
config = G__19924;
continue;
}
break;
}
});
andel.tree.shrink_tree = (function andel$tree$shrink_tree(node){
while(true){
var children = node.children;
var vec__19925 = children;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19925,(0),null);
if((andel.tree.node_QMARK_(c)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(children)))){
var G__19928 = c;
node = G__19928;
continue;
} else {
return node;
}
break;
}
});
andel.tree.up = (function andel$tree$up(loc){
var node = loc.node;
var path = loc.path;
var changed_QMARK_ = (function (){var G__19929 = path;
if((G__19929 == null)){
return null;
} else {
return G__19929.changed_QMARK_;
}
})();
if(cljs.core.truth_(changed_QMARK_)){
var config = loc.ops;
var temp__5276__auto__ = andel.fast_zip.up(loc);
if(cljs.core.truth_(temp__5276__auto__)){
var parent = temp__5276__auto__;
return andel.fast_zip.replace(parent,andel.tree.make_node(andel.tree.balance_children(andel.fast_zip.children(parent),config),config));
} else {
return andel.fast_zip.__GT_ZipperLocation(loc.ops,andel.tree.shrink_tree(andel.tree.grow_tree(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),config)),andel.tree.root_path);
}
} else {
return andel.fast_zip.up(loc);
}
});
andel.tree.right = (function andel$tree$right(loc){
var node = loc.node;
var path = loc.path;
var acc = path.acc;
var temp__5278__auto__ = andel.fast_zip.right(loc);
if(cljs.core.truth_(temp__5278__auto__)){
var r = temp__5278__auto__;
var reducing_fn = loc.ops.reducing_fn;
var acc_SINGLEQUOTE_ = (function (){var G__19931 = (function (){var or__7678__auto__ = acc;
if(cljs.core.truth_(or__7678__auto__)){
return or__7678__auto__;
} else {
return (reducing_fn.cljs$core$IFn$_invoke$arity$0 ? reducing_fn.cljs$core$IFn$_invoke$arity$0() : reducing_fn.call(null));
}
})();
var G__19932 = node.metrics;
return (reducing_fn.cljs$core$IFn$_invoke$arity$2 ? reducing_fn.cljs$core$IFn$_invoke$arity$2(G__19931,G__19932) : reducing_fn.call(null,G__19931,G__19932));
})();
return andel.fast_zip.update_path(r,((function (reducing_fn,acc_SINGLEQUOTE_,r,temp__5278__auto__,node,path,acc){
return (function (p1__19930_SHARP_){
return andel.fast_zip.assoc_acc(p1__19930_SHARP_,acc_SINGLEQUOTE_);
});})(reducing_fn,acc_SINGLEQUOTE_,r,temp__5278__auto__,node,path,acc))
);
} else {
return null;
}
});
andel.tree.down = (function andel$tree$down(loc){
var path = loc.path;
var acc = (function (){var G__19934 = path;
if((G__19934 == null)){
return null;
} else {
return G__19934.acc;
}
})();
var G__19935 = andel.fast_zip.down(loc);
if((G__19935 == null)){
return null;
} else {
return andel.fast_zip.update_path(G__19935,((function (G__19935,path,acc){
return (function (p1__19933_SHARP_){
return andel.fast_zip.assoc_acc(p1__19933_SHARP_,acc);
});})(G__19935,path,acc))
);
}
});
andel.tree.end_QMARK_ = (function andel$tree$end_QMARK_(loc){
return (loc.path instanceof cljs.core.Keyword);
});
/**
 * Modified version of clojure.zip/root to work with balancing version of up
 */
andel.tree.root = (function andel$tree$root(loc){
while(true){
if(cljs.core.truth_(andel.tree.end_QMARK_(loc))){
return andel.fast_zip.node(loc);
} else {
var p = andel.tree.up(loc);
if(cljs.core.truth_(p)){
var G__19936 = p;
loc = G__19936;
continue;
} else {
return andel.fast_zip.node(loc);
}
}
break;
}
});
andel.tree.node = andel.fast_zip.node;
andel.tree.branch_QMARK_ = (function andel$tree$branch_QMARK_(loc){
return andel.tree.node_QMARK_((andel.tree.node.cljs$core$IFn$_invoke$arity$1 ? andel.tree.node.cljs$core$IFn$_invoke$arity$1(loc) : andel.tree.node.call(null,loc)));
});
/**
 * Modified version of clojure.zip/next to work with balancing version of up
 */
andel.tree.next = (function andel$tree$next(loc){
var path = loc.path;
if(cljs.core.truth_(andel.tree.end_QMARK_(loc))){
return loc;
} else {
var or__7678__auto__ = (function (){var and__7666__auto__ = andel.tree.branch_QMARK_(loc);
if(cljs.core.truth_(and__7666__auto__)){
return andel.tree.down(loc);
} else {
return and__7666__auto__;
}
})();
if(cljs.core.truth_(or__7678__auto__)){
return or__7678__auto__;
} else {
var or__7678__auto____$1 = andel.tree.right(loc);
if(cljs.core.truth_(or__7678__auto____$1)){
return or__7678__auto____$1;
} else {
var p = loc;
while(true){
var temp__5276__auto__ = andel.tree.up(p);
if(cljs.core.truth_(temp__5276__auto__)){
var u = temp__5276__auto__;
var or__7678__auto____$2 = andel.tree.right(u);
if(cljs.core.truth_(or__7678__auto____$2)){
return or__7678__auto____$2;
} else {
var G__19937 = u;
p = G__19937;
continue;
}
} else {
return andel.fast_zip.__GT_ZipperLocation(loc.ops,p.node,cljs.core.cst$kw$end);
}
break;
}
}
}
}
});
/**
 * Just like next but not going down
 */
andel.tree.skip = (function andel$tree$skip(loc){
var path = loc.path;
if(cljs.core.truth_(andel.tree.end_QMARK_(loc))){
return loc;
} else {
var or__7678__auto__ = andel.tree.right(loc);
if(cljs.core.truth_(or__7678__auto__)){
return or__7678__auto__;
} else {
var p = loc;
while(true){
var temp__5276__auto__ = andel.tree.up(p);
if(cljs.core.truth_(temp__5276__auto__)){
var u = temp__5276__auto__;
var or__7678__auto____$1 = andel.tree.right(u);
if(cljs.core.truth_(or__7678__auto____$1)){
return or__7678__auto____$1;
} else {
var G__19938 = u;
p = G__19938;
continue;
}
} else {
return andel.fast_zip.__GT_ZipperLocation(loc.ops,p.node,cljs.core.cst$kw$end);
}
break;
}
}
}
});
andel.tree.insert_right = andel.fast_zip.insert_right;
andel.tree.children = andel.fast_zip.children;
andel.tree.edit = andel.fast_zip.edit;
andel.tree.replace = andel.fast_zip.replace;
andel.tree.insert_child = andel.fast_zip.insert_child;
andel.tree.next_leaf = (function andel$tree$next_leaf(loc){
while(true){
var loc__$1 = andel.tree.next(loc);
if(cljs.core.truth_((function (){var or__7678__auto__ = andel.tree.leaf_QMARK_((andel.tree.node.cljs$core$IFn$_invoke$arity$1 ? andel.tree.node.cljs$core$IFn$_invoke$arity$1(loc__$1) : andel.tree.node.call(null,loc__$1)));
if(or__7678__auto__){
return or__7678__auto__;
} else {
return andel.tree.end_QMARK_(loc__$1);
}
})())){
return loc__$1;
} else {
var G__19939 = loc__$1;
loc = G__19939;
continue;
}
break;
}
});
andel.tree.root_QMARK_ = (function andel$tree$root_QMARK_(loc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$root,loc.path.ppath);
});
andel.tree.reset = (function andel$tree$reset(loc){
return andel.tree.zipper(andel.tree.root(loc),loc.ops);
});
andel.tree.push_BANG_ = (function andel$tree$push_BANG_(a,x){
a.push(x);

return a;
});
andel.tree.scan = (function andel$tree$scan(loc,pred){
while(true){
if(cljs.core.truth_(andel.tree.end_QMARK_(loc))){
return loc;
} else {
var node = loc.node;
var path = loc.path;
var rights = (function (){var G__19940 = path;
if((G__19940 == null)){
return null;
} else {
return G__19940.r;
}
})();
var lefts = (function (){var G__19941 = path;
if((G__19941 == null)){
return null;
} else {
return G__19941.l;
}
})();
var acc = (function (){var G__19942 = path;
if((G__19942 == null)){
return null;
} else {
return G__19942.acc;
}
})();
var reducing_fn = loc.ops.reducing_fn;
var next_loc = (cljs.core.truth_(andel.tree.root_QMARK_(loc))?loc:(function (){var l = cljs.core.transient$(lefts);
var n = node;
var r = rights;
var acc__$1 = (function (){var or__7678__auto__ = acc;
if(cljs.core.truth_(or__7678__auto__)){
return or__7678__auto__;
} else {
return (reducing_fn.cljs$core$IFn$_invoke$arity$0 ? reducing_fn.cljs$core$IFn$_invoke$arity$0() : reducing_fn.call(null));
}
})();
while(true){
if(!((n == null))){
var m = n.metrics;
var acc_SINGLEQUOTE_ = (reducing_fn.cljs$core$IFn$_invoke$arity$2 ? reducing_fn.cljs$core$IFn$_invoke$arity$2(acc__$1,m) : reducing_fn.call(null,acc__$1,m));
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(acc__$1,m) : pred.call(null,acc__$1,m)))){
return andel.fast_zip.__GT_ZipperLocation(loc.ops,n,andel.fast_zip.__GT_ZipperPath(cljs.core.persistent_BANG_(l),cljs.core.seq(r),path.ppath,path.pnodes,path.changed_QMARK_,acc__$1,null));
} else {
var G__19943 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(l,n);
var G__19944 = cljs.core.first(r);
var G__19945 = cljs.core.rest(r);
var G__19946 = acc_SINGLEQUOTE_;
l = G__19943;
n = G__19944;
r = G__19945;
acc__$1 = G__19946;
continue;
}
} else {
return null;
}
break;
}
})());
if(!((next_loc == null))){
if(cljs.core.truth_(andel.tree.branch_QMARK_(next_loc))){
var G__19947 = andel.tree.down(next_loc);
var G__19948 = pred;
loc = G__19947;
pred = G__19948;
continue;
} else {
return next_loc;
}
} else {
var G__19949 = andel.tree.skip(loc);
var G__19950 = pred;
loc = G__19949;
pred = G__19950;
continue;
}
}
break;
}
});
andel.tree.insert_left = (function andel$tree$insert_left(loc,x){
var reducing_fn = loc.ops.reducing_fn;
return andel.fast_zip.update_path(andel.fast_zip.insert_left(loc,x),((function (reducing_fn){
return (function (p){
return andel.fast_zip.assoc_acc(p,(function (){var G__19951 = p.acc;
var G__19952 = x.metrics;
return (reducing_fn.cljs$core$IFn$_invoke$arity$2 ? reducing_fn.cljs$core$IFn$_invoke$arity$2(G__19951,G__19952) : reducing_fn.call(null,G__19951,G__19952));
})());
});})(reducing_fn))
);
});
andel.tree.remove = (function andel$tree$remove(loc){
while(true){
var node = loc.node;
var path = loc.path;
var vec__19953 = (function (){var G__19959 = path;
if((G__19959 == null)){
return null;
} else {
return G__19959.l;
}
})();
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19953,(0),null);
var vec__19956 = (function (){var G__19960 = path;
if((G__19960 == null)){
return null;
} else {
return G__19960.r;
}
})();
var right = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19956,(0),null);
if(!((right == null))){
return andel.fast_zip.__GT_ZipperLocation(loc.ops,right,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(path,cljs.core.cst$kw$r,((function (loc,node,path,vec__19953,left,vec__19956,right){
return (function (r){
return cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),r));
});})(loc,node,path,vec__19953,left,vec__19956,right))
),cljs.core.cst$kw$changed_QMARK_,true));
} else {
if(!((left == null))){
return andel.tree.next(andel.fast_zip.remove(loc));
} else {
if(cljs.core.truth_(andel.tree.root_QMARK_(loc))){
var G__19961 = loc;
var G__19962 = andel.tree.make_node(cljs.core.PersistentVector.EMPTY,loc.ops);
return (andel.tree.replace.cljs$core$IFn$_invoke$arity$2 ? andel.tree.replace.cljs$core$IFn$_invoke$arity$2(G__19961,G__19962) : andel.tree.replace.call(null,G__19961,G__19962));
} else {
var G__19963 = andel.fast_zip.up(loc);
loc = G__19963;
continue;
}
}
}
break;
}
});
