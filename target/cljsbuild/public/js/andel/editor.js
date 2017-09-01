// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('andel.editor');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('clojure.set');
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
ctx.font = andel.editor.font__GT_str(font_name,height);

var width = ctx.measureText("X").width;
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$width,width,cljs.core.cst$kw$height,height,cljs.core.cst$kw$spacing,spacing,cljs.core.cst$kw$font_DASH_name,font_name], null);
});
andel.editor.measure_async = (function andel$editor$measure_async(font_name,size,spacing){
var c__15783__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15783__auto__){
return (function (){
var f__15784__auto__ = (function (){var switch__15681__auto__ = ((function (c__15783__auto__){
return (function (state_21408){
var state_val_21409 = (state_21408[(1)]);
if((state_val_21409 === (1))){
var inst_21391 = andel.editor.measure(font_name,size,spacing);
var state_21408__$1 = (function (){var statearr_21410 = state_21408;
(statearr_21410[(7)] = inst_21391);

return statearr_21410;
})();
var statearr_21411_21422 = state_21408__$1;
(statearr_21411_21422[(2)] = null);

(statearr_21411_21422[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21409 === (2))){
var inst_21393 = document.fonts;
var inst_21394 = andel.editor.font__GT_str(font_name,size);
var inst_21395 = inst_21393.check(inst_21394);
var state_21408__$1 = state_21408;
if(cljs.core.truth_(inst_21395)){
var statearr_21412_21423 = state_21408__$1;
(statearr_21412_21423[(1)] = (4));

} else {
var statearr_21413_21424 = state_21408__$1;
(statearr_21413_21424[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21409 === (3))){
var inst_21406 = (state_21408[(2)]);
var state_21408__$1 = state_21408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21408__$1,inst_21406);
} else {
if((state_val_21409 === (4))){
var inst_21397 = andel.editor.measure(font_name,size,spacing);
var state_21408__$1 = state_21408;
var statearr_21414_21425 = state_21408__$1;
(statearr_21414_21425[(2)] = inst_21397);

(statearr_21414_21425[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21409 === (5))){
var inst_21399 = cljs.core.async.timeout((100));
var state_21408__$1 = state_21408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21408__$1,(7),inst_21399);
} else {
if((state_val_21409 === (6))){
var inst_21404 = (state_21408[(2)]);
var state_21408__$1 = state_21408;
var statearr_21415_21426 = state_21408__$1;
(statearr_21415_21426[(2)] = inst_21404);

(statearr_21415_21426[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21409 === (7))){
var inst_21401 = (state_21408[(2)]);
var state_21408__$1 = (function (){var statearr_21416 = state_21408;
(statearr_21416[(8)] = inst_21401);

return statearr_21416;
})();
var statearr_21417_21427 = state_21408__$1;
(statearr_21417_21427[(2)] = null);

(statearr_21417_21427[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__15783__auto__))
;
return ((function (switch__15681__auto__,c__15783__auto__){
return (function() {
var andel$editor$measure_async_$_state_machine__15682__auto__ = null;
var andel$editor$measure_async_$_state_machine__15682__auto____0 = (function (){
var statearr_21418 = [null,null,null,null,null,null,null,null,null];
(statearr_21418[(0)] = andel$editor$measure_async_$_state_machine__15682__auto__);

(statearr_21418[(1)] = (1));

return statearr_21418;
});
var andel$editor$measure_async_$_state_machine__15682__auto____1 = (function (state_21408){
while(true){
var ret_value__15683__auto__ = (function (){try{while(true){
var result__15684__auto__ = switch__15681__auto__(state_21408);
if(cljs.core.keyword_identical_QMARK_(result__15684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15684__auto__;
}
break;
}
}catch (e21419){if((e21419 instanceof Object)){
var ex__15685__auto__ = e21419;
var statearr_21420_21428 = state_21408;
(statearr_21420_21428[(5)] = ex__15685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21408);

return cljs.core.cst$kw$recur;
} else {
throw e21419;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15683__auto__,cljs.core.cst$kw$recur)){
var G__21429 = state_21408;
state_21408 = G__21429;
continue;
} else {
return ret_value__15683__auto__;
}
break;
}
});
andel$editor$measure_async_$_state_machine__15682__auto__ = function(state_21408){
switch(arguments.length){
case 0:
return andel$editor$measure_async_$_state_machine__15682__auto____0.call(this);
case 1:
return andel$editor$measure_async_$_state_machine__15682__auto____1.call(this,state_21408);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
andel$editor$measure_async_$_state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$0 = andel$editor$measure_async_$_state_machine__15682__auto____0;
andel$editor$measure_async_$_state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$1 = andel$editor$measure_async_$_state_machine__15682__auto____1;
return andel$editor$measure_async_$_state_machine__15682__auto__;
})()
;})(switch__15681__auto__,c__15783__auto__))
})();
var state__15785__auto__ = (function (){var statearr_21421 = (f__15784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15784__auto__.cljs$core$IFn$_invoke$arity$0() : f__15784__auto__.call(null));
(statearr_21421[(6)] = c__15783__auto__);

return statearr_21421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15785__auto__);
});})(c__15783__auto__))
);

return c__15783__auto__;
});
andel.editor.load_editors_common_BANG_ = (function andel$editor$load_editors_common_BANG_(){
var loaded = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__15783__auto___21536 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15783__auto___21536,loaded){
return (function (){
var f__15784__auto__ = (function (){var switch__15681__auto__ = ((function (c__15783__auto___21536,loaded){
return (function (state_21503){
var state_val_21504 = (state_21503[(1)]);
if((state_val_21504 === (7))){
var inst_21434 = (state_21503[(7)]);
var inst_21439 = (state_21503[(2)]);
var inst_21440 = (inst_21434 + (1));
var inst_21434__$1 = inst_21440;
var state_21503__$1 = (function (){var statearr_21505 = state_21503;
(statearr_21505[(8)] = inst_21439);

(statearr_21505[(7)] = inst_21434__$1);

return statearr_21505;
})();
var statearr_21506_21537 = state_21503__$1;
(statearr_21506_21537[(2)] = null);

(statearr_21506_21537[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21504 === (1))){
var inst_21430 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21431 = ["resources/public/codemirror/addon/runmode/runmode-standalone.js","resources/public/codemirror/addon/runmode/runmode-standalone.js","resources/public/codemirror/mode/javascript/javascript.js","resources/public/codemirror/mode/clike/clike.js","resources/public/codemirror/mode/clojure/clojure.js"];
var inst_21432 = (new cljs.core.PersistentVector(null,5,(5),inst_21430,inst_21431,null));
var inst_21433 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(andel.styles.include_script,inst_21432);
var inst_21434 = (0);
var state_21503__$1 = (function (){var statearr_21507 = state_21503;
(statearr_21507[(9)] = inst_21433);

(statearr_21507[(7)] = inst_21434);

return statearr_21507;
})();
var statearr_21508_21538 = state_21503__$1;
(statearr_21508_21538[(2)] = null);

(statearr_21508_21538[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21504 === (4))){
var inst_21434 = (state_21503[(7)]);
var state_21503__$1 = state_21503;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21503__$1,(7),inst_21434);
} else {
if((state_val_21504 === (15))){
var inst_21450 = (state_21503[(10)]);
var inst_21468 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_21450);
var state_21503__$1 = state_21503;
var statearr_21509_21539 = state_21503__$1;
(statearr_21509_21539[(2)] = inst_21468);

(statearr_21509_21539[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21504 === (13))){
var state_21503__$1 = state_21503;
var statearr_21510_21540 = state_21503__$1;
(statearr_21510_21540[(2)] = false);

(statearr_21510_21540[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21504 === (6))){
var inst_21444 = (state_21503[(2)]);
var state_21503__$1 = state_21503;
var statearr_21511_21541 = state_21503__$1;
(statearr_21511_21541[(2)] = inst_21444);

(statearr_21511_21541[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21504 === (17))){
var inst_21471 = (state_21503[(2)]);
var inst_21472 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21471,cljs.core.cst$kw$height);
var inst_21473 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21471,cljs.core.cst$kw$font_DASH_name);
var inst_21474 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21475 = [cljs.core.cst$kw$font_DASH_family,cljs.core.cst$kw$font_DASH_size,cljs.core.cst$kw$color,cljs.core.cst$kw$margin];
var inst_21476 = andel.styles.px(inst_21472);
var inst_21477 = [inst_21473,inst_21476,andel.theme.foreground,"0px"];
var inst_21478 = cljs.core.PersistentHashMap.fromArrays(inst_21475,inst_21477);
var inst_21479 = [cljs.core.cst$kw$pre,inst_21478];
var inst_21480 = (new cljs.core.PersistentVector(null,2,(5),inst_21474,inst_21479,null));
var inst_21481 = (function (){var G__21512 = cljs.core.cst$kw$editor;
var G__21513 = inst_21480;
return (andel.styles.defstyle.cljs$core$IFn$_invoke$arity$2 ? andel.styles.defstyle.cljs$core$IFn$_invoke$arity$2(G__21512,G__21513) : andel.styles.defstyle.call(null,G__21512,G__21513));
})();
var inst_21482 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21483 = [cljs.core.cst$kw$opacity];
var inst_21484 = ["0"];
var inst_21485 = cljs.core.PersistentHashMap.fromArrays(inst_21483,inst_21484);
var inst_21486 = ["50%",inst_21485];
var inst_21487 = (new cljs.core.PersistentVector(null,2,(5),inst_21482,inst_21486,null));
var inst_21488 = garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic("blinker",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_21487], 0));
var inst_21489 = (andel.styles.defstyle.cljs$core$IFn$_invoke$arity$1 ? andel.styles.defstyle.cljs$core$IFn$_invoke$arity$1(inst_21488) : andel.styles.defstyle.call(null,inst_21488));
var inst_21490 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21491 = [cljs.core.cst$kw$position,cljs.core.cst$kw$left,cljs.core.cst$kw$user_DASH_select,cljs.core.cst$kw$top];
var inst_21492 = [cljs.core.cst$kw$absolute,(0),cljs.core.cst$kw$none,(0)];
var inst_21493 = cljs.core.PersistentHashMap.fromArrays(inst_21491,inst_21492);
var inst_21494 = [cljs.core.cst$kw$$line_DASH_text,inst_21493];
var inst_21495 = (new cljs.core.PersistentVector(null,2,(5),inst_21490,inst_21494,null));
var inst_21496 = (function (){var G__21514 = cljs.core.cst$kw$line_DASH_text;
var G__21515 = inst_21495;
return (andel.styles.defstyle.cljs$core$IFn$_invoke$arity$2 ? andel.styles.defstyle.cljs$core$IFn$_invoke$arity$2(G__21514,G__21515) : andel.styles.defstyle.call(null,G__21514,G__21515));
})();
var inst_21497 = [cljs.core.cst$kw$font_DASH_metrics];
var inst_21498 = [inst_21471];
var inst_21499 = cljs.core.PersistentHashMap.fromArrays(inst_21497,inst_21498);
var state_21503__$1 = (function (){var statearr_21516 = state_21503;
(statearr_21516[(11)] = inst_21496);

(statearr_21516[(12)] = inst_21481);

(statearr_21516[(13)] = inst_21489);

return statearr_21516;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21503__$1,(18),loaded,inst_21499);
} else {
if((state_val_21504 === (3))){
var inst_21446 = (state_21503[(2)]);
var inst_21448 = andel.editor.measure_async("Fira Code",(16),(3));
var state_21503__$1 = (function (){var statearr_21517 = state_21503;
(statearr_21517[(14)] = inst_21446);

return statearr_21517;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21503__$1,(8),inst_21448);
} else {
if((state_val_21504 === (12))){
var state_21503__$1 = state_21503;
var statearr_21518_21542 = state_21503__$1;
(statearr_21518_21542[(2)] = true);

(statearr_21518_21542[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21504 === (2))){
var inst_21433 = (state_21503[(9)]);
var inst_21434 = (state_21503[(7)]);
var inst_21436 = (inst_21434 < inst_21433);
var state_21503__$1 = state_21503;
if(cljs.core.truth_(inst_21436)){
var statearr_21519_21543 = state_21503__$1;
(statearr_21519_21543[(1)] = (4));

} else {
var statearr_21520_21544 = state_21503__$1;
(statearr_21520_21544[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21504 === (11))){
var inst_21466 = (state_21503[(2)]);
var state_21503__$1 = state_21503;
if(cljs.core.truth_(inst_21466)){
var statearr_21521_21545 = state_21503__$1;
(statearr_21521_21545[(1)] = (15));

} else {
var statearr_21522_21546 = state_21503__$1;
(statearr_21522_21546[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21504 === (9))){
var inst_21450 = (state_21503[(10)]);
var inst_21455 = inst_21450.cljs$lang$protocol_mask$partition0$;
var inst_21456 = (inst_21455 & (64));
var inst_21457 = inst_21450.cljs$core$ISeq$;
var inst_21458 = (cljs.core.PROTOCOL_SENTINEL === inst_21457);
var inst_21459 = (inst_21456) || (inst_21458);
var state_21503__$1 = state_21503;
if(cljs.core.truth_(inst_21459)){
var statearr_21523_21547 = state_21503__$1;
(statearr_21523_21547[(1)] = (12));

} else {
var statearr_21524_21548 = state_21503__$1;
(statearr_21524_21548[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21504 === (5))){
var state_21503__$1 = state_21503;
var statearr_21525_21549 = state_21503__$1;
(statearr_21525_21549[(2)] = null);

(statearr_21525_21549[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21504 === (14))){
var inst_21463 = (state_21503[(2)]);
var state_21503__$1 = state_21503;
var statearr_21526_21550 = state_21503__$1;
(statearr_21526_21550[(2)] = inst_21463);

(statearr_21526_21550[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21504 === (16))){
var inst_21450 = (state_21503[(10)]);
var state_21503__$1 = state_21503;
var statearr_21527_21551 = state_21503__$1;
(statearr_21527_21551[(2)] = inst_21450);

(statearr_21527_21551[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21504 === (10))){
var state_21503__$1 = state_21503;
var statearr_21528_21552 = state_21503__$1;
(statearr_21528_21552[(2)] = false);

(statearr_21528_21552[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21504 === (18))){
var inst_21501 = (state_21503[(2)]);
var state_21503__$1 = state_21503;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21503__$1,inst_21501);
} else {
if((state_val_21504 === (8))){
var inst_21450 = (state_21503[(10)]);
var inst_21450__$1 = (state_21503[(2)]);
var inst_21452 = (inst_21450__$1 == null);
var inst_21453 = cljs.core.not(inst_21452);
var state_21503__$1 = (function (){var statearr_21529 = state_21503;
(statearr_21529[(10)] = inst_21450__$1);

return statearr_21529;
})();
if(inst_21453){
var statearr_21530_21553 = state_21503__$1;
(statearr_21530_21553[(1)] = (9));

} else {
var statearr_21531_21554 = state_21503__$1;
(statearr_21531_21554[(1)] = (10));

}

return cljs.core.cst$kw$recur;
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
});})(c__15783__auto___21536,loaded))
;
return ((function (switch__15681__auto__,c__15783__auto___21536,loaded){
return (function() {
var andel$editor$load_editors_common_BANG__$_state_machine__15682__auto__ = null;
var andel$editor$load_editors_common_BANG__$_state_machine__15682__auto____0 = (function (){
var statearr_21532 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21532[(0)] = andel$editor$load_editors_common_BANG__$_state_machine__15682__auto__);

(statearr_21532[(1)] = (1));

return statearr_21532;
});
var andel$editor$load_editors_common_BANG__$_state_machine__15682__auto____1 = (function (state_21503){
while(true){
var ret_value__15683__auto__ = (function (){try{while(true){
var result__15684__auto__ = switch__15681__auto__(state_21503);
if(cljs.core.keyword_identical_QMARK_(result__15684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15684__auto__;
}
break;
}
}catch (e21533){if((e21533 instanceof Object)){
var ex__15685__auto__ = e21533;
var statearr_21534_21555 = state_21503;
(statearr_21534_21555[(5)] = ex__15685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21503);

return cljs.core.cst$kw$recur;
} else {
throw e21533;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15683__auto__,cljs.core.cst$kw$recur)){
var G__21556 = state_21503;
state_21503 = G__21556;
continue;
} else {
return ret_value__15683__auto__;
}
break;
}
});
andel$editor$load_editors_common_BANG__$_state_machine__15682__auto__ = function(state_21503){
switch(arguments.length){
case 0:
return andel$editor$load_editors_common_BANG__$_state_machine__15682__auto____0.call(this);
case 1:
return andel$editor$load_editors_common_BANG__$_state_machine__15682__auto____1.call(this,state_21503);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
andel$editor$load_editors_common_BANG__$_state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$0 = andel$editor$load_editors_common_BANG__$_state_machine__15682__auto____0;
andel$editor$load_editors_common_BANG__$_state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$1 = andel$editor$load_editors_common_BANG__$_state_machine__15682__auto____1;
return andel$editor$load_editors_common_BANG__$_state_machine__15682__auto__;
})()
;})(switch__15681__auto__,c__15783__auto___21536,loaded))
})();
var state__15785__auto__ = (function (){var statearr_21535 = (f__15784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15784__auto__.cljs$core$IFn$_invoke$arity$0() : f__15784__auto__.call(null));
(statearr_21535[(6)] = c__15783__auto___21536);

return statearr_21535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15785__auto__);
});})(c__15783__auto___21536,loaded))
);


return loaded;
});
if(typeof andel.editor._STAR_editors_common !== 'undefined'){
} else {
andel.editor._STAR_editors_common = andel.editor.load_editors_common_BANG_();
}
andel.editor.deliver_lexems_BANG_ = (function andel$editor$deliver_lexems_BANG_(p__21557,state_ref){
var map__21558 = p__21557;
var map__21558__$1 = ((((!((map__21558 == null)))?((((map__21558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21558.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21558):map__21558);
var req_ts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21558__$1,cljs.core.cst$kw$req_DASH_ts);
var tokens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21558__$1,cljs.core.cst$kw$tokens);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21558__$1,cljs.core.cst$kw$index);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21558__$1,cljs.core.cst$kw$text);
var res = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_ref,((function (map__21558,map__21558__$1,req_ts,tokens,index,text){
return (function (p__21560){
var map__21561 = p__21560;
var map__21561__$1 = ((((!((map__21561 == null)))?((((map__21561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21561.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21561):map__21561);
var state = map__21561__$1;
var document = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21561__$1,cljs.core.cst$kw$document);
var map__21563 = document;
var map__21563__$1 = ((((!((map__21563 == null)))?((((map__21563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21563.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21563):map__21563);
var timestamp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21563__$1,cljs.core.cst$kw$timestamp);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(timestamp,req_ts)){
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$document,cljs.core.cst$kw$lines,index,cljs.core.cst$kw$tokens], null),tokens),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$document,cljs.core.cst$kw$hashes,cljs.core.hash(text)], null),tokens),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$document,cljs.core.cst$kw$first_DASH_invalid], null),(index + (1)));
} else {
return state;
}
});})(map__21558,map__21558__$1,req_ts,tokens,index,text))
);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$document,cljs.core.cst$kw$timestamp], null)),req_ts);
});
andel.editor.run_lexer_loop_BANG_ = (function andel$editor$run_lexer_loop_BANG_(state_ref){
var map__21565 = cljs.core.deref(state_ref);
var map__21565__$1 = ((((!((map__21565 == null)))?((((map__21565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21565.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21565):map__21565);
var state = map__21565__$1;
var document = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21565__$1,cljs.core.cst$kw$document);
var map__21566 = document;
var map__21566__$1 = ((((!((map__21566 == null)))?((((map__21566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21566.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21566):map__21566);
var modespec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21566__$1,cljs.core.cst$kw$modespec);
var lexer_broker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21566__$1,cljs.core.cst$kw$lexer_DASH_broker);
var map__21567 = andel.lexer.new_lexer_worker(modespec);
var map__21567__$1 = ((((!((map__21567 == null)))?((((map__21567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21567.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21567):map__21567);
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21567__$1,cljs.core.cst$kw$input);
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21567__$1,cljs.core.cst$kw$output);
var c__15783__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15783__auto__,map__21565,map__21565__$1,state,document,map__21566,map__21566__$1,modespec,lexer_broker,map__21567,map__21567__$1,input,output){
return (function (){
var f__15784__auto__ = (function (){var switch__15681__auto__ = ((function (c__15783__auto__,map__21565,map__21565__$1,state,document,map__21566,map__21566__$1,modespec,lexer_broker,map__21567,map__21567__$1,input,output){
return (function (state_21676){
var state_val_21677 = (state_21676[(1)]);
if((state_val_21677 === (7))){
var state_21676__$1 = state_21676;
var statearr_21678_21738 = state_21676__$1;
(statearr_21678_21738[(2)] = null);

(statearr_21678_21738[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21677 === (20))){
var inst_21637 = cljs.core.async.timeout((1));
var state_21676__$1 = state_21676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21676__$1,(23),inst_21637);
} else {
if((state_val_21677 === (27))){
var inst_21633 = (state_21676[(7)]);
var inst_21655 = andel.editor.deliver_lexems_BANG_(inst_21633,state_ref);
var state_21676__$1 = state_21676;
if(cljs.core.truth_(inst_21655)){
var statearr_21679_21739 = state_21676__$1;
(statearr_21679_21739[(1)] = (30));

} else {
var statearr_21680_21740 = state_21676__$1;
(statearr_21680_21740[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21677 === (1))){
var inst_21571 = null;
var inst_21572 = (0);
var inst_21573 = (0);
var state_21676__$1 = (function (){var statearr_21681 = state_21676;
(statearr_21681[(8)] = inst_21571);

(statearr_21681[(9)] = inst_21572);

(statearr_21681[(10)] = inst_21573);

return statearr_21681;
})();
var statearr_21682_21741 = state_21676__$1;
(statearr_21682_21741[(2)] = null);

(statearr_21682_21741[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21677 === (24))){
var inst_21644 = (state_21676[(11)]);
var inst_21633 = (state_21676[(7)]);
var inst_21647 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21648 = [cljs.core.cst$kw$document,cljs.core.cst$kw$first_DASH_invalid];
var inst_21649 = (new cljs.core.PersistentVector(null,2,(5),inst_21647,inst_21648,null));
var inst_21650 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_21633,inst_21649);
var inst_21571 = inst_21633;
var inst_21572 = inst_21650;
var inst_21573 = inst_21644;
var state_21676__$1 = (function (){var statearr_21683 = state_21676;
(statearr_21683[(8)] = inst_21571);

(statearr_21683[(9)] = inst_21572);

(statearr_21683[(10)] = inst_21573);

return statearr_21683;
})();
var statearr_21684_21742 = state_21676__$1;
(statearr_21684_21742[(2)] = null);

(statearr_21684_21742[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21677 === (4))){
var inst_21571 = (state_21676[(8)]);
var inst_21589 = (inst_21571 == null);
var state_21676__$1 = state_21676;
if(cljs.core.truth_(inst_21589)){
var statearr_21685_21743 = state_21676__$1;
(statearr_21685_21743[(1)] = (7));

} else {
var statearr_21686_21744 = state_21676__$1;
(statearr_21686_21744[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21677 === (15))){
var inst_21606 = (state_21676[(2)]);
var state_21676__$1 = state_21676;
var statearr_21687_21745 = state_21676__$1;
(statearr_21687_21745[(2)] = inst_21606);

(statearr_21687_21745[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21677 === (21))){
var inst_21573 = (state_21676[(10)]);
var state_21676__$1 = state_21676;
var statearr_21689_21746 = state_21676__$1;
(statearr_21689_21746[(2)] = inst_21573);

(statearr_21689_21746[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21677 === (31))){
var inst_21572 = (state_21676[(9)]);
var state_21676__$1 = state_21676;
var statearr_21692_21747 = state_21676__$1;
(statearr_21692_21747[(2)] = inst_21572);

(statearr_21692_21747[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21677 === (32))){
var inst_21644 = (state_21676[(11)]);
var inst_21571 = (state_21676[(8)]);
var inst_21660 = (state_21676[(2)]);
var tmp21688 = inst_21571;
var inst_21571__$1 = tmp21688;
var inst_21572 = inst_21660;
var inst_21573 = inst_21644;
var state_21676__$1 = (function (){var statearr_21693 = state_21676;
(statearr_21693[(8)] = inst_21571__$1);

(statearr_21693[(9)] = inst_21572);

(statearr_21693[(10)] = inst_21573);

return statearr_21693;
})();
var statearr_21694_21748 = state_21676__$1;
(statearr_21694_21748[(2)] = null);

(statearr_21694_21748[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21677 === (33))){
var inst_21644 = (state_21676[(11)]);
var inst_21571 = (state_21676[(8)]);
var inst_21572 = (state_21676[(9)]);
var tmp21690 = inst_21571;
var tmp21691 = inst_21572;
var inst_21571__$1 = tmp21690;
var inst_21572__$1 = tmp21691;
var inst_21573 = inst_21644;
var state_21676__$1 = (function (){var statearr_21695 = state_21676;
(statearr_21695[(8)] = inst_21571__$1);

(statearr_21695[(9)] = inst_21572__$1);

(statearr_21695[(10)] = inst_21573);

return statearr_21695;
})();
var statearr_21696_21749 = state_21676__$1;
(statearr_21696_21749[(2)] = null);

(statearr_21696_21749[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21677 === (13))){
var state_21676__$1 = state_21676;
var statearr_21697_21750 = state_21676__$1;
(statearr_21697_21750[(2)] = null);

(statearr_21697_21750[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21677 === (22))){
var inst_21634 = (state_21676[(12)]);
var inst_21644 = (state_21676[(2)]);
var inst_21645 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21634,lexer_broker);
var state_21676__$1 = (function (){var statearr_21698 = state_21676;
(statearr_21698[(11)] = inst_21644);

return statearr_21698;
})();
if(inst_21645){
var statearr_21699_21751 = state_21676__$1;
(statearr_21699_21751[(1)] = (24));

} else {
var statearr_21700_21752 = state_21676__$1;
(statearr_21700_21752[(1)] = (25));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21677 === (29))){
var inst_21670 = (state_21676[(2)]);
var state_21676__$1 = state_21676;
var statearr_21701_21753 = state_21676__$1;
(statearr_21701_21753[(2)] = inst_21670);

(statearr_21701_21753[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21677 === (6))){
var inst_21609 = (state_21676[(13)]);
var inst_21609__$1 = (state_21676[(2)]);
var inst_21611 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21612 = [lexer_broker,output];
var inst_21613 = (new cljs.core.PersistentVector(null,2,(5),inst_21611,inst_21612,null));
var inst_21614 = (inst_21609__$1 == null);
var inst_21615 = cljs.core.not(inst_21614);
var state_21676__$1 = (function (){var statearr_21702 = state_21676;
(statearr_21702[(14)] = inst_21613);

(statearr_21702[(13)] = inst_21609__$1);

return statearr_21702;
})();
if(inst_21615){
var statearr_21703_21754 = state_21676__$1;
(statearr_21703_21754[(1)] = (17));

} else {
var statearr_21704_21755 = state_21676__$1;
(statearr_21704_21755[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21677 === (28))){
var inst_21634 = (state_21676[(12)]);
var inst_21663 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21634,input);
var state_21676__$1 = state_21676;
if(inst_21663){
var statearr_21705_21756 = state_21676__$1;
(statearr_21705_21756[(1)] = (33));

} else {
var statearr_21706_21757 = state_21676__$1;
(statearr_21706_21757[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21677 === (25))){
var inst_21634 = (state_21676[(12)]);
var inst_21653 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21634,output);
var state_21676__$1 = state_21676;
if(inst_21653){
var statearr_21707_21758 = state_21676__$1;
(statearr_21707_21758[(1)] = (27));

} else {
var statearr_21708_21759 = state_21676__$1;
(statearr_21708_21759[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21677 === (34))){
var state_21676__$1 = state_21676;
var statearr_21709_21760 = state_21676__$1;
(statearr_21709_21760[(2)] = null);

(statearr_21709_21760[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21677 === (17))){
var inst_21571 = (state_21676[(8)]);
var inst_21572 = (state_21676[(9)]);
var inst_21613 = (state_21676[(14)]);
var inst_21609 = (state_21676[(13)]);
var inst_21617 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21618 = [cljs.core.cst$kw$index,cljs.core.cst$kw$text,cljs.core.cst$kw$req_DASH_ts];
var inst_21619 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21620 = [cljs.core.cst$kw$document,cljs.core.cst$kw$timestamp];
var inst_21621 = (new cljs.core.PersistentVector(null,2,(5),inst_21619,inst_21620,null));
var inst_21622 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_21571,inst_21621);
var inst_21623 = [inst_21572,inst_21609,inst_21622];
var inst_21624 = cljs.core.PersistentHashMap.fromArrays(inst_21618,inst_21623);
var inst_21625 = [input,inst_21624];
var inst_21626 = (new cljs.core.PersistentVector(null,2,(5),inst_21617,inst_21625,null));
var inst_21627 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_21613,inst_21626);
var state_21676__$1 = state_21676;
var statearr_21710_21761 = state_21676__$1;
(statearr_21710_21761[(2)] = inst_21627);

(statearr_21710_21761[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21677 === (3))){
var inst_21674 = (state_21676[(2)]);
var state_21676__$1 = state_21676;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21676__$1,inst_21674);
} else {
if((state_val_21677 === (12))){
var inst_21600 = (state_21676[(15)]);
var inst_21600__$1 = (state_21676[(2)]);
var inst_21601 = (inst_21600__$1 == null);
var state_21676__$1 = (function (){var statearr_21711 = state_21676;
(statearr_21711[(15)] = inst_21600__$1);

return statearr_21711;
})();
if(cljs.core.truth_(inst_21601)){
var statearr_21712_21762 = state_21676__$1;
(statearr_21712_21762[(1)] = (13));

} else {
var statearr_21713_21763 = state_21676__$1;
(statearr_21713_21763[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21677 === (2))){
var inst_21571 = (state_21676[(8)]);
var inst_21572 = (state_21676[(9)]);
var inst_21573 = (state_21676[(10)]);
var inst_21578 = (new Date());
var inst_21579 = inst_21578.getTime();
var inst_21580 = (inst_21579 - inst_21573);
var inst_21581 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21582 = [cljs.core.cst$kw$document,cljs.core.cst$kw$text];
var inst_21583 = (new cljs.core.PersistentVector(null,2,(5),inst_21581,inst_21582,null));
var inst_21584 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_21571,inst_21583);
var inst_21585 = andel.text.lines_count(inst_21584);
var inst_21586 = (inst_21572 < inst_21585);
var state_21676__$1 = (function (){var statearr_21714 = state_21676;
(statearr_21714[(16)] = inst_21580);

return statearr_21714;
})();
if(cljs.core.truth_(inst_21586)){
var statearr_21715_21764 = state_21676__$1;
(statearr_21715_21764[(1)] = (4));

} else {
var statearr_21716_21765 = state_21676__$1;
(statearr_21716_21765[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21677 === (23))){
var inst_21639 = (state_21676[(2)]);
var inst_21640 = (new Date());
var inst_21641 = inst_21640.getTime();
var state_21676__$1 = (function (){var statearr_21717 = state_21676;
(statearr_21717[(17)] = inst_21639);

return statearr_21717;
})();
var statearr_21718_21766 = state_21676__$1;
(statearr_21718_21766[(2)] = inst_21641);

(statearr_21718_21766[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21677 === (35))){
var inst_21668 = (state_21676[(2)]);
var state_21676__$1 = state_21676;
var statearr_21719_21767 = state_21676__$1;
(statearr_21719_21767[(2)] = inst_21668);

(statearr_21719_21767[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21677 === (19))){
var inst_21630 = (state_21676[(2)]);
var state_21676__$1 = state_21676;
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_21676__$1,(16),inst_21630,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$priority,true], 0));
} else {
if((state_val_21677 === (11))){
var inst_21594 = (state_21676[(18)]);
var inst_21598 = cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(inst_21594);
var state_21676__$1 = state_21676;
var statearr_21720_21768 = state_21676__$1;
(statearr_21720_21768[(2)] = inst_21598);

(statearr_21720_21768[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21677 === (9))){
var inst_21594 = (state_21676[(18)]);
var inst_21594__$1 = (state_21676[(2)]);
var inst_21595 = (inst_21594__$1 == null);
var state_21676__$1 = (function (){var statearr_21721 = state_21676;
(statearr_21721[(18)] = inst_21594__$1);

return statearr_21721;
})();
if(cljs.core.truth_(inst_21595)){
var statearr_21722_21769 = state_21676__$1;
(statearr_21722_21769[(1)] = (10));

} else {
var statearr_21723_21770 = state_21676__$1;
(statearr_21723_21770[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21677 === (5))){
var state_21676__$1 = state_21676;
var statearr_21724_21771 = state_21676__$1;
(statearr_21724_21771[(2)] = null);

(statearr_21724_21771[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21677 === (14))){
var inst_21600 = (state_21676[(15)]);
var inst_21572 = (state_21676[(9)]);
var inst_21604 = andel.text.line_text(inst_21600,inst_21572);
var state_21676__$1 = state_21676;
var statearr_21725_21772 = state_21676__$1;
(statearr_21725_21772[(2)] = inst_21604);

(statearr_21725_21772[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21677 === (26))){
var inst_21672 = (state_21676[(2)]);
var state_21676__$1 = state_21676;
var statearr_21726_21773 = state_21676__$1;
(statearr_21726_21773[(2)] = inst_21672);

(statearr_21726_21773[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21677 === (16))){
var inst_21580 = (state_21676[(16)]);
var inst_21632 = (state_21676[(2)]);
var inst_21633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21632,(0),null);
var inst_21634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21632,(1),null);
var inst_21635 = ((10) < inst_21580);
var state_21676__$1 = (function (){var statearr_21727 = state_21676;
(statearr_21727[(12)] = inst_21634);

(statearr_21727[(7)] = inst_21633);

return statearr_21727;
})();
if(cljs.core.truth_(inst_21635)){
var statearr_21728_21774 = state_21676__$1;
(statearr_21728_21774[(1)] = (20));

} else {
var statearr_21729_21775 = state_21676__$1;
(statearr_21729_21775[(1)] = (21));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21677 === (30))){
var inst_21572 = (state_21676[(9)]);
var inst_21657 = (inst_21572 + (1));
var state_21676__$1 = state_21676;
var statearr_21730_21776 = state_21676__$1;
(statearr_21730_21776[(2)] = inst_21657);

(statearr_21730_21776[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21677 === (10))){
var state_21676__$1 = state_21676;
var statearr_21731_21777 = state_21676__$1;
(statearr_21731_21777[(2)] = null);

(statearr_21731_21777[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21677 === (18))){
var inst_21613 = (state_21676[(14)]);
var state_21676__$1 = state_21676;
var statearr_21732_21778 = state_21676__$1;
(statearr_21732_21778[(2)] = inst_21613);

(statearr_21732_21778[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21677 === (8))){
var inst_21571 = (state_21676[(8)]);
var inst_21592 = cljs.core.cst$kw$document.cljs$core$IFn$_invoke$arity$1(inst_21571);
var state_21676__$1 = state_21676;
var statearr_21733_21779 = state_21676__$1;
(statearr_21733_21779[(2)] = inst_21592);

(statearr_21733_21779[(1)] = (9));


return cljs.core.cst$kw$recur;
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
});})(c__15783__auto__,map__21565,map__21565__$1,state,document,map__21566,map__21566__$1,modespec,lexer_broker,map__21567,map__21567__$1,input,output))
;
return ((function (switch__15681__auto__,c__15783__auto__,map__21565,map__21565__$1,state,document,map__21566,map__21566__$1,modespec,lexer_broker,map__21567,map__21567__$1,input,output){
return (function() {
var andel$editor$run_lexer_loop_BANG__$_state_machine__15682__auto__ = null;
var andel$editor$run_lexer_loop_BANG__$_state_machine__15682__auto____0 = (function (){
var statearr_21734 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21734[(0)] = andel$editor$run_lexer_loop_BANG__$_state_machine__15682__auto__);

(statearr_21734[(1)] = (1));

return statearr_21734;
});
var andel$editor$run_lexer_loop_BANG__$_state_machine__15682__auto____1 = (function (state_21676){
while(true){
var ret_value__15683__auto__ = (function (){try{while(true){
var result__15684__auto__ = switch__15681__auto__(state_21676);
if(cljs.core.keyword_identical_QMARK_(result__15684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15684__auto__;
}
break;
}
}catch (e21735){if((e21735 instanceof Object)){
var ex__15685__auto__ = e21735;
var statearr_21736_21780 = state_21676;
(statearr_21736_21780[(5)] = ex__15685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21676);

return cljs.core.cst$kw$recur;
} else {
throw e21735;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15683__auto__,cljs.core.cst$kw$recur)){
var G__21781 = state_21676;
state_21676 = G__21781;
continue;
} else {
return ret_value__15683__auto__;
}
break;
}
});
andel$editor$run_lexer_loop_BANG__$_state_machine__15682__auto__ = function(state_21676){
switch(arguments.length){
case 0:
return andel$editor$run_lexer_loop_BANG__$_state_machine__15682__auto____0.call(this);
case 1:
return andel$editor$run_lexer_loop_BANG__$_state_machine__15682__auto____1.call(this,state_21676);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
andel$editor$run_lexer_loop_BANG__$_state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$0 = andel$editor$run_lexer_loop_BANG__$_state_machine__15682__auto____0;
andel$editor$run_lexer_loop_BANG__$_state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$1 = andel$editor$run_lexer_loop_BANG__$_state_machine__15682__auto____1;
return andel$editor$run_lexer_loop_BANG__$_state_machine__15682__auto__;
})()
;})(switch__15681__auto__,c__15783__auto__,map__21565,map__21565__$1,state,document,map__21566,map__21566__$1,modespec,lexer_broker,map__21567,map__21567__$1,input,output))
})();
var state__15785__auto__ = (function (){var statearr_21737 = (f__15784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15784__auto__.cljs$core$IFn$_invoke$arity$0() : f__15784__auto__.call(null));
(statearr_21737[(6)] = c__15783__auto__);

return statearr_21737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15785__auto__);
});})(c__15783__auto__,map__21565,map__21565__$1,state,document,map__21566,map__21566__$1,modespec,lexer_broker,map__21567,map__21567__$1,input,output))
);

return c__15783__auto__;
});
andel.editor.attach_lexer_BANG_ = (function andel$editor$attach_lexer_BANG_(state_ref){
andel.editor.run_lexer_loop_BANG_(state_ref);

return cljs.core.add_watch(state_ref,cljs.core.cst$kw$lexer,(function (_,___$1,old_s,new_s){
var old_ts = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$document,cljs.core.cst$kw$timestamp], null));
var new_ts = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$document,cljs.core.cst$kw$timestamp], null));
var broker = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_s,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$document,cljs.core.cst$kw$lexer_DASH_broker], null));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_ts,new_ts)){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(broker,new_s);
} else {
return null;
}
}));
});
andel.editor.make_editor_state = (function andel$editor$make_editor_state(){
var promise = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__15783__auto___21825 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15783__auto___21825,promise){
return (function (){
var f__15784__auto__ = (function (){var switch__15681__auto__ = ((function (c__15783__auto___21825,promise){
return (function (state_21818){
var state_val_21819 = (state_21818[(1)]);
if((state_val_21819 === (1))){
var state_21818__$1 = state_21818;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21818__$1,(2),andel.editor._STAR_editors_common);
} else {
if((state_val_21819 === (2))){
var inst_21783 = (state_21818[(2)]);
var inst_21784 = [cljs.core.cst$kw$document,cljs.core.cst$kw$editor,cljs.core.cst$kw$viewport];
var inst_21785 = [cljs.core.cst$kw$text,cljs.core.cst$kw$markup,cljs.core.cst$kw$lexer_DASH_broker,cljs.core.cst$kw$modespec,cljs.core.cst$kw$timestamp,cljs.core.cst$kw$lines,cljs.core.cst$kw$first_DASH_invalid];
var inst_21786 = andel.text.make_text("");
var inst_21787 = andel.intervals.make_interval_tree();
var inst_21788 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_21789 = cljs.core.PersistentVector.EMPTY;
var inst_21790 = [inst_21786,inst_21787,inst_21788,"text/x-java",(0),inst_21789,(0)];
var inst_21791 = cljs.core.PersistentHashMap.fromArrays(inst_21785,inst_21790);
var inst_21792 = [cljs.core.cst$kw$caret,cljs.core.cst$kw$selection];
var inst_21793 = [cljs.core.cst$kw$offset,cljs.core.cst$kw$v_DASH_col];
var inst_21794 = [(0),(0)];
var inst_21795 = cljs.core.PersistentHashMap.fromArrays(inst_21793,inst_21794);
var inst_21796 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21797 = [(0),(0)];
var inst_21798 = (new cljs.core.PersistentVector(null,2,(5),inst_21796,inst_21797,null));
var inst_21799 = [inst_21795,inst_21798];
var inst_21800 = cljs.core.PersistentHashMap.fromArrays(inst_21792,inst_21799);
var inst_21801 = [cljs.core.cst$kw$pos,cljs.core.cst$kw$view_DASH_size,cljs.core.cst$kw$metrics];
var inst_21802 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21803 = [(0),(0)];
var inst_21804 = (new cljs.core.PersistentVector(null,2,(5),inst_21802,inst_21803,null));
var inst_21805 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21806 = [(0),(0)];
var inst_21807 = (new cljs.core.PersistentVector(null,2,(5),inst_21805,inst_21806,null));
var inst_21808 = cljs.core.cst$kw$font_DASH_metrics.cljs$core$IFn$_invoke$arity$1(inst_21783);
var inst_21809 = [inst_21804,inst_21807,inst_21808];
var inst_21810 = cljs.core.PersistentHashMap.fromArrays(inst_21801,inst_21809);
var inst_21811 = [inst_21791,inst_21800,inst_21810];
var inst_21812 = cljs.core.PersistentHashMap.fromArrays(inst_21784,inst_21811);
var inst_21813 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_21812);
var inst_21814 = andel.editor.attach_lexer_BANG_(inst_21813);
var state_21818__$1 = (function (){var statearr_21820 = state_21818;
(statearr_21820[(7)] = inst_21814);

return statearr_21820;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21818__$1,(3),promise,inst_21813);
} else {
if((state_val_21819 === (3))){
var inst_21816 = (state_21818[(2)]);
var state_21818__$1 = state_21818;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21818__$1,inst_21816);
} else {
return null;
}
}
}
});})(c__15783__auto___21825,promise))
;
return ((function (switch__15681__auto__,c__15783__auto___21825,promise){
return (function() {
var andel$editor$make_editor_state_$_state_machine__15682__auto__ = null;
var andel$editor$make_editor_state_$_state_machine__15682__auto____0 = (function (){
var statearr_21821 = [null,null,null,null,null,null,null,null];
(statearr_21821[(0)] = andel$editor$make_editor_state_$_state_machine__15682__auto__);

(statearr_21821[(1)] = (1));

return statearr_21821;
});
var andel$editor$make_editor_state_$_state_machine__15682__auto____1 = (function (state_21818){
while(true){
var ret_value__15683__auto__ = (function (){try{while(true){
var result__15684__auto__ = switch__15681__auto__(state_21818);
if(cljs.core.keyword_identical_QMARK_(result__15684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15684__auto__;
}
break;
}
}catch (e21822){if((e21822 instanceof Object)){
var ex__15685__auto__ = e21822;
var statearr_21823_21826 = state_21818;
(statearr_21823_21826[(5)] = ex__15685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21818);

return cljs.core.cst$kw$recur;
} else {
throw e21822;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15683__auto__,cljs.core.cst$kw$recur)){
var G__21827 = state_21818;
state_21818 = G__21827;
continue;
} else {
return ret_value__15683__auto__;
}
break;
}
});
andel$editor$make_editor_state_$_state_machine__15682__auto__ = function(state_21818){
switch(arguments.length){
case 0:
return andel$editor$make_editor_state_$_state_machine__15682__auto____0.call(this);
case 1:
return andel$editor$make_editor_state_$_state_machine__15682__auto____1.call(this,state_21818);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
andel$editor$make_editor_state_$_state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$0 = andel$editor$make_editor_state_$_state_machine__15682__auto____0;
andel$editor$make_editor_state_$_state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$1 = andel$editor$make_editor_state_$_state_machine__15682__auto____1;
return andel$editor$make_editor_state_$_state_machine__15682__auto__;
})()
;})(switch__15681__auto__,c__15783__auto___21825,promise))
})();
var state__15785__auto__ = (function (){var statearr_21824 = (f__15784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15784__auto__.cljs$core$IFn$_invoke$arity$0() : f__15784__auto__.call(null));
(statearr_21824[(6)] = c__15783__auto___21825);

return statearr_21824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15785__auto__);
});})(c__15783__auto___21825,promise))
);


return promise;
});
andel.editor.el = (function andel$editor$el(var_args){
var G__21829 = arguments.length;
switch (G__21829) {
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
return cljs.core.reduce_kv((function (s,k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((v instanceof cljs.core.Keyword))?cljs.core.name(v):v)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(";")].join('');
}),null,m);
});
andel.editor.render_attrs = (function andel$editor$render_attrs(m){
return cljs.core.reduce_kv((function (s,k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((v instanceof cljs.core.Keyword))?cljs.core.name(v):v)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
}),null,m);
});
andel.editor.make_node = (function andel$editor$make_node(tag){
var G__21831 = cljs.core.name(tag);
return document.createElement(G__21831);
});
andel.editor.make_text_node = (function andel$editor$make_text_node(s){
return document.createTextNode(s);
});
andel.editor.assoc_attr_BANG_ = (function andel$editor$assoc_attr_BANG_(e,a,v){
e.setAttribute(cljs.core.name(a),(((v instanceof cljs.core.Keyword))?cljs.core.name(v):v));

return e;
});
andel.editor.conj_child_BANG_ = (function andel$editor$conj_child_BANG_(e,c){
e.appendChild(c);

return e;
});
andel.editor.infinity_QMARK_ = (function andel$editor$infinity_QMARK_(x){
return (x instanceof cljs.core.Keyword);
});
andel.editor.render_selection = (function andel$editor$render_selection(p__21832,p__21833){
var vec__21834 = p__21832;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21834,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21834,(1),null);
var map__21837 = p__21833;
var map__21837__$1 = ((((!((map__21837 == null)))?((((map__21837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21837.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21837):map__21837);
var metrics = map__21837__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21837__$1,cljs.core.cst$kw$width);
return [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,andel.editor.style(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$background_DASH_color,andel.theme.selection,cljs.core.cst$kw$height,andel.styles.px(andel.utils.line_height(metrics)),cljs.core.cst$kw$position,cljs.core.cst$kw$absolute,cljs.core.cst$kw$top,andel.styles.px((0)),cljs.core.cst$kw$left,(cljs.core.truth_(andel.editor.infinity_QMARK_(to))?(0):andel.styles.px((from * width))),cljs.core.cst$kw$margin_DASH_left,(cljs.core.truth_(andel.editor.infinity_QMARK_(to))?andel.styles.px((from * width)):null),cljs.core.cst$kw$width,(cljs.core.truth_(andel.editor.infinity_QMARK_(to))?"100%":andel.styles.px(((to - from) * width)))], null))], null)];
});
andel.editor.render_caret = (function andel$editor$render_caret(col,p__21839){
var map__21840 = p__21839;
var map__21840__$1 = ((((!((map__21840 == null)))?((((map__21840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21840.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21840):map__21840);
var metrics = map__21840__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21840__$1,cljs.core.cst$kw$width);
return [cljs.core.cst$kw$div,cljs.core.PersistentArrayMap.EMPTY,[cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,andel.editor.style(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$height,andel.styles.px((andel.utils.line_height(metrics) + (1))),cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$bg_DASH_05.cljs$core$IFn$_invoke$arity$1(andel.theme.zenburn),cljs.core.cst$kw$position,cljs.core.cst$kw$absolute,cljs.core.cst$kw$left,(0),cljs.core.cst$kw$top,(0),cljs.core.cst$kw$z_DASH_index,"-1"], null))], null)],[cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,andel.editor.style(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$width,andel.styles.px((1)),cljs.core.cst$kw$animation,"blinker 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite",cljs.core.cst$kw$top,(0),cljs.core.cst$kw$background_DASH_color,"white",cljs.core.cst$kw$position,cljs.core.cst$kw$absolute,cljs.core.cst$kw$left,andel.styles.px((col * width)),cljs.core.cst$kw$height,andel.styles.px((andel.utils.line_height(metrics) + (1)))], null))], null)]];
});
andel.editor.token_class = (function (){var tokens_cache = ({});
return ((function (tokens_cache){
return (function (tt){
if(cljs.core.truth_(tt)){
var temp__5276__auto__ = (tokens_cache[cljs.core.name(tt)]);
if(cljs.core.truth_(temp__5276__auto__)){
var c = temp__5276__auto__;
return c;
} else {
var class$ = cljs.core.name(tt);
var G__21842_21844 = tt;
var G__21843_21845 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),(andel.theme.token_styles.cljs$core$IFn$_invoke$arity$1 ? andel.theme.token_styles.cljs$core$IFn$_invoke$arity$1(tt) : andel.theme.token_styles.call(null,tt))], null);
(andel.styles.defstyle.cljs$core$IFn$_invoke$arity$2 ? andel.styles.defstyle.cljs$core$IFn$_invoke$arity$2(G__21842_21844,G__21843_21845) : andel.styles.defstyle.call(null,G__21842_21844,G__21843_21845));

(tokens_cache[cljs.core.name(tt)] = class$);

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
andel.editor.render_text = (function andel$editor$render_text(text,tokens,markup,p__21846){
var map__21847 = p__21846;
var map__21847__$1 = ((((!((map__21847 == null)))?((((map__21847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21847.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21847):map__21847);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21847__$1,cljs.core.cst$kw$height);
var markup__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$foreground,markup);
var events = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (markup__$1,map__21847,map__21847__$1,height){
return (function (m){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pos,cljs.core.cst$kw$from.cljs$core$IFn$_invoke$arity$1(m),cljs.core.cst$kw$add,cljs.core.cst$kw$foreground.cljs$core$IFn$_invoke$arity$1(m)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pos,cljs.core.cst$kw$to.cljs$core$IFn$_invoke$arity$1(m),cljs.core.cst$kw$remove,cljs.core.cst$kw$foreground.cljs$core$IFn$_invoke$arity$1(m)], null)], null);
});})(markup__$1,map__21847,map__21847__$1,height))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([markup__$1], 0)),cljs.core.second(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (markup__$1,map__21847,map__21847__$1,height){
return (function (p__21849,p__21850){
var vec__21851 = p__21849;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21851,(0),null);
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21851,(1),null);
var vec__21854 = p__21850;
var len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21854,(0),null);
var tt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21854,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + len),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(res,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pos,i,cljs.core.cst$kw$add,(andel.editor.token_class.cljs$core$IFn$_invoke$arity$1 ? andel.editor.token_class.cljs$core$IFn$_invoke$arity$1(tt) : andel.editor.token_class.call(null,tt))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pos,(i + len),cljs.core.cst$kw$remove,(andel.editor.token_class.cljs$core$IFn$_invoke$arity$1 ? andel.editor.token_class.cljs$core$IFn$_invoke$arity$1(tt) : andel.editor.token_class.call(null,tt))], null)], 0))], null);
});})(markup__$1,map__21847,map__21847__$1,height))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY], null),tokens)));
var events_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (markup__$1,events,map__21847,map__21847__$1,height){
return (function (es){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pos,cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.first(es)),cljs.core.cst$kw$add,cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$add,es)),cljs.core.cst$kw$remove,cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$remove,es))], null);
});})(markup__$1,events,map__21847,map__21847__$1,height))
,cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos,events)));
return cljs.core.cst$kw$res.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (markup__$1,events,events_SINGLEQUOTE_,map__21847,map__21847__$1,height){
return (function (p__21857,p__21858){
var map__21859 = p__21857;
var map__21859__$1 = ((((!((map__21859 == null)))?((((map__21859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21859.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21859):map__21859);
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21859__$1,cljs.core.cst$kw$prev);
var res = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21859__$1,cljs.core.cst$kw$res);
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21859__$1,cljs.core.cst$kw$styles);
var map__21860 = p__21858;
var map__21860__$1 = ((((!((map__21860 == null)))?((((map__21860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21860.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21860):map__21860);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21860__$1,cljs.core.cst$kw$pos);
var add = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21860__$1,cljs.core.cst$kw$add);
var remove = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21860__$1,cljs.core.cst$kw$remove);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$prev,pos,cljs.core.cst$kw$styles,clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(styles,remove),add),cljs.core.cst$kw$res,andel.editor.push_BANG_(res,[cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",styles))], null),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text,prev,pos)])], null);
});})(markup__$1,events,events_SINGLEQUOTE_,map__21847,map__21847__$1,height))
,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$prev,(0),cljs.core.cst$kw$styles,cljs.core.cst$kw$add.cljs$core$IFn$_invoke$arity$1(cljs.core.first(events_SINGLEQUOTE_)),cljs.core.cst$kw$res,[cljs.core.cst$kw$pre,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$line_DASH_text], null)]], null),cljs.core.next(events_SINGLEQUOTE_)));
});
andel.editor.render_background_markup = (function andel$editor$render_background_markup(markup,p__21863){
var map__21864 = p__21863;
var map__21864__$1 = ((((!((map__21864 == null)))?((((map__21864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21864.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21864):map__21864);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21864__$1,cljs.core.cst$kw$height);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21864__$1,cljs.core.cst$kw$width);
var spacing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21864__$1,cljs.core.cst$kw$spacing);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__21864,map__21864__$1,height,width,spacing){
return (function (res,p__21866){
var map__21867 = p__21866;
var map__21867__$1 = ((((!((map__21867 == null)))?((((map__21867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21867.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21867):map__21867);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21867__$1,cljs.core.cst$kw$from);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21867__$1,cljs.core.cst$kw$to);
var background = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21867__$1,cljs.core.cst$kw$background);
if(cljs.core.truth_(background)){
return andel.editor.push_BANG_(res,[cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,background,cljs.core.cst$kw$style,andel.editor.style(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$left,andel.styles.px((from * width)),cljs.core.cst$kw$width,andel.styles.px((width * (to - from))),cljs.core.cst$kw$height,andel.styles.px(height),cljs.core.cst$kw$position,cljs.core.cst$kw$absolute], null))], null)]);
} else {
return res;
}
});})(map__21864,map__21864__$1,height,width,spacing))
,[cljs.core.cst$kw$pre,cljs.core.PersistentArrayMap.EMPTY],markup);
});
andel.editor.real_dom = (function (){var G__21869 = ({"componentWillUpdate": (function (next_props,next_state){
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
return andel.editor.el.cljs$core$IFn$_invoke$arity$2("div",({"key": "realDOM"}));
})});
return createReactClass(G__21869);
})();

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
andel.editor.LineInfo.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8352__auto__,k__8353__auto__){
var self__ = this;
var this__8352__auto____$1 = this;
return this__8352__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8353__auto__,null);
});

andel.editor.LineInfo.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8354__auto__,k21871,else__8355__auto__){
var self__ = this;
var this__8354__auto____$1 = this;
var G__21875 = k21871;
var G__21875__$1 = (((G__21875 instanceof cljs.core.Keyword))?G__21875.fqn:null);
switch (G__21875__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21871,else__8355__auto__);

}
});

andel.editor.LineInfo.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8366__auto__,writer__8367__auto__,opts__8368__auto__){
var self__ = this;
var this__8366__auto____$1 = this;
var pr_pair__8369__auto__ = ((function (this__8366__auto____$1){
return (function (keyval__8370__auto__){
return cljs.core.pr_sequential_writer(writer__8367__auto__,cljs.core.pr_writer,""," ","",opts__8368__auto__,keyval__8370__auto__);
});})(this__8366__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8367__auto__,pr_pair__8369__auto__,"#andel.editor.LineInfo{",", ","}",opts__8368__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$lineText,self__.lineText],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$lineTokens,self__.lineTokens],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$lineMarkup,self__.lineMarkup],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$selection,self__.selection],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$caretIndex,self__.caretIndex],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$index,self__.index],null))], null),self__.__extmap));
});

