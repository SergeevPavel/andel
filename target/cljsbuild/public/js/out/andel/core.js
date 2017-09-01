// Compiled by ClojureScript 1.9.671 {}
goog.provide('andel.core');
goog.require('cljs.core');
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
f.call(null);

evt.stopPropagation();

return evt.preventDefault();
});
});
var bind_function_BANG_ = (function() { 
var andel$core$bind_keymap_BANG__$_bind_function_BANG___delegate = function (key,f,args){
return andel.keybind.bind_BANG_.call(null,key,new cljs.core.Keyword(null,"global","global",93595047),capture.call(null,(function (){
return cljs.core.swap_BANG_.call(null,_STAR_editor_state,(function (s){
return cljs.core.apply.call(null,f,s,args);
}));
})));
};
var andel$core$bind_keymap_BANG__$_bind_function_BANG_ = function (key,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__65048__i = 0, G__65048__a = new Array(arguments.length -  2);
while (G__65048__i < G__65048__a.length) {G__65048__a[G__65048__i] = arguments[G__65048__i + 2]; ++G__65048__i;}
  args = new cljs.core.IndexedSeq(G__65048__a,0,null);
} 
return andel$core$bind_keymap_BANG__$_bind_function_BANG___delegate.call(this,key,f,args);};
andel$core$bind_keymap_BANG__$_bind_function_BANG_.cljs$lang$maxFixedArity = 2;
andel$core$bind_keymap_BANG__$_bind_function_BANG_.cljs$lang$applyTo = (function (arglist__65049){
var key = cljs.core.first(arglist__65049);
arglist__65049 = cljs.core.next(arglist__65049);
var f = cljs.core.first(arglist__65049);
var args = cljs.core.rest(arglist__65049);
return andel$core$bind_keymap_BANG__$_bind_function_BANG___delegate(key,f,args);
});
andel$core$bind_keymap_BANG__$_bind_function_BANG_.cljs$core$IFn$_invoke$arity$variadic = andel$core$bind_keymap_BANG__$_bind_function_BANG___delegate;
return andel$core$bind_keymap_BANG__$_bind_function_BANG_;
})()
;
window.addEventListener("keydown",andel.keybind.dispatcher.call(null),true);

bind_function_BANG_.call(null,"backspace",andel.controller.backspace);

bind_function_BANG_.call(null,"delete",andel.controller.delete$);

bind_function_BANG_.call(null,"pgup",andel.controller.pg_move,new cljs.core.Keyword(null,"up","up",-269712113),false);

bind_function_BANG_.call(null,"pgdown",andel.controller.pg_move,new cljs.core.Keyword(null,"down","down",1565245570),false);

bind_function_BANG_.call(null,"shift-pgup",andel.controller.pg_move,new cljs.core.Keyword(null,"up","up",-269712113),true);

bind_function_BANG_.call(null,"shift-pgdown",andel.controller.pg_move,new cljs.core.Keyword(null,"down","down",1565245570),true);

bind_function_BANG_.call(null,"home",andel.controller.home,false);

bind_function_BANG_.call(null,"shift-home",andel.controller.home,true);

bind_function_BANG_.call(null,"end",andel.controller.end,false);

bind_function_BANG_.call(null,"shift-end",andel.controller.end,true);

bind_function_BANG_.call(null,"tab",(function (state){
return andel.controller.type_in.call(null,state,"    ");
}));

bind_function_BANG_.call(null,"left",andel.controller.move_caret,new cljs.core.Keyword(null,"left","left",-399115937),false);

bind_function_BANG_.call(null,"right",andel.controller.move_caret,new cljs.core.Keyword(null,"right","right",-452581833),false);

bind_function_BANG_.call(null,"up",andel.controller.move_caret,new cljs.core.Keyword(null,"up","up",-269712113),false);

bind_function_BANG_.call(null,"down",andel.controller.move_caret,new cljs.core.Keyword(null,"down","down",1565245570),false);

bind_function_BANG_.call(null,"shift-left",andel.controller.move_caret,new cljs.core.Keyword(null,"left","left",-399115937),true);

bind_function_BANG_.call(null,"shift-right",andel.controller.move_caret,new cljs.core.Keyword(null,"right","right",-452581833),true);

bind_function_BANG_.call(null,"shift-up",andel.controller.move_caret,new cljs.core.Keyword(null,"up","up",-269712113),true);

bind_function_BANG_.call(null,"shift-down",andel.controller.move_caret,new cljs.core.Keyword(null,"down","down",1565245570),true);

