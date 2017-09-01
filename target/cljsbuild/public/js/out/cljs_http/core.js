// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5278__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__5278__auto__)){
var req = temp__5278__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)),cljs.core.vals.call(null,headers));
return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (formatted_h){
return (function (p__63906){
var vec__63907 = p__63906;
var k = cljs.core.nth.call(null,vec__63907,(0),null);
var v = cljs.core.nth.call(null,vec__63907,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__63910 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__63910)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__63910)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__63910)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__63910)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__63910)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__63910)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63910)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__63911){
var map__63912 = p__63911;
var map__63912__$1 = ((((!((map__63912 == null)))?((((map__63912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63912.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63912):map__63912);
var request = map__63912__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__63912__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__63912__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__63912__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__41064__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__41064__auto__)){
return or__41064__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__63914 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__63914,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__63914,response_type);

G__63914.setTimeoutInterval(timeout);

G__63914.setWithCredentials(send_credentials);

return G__63914;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__63915){
var map__63916 = p__63915;
var map__63916__$1 = ((((!((map__63916 == null)))?((((map__63916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63916.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63916):map__63916);
var request = map__63916__$1;
var request_method = cljs.core.get.call(null,map__63916__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__63916__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__63916__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__63916__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__63916__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.call(null,map__63916__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__41064__auto__ = request_method;
if(cljs.core.truth_(or__41064__auto__)){
return or__41064__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__63916,map__63916__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if(cljs.core.not.call(null,cljs_http.core.aborted_QMARK_.call(null,xhr))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,request_url,method,headers__$1,xhr,map__63916,map__63916__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_63940 = ((function (channel,request_url,method,headers__$1,xhr,map__63916,map__63916__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.call(null,progress,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)));
});})(channel,request_url,method,headers__$1,xhr,map__63916,map__63916__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__63918_63941 = xhr;
G__63918_63941.setProgressEventsEnabled(true);

G__63918_63941.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.call(null,listener_63940,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__63918_63941.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.call(null,listener_63940,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__44106__auto___63942 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44106__auto___63942,channel,request_url,method,headers__$1,xhr,map__63916,map__63916__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__44107__auto__ = (function (){var switch__44016__auto__ = ((function (c__44106__auto___63942,channel,request_url,method,headers__$1,xhr,map__63916,map__63916__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_63929){
var state_val_63930 = (state_63929[(1)]);
if((state_val_63930 === (1))){
var state_63929__$1 = state_63929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63929__$1,(2),cancel);
} else {
if((state_val_63930 === (2))){
var inst_63920 = (state_63929[(2)]);
var inst_63921 = xhr.isComplete();
var inst_63922 = cljs.core.not.call(null,inst_63921);
var state_63929__$1 = (function (){var statearr_63931 = state_63929;
(statearr_63931[(7)] = inst_63920);

return statearr_63931;
})();
if(inst_63922){
var statearr_63932_63943 = state_63929__$1;
(statearr_63932_63943[(1)] = (3));

} else {
var statearr_63933_63944 = state_63929__$1;
(statearr_63933_63944[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63930 === (3))){
var inst_63924 = xhr.abort();
var state_63929__$1 = state_63929;
var statearr_63934_63945 = state_63929__$1;
(statearr_63934_63945[(2)] = inst_63924);

(statearr_63934_63945[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63930 === (4))){
var state_63929__$1 = state_63929;
var statearr_63935_63946 = state_63929__$1;
(statearr_63935_63946[(2)] = null);

(statearr_63935_63946[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63930 === (5))){
var inst_63927 = (state_63929[(2)]);
var state_63929__$1 = state_63929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63929__$1,inst_63927);
} else {
return null;
}
}
}
}
}
});})(c__44106__auto___63942,channel,request_url,method,headers__$1,xhr,map__63916,map__63916__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__44016__auto__,c__44106__auto___63942,channel,request_url,method,headers__$1,xhr,map__63916,map__63916__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__44017__auto__ = null;
var cljs_http$core$xhr_$_state_machine__44017__auto____0 = (function (){
var statearr_63936 = [null,null,null,null,null,null,null,null];
(statearr_63936[(0)] = cljs_http$core$xhr_$_state_machine__44017__auto__);

(statearr_63936[(1)] = (1));

return statearr_63936;
});
var cljs_http$core$xhr_$_state_machine__44017__auto____1 = (function (state_63929){
while(true){
var ret_value__44018__auto__ = (function (){try{while(true){
var result__44019__auto__ = switch__44016__auto__.call(null,state_63929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44019__auto__;
}
break;
}
}catch (e63937){if((e63937 instanceof Object)){
var ex__44020__auto__ = e63937;
var statearr_63938_63947 = state_63929;
(statearr_63938_63947[(5)] = ex__44020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63948 = state_63929;
state_63929 = G__63948;
continue;
} else {
return ret_value__44018__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__44017__auto__ = function(state_63929){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__44017__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__44017__auto____1.call(this,state_63929);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$xhr_$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__44017__auto____0;
cljs_http$core$xhr_$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__44017__auto____1;
return cljs_http$core$xhr_$_state_machine__44017__auto__;
})()
;})(switch__44016__auto__,c__44106__auto___63942,channel,request_url,method,headers__$1,xhr,map__63916,map__63916__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__44108__auto__ = (function (){var statearr_63939 = f__44107__auto__.call(null);
(statearr_63939[(6)] = c__44106__auto___63942);

return statearr_63939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44108__auto__);
});})(c__44106__auto___63942,channel,request_url,method,headers__$1,xhr,map__63916,map__63916__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__63949){
var map__63950 = p__63949;
var map__63950__$1 = ((((!((map__63950 == null)))?((((map__63950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63950.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63950):map__63950);
var request = map__63950__$1;
var timeout = cljs.core.get.call(null,map__63950__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__63950__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__63950__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__63950__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_63963 = jsonp.send(null,((function (channel,jsonp,map__63950,map__63950__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp,map__63950,map__63950__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__63950,map__63950__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp,map__63950,map__63950__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_63963], null));

if(cljs.core.truth_(cancel)){
var c__44106__auto___63964 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44106__auto___63964,req_63963,channel,jsonp,map__63950,map__63950__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__44107__auto__ = (function (){var switch__44016__auto__ = ((function (c__44106__auto___63964,req_63963,channel,jsonp,map__63950,map__63950__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_63956){
var state_val_63957 = (state_63956[(1)]);
if((state_val_63957 === (1))){
var state_63956__$1 = state_63956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63956__$1,(2),cancel);
} else {
if((state_val_63957 === (2))){
var inst_63953 = (state_63956[(2)]);
var inst_63954 = jsonp.cancel(req_63963);
var state_63956__$1 = (function (){var statearr_63958 = state_63956;
(statearr_63958[(7)] = inst_63953);

return statearr_63958;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63956__$1,inst_63954);
} else {
return null;
}
}
});})(c__44106__auto___63964,req_63963,channel,jsonp,map__63950,map__63950__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__44016__auto__,c__44106__auto___63964,req_63963,channel,jsonp,map__63950,map__63950__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__44017__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__44017__auto____0 = (function (){
var statearr_63959 = [null,null,null,null,null,null,null,null];
(statearr_63959[(0)] = cljs_http$core$jsonp_$_state_machine__44017__auto__);

(statearr_63959[(1)] = (1));

return statearr_63959;
});
var cljs_http$core$jsonp_$_state_machine__44017__auto____1 = (function (state_63956){
while(true){
var ret_value__44018__auto__ = (function (){try{while(true){
var result__44019__auto__ = switch__44016__auto__.call(null,state_63956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44019__auto__;
}
break;
}
}catch (e63960){if((e63960 instanceof Object)){
var ex__44020__auto__ = e63960;
var statearr_63961_63965 = state_63956;
(statearr_63961_63965[(5)] = ex__44020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63966 = state_63956;
state_63956 = G__63966;
continue;
} else {
return ret_value__44018__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__44017__auto__ = function(state_63956){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__44017__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__44017__auto____1.call(this,state_63956);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$jsonp_$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__44017__auto____0;
cljs_http$core$jsonp_$_state_machine__44017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__44017__auto____1;
return cljs_http$core$jsonp_$_state_machine__44017__auto__;
})()
;})(switch__44016__auto__,c__44106__auto___63964,req_63963,channel,jsonp,map__63950,map__63950__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__44108__auto__ = (function (){var statearr_63962 = f__44107__auto__.call(null);
(statearr_63962[(6)] = c__44106__auto___63964);

return statearr_63962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44108__auto__);
});})(c__44106__auto___63964,req_63963,channel,jsonp,map__63950,map__63950__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__63967){
var map__63968 = p__63967;
var map__63968__$1 = ((((!((map__63968 == null)))?((((map__63968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63968.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63968):map__63968);
var request = map__63968__$1;
var request_method = cljs.core.get.call(null,map__63968__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request);
} else {
return cljs_http.core.xhr.call(null,request);
}
});

//# sourceMappingURL=core.js.map?rel=1504289160416