andel.editor.LineInfo.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21870){
var self__ = this;
var G__21870__$1 = this;
return (new cljs.core.RecordIter((0),G__21870__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lineText,cljs.core.cst$kw$lineTokens,cljs.core.cst$kw$lineMarkup,cljs.core.cst$kw$selection,cljs.core.cst$kw$caretIndex,cljs.core.cst$kw$index], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

andel.editor.LineInfo.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8350__auto__){
var self__ = this;
var this__8350__auto____$1 = this;
return self__.__meta;
});

andel.editor.LineInfo.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8347__auto__){
var self__ = this;
var this__8347__auto____$1 = this;
return (new andel.editor.LineInfo(self__.lineText,self__.lineTokens,self__.lineMarkup,self__.selection,self__.caretIndex,self__.index,self__.__meta,self__.__extmap,self__.__hash));
});

andel.editor.LineInfo.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8356__auto__){
var self__ = this;
var this__8356__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
});

andel.editor.LineInfo.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8348__auto__){
var self__ = this;
var this__8348__auto____$1 = this;
var h__8120__auto__ = self__.__hash;
if(!((h__8120__auto__ == null))){
return h__8120__auto__;
} else {
var h__8120__auto____$1 = (function (){var fexpr__21876 = ((function (h__8120__auto__,this__8348__auto____$1){
return (function (coll__8349__auto__){
return (1976093779 ^ cljs.core.hash_unordered_coll(coll__8349__auto__));
});})(h__8120__auto__,this__8348__auto____$1))
;
return fexpr__21876(this__8348__auto____$1);
})();
self__.__hash = h__8120__auto____$1;

return h__8120__auto____$1;
}
});

