// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('andel.lexer');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
andel.lexer.modespec__GT_mode = (function andel$lexer$modespec__GT_mode(modespec){
return (CodeMirror["getMode"])(({"indentUnit": (2)}),modespec);
});
andel.lexer.copy_state = (function andel$lexer$copy_state(mode,state){
var copy_value = (function andel$lexer$copy_state_$_copy_value(v){
if(cljs.core.array_QMARK_(v)){
return v.concat([]);
} else {
return v;
}
});
var default_copy_state = (function andel$lexer$copy_state_$_default_copy_state(state__$1){
var js_obj = ({});
var seq__17745_17750 = cljs.core.seq(cljs.core.js_keys(state__$1));
var chunk__17746_17751 = null;
var count__17747_17752 = (0);
var i__17748_17753 = (0);
while(true){
if((i__17748_17753 < count__17747_17752)){
var k_17754 = chunk__17746_17751.cljs$core$IIndexed$_nth$arity$2(null,i__17748_17753);
(js_obj[k_17754] = copy_value((state__$1[k_17754])));

var G__17755 = seq__17745_17750;
var G__17756 = chunk__17746_17751;
var G__17757 = count__17747_17752;
var G__17758 = (i__17748_17753 + (1));
seq__17745_17750 = G__17755;
chunk__17746_17751 = G__17756;
count__17747_17752 = G__17757;
i__17748_17753 = G__17758;
continue;
} else {
var temp__5278__auto___17759 = cljs.core.seq(seq__17745_17750);
if(temp__5278__auto___17759){
var seq__17745_17760__$1 = temp__5278__auto___17759;
if(cljs.core.chunked_seq_QMARK_(seq__17745_17760__$1)){
var c__8590__auto___17761 = cljs.core.chunk_first(seq__17745_17760__$1);
var G__17762 = cljs.core.chunk_rest(seq__17745_17760__$1);
var G__17763 = c__8590__auto___17761;
var G__17764 = cljs.core.count(c__8590__auto___17761);
var G__17765 = (0);
seq__17745_17750 = G__17762;
chunk__17746_17751 = G__17763;
count__17747_17752 = G__17764;
i__17748_17753 = G__17765;
continue;
} else {
var k_17766 = cljs.core.first(seq__17745_17760__$1);
(js_obj[k_17766] = copy_value((state__$1[k_17766])));

var G__17767 = cljs.core.next(seq__17745_17760__$1);
var G__17768 = null;
var G__17769 = (0);
var G__17770 = (0);
seq__17745_17750 = G__17767;
chunk__17746_17751 = G__17768;
count__17747_17752 = G__17769;
i__17748_17753 = G__17770;
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
var fexpr__17749 = (function (){var or__7678__auto__ = mode.copyState;
if(cljs.core.truth_(or__7678__auto__)){
return or__7678__auto__;
} else {
return default_copy_state;
}
})();
return (fexpr__17749.cljs$core$IFn$_invoke$arity$1 ? fexpr__17749.cljs$core$IFn$_invoke$arity$1(state) : fexpr__17749.call(null,state));
}
});
andel.lexer.style__GT_keyword = (function andel$lexer$style__GT_keyword(style){
var G__17771 = style;
if((G__17771 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__17771);
}
});
andel.lexer.lex = (function andel$lexer$lex(modespec,text,initial_state){
var mode = andel.lexer.modespec__GT_mode(modespec);
var tokens = [];
var _STAR_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial_state);
(CodeMirror["runMode"])(text,modespec,((function (mode,tokens,_STAR_state){
return (function (text__$1,style,line_number,offset,state){
tokens.push(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text__$1.length,andel.lexer.style__GT_keyword(style)], null));

return cljs.core.reset_BANG_(_STAR_state,state);
});})(mode,tokens,_STAR_state))
,({"state": andel.lexer.copy_state(mode,initial_state)}));

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tokens,cljs.core.vec(tokens),cljs.core.cst$kw$state,cljs.core.deref(_STAR_state)], null);
});
andel.lexer.submit_request_BANG_ = (function andel$lexer$submit_request_BANG_(p__17772,p__17773){
var map__17774 = p__17772;
var map__17774__$1 = ((((!((map__17774 == null)))?((((map__17774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17774.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17774):map__17774);
var worker = map__17774__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17774__$1,cljs.core.cst$kw$input);
var map__17775 = p__17773;
var map__17775__$1 = ((((!((map__17775 == null)))?((((map__17775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17775.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17775):map__17775);
var req = map__17775__$1;
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17775__$1,cljs.core.cst$kw$index);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17775__$1,cljs.core.cst$kw$text);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(input,req);
});
andel.lexer.new_lexer_worker = (function andel$lexer$new_lexer_worker(modespec){
var input = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var output = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var states = [null];
var c__15783__auto___17887 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15783__auto___17887,input,output,states){
return (function (){
var f__15784__auto__ = (function (){var switch__15681__auto__ = ((function (c__15783__auto___17887,input,output,states){
return (function (state_17847){
var state_val_17848 = (state_17847[(1)]);
if((state_val_17848 === (7))){
var inst_17843 = (state_17847[(2)]);
var state_17847__$1 = state_17847;
var statearr_17849_17888 = state_17847__$1;
(statearr_17849_17888[(2)] = inst_17843);

(statearr_17849_17888[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17848 === (20))){
var state_17847__$1 = state_17847;
var statearr_17850_17889 = state_17847__$1;
(statearr_17850_17889[(2)] = true);

(statearr_17850_17889[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17848 === (1))){
var state_17847__$1 = state_17847;
var statearr_17851_17890 = state_17847__$1;
(statearr_17851_17890[(2)] = null);

(statearr_17851_17890[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17848 === (24))){
var inst_17808 = (state_17847[(7)]);
var state_17847__$1 = state_17847;
var statearr_17852_17891 = state_17847__$1;
(statearr_17852_17891[(2)] = inst_17808);

(statearr_17852_17891[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17848 === (4))){
var inst_17780 = (state_17847[(8)]);
var inst_17780__$1 = (state_17847[(2)]);
var state_17847__$1 = (function (){var statearr_17853 = state_17847;
(statearr_17853[(8)] = inst_17780__$1);

return statearr_17853;
})();
if(cljs.core.truth_(inst_17780__$1)){
var statearr_17854_17892 = state_17847__$1;
(statearr_17854_17892[(1)] = (5));

} else {
var statearr_17855_17893 = state_17847__$1;
(statearr_17855_17893[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17848 === (15))){
var inst_17780 = (state_17847[(8)]);
var state_17847__$1 = state_17847;
var statearr_17856_17894 = state_17847__$1;
(statearr_17856_17894[(2)] = inst_17780);

(statearr_17856_17894[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17848 === (21))){
var state_17847__$1 = state_17847;
var statearr_17857_17895 = state_17847__$1;
(statearr_17857_17895[(2)] = false);

(statearr_17857_17895[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17848 === (13))){
var inst_17795 = (state_17847[(2)]);
var state_17847__$1 = state_17847;
var statearr_17858_17896 = state_17847__$1;
(statearr_17858_17896[(2)] = inst_17795);

(statearr_17858_17896[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17848 === (22))){
var inst_17821 = (state_17847[(2)]);
var state_17847__$1 = state_17847;
var statearr_17859_17897 = state_17847__$1;
(statearr_17859_17897[(2)] = inst_17821);

(statearr_17859_17897[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17848 === (6))){
var state_17847__$1 = state_17847;
var statearr_17860_17898 = state_17847__$1;
(statearr_17860_17898[(2)] = null);

(statearr_17860_17898[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17848 === (25))){
var inst_17803 = (state_17847[(9)]);
var inst_17804 = (state_17847[(10)]);
var inst_17829 = (state_17847[(2)]);
var inst_17830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17829,cljs.core.cst$kw$tokens);
var inst_17831 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17829,cljs.core.cst$kw$state);
var inst_17832 = (inst_17804 + (1));
var inst_17833 = states.length;
var inst_17834 = (inst_17833 - inst_17804);
var inst_17835 = states.splice(inst_17832,inst_17834);
var inst_17836 = states.push(inst_17831);
var inst_17837 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_17803,cljs.core.cst$kw$tokens,inst_17830);
var state_17847__$1 = (function (){var statearr_17861 = state_17847;
(statearr_17861[(11)] = inst_17835);

(statearr_17861[(12)] = inst_17836);

return statearr_17861;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17847__$1,(26),output,inst_17837);
} else {
if((state_val_17848 === (17))){
var inst_17808 = (state_17847[(7)]);
var inst_17813 = inst_17808.cljs$lang$protocol_mask$partition0$;
var inst_17814 = (inst_17813 & (64));
var inst_17815 = inst_17808.cljs$core$ISeq$;
var inst_17816 = (cljs.core.PROTOCOL_SENTINEL === inst_17815);
var inst_17817 = (inst_17814) || (inst_17816);
var state_17847__$1 = state_17847;
if(cljs.core.truth_(inst_17817)){
var statearr_17862_17899 = state_17847__$1;
(statearr_17862_17899[(1)] = (20));

} else {
var statearr_17863_17900 = state_17847__$1;
(statearr_17863_17900[(1)] = (21));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17848 === (3))){
var inst_17845 = (state_17847[(2)]);
var state_17847__$1 = state_17847;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17847__$1,inst_17845);
} else {
if((state_val_17848 === (12))){
var state_17847__$1 = state_17847;
var statearr_17864_17901 = state_17847__$1;
(statearr_17864_17901[(2)] = false);

(statearr_17864_17901[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17848 === (2))){
var state_17847__$1 = state_17847;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17847__$1,(4),input);
} else {
if((state_val_17848 === (23))){
var inst_17808 = (state_17847[(7)]);
var inst_17826 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17808);
var state_17847__$1 = state_17847;
var statearr_17865_17902 = state_17847__$1;
(statearr_17865_17902[(2)] = inst_17826);

(statearr_17865_17902[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17848 === (19))){
var inst_17824 = (state_17847[(2)]);
var state_17847__$1 = state_17847;
if(cljs.core.truth_(inst_17824)){
var statearr_17866_17903 = state_17847__$1;
(statearr_17866_17903[(1)] = (23));

} else {
var statearr_17867_17904 = state_17847__$1;
(statearr_17867_17904[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17848 === (11))){
var state_17847__$1 = state_17847;
var statearr_17868_17905 = state_17847__$1;
(statearr_17868_17905[(2)] = true);

(statearr_17868_17905[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17848 === (9))){
var state_17847__$1 = state_17847;
var statearr_17869_17906 = state_17847__$1;
(statearr_17869_17906[(2)] = false);

(statearr_17869_17906[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17848 === (5))){
var inst_17780 = (state_17847[(8)]);
var inst_17784 = (inst_17780 == null);
var inst_17785 = cljs.core.not(inst_17784);
var state_17847__$1 = state_17847;
if(inst_17785){
var statearr_17870_17907 = state_17847__$1;
(statearr_17870_17907[(1)] = (8));

} else {
var statearr_17871_17908 = state_17847__$1;
(statearr_17871_17908[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17848 === (14))){
var inst_17780 = (state_17847[(8)]);
var inst_17800 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17780);
var state_17847__$1 = state_17847;
var statearr_17872_17909 = state_17847__$1;
(statearr_17872_17909[(2)] = inst_17800);

(statearr_17872_17909[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17848 === (26))){
var inst_17839 = (state_17847[(2)]);
var state_17847__$1 = (function (){var statearr_17873 = state_17847;
(statearr_17873[(13)] = inst_17839);

return statearr_17873;
})();
var statearr_17874_17910 = state_17847__$1;
(statearr_17874_17910[(2)] = null);

(statearr_17874_17910[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17848 === (16))){
var inst_17803 = (state_17847[(9)]);
var inst_17808 = (state_17847[(7)]);
var inst_17804 = (state_17847[(10)]);
var inst_17803__$1 = (state_17847[(2)]);
var inst_17804__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17803__$1,cljs.core.cst$kw$index);
var inst_17805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17803__$1,cljs.core.cst$kw$text);
var inst_17807 = (states[inst_17804__$1]);
var inst_17808__$1 = andel.lexer.lex(modespec,inst_17805,inst_17807);
var inst_17810 = (inst_17808__$1 == null);
var inst_17811 = cljs.core.not(inst_17810);
var state_17847__$1 = (function (){var statearr_17875 = state_17847;
(statearr_17875[(9)] = inst_17803__$1);

(statearr_17875[(7)] = inst_17808__$1);

(statearr_17875[(10)] = inst_17804__$1);

return statearr_17875;
})();
if(inst_17811){
var statearr_17876_17911 = state_17847__$1;
(statearr_17876_17911[(1)] = (17));

} else {
var statearr_17877_17912 = state_17847__$1;
(statearr_17877_17912[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17848 === (10))){
var inst_17798 = (state_17847[(2)]);
var state_17847__$1 = state_17847;
if(cljs.core.truth_(inst_17798)){
var statearr_17878_17913 = state_17847__$1;
(statearr_17878_17913[(1)] = (14));

} else {
var statearr_17879_17914 = state_17847__$1;
(statearr_17879_17914[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17848 === (18))){
var state_17847__$1 = state_17847;
var statearr_17880_17915 = state_17847__$1;
(statearr_17880_17915[(2)] = false);

(statearr_17880_17915[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17848 === (8))){
var inst_17780 = (state_17847[(8)]);
var inst_17787 = inst_17780.cljs$lang$protocol_mask$partition0$;
var inst_17788 = (inst_17787 & (64));
var inst_17789 = inst_17780.cljs$core$ISeq$;
var inst_17790 = (cljs.core.PROTOCOL_SENTINEL === inst_17789);
var inst_17791 = (inst_17788) || (inst_17790);
var state_17847__$1 = state_17847;
if(cljs.core.truth_(inst_17791)){
var statearr_17881_17916 = state_17847__$1;
(statearr_17881_17916[(1)] = (11));

} else {
var statearr_17882_17917 = state_17847__$1;
(statearr_17882_17917[(1)] = (12));

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
}
}
}
}
}
}
}
}
});})(c__15783__auto___17887,input,output,states))
;
return ((function (switch__15681__auto__,c__15783__auto___17887,input,output,states){
return (function() {
var andel$lexer$new_lexer_worker_$_state_machine__15682__auto__ = null;
var andel$lexer$new_lexer_worker_$_state_machine__15682__auto____0 = (function (){
var statearr_17883 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17883[(0)] = andel$lexer$new_lexer_worker_$_state_machine__15682__auto__);

(statearr_17883[(1)] = (1));

return statearr_17883;
});
var andel$lexer$new_lexer_worker_$_state_machine__15682__auto____1 = (function (state_17847){
while(true){
var ret_value__15683__auto__ = (function (){try{while(true){
var result__15684__auto__ = switch__15681__auto__(state_17847);
if(cljs.core.keyword_identical_QMARK_(result__15684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15684__auto__;
}
break;
}
}catch (e17884){if((e17884 instanceof Object)){
var ex__15685__auto__ = e17884;
var statearr_17885_17918 = state_17847;
(statearr_17885_17918[(5)] = ex__15685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17847);

return cljs.core.cst$kw$recur;
} else {
throw e17884;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15683__auto__,cljs.core.cst$kw$recur)){
var G__17919 = state_17847;
state_17847 = G__17919;
continue;
} else {
return ret_value__15683__auto__;
}
break;
}
});
andel$lexer$new_lexer_worker_$_state_machine__15682__auto__ = function(state_17847){
switch(arguments.length){
case 0:
return andel$lexer$new_lexer_worker_$_state_machine__15682__auto____0.call(this);
case 1:
return andel$lexer$new_lexer_worker_$_state_machine__15682__auto____1.call(this,state_17847);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
andel$lexer$new_lexer_worker_$_state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$0 = andel$lexer$new_lexer_worker_$_state_machine__15682__auto____0;
andel$lexer$new_lexer_worker_$_state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$1 = andel$lexer$new_lexer_worker_$_state_machine__15682__auto____1;
return andel$lexer$new_lexer_worker_$_state_machine__15682__auto__;
})()
;})(switch__15681__auto__,c__15783__auto___17887,input,output,states))
})();
var state__15785__auto__ = (function (){var statearr_17886 = (f__15784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15784__auto__.cljs$core$IFn$_invoke$arity$0() : f__15784__auto__.call(null));
(statearr_17886[(6)] = c__15783__auto___17887);

return statearr_17886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15785__auto__);
});})(c__15783__auto___17887,input,output,states))
);


return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$input,input,cljs.core.cst$kw$output,output,cljs.core.cst$kw$modespec,modespec], null);
});
