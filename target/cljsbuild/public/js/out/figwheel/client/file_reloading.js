// Compiled by ClojureScript 1.9.671 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__41064__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__41064__auto__){
return or__41064__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__41064__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["svgpan.SvgPan",null,"far.out",null,"cljs.nodejs",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__41064__auto__)){
return or__41064__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__66136_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__66136_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__66137 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__66138 = null;
var count__66139 = (0);
var i__66140 = (0);
while(true){
if((i__66140 < count__66139)){
var n = cljs.core._nth.call(null,chunk__66138,i__66140);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__66141 = seq__66137;
var G__66142 = chunk__66138;
var G__66143 = count__66139;
var G__66144 = (i__66140 + (1));
seq__66137 = G__66141;
chunk__66138 = G__66142;
count__66139 = G__66143;
i__66140 = G__66144;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__66137);
if(temp__5278__auto__){
var seq__66137__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66137__$1)){
var c__41976__auto__ = cljs.core.chunk_first.call(null,seq__66137__$1);
var G__66145 = cljs.core.chunk_rest.call(null,seq__66137__$1);
var G__66146 = c__41976__auto__;
var G__66147 = cljs.core.count.call(null,c__41976__auto__);
var G__66148 = (0);
seq__66137 = G__66145;
chunk__66138 = G__66146;
count__66139 = G__66147;
i__66140 = G__66148;
continue;
} else {
var n = cljs.core.first.call(null,seq__66137__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__66149 = cljs.core.next.call(null,seq__66137__$1);
var G__66150 = null;
var G__66151 = (0);
var G__66152 = (0);
seq__66137 = G__66149;
chunk__66138 = G__66150;
count__66139 = G__66151;
i__66140 = G__66152;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__66162_66170 = cljs.core.seq.call(null,deps);
var chunk__66163_66171 = null;
var count__66164_66172 = (0);
var i__66165_66173 = (0);
while(true){
if((i__66165_66173 < count__66164_66172)){
var dep_66174 = cljs.core._nth.call(null,chunk__66163_66171,i__66165_66173);
topo_sort_helper_STAR_.call(null,dep_66174,(depth + (1)),state);

var G__66175 = seq__66162_66170;
var G__66176 = chunk__66163_66171;
var G__66177 = count__66164_66172;
var G__66178 = (i__66165_66173 + (1));
seq__66162_66170 = G__66175;
chunk__66163_66171 = G__66176;
count__66164_66172 = G__66177;
i__66165_66173 = G__66178;
continue;
} else {
var temp__5278__auto___66179 = cljs.core.seq.call(null,seq__66162_66170);
if(temp__5278__auto___66179){
var seq__66162_66180__$1 = temp__5278__auto___66179;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66162_66180__$1)){
var c__41976__auto___66181 = cljs.core.chunk_first.call(null,seq__66162_66180__$1);
var G__66182 = cljs.core.chunk_rest.call(null,seq__66162_66180__$1);
var G__66183 = c__41976__auto___66181;
var G__66184 = cljs.core.count.call(null,c__41976__auto___66181);
var G__66185 = (0);
seq__66162_66170 = G__66182;
chunk__66163_66171 = G__66183;
count__66164_66172 = G__66184;
i__66165_66173 = G__66185;
continue;
} else {
var dep_66186 = cljs.core.first.call(null,seq__66162_66180__$1);
topo_sort_helper_STAR_.call(null,dep_66186,(depth + (1)),state);

var G__66187 = cljs.core.next.call(null,seq__66162_66180__$1);
var G__66188 = null;
var G__66189 = (0);
var G__66190 = (0);
seq__66162_66170 = G__66187;
chunk__66163_66171 = G__66188;
count__66164_66172 = G__66189;
i__66165_66173 = G__66190;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__66166){
var vec__66167 = p__66166;
var seq__66168 = cljs.core.seq.call(null,vec__66167);
var first__66169 = cljs.core.first.call(null,seq__66168);
var seq__66168__$1 = cljs.core.next.call(null,seq__66168);
var x = first__66169;
var xs = seq__66168__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__66167,seq__66168,first__66169,seq__66168__$1,x,xs,get_deps__$1){
return (function (p1__66153_SHARP_){
return clojure.set.difference.call(null,p1__66153_SHARP_,x);
});})(vec__66167,seq__66168,first__66169,seq__66168__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__66191 = cljs.core.seq.call(null,provides);
var chunk__66192 = null;
var count__66193 = (0);
var i__66194 = (0);
while(true){
if((i__66194 < count__66193)){
var prov = cljs.core._nth.call(null,chunk__66192,i__66194);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__66195_66203 = cljs.core.seq.call(null,requires);
var chunk__66196_66204 = null;
var count__66197_66205 = (0);
var i__66198_66206 = (0);
while(true){
if((i__66198_66206 < count__66197_66205)){
var req_66207 = cljs.core._nth.call(null,chunk__66196_66204,i__66198_66206);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_66207,prov);

var G__66208 = seq__66195_66203;
var G__66209 = chunk__66196_66204;
var G__66210 = count__66197_66205;
var G__66211 = (i__66198_66206 + (1));
seq__66195_66203 = G__66208;
chunk__66196_66204 = G__66209;
count__66197_66205 = G__66210;
i__66198_66206 = G__66211;
continue;
} else {
var temp__5278__auto___66212 = cljs.core.seq.call(null,seq__66195_66203);
if(temp__5278__auto___66212){
var seq__66195_66213__$1 = temp__5278__auto___66212;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66195_66213__$1)){
var c__41976__auto___66214 = cljs.core.chunk_first.call(null,seq__66195_66213__$1);
var G__66215 = cljs.core.chunk_rest.call(null,seq__66195_66213__$1);
var G__66216 = c__41976__auto___66214;
var G__66217 = cljs.core.count.call(null,c__41976__auto___66214);
var G__66218 = (0);
seq__66195_66203 = G__66215;
chunk__66196_66204 = G__66216;
count__66197_66205 = G__66217;
i__66198_66206 = G__66218;
continue;
} else {
var req_66219 = cljs.core.first.call(null,seq__66195_66213__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_66219,prov);

var G__66220 = cljs.core.next.call(null,seq__66195_66213__$1);
var G__66221 = null;
var G__66222 = (0);
var G__66223 = (0);
seq__66195_66203 = G__66220;
chunk__66196_66204 = G__66221;
count__66197_66205 = G__66222;
i__66198_66206 = G__66223;
continue;
}
} else {
}
}
break;
}

var G__66224 = seq__66191;
var G__66225 = chunk__66192;
var G__66226 = count__66193;
var G__66227 = (i__66194 + (1));
seq__66191 = G__66224;
chunk__66192 = G__66225;
count__66193 = G__66226;
i__66194 = G__66227;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__66191);
if(temp__5278__auto__){
var seq__66191__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66191__$1)){
var c__41976__auto__ = cljs.core.chunk_first.call(null,seq__66191__$1);
var G__66228 = cljs.core.chunk_rest.call(null,seq__66191__$1);
var G__66229 = c__41976__auto__;
var G__66230 = cljs.core.count.call(null,c__41976__auto__);
var G__66231 = (0);
seq__66191 = G__66228;
chunk__66192 = G__66229;
count__66193 = G__66230;
i__66194 = G__66231;
continue;
} else {
var prov = cljs.core.first.call(null,seq__66191__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__66199_66232 = cljs.core.seq.call(null,requires);
var chunk__66200_66233 = null;
var count__66201_66234 = (0);
var i__66202_66235 = (0);
while(true){
if((i__66202_66235 < count__66201_66234)){
var req_66236 = cljs.core._nth.call(null,chunk__66200_66233,i__66202_66235);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_66236,prov);

var G__66237 = seq__66199_66232;
var G__66238 = chunk__66200_66233;
var G__66239 = count__66201_66234;
var G__66240 = (i__66202_66235 + (1));
seq__66199_66232 = G__66237;
chunk__66200_66233 = G__66238;
count__66201_66234 = G__66239;
i__66202_66235 = G__66240;
continue;
} else {
var temp__5278__auto___66241__$1 = cljs.core.seq.call(null,seq__66199_66232);
if(temp__5278__auto___66241__$1){
var seq__66199_66242__$1 = temp__5278__auto___66241__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66199_66242__$1)){
var c__41976__auto___66243 = cljs.core.chunk_first.call(null,seq__66199_66242__$1);
var G__66244 = cljs.core.chunk_rest.call(null,seq__66199_66242__$1);
var G__66245 = c__41976__auto___66243;
var G__66246 = cljs.core.count.call(null,c__41976__auto___66243);
var G__66247 = (0);
seq__66199_66232 = G__66244;
chunk__66200_66233 = G__66245;
count__66201_66234 = G__66246;
i__66202_66235 = G__66247;
continue;
} else {
var req_66248 = cljs.core.first.call(null,seq__66199_66242__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_66248,prov);

var G__66249 = cljs.core.next.call(null,seq__66199_66242__$1);
var G__66250 = null;
var G__66251 = (0);
var G__66252 = (0);
seq__66199_66232 = G__66249;
chunk__66200_66233 = G__66250;
count__66201_66234 = G__66251;
i__66202_66235 = G__66252;
continue;
}
} else {
}
}
break;
}

