// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('andel.controller');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('andel.utils');
goog.require('andel.text');
goog.require('andel.intervals');
andel.controller.drop_virtual_position = (function andel$controller$drop_virtual_position(caret){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(caret,cljs.core.cst$kw$v_DASH_col,(0));
});
andel.controller.caret__GT_offset = (function andel$controller$caret__GT_offset(p__20182){
var map__20183 = p__20182;
var map__20183__$1 = ((((!((map__20183 == null)))?((((map__20183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20183.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20183):map__20183);
var caret = map__20183__$1;
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20183__$1,cljs.core.cst$kw$offset);
return offset;
});
andel.controller.set_caret_at_offset = (function andel$controller$set_caret_at_offset(caret,text,new_offset){
var text_length = (andel.text.text_length(text) - (1));
var offset_SINGLEQUOTE_ = (function (){var x__8023__auto__ = (function (){var x__8016__auto__ = new_offset;
var y__8017__auto__ = (0);
return ((x__8016__auto__ > y__8017__auto__) ? x__8016__auto__ : y__8017__auto__);
})();
var y__8024__auto__ = text_length;
return ((x__8023__auto__ < y__8024__auto__) ? x__8023__auto__ : y__8024__auto__);
})();
return andel.controller.drop_virtual_position(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(caret,cljs.core.cst$kw$offset,offset_SINGLEQUOTE_));
});
andel.controller.translate_caret = (function andel$controller$translate_caret(caret,text,delta_offset){
return andel.controller.set_caret_at_offset(caret,text,(andel.controller.caret__GT_offset(caret) + delta_offset));
});
andel.controller.translate_caret_verticaly = (function andel$controller$translate_caret_verticaly(p__20185,text,delta_line){
var map__20186 = p__20185;
var map__20186__$1 = ((((!((map__20186 == null)))?((((map__20186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20186.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20186):map__20186);
var caret = map__20186__$1;
var v_col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20186__$1,cljs.core.cst$kw$v_DASH_col);
var carret_offset = andel.controller.caret__GT_offset(caret);
var map__20188 = andel.utils.offset__GT_line_col(carret_offset,text);
var map__20188__$1 = ((((!((map__20188 == null)))?((((map__20188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20188.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20188):map__20188);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20188__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20188__$1,cljs.core.cst$kw$col);
var to_line = (line + delta_line);
var prev_line_length = andel.utils.line__GT_length(to_line,text);
var new_v_col = (function (){var x__8016__auto__ = v_col;
var y__8017__auto__ = col;
return ((x__8016__auto__ > y__8017__auto__) ? x__8016__auto__ : y__8017__auto__);
})();
var new_col = (function (){var x__8023__auto__ = prev_line_length;
var y__8024__auto__ = new_v_col;
return ((x__8023__auto__ < y__8024__auto__) ? x__8023__auto__ : y__8024__auto__);
})();
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$offset,andel.utils.line_col__GT_offset(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$line,to_line,cljs.core.cst$kw$col,new_col], null),text),cljs.core.cst$kw$v_DASH_col,new_v_col], null);
});
andel.controller.update_selection = (function andel$controller$update_selection(p__20190,old_caret,new_caret,selection_QMARK_){
var vec__20191 = p__20190;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20191,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20191,(1),null);
var selection = vec__20191;
var caret_offset = andel.controller.caret__GT_offset(old_caret);
var caret_offset_SINGLEQUOTE_ = andel.controller.caret__GT_offset(new_caret);
if(cljs.core.not(selection_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [caret_offset_SINGLEQUOTE_,caret_offset_SINGLEQUOTE_], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(caret_offset,from)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__8023__auto__ = caret_offset_SINGLEQUOTE_;
var y__8024__auto__ = to;
return ((x__8023__auto__ < y__8024__auto__) ? x__8023__auto__ : y__8024__auto__);
})(),(function (){var x__8016__auto__ = caret_offset_SINGLEQUOTE_;
var y__8017__auto__ = to;
return ((x__8016__auto__ > y__8017__auto__) ? x__8016__auto__ : y__8017__auto__);
})()], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(caret_offset,to)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__8023__auto__ = from;
var y__8024__auto__ = caret_offset_SINGLEQUOTE_;
return ((x__8023__auto__ < y__8024__auto__) ? x__8023__auto__ : y__8024__auto__);
})(),(function (){var x__8016__auto__ = from;
var y__8017__auto__ = caret_offset_SINGLEQUOTE_;
return ((x__8016__auto__ > y__8017__auto__) ? x__8016__auto__ : y__8017__auto__);
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__8023__auto__ = caret_offset;
var y__8024__auto__ = caret_offset_SINGLEQUOTE_;
return ((x__8023__auto__ < y__8024__auto__) ? x__8023__auto__ : y__8024__auto__);
})(),(function (){var x__8016__auto__ = caret_offset_SINGLEQUOTE_;
var y__8017__auto__ = caret_offset_SINGLEQUOTE_;
return ((x__8016__auto__ > y__8017__auto__) ? x__8016__auto__ : y__8017__auto__);
})()], null);

}
}
}
});
andel.controller.selection_length = (function andel$controller$selection_length(p__20194){
var vec__20195 = p__20194;
var left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20195,(0),null);
var right = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20195,(1),null);
var selection = vec__20195;
if((left <= right)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Wrong selection positioning: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(selection)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(<= left right)")].join('')));
}