andel.editor.LineInfo.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21872,other21873){
var self__ = this;
var this21872__$1 = this;
return (!((other21873 == null))) && ((this21872__$1.constructor === other21873.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21872__$1.lineText,other21873.lineText)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21872__$1.lineTokens,other21873.lineTokens)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21872__$1.lineMarkup,other21873.lineMarkup)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21872__$1.selection,other21873.selection)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21872__$1.caretIndex,other21873.caretIndex)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21872__$1.index,other21873.index)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21872__$1.__extmap,other21873.__extmap));
});

andel.editor.LineInfo.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8361__auto__,k__8362__auto__){
var self__ = this;
var this__8361__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$index,null,cljs.core.cst$kw$lineTokens,null,cljs.core.cst$kw$lineText,null,cljs.core.cst$kw$lineMarkup,null,cljs.core.cst$kw$selection,null,cljs.core.cst$kw$caretIndex,null], null), null),k__8362__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8361__auto____$1),self__.__meta),k__8362__auto__);
} else {
return (new andel.editor.LineInfo(self__.lineText,self__.lineTokens,self__.lineMarkup,self__.selection,self__.caretIndex,self__.index,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8362__auto__)),null));
}
});

andel.editor.LineInfo.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8359__auto__,k__8360__auto__,G__21870){
var self__ = this;
var this__8359__auto____$1 = this;
var pred__21877 = cljs.core.keyword_identical_QMARK_;
var expr__21878 = k__8360__auto__;
if(cljs.core.truth_((function (){var G__21880 = cljs.core.cst$kw$lineText;
var G__21881 = expr__21878;
return (pred__21877.cljs$core$IFn$_invoke$arity$2 ? pred__21877.cljs$core$IFn$_invoke$arity$2(G__21880,G__21881) : pred__21877.call(null,G__21880,G__21881));
})())){
return (new andel.editor.LineInfo(G__21870,self__.lineTokens,self__.lineMarkup,self__.selection,self__.caretIndex,self__.index,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21882 = cljs.core.cst$kw$lineTokens;
var G__21883 = expr__21878;
return (pred__21877.cljs$core$IFn$_invoke$arity$2 ? pred__21877.cljs$core$IFn$_invoke$arity$2(G__21882,G__21883) : pred__21877.call(null,G__21882,G__21883));
})())){
return (new andel.editor.LineInfo(self__.lineText,G__21870,self__.lineMarkup,self__.selection,self__.caretIndex,self__.index,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21884 = cljs.core.cst$kw$lineMarkup;
var G__21885 = expr__21878;
return (pred__21877.cljs$core$IFn$_invoke$arity$2 ? pred__21877.cljs$core$IFn$_invoke$arity$2(G__21884,G__21885) : pred__21877.call(null,G__21884,G__21885));
})())){
return (new andel.editor.LineInfo(self__.lineText,self__.lineTokens,G__21870,self__.selection,self__.caretIndex,self__.index,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21886 = cljs.core.cst$kw$selection;
var G__21887 = expr__21878;
return (pred__21877.cljs$core$IFn$_invoke$arity$2 ? pred__21877.cljs$core$IFn$_invoke$arity$2(G__21886,G__21887) : pred__21877.call(null,G__21886,G__21887));
})())){
return (new andel.editor.LineInfo(self__.lineText,self__.lineTokens,self__.lineMarkup,G__21870,self__.caretIndex,self__.index,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21888 = cljs.core.cst$kw$caretIndex;
var G__21889 = expr__21878;
return (pred__21877.cljs$core$IFn$_invoke$arity$2 ? pred__21877.cljs$core$IFn$_invoke$arity$2(G__21888,G__21889) : pred__21877.call(null,G__21888,G__21889));
})())){
return (new andel.editor.LineInfo(self__.lineText,self__.lineTokens,self__.lineMarkup,self__.selection,G__21870,self__.index,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21890 = cljs.core.cst$kw$index;
var G__21891 = expr__21878;
return (pred__21877.cljs$core$IFn$_invoke$arity$2 ? pred__21877.cljs$core$IFn$_invoke$arity$2(G__21890,G__21891) : pred__21877.call(null,G__21890,G__21891));
})())){
return (new andel.editor.LineInfo(self__.lineText,self__.lineTokens,self__.lineMarkup,self__.selection,self__.caretIndex,G__21870,self__.__meta,self__.__extmap,null));
} else {
return (new andel.editor.LineInfo(self__.lineText,self__.lineTokens,self__.lineMarkup,self__.selection,self__.caretIndex,self__.index,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8360__auto__,G__21870),null));
}
}
}
}
}
}
});

