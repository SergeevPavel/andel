// Compiled by ClojureScript 1.9.671 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljs.pprint');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__42304__auto__ = [];
var len__42297__auto___67676 = arguments.length;
var i__42298__auto___67677 = (0);
while(true){
if((i__42298__auto___67677 < len__42297__auto___67676)){
args__42304__auto__.push((arguments[i__42298__auto___67677]));

var G__67678 = (i__42298__auto___67677 + (1));
i__42298__auto___67677 = G__67678;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((2) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__42305__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__67668_67679 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__67669_67680 = null;
var count__67670_67681 = (0);
var i__67671_67682 = (0);
while(true){
if((i__67671_67682 < count__67670_67681)){
var k_67683 = cljs.core._nth.call(null,chunk__67669_67680,i__67671_67682);
e.setAttribute(cljs.core.name.call(null,k_67683),cljs.core.get.call(null,attrs,k_67683));

var G__67684 = seq__67668_67679;
var G__67685 = chunk__67669_67680;
var G__67686 = count__67670_67681;
var G__67687 = (i__67671_67682 + (1));
seq__67668_67679 = G__67684;
chunk__67669_67680 = G__67685;
count__67670_67681 = G__67686;
i__67671_67682 = G__67687;
continue;
} else {
var temp__5278__auto___67688 = cljs.core.seq.call(null,seq__67668_67679);
if(temp__5278__auto___67688){
var seq__67668_67689__$1 = temp__5278__auto___67688;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67668_67689__$1)){
var c__41976__auto___67690 = cljs.core.chunk_first.call(null,seq__67668_67689__$1);
var G__67691 = cljs.core.chunk_rest.call(null,seq__67668_67689__$1);
var G__67692 = c__41976__auto___67690;
var G__67693 = cljs.core.count.call(null,c__41976__auto___67690);
var G__67694 = (0);
seq__67668_67679 = G__67691;
chunk__67669_67680 = G__67692;
count__67670_67681 = G__67693;
i__67671_67682 = G__67694;
continue;
} else {
var k_67695 = cljs.core.first.call(null,seq__67668_67689__$1);
e.setAttribute(cljs.core.name.call(null,k_67695),cljs.core.get.call(null,attrs,k_67695));

var G__67696 = cljs.core.next.call(null,seq__67668_67689__$1);
var G__67697 = null;
var G__67698 = (0);
var G__67699 = (0);
seq__67668_67679 = G__67696;
chunk__67669_67680 = G__67697;
count__67670_67681 = G__67698;
i__67671_67682 = G__67699;
continue;
}
} else {
}
}
break;
}

var seq__67672_67700 = cljs.core.seq.call(null,children);
var chunk__67673_67701 = null;
var count__67674_67702 = (0);
var i__67675_67703 = (0);
while(true){
if((i__67675_67703 < count__67674_67702)){
var ch_67704 = cljs.core._nth.call(null,chunk__67673_67701,i__67675_67703);
e.appendChild(ch_67704);

var G__67705 = seq__67672_67700;
var G__67706 = chunk__67673_67701;
var G__67707 = count__67674_67702;
var G__67708 = (i__67675_67703 + (1));
seq__67672_67700 = G__67705;
chunk__67673_67701 = G__67706;
count__67674_67702 = G__67707;
i__67675_67703 = G__67708;
continue;
} else {
var temp__5278__auto___67709 = cljs.core.seq.call(null,seq__67672_67700);
if(temp__5278__auto___67709){
var seq__67672_67710__$1 = temp__5278__auto___67709;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67672_67710__$1)){
var c__41976__auto___67711 = cljs.core.chunk_first.call(null,seq__67672_67710__$1);
var G__67712 = cljs.core.chunk_rest.call(null,seq__67672_67710__$1);
var G__67713 = c__41976__auto___67711;
var G__67714 = cljs.core.count.call(null,c__41976__auto___67711);
var G__67715 = (0);
seq__67672_67700 = G__67712;
chunk__67673_67701 = G__67713;
count__67674_67702 = G__67714;
i__67675_67703 = G__67715;
continue;
} else {
var ch_67716 = cljs.core.first.call(null,seq__67672_67710__$1);
e.appendChild(ch_67716);

var G__67717 = cljs.core.next.call(null,seq__67672_67710__$1);
var G__67718 = null;
var G__67719 = (0);
var G__67720 = (0);
seq__67672_67700 = G__67717;
chunk__67673_67701 = G__67718;
count__67674_67702 = G__67719;
i__67675_67703 = G__67720;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq67665){
var G__67666 = cljs.core.first.call(null,seq67665);
var seq67665__$1 = cljs.core.next.call(null,seq67665);
var G__67667 = cljs.core.first.call(null,seq67665__$1);
var seq67665__$2 = cljs.core.next.call(null,seq67665__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__67666,G__67667,seq67665__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__42096__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__42097__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__42098__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__42099__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__42100__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__42096__auto__,prefer_table__42097__auto__,method_cache__42098__auto__,cached_hierarchy__42099__auto__,hierarchy__42100__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__42096__auto__,prefer_table__42097__auto__,method_cache__42098__auto__,cached_hierarchy__42099__auto__,hierarchy__42100__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__42100__auto__,method_table__42096__auto__,prefer_table__42097__auto__,method_cache__42098__auto__,cached_hierarchy__42099__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cont_id)].join('')))){
var el_67721 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-o-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("border-top: 1px solid #f5f5f5;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #333;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 0px 10px 0px 70px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: fixed;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("bottom: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity: 0.0;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-sizing: border-box;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 10000;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: left;")].join('')], null));
el_67721.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_67721.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_67721.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_67721);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__67722,st_map){
var map__67723 = p__67722;
var map__67723__$1 = ((((!((map__67723 == null)))?((((map__67723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67723.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67723):map__67723);
var container_el = cljs.core.get.call(null,map__67723__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__67723,map__67723__$1,container_el){
return (function (p__67725){
var vec__67726 = p__67725;
var k = cljs.core.nth.call(null,vec__67726,(0),null);
var v = cljs.core.nth.call(null,vec__67726,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__67723,map__67723__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__67729,dom_str){
var map__67730 = p__67729;
var map__67730__$1 = ((((!((map__67730 == null)))?((((map__67730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67730.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67730):map__67730);
var c = map__67730__$1;
var content_area_el = cljs.core.get.call(null,map__67730__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__67732){
var map__67733 = p__67732;
var map__67733__$1 = ((((!((map__67733 == null)))?((((map__67733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67733.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67733):map__67733);
var content_area_el = cljs.core.get.call(null,map__67733__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<a style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("float: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-decoration: none;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: rgba(84,84,84, 0.5);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("x"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__44106__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44106__auto__){
return (function (){
var f__44107__auto__ = (function (){var switch__44016__auto__ = ((function (c__44106__auto__){
return (function (state_67750){
var state_val_67751 = (state_67750[(1)]);
if((state_val_67751 === (1))){
var inst_67735 = (state_67750[(7)]);
var inst_67735__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_67736 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_67737 = ["10px","10px","100%","68px","1.0"];
var inst_67738 = cljs.core.PersistentHashMap.fromArrays(inst_67736,inst_67737);
var inst_67739 = cljs.core.merge.call(null,inst_67738,style);
var inst_67740 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_67735__$1,inst_67739);
var inst_67741 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_67735__$1,msg);
var inst_67742 = cljs.core.async.timeout.call(null,(300));
var state_67750__$1 = (function (){var statearr_67752 = state_67750;
(statearr_67752[(8)] = inst_67741);

(statearr_67752[(7)] = inst_67735__$1);

(statearr_67752[(9)] = inst_67740);

return statearr_67752;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67750__$1,(2),inst_67742);
} else {
if((state_val_67751 === (2))){
var inst_67735 = (state_67750[(7)]);
var inst_67744 = (state_67750[(2)]);
var inst_67745 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_67746 = ["auto"];
var inst_67747 = cljs.core.PersistentHashMap.fromArrays(inst_67745,inst_67746);
var inst_67748 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_67735,inst_67747);
var state_67750__$1 = (function (){var statearr_67753 = state_67750;
(statearr_67753[(10)] = inst_67744);

return statearr_67753;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67750__$1,inst_67748);
} else {
return null;
}
}
});})(c__44106__auto__))
;
return ((function (switch__44016__auto__,c__44106__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__44017__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__44017__auto____0 = (function (){
var statearr_67754 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_67754[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__44017__auto__);

(statearr_67754[(1)] = (1));

return statearr_67754;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__44017__auto____1 = (function (state_67750){
while(true){
var ret_value__44018__auto__ = (function (){try{while(true){
var result__44019__auto__ = switch__44016__auto__.call(null,state_67750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44019__auto__;
}
break;
}
}catch (e67755){if((e67755 instanceof Object)){
var ex__44020__auto__ = e67755;
var statearr_67756_67758 = state_67750;
(statearr_67756_67758[(5)] = ex__44020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67759 = state_67750;
state_67750 = G__67759;
continue;
} else {
return ret_value__44018__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__44017__auto__ = function(state_67750){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__44017__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__44017__auto____1.call(this,state_67750);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__44017__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__44017__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__44017__auto__;
})()
;})(switch__44016__auto__,c__44106__auto__))
})();
var state__44108__auto__ = (function (){var statearr_67757 = f__44107__auto__.call(null);
(statearr_67757[(6)] = c__44106__auto__);

return statearr_67757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44108__auto__);
});})(c__44106__auto__))
);

return c__44106__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var G__67761 = arguments.length;
switch (G__67761) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-bottom: 2px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding-top: 1px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" <span style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("display: inline-block;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span></div>")].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-line=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-column=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__67763){
var map__67764 = p__67763;
var map__67764__$1 = ((((!((map__67764 == null)))?((((map__67764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67764.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67764):map__67764);
var file = cljs.core.get.call(null,map__67764__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__67764__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__67764__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__41064__auto__ = file;
if(cljs.core.truth_(or__41064__auto__)){
return or__41064__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style='color: #757575;'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("  </span>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,line)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__67766){
var vec__67767 = p__67766;
var typ = cljs.core.nth.call(null,vec__67767,(0),null);
var line_number = cljs.core.nth.call(null,vec__67767,(1),null);
var line = cljs.core.nth.call(null,vec__67767,(2),null);
var pred__67770 = cljs.core._EQ_;
var expr__67771 = typ;
if(cljs.core.truth_(pred__67770.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__67771))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__67770.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__67771))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__67770.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__67771))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))].join(''));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__67773_SHARP_){
return cljs.core.update_in.call(null,p1__67773_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</pre>")].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__67774_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__67774_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__67777){
var map__67778 = p__67777;
var map__67778__$1 = ((((!((map__67778 == null)))?((((map__67778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67778.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67778):map__67778);
var exception = map__67778__$1;
var message = cljs.core.get.call(null,map__67778__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__67778__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__67778__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__67778__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__67778__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__67778__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__67778__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__67778__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__67778__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__67778__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__67778__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
var last_message = (cljs.core.truth_((function (){var and__41052__auto__ = file;
if(cljs.core.truth_(and__41052__auto__)){
return line;
} else {
return and__41052__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__67778,map__67778__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__67775_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__67775_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__67778,map__67778__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,class$)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": ")].join(''):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''),(cljs.core.truth_(display_ex_data)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<pre>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.utils.pprint_to_string.call(null,display_ex_data)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</pre>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__67778,map__67778__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__67776_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__67776_SHARP_))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__67776_SHARP_)))].join('');
});})(last_message,map__67778,map__67778__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__67780){
var map__67781 = p__67780;
var map__67781__$1 = ((((!((map__67781 == null)))?((((map__67781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67781.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67781):map__67781);
var file = cljs.core.get.call(null,map__67781__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__67781__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__67781__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),new cljs.core.Keyword(null,"file-column","file-column",1543934780),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('')], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__67784 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__67784__$1 = ((((!((map__67784 == null)))?((((map__67784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67784.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67784):map__67784);
var head = cljs.core.get.call(null,map__67784__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__67784__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__67784__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__67784__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__67784__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__67784__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__67784__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__67787){
var map__67788 = p__67787;
var map__67788__$1 = ((((!((map__67788 == null)))?((((map__67788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67788.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67788):map__67788);
var warning_data = map__67788__$1;
var file = cljs.core.get.call(null,map__67788__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__67788__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__67788__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__67788__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__67788__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__41052__auto__ = file;
if(cljs.core.truth_(and__41052__auto__)){
return line;
} else {
return and__41052__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__67788,map__67788__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__67786_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__67786_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__67788,map__67788__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__67790 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__67790__$1 = ((((!((map__67790 == null)))?((((map__67790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67790.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67790):map__67790);
var head = cljs.core.get.call(null,map__67790__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__67790__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__67790__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__67790__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__67790__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__67790__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__67790__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__67792){
var map__67793 = p__67792;
var map__67793__$1 = ((((!((map__67793 == null)))?((((map__67793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67793.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67793):map__67793);
var warning_data = map__67793__$1;
var message = cljs.core.get.call(null,map__67793__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__67793__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__67793__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__67793__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__67795 = message;
var G__67795__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67795),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__67795);
var G__67795__$2 = (cljs.core.truth_((function (){var and__41052__auto__ = line;
if(cljs.core.truth_(and__41052__auto__)){
return column;
} else {
return and__41052__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67795__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__67795__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67795__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__67795__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__67796){
var map__67797 = p__67796;
var map__67797__$1 = ((((!((map__67797 == null)))?((((map__67797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67797.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67797):map__67797);
var warning_data = map__67797__$1;
var message = cljs.core.get.call(null,map__67797__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__67797__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__67797__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__67797__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__67799 = figwheel.client.heads_up.ensure_container.call(null);
var map__67799__$1 = ((((!((map__67799 == null)))?((((map__67799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67799.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67799):map__67799);
var content_area_el = cljs.core.get.call(null,map__67799__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__5278__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__5278__auto__)){
var last_child = temp__5278__auto__;
var temp__5276__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__5276__auto__)){
var message_count = temp__5276__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" more warnings have not been displayed ...")].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__44106__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44106__auto__){
return (function (){
var f__44107__auto__ = (function (){var switch__44016__auto__ = ((function (c__44106__auto__){
return (function (state_67818){
var state_val_67819 = (state_67818[(1)]);
if((state_val_67819 === (1))){
var inst_67801 = (state_67818[(7)]);
var inst_67801__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_67802 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_67803 = ["0.0"];
var inst_67804 = cljs.core.PersistentHashMap.fromArrays(inst_67802,inst_67803);
var inst_67805 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_67801__$1,inst_67804);
var inst_67806 = cljs.core.async.timeout.call(null,(300));
var state_67818__$1 = (function (){var statearr_67820 = state_67818;
(statearr_67820[(7)] = inst_67801__$1);

(statearr_67820[(8)] = inst_67805);

return statearr_67820;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67818__$1,(2),inst_67806);
} else {
if((state_val_67819 === (2))){
var inst_67801 = (state_67818[(7)]);
var inst_67808 = (state_67818[(2)]);
var inst_67809 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_67810 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_67811 = cljs.core.PersistentHashMap.fromArrays(inst_67809,inst_67810);
var inst_67812 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_67801,inst_67811);
var inst_67813 = cljs.core.async.timeout.call(null,(200));
var state_67818__$1 = (function (){var statearr_67821 = state_67818;
(statearr_67821[(9)] = inst_67808);

(statearr_67821[(10)] = inst_67812);

return statearr_67821;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67818__$1,(3),inst_67813);
} else {
if((state_val_67819 === (3))){
var inst_67801 = (state_67818[(7)]);
var inst_67815 = (state_67818[(2)]);
var inst_67816 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_67801,"");
var state_67818__$1 = (function (){var statearr_67822 = state_67818;
(statearr_67822[(11)] = inst_67815);

return statearr_67822;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67818__$1,inst_67816);
} else {
return null;
}
}
}
});})(c__44106__auto__))
;
return ((function (switch__44016__auto__,c__44106__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__44017__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__44017__auto____0 = (function (){
var statearr_67823 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67823[(0)] = figwheel$client$heads_up$clear_$_state_machine__44017__auto__);

(statearr_67823[(1)] = (1));

return statearr_67823;
});
var figwheel$client$heads_up$clear_$_state_machine__44017__auto____1 = (function (state_67818){
while(true){
var ret_value__44018__auto__ = (function (){try{while(true){
var result__44019__auto__ = switch__44016__auto__.call(null,state_67818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44019__auto__;
}
break;
}
}catch (e67824){if((e67824 instanceof Object)){
var ex__44020__auto__ = e67824;
var statearr_67825_67827 = state_67818;
(statearr_67825_67827[(5)] = ex__44020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67828 = state_67818;
state_67818 = G__67828;
continue;
} else {
return ret_value__44018__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__44017__auto__ = function(state_67818){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__44017__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__44017__auto____1.call(this,state_67818);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$clear_$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__44017__auto____0;
figwheel$client$heads_up$clear_$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__44017__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__44017__auto__;
})()
;})(switch__44016__auto__,c__44106__auto__))
})();
var state__44108__auto__ = (function (){var statearr_67826 = f__44107__auto__.call(null);
(statearr_67826[(6)] = c__44106__auto__);

return statearr_67826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44108__auto__);
});})(c__44106__auto__))
);

return c__44106__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__44106__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44106__auto__){
return (function (){
var f__44107__auto__ = (function (){var switch__44016__auto__ = ((function (c__44106__auto__){
return (function (state_67839){
var state_val_67840 = (state_67839[(1)]);
if((state_val_67840 === (1))){
var inst_67829 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_67839__$1 = state_67839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67839__$1,(2),inst_67829);
} else {
if((state_val_67840 === (2))){
var inst_67831 = (state_67839[(2)]);
var inst_67832 = cljs.core.async.timeout.call(null,(400));
var state_67839__$1 = (function (){var statearr_67841 = state_67839;
(statearr_67841[(7)] = inst_67831);

return statearr_67841;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67839__$1,(3),inst_67832);
} else {
if((state_val_67840 === (3))){
var inst_67834 = (state_67839[(2)]);
var inst_67835 = figwheel.client.heads_up.clear.call(null);
var state_67839__$1 = (function (){var statearr_67842 = state_67839;
(statearr_67842[(8)] = inst_67834);

return statearr_67842;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67839__$1,(4),inst_67835);
} else {
if((state_val_67840 === (4))){
var inst_67837 = (state_67839[(2)]);
var state_67839__$1 = state_67839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67839__$1,inst_67837);
} else {
return null;
}
}
}
}
});})(c__44106__auto__))
;
return ((function (switch__44016__auto__,c__44106__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__44017__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__44017__auto____0 = (function (){
var statearr_67843 = [null,null,null,null,null,null,null,null,null];
(statearr_67843[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__44017__auto__);

(statearr_67843[(1)] = (1));

return statearr_67843;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__44017__auto____1 = (function (state_67839){
while(true){
var ret_value__44018__auto__ = (function (){try{while(true){
var result__44019__auto__ = switch__44016__auto__.call(null,state_67839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44019__auto__;
}
break;
}
}catch (e67844){if((e67844 instanceof Object)){
var ex__44020__auto__ = e67844;
var statearr_67845_67847 = state_67839;
(statearr_67845_67847[(5)] = ex__44020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67848 = state_67839;
state_67839 = G__67848;
continue;
} else {
return ret_value__44018__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__44017__auto__ = function(state_67839){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__44017__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__44017__auto____1.call(this,state_67839);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__44017__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__44017__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__44017__auto__;
})()
;})(switch__44016__auto__,c__44106__auto__))
})();
var state__44108__auto__ = (function (){var statearr_67846 = f__44107__auto__.call(null);
(statearr_67846[(6)] = c__44106__auto__);

return statearr_67846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44108__auto__);
});})(c__44106__auto__))
);

return c__44106__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__5278__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__5278__auto__)){
var el = temp__5278__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("background-color: rgba(24, 26, 38, 0.95);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: absolute;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 9000;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 100vw;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 100vh;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("top: 0px; left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace")].join('')}),goog.dom.createDom("div",({"class": "message", "style": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #FFF5DB;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 100vw;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin: auto;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-top: 10px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: center; "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 2px 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: relative")].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map?rel=1504289164290