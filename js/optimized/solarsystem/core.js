// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('solarsystem.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
solarsystem.core.randn = (function solarsystem$core$randn(var_args){
var G__6677 = arguments.length;
switch (G__6677) {
case 1:
return solarsystem.core.randn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return solarsystem.core.randn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

solarsystem.core.randn.cljs$core$IFn$_invoke$arity$1 = (function (a){
return cljs.core.rand.cljs$core$IFn$_invoke$arity$1(a);
});

solarsystem.core.randn.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return (a + cljs.core.rand.cljs$core$IFn$_invoke$arity$1((b - a)));
});

solarsystem.core.randn.cljs$lang$maxFixedArity = 2;

solarsystem.core.make_planet = (function solarsystem$core$make_planet(vec){
var r = solarsystem.core.randn.cljs$core$IFn$_invoke$arity$2((0),(255));
var g = solarsystem.core.randn.cljs$core$IFn$_invoke$arity$2((0),(255));
var b = solarsystem.core.randn.cljs$core$IFn$_invoke$arity$2((0),(255));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vec,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$velocity,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),cljs.core.cst$kw$color,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null),cljs.core.cst$kw$pos,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(r - (127)),(g - (127)),(b - (127))], null)], null));
});
/**
 * Vector dot product
 */
solarsystem.core.dot = (function solarsystem$core$dot(x,y){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,x,y));
});
/**
 * Transposes matrix
 */
solarsystem.core.transpose = (function solarsystem$core$transpose(a){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core.vector,a);
});
/**
 * Matrix-Matrix product
 */
solarsystem.core.mat_mult = (function solarsystem$core$mat_mult(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(0))),cljs.core.count(b))){
} else {
throw (new Error("Assert failed: (= (count (nth a 0)) (count b))"));
}

