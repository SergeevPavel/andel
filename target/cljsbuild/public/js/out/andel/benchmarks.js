// Compiled by ClojureScript 1.9.671 {}
goog.provide('andel.benchmarks');
goog.require('cljs.core');
goog.require('andel.text');
goog.require('andel.intervals');
goog.require('andel.tree');
andel.benchmarks.current_time_BANG_ = (function andel$benchmarks$current_time_BANG_(){
return Date.now();
});
andel.benchmarks.text_tree_info = (function andel$benchmarks$text_tree_info(t){
var acc = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),(0),new cljs.core.Keyword(null,"leafs","leafs",-1793817466),(0)], null);
var loc = andel.text.zipper.call(null,t);
while(true){
if(cljs.core.truth_(andel.tree.end_QMARK_.call(null,loc))){
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1("TEXT: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc)].join(''));
} else {
if(andel.tree.node_QMARK_.call(null,andel.tree.node.call(null,loc))){
var G__68485 = cljs.core.update.call(null,acc,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.inc);
var G__68486 = andel.tree.next.call(null,loc);
acc = G__68485;
loc = G__68486;
continue;
} else {
var G__68487 = cljs.core.update.call(null,acc,new cljs.core.Keyword(null,"leafs","leafs",-1793817466),cljs.core.inc);
var G__68488 = andel.tree.next.call(null,loc);
acc = G__68487;
loc = G__68488;
continue;
}
}
break;
}
});
andel.benchmarks.intervals_tree_info = (function andel$benchmarks$intervals_tree_info(t){
var acc = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),(0),new cljs.core.Keyword(null,"leafs","leafs",-1793817466),(0)], null);
var loc = andel.intervals.zipper.call(null,t);
while(true){
if(cljs.core.truth_(andel.tree.end_QMARK_.call(null,loc))){
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1("INTERVALS: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc)].join(''));
} else {
if(andel.tree.node_QMARK_.call(null,andel.tree.node.call(null,loc))){
var G__68489 = cljs.core.update.call(null,acc,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.inc);
var G__68490 = andel.tree.next.call(null,loc);
acc = G__68489;
loc = G__68490;
continue;
} else {
var G__68491 = cljs.core.update.call(null,acc,new cljs.core.Keyword(null,"leafs","leafs",-1793817466),cljs.core.inc);
var G__68492 = andel.tree.next.call(null,loc);
acc = G__68491;
loc = G__68492;
continue;
}
}
break;
}
});
andel.benchmarks.bench = (function andel$benchmarks$bench(var_args){
var args__42304__auto__ = [];
var len__42297__auto___68499 = arguments.length;
var i__42298__auto___68500 = (0);
while(true){
if((i__42298__auto___68500 < len__42297__auto___68499)){
args__42304__auto__.push((arguments[i__42298__auto___68500]));

var G__68501 = (i__42298__auto___68500 + (1));
i__42298__auto___68500 = G__68501;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((2) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((2)),(0),null)):null);
return andel.benchmarks.bench.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__42305__auto__);
});

