define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/store/Memory","dojo/store/Observable","dojo/dom-construct","dojo/query","dojo/NodeList-manipulate","dojo/NodeList-traverse"],function(a,b,c,d,e,f,g){return a(null,{store:null,element:null,output:null,_observableHandler:null,constructor:function(b,c,d){var e={element:d};a.safeMixin(this,e),this._create(b,c)},_create:function(a,h){var i,j,k,l,m;this.element&&(l=g(this.element)),this.store=new d({data:a,idProperty:"id"}),this.store=e(this.store),i=this.store.query({}),k=b.hitch(this,function(a,b,c){var d,e;this.output=h(a),l&&(b>-1&&c>-1?(d=l.children()[c],f.place(this.output,d,"replace")):(b>-1&&(e=l.children()[b],f.destroy(e)),c>-1&&l.forEach(function(a){f.place(this.output,a,c)},this)))}),this._observableHandler=i.observe(k,!0),l&&l.children().length===0&&(m=this.store.query({}),c.forEach(m,function(a,b){this.output=h(a),l.append(output)}))}})});