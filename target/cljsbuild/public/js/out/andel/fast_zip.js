// Compiled by ClojureScript 1.9.671 {}
goog.provide('andel.fast_zip');
goog.require('cljs.core');

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
andel.fast_zip.ZipperOps = (function (branch_QMARK_,children,make_node,reducing_fn,metrics_fn,leaf_overflown_QMARK_,split_thresh,split_leaf,leaf_underflown_QMARK_,merge_leafs,__meta,__extmap,__hash){
this.branch_QMARK_ = branch_QMARK_;
this.children = children;
this.make_node = make_node;
this.reducing_fn = reducing_fn;
this.metrics_fn = metrics_fn;
this.leaf_overflown_QMARK_ = leaf_overflown_QMARK_;
this.split_thresh = split_thresh;
this.split_leaf = split_leaf;
this.leaf_underflown_QMARK_ = leaf_underflown_QMARK_;
this.merge_leafs = merge_leafs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
andel.fast_zip.ZipperOps.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__41738__auto__,k__41739__auto__){
var self__ = this;
var this__41738__auto____$1 = this;
return this__41738__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__41739__auto__,null);
});

andel.fast_zip.ZipperOps.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__41740__auto__,k62980,else__41741__auto__){
var self__ = this;
var this__41740__auto____$1 = this;
var G__62984 = k62980;
var G__62984__$1 = (((G__62984 instanceof cljs.core.Keyword))?G__62984.fqn:null);
switch (G__62984__$1) {
case "branch?":
return self__.branch_QMARK_;

break;
case "children":
return self__.children;

break;
case "make-node":
return self__.make_node;

break;
case "reducing-fn":
return self__.reducing_fn;

break;
case "metrics-fn":
return self__.metrics_fn;

break;
case "leaf-overflown?":
return self__.leaf_overflown_QMARK_;

break;
case "split-thresh":
return self__.split_thresh;

break;
case "split-leaf":
return self__.split_leaf;

break;
case "leaf-underflown?":
return self__.leaf_underflown_QMARK_;

break;
case "merge-leafs":
return self__.merge_leafs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k62980,else__41741__auto__);

}
});

andel.fast_zip.ZipperOps.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__41752__auto__,writer__41753__auto__,opts__41754__auto__){
var self__ = this;
var this__41752__auto____$1 = this;
var pr_pair__41755__auto__ = ((function (this__41752__auto____$1){
return (function (keyval__41756__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__41753__auto__,cljs.core.pr_writer,""," ","",opts__41754__auto__,keyval__41756__auto__);
});})(this__41752__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__41753__auto__,pr_pair__41755__auto__,"#andel.fast-zip.ZipperOps{",", ","}",opts__41754__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branch?","branch?",-999323007),self__.branch_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"make-node","make-node",1103973934),self__.make_node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reducing-fn","reducing-fn",-210667109),self__.reducing_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"metrics-fn","metrics-fn",-902159656),self__.metrics_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"leaf-overflown?","leaf-overflown?",-1100480296),self__.leaf_overflown_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"split-thresh","split-thresh",-792823054),self__.split_thresh],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"split-leaf","split-leaf",2010179863),self__.split_leaf],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"leaf-underflown?","leaf-underflown?",877072017),self__.leaf_underflown_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"merge-leafs","merge-leafs",472779958),self__.merge_leafs],null))], null),self__.__extmap));
});

andel.fast_zip.ZipperOps.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62979){
var self__ = this;
var G__62979__$1 = this;
return (new cljs.core.RecordIter((0),G__62979__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"branch?","branch?",-999323007),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"make-node","make-node",1103973934),new cljs.core.Keyword(null,"reducing-fn","reducing-fn",-210667109),new cljs.core.Keyword(null,"metrics-fn","metrics-fn",-902159656),new cljs.core.Keyword(null,"leaf-overflown?","leaf-overflown?",-1100480296),new cljs.core.Keyword(null,"split-thresh","split-thresh",-792823054),new cljs.core.Keyword(null,"split-leaf","split-leaf",2010179863),new cljs.core.Keyword(null,"leaf-underflown?","leaf-underflown?",877072017),new cljs.core.Keyword(null,"merge-leafs","merge-leafs",472779958)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

andel.fast_zip.ZipperOps.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__41736__auto__){
var self__ = this;
var this__41736__auto____$1 = this;
return self__.__meta;
});

andel.fast_zip.ZipperOps.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__41733__auto__){
var self__ = this;
var this__41733__auto____$1 = this;
return (new andel.fast_zip.ZipperOps(self__.branch_QMARK_,self__.children,self__.make_node,self__.reducing_fn,self__.metrics_fn,self__.leaf_overflown_QMARK_,self__.split_thresh,self__.split_leaf,self__.leaf_underflown_QMARK_,self__.merge_leafs,self__.__meta,self__.__extmap,self__.__hash));
});

andel.fast_zip.ZipperOps.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__41742__auto__){
var self__ = this;
var this__41742__auto____$1 = this;
return (10 + cljs.core.count.call(null,self__.__extmap));
});

andel.fast_zip.ZipperOps.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__41734__auto__){
var self__ = this;
var this__41734__auto____$1 = this;
var h__41506__auto__ = self__.__hash;
if(!((h__41506__auto__ == null))){
return h__41506__auto__;
} else {
var h__41506__auto____$1 = ((function (h__41506__auto__,this__41734__auto____$1){
return (function (coll__41735__auto__){
return (-1153757937 ^ cljs.core.hash_unordered_coll.call(null,coll__41735__auto__));
});})(h__41506__auto__,this__41734__auto____$1))
.call(null,this__41734__auto____$1);
self__.__hash = h__41506__auto____$1;

return h__41506__auto____$1;
}
});

andel.fast_zip.ZipperOps.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this62981,other62982){
var self__ = this;
var this62981__$1 = this;
return (!((other62982 == null))) && ((this62981__$1.constructor === other62982.constructor)) && (cljs.core._EQ_.call(null,this62981__$1.branch_QMARK_,other62982.branch_QMARK_)) && (cljs.core._EQ_.call(null,this62981__$1.children,other62982.children)) && (cljs.core._EQ_.call(null,this62981__$1.make_node,other62982.make_node)) && (cljs.core._EQ_.call(null,this62981__$1.reducing_fn,other62982.reducing_fn)) && (cljs.core._EQ_.call(null,this62981__$1.metrics_fn,other62982.metrics_fn)) && (cljs.core._EQ_.call(null,this62981__$1.leaf_overflown_QMARK_,other62982.leaf_overflown_QMARK_)) && (cljs.core._EQ_.call(null,this62981__$1.split_thresh,other62982.split_thresh)) && (cljs.core._EQ_.call(null,this62981__$1.split_leaf,other62982.split_leaf)) && (cljs.core._EQ_.call(null,this62981__$1.leaf_underflown_QMARK_,other62982.leaf_underflown_QMARK_)) && (cljs.core._EQ_.call(null,this62981__$1.merge_leafs,other62982.merge_leafs)) && (cljs.core._EQ_.call(null,this62981__$1.__extmap,other62982.__extmap));
});

