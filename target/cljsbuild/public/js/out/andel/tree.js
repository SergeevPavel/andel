// Compiled by ClojureScript 1.9.671 {}
goog.provide('andel.tree');
goog.require('cljs.core');
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
andel.tree.Node.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__41738__auto__,k__41739__auto__){
var self__ = this;
var this__41738__auto____$1 = this;
return this__41738__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__41739__auto__,null);
});

andel.tree.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__41740__auto__,k63026,else__41741__auto__){
var self__ = this;
var this__41740__auto____$1 = this;
var G__63030 = k63026;
var G__63030__$1 = (((G__63030 instanceof cljs.core.Keyword))?G__63030.fqn:null);
switch (G__63030__$1) {
case "metrics":
return self__.metrics;

break;
case "children":
return self__.children;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k63026,else__41741__auto__);

}
});

andel.tree.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__41752__auto__,writer__41753__auto__,opts__41754__auto__){
var self__ = this;
var this__41752__auto____$1 = this;
var pr_pair__41755__auto__ = ((function (this__41752__auto____$1){
return (function (keyval__41756__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__41753__auto__,cljs.core.pr_writer,""," ","",opts__41754__auto__,keyval__41756__auto__);
});})(this__41752__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__41753__auto__,pr_pair__41755__auto__,"#andel.tree.Node{",", ","}",opts__41754__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"metrics","metrics",394093469),self__.metrics],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
});

andel.tree.Node.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63025){
var self__ = this;
var G__63025__$1 = this;
return (new cljs.core.RecordIter((0),G__63025__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metrics","metrics",394093469),new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

andel.tree.Node.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__41736__auto__){
var self__ = this;
var this__41736__auto____$1 = this;
return self__.__meta;
});

andel.tree.Node.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__41733__auto__){
var self__ = this;
var this__41733__auto____$1 = this;
return (new andel.tree.Node(self__.metrics,self__.children,self__.__meta,self__.__extmap,self__.__hash));
});

andel.tree.Node.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__41742__auto__){
var self__ = this;
var this__41742__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

andel.tree.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__41734__auto__){
var self__ = this;
var this__41734__auto____$1 = this;
var h__41506__auto__ = self__.__hash;
if(!((h__41506__auto__ == null))){
return h__41506__auto__;
} else {
var h__41506__auto____$1 = ((function (h__41506__auto__,this__41734__auto____$1){
return (function (coll__41735__auto__){
return (-1121859487 ^ cljs.core.hash_unordered_coll.call(null,coll__41735__auto__));
});})(h__41506__auto__,this__41734__auto____$1))
.call(null,this__41734__auto____$1);
self__.__hash = h__41506__auto____$1;

return h__41506__auto____$1;
}
});

andel.tree.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63027,other63028){
var self__ = this;
var this63027__$1 = this;
return (!((other63028 == null))) && ((this63027__$1.constructor === other63028.constructor)) && (cljs.core._EQ_.call(null,this63027__$1.metrics,other63028.metrics)) && (cljs.core._EQ_.call(null,this63027__$1.children,other63028.children)) && (cljs.core._EQ_.call(null,this63027__$1.__extmap,other63028.__extmap));
});

andel.tree.Node.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__41747__auto__,k__41748__auto__){
var self__ = this;
var this__41747__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"metrics","metrics",394093469),null], null), null),k__41748__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__41747__auto____$1),self__.__meta),k__41748__auto__);
} else {
return (new andel.tree.Node(self__.metrics,self__.children,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__41748__auto__)),null));
}
});

andel.tree.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__41745__auto__,k__41746__auto__,G__63025){
var self__ = this;
var this__41745__auto____$1 = this;
var pred__63031 = cljs.core.keyword_identical_QMARK_;
var expr__63032 = k__41746__auto__;
if(cljs.core.truth_(pred__63031.call(null,new cljs.core.Keyword(null,"metrics","metrics",394093469),expr__63032))){
return (new andel.tree.Node(G__63025,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__63031.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__63032))){
return (new andel.tree.Node(self__.metrics,G__63025,self__.__meta,self__.__extmap,null));
} else {
return (new andel.tree.Node(self__.metrics,self__.children,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__41746__auto__,G__63025),null));
}
}
});

andel.tree.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__41750__auto__){
var self__ = this;
var this__41750__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"metrics","metrics",394093469),self__.metrics],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
});

andel.tree.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__41737__auto__,G__63025){
var self__ = this;
var this__41737__auto____$1 = this;
return (new andel.tree.Node(self__.metrics,self__.children,G__63025,self__.__extmap,self__.__hash));
});

andel.tree.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__41743__auto__,entry__41744__auto__){
var self__ = this;
var this__41743__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__41744__auto__)){
return this__41743__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__41744__auto__,(0)),cljs.core._nth.call(null,entry__41744__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__41743__auto____$1,entry__41744__auto__);
}
});

