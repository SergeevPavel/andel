// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__67563){
var map__67564 = p__67563;
var map__67564__$1 = ((((!((map__67564 == null)))?((((map__67564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67564.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67564):map__67564);
var m = map__67564__$1;
var n = cljs.core.get.call(null,map__67564__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__67564__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5278__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5278__auto__)){
var ns = temp__5278__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__67566_67588 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__67567_67589 = null;
var count__67568_67590 = (0);
var i__67569_67591 = (0);
while(true){
if((i__67569_67591 < count__67568_67590)){
var f_67592 = cljs.core._nth.call(null,chunk__67567_67589,i__67569_67591);
cljs.core.println.call(null,"  ",f_67592);

var G__67593 = seq__67566_67588;
var G__67594 = chunk__67567_67589;
var G__67595 = count__67568_67590;
var G__67596 = (i__67569_67591 + (1));
seq__67566_67588 = G__67593;
chunk__67567_67589 = G__67594;
count__67568_67590 = G__67595;
i__67569_67591 = G__67596;
continue;
} else {
var temp__5278__auto___67597 = cljs.core.seq.call(null,seq__67566_67588);
if(temp__5278__auto___67597){
var seq__67566_67598__$1 = temp__5278__auto___67597;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67566_67598__$1)){
var c__41976__auto___67599 = cljs.core.chunk_first.call(null,seq__67566_67598__$1);
var G__67600 = cljs.core.chunk_rest.call(null,seq__67566_67598__$1);
var G__67601 = c__41976__auto___67599;
var G__67602 = cljs.core.count.call(null,c__41976__auto___67599);
var G__67603 = (0);
seq__67566_67588 = G__67600;
chunk__67567_67589 = G__67601;
count__67568_67590 = G__67602;
i__67569_67591 = G__67603;
continue;
} else {
var f_67604 = cljs.core.first.call(null,seq__67566_67598__$1);
cljs.core.println.call(null,"  ",f_67604);

var G__67605 = cljs.core.next.call(null,seq__67566_67598__$1);
var G__67606 = null;
var G__67607 = (0);
var G__67608 = (0);
seq__67566_67588 = G__67605;
chunk__67567_67589 = G__67606;
count__67568_67590 = G__67607;
i__67569_67591 = G__67608;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_67609 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__41064__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__41064__auto__)){
return or__41064__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_67609);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_67609)))?cljs.core.second.call(null,arglists_67609):arglists_67609));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__67570_67610 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__67571_67611 = null;
var count__67572_67612 = (0);
var i__67573_67613 = (0);
while(true){
if((i__67573_67613 < count__67572_67612)){
var vec__67574_67614 = cljs.core._nth.call(null,chunk__67571_67611,i__67573_67613);
var name_67615 = cljs.core.nth.call(null,vec__67574_67614,(0),null);
var map__67577_67616 = cljs.core.nth.call(null,vec__67574_67614,(1),null);
var map__67577_67617__$1 = ((((!((map__67577_67616 == null)))?((((map__67577_67616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67577_67616.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67577_67616):map__67577_67616);
var doc_67618 = cljs.core.get.call(null,map__67577_67617__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_67619 = cljs.core.get.call(null,map__67577_67617__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_67615);

cljs.core.println.call(null," ",arglists_67619);

if(cljs.core.truth_(doc_67618)){
cljs.core.println.call(null," ",doc_67618);
} else {
}

var G__67620 = seq__67570_67610;
var G__67621 = chunk__67571_67611;
var G__67622 = count__67572_67612;
var G__67623 = (i__67573_67613 + (1));
seq__67570_67610 = G__67620;
chunk__67571_67611 = G__67621;
count__67572_67612 = G__67622;
i__67573_67613 = G__67623;
continue;
} else {
var temp__5278__auto___67624 = cljs.core.seq.call(null,seq__67570_67610);
if(temp__5278__auto___67624){
var seq__67570_67625__$1 = temp__5278__auto___67624;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67570_67625__$1)){
var c__41976__auto___67626 = cljs.core.chunk_first.call(null,seq__67570_67625__$1);
var G__67627 = cljs.core.chunk_rest.call(null,seq__67570_67625__$1);
var G__67628 = c__41976__auto___67626;
var G__67629 = cljs.core.count.call(null,c__41976__auto___67626);
var G__67630 = (0);
seq__67570_67610 = G__67627;
chunk__67571_67611 = G__67628;
count__67572_67612 = G__67629;
i__67573_67613 = G__67630;
continue;
} else {
var vec__67579_67631 = cljs.core.first.call(null,seq__67570_67625__$1);
var name_67632 = cljs.core.nth.call(null,vec__67579_67631,(0),null);
var map__67582_67633 = cljs.core.nth.call(null,vec__67579_67631,(1),null);
var map__67582_67634__$1 = ((((!((map__67582_67633 == null)))?((((map__67582_67633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67582_67633.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67582_67633):map__67582_67633);
var doc_67635 = cljs.core.get.call(null,map__67582_67634__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_67636 = cljs.core.get.call(null,map__67582_67634__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_67632);

cljs.core.println.call(null," ",arglists_67636);

if(cljs.core.truth_(doc_67635)){
cljs.core.println.call(null," ",doc_67635);
} else {
}

var G__67637 = cljs.core.next.call(null,seq__67570_67625__$1);
var G__67638 = null;
var G__67639 = (0);
var G__67640 = (0);
seq__67570_67610 = G__67637;
chunk__67571_67611 = G__67638;
count__67572_67612 = G__67639;
i__67573_67613 = G__67640;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5278__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5278__auto__)){
var fnspec = temp__5278__auto__;
cljs.core.print.call(null,"Spec");

var seq__67584 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__67585 = null;
var count__67586 = (0);
var i__67587 = (0);
while(true){
if((i__67587 < count__67586)){
var role = cljs.core._nth.call(null,chunk__67585,i__67587);
var temp__5278__auto___67641__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___67641__$1)){
var spec_67642 = temp__5278__auto___67641__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_67642));
} else {
}

var G__67643 = seq__67584;
var G__67644 = chunk__67585;
var G__67645 = count__67586;
var G__67646 = (i__67587 + (1));
seq__67584 = G__67643;
chunk__67585 = G__67644;
count__67586 = G__67645;
i__67587 = G__67646;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq.call(null,seq__67584);
if(temp__5278__auto____$1){
var seq__67584__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67584__$1)){
var c__41976__auto__ = cljs.core.chunk_first.call(null,seq__67584__$1);
var G__67647 = cljs.core.chunk_rest.call(null,seq__67584__$1);
var G__67648 = c__41976__auto__;
var G__67649 = cljs.core.count.call(null,c__41976__auto__);
var G__67650 = (0);
seq__67584 = G__67647;
chunk__67585 = G__67648;
count__67586 = G__67649;
i__67587 = G__67650;
continue;
} else {
var role = cljs.core.first.call(null,seq__67584__$1);
var temp__5278__auto___67651__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___67651__$2)){
var spec_67652 = temp__5278__auto___67651__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_67652));
} else {
}

var G__67653 = cljs.core.next.call(null,seq__67584__$1);
var G__67654 = null;
var G__67655 = (0);
var G__67656 = (0);
seq__67584 = G__67653;
chunk__67585 = G__67654;
count__67586 = G__67655;
i__67587 = G__67656;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1504289164097