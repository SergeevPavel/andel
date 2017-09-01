// Compiled by ClojureScript 1.9.671 {}
goog.provide('andel.editor');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('create_react_class');
goog.require('react_dom');
goog.require('garden.core');
goog.require('garden.stylesheet');
goog.require('andel.keybind');
goog.require('andel.styles');
goog.require('andel.theme');
goog.require('andel.lexer');
goog.require('andel.text');
goog.require('andel.intervals');
goog.require('andel.controller');
goog.require('andel.utils');
goog.require('andel.tree');
andel.editor.font__GT_str = (function andel$editor$font__GT_str(font_name,height){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(font_name)].join('');
});
andel.editor.measure = (function andel$editor$measure(font_name,height,spacing){
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
ctx.font = andel.editor.font__GT_str.call(null,font_name,height);

var width = ctx.measureText("X").width;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"spacing","spacing",204422175),spacing,new cljs.core.Keyword(null,"font-name","font-name",-447609210),font_name], null);
});
andel.editor.measure_async = (function andel$editor$measure_async(font_name,size,spacing){
var c__44106__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44106__auto__){
return (function (){
var f__44107__auto__ = (function (){var switch__44016__auto__ = ((function (c__44106__auto__){
return (function (state_64535){
var state_val_64536 = (state_64535[(1)]);
if((state_val_64536 === (1))){
var inst_64518 = andel.editor.measure.call(null,font_name,size,spacing);
var state_64535__$1 = (function (){var statearr_64537 = state_64535;
(statearr_64537[(7)] = inst_64518);

return statearr_64537;
})();
var statearr_64538_64549 = state_64535__$1;
(statearr_64538_64549[(2)] = null);

(statearr_64538_64549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64536 === (2))){
var inst_64520 = document.fonts;
var inst_64521 = andel.editor.font__GT_str.call(null,font_name,size);
var inst_64522 = inst_64520.check(inst_64521);
var state_64535__$1 = state_64535;
if(cljs.core.truth_(inst_64522)){
var statearr_64539_64550 = state_64535__$1;
(statearr_64539_64550[(1)] = (4));

} else {
var statearr_64540_64551 = state_64535__$1;
(statearr_64540_64551[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64536 === (3))){
var inst_64533 = (state_64535[(2)]);
var state_64535__$1 = state_64535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64535__$1,inst_64533);
} else {
if((state_val_64536 === (4))){
var inst_64524 = andel.editor.measure.call(null,font_name,size,spacing);
var state_64535__$1 = state_64535;
var statearr_64541_64552 = state_64535__$1;
(statearr_64541_64552[(2)] = inst_64524);

(statearr_64541_64552[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64536 === (5))){
var inst_64526 = cljs.core.async.timeout.call(null,(100));
var state_64535__$1 = state_64535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64535__$1,(7),inst_64526);
} else {
if((state_val_64536 === (6))){
var inst_64531 = (state_64535[(2)]);
var state_64535__$1 = state_64535;
var statearr_64542_64553 = state_64535__$1;
(statearr_64542_64553[(2)] = inst_64531);

(statearr_64542_64553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64536 === (7))){
var inst_64528 = (state_64535[(2)]);
var state_64535__$1 = (function (){var statearr_64543 = state_64535;
(statearr_64543[(8)] = inst_64528);

return statearr_64543;
})();
var statearr_64544_64554 = state_64535__$1;
(statearr_64544_64554[(2)] = null);

(statearr_64544_64554[(1)] = (2));


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
});})(c__44106__auto__))
;
return ((function (switch__44016__auto__,c__44106__auto__){
return (function() {
var andel$editor$measure_async_$_state_machine__44017__auto__ = null;
var andel$editor$measure_async_$_state_machine__44017__auto____0 = (function (){
var statearr_64545 = [null,null,null,null,null,null,null,null,null];
(statearr_64545[(0)] = andel$editor$measure_async_$_state_machine__44017__auto__);

(statearr_64545[(1)] = (1));

return statearr_64545;
});
var andel$editor$measure_async_$_state_machine__44017__auto____1 = (function (state_64535){
while(true){
var ret_value__44018__auto__ = (function (){try{while(true){
var result__44019__auto__ = switch__44016__auto__.call(null,state_64535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44019__auto__;
}
break;
}
}catch (e64546){if((e64546 instanceof Object)){
var ex__44020__auto__ = e64546;
var statearr_64547_64555 = state_64535;
(statearr_64547_64555[(5)] = ex__44020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64556 = state_64535;
state_64535 = G__64556;
continue;
} else {
return ret_value__44018__auto__;
}
break;
}
});
andel$editor$measure_async_$_state_machine__44017__auto__ = function(state_64535){
switch(arguments.length){
case 0:
return andel$editor$measure_async_$_state_machine__44017__auto____0.call(this);
case 1:
return andel$editor$measure_async_$_state_machine__44017__auto____1.call(this,state_64535);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
andel$editor$measure_async_$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$0 = andel$editor$measure_async_$_state_machine__44017__auto____0;
andel$editor$measure_async_$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$1 = andel$editor$measure_async_$_state_machine__44017__auto____1;
return andel$editor$measure_async_$_state_machine__44017__auto__;
})()
;})(switch__44016__auto__,c__44106__auto__))
})();
var state__44108__auto__ = (function (){var statearr_64548 = f__44107__auto__.call(null);
(statearr_64548[(6)] = c__44106__auto__);

return statearr_64548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44108__auto__);
});})(c__44106__auto__))
);

return c__44106__auto__;
});
andel.editor.load_editors_common_BANG_ = (function andel$editor$load_editors_common_BANG_(){
var loaded = cljs.core.async.promise_chan.call(null);
var c__44106__auto___64659 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44106__auto___64659,loaded){
return (function (){
var f__44107__auto__ = (function (){var switch__44016__auto__ = ((function (c__44106__auto___64659,loaded){
return (function (state_64630){
var state_val_64631 = (state_64630[(1)]);
if((state_val_64631 === (7))){
var inst_64561 = (state_64630[(7)]);
var inst_64566 = (state_64630[(2)]);
var inst_64567 = (inst_64561 + (1));
var inst_64561__$1 = inst_64567;
var state_64630__$1 = (function (){var statearr_64632 = state_64630;
(statearr_64632[(7)] = inst_64561__$1);

(statearr_64632[(8)] = inst_64566);

return statearr_64632;
})();
var statearr_64633_64660 = state_64630__$1;
(statearr_64633_64660[(2)] = null);

(statearr_64633_64660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64631 === (1))){
var inst_64557 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64558 = ["resources/public/codemirror/addon/runmode/runmode-standalone.js","resources/public/codemirror/addon/runmode/runmode-standalone.js","resources/public/codemirror/mode/javascript/javascript.js","resources/public/codemirror/mode/clike/clike.js","resources/public/codemirror/mode/clojure/clojure.js"];
var inst_64559 = (new cljs.core.PersistentVector(null,5,(5),inst_64557,inst_64558,null));
var inst_64560 = cljs.core.map.call(null,andel.styles.include_script,inst_64559);
var inst_64561 = (0);
var state_64630__$1 = (function (){var statearr_64634 = state_64630;
(statearr_64634[(9)] = inst_64560);

(statearr_64634[(7)] = inst_64561);

return statearr_64634;
})();
var statearr_64635_64661 = state_64630__$1;
(statearr_64635_64661[(2)] = null);

(statearr_64635_64661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64631 === (4))){
var inst_64561 = (state_64630[(7)]);
var state_64630__$1 = state_64630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64630__$1,(7),inst_64561);
} else {
if((state_val_64631 === (15))){
var inst_64577 = (state_64630[(10)]);
var inst_64595 = cljs.core.apply.call(null,cljs.core.hash_map,inst_64577);
var state_64630__$1 = state_64630;
var statearr_64636_64662 = state_64630__$1;
(statearr_64636_64662[(2)] = inst_64595);

(statearr_64636_64662[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64631 === (13))){
var state_64630__$1 = state_64630;
var statearr_64637_64663 = state_64630__$1;
(statearr_64637_64663[(2)] = false);

(statearr_64637_64663[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64631 === (6))){
var inst_64571 = (state_64630[(2)]);
var state_64630__$1 = state_64630;
var statearr_64638_64664 = state_64630__$1;
(statearr_64638_64664[(2)] = inst_64571);

(statearr_64638_64664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64631 === (17))){
var inst_64598 = (state_64630[(2)]);
var inst_64599 = cljs.core.get.call(null,inst_64598,new cljs.core.Keyword(null,"height","height",1025178622));
var inst_64600 = cljs.core.get.call(null,inst_64598,new cljs.core.Keyword(null,"font-name","font-name",-447609210));
var inst_64601 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64602 = [new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"margin","margin",-995903681)];
var inst_64603 = andel.styles.px.call(null,inst_64599);
var inst_64604 = [inst_64600,inst_64603,andel.theme.foreground,"0px"];
var inst_64605 = cljs.core.PersistentHashMap.fromArrays(inst_64602,inst_64604);
var inst_64606 = [new cljs.core.Keyword(null,"pre","pre",2118456869),inst_64605];
var inst_64607 = (new cljs.core.PersistentVector(null,2,(5),inst_64601,inst_64606,null));
var inst_64608 = andel.styles.defstyle.call(null,new cljs.core.Keyword(null,"editor","editor",-989377770),inst_64607);
var inst_64609 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64610 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_64611 = ["0"];
var inst_64612 = cljs.core.PersistentHashMap.fromArrays(inst_64610,inst_64611);
var inst_64613 = ["50%",inst_64612];
var inst_64614 = (new cljs.core.PersistentVector(null,2,(5),inst_64609,inst_64613,null));
var inst_64615 = garden.stylesheet.at_keyframes.call(null,"blinker",inst_64614);
var inst_64616 = andel.styles.defstyle.call(null,inst_64615);
var inst_64617 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64618 = [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"user-select","user-select",-346451650),new cljs.core.Keyword(null,"top","top",-1856271961)];
var inst_64619 = [new cljs.core.Keyword(null,"absolute","absolute",1655386478),(0),new cljs.core.Keyword(null,"none","none",1333468478),(0)];
var inst_64620 = cljs.core.PersistentHashMap.fromArrays(inst_64618,inst_64619);
var inst_64621 = [new cljs.core.Keyword(null,".line-text",".line-text",864544982),inst_64620];
var inst_64622 = (new cljs.core.PersistentVector(null,2,(5),inst_64617,inst_64621,null));
var inst_64623 = andel.styles.defstyle.call(null,new cljs.core.Keyword(null,"line-text","line-text",-1470301126),inst_64622);
var inst_64624 = [new cljs.core.Keyword(null,"font-metrics","font-metrics",-470350241)];
var inst_64625 = [inst_64598];
var inst_64626 = cljs.core.PersistentHashMap.fromArrays(inst_64624,inst_64625);
var state_64630__$1 = (function (){var statearr_64639 = state_64630;
(statearr_64639[(11)] = inst_64608);

(statearr_64639[(12)] = inst_64623);

(statearr_64639[(13)] = inst_64616);

return statearr_64639;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64630__$1,(18),loaded,inst_64626);
} else {
if((state_val_64631 === (3))){
var inst_64573 = (state_64630[(2)]);
var inst_64575 = andel.editor.measure_async.call(null,"Fira Code",(16),(3));
var state_64630__$1 = (function (){var statearr_64640 = state_64630;
(statearr_64640[(14)] = inst_64573);

return statearr_64640;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64630__$1,(8),inst_64575);
} else {
if((state_val_64631 === (12))){
var state_64630__$1 = state_64630;
var statearr_64641_64665 = state_64630__$1;
(statearr_64641_64665[(2)] = true);

(statearr_64641_64665[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64631 === (2))){
var inst_64560 = (state_64630[(9)]);
var inst_64561 = (state_64630[(7)]);
var inst_64563 = (inst_64561 < inst_64560);
var state_64630__$1 = state_64630;
if(cljs.core.truth_(inst_64563)){
var statearr_64642_64666 = state_64630__$1;
(statearr_64642_64666[(1)] = (4));

} else {
var statearr_64643_64667 = state_64630__$1;
(statearr_64643_64667[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64631 === (11))){
var inst_64593 = (state_64630[(2)]);
var state_64630__$1 = state_64630;
if(cljs.core.truth_(inst_64593)){
var statearr_64644_64668 = state_64630__$1;
(statearr_64644_64668[(1)] = (15));

} else {
var statearr_64645_64669 = state_64630__$1;
(statearr_64645_64669[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64631 === (9))){
var inst_64577 = (state_64630[(10)]);
var inst_64582 = inst_64577.cljs$lang$protocol_mask$partition0$;
var inst_64583 = (inst_64582 & (64));
var inst_64584 = inst_64577.cljs$core$ISeq$;
var inst_64585 = (cljs.core.PROTOCOL_SENTINEL === inst_64584);
var inst_64586 = (inst_64583) || (inst_64585);
var state_64630__$1 = state_64630;
if(cljs.core.truth_(inst_64586)){
var statearr_64646_64670 = state_64630__$1;
(statearr_64646_64670[(1)] = (12));

} else {
var statearr_64647_64671 = state_64630__$1;
(statearr_64647_64671[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64631 === (5))){
var state_64630__$1 = state_64630;
var statearr_64648_64672 = state_64630__$1;
(statearr_64648_64672[(2)] = null);

(statearr_64648_64672[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64631 === (14))){
var inst_64590 = (state_64630[(2)]);
var state_64630__$1 = state_64630;
var statearr_64649_64673 = state_64630__$1;
(statearr_64649_64673[(2)] = inst_64590);

(statearr_64649_64673[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64631 === (16))){
var inst_64577 = (state_64630[(10)]);
var state_64630__$1 = state_64630;
var statearr_64650_64674 = state_64630__$1;
(statearr_64650_64674[(2)] = inst_64577);

(statearr_64650_64674[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64631 === (10))){
var state_64630__$1 = state_64630;
var statearr_64651_64675 = state_64630__$1;
(statearr_64651_64675[(2)] = false);

(statearr_64651_64675[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64631 === (18))){
var inst_64628 = (state_64630[(2)]);
var state_64630__$1 = state_64630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64630__$1,inst_64628);
} else {
if((state_val_64631 === (8))){
var inst_64577 = (state_64630[(10)]);
var inst_64577__$1 = (state_64630[(2)]);
var inst_64579 = (inst_64577__$1 == null);
var inst_64580 = cljs.core.not.call(null,inst_64579);
var state_64630__$1 = (function (){var statearr_64652 = state_64630;
(statearr_64652[(10)] = inst_64577__$1);

return statearr_64652;
})();
if(inst_64580){
var statearr_64653_64676 = state_64630__$1;
(statearr_64653_64676[(1)] = (9));

} else {
var statearr_64654_64677 = state_64630__$1;
(statearr_64654_64677[(1)] = (10));

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
});})(c__44106__auto___64659,loaded))
;
return ((function (switch__44016__auto__,c__44106__auto___64659,loaded){
return (function() {
var andel$editor$load_editors_common_BANG__$_state_machine__44017__auto__ = null;
var andel$editor$load_editors_common_BANG__$_state_machine__44017__auto____0 = (function (){
var statearr_64655 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64655[(0)] = andel$editor$load_editors_common_BANG__$_state_machine__44017__auto__);

(statearr_64655[(1)] = (1));

return statearr_64655;
});
var andel$editor$load_editors_common_BANG__$_state_machine__44017__auto____1 = (function (state_64630){
while(true){
var ret_value__44018__auto__ = (function (){try{while(true){
var result__44019__auto__ = switch__44016__auto__.call(null,state_64630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44019__auto__;
}
break;
}
}catch (e64656){if((e64656 instanceof Object)){
var ex__44020__auto__ = e64656;
var statearr_64657_64678 = state_64630;
(statearr_64657_64678[(5)] = ex__44020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64679 = state_64630;
state_64630 = G__64679;
continue;
} else {
return ret_value__44018__auto__;
}
break;
}
});
andel$editor$load_editors_common_BANG__$_state_machine__44017__auto__ = function(state_64630){
switch(arguments.length){
case 0:
return andel$editor$load_editors_common_BANG__$_state_machine__44017__auto____0.call(this);
case 1:
return andel$editor$load_editors_common_BANG__$_state_machine__44017__auto____1.call(this,state_64630);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
andel$editor$load_editors_common_BANG__$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$0 = andel$editor$load_editors_common_BANG__$_state_machine__44017__auto____0;
andel$editor$load_editors_common_BANG__$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$1 = andel$editor$load_editors_common_BANG__$_state_machine__44017__auto____1;
return andel$editor$load_editors_common_BANG__$_state_machine__44017__auto__;
})()
;})(switch__44016__auto__,c__44106__auto___64659,loaded))
})();
var state__44108__auto__ = (function (){var statearr_64658 = f__44107__auto__.call(null);
(statearr_64658[(6)] = c__44106__auto___64659);

return statearr_64658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44108__auto__);
});})(c__44106__auto___64659,loaded))
);


return loaded;
});
if(typeof andel.editor._STAR_editors_common !== 'undefined'){
} else {
andel.editor._STAR_editors_common = andel.editor.load_editors_common_BANG_.call(null);
}
andel.editor.deliver_lexems_BANG_ = (function andel$editor$deliver_lexems_BANG_(p__64680,state_ref){
var map__64681 = p__64680;
var map__64681__$1 = ((((!((map__64681 == null)))?((((map__64681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64681.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64681):map__64681);
var req_ts = cljs.core.get.call(null,map__64681__$1,new cljs.core.Keyword(null,"req-ts","req-ts",-850254069));
var tokens = cljs.core.get.call(null,map__64681__$1,new cljs.core.Keyword(null,"tokens","tokens",-818939304));
var index = cljs.core.get.call(null,map__64681__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var text = cljs.core.get.call(null,map__64681__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var res = cljs.core.swap_BANG_.call(null,state_ref,((function (map__64681,map__64681__$1,req_ts,tokens,index,text){
return (function (p__64683){
var map__64684 = p__64683;
var map__64684__$1 = ((((!((map__64684 == null)))?((((map__64684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64684.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64684):map__64684);
var state = map__64684__$1;
var document = cljs.core.get.call(null,map__64684__$1,new cljs.core.Keyword(null,"document","document",-1329188687));
var map__64686 = document;
var map__64686__$1 = ((((!((map__64686 == null)))?((((map__64686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64686.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64686):map__64686);
var timestamp = cljs.core.get.call(null,map__64686__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
if(cljs.core._EQ_.call(null,timestamp,req_ts)){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword(null,"lines","lines",-700165781),index,new cljs.core.Keyword(null,"tokens","tokens",-818939304)], null),tokens),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword(null,"hashes","hashes",-61686786),cljs.core.hash.call(null,text)], null),tokens),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword(null,"first-invalid","first-invalid",1411060144)], null),(index + (1)));
} else {
return state;
}
});})(map__64681,map__64681__$1,req_ts,tokens,index,text))
);
return cljs.core._EQ_.call(null,cljs.core.get_in.call(null,res,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword(null,"timestamp","timestamp",579478971)], null)),req_ts);
});
andel.editor.run_lexer_loop_BANG_ = (function andel$editor$run_lexer_loop_BANG_(state_ref){
var map__64688 = cljs.core.deref.call(null,state_ref);
var map__64688__$1 = ((((!((map__64688 == null)))?((((map__64688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64688.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64688):map__64688);
var state = map__64688__$1;
var document = cljs.core.get.call(null,map__64688__$1,new cljs.core.Keyword(null,"document","document",-1329188687));
var map__64689 = document;
var map__64689__$1 = ((((!((map__64689 == null)))?((((map__64689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64689.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64689):map__64689);
var modespec = cljs.core.get.call(null,map__64689__$1,new cljs.core.Keyword(null,"modespec","modespec",1308638208));
var lexer_broker = cljs.core.get.call(null,map__64689__$1,new cljs.core.Keyword(null,"lexer-broker","lexer-broker",-427816226));
var map__64690 = andel.lexer.new_lexer_worker.call(null,modespec);
var map__64690__$1 = ((((!((map__64690 == null)))?((((map__64690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64690.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64690):map__64690);
var input = cljs.core.get.call(null,map__64690__$1,new cljs.core.Keyword(null,"input","input",556931961));
var output = cljs.core.get.call(null,map__64690__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var c__44106__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44106__auto__,map__64688,map__64688__$1,state,document,map__64689,map__64689__$1,modespec,lexer_broker,map__64690,map__64690__$1,input,output){
return (function (){
var f__44107__auto__ = (function (){var switch__44016__auto__ = ((function (c__44106__auto__,map__64688,map__64688__$1,state,document,map__64689,map__64689__$1,modespec,lexer_broker,map__64690,map__64690__$1,input,output){
return (function (state_64799){
var state_val_64800 = (state_64799[(1)]);
if((state_val_64800 === (7))){
var state_64799__$1 = state_64799;
var statearr_64801_64861 = state_64799__$1;
(statearr_64801_64861[(2)] = null);

(statearr_64801_64861[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64800 === (20))){
var inst_64760 = cljs.core.async.timeout.call(null,(1));
var state_64799__$1 = state_64799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64799__$1,(23),inst_64760);
} else {
if((state_val_64800 === (27))){
var inst_64756 = (state_64799[(7)]);
var inst_64778 = andel.editor.deliver_lexems_BANG_.call(null,inst_64756,state_ref);
var state_64799__$1 = state_64799;
if(cljs.core.truth_(inst_64778)){
var statearr_64802_64862 = state_64799__$1;
(statearr_64802_64862[(1)] = (30));

} else {
var statearr_64803_64863 = state_64799__$1;
(statearr_64803_64863[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64800 === (1))){
var inst_64694 = null;
var inst_64695 = (0);
var inst_64696 = (0);
var state_64799__$1 = (function (){var statearr_64804 = state_64799;
(statearr_64804[(8)] = inst_64695);

(statearr_64804[(9)] = inst_64696);

(statearr_64804[(10)] = inst_64694);

return statearr_64804;
})();
var statearr_64805_64864 = state_64799__$1;
(statearr_64805_64864[(2)] = null);

(statearr_64805_64864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64800 === (24))){
var inst_64756 = (state_64799[(7)]);
var inst_64767 = (state_64799[(11)]);
var inst_64770 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64771 = [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword(null,"first-invalid","first-invalid",1411060144)];
var inst_64772 = (new cljs.core.PersistentVector(null,2,(5),inst_64770,inst_64771,null));
var inst_64773 = cljs.core.get_in.call(null,inst_64756,inst_64772);
var inst_64694 = inst_64756;
var inst_64695 = inst_64773;
var inst_64696 = inst_64767;
var state_64799__$1 = (function (){var statearr_64806 = state_64799;
(statearr_64806[(8)] = inst_64695);

(statearr_64806[(9)] = inst_64696);

(statearr_64806[(10)] = inst_64694);

return statearr_64806;
})();
var statearr_64807_64865 = state_64799__$1;
(statearr_64807_64865[(2)] = null);

(statearr_64807_64865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64800 === (4))){
var inst_64694 = (state_64799[(10)]);
var inst_64712 = (inst_64694 == null);
var state_64799__$1 = state_64799;
if(cljs.core.truth_(inst_64712)){
var statearr_64808_64866 = state_64799__$1;
(statearr_64808_64866[(1)] = (7));

} else {
var statearr_64809_64867 = state_64799__$1;
(statearr_64809_64867[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64800 === (15))){
var inst_64729 = (state_64799[(2)]);
var state_64799__$1 = state_64799;
var statearr_64810_64868 = state_64799__$1;
(statearr_64810_64868[(2)] = inst_64729);

(statearr_64810_64868[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64800 === (21))){
var inst_64696 = (state_64799[(9)]);
var state_64799__$1 = state_64799;
var statearr_64812_64869 = state_64799__$1;
(statearr_64812_64869[(2)] = inst_64696);

(statearr_64812_64869[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64800 === (31))){
var inst_64695 = (state_64799[(8)]);
var state_64799__$1 = state_64799;
var statearr_64815_64870 = state_64799__$1;
(statearr_64815_64870[(2)] = inst_64695);

(statearr_64815_64870[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64800 === (32))){
var inst_64767 = (state_64799[(11)]);
var inst_64694 = (state_64799[(10)]);
var inst_64783 = (state_64799[(2)]);
var tmp64811 = inst_64694;
var inst_64694__$1 = tmp64811;
var inst_64695 = inst_64783;
var inst_64696 = inst_64767;
var state_64799__$1 = (function (){var statearr_64816 = state_64799;
(statearr_64816[(8)] = inst_64695);

(statearr_64816[(9)] = inst_64696);

(statearr_64816[(10)] = inst_64694__$1);

return statearr_64816;
})();
var statearr_64817_64871 = state_64799__$1;
(statearr_64817_64871[(2)] = null);

(statearr_64817_64871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64800 === (33))){
var inst_64695 = (state_64799[(8)]);
var inst_64767 = (state_64799[(11)]);
var inst_64694 = (state_64799[(10)]);
var tmp64813 = inst_64695;
var tmp64814 = inst_64694;
var inst_64694__$1 = tmp64814;
var inst_64695__$1 = tmp64813;
var inst_64696 = inst_64767;
var state_64799__$1 = (function (){var statearr_64818 = state_64799;
(statearr_64818[(8)] = inst_64695__$1);

(statearr_64818[(9)] = inst_64696);

(statearr_64818[(10)] = inst_64694__$1);

return statearr_64818;
})();
var statearr_64819_64872 = state_64799__$1;
(statearr_64819_64872[(2)] = null);

(statearr_64819_64872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64800 === (13))){
var state_64799__$1 = state_64799;
var statearr_64820_64873 = state_64799__$1;
(statearr_64820_64873[(2)] = null);

(statearr_64820_64873[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64800 === (22))){
var inst_64757 = (state_64799[(12)]);
var inst_64767 = (state_64799[(2)]);
var inst_64768 = cljs.core._EQ_.call(null,inst_64757,lexer_broker);
var state_64799__$1 = (function (){var statearr_64821 = state_64799;
(statearr_64821[(11)] = inst_64767);

return statearr_64821;
})();
if(inst_64768){
var statearr_64822_64874 = state_64799__$1;
(statearr_64822_64874[(1)] = (24));

} else {
var statearr_64823_64875 = state_64799__$1;
(statearr_64823_64875[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64800 === (29))){
var inst_64793 = (state_64799[(2)]);
var state_64799__$1 = state_64799;
var statearr_64824_64876 = state_64799__$1;
(statearr_64824_64876[(2)] = inst_64793);

(statearr_64824_64876[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64800 === (6))){
var inst_64732 = (state_64799[(13)]);
var inst_64732__$1 = (state_64799[(2)]);
var inst_64734 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64735 = [lexer_broker,output];
var inst_64736 = (new cljs.core.PersistentVector(null,2,(5),inst_64734,inst_64735,null));
var inst_64737 = (inst_64732__$1 == null);
var inst_64738 = cljs.core.not.call(null,inst_64737);
var state_64799__$1 = (function (){var statearr_64825 = state_64799;
(statearr_64825[(13)] = inst_64732__$1);

(statearr_64825[(14)] = inst_64736);

return statearr_64825;
})();
if(inst_64738){
var statearr_64826_64877 = state_64799__$1;
(statearr_64826_64877[(1)] = (17));

} else {
var statearr_64827_64878 = state_64799__$1;
(statearr_64827_64878[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64800 === (28))){
var inst_64757 = (state_64799[(12)]);
var inst_64786 = cljs.core._EQ_.call(null,inst_64757,input);
var state_64799__$1 = state_64799;
if(inst_64786){
var statearr_64828_64879 = state_64799__$1;
(statearr_64828_64879[(1)] = (33));

} else {
var statearr_64829_64880 = state_64799__$1;
(statearr_64829_64880[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64800 === (25))){
var inst_64757 = (state_64799[(12)]);
var inst_64776 = cljs.core._EQ_.call(null,inst_64757,output);
var state_64799__$1 = state_64799;
if(inst_64776){
var statearr_64830_64881 = state_64799__$1;
(statearr_64830_64881[(1)] = (27));

} else {
var statearr_64831_64882 = state_64799__$1;
(statearr_64831_64882[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64800 === (34))){
var state_64799__$1 = state_64799;
var statearr_64832_64883 = state_64799__$1;
(statearr_64832_64883[(2)] = null);

(statearr_64832_64883[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64800 === (17))){
var inst_64695 = (state_64799[(8)]);
var inst_64732 = (state_64799[(13)]);
var inst_64736 = (state_64799[(14)]);
var inst_64694 = (state_64799[(10)]);
var inst_64740 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64741 = [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"req-ts","req-ts",-850254069)];
var inst_64742 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64743 = [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword(null,"timestamp","timestamp",579478971)];
var inst_64744 = (new cljs.core.PersistentVector(null,2,(5),inst_64742,inst_64743,null));
var inst_64745 = cljs.core.get_in.call(null,inst_64694,inst_64744);
var inst_64746 = [inst_64695,inst_64732,inst_64745];
var inst_64747 = cljs.core.PersistentHashMap.fromArrays(inst_64741,inst_64746);
var inst_64748 = [input,inst_64747];
var inst_64749 = (new cljs.core.PersistentVector(null,2,(5),inst_64740,inst_64748,null));
var inst_64750 = cljs.core.conj.call(null,inst_64736,inst_64749);
var state_64799__$1 = state_64799;
var statearr_64833_64884 = state_64799__$1;
(statearr_64833_64884[(2)] = inst_64750);

(statearr_64833_64884[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64800 === (3))){
var inst_64797 = (state_64799[(2)]);
var state_64799__$1 = state_64799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64799__$1,inst_64797);
} else {
if((state_val_64800 === (12))){
var inst_64723 = (state_64799[(15)]);
var inst_64723__$1 = (state_64799[(2)]);
var inst_64724 = (inst_64723__$1 == null);
var state_64799__$1 = (function (){var statearr_64834 = state_64799;
(statearr_64834[(15)] = inst_64723__$1);

return statearr_64834;
})();
if(cljs.core.truth_(inst_64724)){
var statearr_64835_64885 = state_64799__$1;
(statearr_64835_64885[(1)] = (13));

} else {
var statearr_64836_64886 = state_64799__$1;
(statearr_64836_64886[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64800 === (2))){
var inst_64695 = (state_64799[(8)]);
var inst_64696 = (state_64799[(9)]);
var inst_64694 = (state_64799[(10)]);
var inst_64701 = (new Date());
var inst_64702 = inst_64701.getTime();
var inst_64703 = (inst_64702 - inst_64696);
var inst_64704 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64705 = [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword(null,"text","text",-1790561697)];
var inst_64706 = (new cljs.core.PersistentVector(null,2,(5),inst_64704,inst_64705,null));
var inst_64707 = cljs.core.get_in.call(null,inst_64694,inst_64706);
var inst_64708 = andel.text.lines_count.call(null,inst_64707);
var inst_64709 = (inst_64695 < inst_64708);
var state_64799__$1 = (function (){var statearr_64837 = state_64799;
(statearr_64837[(16)] = inst_64703);

return statearr_64837;
})();
if(cljs.core.truth_(inst_64709)){
var statearr_64838_64887 = state_64799__$1;
(statearr_64838_64887[(1)] = (4));

} else {
var statearr_64839_64888 = state_64799__$1;
(statearr_64839_64888[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64800 === (23))){
var inst_64762 = (state_64799[(2)]);
var inst_64763 = (new Date());
var inst_64764 = inst_64763.getTime();
var state_64799__$1 = (function (){var statearr_64840 = state_64799;
(statearr_64840[(17)] = inst_64762);

return statearr_64840;
})();
var statearr_64841_64889 = state_64799__$1;
(statearr_64841_64889[(2)] = inst_64764);

(statearr_64841_64889[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64800 === (35))){
var inst_64791 = (state_64799[(2)]);
var state_64799__$1 = state_64799;
var statearr_64842_64890 = state_64799__$1;
(statearr_64842_64890[(2)] = inst_64791);

(statearr_64842_64890[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64800 === (19))){
var inst_64753 = (state_64799[(2)]);
var state_64799__$1 = state_64799;
return cljs.core.async.ioc_alts_BANG_.call(null,state_64799__$1,(16),inst_64753,new cljs.core.Keyword(null,"priority","priority",1431093715),true);
} else {
if((state_val_64800 === (11))){
var inst_64717 = (state_64799[(18)]);
var inst_64721 = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(inst_64717);
var state_64799__$1 = state_64799;
var statearr_64843_64891 = state_64799__$1;
(statearr_64843_64891[(2)] = inst_64721);

(statearr_64843_64891[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64800 === (9))){
var inst_64717 = (state_64799[(18)]);
var inst_64717__$1 = (state_64799[(2)]);
var inst_64718 = (inst_64717__$1 == null);
var state_64799__$1 = (function (){var statearr_64844 = state_64799;
(statearr_64844[(18)] = inst_64717__$1);

return statearr_64844;
})();
if(cljs.core.truth_(inst_64718)){
var statearr_64845_64892 = state_64799__$1;
(statearr_64845_64892[(1)] = (10));

} else {
var statearr_64846_64893 = state_64799__$1;
(statearr_64846_64893[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64800 === (5))){
var state_64799__$1 = state_64799;
var statearr_64847_64894 = state_64799__$1;
(statearr_64847_64894[(2)] = null);

(statearr_64847_64894[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64800 === (14))){
var inst_64695 = (state_64799[(8)]);
var inst_64723 = (state_64799[(15)]);
var inst_64727 = andel.text.line_text.call(null,inst_64723,inst_64695);
var state_64799__$1 = state_64799;
var statearr_64848_64895 = state_64799__$1;
(statearr_64848_64895[(2)] = inst_64727);

(statearr_64848_64895[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64800 === (26))){
var inst_64795 = (state_64799[(2)]);
var state_64799__$1 = state_64799;
var statearr_64849_64896 = state_64799__$1;
(statearr_64849_64896[(2)] = inst_64795);

(statearr_64849_64896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64800 === (16))){
var inst_64703 = (state_64799[(16)]);
var inst_64755 = (state_64799[(2)]);
var inst_64756 = cljs.core.nth.call(null,inst_64755,(0),null);
var inst_64757 = cljs.core.nth.call(null,inst_64755,(1),null);
var inst_64758 = ((10) < inst_64703);
var state_64799__$1 = (function (){var statearr_64850 = state_64799;
(statearr_64850[(7)] = inst_64756);

(statearr_64850[(12)] = inst_64757);

return statearr_64850;
})();
if(cljs.core.truth_(inst_64758)){
var statearr_64851_64897 = state_64799__$1;
(statearr_64851_64897[(1)] = (20));

} else {
var statearr_64852_64898 = state_64799__$1;
(statearr_64852_64898[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64800 === (30))){
var inst_64695 = (state_64799[(8)]);
var inst_64780 = (inst_64695 + (1));
var state_64799__$1 = state_64799;
var statearr_64853_64899 = state_64799__$1;
(statearr_64853_64899[(2)] = inst_64780);

(statearr_64853_64899[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64800 === (10))){
var state_64799__$1 = state_64799;
var statearr_64854_64900 = state_64799__$1;
(statearr_64854_64900[(2)] = null);

(statearr_64854_64900[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64800 === (18))){
var inst_64736 = (state_64799[(14)]);
var state_64799__$1 = state_64799;
var statearr_64855_64901 = state_64799__$1;
(statearr_64855_64901[(2)] = inst_64736);

(statearr_64855_64901[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64800 === (8))){
var inst_64694 = (state_64799[(10)]);
var inst_64715 = new cljs.core.Keyword(null,"document","document",-1329188687).cljs$core$IFn$_invoke$arity$1(inst_64694);
var state_64799__$1 = state_64799;
var statearr_64856_64902 = state_64799__$1;
(statearr_64856_64902[(2)] = inst_64715);

(statearr_64856_64902[(1)] = (9));


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
});})(c__44106__auto__,map__64688,map__64688__$1,state,document,map__64689,map__64689__$1,modespec,lexer_broker,map__64690,map__64690__$1,input,output))
;
return ((function (switch__44016__auto__,c__44106__auto__,map__64688,map__64688__$1,state,document,map__64689,map__64689__$1,modespec,lexer_broker,map__64690,map__64690__$1,input,output){
return (function() {
var andel$editor$run_lexer_loop_BANG__$_state_machine__44017__auto__ = null;
var andel$editor$run_lexer_loop_BANG__$_state_machine__44017__auto____0 = (function (){
var statearr_64857 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64857[(0)] = andel$editor$run_lexer_loop_BANG__$_state_machine__44017__auto__);

(statearr_64857[(1)] = (1));

return statearr_64857;
});
var andel$editor$run_lexer_loop_BANG__$_state_machine__44017__auto____1 = (function (state_64799){
while(true){
var ret_value__44018__auto__ = (function (){try{while(true){
var result__44019__auto__ = switch__44016__auto__.call(null,state_64799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44019__auto__;
}
break;
}
}catch (e64858){if((e64858 instanceof Object)){
var ex__44020__auto__ = e64858;
var statearr_64859_64903 = state_64799;
(statearr_64859_64903[(5)] = ex__44020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64904 = state_64799;
state_64799 = G__64904;
continue;
} else {
return ret_value__44018__auto__;
}
break;
}
});
andel$editor$run_lexer_loop_BANG__$_state_machine__44017__auto__ = function(state_64799){
switch(arguments.length){
case 0:
return andel$editor$run_lexer_loop_BANG__$_state_machine__44017__auto____0.call(this);
case 1:
return andel$editor$run_lexer_loop_BANG__$_state_machine__44017__auto____1.call(this,state_64799);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
andel$editor$run_lexer_loop_BANG__$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$0 = andel$editor$run_lexer_loop_BANG__$_state_machine__44017__auto____0;
andel$editor$run_lexer_loop_BANG__$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$1 = andel$editor$run_lexer_loop_BANG__$_state_machine__44017__auto____1;
return andel$editor$run_lexer_loop_BANG__$_state_machine__44017__auto__;
})()
;})(switch__44016__auto__,c__44106__auto__,map__64688,map__64688__$1,state,document,map__64689,map__64689__$1,modespec,lexer_broker,map__64690,map__64690__$1,input,output))
})();
var state__44108__auto__ = (function (){var statearr_64860 = f__44107__auto__.call(null);
(statearr_64860[(6)] = c__44106__auto__);

return statearr_64860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44108__auto__);
});})(c__44106__auto__,map__64688,map__64688__$1,state,document,map__64689,map__64689__$1,modespec,lexer_broker,map__64690,map__64690__$1,input,output))
);

return c__44106__auto__;
});
andel.editor.attach_lexer_BANG_ = (function andel$editor$attach_lexer_BANG_(state_ref){
andel.editor.run_lexer_loop_BANG_.call(null,state_ref);

return cljs.core.add_watch.call(null,state_ref,new cljs.core.Keyword(null,"lexer","lexer",-746171419),(function (_,___$1,old_s,new_s){
var old_ts = cljs.core.get_in.call(null,old_s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword(null,"timestamp","timestamp",579478971)], null));
var new_ts = cljs.core.get_in.call(null,new_s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword(null,"timestamp","timestamp",579478971)], null));
var broker = cljs.core.get_in.call(null,new_s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword(null,"lexer-broker","lexer-broker",-427816226)], null));
if(cljs.core.not_EQ_.call(null,old_ts,new_ts)){
return cljs.core.async.put_BANG_.call(null,broker,new_s);
} else {
return null;
}
}));
});
andel.editor.make_editor_state = (function andel$editor$make_editor_state(){
var promise = cljs.core.async.promise_chan.call(null);
var c__44106__auto___64948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44106__auto___64948,promise){
return (function (){
var f__44107__auto__ = (function (){var switch__44016__auto__ = ((function (c__44106__auto___64948,promise){
return (function (state_64941){
var state_val_64942 = (state_64941[(1)]);
if((state_val_64942 === (1))){
var state_64941__$1 = state_64941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64941__$1,(2),andel.editor._STAR_editors_common);
} else {
if((state_val_64942 === (2))){
var inst_64906 = (state_64941[(2)]);
var inst_64907 = [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.Keyword(null,"viewport","viewport",443342715)];
var inst_64908 = [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"markup","markup",2143234544),new cljs.core.Keyword(null,"lexer-broker","lexer-broker",-427816226),new cljs.core.Keyword(null,"modespec","modespec",1308638208),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"lines","lines",-700165781),new cljs.core.Keyword(null,"first-invalid","first-invalid",1411060144)];
var inst_64909 = andel.text.make_text.call(null,"");
var inst_64910 = andel.intervals.make_interval_tree.call(null);
var inst_64911 = cljs.core.async.chan.call(null);
var inst_64912 = cljs.core.PersistentVector.EMPTY;
var inst_64913 = [inst_64909,inst_64910,inst_64911,"text/x-java",(0),inst_64912,(0)];
var inst_64914 = cljs.core.PersistentHashMap.fromArrays(inst_64908,inst_64913);
var inst_64915 = [new cljs.core.Keyword(null,"caret","caret",-1275001854),new cljs.core.Keyword(null,"selection","selection",975998651)];
var inst_64916 = [new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"v-col","v-col",1346715099)];
var inst_64917 = [(0),(0)];
var inst_64918 = cljs.core.PersistentHashMap.fromArrays(inst_64916,inst_64917);
var inst_64919 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64920 = [(0),(0)];
var inst_64921 = (new cljs.core.PersistentVector(null,2,(5),inst_64919,inst_64920,null));
var inst_64922 = [inst_64918,inst_64921];
var inst_64923 = cljs.core.PersistentHashMap.fromArrays(inst_64915,inst_64922);
var inst_64924 = [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"view-size","view-size",1412004200),new cljs.core.Keyword(null,"metrics","metrics",394093469)];
var inst_64925 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64926 = [(0),(0)];
var inst_64927 = (new cljs.core.PersistentVector(null,2,(5),inst_64925,inst_64926,null));
var inst_64928 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64929 = [(0),(0)];
var inst_64930 = (new cljs.core.PersistentVector(null,2,(5),inst_64928,inst_64929,null));
var inst_64931 = new cljs.core.Keyword(null,"font-metrics","font-metrics",-470350241).cljs$core$IFn$_invoke$arity$1(inst_64906);
var inst_64932 = [inst_64927,inst_64930,inst_64931];
var inst_64933 = cljs.core.PersistentHashMap.fromArrays(inst_64924,inst_64932);
var inst_64934 = [inst_64914,inst_64923,inst_64933];
var inst_64935 = cljs.core.PersistentHashMap.fromArrays(inst_64907,inst_64934);
var inst_64936 = cljs.core.atom.call(null,inst_64935);
var inst_64937 = andel.editor.attach_lexer_BANG_.call(null,inst_64936);
var state_64941__$1 = (function (){var statearr_64943 = state_64941;
(statearr_64943[(7)] = inst_64937);

return statearr_64943;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64941__$1,(3),promise,inst_64936);
} else {
if((state_val_64942 === (3))){
var inst_64939 = (state_64941[(2)]);
var state_64941__$1 = state_64941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64941__$1,inst_64939);
} else {
return null;
}
}
}
});})(c__44106__auto___64948,promise))
;
return ((function (switch__44016__auto__,c__44106__auto___64948,promise){
return (function() {
var andel$editor$make_editor_state_$_state_machine__44017__auto__ = null;
var andel$editor$make_editor_state_$_state_machine__44017__auto____0 = (function (){
var statearr_64944 = [null,null,null,null,null,null,null,null];
(statearr_64944[(0)] = andel$editor$make_editor_state_$_state_machine__44017__auto__);

(statearr_64944[(1)] = (1));

return statearr_64944;
});
var andel$editor$make_editor_state_$_state_machine__44017__auto____1 = (function (state_64941){
while(true){
var ret_value__44018__auto__ = (function (){try{while(true){
var result__44019__auto__ = switch__44016__auto__.call(null,state_64941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44019__auto__;
}
break;
}
}catch (e64945){if((e64945 instanceof Object)){
var ex__44020__auto__ = e64945;
var statearr_64946_64949 = state_64941;
(statearr_64946_64949[(5)] = ex__44020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64950 = state_64941;
state_64941 = G__64950;
continue;
} else {
return ret_value__44018__auto__;
}
break;
}
});
andel$editor$make_editor_state_$_state_machine__44017__auto__ = function(state_64941){
switch(arguments.length){
case 0:
return andel$editor$make_editor_state_$_state_machine__44017__auto____0.call(this);
case 1:
return andel$editor$make_editor_state_$_state_machine__44017__auto____1.call(this,state_64941);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
andel$editor$make_editor_state_$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$0 = andel$editor$make_editor_state_$_state_machine__44017__auto____0;
andel$editor$make_editor_state_$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$1 = andel$editor$make_editor_state_$_state_machine__44017__auto____1;
return andel$editor$make_editor_state_$_state_machine__44017__auto__;
})()
;})(switch__44016__auto__,c__44106__auto___64948,promise))
})();
var state__44108__auto__ = (function (){var statearr_64947 = f__44107__auto__.call(null);
(statearr_64947[(6)] = c__44106__auto___64948);

return statearr_64947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44108__auto__);
});})(c__44106__auto___64948,promise))
);


return promise;
});
andel.editor.el = (function andel$editor$el(var_args){
var G__64952 = arguments.length;
switch (G__64952) {
case 2:
return andel.editor.el.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return andel.editor.el.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

andel.editor.el.cljs$core$IFn$_invoke$arity$2 = (function (tag,props){
return React.createElement(tag,props);
});

andel.editor.el.cljs$core$IFn$_invoke$arity$3 = (function (tag,props,children){
return React.createElement(tag,props,children);
});

andel.editor.el.cljs$lang$maxFixedArity = 3;

andel.editor.style = (function andel$editor$style(m){
return cljs.core.reduce_kv.call(null,(function (s,k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((v instanceof cljs.core.Keyword))?cljs.core.name.call(null,v):v)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(";")].join('');
}),null,m);
});
andel.editor.render_attrs = (function andel$editor$render_attrs(m){
return cljs.core.reduce_kv.call(null,(function (s,k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((v instanceof cljs.core.Keyword))?cljs.core.name.call(null,v):v)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
}),null,m);
});
andel.editor.make_node = (function andel$editor$make_node(tag){
return document.createElement(cljs.core.name.call(null,tag));
});
andel.editor.make_text_node = (function andel$editor$make_text_node(s){
return document.createTextNode(s);
});
andel.editor.assoc_attr_BANG_ = (function andel$editor$assoc_attr_BANG_(e,a,v){
e.setAttribute(cljs.core.name.call(null,a),(((v instanceof cljs.core.Keyword))?cljs.core.name.call(null,v):v));

return e;
});
andel.editor.conj_child_BANG_ = (function andel$editor$conj_child_BANG_(e,c){
e.appendChild(c);

return e;
});
andel.editor.infinity_QMARK_ = (function andel$editor$infinity_QMARK_(x){
return (x instanceof cljs.core.Keyword);
});
andel.editor.render_selection = (function andel$editor$render_selection(p__64954,p__64955){
var vec__64956 = p__64954;
var from = cljs.core.nth.call(null,vec__64956,(0),null);
var to = cljs.core.nth.call(null,vec__64956,(1),null);
var map__64959 = p__64955;
var map__64959__$1 = ((((!((map__64959 == null)))?((((map__64959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64959.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64959):map__64959);
var metrics = map__64959__$1;
var width = cljs.core.get.call(null,map__64959__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),andel.editor.style.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background-color","background-color",570434026),andel.theme.selection,new cljs.core.Keyword(null,"height","height",1025178622),andel.styles.px.call(null,andel.utils.line_height.call(null,metrics)),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"top","top",-1856271961),andel.styles.px.call(null,(0)),new cljs.core.Keyword(null,"left","left",-399115937),(cljs.core.truth_(andel.editor.infinity_QMARK_.call(null,to))?(0):andel.styles.px.call(null,(from * width))),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(cljs.core.truth_(andel.editor.infinity_QMARK_.call(null,to))?andel.styles.px.call(null,(from * width)):null),new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(andel.editor.infinity_QMARK_.call(null,to))?"100%":andel.styles.px.call(null,((to - from) * width)))], null))], null)];
});
andel.editor.render_caret = (function andel$editor$render_caret(col,p__64961){
var map__64962 = p__64961;
var map__64962__$1 = ((((!((map__64962 == null)))?((((map__64962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64962.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64962):map__64962);
var metrics = map__64962__$1;
var width = cljs.core.get.call(null,map__64962__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,[new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),andel.editor.style.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"height","height",1025178622),andel.styles.px.call(null,(andel.utils.line_height.call(null,metrics) + (1))),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"bg-05","bg-05",111779098).cljs$core$IFn$_invoke$arity$1(andel.theme.zenburn),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"z-index","z-index",1892827090),"-1"], null))], null)],[new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),andel.editor.style.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),andel.styles.px.call(null,(1)),new cljs.core.Keyword(null,"animation","animation",-1248293244),"blinker 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"background-color","background-color",570434026),"white",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"left","left",-399115937),andel.styles.px.call(null,(col * width)),new cljs.core.Keyword(null,"height","height",1025178622),andel.styles.px.call(null,(andel.utils.line_height.call(null,metrics) + (1)))], null))], null)]];
});
andel.editor.token_class = (function (){var tokens_cache = ({});
return ((function (tokens_cache){
return (function (tt){
if(cljs.core.truth_(tt)){
var temp__5276__auto__ = (tokens_cache[cljs.core.name.call(null,tt)]);
if(cljs.core.truth_(temp__5276__auto__)){
var c = temp__5276__auto__;
return c;
} else {
var class$ = cljs.core.name.call(null,tt);
andel.styles.defstyle.call(null,tt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),andel.theme.token_styles.call(null,tt)], null));

(tokens_cache[cljs.core.name.call(null,tt)] = class$);

return class$;
}
} else {
return null;
}
});
;})(tokens_cache))
})();
andel.editor.push_BANG_ = (function andel$editor$push_BANG_(a,x){
a.push(x);

return a;
});
andel.editor.render_text = (function andel$editor$render_text(text,tokens,markup,p__64964){
var map__64965 = p__64964;
var map__64965__$1 = ((((!((map__64965 == null)))?((((map__64965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64965.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64965):map__64965);
var height = cljs.core.get.call(null,map__64965__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var markup__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"foreground","foreground",499022036),markup);
var events = cljs.core.concat.call(null,cljs.core.mapcat.call(null,((function (markup__$1,map__64965,map__64965__$1,height){
return (function (m){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.Keyword(null,"foreground","foreground",499022036).cljs$core$IFn$_invoke$arity$1(m)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"foreground","foreground",499022036).cljs$core$IFn$_invoke$arity$1(m)], null)], null);
});})(markup__$1,map__64965,map__64965__$1,height))
,markup__$1),cljs.core.second.call(null,cljs.core.reduce.call(null,((function (markup__$1,map__64965,map__64965__$1,height){
return (function (p__64967,p__64968){
var vec__64969 = p__64967;
var i = cljs.core.nth.call(null,vec__64969,(0),null);
var res = cljs.core.nth.call(null,vec__64969,(1),null);
var vec__64972 = p__64968;
var len = cljs.core.nth.call(null,vec__64972,(0),null);
var tt = cljs.core.nth.call(null,vec__64972,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + len),cljs.core.conj.call(null,res,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",-864607220),i,new cljs.core.Keyword(null,"add","add",235287739),andel.editor.token_class.call(null,tt)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",-864607220),(i + len),new cljs.core.Keyword(null,"remove","remove",-131428414),andel.editor.token_class.call(null,tt)], null))], null);
});})(markup__$1,map__64965,map__64965__$1,height))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY], null),tokens)));
var events_SINGLEQUOTE_ = cljs.core.map.call(null,((function (markup__$1,events,map__64965,map__64965__$1,height){
return (function (es){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,es)),new cljs.core.Keyword(null,"add","add",235287739),cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"add","add",235287739),es)),new cljs.core.Keyword(null,"remove","remove",-131428414),cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"remove","remove",-131428414),es))], null);
});})(markup__$1,events,map__64965,map__64965__$1,height))
,cljs.core.partition_by.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),events)));
return new cljs.core.Keyword(null,"res","res",-1395007879).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,((function (markup__$1,events,events_SINGLEQUOTE_,map__64965,map__64965__$1,height){
return (function (p__64975,p__64976){
var map__64977 = p__64975;
var map__64977__$1 = ((((!((map__64977 == null)))?((((map__64977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64977.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64977):map__64977);
var prev = cljs.core.get.call(null,map__64977__$1,new cljs.core.Keyword(null,"prev","prev",-1597069226));
var res = cljs.core.get.call(null,map__64977__$1,new cljs.core.Keyword(null,"res","res",-1395007879));
var styles = cljs.core.get.call(null,map__64977__$1,new cljs.core.Keyword(null,"styles","styles",1954480375));
var map__64978 = p__64976;
var map__64978__$1 = ((((!((map__64978 == null)))?((((map__64978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64978.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64978):map__64978);
var pos = cljs.core.get.call(null,map__64978__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var add = cljs.core.get.call(null,map__64978__$1,new cljs.core.Keyword(null,"add","add",235287739));
var remove = cljs.core.get.call(null,map__64978__$1,new cljs.core.Keyword(null,"remove","remove",-131428414));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"prev","prev",-1597069226),pos,new cljs.core.Keyword(null,"styles","styles",1954480375),clojure.set.union.call(null,clojure.set.difference.call(null,styles,remove),add),new cljs.core.Keyword(null,"res","res",-1395007879),andel.editor.push_BANG_.call(null,res,[new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",styles))], null),cljs.core.subs.call(null,text,prev,pos)])], null);
});})(markup__$1,events,events_SINGLEQUOTE_,map__64965,map__64965__$1,height))
,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"prev","prev",-1597069226),(0),new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.Keyword(null,"add","add",235287739).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,events_SINGLEQUOTE_)),new cljs.core.Keyword(null,"res","res",-1395007879),[new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"line-text","line-text",-1470301126)], null)]], null),cljs.core.next.call(null,events_SINGLEQUOTE_)));
});
andel.editor.render_background_markup = (function andel$editor$render_background_markup(markup,p__64981){
var map__64982 = p__64981;
var map__64982__$1 = ((((!((map__64982 == null)))?((((map__64982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64982.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64982):map__64982);
var height = cljs.core.get.call(null,map__64982__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__64982__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var spacing = cljs.core.get.call(null,map__64982__$1,new cljs.core.Keyword(null,"spacing","spacing",204422175));
return cljs.core.reduce.call(null,((function (map__64982,map__64982__$1,height,width,spacing){
return (function (res,p__64984){
var map__64985 = p__64984;
var map__64985__$1 = ((((!((map__64985 == null)))?((((map__64985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64985.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64985):map__64985);
var from = cljs.core.get.call(null,map__64985__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var to = cljs.core.get.call(null,map__64985__$1,new cljs.core.Keyword(null,"to","to",192099007));
var background = cljs.core.get.call(null,map__64985__$1,new cljs.core.Keyword(null,"background","background",-863952629));
if(cljs.core.truth_(background)){
return andel.editor.push_BANG_.call(null,res,[new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),background,new cljs.core.Keyword(null,"style","style",-496642736),andel.editor.style.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),andel.styles.px.call(null,(from * width)),new cljs.core.Keyword(null,"width","width",-384071477),andel.styles.px.call(null,(width * (to - from))),new cljs.core.Keyword(null,"height","height",1025178622),andel.styles.px.call(null,height),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478)], null))], null)]);
} else {
return res;
}
});})(map__64982,map__64982__$1,height,width,spacing))
,[new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.PersistentArrayMap.EMPTY],markup);
});
andel.editor.real_dom = createReactClass(({"componentWillUpdate": (function (next_props,next_state){
var this$ = this;
var elt = (next_props["dom"]);
var node = ReactDOM.findDOMNode(this$);
var child = node.firstChild;
if(cljs.core.truth_(child)){
node.removeChild(child);
} else {
}

return node.appendChild(elt);
}), "componentDidMount": (function (){
var this$ = this;
var elt = ((this$["props"])["dom"]);
var node = ReactDOM.findDOMNode(this$);
return node.appendChild(elt);
}), "render": (function (_){
return andel.editor.el.call(null,"div",({"key": "realDOM"}));
})}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
andel.editor.LineInfo = (function (lineText,lineTokens,lineMarkup,selection,caretIndex,index,__meta,__extmap,__hash){
this.lineText = lineText;
this.lineTokens = lineTokens;
this.lineMarkup = lineMarkup;
this.selection = selection;
this.caretIndex = caretIndex;
this.index = index;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
andel.editor.LineInfo.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__41738__auto__,k__41739__auto__){
var self__ = this;
var this__41738__auto____$1 = this;
return this__41738__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__41739__auto__,null);
});

andel.editor.LineInfo.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__41740__auto__,k64988,else__41741__auto__){
var self__ = this;
var this__41740__auto____$1 = this;
var G__64992 = k64988;
var G__64992__$1 = (((G__64992 instanceof cljs.core.Keyword))?G__64992.fqn:null);
switch (G__64992__$1) {
case "lineText":
return self__.lineText;

break;
case "lineTokens":
return self__.lineTokens;

break;
case "lineMarkup":
return self__.lineMarkup;

break;
case "selection":
return self__.selection;

break;
case "caretIndex":
return self__.caretIndex;

break;
case "index":
return self__.index;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k64988,else__41741__auto__);

}
});

andel.editor.LineInfo.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__41752__auto__,writer__41753__auto__,opts__41754__auto__){
var self__ = this;
var this__41752__auto____$1 = this;
var pr_pair__41755__auto__ = ((function (this__41752__auto____$1){
return (function (keyval__41756__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__41753__auto__,cljs.core.pr_writer,""," ","",opts__41754__auto__,keyval__41756__auto__);
});})(this__41752__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__41753__auto__,pr_pair__41755__auto__,"#andel.editor.LineInfo{",", ","}",opts__41754__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lineText","lineText",1366793833),self__.lineText],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lineTokens","lineTokens",800362921),self__.lineTokens],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lineMarkup","lineMarkup",-1543681926),self__.lineMarkup],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selection","selection",975998651),self__.selection],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"caretIndex","caretIndex",-149636418),self__.caretIndex],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"index","index",-1531685915),self__.index],null))], null),self__.__extmap));
});

andel.editor.LineInfo.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__64987){
var self__ = this;
var G__64987__$1 = this;
return (new cljs.core.RecordIter((0),G__64987__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lineText","lineText",1366793833),new cljs.core.Keyword(null,"lineTokens","lineTokens",800362921),new cljs.core.Keyword(null,"lineMarkup","lineMarkup",-1543681926),new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"caretIndex","caretIndex",-149636418),new cljs.core.Keyword(null,"index","index",-1531685915)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

andel.editor.LineInfo.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__41736__auto__){
var self__ = this;
var this__41736__auto____$1 = this;
return self__.__meta;
});

andel.editor.LineInfo.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__41733__auto__){
var self__ = this;
var this__41733__auto____$1 = this;
return (new andel.editor.LineInfo(self__.lineText,self__.lineTokens,self__.lineMarkup,self__.selection,self__.caretIndex,self__.index,self__.__meta,self__.__extmap,self__.__hash));
});

andel.editor.LineInfo.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__41742__auto__){
var self__ = this;
var this__41742__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

andel.editor.LineInfo.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__41734__auto__){
var self__ = this;
var this__41734__auto____$1 = this;
var h__41506__auto__ = self__.__hash;
if(!((h__41506__auto__ == null))){
return h__41506__auto__;
} else {
var h__41506__auto____$1 = ((function (h__41506__auto__,this__41734__auto____$1){
return (function (coll__41735__auto__){
return (1976093779 ^ cljs.core.hash_unordered_coll.call(null,coll__41735__auto__));
});})(h__41506__auto__,this__41734__auto____$1))
.call(null,this__41734__auto____$1);
self__.__hash = h__41506__auto____$1;

return h__41506__auto____$1;
}
});

andel.editor.LineInfo.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this64989,other64990){
var self__ = this;
var this64989__$1 = this;
return (!((other64990 == null))) && ((this64989__$1.constructor === other64990.constructor)) && (cljs.core._EQ_.call(null,this64989__$1.lineText,other64990.lineText)) && (cljs.core._EQ_.call(null,this64989__$1.lineTokens,other64990.lineTokens)) && (cljs.core._EQ_.call(null,this64989__$1.lineMarkup,other64990.lineMarkup)) && (cljs.core._EQ_.call(null,this64989__$1.selection,other64990.selection)) && (cljs.core._EQ_.call(null,this64989__$1.caretIndex,other64990.caretIndex)) && (cljs.core._EQ_.call(null,this64989__$1.index,other64990.index)) && (cljs.core._EQ_.call(null,this64989__$1.__extmap,other64990.__extmap));
});

andel.editor.LineInfo.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__41747__auto__,k__41748__auto__){
var self__ = this;
var this__41747__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"index","index",-1531685915),null,new cljs.core.Keyword(null,"lineTokens","lineTokens",800362921),null,new cljs.core.Keyword(null,"lineText","lineText",1366793833),null,new cljs.core.Keyword(null,"lineMarkup","lineMarkup",-1543681926),null,new cljs.core.Keyword(null,"selection","selection",975998651),null,new cljs.core.Keyword(null,"caretIndex","caretIndex",-149636418),null], null), null),k__41748__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__41747__auto____$1),self__.__meta),k__41748__auto__);
} else {
return (new andel.editor.LineInfo(self__.lineText,self__.lineTokens,self__.lineMarkup,self__.selection,self__.caretIndex,self__.index,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__41748__auto__)),null));
}
});

andel.editor.LineInfo.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__41745__auto__,k__41746__auto__,G__64987){
var self__ = this;
var this__41745__auto____$1 = this;
var pred__64993 = cljs.core.keyword_identical_QMARK_;
var expr__64994 = k__41746__auto__;
if(cljs.core.truth_(pred__64993.call(null,new cljs.core.Keyword(null,"lineText","lineText",1366793833),expr__64994))){
return (new andel.editor.LineInfo(G__64987,self__.lineTokens,self__.lineMarkup,self__.selection,self__.caretIndex,self__.index,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__64993.call(null,new cljs.core.Keyword(null,"lineTokens","lineTokens",800362921),expr__64994))){
return (new andel.editor.LineInfo(self__.lineText,G__64987,self__.lineMarkup,self__.selection,self__.caretIndex,self__.index,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__64993.call(null,new cljs.core.Keyword(null,"lineMarkup","lineMarkup",-1543681926),expr__64994))){
return (new andel.editor.LineInfo(self__.lineText,self__.lineTokens,G__64987,self__.selection,self__.caretIndex,self__.index,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__64993.call(null,new cljs.core.Keyword(null,"selection","selection",975998651),expr__64994))){
return (new andel.editor.LineInfo(self__.lineText,self__.lineTokens,self__.lineMarkup,G__64987,self__.caretIndex,self__.index,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__64993.call(null,new cljs.core.Keyword(null,"caretIndex","caretIndex",-149636418),expr__64994))){
return (new andel.editor.LineInfo(self__.lineText,self__.lineTokens,self__.lineMarkup,self__.selection,G__64987,self__.index,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__64993.call(null,new cljs.core.Keyword(null,"index","index",-1531685915),expr__64994))){
return (new andel.editor.LineInfo(self__.lineText,self__.lineTokens,self__.lineMarkup,self__.selection,self__.caretIndex,G__64987,self__.__meta,self__.__extmap,null));
} else {
return (new andel.editor.LineInfo(self__.lineText,self__.lineTokens,self__.lineMarkup,self__.selection,self__.caretIndex,self__.index,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__41746__auto__,G__64987),null));
}
}
}
}
}
}
});

andel.editor.LineInfo.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__41750__auto__){
var self__ = this;
var this__41750__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lineText","lineText",1366793833),self__.lineText],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lineTokens","lineTokens",800362921),self__.lineTokens],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lineMarkup","lineMarkup",-1543681926),self__.lineMarkup],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selection","selection",975998651),self__.selection],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"caretIndex","caretIndex",-149636418),self__.caretIndex],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"index","index",-1531685915),self__.index],null))], null),self__.__extmap));
});

andel.editor.LineInfo.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__41737__auto__,G__64987){
var self__ = this;
var this__41737__auto____$1 = this;
return (new andel.editor.LineInfo(self__.lineText,self__.lineTokens,self__.lineMarkup,self__.selection,self__.caretIndex,self__.index,G__64987,self__.__extmap,self__.__hash));
});

andel.editor.LineInfo.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__41743__auto__,entry__41744__auto__){
var self__ = this;
var this__41743__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__41744__auto__)){
return this__41743__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__41744__auto__,(0)),cljs.core._nth.call(null,entry__41744__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__41743__auto____$1,entry__41744__auto__);
}
});

andel.editor.LineInfo.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"lineText","lineText",-1287641936,null),new cljs.core.Symbol(null,"lineTokens","lineTokens",-1854072848,null),new cljs.core.Symbol(null,"lineMarkup","lineMarkup",96849601,null),new cljs.core.Symbol(null,"selection","selection",-1678437118,null),new cljs.core.Symbol(null,"caretIndex","caretIndex",1490895109,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null);
});