andel.editor.LineInfo.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8364__auto__){
var self__ = this;
var this__8364__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$lineText,self__.lineText],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$lineTokens,self__.lineTokens],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$lineMarkup,self__.lineMarkup],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$selection,self__.selection],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$caretIndex,self__.caretIndex],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$index,self__.index],null))], null),self__.__extmap));
});

andel.editor.LineInfo.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8351__auto__,G__21870){
var self__ = this;
var this__8351__auto____$1 = this;
return (new andel.editor.LineInfo(self__.lineText,self__.lineTokens,self__.lineMarkup,self__.selection,self__.caretIndex,self__.index,G__21870,self__.__extmap,self__.__hash));
});

andel.editor.LineInfo.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8357__auto__,entry__8358__auto__){
var self__ = this;
var this__8357__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8358__auto__)){
return this__8357__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8358__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8358__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8357__auto____$1,entry__8358__auto__);
}
});

andel.editor.LineInfo.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$lineText,cljs.core.cst$sym$lineTokens,cljs.core.cst$sym$lineMarkup,cljs.core.cst$sym$selection,cljs.core.cst$sym$caretIndex,cljs.core.cst$sym$index], null);
});

andel.editor.LineInfo.cljs$lang$type = true;

andel.editor.LineInfo.cljs$lang$ctorPrSeq = (function (this__8390__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"andel.editor/LineInfo");
});

