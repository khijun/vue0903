(function(){"use strict";var t={6443:function(t,e,n){var r=n(5130),o=n(6768);function i(t,e,n,r,i,u){const c=(0,o.g2)("Items");return(0,o.uX)(),(0,o.Wv)(c)}var u=n(4232);const c=(0,o.Lk)("h1",null,"CRUD with json-server",-1),a=(0,o.Lk)("button",{type:"submit"},"Add",-1),s=["onClick"];function l(t,e,n,i,l,f){return(0,o.uX)(),(0,o.CE)("div",null,[c,(0,o.Lk)("form",{onSubmit:e[1]||(e[1]=(0,r.D$)(((...t)=>f.addItem&&f.addItem(...t)),["prevent"]))},[(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>l.newItem=t),placeholder:"Add new item"},null,512),[[r.Jo,l.newItem]]),a],32),(0,o.Lk)("ul",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(l.items,(t=>((0,o.uX)(),(0,o.CE)("li",{key:t.id},[(0,o.eW)((0,u.v_)(t.name)+" ",1),(0,o.Lk)("button",{onClick:e=>f.deleteItem(t.id)},"Delete",8,s)])))),128))])])}n(4114);var f=n(4373),d={data(){return{items:[],newItem:""}},created(){this.fetchItems()},methods:{async fetchItems(){try{const t=await f.A.get("http://localhost:3000/items");this.items=t.data}catch(t){console.error(t)}},async addItem(){if(""!==this.newItem.trim())try{const t=await f.A.post("http://localhost:3000/items",{name:this.newItem});this.items.push(t.data),this.newItem=""}catch(t){console.error(t)}},async deleteItem(t){try{await f.A.delete(`http://localhost:3000/items/${t}`),this.items=this.items.filter((e=>e.id!==t))}catch(e){console.error(e)}}}},m=n(1241);const p=(0,m.A)(d,[["render",l]]);var h=p,v={name:"App",components:{Items:h}};const y=(0,m.A)(v,[["render",i]]);var b=y;(0,r.Ef)(b).mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,i){if(!r){var u=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],i=t[l][2];for(var c=!0,a=0;a<r.length;a++)(!1&i||u>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[a])}))?r.splice(a--,1):(c=!1,i<u&&(u=i));if(c){t.splice(l--,1);var s=o();void 0!==s&&(e=s)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[r,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,u=r[0],c=r[1],a=r[2],s=0;if(u.some((function(e){return 0!==t[e]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(a)var l=a(n)}for(e&&e(r);s<u.length;s++)i=u[s],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},r=self["webpackChunkmy_vue_app"]=self["webpackChunkmy_vue_app"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(6443)}));r=n.O(r)})();
//# sourceMappingURL=app.d31210fc.js.map