andel.fast_zip.ZipperOps.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__41747__auto__,k__41748__auto__){
var self__ = this;
var this__41747__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"branch?","branch?",-999323007),null,new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"make-node","make-node",1103973934),null,new cljs.core.Keyword(null,"leaf-underflown?","leaf-underflown?",877072017),null,new cljs.core.Keyword(null,"split-thresh","split-thresh",-792823054),null,new cljs.core.Keyword(null,"merge-leafs","merge-leafs",472779958),null,new cljs.core.Keyword(null,"split-leaf","split-leaf",2010179863),null,new cljs.core.Keyword(null,"leaf-overflown?","leaf-overflown?",-1100480296),null,new cljs.core.Keyword(null,"metrics-fn","metrics-fn",-902159656),null,new cljs.core.Keyword(null,"reducing-fn","reducing-fn",-210667109),null], null), null),k__41748__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__41747__auto____$1),self__.__meta),k__41748__auto__);
} else {
return (new andel.fast_zip.ZipperOps(self__.branch_QMARK_,self__.children,self__.make_node,self__.reducing_fn,self__.metrics_fn,self__.leaf_overflown_QMARK_,self__.split_thresh,self__.split_leaf,self__.leaf_underflown_QMARK_,self__.merge_leafs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__41748__auto__)),null));
}
});

andel.fast_zip.ZipperOps.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__41745__auto__,k__41746__auto__,G__62979){
var self__ = this;
var this__41745__auto____$1 = this;
var pred__62985 = cljs.core.keyword_identical_QMARK_;
var expr__62986 = k__41746__auto__;
if(cljs.core.truth_(pred__62985.call(null,new cljs.core.Keyword(null,"branch?","branch?",-999323007),expr__62986))){
return (new andel.fast_zip.ZipperOps(G__62979,self__.children,self__.make_node,self__.reducing_fn,self__.metrics_fn,self__.leaf_overflown_QMARK_,self__.split_thresh,self__.split_leaf,self__.leaf_underflown_QMARK_,self__.merge_leafs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62985.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__62986))){
return (new andel.fast_zip.ZipperOps(self__.branch_QMARK_,G__62979,self__.make_node,self__.reducing_fn,self__.metrics_fn,self__.leaf_overflown_QMARK_,self__.split_thresh,self__.split_leaf,self__.leaf_underflown_QMARK_,self__.merge_leafs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62985.call(null,new cljs.core.Keyword(null,"make-node","make-node",1103973934),expr__62986))){
return (new andel.fast_zip.ZipperOps(self__.branch_QMARK_,self__.children,G__62979,self__.reducing_fn,self__.metrics_fn,self__.leaf_overflown_QMARK_,self__.split_thresh,self__.split_leaf,self__.leaf_underflown_QMARK_,self__.merge_leafs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62985.call(null,new cljs.core.Keyword(null,"reducing-fn","reducing-fn",-210667109),expr__62986))){
return (new andel.fast_zip.ZipperOps(self__.branch_QMARK_,self__.children,self__.make_node,G__62979,self__.metrics_fn,self__.leaf_overflown_QMARK_,self__.split_thresh,self__.split_leaf,self__.leaf_underflown_QMARK_,self__.merge_leafs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62985.call(null,new cljs.core.Keyword(null,"metrics-fn","metrics-fn",-902159656),expr__62986))){
return (new andel.fast_zip.ZipperOps(self__.branch_QMARK_,self__.children,self__.make_node,self__.reducing_fn,G__62979,self__.leaf_overflown_QMARK_,self__.split_thresh,self__.split_leaf,self__.leaf_underflown_QMARK_,self__.merge_leafs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62985.call(null,new cljs.core.Keyword(null,"leaf-overflown?","leaf-overflown?",-1100480296),expr__62986))){
return (new andel.fast_zip.ZipperOps(self__.branch_QMARK_,self__.children,self__.make_node,self__.reducing_fn,self__.metrics_fn,G__62979,self__.split_thresh,self__.split_leaf,self__.leaf_underflown_QMARK_,self__.merge_leafs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62985.call(null,new cljs.core.Keyword(null,"split-thresh","split-thresh",-792823054),expr__62986))){
return (new andel.fast_zip.ZipperOps(self__.branch_QMARK_,self__.children,self__.make_node,self__.reducing_fn,self__.metrics_fn,self__.leaf_overflown_QMARK_,G__62979,self__.split_leaf,self__.leaf_underflown_QMARK_,self__.merge_leafs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62985.call(null,new cljs.core.Keyword(null,"split-leaf","split-leaf",2010179863),expr__62986))){
return (new andel.fast_zip.ZipperOps(self__.branch_QMARK_,self__.children,self__.make_node,self__.reducing_fn,self__.metrics_fn,self__.leaf_overflown_QMARK_,self__.split_thresh,G__62979,self__.leaf_underflown_QMARK_,self__.merge_leafs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62985.call(null,new cljs.core.Keyword(null,"leaf-underflown?","leaf-underflown?",877072017),expr__62986))){
return (new andel.fast_zip.ZipperOps(self__.branch_QMARK_,self__.children,self__.make_node,self__.reducing_fn,self__.metrics_fn,self__.leaf_overflown_QMARK_,self__.split_thresh,self__.split_leaf,G__62979,self__.merge_leafs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62985.call(null,new cljs.core.Keyword(null,"merge-leafs","merge-leafs",472779958),expr__62986))){
return (new andel.fast_zip.ZipperOps(self__.branch_QMARK_,self__.children,self__.make_node,self__.reducing_fn,self__.metrics_fn,self__.leaf_overflown_QMARK_,self__.split_thresh,self__.split_leaf,self__.leaf_underflown_QMARK_,G__62979,self__.__meta,self__.__extmap,null));
} else {
return (new andel.fast_zip.ZipperOps(self__.branch_QMARK_,self__.children,self__.make_node,self__.reducing_fn,self__.metrics_fn,self__.leaf_overflown_QMARK_,self__.split_thresh,self__.split_leaf,self__.leaf_underflown_QMARK_,self__.merge_leafs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__41746__auto__,G__62979),null));
}
}
}
}
}
}
}
}
}
}
});