andel.tree.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"metrics","metrics",2034624996,null),new cljs.core.Symbol(null,"children","children",699969545,null)], null);
});

andel.tree.Node.cljs$lang$type = true;

andel.tree.Node.cljs$lang$ctorPrSeq = (function (this__41776__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"andel.tree/Node");
});

andel.tree.Node.cljs$lang$ctorPrWriter = (function (this__41776__auto__,writer__41777__auto__){
return cljs.core._write.call(null,writer__41777__auto__,"andel.tree/Node");
});

andel.tree.__GT_Node = (function andel$tree$__GT_Node(metrics,children){
return (new andel.tree.Node(metrics,children,null,null,null));
});

andel.tree.map__GT_Node = (function andel$tree$map__GT_Node(G__63029){
return (new andel.tree.Node(new cljs.core.Keyword(null,"metrics","metrics",394093469).cljs$core$IFn$_invoke$arity$1(G__63029),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__63029),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__63029,new cljs.core.Keyword(null,"metrics","metrics",394093469),new cljs.core.Keyword(null,"children","children",-940561982))),null));
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
andel.tree.Leaf.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__41738__auto__,k__41739__auto__){
var self__ = this;
var this__41738__auto____$1 = this;
return this__41738__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__41739__auto__,null);
});

andel.tree.Leaf.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__41740__auto__,k63036,else__41741__auto__){
var self__ = this;
var this__41740__auto____$1 = this;
var G__63040 = k63036;
var G__63040__$1 = (((G__63040 instanceof cljs.core.Keyword))?G__63040.fqn:null);
switch (G__63040__$1) {
case "metrics":
return self__.metrics;

break;
case "data":
return self__.data;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k63036,else__41741__auto__);

}
});

andel.tree.Leaf.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__41752__auto__,writer__41753__auto__,opts__41754__auto__){
var self__ = this;
var this__41752__auto____$1 = this;
var pr_pair__41755__auto__ = ((function (this__41752__auto____$1){
return (function (keyval__41756__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__41753__auto__,cljs.core.pr_writer,""," ","",opts__41754__auto__,keyval__41756__auto__);
});})(this__41752__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__41753__auto__,pr_pair__41755__auto__,"#andel.tree.Leaf{",", ","}",opts__41754__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"metrics","metrics",394093469),self__.metrics],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
});

andel.tree.Leaf.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63035){
var self__ = this;
var G__63035__$1 = this;
return (new cljs.core.RecordIter((0),G__63035__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metrics","metrics",394093469),new cljs.core.Keyword(null,"data","data",-232669377)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

andel.tree.Leaf.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__41736__auto__){
var self__ = this;
var this__41736__auto____$1 = this;
return self__.__meta;
});

andel.tree.Leaf.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__41733__auto__){
var self__ = this;
var this__41733__auto____$1 = this;
return (new andel.tree.Leaf(self__.metrics,self__.data,self__.__meta,self__.__extmap,self__.__hash));
});

andel.tree.Leaf.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__41742__auto__){
var self__ = this;
var this__41742__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

andel.tree.Leaf.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__41734__auto__){
var self__ = this;
var this__41734__auto____$1 = this;
var h__41506__auto__ = self__.__hash;
if(!((h__41506__auto__ == null))){
return h__41506__auto__;
} else {
var h__41506__auto____$1 = ((function (h__41506__auto__,this__41734__auto____$1){
return (function (coll__41735__auto__){
return (-1583083370 ^ cljs.core.hash_unordered_coll.call(null,coll__41735__auto__));
});})(h__41506__auto__,this__41734__auto____$1))
.call(null,this__41734__auto____$1);
self__.__hash = h__41506__auto____$1;

return h__41506__auto____$1;
}
});

andel.tree.Leaf.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63037,other63038){
var self__ = this;
var this63037__$1 = this;
return (!((other63038 == null))) && ((this63037__$1.constructor === other63038.constructor)) && (cljs.core._EQ_.call(null,this63037__$1.metrics,other63038.metrics)) && (cljs.core._EQ_.call(null,this63037__$1.data,other63038.data)) && (cljs.core._EQ_.call(null,this63037__$1.__extmap,other63038.__extmap));
});

andel.tree.Leaf.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__41747__auto__,k__41748__auto__){
var self__ = this;
var this__41747__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metrics","metrics",394093469),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__41748__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__41747__auto____$1),self__.__meta),k__41748__auto__);
} else {
return (new andel.tree.Leaf(self__.metrics,self__.data,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__41748__auto__)),null));
}
});

