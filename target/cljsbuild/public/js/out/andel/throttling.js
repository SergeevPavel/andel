// Compiled by ClojureScript 1.9.671 {}
goog.provide('andel.throttling');
goog.require('cljs.core');
goog.require('cljs.core.async');
andel.throttling.get_time_BANG_ = (function andel$throttling$get_time_BANG_(){
return Date.now();
});
andel.throttling.throttle = (function andel$throttling$throttle(f,ms){

var _STAR_last_call_time = cljs.core.atom.call(null,andel.throttling.get_time_BANG_.call(null));
return ((function (_STAR_last_call_time){
return (function() { 
var G__68340__delegate = function (args){
if(((andel.throttling.get_time_BANG_.call(null) - cljs.core.deref.call(null,_STAR_last_call_time)) >= ms)){
var res = cljs.core.apply.call(null,f,args);
cljs.core.reset_BANG_.call(null,_STAR_last_call_time,andel.throttling.get_time_BANG_.call(null));

return res;
} else {
return null;
}
};
var G__68340 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__68341__i = 0, G__68341__a = new Array(arguments.length -  0);
while (G__68341__i < G__68341__a.length) {G__68341__a[G__68341__i] = arguments[G__68341__i + 0]; ++G__68341__i;}
  args = new cljs.core.IndexedSeq(G__68341__a,0,null);
} 
return G__68340__delegate.call(this,args);};
G__68340.cljs$lang$maxFixedArity = 0;
G__68340.cljs$lang$applyTo = (function (arglist__68342){
var args = cljs.core.seq(arglist__68342);
return G__68340__delegate(args);
});
G__68340.cljs$core$IFn$_invoke$arity$variadic = G__68340__delegate;
return G__68340;
})()
;
;})(_STAR_last_call_time))
});
andel.throttling.debounce = (function andel$throttling$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__44106__auto___68420 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44106__auto___68420,out){
return (function (){
var f__44107__auto__ = (function (){var switch__44016__auto__ = ((function (c__44106__auto___68420,out){
return (function (state_68391){
var state_val_68392 = (state_68391[(1)]);
if((state_val_68392 === (7))){
var inst_68351 = (state_68391[(2)]);
var state_68391__$1 = state_68391;
var statearr_68393_68421 = state_68391__$1;
(statearr_68393_68421[(2)] = inst_68351);

(statearr_68393_68421[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68392 === (1))){
var inst_68343 = null;
var state_68391__$1 = (function (){var statearr_68394 = state_68391;
(statearr_68394[(7)] = inst_68343);

return statearr_68394;
})();
var statearr_68395_68422 = state_68391__$1;
(statearr_68395_68422[(2)] = null);

(statearr_68395_68422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68392 === (4))){
var state_68391__$1 = state_68391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68391__$1,(7),in$);
} else {
if((state_val_68392 === (15))){
var inst_68385 = (state_68391[(2)]);
var state_68391__$1 = state_68391;
var statearr_68396_68423 = state_68391__$1;
(statearr_68396_68423[(2)] = inst_68385);

(statearr_68396_68423[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68392 === (13))){
var inst_68361 = (state_68391[(8)]);
var state_68391__$1 = state_68391;
if(cljs.core.truth_(inst_68361)){
var statearr_68397_68424 = state_68391__$1;
(statearr_68397_68424[(1)] = (16));

} else {
var statearr_68398_68425 = state_68391__$1;
(statearr_68398_68425[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68392 === (6))){
var inst_68355 = (state_68391[(9)]);
var inst_68354 = (state_68391[(2)]);
var inst_68355__$1 = cljs.core.async.timeout.call(null,ms);
var inst_68356 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_68357 = [in$,inst_68355__$1];
var inst_68358 = (new cljs.core.PersistentVector(null,2,(5),inst_68356,inst_68357,null));
var state_68391__$1 = (function (){var statearr_68399 = state_68391;
(statearr_68399[(9)] = inst_68355__$1);

(statearr_68399[(10)] = inst_68354);

return statearr_68399;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_68391__$1,(8),inst_68358);
} else {
if((state_val_68392 === (17))){
var inst_68377 = cljs.core.async.close_BANG_.call(null,out);
var state_68391__$1 = state_68391;
var statearr_68400_68426 = state_68391__$1;
(statearr_68400_68426[(2)] = inst_68377);

(statearr_68400_68426[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68392 === (3))){
var inst_68389 = (state_68391[(2)]);
var state_68391__$1 = state_68391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68391__$1,inst_68389);
} else {
if((state_val_68392 === (12))){
var inst_68369 = (state_68391[(2)]);
var inst_68343 = null;
var state_68391__$1 = (function (){var statearr_68401 = state_68391;
(statearr_68401[(11)] = inst_68369);

(statearr_68401[(7)] = inst_68343);

return statearr_68401;
})();
var statearr_68402_68427 = state_68391__$1;
(statearr_68402_68427[(2)] = null);

(statearr_68402_68427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68392 === (2))){
var inst_68343 = (state_68391[(7)]);
var inst_68348 = (inst_68343 == null);
var state_68391__$1 = state_68391;
if(cljs.core.truth_(inst_68348)){
var statearr_68403_68428 = state_68391__$1;
(statearr_68403_68428[(1)] = (4));

} else {
var statearr_68404_68429 = state_68391__$1;
(statearr_68404_68429[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68392 === (11))){
var inst_68387 = (state_68391[(2)]);
var state_68391__$1 = state_68391;
var statearr_68405_68430 = state_68391__$1;
(statearr_68405_68430[(2)] = inst_68387);

(statearr_68405_68430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68392 === (9))){
var inst_68354 = (state_68391[(10)]);
var state_68391__$1 = state_68391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68391__$1,(12),out,inst_68354);
} else {
if((state_val_68392 === (5))){
var inst_68343 = (state_68391[(7)]);
var state_68391__$1 = state_68391;
var statearr_68406_68431 = state_68391__$1;
(statearr_68406_68431[(2)] = inst_68343);

(statearr_68406_68431[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68392 === (14))){
var inst_68362 = (state_68391[(12)]);
var inst_68381 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_68362)].join('');
var inst_68382 = (new Error(inst_68381));
var inst_68383 = (function(){throw inst_68382})();
var state_68391__$1 = state_68391;
var statearr_68407_68432 = state_68391__$1;
(statearr_68407_68432[(2)] = inst_68383);

(statearr_68407_68432[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68392 === (16))){
var inst_68361 = (state_68391[(8)]);
var inst_68343 = inst_68361;
var state_68391__$1 = (function (){var statearr_68408 = state_68391;
(statearr_68408[(7)] = inst_68343);

return statearr_68408;
})();
var statearr_68409_68433 = state_68391__$1;
(statearr_68409_68433[(2)] = null);

(statearr_68409_68433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68392 === (10))){
var inst_68362 = (state_68391[(12)]);
var inst_68372 = cljs.core._EQ_.call(null,in$,inst_68362);
var state_68391__$1 = state_68391;
if(inst_68372){
var statearr_68410_68434 = state_68391__$1;
(statearr_68410_68434[(1)] = (13));

} else {
var statearr_68411_68435 = state_68391__$1;
(statearr_68411_68435[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68392 === (18))){
var inst_68379 = (state_68391[(2)]);
var state_68391__$1 = state_68391;
var statearr_68412_68436 = state_68391__$1;
(statearr_68412_68436[(2)] = inst_68379);

(statearr_68412_68436[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68392 === (8))){
var inst_68355 = (state_68391[(9)]);
var inst_68362 = (state_68391[(12)]);
var inst_68360 = (state_68391[(2)]);
var inst_68361 = cljs.core.nth.call(null,inst_68360,(0),null);
var inst_68362__$1 = cljs.core.nth.call(null,inst_68360,(1),null);
var inst_68366 = cljs.core._EQ_.call(null,inst_68355,inst_68362__$1);
var state_68391__$1 = (function (){var statearr_68413 = state_68391;
(statearr_68413[(8)] = inst_68361);

(statearr_68413[(12)] = inst_68362__$1);

return statearr_68413;
})();
if(inst_68366){
var statearr_68414_68437 = state_68391__$1;
(statearr_68414_68437[(1)] = (9));

} else {
var statearr_68415_68438 = state_68391__$1;
(statearr_68415_68438[(1)] = (10));

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
});})(c__44106__auto___68420,out))
;
return ((function (switch__44016__auto__,c__44106__auto___68420,out){
return (function() {
var andel$throttling$debounce_$_state_machine__44017__auto__ = null;
var andel$throttling$debounce_$_state_machine__44017__auto____0 = (function (){
var statearr_68416 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68416[(0)] = andel$throttling$debounce_$_state_machine__44017__auto__);

(statearr_68416[(1)] = (1));

return statearr_68416;
});
var andel$throttling$debounce_$_state_machine__44017__auto____1 = (function (state_68391){
while(true){
var ret_value__44018__auto__ = (function (){try{while(true){
var result__44019__auto__ = switch__44016__auto__.call(null,state_68391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44019__auto__;
}
break;
}
}catch (e68417){if((e68417 instanceof Object)){
var ex__44020__auto__ = e68417;
var statearr_68418_68439 = state_68391;
(statearr_68418_68439[(5)] = ex__44020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68440 = state_68391;
state_68391 = G__68440;
continue;
} else {
return ret_value__44018__auto__;
}
break;
}
});
andel$throttling$debounce_$_state_machine__44017__auto__ = function(state_68391){
switch(arguments.length){
case 0:
return andel$throttling$debounce_$_state_machine__44017__auto____0.call(this);
case 1:
return andel$throttling$debounce_$_state_machine__44017__auto____1.call(this,state_68391);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
andel$throttling$debounce_$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$0 = andel$throttling$debounce_$_state_machine__44017__auto____0;
andel$throttling$debounce_$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$1 = andel$throttling$debounce_$_state_machine__44017__auto____1;
return andel$throttling$debounce_$_state_machine__44017__auto__;
})()
;})(switch__44016__auto__,c__44106__auto___68420,out))
})();
var state__44108__auto__ = (function (){var statearr_68419 = f__44107__auto__.call(null);
(statearr_68419[(6)] = c__44106__auto___68420);

return statearr_68419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44108__auto__);
});})(c__44106__auto___68420,out))
);


return out;
});
andel.throttling.debounce_wrapper = (function andel$throttling$debounce_wrapper(f,ms){

var in_args = cljs.core.async.chan.call(null);
var out_args = andel.throttling.debounce.call(null,in_args,ms);
var c__44106__auto___68471 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44106__auto___68471,in_args,out_args){
return (function (){
var f__44107__auto__ = (function (){var switch__44016__auto__ = ((function (c__44106__auto___68471,in_args,out_args){
return (function (state_68456){
var state_val_68457 = (state_68456[(1)]);
if((state_val_68457 === (1))){
var state_68456__$1 = state_68456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68456__$1,(2),out_args);
} else {
if((state_val_68457 === (2))){
var inst_68442 = (state_68456[(2)]);
var inst_68443 = inst_68442;
var state_68456__$1 = (function (){var statearr_68458 = state_68456;
(statearr_68458[(7)] = inst_68443);

return statearr_68458;
})();
var statearr_68459_68472 = state_68456__$1;
(statearr_68459_68472[(2)] = null);

(statearr_68459_68472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68457 === (3))){
var inst_68443 = (state_68456[(7)]);
var state_68456__$1 = state_68456;
if(cljs.core.truth_(inst_68443)){
var statearr_68460_68473 = state_68456__$1;
(statearr_68460_68473[(1)] = (5));

} else {
var statearr_68461_68474 = state_68456__$1;
(statearr_68461_68474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68457 === (4))){
var inst_68454 = (state_68456[(2)]);
var state_68456__$1 = state_68456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68456__$1,inst_68454);
} else {
if((state_val_68457 === (5))){
var inst_68443 = (state_68456[(7)]);
var inst_68446 = cljs.core.apply.call(null,f,inst_68443);
var state_68456__$1 = (function (){var statearr_68462 = state_68456;
(statearr_68462[(8)] = inst_68446);

return statearr_68462;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68456__$1,(8),out_args);
} else {
if((state_val_68457 === (6))){
var state_68456__$1 = state_68456;
var statearr_68463_68475 = state_68456__$1;
(statearr_68463_68475[(2)] = null);

(statearr_68463_68475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68457 === (7))){
var inst_68452 = (state_68456[(2)]);
var state_68456__$1 = state_68456;
var statearr_68464_68476 = state_68456__$1;
(statearr_68464_68476[(2)] = inst_68452);

(statearr_68464_68476[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68457 === (8))){
var inst_68448 = (state_68456[(2)]);
var inst_68443 = inst_68448;
var state_68456__$1 = (function (){var statearr_68465 = state_68456;
(statearr_68465[(7)] = inst_68443);

return statearr_68465;
})();
var statearr_68466_68477 = state_68456__$1;
(statearr_68466_68477[(2)] = null);

(statearr_68466_68477[(1)] = (3));


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
});})(c__44106__auto___68471,in_args,out_args))
;
return ((function (switch__44016__auto__,c__44106__auto___68471,in_args,out_args){
return (function() {
var andel$throttling$debounce_wrapper_$_state_machine__44017__auto__ = null;
var andel$throttling$debounce_wrapper_$_state_machine__44017__auto____0 = (function (){
var statearr_68467 = [null,null,null,null,null,null,null,null,null];
(statearr_68467[(0)] = andel$throttling$debounce_wrapper_$_state_machine__44017__auto__);

(statearr_68467[(1)] = (1));

return statearr_68467;
});
var andel$throttling$debounce_wrapper_$_state_machine__44017__auto____1 = (function (state_68456){
while(true){
var ret_value__44018__auto__ = (function (){try{while(true){
var result__44019__auto__ = switch__44016__auto__.call(null,state_68456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44019__auto__;
}
break;
}
}catch (e68468){if((e68468 instanceof Object)){
var ex__44020__auto__ = e68468;
var statearr_68469_68478 = state_68456;
(statearr_68469_68478[(5)] = ex__44020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68479 = state_68456;
state_68456 = G__68479;
continue;
} else {
return ret_value__44018__auto__;
}
break;
}
});
andel$throttling$debounce_wrapper_$_state_machine__44017__auto__ = function(state_68456){
switch(arguments.length){
case 0:
return andel$throttling$debounce_wrapper_$_state_machine__44017__auto____0.call(this);
case 1:
return andel$throttling$debounce_wrapper_$_state_machine__44017__auto____1.call(this,state_68456);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
andel$throttling$debounce_wrapper_$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$0 = andel$throttling$debounce_wrapper_$_state_machine__44017__auto____0;
andel$throttling$debounce_wrapper_$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$1 = andel$throttling$debounce_wrapper_$_state_machine__44017__auto____1;
return andel$throttling$debounce_wrapper_$_state_machine__44017__auto__;
})()
;})(switch__44016__auto__,c__44106__auto___68471,in_args,out_args))
})();
var state__44108__auto__ = (function (){var statearr_68470 = f__44107__auto__.call(null);
(statearr_68470[(6)] = c__44106__auto___68471);

return statearr_68470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44108__auto__);
});})(c__44106__auto___68471,in_args,out_args))
);


return ((function (in_args,out_args){
return (function() { 
var G__68480__delegate = function (args){
cljs.core.async.put_BANG_.call(null,in_args,args);

return null;
};
var G__68480 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__68481__i = 0, G__68481__a = new Array(arguments.length -  0);
while (G__68481__i < G__68481__a.length) {G__68481__a[G__68481__i] = arguments[G__68481__i + 0]; ++G__68481__i;}
  args = new cljs.core.IndexedSeq(G__68481__a,0,null);
} 
return G__68480__delegate.call(this,args);};
G__68480.cljs$lang$maxFixedArity = 0;
G__68480.cljs$lang$applyTo = (function (arglist__68482){
var args = cljs.core.seq(arglist__68482);
return G__68480__delegate(args);
});
G__68480.cljs$core$IFn$_invoke$arity$variadic = G__68480__delegate;
return G__68480;
})()
;
;})(in_args,out_args))
});

//# sourceMappingURL=throttling.js.map?rel=1504289164619