andel.editor.LineInfo.cljs$lang$type = true;

andel.editor.LineInfo.cljs$lang$ctorPrSeq = (function (this__41776__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"andel.editor/LineInfo");
});

andel.editor.LineInfo.cljs$lang$ctorPrWriter = (function (this__41776__auto__,writer__41777__auto__){
return cljs.core._write.call(null,writer__41777__auto__,"andel.editor/LineInfo");
});

andel.editor.__GT_LineInfo = (function andel$editor$__GT_LineInfo(lineText,lineTokens,lineMarkup,selection,caretIndex,index){
return (new andel.editor.LineInfo(lineText,lineTokens,lineMarkup,selection,caretIndex,index,null,null,null));
});

andel.editor.map__GT_LineInfo = (function andel$editor$map__GT_LineInfo(G__64991){
return (new andel.editor.LineInfo(new cljs.core.Keyword(null,"lineText","lineText",1366793833).cljs$core$IFn$_invoke$arity$1(G__64991),new cljs.core.Keyword(null,"lineTokens","lineTokens",800362921).cljs$core$IFn$_invoke$arity$1(G__64991),new cljs.core.Keyword(null,"lineMarkup","lineMarkup",-1543681926).cljs$core$IFn$_invoke$arity$1(G__64991),new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(G__64991),new cljs.core.Keyword(null,"caretIndex","caretIndex",-149636418).cljs$core$IFn$_invoke$arity$1(G__64991),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(G__64991),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__64991,new cljs.core.Keyword(null,"lineText","lineText",1366793833),new cljs.core.Keyword(null,"lineTokens","lineTokens",800362921),new cljs.core.Keyword(null,"lineMarkup","lineMarkup",-1543681926),new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"caretIndex","caretIndex",-149636418),new cljs.core.Keyword(null,"index","index",-1531685915))),null));
});

