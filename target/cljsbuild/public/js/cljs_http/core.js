// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5278__auto__ = (function (){var fexpr__20619 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__20619.cljs$core$IFn$_invoke$arity$1 ? fexpr__20619.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__20619.call(null,channel));
})();
if(cljs.core.truth_(temp__5278__auto__)){
var req = temp__5278__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return cljs.core.cst$kw$jsonp.cljs$core$IFn$_invoke$arity$1(req).cancel(cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (formatted_h){
return (function (p__20620){
var vec__20621 = p__20620;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20621,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20621,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__20624 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__20624)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__20624)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__20624)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__20624)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__20624)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__20624)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20624)].join('')));

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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__20625){
var map__20626 = p__20625;
var map__20626__$1 = ((((!((map__20626 == null)))?((((map__20626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20626.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20626):map__20626);
var request = map__20626__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20626__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20626__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20626__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__7678__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__7678__auto__)){
return or__7678__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__20628 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__20628,default_headers);

cljs_http.core.apply_response_type_BANG_(G__20628,response_type);

G__20628.setTimeoutInterval(timeout);

G__20628.setWithCredentials(send_credentials);

return G__20628;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__20629){
var map__20630 = p__20629;
var map__20630__$1 = ((((!((map__20630 == null)))?((((map__20630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20630.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20630):map__20630);
var request = map__20630__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20630__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20630__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20630__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20630__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20630__$1,cljs.core.cst$kw$cancel);
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20630__$1,cljs.core.cst$kw$progress);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__7678__auto__ = request_method;
if(cljs.core.truth_(or__7678__auto__)){
return or__7678__auto__;
} else {
return cljs.core.cst$kw$get;
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__20630,map__20630__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__20632 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__20632) : cljs_http.core.error_kw.call(null,G__20632));
})(),cljs.core.cst$kw$error_DASH_text,target.getLastError()], null);
if(cljs.core.not(cljs_http.core.aborted_QMARK_(xhr))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,request_url,method,headers__$1,xhr,map__20630,map__20630__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_20655 = ((function (channel,request_url,method,headers__$1,xhr,map__20630,map__20630__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$loaded,evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total,evt.total], null):null)], 0)));
});})(channel,request_url,method,headers__$1,xhr,map__20630,map__20630__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__20633_20656 = xhr;
G__20633_20656.setProgressEventsEnabled(true);

G__20633_20656.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_20655,cljs.core.cst$kw$upload));