andel.tree.Leaf.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__41745__auto__,k__41746__auto__,G__63035){
var self__ = this;
var this__41745__auto____$1 = this;
var pred__63041 = cljs.core.keyword_identical_QMARK_;
var expr__63042 = k__41746__auto__;
if(cljs.core.truth_(pred__63041.call(null,new cljs.core.Keyword(null,"metrics","metrics",394093469),expr__63042))){
return (new andel.tree.Leaf(G__63035,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__63041.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__63042))){
return (new andel.tree.Leaf(self__.metrics,G__63035,self__.__meta,self__.__extmap,null));
} else {
return (new andel.tree.Leaf(self__.metrics,self__.data,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__41746__auto__,G__63035),null));
}
}
});

andel.tree.Leaf.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__41750__auto__){
var self__ = this;
var this__41750__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"metrics","metrics",394093469),self__.metrics],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
});

andel.tree.Leaf.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__41737__auto__,G__63035){
var self__ = this;
var this__41737__auto____$1 = this;
return (new andel.tree.Leaf(self__.metrics,self__.data,G__63035,self__.__extmap,self__.__hash));
});

andel.tree.Leaf.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__41743__auto__,entry__41744__auto__){
var self__ = this;
var this__41743__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__41744__auto__)){
return this__41743__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__41744__auto__,(0)),cljs.core._nth.call(null,entry__41744__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__41743__auto____$1,entry__41744__auto__);
}
});

andel.tree.Leaf.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"metrics","metrics",2034624996,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null);
});

andel.tree.Leaf.cljs$lang$type = true;

andel.tree.Leaf.cljs$lang$ctorPrSeq = (function (this__41776__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"andel.tree/Leaf");
});

andel.tree.Leaf.cljs$lang$ctorPrWriter = (function (this__41776__auto__,writer__41777__auto__){
return cljs.core._write.call(null,writer__41777__auto__,"andel.tree/Leaf");
});

andel.tree.__GT_Leaf = (function andel$tree$__GT_Leaf(metrics,data){
return (new andel.tree.Leaf(metrics,data,null,null,null));
});

andel.tree.map__GT_Leaf = (function andel$tree$map__GT_Leaf(G__63039){
return (new andel.tree.Leaf(new cljs.core.Keyword(null,"metrics","metrics",394093469).cljs$core$IFn$_invoke$arity$1(G__63039),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__63039),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__63039,new cljs.core.Keyword(null,"metrics","metrics",394093469),new cljs.core.Keyword(null,"data","data",-232669377))),null));
});