andel.editor.LineInfo.cljs$lang$ctorPrWriter = (function (this__8390__auto__,writer__8391__auto__){
return cljs.core._write(writer__8391__auto__,"andel.editor/LineInfo");
});

andel.editor.__GT_LineInfo = (function andel$editor$__GT_LineInfo(lineText,lineTokens,lineMarkup,selection,caretIndex,index){
return (new andel.editor.LineInfo(lineText,lineTokens,lineMarkup,selection,caretIndex,index,null,null,null));
});

andel.editor.map__GT_LineInfo = (function andel$editor$map__GT_LineInfo(G__21874){
return (new andel.editor.LineInfo(cljs.core.cst$kw$lineText.cljs$core$IFn$_invoke$arity$1(G__21874),cljs.core.cst$kw$lineTokens.cljs$core$IFn$_invoke$arity$1(G__21874),cljs.core.cst$kw$lineMarkup.cljs$core$IFn$_invoke$arity$1(G__21874),cljs.core.cst$kw$selection.cljs$core$IFn$_invoke$arity$1(G__21874),cljs.core.cst$kw$caretIndex.cljs$core$IFn$_invoke$arity$1(G__21874),cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(G__21874),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21874,cljs.core.cst$kw$lineText,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$lineTokens,cljs.core.cst$kw$lineMarkup,cljs.core.cst$kw$selection,cljs.core.cst$kw$caretIndex,cljs.core.cst$kw$index], 0))),null));
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
var n = andel.editor.make_node(tag);
while(true){
if((i < len)){
var temp__5276__auto__ = (children[i]);
if(cljs.core.truth_(temp__5276__auto__)){
var c = temp__5276__auto__;
var G__21893 = (i + (1));
var G__21894 = andel.editor.conj_child_BANG_(n,((typeof c === 'string')?andel.editor.make_text_node(c):(andel.editor.dom.cljs$core$IFn$_invoke$arity$1 ? andel.editor.dom.cljs$core$IFn$_invoke$arity$1(c) : andel.editor.dom.call(null,c))));
i = G__21893;
n = G__21894;
continue;
} else {
var G__21895 = (i + (1));
var G__21896 = n;
i = G__21895;
n = G__21896;
continue;
}
} else {
return n;
}
break;
}
})();
return cljs.core.reduce_kv(((function (len,el_with_children,tag,attrs_map,children){
return (function (n,a,v){
return andel.editor.assoc_attr_BANG_(n,a,v);
});})(len,el_with_children,tag,attrs_map,children))
,el_with_children,attrs_map);
});
andel.editor.def_fun = (function andel$editor$def_fun(f){
var G__21897 = ({"shouldComponentUpdate": (function (new_props,new_state){
var this$ = this;
var old_props = (this$["props"]);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((old_props["props"]),(new_props["props"]));
}), "render": (function (_){
var this$ = this;
var G__21898 = ((this$["props"])["props"]);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21898) : f.call(null,G__21898));
})});
return createReactClass(G__21897);
});
andel.editor.render_line = andel.editor.def_fun((function (props){
var this$ = this;
var line_info = (function (){var G__21899 = cljs.core.cst$kw$line_DASH_info;
return (props.cljs$core$IFn$_invoke$arity$1 ? props.cljs$core$IFn$_invoke$arity$1(G__21899) : props.call(null,G__21899));
})();
var metrics = (function (){var G__21900 = cljs.core.cst$kw$metrics;
return (props.cljs$core$IFn$_invoke$arity$1 ? props.cljs$core$IFn$_invoke$arity$1(G__21900) : props.call(null,G__21900));
})();
var line_text = line_info.lineText;
var line_tokens = line_info.lineTokens;
var line_markup = line_info.lineMarkup;
var selection = line_info.selection;
var caret_index = line_info.caretIndex;
return andel.editor.el.cljs$core$IFn$_invoke$arity$2(andel.editor.real_dom,({"dom": andel.editor.dom([cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$render_DASH_line], null),andel.editor.render_background_markup(line_markup,metrics),andel.editor.render_selection(selection,metrics),andel.editor.render_text(line_text,line_tokens,line_markup,metrics),(cljs.core.truth_(caret_index)?andel.editor.render_caret(caret_index,metrics):null)])}));
}));
andel.editor.line_selection = (function andel$editor$line_selection(p__21901,p__21902){
var vec__21903 = p__21901;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21903,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21903,(1),null);
var vec__21906 = p__21902;
var line_start_offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21906,(0),null);
var line_end_offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21906,(1),null);
if(((from < line_start_offset)) && ((line_start_offset < to))){
if((line_end_offset < to)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.cst$kw$infinity], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(to - line_start_offset)], null);
}
} else {
if(((line_start_offset <= from)) && ((from <= line_end_offset))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(from - line_start_offset),(((to <= line_end_offset))?(to - line_start_offset):cljs.core.cst$kw$infinity)], null);
} else {
return null;

}
}
});
andel.editor.scroll = (function (){var G__21909 = ({"shouldComponentUpdate": (function (new_props,new_state){
var this$ = this;
var old_props = (this$["props"]);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((old_props["props"]),(new_props["props"]));
}), "componentDidMount": (function (){
var cmp = this;
var props = ((cmp["props"])["props"]);
var node = ReactDOM.findDOMNode(cmp);
var on_resize = ((function (props,node,cmp){
return (function (){
var height = (node["clientHeight"]);
var width = (node["clientWidth"]);
var G__21912 = (width - (0));
var G__21913 = (height - (3));
var fexpr__21911 = (function (){var G__21914 = cljs.core.cst$kw$onResize;
return (props.cljs$core$IFn$_invoke$arity$1 ? props.cljs$core$IFn$_invoke$arity$1(G__21914) : props.call(null,G__21914));
})();
return (fexpr__21911.cljs$core$IFn$_invoke$arity$2 ? fexpr__21911.cljs$core$IFn$_invoke$arity$2(G__21912,G__21913) : fexpr__21911.call(null,G__21912,G__21913));
});})(props,node,cmp))
;
on_resize();

return window.addEventListener("resize",on_resize);
}), "render": (function (_){
var this$ = this;
var props = ((this$["props"])["props"]);
var child = (function (){var G__21915 = cljs.core.cst$kw$child;
return (props.cljs$core$IFn$_invoke$arity$1 ? props.cljs$core$IFn$_invoke$arity$1(G__21915) : props.call(null,G__21915));
})();
var on_resize = (function (){var G__21916 = cljs.core.cst$kw$onResize;
return (props.cljs$core$IFn$_invoke$arity$1 ? props.cljs$core$IFn$_invoke$arity$1(G__21916) : props.call(null,G__21916));
})();
var on_mouse_wheel = (function (){var G__21917 = cljs.core.cst$kw$onMouseWheel;
return (props.cljs$core$IFn$_invoke$arity$1 ? props.cljs$core$IFn$_invoke$arity$1(G__21917) : props.call(null,G__21917));
})();
return andel.editor.el.cljs$core$IFn$_invoke$arity$3("div",({"key": "scroll", "style": ({"display": "flex", "flex": "1", "overflow": cljs.core.cst$kw$hidden}), "onWheel": on_mouse_wheel}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [child], null));
})});
return createReactClass(G__21909);
})();
andel.editor.prepare_markup = (function andel$editor$prepare_markup(markup,from,to){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (marker){
return andel.intervals.__GT_Marker((function (){var x__8016__auto__ = (0);
var y__8017__auto__ = (marker.from - from);
return ((x__8016__auto__ > y__8017__auto__) ? x__8016__auto__ : y__8017__auto__);
})(),(function (){var x__8016__auto__ = (0);
var y__8017__auto__ = (marker.to - from);
return ((x__8016__auto__ > y__8017__auto__) ? x__8016__auto__ : y__8017__auto__);
})(),false,false,marker.background,marker.foreground);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (marker){
return ((marker.from <= to)) && ((from <= marker.to));
}),markup));
});
andel.editor.editor_viewport = (function andel$editor$editor_viewport(props){
var state = (props["editorState"]);
var map__21920 = cljs.core.deref(state);
var map__21920__$1 = ((((!((map__21920 == null)))?((((map__21920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21920.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21920):map__21920);
var editor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21920__$1,cljs.core.cst$kw$editor);
var document = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21920__$1,cljs.core.cst$kw$document);
var viewport = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21920__$1,cljs.core.cst$kw$viewport);
var map__21921 = viewport;
var map__21921__$1 = ((((!((map__21921 == null)))?((((map__21921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21921.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21921):map__21921);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21921__$1,cljs.core.cst$kw$pos);
var view_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21921__$1,cljs.core.cst$kw$view_DASH_size);
var metrics = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21921__$1,cljs.core.cst$kw$metrics);
var line_height = andel.utils.line_height(metrics);
var map__21922 = document;
var map__21922__$1 = ((((!((map__21922 == null)))?((((map__21922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21922.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21922):map__21922);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21922__$1,cljs.core.cst$kw$text);
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21922__$1,cljs.core.cst$kw$lines);
var hashes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21922__$1,cljs.core.cst$kw$hashes);
var map__21923 = editor;
var map__21923__$1 = ((((!((map__21923 == null)))?((((map__21923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21923.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21923):map__21923);
var caret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21923__$1,cljs.core.cst$kw$caret);
var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21923__$1,cljs.core.cst$kw$selection);
var vec__21924 = pos;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21924,(0),null);
var from_y_offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21924,(1),null);
var vec__21927 = view_size;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21927,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21927,(1),null);
var from = ((from_y_offset / line_height) | (0));
var to = (from + (h / line_height));
var y_shift = (- (line_height * ((from_y_offset / line_height) - from)));
var line_zipper = andel.text.scan_to_line(andel.text.zipper(text),from);
var from_offset = andel.text.offset(line_zipper);
var to_offset = (andel.text.offset(andel.text.scan_to_line(line_zipper,(to + (1)))) - (1));
var caret_offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(caret,cljs.core.cst$kw$offset);
var markup = andel.intervals.query_intervals(cljs.core.cst$kw$markup.cljs$core$IFn$_invoke$arity$1(document),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$from,from_offset,cljs.core.cst$kw$to,to_offset], null));
var ___$1 = (function (){var G__21937 = cljs.core.cst$kw$render_DASH_line;
var G__21938 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$render_DASH_line,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$height,andel.styles.px(andel.utils.line_height(metrics)),cljs.core.cst$kw$position,cljs.core.cst$kw$relative,cljs.core.cst$kw$overflow,cljs.core.cst$kw$hidden], null)], null);
return (andel.styles.defstyle.cljs$core$IFn$_invoke$arity$2 ? andel.styles.defstyle.cljs$core$IFn$_invoke$arity$2(G__21937,G__21938) : andel.styles.defstyle.call(null,G__21937,G__21938));
})();
var vec__21930 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (state,map__21920,map__21920__$1,editor,document,viewport,map__21921,map__21921__$1,pos,view_size,metrics,line_height,map__21922,map__21922__$1,text,lines,hashes,map__21923,map__21923__$1,caret,selection,vec__21924,_,from_y_offset,vec__21927,w,h,from,to,y_shift,line_zipper,from_offset,to_offset,caret_offset,markup,___$1){
return (function (p__21939,index){
var vec__21940 = p__21939;
var line_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21940,(0),null);
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21940,(1),null);
var next_line = andel.text.scan_to_line(line_start,(index + (1)));
var line_start_offset = andel.text.offset(line_start);
var next_line_offset = andel.text.offset(next_line);
var len = (next_line_offset - line_start_offset);
var len__$1 = (cljs.core.truth_(andel.tree.end_QMARK_(next_line))?len:(len - (1)));
var line_text = andel.text.text(line_start,len__$1);
var line_end_offset = (line_start_offset + len__$1);
var line_sel = andel.editor.line_selection(selection,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line_start_offset,line_end_offset], null));
var line_caret = ((((line_start_offset <= caret_offset)) && ((caret_offset <= line_end_offset)))?(caret_offset - line_start_offset):null);
var line_tokens = (function (){var or__7678__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(hashes,cljs.core.hash(line_text));
if(cljs.core.truth_(or__7678__auto__)){
return or__7678__auto__;
} else {
return cljs.core.cst$kw$tokens.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(lines,index));
}
})();
var line_markup = andel.editor.prepare_markup(markup,line_start_offset,line_end_offset);
var line_info = (new andel.editor.LineInfo(line_text,line_tokens,line_markup,line_sel,line_caret,index,null,null,null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_line,cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(res,andel.editor.el.cljs$core$IFn$_invoke$arity$3("div",(function (){var obj21944 = {"key":index,"style":(function (){var obj21946 = {"transform":[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d(0px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(andel.styles.px(y_shift)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", 0px)")].join('')};
return obj21946;
})()};
return obj21944;
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [andel.editor.el.cljs$core$IFn$_invoke$arity$2(andel.editor.render_line,({"key": index, "props": new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$line_DASH_info,line_info,cljs.core.cst$kw$metrics,metrics], null)}))], null)))], null);
});})(state,map__21920,map__21920__$1,editor,document,viewport,map__21921,map__21921__$1,pos,view_size,metrics,line_height,map__21922,map__21922__$1,text,lines,hashes,map__21923,map__21923__$1,caret,selection,vec__21924,_,from_y_offset,vec__21927,w,h,from,to,y_shift,line_zipper,from_offset,to_offset,caret_offset,markup,___$1))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line_zipper,cljs.core.transient$(cljs.core.PersistentVector.EMPTY)], null),cljs.core.range.cljs$core$IFn$_invoke$arity$2(from,to));
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21930,(0),null);
var hiccup = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21930,(1),null);
return andel.editor.el.cljs$core$IFn$_invoke$arity$3("div",({"style": ({"background": andel.theme.background, "width": "100%"}), "key": "viewport", "onMouseDown": ((function (state,map__21920,map__21920__$1,editor,document,viewport,map__21921,map__21921__$1,pos,view_size,metrics,line_height,map__21922,map__21922__$1,text,lines,hashes,map__21923,map__21923__$1,caret,selection,vec__21924,_,from_y_offset,vec__21927,w,h,from,to,y_shift,line_zipper,from_offset,to_offset,caret_offset,markup,___$1,vec__21930,___$2,hiccup){
return (function (event){
var x = (event["clientX"]);
var y = (event["clientY"]);
var line_col = andel.utils.pixels__GT_grid_position(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),from,y_shift,metrics);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (x,y,line_col,state,map__21920,map__21920__$1,editor,document,viewport,map__21921,map__21921__$1,pos,view_size,metrics,line_height,map__21922,map__21922__$1,text,lines,hashes,map__21923,map__21923__$1,caret,selection,vec__21924,_,from_y_offset,vec__21927,w,h,from,to,y_shift,line_zipper,from_offset,to_offset,caret_offset,markup,___$1,vec__21930,___$2,hiccup){
return (function (p1__21918_SHARP_){
return andel.controller.set_caret_at_grid_pos(p1__21918_SHARP_,line_col,false);
});})(x,y,line_col,state,map__21920,map__21920__$1,editor,document,viewport,map__21921,map__21921__$1,pos,view_size,metrics,line_height,map__21922,map__21922__$1,text,lines,hashes,map__21923,map__21923__$1,caret,selection,vec__21924,_,from_y_offset,vec__21927,w,h,from,to,y_shift,line_zipper,from_offset,to_offset,caret_offset,markup,___$1,vec__21930,___$2,hiccup))
);
});})(state,map__21920,map__21920__$1,editor,document,viewport,map__21921,map__21921__$1,pos,view_size,metrics,line_height,map__21922,map__21922__$1,text,lines,hashes,map__21923,map__21923__$1,caret,selection,vec__21924,_,from_y_offset,vec__21927,w,h,from,to,y_shift,line_zipper,from_offset,to_offset,caret_offset,markup,___$1,vec__21930,___$2,hiccup))
, "onMouseMove": ((function (state,map__21920,map__21920__$1,editor,document,viewport,map__21921,map__21921__$1,pos,view_size,metrics,line_height,map__21922,map__21922__$1,text,lines,hashes,map__21923,map__21923__$1,caret,selection,vec__21924,_,from_y_offset,vec__21927,w,h,from,to,y_shift,line_zipper,from_offset,to_offset,caret_offset,markup,___$1,vec__21930,___$2,hiccup){
return (function (event){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((event["buttons"]),(1))){
var x = (event["clientX"]);
var y = (event["clientY"]);
var line_col = andel.utils.pixels__GT_grid_position(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),from,y_shift,metrics);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (x,y,line_col,state,map__21920,map__21920__$1,editor,document,viewport,map__21921,map__21921__$1,pos,view_size,metrics,line_height,map__21922,map__21922__$1,text,lines,hashes,map__21923,map__21923__$1,caret,selection,vec__21924,_,from_y_offset,vec__21927,w,h,from,to,y_shift,line_zipper,from_offset,to_offset,caret_offset,markup,___$1,vec__21930,___$2,hiccup){
return (function (p1__21919_SHARP_){
return andel.controller.set_caret_at_grid_pos(p1__21919_SHARP_,line_col,true);
});})(x,y,line_col,state,map__21920,map__21920__$1,editor,document,viewport,map__21921,map__21921__$1,pos,view_size,metrics,line_height,map__21922,map__21922__$1,text,lines,hashes,map__21923,map__21923__$1,caret,selection,vec__21924,_,from_y_offset,vec__21927,w,h,from,to,y_shift,line_zipper,from_offset,to_offset,caret_offset,markup,___$1,vec__21930,___$2,hiccup))
);
} else {
return null;
}
});})(state,map__21920,map__21920__$1,editor,document,viewport,map__21921,map__21921__$1,pos,view_size,metrics,line_height,map__21922,map__21922__$1,text,lines,hashes,map__21923,map__21923__$1,caret,selection,vec__21924,_,from_y_offset,vec__21927,w,h,from,to,y_shift,line_zipper,from_offset,to_offset,caret_offset,markup,___$1,vec__21930,___$2,hiccup))
}),cljs.core.persistent_BANG_(hiccup));
});
andel.editor.scroll_on_event = (function andel$editor$scroll_on_event(state){
return (function (evt){
var map__21948 = cljs.core.deref(state);
var map__21948__$1 = ((((!((map__21948 == null)))?((((map__21948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21948.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21948):map__21948);
var viewport = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21948__$1,cljs.core.cst$kw$viewport);
var document = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21948__$1,cljs.core.cst$kw$document);
var screen_height = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(viewport,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$view_DASH_size,(1)], null));
var line_height = andel.utils.line_height(cljs.core.cst$kw$metrics.cljs$core$IFn$_invoke$arity$1(viewport));
var lines_count = andel.text.lines_count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(document,cljs.core.cst$kw$text));
var document_height = ((lines_count * line_height) - (screen_height / (2)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,((function (map__21948,map__21948__$1,viewport,document,screen_height,line_height,lines_count,document_height){
return (function (p1__21947_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__21947_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$viewport,cljs.core.cst$kw$pos], null),((function (map__21948,map__21948__$1,viewport,document,screen_height,line_height,lines_count,document_height){
return (function (p__21950){
var vec__21951 = p__21950;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21951,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21951,(1),null);
var dx = evt.deltaX;
var dy = evt.deltaY;
if((Math.abs(dx) < Math.abs(dy))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(function (){var x__8023__auto__ = document_height;
var y__8024__auto__ = (function (){var x__8016__auto__ = (0);
var y__8017__auto__ = (y + dy);
return ((x__8016__auto__ > y__8017__auto__) ? x__8016__auto__ : y__8017__auto__);
})();
return ((x__8023__auto__ < y__8024__auto__) ? x__8023__auto__ : y__8024__auto__);
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__8016__auto__ = (0);
var y__8017__auto__ = (x + dx);
return ((x__8016__auto__ > y__8017__auto__) ? x__8016__auto__ : y__8017__auto__);
})(),y], null);
}
});})(map__21948,map__21948__$1,viewport,document,screen_height,line_height,lines_count,document_height))
);
});})(map__21948,map__21948__$1,viewport,document,screen_height,line_height,lines_count,document_height))
);

