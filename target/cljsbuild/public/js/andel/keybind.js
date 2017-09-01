// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('andel.keybind');
goog.require('cljs.core');
goog.require('cljs.core.constants');
andel.keybind.MODS = cljs.core.PersistentHashMap.fromArrays(["option","super","win","shift","alt","control","cmd","meta","ctrl","defmod"],[cljs.core.cst$kw$alt,cljs.core.cst$kw$meta,cljs.core.cst$kw$meta,cljs.core.cst$kw$shift,cljs.core.cst$kw$alt,cljs.core.cst$kw$ctrl,cljs.core.cst$kw$meta,cljs.core.cst$kw$meta,cljs.core.cst$kw$ctrl,(((navigator.userAgent.indexOf("Mac OS X") < (0)))?cljs.core.cst$kw$ctrl:cljs.core.cst$kw$meta)]);
andel.keybind.KEYATTRS = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$shift,"shiftKey",cljs.core.cst$kw$ctrl,"ctrlKey",cljs.core.cst$kw$alt,"altKey",cljs.core.cst$kw$meta,"metaKey",cljs.core.cst$kw$code,"keyCode"], null);
andel.keybind.DEFCHORD = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$shift,false,cljs.core.cst$kw$ctrl,false,cljs.core.cst$kw$alt,false,cljs.core.cst$kw$meta,false], null);
andel.keybind.KEYS = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays(["]","'","space","tab","=","`","right","*","up","delete","caps","/","plus","return","-","ins","backspace","minus","capslock","escape","del","pgdown","pageup","pause","down","home",".",";",",","insert","pagedown","[","pgup","\\","enter","+","end","esc","left"],[(221),(222),(32),(9),(187),(192),(39),(106),(38),(46),(20),(191),(107),(13),(109),(45),(8),(109),(20),(27),(46),(34),(33),(19),(40),(36),(190),(186),(188),(45),(34),(219),(33),(220),(13),(107),(35),(27),(37)]),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8541__auto__ = (function andel$keybind$iter__21307(s__21308){
return (new cljs.core.LazySeq(null,(function (){
var s__21308__$1 = s__21308;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__21308__$1);
if(temp__5278__auto__){
var s__21308__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21308__$2)){
var c__8539__auto__ = cljs.core.chunk_first(s__21308__$2);
var size__8540__auto__ = cljs.core.count(c__8539__auto__);
var b__21310 = cljs.core.chunk_buffer(size__8540__auto__);
if((function (){var i__21309 = (0);
while(true){
if((i__21309 < size__8540__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8539__auto__,i__21309);
cljs.core.chunk_append(b__21310,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("num-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((95) + i)], null));

var G__21323 = (i__21309 + (1));
i__21309 = G__21323;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21310),andel$keybind$iter__21307(cljs.core.chunk_rest(s__21308__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21310),null);
}
} else {
var i = cljs.core.first(s__21308__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("num-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((95) + i)], null),andel$keybind$iter__21307(cljs.core.rest(s__21308__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8541__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)));
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8541__auto__ = (function andel$keybind$iter__21311(s__21312){
return (new cljs.core.LazySeq(null,(function (){
var s__21312__$1 = s__21312;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__21312__$1);
if(temp__5278__auto__){
var s__21312__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21312__$2)){
var c__8539__auto__ = cljs.core.chunk_first(s__21312__$2);
var size__8540__auto__ = cljs.core.count(c__8539__auto__);
var b__21314 = cljs.core.chunk_buffer(size__8540__auto__);
if((function (){var i__21313 = (0);
while(true){
if((i__21313 < size__8540__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8539__auto__,i__21313);
cljs.core.chunk_append(b__21314,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((48) + i)], null));

var G__21324 = (i__21313 + (1));
i__21313 = G__21324;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21314),andel$keybind$iter__21311(cljs.core.chunk_rest(s__21312__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21314),null);
}
} else {
var i = cljs.core.first(s__21312__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((48) + i)], null),andel$keybind$iter__21311(cljs.core.rest(s__21312__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8541__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)));
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8541__auto__ = (function andel$keybind$iter__21315(s__21316){
return (new cljs.core.LazySeq(null,(function (){
var s__21316__$1 = s__21316;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__21316__$1);
if(temp__5278__auto__){
var s__21316__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21316__$2)){
var c__8539__auto__ = cljs.core.chunk_first(s__21316__$2);
var size__8540__auto__ = cljs.core.count(c__8539__auto__);
var b__21318 = cljs.core.chunk_buffer(size__8540__auto__);
if((function (){var i__21317 = (0);
while(true){
if((i__21317 < size__8540__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8539__auto__,i__21317);
cljs.core.chunk_append(b__21318,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("f"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((111) + i)], null));

var G__21325 = (i__21317 + (1));
i__21317 = G__21325;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21318),andel$keybind$iter__21315(cljs.core.chunk_rest(s__21316__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21318),null);
}
} else {
var i = cljs.core.first(s__21316__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("f"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((111) + i)], null),andel$keybind$iter__21315(cljs.core.rest(s__21316__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8541__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(25)));
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8541__auto__ = (function andel$keybind$iter__21319(s__21320){
return (new cljs.core.LazySeq(null,(function (){
var s__21320__$1 = s__21320;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__21320__$1);
if(temp__5278__auto__){
var s__21320__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21320__$2)){
var c__8539__auto__ = cljs.core.chunk_first(s__21320__$2);
var size__8540__auto__ = cljs.core.count(c__8539__auto__);
var b__21322 = cljs.core.chunk_buffer(size__8540__auto__);
if((function (){var i__21321 = (0);
while(true){
if((i__21321 < size__8540__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8539__auto__,i__21321);
cljs.core.chunk_append(b__21322,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [String.fromCharCode(i).toLowerCase(),i], null));

var G__21326 = (i__21321 + (1));
i__21321 = G__21326;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21322),andel$keybind$iter__21319(cljs.core.chunk_rest(s__21320__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21322),null);
}
} else {
var i = cljs.core.first(s__21320__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [String.fromCharCode(i).toLowerCase(),i], null),andel$keybind$iter__21319(cljs.core.rest(s__21320__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8541__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((65),(91)));
})())], 0));
andel.keybind.KNOWN_KEYS = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8541__auto__ = (function andel$keybind$iter__21327(s__21328){
return (new cljs.core.LazySeq(null,(function (){
var s__21328__$1 = s__21328;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__21328__$1);
if(temp__5278__auto__){
var s__21328__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21328__$2)){
var c__8539__auto__ = cljs.core.chunk_first(s__21328__$2);
var size__8540__auto__ = cljs.core.count(c__8539__auto__);
var b__21330 = cljs.core.chunk_buffer(size__8540__auto__);
if((function (){var i__21329 = (0);
while(true){
if((i__21329 < size__8540__auto__)){
var vec__21331 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8539__auto__,i__21329);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21331,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21331,(1),null);
cljs.core.chunk_append(b__21330,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,k], null));

var G__21337 = (i__21329 + (1));
i__21329 = G__21337;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21330),andel$keybind$iter__21327(cljs.core.chunk_rest(s__21328__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21330),null);
}
} else {
var vec__21334 = cljs.core.first(s__21328__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21334,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21334,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,k], null),andel$keybind$iter__21327(cljs.core.rest(s__21328__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8541__auto__(andel.keybind.KEYS);
})());
if(typeof andel.keybind.BINDINGS !== 'undefined'){
} else {
andel.keybind.BINDINGS = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof andel.keybind.PRESSED !== 'undefined'){
} else {
andel.keybind.PRESSED = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
andel.keybind.parse_chord = (function andel$keybind$parse_chord(keystring){
var bits = keystring.split("-");
var button = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(bits,(cljs.core.count(bits) - (1)));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(andel.keybind.KEYS,button);
if(cljs.core.truth_(code)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(andel.keybind.DEFCHORD,cljs.core.cst$kw$code,code),(function (){var iter__8541__auto__ = ((function (bits,button,code){
return (function andel$keybind$parse_chord_$_iter__21338(s__21339){
return (new cljs.core.LazySeq(null,((function (bits,button,code){
return (function (){
var s__21339__$1 = s__21339;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__21339__$1);
if(temp__5278__auto__){
var s__21339__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21339__$2)){
var c__8539__auto__ = cljs.core.chunk_first(s__21339__$2);
var size__8540__auto__ = cljs.core.count(c__8539__auto__);
var b__21341 = cljs.core.chunk_buffer(size__8540__auto__);
if((function (){var i__21340 = (0);
while(true){
if((i__21340 < size__8540__auto__)){
var mod = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8539__auto__,i__21340);
cljs.core.chunk_append(b__21341,(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(andel.keybind.MODS,mod))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(andel.keybind.MODS,mod),true], null):null));

var G__21342 = (i__21340 + (1));
i__21340 = G__21342;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21341),andel$keybind$parse_chord_$_iter__21338(cljs.core.chunk_rest(s__21339__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21341),null);
}
} else {
var mod = cljs.core.first(s__21339__$2);
return cljs.core.cons((cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(andel.keybind.MODS,mod))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(andel.keybind.MODS,mod),true], null):null),andel$keybind$parse_chord_$_iter__21338(cljs.core.rest(s__21339__$2)));
}
} else {
return null;
}
break;
}
});})(bits,button,code))
,null,null));
});})(bits,button,code))
;
return iter__8541__auto__(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(bits));
})());
} else {
return null;
}
});
andel.keybind.parse = (function andel$keybind$parse(chain){
var bits = chain.split(" ");
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(andel.keybind.parse_chord,bits);
});
andel.keybind.e__GT_chord = (function andel$keybind$e__GT_chord(e){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8541__auto__ = (function andel$keybind$e__GT_chord_$_iter__21343(s__21344){
return (new cljs.core.LazySeq(null,(function (){
var s__21344__$1 = s__21344;
while(true){
var temp__5278__auto__ = cljs.core.seq(s__21344__$1);
if(temp__5278__auto__){
var s__21344__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21344__$2)){
var c__8539__auto__ = cljs.core.chunk_first(s__21344__$2);
var size__8540__auto__ = cljs.core.count(c__8539__auto__);
var b__21346 = cljs.core.chunk_buffer(size__8540__auto__);
if((function (){var i__21345 = (0);
while(true){
if((i__21345 < size__8540__auto__)){
var vec__21347 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8539__auto__,i__21345);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21347,(0),null);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21347,(1),null);
cljs.core.chunk_append(b__21346,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(e[attr])], null));

var G__21353 = (i__21345 + (1));
i__21345 = G__21353;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21346),andel$keybind$e__GT_chord_$_iter__21343(cljs.core.chunk_rest(s__21344__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21346),null);
}
} else {
var vec__21350 = cljs.core.first(s__21344__$2);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21350,(0),null);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21350,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(e[attr])], null),andel$keybind$e__GT_chord_$_iter__21343(cljs.core.rest(s__21344__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8541__auto__(andel.keybind.KEYATTRS);
})());
});
andel.keybind.reset_sequence_BANG_ = (function andel$keybind$reset_sequence_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(andel.keybind.PRESSED,cljs.core.empty);
});
andel.keybind.dispatch = (function andel$keybind$dispatch(e,bindings){
var chord = andel.keybind.e__GT_chord(e);
var sequence = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(andel.keybind.PRESSED),chord);
var inner = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(bindings,sequence);
var handlers = cljs.core.cst$kw$handlers.cljs$core$IFn$_invoke$arity$1(inner);
if(cljs.core.not(inner)){
return andel.keybind.reset_sequence_BANG_();
} else {
if(cljs.core.truth_(handlers)){
var seq__21354_21364 = cljs.core.seq(cljs.core.cst$kw$handlers.cljs$core$IFn$_invoke$arity$1(inner));
var chunk__21355_21365 = null;
var count__21356_21366 = (0);
var i__21357_21367 = (0);
while(true){
if((i__21357_21367 < count__21356_21366)){
var vec__21358_21368 = chunk__21355_21365.cljs$core$IIndexed$_nth$arity$2(null,i__21357_21367);
var __21369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21358_21368,(0),null);
var handler_21370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21358_21368,(1),null);
(handler_21370.cljs$core$IFn$_invoke$arity$2 ? handler_21370.cljs$core$IFn$_invoke$arity$2(e,sequence) : handler_21370.call(null,e,sequence));

var G__21371 = seq__21354_21364;
var G__21372 = chunk__21355_21365;
var G__21373 = count__21356_21366;
var G__21374 = (i__21357_21367 + (1));
seq__21354_21364 = G__21371;
chunk__21355_21365 = G__21372;
count__21356_21366 = G__21373;
i__21357_21367 = G__21374;
continue;
} else {
var temp__5278__auto___21375 = cljs.core.seq(seq__21354_21364);
if(temp__5278__auto___21375){
var seq__21354_21376__$1 = temp__5278__auto___21375;
if(cljs.core.chunked_seq_QMARK_(seq__21354_21376__$1)){
var c__8590__auto___21377 = cljs.core.chunk_first(seq__21354_21376__$1);
var G__21378 = cljs.core.chunk_rest(seq__21354_21376__$1);
var G__21379 = c__8590__auto___21377;
var G__21380 = cljs.core.count(c__8590__auto___21377);
var G__21381 = (0);
seq__21354_21364 = G__21378;
chunk__21355_21365 = G__21379;
count__21356_21366 = G__21380;
i__21357_21367 = G__21381;
continue;
} else {
var vec__21361_21382 = cljs.core.first(seq__21354_21376__$1);
var __21383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21361_21382,(0),null);
var handler_21384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21361_21382,(1),null);
(handler_21384.cljs$core$IFn$_invoke$arity$2 ? handler_21384.cljs$core$IFn$_invoke$arity$2(e,sequence) : handler_21384.call(null,e,sequence));

var G__21385 = cljs.core.next(seq__21354_21376__$1);
var G__21386 = null;
var G__21387 = (0);
var G__21388 = (0);
seq__21354_21364 = G__21385;
chunk__21355_21365 = G__21386;
count__21356_21366 = G__21387;
i__21357_21367 = G__21388;
continue;
}
} else {
}
}
break;
}

return andel.keybind.reset_sequence_BANG_();
} else {
return cljs.core.reset_BANG_(andel.keybind.PRESSED,sequence);

}
}
});
andel.keybind.bind = (function andel$keybind$bind(bindings,spec,key,cb){

var parsed = andel.keybind.parse(spec);
return cljs.core.assoc_in(bindings,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(parsed,cljs.core.cst$kw$handlers,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key], 0)),cb);
});
andel.keybind.unbind = (function andel$keybind$unbind(bindings,spec,key){

var parsed = andel.keybind.parse(spec);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(bindings,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parsed,cljs.core.cst$kw$handlers),cljs.core.dissoc,key);
});
andel.keybind.bind_BANG_ = (function andel$keybind$bind_BANG_(spec,key,cb){

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(andel.keybind.BINDINGS,andel.keybind.bind,spec,key,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cb], 0));
});
andel.keybind.unbind_BANG_ = (function andel$keybind$unbind_BANG_(spec,key){

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(andel.keybind.BINDINGS,andel.keybind.unbind,spec,key);
});
andel.keybind.unbind_all_BANG_ = (function andel$keybind$unbind_all_BANG_(){

andel.keybind.reset_sequence_BANG_();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(andel.keybind.BINDINGS,cljs.core.empty);
});
andel.keybind.dispatcher = (function andel$keybind$dispatcher(){

return (function (e){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(andel.keybind.KNOWN_KEYS,e.keyCode))){
return andel.keybind.dispatch(e,cljs.core.deref(andel.keybind.BINDINGS));
} else {
return null;
}
});
});
