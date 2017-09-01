// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('andel.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('cljs.tools.reader.edn');
goog.require('cljs_http.client');
goog.require('andel.editor');
goog.require('andel.controller');
goog.require('andel.intervals');
goog.require('andel.keybind');
goog.require('andel.styles');
andel.core.bind_keymap_BANG_ = (function andel$core$bind_keymap_BANG_(_STAR_editor_state){
var capture = (function andel$core$bind_keymap_BANG__$_capture(f){
return (function (evt,_){
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

evt.stopPropagation();

return evt.preventDefault();
});
});
var bind_function_BANG_ = (function() { 
var andel$core$bind_keymap_BANG__$_bind_function_BANG___delegate = function (key,f,args){
return andel.keybind.bind_BANG_(key,cljs.core.cst$kw$global,capture((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_editor_state,(function (s){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,s,args);
}));
})));
};
var andel$core$bind_keymap_BANG__$_bind_function_BANG_ = function (key,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__21964__i = 0, G__21964__a = new Array(arguments.length -  2);
while (G__21964__i < G__21964__a.length) {G__21964__a[G__21964__i] = arguments[G__21964__i + 2]; ++G__21964__i;}
  args = new cljs.core.IndexedSeq(G__21964__a,0,null);
} 
return andel$core$bind_keymap_BANG__$_bind_function_BANG___delegate.call(this,key,f,args);};
andel$core$bind_keymap_BANG__$_bind_function_BANG_.cljs$lang$maxFixedArity = 2;
andel$core$bind_keymap_BANG__$_bind_function_BANG_.cljs$lang$applyTo = (function (arglist__21965){
var key = cljs.core.first(arglist__21965);
arglist__21965 = cljs.core.next(arglist__21965);
var f = cljs.core.first(arglist__21965);
var args = cljs.core.rest(arglist__21965);
return andel$core$bind_keymap_BANG__$_bind_function_BANG___delegate(key,f,args);
});
andel$core$bind_keymap_BANG__$_bind_function_BANG_.cljs$core$IFn$_invoke$arity$variadic = andel$core$bind_keymap_BANG__$_bind_function_BANG___delegate;
return andel$core$bind_keymap_BANG__$_bind_function_BANG_;
})()
;
var G__21961_21966 = "keydown";
var G__21962_21967 = andel.keybind.dispatcher();
var G__21963_21968 = true;
window.addEventListener(G__21961_21966,G__21962_21967,G__21963_21968);

bind_function_BANG_("backspace",andel.controller.backspace);

bind_function_BANG_("delete",andel.controller.delete$);

bind_function_BANG_.cljs$core$IFn$_invoke$arity$variadic("pgup",andel.controller.pg_move,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$up,false], 0));

bind_function_BANG_.cljs$core$IFn$_invoke$arity$variadic("pgdown",andel.controller.pg_move,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$down,false], 0));

bind_function_BANG_.cljs$core$IFn$_invoke$arity$variadic("shift-pgup",andel.controller.pg_move,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$up,true], 0));

bind_function_BANG_.cljs$core$IFn$_invoke$arity$variadic("shift-pgdown",andel.controller.pg_move,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$down,true], 0));

bind_function_BANG_.cljs$core$IFn$_invoke$arity$variadic("home",andel.controller.home,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false], 0));

bind_function_BANG_.cljs$core$IFn$_invoke$arity$variadic("shift-home",andel.controller.home,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));

bind_function_BANG_.cljs$core$IFn$_invoke$arity$variadic("end",andel.controller.end,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false], 0));

bind_function_BANG_.cljs$core$IFn$_invoke$arity$variadic("shift-end",andel.controller.end,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));

bind_function_BANG_("tab",(function (state){
return andel.controller.type_in(state,"    ");
}));

bind_function_BANG_.cljs$core$IFn$_invoke$arity$variadic("left",andel.controller.move_caret,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$left,false], 0));

bind_function_BANG_.cljs$core$IFn$_invoke$arity$variadic("right",andel.controller.move_caret,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$right,false], 0));

bind_function_BANG_.cljs$core$IFn$_invoke$arity$variadic("up",andel.controller.move_caret,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$up,false], 0));

bind_function_BANG_.cljs$core$IFn$_invoke$arity$variadic("down",andel.controller.move_caret,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$down,false], 0));

bind_function_BANG_.cljs$core$IFn$_invoke$arity$variadic("shift-left",andel.controller.move_caret,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$left,true], 0));

bind_function_BANG_.cljs$core$IFn$_invoke$arity$variadic("shift-right",andel.controller.move_caret,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$right,true], 0));

bind_function_BANG_.cljs$core$IFn$_invoke$arity$variadic("shift-up",andel.controller.move_caret,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$up,true], 0));