return evt.preventDefault();
});
});
andel.editor.set_viewport_size = (function andel$editor$set_viewport_size(state,width,height){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (p1__21954_SHARP_){
return cljs.core.assoc_in(p1__21954_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$viewport,cljs.core.cst$kw$view_DASH_size], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null));
}));
});
andel.editor.next_tick = (function (){var w = window;
var or__7678__auto__ = (w["requestAnimationFrame"]);
if(cljs.core.truth_(or__7678__auto__)){
return or__7678__auto__;
} else {
var or__7678__auto____$1 = (w["webkitRequestAnimationFrame"]);
if(cljs.core.truth_(or__7678__auto____$1)){
return or__7678__auto____$1;
} else {
var or__7678__auto____$2 = (w["mozRequestAnimationFrame"]);
if(cljs.core.truth_(or__7678__auto____$2)){
return or__7678__auto____$2;
} else {
return (w["msRequestAnimationFrame"]);
}
}
}
})();
andel.editor.editor_cmp = (function (){var G__21955 = ({"componentDidMount": (function (){
var cmp = this;
var _STAR_state = ((cmp["props"])["editorState"]);
var _STAR_scheduled_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return cljs.core.add_watch(_STAR_state,cljs.core.cst$kw$editor_DASH_view,((function (_STAR_state,_STAR_scheduled_QMARK_,cmp){
return (function (_,___$1,old_state,new_state){
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_state,new_state)) && (cljs.core.not(cljs.core.deref(_STAR_scheduled_QMARK_)))){
cljs.core.reset_BANG_(_STAR_scheduled_QMARK_,true);

var G__21956 = ((function (_STAR_state,_STAR_scheduled_QMARK_,cmp){
return (function (){
cljs.core.reset_BANG_(_STAR_scheduled_QMARK_,false);

return (cmp["forceUpdate"])();
});})(_STAR_state,_STAR_scheduled_QMARK_,cmp))
;
return (andel.editor.next_tick.cljs$core$IFn$_invoke$arity$1 ? andel.editor.next_tick.cljs$core$IFn$_invoke$arity$1(G__21956) : andel.editor.next_tick.call(null,G__21956));
} else {
return null;
}
});})(_STAR_state,_STAR_scheduled_QMARK_,cmp))
);
}), "componentWillUnmount": (function (){
var cmp = this;
var _STAR_state = ((cmp["props"])["editorState"]);
return cljs.core.remove_watch(_STAR_state,cljs.core.cst$kw$editor_DASH_view);
}), "shouldComponentUpdate": (function (){
return false;
}), "render": (function (){
var cmp = this;
var _STAR_state = ((cmp["props"])["editorState"]);
return andel.editor.el.cljs$core$IFn$_invoke$arity$3("div",({"key": "editor", "style": ({"display": "flex", "flex": "1"}), "tabIndex": (-1), "onFocus": ((function (_STAR_state,cmp){
return (function (){
var ta = ((cmp["refs"])["textarea"]);
if(cljs.core.truth_(ta)){
return ta.focus();
} else {
return null;
}
});})(_STAR_state,cmp))
}),[andel.editor.el.cljs$core$IFn$_invoke$arity$2(andel.editor.scroll,(function (){var obj21958 = {"key":"viewport","props":new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$child,andel.editor.el.cljs$core$IFn$_invoke$arity$2(andel.editor.editor_viewport,({"key": "editor-viewport", "editorState": _STAR_state})),cljs.core.cst$kw$onResize,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(andel.editor.set_viewport_size,_STAR_state),cljs.core.cst$kw$onMouseWheel,andel.editor.scroll_on_event(_STAR_state)], null)};
return obj21958;
})()),andel.editor.el.cljs$core$IFn$_invoke$arity$2("textarea",({"key": "textarea", "ref": "textarea", "autoFocus": true, "style": ({"opacity": (0), "padding": "0px", "border": "none", "height": "0px", "width": "0px"}), "onInput": ((function (_STAR_state,cmp){
return (function (evt){
var e = evt.target;
var val = e.value;
e.value = "";

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_state,andel.controller.type_in,val);
});})(_STAR_state,cmp))
}))]);
})});
return createReactClass(G__21955);
})();
andel.editor.editor_view = (function andel$editor$editor_view(_STAR_editor_state){
return andel.editor.el.cljs$core$IFn$_invoke$arity$2(andel.editor.editor_cmp,({"editorState": _STAR_editor_state, "key": "editor"}));
});