var G__66253 = cljs.core.next.call(null,seq__66191__$1);
var G__66254 = null;
var G__66255 = (0);
var G__66256 = (0);
seq__66191 = G__66253;
chunk__66192 = G__66254;
count__66193 = G__66255;
i__66194 = G__66256;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__66257_66261 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__66258_66262 = null;
var count__66259_66263 = (0);
var i__66260_66264 = (0);
while(true){
if((i__66260_66264 < count__66259_66263)){
var ns_66265 = cljs.core._nth.call(null,chunk__66258_66262,i__66260_66264);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_66265);

var G__66266 = seq__66257_66261;
var G__66267 = chunk__66258_66262;
var G__66268 = count__66259_66263;
var G__66269 = (i__66260_66264 + (1));
seq__66257_66261 = G__66266;
chunk__66258_66262 = G__66267;
count__66259_66263 = G__66268;
i__66260_66264 = G__66269;
continue;
} else {
var temp__5278__auto___66270 = cljs.core.seq.call(null,seq__66257_66261);
if(temp__5278__auto___66270){
var seq__66257_66271__$1 = temp__5278__auto___66270;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66257_66271__$1)){
var c__41976__auto___66272 = cljs.core.chunk_first.call(null,seq__66257_66271__$1);
var G__66273 = cljs.core.chunk_rest.call(null,seq__66257_66271__$1);
var G__66274 = c__41976__auto___66272;
var G__66275 = cljs.core.count.call(null,c__41976__auto___66272);
var G__66276 = (0);
seq__66257_66261 = G__66273;
chunk__66258_66262 = G__66274;
count__66259_66263 = G__66275;
i__66260_66264 = G__66276;
continue;
} else {
var ns_66277 = cljs.core.first.call(null,seq__66257_66271__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_66277);

var G__66278 = cljs.core.next.call(null,seq__66257_66271__$1);
var G__66279 = null;
var G__66280 = (0);
var G__66281 = (0);
seq__66257_66261 = G__66278;
chunk__66258_66262 = G__66279;
count__66259_66263 = G__66280;
i__66260_66264 = G__66281;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__41064__auto__ = goog.require__;
if(cljs.core.truth_(or__41064__auto__)){
return or__41064__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__66282__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__66282 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66283__i = 0, G__66283__a = new Array(arguments.length -  0);
while (G__66283__i < G__66283__a.length) {G__66283__a[G__66283__i] = arguments[G__66283__i + 0]; ++G__66283__i;}
  args = new cljs.core.IndexedSeq(G__66283__a,0,null);
} 
return G__66282__delegate.call(this,args);};
G__66282.cljs$lang$maxFixedArity = 0;
G__66282.cljs$lang$applyTo = (function (arglist__66284){
var args = cljs.core.seq(arglist__66284);
return G__66282__delegate(args);
});
G__66282.cljs$core$IFn$_invoke$arity$variadic = G__66282__delegate;
return G__66282;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__66285 = cljs.core._EQ_;
var expr__66286 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__66285.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__66286))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__66285,expr__66286){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__66285,expr__66286))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__66285,expr__66286){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e66288){if((e66288 instanceof Error)){
var e = e66288;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e66288;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__66285,expr__66286))
} else {
if(cljs.core.truth_(pred__66285.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__66286))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__66285.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__66286))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__66285.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__66286))){
return ((function (pred__66285,expr__66286){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e66289){if((e66289 instanceof Error)){
var e = e66289;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e66289;

}
}})());
});
;})(pred__66285,expr__66286))
} else {
return ((function (pred__66285,expr__66286){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__66285,expr__66286))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__66290,callback){
var map__66291 = p__66290;
var map__66291__$1 = ((((!((map__66291 == null)))?((((map__66291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66291.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66291):map__66291);
var file_msg = map__66291__$1;
var request_url = cljs.core.get.call(null,map__66291__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__66291,map__66291__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__66291,map__66291__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__44106__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44106__auto__){
return (function (){
var f__44107__auto__ = (function (){var switch__44016__auto__ = ((function (c__44106__auto__){
return (function (state_66315){
var state_val_66316 = (state_66315[(1)]);
if((state_val_66316 === (7))){
var inst_66311 = (state_66315[(2)]);
var state_66315__$1 = state_66315;
var statearr_66317_66334 = state_66315__$1;
(statearr_66317_66334[(2)] = inst_66311);

(statearr_66317_66334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66316 === (1))){
var state_66315__$1 = state_66315;
var statearr_66318_66335 = state_66315__$1;
(statearr_66318_66335[(2)] = null);

(statearr_66318_66335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66316 === (4))){
var inst_66295 = (state_66315[(7)]);
var inst_66295__$1 = (state_66315[(2)]);
var state_66315__$1 = (function (){var statearr_66319 = state_66315;
(statearr_66319[(7)] = inst_66295__$1);

return statearr_66319;
})();
if(cljs.core.truth_(inst_66295__$1)){
var statearr_66320_66336 = state_66315__$1;
(statearr_66320_66336[(1)] = (5));

} else {
var statearr_66321_66337 = state_66315__$1;
(statearr_66321_66337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66316 === (6))){
var state_66315__$1 = state_66315;
var statearr_66322_66338 = state_66315__$1;
(statearr_66322_66338[(2)] = null);

(statearr_66322_66338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66316 === (3))){
var inst_66313 = (state_66315[(2)]);
var state_66315__$1 = state_66315;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66315__$1,inst_66313);
} else {
if((state_val_66316 === (2))){
var state_66315__$1 = state_66315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66315__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_66316 === (11))){
var inst_66307 = (state_66315[(2)]);
var state_66315__$1 = (function (){var statearr_66323 = state_66315;
(statearr_66323[(8)] = inst_66307);

return statearr_66323;
})();
var statearr_66324_66339 = state_66315__$1;
(statearr_66324_66339[(2)] = null);

(statearr_66324_66339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66316 === (9))){
var inst_66299 = (state_66315[(9)]);
var inst_66301 = (state_66315[(10)]);
var inst_66303 = inst_66301.call(null,inst_66299);
var state_66315__$1 = state_66315;
var statearr_66325_66340 = state_66315__$1;
(statearr_66325_66340[(2)] = inst_66303);

(statearr_66325_66340[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66316 === (5))){
var inst_66295 = (state_66315[(7)]);
var inst_66297 = figwheel.client.file_reloading.blocking_load.call(null,inst_66295);
var state_66315__$1 = state_66315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66315__$1,(8),inst_66297);
} else {
if((state_val_66316 === (10))){
var inst_66299 = (state_66315[(9)]);
var inst_66305 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_66299);
var state_66315__$1 = state_66315;
var statearr_66326_66341 = state_66315__$1;
(statearr_66326_66341[(2)] = inst_66305);

(statearr_66326_66341[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66316 === (8))){
var inst_66295 = (state_66315[(7)]);
var inst_66301 = (state_66315[(10)]);
var inst_66299 = (state_66315[(2)]);
var inst_66300 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_66301__$1 = cljs.core.get.call(null,inst_66300,inst_66295);
var state_66315__$1 = (function (){var statearr_66327 = state_66315;
(statearr_66327[(9)] = inst_66299);

(statearr_66327[(10)] = inst_66301__$1);

return statearr_66327;
})();
if(cljs.core.truth_(inst_66301__$1)){
var statearr_66328_66342 = state_66315__$1;
(statearr_66328_66342[(1)] = (9));

} else {
var statearr_66329_66343 = state_66315__$1;
(statearr_66329_66343[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
});})(c__44106__auto__))
;
return ((function (switch__44016__auto__,c__44106__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__44017__auto__ = null;
var figwheel$client$file_reloading$state_machine__44017__auto____0 = (function (){
var statearr_66330 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_66330[(0)] = figwheel$client$file_reloading$state_machine__44017__auto__);

(statearr_66330[(1)] = (1));

return statearr_66330;
});
var figwheel$client$file_reloading$state_machine__44017__auto____1 = (function (state_66315){
while(true){
var ret_value__44018__auto__ = (function (){try{while(true){
var result__44019__auto__ = switch__44016__auto__.call(null,state_66315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44019__auto__;
}
break;
}
}catch (e66331){if((e66331 instanceof Object)){
var ex__44020__auto__ = e66331;
var statearr_66332_66344 = state_66315;
(statearr_66332_66344[(5)] = ex__44020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66345 = state_66315;
state_66315 = G__66345;
continue;
} else {
return ret_value__44018__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__44017__auto__ = function(state_66315){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__44017__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__44017__auto____1.call(this,state_66315);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__44017__auto____0;
figwheel$client$file_reloading$state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__44017__auto____1;
return figwheel$client$file_reloading$state_machine__44017__auto__;
})()
;})(switch__44016__auto__,c__44106__auto__))
})();
var state__44108__auto__ = (function (){var statearr_66333 = f__44107__auto__.call(null);
(statearr_66333[(6)] = c__44106__auto__);

return statearr_66333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44108__auto__);
});})(c__44106__auto__))
);

return c__44106__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__66346,callback){
var map__66347 = p__66346;
var map__66347__$1 = ((((!((map__66347 == null)))?((((map__66347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66347.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66347):map__66347);
var file_msg = map__66347__$1;
var namespace = cljs.core.get.call(null,map__66347__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__66347,map__66347__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__66347,map__66347__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__66349){
var map__66350 = p__66349;
var map__66350__$1 = ((((!((map__66350 == null)))?((((map__66350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66350.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66350):map__66350);
var file_msg = map__66350__$1;
var namespace = cljs.core.get.call(null,map__66350__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__66352){
var map__66353 = p__66352;
var map__66353__$1 = ((((!((map__66353 == null)))?((((map__66353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66353.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66353):map__66353);
var file_msg = map__66353__$1;
var namespace = cljs.core.get.call(null,map__66353__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__41052__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__41052__auto__){
var or__41064__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__41064__auto__)){
return or__41064__auto__;
} else {
var or__41064__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__41064__auto____$1)){
return or__41064__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__41052__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__66355,callback){
var map__66356 = p__66355;
var map__66356__$1 = ((((!((map__66356 == null)))?((((map__66356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66356.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66356):map__66356);
var file_msg = map__66356__$1;
var request_url = cljs.core.get.call(null,map__66356__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__66356__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__44106__auto___66406 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44106__auto___66406,out){
return (function (){
var f__44107__auto__ = (function (){var switch__44016__auto__ = ((function (c__44106__auto___66406,out){
return (function (state_66391){
var state_val_66392 = (state_66391[(1)]);
if((state_val_66392 === (1))){
var inst_66365 = cljs.core.seq.call(null,files);
var inst_66366 = cljs.core.first.call(null,inst_66365);
var inst_66367 = cljs.core.next.call(null,inst_66365);
var inst_66368 = files;
var state_66391__$1 = (function (){var statearr_66393 = state_66391;
(statearr_66393[(7)] = inst_66366);

(statearr_66393[(8)] = inst_66367);

(statearr_66393[(9)] = inst_66368);

return statearr_66393;
})();
var statearr_66394_66407 = state_66391__$1;
(statearr_66394_66407[(2)] = null);

(statearr_66394_66407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66392 === (2))){
var inst_66368 = (state_66391[(9)]);
var inst_66374 = (state_66391[(10)]);
var inst_66373 = cljs.core.seq.call(null,inst_66368);
var inst_66374__$1 = cljs.core.first.call(null,inst_66373);
var inst_66375 = cljs.core.next.call(null,inst_66373);
var inst_66376 = (inst_66374__$1 == null);
var inst_66377 = cljs.core.not.call(null,inst_66376);
var state_66391__$1 = (function (){var statearr_66395 = state_66391;
(statearr_66395[(11)] = inst_66375);

(statearr_66395[(10)] = inst_66374__$1);

return statearr_66395;
})();
if(inst_66377){
var statearr_66396_66408 = state_66391__$1;
(statearr_66396_66408[(1)] = (4));

} else {
var statearr_66397_66409 = state_66391__$1;
(statearr_66397_66409[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66392 === (3))){
var inst_66389 = (state_66391[(2)]);
var state_66391__$1 = state_66391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66391__$1,inst_66389);
} else {
if((state_val_66392 === (4))){
var inst_66374 = (state_66391[(10)]);
var inst_66379 = figwheel.client.file_reloading.reload_js_file.call(null,inst_66374);
var state_66391__$1 = state_66391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66391__$1,(7),inst_66379);
} else {
if((state_val_66392 === (5))){
var inst_66385 = cljs.core.async.close_BANG_.call(null,out);
var state_66391__$1 = state_66391;
var statearr_66398_66410 = state_66391__$1;
(statearr_66398_66410[(2)] = inst_66385);

(statearr_66398_66410[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66392 === (6))){
var inst_66387 = (state_66391[(2)]);
var state_66391__$1 = state_66391;
var statearr_66399_66411 = state_66391__$1;
(statearr_66399_66411[(2)] = inst_66387);

(statearr_66399_66411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66392 === (7))){
var inst_66375 = (state_66391[(11)]);
var inst_66381 = (state_66391[(2)]);
var inst_66382 = cljs.core.async.put_BANG_.call(null,out,inst_66381);
var inst_66368 = inst_66375;
var state_66391__$1 = (function (){var statearr_66400 = state_66391;
(statearr_66400[(9)] = inst_66368);

(statearr_66400[(12)] = inst_66382);

return statearr_66400;
})();
var statearr_66401_66412 = state_66391__$1;
(statearr_66401_66412[(2)] = null);

(statearr_66401_66412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__44106__auto___66406,out))
;
return ((function (switch__44016__auto__,c__44106__auto___66406,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44017__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44017__auto____0 = (function (){
var statearr_66402 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66402[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44017__auto__);

(statearr_66402[(1)] = (1));

return statearr_66402;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44017__auto____1 = (function (state_66391){
while(true){
var ret_value__44018__auto__ = (function (){try{while(true){
var result__44019__auto__ = switch__44016__auto__.call(null,state_66391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44019__auto__;
}
break;
}
}catch (e66403){if((e66403 instanceof Object)){
var ex__44020__auto__ = e66403;
var statearr_66404_66413 = state_66391;
(statearr_66404_66413[(5)] = ex__44020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66414 = state_66391;
state_66391 = G__66414;
continue;
} else {
return ret_value__44018__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44017__auto__ = function(state_66391){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44017__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44017__auto____1.call(this,state_66391);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44017__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44017__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44017__auto__;
})()
;})(switch__44016__auto__,c__44106__auto___66406,out))
})();
var state__44108__auto__ = (function (){var statearr_66405 = f__44107__auto__.call(null);
(statearr_66405[(6)] = c__44106__auto___66406);

return statearr_66405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44108__auto__);
});})(c__44106__auto___66406,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__66415,opts){
var map__66416 = p__66415;
var map__66416__$1 = ((((!((map__66416 == null)))?((((map__66416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66416.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66416):map__66416);
var eval_body = cljs.core.get.call(null,map__66416__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__66416__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__41052__auto__ = eval_body;
if(cljs.core.truth_(and__41052__auto__)){
return typeof eval_body === 'string';
} else {
return and__41052__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e66418){var e = e66418;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5276__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__66419_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__66419_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5276__auto__)){
var file_msg = temp__5276__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__66420){
var vec__66421 = p__66420;
var k = cljs.core.nth.call(null,vec__66421,(0),null);
var v = cljs.core.nth.call(null,vec__66421,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__66424){
var vec__66425 = p__66424;
var k = cljs.core.nth.call(null,vec__66425,(0),null);
var v = cljs.core.nth.call(null,vec__66425,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__66431,p__66432){
var map__66433 = p__66431;
var map__66433__$1 = ((((!((map__66433 == null)))?((((map__66433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66433.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66433):map__66433);
var opts = map__66433__$1;
var before_jsload = cljs.core.get.call(null,map__66433__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__66433__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__66433__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__66434 = p__66432;
var map__66434__$1 = ((((!((map__66434 == null)))?((((map__66434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66434.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66434):map__66434);
var msg = map__66434__$1;
var files = cljs.core.get.call(null,map__66434__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__66434__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__66434__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__44106__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44106__auto__,map__66433,map__66433__$1,opts,before_jsload,on_jsload,reload_dependents,map__66434,map__66434__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__44107__auto__ = (function (){var switch__44016__auto__ = ((function (c__44106__auto__,map__66433,map__66433__$1,opts,before_jsload,on_jsload,reload_dependents,map__66434,map__66434__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_66588){
var state_val_66589 = (state_66588[(1)]);
if((state_val_66589 === (7))){
var inst_66449 = (state_66588[(7)]);
var inst_66448 = (state_66588[(8)]);
var inst_66450 = (state_66588[(9)]);
var inst_66451 = (state_66588[(10)]);
var inst_66456 = cljs.core._nth.call(null,inst_66449,inst_66451);
var inst_66457 = figwheel.client.file_reloading.eval_body.call(null,inst_66456,opts);
var inst_66458 = (inst_66451 + (1));
var tmp66590 = inst_66449;
var tmp66591 = inst_66448;
var tmp66592 = inst_66450;
var inst_66448__$1 = tmp66591;
var inst_66449__$1 = tmp66590;
var inst_66450__$1 = tmp66592;
var inst_66451__$1 = inst_66458;
var state_66588__$1 = (function (){var statearr_66593 = state_66588;
(statearr_66593[(7)] = inst_66449__$1);

(statearr_66593[(8)] = inst_66448__$1);

(statearr_66593[(9)] = inst_66450__$1);

(statearr_66593[(11)] = inst_66457);

(statearr_66593[(10)] = inst_66451__$1);

return statearr_66593;
})();
var statearr_66594_66677 = state_66588__$1;
(statearr_66594_66677[(2)] = null);

(statearr_66594_66677[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (20))){
var inst_66491 = (state_66588[(12)]);
var inst_66499 = figwheel.client.file_reloading.sort_files.call(null,inst_66491);
var state_66588__$1 = state_66588;
var statearr_66595_66678 = state_66588__$1;
(statearr_66595_66678[(2)] = inst_66499);

(statearr_66595_66678[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (27))){
var state_66588__$1 = state_66588;
var statearr_66596_66679 = state_66588__$1;
(statearr_66596_66679[(2)] = null);

(statearr_66596_66679[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (1))){
var inst_66440 = (state_66588[(13)]);
var inst_66437 = before_jsload.call(null,files);
var inst_66438 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_66439 = (function (){return ((function (inst_66440,inst_66437,inst_66438,state_val_66589,c__44106__auto__,map__66433,map__66433__$1,opts,before_jsload,on_jsload,reload_dependents,map__66434,map__66434__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__66428_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__66428_SHARP_);
});
;})(inst_66440,inst_66437,inst_66438,state_val_66589,c__44106__auto__,map__66433,map__66433__$1,opts,before_jsload,on_jsload,reload_dependents,map__66434,map__66434__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66440__$1 = cljs.core.filter.call(null,inst_66439,files);
var inst_66441 = cljs.core.not_empty.call(null,inst_66440__$1);
var state_66588__$1 = (function (){var statearr_66597 = state_66588;
(statearr_66597[(13)] = inst_66440__$1);

(statearr_66597[(14)] = inst_66438);

(statearr_66597[(15)] = inst_66437);

return statearr_66597;
})();
if(cljs.core.truth_(inst_66441)){
var statearr_66598_66680 = state_66588__$1;
(statearr_66598_66680[(1)] = (2));

} else {
var statearr_66599_66681 = state_66588__$1;
(statearr_66599_66681[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (24))){
var state_66588__$1 = state_66588;
var statearr_66600_66682 = state_66588__$1;
(statearr_66600_66682[(2)] = null);

(statearr_66600_66682[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (39))){
var inst_66541 = (state_66588[(16)]);
var state_66588__$1 = state_66588;
var statearr_66601_66683 = state_66588__$1;
(statearr_66601_66683[(2)] = inst_66541);

(statearr_66601_66683[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (46))){
var inst_66583 = (state_66588[(2)]);
var state_66588__$1 = state_66588;
var statearr_66602_66684 = state_66588__$1;
(statearr_66602_66684[(2)] = inst_66583);

(statearr_66602_66684[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (4))){
var inst_66485 = (state_66588[(2)]);
var inst_66486 = cljs.core.List.EMPTY;
var inst_66487 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_66486);
var inst_66488 = (function (){return ((function (inst_66485,inst_66486,inst_66487,state_val_66589,c__44106__auto__,map__66433,map__66433__$1,opts,before_jsload,on_jsload,reload_dependents,map__66434,map__66434__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__66429_SHARP_){
var and__41052__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__66429_SHARP_);
if(cljs.core.truth_(and__41052__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__66429_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__66429_SHARP_)));
} else {
return and__41052__auto__;
}
});
;})(inst_66485,inst_66486,inst_66487,state_val_66589,c__44106__auto__,map__66433,map__66433__$1,opts,before_jsload,on_jsload,reload_dependents,map__66434,map__66434__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66489 = cljs.core.filter.call(null,inst_66488,files);
var inst_66490 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_66491 = cljs.core.concat.call(null,inst_66489,inst_66490);
var state_66588__$1 = (function (){var statearr_66603 = state_66588;
(statearr_66603[(17)] = inst_66487);

(statearr_66603[(12)] = inst_66491);

(statearr_66603[(18)] = inst_66485);

return statearr_66603;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_66604_66685 = state_66588__$1;
(statearr_66604_66685[(1)] = (16));

} else {
var statearr_66605_66686 = state_66588__$1;
(statearr_66605_66686[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (15))){
var inst_66475 = (state_66588[(2)]);
var state_66588__$1 = state_66588;
var statearr_66606_66687 = state_66588__$1;
(statearr_66606_66687[(2)] = inst_66475);

(statearr_66606_66687[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (21))){
var inst_66501 = (state_66588[(19)]);
var inst_66501__$1 = (state_66588[(2)]);
var inst_66502 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_66501__$1);
var state_66588__$1 = (function (){var statearr_66607 = state_66588;
(statearr_66607[(19)] = inst_66501__$1);

return statearr_66607;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66588__$1,(22),inst_66502);
} else {
if((state_val_66589 === (31))){
var inst_66586 = (state_66588[(2)]);
var state_66588__$1 = state_66588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66588__$1,inst_66586);
} else {
if((state_val_66589 === (32))){
var inst_66541 = (state_66588[(16)]);
var inst_66546 = inst_66541.cljs$lang$protocol_mask$partition0$;
var inst_66547 = (inst_66546 & (64));
var inst_66548 = inst_66541.cljs$core$ISeq$;
var inst_66549 = (cljs.core.PROTOCOL_SENTINEL === inst_66548);
var inst_66550 = (inst_66547) || (inst_66549);
var state_66588__$1 = state_66588;
if(cljs.core.truth_(inst_66550)){
var statearr_66608_66688 = state_66588__$1;
(statearr_66608_66688[(1)] = (35));

} else {
var statearr_66609_66689 = state_66588__$1;
(statearr_66609_66689[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (40))){
var inst_66563 = (state_66588[(20)]);
var inst_66562 = (state_66588[(2)]);
var inst_66563__$1 = cljs.core.get.call(null,inst_66562,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_66564 = cljs.core.get.call(null,inst_66562,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_66565 = cljs.core.not_empty.call(null,inst_66563__$1);
var state_66588__$1 = (function (){var statearr_66610 = state_66588;
(statearr_66610[(21)] = inst_66564);

(statearr_66610[(20)] = inst_66563__$1);

return statearr_66610;
})();
if(cljs.core.truth_(inst_66565)){
var statearr_66611_66690 = state_66588__$1;
(statearr_66611_66690[(1)] = (41));

} else {
var statearr_66612_66691 = state_66588__$1;
(statearr_66612_66691[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (33))){
var state_66588__$1 = state_66588;
var statearr_66613_66692 = state_66588__$1;
(statearr_66613_66692[(2)] = false);

(statearr_66613_66692[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (13))){
var inst_66461 = (state_66588[(22)]);
var inst_66465 = cljs.core.chunk_first.call(null,inst_66461);
var inst_66466 = cljs.core.chunk_rest.call(null,inst_66461);
var inst_66467 = cljs.core.count.call(null,inst_66465);
var inst_66448 = inst_66466;
var inst_66449 = inst_66465;
var inst_66450 = inst_66467;
var inst_66451 = (0);
var state_66588__$1 = (function (){var statearr_66614 = state_66588;
(statearr_66614[(7)] = inst_66449);

(statearr_66614[(8)] = inst_66448);

(statearr_66614[(9)] = inst_66450);

(statearr_66614[(10)] = inst_66451);

return statearr_66614;
})();
var statearr_66615_66693 = state_66588__$1;
(statearr_66615_66693[(2)] = null);

(statearr_66615_66693[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (22))){
var inst_66505 = (state_66588[(23)]);
var inst_66504 = (state_66588[(24)]);
var inst_66501 = (state_66588[(19)]);
var inst_66509 = (state_66588[(25)]);
var inst_66504__$1 = (state_66588[(2)]);
var inst_66505__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_66504__$1);
var inst_66506 = (function (){var all_files = inst_66501;
var res_SINGLEQUOTE_ = inst_66504__$1;
var res = inst_66505__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_66505,inst_66504,inst_66501,inst_66509,inst_66504__$1,inst_66505__$1,state_val_66589,c__44106__auto__,map__66433,map__66433__$1,opts,before_jsload,on_jsload,reload_dependents,map__66434,map__66434__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__66430_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__66430_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_66505,inst_66504,inst_66501,inst_66509,inst_66504__$1,inst_66505__$1,state_val_66589,c__44106__auto__,map__66433,map__66433__$1,opts,before_jsload,on_jsload,reload_dependents,map__66434,map__66434__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66507 = cljs.core.filter.call(null,inst_66506,inst_66504__$1);
var inst_66508 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_66509__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_66508);
var inst_66510 = cljs.core.not_empty.call(null,inst_66509__$1);
var state_66588__$1 = (function (){var statearr_66616 = state_66588;
(statearr_66616[(23)] = inst_66505__$1);

(statearr_66616[(24)] = inst_66504__$1);

(statearr_66616[(25)] = inst_66509__$1);

(statearr_66616[(26)] = inst_66507);

return statearr_66616;
})();
if(cljs.core.truth_(inst_66510)){
var statearr_66617_66694 = state_66588__$1;
(statearr_66617_66694[(1)] = (23));

} else {
var statearr_66618_66695 = state_66588__$1;
(statearr_66618_66695[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (36))){
var state_66588__$1 = state_66588;
var statearr_66619_66696 = state_66588__$1;
(statearr_66619_66696[(2)] = false);

(statearr_66619_66696[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (41))){
var inst_66563 = (state_66588[(20)]);
var inst_66567 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_66568 = cljs.core.map.call(null,inst_66567,inst_66563);
var inst_66569 = cljs.core.pr_str.call(null,inst_66568);
var inst_66570 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_66569)].join('');
var inst_66571 = figwheel.client.utils.log.call(null,inst_66570);
var state_66588__$1 = state_66588;
var statearr_66620_66697 = state_66588__$1;
(statearr_66620_66697[(2)] = inst_66571);

(statearr_66620_66697[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (43))){
var inst_66564 = (state_66588[(21)]);
var inst_66574 = (state_66588[(2)]);
var inst_66575 = cljs.core.not_empty.call(null,inst_66564);
var state_66588__$1 = (function (){var statearr_66621 = state_66588;
(statearr_66621[(27)] = inst_66574);

return statearr_66621;
})();
if(cljs.core.truth_(inst_66575)){
var statearr_66622_66698 = state_66588__$1;
(statearr_66622_66698[(1)] = (44));

} else {
var statearr_66623_66699 = state_66588__$1;
(statearr_66623_66699[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (29))){
var inst_66505 = (state_66588[(23)]);
var inst_66504 = (state_66588[(24)]);
var inst_66501 = (state_66588[(19)]);
var inst_66509 = (state_66588[(25)]);
var inst_66541 = (state_66588[(16)]);
var inst_66507 = (state_66588[(26)]);
var inst_66537 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_66540 = (function (){var all_files = inst_66501;
var res_SINGLEQUOTE_ = inst_66504;
var res = inst_66505;
var files_not_loaded = inst_66507;
var dependencies_that_loaded = inst_66509;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66505,inst_66504,inst_66501,inst_66509,inst_66541,inst_66507,inst_66537,state_val_66589,c__44106__auto__,map__66433,map__66433__$1,opts,before_jsload,on_jsload,reload_dependents,map__66434,map__66434__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__66539){
var map__66624 = p__66539;
var map__66624__$1 = ((((!((map__66624 == null)))?((((map__66624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66624.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66624):map__66624);
var namespace = cljs.core.get.call(null,map__66624__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66505,inst_66504,inst_66501,inst_66509,inst_66541,inst_66507,inst_66537,state_val_66589,c__44106__auto__,map__66433,map__66433__$1,opts,before_jsload,on_jsload,reload_dependents,map__66434,map__66434__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66541__$1 = cljs.core.group_by.call(null,inst_66540,inst_66507);
var inst_66543 = (inst_66541__$1 == null);
var inst_66544 = cljs.core.not.call(null,inst_66543);
var state_66588__$1 = (function (){var statearr_66626 = state_66588;
(statearr_66626[(28)] = inst_66537);

(statearr_66626[(16)] = inst_66541__$1);

return statearr_66626;
})();
if(inst_66544){
var statearr_66627_66700 = state_66588__$1;
(statearr_66627_66700[(1)] = (32));

} else {
var statearr_66628_66701 = state_66588__$1;
(statearr_66628_66701[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (44))){
var inst_66564 = (state_66588[(21)]);
var inst_66577 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_66564);
var inst_66578 = cljs.core.pr_str.call(null,inst_66577);
var inst_66579 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_66578)].join('');
var inst_66580 = figwheel.client.utils.log.call(null,inst_66579);
var state_66588__$1 = state_66588;
var statearr_66629_66702 = state_66588__$1;
(statearr_66629_66702[(2)] = inst_66580);

(statearr_66629_66702[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (6))){
var inst_66482 = (state_66588[(2)]);
var state_66588__$1 = state_66588;
var statearr_66630_66703 = state_66588__$1;
(statearr_66630_66703[(2)] = inst_66482);

(statearr_66630_66703[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (28))){
var inst_66507 = (state_66588[(26)]);
var inst_66534 = (state_66588[(2)]);
var inst_66535 = cljs.core.not_empty.call(null,inst_66507);
var state_66588__$1 = (function (){var statearr_66631 = state_66588;
(statearr_66631[(29)] = inst_66534);

return statearr_66631;
})();
if(cljs.core.truth_(inst_66535)){
var statearr_66632_66704 = state_66588__$1;
(statearr_66632_66704[(1)] = (29));

} else {
var statearr_66633_66705 = state_66588__$1;
(statearr_66633_66705[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (25))){
var inst_66505 = (state_66588[(23)]);
var inst_66521 = (state_66588[(2)]);
var inst_66522 = cljs.core.not_empty.call(null,inst_66505);
var state_66588__$1 = (function (){var statearr_66634 = state_66588;
(statearr_66634[(30)] = inst_66521);

return statearr_66634;
})();
if(cljs.core.truth_(inst_66522)){
var statearr_66635_66706 = state_66588__$1;
(statearr_66635_66706[(1)] = (26));

} else {
var statearr_66636_66707 = state_66588__$1;
(statearr_66636_66707[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (34))){
var inst_66557 = (state_66588[(2)]);
var state_66588__$1 = state_66588;
if(cljs.core.truth_(inst_66557)){
var statearr_66637_66708 = state_66588__$1;
(statearr_66637_66708[(1)] = (38));

} else {
var statearr_66638_66709 = state_66588__$1;
(statearr_66638_66709[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (17))){
var state_66588__$1 = state_66588;
var statearr_66639_66710 = state_66588__$1;
(statearr_66639_66710[(2)] = recompile_dependents);

(statearr_66639_66710[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (3))){
var state_66588__$1 = state_66588;
var statearr_66640_66711 = state_66588__$1;
(statearr_66640_66711[(2)] = null);

(statearr_66640_66711[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (12))){
var inst_66478 = (state_66588[(2)]);
var state_66588__$1 = state_66588;
var statearr_66641_66712 = state_66588__$1;
(statearr_66641_66712[(2)] = inst_66478);

(statearr_66641_66712[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (2))){
var inst_66440 = (state_66588[(13)]);
var inst_66447 = cljs.core.seq.call(null,inst_66440);
var inst_66448 = inst_66447;
var inst_66449 = null;
var inst_66450 = (0);
var inst_66451 = (0);
var state_66588__$1 = (function (){var statearr_66642 = state_66588;
(statearr_66642[(7)] = inst_66449);

(statearr_66642[(8)] = inst_66448);

(statearr_66642[(9)] = inst_66450);

(statearr_66642[(10)] = inst_66451);

return statearr_66642;
})();
var statearr_66643_66713 = state_66588__$1;
(statearr_66643_66713[(2)] = null);

(statearr_66643_66713[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (23))){
var inst_66505 = (state_66588[(23)]);
var inst_66504 = (state_66588[(24)]);
var inst_66501 = (state_66588[(19)]);
var inst_66509 = (state_66588[(25)]);
var inst_66507 = (state_66588[(26)]);
var inst_66512 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_66514 = (function (){var all_files = inst_66501;
var res_SINGLEQUOTE_ = inst_66504;
var res = inst_66505;
var files_not_loaded = inst_66507;
var dependencies_that_loaded = inst_66509;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66505,inst_66504,inst_66501,inst_66509,inst_66507,inst_66512,state_val_66589,c__44106__auto__,map__66433,map__66433__$1,opts,before_jsload,on_jsload,reload_dependents,map__66434,map__66434__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__66513){
var map__66644 = p__66513;
var map__66644__$1 = ((((!((map__66644 == null)))?((((map__66644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66644.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66644):map__66644);
var request_url = cljs.core.get.call(null,map__66644__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66505,inst_66504,inst_66501,inst_66509,inst_66507,inst_66512,state_val_66589,c__44106__auto__,map__66433,map__66433__$1,opts,before_jsload,on_jsload,reload_dependents,map__66434,map__66434__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66515 = cljs.core.reverse.call(null,inst_66509);
var inst_66516 = cljs.core.map.call(null,inst_66514,inst_66515);
var inst_66517 = cljs.core.pr_str.call(null,inst_66516);
var inst_66518 = figwheel.client.utils.log.call(null,inst_66517);
var state_66588__$1 = (function (){var statearr_66646 = state_66588;
(statearr_66646[(31)] = inst_66512);

return statearr_66646;
})();
var statearr_66647_66714 = state_66588__$1;
(statearr_66647_66714[(2)] = inst_66518);

(statearr_66647_66714[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (35))){
var state_66588__$1 = state_66588;
var statearr_66648_66715 = state_66588__$1;
(statearr_66648_66715[(2)] = true);

(statearr_66648_66715[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (19))){
var inst_66491 = (state_66588[(12)]);
var inst_66497 = figwheel.client.file_reloading.expand_files.call(null,inst_66491);
var state_66588__$1 = state_66588;
var statearr_66649_66716 = state_66588__$1;
(statearr_66649_66716[(2)] = inst_66497);

(statearr_66649_66716[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (11))){
var state_66588__$1 = state_66588;
var statearr_66650_66717 = state_66588__$1;
(statearr_66650_66717[(2)] = null);

(statearr_66650_66717[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (9))){
var inst_66480 = (state_66588[(2)]);
var state_66588__$1 = state_66588;
var statearr_66651_66718 = state_66588__$1;
(statearr_66651_66718[(2)] = inst_66480);

(statearr_66651_66718[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (5))){
var inst_66450 = (state_66588[(9)]);
var inst_66451 = (state_66588[(10)]);
var inst_66453 = (inst_66451 < inst_66450);
var inst_66454 = inst_66453;
var state_66588__$1 = state_66588;
if(cljs.core.truth_(inst_66454)){
var statearr_66652_66719 = state_66588__$1;
(statearr_66652_66719[(1)] = (7));

} else {
var statearr_66653_66720 = state_66588__$1;
(statearr_66653_66720[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (14))){
var inst_66461 = (state_66588[(22)]);
var inst_66470 = cljs.core.first.call(null,inst_66461);
var inst_66471 = figwheel.client.file_reloading.eval_body.call(null,inst_66470,opts);
var inst_66472 = cljs.core.next.call(null,inst_66461);
var inst_66448 = inst_66472;
var inst_66449 = null;
var inst_66450 = (0);
var inst_66451 = (0);
var state_66588__$1 = (function (){var statearr_66654 = state_66588;
(statearr_66654[(7)] = inst_66449);

(statearr_66654[(8)] = inst_66448);

(statearr_66654[(9)] = inst_66450);

(statearr_66654[(32)] = inst_66471);

(statearr_66654[(10)] = inst_66451);

return statearr_66654;
})();
var statearr_66655_66721 = state_66588__$1;
(statearr_66655_66721[(2)] = null);

(statearr_66655_66721[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (45))){
var state_66588__$1 = state_66588;
var statearr_66656_66722 = state_66588__$1;
(statearr_66656_66722[(2)] = null);

(statearr_66656_66722[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (26))){
var inst_66505 = (state_66588[(23)]);
var inst_66504 = (state_66588[(24)]);
var inst_66501 = (state_66588[(19)]);
var inst_66509 = (state_66588[(25)]);
var inst_66507 = (state_66588[(26)]);
var inst_66524 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_66526 = (function (){var all_files = inst_66501;
var res_SINGLEQUOTE_ = inst_66504;
var res = inst_66505;
var files_not_loaded = inst_66507;
var dependencies_that_loaded = inst_66509;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66505,inst_66504,inst_66501,inst_66509,inst_66507,inst_66524,state_val_66589,c__44106__auto__,map__66433,map__66433__$1,opts,before_jsload,on_jsload,reload_dependents,map__66434,map__66434__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__66525){
var map__66657 = p__66525;
var map__66657__$1 = ((((!((map__66657 == null)))?((((map__66657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66657.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66657):map__66657);
var namespace = cljs.core.get.call(null,map__66657__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__66657__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66505,inst_66504,inst_66501,inst_66509,inst_66507,inst_66524,state_val_66589,c__44106__auto__,map__66433,map__66433__$1,opts,before_jsload,on_jsload,reload_dependents,map__66434,map__66434__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66527 = cljs.core.map.call(null,inst_66526,inst_66505);
var inst_66528 = cljs.core.pr_str.call(null,inst_66527);
var inst_66529 = figwheel.client.utils.log.call(null,inst_66528);
var inst_66530 = (function (){var all_files = inst_66501;
var res_SINGLEQUOTE_ = inst_66504;
var res = inst_66505;
var files_not_loaded = inst_66507;
var dependencies_that_loaded = inst_66509;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66505,inst_66504,inst_66501,inst_66509,inst_66507,inst_66524,inst_66526,inst_66527,inst_66528,inst_66529,state_val_66589,c__44106__auto__,map__66433,map__66433__$1,opts,before_jsload,on_jsload,reload_dependents,map__66434,map__66434__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66505,inst_66504,inst_66501,inst_66509,inst_66507,inst_66524,inst_66526,inst_66527,inst_66528,inst_66529,state_val_66589,c__44106__auto__,map__66433,map__66433__$1,opts,before_jsload,on_jsload,reload_dependents,map__66434,map__66434__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66531 = setTimeout(inst_66530,(10));
var state_66588__$1 = (function (){var statearr_66659 = state_66588;
(statearr_66659[(33)] = inst_66524);

(statearr_66659[(34)] = inst_66529);

return statearr_66659;
})();
var statearr_66660_66723 = state_66588__$1;
(statearr_66660_66723[(2)] = inst_66531);

(statearr_66660_66723[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (16))){
var state_66588__$1 = state_66588;
var statearr_66661_66724 = state_66588__$1;
(statearr_66661_66724[(2)] = reload_dependents);

(statearr_66661_66724[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (38))){
var inst_66541 = (state_66588[(16)]);
var inst_66559 = cljs.core.apply.call(null,cljs.core.hash_map,inst_66541);
var state_66588__$1 = state_66588;
var statearr_66662_66725 = state_66588__$1;
(statearr_66662_66725[(2)] = inst_66559);

(statearr_66662_66725[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (30))){
var state_66588__$1 = state_66588;
var statearr_66663_66726 = state_66588__$1;
(statearr_66663_66726[(2)] = null);

(statearr_66663_66726[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (10))){
var inst_66461 = (state_66588[(22)]);
var inst_66463 = cljs.core.chunked_seq_QMARK_.call(null,inst_66461);
var state_66588__$1 = state_66588;
if(inst_66463){
var statearr_66664_66727 = state_66588__$1;
(statearr_66664_66727[(1)] = (13));

} else {
var statearr_66665_66728 = state_66588__$1;
(statearr_66665_66728[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (18))){
var inst_66495 = (state_66588[(2)]);
var state_66588__$1 = state_66588;
if(cljs.core.truth_(inst_66495)){
var statearr_66666_66729 = state_66588__$1;
(statearr_66666_66729[(1)] = (19));

} else {
var statearr_66667_66730 = state_66588__$1;
(statearr_66667_66730[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (42))){
var state_66588__$1 = state_66588;
var statearr_66668_66731 = state_66588__$1;
(statearr_66668_66731[(2)] = null);

(statearr_66668_66731[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (37))){
var inst_66554 = (state_66588[(2)]);
var state_66588__$1 = state_66588;
var statearr_66669_66732 = state_66588__$1;
(statearr_66669_66732[(2)] = inst_66554);

(statearr_66669_66732[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66589 === (8))){
var inst_66448 = (state_66588[(8)]);
var inst_66461 = (state_66588[(22)]);
var inst_66461__$1 = cljs.core.seq.call(null,inst_66448);
var state_66588__$1 = (function (){var statearr_66670 = state_66588;
(statearr_66670[(22)] = inst_66461__$1);

return statearr_66670;
})();
if(inst_66461__$1){
var statearr_66671_66733 = state_66588__$1;
(statearr_66671_66733[(1)] = (10));

} else {
var statearr_66672_66734 = state_66588__$1;
(statearr_66672_66734[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
});})(c__44106__auto__,map__66433,map__66433__$1,opts,before_jsload,on_jsload,reload_dependents,map__66434,map__66434__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__44016__auto__,c__44106__auto__,map__66433,map__66433__$1,opts,before_jsload,on_jsload,reload_dependents,map__66434,map__66434__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44017__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44017__auto____0 = (function (){
var statearr_66673 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66673[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__44017__auto__);

(statearr_66673[(1)] = (1));

return statearr_66673;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44017__auto____1 = (function (state_66588){
while(true){
var ret_value__44018__auto__ = (function (){try{while(true){
var result__44019__auto__ = switch__44016__auto__.call(null,state_66588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44019__auto__;
}
break;
}
}catch (e66674){if((e66674 instanceof Object)){
var ex__44020__auto__ = e66674;
var statearr_66675_66735 = state_66588;
(statearr_66675_66735[(5)] = ex__44020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66736 = state_66588;
state_66588 = G__66736;
continue;
} else {
return ret_value__44018__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__44017__auto__ = function(state_66588){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44017__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44017__auto____1.call(this,state_66588);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__44017__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__44017__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44017__auto__;
})()
;})(switch__44016__auto__,c__44106__auto__,map__66433,map__66433__$1,opts,before_jsload,on_jsload,reload_dependents,map__66434,map__66434__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__44108__auto__ = (function (){var statearr_66676 = f__44107__auto__.call(null);
(statearr_66676[(6)] = c__44106__auto__);

return statearr_66676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44108__auto__);
});})(c__44106__auto__,map__66433,map__66433__$1,opts,before_jsload,on_jsload,reload_dependents,map__66434,map__66434__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__44106__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__66739,link){
var map__66740 = p__66739;
var map__66740__$1 = ((((!((map__66740 == null)))?((((map__66740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66740.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66740):map__66740);
var file = cljs.core.get.call(null,map__66740__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5278__auto__ = link.href;
if(cljs.core.truth_(temp__5278__auto__)){
var link_href = temp__5278__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5278__auto__,map__66740,map__66740__$1,file){
return (function (p1__66737_SHARP_,p2__66738_SHARP_){
if(cljs.core._EQ_.call(null,p1__66737_SHARP_,p2__66738_SHARP_)){
return p1__66737_SHARP_;
} else {
return false;
}
});})(link_href,temp__5278__auto__,map__66740,map__66740__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5278__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__66743){
var map__66744 = p__66743;
var map__66744__$1 = ((((!((map__66744 == null)))?((((map__66744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66744.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66744):map__66744);
var match_length = cljs.core.get.call(null,map__66744__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__66744__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__66742_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__66742_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5278__auto__)){
var res = temp__5278__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__66746_SHARP_,p2__66747_SHARP_){
return cljs.core.assoc.call(null,p1__66746_SHARP_,cljs.core.get.call(null,p2__66747_SHARP_,key),p2__66747_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5276__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5276__auto__)){
var link = temp__5276__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5276__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5276__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_66748 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_66748);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_66748);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__66749,p__66750){
var map__66751 = p__66749;
var map__66751__$1 = ((((!((map__66751 == null)))?((((map__66751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66751.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66751):map__66751);
var on_cssload = cljs.core.get.call(null,map__66751__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__66752 = p__66750;
var map__66752__$1 = ((((!((map__66752 == null)))?((((map__66752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66752.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66752):map__66752);
var files_msg = map__66752__$1;
var files = cljs.core.get.call(null,map__66752__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5278__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5278__auto__)){
var f_datas = temp__5278__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1504289162949