return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2(cljs.core.count(solarsystem.core.transpose(b)),(function (){var iter__4523__auto__ = (function solarsystem$core$mat_mult_$_iter__6679(s__6680){
return (new cljs.core.LazySeq(null,(function (){
var s__6680__$1 = s__6680;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__6680__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__6680__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function solarsystem$core$mat_mult_$_iter__6679_$_iter__6681(s__6682){
return (new cljs.core.LazySeq(null,((function (s__6680__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__6682__$1 = s__6682;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__6682__$1);
if(temp__5735__auto____$1){
var s__6682__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__6682__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__6682__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__6684 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__6683 = (0);
while(true){
if((i__6683 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__6683);
cljs.core.chunk_append(b__6684,solarsystem.core.dot(x,y));

var G__6685 = (i__6683 + (1));
i__6683 = G__6685;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6684),solarsystem$core$mat_mult_$_iter__6679_$_iter__6681(cljs.core.chunk_rest(s__6682__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6684),null);
}
} else {
var y = cljs.core.first(s__6682__$2);
return cljs.core.cons(solarsystem.core.dot(x,y),solarsystem$core$mat_mult_$_iter__6679_$_iter__6681(cljs.core.rest(s__6682__$2)));
}
} else {
return null;
}
break;
}
});})(s__6680__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__6680__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(solarsystem.core.transpose(b)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,solarsystem$core$mat_mult_$_iter__6679(cljs.core.rest(s__6680__$1)));
} else {
var G__6686 = cljs.core.rest(s__6680__$1);
s__6680__$1 = G__6686;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(a);
})())));
});
/**
 * Vector-Matrix product
 */
solarsystem.core.vec_mat_mult = (function solarsystem$core$vec_mat_mult(v,m){
var fexpr__6687 = solarsystem.core.mat_mult((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[v],null)),m);
return (fexpr__6687.cljs$core$IFn$_invoke$arity$1 ? fexpr__6687.cljs$core$IFn$_invoke$arity$1((0)) : fexpr__6687.call(null,(0)));
});
solarsystem.core.solar_system = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.iterate(solarsystem.core.make_planet,cljs.core.PersistentVector.EMPTY),(13));
solarsystem.core.setup = (function solarsystem$core$setup(){
quil.core.frame_rate((60));

quil.core.color_mode.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$rgb);

return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$real_DASH_space,solarsystem.core.solar_system,cljs.core.cst$kw$screen_DASH_space,solarsystem.core.solar_system,cljs.core.cst$kw$r,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null)], null)], null);
});
solarsystem.core.sqr = (function solarsystem$core$sqr(x){
return (x * x);
});
solarsystem.core.dist = (function solarsystem$core$dist(p1,p2){
var G__6688 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (a,b){
return solarsystem.core.sqr((a - b));
}),cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(p1),cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(p2)));
return Math.sqrt(G__6688);
});
solarsystem.core.v_ = (function solarsystem$core$v_(a,b){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,a,b);
});
solarsystem.core.v_PLUS_ = (function solarsystem$core$v_PLUS_(a,b){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,a,b);
});
solarsystem.core.vdiv = (function solarsystem$core$vdiv(a,b){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6689_SHARP_){
return (p1__6689_SHARP_ / b);
}),a);
});
solarsystem.core.update_state = (function solarsystem$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$real_DASH_space,(function (){var newvelvec = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (planet){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(solarsystem.core.v_PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (planet2){
var d = solarsystem.core.dist(planet,planet2);
return solarsystem.core.vdiv(solarsystem.core.v_(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(planet2),cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(planet)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(0)))?(1):((((2) * d) * d) * d)));
}),cljs.core.cst$kw$real_DASH_space.cljs$core$IFn$_invoke$arity$1(state)));
}),cljs.core.cst$kw$real_DASH_space.cljs$core$IFn$_invoke$arity$1(state));
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (newvelvec){
return (function (a,b){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pos], null),solarsystem.core.v_PLUS_,cljs.core.cst$kw$velocity.cljs$core$IFn$_invoke$arity$1(a)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$velocity], null),solarsystem.core.v_PLUS_,b);
});})(newvelvec))
,cljs.core.cst$kw$real_DASH_space.cljs$core$IFn$_invoke$arity$1(state),newvelvec);
})(),cljs.core.cst$kw$r,solarsystem.core.mat_mult(cljs.core.cst$kw$r.cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.9999939,-1.6E-6,0.0034906], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.6E-6,1.0,-1.85E-5], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.0034906,1.85E-5,0.9999939], null)], null)),cljs.core.cst$kw$screen_DASH_space,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (planet){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(planet,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pos], null),solarsystem.core.vec_mat_mult,cljs.core.cst$kw$r.cljs$core$IFn$_invoke$arity$1(state));
}),cljs.core.cst$kw$real_DASH_space.cljs$core$IFn$_invoke$arity$1(state))], null);
});
solarsystem.core.distance = (function solarsystem$core$distance(planet){
var vec__6690 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(planet);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6690,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6690,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6690,(2),null);
var z__$1 = ((330) + z);
var G__6693 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(solarsystem.core.sqr,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z__$1], null)));
return Math.sqrt(G__6693);
});
solarsystem.core.draw_planet = (function solarsystem$core$draw_planet(planet){
var tr__6556__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() / (2))], null);
quil.core.push_matrix();

try{quil.core.translate.cljs$core$IFn$_invoke$arity$1(tr__6556__auto__);

var vec__6694 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(planet);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6694,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6694,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6694,(2),null);
var z__$1 = ((330) + z);
var color = cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(planet);
var r = (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1((0)) : color.call(null,(0)));
var g = (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1((1)) : color.call(null,(1)));
var b = (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1((2)) : color.call(null,(2)));
var fovscale = (700);
var visible_size = ((5000) / solarsystem.core.distance(planet));
if((z__$1 > (0))){
quil.core.fill.cljs$core$IFn$_invoke$arity$3(r,g,b);

return quil.core.ellipse((fovscale * (x / z__$1)),(fovscale * (y / z__$1)),visible_size,visible_size);
} else {
return null;
}
}finally {quil.core.pop_matrix();
}});
solarsystem.core.draw_planets = (function solarsystem$core$draw_planets(state){
console.groupCollapsed([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$draw_DASH_planets)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$state], null))].join(''));

console.log(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$state),"=",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state], 0)));

