(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{"3dMA":function(i,e,n){"use strict";n.r(e),n.d(e,"IonInfiniteScroll",function(){return s}),n.d(e,"IonInfiniteScrollContent",function(){return l});var t=n("B5Ai"),o=n("cBjU"),r=n("HHlg"),s=function(){function i(){this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom"}return i.prototype.thresholdChanged=function(i){i.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(i)/100):(this.thrPx=parseFloat(i),this.thrPc=0)},i.prototype.disabledChanged=function(i){this.enableScrollEvents(!i)},i.prototype.componentDidLoad=function(){return t.a(this,void 0,void 0,function(){var i,e,n=this;return t.c(this,function(t){switch(t.label){case 0:return(i=this.el.closest("ion-content"))?[4,i.componentOnReady()]:[3,3];case 1:return t.sent(),e=this,[4,i.getScrollElement()];case 2:e.scrollEl=t.sent(),t.label=3;case 3:return this.thresholdChanged(this.threshold),this.enableScrollEvents(!this.disabled),"top"===this.position&&this.queue.write(function(){n.scrollEl&&(n.scrollEl.scrollTop=n.scrollEl.scrollHeight-n.scrollEl.clientHeight)}),[2]}})})},i.prototype.componentDidUnload=function(){this.scrollEl=void 0},i.prototype.onScroll=function(){var i=this.scrollEl;if(!i||!this.canStart())return 1;var e=this.el.offsetHeight;if(0===e)return 2;var n=i.scrollTop,t=i.offsetHeight,o=0!==this.thrPc?t*this.thrPc:this.thrPx;if(("bottom"===this.position?i.scrollHeight-e-n-o-t:n-e-o)<0){if(!this.didFire)return this.isLoading=!0,this.didFire=!0,this.ionInfinite.emit(),3}else this.didFire=!1;return 4},i.prototype.complete=function(){var i=this,e=this.scrollEl;if(this.isLoading&&e&&(this.isLoading=!1,"top"===this.position)){this.isBusy=!0;var n=e.scrollHeight-e.scrollTop;requestAnimationFrame(function(){i.queue.read(function(){var t=e.scrollHeight-n;requestAnimationFrame(function(){i.queue.write(function(){e.scrollTop=t,i.isBusy=!1})})})})}},i.prototype.canStart=function(){return!(this.disabled||this.isBusy||!this.scrollEl||this.isLoading)},i.prototype.enableScrollEvents=function(i){this.scrollEl&&this.enableListener(this,"scroll",i,this.scrollEl)},i.prototype.hostData=function(){return{class:{"infinite-scroll-loading":this.isLoading,"infinite-scroll-enabled":!this.disabled}}},Object.defineProperty(i,"is",{get:function(){return"ion-infinite-scroll"},enumerable:!0,configurable:!0}),Object.defineProperty(i,"properties",{get:function(){return{complete:{method:!0},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},enableListener:{context:"enableListener"},isLoading:{state:!0},position:{type:String,attr:"position"},queue:{context:"queue"},threshold:{type:String,attr:"threshold",watchCallbacks:["thresholdChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(i,"events",{get:function(){return[{name:"ionInfinite",method:"ionInfinite",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(i,"listeners",{get:function(){return[{name:"scroll",method:"onScroll",disabled:!0,passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(i,"style",{get:function(){return"ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}"},enumerable:!0,configurable:!0}),i}(),l=function(){function i(){}return i.prototype.componentDidLoad=function(){void 0===this.loadingSpinner&&(this.loadingSpinner=this.config.get("infiniteLoadingSpinner",this.config.get("spinner","lines")))},i.prototype.hostData=function(){return{class:Object(r.k)(this.mode,"infinite-scroll-content")}},i.prototype.render=function(){return Object(o.b)("div",{class:"infinite-loading"},this.loadingSpinner&&Object(o.b)("div",{class:"infinite-loading-spinner"},Object(o.b)("ion-spinner",{name:this.loadingSpinner})),this.loadingText&&Object(o.b)("div",{class:"infinite-loading-text",innerHTML:this.loadingText}))},Object.defineProperty(i,"is",{get:function(){return"ion-infinite-scroll-content"},enumerable:!0,configurable:!0}),Object.defineProperty(i,"properties",{get:function(){return{config:{context:"config"},loadingSpinner:{type:String,attr:"loading-spinner",mutable:!0},loadingText:{type:String,attr:"loading-text"}}},enumerable:!0,configurable:!0}),Object.defineProperty(i,"style",{get:function(){return"ion-infinite-scroll-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin:0 0 32px;display:none;width:100%}.infinite-loading-text{margin:4px 32px 0}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-text-color-step-400,#666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line{stroke:var(--ion-text-color-step-400,#666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-text-color-step-400,#666)}"},enumerable:!0,configurable:!0}),Object.defineProperty(i,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),i}()}}]);