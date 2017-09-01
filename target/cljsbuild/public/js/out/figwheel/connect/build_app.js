// Compiled by ClojureScript 1.9.671 {}
goog.provide('figwheel.connect.build_app');
goog.require('cljs.core');
goog.require('andel.core');
goog.require('andel.dev');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__68335__delegate = function (x){
if(cljs.core.truth_(andel.core.mount_root)){
return cljs.core.apply.call(null,andel.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'andel.core/mount-root' is missing");
}
};
var G__68335 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__68336__i = 0, G__68336__a = new Array(arguments.length -  0);
while (G__68336__i < G__68336__a.length) {G__68336__a[G__68336__i] = arguments[G__68336__i + 0]; ++G__68336__i;}
  x = new cljs.core.IndexedSeq(G__68336__a,0,null);
} 
return G__68335__delegate.call(this,x);};
G__68335.cljs$lang$maxFixedArity = 0;
G__68335.cljs$lang$applyTo = (function (arglist__68337){
var x = cljs.core.seq(arglist__68337);
return G__68335__delegate(x);
});
G__68335.cljs$core$IFn$_invoke$arity$variadic = G__68335__delegate;
return G__68335;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_app.js.map?rel=1504289164556