var res__978__auto__ = (function (){var iter__4523__auto__ = (function solarsystem$core$draw_planets_$_iter__6697(s__6698){
return (new cljs.core.LazySeq(null,(function (){
var s__6698__$1 = s__6698;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__6698__$1);
if(temp__5735__auto__){
var s__6698__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6698__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__6698__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__6700 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__6699 = (0);
while(true){
if((i__6699 < size__4522__auto__)){
var planet = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__6699);
cljs.core.chunk_append(b__6700,solarsystem.core.draw_planet(planet));

var G__6701 = (i__6699 + (1));
i__6699 = G__6701;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6700),solarsystem$core$draw_planets_$_iter__6697(cljs.core.chunk_rest(s__6698__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6700),null);
}
} else {
var planet = cljs.core.first(s__6698__$2);
return cljs.core.cons(solarsystem.core.draw_planet(planet),solarsystem$core$draw_planets_$_iter__6697(cljs.core.rest(s__6698__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(solarsystem.core.distance,cljs.core.cst$kw$screen_DASH_space.cljs$core$IFn$_invoke$arity$1(state))));
})();
console.log("=>",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([res__978__auto__], 0)));

console.groupEnd();

return res__978__auto__;
});
solarsystem.core.draw_state = (function solarsystem$core$draw_state(state){
quil.core.background.cljs$core$IFn$_invoke$arity$1((0));

return solarsystem.core.draw_planets(state);
});
solarsystem.core.run_sketch = (function solarsystem$core$run_sketch(){
solarsystem.core.solarsystem = (function solarsystem$core$run_sketch_$_solarsystem(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,"solarsystem",cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(solarsystem.core.update_state))?(function() { 
var G__6702__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(solarsystem.core.update_state,args);
};
var G__6702 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6703__i = 0, G__6703__a = new Array(arguments.length -  0);
while (G__6703__i < G__6703__a.length) {G__6703__a[G__6703__i] = arguments[G__6703__i + 0]; ++G__6703__i;}
  args = new cljs.core.IndexedSeq(G__6703__a,0,null);
} 
return G__6702__delegate.call(this,args);};
G__6702.cljs$lang$maxFixedArity = 0;
G__6702.cljs$lang$applyTo = (function (arglist__6704){
var args = cljs.core.seq(arglist__6704);
return G__6702__delegate(args);
});
G__6702.cljs$core$IFn$_invoke$arity$variadic = G__6702__delegate;
return G__6702;
})()
:solarsystem.core.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(window.innerWidth - (20)),(window.innerHeight - (20))], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(solarsystem.core.setup))?(function() { 
var G__6705__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(solarsystem.core.setup,args);
};
var G__6705 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6706__i = 0, G__6706__a = new Array(arguments.length -  0);
while (G__6706__i < G__6706__a.length) {G__6706__a[G__6706__i] = arguments[G__6706__i + 0]; ++G__6706__i;}
  args = new cljs.core.IndexedSeq(G__6706__a,0,null);
} 
return G__6705__delegate.call(this,args);};
G__6705.cljs$lang$maxFixedArity = 0;
G__6705.cljs$lang$applyTo = (function (arglist__6707){
var args = cljs.core.seq(arglist__6707);
return G__6705__delegate(args);
});
G__6705.cljs$core$IFn$_invoke$arity$variadic = G__6705__delegate;
return G__6705;
})()
:solarsystem.core.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(solarsystem.core.draw_state))?(function() { 
var G__6708__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(solarsystem.core.draw_state,args);
};
var G__6708 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6709__i = 0, G__6709__a = new Array(arguments.length -  0);
while (G__6709__i < G__6709__a.length) {G__6709__a[G__6709__i] = arguments[G__6709__i + 0]; ++G__6709__i;}
  args = new cljs.core.IndexedSeq(G__6709__a,0,null);
} 
return G__6708__delegate.call(this,args);};
G__6708.cljs$lang$maxFixedArity = 0;
G__6708.cljs$lang$applyTo = (function (arglist__6710){
var args = cljs.core.seq(arglist__6710);
return G__6708__delegate(args);
});
G__6708.cljs$core$IFn$_invoke$arity$variadic = G__6708__delegate;
return G__6708;
})()
:solarsystem.core.draw_state)], 0));
});
goog.exportSymbol('solarsystem.core.solarsystem', solarsystem.core.solarsystem);

if(cljs.core.truth_(cljs.core.some((function (p1__5667__5668__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__5667__5668__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,solarsystem.core.solarsystem,cljs.core.cst$kw$host_DASH_id,"solarsystem"], null));
}
});
goog.exportSymbol('solarsystem.core.run_sketch', solarsystem.core.run_sketch);
