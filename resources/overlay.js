google.maps.__gjsload__('overlay', function(_){var zw=function(a){this.h=a},ana=function(){},Aw=function(a){a.Yo=a.Yo||new ana;return a.Yo},bna=function(a){this.Ea=new _.ui(function(){var b=a.Yo;if(a.getPanes()){if(a.getProjection()){if(!b.On&&a.onAdd)a.onAdd();b.On=!0;a.draw()}}else{if(b.On)if(a.onRemove)a.onRemove();else a.remove();b.On=!1}},0)},cna=function(a,b){function c(){return _.vi(e.Ea)}var d=Aw(a),e=d.ym;e||(e=d.ym=new bna(a));_.jb(d.Qa||[],_.Bf);var f=d.Pa=d.Pa||new _.Fu,g=b.__gm;f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("center",
g,"projectionCenterQ");f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);f=d.et=d.et||new zw(f);f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);a.bindTo("projection",f,"outProjection");a.bindTo("panes",g);d.Qa=[_.N(a,"panes_changed",c),_.N(g,"zoom_changed",c),_.N(g,"offset_changed",c),_.N(b,"projection_changed",c),_.N(g,"projectioncenterq_changed",c)];c();b instanceof _.Sf&&(_.Eg(b,"Ox"),_.Ag(b,148440))},gna=function(a){if(a){var b=a.getMap();
if(dna(a)!==b&&b&&b instanceof _.Sf){var c=b.__gm;c.overlayLayer?a.__gmop=new ena(b,a,c.overlayLayer):c.h.then(function(d){d=d.Ia;var e=new Bw(b,d);d.Xa(e);c.overlayLayer=e;fna(a);gna(a)})}}},fna=function(a){if(a){var b=a.__gmop;b&&(a.__gmop=null,b.h.unbindAll(),b.h.set("panes",null),b.h.set("projection",null),b.m.zf(b),b.j&&(b.j=!1,b.h.onRemove?b.h.onRemove():b.h.remove()))}},dna=function(a){return(a=a.__gmop)?a.map:null},ena=function(a,b,c){this.map=a;this.h=b;this.m=c;this.j=!1;_.Eg(this.map,"Ox");
_.Ag(this.map,148440);c.Oe(this)},hna=function(a,b){a.h.get("projection")!=b&&(a.h.bindTo("panes",a.map.__gm),a.h.set("projection",b))},Bw=function(a,b){this.X=a;this.Ca=b;this.h=null;this.j=[]};_.Pa(zw,_.P);zw.prototype.changed=function(a){"outProjection"!=a&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.we(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.h:null))};var Cw={};_.Pa(bna,_.P);Cw.Oe=function(a){if(a){var b=a.getMap();(Aw(a).Ks||null)!==b&&(b&&cna(a,b),Aw(a).Ks=b)}};Cw.zf=function(a){var b=Aw(a),c=b.Pa;c&&c.unbindAll();(c=b.et)&&c.unbindAll();a.unbindAll();a.set("panes",null);a.set("projection",null);b.Qa&&_.jb(b.Qa,_.Bf);b.Qa=null;b.ym&&(b.ym.Ea.Tc(),b.ym=null);delete Aw(a).Ks};var Dw={};ena.prototype.draw=function(){this.j||(this.j=!0,this.h.onAdd&&this.h.onAdd());this.h.draw&&this.h.draw()};Bw.prototype.dispose=function(){};Bw.prototype.dc=function(a,b,c,d,e,f,g,h){var k=this.h=this.h||new _.Tr(this.X,this.Ca,function(){});k.dc(a,b,c,d,e,f,g,h);a=_.A(this.j);for(b=a.next();!b.done;b=a.next())b=b.value,hna(b,k),b.draw()};Bw.prototype.Oe=function(a){this.j.push(a);this.h&&hna(a,this.h);this.Ca.refresh()};Bw.prototype.zf=function(a){_.mb(this.j,a)};Dw.Oe=gna;Dw.zf=fna;_.uf("overlay",{tq:function(a){if(a){(0,Cw.zf)(a);(0,Dw.zf)(a);var b=a.getMap();b&&(b instanceof _.Sf?(0,Dw.Oe)(a):(0,Cw.Oe)(a))}},preventMapHitsFrom:function(a){_.vs(a,{onClick:function(b){_.tm(b.event.La)},Hc:function(b){return _.$r(b)},yh:function(b){return _.as(b)},od:function(b){return _.as(b)},Oc:function(b){return _.bs(b)}}).Ki(!0)},preventMapHitsAndGesturesFrom:function(a){a.addEventListener("click",_.yf);a.addEventListener("contextmenu",_.yf);a.addEventListener("dblclick",_.yf);a.addEventListener("mousedown",
_.yf);a.addEventListener("mousemove",_.yf);a.addEventListener("MSPointerDown",_.yf);a.addEventListener("pointerdown",_.yf);a.addEventListener("touchstart",_.yf);a.addEventListener("wheel",_.yf)}});});