return (right - left);
});
andel.controller.drop_selection = (function andel$controller$drop_selection(p__20198){
var map__20199 = p__20198;
var map__20199__$1 = ((((!((map__20199 == null)))?((((map__20199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20199.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20199):map__20199);
var editor = map__20199__$1;
var map__20200 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20199__$1,cljs.core.cst$kw$caret);
var map__20200__$1 = ((((!((map__20200 == null)))?((((map__20200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20200.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20200):map__20200);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20200__$1,cljs.core.cst$kw$offset);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(editor,cljs.core.cst$kw$selection,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [offset,offset], null));
});
andel.controller.set_text = (function andel$controller$set_text(state,text){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$document,cljs.core.cst$kw$text], null),andel.text.make_text(text)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$document,cljs.core.cst$kw$first_DASH_invalid], null),(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$document,cljs.core.cst$kw$timestamp], null),cljs.core.inc);
});
andel.controller.add_markup = (function andel$controller$add_markup(state,markup){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$document,cljs.core.cst$kw$markup], null),(function (markup_tree){
return andel.intervals.add_intervals(markup_tree,markup);
}));
});
andel.controller.edit_at_offset = (function andel$controller$edit_at_offset(p__20203,offset,f){
var map__20204 = p__20203;
var map__20204__$1 = ((((!((map__20204 == null)))?((((map__20204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20204.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20204):map__20204);
var state = map__20204__$1;
var document = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20204__$1,cljs.core.cst$kw$document);
var map__20206 = document;
var map__20206__$1 = ((((!((map__20206 == null)))?((((map__20206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20206.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20206):map__20206);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20206__$1,cljs.core.cst$kw$text);
var edit_point = andel.utils.offset__GT_loc(offset,text);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$document,cljs.core.cst$kw$text], null),(function (){var G__20208 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(edit_point) : f.call(null,edit_point));
return (andel.text.root.cljs$core$IFn$_invoke$arity$1 ? andel.text.root.cljs$core$IFn$_invoke$arity$1(G__20208) : andel.text.root.call(null,G__20208));
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$document,cljs.core.cst$kw$timestamp], null),cljs.core.inc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$document,cljs.core.cst$kw$first_DASH_invalid], null),cljs.core.min,andel.utils.loc__GT_line(edit_point));
});
andel.controller.edit_at_line_col = (function andel$controller$edit_at_line_col(p__20209,line_col,f){
var map__20210 = p__20209;
var map__20210__$1 = ((((!((map__20210 == null)))?((((map__20210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20210.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20210):map__20210);
var state = map__20210__$1;
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20210__$1,cljs.core.cst$kw$text);
var offset = andel.utils.line_col__GT_offset(line_col,text);
return andel.controller.edit_at_offset(state,offset,f);
});
andel.controller.edit_at_caret = (function andel$controller$edit_at_caret(state,fn){
var caret_offset = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor,cljs.core.cst$kw$caret,cljs.core.cst$kw$offset], null));
return andel.controller.edit_at_offset(state,caret_offset,fn);
});
andel.controller.delete_under_selection = (function andel$controller$delete_under_selection(p__20213){
var map__20214 = p__20213;
var map__20214__$1 = ((((!((map__20214 == null)))?((((map__20214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20214.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20214):map__20214);
var state = map__20214__$1;
var editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20214__$1,cljs.core.cst$kw$editor);
var document = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20214__$1,cljs.core.cst$kw$document);
var map__20216 = editor;
var map__20216__$1 = ((((!((map__20216 == null)))?((((map__20216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20216.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20216):map__20216);
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20216__$1,cljs.core.cst$kw$selection);
var vec__20217 = selection;
var sel_from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20217,(0),null);
var sel_to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20217,(1),null);
var sel_len = (sel_to - sel_from);
var st = state;
var st__$1 = andel.controller.edit_at_offset(st,sel_from,((function (st,map__20216,map__20216__$1,selection,vec__20217,sel_from,sel_to,sel_len,map__20214,map__20214__$1,state,editor,document){
return (function (p1__20212_SHARP_){
return andel.text.delete$(p1__20212_SHARP_,sel_len);
});})(st,map__20216,map__20216__$1,selection,vec__20217,sel_from,sel_to,sel_len,map__20214,map__20214__$1,state,editor,document))
);
var st__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(st__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor,cljs.core.cst$kw$caret], null),andel.controller.set_caret_at_offset,cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(document),sel_from);
var st__$3 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(st__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$document,cljs.core.cst$kw$markup], null),andel.intervals.delete_range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$caret.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$editor.cljs$core$IFn$_invoke$arity$1(st__$2))),sel_len], null));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(st__$3,cljs.core.cst$kw$editor,andel.controller.drop_selection);
});
andel.controller.set_selection_under_caret = (function andel$controller$set_selection_under_caret(editor){
var caret_offset = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(editor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$caret,cljs.core.cst$kw$offset], null));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(editor,cljs.core.cst$kw$selection,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [caret_offset,caret_offset], null));
});
andel.controller.type_in = (function andel$controller$type_in(p__20222,str){
var map__20223 = p__20222;
var map__20223__$1 = ((((!((map__20223 == null)))?((((map__20223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20223.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20223):map__20223);
var state = map__20223__$1;
var editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20223__$1,cljs.core.cst$kw$editor);
var str_len = cljs.core.count(str);
var st = state;
var st__$1 = andel.controller.delete_under_selection(st);
var st__$2 = andel.controller.edit_at_caret(st__$1,((function (st,st__$1,str_len,map__20223,map__20223__$1,state,editor){
return (function (p1__20221_SHARP_){
return andel.text.insert(p1__20221_SHARP_,str);
});})(st,st__$1,str_len,map__20223,map__20223__$1,state,editor))
);
var st__$3 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(st__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$document,cljs.core.cst$kw$markup], null),andel.intervals.type_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$caret.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$editor.cljs$core$IFn$_invoke$arity$1(st__$2))),str_len], null));
var st__$4 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(st__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor,cljs.core.cst$kw$caret], null),andel.controller.translate_caret,cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$document.cljs$core$IFn$_invoke$arity$1(st__$3)),str_len);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(st__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor], null),andel.controller.set_selection_under_caret);
});
andel.controller.get_caret_line = (function andel$controller$get_caret_line(caret,text){
var map__20225 = caret;
var map__20225__$1 = ((((!((map__20225 == null)))?((((map__20225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20225.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20225):map__20225);
var caret_offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20225__$1,cljs.core.cst$kw$offset);
var line = andel.utils.offset__GT_line(caret_offset,text);
return line;
});
andel.controller.get_line_ident = (function andel$controller$get_line_ident(text,line){
var loc = andel.text.scan_to_line(andel.text.zipper(text),line);
var line_text = andel.text.text(loc,andel.text.line_length(loc));
var trimmed = clojure.string.triml(line_text);
var ident_size = (cljs.core.count(line_text) - cljs.core.count(trimmed));
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(line_text,(0),ident_size);
});
andel.controller.on_enter = (function andel$controller$on_enter(p__20227){
var map__20228 = p__20227;
var map__20228__$1 = ((((!((map__20228 == null)))?((((map__20228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20228.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20228):map__20228);
var state = map__20228__$1;
var editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20228__$1,cljs.core.cst$kw$editor);
var document = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20228__$1,cljs.core.cst$kw$document);
var text = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(document);
var line = andel.controller.get_caret_line(cljs.core.cst$kw$caret.cljs$core$IFn$_invoke$arity$1(editor),text);
var identation = andel.controller.get_line_ident(text,line);
return andel.controller.type_in(state,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(identation)].join(''));
});
andel.controller.set_caret_at_grid_pos = (function andel$controller$set_caret_at_grid_pos(p__20230,line_col,selection_QMARK_){
var map__20231 = p__20230;
var map__20231__$1 = ((((!((map__20231 == null)))?((((map__20231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20231.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20231):map__20231);
var state = map__20231__$1;
var editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20231__$1,cljs.core.cst$kw$editor);
var document = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20231__$1,cljs.core.cst$kw$document);
var map__20233 = editor;
var map__20233__$1 = ((((!((map__20233 == null)))?((((map__20233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20233.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20233):map__20233);
var caret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20233__$1,cljs.core.cst$kw$caret);
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20233__$1,cljs.core.cst$kw$selection);
var map__20234 = document;
var map__20234__$1 = ((((!((map__20234 == null)))?((((map__20234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20234.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20234):map__20234);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20234__$1,cljs.core.cst$kw$text);
var caret_offset_SINGLEQUOTE_ = andel.utils.line_col__GT_offset(line_col,text);
var caret_SINGLEQUOTE_ = andel.controller.set_caret_at_offset(caret,text,caret_offset_SINGLEQUOTE_);
var selection_SINGLEQUOTE_ = andel.controller.update_selection(selection,caret,caret_SINGLEQUOTE_,selection_QMARK_);
var st = state;
var st__$1 = cljs.core.assoc_in(st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor,cljs.core.cst$kw$caret], null),caret_SINGLEQUOTE_);
return cljs.core.assoc_in(st__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor,cljs.core.cst$kw$selection], null),selection_SINGLEQUOTE_);
});
andel.controller.set_caret_at_line_begining = (function andel$controller$set_caret_at_line_begining(state,line,selection_QMARK_){
return andel.controller.set_caret_at_grid_pos(state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,(0)], null),selection_QMARK_);
});
andel.controller.set_caret_at_line_end = (function andel$controller$set_caret_at_line_end(state,line,selection_QMARK_){
return andel.controller.set_caret_at_grid_pos(state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,Number.POSITIVE_INFINITY], null),selection_QMARK_);
});
andel.controller.backspace = (function andel$controller$backspace(p__20238){
var map__20239 = p__20238;
var map__20239__$1 = ((((!((map__20239 == null)))?((((map__20239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20239.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20239):map__20239);
var state = map__20239__$1;
var editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20239__$1,cljs.core.cst$kw$editor);
var document = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20239__$1,cljs.core.cst$kw$document);
var map__20241 = editor;
var map__20241__$1 = ((((!((map__20241 == null)))?((((map__20241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20241.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20241):map__20241);
var caret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20241__$1,cljs.core.cst$kw$caret);
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20241__$1,cljs.core.cst$kw$selection);
var caret_offset = andel.controller.caret__GT_offset(caret);
if(((0) < andel.controller.selection_length(selection))){
return andel.controller.delete_under_selection(state);
} else {
if(((0) < caret_offset)){
var st = state;
var st__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$document,cljs.core.cst$kw$markup], null),andel.intervals.delete_range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$caret.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$editor.cljs$core$IFn$_invoke$arity$1(st))) - (1)),(1)], null));
var st__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(st__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor,cljs.core.cst$kw$caret], null),andel.controller.translate_caret,cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(document),(-1));
var st__$3 = andel.controller.edit_at_caret(st__$2,((function (st,st__$1,st__$2,map__20241,map__20241__$1,caret,selection,caret_offset,map__20239,map__20239__$1,state,editor,document){
return (function (p1__20237_SHARP_){
return andel.text.delete$(p1__20237_SHARP_,(1));
});})(st,st__$1,st__$2,map__20241,map__20241__$1,caret,selection,caret_offset,map__20239,map__20239__$1,state,editor,document))
);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(st__$3,cljs.core.cst$kw$editor,andel.controller.drop_selection);
} else {
return state;

}
}
});
andel.controller.delete$ = (function andel$controller$delete(p__20244){
var map__20245 = p__20244;
var map__20245__$1 = ((((!((map__20245 == null)))?((((map__20245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20245.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20245):map__20245);
var state = map__20245__$1;
var document = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20245__$1,cljs.core.cst$kw$document);
var editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20245__$1,cljs.core.cst$kw$editor);
var map__20247 = editor;
var map__20247__$1 = ((((!((map__20247 == null)))?((((map__20247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20247.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20247):map__20247);
var caret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20247__$1,cljs.core.cst$kw$caret);
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20247__$1,cljs.core.cst$kw$selection);
var map__20248 = caret;
var map__20248__$1 = ((((!((map__20248 == null)))?((((map__20248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20248.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20248):map__20248);
var caret_offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20248__$1,cljs.core.cst$kw$offset);
var map__20249 = document;
var map__20249__$1 = ((((!((map__20249 == null)))?((((map__20249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20249.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20249):map__20249);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20249__$1,cljs.core.cst$kw$text);
if(((0) < andel.controller.selection_length(selection))){
return andel.controller.delete_under_selection(state);
} else {
if((caret_offset < andel.text.text_length(text))){
var st = state;
var st__$1 = andel.controller.edit_at_caret(st,((function (st,map__20247,map__20247__$1,caret,selection,map__20248,map__20248__$1,caret_offset,map__20249,map__20249__$1,text,map__20245,map__20245__$1,state,document,editor){
return (function (p1__20243_SHARP_){
return andel.text.delete$(p1__20243_SHARP_,(1));
});})(st,map__20247,map__20247__$1,caret,selection,map__20248,map__20248__$1,caret_offset,map__20249,map__20249__$1,text,map__20245,map__20245__$1,state,document,editor))
);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(st__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$document,cljs.core.cst$kw$markup], null),andel.intervals.delete_range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$caret.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$editor.cljs$core$IFn$_invoke$arity$1(st__$1))),(1)], null));
} else {
return state;

}
}
});
andel.controller.set_view_to_line = (function andel$controller$set_view_to_line(state,line,metrics){
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$viewport,cljs.core.cst$kw$pos,(1)], null),(line * andel.utils.line_height(metrics)));
});
andel.controller.count_lines_in_view = (function andel$controller$count_lines_in_view(viewport,metrics){
var map__20253 = viewport;
var map__20253__$1 = ((((!((map__20253 == null)))?((((map__20253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20253.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20253):map__20253);
var view_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20253__$1,cljs.core.cst$kw$view_DASH_size);
var vec__20254 = view_size;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20254,(0),null);
var view_size__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20254,(1),null);
var G__20258 = (view_size__$1 / andel.utils.line_height(metrics));
return Math.round(G__20258);
});
andel.controller.get_view_in_lines = (function andel$controller$get_view_in_lines(viewport,metrics){
var map__20259 = viewport;
var map__20259__$1 = ((((!((map__20259 == null)))?((((map__20259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20259.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20259):map__20259);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20259__$1,cljs.core.cst$kw$pos);
var vec__20260 = pos;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20260,(0),null);
var pos_px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20260,(1),null);
var pos_in_lines = (function (){var G__20264 = (pos_px / andel.utils.line_height(metrics));
return Math.round(G__20264);
})();
var pos_in_lines_end = (pos_in_lines + andel.controller.count_lines_in_view(viewport,metrics));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos_in_lines,pos_in_lines_end], null);
});
andel.controller.move_view_if_needed = (function andel$controller$move_view_if_needed(p__20265){
var map__20266 = p__20265;
var map__20266__$1 = ((((!((map__20266 == null)))?((((map__20266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20266.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20266):map__20266);
var state = map__20266__$1;
var document = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20266__$1,cljs.core.cst$kw$document);
var editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20266__$1,cljs.core.cst$kw$editor);
var viewport = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20266__$1,cljs.core.cst$kw$viewport);
var map__20268 = document;
var map__20268__$1 = ((((!((map__20268 == null)))?((((map__20268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20268.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20268):map__20268);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20268__$1,cljs.core.cst$kw$text);
var map__20269 = editor;
var map__20269__$1 = ((((!((map__20269 == null)))?((((map__20269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20269.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20269):map__20269);
var caret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20269__$1,cljs.core.cst$kw$caret);
var map__20270 = viewport;
var map__20270__$1 = ((((!((map__20270 == null)))?((((map__20270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20270.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20270):map__20270);
var metrics = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20270__$1,cljs.core.cst$kw$metrics);
var caret_l = andel.utils.offset__GT_line(andel.controller.caret__GT_offset(caret),text);
var vec__20271 = andel.controller.get_view_in_lines(viewport,metrics);
var from_l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20271,(0),null);
var to_l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20271,(1),null);
var view_in_lines = (to_l - from_l);
if(((caret_l < from_l)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from_l,(0)))){
return andel.controller.set_view_to_line(state,caret_l,metrics);
} else {
if(((to_l - (1)) < caret_l)){
return andel.controller.set_view_to_line(state,(caret_l - (view_in_lines - (1))),metrics);
} else {
return state;

}
}
});
andel.controller.pg_move = (function andel$controller$pg_move(p__20277,dir,selection_QMARK_){
var map__20278 = p__20277;
var map__20278__$1 = ((((!((map__20278 == null)))?((((map__20278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20278.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20278):map__20278);
var state = map__20278__$1;
var document = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20278__$1,cljs.core.cst$kw$document);
var viewport = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20278__$1,cljs.core.cst$kw$viewport);
var map__20280 = document;
var map__20280__$1 = ((((!((map__20280 == null)))?((((map__20280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20280.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20280):map__20280);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20280__$1,cljs.core.cst$kw$text);
var map__20281 = viewport;
var map__20281__$1 = ((((!((map__20281 == null)))?((((map__20281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20281.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20281):map__20281);
var metrics = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20281__$1,cljs.core.cst$kw$metrics);
var view_size_in_lines = andel.controller.count_lines_in_view(viewport,metrics);
var sign = (function (){var G__20284 = dir;
var G__20284__$1 = (((G__20284 instanceof cljs.core.Keyword))?G__20284.fqn:null);
switch (G__20284__$1) {
case "up":
return cljs.core._;

break;
case "down":
return cljs.core._PLUS_;

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20284__$1)].join('')));

}
})();
return andel.controller.move_view_if_needed(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor,cljs.core.cst$kw$caret], null),andel.controller.translate_caret_verticaly,text,(sign.cljs$core$IFn$_invoke$arity$1 ? sign.cljs$core$IFn$_invoke$arity$1(view_size_in_lines) : sign.call(null,view_size_in_lines))));
});
andel.controller.home = (function andel$controller$home(p__20286,selection_QMARK_){
var map__20287 = p__20286;
var map__20287__$1 = ((((!((map__20287 == null)))?((((map__20287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20287.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20287):map__20287);
var state = map__20287__$1;
var map__20288 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20287__$1,cljs.core.cst$kw$editor);
var map__20288__$1 = ((((!((map__20288 == null)))?((((map__20288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20288.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20288):map__20288);
var caret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20288__$1,cljs.core.cst$kw$caret);
var map__20289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20287__$1,cljs.core.cst$kw$document);
var map__20289__$1 = ((((!((map__20289 == null)))?((((map__20289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20289.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20289):map__20289);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20289__$1,cljs.core.cst$kw$text);
var carret_line = andel.controller.get_caret_line(caret,text);
return andel.controller.set_caret_at_line_begining(state,andel.controller.get_caret_line(caret,text),selection_QMARK_);
});
andel.controller.end = (function andel$controller$end(p__20293,selection_QMARK_){
var map__20294 = p__20293;
var map__20294__$1 = ((((!((map__20294 == null)))?((((map__20294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20294.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20294):map__20294);
var state = map__20294__$1;
var map__20295 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20294__$1,cljs.core.cst$kw$editor);
var map__20295__$1 = ((((!((map__20295 == null)))?((((map__20295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20295.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20295):map__20295);
var caret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20295__$1,cljs.core.cst$kw$caret);
var map__20296 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20294__$1,cljs.core.cst$kw$document);
var map__20296__$1 = ((((!((map__20296 == null)))?((((map__20296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20296.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20296):map__20296);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20296__$1,cljs.core.cst$kw$text);
var carret_line = andel.controller.get_caret_line(caret,text);
return andel.controller.set_caret_at_line_end(state,andel.controller.get_caret_line(caret,text),selection_QMARK_);
});
andel.controller.move_caret = (function andel$controller$move_caret(p__20300,dir,selection_QMARK_){
var map__20301 = p__20300;
var map__20301__$1 = ((((!((map__20301 == null)))?((((map__20301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20301.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20301):map__20301);
var state = map__20301__$1;
var map__20302 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20301__$1,cljs.core.cst$kw$document);
var map__20302__$1 = ((((!((map__20302 == null)))?((((map__20302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20302.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20302):map__20302);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20302__$1,cljs.core.cst$kw$text);
var map__20303 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20301__$1,cljs.core.cst$kw$editor);
var map__20303__$1 = ((((!((map__20303 == null)))?((((map__20303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20303.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20303):map__20303);
var caret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20303__$1,cljs.core.cst$kw$caret);
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20303__$1,cljs.core.cst$kw$selection);
var caret_SINGLEQUOTE_ = (function (){var G__20307 = dir;
var G__20307__$1 = (((G__20307 instanceof cljs.core.Keyword))?G__20307.fqn:null);
switch (G__20307__$1) {
case "left":
return andel.controller.translate_caret(caret,text,(-1));

break;
case "right":
return andel.controller.translate_caret(caret,text,(1));

break;
case "up":
return andel.controller.translate_caret_verticaly(caret,text,(-1));

break;
case "down":
return andel.controller.translate_caret_verticaly(caret,text,(1));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20307__$1)].join('')));

}
})();
var selection_SINGLEQUOTE_ = andel.controller.update_selection(selection,caret,caret_SINGLEQUOTE_,selection_QMARK_);
return andel.controller.move_view_if_needed(cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor,cljs.core.cst$kw$caret], null),caret_SINGLEQUOTE_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$editor,cljs.core.cst$kw$selection], null),selection_SINGLEQUOTE_));
});
andel.controller.drop_selection_on_esc = (function andel$controller$drop_selection_on_esc(state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$editor,andel.controller.drop_selection);
});
