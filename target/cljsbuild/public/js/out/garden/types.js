// Compiled by ClojureScript 1.9.671 {}
goog.provide('garden.types');
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
garden.types.CSSUnit = (function (unit,magnitude,__meta,__extmap,__hash){
this.unit = unit;
this.magnitude = magnitude;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__41738__auto__,k__41739__auto__){
var self__ = this;
var this__41738__auto____$1 = this;
return this__41738__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__41739__auto__,null);
});

garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__41740__auto__,k62299,else__41741__auto__){
var self__ = this;
var this__41740__auto____$1 = this;
var G__62303 = k62299;
var G__62303__$1 = (((G__62303 instanceof cljs.core.Keyword))?G__62303.fqn:null);
switch (G__62303__$1) {
case "unit":
return self__.unit;

break;
case "magnitude":
return self__.magnitude;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k62299,else__41741__auto__);

}
});

garden.types.CSSUnit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__41752__auto__,writer__41753__auto__,opts__41754__auto__){
var self__ = this;
var this__41752__auto____$1 = this;
var pr_pair__41755__auto__ = ((function (this__41752__auto____$1){
return (function (keyval__41756__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__41753__auto__,cljs.core.pr_writer,""," ","",opts__41754__auto__,keyval__41756__auto__);
});})(this__41752__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__41753__auto__,pr_pair__41755__auto__,"#garden.types.CSSUnit{",", ","}",opts__41754__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62298){
var self__ = this;
var G__62298__$1 = this;
return (new cljs.core.RecordIter((0),G__62298__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

garden.types.CSSUnit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__41736__auto__){
var self__ = this;
var this__41736__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSUnit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__41733__auto__){
var self__ = this;
var this__41733__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSUnit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__41742__auto__){
var self__ = this;
var this__41742__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__41734__auto__){
var self__ = this;
var this__41734__auto____$1 = this;
var h__41506__auto__ = self__.__hash;
if(!((h__41506__auto__ == null))){
return h__41506__auto__;
} else {
var h__41506__auto____$1 = ((function (h__41506__auto__,this__41734__auto____$1){
return (function (coll__41735__auto__){
return (70281654 ^ cljs.core.hash_unordered_coll.call(null,coll__41735__auto__));
});})(h__41506__auto__,this__41734__auto____$1))
.call(null,this__41734__auto____$1);
self__.__hash = h__41506__auto____$1;

return h__41506__auto____$1;
}
});

garden.types.CSSUnit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this62300,other62301){
var self__ = this;
var this62300__$1 = this;
return (!((other62301 == null))) && ((this62300__$1.constructor === other62301.constructor)) && (cljs.core._EQ_.call(null,this62300__$1.unit,other62301.unit)) && (cljs.core._EQ_.call(null,this62300__$1.magnitude,other62301.magnitude)) && (cljs.core._EQ_.call(null,this62300__$1.__extmap,other62301.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__41747__auto__,k__41748__auto__){
var self__ = this;
var this__41747__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unit","unit",375175175),null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),null], null), null),k__41748__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__41747__auto____$1),self__.__meta),k__41748__auto__);
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__41748__auto__)),null));
}
});

garden.types.CSSUnit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__41745__auto__,k__41746__auto__,G__62298){
var self__ = this;
var this__41745__auto____$1 = this;
var pred__62304 = cljs.core.keyword_identical_QMARK_;
var expr__62305 = k__41746__auto__;
if(cljs.core.truth_(pred__62304.call(null,new cljs.core.Keyword(null,"unit","unit",375175175),expr__62305))){
return (new garden.types.CSSUnit(G__62298,self__.magnitude,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62304.call(null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),expr__62305))){
return (new garden.types.CSSUnit(self__.unit,G__62298,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__41746__auto__,G__62298),null));
}
}
});

garden.types.CSSUnit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__41750__auto__){
var self__ = this;
var this__41750__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__41737__auto__,G__62298){
var self__ = this;
var this__41737__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,G__62298,self__.__extmap,self__.__hash));
});

garden.types.CSSUnit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__41743__auto__,entry__41744__auto__){
var self__ = this;
var this__41743__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__41744__auto__)){
return this__41743__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__41744__auto__,(0)),cljs.core._nth.call(null,entry__41744__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__41743__auto____$1,entry__41744__auto__);
}
});

garden.types.CSSUnit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unit","unit",2015706702,null),new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null)], null);
});

garden.types.CSSUnit.cljs$lang$type = true;

garden.types.CSSUnit.cljs$lang$ctorPrSeq = (function (this__41776__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSUnit");
});

garden.types.CSSUnit.cljs$lang$ctorPrWriter = (function (this__41776__auto__,writer__41777__auto__){
return cljs.core._write.call(null,writer__41777__auto__,"garden.types/CSSUnit");
});

garden.types.__GT_CSSUnit = (function garden$types$__GT_CSSUnit(unit,magnitude){
return (new garden.types.CSSUnit(unit,magnitude,null,null,null));
});

