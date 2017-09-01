// Compiled by ClojureScript 1.9.671 {}
goog.provide('andel.keybind');
goog.require('cljs.core');
andel.keybind.MODS = cljs.core.PersistentHashMap.fromArrays(["option","super","win","shift","alt","control","cmd","meta","ctrl","defmod"],[new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"shift","shift",997140064),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),(((navigator.userAgent.indexOf("Mac OS X") < (0)))?new cljs.core.Keyword(null,"ctrl","ctrl",361402094):new cljs.core.Keyword(null,"meta","meta",1499536964))]);
andel.keybind.KEYATTRS = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"shift","shift",997140064),"shiftKey",new cljs.core.Keyword(null,"ctrl","ctrl",361402094),"ctrlKey",new cljs.core.Keyword(null,"alt","alt",-3214426),"altKey",new cljs.core.Keyword(null,"meta","meta",1499536964),"metaKey",new cljs.core.Keyword(null,"code","code",1586293142),"keyCode"], null);
andel.keybind.DEFCHORD = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"shift","shift",997140064),false,new cljs.core.Keyword(null,"ctrl","ctrl",361402094),false,new cljs.core.Keyword(null,"alt","alt",-3214426),false,new cljs.core.Keyword(null,"meta","meta",1499536964),false], null);
andel.keybind.KEYS = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays(["]","'","space","tab","=","`","right","*","up","delete","caps","/","plus","return","-","ins","backspace","minus","capslock","escape","del","pgdown","pageup","pause","down","home",".",";",",","insert","pagedown","[","pgup","\\","enter","+","end","esc","left"],[(221),(222),(32),(9),(187),(192),(39),(106),(38),(46),(20),(191),(107),(13),(109),(45),(8),(109),(20),(27),(46),(34),(33),(19),(40),(36),(190),(186),(188),(45),(34),(219),(33),(220),(13),(107),(35),(27),(37)]),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__41927__auto__ = (function andel$keybind$iter__64434(s__64435){
return (new cljs.core.LazySeq(null,(function (){
var s__64435__$1 = s__64435;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__64435__$1);
if(temp__5278__auto__){
var s__64435__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__64435__$2)){
var c__41925__auto__ = cljs.core.chunk_first.call(null,s__64435__$2);
var size__41926__auto__ = cljs.core.count.call(null,c__41925__auto__);
var b__64437 = cljs.core.chunk_buffer.call(null,size__41926__auto__);
if((function (){var i__64436 = (0);
while(true){
if((i__64436 < size__41926__auto__)){
var i = cljs.core._nth.call(null,c__41925__auto__,i__64436);
cljs.core.chunk_append.call(null,b__64437,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("num-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((95) + i)], null));

var G__64450 = (i__64436 + (1));
i__64436 = G__64450;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64437),andel$keybind$iter__64434.call(null,cljs.core.chunk_rest.call(null,s__64435__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64437),null);
}
} else {
var i = cljs.core.first.call(null,s__64435__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("num-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((95) + i)], null),andel$keybind$iter__64434.call(null,cljs.core.rest.call(null,s__64435__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__41927__auto__.call(null,cljs.core.range.call(null,(10)));
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__41927__auto__ = (function andel$keybind$iter__64438(s__64439){
return (new cljs.core.LazySeq(null,(function (){
var s__64439__$1 = s__64439;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__64439__$1);
if(temp__5278__auto__){
var s__64439__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__64439__$2)){
var c__41925__auto__ = cljs.core.chunk_first.call(null,s__64439__$2);
var size__41926__auto__ = cljs.core.count.call(null,c__41925__auto__);
var b__64441 = cljs.core.chunk_buffer.call(null,size__41926__auto__);
if((function (){var i__64440 = (0);
while(true){
if((i__64440 < size__41926__auto__)){
var i = cljs.core._nth.call(null,c__41925__auto__,i__64440);
cljs.core.chunk_append.call(null,b__64441,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((48) + i)], null));

var G__64451 = (i__64440 + (1));
i__64440 = G__64451;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64441),andel$keybind$iter__64438.call(null,cljs.core.chunk_rest.call(null,s__64439__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64441),null);
}
} else {
var i = cljs.core.first.call(null,s__64439__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((48) + i)], null),andel$keybind$iter__64438.call(null,cljs.core.rest.call(null,s__64439__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__41927__auto__.call(null,cljs.core.range.call(null,(10)));
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__41927__auto__ = (function andel$keybind$iter__64442(s__64443){
return (new cljs.core.LazySeq(null,(function (){
var s__64443__$1 = s__64443;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__64443__$1);
if(temp__5278__auto__){
var s__64443__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__64443__$2)){
var c__41925__auto__ = cljs.core.chunk_first.call(null,s__64443__$2);
var size__41926__auto__ = cljs.core.count.call(null,c__41925__auto__);
var b__64445 = cljs.core.chunk_buffer.call(null,size__41926__auto__);
if((function (){var i__64444 = (0);
while(true){
if((i__64444 < size__41926__auto__)){
var i = cljs.core._nth.call(null,c__41925__auto__,i__64444);
cljs.core.chunk_append.call(null,b__64445,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("f"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((111) + i)], null));

var G__64452 = (i__64444 + (1));
i__64444 = G__64452;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64445),andel$keybind$iter__64442.call(null,cljs.core.chunk_rest.call(null,s__64443__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64445),null);
}
} else {
var i = cljs.core.first.call(null,s__64443__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("f"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((111) + i)], null),andel$keybind$iter__64442.call(null,cljs.core.rest.call(null,s__64443__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__41927__auto__.call(null,cljs.core.range.call(null,(1),(25)));
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__41927__auto__ = (function andel$keybind$iter__64446(s__64447){
return (new cljs.core.LazySeq(null,(function (){
var s__64447__$1 = s__64447;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__64447__$1);
if(temp__5278__auto__){
var s__64447__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__64447__$2)){
var c__41925__auto__ = cljs.core.chunk_first.call(null,s__64447__$2);
var size__41926__auto__ = cljs.core.count.call(null,c__41925__auto__);
var b__64449 = cljs.core.chunk_buffer.call(null,size__41926__auto__);
if((function (){var i__64448 = (0);
while(true){
if((i__64448 < size__41926__auto__)){
var i = cljs.core._nth.call(null,c__41925__auto__,i__64448);
cljs.core.chunk_append.call(null,b__64449,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [String.fromCharCode(i).toLowerCase(),i], null));

var G__64453 = (i__64448 + (1));
i__64448 = G__64453;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64449),andel$keybind$iter__64446.call(null,cljs.core.chunk_rest.call(null,s__64447__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64449),null);
}
} else {
var i = cljs.core.first.call(null,s__64447__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [String.fromCharCode(i).toLowerCase(),i], null),andel$keybind$iter__64446.call(null,cljs.core.rest.call(null,s__64447__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__41927__auto__.call(null,cljs.core.range.call(null,(65),(91)));
})()));
andel.keybind.KNOWN_KEYS = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__41927__auto__ = (function andel$keybind$iter__64454(s__64455){
return (new cljs.core.LazySeq(null,(function (){
var s__64455__$1 = s__64455;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__64455__$1);
if(temp__5278__auto__){
var s__64455__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__64455__$2)){
var c__41925__auto__ = cljs.core.chunk_first.call(null,s__64455__$2);
var size__41926__auto__ = cljs.core.count.call(null,c__41925__auto__);
var b__64457 = cljs.core.chunk_buffer.call(null,size__41926__auto__);
if((function (){var i__64456 = (0);
while(true){
if((i__64456 < size__41926__auto__)){
var vec__64458 = cljs.core._nth.call(null,c__41925__auto__,i__64456);
var k = cljs.core.nth.call(null,vec__64458,(0),null);
var v = cljs.core.nth.call(null,vec__64458,(1),null);
cljs.core.chunk_append.call(null,b__64457,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,k], null));

var G__64464 = (i__64456 + (1));
i__64456 = G__64464;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64457),andel$keybind$iter__64454.call(null,cljs.core.chunk_rest.call(null,s__64455__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64457),null);
}
} else {
var vec__64461 = cljs.core.first.call(null,s__64455__$2);
var k = cljs.core.nth.call(null,vec__64461,(0),null);
var v = cljs.core.nth.call(null,vec__64461,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,k], null),andel$keybind$iter__64454.call(null,cljs.core.rest.call(null,s__64455__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__41927__auto__.call(null,andel.keybind.KEYS);
})());
if(typeof andel.keybind.BINDINGS !== 'undefined'){
} else {
andel.keybind.BINDINGS = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof andel.keybind.PRESSED !== 'undefined'){
} else {
andel.keybind.PRESSED = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
andel.keybind.parse_chord = (function andel$keybind$parse_chord(keystring){
var bits = keystring.split("-");
var button = cljs.core.nth.call(null,bits,(cljs.core.count.call(null,bits) - (1)));
var code = cljs.core.get.call(null,andel.keybind.KEYS,button);
if(cljs.core.truth_(code)){
return cljs.core.into.call(null,cljs.core.assoc.call(null,andel.keybind.DEFCHORD,new cljs.core.Keyword(null,"code","code",1586293142),code),(function (){var iter__41927__auto__ = ((function (bits,button,code){
return (function andel$keybind$parse_chord_$_iter__64465(s__64466){
return (new cljs.core.LazySeq(null,((function (bits,button,code){
return (function (){
var s__64466__$1 = s__64466;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__64466__$1);
if(temp__5278__auto__){
var s__64466__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__64466__$2)){
var c__41925__auto__ = cljs.core.chunk_first.call(null,s__64466__$2);
var size__41926__auto__ = cljs.core.count.call(null,c__41925__auto__);
var b__64468 = cljs.core.chunk_buffer.call(null,size__41926__auto__);
if((function (){var i__64467 = (0);
while(true){
if((i__64467 < size__41926__auto__)){
var mod = cljs.core._nth.call(null,c__41925__auto__,i__64467);
cljs.core.chunk_append.call(null,b__64468,(cljs.core.truth_(cljs.core.get.call(null,andel.keybind.MODS,mod))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,andel.keybind.MODS,mod),true], null):null));

var G__64469 = (i__64467 + (1));
i__64467 = G__64469;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64468),andel$keybind$parse_chord_$_iter__64465.call(null,cljs.core.chunk_rest.call(null,s__64466__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64468),null);
}
} else {
var mod = cljs.core.first.call(null,s__64466__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.get.call(null,andel.keybind.MODS,mod))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,andel.keybind.MODS,mod),true], null):null),andel$keybind$parse_chord_$_iter__64465.call(null,cljs.core.rest.call(null,s__64466__$2)));
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
return iter__41927__auto__.call(null,cljs.core.drop_last.call(null,bits));
})());
} else {
return null;
}
});
andel.keybind.parse = (function andel$keybind$parse(chain){
var bits = chain.split(" ");
return cljs.core.mapv.call(null,andel.keybind.parse_chord,bits);
});
andel.keybind.e__GT_chord = (function andel$keybind$e__GT_chord(e){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__41927__auto__ = (function andel$keybind$e__GT_chord_$_iter__64470(s__64471){
return (new cljs.core.LazySeq(null,(function (){
var s__64471__$1 = s__64471;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__64471__$1);
if(temp__5278__auto__){
var s__64471__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__64471__$2)){
var c__41925__auto__ = cljs.core.chunk_first.call(null,s__64471__$2);
var size__41926__auto__ = cljs.core.count.call(null,c__41925__auto__);
var b__64473 = cljs.core.chunk_buffer.call(null,size__41926__auto__);
if((function (){var i__64472 = (0);
while(true){
if((i__64472 < size__41926__auto__)){
var vec__64474 = cljs.core._nth.call(null,c__41925__auto__,i__64472);
var key = cljs.core.nth.call(null,vec__64474,(0),null);
var attr = cljs.core.nth.call(null,vec__64474,(1),null);
cljs.core.chunk_append.call(null,b__64473,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(e[attr])], null));

var G__64480 = (i__64472 + (1));
i__64472 = G__64480;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64473),andel$keybind$e__GT_chord_$_iter__64470.call(null,cljs.core.chunk_rest.call(null,s__64471__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__64473),null);
}
} else {
var vec__64477 = cljs.core.first.call(null,s__64471__$2);
var key = cljs.core.nth.call(null,vec__64477,(0),null);
var attr = cljs.core.nth.call(null,vec__64477,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(e[attr])], null),andel$keybind$e__GT_chord_$_iter__64470.call(null,cljs.core.rest.call(null,s__64471__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__41927__auto__.call(null,andel.keybind.KEYATTRS);
})());
});
andel.keybind.reset_sequence_BANG_ = (function andel$keybind$reset_sequence_BANG_(){
return cljs.core.swap_BANG_.call(null,andel.keybind.PRESSED,cljs.core.empty);
});
andel.keybind.dispatch = (function andel$keybind$dispatch(e,bindings){
var chord = andel.keybind.e__GT_chord.call(null,e);
var sequence = cljs.core.conj.call(null,cljs.core.deref.call(null,andel.keybind.PRESSED),chord);
var inner = cljs.core.get_in.call(null,bindings,sequence);
var handlers = new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(inner);
if(cljs.core.not.call(null,inner)){
return andel.keybind.reset_sequence_BANG_.call(null);
} else {
if(cljs.core.truth_(handlers)){
var seq__64481_64491 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(inner));
var chunk__64482_64492 = null;
var count__64483_64493 = (0);
var i__64484_64494 = (0);
while(true){
if((i__64484_64494 < count__64483_64493)){
var vec__64485_64495 = cljs.core._nth.call(null,chunk__64482_64492,i__64484_64494);
var __64496 = cljs.core.nth.call(null,vec__64485_64495,(0),null);
var handler_64497 = cljs.core.nth.call(null,vec__64485_64495,(1),null);
handler_64497.call(null,e,sequence);

var G__64498 = seq__64481_64491;
var G__64499 = chunk__64482_64492;
var G__64500 = count__64483_64493;
var G__64501 = (i__64484_64494 + (1));
seq__64481_64491 = G__64498;
chunk__64482_64492 = G__64499;
count__64483_64493 = G__64500;
i__64484_64494 = G__64501;
continue;
} else {
var temp__5278__auto___64502 = cljs.core.seq.call(null,seq__64481_64491);
if(temp__5278__auto___64502){
var seq__64481_64503__$1 = temp__5278__auto___64502;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64481_64503__$1)){
var c__41976__auto___64504 = cljs.core.chunk_first.call(null,seq__64481_64503__$1);
var G__64505 = cljs.core.chunk_rest.call(null,seq__64481_64503__$1);
var G__64506 = c__41976__auto___64504;
var G__64507 = cljs.core.count.call(null,c__41976__auto___64504);
var G__64508 = (0);
seq__64481_64491 = G__64505;
chunk__64482_64492 = G__64506;
count__64483_64493 = G__64507;
i__64484_64494 = G__64508;
continue;
} else {
var vec__64488_64509 = cljs.core.first.call(null,seq__64481_64503__$1);
var __64510 = cljs.core.nth.call(null,vec__64488_64509,(0),null);
var handler_64511 = cljs.core.nth.call(null,vec__64488_64509,(1),null);
handler_64511.call(null,e,sequence);

var G__64512 = cljs.core.next.call(null,seq__64481_64503__$1);
var G__64513 = null;
var G__64514 = (0);
var G__64515 = (0);
seq__64481_64491 = G__64512;
chunk__64482_64492 = G__64513;
count__64483_64493 = G__64514;
i__64484_64494 = G__64515;
continue;
}
} else {
}
}
break;
}

return andel.keybind.reset_sequence_BANG_.call(null);
} else {
return cljs.core.reset_BANG_.call(null,andel.keybind.PRESSED,sequence);

}
}
});
andel.keybind.bind = (function andel$keybind$bind(bindings,spec,key,cb){

var parsed = andel.keybind.parse.call(null,spec);
return cljs.core.assoc_in.call(null,bindings,cljs.core.conj.call(null,parsed,new cljs.core.Keyword(null,"handlers","handlers",79528781),key),cb);
});
andel.keybind.unbind = (function andel$keybind$unbind(bindings,spec,key){

var parsed = andel.keybind.parse.call(null,spec);
return cljs.core.update_in.call(null,bindings,cljs.core.conj.call(null,parsed,new cljs.core.Keyword(null,"handlers","handlers",79528781)),cljs.core.dissoc,key);
});
andel.keybind.bind_BANG_ = (function andel$keybind$bind_BANG_(spec,key,cb){

return cljs.core.swap_BANG_.call(null,andel.keybind.BINDINGS,andel.keybind.bind,spec,key,cb);
});
andel.keybind.unbind_BANG_ = (function andel$keybind$unbind_BANG_(spec,key){

return cljs.core.swap_BANG_.call(null,andel.keybind.BINDINGS,andel.keybind.unbind,spec,key);
});
andel.keybind.unbind_all_BANG_ = (function andel$keybind$unbind_all_BANG_(){

andel.keybind.reset_sequence_BANG_.call(null);

return cljs.core.swap_BANG_.call(null,andel.keybind.BINDINGS,cljs.core.empty);
});
andel.keybind.dispatcher = (function andel$keybind$dispatcher(){

return (function (e){
if(cljs.core.truth_(cljs.core.get.call(null,andel.keybind.KNOWN_KEYS,e.keyCode))){
return andel.keybind.dispatch.call(null,e,cljs.core.deref.call(null,andel.keybind.BINDINGS));
} else {
return null;
}
});
});

//# sourceMappingURL=keybind.js.map?rel=1504289160824