andel.fast_zip.ZipperOps.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__41750__auto__){
var self__ = this;
var this__41750__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branch?","branch?",-999323007),self__.branch_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"make-node","make-node",1103973934),self__.make_node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reducing-fn","reducing-fn",-210667109),self__.reducing_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"metrics-fn","metrics-fn",-902159656),self__.metrics_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"leaf-overflown?","leaf-overflown?",-1100480296),self__.leaf_overflown_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"split-thresh","split-thresh",-792823054),self__.split_thresh],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"split-leaf","split-leaf",2010179863),self__.split_leaf],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"leaf-underflown?","leaf-underflown?",877072017),self__.leaf_underflown_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"merge-leafs","merge-leafs",472779958),self__.merge_leafs],null))], null),self__.__extmap));
});

andel.fast_zip.ZipperOps.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__41737__auto__,G__62979){
var self__ = this;
var this__41737__auto____$1 = this;
return (new andel.fast_zip.ZipperOps(self__.branch_QMARK_,self__.children,self__.make_node,self__.reducing_fn,self__.metrics_fn,self__.leaf_overflown_QMARK_,self__.split_thresh,self__.split_leaf,self__.leaf_underflown_QMARK_,self__.merge_leafs,G__62979,self__.__extmap,self__.__hash));
});

andel.fast_zip.ZipperOps.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__41743__auto__,entry__41744__auto__){
var self__ = this;
var this__41743__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__41744__auto__)){
return this__41743__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__41744__auto__,(0)),cljs.core._nth.call(null,entry__41744__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__41743__auto____$1,entry__41744__auto__);
}
});

andel.fast_zip.ZipperOps.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"branch?","branch?",641208520,null),new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"make-node","make-node",-1550461835,null),new cljs.core.Symbol(null,"reducing-fn","reducing-fn",1429864418,null),new cljs.core.Symbol(null,"metrics-fn","metrics-fn",738371871,null),new cljs.core.Symbol(null,"leaf-overflown?","leaf-overflown?",540051231,null),new cljs.core.Symbol(null,"split-thresh","split-thresh",847708473,null),new cljs.core.Symbol(null,"split-leaf","split-leaf",-644255906,null),new cljs.core.Symbol(null,"leaf-underflown?","leaf-underflown?",-1777363752,null),new cljs.core.Symbol(null,"merge-leafs","merge-leafs",2113311485,null)], null);
});

andel.fast_zip.ZipperOps.cljs$lang$type = true;

andel.fast_zip.ZipperOps.cljs$lang$ctorPrSeq = (function (this__41776__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"andel.fast-zip/ZipperOps");
});

andel.fast_zip.ZipperOps.cljs$lang$ctorPrWriter = (function (this__41776__auto__,writer__41777__auto__){
return cljs.core._write.call(null,writer__41777__auto__,"andel.fast-zip/ZipperOps");
});

andel.fast_zip.__GT_ZipperOps = (function andel$fast_zip$__GT_ZipperOps(branch_QMARK_,children,make_node,reducing_fn,metrics_fn,leaf_overflown_QMARK_,split_thresh,split_leaf,leaf_underflown_QMARK_,merge_leafs){
return (new andel.fast_zip.ZipperOps(branch_QMARK_,children,make_node,reducing_fn,metrics_fn,leaf_overflown_QMARK_,split_thresh,split_leaf,leaf_underflown_QMARK_,merge_leafs,null,null,null));
});

andel.fast_zip.map__GT_ZipperOps = (function andel$fast_zip$map__GT_ZipperOps(G__62983){
return (new andel.fast_zip.ZipperOps(new cljs.core.Keyword(null,"branch?","branch?",-999323007).cljs$core$IFn$_invoke$arity$1(G__62983),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__62983),new cljs.core.Keyword(null,"make-node","make-node",1103973934).cljs$core$IFn$_invoke$arity$1(G__62983),new cljs.core.Keyword(null,"reducing-fn","reducing-fn",-210667109).cljs$core$IFn$_invoke$arity$1(G__62983),new cljs.core.Keyword(null,"metrics-fn","metrics-fn",-902159656).cljs$core$IFn$_invoke$arity$1(G__62983),new cljs.core.Keyword(null,"leaf-overflown?","leaf-overflown?",-1100480296).cljs$core$IFn$_invoke$arity$1(G__62983),new cljs.core.Keyword(null,"split-thresh","split-thresh",-792823054).cljs$core$IFn$_invoke$arity$1(G__62983),new cljs.core.Keyword(null,"split-leaf","split-leaf",2010179863).cljs$core$IFn$_invoke$arity$1(G__62983),new cljs.core.Keyword(null,"leaf-underflown?","leaf-underflown?",877072017).cljs$core$IFn$_invoke$arity$1(G__62983),new cljs.core.Keyword(null,"merge-leafs","merge-leafs",472779958).cljs$core$IFn$_invoke$arity$1(G__62983),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__62983,new cljs.core.Keyword(null,"branch?","branch?",-999323007),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"make-node","make-node",1103973934),new cljs.core.Keyword(null,"reducing-fn","reducing-fn",-210667109),new cljs.core.Keyword(null,"metrics-fn","metrics-fn",-902159656),new cljs.core.Keyword(null,"leaf-overflown?","leaf-overflown?",-1100480296),new cljs.core.Keyword(null,"split-thresh","split-thresh",-792823054),new cljs.core.Keyword(null,"split-leaf","split-leaf",2010179863),new cljs.core.Keyword(null,"leaf-underflown?","leaf-underflown?",877072017),new cljs.core.Keyword(null,"merge-leafs","merge-leafs",472779958))),null));
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
andel.fast_zip.ZipperPath = (function (l,r,ppath,pnodes,changed_QMARK_,acc,o_acc,__meta,__extmap,__hash){
this.l = l;
this.r = r;
this.ppath = ppath;
this.pnodes = pnodes;
this.changed_QMARK_ = changed_QMARK_;
this.acc = acc;
this.o_acc = o_acc;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
andel.fast_zip.ZipperPath.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__41738__auto__,k__41739__auto__){
var self__ = this;
var this__41738__auto____$1 = this;
return this__41738__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__41739__auto__,null);
});

