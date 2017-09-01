// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs_http.core');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('no.en.core');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__41052__auto__ = v;
if(cljs.core.truth_(and__41052__auto__)){
return (v > (0));
} else {
return and__41052__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__63973_SHARP_,p2__63972_SHARP_){
var vec__63974 = clojure.string.split.call(null,p2__63972_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__63974,(0),null);
var v = cljs.core.nth.call(null,vec__63974,(1),null);
return cljs.core.assoc.call(null,p1__63973_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__63977_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__63977_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__63978){
var vec__63979 = p__63978;
var k = cljs.core.nth.call(null,vec__63979,(0),null);
var v = cljs.core.nth.call(null,vec__63979,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__63982_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\\"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__63982_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__41052__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__41052__auto__){
var and__41052__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__41052__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("(?i)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__41052__auto____$1;
}
} else {
return and__41052__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__5276__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5276__auto__)){
var params = temp__5276__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__63983_SHARP_){
return cljs_http.client.decode_body.call(null,p1__63983_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__42304__auto__ = [];
var len__42297__auto___63990 = arguments.length;
var i__42298__auto___63991 = (0);
while(true){
if((i__42298__auto___63991 < len__42297__auto___63990)){
args__42304__auto__.push((arguments[i__42298__auto___63991]));

var G__63992 = (i__42298__auto___63991 + (1));
i__42298__auto___63991 = G__63992;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((1) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42305__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__63986){
var vec__63987 = p__63986;
var default_headers = cljs.core.nth.call(null,vec__63987,(0),null);
return ((function (vec__63987,default_headers){
return (function (request){
var temp__5276__auto__ = (function (){var or__41064__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__41064__auto__)){
return or__41064__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__5276__auto__)){
var default_headers__$1 = temp__5276__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__63987,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq63984){
var G__63985 = cljs.core.first.call(null,seq63984);
var seq63984__$1 = cljs.core.next.call(null,seq63984);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__63985,seq63984__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__42304__auto__ = [];
var len__42297__auto___63999 = arguments.length;
var i__42298__auto___64000 = (0);
while(true){
if((i__42298__auto___64000 < len__42297__auto___63999)){
args__42304__auto__.push((arguments[i__42298__auto___64000]));

var G__64001 = (i__42298__auto___64000 + (1));
i__42298__auto___64000 = G__64001;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((1) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42305__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__63995){
var vec__63996 = p__63995;
var accept = cljs.core.nth.call(null,vec__63996,(0),null);
return ((function (vec__63996,accept){
return (function (request){
var temp__5276__auto__ = (function (){var or__41064__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__41064__auto__)){
return or__41064__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__5276__auto__)){
var accept__$1 = temp__5276__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__63996,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq63993){
var G__63994 = cljs.core.first.call(null,seq63993);
var seq63993__$1 = cljs.core.next.call(null,seq63993);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__63994,seq63993__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__42304__auto__ = [];
var len__42297__auto___64008 = arguments.length;
var i__42298__auto___64009 = (0);
while(true){
if((i__42298__auto___64009 < len__42297__auto___64008)){
args__42304__auto__.push((arguments[i__42298__auto___64009]));

var G__64010 = (i__42298__auto___64009 + (1));
i__42298__auto___64009 = G__64010;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((1) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42305__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__64004){
var vec__64005 = p__64004;
var content_type = cljs.core.nth.call(null,vec__64005,(0),null);
return ((function (vec__64005,content_type){
return (function (request){
var temp__5276__auto__ = (function (){var or__41064__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__41064__auto__)){
return or__41064__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__5276__auto__)){
var content_type__$1 = temp__5276__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__64005,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq64002){
var G__64003 = cljs.core.first.call(null,seq64002);
var seq64002__$1 = cljs.core.next.call(null,seq64002);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__64003,seq64002__$1);
});

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__5276__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5276__auto__)){
var params = temp__5276__auto__;
var map__64011 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__64011__$1 = ((((!((map__64011 == null)))?((((map__64011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64011.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64011):map__64011);
var encoding = cljs.core.get.call(null,map__64011__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__64011__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__64015 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__64015__$1 = ((((!((map__64015 == null)))?((((map__64015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64015.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64015):map__64015);
var decoding = cljs.core.get.call(null,map__64015__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__64015__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__64015,map__64015__$1,decoding,decoding_opts){
return (function (p1__64013_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__64013_SHARP_,decoding,decoding_opts);
});})(map__64015,map__64015__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__64015,map__64015__$1,decoding,decoding_opts,transit_decode){
return (function (p1__64014_SHARP_){
return cljs_http.client.decode_body.call(null,p1__64014_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__64015,map__64015__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__5276__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5276__auto__)){
var params = temp__5276__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__64017_SHARP_){
return cljs_http.client.decode_body.call(null,p1__64017_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__64018){
var map__64019 = p__64018;
var map__64019__$1 = ((((!((map__64019 == null)))?((((map__64019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64019.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64019):map__64019);
var req = map__64019__$1;
var query_params = cljs.core.get.call(null,map__64019__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__64021){
var map__64022 = p__64021;
var map__64022__$1 = ((((!((map__64022 == null)))?((((map__64022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64022.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64022):map__64022);
var request = map__64022__$1;
var form_params = cljs.core.get.call(null,map__64022__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__64022__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__64022__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__41052__auto__ = form_params;
if(cljs.core.truth_(and__41052__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__41052__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__64024_64034 = cljs.core.seq.call(null,params);
var chunk__64025_64035 = null;
var count__64026_64036 = (0);
var i__64027_64037 = (0);
while(true){
if((i__64027_64037 < count__64026_64036)){
var vec__64028_64038 = cljs.core._nth.call(null,chunk__64025_64035,i__64027_64037);
var k_64039 = cljs.core.nth.call(null,vec__64028_64038,(0),null);
var v_64040 = cljs.core.nth.call(null,vec__64028_64038,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_64040)){
form_data.append(cljs.core.name.call(null,k_64039),cljs.core.first.call(null,v_64040),cljs.core.second.call(null,v_64040));
} else {
form_data.append(cljs.core.name.call(null,k_64039),v_64040);
}

var G__64041 = seq__64024_64034;
var G__64042 = chunk__64025_64035;
var G__64043 = count__64026_64036;
var G__64044 = (i__64027_64037 + (1));
seq__64024_64034 = G__64041;
chunk__64025_64035 = G__64042;
count__64026_64036 = G__64043;
i__64027_64037 = G__64044;
continue;
} else {
var temp__5278__auto___64045 = cljs.core.seq.call(null,seq__64024_64034);
if(temp__5278__auto___64045){
var seq__64024_64046__$1 = temp__5278__auto___64045;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64024_64046__$1)){
var c__41976__auto___64047 = cljs.core.chunk_first.call(null,seq__64024_64046__$1);
var G__64048 = cljs.core.chunk_rest.call(null,seq__64024_64046__$1);
var G__64049 = c__41976__auto___64047;
var G__64050 = cljs.core.count.call(null,c__41976__auto___64047);
var G__64051 = (0);
seq__64024_64034 = G__64048;
chunk__64025_64035 = G__64049;
count__64026_64036 = G__64050;
i__64027_64037 = G__64051;
continue;
} else {
var vec__64031_64052 = cljs.core.first.call(null,seq__64024_64046__$1);
var k_64053 = cljs.core.nth.call(null,vec__64031_64052,(0),null);
var v_64054 = cljs.core.nth.call(null,vec__64031_64052,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_64054)){
form_data.append(cljs.core.name.call(null,k_64053),cljs.core.first.call(null,v_64054),cljs.core.second.call(null,v_64054));
} else {
form_data.append(cljs.core.name.call(null,k_64053),v_64054);
}

var G__64055 = cljs.core.next.call(null,seq__64024_64046__$1);
var G__64056 = null;
var G__64057 = (0);
var G__64058 = (0);
seq__64024_64034 = G__64055;
chunk__64025_64035 = G__64056;
count__64026_64036 = G__64057;
i__64027_64037 = G__64058;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__64059){
var map__64060 = p__64059;
var map__64060__$1 = ((((!((map__64060 == null)))?((((map__64060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64060.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64060):map__64060);
var request = map__64060__$1;
var multipart_params = cljs.core.get.call(null,map__64060__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__64060__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__41052__auto__ = multipart_params;
if(cljs.core.truth_(and__41052__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__41052__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__5276__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5276__auto__)){
var m = temp__5276__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__64062_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__64062_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__64064){
var map__64065 = p__64064;
var map__64065__$1 = ((((!((map__64065 == null)))?((((map__64065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64065.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64065):map__64065);
var req = map__64065__$1;
var query_params = cljs.core.get.call(null,map__64065__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__5276__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__5276__auto__)){
var spec = temp__5276__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__5276__auto__,map__64065,map__64065__$1,req,query_params){
return (function (p1__64063_SHARP_){
return cljs.core.merge.call(null,p1__64063_SHARP_,query_params);
});})(spec,temp__5276__auto__,map__64065,map__64065__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__42304__auto__ = [];
var len__42297__auto___64073 = arguments.length;
var i__42298__auto___64074 = (0);
while(true){
if((i__42298__auto___64074 < len__42297__auto___64073)){
args__42304__auto__.push((arguments[i__42298__auto___64074]));

var G__64075 = (i__42298__auto___64074 + (1));
i__42298__auto___64074 = G__64075;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((1) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42305__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__64069){
var vec__64070 = p__64069;
var credentials = cljs.core.nth.call(null,vec__64070,(0),null);
return ((function (vec__64070,credentials){
return (function (req){
var credentials__$1 = (function (){var or__41064__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__41064__auto__)){
return or__41064__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__64070,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq64067){
var G__64068 = cljs.core.first.call(null,seq64067);
var seq64067__$1 = cljs.core.next.call(null,seq64067);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__64068,seq64067__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__5276__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5276__auto__)){
var oauth_token = temp__5276__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bearer "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__5276__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5276__auto__)){
var custom_channel = temp__5276__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__42304__auto__ = [];
var len__42297__auto___64082 = arguments.length;
var i__42298__auto___64083 = (0);
while(true){
if((i__42298__auto___64083 < len__42297__auto___64082)){
args__42304__auto__.push((arguments[i__42298__auto___64083]));

var G__64084 = (i__42298__auto___64083 + (1));
i__42298__auto___64083 = G__64084;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((1) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42305__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__64078){
var vec__64079 = p__64078;
var req = cljs.core.nth.call(null,vec__64079,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq64076){
var G__64077 = cljs.core.first.call(null,seq64076);
var seq64076__$1 = cljs.core.next.call(null,seq64076);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__64077,seq64076__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__42304__auto__ = [];
var len__42297__auto___64091 = arguments.length;
var i__42298__auto___64092 = (0);
while(true){
if((i__42298__auto___64092 < len__42297__auto___64091)){
args__42304__auto__.push((arguments[i__42298__auto___64092]));

var G__64093 = (i__42298__auto___64092 + (1));
i__42298__auto___64092 = G__64093;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((1) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42305__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__64087){
var vec__64088 = p__64087;
var req = cljs.core.nth.call(null,vec__64088,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq64085){
var G__64086 = cljs.core.first.call(null,seq64085);
var seq64085__$1 = cljs.core.next.call(null,seq64085);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__64086,seq64085__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__42304__auto__ = [];
var len__42297__auto___64100 = arguments.length;
var i__42298__auto___64101 = (0);
while(true){
if((i__42298__auto___64101 < len__42297__auto___64100)){
args__42304__auto__.push((arguments[i__42298__auto___64101]));

var G__64102 = (i__42298__auto___64101 + (1));
i__42298__auto___64101 = G__64102;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((1) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42305__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__64096){
var vec__64097 = p__64096;
var req = cljs.core.nth.call(null,vec__64097,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq64094){
var G__64095 = cljs.core.first.call(null,seq64094);
var seq64094__$1 = cljs.core.next.call(null,seq64094);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__64095,seq64094__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__42304__auto__ = [];
var len__42297__auto___64109 = arguments.length;
var i__42298__auto___64110 = (0);
while(true){
if((i__42298__auto___64110 < len__42297__auto___64109)){
args__42304__auto__.push((arguments[i__42298__auto___64110]));

var G__64111 = (i__42298__auto___64110 + (1));
i__42298__auto___64110 = G__64111;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((1) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42305__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__64105){
var vec__64106 = p__64105;
var req = cljs.core.nth.call(null,vec__64106,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq64103){
var G__64104 = cljs.core.first.call(null,seq64103);
var seq64103__$1 = cljs.core.next.call(null,seq64103);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__64104,seq64103__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__42304__auto__ = [];
var len__42297__auto___64118 = arguments.length;
var i__42298__auto___64119 = (0);
while(true){
if((i__42298__auto___64119 < len__42297__auto___64118)){
args__42304__auto__.push((arguments[i__42298__auto___64119]));

var G__64120 = (i__42298__auto___64119 + (1));
i__42298__auto___64119 = G__64120;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((1) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42305__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__64114){
var vec__64115 = p__64114;
var req = cljs.core.nth.call(null,vec__64115,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq64112){
var G__64113 = cljs.core.first.call(null,seq64112);
var seq64112__$1 = cljs.core.next.call(null,seq64112);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__64113,seq64112__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__42304__auto__ = [];
var len__42297__auto___64127 = arguments.length;
var i__42298__auto___64128 = (0);
while(true){
if((i__42298__auto___64128 < len__42297__auto___64127)){
args__42304__auto__.push((arguments[i__42298__auto___64128]));

var G__64129 = (i__42298__auto___64128 + (1));
i__42298__auto___64128 = G__64129;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((1) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42305__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__64123){
var vec__64124 = p__64123;
var req = cljs.core.nth.call(null,vec__64124,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq64121){
var G__64122 = cljs.core.first.call(null,seq64121);
var seq64121__$1 = cljs.core.next.call(null,seq64121);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__64122,seq64121__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__42304__auto__ = [];
var len__42297__auto___64136 = arguments.length;
var i__42298__auto___64137 = (0);
while(true){
if((i__42298__auto___64137 < len__42297__auto___64136)){
args__42304__auto__.push((arguments[i__42298__auto___64137]));

var G__64138 = (i__42298__auto___64137 + (1));
i__42298__auto___64137 = G__64138;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((1) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42305__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__64132){
var vec__64133 = p__64132;
var req = cljs.core.nth.call(null,vec__64133,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq64130){
var G__64131 = cljs.core.first.call(null,seq64130);
var seq64130__$1 = cljs.core.next.call(null,seq64130);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__64131,seq64130__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__42304__auto__ = [];
var len__42297__auto___64145 = arguments.length;
var i__42298__auto___64146 = (0);
while(true){
if((i__42298__auto___64146 < len__42297__auto___64145)){
args__42304__auto__.push((arguments[i__42298__auto___64146]));

var G__64147 = (i__42298__auto___64146 + (1));
i__42298__auto___64146 = G__64147;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((1) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42305__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__64141){
var vec__64142 = p__64141;
var req = cljs.core.nth.call(null,vec__64142,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq64139){
var G__64140 = cljs.core.first.call(null,seq64139);
var seq64139__$1 = cljs.core.next.call(null,seq64139);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__64140,seq64139__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__42304__auto__ = [];
var len__42297__auto___64154 = arguments.length;
var i__42298__auto___64155 = (0);
while(true){
if((i__42298__auto___64155 < len__42297__auto___64154)){
args__42304__auto__.push((arguments[i__42298__auto___64155]));

var G__64156 = (i__42298__auto___64155 + (1));
i__42298__auto___64155 = G__64156;
continue;
} else {
}
break;
}

var argseq__42305__auto__ = ((((1) < args__42304__auto__.length))?(new cljs.core.IndexedSeq(args__42304__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42305__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__64150){
var vec__64151 = p__64150;
var req = cljs.core.nth.call(null,vec__64151,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq64148){
var G__64149 = cljs.core.first.call(null,seq64148);
var seq64148__$1 = cljs.core.next.call(null,seq64148);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__64149,seq64148__$1);
});


//# sourceMappingURL=client.js.map?rel=1504289160543