bind_function_BANG_.cljs$core$IFn$_invoke$arity$variadic("shift-down",andel.controller.move_caret,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$down,true], 0));

bind_function_BANG_("esc",andel.controller.drop_selection_on_esc);

return bind_function_BANG_("enter",andel.controller.on_enter);
});
andel.core.create_marker = (function andel$core$create_marker(proto_marker){
var class_by_keys = (function andel$core$create_marker_$_class_by_keys(ks,style){
var style__$1 = cljs.core.select_keys(style,ks);
if(cljs.core.truth_(cljs.core.not_empty(style__$1))){
return andel.styles.style__GT_class(style__$1);
} else {
return null;
}
});
var classes_by_keys = (function andel$core$create_marker_$_classes_by_keys(ks,styles){
var classes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(class_by_keys,ks),styles));
if(cljs.core.truth_(cljs.core.not_empty(classes))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",classes));
} else {
return null;
}
});
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(andel.intervals.map__GT_Marker(proto_marker),cljs.core.cst$kw$foreground,classes_by_keys(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$color,cljs.core.cst$kw$font_DASH_weight,cljs.core.cst$kw$font_DASH_style], null),cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(proto_marker))),cljs.core.cst$kw$background,classes_by_keys(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$background_DASH_color,cljs.core.cst$kw$border_DASH_bottom_DASH_style,cljs.core.cst$kw$border_DASH_color,cljs.core.cst$kw$border_DASH_width,cljs.core.cst$kw$border_DASH_radius], null),cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(proto_marker)));
});
if(typeof andel.core.editor_state_promise !== 'undefined'){
} else {
andel.core.editor_state_promise = (function (){var promise = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__15783__auto___21998 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15783__auto___21998,promise){
return (function (){
var f__15784__auto__ = (function (){var switch__15681__auto__ = ((function (c__15783__auto___21998,promise){
return (function (state_21989){
var state_val_21990 = (state_21989[(1)]);
if((state_val_21990 === (1))){
var inst_21969 = andel.editor.make_editor_state();
var state_21989__$1 = state_21989;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21989__$1,(2),inst_21969);
} else {
if((state_val_21990 === (2))){
var inst_21971 = (state_21989[(2)]);
var inst_21972 = cljs_http.client.get("resources/public/EditorImpl.java");
var state_21989__$1 = (function (){var statearr_21991 = state_21989;
(statearr_21991[(7)] = inst_21971);

return statearr_21991;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21989__$1,(3),inst_21972);
} else {
if((state_val_21990 === (3))){
var inst_21974 = (state_21989[(2)]);
var inst_21975 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_21974);
var inst_21976 = cljs_http.client.get("resources/public/markup.txt");
var state_21989__$1 = (function (){var statearr_21992 = state_21989;
(statearr_21992[(8)] = inst_21975);

return statearr_21992;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21989__$1,(4),inst_21976);
} else {
if((state_val_21990 === (4))){
var inst_21971 = (state_21989[(7)]);
var inst_21975 = (state_21989[(8)]);
var inst_21978 = (state_21989[(2)]);
var inst_21979 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_21978);
var inst_21980 = cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$1(inst_21979);
var inst_21981 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$from,inst_21980);
var inst_21982 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(andel.core.create_marker,inst_21981);
var inst_21983 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(inst_21971,andel.controller.set_text,inst_21975);
var inst_21984 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(inst_21971,andel.controller.add_markup,inst_21982);
var inst_21985 = andel.core.bind_keymap_BANG_(inst_21971);
var state_21989__$1 = (function (){var statearr_21993 = state_21989;
(statearr_21993[(9)] = inst_21984);

(statearr_21993[(10)] = inst_21985);

(statearr_21993[(11)] = inst_21983);

return statearr_21993;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21989__$1,(5),promise,inst_21971);
} else {
if((state_val_21990 === (5))){
var inst_21987 = (state_21989[(2)]);
var state_21989__$1 = state_21989;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21989__$1,inst_21987);
} else {
return null;
}
}
}
}
}
});})(c__15783__auto___21998,promise))
;
return ((function (switch__15681__auto__,c__15783__auto___21998,promise){
return (function() {
var andel$core$state_machine__15682__auto__ = null;
var andel$core$state_machine__15682__auto____0 = (function (){
var statearr_21994 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21994[(0)] = andel$core$state_machine__15682__auto__);

(statearr_21994[(1)] = (1));

return statearr_21994;
});
var andel$core$state_machine__15682__auto____1 = (function (state_21989){
while(true){
var ret_value__15683__auto__ = (function (){try{while(true){
var result__15684__auto__ = switch__15681__auto__(state_21989);
if(cljs.core.keyword_identical_QMARK_(result__15684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15684__auto__;
}
break;
}
}catch (e21995){if((e21995 instanceof Object)){
var ex__15685__auto__ = e21995;
var statearr_21996_21999 = state_21989;
(statearr_21996_21999[(5)] = ex__15685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21989);

return cljs.core.cst$kw$recur;
} else {
throw e21995;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15683__auto__,cljs.core.cst$kw$recur)){
var G__22000 = state_21989;
state_21989 = G__22000;
continue;
} else {
return ret_value__15683__auto__;
}
break;
}
});
andel$core$state_machine__15682__auto__ = function(state_21989){
switch(arguments.length){
case 0:
return andel$core$state_machine__15682__auto____0.call(this);
case 1:
return andel$core$state_machine__15682__auto____1.call(this,state_21989);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
andel$core$state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$0 = andel$core$state_machine__15682__auto____0;
andel$core$state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$1 = andel$core$state_machine__15682__auto____1;
return andel$core$state_machine__15682__auto__;
})()
;})(switch__15681__auto__,c__15783__auto___21998,promise))
})();
var state__15785__auto__ = (function (){var statearr_21997 = (f__15784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15784__auto__.cljs$core$IFn$_invoke$arity$0() : f__15784__auto__.call(null));
(statearr_21997[(6)] = c__15783__auto___21998);

return statearr_21997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15785__auto__);
});})(c__15783__auto___21998,promise))
);


return promise;
})();
}
andel.core.init_BANG_ = (function andel$core$init_BANG_(){
var c__15783__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15783__auto__){
return (function (){
var f__15784__auto__ = (function (){var switch__15681__auto__ = ((function (c__15783__auto__){
return (function (state_22007){
var state_val_22008 = (state_22007[(1)]);
if((state_val_22008 === (1))){
var state_22007__$1 = state_22007;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22007__$1,(2),andel.core.editor_state_promise);
} else {
if((state_val_22008 === (2))){
var inst_22002 = (state_22007[(2)]);
var inst_22003 = document.getElementById("app");
var inst_22004 = andel.editor.editor_view(inst_22002);
var inst_22005 = ReactDOM.render(inst_22004,inst_22003);
var state_22007__$1 = state_22007;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22007__$1,inst_22005);
} else {
return null;
}
}
});})(c__15783__auto__))
;
return ((function (switch__15681__auto__,c__15783__auto__){
return (function() {
var andel$core$init_BANG__$_state_machine__15682__auto__ = null;
var andel$core$init_BANG__$_state_machine__15682__auto____0 = (function (){
var statearr_22009 = [null,null,null,null,null,null,null];
(statearr_22009[(0)] = andel$core$init_BANG__$_state_machine__15682__auto__);

(statearr_22009[(1)] = (1));

return statearr_22009;
});
var andel$core$init_BANG__$_state_machine__15682__auto____1 = (function (state_22007){
while(true){
var ret_value__15683__auto__ = (function (){try{while(true){
var result__15684__auto__ = switch__15681__auto__(state_22007);
if(cljs.core.keyword_identical_QMARK_(result__15684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15684__auto__;
}
break;
}
}catch (e22010){if((e22010 instanceof Object)){
var ex__15685__auto__ = e22010;
var statearr_22011_22013 = state_22007;
(statearr_22011_22013[(5)] = ex__15685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22007);

return cljs.core.cst$kw$recur;
} else {
throw e22010;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15683__auto__,cljs.core.cst$kw$recur)){
var G__22014 = state_22007;
state_22007 = G__22014;
continue;
} else {
return ret_value__15683__auto__;
}
break;
}
});
andel$core$init_BANG__$_state_machine__15682__auto__ = function(state_22007){
switch(arguments.length){
case 0:
return andel$core$init_BANG__$_state_machine__15682__auto____0.call(this);
case 1:
return andel$core$init_BANG__$_state_machine__15682__auto____1.call(this,state_22007);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
andel$core$init_BANG__$_state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$0 = andel$core$init_BANG__$_state_machine__15682__auto____0;
andel$core$init_BANG__$_state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$1 = andel$core$init_BANG__$_state_machine__15682__auto____1;
return andel$core$init_BANG__$_state_machine__15682__auto__;
})()
;})(switch__15681__auto__,c__15783__auto__))
})();
var state__15785__auto__ = (function (){var statearr_22012 = (f__15784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15784__auto__.cljs$core$IFn$_invoke$arity$0() : f__15784__auto__.call(null));
(statearr_22012[(6)] = c__15783__auto__);

return statearr_22012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15785__auto__);
});})(c__15783__auto__))
);

return c__15783__auto__;
});