andel.fast_zip.ZipperPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__41740__auto__,k62990,else__41741__auto__){
var self__ = this;
var this__41740__auto____$1 = this;
var G__62994 = k62990;
var G__62994__$1 = (((G__62994 instanceof cljs.core.Keyword))?G__62994.fqn:null);
switch (G__62994__$1) {
case "l":
return self__.l;

break;
case "r":
return self__.r;

break;
case "ppath":
return self__.ppath;

break;
case "pnodes":
return self__.pnodes;

break;
case "changed?":
return self__.changed_QMARK_;

break;
case "acc":
return self__.acc;

break;
case "o-acc":
return self__.o_acc;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k62990,else__41741__auto__);

}
});

andel.fast_zip.ZipperPath.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__41752__auto__,writer__41753__auto__,opts__41754__auto__){
var self__ = this;
var this__41752__auto____$1 = this;
var pr_pair__41755__auto__ = ((function (this__41752__auto____$1){
return (function (keyval__41756__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__41753__auto__,cljs.core.pr_writer,""," ","",opts__41754__auto__,keyval__41756__auto__);
});})(this__41752__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__41753__auto__,pr_pair__41755__auto__,"#andel.fast-zip.ZipperPath{",", ","}",opts__41754__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"l","l",1395893423),self__.l],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ppath","ppath",-1758182784),self__.ppath],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pnodes","pnodes",1739080565),self__.pnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"changed?","changed?",-437828330),self__.changed_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"acc","acc",838566312),self__.acc],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"o-acc","o-acc",-314654131),self__.o_acc],null))], null),self__.__extmap));
});

andel.fast_zip.ZipperPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62989){
var self__ = this;
var G__62989__$1 = this;
return (new cljs.core.RecordIter((0),G__62989__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"ppath","ppath",-1758182784),new cljs.core.Keyword(null,"pnodes","pnodes",1739080565),new cljs.core.Keyword(null,"changed?","changed?",-437828330),new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.Keyword(null,"o-acc","o-acc",-314654131)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

andel.fast_zip.ZipperPath.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__41736__auto__){
var self__ = this;
var this__41736__auto____$1 = this;
return self__.__meta;
});

andel.fast_zip.ZipperPath.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__41733__auto__){
var self__ = this;
var this__41733__auto____$1 = this;
return (new andel.fast_zip.ZipperPath(self__.l,self__.r,self__.ppath,self__.pnodes,self__.changed_QMARK_,self__.acc,self__.o_acc,self__.__meta,self__.__extmap,self__.__hash));
});

andel.fast_zip.ZipperPath.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__41742__auto__){
var self__ = this;
var this__41742__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

andel.fast_zip.ZipperPath.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__41734__auto__){
var self__ = this;
var this__41734__auto____$1 = this;
var h__41506__auto__ = self__.__hash;
if(!((h__41506__auto__ == null))){
return h__41506__auto__;
} else {
var h__41506__auto____$1 = ((function (h__41506__auto__,this__41734__auto____$1){
return (function (coll__41735__auto__){
return (-723150065 ^ cljs.core.hash_unordered_coll.call(null,coll__41735__auto__));
});})(h__41506__auto__,this__41734__auto____$1))
.call(null,this__41734__auto____$1);
self__.__hash = h__41506__auto____$1;

return h__41506__auto____$1;
}
});

andel.fast_zip.ZipperPath.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this62991,other62992){
var self__ = this;
var this62991__$1 = this;
return (!((other62992 == null))) && ((this62991__$1.constructor === other62992.constructor)) && (cljs.core._EQ_.call(null,this62991__$1.l,other62992.l)) && (cljs.core._EQ_.call(null,this62991__$1.r,other62992.r)) && (cljs.core._EQ_.call(null,this62991__$1.ppath,other62992.ppath)) && (cljs.core._EQ_.call(null,this62991__$1.pnodes,other62992.pnodes)) && (cljs.core._EQ_.call(null,this62991__$1.changed_QMARK_,other62992.changed_QMARK_)) && (cljs.core._EQ_.call(null,this62991__$1.acc,other62992.acc)) && (cljs.core._EQ_.call(null,this62991__$1.o_acc,other62992.o_acc)) && (cljs.core._EQ_.call(null,this62991__$1.__extmap,other62992.__extmap));
});

andel.fast_zip.ZipperPath.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__41747__auto__,k__41748__auto__){
var self__ = this;
var this__41747__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"ppath","ppath",-1758182784),null,new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"acc","acc",838566312),null,new cljs.core.Keyword(null,"o-acc","o-acc",-314654131),null,new cljs.core.Keyword(null,"l","l",1395893423),null,new cljs.core.Keyword(null,"pnodes","pnodes",1739080565),null,new cljs.core.Keyword(null,"changed?","changed?",-437828330),null], null), null),k__41748__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__41747__auto____$1),self__.__meta),k__41748__auto__);
} else {
return (new andel.fast_zip.ZipperPath(self__.l,self__.r,self__.ppath,self__.pnodes,self__.changed_QMARK_,self__.acc,self__.o_acc,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__41748__auto__)),null));
}
});

andel.fast_zip.ZipperPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__41745__auto__,k__41746__auto__,G__62989){
var self__ = this;
var this__41745__auto____$1 = this;
var pred__62995 = cljs.core.keyword_identical_QMARK_;
var expr__62996 = k__41746__auto__;
if(cljs.core.truth_(pred__62995.call(null,new cljs.core.Keyword(null,"l","l",1395893423),expr__62996))){
return (new andel.fast_zip.ZipperPath(G__62989,self__.r,self__.ppath,self__.pnodes,self__.changed_QMARK_,self__.acc,self__.o_acc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62995.call(null,new cljs.core.Keyword(null,"r","r",-471384190),expr__62996))){
return (new andel.fast_zip.ZipperPath(self__.l,G__62989,self__.ppath,self__.pnodes,self__.changed_QMARK_,self__.acc,self__.o_acc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62995.call(null,new cljs.core.Keyword(null,"ppath","ppath",-1758182784),expr__62996))){
return (new andel.fast_zip.ZipperPath(self__.l,self__.r,G__62989,self__.pnodes,self__.changed_QMARK_,self__.acc,self__.o_acc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62995.call(null,new cljs.core.Keyword(null,"pnodes","pnodes",1739080565),expr__62996))){
return (new andel.fast_zip.ZipperPath(self__.l,self__.r,self__.ppath,G__62989,self__.changed_QMARK_,self__.acc,self__.o_acc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62995.call(null,new cljs.core.Keyword(null,"changed?","changed?",-437828330),expr__62996))){
return (new andel.fast_zip.ZipperPath(self__.l,self__.r,self__.ppath,self__.pnodes,G__62989,self__.acc,self__.o_acc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62995.call(null,new cljs.core.Keyword(null,"acc","acc",838566312),expr__62996))){
return (new andel.fast_zip.ZipperPath(self__.l,self__.r,self__.ppath,self__.pnodes,self__.changed_QMARK_,G__62989,self__.o_acc,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62995.call(null,new cljs.core.Keyword(null,"o-acc","o-acc",-314654131),expr__62996))){
return (new andel.fast_zip.ZipperPath(self__.l,self__.r,self__.ppath,self__.pnodes,self__.changed_QMARK_,self__.acc,G__62989,self__.__meta,self__.__extmap,null));
} else {
return (new andel.fast_zip.ZipperPath(self__.l,self__.r,self__.ppath,self__.pnodes,self__.changed_QMARK_,self__.acc,self__.o_acc,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__41746__auto__,G__62989),null));
}
}
}
}
}
}
}
});

