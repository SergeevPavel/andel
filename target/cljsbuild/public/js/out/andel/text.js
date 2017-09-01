// Compiled by ClojureScript 1.9.671 {}
goog.provide('andel.text');
goog.require('cljs.core');
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
var G__63202 = (i + (1));
var G__63203 = (c + (1));
i = G__63202;
c = G__63203;
continue;
} else {
var G__63204 = (i + (1));
var G__63205 = c;
i = G__63204;
c = G__63205;
continue;
}
}
break;
}
})()];
});
andel.text.r_f = (function andel$text$r_f(var_args){
var G__63207 = arguments.length;
switch (G__63207) {
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

andel.text.r_f.cljs$core$IFn$_invoke$arity$2 = (function (p__63208,p__63209){
var vec__63210 = p__63208;
var x1 = cljs.core.nth.call(null,vec__63210,(0),null);
var x2 = cljs.core.nth.call(null,vec__63210,(1),null);
var acc = vec__63210;
var vec__63213 = p__63209;
var y1 = cljs.core.nth.call(null,vec__63213,(0),null);
var y2 = cljs.core.nth.call(null,vec__63213,(1),null);
return [(x1 + y1),(x2 + y2)];
});

andel.text.r_f.cljs$lang$maxFixedArity = 2;

andel.text.split_count = (function andel$text$split_count(i,j,thresh){
var x = (j - i);
if((x < thresh)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)], null);
} else {
var x_h = cljs.core.quot.call(null,x,(2));
return cljs.core.concat.call(null,andel.text.split_count.call(null,i,(i + x_h),thresh),andel.text.split_count.call(null,(i + x_h),j,thresh));
}
});
andel.text.string_thresh = (64);
andel.text.string_merge_thresh = cljs.core.quot.call(null,andel.text.string_thresh,(2));
andel.text.split_string = (function andel$text$split_string(x){
if((andel.text.string_thresh <= cljs.core.count.call(null,x))){
} else {
throw (new Error("Assert failed: (<= string-thresh (count x))"));
}

return cljs.core.map.call(null,(function (p__63217){
var vec__63218 = p__63217;
var i = cljs.core.nth.call(null,vec__63218,(0),null);
var j = cljs.core.nth.call(null,vec__63218,(1),null);
return cljs.core.subs.call(null,x,i,j);
}),andel.text.split_count.call(null,(0),cljs.core.count.call(null,x),andel.text.string_thresh));
});
andel.text.tree_config = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"reducing-fn","reducing-fn",-210667109),andel.text.r_f,new cljs.core.Keyword(null,"metrics-fn","metrics-fn",-902159656),andel.text.metrics,new cljs.core.Keyword(null,"leaf-overflown?","leaf-overflown?",-1100480296),(function (x){
return (andel.text.string_thresh <= cljs.core.count.call(null,x));
}),new cljs.core.Keyword(null,"split-thresh","split-thresh",-792823054),(64),new cljs.core.Keyword(null,"split-leaf","split-leaf",2010179863),andel.text.split_string,new cljs.core.Keyword(null,"leaf-underflown?","leaf-underflown?",877072017),(function (s){
return (cljs.core.count.call(null,s) < andel.text.string_merge_thresh);
}),new cljs.core.Keyword(null,"merge-leafs","merge-leafs",472779958),(function (s1,s2){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s2)].join('');
})], null);
andel.text.mark_changed = (function andel$text$mark_changed(loc){
return cljs.core.update.call(null,loc,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.assoc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true);
});
andel.text.make_text = (function andel$text$make_text(s){
return andel.tree.root.call(null,andel.text.mark_changed.call(null,andel.tree.down.call(null,andel.tree.zipper.call(null,andel.tree.make_node.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [andel.tree.make_leaf.call(null,s,andel.text.tree_config)], null),andel.text.tree_config),andel.text.tree_config))));
});
andel.text.zipper = (function andel$text$zipper(tree){
return andel.tree.zipper.call(null,tree,andel.text.tree_config);
});
andel.text.root = andel.tree.root;
andel.text.metrics_offset = (function andel$text$metrics_offset(m){
var G__63221 = m;
if((G__63221 == null)){
return null;
} else {
return (G__63221[(0)]);
}
});
andel.text.metrics_line = (function andel$text$metrics_line(m){
var G__63222 = m;
if((G__63222 == null)){
return null;
} else {
return (G__63222[(1)]);
}
});
andel.text.by_offset = (function andel$text$by_offset(i){
return (function (acc,m){
return (i < andel.text.metrics_offset.call(null,andel.text.r_f.call(null,acc,m)));
});
});
andel.text.by_line = (function andel$text$by_line(i){
return (function (acc,m){
return (i <= andel.text.metrics_line.call(null,andel.text.r_f.call(null,acc,m)));
});
});
andel.text.offset = (function andel$text$offset(loc){
var node = loc.node;
var path = loc.path;
var acc = (function (){var G__63223 = path;
if((G__63223 == null)){
return null;
} else {
return G__63223.acc;
}
})();
var o_acc = path.o_acc;
if(cljs.core.truth_(andel.tree.end_QMARK_.call(null,loc))){
return andel.text.metrics_offset.call(null,node.metrics);
} else {
var or__41064__auto__ = andel.text.metrics_offset.call(null,o_acc);
if(cljs.core.truth_(or__41064__auto__)){
return or__41064__auto__;
} else {
var or__41064__auto____$1 = andel.text.metrics_offset.call(null,acc);
if(cljs.core.truth_(or__41064__auto____$1)){
return or__41064__auto____$1;
} else {
return (0);
}
}
}
});
andel.text.line = (function andel$text$line(loc){
var node = loc.node;
var path = loc.path;
var acc = (function (){var G__63224 = path;
if((G__63224 == null)){
return null;
} else {
return G__63224.acc;
}
})();
var o_acc = path.o_acc;
if(cljs.core.truth_(andel.tree.end_QMARK_.call(null,loc))){
return andel.text.metrics_line.call(null,node.metrics);
} else {
var or__41064__auto__ = andel.text.metrics_line.call(null,o_acc);
if(cljs.core.truth_(or__41064__auto__)){
return or__41064__auto__;
} else {
var or__41064__auto____$1 = andel.text.metrics_line.call(null,acc);
if(cljs.core.truth_(or__41064__auto____$1)){
return or__41064__auto____$1;
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
var i = clojure.string.index_of.call(null,s,c,from__$1);
if((!((i == null))) && ((i < to))){
var G__63225 = (res + (1));
var G__63226 = (i + (1));
res = G__63225;
from__$1 = G__63226;
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
var i = clojure.string.index_of.call(null,s,c,from);
if((n__$1 === (1))){
return i;
} else {
if(!((i == null))){
var G__63227 = (i + (1));
var G__63228 = (n__$1 - (1));
from = G__63227;
n__$1 = G__63228;
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
return andel.fast_zip.update_path.call(null,loc,(function (p1__63229_SHARP_){
return andel.fast_zip.assoc_o_acc.call(null,p1__63229_SHARP_,null);
}));
});
andel.text.scan_to_offset = (function andel$text$scan_to_offset(loc,i){
var loc_SINGLEQUOTE_ = andel.tree.scan.call(null,loc,andel.text.by_offset.call(null,i));
if(cljs.core.truth_(andel.tree.end_QMARK_.call(null,loc_SINGLEQUOTE_))){
return loc_SINGLEQUOTE_;
} else {
var loc_SINGLEQUOTE___$1 = andel.text.forget_acc.call(null,loc_SINGLEQUOTE_);
var o = andel.text.offset.call(null,loc_SINGLEQUOTE___$1);
var l = andel.text.line.call(null,loc_SINGLEQUOTE___$1);
return andel.fast_zip.update_path.call(null,loc_SINGLEQUOTE___$1,((function (loc_SINGLEQUOTE___$1,o,l,loc_SINGLEQUOTE_){
return (function (p1__63230_SHARP_){
return andel.fast_zip.assoc_o_acc.call(null,p1__63230_SHARP_,[i,(l + andel.text.count_of.call(null,andel.tree.node.call(null,loc_SINGLEQUOTE___$1).data,"\n",(0),(i - o)))]);
});})(loc_SINGLEQUOTE___$1,o,l,loc_SINGLEQUOTE_))
);
}
});
andel.text.retain = (function andel$text$retain(loc,l){
return andel.text.scan_to_offset.call(null,loc,(andel.text.offset.call(null,loc) + l));
});
andel.text.scan_to_line = (function andel$text$scan_to_line(loc,i){
var loc_SINGLEQUOTE_ = andel.tree.scan.call(null,loc,andel.text.by_line.call(null,i));
if(cljs.core.truth_(andel.tree.end_QMARK_.call(null,loc_SINGLEQUOTE_))){
return loc_SINGLEQUOTE_;
} else {
var loc_SINGLEQUOTE___$1 = andel.text.forget_acc.call(null,loc_SINGLEQUOTE_);
var o = andel.text.offset.call(null,loc_SINGLEQUOTE___$1);
var l = andel.text.line.call(null,loc_SINGLEQUOTE___$1);
var idx = andel.text.nth_index.call(null,andel.tree.node.call(null,loc_SINGLEQUOTE___$1).data,"\n",(i - l));
var G__63232 = andel.fast_zip.update_path.call(null,loc_SINGLEQUOTE___$1,((function (loc_SINGLEQUOTE___$1,o,l,idx,loc_SINGLEQUOTE_){
return (function (p1__63231_SHARP_){
return andel.fast_zip.assoc_o_acc.call(null,p1__63231_SHARP_,[(o + idx),i]);
});})(loc_SINGLEQUOTE___$1,o,l,idx,loc_SINGLEQUOTE_))
);
if(((0) < i)){
return andel.text.retain.call(null,G__63232,(1));
} else {
return G__63232;
}
}
});
andel.text.line_length = (function andel$text$line_length(loc){
var next_loc = andel.text.scan_to_line.call(null,loc,(andel.text.line.call(null,loc) + (1)));
var len = (andel.text.offset.call(null,next_loc) - andel.text.offset.call(null,loc));
if(cljs.core.truth_(andel.tree.end_QMARK_.call(null,next_loc))){
return len;
} else {
return (len - (1));
}
});
andel.text.lazy_text = (function andel$text$lazy_text(loc,l){
while(true){
if(((0) < l)){
if(cljs.core.truth_(andel.tree.end_QMARK_.call(null,loc))){
throw cljs.core.ex_info.call(null,"Length is out of bounds",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"l","l",1395893423),l], null));
} else {
if(cljs.core.truth_(andel.tree.branch_QMARK_.call(null,loc))){
var G__63233 = andel.tree.down.call(null,loc);
var G__63234 = l;
loc = G__63233;
l = G__63234;
continue;
} else {
var i = andel.text.offset.call(null,loc);
var text = andel.tree.node.call(null,loc).data;
var base_offset = andel.text.metrics_offset.call(null,andel.tree.loc_acc.call(null,loc));
var start = (i - base_offset);
var end = (function (){var x__41409__auto__ = cljs.core.count.call(null,text);
var y__41410__auto__ = (start + l);
return ((x__41409__auto__ < y__41410__auto__) ? x__41409__auto__ : y__41410__auto__);
})();
var s = cljs.core.subs.call(null,text,start,end);
var s_len = cljs.core.count.call(null,s);
if((s_len < l)){
return cljs.core.cons.call(null,s,(new cljs.core.LazySeq(null,((function (loc,l,i,text,base_offset,start,end,s,s_len){
return (function (){
return andel.text.lazy_text.call(null,andel.tree.next.call(null,andel.text.forget_acc.call(null,loc)),(l - s_len));
});})(loc,l,i,text,base_offset,start,end,s,s_len))
,null,null)));
} else {
var x__41999__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__41999__auto__);
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
var or__41064__auto__ = (function (){var G__63236 = t;
var G__63236__$1 = (((G__63236 == null))?null:G__63236.metrics);
var G__63236__$2 = (((G__63236__$1 == null))?null:andel.text.metrics_line.call(null,G__63236__$1));
if((G__63236__$2 == null)){
return null;
} else {
return (G__63236__$2 + (1));
}
})();
if(cljs.core.truth_(or__41064__auto__)){
return or__41064__auto__;
} else {
return (0);
}
});
andel.text.text_length = (function andel$text$text_length(t){
var or__41064__auto__ = (function (){var G__63238 = t;
var G__63238__$1 = (((G__63238 == null))?null:G__63238.metrics);
if((G__63238__$1 == null)){
return null;
} else {
return andel.text.metrics_offset.call(null,G__63238__$1);
}
})();
if(cljs.core.truth_(or__41064__auto__)){
return or__41064__auto__;
} else {
return (0);
}
});
andel.text.text = (function andel$text$text(loc,l){
var s = "";
var lt = andel.text.lazy_text.call(null,loc,l);
while(true){
var temp__5276__auto__ = cljs.core.first.call(null,lt);
if(cljs.core.truth_(temp__5276__auto__)){
var f = temp__5276__auto__;
var G__63239 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join('');
var G__63240 = cljs.core.rest.call(null,lt);
s = G__63239;
lt = G__63240;
continue;
} else {
return s;
}
break;
}
});
andel.text.insert = (function andel$text$insert(loc,s){
while(true){
if(cljs.core.truth_(andel.tree.branch_QMARK_.call(null,loc))){
var G__63241 = andel.tree.down.call(null,loc);
var G__63242 = s;
loc = G__63241;
s = G__63242;
continue;
} else {
var i = andel.text.offset.call(null,loc);
var chunk_offset = andel.text.metrics_offset.call(null,andel.tree.loc_acc.call(null,loc));
var rel_offset = (i - chunk_offset);
return andel.text.retain.call(null,andel.tree.edit.call(null,loc,((function (loc,s,i,chunk_offset,rel_offset){
return (function (node){
var data = node.data;
return andel.tree.make_leaf.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,data,(0),rel_offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,data,rel_offset))].join(''),andel.text.tree_config);
});})(loc,s,i,chunk_offset,rel_offset))
),cljs.core.count.call(null,s));
}
break;
}
});
andel.text.delete$ = (function andel$text$delete(loc,l){
while(true){
if(cljs.core.truth_(andel.tree.branch_QMARK_.call(null,loc))){
var G__63243 = andel.tree.down.call(null,loc);
var G__63244 = l;
loc = G__63243;
l = G__63244;
continue;
} else {
var i = andel.text.offset.call(null,loc);
var chunk_offset = andel.text.metrics_offset.call(null,andel.tree.loc_acc.call(null,loc));
var rel_offset = (i - chunk_offset);
var chunk_l = cljs.core.count.call(null,andel.tree.node.call(null,loc).data);
var end = (function (){var x__41409__auto__ = chunk_l;
var y__41410__auto__ = (rel_offset + l);
return ((x__41409__auto__ < y__41410__auto__) ? x__41409__auto__ : y__41410__auto__);
})();
var next_loc = (((cljs.core._EQ_.call(null,rel_offset,(0))) && (cljs.core._EQ_.call(null,end,chunk_l)))?andel.tree.remove.call(null,andel.text.forget_acc.call(null,loc)):andel.text.scan_to_offset.call(null,andel.tree.edit.call(null,loc,((function (loc,l,i,chunk_offset,rel_offset,chunk_l,end){
return (function (node){
var s = node.data;
return andel.tree.make_leaf.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(0),rel_offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,end))].join(''),andel.text.tree_config);
});})(loc,l,i,chunk_offset,rel_offset,chunk_l,end))
),i));
var deleted_c = (end - rel_offset);
if((deleted_c < l)){
var G__63245 = next_loc;
var G__63246 = (l - deleted_c);
loc = G__63245;
l = G__63246;
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
if(cljs.core.array_QMARK_.call(null,t.children)){
return cljs.core.assoc.call(null,t,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.vec.call(null,cljs.core.map.call(null,andel.text.debug_tree,t.children)));
} else {
return t;
}
});
andel.text.play = (function andel$text$play(t,operation){
return andel.text.root.call(null,cljs.core.reduce.call(null,(function (loc,p__63247){
var vec__63248 = p__63247;
var code = cljs.core.nth.call(null,vec__63248,(0),null);
var arg = cljs.core.nth.call(null,vec__63248,(1),null);
var G__63251 = code;
var G__63251__$1 = (((G__63251 instanceof cljs.core.Keyword))?G__63251.fqn:null);
switch (G__63251__$1) {
case "retain":
return andel.text.retain.call(null,loc,arg);

break;
case "insert":
return andel.text.insert.call(null,loc,arg);

break;
case "delete":
return andel.text.delete$.call(null,loc,((typeof arg === 'string')?cljs.core.count.call(null,arg):arg));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63251__$1)].join('')));

}
}),andel.text.zipper.call(null,t),operation));
});
andel.text.line_text = (function andel$text$line_text(t,i){
var loc = andel.text.scan_to_line.call(null,andel.text.zipper.call(null,t),i);
return andel.text.text.call(null,loc,andel.text.line_length.call(null,loc));
});

//# sourceMappingURL=text.js.map?rel=1504289159281