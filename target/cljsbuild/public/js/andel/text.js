// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('andel.text');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('andel.tree');
goog.require('andel.fast_zip');
andel.text.metrics = (function andel$text$metrics(x){
if(typeof x === 'string'){
} else {
throw (new Error("Assert failed: (string? x)"));
}

var l = x.length;
return [l,(function (){var i = (0);
var c = (0);
while(true){
if((i === l)){
return c;
} else {
if((x.charAt(i) === "\n")){
var G__20086 = (i + (1));
var G__20087 = (c + (1));
i = G__20086;
c = G__20087;
continue;
} else {
var G__20088 = (i + (1));
var G__20089 = c;
i = G__20088;
c = G__20089;
continue;
}
}
break;
}
})()];
});
andel.text.r_f = (function andel$text$r_f(var_args){
var G__20091 = arguments.length;
switch (G__20091) {
case 0:
return andel.text.r_f.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return andel.text.r_f.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

andel.text.r_f.cljs$core$IFn$_invoke$arity$0 = (function (){
return [(0),(0)];
});

andel.text.r_f.cljs$core$IFn$_invoke$arity$2 = (function (p__20092,p__20093){
var vec__20094 = p__20092;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20094,(0),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20094,(1),null);
var acc = vec__20094;
var vec__20097 = p__20093;
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20097,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20097,(1),null);
return [(x1 + y1),(x2 + y2)];
});

andel.text.r_f.cljs$lang$maxFixedArity = 2;

andel.text.split_count = (function andel$text$split_count(i,j,thresh){
var x = (j - i);
if((x < thresh)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)], null);
} else {
var x_h = cljs.core.quot(x,(2));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__20101 = i;
var G__20102 = (i + x_h);
var G__20103 = thresh;
return (andel.text.split_count.cljs$core$IFn$_invoke$arity$3 ? andel.text.split_count.cljs$core$IFn$_invoke$arity$3(G__20101,G__20102,G__20103) : andel.text.split_count.call(null,G__20101,G__20102,G__20103));
})(),(function (){var G__20104 = (i + x_h);
var G__20105 = j;
var G__20106 = thresh;
return (andel.text.split_count.cljs$core$IFn$_invoke$arity$3 ? andel.text.split_count.cljs$core$IFn$_invoke$arity$3(G__20104,G__20105,G__20106) : andel.text.split_count.call(null,G__20104,G__20105,G__20106));
})());
}
});
andel.text.string_thresh = (64);
andel.text.string_merge_thresh = cljs.core.quot(andel.text.string_thresh,(2));
andel.text.split_string = (function andel$text$split_string(x){
if((andel.text.string_thresh <= cljs.core.count(x))){
} else {
throw (new Error("Assert failed: (<= string-thresh (count x))"));
}

return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20107){
var vec__20108 = p__20107;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20108,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20108,(1),null);
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(x,i,j);
}),andel.text.split_count((0),cljs.core.count(x),andel.text.string_thresh));
});
andel.text.tree_config = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$reducing_DASH_fn,andel.text.r_f,cljs.core.cst$kw$metrics_DASH_fn,andel.text.metrics,cljs.core.cst$kw$leaf_DASH_overflown_QMARK_,(function (x){
return (andel.text.string_thresh <= cljs.core.count(x));
}),cljs.core.cst$kw$split_DASH_thresh,(64),cljs.core.cst$kw$split_DASH_leaf,andel.text.split_string,cljs.core.cst$kw$leaf_DASH_underflown_QMARK_,(function (s){
return (cljs.core.count(s) < andel.text.string_merge_thresh);
}),cljs.core.cst$kw$merge_DASH_leafs,(function (s1,s2){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s2)].join('');
})], null);
andel.text.mark_changed = (function andel$text$mark_changed(loc){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(loc,cljs.core.cst$kw$path,cljs.core.assoc,cljs.core.cst$kw$changed_QMARK_,true);
});
andel.text.make_text = (function andel$text$make_text(s){
return andel.tree.root(andel.text.mark_changed(andel.tree.down(andel.tree.zipper(andel.tree.make_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [andel.tree.make_leaf(s,andel.text.tree_config)], null),andel.text.tree_config),andel.text.tree_config))));
});
andel.text.zipper = (function andel$text$zipper(tree){
return andel.tree.zipper(tree,andel.text.tree_config);
});
andel.text.root = andel.tree.root;
andel.text.metrics_offset = (function andel$text$metrics_offset(m){
var G__20111 = m;
if((G__20111 == null)){
return null;
} else {
return (G__20111[(0)]);
}
});
andel.text.metrics_line = (function andel$text$metrics_line(m){
var G__20112 = m;
if((G__20112 == null)){
return null;
} else {
return (G__20112[(1)]);
}
});
andel.text.by_offset = (function andel$text$by_offset(i){
return (function (acc,m){
return (i < andel.text.metrics_offset(andel.text.r_f.cljs$core$IFn$_invoke$arity$2(acc,m)));
});
});
andel.text.by_line = (function andel$text$by_line(i){
return (function (acc,m){
return (i <= andel.text.metrics_line(andel.text.r_f.cljs$core$IFn$_invoke$arity$2(acc,m)));
});
});
andel.text.offset = (function andel$text$offset(loc){
var node = loc.node;
var path = loc.path;
var acc = (function (){var G__20113 = path;
if((G__20113 == null)){
return null;
} else {
return G__20113.acc;
}
})();
var o_acc = path.o_acc;
if(cljs.core.truth_(andel.tree.end_QMARK_(loc))){
return andel.text.metrics_offset(node.metrics);
} else {
var or__7678__auto__ = andel.text.metrics_offset(o_acc);
if(cljs.core.truth_(or__7678__auto__)){
return or__7678__auto__;
} else {
var or__7678__auto____$1 = andel.text.metrics_offset(acc);
if(cljs.core.truth_(or__7678__auto____$1)){
return or__7678__auto____$1;
} else {
return (0);
}
}
}
});
andel.text.line = (function andel$text$line(loc){
var node = loc.node;
var path = loc.path;
var acc = (function (){var G__20114 = path;
if((G__20114 == null)){
return null;
} else {
return G__20114.acc;
}
})();
var o_acc = path.o_acc;
if(cljs.core.truth_(andel.tree.end_QMARK_(loc))){
return andel.text.metrics_line(node.metrics);
} else {
var or__7678__auto__ = andel.text.metrics_line(o_acc);
if(cljs.core.truth_(or__7678__auto__)){
return or__7678__auto__;
} else {
var or__7678__auto____$1 = andel.text.metrics_line(acc);
if(cljs.core.truth_(or__7678__auto____$1)){
return or__7678__auto____$1;
} else {
return (0);
}
}
}
});
andel.text.count_of = (function andel$text$count_of(s,c,from,to){
var res = (0);
var from__$1 = from;
while(true){
var i = clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(s,c,from__$1);
if((!((i == null))) && ((i < to))){
var G__20115 = (res + (1));
var G__20116 = (i + (1));
res = G__20115;
from__$1 = G__20116;
continue;
} else {
return res;
}
break;
}
});
andel.text.nth_index = (function andel$text$nth_index(s,c,n){
if((n === (0))){
return (0);
} else {
var from = (0);
var n__$1 = n;
while(true){
var i = clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(s,c,from);
if((n__$1 === (1))){
return i;
} else {
if(!((i == null))){
var G__20117 = (i + (1));
var G__20118 = (n__$1 - (1));
from = G__20117;
n__$1 = G__20118;
continue;
} else {
return null;
}
}
break;
}
}
});
andel.text.forget_acc = (function andel$text$forget_acc(loc){
return andel.fast_zip.update_path(loc,(function (p1__20119_SHARP_){
return andel.fast_zip.assoc_o_acc(p1__20119_SHARP_,null);
}));
});
andel.text.scan_to_offset = (function andel$text$scan_to_offset(loc,i){
var loc_SINGLEQUOTE_ = andel.tree.scan(loc,andel.text.by_offset(i));
if(cljs.core.truth_(andel.tree.end_QMARK_(loc_SINGLEQUOTE_))){
return loc_SINGLEQUOTE_;
} else {
var loc_SINGLEQUOTE___$1 = andel.text.forget_acc(loc_SINGLEQUOTE_);
var o = andel.text.offset(loc_SINGLEQUOTE___$1);
var l = andel.text.line(loc_SINGLEQUOTE___$1);
return andel.fast_zip.update_path(loc_SINGLEQUOTE___$1,((function (loc_SINGLEQUOTE___$1,o,l,loc_SINGLEQUOTE_){
return (function (p1__20120_SHARP_){
return andel.fast_zip.assoc_o_acc(p1__20120_SHARP_,[i,(l + andel.text.count_of((andel.tree.node.cljs$core$IFn$_invoke$arity$1 ? andel.tree.node.cljs$core$IFn$_invoke$arity$1(loc_SINGLEQUOTE___$1) : andel.tree.node.call(null,loc_SINGLEQUOTE___$1)).data,"\n",(0),(i - o)))]);
});})(loc_SINGLEQUOTE___$1,o,l,loc_SINGLEQUOTE_))
);
}
});
andel.text.retain = (function andel$text$retain(loc,l){
return andel.text.scan_to_offset(loc,(andel.text.offset(loc) + l));
});
andel.text.scan_to_line = (function andel$text$scan_to_line(loc,i){
var loc_SINGLEQUOTE_ = andel.tree.scan(loc,andel.text.by_line(i));
if(cljs.core.truth_(andel.tree.end_QMARK_(loc_SINGLEQUOTE_))){
return loc_SINGLEQUOTE_;
} else {
var loc_SINGLEQUOTE___$1 = andel.text.forget_acc(loc_SINGLEQUOTE_);
var o = andel.text.offset(loc_SINGLEQUOTE___$1);
var l = andel.text.line(loc_SINGLEQUOTE___$1);
var idx = andel.text.nth_index((andel.tree.node.cljs$core$IFn$_invoke$arity$1 ? andel.tree.node.cljs$core$IFn$_invoke$arity$1(loc_SINGLEQUOTE___$1) : andel.tree.node.call(null,loc_SINGLEQUOTE___$1)).data,"\n",(i - l));
var G__20122 = andel.fast_zip.update_path(loc_SINGLEQUOTE___$1,((function (loc_SINGLEQUOTE___$1,o,l,idx,loc_SINGLEQUOTE_){
return (function (p1__20121_SHARP_){
return andel.fast_zip.assoc_o_acc(p1__20121_SHARP_,[(o + idx),i]);
});})(loc_SINGLEQUOTE___$1,o,l,idx,loc_SINGLEQUOTE_))
);
if(((0) < i)){
return andel.text.retain(G__20122,(1));
} else {
return G__20122;
}
}
});
andel.text.line_length = (function andel$text$line_length(loc){
var next_loc = andel.text.scan_to_line(loc,(andel.text.line(loc) + (1)));
var len = (andel.text.offset(next_loc) - andel.text.offset(loc));
if(cljs.core.truth_(andel.tree.end_QMARK_(next_loc))){
return len;
} else {
return (len - (1));
}
});
andel.text.lazy_text = (function andel$text$lazy_text(loc,l){
while(true){
if(((0) < l)){
if(cljs.core.truth_(andel.tree.end_QMARK_(loc))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Length is out of bounds",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$l,l], null));
} else {
if(cljs.core.truth_(andel.tree.branch_QMARK_(loc))){
var G__20125 = andel.tree.down(loc);
var G__20126 = l;
loc = G__20125;
l = G__20126;
continue;
} else {
var i = andel.text.offset(loc);
var text = (andel.tree.node.cljs$core$IFn$_invoke$arity$1 ? andel.tree.node.cljs$core$IFn$_invoke$arity$1(loc) : andel.tree.node.call(null,loc)).data;
var base_offset = andel.text.metrics_offset(andel.tree.loc_acc(loc));
var start = (i - base_offset);
var end = (function (){var x__8023__auto__ = cljs.core.count(text);
var y__8024__auto__ = (start + l);
return ((x__8023__auto__ < y__8024__auto__) ? x__8023__auto__ : y__8024__auto__);
})();
var s = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text,start,end);
var s_len = cljs.core.count(s);
if((s_len < l)){
return cljs.core.cons(s,(new cljs.core.LazySeq(null,((function (loc,l,i,text,base_offset,start,end,s,s_len){
return (function (){
var G__20123 = andel.tree.next(andel.text.forget_acc(loc));
var G__20124 = (l - s_len);
return (andel.text.lazy_text.cljs$core$IFn$_invoke$arity$2 ? andel.text.lazy_text.cljs$core$IFn$_invoke$arity$2(G__20123,G__20124) : andel.text.lazy_text.call(null,G__20123,G__20124));
});})(loc,l,i,text,base_offset,start,end,s,s_len))
,null,null)));
} else {
var x__8613__auto__ = s;
return cljs.core._conj(cljs.core.List.EMPTY,x__8613__auto__);
}
}
}
} else {
return null;
}
break;
}
});
andel.text.lines_count = (function andel$text$lines_count(t){
var or__7678__auto__ = (function (){var G__20128 = t;
var G__20128__$1 = (((G__20128 == null))?null:G__20128.metrics);
var G__20128__$2 = (((G__20128__$1 == null))?null:andel.text.metrics_line(G__20128__$1));
if((G__20128__$2 == null)){
return null;
} else {
return (G__20128__$2 + (1));
}
})();
if(cljs.core.truth_(or__7678__auto__)){
return or__7678__auto__;
} else {
return (0);
}
});
andel.text.text_length = (function andel$text$text_length(t){
var or__7678__auto__ = (function (){var G__20130 = t;
var G__20130__$1 = (((G__20130 == null))?null:G__20130.metrics);
if((G__20130__$1 == null)){
return null;
} else {
return andel.text.metrics_offset(G__20130__$1);
}
})();
if(cljs.core.truth_(or__7678__auto__)){
return or__7678__auto__;
} else {
return (0);
}
});
andel.text.text = (function andel$text$text(loc,l){
var s = "";
var lt = andel.text.lazy_text(loc,l);
while(true){
var temp__5276__auto__ = cljs.core.first(lt);
if(cljs.core.truth_(temp__5276__auto__)){
var f = temp__5276__auto__;
var G__20131 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join('');
var G__20132 = cljs.core.rest(lt);
s = G__20131;
lt = G__20132;
continue;
} else {
return s;
}
break;
}
});
andel.text.insert = (function andel$text$insert(loc,s){
while(true){
if(cljs.core.truth_(andel.tree.branch_QMARK_(loc))){
var G__20135 = andel.tree.down(loc);
var G__20136 = s;
loc = G__20135;
s = G__20136;
continue;
} else {
var i = andel.text.offset(loc);
var chunk_offset = andel.text.metrics_offset(andel.tree.loc_acc(loc));
var rel_offset = (i - chunk_offset);
return andel.text.retain((function (){var G__20133 = loc;
var G__20134 = ((function (loc,s,G__20133,i,chunk_offset,rel_offset){
return (function (node){
var data = node.data;
return andel.tree.make_leaf([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(data,(0),rel_offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(data,rel_offset))].join(''),andel.text.tree_config);
});})(loc,s,G__20133,i,chunk_offset,rel_offset))
;
return (andel.tree.edit.cljs$core$IFn$_invoke$arity$2 ? andel.tree.edit.cljs$core$IFn$_invoke$arity$2(G__20133,G__20134) : andel.tree.edit.call(null,G__20133,G__20134));
})(),cljs.core.count(s));
}
break;
}
});
andel.text.delete$ = (function andel$text$delete(loc,l){
while(true){
if(cljs.core.truth_(andel.tree.branch_QMARK_(loc))){
var G__20139 = andel.tree.down(loc);
var G__20140 = l;
loc = G__20139;
l = G__20140;
continue;
} else {
var i = andel.text.offset(loc);
var chunk_offset = andel.text.metrics_offset(andel.tree.loc_acc(loc));
var rel_offset = (i - chunk_offset);
var chunk_l = cljs.core.count((andel.tree.node.cljs$core$IFn$_invoke$arity$1 ? andel.tree.node.cljs$core$IFn$_invoke$arity$1(loc) : andel.tree.node.call(null,loc)).data);
var end = (function (){var x__8023__auto__ = chunk_l;
var y__8024__auto__ = (rel_offset + l);
return ((x__8023__auto__ < y__8024__auto__) ? x__8023__auto__ : y__8024__auto__);
})();
var next_loc = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rel_offset,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end,chunk_l)))?andel.tree.remove(andel.text.forget_acc(loc)):andel.text.scan_to_offset((function (){var G__20137 = loc;
var G__20138 = ((function (loc,l,G__20137,i,chunk_offset,rel_offset,chunk_l,end){
return (function (node){
var s = node.data;
return andel.tree.make_leaf([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),rel_offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,end))].join(''),andel.text.tree_config);
});})(loc,l,G__20137,i,chunk_offset,rel_offset,chunk_l,end))
;
return (andel.tree.edit.cljs$core$IFn$_invoke$arity$2 ? andel.tree.edit.cljs$core$IFn$_invoke$arity$2(G__20137,G__20138) : andel.tree.edit.call(null,G__20137,G__20138));
})(),i));
var deleted_c = (end - rel_offset);
if((deleted_c < l)){
var G__20141 = next_loc;
var G__20142 = (l - deleted_c);
loc = G__20141;
l = G__20142;
continue;
} else {
return next_loc;
}
}
break;
}
});
andel.text.reset = andel.tree.reset;
andel.text.debug_tree = (function andel$text$debug_tree(t){
if(cljs.core.array_QMARK_(t.children)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(t,cljs.core.cst$kw$children,cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(andel.text.debug_tree,t.children)));
} else {
return t;
}
});
andel.text.play = (function andel$text$play(t,operation){
var G__20143 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (loc,p__20144){
var vec__20145 = p__20144;
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20145,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20145,(1),null);
var G__20148 = code;
var G__20148__$1 = (((G__20148 instanceof cljs.core.Keyword))?G__20148.fqn:null);
switch (G__20148__$1) {
case "retain":
return andel.text.retain(loc,arg);

break;
case "insert":
return andel.text.insert(loc,arg);

break;
case "delete":
return andel.text.delete$(loc,((typeof arg === 'string')?cljs.core.count(arg):arg));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20148__$1)].join('')));

}
}),andel.text.zipper(t),operation);
return (andel.text.root.cljs$core$IFn$_invoke$arity$1 ? andel.text.root.cljs$core$IFn$_invoke$arity$1(G__20143) : andel.text.root.call(null,G__20143));
});
andel.text.line_text = (function andel$text$line_text(t,i){
var loc = andel.text.scan_to_line(andel.text.zipper(t),i);
return andel.text.text(loc,andel.text.line_length(loc));
});