andel.fast_zip.ZipperPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__41750__auto__){
var self__ = this;
var this__41750__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"l","l",1395893423),self__.l],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",-471384190),self__.r],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ppath","ppath",-1758182784),self__.ppath],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pnodes","pnodes",1739080565),self__.pnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"changed?","changed?",-437828330),self__.changed_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"acc","acc",838566312),self__.acc],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"o-acc","o-acc",-314654131),self__.o_acc],null))], null),self__.__extmap));
});

andel.fast_zip.ZipperPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__41737__auto__,G__62989){
var self__ = this;
var this__41737__auto____$1 = this;
return (new andel.fast_zip.ZipperPath(self__.l,self__.r,self__.ppath,self__.pnodes,self__.changed_QMARK_,self__.acc,self__.o_acc,G__62989,self__.__extmap,self__.__hash));
});

andel.fast_zip.ZipperPath.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__41743__auto__,entry__41744__auto__){
var self__ = this;
var this__41743__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__41744__auto__)){
return this__41743__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__41744__auto__,(0)),cljs.core._nth.call(null,entry__41744__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__41743__auto____$1,entry__41744__auto__);
}
});

andel.fast_zip.ZipperPath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"l","l",-1258542346,null),new cljs.core.Symbol(null,"r","r",1169147337,null),new cljs.core.Symbol(null,"ppath","ppath",-117651257,null),new cljs.core.Symbol(null,"pnodes","pnodes",-915355204,null),new cljs.core.Symbol(null,"changed?","changed?",1202703197,null),new cljs.core.Symbol(null,"acc","acc",-1815869457,null),new cljs.core.Symbol(null,"o-acc","o-acc",1325877396,null)], null);
});

andel.fast_zip.ZipperPath.cljs$lang$type = true;

andel.fast_zip.ZipperPath.cljs$lang$ctorPrSeq = (function (this__41776__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"andel.fast-zip/ZipperPath");
});

andel.fast_zip.ZipperPath.cljs$lang$ctorPrWriter = (function (this__41776__auto__,writer__41777__auto__){
return cljs.core._write.call(null,writer__41777__auto__,"andel.fast-zip/ZipperPath");
});

andel.fast_zip.__GT_ZipperPath = (function andel$fast_zip$__GT_ZipperPath(l,r,ppath,pnodes,changed_QMARK_,acc,o_acc){
return (new andel.fast_zip.ZipperPath(l,r,ppath,pnodes,changed_QMARK_,acc,o_acc,null,null,null));
});

andel.fast_zip.map__GT_ZipperPath = (function andel$fast_zip$map__GT_ZipperPath(G__62993){
return (new andel.fast_zip.ZipperPath(new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(G__62993),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(G__62993),new cljs.core.Keyword(null,"ppath","ppath",-1758182784).cljs$core$IFn$_invoke$arity$1(G__62993),new cljs.core.Keyword(null,"pnodes","pnodes",1739080565).cljs$core$IFn$_invoke$arity$1(G__62993),new cljs.core.Keyword(null,"changed?","changed?",-437828330).cljs$core$IFn$_invoke$arity$1(G__62993),new cljs.core.Keyword(null,"acc","acc",838566312).cljs$core$IFn$_invoke$arity$1(G__62993),new cljs.core.Keyword(null,"o-acc","o-acc",-314654131).cljs$core$IFn$_invoke$arity$1(G__62993),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__62993,new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"ppath","ppath",-1758182784),new cljs.core.Keyword(null,"pnodes","pnodes",1739080565),new cljs.core.Keyword(null,"changed?","changed?",-437828330),new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.Keyword(null,"o-acc","o-acc",-314654131))),null));
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
andel.fast_zip.ZipperLocation = (function (ops,node,path,__meta,__extmap,__hash){
this.ops = ops;
this.node = node;
this.path = path;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
andel.fast_zip.ZipperLocation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__41738__auto__,k__41739__auto__){
var self__ = this;
var this__41738__auto____$1 = this;
return this__41738__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__41739__auto__,null);
});

andel.fast_zip.ZipperLocation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__41740__auto__,k63000,else__41741__auto__){
var self__ = this;
var this__41740__auto____$1 = this;
var G__63004 = k63000;
var G__63004__$1 = (((G__63004 instanceof cljs.core.Keyword))?G__63004.fqn:null);
switch (G__63004__$1) {
case "ops":
return self__.ops;

break;
case "node":
return self__.node;

break;
case "path":
return self__.path;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k63000,else__41741__auto__);

}
});

andel.fast_zip.ZipperLocation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__41752__auto__,writer__41753__auto__,opts__41754__auto__){
var self__ = this;
var this__41752__auto____$1 = this;
var pr_pair__41755__auto__ = ((function (this__41752__auto____$1){
return (function (keyval__41756__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__41753__auto__,cljs.core.pr_writer,""," ","",opts__41754__auto__,keyval__41756__auto__);
});})(this__41752__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__41753__auto__,pr_pair__41755__auto__,"#andel.fast-zip.ZipperLocation{",", ","}",opts__41754__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ops","ops",1237330063),self__.ops],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node","node",581201198),self__.node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
});

andel.fast_zip.ZipperLocation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62999){
var self__ = this;
var G__62999__$1 = this;
return (new cljs.core.RecordIter((0),G__62999__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"path","path",-188191168)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

andel.fast_zip.ZipperLocation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__41736__auto__){
var self__ = this;
var this__41736__auto____$1 = this;
return self__.__meta;
});