andel.editor.dom = (function andel$editor$dom(el){
var tag = (el[(0)]);
var attrs_map = (el[(1)]);
var children = el.slice((2));
if(!((el == null))){
} else {
throw (new Error("Assert failed: (some? el)"));
}

var len = children.length;
var el_with_children = (function (){var i = (0);
var n = andel.editor.make_node.call(null,tag);
while(true){
if((i < len)){
var temp__5276__auto__ = (children[i]);
if(cljs.core.truth_(temp__5276__auto__)){
var c = temp__5276__auto__;
var G__64997 = (i + (1));
var G__64998 = andel.editor.conj_child_BANG_.call(null,n,((typeof c === 'string')?andel.editor.make_text_node.call(null,c):andel.editor.dom.call(null,c)));
i = G__64997;
n = G__64998;
continue;
} else {
var G__64999 = (i + (1));
var G__65000 = n;
i = G__64999;
n = G__65000;
continue;
}
} else {
return n;
}
break;
}
})();
return cljs.core.reduce_kv.call(null,((function (len,el_with_children,tag,attrs_map,children){
return (function (n,a,v){
return andel.editor.assoc_attr_BANG_.call(null,n,a,v);
});})(len,el_with_children,tag,attrs_map,children))
,el_with_children,attrs_map);
});
andel.editor.def_fun = (function andel$editor$def_fun(f){
return createReactClass(({"shouldComponentUpdate": (function (new_props,new_state){
var this$ = this;
var old_props = (this$["props"]);
return cljs.core.not_EQ_.call(null,(old_props["props"]),(new_props["props"]));
}), "render": (function (_){
var this$ = this;
return f.call(null,((this$["props"])["props"]));
})}));
});
andel.editor.render_line = andel.editor.def_fun.call(null,(function (props){
var this$ = this;
var line_info = props.call(null,new cljs.core.Keyword(null,"line-info","line-info",998942046));
var metrics = props.call(null,new cljs.core.Keyword(null,"metrics","metrics",394093469));
var line_text = line_info.lineText;
var line_tokens = line_info.lineTokens;
var line_markup = line_info.lineMarkup;
var selection = line_info.selection;
var caret_index = line_info.caretIndex;
return andel.editor.el.call(null,andel.editor.real_dom,({"dom": andel.editor.dom.call(null,[new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"render-line","render-line",1407036741)], null),andel.editor.render_background_markup.call(null,line_markup,metrics),andel.editor.render_selection.call(null,selection,metrics),andel.editor.render_text.call(null,line_text,line_tokens,line_markup,metrics),(cljs.core.truth_(caret_index)?andel.editor.render_caret.call(null,caret_index,metrics):null)])}));
}));
andel.editor.line_selection = (function andel$editor$line_selection(p__65001,p__65002){
var vec__65003 = p__65001;
var from = cljs.core.nth.call(null,vec__65003,(0),null);
var to = cljs.core.nth.call(null,vec__65003,(1),null);
var vec__65006 = p__65002;
var line_start_offset = cljs.core.nth.call(null,vec__65006,(0),null);
var line_end_offset = cljs.core.nth.call(null,vec__65006,(1),null);
if(((from < line_start_offset)) && ((line_start_offset < to))){
if((line_end_offset < to)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.Keyword(null,"infinity","infinity",-105926847)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(to - line_start_offset)], null);
}
} else {
if(((line_start_offset <= from)) && ((from <= line_end_offset))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(from - line_start_offset),(((to <= line_end_offset))?(to - line_start_offset):new cljs.core.Keyword(null,"infinity","infinity",-105926847))], null);
} else {
return null;

}
}
});
andel.editor.scroll = createReactClass(({"shouldComponentUpdate": (function (new_props,new_state){
var this$ = this;
var old_props = (this$["props"]);
return cljs.core.not_EQ_.call(null,(old_props["props"]),(new_props["props"]));
}), "componentDidMount": (function (){
var cmp = this;
var props = ((cmp["props"])["props"]);
var node = ReactDOM.findDOMNode(cmp);
var on_resize = ((function (props,node,cmp){
return (function (){
var height = (node["clientHeight"]);
var width = (node["clientWidth"]);
return props.call(null,new cljs.core.Keyword(null,"onResize","onResize",-649393510)).call(null,(width - (0)),(height - (3)));
});})(props,node,cmp))
;
on_resize.call(null);

return window.addEventListener("resize",on_resize);
}), "render": (function (_){
var this$ = this;
var props = ((this$["props"])["props"]);
var child = props.call(null,new cljs.core.Keyword(null,"child","child",623967545));
var on_resize = props.call(null,new cljs.core.Keyword(null,"onResize","onResize",-649393510));
var on_mouse_wheel = props.call(null,new cljs.core.Keyword(null,"onMouseWheel","onMouseWheel",-1060938815));
return andel.editor.el.call(null,"div",({"key": "scroll", "style": ({"display": "flex", "flex": "1", "overflow": new cljs.core.Keyword(null,"hidden","hidden",-312506092)}), "onWheel": on_mouse_wheel}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [child], null));
})}));
andel.editor.prepare_markup = (function andel$editor$prepare_markup(markup,from,to){
return cljs.core.map.call(null,(function (marker){
return andel.intervals.__GT_Marker.call(null,(function (){var x__41402__auto__ = (0);
var y__41403__auto__ = (marker.from - from);
return ((x__41402__auto__ > y__41403__auto__) ? x__41402__auto__ : y__41403__auto__);
})(),(function (){var x__41402__auto__ = (0);
var y__41403__auto__ = (marker.to - from);
return ((x__41402__auto__ > y__41403__auto__) ? x__41402__auto__ : y__41403__auto__);
})(),false,false,marker.background,marker.foreground);
}),cljs.core.filter.call(null,(function (marker){
return ((marker.from <= to)) && ((from <= marker.to));
}),markup));
});
andel.editor.editor_viewport = (function andel$editor$editor_viewport(props){
var state = (props["editorState"]);
var map__65011 = cljs.core.deref.call(null,state);
var map__65011__$1 = ((((!((map__65011 == null)))?((((map__65011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65011.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65011):map__65011);
var editor = cljs.core.get.call(null,map__65011__$1,new cljs.core.Keyword(null,"editor","editor",-989377770));
var document = cljs.core.get.call(null,map__65011__$1,new cljs.core.Keyword(null,"document","document",-1329188687));
var viewport = cljs.core.get.call(null,map__65011__$1,new cljs.core.Keyword(null,"viewport","viewport",443342715));
var map__65012 = viewport;
var map__65012__$1 = ((((!((map__65012 == null)))?((((map__65012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65012.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65012):map__65012);
var pos = cljs.core.get.call(null,map__65012__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var view_size = cljs.core.get.call(null,map__65012__$1,new cljs.core.Keyword(null,"view-size","view-size",1412004200));
var metrics = cljs.core.get.call(null,map__65012__$1,new cljs.core.Keyword(null,"metrics","metrics",394093469));
var line_height = andel.utils.line_height.call(null,metrics);
var map__65013 = document;
var map__65013__$1 = ((((!((map__65013 == null)))?((((map__65013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65013.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65013):map__65013);
var text = cljs.core.get.call(null,map__65013__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var lines = cljs.core.get.call(null,map__65013__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var hashes = cljs.core.get.call(null,map__65013__$1,new cljs.core.Keyword(null,"hashes","hashes",-61686786));
var map__65014 = editor;
var map__65014__$1 = ((((!((map__65014 == null)))?((((map__65014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65014.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65014):map__65014);
var caret = cljs.core.get.call(null,map__65014__$1,new cljs.core.Keyword(null,"caret","caret",-1275001854));
var selection = cljs.core.get.call(null,map__65014__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var vec__65015 = pos;
var _ = cljs.core.nth.call(null,vec__65015,(0),null);
var from_y_offset = cljs.core.nth.call(null,vec__65015,(1),null);
var vec__65018 = view_size;
var w = cljs.core.nth.call(null,vec__65018,(0),null);
var h = cljs.core.nth.call(null,vec__65018,(1),null);
var from = ((from_y_offset / line_height) | (0));
var to = (from + (h / line_height));
var y_shift = (- (line_height * ((from_y_offset / line_height) - from)));
var line_zipper = andel.text.scan_to_line.call(null,andel.text.zipper.call(null,text),from);
var from_offset = andel.text.offset.call(null,line_zipper);
var to_offset = (andel.text.offset.call(null,andel.text.scan_to_line.call(null,line_zipper,(to + (1)))) - (1));
var caret_offset = cljs.core.get.call(null,caret,new cljs.core.Keyword(null,"offset","offset",296498311));
var markup = andel.intervals.query_intervals.call(null,new cljs.core.Keyword(null,"markup","markup",2143234544).cljs$core$IFn$_invoke$arity$1(document),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),from_offset,new cljs.core.Keyword(null,"to","to",192099007),to_offset], null));
var ___$1 = andel.styles.defstyle.call(null,new cljs.core.Keyword(null,"render-line","render-line",1407036741),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".render-line",".render-line",82067883),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),andel.styles.px.call(null,andel.utils.line_height.call(null,metrics)),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"hidden","hidden",-312506092)], null)], null));
var vec__65021 = cljs.core.reduce.call(null,((function (state,map__65011,map__65011__$1,editor,document,viewport,map__65012,map__65012__$1,pos,view_size,metrics,line_height,map__65013,map__65013__$1,text,lines,hashes,map__65014,map__65014__$1,caret,selection,vec__65015,_,from_y_offset,vec__65018,w,h,from,to,y_shift,line_zipper,from_offset,to_offset,caret_offset,markup,___$1){
return (function (p__65028,index){
var vec__65029 = p__65028;
var line_start = cljs.core.nth.call(null,vec__65029,(0),null);
var res = cljs.core.nth.call(null,vec__65029,(1),null);
var next_line = andel.text.scan_to_line.call(null,line_start,(index + (1)));
var line_start_offset = andel.text.offset.call(null,line_start);
var next_line_offset = andel.text.offset.call(null,next_line);
var len = (next_line_offset - line_start_offset);
var len__$1 = (cljs.core.truth_(andel.tree.end_QMARK_.call(null,next_line))?len:(len - (1)));
var line_text = andel.text.text.call(null,line_start,len__$1);
var line_end_offset = (line_start_offset + len__$1);
var line_sel = andel.editor.line_selection.call(null,selection,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line_start_offset,line_end_offset], null));
var line_caret = ((((line_start_offset <= caret_offset)) && ((caret_offset <= line_end_offset)))?(caret_offset - line_start_offset):null);
var line_tokens = (function (){var or__41064__auto__ = cljs.core.get.call(null,hashes,cljs.core.hash.call(null,line_text));
if(cljs.core.truth_(or__41064__auto__)){
return or__41064__auto__;
} else {
return new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,lines,index));
}
})();
var line_markup = andel.editor.prepare_markup.call(null,markup,line_start_offset,line_end_offset);
var line_info = (new andel.editor.LineInfo(line_text,line_tokens,line_markup,line_sel,line_caret,index,null,null,null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_line,cljs.core.conj_BANG_.call(null,res,andel.editor.el.call(null,"div",(function (){var obj65033 = {"key":index,"style":(function (){var obj65035 = {"transform":[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d(0px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(andel.styles.px.call(null,y_shift)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", 0px)")].join('')};
return obj65035;
})()};
return obj65033;
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [andel.editor.el.call(null,andel.editor.render_line,({"key": index, "props": new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line-info","line-info",998942046),line_info,new cljs.core.Keyword(null,"metrics","metrics",394093469),metrics], null)}))], null)))], null);
});})(state,map__65011,map__65011__$1,editor,document,viewport,map__65012,map__65012__$1,pos,view_size,metrics,line_height,map__65013,map__65013__$1,text,lines,hashes,map__65014,map__65014__$1,caret,selection,vec__65015,_,from_y_offset,vec__65018,w,h,from,to,y_shift,line_zipper,from_offset,to_offset,caret_offset,markup,___$1))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line_zipper,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY)], null),cljs.core.range.call(null,from,to));
var ___$2 = cljs.core.nth.call(null,vec__65021,(0),null);
var hiccup = cljs.core.nth.call(null,vec__65021,(1),null);
return andel.editor.el.call(null,"div",({"style": ({"background": andel.theme.background, "width": "100%"}), "key": "viewport", "onMouseDown": ((function (state,map__65011,map__65011__$1,editor,document,viewport,map__65012,map__65012__$1,pos,view_size,metrics,line_height,map__65013,map__65013__$1,text,lines,hashes,map__65014,map__65014__$1,caret,selection,vec__65015,_,from_y_offset,vec__65018,w,h,from,to,y_shift,line_zipper,from_offset,to_offset,caret_offset,markup,___$1,vec__65021,___$2,hiccup){
return (function (event){
var x = (event["clientX"]);
var y = (event["clientY"]);
var line_col = andel.utils.pixels__GT_grid_position.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),from,y_shift,metrics);
return cljs.core.swap_BANG_.call(null,state,((function (x,y,line_col,state,map__65011,map__65011__$1,editor,document,viewport,map__65012,map__65012__$1,pos,view_size,metrics,line_height,map__65013,map__65013__$1,text,lines,hashes,map__65014,map__65014__$1,caret,selection,vec__65015,_,from_y_offset,vec__65018,w,h,from,to,y_shift,line_zipper,from_offset,to_offset,caret_offset,markup,___$1,vec__65021,___$2,hiccup){
return (function (p1__65009_SHARP_){
return andel.controller.set_caret_at_grid_pos.call(null,p1__65009_SHARP_,line_col,false);
});})(x,y,line_col,state,map__65011,map__65011__$1,editor,document,viewport,map__65012,map__65012__$1,pos,view_size,metrics,line_height,map__65013,map__65013__$1,text,lines,hashes,map__65014,map__65014__$1,caret,selection,vec__65015,_,from_y_offset,vec__65018,w,h,from,to,y_shift,line_zipper,from_offset,to_offset,caret_offset,markup,___$1,vec__65021,___$2,hiccup))
);
});})(state,map__65011,map__65011__$1,editor,document,viewport,map__65012,map__65012__$1,pos,view_size,metrics,line_height,map__65013,map__65013__$1,text,lines,hashes,map__65014,map__65014__$1,caret,selection,vec__65015,_,from_y_offset,vec__65018,w,h,from,to,y_shift,line_zipper,from_offset,to_offset,caret_offset,markup,___$1,vec__65021,___$2,hiccup))
, "onMouseMove": ((function (state,map__65011,map__65011__$1,editor,document,viewport,map__65012,map__65012__$1,pos,view_size,metrics,line_height,map__65013,map__65013__$1,text,lines,hashes,map__65014,map__65014__$1,caret,selection,vec__65015,_,from_y_offset,vec__65018,w,h,from,to,y_shift,line_zipper,from_offset,to_offset,caret_offset,markup,___$1,vec__65021,___$2,hiccup){
return (function (event){
if(cljs.core._EQ_.call(null,(event["buttons"]),(1))){
var x = (event["clientX"]);
var y = (event["clientY"]);
var line_col = andel.utils.pixels__GT_grid_position.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),from,y_shift,metrics);
return cljs.core.swap_BANG_.call(null,state,((function (x,y,line_col,state,map__65011,map__65011__$1,editor,document,viewport,map__65012,map__65012__$1,pos,view_size,metrics,line_height,map__65013,map__65013__$1,text,lines,hashes,map__65014,map__65014__$1,caret,selection,vec__65015,_,from_y_offset,vec__65018,w,h,from,to,y_shift,line_zipper,from_offset,to_offset,caret_offset,markup,___$1,vec__65021,___$2,hiccup){
return (function (p1__65010_SHARP_){
return andel.controller.set_caret_at_grid_pos.call(null,p1__65010_SHARP_,line_col,true);
});})(x,y,line_col,state,map__65011,map__65011__$1,editor,document,viewport,map__65012,map__65012__$1,pos,view_size,metrics,line_height,map__65013,map__65013__$1,text,lines,hashes,map__65014,map__65014__$1,caret,selection,vec__65015,_,from_y_offset,vec__65018,w,h,from,to,y_shift,line_zipper,from_offset,to_offset,caret_offset,markup,___$1,vec__65021,___$2,hiccup))
);
} else {
return null;
}
});})(state,map__65011,map__65011__$1,editor,document,viewport,map__65012,map__65012__$1,pos,view_size,metrics,line_height,map__65013,map__65013__$1,text,lines,hashes,map__65014,map__65014__$1,caret,selection,vec__65015,_,from_y_offset,vec__65018,w,h,from,to,y_shift,line_zipper,from_offset,to_offset,caret_offset,markup,___$1,vec__65021,___$2,hiccup))
}),cljs.core.persistent_BANG_.call(null,hiccup));
});
andel.editor.scroll_on_event = (function andel$editor$scroll_on_event(state){
return (function (evt){
var map__65037 = cljs.core.deref.call(null,state);
var map__65037__$1 = ((((!((map__65037 == null)))?((((map__65037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65037.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65037):map__65037);
var viewport = cljs.core.get.call(null,map__65037__$1,new cljs.core.Keyword(null,"viewport","viewport",443342715));
var document = cljs.core.get.call(null,map__65037__$1,new cljs.core.Keyword(null,"document","document",-1329188687));
var screen_height = cljs.core.get_in.call(null,viewport,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view-size","view-size",1412004200),(1)], null));
var line_height = andel.utils.line_height.call(null,new cljs.core.Keyword(null,"metrics","metrics",394093469).cljs$core$IFn$_invoke$arity$1(viewport));
var lines_count = andel.text.lines_count.call(null,cljs.core.get.call(null,document,new cljs.core.Keyword(null,"text","text",-1790561697)));
var document_height = ((lines_count * line_height) - (screen_height / (2)));
cljs.core.swap_BANG_.call(null,state,((function (map__65037,map__65037__$1,viewport,document,screen_height,line_height,lines_count,document_height){
return (function (p1__65036_SHARP_){
return cljs.core.update_in.call(null,p1__65036_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewport","viewport",443342715),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),((function (map__65037,map__65037__$1,viewport,document,screen_height,line_height,lines_count,document_height){
return (function (p__65039){
var vec__65040 = p__65039;
var x = cljs.core.nth.call(null,vec__65040,(0),null);
var y = cljs.core.nth.call(null,vec__65040,(1),null);
var dx = evt.deltaX;
var dy = evt.deltaY;
if((Math.abs(dx) < Math.abs(dy))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(function (){var x__41409__auto__ = document_height;
var y__41410__auto__ = (function (){var x__41402__auto__ = (0);
var y__41403__auto__ = (y + dy);
return ((x__41402__auto__ > y__41403__auto__) ? x__41402__auto__ : y__41403__auto__);
})();
return ((x__41409__auto__ < y__41410__auto__) ? x__41409__auto__ : y__41410__auto__);
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__41402__auto__ = (0);
var y__41403__auto__ = (x + dx);
return ((x__41402__auto__ > y__41403__auto__) ? x__41402__auto__ : y__41403__auto__);
})(),y], null);
}
});})(map__65037,map__65037__$1,viewport,document,screen_height,line_height,lines_count,document_height))
);
});})(map__65037,map__65037__$1,viewport,document,screen_height,line_height,lines_count,document_height))
);

return evt.preventDefault();
});
});
andel.editor.set_viewport_size = (function andel$editor$set_viewport_size(state,width,height){
return cljs.core.swap_BANG_.call(null,state,(function (p1__65043_SHARP_){
return cljs.core.assoc_in.call(null,p1__65043_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewport","viewport",443342715),new cljs.core.Keyword(null,"view-size","view-size",1412004200)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null));
}));
});
andel.editor.next_tick = (function (){var w = window;
var or__41064__auto__ = (w["requestAnimationFrame"]);
if(cljs.core.truth_(or__41064__auto__)){
return or__41064__auto__;
} else {
var or__41064__auto____$1 = (w["webkitRequestAnimationFrame"]);
if(cljs.core.truth_(or__41064__auto____$1)){
return or__41064__auto____$1;
} else {
var or__41064__auto____$2 = (w["mozRequestAnimationFrame"]);
if(cljs.core.truth_(or__41064__auto____$2)){
return or__41064__auto____$2;
} else {
return (w["msRequestAnimationFrame"]);
}
}
}
})();
andel.editor.editor_cmp = createReactClass(({"componentDidMount": (function (){
var cmp = this;
var _STAR_state = ((cmp["props"])["editorState"]);
var _STAR_scheduled_QMARK_ = cljs.core.atom.call(null,false);
return cljs.core.add_watch.call(null,_STAR_state,new cljs.core.Keyword(null,"editor-view","editor-view",-1778268605),((function (_STAR_state,_STAR_scheduled_QMARK_,cmp){
return (function (_,___$1,old_state,new_state){
if((cljs.core.not_EQ_.call(null,old_state,new_state)) && (cljs.core.not.call(null,cljs.core.deref.call(null,_STAR_scheduled_QMARK_)))){
cljs.core.reset_BANG_.call(null,_STAR_scheduled_QMARK_,true);

return andel.editor.next_tick.call(null,((function (_STAR_state,_STAR_scheduled_QMARK_,cmp){
return (function (){
cljs.core.reset_BANG_.call(null,_STAR_scheduled_QMARK_,false);

return (cmp["forceUpdate"])();
});})(_STAR_state,_STAR_scheduled_QMARK_,cmp))
);
} else {
return null;
}
});})(_STAR_state,_STAR_scheduled_QMARK_,cmp))
);
}), "componentWillUnmount": (function (){
var cmp = this;
var _STAR_state = ((cmp["props"])["editorState"]);
return cljs.core.remove_watch.call(null,_STAR_state,new cljs.core.Keyword(null,"editor-view","editor-view",-1778268605));
}), "shouldComponentUpdate": (function (){
return false;
}), "render": (function (){
var cmp = this;
var _STAR_state = ((cmp["props"])["editorState"]);
return andel.editor.el.call(null,"div",({"key": "editor", "style": ({"display": "flex", "flex": "1"}), "tabIndex": (-1), "onFocus": ((function (_STAR_state,cmp){
return (function (){
var ta = ((cmp["refs"])["textarea"]);
if(cljs.core.truth_(ta)){
return ta.focus();
} else {
return null;
}
});})(_STAR_state,cmp))
}),[andel.editor.el.call(null,andel.editor.scroll,(function (){var obj65045 = {"key":"viewport","props":new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"child","child",623967545),andel.editor.el.call(null,andel.editor.editor_viewport,({"key": "editor-viewport", "editorState": _STAR_state})),new cljs.core.Keyword(null,"onResize","onResize",-649393510),cljs.core.partial.call(null,andel.editor.set_viewport_size,_STAR_state),new cljs.core.Keyword(null,"onMouseWheel","onMouseWheel",-1060938815),andel.editor.scroll_on_event.call(null,_STAR_state)], null)};
return obj65045;
})()),andel.editor.el.call(null,"textarea",({"key": "textarea", "ref": "textarea", "autoFocus": true, "style": ({"opacity": (0), "padding": "0px", "border": "none", "height": "0px", "width": "0px"}), "onInput": ((function (_STAR_state,cmp){
return (function (evt){
var e = evt.target;
var val = e.value;
e.value = "";

return cljs.core.swap_BANG_.call(null,_STAR_state,andel.controller.type_in,val);
});})(_STAR_state,cmp))
}))]);
})}));
andel.editor.editor_view = (function andel$editor$editor_view(_STAR_editor_state){
return andel.editor.el.call(null,andel.editor.editor_cmp,({"editorState": _STAR_editor_state, "key": "editor"}));
});

//# sourceMappingURL=editor.js.map?rel=1504289161118