garden.types.map__GT_CSSUnit = (function garden$types$map__GT_CSSUnit(G__62302){
return (new garden.types.CSSUnit(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(G__62302),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$1(G__62302),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__62302,new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222))),null));
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
garden.types.CSSFunction = (function (function$,args,__meta,__extmap,__hash){
this.function$ = function$;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__41738__auto__,k__41739__auto__){
var self__ = this;
var this__41738__auto____$1 = this;
return this__41738__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__41739__auto__,null);
});

garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__41740__auto__,k62309,else__41741__auto__){
var self__ = this;
var this__41740__auto____$1 = this;
var G__62313 = k62309;
var G__62313__$1 = (((G__62313 instanceof cljs.core.Keyword))?G__62313.fqn:null);
switch (G__62313__$1) {
case "function":
return self__.function$;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k62309,else__41741__auto__);

}
});

garden.types.CSSFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__41752__auto__,writer__41753__auto__,opts__41754__auto__){
var self__ = this;
var this__41752__auto____$1 = this;
var pr_pair__41755__auto__ = ((function (this__41752__auto____$1){
return (function (keyval__41756__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__41753__auto__,cljs.core.pr_writer,""," ","",opts__41754__auto__,keyval__41756__auto__);
});})(this__41752__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__41753__auto__,pr_pair__41755__auto__,"#garden.types.CSSFunction{",", ","}",opts__41754__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62308){
var self__ = this;
var G__62308__$1 = this;
return (new cljs.core.RecordIter((0),G__62308__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

garden.types.CSSFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__41736__auto__){
var self__ = this;
var this__41736__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__41733__auto__){
var self__ = this;
var this__41733__auto____$1 = this;
return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__41742__auto__){
var self__ = this;
var this__41742__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__41734__auto__){
var self__ = this;
var this__41734__auto____$1 = this;
var h__41506__auto__ = self__.__hash;
if(!((h__41506__auto__ == null))){
return h__41506__auto__;
} else {
var h__41506__auto____$1 = ((function (h__41506__auto__,this__41734__auto____$1){
return (function (coll__41735__auto__){
return (1910311650 ^ cljs.core.hash_unordered_coll.call(null,coll__41735__auto__));
});})(h__41506__auto__,this__41734__auto____$1))
.call(null,this__41734__auto____$1);
self__.__hash = h__41506__auto____$1;

return h__41506__auto____$1;
}
});

garden.types.CSSFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this62310,other62311){
var self__ = this;
var this62310__$1 = this;
return (!((other62311 == null))) && ((this62310__$1.constructor === other62311.constructor)) && (cljs.core._EQ_.call(null,this62310__$1.function,other62311.function)) && (cljs.core._EQ_.call(null,this62310__$1.args,other62311.args)) && (cljs.core._EQ_.call(null,this62310__$1.__extmap,other62311.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__41747__auto__,k__41748__auto__){
var self__ = this;
var this__41747__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"function","function",-2127255473),null], null), null),k__41748__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__41747__auto____$1),self__.__meta),k__41748__auto__);
} else {
return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__41748__auto__)),null));
}
});

garden.types.CSSFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__41745__auto__,k__41746__auto__,G__62308){
var self__ = this;
var this__41745__auto____$1 = this;
var pred__62314 = cljs.core.keyword_identical_QMARK_;
var expr__62315 = k__41746__auto__;
if(cljs.core.truth_(pred__62314.call(null,new cljs.core.Keyword(null,"function","function",-2127255473),expr__62315))){
return (new garden.types.CSSFunction(G__62308,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62314.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__62315))){
return (new garden.types.CSSFunction(self__.function$,G__62308,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__41746__auto__,G__62308),null));
}
}
});

garden.types.CSSFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__41750__auto__){
var self__ = this;
var this__41750__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__41737__auto__,G__62308){
var self__ = this;
var this__41737__auto____$1 = this;
return (new garden.types.CSSFunction(self__.function$,self__.args,G__62308,self__.__extmap,self__.__hash));
});

garden.types.CSSFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__41743__auto__,entry__41744__auto__){
var self__ = this;
var this__41743__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__41744__auto__)){
return this__41743__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__41744__auto__,(0)),cljs.core._nth.call(null,entry__41744__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__41743__auto____$1,entry__41744__auto__);
}
});

garden.types.CSSFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

garden.types.CSSFunction.cljs$lang$type = true;

garden.types.CSSFunction.cljs$lang$ctorPrSeq = (function (this__41776__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSFunction");
});

garden.types.CSSFunction.cljs$lang$ctorPrWriter = (function (this__41776__auto__,writer__41777__auto__){
return cljs.core._write.call(null,writer__41777__auto__,"garden.types/CSSFunction");
});

garden.types.__GT_CSSFunction = (function garden$types$__GT_CSSFunction(function$,args){
return (new garden.types.CSSFunction(function$,args,null,null,null));
});