andel.fast_zip.ZipperLocation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__41733__auto__){
var self__ = this;
var this__41733__auto____$1 = this;
return (new andel.fast_zip.ZipperLocation(self__.ops,self__.node,self__.path,self__.__meta,self__.__extmap,self__.__hash));
});

andel.fast_zip.ZipperLocation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__41742__auto__){
var self__ = this;
var this__41742__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

andel.fast_zip.ZipperLocation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__41734__auto__){
var self__ = this;
var this__41734__auto____$1 = this;
var h__41506__auto__ = self__.__hash;
if(!((h__41506__auto__ == null))){
return h__41506__auto__;
} else {
var h__41506__auto____$1 = ((function (h__41506__auto__,this__41734__auto____$1){
return (function (coll__41735__auto__){
return (228746666 ^ cljs.core.hash_unordered_coll.call(null,coll__41735__auto__));
});})(h__41506__auto__,this__41734__auto____$1))
.call(null,this__41734__auto____$1);
self__.__hash = h__41506__auto____$1;

return h__41506__auto____$1;
}
});

andel.fast_zip.ZipperLocation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63001,other63002){
var self__ = this;
var this63001__$1 = this;
return (!((other63002 == null))) && ((this63001__$1.constructor === other63002.constructor)) && (cljs.core._EQ_.call(null,this63001__$1.ops,other63002.ops)) && (cljs.core._EQ_.call(null,this63001__$1.node,other63002.node)) && (cljs.core._EQ_.call(null,this63001__$1.path,other63002.path)) && (cljs.core._EQ_.call(null,this63001__$1.__extmap,other63002.__extmap));
});

andel.fast_zip.ZipperLocation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__41747__auto__,k__41748__auto__){
var self__ = this;
var this__41747__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"node","node",581201198),null,new cljs.core.Keyword(null,"ops","ops",1237330063),null], null), null),k__41748__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__41747__auto____$1),self__.__meta),k__41748__auto__);
} else {
return (new andel.fast_zip.ZipperLocation(self__.ops,self__.node,self__.path,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__41748__auto__)),null));
}
});

andel.fast_zip.ZipperLocation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__41745__auto__,k__41746__auto__,G__62999){
var self__ = this;
var this__41745__auto____$1 = this;
var pred__63005 = cljs.core.keyword_identical_QMARK_;
var expr__63006 = k__41746__auto__;
if(cljs.core.truth_(pred__63005.call(null,new cljs.core.Keyword(null,"ops","ops",1237330063),expr__63006))){
return (new andel.fast_zip.ZipperLocation(G__62999,self__.node,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__63005.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__63006))){
return (new andel.fast_zip.ZipperLocation(self__.ops,G__62999,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__63005.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__63006))){
return (new andel.fast_zip.ZipperLocation(self__.ops,self__.node,G__62999,self__.__meta,self__.__extmap,null));
} else {
return (new andel.fast_zip.ZipperLocation(self__.ops,self__.node,self__.path,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__41746__auto__,G__62999),null));
}
}
}
});

andel.fast_zip.ZipperLocation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__41750__auto__){
var self__ = this;
var this__41750__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ops","ops",1237330063),self__.ops],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node","node",581201198),self__.node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
});

andel.fast_zip.ZipperLocation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__41737__auto__,G__62999){
var self__ = this;
var this__41737__auto____$1 = this;
return (new andel.fast_zip.ZipperLocation(self__.ops,self__.node,self__.path,G__62999,self__.__extmap,self__.__hash));
});

andel.fast_zip.ZipperLocation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__41743__auto__,entry__41744__auto__){
var self__ = this;
var this__41743__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__41744__auto__)){
return this__41743__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__41744__auto__,(0)),cljs.core._nth.call(null,entry__41744__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__41743__auto____$1,entry__41744__auto__);
}
});

andel.fast_zip.ZipperLocation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"ops","ops",-1417105706,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"ZipperOps","ZipperOps",1158202396,null)], null)),new cljs.core.Symbol(null,"node","node",-2073234571,null),cljs.core.with_meta(new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"ZipperPath","ZipperPath",941189534,null)], null))], null);
});

andel.fast_zip.ZipperLocation.cljs$lang$type = true;

andel.fast_zip.ZipperLocation.cljs$lang$ctorPrSeq = (function (this__41776__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"andel.fast-zip/ZipperLocation");
});

andel.fast_zip.ZipperLocation.cljs$lang$ctorPrWriter = (function (this__41776__auto__,writer__41777__auto__){
return cljs.core._write.call(null,writer__41777__auto__,"andel.fast-zip/ZipperLocation");
});

andel.fast_zip.__GT_ZipperLocation = (function andel$fast_zip$__GT_ZipperLocation(ops,node,path){
return (new andel.fast_zip.ZipperLocation(ops,node,path,null,null,null));
});

andel.fast_zip.map__GT_ZipperLocation = (function andel$fast_zip$map__GT_ZipperLocation(G__63003){
return (new andel.fast_zip.ZipperLocation(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(G__63003),new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(G__63003),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__63003),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__63003,new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"path","path",-188191168))),null));
});

andel.fast_zip.update_path = (function andel$fast_zip$update_path(loc,f){
return (new andel.fast_zip.ZipperLocation(loc.ops,loc.node,f.call(null,loc.path),null,null,null));
});
andel.fast_zip.assoc_acc = (function andel$fast_zip$assoc_acc(path,acc){
return (new andel.fast_zip.ZipperPath(path.l,path.r,path.ppath,path.pnodes,path.changed_QMARK_,acc,path.o_acc,null,null,null));
});
andel.fast_zip.assoc_o_acc = (function andel$fast_zip$assoc_o_acc(path,o_acc){
return (new andel.fast_zip.ZipperPath(path.l,path.r,path.ppath,path.pnodes,path.changed_QMARK_,path.acc,o_acc,null,null,null));
});
/**
 * Returns the node at loc
 */
andel.fast_zip.node = (function andel$fast_zip$node(loc){
return loc.node;
});
/**
 * Returns the acc at loc
 */
andel.fast_zip.acc = (function andel$fast_zip$acc(loc){
return loc.path.acc;
});
/**
 * Returns true if the node at loc is a branch
 */
andel.fast_zip.branch_QMARK_ = (function andel$fast_zip$branch_QMARK_(loc){
return loc.ops.branch_QMARK_.call(null,loc.node);
});
/**
 * Returns a seq of the children of node at loc, which must be a branch
 */
