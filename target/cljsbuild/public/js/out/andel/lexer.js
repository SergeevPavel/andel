// Compiled by ClojureScript 1.9.671 {}
goog.provide('andel.lexer');
goog.require('cljs.core');
goog.require('cljs.core.async');
andel.lexer.modespec__GT_mode = (function andel$lexer$modespec__GT_mode(modespec){
return (CodeMirror["getMode"])(({"indentUnit": (2)}),modespec);
});
andel.lexer.copy_state = (function andel$lexer$copy_state(mode,state){
var copy_value = (function andel$lexer$copy_state_$_copy_value(v){
if(cljs.core.array_QMARK_.call(null,v)){
return v.concat([]);
} else {
return v;
}
});
var default_copy_state = (function andel$lexer$copy_state_$_default_copy_state(state__$1){
var js_obj = ({});
var seq__64163_64167 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,state__$1));
var chunk__64164_64168 = null;
var count__64165_64169 = (0);
var i__64166_64170 = (0);
while(true){
if((i__64166_64170 < count__64165_64169)){
var k_64171 = cljs.core._nth.call(null,chunk__64164_64168,i__64166_64170);
(js_obj[k_64171] = copy_value.call(null,(state__$1[k_64171])));

var G__64172 = seq__64163_64167;
var G__64173 = chunk__64164_64168;
var G__64174 = count__64165_64169;
var G__64175 = (i__64166_64170 + (1));
seq__64163_64167 = G__64172;
chunk__64164_64168 = G__64173;
count__64165_64169 = G__64174;
i__64166_64170 = G__64175;
continue;
} else {
var temp__5278__auto___64176 = cljs.core.seq.call(null,seq__64163_64167);
if(temp__5278__auto___64176){
var seq__64163_64177__$1 = temp__5278__auto___64176;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64163_64177__$1)){
var c__41976__auto___64178 = cljs.core.chunk_first.call(null,seq__64163_64177__$1);
var G__64179 = cljs.core.chunk_rest.call(null,seq__64163_64177__$1);
var G__64180 = c__41976__auto___64178;
var G__64181 = cljs.core.count.call(null,c__41976__auto___64178);
var G__64182 = (0);
seq__64163_64167 = G__64179;
chunk__64164_64168 = G__64180;
count__64165_64169 = G__64181;
i__64166_64170 = G__64182;
continue;
} else {
var k_64183 = cljs.core.first.call(null,seq__64163_64177__$1);
(js_obj[k_64183] = copy_value.call(null,(state__$1[k_64183])));

var G__64184 = cljs.core.next.call(null,seq__64163_64177__$1);
var G__64185 = null;
var G__64186 = (0);
var G__64187 = (0);
seq__64163_64167 = G__64184;
chunk__64164_64168 = G__64185;
count__64165_64169 = G__64186;
i__64166_64170 = G__64187;
continue;
}
} else {
}
}
break;
}