andel.benchmarks.bench.cljs$core$IFn$_invoke$arity$variadic = (function (name,f,p__68496){
var map__68497 = p__68496;
var map__68497__$1 = ((((!((map__68497 == null)))?((((map__68497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68497.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68497):map__68497);
var count = cljs.core.get.call(null,map__68497__$1,new cljs.core.Keyword(null,"count","count",2139924085),(10));
var start_time = andel.benchmarks.current_time_BANG_.call(null);
console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1("START BENCH "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));

cljs.core.mapv.call(null,((function (start_time,map__68497,map__68497__$1,count){
return (function (f__$1){
return f__$1.call(null);
});})(start_time,map__68497,map__68497__$1,count))
,cljs.core.repeat.call(null,count,f));

var end_time = andel.benchmarks.current_time_BANG_.call(null);
var total_time = (end_time - start_time);
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1("END BENCH: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"count","count",2139924085),count,new cljs.core.Keyword(null,"total","total",1916810418),total_time,new cljs.core.Keyword(null,"average","average",-492356168),(total_time / count)], null))].join(''));
});

andel.benchmarks.bench.cljs$lang$maxFixedArity = (2);

andel.benchmarks.bench.cljs$lang$applyTo = (function (seq68493){
var G__68494 = cljs.core.first.call(null,seq68493);
var seq68493__$1 = cljs.core.next.call(null,seq68493);
var G__68495 = cljs.core.first.call(null,seq68493__$1);
var seq68493__$2 = cljs.core.next.call(null,seq68493__$1);
return andel.benchmarks.bench.cljs$core$IFn$_invoke$arity$variadic(G__68494,G__68495,seq68493__$2);
});

andel.benchmarks.bench_insert = (function andel$benchmarks$bench_insert(markup){
return andel.benchmarks.bench.call(null,"TREE INSERT",(function (){
return andel.intervals.add_intervals.call(null,andel.intervals.make_interval_tree.call(null),markup);
}),new cljs.core.Keyword(null,"count","count",2139924085),(1));
});
andel.benchmarks.bench_insert_base = (function andel$benchmarks$bench_insert_base(markup){
return andel.benchmarks.bench.call(null,"BASE INSERT",(function (){
return cljs.core.mapv.call(null,(function (m){
return cljs.core.update.call(null,m,new cljs.core.Keyword(null,"from","from",1815293044),cljs.core.inc);
}),markup);
}),new cljs.core.Keyword(null,"count","count",2139924085),(100));
});
andel.benchmarks.bench_query = (function andel$benchmarks$bench_query(markup){
var itree = andel.intervals.add_intervals.call(null,andel.intervals.make_interval_tree.call(null),markup);
return andel.benchmarks.bench.call(null,"TREE QUERY",((function (itree){
return (function (){
var from = cljs.core.rand_int.call(null,(160000));
var to = (from + (3200));
return andel.intervals.query_intervals.call(null,itree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to], null));
});})(itree))
,new cljs.core.Keyword(null,"count","count",2139924085),(10000));
});
andel.benchmarks.play_query = (function andel$benchmarks$play_query(model,p__68503){
var map__68504 = p__68503;
var map__68504__$1 = ((((!((map__68504 == null)))?((((map__68504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68504.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68504):map__68504);
var from = cljs.core.get.call(null,map__68504__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.call(null,map__68504__$1,new cljs.core.Keyword(null,"to","to",192099007));
return cljs.core.vec.call(null,cljs.core.filter.call(null,((function (map__68504,map__68504__$1,from,to){
return (function (p1__68502_SHARP_){
return andel.intervals.intersect.call(null,p1__68502_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to], null));
});})(map__68504,map__68504__$1,from,to))
,model));
});
andel.benchmarks.bench_query_base = (function andel$benchmarks$bench_query_base(markup){
return andel.benchmarks.bench.call(null,"QUERY BASE",(function (){
var from = cljs.core.rand_int.call(null,(160000));
var to = (from + (3200));
return andel.benchmarks.play_query.call(null,markup,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to], null));
}),new cljs.core.Keyword(null,"count","count",2139924085),(1000));
});
andel.benchmarks.bench_type_in = (function andel$benchmarks$bench_type_in(markup){
var itree = andel.intervals.add_intervals.call(null,andel.intervals.make_interval_tree.call(null),markup);
return andel.benchmarks.bench.call(null,"TYPE-IN BENCH",((function (itree){
return (function (){
var offset = cljs.core.rand_int.call(null,(160000));
var size = (1);
return andel.intervals.type_in.call(null,itree,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [offset,size], null));
});})(itree))
,new cljs.core.Keyword(null,"count","count",2139924085),(1000));
});
andel.benchmarks.bench_delete = (function andel$benchmarks$bench_delete(markup){
var itree = andel.intervals.add_intervals.call(null,andel.intervals.make_interval_tree.call(null),markup);
return andel.benchmarks.bench.call(null,"DELETE BENCH",((function (itree){
return (function (){
var offset = cljs.core.rand_int.call(null,(160000));
var size = (1);
return andel.intervals.delete_range.call(null,itree,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [offset,size], null));
});})(itree))
,new cljs.core.Keyword(null,"count","count",2139924085),(1));
});
andel.benchmarks.bench_editing = (function andel$benchmarks$bench_editing(markup){
var itree = andel.intervals.add_intervals.call(null,andel.intervals.make_interval_tree.call(null),markup);
return andel.benchmarks.bench.call(null,"TREE EDITING",((function (itree){
return (function (){
var cmd = cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.Keyword(null,"delete","delete",-1768633620)], null));
var G__68506 = cmd;
switch (G__68506) {
default:
return new cljs.core.Keyword(null,"insert","insert",1286475395);

}
});})(itree))
);
});

//# sourceMappingURL=benchmarks.js.map?rel=1504289164671