andel.tree.make_node = (function andel$tree$make_node(children,p__63045){
var map__63046 = p__63045;
var map__63046__$1 = ((((!((map__63046 == null)))?((((map__63046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63046.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63046):map__63046);
var reducing_fn = cljs.core.get.call(null,map__63046__$1,new cljs.core.Keyword(null,"reducing-fn","reducing-fn",-210667109));
return (new andel.tree.Node(cljs.core.reduce.call(null,((function (map__63046,map__63046__$1,reducing_fn){
return (function (acc,x){
return reducing_fn.call(null,acc,new cljs.core.Keyword(null,"metrics","metrics",394093469).cljs$core$IFn$_invoke$arity$1(x));
});})(map__63046,map__63046__$1,reducing_fn))
,reducing_fn.call(null),children),cljs.core.into_array.call(null,children),null,null,null));
});
andel.tree.make_leaf = (function andel$tree$make_leaf(data,p__63048){
var map__63049 = p__63048;
var map__63049__$1 = ((((!((map__63049 == null)))?((((map__63049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63049.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63049):map__63049);
var metrics_fn = cljs.core.get.call(null,map__63049__$1,new cljs.core.Keyword(null,"metrics-fn","metrics-fn",-902159656));
return (new andel.tree.Leaf(metrics_fn.call(null,data),data,null,null,null));
});
andel.tree.node_QMARK_ = (function andel$tree$node_QMARK_(x){
return (x instanceof andel.tree.Node);
});

andel.tree.leaf_QMARK_ = (function andel$tree$leaf_QMARK_(x){
return !(andel.tree.node_QMARK_.call(null,x));
});
andel.tree.root_path = andel.fast_zip.__GT_ZipperPath.call(null,null,null,new cljs.core.Keyword(null,"root","root",-448657453),null,null,null,null);
andel.tree.zipper = (function andel$tree$zipper(tree,p__63052){
var map__63053 = p__63052;
var map__63053__$1 = ((((!((map__63053 == null)))?((((map__63053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63053.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63053):map__63053);
var config = map__63053__$1;
var reducing_fn = cljs.core.get.call(null,map__63053__$1,new cljs.core.Keyword(null,"reducing-fn","reducing-fn",-210667109));
var metrics_fn = cljs.core.get.call(null,map__63053__$1,new cljs.core.Keyword(null,"metrics-fn","metrics-fn",-902159656));
var leaf_overflown_QMARK_ = cljs.core.get.call(null,map__63053__$1,new cljs.core.Keyword(null,"leaf-overflown?","leaf-overflown?",-1100480296));
var split_thresh = cljs.core.get.call(null,map__63053__$1,new cljs.core.Keyword(null,"split-thresh","split-thresh",-792823054));
var split_leaf = cljs.core.get.call(null,map__63053__$1,new cljs.core.Keyword(null,"split-leaf","split-leaf",2010179863));
var leaf_underflown_QMARK_ = cljs.core.get.call(null,map__63053__$1,new cljs.core.Keyword(null,"leaf-underflown?","leaf-underflown?",877072017));
var merge_leafs = cljs.core.get.call(null,map__63053__$1,new cljs.core.Keyword(null,"merge-leafs","merge-leafs",472779958));
return andel.fast_zip.__GT_ZipperLocation.call(null,andel.fast_zip.__GT_ZipperOps.call(null,andel.tree.node_QMARK_,((function (map__63053,map__63053__$1,config,reducing_fn,metrics_fn,leaf_overflown_QMARK_,split_thresh,split_leaf,leaf_underflown_QMARK_,merge_leafs){
return (function (p1__63051_SHARP_){
return p1__63051_SHARP_.children;
});})(map__63053,map__63053__$1,config,reducing_fn,metrics_fn,leaf_overflown_QMARK_,split_thresh,split_leaf,leaf_underflown_QMARK_,merge_leafs))
,((function (map__63053,map__63053__$1,config,reducing_fn,metrics_fn,leaf_overflown_QMARK_,split_thresh,split_leaf,leaf_underflown_QMARK_,merge_leafs){
return (function (node,children){
return andel.tree.make_node.call(null,children,config);
});})(map__63053,map__63053__$1,config,reducing_fn,metrics_fn,leaf_overflown_QMARK_,split_thresh,split_leaf,leaf_underflown_QMARK_,merge_leafs))
,reducing_fn,metrics_fn,leaf_overflown_QMARK_,split_thresh,split_leaf,leaf_underflown_QMARK_,merge_leafs),tree,andel.tree.root_path);
});
andel.tree.partition_binary = (function andel$tree$partition_binary(s,thresh){
var cs = cljs.core.count.call(null,s);
if((cs < thresh)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
} else {
var vec__63055 = cljs.core.split_at.call(null,cljs.core.quot.call(null,cs,(2)),s);
var left = cljs.core.nth.call(null,vec__63055,(0),null);
var right = cljs.core.nth.call(null,vec__63055,(1),null);
return cljs.core.concat.call(null,andel.tree.partition_binary.call(null,left,thresh),andel.tree.partition_binary.call(null,right,thresh));
}
});
andel.tree.fast_some = (function andel$tree$fast_some(pred,coll){
return cljs.core.reduce.call(null,(function (_,c){
if(cljs.core.truth_(pred.call(null,c))){
return cljs.core.reduced.call(null,true);
} else {
return false;
}
}),false,coll);
});
andel.tree.nodes_QMARK_ = (function andel$tree$nodes_QMARK_(c){
return andel.tree.node_QMARK_.call(null,cljs.core.first.call(null,c));
});
andel.tree.split_needed_QMARK_ = (function andel$tree$split_needed_QMARK_(children,config){
var leaf_overflown_QMARK_ = config.leaf_overflown_QMARK_;
var split_thresh = config.split_thresh;
return andel.tree.fast_some.call(null,(cljs.core.truth_(andel.tree.nodes_QMARK_.call(null,children))?((function (leaf_overflown_QMARK_,split_thresh){
return (function (p1__63058_SHARP_){
return (split_thresh <= cljs.core.count.call(null,p1__63058_SHARP_.children));
});})(leaf_overflown_QMARK_,split_thresh))
:((function (leaf_overflown_QMARK_,split_thresh){
return (function (p1__63059_SHARP_){
return leaf_overflown_QMARK_.call(null,p1__63059_SHARP_.data);
});})(leaf_overflown_QMARK_,split_thresh))
),children);
});
andel.tree.split_children = (function andel$tree$split_children(children,config){
var leaf_overflown_QMARK_ = config.leaf_overflown_QMARK_;
var split_leaf = config.split_leaf;
var split_thresh = config.split_thresh;
if(cljs.core.truth_(andel.tree.split_needed_QMARK_.call(null,children,config))){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (leaf_overflown_QMARK_,split_leaf,split_thresh){
return (function (result,node){
if((andel.tree.node_QMARK_.call(null,node)) && ((split_thresh <= cljs.core.count.call(null,node.children)))){
return cljs.core.reduce.call(null,cljs.core.conj_BANG_,result,cljs.core.map.call(null,((function (leaf_overflown_QMARK_,split_leaf,split_thresh){
return (function (p1__63060_SHARP_){
return andel.tree.make_node.call(null,p1__63060_SHARP_,config);
});})(leaf_overflown_QMARK_,split_leaf,split_thresh))
,andel.tree.partition_binary.call(null,node.children,split_thresh)));
} else {
if(cljs.core.truth_((function (){var and__41052__auto__ = andel.tree.leaf_QMARK_.call(null,node);
if(and__41052__auto__){
return leaf_overflown_QMARK_.call(null,node.data);
} else {
return and__41052__auto__;
}
})())){
return cljs.core.reduce.call(null,cljs.core.conj_BANG_,result,cljs.core.map.call(null,((function (leaf_overflown_QMARK_,split_leaf,split_thresh){
return (function (p1__63061_SHARP_){
return andel.tree.make_leaf.call(null,p1__63061_SHARP_,config);
});})(leaf_overflown_QMARK_,split_leaf,split_thresh))
,split_leaf.call(null,node.data)));
} else {
return cljs.core.conj_BANG_.call(null,result,node);

}
}
});})(leaf_overflown_QMARK_,split_leaf,split_thresh))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),children));
} else {
return children;
}
});
andel.tree.loc_acc = (function andel$tree$loc_acc(loc){
var path = loc.path;
var acc = path.acc;
var or__41064__auto__ = acc;
if(cljs.core.truth_(or__41064__auto__)){
return or__41064__auto__;
} else {
return loc.ops.reducing_fn.call(null);
}
});
andel.tree.merge_needed_QMARK_ = (function andel$tree$merge_needed_QMARK_(children,config){
var leaf_underflown_QMARK_ = config.leaf_underflown_QMARK_;
var split_thresh = config.split_thresh;
return andel.tree.fast_some.call(null,(cljs.core.truth_(andel.tree.nodes_QMARK_.call(null,children))?(function (){var merge_thresh = cljs.core.quot.call(null,split_thresh,(2));
return ((function (merge_thresh,leaf_underflown_QMARK_,split_thresh){
return (function (p1__63062_SHARP_){
return (cljs.core.count.call(null,p1__63062_SHARP_.children) < merge_thresh);
});
;})(merge_thresh,leaf_underflown_QMARK_,split_thresh))
})():((function (leaf_underflown_QMARK_,split_thresh){
return (function (p1__63063_SHARP_){
return leaf_underflown_QMARK_.call(null,p1__63063_SHARP_.data);
});})(leaf_underflown_QMARK_,split_thresh))
),children);
});
andel.tree.merge_children = (function andel$tree$merge_children(children,config){
var leaf_underflown_QMARK_ = config.leaf_underflown_QMARK_;
var merge_leafs = config.merge_leafs;
var leaf_overflown_QMARK_ = config.leaf_overflown_QMARK_;
var split_leaf = config.split_leaf;
var split_thresh = config.split_thresh;
if(cljs.core.truth_(andel.tree.merge_needed_QMARK_.call(null,children,config))){
if(cljs.core.truth_(andel.tree.nodes_QMARK_.call(null,children))){
var merge_thresh = cljs.core.quot.call(null,split_thresh,(2));
var vec__63064 = cljs.core.reduce.call(null,((function (merge_thresh,leaf_underflown_QMARK_,merge_leafs,leaf_overflown_QMARK_,split_leaf,split_thresh){
return (function (p__63067,right){
var vec__63068 = p__63067;
var result = cljs.core.nth.call(null,vec__63068,(0),null);
var left = cljs.core.nth.call(null,vec__63068,(1),null);
var left_children = left.children;
var right_children = right.children;
var left_c = cljs.core.count.call(null,left_children);
var right_c = cljs.core.count.call(null,right_children);
if(((left_c < merge_thresh)) || ((right_c < merge_thresh))){
if((split_thresh <= (left_c + right_c))){
var vec__63071 = andel.tree.partition_binary.call(null,cljs.core.concat.call(null,left_children,right_children),split_thresh);
var children_left = cljs.core.nth.call(null,vec__63071,(0),null);
var children_right = cljs.core.nth.call(null,vec__63071,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,result,andel.tree.make_node.call(null,andel.tree.merge_children.call(null,children_left,config),config)),andel.tree.make_node.call(null,children_right,config)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,andel.tree.make_node.call(null,andel.tree.merge_children.call(null,cljs.core.concat.call(null,left_children,right_children),config),config)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,result,left),right], null);
}
});})(merge_thresh,leaf_underflown_QMARK_,merge_leafs,leaf_overflown_QMARK_,split_leaf,split_thresh))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.first.call(null,children)], null),cljs.core.drop.call(null,(1),children));
var result = cljs.core.nth.call(null,vec__63064,(0),null);
var last = cljs.core.nth.call(null,vec__63064,(1),null);
return cljs.core.persistent_BANG_.call(null,cljs.core.conj_BANG_.call(null,result,last));
} else {
var vec__63074 = cljs.core.reduce.call(null,((function (leaf_underflown_QMARK_,merge_leafs,leaf_overflown_QMARK_,split_leaf,split_thresh){
return (function (p__63077,right){
var vec__63078 = p__63077;
var result = cljs.core.nth.call(null,vec__63078,(0),null);
var left_data = cljs.core.nth.call(null,vec__63078,(1),null);
if(cljs.core.truth_((function (){var or__41064__auto__ = leaf_underflown_QMARK_.call(null,left_data);
if(cljs.core.truth_(or__41064__auto__)){
return or__41064__auto__;
} else {
return leaf_underflown_QMARK_.call(null,right.data);
}
})())){
var merged_data = merge_leafs.call(null,left_data,right.data);
if(cljs.core.truth_(leaf_overflown_QMARK_.call(null,merged_data))){
var vec__63081 = split_leaf.call(null,merged_data);
var left_data__$1 = cljs.core.nth.call(null,vec__63081,(0),null);
var right_data = cljs.core.nth.call(null,vec__63081,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,result,andel.tree.make_leaf.call(null,left_data__$1,config)),right_data], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,merged_data], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,result,andel.tree.make_leaf.call(null,left_data,config)),right.data], null);
}
});})(leaf_underflown_QMARK_,merge_leafs,leaf_overflown_QMARK_,split_leaf,split_thresh))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.first.call(null,children).data], null),cljs.core.drop.call(null,(1),children));
var result = cljs.core.nth.call(null,vec__63074,(0),null);
var last = cljs.core.nth.call(null,vec__63074,(1),null);
return cljs.core.persistent_BANG_.call(null,cljs.core.conj_BANG_.call(null,result,andel.tree.make_leaf.call(null,last,config)));
}
} else {
return children;
}
});
andel.tree.balance_children = (function andel$tree$balance_children(children,config){
return andel.tree.merge_children.call(null,andel.tree.split_children.call(null,children,config),config);
});
andel.tree.grow_tree = (function andel$tree$grow_tree(children,config){
while(true){
var split_thresh = config.split_thresh;
var balanced_children = andel.tree.balance_children.call(null,children,config);
if((cljs.core.count.call(null,balanced_children) < split_thresh)){
return andel.tree.make_node.call(null,balanced_children,config);
} else {
var G__63084 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [andel.tree.make_node.call(null,balanced_children,config)], null);
var G__63085 = config;
children = G__63084;
config = G__63085;
continue;
}
break;
}
});
andel.tree.shrink_tree = (function andel$tree$shrink_tree(node){
while(true){
var children = node.children;
var vec__63086 = children;
var c = cljs.core.nth.call(null,vec__63086,(0),null);
if((andel.tree.node_QMARK_.call(null,c)) && (cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,children)))){
var G__63089 = c;
node = G__63089;
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
var changed_QMARK_ = (function (){var G__63090 = path;
if((G__63090 == null)){
return null;
} else {
return G__63090.changed_QMARK_;
}
})();
if(cljs.core.truth_(changed_QMARK_)){
var config = loc.ops;
var temp__5276__auto__ = andel.fast_zip.up.call(null,loc);
if(cljs.core.truth_(temp__5276__auto__)){
var parent = temp__5276__auto__;
return andel.fast_zip.replace.call(null,parent,andel.tree.make_node.call(null,andel.tree.balance_children.call(null,andel.fast_zip.children.call(null,parent),config),config));
} else {
return andel.fast_zip.__GT_ZipperLocation.call(null,loc.ops,andel.tree.shrink_tree.call(null,andel.tree.grow_tree.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),config)),andel.tree.root_path);
}
} else {
return andel.fast_zip.up.call(null,loc);
}
});
andel.tree.right = (function andel$tree$right(loc){
var node = loc.node;
var path = loc.path;
var acc = path.acc;
var temp__5278__auto__ = andel.fast_zip.right.call(null,loc);
if(cljs.core.truth_(temp__5278__auto__)){
var r = temp__5278__auto__;
var reducing_fn = loc.ops.reducing_fn;
var acc_SINGLEQUOTE_ = reducing_fn.call(null,(function (){var or__41064__auto__ = acc;
if(cljs.core.truth_(or__41064__auto__)){
return or__41064__auto__;
} else {
return reducing_fn.call(null);
}
})(),node.metrics);
return andel.fast_zip.update_path.call(null,r,((function (reducing_fn,acc_SINGLEQUOTE_,r,temp__5278__auto__,node,path,acc){
return (function (p1__63091_SHARP_){
return andel.fast_zip.assoc_acc.call(null,p1__63091_SHARP_,acc_SINGLEQUOTE_);
});})(reducing_fn,acc_SINGLEQUOTE_,r,temp__5278__auto__,node,path,acc))
);
} else {
return null;
}
});
andel.tree.down = (function andel$tree$down(loc){
var path = loc.path;
var acc = (function (){var G__63093 = path;
if((G__63093 == null)){
return null;
} else {
return G__63093.acc;
}
})();
var G__63094 = andel.fast_zip.down.call(null,loc);
if((G__63094 == null)){
return null;
} else {
return andel.fast_zip.update_path.call(null,G__63094,((function (G__63094,path,acc){
return (function (p1__63092_SHARP_){
return andel.fast_zip.assoc_acc.call(null,p1__63092_SHARP_,acc);
});})(G__63094,path,acc))
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
if(cljs.core.truth_(andel.tree.end_QMARK_.call(null,loc))){
return andel.fast_zip.node.call(null,loc);
} else {
var p = andel.tree.up.call(null,loc);
if(cljs.core.truth_(p)){
var G__63095 = p;
loc = G__63095;
continue;
} else {
return andel.fast_zip.node.call(null,loc);
}
}
break;
}
});
andel.tree.node = andel.fast_zip.node;
andel.tree.branch_QMARK_ = (function andel$tree$branch_QMARK_(loc){
return andel.tree.node_QMARK_.call(null,andel.tree.node.call(null,loc));
});
/**
 * Modified version of clojure.zip/next to work with balancing version of up
 */
andel.tree.next = (function andel$tree$next(loc){
var path = loc.path;
if(cljs.core.truth_(andel.tree.end_QMARK_.call(null,loc))){
return loc;
} else {
var or__41064__auto__ = (function (){var and__41052__auto__ = andel.tree.branch_QMARK_.call(null,loc);
if(cljs.core.truth_(and__41052__auto__)){
return andel.tree.down.call(null,loc);
} else {
return and__41052__auto__;
}
})();
if(cljs.core.truth_(or__41064__auto__)){
return or__41064__auto__;
} else {
var or__41064__auto____$1 = andel.tree.right.call(null,loc);
if(cljs.core.truth_(or__41064__auto____$1)){
return or__41064__auto____$1;
} else {
var p = loc;
while(true){
var temp__5276__auto__ = andel.tree.up.call(null,p);
if(cljs.core.truth_(temp__5276__auto__)){
var u = temp__5276__auto__;
var or__41064__auto____$2 = andel.tree.right.call(null,u);
if(cljs.core.truth_(or__41064__auto____$2)){
return or__41064__auto____$2;
} else {
var G__63096 = u;
p = G__63096;
continue;
}
} else {
return andel.fast_zip.__GT_ZipperLocation.call(null,loc.ops,p.node,new cljs.core.Keyword(null,"end","end",-268185958));
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
if(cljs.core.truth_(andel.tree.end_QMARK_.call(null,loc))){
return loc;
} else {
var or__41064__auto__ = andel.tree.right.call(null,loc);
if(cljs.core.truth_(or__41064__auto__)){
return or__41064__auto__;
} else {
var p = loc;
while(true){
var temp__5276__auto__ = andel.tree.up.call(null,p);
if(cljs.core.truth_(temp__5276__auto__)){
var u = temp__5276__auto__;
var or__41064__auto____$1 = andel.tree.right.call(null,u);
if(cljs.core.truth_(or__41064__auto____$1)){
return or__41064__auto____$1;
} else {
var G__63097 = u;
p = G__63097;
continue;
}
} else {
return andel.fast_zip.__GT_ZipperLocation.call(null,loc.ops,p.node,new cljs.core.Keyword(null,"end","end",-268185958));
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
var loc__$1 = andel.tree.next.call(null,loc);
if(cljs.core.truth_((function (){var or__41064__auto__ = andel.tree.leaf_QMARK_.call(null,andel.tree.node.call(null,loc__$1));
if(or__41064__auto__){
return or__41064__auto__;
} else {
return andel.tree.end_QMARK_.call(null,loc__$1);
}
})())){
return loc__$1;
} else {
var G__63098 = loc__$1;
loc = G__63098;
continue;
}
break;
}
});
andel.tree.root_QMARK_ = (function andel$tree$root_QMARK_(loc){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"root","root",-448657453),loc.path.ppath);
});
andel.tree.reset = (function andel$tree$reset(loc){
return andel.tree.zipper.call(null,andel.tree.root.call(null,loc),loc.ops);
});
andel.tree.push_BANG_ = (function andel$tree$push_BANG_(a,x){
a.push(x);

return a;
});
andel.tree.scan = (function andel$tree$scan(loc,pred){
while(true){
if(cljs.core.truth_(andel.tree.end_QMARK_.call(null,loc))){
return loc;
} else {
var node = loc.node;
var path = loc.path;
var rights = (function (){var G__63099 = path;
if((G__63099 == null)){
return null;
} else {
return G__63099.r;
}
})();
var lefts = (function (){var G__63100 = path;
if((G__63100 == null)){
return null;
} else {
return G__63100.l;
}
})();
var acc = (function (){var G__63101 = path;
if((G__63101 == null)){
return null;
} else {
return G__63101.acc;
}
})();
var reducing_fn = loc.ops.reducing_fn;
var next_loc = (cljs.core.truth_(andel.tree.root_QMARK_.call(null,loc))?loc:(function (){var l = cljs.core.transient$.call(null,lefts);
var n = node;
var r = rights;
var acc__$1 = (function (){var or__41064__auto__ = acc;
if(cljs.core.truth_(or__41064__auto__)){
return or__41064__auto__;
} else {
return reducing_fn.call(null);
}
})();
while(true){
if(!((n == null))){
var m = n.metrics;
var acc_SINGLEQUOTE_ = reducing_fn.call(null,acc__$1,m);
if(cljs.core.truth_(pred.call(null,acc__$1,m))){
return andel.fast_zip.__GT_ZipperLocation.call(null,loc.ops,n,andel.fast_zip.__GT_ZipperPath.call(null,cljs.core.persistent_BANG_.call(null,l),cljs.core.seq.call(null,r),path.ppath,path.pnodes,path.changed_QMARK_,acc__$1,null));
} else {
var G__63102 = cljs.core.conj_BANG_.call(null,l,n);
var G__63103 = cljs.core.first.call(null,r);
var G__63104 = cljs.core.rest.call(null,r);
var G__63105 = acc_SINGLEQUOTE_;
l = G__63102;
n = G__63103;
r = G__63104;
acc__$1 = G__63105;
continue;
}
} else {
return null;
}
break;
}
})());
if(!((next_loc == null))){
if(cljs.core.truth_(andel.tree.branch_QMARK_.call(null,next_loc))){
var G__63106 = andel.tree.down.call(null,next_loc);
var G__63107 = pred;
loc = G__63106;
pred = G__63107;
continue;
} else {
return next_loc;
}
} else {
var G__63108 = andel.tree.skip.call(null,loc);
var G__63109 = pred;
loc = G__63108;
pred = G__63109;
continue;
}
}
break;
}
});
andel.tree.insert_left = (function andel$tree$insert_left(loc,x){
var reducing_fn = loc.ops.reducing_fn;
return andel.fast_zip.update_path.call(null,andel.fast_zip.insert_left.call(null,loc,x),((function (reducing_fn){
return (function (p){
return andel.fast_zip.assoc_acc.call(null,p,reducing_fn.call(null,p.acc,x.metrics));
});})(reducing_fn))
);
});
andel.tree.remove = (function andel$tree$remove(loc){
while(true){
var node = loc.node;
var path = loc.path;
var vec__63110 = (function (){var G__63116 = path;
if((G__63116 == null)){
return null;
} else {
return G__63116.l;
}
})();
var left = cljs.core.nth.call(null,vec__63110,(0),null);
var vec__63113 = (function (){var G__63117 = path;
if((G__63117 == null)){
return null;
} else {
return G__63117.r;
}
})();
var right = cljs.core.nth.call(null,vec__63113,(0),null);
if(!((right == null))){
return andel.fast_zip.__GT_ZipperLocation.call(null,loc.ops,right,cljs.core.assoc.call(null,cljs.core.update.call(null,path,new cljs.core.Keyword(null,"r","r",-471384190),((function (loc,node,path,vec__63110,left,vec__63113,right){
return (function (r){
return cljs.core.seq.call(null,cljs.core.drop.call(null,(1),r));
});})(loc,node,path,vec__63110,left,vec__63113,right))
),new cljs.core.Keyword(null,"changed?","changed?",-437828330),true));
} else {
if(!((left == null))){
return andel.tree.next.call(null,andel.fast_zip.remove.call(null,loc));
} else {
if(cljs.core.truth_(andel.tree.root_QMARK_.call(null,loc))){
return andel.tree.replace.call(null,loc,andel.tree.make_node.call(null,cljs.core.PersistentVector.EMPTY,loc.ops));
} else {
var G__63118 = andel.fast_zip.up.call(null,loc);
loc = G__63118;
continue;
}
}
}
break;
}
});

//# sourceMappingURL=tree.js.map?rel=1504289158974