bind_function_BANG_.call(null,"esc",andel.controller.drop_selection_on_esc);

return bind_function_BANG_.call(null,"enter",andel.controller.on_enter);
});
andel.core.create_marker = (function andel$core$create_marker(proto_marker){
var class_by_keys = (function andel$core$create_marker_$_class_by_keys(ks,style){
var style__$1 = cljs.core.select_keys.call(null,style,ks);
if(cljs.core.truth_(cljs.core.not_empty.call(null,style__$1))){
return andel.styles.style__GT_class.call(null,style__$1);
} else {
return null;
}
});
var classes_by_keys = (function andel$core$create_marker_$_classes_by_keys(ks,styles){
var classes = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,cljs.core.partial.call(null,class_by_keys,ks),styles));
if(cljs.core.truth_(cljs.core.not_empty.call(null,classes))){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes));
} else {
return null;
}
});
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,andel.intervals.map__GT_Marker.call(null,proto_marker),new cljs.core.Keyword(null,"foreground","foreground",499022036),classes_by_keys.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"font-style","font-style",-773672352)], null),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(proto_marker))),new cljs.core.Keyword(null,"background","background",-863952629),classes_by_keys.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"border-bottom-style","border-bottom-style",925668932),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)], null),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(proto_marker)));
});
if(typeof andel.core.editor_state_promise !== 'undefined'){
} else {
andel.core.editor_state_promise = (function (){var promise = cljs.core.async.promise_chan.call(null);
var c__44106__auto___65079 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44106__auto___65079,promise){
return (function (){
var f__44107__auto__ = (function (){var switch__44016__auto__ = ((function (c__44106__auto___65079,promise){
return (function (state_65070){
var state_val_65071 = (state_65070[(1)]);
if((state_val_65071 === (1))){
var inst_65050 = andel.editor.make_editor_state.call(null);
var state_65070__$1 = state_65070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65070__$1,(2),inst_65050);
} else {
if((state_val_65071 === (2))){
var inst_65052 = (state_65070[(2)]);
var inst_65053 = cljs_http.client.get.call(null,"resources/public/EditorImpl.java");
var state_65070__$1 = (function (){var statearr_65072 = state_65070;
(statearr_65072[(7)] = inst_65052);

return statearr_65072;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65070__$1,(3),inst_65053);
} else {
if((state_val_65071 === (3))){
var inst_65055 = (state_65070[(2)]);
var inst_65056 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_65055);
var inst_65057 = cljs_http.client.get.call(null,"resources/public/markup.txt");
var state_65070__$1 = (function (){var statearr_65073 = state_65070;
(statearr_65073[(8)] = inst_65056);

return statearr_65073;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65070__$1,(4),inst_65057);
} else {
if((state_val_65071 === (4))){
var inst_65056 = (state_65070[(8)]);
var inst_65052 = (state_65070[(7)]);
var inst_65059 = (state_65070[(2)]);
var inst_65060 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_65059);
var inst_65061 = cljs.tools.reader.edn.read_string.call(null,inst_65060);
var inst_65062 = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"from","from",1815293044),inst_65061);
var inst_65063 = cljs.core.mapv.call(null,andel.core.create_marker,inst_65062);
var inst_65064 = cljs.core.swap_BANG_.call(null,inst_65052,andel.controller.set_text,inst_65056);
var inst_65065 = cljs.core.swap_BANG_.call(null,inst_65052,andel.controller.add_markup,inst_65063);
var inst_65066 = andel.core.bind_keymap_BANG_.call(null,inst_65052);
var state_65070__$1 = (function (){var statearr_65074 = state_65070;
(statearr_65074[(9)] = inst_65064);

(statearr_65074[(10)] = inst_65066);

(statearr_65074[(11)] = inst_65065);

return statearr_65074;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65070__$1,(5),promise,inst_65052);
} else {
if((state_val_65071 === (5))){
var inst_65068 = (state_65070[(2)]);
var state_65070__$1 = state_65070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65070__$1,inst_65068);
} else {
return null;
}
}
}
}
}
});})(c__44106__auto___65079,promise))
;
return ((function (switch__44016__auto__,c__44106__auto___65079,promise){
return (function() {
var andel$core$state_machine__44017__auto__ = null;
var andel$core$state_machine__44017__auto____0 = (function (){
var statearr_65075 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65075[(0)] = andel$core$state_machine__44017__auto__);

(statearr_65075[(1)] = (1));

return statearr_65075;
});
var andel$core$state_machine__44017__auto____1 = (function (state_65070){
while(true){
var ret_value__44018__auto__ = (function (){try{while(true){
var result__44019__auto__ = switch__44016__auto__.call(null,state_65070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44019__auto__;
}
break;
}
}catch (e65076){if((e65076 instanceof Object)){
var ex__44020__auto__ = e65076;
var statearr_65077_65080 = state_65070;
(statearr_65077_65080[(5)] = ex__44020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65081 = state_65070;
state_65070 = G__65081;
continue;
} else {
return ret_value__44018__auto__;
}
break;
}
});
andel$core$state_machine__44017__auto__ = function(state_65070){
switch(arguments.length){
case 0:
return andel$core$state_machine__44017__auto____0.call(this);
case 1:
return andel$core$state_machine__44017__auto____1.call(this,state_65070);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
andel$core$state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$0 = andel$core$state_machine__44017__auto____0;
andel$core$state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$1 = andel$core$state_machine__44017__auto____1;
return andel$core$state_machine__44017__auto__;
})()
;})(switch__44016__auto__,c__44106__auto___65079,promise))
})();
var state__44108__auto__ = (function (){var statearr_65078 = f__44107__auto__.call(null);
(statearr_65078[(6)] = c__44106__auto___65079);

return statearr_65078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44108__auto__);
});})(c__44106__auto___65079,promise))
);


return promise;
})();
}
andel.core.init_BANG_ = (function andel$core$init_BANG_(){
var c__44106__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44106__auto__){
return (function (){
var f__44107__auto__ = (function (){var switch__44016__auto__ = ((function (c__44106__auto__){
return (function (state_65088){
var state_val_65089 = (state_65088[(1)]);
if((state_val_65089 === (1))){
var state_65088__$1 = state_65088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65088__$1,(2),andel.core.editor_state_promise);
} else {
if((state_val_65089 === (2))){
var inst_65083 = (state_65088[(2)]);
var inst_65084 = document.getElementById("app");
var inst_65085 = andel.editor.editor_view.call(null,inst_65083);
var inst_65086 = ReactDOM.render(inst_65085,inst_65084);
var state_65088__$1 = state_65088;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65088__$1,inst_65086);
} else {
return null;
}
}
});})(c__44106__auto__))
;
return ((function (switch__44016__auto__,c__44106__auto__){
return (function() {
var andel$core$init_BANG__$_state_machine__44017__auto__ = null;
var andel$core$init_BANG__$_state_machine__44017__auto____0 = (function (){
var statearr_65090 = [null,null,null,null,null,null,null];
(statearr_65090[(0)] = andel$core$init_BANG__$_state_machine__44017__auto__);

(statearr_65090[(1)] = (1));

return statearr_65090;
});
var andel$core$init_BANG__$_state_machine__44017__auto____1 = (function (state_65088){
while(true){
var ret_value__44018__auto__ = (function (){try{while(true){
var result__44019__auto__ = switch__44016__auto__.call(null,state_65088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44019__auto__;
}
break;
}
}catch (e65091){if((e65091 instanceof Object)){
var ex__44020__auto__ = e65091;
var statearr_65092_65094 = state_65088;
(statearr_65092_65094[(5)] = ex__44020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65095 = state_65088;
state_65088 = G__65095;
continue;
} else {
return ret_value__44018__auto__;
}
break;
}
});
andel$core$init_BANG__$_state_machine__44017__auto__ = function(state_65088){
switch(arguments.length){
case 0:
return andel$core$init_BANG__$_state_machine__44017__auto____0.call(this);
case 1:
return andel$core$init_BANG__$_state_machine__44017__auto____1.call(this,state_65088);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
andel$core$init_BANG__$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$0 = andel$core$init_BANG__$_state_machine__44017__auto____0;
andel$core$init_BANG__$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$1 = andel$core$init_BANG__$_state_machine__44017__auto____1;
return andel$core$init_BANG__$_state_machine__44017__auto__;
})()
;})(switch__44016__auto__,c__44106__auto__))
})();
var state__44108__auto__ = (function (){var statearr_65093 = f__44107__auto__.call(null);
(statearr_65093[(6)] = c__44106__auto__);

return statearr_65093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44108__auto__);
});})(c__44106__auto__))
);

return c__44106__auto__;
});

//# sourceMappingURL=core.js.map?rel=1504289161222