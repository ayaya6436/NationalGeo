(()=>{"use strict";var e={n:t=>{var i=t&&t.__esModule?()=>t.default:()=>t;return e.d(i,{a:i}),i},d:(t,i)=>{for(var n in i)e.o(i,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:i[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t);const i=window.jQuery;var n=e.n(i);window._["."],window.wp.wpColorPickerAlpha,window.wp.util,window.window.Backbone,function(e){e.fn.serializeArrayAll=function(){var e=/\r?\n/g;return this.map((function(){return this.elements?n().makeArray(this.elements):this})).map((function(t,i){var a=n()(this).val();return null==a?null==a:"checkbox"==this.type&&0==this.checked?{name:this.name,value:this.checked?this.value:""}:n().isArray(a)?n().map(a,(function(t,n){return{name:i.name,value:t.replace(e,"\r\n")}})):{name:i.name,value:a.replace(e,"\r\n")}})).get()};var t={__instance:void 0};t.Application=Backbone.View.extend({id:"wpmi_modal",events:{"click .close":"Close","click .remove":"Remove","click .save":"Save","click .attachments .attachment":"Select","keyup #media-search-input":"Search"},ui:{nav:void 0,content:void 0,media:void 0},templates:{},initialize:function(e){_.bindAll(this,"render","preserveFocus","Search","Select","Close","Save","Remove"),this.initialize_templates(),this.render(e),this.backdrop(e),this.tabs(e)},backdrop:function(t){var i=this;e(document).on("click",".media-modal-backdrop",(function(e){i.Close(e)}))},tabs:function(t){var i=this;e(document).on("click",".media-modal-backdrop",(function(e){i.Close(e)}))},initialize_templates:function(){this.templates.window=wp.template("wpmi-modal-window"),this.templates.backdrop=wp.template("wpmi-modal-backdrop"),this.templates.preview=wp.template("wpmi-modal-preview"),this.templates.settings=wp.template("wpmi-modal-settings")},render:function(t){var i=e(t.target).closest("li"),n=parseInt(i.prop("id").match(/menu-item-([0-9]+)/)[1]),a={};e(t.target).closest("li").find("input.wpmi-input").each((function(t){var i=e(this).prop("id").match(/wpmi-input-([a-z]+)/)[1],n=e(this).val();a[i]=n})),this.$el.attr("tabindex","0").data("menu_item_id",n).append(this.templates.window()).append(this.templates.backdrop()),this.ui.preview=this.$(".media-sidebar").append(this.templates.preview(a)),this.ui.settings=this.$(".media-sidebar").append(this.templates.settings(a)),this.ui.settings.find("#wpmi-input-color").wpColorPicker(),e(document).on("focusin",this.preserveFocus),e("body").addClass("modal-open").append(this.$el),this.$el.focus()},preserveFocus:function(e){this.$el[0]===e.target||this.$el.has(e.target).length||this.$el.focus()},Search:function(t){var i=e(t.target),n=this.$el.find(".attachments .attachment");i.on("keyup",(function(e){e.preventDefault(),setTimeout((function(){var e=i.val();""!==e?(n.css({display:"none"}),n.filter('[class*="'+e+'"]').css({display:"block"})):n.removeAttr("style")}),600)}))},Select:function(t){var i=e(t.target),n=this.$el.find(".media-sidebar .filename"),a=this.$el.find(".media-sidebar .thumbnail > i"),o=this.$el.find('input[name="wpmi[icon]"]'),s=i.find("i").attr("class");n.text(s),o.val(s),a.removeAttr("class").addClass(s)},Close:function(i){i.preventDefault(),this.undelegateEvents(),e(document).off("focusin"),e("body").removeClass("modal-open"),this.remove(),t.__instance=void 0},Save:function(t){t.preventDefault();var i=e("form",this.$el),n=this.$el.data("menu_item_id");if(n&&i.length){var a=e("#menu-to-edit").find("#menu-item-"+n),o=a.find(".menu-item-wpmi_plus"),s=a.find(".menu-item-wpmi_icon");a.length&&(i.find(".wpmi-input").each((function(t){var i=e(this).prop("id").match(/wpmi-input-([a-z]+)/)[1],n=e(this).val();a.find("input#wpmi-input-"+i).val(n),"icon"===i&&(s.length&&s.remove(),o.before('<i class="menu-item-wpmi_icon '+n+'"></i>'))})),this.Close(t))}},Remove:function(t){t.preventDefault();var i=e("form",this.$el),n=this.$el.data("menu_item_id");if(n&&i.length){var a=e("#menu-to-edit").find("#menu-item-"+n),o=a.find(".menu-item-wpmi_icon");a.length&&(i.find(".wpmi-input").each((function(t){var i=e(this).prop("id").match(/wpmi-input-([a-z]+)/)[1];a.find("input#wpmi-input-"+i).val("")})),o.remove(),this.Close(t))}}}),e(document).on("click",".menu-item-wpmi_open",(function(e){e.preventDefault(),void 0===t.__instance&&(t.__instance=new t.Application(e))})),e(document).on("click","#wpmi_metabox",(function(t){var i=e("input:checked",e(this)).val(),n=e("#menu").val();e(t.target).hasClass("save")&&i&&n&&(t.preventDefault(),e.ajax({type:"POST",url:ajaxurl,data:{action:"wpmi_save_nav_menu",menu_id:n,menu_font:i,nonce:wpmi_l10n.nonce},beforeSend:function(){},complete:function(){},error:function(){alert("Error!")},success:function(e){location.reload()}}))}))}(n()),(window.tiktok=window.tiktok||{}).backend=t})();