return js_obj;
});
if((state === true) || ((state == null))){
return state;
} else {
return (function (){var or__41064__auto__ = mode.copyState;
if(cljs.core.truth_(or__41064__auto__)){
return or__41064__auto__;
} else {
return default_copy_state;
}
})().call(null,state);
}
});
andel.lexer.style__GT_keyword = (function andel$lexer$style__GT_keyword(style){
var G__64188 = style;
if((G__64188 == null)){
return null;
} else {
return cljs.core.keyword.call(null,G__64188);
}
});
andel.lexer.lex = (function andel$lexer$lex(modespec,text,initial_state){
var mode = andel.lexer.modespec__GT_mode.call(null,modespec);
var tokens = [];
var _STAR_state = cljs.core.atom.call(null,initial_state);
(CodeMirror["runMode"])(text,modespec,((function (mode,tokens,_STAR_state){
return (function (text__$1,style,line_number,offset,state){
tokens.push(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text__$1.length,andel.lexer.style__GT_keyword.call(null,style)], null));

return cljs.core.reset_BANG_.call(null,_STAR_state,state);
});})(mode,tokens,_STAR_state))
,({"state": andel.lexer.copy_state.call(null,mode,initial_state)}));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tokens","tokens",-818939304),cljs.core.vec.call(null,tokens),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.deref.call(null,_STAR_state)], null);
});
andel.lexer.submit_request_BANG_ = (function andel$lexer$submit_request_BANG_(p__64189,p__64190){
var map__64191 = p__64189;
var map__64191__$1 = ((((!((map__64191 == null)))?((((map__64191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64191.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64191):map__64191);
var worker = map__64191__$1;
var input = cljs.core.get.call(null,map__64191__$1,new cljs.core.Keyword(null,"input","input",556931961));
var map__64192 = p__64190;
var map__64192__$1 = ((((!((map__64192 == null)))?((((map__64192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64192.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64192):map__64192);
var req = map__64192__$1;
var index = cljs.core.get.call(null,map__64192__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var text = cljs.core.get.call(null,map__64192__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return cljs.core.async.put_BANG_.call(null,input,req);
});
andel.lexer.new_lexer_worker = (function andel$lexer$new_lexer_worker(modespec){
var input = cljs.core.async.chan.call(null);
var output = cljs.core.async.chan.call(null);
var states = [null];
var c__44106__auto___64304 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44106__auto___64304,input,output,states){
return (function (){
var f__44107__auto__ = (function (){var switch__44016__auto__ = ((function (c__44106__auto___64304,input,output,states){
return (function (state_64264){
var state_val_64265 = (state_64264[(1)]);
if((state_val_64265 === (7))){
var inst_64260 = (state_64264[(2)]);
var state_64264__$1 = state_64264;
var statearr_64266_64305 = state_64264__$1;
(statearr_64266_64305[(2)] = inst_64260);

(statearr_64266_64305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64265 === (20))){
var state_64264__$1 = state_64264;
var statearr_64267_64306 = state_64264__$1;
(statearr_64267_64306[(2)] = true);

(statearr_64267_64306[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64265 === (1))){
var state_64264__$1 = state_64264;
var statearr_64268_64307 = state_64264__$1;
(statearr_64268_64307[(2)] = null);

(statearr_64268_64307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64265 === (24))){
var inst_64225 = (state_64264[(7)]);
var state_64264__$1 = state_64264;
var statearr_64269_64308 = state_64264__$1;
(statearr_64269_64308[(2)] = inst_64225);

(statearr_64269_64308[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64265 === (4))){
var inst_64197 = (state_64264[(8)]);
var inst_64197__$1 = (state_64264[(2)]);
var state_64264__$1 = (function (){var statearr_64270 = state_64264;
(statearr_64270[(8)] = inst_64197__$1);

return statearr_64270;
})();
if(cljs.core.truth_(inst_64197__$1)){
var statearr_64271_64309 = state_64264__$1;
(statearr_64271_64309[(1)] = (5));

} else {
var statearr_64272_64310 = state_64264__$1;
(statearr_64272_64310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64265 === (15))){
var inst_64197 = (state_64264[(8)]);
var state_64264__$1 = state_64264;
var statearr_64273_64311 = state_64264__$1;
(statearr_64273_64311[(2)] = inst_64197);

(statearr_64273_64311[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64265 === (21))){
var state_64264__$1 = state_64264;
var statearr_64274_64312 = state_64264__$1;
(statearr_64274_64312[(2)] = false);

(statearr_64274_64312[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64265 === (13))){
var inst_64212 = (state_64264[(2)]);
var state_64264__$1 = state_64264;
var statearr_64275_64313 = state_64264__$1;
(statearr_64275_64313[(2)] = inst_64212);

(statearr_64275_64313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64265 === (22))){
var inst_64238 = (state_64264[(2)]);
var state_64264__$1 = state_64264;
var statearr_64276_64314 = state_64264__$1;
(statearr_64276_64314[(2)] = inst_64238);

(statearr_64276_64314[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64265 === (6))){
var state_64264__$1 = state_64264;
var statearr_64277_64315 = state_64264__$1;
(statearr_64277_64315[(2)] = null);

(statearr_64277_64315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64265 === (25))){
var inst_64221 = (state_64264[(9)]);
var inst_64220 = (state_64264[(10)]);
var inst_64246 = (state_64264[(2)]);
var inst_64247 = cljs.core.get.call(null,inst_64246,new cljs.core.Keyword(null,"tokens","tokens",-818939304));
var inst_64248 = cljs.core.get.call(null,inst_64246,new cljs.core.Keyword(null,"state","state",-1988618099));
var inst_64249 = (inst_64221 + (1));
var inst_64250 = states.length;
var inst_64251 = (inst_64250 - inst_64221);
var inst_64252 = states.splice(inst_64249,inst_64251);
var inst_64253 = states.push(inst_64248);
var inst_64254 = cljs.core.assoc.call(null,inst_64220,new cljs.core.Keyword(null,"tokens","tokens",-818939304),inst_64247);
var state_64264__$1 = (function (){var statearr_64278 = state_64264;
(statearr_64278[(11)] = inst_64252);

(statearr_64278[(12)] = inst_64253);

return statearr_64278;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64264__$1,(26),output,inst_64254);
} else {
if((state_val_64265 === (17))){
var inst_64225 = (state_64264[(7)]);
var inst_64230 = inst_64225.cljs$lang$protocol_mask$partition0$;
var inst_64231 = (inst_64230 & (64));
var inst_64232 = inst_64225.cljs$core$ISeq$;
var inst_64233 = (cljs.core.PROTOCOL_SENTINEL === inst_64232);
var inst_64234 = (inst_64231) || (inst_64233);
var state_64264__$1 = state_64264;
if(cljs.core.truth_(inst_64234)){
var statearr_64279_64316 = state_64264__$1;
(statearr_64279_64316[(1)] = (20));

} else {
var statearr_64280_64317 = state_64264__$1;
(statearr_64280_64317[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64265 === (3))){
var inst_64262 = (state_64264[(2)]);
var state_64264__$1 = state_64264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64264__$1,inst_64262);
} else {
if((state_val_64265 === (12))){
var state_64264__$1 = state_64264;
var statearr_64281_64318 = state_64264__$1;
(statearr_64281_64318[(2)] = false);

(statearr_64281_64318[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64265 === (2))){
var state_64264__$1 = state_64264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64264__$1,(4),input);
} else {
if((state_val_64265 === (23))){
var inst_64225 = (state_64264[(7)]);
var inst_64243 = cljs.core.apply.call(null,cljs.core.hash_map,inst_64225);
var state_64264__$1 = state_64264;
var statearr_64282_64319 = state_64264__$1;
(statearr_64282_64319[(2)] = inst_64243);

(statearr_64282_64319[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64265 === (19))){
var inst_64241 = (state_64264[(2)]);
var state_64264__$1 = state_64264;
if(cljs.core.truth_(inst_64241)){
var statearr_64283_64320 = state_64264__$1;
(statearr_64283_64320[(1)] = (23));

} else {
var statearr_64284_64321 = state_64264__$1;
(statearr_64284_64321[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64265 === (11))){
var state_64264__$1 = state_64264;
var statearr_64285_64322 = state_64264__$1;
(statearr_64285_64322[(2)] = true);

(statearr_64285_64322[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64265 === (9))){
var state_64264__$1 = state_64264;
var statearr_64286_64323 = state_64264__$1;
(statearr_64286_64323[(2)] = false);

(statearr_64286_64323[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64265 === (5))){
var inst_64197 = (state_64264[(8)]);
var inst_64201 = (inst_64197 == null);
var inst_64202 = cljs.core.not.call(null,inst_64201);
var state_64264__$1 = state_64264;
if(inst_64202){
var statearr_64287_64324 = state_64264__$1;
(statearr_64287_64324[(1)] = (8));

} else {
var statearr_64288_64325 = state_64264__$1;
(statearr_64288_64325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64265 === (14))){
var inst_64197 = (state_64264[(8)]);
var inst_64217 = cljs.core.apply.call(null,cljs.core.hash_map,inst_64197);
var state_64264__$1 = state_64264;
var statearr_64289_64326 = state_64264__$1;
(statearr_64289_64326[(2)] = inst_64217);

(statearr_64289_64326[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64265 === (26))){
var inst_64256 = (state_64264[(2)]);
var state_64264__$1 = (function (){var statearr_64290 = state_64264;
(statearr_64290[(13)] = inst_64256);

return statearr_64290;
})();
var statearr_64291_64327 = state_64264__$1;
(statearr_64291_64327[(2)] = null);

(statearr_64291_64327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64265 === (16))){
var inst_64225 = (state_64264[(7)]);
var inst_64221 = (state_64264[(9)]);
var inst_64220 = (state_64264[(10)]);
var inst_64220__$1 = (state_64264[(2)]);
var inst_64221__$1 = cljs.core.get.call(null,inst_64220__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var inst_64222 = cljs.core.get.call(null,inst_64220__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var inst_64224 = (states[inst_64221__$1]);
var inst_64225__$1 = andel.lexer.lex.call(null,modespec,inst_64222,inst_64224);
var inst_64227 = (inst_64225__$1 == null);
var inst_64228 = cljs.core.not.call(null,inst_64227);
var state_64264__$1 = (function (){var statearr_64292 = state_64264;
(statearr_64292[(7)] = inst_64225__$1);

(statearr_64292[(9)] = inst_64221__$1);

(statearr_64292[(10)] = inst_64220__$1);

return statearr_64292;
})();
if(inst_64228){
var statearr_64293_64328 = state_64264__$1;
(statearr_64293_64328[(1)] = (17));

} else {
var statearr_64294_64329 = state_64264__$1;
(statearr_64294_64329[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64265 === (10))){
var inst_64215 = (state_64264[(2)]);
var state_64264__$1 = state_64264;
if(cljs.core.truth_(inst_64215)){
var statearr_64295_64330 = state_64264__$1;
(statearr_64295_64330[(1)] = (14));

} else {
var statearr_64296_64331 = state_64264__$1;
(statearr_64296_64331[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64265 === (18))){
var state_64264__$1 = state_64264;
var statearr_64297_64332 = state_64264__$1;
(statearr_64297_64332[(2)] = false);

(statearr_64297_64332[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64265 === (8))){
var inst_64197 = (state_64264[(8)]);
var inst_64204 = inst_64197.cljs$lang$protocol_mask$partition0$;
var inst_64205 = (inst_64204 & (64));
var inst_64206 = inst_64197.cljs$core$ISeq$;
var inst_64207 = (cljs.core.PROTOCOL_SENTINEL === inst_64206);
var inst_64208 = (inst_64205) || (inst_64207);
var state_64264__$1 = state_64264;
if(cljs.core.truth_(inst_64208)){
var statearr_64298_64333 = state_64264__$1;
(statearr_64298_64333[(1)] = (11));

} else {
var statearr_64299_64334 = state_64264__$1;
(statearr_64299_64334[(1)] = (12));

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
}
}
}
}
}
}
}
}
});})(c__44106__auto___64304,input,output,states))
;
return ((function (switch__44016__auto__,c__44106__auto___64304,input,output,states){
return (function() {
var andel$lexer$new_lexer_worker_$_state_machine__44017__auto__ = null;
var andel$lexer$new_lexer_worker_$_state_machine__44017__auto____0 = (function (){
var statearr_64300 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64300[(0)] = andel$lexer$new_lexer_worker_$_state_machine__44017__auto__);

(statearr_64300[(1)] = (1));

return statearr_64300;
});
var andel$lexer$new_lexer_worker_$_state_machine__44017__auto____1 = (function (state_64264){
while(true){
var ret_value__44018__auto__ = (function (){try{while(true){
var result__44019__auto__ = switch__44016__auto__.call(null,state_64264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44019__auto__;
}
break;
}
}catch (e64301){if((e64301 instanceof Object)){
var ex__44020__auto__ = e64301;
var statearr_64302_64335 = state_64264;
(statearr_64302_64335[(5)] = ex__44020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64336 = state_64264;
state_64264 = G__64336;
continue;
} else {
return ret_value__44018__auto__;
}
break;
}
});
andel$lexer$new_lexer_worker_$_state_machine__44017__auto__ = function(state_64264){
switch(arguments.length){
case 0:
return andel$lexer$new_lexer_worker_$_state_machine__44017__auto____0.call(this);
case 1:
return andel$lexer$new_lexer_worker_$_state_machine__44017__auto____1.call(this,state_64264);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
andel$lexer$new_lexer_worker_$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$0 = andel$lexer$new_lexer_worker_$_state_machine__44017__auto____0;
andel$lexer$new_lexer_worker_$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$1 = andel$lexer$new_lexer_worker_$_state_machine__44017__auto____1;
return andel$lexer$new_lexer_worker_$_state_machine__44017__auto__;
})()
;})(switch__44016__auto__,c__44106__auto___64304,input,output,states))
})();
var state__44108__auto__ = (function (){var statearr_64303 = f__44107__auto__.call(null);
(statearr_64303[(6)] = c__44106__auto___64304);

return statearr_64303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44108__auto__);
});})(c__44106__auto___64304,input,output,states))
);


return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"input","input",556931961),input,new cljs.core.Keyword(null,"output","output",-1105869043),output,new cljs.core.Keyword(null,"modespec","modespec",1308638208),modespec], null);
});

//# sourceMappingURL=lexer.js.map?rel=1504289160647