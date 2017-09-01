// Compiled by ClojureScript 1.9.671 {}
goog.provide('andel.utils');
goog.require('cljs.core');
goog.require('andel.text');
goog.require('andel.tree');
andel.utils.line_height = (function andel$utils$line_height(p__63255){
var map__63256 = p__63255;
var map__63256__$1 = ((((!((map__63256 == null)))?((((map__63256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63256.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63256):map__63256);
var metrics = map__63256__$1;
var height = cljs.core.get.call(null,map__63256__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var spacing = cljs.core.get.call(null,map__63256__$1,new cljs.core.Keyword(null,"spacing","spacing",204422175));
return (height + spacing);
});
/**
 * transforms relative position in pixels into absolute [line col] value
 * CAUTION! col might be bigger, than length of line.
 */
andel.utils.pixels__GT_grid_position = (function andel$utils$pixels__GT_grid_position(p__63258,start_line,shift,p__63259){
var vec__63260 = p__63258;
var pix_x = cljs.core.nth.call(null,vec__63260,(0),null);
var pix_y = cljs.core.nth.call(null,vec__63260,(1),null);
var map__63263 = p__63259;
var map__63263__$1 = ((((!((map__63263 == null)))?((((map__63263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63263.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63263):map__63263);
var metrics = map__63263__$1;
var width = cljs.core.get.call(null,map__63263__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var line_height = andel.utils.line_height.call(null,metrics);
var x = pix_x;
var y = ((pix_y - shift) - (line_height / (2)));
var rel_line = Math.round((y / line_height));
var abs_line = (start_line + rel_line);
var abs_col = Math.round((x / width));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),abs_line,new cljs.core.Keyword(null,"col","col",-1959363084),abs_col], null);
});
/**
 * transforms [line col] value into absolute offset value
 */
andel.utils.line_col__GT_offset = (function andel$utils$line_col__GT_offset(p__63265,text){
var map__63266 = p__63265;
var map__63266__$1 = ((((!((map__63266 == null)))?((((map__63266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63266.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63266):map__63266);
var line = cljs.core.get.call(null,map__63266__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__63266__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var line_loc = andel.text.scan_to_line.call(null,andel.text.zipper.call(null,text),line);
var line_len = andel.text.line_length.call(null,line_loc);
var line_offset = andel.text.offset.call(null,line_loc);
var text_length = andel.text.text_length.call(null,text);
var offset = (function (){var x__41409__auto__ = (text_length - (1));
var y__41410__auto__ = (function (){var x__41402__auto__ = (0);
var y__41403__auto__ = (line_offset + (function (){var x__41409__auto____$1 = line_len;
var y__41410__auto__ = col;
return ((x__41409__auto____$1 < y__41410__auto__) ? x__41409__auto____$1 : y__41410__auto__);
})());
return ((x__41402__auto__ > y__41403__auto__) ? x__41402__auto__ : y__41403__auto__);
})();
return ((x__41409__auto__ < y__41410__auto__) ? x__41409__auto__ : y__41410__auto__);
})();
return offset;
});
/**
 * transforms line value into absolute offset value
 */
andel.utils.line__GT_offset = (function andel$utils$line__GT_offset(line,text){
return andel.utils.line_col__GT_offset.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),(0)], null),text);
});
/**
 * transforms relative position in pixels into absolute offset value
 */
andel.utils.pixels__GT_offset = (function andel$utils$pixels__GT_offset(p__63268,start_line,shift,metrics,text){
var vec__63269 = p__63268;
var pix_x = cljs.core.nth.call(null,vec__63269,(0),null);
var pix_y = cljs.core.nth.call(null,vec__63269,(1),null);
return andel.utils.line_col__GT_offset.call(null,andel.utils.pixels__GT_grid_position.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pix_x,pix_y], null),start_line,shift,metrics),text);
});
/**
 * transforms absolute offset into absolute line value ignoring col
 */
andel.utils.offset__GT_line = (function andel$utils$offset__GT_line(offset,text){
return andel.text.line.call(null,andel.text.scan_to_offset.call(null,andel.text.zipper.call(null,text),offset));
});
andel.utils.line__GT_length = (function andel$utils$line__GT_length(line,text){
return andel.text.line_length.call(null,andel.text.scan_to_line.call(null,andel.text.zipper.call(null,text),line));
});
/**
 * transforms absolute offset into absolute [line col] value
 */
andel.utils.offset__GT_line_col = (function andel$utils$offset__GT_line_col(offset,text){
var line = andel.utils.offset__GT_line.call(null,offset,text);
var line_offset = andel.utils.line_col__GT_offset.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),(0)], null),text);
var col = (offset - line_offset);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col], null);
});
/**
 * transforms absolute [line col] value into relative poisition in pixels
 */
andel.utils.line_col__GT_pixels = (function andel$utils$line_col__GT_pixels(p__63272,start_line,shift,p__63273){
var map__63274 = p__63272;
var map__63274__$1 = ((((!((map__63274 == null)))?((((map__63274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63274.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63274):map__63274);
var line = cljs.core.get.call(null,map__63274__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__63274__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var map__63275 = p__63273;
var map__63275__$1 = ((((!((map__63275 == null)))?((((map__63275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63275.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63275):map__63275);
var metrics = map__63275__$1;
var height = cljs.core.get.call(null,map__63275__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__63275__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var rel_line = (line - start_line);
var pix_x = (col * width);
var pix_y = ((shift + (height / (2))) + (line * height));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pix_x,pix_y], null);
});
/**
 * transforms absolute offset value into relative poisition in pixels
 */
andel.utils.offset__GT_pixels = (function andel$utils$offset__GT_pixels(offset,start_line,shift,metrics,text){
return andel.utils.line_col__GT_pixels.call(null,andel.utils.offset__GT_line_col.call(null,offset,text),start_line,shift,metrics);
});
/**
 * transforms absolute offset into zipper pointer
 */
andel.utils.offset__GT_loc = (function andel$utils$offset__GT_loc(offset,text){
return andel.text.scan_to_offset.call(null,andel.text.zipper.call(null,text),offset);
});
/**
 * transforms zipper pointer into offset
 */
andel.utils.loc__GT_offset = (function andel$utils$loc__GT_offset(loc){
return andel.text.offset.call(null,loc);
});
/**
 * transforms zipper pointer into line
 */
andel.utils.loc__GT_line = (function andel$utils$loc__GT_line(loc){
return andel.text.line.call(null,loc);
});
/**
 * transforms absolute line into zipper pointer
 */
andel.utils.line__GT_loc = (function andel$utils$line__GT_loc(line,text){
return andel.text.scan_to_line.call(null,andel.text.zipper.call(null,text),line);
});
/**
 * transforms absolute [line col] into zipper pointer
 */
andel.utils.line_col__GT_loc = (function andel$utils$line_col__GT_loc(p__63278,text){
var map__63279 = p__63278;
var map__63279__$1 = ((((!((map__63279 == null)))?((((map__63279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63279.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63279):map__63279);
var line = cljs.core.get.call(null,map__63279__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__63279__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var line_loc = andel.utils.line__GT_loc.call(null,line,text);
var line_offset = andel.utils.loc__GT_offset.call(null,line_loc);
return andel.text.scan_to_offset.call(null,line_loc,(line_offset + col));
});
andel.utils.last_line_QMARK_ = (function andel$utils$last_line_QMARK_(line,text){
return andel.tree.end_QMARK_.call(null,andel.utils.line__GT_loc.call(null,line,text));
});
andel.utils.next_line_loc = (function andel$utils$next_line_loc(line,text){
if(cljs.core.truth_(andel.utils.last_line_QMARK_.call(null,line,text))){
return andel.utils.line__GT_loc.call(null,line,text);
} else {
var line_loc = andel.utils.line__GT_loc.call(null,line,text);
var offset = andel.utils.loc__GT_offset.call(null,line_loc);
var line_length = andel.text.line_length.call(null,line_loc);
var next_line_loc = andel.text.scan_to_offset.call(null,line_loc,((offset + line_length) + (1)));
return next_line_loc;
}
});
andel.utils.prev_line_loc = (function andel$utils$prev_line_loc(line,text){
if(cljs.core._EQ_.call(null,line,(0))){
return (0);
} else {
var prev_line_end = (andel.utils.line__GT_offset.call(null,line,text) - (1));
var prev_line_loc = andel.utils.line__GT_loc.call(null,andel.utils.offset__GT_line.call(null,prev_line_end,text),text);
return prev_line_loc;
}
});

//# sourceMappingURL=utils.js.map?rel=1504289159322