garden.types.map__GT_CSSFunction = (function garden$types$map__GT_CSSFunction(G__62312){
return (new garden.types.CSSFunction(new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1(G__62312),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__62312),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__62312,new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"args","args",1315556576))),null));
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
garden.types.CSSAtRule = (function (identifier,value,__meta,__extmap,__hash){
this.identifier = identifier;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__41738__auto__,k__41739__auto__){
var self__ = this;
var this__41738__auto____$1 = this;
return this__41738__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__41739__auto__,null);
});

garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__41740__auto__,k62319,else__41741__auto__){
var self__ = this;
var this__41740__auto____$1 = this;
var G__62323 = k62319;
var G__62323__$1 = (((G__62323 instanceof cljs.core.Keyword))?G__62323.fqn:null);
switch (G__62323__$1) {
case "identifier":
return self__.identifier;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k62319,else__41741__auto__);

}
});

garden.types.CSSAtRule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__41752__auto__,writer__41753__auto__,opts__41754__auto__){
var self__ = this;
var this__41752__auto____$1 = this;
var pr_pair__41755__auto__ = ((function (this__41752__auto____$1){
return (function (keyval__41756__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__41753__auto__,cljs.core.pr_writer,""," ","",opts__41754__auto__,keyval__41756__auto__);
});})(this__41752__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__41753__auto__,pr_pair__41755__auto__,"#garden.types.CSSAtRule{",", ","}",opts__41754__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62318){
var self__ = this;
var G__62318__$1 = this;
return (new cljs.core.RecordIter((0),G__62318__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

garden.types.CSSAtRule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__41736__auto__){
var self__ = this;
var this__41736__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSAtRule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__41733__auto__){
var self__ = this;
var this__41733__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSAtRule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__41742__auto__){
var self__ = this;
var this__41742__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__41734__auto__){
var self__ = this;
var this__41734__auto____$1 = this;
var h__41506__auto__ = self__.__hash;
if(!((h__41506__auto__ == null))){
return h__41506__auto__;
} else {
var h__41506__auto____$1 = ((function (h__41506__auto__,this__41734__auto____$1){
return (function (coll__41735__auto__){
return (-1632374092 ^ cljs.core.hash_unordered_coll.call(null,coll__41735__auto__));
});})(h__41506__auto__,this__41734__auto____$1))
.call(null,this__41734__auto____$1);
self__.__hash = h__41506__auto____$1;

return h__41506__auto____$1;
}
});

garden.types.CSSAtRule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this62320,other62321){
var self__ = this;
var this62320__$1 = this;
return (!((other62321 == null))) && ((this62320__$1.constructor === other62321.constructor)) && (cljs.core._EQ_.call(null,this62320__$1.identifier,other62321.identifier)) && (cljs.core._EQ_.call(null,this62320__$1.value,other62321.value)) && (cljs.core._EQ_.call(null,this62320__$1.__extmap,other62321.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__41747__auto__,k__41748__auto__){
var self__ = this;
var this__41747__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),null], null), null),k__41748__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__41747__auto____$1),self__.__meta),k__41748__auto__);
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__41748__auto__)),null));
}
});

garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__41745__auto__,k__41746__auto__,G__62318){
var self__ = this;
var this__41745__auto____$1 = this;
var pred__62324 = cljs.core.keyword_identical_QMARK_;
var expr__62325 = k__41746__auto__;
if(cljs.core.truth_(pred__62324.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),expr__62325))){
return (new garden.types.CSSAtRule(G__62318,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62324.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__62325))){
return (new garden.types.CSSAtRule(self__.identifier,G__62318,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__41746__auto__,G__62318),null));
}
}
});

garden.types.CSSAtRule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__41750__auto__){
var self__ = this;
var this__41750__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__41737__auto__,G__62318){
var self__ = this;
var this__41737__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,G__62318,self__.__extmap,self__.__hash));
});

garden.types.CSSAtRule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__41743__auto__,entry__41744__auto__){
var self__ = this;
var this__41743__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__41744__auto__)){
return this__41743__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__41744__auto__,(0)),cljs.core._nth.call(null,entry__41744__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__41743__auto____$1,entry__41744__auto__);
}
});

garden.types.CSSAtRule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"identifier","identifier",835028029,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

garden.types.CSSAtRule.cljs$lang$type = true;

garden.types.CSSAtRule.cljs$lang$ctorPrSeq = (function (this__41776__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSAtRule");
});

garden.types.CSSAtRule.cljs$lang$ctorPrWriter = (function (this__41776__auto__,writer__41777__auto__){
return cljs.core._write.call(null,writer__41777__auto__,"garden.types/CSSAtRule");
});

garden.types.__GT_CSSAtRule = (function garden$types$__GT_CSSAtRule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});

garden.types.map__GT_CSSAtRule = (function garden$types$map__GT_CSSAtRule(G__62322){
return (new garden.types.CSSAtRule(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(G__62322),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__62322),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__62322,new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217))),null));
});


//# sourceMappingURL=types.js.map?rel=1504289157185