andel.fast_zip.children = (function andel$fast_zip$children(loc){
return loc.ops.children.call(null,loc.node);
});
/**
 * Returns a new branch node, given an existing node and new children.
 *   The loc is only used to supply the constructor.
 */
andel.fast_zip.make_node = (function andel$fast_zip$make_node(loc,node,children){
return loc.ops.make_node.call(null,node,children);
});
/**
 * Returns a seq of nodes leading to this loc
 */
andel.fast_zip.path = (function andel$fast_zip$path(loc){
var temp__5276__auto__ = loc.path;
if(cljs.core.truth_(temp__5276__auto__)){
var p = temp__5276__auto__;
return p.pnodes;
} else {
return null;
}
});
/**
 * Returns a seq of the left siblings of this loc
 */
andel.fast_zip.lefts = (function andel$fast_zip$lefts(loc){
var temp__5276__auto__ = loc.path;
if(cljs.core.truth_(temp__5276__auto__)){
var p = temp__5276__auto__;
return cljs.core.seq.call(null,cljs.core.reverse.call(null,p.l));
} else {
return null;
}
});
/**
 * Returns a seq of the right siblings of this loc
 */
andel.fast_zip.rights = (function andel$fast_zip$rights(loc){
var temp__5276__auto__ = loc.path;
if(cljs.core.truth_(temp__5276__auto__)){
var p = temp__5276__auto__;
return p.r;
} else {
return null;
}
});
/**
 * Returns the loc of the leftmost child of the node at this loc,
 *   or nil if no children
 */
andel.fast_zip.down = (function andel$fast_zip$down(loc){
if(cljs.core.truth_(andel.fast_zip.branch_QMARK_.call(null,loc))){
var temp__5278__auto__ = andel.fast_zip.children.call(null,loc);
if(cljs.core.truth_(temp__5278__auto__)){
var vec__63009 = temp__5278__auto__;
var seq__63010 = cljs.core.seq.call(null,vec__63009);
var first__63011 = cljs.core.first.call(null,seq__63010);
var seq__63010__$1 = cljs.core.next.call(null,seq__63010);
var c = first__63011;
var cs = seq__63010__$1;
var node = loc.node;
var path = loc.path;
return (new andel.fast_zip.ZipperLocation(loc.ops,c,(new andel.fast_zip.ZipperPath(cljs.core.PersistentVector.EMPTY,cs,path,(cljs.core.truth_(path)?cljs.core.conj.call(null,path.pnodes,node):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null)),null,(function (){var G__63012 = loc;
var G__63012__$1 = (((G__63012 == null))?null:G__63012.path);
if((G__63012__$1 == null)){
return null;
} else {
return G__63012__$1.acc;
}
})(),null,null,null,null)),null,null,null));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Returns the loc of the parent of the node at this loc, or nil if at the top
 */
andel.fast_zip.up = (function andel$fast_zip$up(loc){
var path = loc.path;
var temp__5278__auto__ = (function (){var and__41052__auto__ = path;
if(cljs.core.truth_(and__41052__auto__)){
return path.pnodes;
} else {
return and__41052__auto__;
}
})();
if(cljs.core.truth_(temp__5278__auto__)){
var pnodes = temp__5278__auto__;
var pnode = cljs.core.peek.call(null,pnodes);
if(cljs.core.truth_(new cljs.core.Keyword(null,"changed?","changed?",-437828330).cljs$core$IFn$_invoke$arity$1(path))){
return (new andel.fast_zip.ZipperLocation(loc.ops,andel.fast_zip.make_node.call(null,loc,pnode,cljs.core.concat.call(null,path.l,cljs.core.cons.call(null,loc.node,path.r))),(function (){var temp__5276__auto__ = path.ppath;
if(cljs.core.truth_(temp__5276__auto__)){
var ppath = temp__5276__auto__;
return (new andel.fast_zip.ZipperPath(ppath.l,ppath.r,ppath.ppath,ppath.pnodes,true,ppath.acc,ppath.o_acc,null,null,null));
} else {
return null;
}
})(),null,null,null));
} else {
return (new andel.fast_zip.ZipperLocation(loc.ops,pnode,path.ppath,null,null,null));
}
} else {
return null;
}
});
/**
 * zips all the way up and returns the root node, reflecting any changes.
 */
andel.fast_zip.root = (function andel$fast_zip$root(loc){
while(true){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"end","end",-268185958),loc.path)){
return loc.node;
} else {
var p = andel.fast_zip.up.call(null,loc);
if(cljs.core.truth_(p)){
var G__63013 = p;
loc = G__63013;
continue;
} else {
return loc.node;
}
}
break;
}
});
/**
 * Returns the loc of the right sibling of the node at this loc, or nil
 */
andel.fast_zip.right = (function andel$fast_zip$right(loc){
var path = loc.path;
var temp__5278__auto__ = (function (){var and__41052__auto__ = path;
if(cljs.core.truth_(and__41052__auto__)){
return path.r;
} else {
return and__41052__auto__;
}
})();
if(cljs.core.truth_(temp__5278__auto__)){
var r = temp__5278__auto__;
return (new andel.fast_zip.ZipperLocation(loc.ops,cljs.core.first.call(null,r),(new andel.fast_zip.ZipperPath(cljs.core.conj.call(null,path.l,loc.node),cljs.core.next.call(null,r),path.ppath,path.pnodes,new cljs.core.Keyword(null,"changed?","changed?",-437828330).cljs$core$IFn$_invoke$arity$1(path),(function (){var G__63014 = loc;
var G__63014__$1 = (((G__63014 == null))?null:G__63014.path);
if((G__63014__$1 == null)){
return null;
} else {
return G__63014__$1.acc;
}
})(),null,null,null,null)),null,null,null));
} else {
return null;
}
});
/**
 * Returns the loc of the rightmost sibling of the node at this loc, or self
 */
andel.fast_zip.rightmost = (function andel$fast_zip$rightmost(loc){
var path = loc.path;
var temp__5276__auto__ = (function (){var and__41052__auto__ = path;
if(cljs.core.truth_(and__41052__auto__)){
return path.r;
} else {
return and__41052__auto__;
}
})();
if(cljs.core.truth_(temp__5276__auto__)){
var r = temp__5276__auto__;
return (new andel.fast_zip.ZipperLocation(loc.ops,cljs.core.last.call(null,r),(new andel.fast_zip.ZipperPath(cljs.core.apply.call(null,cljs.core.conj,path.l,loc.node,cljs.core.butlast.call(null,r)),null,path.ppath,path.pnodes,new cljs.core.Keyword(null,"changed?","changed?",-437828330).cljs$core$IFn$_invoke$arity$1(path),(function (){var G__63015 = loc;
var G__63015__$1 = (((G__63015 == null))?null:G__63015.path);
if((G__63015__$1 == null)){
return null;
} else {
return G__63015__$1.acc;
}
})(),null,null,null,null)),null,null,null));
} else {
return loc;
}
});
/**
 * Inserts the item as the left sibling of the node at this loc, without moving
 */
