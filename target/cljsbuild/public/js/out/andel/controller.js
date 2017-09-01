// Compiled by ClojureScript 1.9.671 {}
goog.provide('andel.controller');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('andel.utils');
goog.require('andel.text');
goog.require('andel.intervals');
andel.controller.drop_virtual_position = (function andel$controller$drop_virtual_position(caret){
return cljs.core.assoc.call(null,caret,new cljs.core.Keyword(null,"v-col","v-col",1346715099),(0));
});
andel.controller.caret__GT_offset = (function andel$controller$caret__GT_offset(p__63283){
var map__63284 = p__63283;
var map__63284__$1 = ((((!((map__63284 == null)))?((((map__63284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63284.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63284):map__63284);
var caret = map__63284__$1;
var offset = cljs.core.get.call(null,map__63284__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
return offset;
});
andel.controller.set_caret_at_offset = (function andel$controller$set_caret_at_offset(caret,text,new_offset){
var text_length = (andel.text.text_length.call(null,text) - (1));
var offset_SINGLEQUOTE_ = (function (){var x__41409__auto__ = (function (){var x__41402__auto__ = new_offset;
var y__41403__auto__ = (0);
return ((x__41402__auto__ > y__41403__auto__) ? x__41402__auto__ : y__41403__auto__);
})();
var y__41410__auto__ = text_length;
return ((x__41409__auto__ < y__41410__auto__) ? x__41409__auto__ : y__41410__auto__);
})();
return andel.controller.drop_virtual_position.call(null,cljs.core.assoc.call(null,caret,new cljs.core.Keyword(null,"offset","offset",296498311),offset_SINGLEQUOTE_));
});
andel.controller.translate_caret = (function andel$controller$translate_caret(caret,text,delta_offset){
return andel.controller.set_caret_at_offset.call(null,caret,text,(andel.controller.caret__GT_offset.call(null,caret) + delta_offset));
});
andel.controller.translate_caret_verticaly = (function andel$controller$translate_caret_verticaly(p__63286,text,delta_line){
var map__63287 = p__63286;
var map__63287__$1 = ((((!((map__63287 == null)))?((((map__63287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63287.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63287):map__63287);
var caret = map__63287__$1;
var v_col = cljs.core.get.call(null,map__63287__$1,new cljs.core.Keyword(null,"v-col","v-col",1346715099));
var carret_offset = andel.controller.caret__GT_offset.call(null,caret);
var map__63289 = andel.utils.offset__GT_line_col.call(null,carret_offset,text);
var map__63289__$1 = ((((!((map__63289 == null)))?((((map__63289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63289.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63289):map__63289);
var line = cljs.core.get.call(null,map__63289__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__63289__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var to_line = (line + delta_line);
var prev_line_length = andel.utils.line__GT_length.call(null,to_line,text);
var new_v_col = (function (){var x__41402__auto__ = v_col;
var y__41403__auto__ = col;
return ((x__41402__auto__ > y__41403__auto__) ? x__41402__auto__ : y__41403__auto__);
})();
var new_col = (function (){var x__41409__auto__ = prev_line_length;
var y__41410__auto__ = new_v_col;
return ((x__41409__auto__ < y__41410__auto__) ? x__41409__auto__ : y__41410__auto__);
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"offset","offset",296498311),andel.utils.line_col__GT_offset.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),to_line,new cljs.core.Keyword(null,"col","col",-1959363084),new_col], null),text),new cljs.core.Keyword(null,"v-col","v-col",1346715099),new_v_col], null);
});
andel.controller.update_selection = (function andel$controller$update_selection(p__63291,old_caret,new_caret,selection_QMARK_){
var vec__63292 = p__63291;
var from = cljs.core.nth.call(null,vec__63292,(0),null);
var to = cljs.core.nth.call(null,vec__63292,(1),null);
var selection = vec__63292;
var caret_offset = andel.controller.caret__GT_offset.call(null,old_caret);
var caret_offset_SINGLEQUOTE_ = andel.controller.caret__GT_offset.call(null,new_caret);
if(cljs.core.not.call(null,selection_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [caret_offset_SINGLEQUOTE_,caret_offset_SINGLEQUOTE_], null);
} else {
if(cljs.core._EQ_.call(null,caret_offset,from)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__41409__auto__ = caret_offset_SINGLEQUOTE_;
var y__41410__auto__ = to;
return ((x__41409__auto__ < y__41410__auto__) ? x__41409__auto__ : y__41410__auto__);
})(),(function (){var x__41402__auto__ = caret_offset_SINGLEQUOTE_;
var y__41403__auto__ = to;
return ((x__41402__auto__ > y__41403__auto__) ? x__41402__auto__ : y__41403__auto__);
})()], null);
} else {
if(cljs.core._EQ_.call(null,caret_offset,to)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__41409__auto__ = from;
var y__41410__auto__ = caret_offset_SINGLEQUOTE_;
return ((x__41409__auto__ < y__41410__auto__) ? x__41409__auto__ : y__41410__auto__);
})(),(function (){var x__41402__auto__ = from;
var y__41403__auto__ = caret_offset_SINGLEQUOTE_;
return ((x__41402__auto__ > y__41403__auto__) ? x__41402__auto__ : y__41403__auto__);
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__41409__auto__ = caret_offset;
var y__41410__auto__ = caret_offset_SINGLEQUOTE_;
return ((x__41409__auto__ < y__41410__auto__) ? x__41409__auto__ : y__41410__auto__);
})(),(function (){var x__41402__auto__ = caret_offset_SINGLEQUOTE_;
var y__41403__auto__ = caret_offset_SINGLEQUOTE_;
return ((x__41402__auto__ > y__41403__auto__) ? x__41402__auto__ : y__41403__auto__);
})()], null);

}
}
}
});
andel.controller.selection_length = (function andel$controller$selection_length(p__63295){
var vec__63296 = p__63295;
var left = cljs.core.nth.call(null,vec__63296,(0),null);
var right = cljs.core.nth.call(null,vec__63296,(1),null);
var selection = vec__63296;
if((left <= right)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Wrong selection positioning: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(selection)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(<= left right)")].join('')));
}

return (right - left);
});
andel.controller.drop_selection = (function andel$controller$drop_selection(p__63299){
var map__63300 = p__63299;
var map__63300__$1 = ((((!((map__63300 == null)))?((((map__63300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63300.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63300):map__63300);
var editor = map__63300__$1;
var map__63301 = cljs.core.get.call(null,map__63300__$1,new cljs.core.Keyword(null,"caret","caret",-1275001854));
var map__63301__$1 = ((((!((map__63301 == null)))?((((map__63301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63301.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63301):map__63301);
var offset = cljs.core.get.call(null,map__63301__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
return cljs.core.assoc.call(null,editor,new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [offset,offset], null));
});
andel.controller.set_text = (function andel$controller$set_text(state,text){
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword(null,"text","text",-1790561697)], null),andel.text.make_text.call(null,text)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword(null,"first-invalid","first-invalid",1411060144)], null),(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword(null,"timestamp","timestamp",579478971)], null),cljs.core.inc);
});
andel.controller.add_markup = (function andel$controller$add_markup(state,markup){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword(null,"markup","markup",2143234544)], null),(function (markup_tree){
return andel.intervals.add_intervals.call(null,markup_tree,markup);
}));
});
andel.controller.edit_at_offset = (function andel$controller$edit_at_offset(p__63304,offset,f){
var map__63305 = p__63304;
var map__63305__$1 = ((((!((map__63305 == null)))?((((map__63305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63305.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63305):map__63305);
var state = map__63305__$1;
var document = cljs.core.get.call(null,map__63305__$1,new cljs.core.Keyword(null,"document","document",-1329188687));
var map__63307 = document;
var map__63307__$1 = ((((!((map__63307 == null)))?((((map__63307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63307.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63307):map__63307);
var text = cljs.core.get.call(null,map__63307__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var edit_point = andel.utils.offset__GT_loc.call(null,offset,text);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword(null,"text","text",-1790561697)], null),andel.text.root.call(null,f.call(null,edit_point))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword(null,"timestamp","timestamp",579478971)], null),cljs.core.inc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword(null,"first-invalid","first-invalid",1411060144)], null),cljs.core.min,andel.utils.loc__GT_line.call(null,edit_point));
});
andel.controller.edit_at_line_col = (function andel$controller$edit_at_line_col(p__63309,line_col,f){
var map__63310 = p__63309;
var map__63310__$1 = ((((!((map__63310 == null)))?((((map__63310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63310.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63310):map__63310);
var state = map__63310__$1;
var text = cljs.core.get.call(null,map__63310__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var offset = andel.utils.line_col__GT_offset.call(null,line_col,text);
return andel.controller.edit_at_offset.call(null,state,offset,f);
});
andel.controller.edit_at_caret = (function andel$controller$edit_at_caret(state,fn){
var caret_offset = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.Keyword(null,"caret","caret",-1275001854),new cljs.core.Keyword(null,"offset","offset",296498311)], null));
return andel.controller.edit_at_offset.call(null,state,caret_offset,fn);
});
andel.controller.delete_under_selection = (function andel$controller$delete_under_selection(p__63313){
var map__63314 = p__63313;
var map__63314__$1 = ((((!((map__63314 == null)))?((((map__63314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63314.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63314):map__63314);
var state = map__63314__$1;
var editor = cljs.core.get.call(null,map__63314__$1,new cljs.core.Keyword(null,"editor","editor",-989377770));
var document = cljs.core.get.call(null,map__63314__$1,new cljs.core.Keyword(null,"document","document",-1329188687));
var map__63316 = editor;
var map__63316__$1 = ((((!((map__63316 == null)))?((((map__63316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63316.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63316):map__63316);
var selection = cljs.core.get.call(null,map__63316__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var vec__63317 = selection;
var sel_from = cljs.core.nth.call(null,vec__63317,(0),null);
var sel_to = cljs.core.nth.call(null,vec__63317,(1),null);
var sel_len = (sel_to - sel_from);
var st = state;
var st__$1 = andel.controller.edit_at_offset.call(null,st,sel_from,((function (st,map__63316,map__63316__$1,selection,vec__63317,sel_from,sel_to,sel_len,map__63314,map__63314__$1,state,editor,document){
return (function (p1__63312_SHARP_){
return andel.text.delete$.call(null,p1__63312_SHARP_,sel_len);
});})(st,map__63316,map__63316__$1,selection,vec__63317,sel_from,sel_to,sel_len,map__63314,map__63314__$1,state,editor,document))
);
var st__$2 = cljs.core.update_in.call(null,st__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.Keyword(null,"caret","caret",-1275001854)], null),andel.controller.set_caret_at_offset,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(document),sel_from);
var st__$3 = cljs.core.update_in.call(null,st__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword(null,"markup","markup",2143234544)], null),andel.intervals.delete_range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"caret","caret",-1275001854).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"editor","editor",-989377770).cljs$core$IFn$_invoke$arity$1(st__$2))),sel_len], null));
return cljs.core.update.call(null,st__$3,new cljs.core.Keyword(null,"editor","editor",-989377770),andel.controller.drop_selection);
});
andel.controller.set_selection_under_caret = (function andel$controller$set_selection_under_caret(editor){
var caret_offset = cljs.core.get_in.call(null,editor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"caret","caret",-1275001854),new cljs.core.Keyword(null,"offset","offset",296498311)], null));
return cljs.core.assoc.call(null,editor,new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [caret_offset,caret_offset], null));
});
andel.controller.type_in = (function andel$controller$type_in(p__63322,str){
var map__63323 = p__63322;
var map__63323__$1 = ((((!((map__63323 == null)))?((((map__63323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63323.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63323):map__63323);
var state = map__63323__$1;
var editor = cljs.core.get.call(null,map__63323__$1,new cljs.core.Keyword(null,"editor","editor",-989377770));
var str_len = cljs.core.count.call(null,str);
var st = state;
var st__$1 = andel.controller.delete_under_selection.call(null,st);
var st__$2 = andel.controller.edit_at_caret.call(null,st__$1,((function (st,st__$1,str_len,map__63323,map__63323__$1,state,editor){
return (function (p1__63321_SHARP_){
return andel.text.insert.call(null,p1__63321_SHARP_,str);
});})(st,st__$1,str_len,map__63323,map__63323__$1,state,editor))
);
var st__$3 = cljs.core.update_in.call(null,st__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword(null,"markup","markup",2143234544)], null),andel.intervals.type_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"caret","caret",-1275001854).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"editor","editor",-989377770).cljs$core$IFn$_invoke$arity$1(st__$2))),str_len], null));
var st__$4 = cljs.core.update_in.call(null,st__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.Keyword(null,"caret","caret",-1275001854)], null),andel.controller.translate_caret,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"document","document",-1329188687).cljs$core$IFn$_invoke$arity$1(st__$3)),str_len);
return cljs.core.update_in.call(null,st__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor","editor",-989377770)], null),andel.controller.set_selection_under_caret);
});
andel.controller.get_caret_line = (function andel$controller$get_caret_line(caret,text){
var map__63325 = caret;
var map__63325__$1 = ((((!((map__63325 == null)))?((((map__63325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63325.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63325):map__63325);
var caret_offset = cljs.core.get.call(null,map__63325__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var line = andel.utils.offset__GT_line.call(null,caret_offset,text);
return line;
});
andel.controller.get_line_ident = (function andel$controller$get_line_ident(text,line){
var loc = andel.text.scan_to_line.call(null,andel.text.zipper.call(null,text),line);
var line_text = andel.text.text.call(null,loc,andel.text.line_length.call(null,loc));
var trimmed = clojure.string.triml.call(null,line_text);
var ident_size = (cljs.core.count.call(null,line_text) - cljs.core.count.call(null,trimmed));
return cljs.core.subs.call(null,line_text,(0),ident_size);
});
andel.controller.on_enter = (function andel$controller$on_enter(p__63327){
var map__63328 = p__63327;
var map__63328__$1 = ((((!((map__63328 == null)))?((((map__63328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63328.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63328):map__63328);
var state = map__63328__$1;
var editor = cljs.core.get.call(null,map__63328__$1,new cljs.core.Keyword(null,"editor","editor",-989377770));
var document = cljs.core.get.call(null,map__63328__$1,new cljs.core.Keyword(null,"document","document",-1329188687));
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(document);
var line = andel.controller.get_caret_line.call(null,new cljs.core.Keyword(null,"caret","caret",-1275001854).cljs$core$IFn$_invoke$arity$1(editor),text);
var identation = andel.controller.get_line_ident.call(null,text,line);
return andel.controller.type_in.call(null,state,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(identation)].join(''));
});
andel.controller.set_caret_at_grid_pos = (function andel$controller$set_caret_at_grid_pos(p__63330,line_col,selection_QMARK_){
var map__63331 = p__63330;
var map__63331__$1 = ((((!((map__63331 == null)))?((((map__63331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63331.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63331):map__63331);
var state = map__63331__$1;
var editor = cljs.core.get.call(null,map__63331__$1,new cljs.core.Keyword(null,"editor","editor",-989377770));
var document = cljs.core.get.call(null,map__63331__$1,new cljs.core.Keyword(null,"document","document",-1329188687));
var map__63333 = editor;
var map__63333__$1 = ((((!((map__63333 == null)))?((((map__63333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63333.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63333):map__63333);
var caret = cljs.core.get.call(null,map__63333__$1,new cljs.core.Keyword(null,"caret","caret",-1275001854));
var selection = cljs.core.get.call(null,map__63333__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var map__63334 = document;
var map__63334__$1 = ((((!((map__63334 == null)))?((((map__63334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63334.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63334):map__63334);
var text = cljs.core.get.call(null,map__63334__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var caret_offset_SINGLEQUOTE_ = andel.utils.line_col__GT_offset.call(null,line_col,text);
var caret_SINGLEQUOTE_ = andel.controller.set_caret_at_offset.call(null,caret,text,caret_offset_SINGLEQUOTE_);
var selection_SINGLEQUOTE_ = andel.controller.update_selection.call(null,selection,caret,caret_SINGLEQUOTE_,selection_QMARK_);
var st = state;
var st__$1 = cljs.core.assoc_in.call(null,st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.Keyword(null,"caret","caret",-1275001854)], null),caret_SINGLEQUOTE_);
return cljs.core.assoc_in.call(null,st__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.Keyword(null,"selection","selection",975998651)], null),selection_SINGLEQUOTE_);
});
andel.controller.set_caret_at_line_begining = (function andel$controller$set_caret_at_line_begining(state,line,selection_QMARK_){
return andel.controller.set_caret_at_grid_pos.call(null,state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),(0)], null),selection_QMARK_);
});
andel.controller.set_caret_at_line_end = (function andel$controller$set_caret_at_line_end(state,line,selection_QMARK_){
return andel.controller.set_caret_at_grid_pos.call(null,state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),Number.POSITIVE_INFINITY], null),selection_QMARK_);
});
andel.controller.backspace = (function andel$controller$backspace(p__63338){
var map__63339 = p__63338;
var map__63339__$1 = ((((!((map__63339 == null)))?((((map__63339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63339.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63339):map__63339);
var state = map__63339__$1;
var editor = cljs.core.get.call(null,map__63339__$1,new cljs.core.Keyword(null,"editor","editor",-989377770));
var document = cljs.core.get.call(null,map__63339__$1,new cljs.core.Keyword(null,"document","document",-1329188687));
var map__63341 = editor;
var map__63341__$1 = ((((!((map__63341 == null)))?((((map__63341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63341.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63341):map__63341);
var caret = cljs.core.get.call(null,map__63341__$1,new cljs.core.Keyword(null,"caret","caret",-1275001854));
var selection = cljs.core.get.call(null,map__63341__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var caret_offset = andel.controller.caret__GT_offset.call(null,caret);
if(((0) < andel.controller.selection_length.call(null,selection))){
return andel.controller.delete_under_selection.call(null,state);
} else {
if(((0) < caret_offset)){
var st = state;
var st__$1 = cljs.core.update_in.call(null,st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword(null,"markup","markup",2143234544)], null),andel.intervals.delete_range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"caret","caret",-1275001854).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"editor","editor",-989377770).cljs$core$IFn$_invoke$arity$1(st))) - (1)),(1)], null));
var st__$2 = cljs.core.update_in.call(null,st__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.Keyword(null,"caret","caret",-1275001854)], null),andel.controller.translate_caret,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(document),(-1));
var st__$3 = andel.controller.edit_at_caret.call(null,st__$2,((function (st,st__$1,st__$2,map__63341,map__63341__$1,caret,selection,caret_offset,map__63339,map__63339__$1,state,editor,document){
return (function (p1__63337_SHARP_){
return andel.text.delete$.call(null,p1__63337_SHARP_,(1));
});})(st,st__$1,st__$2,map__63341,map__63341__$1,caret,selection,caret_offset,map__63339,map__63339__$1,state,editor,document))
);
return cljs.core.update.call(null,st__$3,new cljs.core.Keyword(null,"editor","editor",-989377770),andel.controller.drop_selection);
} else {
return state;

}
}
});
andel.controller.delete$ = (function andel$controller$delete(p__63344){
var map__63345 = p__63344;
var map__63345__$1 = ((((!((map__63345 == null)))?((((map__63345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63345.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63345):map__63345);
var state = map__63345__$1;
var document = cljs.core.get.call(null,map__63345__$1,new cljs.core.Keyword(null,"document","document",-1329188687));
var editor = cljs.core.get.call(null,map__63345__$1,new cljs.core.Keyword(null,"editor","editor",-989377770));
var map__63347 = editor;
var map__63347__$1 = ((((!((map__63347 == null)))?((((map__63347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63347.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63347):map__63347);
var caret = cljs.core.get.call(null,map__63347__$1,new cljs.core.Keyword(null,"caret","caret",-1275001854));
var selection = cljs.core.get.call(null,map__63347__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var map__63348 = caret;
var map__63348__$1 = ((((!((map__63348 == null)))?((((map__63348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63348.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63348):map__63348);
var caret_offset = cljs.core.get.call(null,map__63348__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var map__63349 = document;
var map__63349__$1 = ((((!((map__63349 == null)))?((((map__63349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63349.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63349):map__63349);
var text = cljs.core.get.call(null,map__63349__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
if(((0) < andel.controller.selection_length.call(null,selection))){
return andel.controller.delete_under_selection.call(null,state);
} else {
if((caret_offset < andel.text.text_length.call(null,text))){
var st = state;
var st__$1 = andel.controller.edit_at_caret.call(null,st,((function (st,map__63347,map__63347__$1,caret,selection,map__63348,map__63348__$1,caret_offset,map__63349,map__63349__$1,text,map__63345,map__63345__$1,state,document,editor){
return (function (p1__63343_SHARP_){
return andel.text.delete$.call(null,p1__63343_SHARP_,(1));
});})(st,map__63347,map__63347__$1,caret,selection,map__63348,map__63348__$1,caret_offset,map__63349,map__63349__$1,text,map__63345,map__63345__$1,state,document,editor))
);
return cljs.core.update_in.call(null,st__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword(null,"markup","markup",2143234544)], null),andel.intervals.delete_range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"caret","caret",-1275001854).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"editor","editor",-989377770).cljs$core$IFn$_invoke$arity$1(st__$1))),(1)], null));
} else {
return state;

}
}
});
andel.controller.set_view_to_line = (function andel$controller$set_view_to_line(state,line,metrics){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewport","viewport",443342715),new cljs.core.Keyword(null,"pos","pos",-864607220),(1)], null),(line * andel.utils.line_height.call(null,metrics)));
});
andel.controller.count_lines_in_view = (function andel$controller$count_lines_in_view(viewport,metrics){
var map__63353 = viewport;
var map__63353__$1 = ((((!((map__63353 == null)))?((((map__63353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63353.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63353):map__63353);
var view_size = cljs.core.get.call(null,map__63353__$1,new cljs.core.Keyword(null,"view-size","view-size",1412004200));
var vec__63354 = view_size;
var _ = cljs.core.nth.call(null,vec__63354,(0),null);
var view_size__$1 = cljs.core.nth.call(null,vec__63354,(1),null);
return Math.round((view_size__$1 / andel.utils.line_height.call(null,metrics)));
});
andel.controller.get_view_in_lines = (function andel$controller$get_view_in_lines(viewport,metrics){
var map__63358 = viewport;
var map__63358__$1 = ((((!((map__63358 == null)))?((((map__63358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63358.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63358):map__63358);
var pos = cljs.core.get.call(null,map__63358__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var vec__63359 = pos;
var _ = cljs.core.nth.call(null,vec__63359,(0),null);
var pos_px = cljs.core.nth.call(null,vec__63359,(1),null);
var pos_in_lines = Math.round((pos_px / andel.utils.line_height.call(null,metrics)));
var pos_in_lines_end = (pos_in_lines + andel.controller.count_lines_in_view.call(null,viewport,metrics));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos_in_lines,pos_in_lines_end], null);
});
andel.controller.move_view_if_needed = (function andel$controller$move_view_if_needed(p__63363){
var map__63364 = p__63363;
var map__63364__$1 = ((((!((map__63364 == null)))?((((map__63364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63364.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63364):map__63364);
var state = map__63364__$1;
var document = cljs.core.get.call(null,map__63364__$1,new cljs.core.Keyword(null,"document","document",-1329188687));
var editor = cljs.core.get.call(null,map__63364__$1,new cljs.core.Keyword(null,"editor","editor",-989377770));
var viewport = cljs.core.get.call(null,map__63364__$1,new cljs.core.Keyword(null,"viewport","viewport",443342715));
var map__63366 = document;
var map__63366__$1 = ((((!((map__63366 == null)))?((((map__63366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63366.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63366):map__63366);
var text = cljs.core.get.call(null,map__63366__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var map__63367 = editor;
var map__63367__$1 = ((((!((map__63367 == null)))?((((map__63367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63367.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63367):map__63367);
var caret = cljs.core.get.call(null,map__63367__$1,new cljs.core.Keyword(null,"caret","caret",-1275001854));
var map__63368 = viewport;
var map__63368__$1 = ((((!((map__63368 == null)))?((((map__63368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63368.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63368):map__63368);
var metrics = cljs.core.get.call(null,map__63368__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));
var caret_l = andel.utils.offset__GT_line.call(null,andel.controller.caret__GT_offset.call(null,caret),text);
var vec__63369 = andel.controller.get_view_in_lines.call(null,viewport,metrics);
var from_l = cljs.core.nth.call(null,vec__63369,(0),null);
var to_l = cljs.core.nth.call(null,vec__63369,(1),null);
var view_in_lines = (to_l - from_l);
if(((caret_l < from_l)) && (cljs.core.not_EQ_.call(null,from_l,(0)))){
return andel.controller.set_view_to_line.call(null,state,caret_l,metrics);
} else {
if(((to_l - (1)) < caret_l)){
return andel.controller.set_view_to_line.call(null,state,(caret_l - (view_in_lines - (1))),metrics);
} else {
return state;

}
}
});
andel.controller.pg_move = (function andel$controller$pg_move(p__63375,dir,selection_QMARK_){
var map__63376 = p__63375;
var map__63376__$1 = ((((!((map__63376 == null)))?((((map__63376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63376.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63376):map__63376);
var state = map__63376__$1;
var document = cljs.core.get.call(null,map__63376__$1,new cljs.core.Keyword(null,"document","document",-1329188687));
var viewport = cljs.core.get.call(null,map__63376__$1,new cljs.core.Keyword(null,"viewport","viewport",443342715));
var map__63378 = document;
var map__63378__$1 = ((((!((map__63378 == null)))?((((map__63378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63378.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63378):map__63378);
var text = cljs.core.get.call(null,map__63378__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var map__63379 = viewport;
var map__63379__$1 = ((((!((map__63379 == null)))?((((map__63379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63379.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63379):map__63379);
var metrics = cljs.core.get.call(null,map__63379__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));
var view_size_in_lines = andel.controller.count_lines_in_view.call(null,viewport,metrics);
var sign = (function (){var G__63382 = dir;
var G__63382__$1 = (((G__63382 instanceof cljs.core.Keyword))?G__63382.fqn:null);
switch (G__63382__$1) {
case "up":
return cljs.core._;

break;
case "down":
return cljs.core._PLUS_;

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63382__$1)].join('')));

}
})();
return andel.controller.move_view_if_needed.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.Keyword(null,"caret","caret",-1275001854)], null),andel.controller.translate_caret_verticaly,text,sign.call(null,view_size_in_lines)));
});
andel.controller.home = (function andel$controller$home(p__63384,selection_QMARK_){
var map__63385 = p__63384;
var map__63385__$1 = ((((!((map__63385 == null)))?((((map__63385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63385.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63385):map__63385);
var state = map__63385__$1;
var map__63386 = cljs.core.get.call(null,map__63385__$1,new cljs.core.Keyword(null,"editor","editor",-989377770));
var map__63386__$1 = ((((!((map__63386 == null)))?((((map__63386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63386.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63386):map__63386);
var caret = cljs.core.get.call(null,map__63386__$1,new cljs.core.Keyword(null,"caret","caret",-1275001854));
var map__63387 = cljs.core.get.call(null,map__63385__$1,new cljs.core.Keyword(null,"document","document",-1329188687));
var map__63387__$1 = ((((!((map__63387 == null)))?((((map__63387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63387.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63387):map__63387);
var text = cljs.core.get.call(null,map__63387__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var carret_line = andel.controller.get_caret_line.call(null,caret,text);
return andel.controller.set_caret_at_line_begining.call(null,state,andel.controller.get_caret_line.call(null,caret,text),selection_QMARK_);
});
andel.controller.end = (function andel$controller$end(p__63391,selection_QMARK_){
var map__63392 = p__63391;
var map__63392__$1 = ((((!((map__63392 == null)))?((((map__63392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63392.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63392):map__63392);
var state = map__63392__$1;
var map__63393 = cljs.core.get.call(null,map__63392__$1,new cljs.core.Keyword(null,"editor","editor",-989377770));
var map__63393__$1 = ((((!((map__63393 == null)))?((((map__63393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63393.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63393):map__63393);
var caret = cljs.core.get.call(null,map__63393__$1,new cljs.core.Keyword(null,"caret","caret",-1275001854));
var map__63394 = cljs.core.get.call(null,map__63392__$1,new cljs.core.Keyword(null,"document","document",-1329188687));
var map__63394__$1 = ((((!((map__63394 == null)))?((((map__63394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63394.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63394):map__63394);
var text = cljs.core.get.call(null,map__63394__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var carret_line = andel.controller.get_caret_line.call(null,caret,text);
return andel.controller.set_caret_at_line_end.call(null,state,andel.controller.get_caret_line.call(null,caret,text),selection_QMARK_);
});
andel.controller.move_caret = (function andel$controller$move_caret(p__63398,dir,selection_QMARK_){
var map__63399 = p__63398;
var map__63399__$1 = ((((!((map__63399 == null)))?((((map__63399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63399.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63399):map__63399);
var state = map__63399__$1;
var map__63400 = cljs.core.get.call(null,map__63399__$1,new cljs.core.Keyword(null,"document","document",-1329188687));
var map__63400__$1 = ((((!((map__63400 == null)))?((((map__63400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63400.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63400):map__63400);
var text = cljs.core.get.call(null,map__63400__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var map__63401 = cljs.core.get.call(null,map__63399__$1,new cljs.core.Keyword(null,"editor","editor",-989377770));
var map__63401__$1 = ((((!((map__63401 == null)))?((((map__63401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63401.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63401):map__63401);
var caret = cljs.core.get.call(null,map__63401__$1,new cljs.core.Keyword(null,"caret","caret",-1275001854));
var selection = cljs.core.get.call(null,map__63401__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var caret_SINGLEQUOTE_ = (function (){var G__63405 = dir;
var G__63405__$1 = (((G__63405 instanceof cljs.core.Keyword))?G__63405.fqn:null);
switch (G__63405__$1) {
case "left":
return andel.controller.translate_caret.call(null,caret,text,(-1));

break;
case "right":
return andel.controller.translate_caret.call(null,caret,text,(1));

break;
case "up":
return andel.controller.translate_caret_verticaly.call(null,caret,text,(-1));

break;
case "down":
return andel.controller.translate_caret_verticaly.call(null,caret,text,(1));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63405__$1)].join('')));

}
})();
var selection_SINGLEQUOTE_ = andel.controller.update_selection.call(null,selection,caret,caret_SINGLEQUOTE_,selection_QMARK_);
return andel.controller.move_view_if_needed.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.Keyword(null,"caret","caret",-1275001854)], null),caret_SINGLEQUOTE_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.Keyword(null,"selection","selection",975998651)], null),selection_SINGLEQUOTE_));
});
andel.controller.drop_selection_on_esc = (function andel$controller$drop_selection_on_esc(state){
return cljs.core.update.call(null,state,new cljs.core.Keyword(null,"editor","editor",-989377770),andel.controller.drop_selection);
});

//# sourceMappingURL=controller.js.map?rel=1504289159438