G__20633_20656.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_20655,cljs.core.cst$kw$download));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__15783__auto___20657 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15783__auto___20657,channel,request_url,method,headers__$1,xhr,map__20630,map__20630__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__15784__auto__ = (function (){var switch__15681__auto__ = ((function (c__15783__auto___20657,channel,request_url,method,headers__$1,xhr,map__20630,map__20630__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_20644){
var state_val_20645 = (state_20644[(1)]);
if((state_val_20645 === (1))){
var state_20644__$1 = state_20644;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20644__$1,(2),cancel);
} else {
if((state_val_20645 === (2))){
var inst_20635 = (state_20644[(2)]);
var inst_20636 = xhr.isComplete();
var inst_20637 = cljs.core.not(inst_20636);
var state_20644__$1 = (function (){var statearr_20646 = state_20644;
(statearr_20646[(7)] = inst_20635);

return statearr_20646;
})();
if(inst_20637){
var statearr_20647_20658 = state_20644__$1;
(statearr_20647_20658[(1)] = (3));

} else {
var statearr_20648_20659 = state_20644__$1;
(statearr_20648_20659[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20645 === (3))){
var inst_20639 = xhr.abort();
var state_20644__$1 = state_20644;
var statearr_20649_20660 = state_20644__$1;
(statearr_20649_20660[(2)] = inst_20639);

(statearr_20649_20660[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20645 === (4))){
var state_20644__$1 = state_20644;
var statearr_20650_20661 = state_20644__$1;
(statearr_20650_20661[(2)] = null);

(statearr_20650_20661[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20645 === (5))){
var inst_20642 = (state_20644[(2)]);
var state_20644__$1 = state_20644;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20644__$1,inst_20642);
} else {
return null;
}
}
}
}
}
});})(c__15783__auto___20657,channel,request_url,method,headers__$1,xhr,map__20630,map__20630__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__15681__auto__,c__15783__auto___20657,channel,request_url,method,headers__$1,xhr,map__20630,map__20630__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__15682__auto__ = null;
var cljs_http$core$xhr_$_state_machine__15682__auto____0 = (function (){
var statearr_20651 = [null,null,null,null,null,null,null,null];
(statearr_20651[(0)] = cljs_http$core$xhr_$_state_machine__15682__auto__);

(statearr_20651[(1)] = (1));

return statearr_20651;
});
var cljs_http$core$xhr_$_state_machine__15682__auto____1 = (function (state_20644){
while(true){
var ret_value__15683__auto__ = (function (){try{while(true){
var result__15684__auto__ = switch__15681__auto__(state_20644);
if(cljs.core.keyword_identical_QMARK_(result__15684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15684__auto__;
}
break;
}
}catch (e20652){if((e20652 instanceof Object)){
var ex__15685__auto__ = e20652;
var statearr_20653_20662 = state_20644;
(statearr_20653_20662[(5)] = ex__15685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20644);

return cljs.core.cst$kw$recur;
} else {
throw e20652;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15683__auto__,cljs.core.cst$kw$recur)){
var G__20663 = state_20644;
state_20644 = G__20663;
continue;
} else {
return ret_value__15683__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__15682__auto__ = function(state_20644){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__15682__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__15682__auto____1.call(this,state_20644);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$xhr_$_state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__15682__auto____0;
cljs_http$core$xhr_$_state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__15682__auto____1;
return cljs_http$core$xhr_$_state_machine__15682__auto__;
})()
;})(switch__15681__auto__,c__15783__auto___20657,channel,request_url,method,headers__$1,xhr,map__20630,map__20630__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__15785__auto__ = (function (){var statearr_20654 = (f__15784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15784__auto__.cljs$core$IFn$_invoke$arity$0() : f__15784__auto__.call(null));
(statearr_20654[(6)] = c__15783__auto___20657);

return statearr_20654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15785__auto__);
});})(c__15783__auto___20657,channel,request_url,method,headers__$1,xhr,map__20630,map__20630__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__20664){
var map__20665 = p__20664;
var map__20665__$1 = ((((!((map__20665 == null)))?((((map__20665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20665.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20665):map__20665);
var request = map__20665__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20665__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20665__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20665__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20665__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_20678 = jsonp.send(null,((function (channel,jsonp,map__20665,map__20665__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,(200),cljs.core.cst$kw$success,true,cljs.core.cst$kw$body,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__20665,map__20665__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__20665,map__20665__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__20665,map__20665__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp,cljs.core.cst$kw$request,req_20678], null));

if(cljs.core.truth_(cancel)){
var c__15783__auto___20679 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15783__auto___20679,req_20678,channel,jsonp,map__20665,map__20665__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__15784__auto__ = (function (){var switch__15681__auto__ = ((function (c__15783__auto___20679,req_20678,channel,jsonp,map__20665,map__20665__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_20671){
var state_val_20672 = (state_20671[(1)]);
if((state_val_20672 === (1))){
var state_20671__$1 = state_20671;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20671__$1,(2),cancel);
} else {
if((state_val_20672 === (2))){
var inst_20668 = (state_20671[(2)]);
var inst_20669 = jsonp.cancel(req_20678);
var state_20671__$1 = (function (){var statearr_20673 = state_20671;
(statearr_20673[(7)] = inst_20668);

return statearr_20673;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20671__$1,inst_20669);
} else {
return null;
}
}
});})(c__15783__auto___20679,req_20678,channel,jsonp,map__20665,map__20665__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__15681__auto__,c__15783__auto___20679,req_20678,channel,jsonp,map__20665,map__20665__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__15682__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__15682__auto____0 = (function (){
var statearr_20674 = [null,null,null,null,null,null,null,null];
(statearr_20674[(0)] = cljs_http$core$jsonp_$_state_machine__15682__auto__);

(statearr_20674[(1)] = (1));

return statearr_20674;
});
var cljs_http$core$jsonp_$_state_machine__15682__auto____1 = (function (state_20671){
while(true){
var ret_value__15683__auto__ = (function (){try{while(true){
var result__15684__auto__ = switch__15681__auto__(state_20671);
if(cljs.core.keyword_identical_QMARK_(result__15684__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__15684__auto__;
}
break;
}
}catch (e20675){if((e20675 instanceof Object)){
var ex__15685__auto__ = e20675;
var statearr_20676_20680 = state_20671;
(statearr_20676_20680[(5)] = ex__15685__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20671);

return cljs.core.cst$kw$recur;
} else {
throw e20675;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15683__auto__,cljs.core.cst$kw$recur)){
var G__20681 = state_20671;
state_20671 = G__20681;
continue;
} else {
return ret_value__15683__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__15682__auto__ = function(state_20671){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__15682__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__15682__auto____1.call(this,state_20671);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$jsonp_$_state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__15682__auto____0;
cljs_http$core$jsonp_$_state_machine__15682__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__15682__auto____1;
return cljs_http$core$jsonp_$_state_machine__15682__auto__;
})()
;})(switch__15681__auto__,c__15783__auto___20679,req_20678,channel,jsonp,map__20665,map__20665__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__15785__auto__ = (function (){var statearr_20677 = (f__15784__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15784__auto__.cljs$core$IFn$_invoke$arity$0() : f__15784__auto__.call(null));
(statearr_20677[(6)] = c__15783__auto___20679);

return statearr_20677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15785__auto__);
});})(c__15783__auto___20679,req_20678,channel,jsonp,map__20665,map__20665__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__20682){
var map__20683 = p__20682;
var map__20683__$1 = ((((!((map__20683 == null)))?((((map__20683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20683.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20683):map__20683);
var request = map__20683__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20683__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});