andel.fast_zip.insert_left = (function andel$fast_zip$insert_left(loc,item){
var temp__5276__auto__ = loc.path;
if(cljs.core.truth_(temp__5276__auto__)){
var path = temp__5276__auto__;
return (new andel.fast_zip.ZipperLocation(loc.ops,loc.node,(new andel.fast_zip.ZipperPath(cljs.core.conj.call(null,path.l,item),path.r,path.ppath,path.pnodes,true,path.acc,null,null,null,null)),null,null,null));
} else {
throw (new Error("Insert at top"));
}
});
/**
 * Inserts the item as the right sibling of the node at this loc, without moving
 */
andel.fast_zip.insert_right = (function andel$fast_zip$insert_right(loc,item){
var temp__5276__auto__ = loc.path;
if(cljs.core.truth_(temp__5276__auto__)){
var path = temp__5276__auto__;
return (new andel.fast_zip.ZipperLocation(loc.ops,loc.node,(new andel.fast_zip.ZipperPath(path.l,cljs.core.cons.call(null,item,path.r),path.ppath,path.pnodes,true,path.acc,null,null,null,null)),null,null,null));
} else {
throw (new Error("Insert at top"));
}
});
/**
 * Replaces the node at this loc, without moving
 */
andel.fast_zip.replace = (function andel$fast_zip$replace(loc,node){
return (new andel.fast_zip.ZipperLocation(loc.ops,node,(function (){var temp__5276__auto__ = loc.path;
if(cljs.core.truth_(temp__5276__auto__)){
var path = temp__5276__auto__;
return cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true);
} else {
return null;
}
})(),null,null,null));
});
/**
 * Inserts the item as the leftmost child of the node at this loc, without moving
 */
andel.fast_zip.insert_child = (function andel$fast_zip$insert_child(loc,item){
return andel.fast_zip.replace.call(null,loc,andel.fast_zip.make_node.call(null,loc,loc.node,cljs.core.cons.call(null,item,andel.fast_zip.children.call(null,loc))));
});
/**
 * Inserts the item as the rightmost child of the node at this loc, without moving
 */
andel.fast_zip.append_child = (function andel$fast_zip$append_child(loc,item){
return andel.fast_zip.replace.call(null,loc,andel.fast_zip.make_node.call(null,loc,loc.node,cljs.core.concat.call(null,andel.fast_zip.children.call(null,loc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null))));
});
/**
 * Returns true if loc represents the end of a depth-first walk
 */
andel.fast_zip.end_QMARK_ = (function andel$fast_zip$end_QMARK_(loc){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"end","end",-268185958),loc.path);
});
/**
 * Removes the node at loc, returning the loc that would have preceded it in a depth-first walk.
 */
andel.fast_zip.remove = (function andel$fast_zip$remove(loc){
var temp__5276__auto__ = loc.path;
if(cljs.core.truth_(temp__5276__auto__)){
var path = temp__5276__auto__;
if((cljs.core.count.call(null,path.l) > (0))){
var loc__$1 = (new andel.fast_zip.ZipperLocation(loc.ops,cljs.core.peek.call(null,path.l),(new andel.fast_zip.ZipperPath(cljs.core.pop.call(null,path.l),path.r,path.ppath,path.pnodes,true,path.acc,path.o_acc,null,null,null)),null,null,null));
while(true){
var temp__5276__auto____$1 = (function (){var and__41052__auto__ = andel.fast_zip.branch_QMARK_.call(null,loc__$1);
if(cljs.core.truth_(and__41052__auto__)){
return andel.fast_zip.down.call(null,loc__$1);
} else {
return and__41052__auto__;
}
})();
if(cljs.core.truth_(temp__5276__auto____$1)){
var child = temp__5276__auto____$1;
var G__63016 = andel.fast_zip.rightmost.call(null,child);
loc__$1 = G__63016;
continue;
} else {
return loc__$1;
}
break;
}
} else {
return (new andel.fast_zip.ZipperLocation(loc.ops,andel.fast_zip.make_node.call(null,loc,cljs.core.peek.call(null,path.pnodes),path.r),(function (){var temp__5276__auto____$1 = path.ppath;
if(cljs.core.truth_(temp__5276__auto____$1)){
var ppath = temp__5276__auto____$1;
if(cljs.core.truth_(ppath)){
return (new andel.fast_zip.ZipperPath(ppath.l,ppath.r,ppath.ppath,ppath.pnodes,true,path.acc,path.o_acc,null,null,null));
} else {
return null;
}
} else {
return null;
}
})(),null,null,null));
}
} else {
throw (new Error("Remove at top"));
}
});
/**
 * Replaces the node at this loc with the value of (f node args)
 */
andel.fast_zip.edit = (function andel$fast_zip$edit(var_args){
var args__42304__auto__ = [];
var len__42297__auto___63020 = arguments.length;
var i__42298__auto___63021 = (0);
while(true){
if((i__42298__auto___63021 < len__42297__auto___63020)){
args__42304__auto__.push((arguments[i__42298__auto___63021]));

var G__63022 = (i__42298__auto___63021 + (1));
i__42298__auto___63021 = G__63022;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((2) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((2)),(0),null)):null);
return andel.fast_zip.edit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__42305__auto__);
});

andel.fast_zip.edit.cljs$core$IFn$_invoke$arity$variadic = (function (loc,f,args){
return andel.fast_zip.replace.call(null,loc,cljs.core.apply.call(null,f,loc.node,args));
});

andel.fast_zip.edit.cljs$lang$maxFixedArity = (2);

andel.fast_zip.edit.cljs$lang$applyTo = (function (seq63017){
var G__63018 = cljs.core.first.call(null,seq63017);
var seq63017__$1 = cljs.core.next.call(null,seq63017);
var G__63019 = cljs.core.first.call(null,seq63017__$1);
var seq63017__$2 = cljs.core.next.call(null,seq63017__$1);
return andel.fast_zip.edit.cljs$core$IFn$_invoke$arity$variadic(G__63018,G__63019,seq63017__$2);
});


//# sourceMappingURL=fast_zip.js.map?rel=1504289158829