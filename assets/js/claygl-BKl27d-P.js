function Te(r,t,e){typeof t=="object"&&(e=t,t=null);var n=this,i;if(!(r instanceof Function)){i=[];for(var a in r)r.hasOwnProperty(a)&&i.push(a)}var s=function(u){if(n.apply(this,arguments),r instanceof Function?Ae(this,r.call(this,u)):Tn(this,r,i),this.constructor===s)for(var f=s.__initializers__,h=0;h<f.length;h++)f[h].apply(this,arguments)};s.__super__=n,n.__initializers__?s.__initializers__=n.__initializers__.slice():s.__initializers__=[],t&&s.__initializers__.push(t);var o=function(){};return o.prototype=n.prototype,s.prototype=new o,s.prototype.constructor=s,Ae(s.prototype,e),s.extend=n.extend,s.derive=n.extend,s}function Ae(r,t){if(t)for(var e in t)t.hasOwnProperty(e)&&(r[e]=t[e])}function Tn(r,t,e){for(var n=0;n<e.length;n++){var i=e[n];r[i]=t[i]}}const An={extend:Te,derive:Te};function Rn(r,t){this.action=r,this.context=t}var Sn={trigger:function(r){if(this.hasOwnProperty("__handlers__")&&this.__handlers__.hasOwnProperty(r)){var t=this.__handlers__[r],e=t.length,n=-1,i=arguments;switch(i.length){case 1:for(;++n<e;)t[n].action.call(t[n].context);return;case 2:for(;++n<e;)t[n].action.call(t[n].context,i[1]);return;case 3:for(;++n<e;)t[n].action.call(t[n].context,i[1],i[2]);return;case 4:for(;++n<e;)t[n].action.call(t[n].context,i[1],i[2],i[3]);return;case 5:for(;++n<e;)t[n].action.call(t[n].context,i[1],i[2],i[3],i[4]);return;default:for(;++n<e;)t[n].action.apply(t[n].context,Array.prototype.slice.call(i,1));return}}},on:function(r,t,e){if(!(!r||!t)){var n=this.__handlers__||(this.__handlers__={});if(!n[r])n[r]=[];else if(this.has(r,t))return;var i=new Rn(t,e||this);return n[r].push(i),this}},once:function(r,t,e){if(!r||!t)return;var n=this;function i(){n.off(r,i),t.apply(this,arguments)}return this.on(r,i,e)},before:function(r,t,e){if(!(!r||!t))return r="before"+r,this.on(r,t,e)},after:function(r,t,e){if(!(!r||!t))return r="after"+r,this.on(r,t,e)},success:function(r,t){return this.once("success",r,t)},error:function(r,t){return this.once("error",r,t)},off:function(r,t){var e=this.__handlers__||(this.__handlers__={});if(!t){e[r]=[];return}if(e[r]){for(var n=e[r],i=[],a=0;a<n.length;a++)t&&n[a].action!==t&&i.push(n[a]);e[r]=i}return this},has:function(r,t){var e=this.__handlers__;if(!e||!e[r])return!1;for(var n=e[r],i=0;i<n.length;i++)if(n[i].action===t)return!0}};const Mn=Sn;var wn=0,Cn=Array.prototype,Nn=Cn.forEach,ar={genGUID:function(){return++wn},relative2absolute:function(r,t){if(!t||r.match(/^\//))return r;for(var e=r.split("/"),n=t.split("/"),i=e[0];i==="."||i==="..";)i===".."&&n.pop(),e.shift(),i=e[0];return n.join("/")+"/"+e.join("/")},extend:function(r,t){if(t)for(var e in t)t.hasOwnProperty(e)&&(r[e]=t[e]);return r},defaults:function(r,t){if(t)for(var e in t)r[e]===void 0&&(r[e]=t[e]);return r},extendWithPropList:function(r,t,e){if(t)for(var n=0;n<e.length;n++){var i=e[n];r[i]=t[i]}return r},defaultsWithPropList:function(r,t,e){if(t)for(var n=0;n<e.length;n++){var i=e[n];r[i]==null&&(r[i]=t[i])}return r},each:function(r,t,e){if(r&&t)if(r.forEach&&r.forEach===Nn)r.forEach(t,e);else if(r.length===+r.length)for(var n=0,i=r.length;n<i;n++)t.call(e,r[n],n,r);else for(var a in r)r.hasOwnProperty(a)&&t.call(e,r[a],a,r)},isObject:function(r){return r===Object(r)},isArray:function(r){return Array.isArray(r)},isArrayLike:function(r){return r?r.length===+r.length:!1},clone:function(r){if(ar.isObject(r)){if(ar.isArray(r))return r.slice();if(ar.isArrayLike(r)){for(var t=new r.constructor(r.length),e=0;e<r.length;e++)t[e]=r[e];return t}else return ar.extend({},r)}else return r}},lr=function(){this.__uid__=ar.genGUID()};lr.__initializers__=[function(r){ar.extend(this,r)}];ar.extend(lr,An);ar.extend(lr.prototype,Mn);var Re=["OES_texture_float","OES_texture_half_float","OES_texture_float_linear","OES_texture_half_float_linear","OES_standard_derivatives","OES_vertex_array_object","OES_element_index_uint","WEBGL_compressed_texture_s3tc","WEBGL_depth_texture","EXT_texture_filter_anisotropic","EXT_shader_texture_lod","WEBGL_draw_buffers","EXT_frag_depth","EXT_sRGB","ANGLE_instanced_arrays"],Se=["MAX_TEXTURE_SIZE","MAX_CUBE_MAP_TEXTURE_SIZE"];function Ln(r){for(var t={},e={},n=0;n<Re.length;n++){var i=Re[n];s(i)}for(var n=0;n<Se.length;n++){var a=Se[n];e[a]=r.getParameter(r[a])}this.getExtension=function(o){return o in t||s(o),t[o]},this.getParameter=function(o){return e[o]};function s(o){if(r.getExtension){var u=r.getExtension(o);u||(u=r.getExtension("MOZ_"+o)),u||(u=r.getExtension("WEBKIT_"+o)),t[o]=u}}}const T={DEPTH_BUFFER_BIT:256,STENCIL_BUFFER_BIT:1024,COLOR_BUFFER_BIT:16384,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,ZERO:0,ONE:1,SRC_COLOR:768,ONE_MINUS_SRC_COLOR:769,SRC_ALPHA:770,ONE_MINUS_SRC_ALPHA:771,DST_ALPHA:772,ONE_MINUS_DST_ALPHA:773,DST_COLOR:774,ONE_MINUS_DST_COLOR:775,SRC_ALPHA_SATURATE:776,FUNC_ADD:32774,BLEND_EQUATION:32777,BLEND_EQUATION_RGB:32777,BLEND_EQUATION_ALPHA:34877,FUNC_SUBTRACT:32778,FUNC_REVERSE_SUBTRACT:32779,BLEND_DST_RGB:32968,BLEND_SRC_RGB:32969,BLEND_DST_ALPHA:32970,BLEND_SRC_ALPHA:32971,CONSTANT_COLOR:32769,ONE_MINUS_CONSTANT_COLOR:32770,CONSTANT_ALPHA:32771,ONE_MINUS_CONSTANT_ALPHA:32772,BLEND_COLOR:32773,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,ARRAY_BUFFER_BINDING:34964,ELEMENT_ARRAY_BUFFER_BINDING:34965,STREAM_DRAW:35040,STATIC_DRAW:35044,DYNAMIC_DRAW:35048,BUFFER_SIZE:34660,BUFFER_USAGE:34661,CURRENT_VERTEX_ATTRIB:34342,FRONT:1028,BACK:1029,FRONT_AND_BACK:1032,CULL_FACE:2884,BLEND:3042,DITHER:3024,STENCIL_TEST:2960,DEPTH_TEST:2929,SCISSOR_TEST:3089,POLYGON_OFFSET_FILL:32823,SAMPLE_ALPHA_TO_COVERAGE:32926,SAMPLE_COVERAGE:32928,NO_ERROR:0,INVALID_ENUM:1280,INVALID_VALUE:1281,INVALID_OPERATION:1282,OUT_OF_MEMORY:1285,CW:2304,CCW:2305,LINE_WIDTH:2849,ALIASED_POINT_SIZE_RANGE:33901,ALIASED_LINE_WIDTH_RANGE:33902,CULL_FACE_MODE:2885,FRONT_FACE:2886,DEPTH_RANGE:2928,DEPTH_WRITEMASK:2930,DEPTH_CLEAR_VALUE:2931,DEPTH_FUNC:2932,STENCIL_CLEAR_VALUE:2961,STENCIL_FUNC:2962,STENCIL_FAIL:2964,STENCIL_PASS_DEPTH_FAIL:2965,STENCIL_PASS_DEPTH_PASS:2966,STENCIL_REF:2967,STENCIL_VALUE_MASK:2963,STENCIL_WRITEMASK:2968,STENCIL_BACK_FUNC:34816,STENCIL_BACK_FAIL:34817,STENCIL_BACK_PASS_DEPTH_FAIL:34818,STENCIL_BACK_PASS_DEPTH_PASS:34819,STENCIL_BACK_REF:36003,STENCIL_BACK_VALUE_MASK:36004,STENCIL_BACK_WRITEMASK:36005,VIEWPORT:2978,SCISSOR_BOX:3088,COLOR_CLEAR_VALUE:3106,COLOR_WRITEMASK:3107,UNPACK_ALIGNMENT:3317,PACK_ALIGNMENT:3333,MAX_TEXTURE_SIZE:3379,MAX_VIEWPORT_DIMS:3386,SUBPIXEL_BITS:3408,RED_BITS:3410,GREEN_BITS:3411,BLUE_BITS:3412,ALPHA_BITS:3413,DEPTH_BITS:3414,STENCIL_BITS:3415,POLYGON_OFFSET_UNITS:10752,POLYGON_OFFSET_FACTOR:32824,TEXTURE_BINDING_2D:32873,SAMPLE_BUFFERS:32936,SAMPLES:32937,SAMPLE_COVERAGE_VALUE:32938,SAMPLE_COVERAGE_INVERT:32939,COMPRESSED_TEXTURE_FORMATS:34467,DONT_CARE:4352,FASTEST:4353,NICEST:4354,GENERATE_MIPMAP_HINT:33170,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,DEPTH_COMPONENT:6402,ALPHA:6406,RGB:6407,RGBA:6408,LUMINANCE:6409,LUMINANCE_ALPHA:6410,UNSIGNED_SHORT_4_4_4_4:32819,UNSIGNED_SHORT_5_5_5_1:32820,UNSIGNED_SHORT_5_6_5:33635,FRAGMENT_SHADER:35632,VERTEX_SHADER:35633,MAX_VERTEX_ATTRIBS:34921,MAX_VERTEX_UNIFORM_VECTORS:36347,MAX_VARYING_VECTORS:36348,MAX_COMBINED_TEXTURE_IMAGE_UNITS:35661,MAX_VERTEX_TEXTURE_IMAGE_UNITS:35660,MAX_TEXTURE_IMAGE_UNITS:34930,MAX_FRAGMENT_UNIFORM_VECTORS:36349,SHADER_TYPE:35663,DELETE_STATUS:35712,LINK_STATUS:35714,VALIDATE_STATUS:35715,ATTACHED_SHADERS:35717,ACTIVE_UNIFORMS:35718,ACTIVE_ATTRIBUTES:35721,SHADING_LANGUAGE_VERSION:35724,CURRENT_PROGRAM:35725,NEVER:512,LESS:513,EQUAL:514,LEQUAL:515,GREATER:516,NOTEQUAL:517,GEQUAL:518,ALWAYS:519,KEEP:7680,REPLACE:7681,INCR:7682,DECR:7683,INVERT:5386,INCR_WRAP:34055,DECR_WRAP:34056,VENDOR:7936,RENDERER:7937,VERSION:7938,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,TEXTURE_MAG_FILTER:10240,TEXTURE_MIN_FILTER:10241,TEXTURE_WRAP_S:10242,TEXTURE_WRAP_T:10243,TEXTURE_2D:3553,TEXTURE:5890,TEXTURE_CUBE_MAP:34067,TEXTURE_BINDING_CUBE_MAP:34068,TEXTURE_CUBE_MAP_POSITIVE_X:34069,TEXTURE_CUBE_MAP_NEGATIVE_X:34070,TEXTURE_CUBE_MAP_POSITIVE_Y:34071,TEXTURE_CUBE_MAP_NEGATIVE_Y:34072,TEXTURE_CUBE_MAP_POSITIVE_Z:34073,TEXTURE_CUBE_MAP_NEGATIVE_Z:34074,MAX_CUBE_MAP_TEXTURE_SIZE:34076,TEXTURE0:33984,TEXTURE1:33985,TEXTURE2:33986,TEXTURE3:33987,TEXTURE4:33988,TEXTURE5:33989,TEXTURE6:33990,TEXTURE7:33991,TEXTURE8:33992,TEXTURE9:33993,TEXTURE10:33994,TEXTURE11:33995,TEXTURE12:33996,TEXTURE13:33997,TEXTURE14:33998,TEXTURE15:33999,TEXTURE16:34e3,TEXTURE17:34001,TEXTURE18:34002,TEXTURE19:34003,TEXTURE20:34004,TEXTURE21:34005,TEXTURE22:34006,TEXTURE23:34007,TEXTURE24:34008,TEXTURE25:34009,TEXTURE26:34010,TEXTURE27:34011,TEXTURE28:34012,TEXTURE29:34013,TEXTURE30:34014,TEXTURE31:34015,ACTIVE_TEXTURE:34016,REPEAT:10497,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,INT_VEC2:35667,INT_VEC3:35668,INT_VEC4:35669,BOOL:35670,BOOL_VEC2:35671,BOOL_VEC3:35672,BOOL_VEC4:35673,FLOAT_MAT2:35674,FLOAT_MAT3:35675,FLOAT_MAT4:35676,SAMPLER_2D:35678,SAMPLER_CUBE:35680,VERTEX_ATTRIB_ARRAY_ENABLED:34338,VERTEX_ATTRIB_ARRAY_SIZE:34339,VERTEX_ATTRIB_ARRAY_STRIDE:34340,VERTEX_ATTRIB_ARRAY_TYPE:34341,VERTEX_ATTRIB_ARRAY_NORMALIZED:34922,VERTEX_ATTRIB_ARRAY_POINTER:34373,VERTEX_ATTRIB_ARRAY_BUFFER_BINDING:34975,COMPILE_STATUS:35713,LOW_FLOAT:36336,MEDIUM_FLOAT:36337,HIGH_FLOAT:36338,LOW_INT:36339,MEDIUM_INT:36340,HIGH_INT:36341,FRAMEBUFFER:36160,RENDERBUFFER:36161,RGBA4:32854,RGB5_A1:32855,RGB565:36194,DEPTH_COMPONENT16:33189,STENCIL_INDEX:6401,STENCIL_INDEX8:36168,DEPTH_STENCIL:34041,RENDERBUFFER_WIDTH:36162,RENDERBUFFER_HEIGHT:36163,RENDERBUFFER_INTERNAL_FORMAT:36164,RENDERBUFFER_RED_SIZE:36176,RENDERBUFFER_GREEN_SIZE:36177,RENDERBUFFER_BLUE_SIZE:36178,RENDERBUFFER_ALPHA_SIZE:36179,RENDERBUFFER_DEPTH_SIZE:36180,RENDERBUFFER_STENCIL_SIZE:36181,FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE:36048,FRAMEBUFFER_ATTACHMENT_OBJECT_NAME:36049,FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL:36050,FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE:36051,COLOR_ATTACHMENT0:36064,DEPTH_ATTACHMENT:36096,STENCIL_ATTACHMENT:36128,DEPTH_STENCIL_ATTACHMENT:33306,NONE:0,FRAMEBUFFER_COMPLETE:36053,FRAMEBUFFER_INCOMPLETE_ATTACHMENT:36054,FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:36055,FRAMEBUFFER_INCOMPLETE_DIMENSIONS:36057,FRAMEBUFFER_UNSUPPORTED:36061,FRAMEBUFFER_BINDING:36006,RENDERBUFFER_BINDING:36007,MAX_RENDERBUFFER_SIZE:34024,INVALID_FRAMEBUFFER_OPERATION:1286,UNPACK_FLIP_Y_WEBGL:37440,UNPACK_PREMULTIPLY_ALPHA_WEBGL:37441,CONTEXT_LOST_WEBGL:37442,UNPACK_COLORSPACE_CONVERSION_WEBGL:37443,BROWSER_DEFAULT_WEBGL:37444};function In(r){var t=new XMLHttpRequest;t.open("get",r.url),t.responseType=r.responseType||"text",r.onprogress&&(t.onprogress=function(e){if(e.lengthComputable){var n=e.loaded/e.total;r.onprogress(n,e.loaded,e.total)}else r.onprogress(null)}),t.onload=function(e){t.status>=400?r.onerror&&r.onerror():r.onload&&r.onload(t.response)},r.onerror&&(t.onerror=r.onerror),t.send(null)}const Dn={get:In};var kt,K={};K.supportWebGL=function(){if(kt==null)try{var r=document.createElement("canvas"),t=r.getContext("webgl")||r.getContext("experimental-webgl");if(!t)throw new Error}catch{kt=!1}return kt};K.Int8Array=typeof Int8Array>"u"?Array:Int8Array;K.Uint8Array=typeof Uint8Array>"u"?Array:Uint8Array;K.Uint16Array=typeof Uint16Array>"u"?Array:Uint16Array;K.Uint32Array=typeof Uint32Array>"u"?Array:Uint32Array;K.Int16Array=typeof Int16Array>"u"?Array:Int16Array;K.Float32Array=typeof Float32Array>"u"?Array:Float32Array;K.Float64Array=typeof Float64Array>"u"?Array:Float64Array;var $r={};typeof window<"u"?$r=window:typeof global<"u"&&($r=global);K.requestAnimationFrame=$r.requestAnimationFrame||$r.msRequestAnimationFrame||$r.mozRequestAnimationFrame||$r.webkitRequestAnimationFrame||function(r){setTimeout(r,16)};K.createCanvas=function(){return document.createElement("canvas")};K.createImage=function(){return new $r.Image};K.request={get:Dn.get};K.addEventListener=function(r,t,e,n){r.addEventListener(t,e,n)};K.removeEventListener=function(r,t,e){r.removeEventListener(t,e)};var ur=function(){this.head=null,this.tail=null,this._length=0};ur.prototype.insert=function(r){var t=new ur.Entry(r);return this.insertEntry(t),t};ur.prototype.insertAt=function(r,t){if(!(r<0)){for(var e=this.head,n=0;e&&n!=r;)e=e.next,n++;if(e){var i=new ur.Entry(t),a=e.prev;a?(a.next=i,i.prev=a):this.head=i,i.next=e,e.prev=i}else this.insert(t)}};ur.prototype.insertBeforeEntry=function(r,t){var e=new ur.Entry(r),n=t.prev;n?(n.next=e,e.prev=n):this.head=e,e.next=t,t.prev=e,this._length++};ur.prototype.insertEntry=function(r){this.head?(this.tail.next=r,r.prev=this.tail,this.tail=r):this.head=this.tail=r,this._length++};ur.prototype.remove=function(r){var t=r.prev,e=r.next;t?t.next=e:this.head=e,e?e.prev=t:this.tail=t,r.next=r.prev=null,this._length--};ur.prototype.removeAt=function(r){if(!(r<0)){for(var t=this.head,e=0;t&&e!=r;)t=t.next,e++;if(t)return this.remove(t),t.value}};ur.prototype.getHead=function(){if(this.head)return this.head.value};ur.prototype.getTail=function(){if(this.tail)return this.tail.value};ur.prototype.getAt=function(r){if(!(r<0)){for(var t=this.head,e=0;t&&e!=r;)t=t.next,e++;return t.value}};ur.prototype.indexOf=function(r){for(var t=this.head,e=0;t;){if(t.value===r)return e;t=t.next,e++}};ur.prototype.length=function(){return this._length};ur.prototype.isEmpty=function(){return this._length===0};ur.prototype.forEach=function(r,t){for(var e=this.head,n=0,i=typeof t<"u";e;)i?r.call(t,e.value,n):r(e.value,n),e=e.next,n++};ur.prototype.clear=function(){this.tail=this.head=null,this._length=0};ur.Entry=function(r){this.value=r,this.next=null,this.prev=null};var _t=function(r){this._list=new ur,this._map={},this._maxSize=r||10};_t.prototype.setMaxSize=function(r){this._maxSize=r};_t.prototype.put=function(r,t){if(!this._map.hasOwnProperty(r)){var e=this._list.length();if(e>=this._maxSize&&e>0){var n=this._list.head;this._list.remove(n),delete this._map[n.key]}var i=this._list.insert(t);i.key=r,this._map[r]=i}};_t.prototype.get=function(r){var t=this._map[r];if(this._map.hasOwnProperty(r))return t!==this._list.tail&&(this._list.remove(t),this._list.insertEntry(t)),t.value};_t.prototype.remove=function(r){var t=this._map[r];typeof t<"u"&&(delete this._map[r],this._list.remove(t))};_t.prototype.clear=function(){this._list.clear(),this._map={}};const en=_t;var tr={},Me={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};function Ir(r){return r=Math.round(r),r<0?0:r>255?255:r}function Pn(r){return r=Math.round(r),r<0?0:r>360?360:r}function At(r){return r<0?0:r>1?1:r}function Xt(r){return r.length&&r.charAt(r.length-1)==="%"?Ir(parseFloat(r)/100*255):Ir(parseInt(r,10))}function ct(r){return r.length&&r.charAt(r.length-1)==="%"?At(parseFloat(r)/100):At(parseFloat(r))}function qt(r,t,e){return e<0?e+=1:e>1&&(e-=1),e*6<1?r+(t-r)*e*6:e*2<1?t:e*3<2?r+(t-r)*(2/3-e)*6:r}function Yr(r,t,e){return r+(t-r)*e}function Lr(r,t,e,n,i){return r[0]=t,r[1]=e,r[2]=n,r[3]=i,r}function he(r,t){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r}var nn=new en(20),wt=null;function et(r,t){wt&&he(wt,t),wt=nn.put(r,wt||t.slice())}tr.parse=function(r,t){if(r){t=t||[];var e=nn.get(r);if(e)return he(t,e);r=r+"";var n=r.replace(/ /g,"").toLowerCase();if(n in Me)return he(t,Me[n]),et(r,t),t;if(n.charAt(0)==="#"){if(n.length===4){var i=parseInt(n.substr(1),16);if(!(i>=0&&i<=4095)){Lr(t,0,0,0,1);return}return Lr(t,(i&3840)>>4|(i&3840)>>8,i&240|(i&240)>>4,i&15|(i&15)<<4,1),et(r,t),t}else if(n.length===7){var i=parseInt(n.substr(1),16);if(!(i>=0&&i<=16777215)){Lr(t,0,0,0,1);return}return Lr(t,(i&16711680)>>16,(i&65280)>>8,i&255,1),et(r,t),t}return}var a=n.indexOf("("),s=n.indexOf(")");if(a!==-1&&s+1===n.length){var o=n.substr(0,a),u=n.substr(a+1,s-(a+1)).split(","),f=1;switch(o){case"rgba":if(u.length!==4){Lr(t,0,0,0,1);return}f=ct(u.pop());case"rgb":if(u.length!==3){Lr(t,0,0,0,1);return}return Lr(t,Xt(u[0]),Xt(u[1]),Xt(u[2]),f),et(r,t),t;case"hsla":if(u.length!==4){Lr(t,0,0,0,1);return}return u[3]=ct(u[3]),ce(u,t),et(r,t),t;case"hsl":if(u.length!==3){Lr(t,0,0,0,1);return}return ce(u,t),et(r,t),t;default:return}}Lr(t,0,0,0,1)}};tr.parseToFloat=function(r,t){if(t=tr.parse(r,t),!!t)return t[0]/=255,t[1]/=255,t[2]/=255,t};function ce(r,t){var e=(parseFloat(r[0])%360+360)%360/360,n=ct(r[1]),i=ct(r[2]),a=i<=.5?i*(n+1):i+n-i*n,s=i*2-a;return t=t||[],Lr(t,Ir(qt(s,a,e+1/3)*255),Ir(qt(s,a,e)*255),Ir(qt(s,a,e-1/3)*255),1),r.length===4&&(t[3]=r[3]),t}function On(r){if(r){var t=r[0]/255,e=r[1]/255,n=r[2]/255,i=Math.min(t,e,n),a=Math.max(t,e,n),s=a-i,o=(a+i)/2,u,f;if(s===0)u=0,f=0;else{o<.5?f=s/(a+i):f=s/(2-a-i);var h=((a-t)/6+s/2)/s,c=((a-e)/6+s/2)/s,d=((a-n)/6+s/2)/s;t===a?u=d-c:e===a?u=1/3+h-d:n===a&&(u=2/3+c-h),u<0&&(u+=1),u>1&&(u-=1)}var l=[u*360,f,o];return r[3]!=null&&l.push(r[3]),l}}tr.lift=function(r,t){var e=tr.parse(r);if(e){for(var n=0;n<3;n++)t<0?e[n]=e[n]*(1-t)|0:e[n]=(255-e[n])*t+e[n]|0;return tr.stringify(e,e.length===4?"rgba":"rgb")}};tr.toHex=function(r){var t=tr.parse(r);if(t)return((1<<24)+(t[0]<<16)+(t[1]<<8)+ +t[2]).toString(16).slice(1)};tr.fastLerp=function(r,t,e){if(!(!(t&&t.length)||!(r>=0&&r<=1))){e=e||[];var n=r*(t.length-1),i=Math.floor(n),a=Math.ceil(n),s=t[i],o=t[a],u=n-i;return e[0]=Ir(Yr(s[0],o[0],u)),e[1]=Ir(Yr(s[1],o[1],u)),e[2]=Ir(Yr(s[2],o[2],u)),e[3]=At(Yr(s[3],o[3],u)),e}};tr.fastMapToColor=tr.fastLerp;tr.lerp=function(r,t,e){if(!(!(t&&t.length)||!(r>=0&&r<=1))){var n=r*(t.length-1),i=Math.floor(n),a=Math.ceil(n),s=tr.parse(t[i]),o=tr.parse(t[a]),u=n-i,f=tr.stringify([Ir(Yr(s[0],o[0],u)),Ir(Yr(s[1],o[1],u)),Ir(Yr(s[2],o[2],u)),At(Yr(s[3],o[3],u))],"rgba");return e?{color:f,leftIndex:i,rightIndex:a,value:n}:f}};tr.mapToColor=tr.lerp;tr.modifyHSL=function(r,t,e,n){if(r=tr.parse(r),r)return r=On(r),t!=null&&(r[0]=Pn(t)),e!=null&&(r[1]=ct(e)),n!=null&&(r[2]=ct(n)),tr.stringify(ce(r),"rgba")};tr.modifyAlpha=function(r,t){if(r=tr.parse(r),r&&t!=null)return r[3]=At(t),tr.stringify(r,"rgba")};tr.stringify=function(r,t){if(!(!r||!r.length)){var e=r[0]+","+r[1]+","+r[2];return(t==="rgba"||t==="hsva"||t==="hsla")&&(e+=","+r[3]),t+"("+e+")"}};var bn=tr.parseToFloat,Yt={};function we(r){var t=Object.keys(r);t.sort();for(var e=[],n=0;n<t.length;n++){var i=t[n],a=r[i];a===null?e.push(i):e.push(i+" "+a.toString())}return e.join(`
`)}function Bn(r,t,e){e.sort();for(var n=[],i=0;i<e.length;i++){var a=e[i];n.push(a)}var s=we(r)+`
`+we(t)+`
`+n.join(`
`);if(Yt[s])return Yt[s];var o=ar.genGUID();return Yt[s]=o,o}var St=lr.extend(function(){return{name:"",depthTest:!0,depthMask:!0,transparent:!1,blend:null,autoUpdateTextureStatus:!0,uniforms:{},vertexDefines:{},fragmentDefines:{},_textureStatus:{},_enabledUniforms:null}},function(){this.name||(this.name="MATERIAL_"+this.__uid__),this.shader&&this.attachShader(this.shader,!0)},{precision:"highp",setUniform:function(r,t){t===void 0&&console.warn('Uniform value "'+r+'" is undefined');var e=this.uniforms[r];e&&(typeof t=="string"&&(t=bn(t)||t),e.value=t,this.autoUpdateTextureStatus&&e.type==="t"&&(t?this.enableTexture(r):this.disableTexture(r)))},setUniforms:function(r){for(var t in r){var e=r[t];this.setUniform(t,e)}},isUniformEnabled:function(r){return this._enabledUniforms.indexOf(r)>=0},getEnabledUniforms:function(){return this._enabledUniforms},getTextureUniforms:function(){return this._textureUniforms},set:function(r,t){if(typeof r=="object")for(var e in r){var n=r[e];this.setUniform(e,n)}else this.setUniform(r,t)},get:function(r){var t=this.uniforms[r];if(t)return t.value},attachShader:function(r,t){var e=this.uniforms;this.uniforms=r.createUniforms(),this.shader=r;var n=this.uniforms;this._enabledUniforms=Object.keys(n),this._enabledUniforms.sort(),this._textureUniforms=this._enabledUniforms.filter(function(f){var h=this.uniforms[f].type;return h==="t"||h==="tv"},this);var i=this.vertexDefines,a=this.fragmentDefines;if(this.vertexDefines=ar.clone(r.vertexDefines),this.fragmentDefines=ar.clone(r.fragmentDefines),t){for(var s in e)n[s]&&(n[s].value=e[s].value);ar.defaults(this.vertexDefines,i),ar.defaults(this.fragmentDefines,a)}var o={};for(var u in r.textures)o[u]={shaderType:r.textures[u].shaderType,type:r.textures[u].type,enabled:t&&this._textureStatus[u]?this._textureStatus[u].enabled:!1};this._textureStatus=o,this._programKey=""},clone:function(){var r=new this.constructor({name:this.name,shader:this.shader});for(var t in this.uniforms)r.uniforms[t].value=this.uniforms[t].value;return r.depthTest=this.depthTest,r.depthMask=this.depthMask,r.transparent=this.transparent,r.blend=this.blend,r.vertexDefines=ar.clone(this.vertexDefines),r.fragmentDefines=ar.clone(this.fragmentDefines),r.enableTexture(this.getEnabledTextures()),r.precision=this.precision,r},define:function(r,t,e){var n=this.vertexDefines,i=this.fragmentDefines;r!=="vertex"&&r!=="fragment"&&r!=="both"&&arguments.length<3&&(e=t,t=r,r="both"),e=e??null,(r==="vertex"||r==="both")&&n[t]!==e&&(n[t]=e,this._programKey=""),(r==="fragment"||r==="both")&&i[t]!==e&&(i[t]=e,r!=="both"&&(this._programKey=""))},undefine:function(r,t){r!=="vertex"&&r!=="fragment"&&r!=="both"&&arguments.length<2&&(t=r,r="both"),(r==="vertex"||r==="both")&&this.isDefined("vertex",t)&&(delete this.vertexDefines[t],this._programKey=""),(r==="fragment"||r==="both")&&this.isDefined("fragment",t)&&(delete this.fragmentDefines[t],r!=="both"&&(this._programKey=""))},isDefined:function(r,t){switch(r){case"vertex":return this.vertexDefines[t]!==void 0;case"fragment":return this.fragmentDefines[t]!==void 0}},getDefine:function(r,t){switch(r){case"vertex":return this.vertexDefines[t];case"fragment":return this.fragmentDefines[t]}},enableTexture:function(r){if(Array.isArray(r)){for(var t=0;t<r.length;t++)this.enableTexture(r[t]);return}var e=this._textureStatus[r];if(e){var n=e.enabled;n||(e.enabled=!0,this._programKey="")}},enableTexturesAll:function(){var r=this._textureStatus;for(var t in r)r[t].enabled=!0;this._programKey=""},disableTexture:function(r){if(Array.isArray(r)){for(var t=0;t<r.length;t++)this.disableTexture(r[t]);return}var e=this._textureStatus[r];if(e){var n=!e.enabled;n||(e.enabled=!1,this._programKey="")}},disableTexturesAll:function(){var r=this._textureStatus;for(var t in r)r[t].enabled=!1;this._programKey=""},isTextureEnabled:function(r){var t=this._textureStatus;return!!t[r]&&t[r].enabled},getEnabledTextures:function(){var r=[],t=this._textureStatus;for(var e in t)t[e].enabled&&r.push(e);return r},dirtyDefines:function(){this._programKey=""},getProgramKey:function(){return this._programKey||(this._programKey=Bn(this.vertexDefines,this.fragmentDefines,this.getEnabledTextures())),this._programKey}}),bt=1e-6,hr=Array,ht=Math.random,F={};F.create=function(){var r=new hr(2);return r[0]=0,r[1]=0,r};F.clone=function(r){var t=new hr(2);return t[0]=r[0],t[1]=r[1],t};F.fromValues=function(r,t){var e=new hr(2);return e[0]=r,e[1]=t,e};F.copy=function(r,t){return r[0]=t[0],r[1]=t[1],r};F.set=function(r,t,e){return r[0]=t,r[1]=e,r};F.add=function(r,t,e){return r[0]=t[0]+e[0],r[1]=t[1]+e[1],r};F.subtract=function(r,t,e){return r[0]=t[0]-e[0],r[1]=t[1]-e[1],r};F.sub=F.subtract;F.multiply=function(r,t,e){return r[0]=t[0]*e[0],r[1]=t[1]*e[1],r};F.mul=F.multiply;F.divide=function(r,t,e){return r[0]=t[0]/e[0],r[1]=t[1]/e[1],r};F.div=F.divide;F.min=function(r,t,e){return r[0]=Math.min(t[0],e[0]),r[1]=Math.min(t[1],e[1]),r};F.max=function(r,t,e){return r[0]=Math.max(t[0],e[0]),r[1]=Math.max(t[1],e[1]),r};F.scale=function(r,t,e){return r[0]=t[0]*e,r[1]=t[1]*e,r};F.scaleAndAdd=function(r,t,e,n){return r[0]=t[0]+e[0]*n,r[1]=t[1]+e[1]*n,r};F.distance=function(r,t){var e=t[0]-r[0],n=t[1]-r[1];return Math.sqrt(e*e+n*n)};F.dist=F.distance;F.squaredDistance=function(r,t){var e=t[0]-r[0],n=t[1]-r[1];return e*e+n*n};F.sqrDist=F.squaredDistance;F.length=function(r){var t=r[0],e=r[1];return Math.sqrt(t*t+e*e)};F.len=F.length;F.squaredLength=function(r){var t=r[0],e=r[1];return t*t+e*e};F.sqrLen=F.squaredLength;F.negate=function(r,t){return r[0]=-t[0],r[1]=-t[1],r};F.inverse=function(r,t){return r[0]=1/t[0],r[1]=1/t[1],r};F.normalize=function(r,t){var e=t[0],n=t[1],i=e*e+n*n;return i>0&&(i=1/Math.sqrt(i),r[0]=t[0]*i,r[1]=t[1]*i),r};F.dot=function(r,t){return r[0]*t[0]+r[1]*t[1]};F.cross=function(r,t,e){var n=t[0]*e[1]-t[1]*e[0];return r[0]=r[1]=0,r[2]=n,r};F.lerp=function(r,t,e,n){var i=t[0],a=t[1];return r[0]=i+n*(e[0]-i),r[1]=a+n*(e[1]-a),r};F.random=function(r,t){t=t||1;var e=GLMAT_RANDOM()*2*Math.PI;return r[0]=Math.cos(e)*t,r[1]=Math.sin(e)*t,r};F.transformMat2=function(r,t,e){var n=t[0],i=t[1];return r[0]=e[0]*n+e[2]*i,r[1]=e[1]*n+e[3]*i,r};F.transformMat2d=function(r,t,e){var n=t[0],i=t[1];return r[0]=e[0]*n+e[2]*i+e[4],r[1]=e[1]*n+e[3]*i+e[5],r};F.transformMat3=function(r,t,e){var n=t[0],i=t[1];return r[0]=e[0]*n+e[3]*i+e[6],r[1]=e[1]*n+e[4]*i+e[7],r};F.transformMat4=function(r,t,e){var n=t[0],i=t[1];return r[0]=e[0]*n+e[4]*i+e[12],r[1]=e[1]*n+e[5]*i+e[13],r};F.forEach=function(){var r=F.create();return function(t,e,n,i,a,s){var o,u;for(e||(e=2),n||(n=0),i?u=Math.min(i*e+n,t.length):u=t.length,o=n;o<u;o+=e)r[0]=t[o],r[1]=t[o+1],a(r,r,s),t[o]=r[0],t[o+1]=r[1];return t}}();const b=F;var k=function(r,t){r=r||0,t=t||0,this.array=b.fromValues(r,t),this._dirty=!0};k.prototype={constructor:k,add:function(r){return b.add(this.array,this.array,r.array),this._dirty=!0,this},set:function(r,t){return this.array[0]=r,this.array[1]=t,this._dirty=!0,this},setArray:function(r){return this.array[0]=r[0],this.array[1]=r[1],this._dirty=!0,this},clone:function(){return new k(this.x,this.y)},copy:function(r){return b.copy(this.array,r.array),this._dirty=!0,this},cross:function(r,t){return b.cross(r.array,this.array,t.array),r._dirty=!0,this},dist:function(r){return b.dist(this.array,r.array)},distance:function(r){return b.distance(this.array,r.array)},div:function(r){return b.div(this.array,this.array,r.array),this._dirty=!0,this},divide:function(r){return b.divide(this.array,this.array,r.array),this._dirty=!0,this},dot:function(r){return b.dot(this.array,r.array)},len:function(){return b.len(this.array)},length:function(){return b.length(this.array)},lerp:function(r,t,e){return b.lerp(this.array,r.array,t.array,e),this._dirty=!0,this},min:function(r){return b.min(this.array,this.array,r.array),this._dirty=!0,this},max:function(r){return b.max(this.array,this.array,r.array),this._dirty=!0,this},mul:function(r){return b.mul(this.array,this.array,r.array),this._dirty=!0,this},multiply:function(r){return b.multiply(this.array,this.array,r.array),this._dirty=!0,this},negate:function(){return b.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return b.normalize(this.array,this.array),this._dirty=!0,this},random:function(r){return b.random(this.array,r),this._dirty=!0,this},scale:function(r){return b.scale(this.array,this.array,r),this._dirty=!0,this},scaleAndAdd:function(r,t){return b.scaleAndAdd(this.array,this.array,r.array,t),this._dirty=!0,this},sqrDist:function(r){return b.sqrDist(this.array,r.array)},squaredDistance:function(r){return b.squaredDistance(this.array,r.array)},sqrLen:function(){return b.sqrLen(this.array)},squaredLength:function(){return b.squaredLength(this.array)},sub:function(r){return b.sub(this.array,this.array,r.array),this._dirty=!0,this},subtract:function(r){return b.subtract(this.array,this.array,r.array),this._dirty=!0,this},transformMat2:function(r){return b.transformMat2(this.array,this.array,r.array),this._dirty=!0,this},transformMat2d:function(r){return b.transformMat2d(this.array,this.array,r.array),this._dirty=!0,this},transformMat3:function(r){return b.transformMat3(this.array,this.array,r.array),this._dirty=!0,this},transformMat4:function(r){return b.transformMat4(this.array,this.array,r.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};if(Object.defineProperty){var Ce=k.prototype;Object.defineProperty(Ce,"x",{get:function(){return this.array[0]},set:function(r){this.array[0]=r,this._dirty=!0}}),Object.defineProperty(Ce,"y",{get:function(){return this.array[1]},set:function(r){this.array[1]=r,this._dirty=!0}})}k.add=function(r,t,e){return b.add(r.array,t.array,e.array),r._dirty=!0,r};k.set=function(r,t,e){return b.set(r.array,t,e),r._dirty=!0,r};k.copy=function(r,t){return b.copy(r.array,t.array),r._dirty=!0,r};k.cross=function(r,t,e){return b.cross(r.array,t.array,e.array),r._dirty=!0,r};k.dist=function(r,t){return b.distance(r.array,t.array)};k.distance=k.dist;k.div=function(r,t,e){return b.divide(r.array,t.array,e.array),r._dirty=!0,r};k.divide=k.div;k.dot=function(r,t){return b.dot(r.array,t.array)};k.len=function(r){return b.length(r.array)};k.lerp=function(r,t,e,n){return b.lerp(r.array,t.array,e.array,n),r._dirty=!0,r};k.min=function(r,t,e){return b.min(r.array,t.array,e.array),r._dirty=!0,r};k.max=function(r,t,e){return b.max(r.array,t.array,e.array),r._dirty=!0,r};k.mul=function(r,t,e){return b.multiply(r.array,t.array,e.array),r._dirty=!0,r};k.multiply=k.mul;k.negate=function(r,t){return b.negate(r.array,t.array),r._dirty=!0,r};k.normalize=function(r,t){return b.normalize(r.array,t.array),r._dirty=!0,r};k.random=function(r,t){return b.random(r.array,t),r._dirty=!0,r};k.scale=function(r,t,e){return b.scale(r.array,t.array,e),r._dirty=!0,r};k.scaleAndAdd=function(r,t,e,n){return b.scaleAndAdd(r.array,t.array,e.array,n),r._dirty=!0,r};k.sqrDist=function(r,t){return b.sqrDist(r.array,t.array)};k.squaredDistance=k.sqrDist;k.sqrLen=function(r){return b.sqrLen(r.array)};k.squaredLength=k.sqrLen;k.sub=function(r,t,e){return b.subtract(r.array,t.array,e.array),r._dirty=!0,r};k.subtract=k.sub;k.transformMat2=function(r,t,e){return b.transformMat2(r.array,t.array,e.array),r._dirty=!0,r};k.transformMat2d=function(r,t,e){return b.transformMat2d(r.array,t.array,e.array),r._dirty=!0,r};k.transformMat3=function(r,t,e){return b.transformMat3(r.array,t.array,e.array),r._dirty=!0,r};k.transformMat4=function(r,t,e){return b.transformMat4(r.array,t.array,e.array),r._dirty=!0,r};const an=k;var Ne=1,Le=2,Kt=3,Ie={};function Un(r){for(var t=r.split(`
`),e=0,n=t.length;e<n;e++)t[e]=e+1+": "+t[e];return t.join(`
`)}function De(r,t,e){if(!r.getShaderParameter(t,r.COMPILE_STATUS))return[r.getShaderInfoLog(t),Un(e)].join(`
`)}var Pe=new K.Float32Array(16),Fn=lr.extend({uniformSemantics:{},attributes:{}},function(){this._locations={},this._textureSlot=0,this._program=null},{bind:function(r){this._textureSlot=0,r.gl.useProgram(this._program)},hasUniform:function(r){var t=this._locations[r];return t!=null},useTextureSlot:function(r,t,e){t&&(r.gl.activeTexture(r.gl.TEXTURE0+e),t.isRenderable()?t.bind(r):t.unbind(r))},currentTextureSlot:function(){return this._textureSlot},resetTextureSlot:function(r){this._textureSlot=r||0},takeCurrentTextureSlot:function(r,t){var e=this._textureSlot;return this.useTextureSlot(r,t,e),this._textureSlot++,e},setUniform:function(r,t,e,n){var i=this._locations,a=i[e];if(a==null)return!1;switch(t){case"m4":if(!(n instanceof Float32Array)){for(var s=0;s<n.length;s++)Pe[s]=n[s];n=Pe}r.uniformMatrix4fv(a,!1,n);break;case"2i":r.uniform2i(a,n[0],n[1]);break;case"2f":r.uniform2f(a,n[0],n[1]);break;case"3i":r.uniform3i(a,n[0],n[1],n[2]);break;case"3f":r.uniform3f(a,n[0],n[1],n[2]);break;case"4i":r.uniform4i(a,n[0],n[1],n[2],n[3]);break;case"4f":r.uniform4f(a,n[0],n[1],n[2],n[3]);break;case"1i":r.uniform1i(a,n);break;case"1f":r.uniform1f(a,n);break;case"1fv":r.uniform1fv(a,n);break;case"1iv":r.uniform1iv(a,n);break;case"2iv":r.uniform2iv(a,n);break;case"2fv":r.uniform2fv(a,n);break;case"3iv":r.uniform3iv(a,n);break;case"3fv":r.uniform3fv(a,n);break;case"4iv":r.uniform4iv(a,n);break;case"4fv":r.uniform4fv(a,n);break;case"m2":case"m2v":r.uniformMatrix2fv(a,!1,n);break;case"m3":case"m3v":r.uniformMatrix3fv(a,!1,n);break;case"m4v":if(Array.isArray(n)&&Array.isArray(n[0])){for(var o=new K.Float32Array(n.length*16),u=0,s=0;s<n.length;s++)for(var f=n[s],h=0;h<16;h++)o[u++]=f[h];r.uniformMatrix4fv(a,!1,o)}else r.uniformMatrix4fv(a,!1,n);break}return!0},setUniformOfSemantic:function(r,t,e){var n=this.uniformSemantics[t];return n?this.setUniform(r,n.type,n.symbol,e):!1},enableAttributes:function(r,t,e){var n=r.gl,i=this._program,a=this._locations,s;e?s=e.__enabledAttributeList:s=Ie[r.__uid__],s||(e?s=e.__enabledAttributeList=[]:s=Ie[r.__uid__]=[]);for(var o=[],u=0;u<t.length;u++){var f=t[u];if(!this.attributes[f]){o[u]=-1;continue}var h=a[f];if(h==null){if(h=n.getAttribLocation(i,f),h===-1){o[u]=-1;continue}a[f]=h}o[u]=h,s[h]?s[h]=Le:s[h]=Ne}for(var u=0;u<s.length;u++)switch(s[u]){case Ne:n.enableVertexAttribArray(u),s[u]=Kt;break;case Le:s[u]=Kt;break;case Kt:n.disableVertexAttribArray(u),s[u]=0;break}return o},getAttribLocation:function(r,t){var e=this._locations,n=e[t];return n==null&&(n=r.getAttribLocation(this._program,t),e[t]=n),n},buildProgram:function(r,t,e,n){var i=r.createShader(r.VERTEX_SHADER),a=r.createProgram();r.shaderSource(i,e),r.compileShader(i);var s=r.createShader(r.FRAGMENT_SHADER);r.shaderSource(s,n),r.compileShader(s);var o=De(r,i,e);if(o||(o=De(r,s,n),o))return o;if(r.attachShader(a,i),r.attachShader(a,s),t.attributeSemantics.POSITION)r.bindAttribLocation(a,0,t.attributeSemantics.POSITION.symbol);else{var u=Object.keys(this.attributes);r.bindAttribLocation(a,0,u[0])}if(r.linkProgram(a),r.deleteShader(i),r.deleteShader(s),this._program=a,this.vertexCode=e,this.fragmentCode=n,!r.getProgramParameter(a,r.LINK_STATUS))return`Could not link program
`+r.getProgramInfoLog(a);for(var f=0;f<t.uniforms.length;f++){var h=t.uniforms[f];this._locations[h]=r.getUniformLocation(a,h)}}});const Hn=Fn;var Gn=/for\s*?\(int\s*?_idx_\s*\=\s*([\w-]+)\;\s*_idx_\s*<\s*([\w-]+);\s*_idx_\s*\+\+\s*\)\s*\{\{([\s\S]+?)(?=\}\})\}\}/g;function Oe(r,t,e){function n(s,o,u,f){var h="";isNaN(o)&&(o in t?o=t[o]:o=i[o]),isNaN(u)&&(u in t?u=t[u]:u=i[u]);for(var c=parseInt(o);c<parseInt(u);c++)h+="{"+f.replace(/float\s*\(\s*_idx_\s*\)/g,c.toFixed(1)).replace(/_idx_/g,c)+"}";return h}var i={};for(var a in e)i[a+"_COUNT"]=e[a];return r.replace(Gn,n)}function Zt(r,t,e){var n=[];if(t)for(var i in t){var a=t[i];a>0&&n.push("#define "+i.toUpperCase()+"_COUNT "+a)}if(e)for(var s=0;s<e.length;s++){var o=e[s];n.push("#define "+o.toUpperCase()+"_ENABLED")}for(var o in r){var u=r[o];u===null?n.push("#define "+o):n.push("#define "+o+" "+u.toString())}return n.join(`
`)}function Vn(r){for(var t=[],e=0;e<r.length;e++)t.push("#extension GL_"+r[e]+" : enable");return t.join(`
`)}function Wn(r){return["precision",r,"float"].join(" ")+`;
`+["precision",r,"int"].join(" ")+`;
`+["precision",r,"sampler2D"].join(" ")+`;
`}function sn(r){this._renderer=r,this._cache={}}sn.prototype.getProgram=function(r,t,e){var n=this._cache,i=r.isSkinnedMesh&&r.isSkinnedMesh(),a=r.isInstancedMesh&&r.isInstancedMesh(),s="s"+t.shader.shaderID+"m"+t.getProgramKey();e&&(s+="se"+e.getProgramKey(r.lightGroup)),i&&(s+=",sk"+r.joints.length),a&&(s+=",is");var g=n[s];if(g)return g;var o=e?e.getLightsNumbers(r.lightGroup):{},u=this._renderer,f=u.gl,h=t.getEnabledTextures(),c="";if(i){var d={SKINNING:null,JOINT_COUNT:r.joints.length};r.joints.length>u.getMaxJointNumber()&&(d.USE_SKIN_MATRICES_TEXTURE=null),c+=`
`+Zt(d)+`
`}a&&(c+=`
#define INSTANCING
`);var l=c+Zt(t.vertexDefines,o,h),v=c+Zt(t.fragmentDefines,o,h),p=l+`
`+t.shader.vertex,y=["OES_standard_derivatives","EXT_shader_texture_lod"].filter(function(M){return u.getGLExtension(M)!=null});y.indexOf("EXT_shader_texture_lod")>=0&&(v+=`
#define SUPPORT_TEXTURE_LOD`),y.indexOf("OES_standard_derivatives")>=0&&(v+=`
#define SUPPORT_STANDARD_DERIVATIVES`);var m=Vn(y)+`
`+Wn(t.precision)+`
`+v+`
`+t.shader.fragment,A=Oe(p,t.vertexDefines,o),x=Oe(m,t.fragmentDefines,o),g=new Hn;g.uniformSemantics=t.shader.uniformSemantics,g.attributes=t.shader.attributes;var S=g.buildProgram(f,t.shader,A,x);return g.__error=S,n[s]=g,g};var be=/uniform\s+(bool|float|int|vec2|vec3|vec4|ivec2|ivec3|ivec4|mat2|mat3|mat4|sampler2D|samplerCube)\s+([\s\S]*?);/g,zn=/attribute\s+(float|int|vec2|vec3|vec4)\s+([\s\S]*?);/g,Be=/#define\s+(\w+)?(\s+[\d-.]+)?\s*;?\s*\n/g,kn={bool:"1i",int:"1i",sampler2D:"t",samplerCube:"t",float:"1f",vec2:"2f",vec3:"3f",vec4:"4f",ivec2:"2i",ivec3:"3i",ivec4:"4i",mat2:"m2",mat3:"m3",mat4:"m4"};function Gr(r){for(var t=[],e=0;e<r;e++)t[e]=0;return t}var Ue={bool:function(){return!0},int:function(){return 0},float:function(){return 0},sampler2D:function(){return null},samplerCube:function(){return null},vec2:function(){return Gr(2)},vec3:function(){return Gr(3)},vec4:function(){return Gr(4)},ivec2:function(){return Gr(2)},ivec3:function(){return Gr(3)},ivec4:function(){return Gr(4)},mat2:function(){return Gr(4)},mat3:function(){return Gr(9)},mat4:function(){return Gr(16)},array:function(){return[]}},le=["POSITION","NORMAL","BINORMAL","TANGENT","TEXCOORD","TEXCOORD_0","TEXCOORD_1","COLOR","JOINT","WEIGHT"],on=["SKIN_MATRIX","VIEWPORT_SIZE","VIEWPORT","DEVICEPIXELRATIO","WINDOW_SIZE","NEAR","FAR","TIME"],un=["WORLD","VIEW","PROJECTION","WORLDVIEW","VIEWPROJECTION","WORLDVIEWPROJECTION","WORLDINVERSE","VIEWINVERSE","PROJECTIONINVERSE","WORLDVIEWINVERSE","VIEWPROJECTIONINVERSE","WORLDVIEWPROJECTIONINVERSE","WORLDTRANSPOSE","VIEWTRANSPOSE","PROJECTIONTRANSPOSE","WORLDVIEWTRANSPOSE","VIEWPROJECTIONTRANSPOSE","WORLDVIEWPROJECTIONTRANSPOSE","WORLDINVERSETRANSPOSE","VIEWINVERSETRANSPOSE","PROJECTIONINVERSETRANSPOSE","WORLDVIEWINVERSETRANSPOSE","VIEWPROJECTIONINVERSETRANSPOSE","WORLDVIEWPROJECTIONINVERSETRANSPOSE"],Xn={vec4:4,vec3:3,vec2:2,float:1},jt={},fn={};function qn(r,t){var e="vertex:"+r+"fragment:"+t;if(jt[e])return jt[e];var n=ar.genGUID();return jt[e]=n,fn[n]={vertex:r,fragment:t},n}function Fe(r){return r.replace(/[ \t]*\/\/.*\n/g,"").replace(/[ \t]*\/\*[\s\S]*?\*\//g,"")}function nt(){console.error("Wrong uniform/attributes syntax")}function He(r,t){for(var e=/[,=\(\):]/,n=t.replace(/:\s*\[\s*(.*)\s*\]/g,"="+r+"($1)").replace(/\s+/g,"").split(/(?=[,=\(\):])/g),i=[],a=0;a<n.length;a++)n[a].match(e)?i.push(n[a].charAt(0),n[a].slice(1)):i.push(n[a]);n=i;var s=0,o=1,u=2,f=3,h=4,c=5,d=s,l={},v=null,p;y(n[0]);function y(x){x||nt();var g=x.match(/\[(.*?)\]/);p=x.replace(/\[(.*?)\]/,""),l[p]={},g&&(l[p].isArray=!0,l[p].arraySize=g[1])}for(var a=1;a<n.length;a++){var m=n[a];if(m){if(m==="="){if(d!==s&&d!==f){nt();break}d=o;continue}else if(m===":"){d=h;continue}else if(m===","){if(d===u){if(!(v instanceof Array)){nt();break}v.push(+n[++a])}else d=c;continue}else if(m===")"){l[p].value=new K.Float32Array(v),v=null,d=c;continue}else if(m==="("){if(d!==u){nt();break}if(!(v instanceof Array)){nt();break}v.push(+n[++a]);continue}else if(m.indexOf("vec")>=0){if(d!==o&&d!==h){nt();break}d=u,v=[];continue}else if(d===o){r==="bool"?l[p].value=m==="true":l[p].value=parseFloat(m),v=null;continue}else if(d===h){var A=m;le.indexOf(A)>=0||on.indexOf(A)>=0||un.indexOf(A)>=0?l[p].semantic=A:A==="ignore"||A==="unconfigurable"?l[p].ignore=!0:r==="bool"?l[p].value=A==="true":l[p].value=parseFloat(A);continue}y(m),d=s}}return l}function V(r,t){typeof r=="object"&&(t=r.fragment,r=r.vertex),r=Fe(r),t=Fe(t),this._shaderID=qn(r,t),this._vertexCode=V.parseImport(r),this._fragmentCode=V.parseImport(t),this.attributeSemantics={},this.matrixSemantics={},this.uniformSemantics={},this.matrixSemanticKeys=[],this.uniformTemplates={},this.attributes={},this.textures={},this.vertexDefines={},this.fragmentDefines={},this._parseAttributes(),this._parseUniforms(),this._parseDefines()}V.prototype={constructor:V,createUniforms:function(){var r={};for(var t in this.uniformTemplates){var e=this.uniformTemplates[t];r[t]={type:e.type,value:e.value()}}return r},_parseImport:function(){this._vertexCode=V.parseImport(this.vertex),this._fragmentCode=V.parseImport(this.fragment)},_addSemanticUniform:function(r,t,e){if(le.indexOf(e)>=0)this.attributeSemantics[e]={symbol:r,type:t};else if(un.indexOf(e)>=0){var n=!1,i=e;e.match(/TRANSPOSE$/)&&(n=!0,i=e.slice(0,-9)),this.matrixSemantics[e]={symbol:r,type:t,isTranspose:n,semanticNoTranspose:i}}else on.indexOf(e)>=0&&(this.uniformSemantics[e]={symbol:r,type:t})},_addMaterialUniform:function(r,t,e,n,i,a){a[r]={type:e,value:i?Ue.array:n||Ue[t],semantic:null}},_parseUniforms:function(){var r={},t=this,e="vertex";this._uniformList=[],this._vertexCode=this._vertexCode.replace(be,i),e="fragment",this._fragmentCode=this._fragmentCode.replace(be,i),t.matrixSemanticKeys=Object.keys(this.matrixSemantics);function n(a){return a!=null?function(){return a}:null}function i(a,s,o){var u=He(s,o),f=[];for(var h in u){var c=u[h],d=c.semantic,l=h,v=kn[s],p=n(u[h].value);u[h].isArray&&(l+="["+u[h].arraySize+"]",v+="v"),f.push(l),t._uniformList.push(h),c.ignore||((s==="sampler2D"||s==="samplerCube")&&(t.textures[h]={shaderType:e,type:s}),d?t._addSemanticUniform(h,v,d):t._addMaterialUniform(h,s,v,p,u[h].isArray,r))}return f.length>0?"uniform "+s+" "+f.join(",")+`;
`:""}this.uniformTemplates=r},_parseAttributes:function(){var r={},t=this;this._vertexCode=this._vertexCode.replace(zn,e);function e(n,i,a){var s=He(i,a),o=Xn[i]||1,u=[];for(var f in s){var h=s[f].semantic;if(r[f]={type:"float",size:o,semantic:h||null},h){if(le.indexOf(h)<0)throw new Error('Unkown semantic "'+h+'"');t.attributeSemantics[h]={symbol:f,type:i}}u.push(f)}return"attribute "+i+" "+u.join(",")+`;
`}this.attributes=r},_parseDefines:function(){var r=this,t="vertex";this._vertexCode=this._vertexCode.replace(Be,e),t="fragment",this._fragmentCode=this._fragmentCode.replace(Be,e);function e(n,i,a){var s=t==="vertex"?r.vertexDefines:r.fragmentDefines;return s[i]||(a==="false"?s[i]=!1:a==="true"?s[i]=!0:s[i]=a?isNaN(parseFloat(a))?a.trim():parseFloat(a):null),""}},clone:function(){var r=fn[this._shaderID],t=new V(r.vertex,r.fragment);return t}};Object.defineProperty&&(Object.defineProperty(V.prototype,"shaderID",{get:function(){return this._shaderID}}),Object.defineProperty(V.prototype,"vertex",{get:function(){return this._vertexCode}}),Object.defineProperty(V.prototype,"fragment",{get:function(){return this._fragmentCode}}),Object.defineProperty(V.prototype,"uniforms",{get:function(){return this._uniformList}}));var Yn=/(@import)\s*([0-9a-zA-Z_\-\.]*)/g;V.parseImport=function(r){return r=r.replace(Yn,function(i,e,n){var i=V.source(n);return i?V.parseImport(i):(console.error('Shader chunk "'+n+'" not existed in library'),"")}),r};var Kn=/(@export)\s*([0-9a-zA-Z_\-\.]*)\s*\n([\s\S]*?)@end/g;V.import=function(r){r.replace(Kn,function(t,e,n,a){var a=a.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+\x24)/g,"");if(a){for(var s=n.split("."),o=V.codes,u=0,f;u<s.length-1;)f=s[u++],o[f]||(o[f]={}),o=o[f];f=s[u],o[f]=a}return a})};V.codes={};V.source=function(r){for(var t=r.split("."),e=V.codes,n=0;e&&n<t.length;){var i=t[n++];e=e[i]}return typeof e!="string"?(console.error('Shader "'+r+'" not existed in library'),""):e};const Zn=`@export clay.prez.vertex
uniform mat4 WVP : WORLDVIEWPROJECTION;
attribute vec3 pos : POSITION;
attribute vec2 uv : TEXCOORD_0;
uniform vec2 uvRepeat : [1.0, 1.0];
uniform vec2 uvOffset : [0.0, 0.0];
@import clay.chunk.skinning_header
@import clay.chunk.instancing_header
varying vec2 v_Texcoord;
void main()
{
 vec4 P = vec4(pos, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 gl_Position = WVP * P;
 v_Texcoord = uv * uvRepeat + uvOffset;
}
@end
@export clay.prez.fragment
uniform sampler2D alphaMap;
uniform float alphaCutoff: 0.0;
varying vec2 v_Texcoord;
void main()
{
 if (alphaCutoff > 0.0) {
 if (texture2D(alphaMap, v_Texcoord).a <= alphaCutoff) {
 discard;
 }
 }
 gl_FragColor = vec4(0.0,0.0,0.0,1.0);
}
@end`;var R={};R.create=function(){var r=new hr(16);return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r};R.clone=function(r){var t=new hr(16);return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],t};R.copy=function(r,t){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15],r};R.identity=function(r){return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r};R.transpose=function(r,t){if(r===t){var e=t[1],n=t[2],i=t[3],a=t[6],s=t[7],o=t[11];r[1]=t[4],r[2]=t[8],r[3]=t[12],r[4]=e,r[6]=t[9],r[7]=t[13],r[8]=n,r[9]=a,r[11]=t[14],r[12]=i,r[13]=s,r[14]=o}else r[0]=t[0],r[1]=t[4],r[2]=t[8],r[3]=t[12],r[4]=t[1],r[5]=t[5],r[6]=t[9],r[7]=t[13],r[8]=t[2],r[9]=t[6],r[10]=t[10],r[11]=t[14],r[12]=t[3],r[13]=t[7],r[14]=t[11],r[15]=t[15];return r};R.invert=function(r,t){var e=t[0],n=t[1],i=t[2],a=t[3],s=t[4],o=t[5],u=t[6],f=t[7],h=t[8],c=t[9],d=t[10],l=t[11],v=t[12],p=t[13],y=t[14],m=t[15],A=e*o-n*s,x=e*u-i*s,g=e*f-a*s,S=n*u-i*o,M=n*f-a*o,O=i*f-a*u,D=h*p-c*v,L=h*y-d*v,W=h*m-l*v,I=c*y-d*p,z=c*m-l*p,H=d*m-l*y,B=A*H-x*z+g*I+S*W-M*L+O*D;return B?(B=1/B,r[0]=(o*H-u*z+f*I)*B,r[1]=(i*z-n*H-a*I)*B,r[2]=(p*O-y*M+m*S)*B,r[3]=(d*M-c*O-l*S)*B,r[4]=(u*W-s*H-f*L)*B,r[5]=(e*H-i*W+a*L)*B,r[6]=(y*g-v*O-m*x)*B,r[7]=(h*O-d*g+l*x)*B,r[8]=(s*z-o*W+f*D)*B,r[9]=(n*W-e*z-a*D)*B,r[10]=(v*M-p*g+m*A)*B,r[11]=(c*g-h*M-l*A)*B,r[12]=(o*L-s*I-u*D)*B,r[13]=(e*I-n*L+i*D)*B,r[14]=(p*x-v*S-y*A)*B,r[15]=(h*S-c*x+d*A)*B,r):null};R.adjoint=function(r,t){var e=t[0],n=t[1],i=t[2],a=t[3],s=t[4],o=t[5],u=t[6],f=t[7],h=t[8],c=t[9],d=t[10],l=t[11],v=t[12],p=t[13],y=t[14],m=t[15];return r[0]=o*(d*m-l*y)-c*(u*m-f*y)+p*(u*l-f*d),r[1]=-(n*(d*m-l*y)-c*(i*m-a*y)+p*(i*l-a*d)),r[2]=n*(u*m-f*y)-o*(i*m-a*y)+p*(i*f-a*u),r[3]=-(n*(u*l-f*d)-o*(i*l-a*d)+c*(i*f-a*u)),r[4]=-(s*(d*m-l*y)-h*(u*m-f*y)+v*(u*l-f*d)),r[5]=e*(d*m-l*y)-h*(i*m-a*y)+v*(i*l-a*d),r[6]=-(e*(u*m-f*y)-s*(i*m-a*y)+v*(i*f-a*u)),r[7]=e*(u*l-f*d)-s*(i*l-a*d)+h*(i*f-a*u),r[8]=s*(c*m-l*p)-h*(o*m-f*p)+v*(o*l-f*c),r[9]=-(e*(c*m-l*p)-h*(n*m-a*p)+v*(n*l-a*c)),r[10]=e*(o*m-f*p)-s*(n*m-a*p)+v*(n*f-a*o),r[11]=-(e*(o*l-f*c)-s*(n*l-a*c)+h*(n*f-a*o)),r[12]=-(s*(c*y-d*p)-h*(o*y-u*p)+v*(o*d-u*c)),r[13]=e*(c*y-d*p)-h*(n*y-i*p)+v*(n*d-i*c),r[14]=-(e*(o*y-u*p)-s*(n*y-i*p)+v*(n*u-i*o)),r[15]=e*(o*d-u*c)-s*(n*d-i*c)+h*(n*u-i*o),r};R.determinant=function(r){var t=r[0],e=r[1],n=r[2],i=r[3],a=r[4],s=r[5],o=r[6],u=r[7],f=r[8],h=r[9],c=r[10],d=r[11],l=r[12],v=r[13],p=r[14],y=r[15],m=t*s-e*a,A=t*o-n*a,x=t*u-i*a,g=e*o-n*s,S=e*u-i*s,M=n*u-i*o,O=f*v-h*l,D=f*p-c*l,L=f*y-d*l,W=h*p-c*v,I=h*y-d*v,z=c*y-d*p;return m*z-A*I+x*W+g*L-S*D+M*O};R.multiply=function(r,t,e){var n=t[0],i=t[1],a=t[2],s=t[3],o=t[4],u=t[5],f=t[6],h=t[7],c=t[8],d=t[9],l=t[10],v=t[11],p=t[12],y=t[13],m=t[14],A=t[15],x=e[0],g=e[1],S=e[2],M=e[3];return r[0]=x*n+g*o+S*c+M*p,r[1]=x*i+g*u+S*d+M*y,r[2]=x*a+g*f+S*l+M*m,r[3]=x*s+g*h+S*v+M*A,x=e[4],g=e[5],S=e[6],M=e[7],r[4]=x*n+g*o+S*c+M*p,r[5]=x*i+g*u+S*d+M*y,r[6]=x*a+g*f+S*l+M*m,r[7]=x*s+g*h+S*v+M*A,x=e[8],g=e[9],S=e[10],M=e[11],r[8]=x*n+g*o+S*c+M*p,r[9]=x*i+g*u+S*d+M*y,r[10]=x*a+g*f+S*l+M*m,r[11]=x*s+g*h+S*v+M*A,x=e[12],g=e[13],S=e[14],M=e[15],r[12]=x*n+g*o+S*c+M*p,r[13]=x*i+g*u+S*d+M*y,r[14]=x*a+g*f+S*l+M*m,r[15]=x*s+g*h+S*v+M*A,r};R.multiplyAffine=function(r,t,e){var n=t[0],i=t[1],a=t[2],s=t[4],o=t[5],u=t[6],f=t[8],h=t[9],c=t[10],d=t[12],l=t[13],v=t[14],p=e[0],y=e[1],m=e[2];return r[0]=p*n+y*s+m*f,r[1]=p*i+y*o+m*h,r[2]=p*a+y*u+m*c,p=e[4],y=e[5],m=e[6],r[4]=p*n+y*s+m*f,r[5]=p*i+y*o+m*h,r[6]=p*a+y*u+m*c,p=e[8],y=e[9],m=e[10],r[8]=p*n+y*s+m*f,r[9]=p*i+y*o+m*h,r[10]=p*a+y*u+m*c,p=e[12],y=e[13],m=e[14],r[12]=p*n+y*s+m*f+d,r[13]=p*i+y*o+m*h+l,r[14]=p*a+y*u+m*c+v,r};R.mul=R.multiply;R.mulAffine=R.multiplyAffine;R.translate=function(r,t,e){var n=e[0],i=e[1],a=e[2],s,o,u,f,h,c,d,l,v,p,y,m;return t===r?(r[12]=t[0]*n+t[4]*i+t[8]*a+t[12],r[13]=t[1]*n+t[5]*i+t[9]*a+t[13],r[14]=t[2]*n+t[6]*i+t[10]*a+t[14],r[15]=t[3]*n+t[7]*i+t[11]*a+t[15]):(s=t[0],o=t[1],u=t[2],f=t[3],h=t[4],c=t[5],d=t[6],l=t[7],v=t[8],p=t[9],y=t[10],m=t[11],r[0]=s,r[1]=o,r[2]=u,r[3]=f,r[4]=h,r[5]=c,r[6]=d,r[7]=l,r[8]=v,r[9]=p,r[10]=y,r[11]=m,r[12]=s*n+h*i+v*a+t[12],r[13]=o*n+c*i+p*a+t[13],r[14]=u*n+d*i+y*a+t[14],r[15]=f*n+l*i+m*a+t[15]),r};R.scale=function(r,t,e){var n=e[0],i=e[1],a=e[2];return r[0]=t[0]*n,r[1]=t[1]*n,r[2]=t[2]*n,r[3]=t[3]*n,r[4]=t[4]*i,r[5]=t[5]*i,r[6]=t[6]*i,r[7]=t[7]*i,r[8]=t[8]*a,r[9]=t[9]*a,r[10]=t[10]*a,r[11]=t[11]*a,r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15],r};R.rotate=function(r,t,e,n){var i=n[0],a=n[1],s=n[2],o=Math.sqrt(i*i+a*a+s*s),u,f,h,c,d,l,v,p,y,m,A,x,g,S,M,O,D,L,W,I,z,H,B,Z;return Math.abs(o)<bt?null:(o=1/o,i*=o,a*=o,s*=o,u=Math.sin(e),f=Math.cos(e),h=1-f,c=t[0],d=t[1],l=t[2],v=t[3],p=t[4],y=t[5],m=t[6],A=t[7],x=t[8],g=t[9],S=t[10],M=t[11],O=i*i*h+f,D=a*i*h+s*u,L=s*i*h-a*u,W=i*a*h-s*u,I=a*a*h+f,z=s*a*h+i*u,H=i*s*h+a*u,B=a*s*h-i*u,Z=s*s*h+f,r[0]=c*O+p*D+x*L,r[1]=d*O+y*D+g*L,r[2]=l*O+m*D+S*L,r[3]=v*O+A*D+M*L,r[4]=c*W+p*I+x*z,r[5]=d*W+y*I+g*z,r[6]=l*W+m*I+S*z,r[7]=v*W+A*I+M*z,r[8]=c*H+p*B+x*Z,r[9]=d*H+y*B+g*Z,r[10]=l*H+m*B+S*Z,r[11]=v*H+A*B+M*Z,t!==r&&(r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15]),r)};R.rotateX=function(r,t,e){var n=Math.sin(e),i=Math.cos(e),a=t[4],s=t[5],o=t[6],u=t[7],f=t[8],h=t[9],c=t[10],d=t[11];return t!==r&&(r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15]),r[4]=a*i+f*n,r[5]=s*i+h*n,r[6]=o*i+c*n,r[7]=u*i+d*n,r[8]=f*i-a*n,r[9]=h*i-s*n,r[10]=c*i-o*n,r[11]=d*i-u*n,r};R.rotateY=function(r,t,e){var n=Math.sin(e),i=Math.cos(e),a=t[0],s=t[1],o=t[2],u=t[3],f=t[8],h=t[9],c=t[10],d=t[11];return t!==r&&(r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15]),r[0]=a*i-f*n,r[1]=s*i-h*n,r[2]=o*i-c*n,r[3]=u*i-d*n,r[8]=a*n+f*i,r[9]=s*n+h*i,r[10]=o*n+c*i,r[11]=u*n+d*i,r};R.rotateZ=function(r,t,e){var n=Math.sin(e),i=Math.cos(e),a=t[0],s=t[1],o=t[2],u=t[3],f=t[4],h=t[5],c=t[6],d=t[7];return t!==r&&(r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15]),r[0]=a*i+f*n,r[1]=s*i+h*n,r[2]=o*i+c*n,r[3]=u*i+d*n,r[4]=f*i-a*n,r[5]=h*i-s*n,r[6]=c*i-o*n,r[7]=d*i-u*n,r};R.fromRotationTranslation=function(r,t,e){var n=t[0],i=t[1],a=t[2],s=t[3],o=n+n,u=i+i,f=a+a,h=n*o,c=n*u,d=n*f,l=i*u,v=i*f,p=a*f,y=s*o,m=s*u,A=s*f;return r[0]=1-(l+p),r[1]=c+A,r[2]=d-m,r[3]=0,r[4]=c-A,r[5]=1-(h+p),r[6]=v+y,r[7]=0,r[8]=d+m,r[9]=v-y,r[10]=1-(h+l),r[11]=0,r[12]=e[0],r[13]=e[1],r[14]=e[2],r[15]=1,r};R.fromQuat=function(r,t){var e=t[0],n=t[1],i=t[2],a=t[3],s=e+e,o=n+n,u=i+i,f=e*s,h=n*s,c=n*o,d=i*s,l=i*o,v=i*u,p=a*s,y=a*o,m=a*u;return r[0]=1-c-v,r[1]=h+m,r[2]=d-y,r[3]=0,r[4]=h-m,r[5]=1-f-v,r[6]=l+p,r[7]=0,r[8]=d+y,r[9]=l-p,r[10]=1-f-c,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r};R.frustum=function(r,t,e,n,i,a,s){var o=1/(e-t),u=1/(i-n),f=1/(a-s);return r[0]=a*2*o,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=a*2*u,r[6]=0,r[7]=0,r[8]=(e+t)*o,r[9]=(i+n)*u,r[10]=(s+a)*f,r[11]=-1,r[12]=0,r[13]=0,r[14]=s*a*2*f,r[15]=0,r};R.perspective=function(r,t,e,n,i){var a=1/Math.tan(t/2),s=1/(n-i);return r[0]=a/e,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=a,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=(i+n)*s,r[11]=-1,r[12]=0,r[13]=0,r[14]=2*i*n*s,r[15]=0,r};R.ortho=function(r,t,e,n,i,a,s){var o=1/(t-e),u=1/(n-i),f=1/(a-s);return r[0]=-2*o,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=-2*u,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=2*f,r[11]=0,r[12]=(t+e)*o,r[13]=(i+n)*u,r[14]=(s+a)*f,r[15]=1,r};R.lookAt=function(r,t,e,n){var i,a,s,o,u,f,h,c,d,l,v=t[0],p=t[1],y=t[2],m=n[0],A=n[1],x=n[2],g=e[0],S=e[1],M=e[2];return Math.abs(v-g)<bt&&Math.abs(p-S)<bt&&Math.abs(y-M)<bt?R.identity(r):(h=v-g,c=p-S,d=y-M,l=1/Math.sqrt(h*h+c*c+d*d),h*=l,c*=l,d*=l,i=A*d-x*c,a=x*h-m*d,s=m*c-A*h,l=Math.sqrt(i*i+a*a+s*s),l?(l=1/l,i*=l,a*=l,s*=l):(i=0,a=0,s=0),o=c*s-d*a,u=d*i-h*s,f=h*a-c*i,l=Math.sqrt(o*o+u*u+f*f),l?(l=1/l,o*=l,u*=l,f*=l):(o=0,u=0,f=0),r[0]=i,r[1]=o,r[2]=h,r[3]=0,r[4]=a,r[5]=u,r[6]=c,r[7]=0,r[8]=s,r[9]=f,r[10]=d,r[11]=0,r[12]=-(i*v+a*p+s*y),r[13]=-(o*v+u*p+f*y),r[14]=-(h*v+c*p+d*y),r[15]=1,r)};R.frob=function(r){return Math.sqrt(Math.pow(r[0],2)+Math.pow(r[1],2)+Math.pow(r[2],2)+Math.pow(r[3],2)+Math.pow(r[4],2)+Math.pow(r[5],2)+Math.pow(r[6],2)+Math.pow(r[7],2)+Math.pow(r[8],2)+Math.pow(r[9],2)+Math.pow(r[10],2)+Math.pow(r[11],2)+Math.pow(r[12],2)+Math.pow(r[13],2)+Math.pow(r[14],2)+Math.pow(r[15],2))};var _={};_.create=function(){var r=new hr(3);return r[0]=0,r[1]=0,r[2]=0,r};_.clone=function(r){var t=new hr(3);return t[0]=r[0],t[1]=r[1],t[2]=r[2],t};_.fromValues=function(r,t,e){var n=new hr(3);return n[0]=r,n[1]=t,n[2]=e,n};_.copy=function(r,t){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r};_.set=function(r,t,e,n){return r[0]=t,r[1]=e,r[2]=n,r};_.add=function(r,t,e){return r[0]=t[0]+e[0],r[1]=t[1]+e[1],r[2]=t[2]+e[2],r};_.subtract=function(r,t,e){return r[0]=t[0]-e[0],r[1]=t[1]-e[1],r[2]=t[2]-e[2],r};_.sub=_.subtract;_.multiply=function(r,t,e){return r[0]=t[0]*e[0],r[1]=t[1]*e[1],r[2]=t[2]*e[2],r};_.mul=_.multiply;_.divide=function(r,t,e){return r[0]=t[0]/e[0],r[1]=t[1]/e[1],r[2]=t[2]/e[2],r};_.div=_.divide;_.min=function(r,t,e){return r[0]=Math.min(t[0],e[0]),r[1]=Math.min(t[1],e[1]),r[2]=Math.min(t[2],e[2]),r};_.max=function(r,t,e){return r[0]=Math.max(t[0],e[0]),r[1]=Math.max(t[1],e[1]),r[2]=Math.max(t[2],e[2]),r};_.scale=function(r,t,e){return r[0]=t[0]*e,r[1]=t[1]*e,r[2]=t[2]*e,r};_.scaleAndAdd=function(r,t,e,n){return r[0]=t[0]+e[0]*n,r[1]=t[1]+e[1]*n,r[2]=t[2]+e[2]*n,r};_.distance=function(r,t){var e=t[0]-r[0],n=t[1]-r[1],i=t[2]-r[2];return Math.sqrt(e*e+n*n+i*i)};_.dist=_.distance;_.squaredDistance=function(r,t){var e=t[0]-r[0],n=t[1]-r[1],i=t[2]-r[2];return e*e+n*n+i*i};_.sqrDist=_.squaredDistance;_.length=function(r){var t=r[0],e=r[1],n=r[2];return Math.sqrt(t*t+e*e+n*n)};_.len=_.length;_.squaredLength=function(r){var t=r[0],e=r[1],n=r[2];return t*t+e*e+n*n};_.sqrLen=_.squaredLength;_.negate=function(r,t){return r[0]=-t[0],r[1]=-t[1],r[2]=-t[2],r};_.inverse=function(r,t){return r[0]=1/t[0],r[1]=1/t[1],r[2]=1/t[2],r};_.normalize=function(r,t){var e=t[0],n=t[1],i=t[2],a=e*e+n*n+i*i;return a>0&&(a=1/Math.sqrt(a),r[0]=t[0]*a,r[1]=t[1]*a,r[2]=t[2]*a),r};_.dot=function(r,t){return r[0]*t[0]+r[1]*t[1]+r[2]*t[2]};_.cross=function(r,t,e){var n=t[0],i=t[1],a=t[2],s=e[0],o=e[1],u=e[2];return r[0]=i*u-a*o,r[1]=a*s-n*u,r[2]=n*o-i*s,r};_.lerp=function(r,t,e,n){var i=t[0],a=t[1],s=t[2];return r[0]=i+n*(e[0]-i),r[1]=a+n*(e[1]-a),r[2]=s+n*(e[2]-s),r};_.random=function(r,t){t=t||1;var e=ht()*2*Math.PI,n=ht()*2-1,i=Math.sqrt(1-n*n)*t;return r[0]=Math.cos(e)*i,r[1]=Math.sin(e)*i,r[2]=n*t,r};_.transformMat4=function(r,t,e){var n=t[0],i=t[1],a=t[2],s=e[3]*n+e[7]*i+e[11]*a+e[15];return s=s||1,r[0]=(e[0]*n+e[4]*i+e[8]*a+e[12])/s,r[1]=(e[1]*n+e[5]*i+e[9]*a+e[13])/s,r[2]=(e[2]*n+e[6]*i+e[10]*a+e[14])/s,r};_.transformMat3=function(r,t,e){var n=t[0],i=t[1],a=t[2];return r[0]=n*e[0]+i*e[3]+a*e[6],r[1]=n*e[1]+i*e[4]+a*e[7],r[2]=n*e[2]+i*e[5]+a*e[8],r};_.transformQuat=function(r,t,e){var n=t[0],i=t[1],a=t[2],s=e[0],o=e[1],u=e[2],f=e[3],h=f*n+o*a-u*i,c=f*i+u*n-s*a,d=f*a+s*i-o*n,l=-s*n-o*i-u*a;return r[0]=h*f+l*-s+c*-u-d*-o,r[1]=c*f+l*-o+d*-s-h*-u,r[2]=d*f+l*-u+h*-o-c*-s,r};_.rotateX=function(r,t,e,n){var i=[],a=[];return i[0]=t[0]-e[0],i[1]=t[1]-e[1],i[2]=t[2]-e[2],a[0]=i[0],a[1]=i[1]*Math.cos(n)-i[2]*Math.sin(n),a[2]=i[1]*Math.sin(n)+i[2]*Math.cos(n),r[0]=a[0]+e[0],r[1]=a[1]+e[1],r[2]=a[2]+e[2],r};_.rotateY=function(r,t,e,n){var i=[],a=[];return i[0]=t[0]-e[0],i[1]=t[1]-e[1],i[2]=t[2]-e[2],a[0]=i[2]*Math.sin(n)+i[0]*Math.cos(n),a[1]=i[1],a[2]=i[2]*Math.cos(n)-i[0]*Math.sin(n),r[0]=a[0]+e[0],r[1]=a[1]+e[1],r[2]=a[2]+e[2],r};_.rotateZ=function(r,t,e,n){var i=[],a=[];return i[0]=t[0]-e[0],i[1]=t[1]-e[1],i[2]=t[2]-e[2],a[0]=i[0]*Math.cos(n)-i[1]*Math.sin(n),a[1]=i[0]*Math.sin(n)+i[1]*Math.cos(n),a[2]=i[2],r[0]=a[0]+e[0],r[1]=a[1]+e[1],r[2]=a[2]+e[2],r};_.forEach=function(){var r=_.create();return function(t,e,n,i,a,s){var o,u;for(e||(e=3),n||(n=0),i?u=Math.min(i*e+n,t.length):u=t.length,o=n;o<u;o+=e)r[0]=t[o],r[1]=t[o+1],r[2]=t[o+2],a(r,r,s),t[o]=r[0],t[o+1]=r[1],t[o+2]=r[2];return t}}();_.angle=function(r,t){var e=_.fromValues(r[0],r[1],r[2]),n=_.fromValues(t[0],t[1],t[2]);_.normalize(e,e),_.normalize(n,n);var i=_.dot(e,n);return i>1?0:Math.acos(i)};V.import(Zn);var rr=R.create,Ge={};function Ve(r){return r.material}function jn(r,t,e){return t.uniforms[e].value}function Jn(r,t,e,n){return e!==n}function $n(r){return!0}function We(){}var ze={float:T.FLOAT,byte:T.BYTE,ubyte:T.UNSIGNED_BYTE,short:T.SHORT,ushort:T.UNSIGNED_SHORT};function Qn(r,t,e){this.availableAttributes=r,this.availableAttributeSymbols=t,this.indicesBuffer=e,this.vao=null}function ri(r){var t,e;this.bind=function(n){t||(t=K.createCanvas(),t.width=t.height=1,t.getContext("2d"));var i=n.gl,a=!e;a&&(e=i.createTexture()),i.bindTexture(i.TEXTURE_2D,e),a&&i.texImage2D(i.TEXTURE_2D,0,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,t)},this.unbind=function(n){n.gl.bindTexture(n.gl.TEXTURE_2D,null)},this.isRenderable=function(){return!0}}var Zr=lr.extend(function(){return{canvas:null,_width:100,_height:100,devicePixelRatio:typeof window<"u"&&window.devicePixelRatio||1,clearColor:[0,0,0,0],clearBit:17664,alpha:!0,depth:!0,stencil:!1,antialias:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!1,throwError:!0,gl:null,viewport:{},maxJointNumber:20,__currentFrameBuffer:null,_viewportStack:[],_clearStack:[],_sceneRendering:null}},function(){this.canvas||(this.canvas=K.createCanvas());var r=this.canvas;try{var t={alpha:this.alpha,depth:this.depth,stencil:this.stencil,antialias:this.antialias,premultipliedAlpha:this.premultipliedAlpha,preserveDrawingBuffer:this.preserveDrawingBuffer};if(this.gl=r.getContext("webgl",t)||r.getContext("experimental-webgl",t),!this.gl)throw new Error;this._glinfo=new Ln(this.gl),this.gl.targetRenderer&&console.error("Already created a renderer"),this.gl.targetRenderer=this,this.resize()}catch(e){throw"Error creating WebGL Context "+e}this._programMgr=new sn(this),this._placeholderTexture=new ri},{resize:function(r,t){var e=this.canvas,n=this.devicePixelRatio;r!=null?(e.style&&(e.style.width=r+"px",e.style.height=t+"px"),e.width=r*n,e.height=t*n,this._width=r,this._height=t):(this._width=e.width/n,this._height=e.height/n),this.setViewport(0,0,this._width,this._height)},getWidth:function(){return this._width},getHeight:function(){return this._height},getViewportAspect:function(){var r=this.viewport;return r.width/r.height},setDevicePixelRatio:function(r){this.devicePixelRatio=r,this.resize(this._width,this._height)},getDevicePixelRatio:function(){return this.devicePixelRatio},getGLExtension:function(r){return this._glinfo.getExtension(r)},getGLParameter:function(r){return this._glinfo.getParameter(r)},setViewport:function(r,t,e,n,i){if(typeof r=="object"){var a=r;r=a.x,t=a.y,e=a.width,n=a.height,i=a.devicePixelRatio}i=i||this.devicePixelRatio,this.gl.viewport(r*i,t*i,e*i,n*i),this.viewport={x:r,y:t,width:e,height:n,devicePixelRatio:i}},saveViewport:function(){this._viewportStack.push(this.viewport)},restoreViewport:function(){this._viewportStack.length>0&&this.setViewport(this._viewportStack.pop())},saveClear:function(){this._clearStack.push({clearBit:this.clearBit,clearColor:this.clearColor})},restoreClear:function(){if(this._clearStack.length>0){var r=this._clearStack.pop();this.clearColor=r.clearColor,this.clearBit=r.clearBit}},bindSceneRendering:function(r){this._sceneRendering=r},render:function(r,t,e,n){var i=this.gl,a=this.clearColor;if(this.clearBit){i.colorMask(!0,!0,!0,!0),i.depthMask(!0);var s=this.viewport,o=!1,u=s.devicePixelRatio;(s.width!==this._width||s.height!==this._height||u&&u!==this.devicePixelRatio||s.x||s.y)&&(o=!0,i.enable(i.SCISSOR_TEST),i.scissor(s.x*u,s.y*u,s.width*u,s.height*u)),i.clearColor(a[0],a[1],a[2],a[3]),i.clear(this.clearBit),o&&i.disable(i.SCISSOR_TEST)}if(e||r.update(!1),r.updateLights(),t=t||r.getMainCamera(),!t){console.error("Can't find camera in the scene.");return}t.update();var f=r.updateRenderList(t,!0);this._sceneRendering=r;var h=f.opaque,c=f.transparent,d=r.material;r.trigger("beforerender",this,r,t,f),n?(this.renderPreZ(h,r,t),i.depthFunc(i.LEQUAL)):i.depthFunc(i.LESS);for(var l=rr(),v=_.create(),p=0;p<c.length;p++){var y=c[p];R.multiplyAffine(l,t.viewMatrix.array,y.worldTransform.array),_.transformMat4(v,y.position.array,l),y.__depth=v[2]}this.renderPass(h,t,{getMaterial:function(m){return d||m.material},sortCompare:this.opaqueSortCompare}),this.renderPass(c,t,{getMaterial:function(m){return d||m.material},sortCompare:this.transparentSortCompare}),r.trigger("afterrender",this,r,t,f),this._sceneRendering=null},getProgram:function(r,t,e){return t=t||r.material,this._programMgr.getProgram(r,t,e)},validateProgram:function(r){if(r.__error){var t=r.__error;if(Ge[r.__uid__])return;if(Ge[r.__uid__]=!0,this.throwError)throw new Error(t);this.trigger("error",t)}},updatePrograms:function(r,t,e){var n=e&&e.getMaterial||Ve;t=t||null;for(var i=0;i<r.length;i++){var a=r[i],s=n.call(this,a);if(i>0){var o=r[i-1],u=o.joints?o.joints.length:0,f=a.joints?a.joints.length:0;if(f===u&&a.material===o.material&&a.lightGroup===o.lightGroup){a.__program=o.__program;continue}}var h=this._programMgr.getProgram(a,s,t);this.validateProgram(h),a.__program=h}},renderPass:function(r,t,e){this.trigger("beforerenderpass",this,r,t,e),e=e||{},e.getMaterial=e.getMaterial||Ve,e.getUniform=e.getUniform||jn,e.isMaterialChanged=e.isMaterialChanged||Jn,e.beforeRender=e.beforeRender||We,e.afterRender=e.afterRender||We;var n=e.ifRender||$n;this.updatePrograms(r,this._sceneRendering,e),e.sortCompare&&r.sort(e.sortCompare);var i=this.viewport,a=i.devicePixelRatio,s=[i.x*a,i.y*a,i.width*a,i.height*a],o=this.devicePixelRatio,u=this.__currentFrameBuffer?[this.__currentFrameBuffer.getTextureWidth(),this.__currentFrameBuffer.getTextureHeight()]:[this._width*o,this._height*o],f=[s[2],s[3]],h=Date.now();t?(R.copy(Q.VIEW,t.viewMatrix.array),R.copy(Q.PROJECTION,t.projectionMatrix.array),R.copy(Q.VIEWINVERSE,t.worldTransform.array)):(R.identity(Q.VIEW),R.identity(Q.PROJECTION),R.identity(Q.VIEWINVERSE)),R.multiply(Q.VIEWPROJECTION,Q.PROJECTION,Q.VIEW),R.invert(Q.PROJECTIONINVERSE,Q.PROJECTION),R.invert(Q.VIEWPROJECTIONINVERSE,Q.VIEWPROJECTION);for(var c=this.gl,d=this._sceneRendering,l,v,p,y,m,A,x,g,S,M,O,D,L=null,W=0;W<r.length;W++){var I=r[W],z=I.worldTransform!=null,H;if(n(I)){z&&(H=I.isSkinnedMesh&&I.isSkinnedMesh()?I.offsetMatrix?I.offsetMatrix.array:Q.IDENTITY:I.worldTransform.array);var B=I.geometry,Z=e.getMaterial.call(this,I),q=I.__program,$=Z.shader,Ar=B.__uid__+"-"+q.__uid__,Rr=Ar!==M;M=Ar,Rr&&L&&L.bindVertexArrayOES(null),z&&(R.copy(Q.WORLD,H),R.multiply(Q.WORLDVIEWPROJECTION,Q.VIEWPROJECTION,H),R.multiplyAffine(Q.WORLDVIEW,Q.VIEW,H),($.matrixSemantics.WORLDINVERSE||$.matrixSemantics.WORLDINVERSETRANSPOSE)&&R.invert(Q.WORLDINVERSE,H),($.matrixSemantics.WORLDVIEWINVERSE||$.matrixSemantics.WORLDVIEWINVERSETRANSPOSE)&&R.invert(Q.WORLDVIEWINVERSE,Q.WORLDVIEW),($.matrixSemantics.WORLDVIEWPROJECTIONINVERSE||$.matrixSemantics.WORLDVIEWPROJECTIONINVERSETRANSPOSE)&&R.invert(Q.WORLDVIEWPROJECTIONINVERSE,Q.WORLDVIEWPROJECTION)),I.beforeRender&&I.beforeRender(this),e.beforeRender.call(this,I,Z,l);var Br=q!==v;Br?(q.bind(this),q.setUniformOfSemantic(c,"VIEWPORT",s),q.setUniformOfSemantic(c,"WINDOW_SIZE",u),t&&(q.setUniformOfSemantic(c,"NEAR",t.near),q.setUniformOfSemantic(c,"FAR",t.far)),q.setUniformOfSemantic(c,"DEVICEPIXELRATIO",a),q.setUniformOfSemantic(c,"TIME",h),q.setUniformOfSemantic(c,"VIEWPORT_SIZE",f),d&&d.setLightUniforms(q,I.lightGroup,this)):q=v,(Br||e.isMaterialChanged(I,p,Z,l))&&(Z.depthTest!==y&&(Z.depthTest?c.enable(c.DEPTH_TEST):c.disable(c.DEPTH_TEST),y=Z.depthTest),Z.depthMask!==m&&(c.depthMask(Z.depthMask),m=Z.depthMask),Z.transparent!==S&&(Z.transparent?c.enable(c.BLEND):c.disable(c.BLEND),S=Z.transparent),Z.transparent&&(Z.blend?Z.blend(c):(c.blendEquationSeparate(c.FUNC_ADD,c.FUNC_ADD),c.blendFuncSeparate(c.SRC_ALPHA,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA))),D=this._bindMaterial(I,Z,q,p||null,l||null,v||null,e.getUniform),l=Z);var Ur=$.matrixSemanticKeys;if(z)for(var wr=0;wr<Ur.length;wr++){var Cr=Ur[wr],Fr=$.matrixSemantics[Cr],Hr=Q[Cr];if(Fr.isTranspose){var Or=Q[Fr.semanticNoTranspose];R.transpose(Hr,Or)}q.setUniform(c,Fr.type,Fr.symbol,Hr)}I.cullFace!==x&&(x=I.cullFace,c.cullFace(x)),I.frontFace!==g&&(g=I.frontFace,c.frontFace(g)),I.culling!==A&&(A=I.culling,A?c.enable(c.CULL_FACE):c.disable(c.CULL_FACE)),this._updateSkeleton(I,q,D),Rr&&(O=this._bindVAO(L,$,B,q)),this._renderObject(I,O,q),e.afterRender(this,I),I.afterRender&&I.afterRender(this),v=q,p=I}}this.trigger("afterrenderpass",this,r,t,e)},getMaxJointNumber:function(){return this.maxJointNumber},_updateSkeleton:function(r,t,e){var n=this.gl,i=r.skeleton;if(i)if(i.update(),r.joints.length>this.getMaxJointNumber()){var a=i.getSubSkinMatricesTexture(r.__uid__,r.joints);t.useTextureSlot(this,a,e),t.setUniform(n,"1i","skinMatricesTexture",e),t.setUniform(n,"1f","skinMatricesTextureSize",a.width)}else{var s=i.getSubSkinMatrices(r.__uid__,r.joints);t.setUniformOfSemantic(n,"SKIN_MATRIX",s)}},_renderObject:function(r,t,e){var n=this.gl,i=r.geometry,a=r.mode;a==null&&(a=4);var s=null,o=r.isInstancedMesh&&r.isInstancedMesh();if(o&&(s=this.getGLExtension("ANGLE_instanced_arrays"),!s)){console.warn("Device not support ANGLE_instanced_arrays extension");return}var u;if(o&&(u=this._bindInstancedAttributes(r,e,s)),t.indicesBuffer){var f=this.getGLExtension("OES_element_index_uint"),h=f&&i.indices instanceof Uint32Array,c=h?n.UNSIGNED_INT:n.UNSIGNED_SHORT;o?s.drawElementsInstancedANGLE(a,t.indicesBuffer.count,c,0,r.getInstanceCount()):n.drawElements(a,t.indicesBuffer.count,c,0)}else o?s.drawArraysInstancedANGLE(a,0,i.vertexCount,r.getInstanceCount()):n.drawArrays(a,0,i.vertexCount);if(o)for(var d=0;d<u.length;d++)n.disableVertexAttribArray(u[d])},_bindInstancedAttributes:function(r,t,e){for(var n=this.gl,i=r.getInstancedAttributesBuffers(this),a=[],s=0;s<i.length;s++){var o=i[s],u=t.getAttribLocation(n,o.symbol);if(!(u<0)){var f=ze[o.type]||n.FLOAT;n.enableVertexAttribArray(u),n.bindBuffer(n.ARRAY_BUFFER,o.buffer),n.vertexAttribPointer(u,o.size,f,!1,0,0),e.vertexAttribDivisorANGLE(u,o.divisor),a.push(u)}}return a},_bindMaterial:function(r,t,e,n,i,a,s){for(var o=this.gl,u=a===e,f=e.currentTextureSlot(),h=t.getEnabledUniforms(),c=t.getTextureUniforms(),d=this._placeholderTexture,l=0;l<c.length;l++){var v=c[l],p=s(r,t,v),y=t.uniforms[v].type;if(y==="t"&&p)p.__slot=-1;else if(y==="tv")for(var m=0;m<p.length;m++)p[m]&&(p[m].__slot=-1)}d.__slot=-1;for(var l=0;l<h.length;l++){var v=h[l],A=t.uniforms[v],p=s(r,t,v),y=A.type,x=y==="t";if(x&&(!p||!p.isRenderable())&&(p=d),i&&u){var g=s(n,i,v);if(x&&(!g||!g.isRenderable())&&(g=d),g===p){if(x)e.takeCurrentTextureSlot(this,null);else if(y==="tv"&&p)for(var m=0;m<p.length;m++)e.takeCurrentTextureSlot(this,null);continue}}if(p!=null)if(x)if(p.__slot<0){var S=e.currentTextureSlot(),M=e.setUniform(o,"1i",v,S);M&&(e.takeCurrentTextureSlot(this,p),p.__slot=S)}else e.setUniform(o,"1i",v,p.__slot);else if(Array.isArray(p)){if(p.length===0)continue;if(y==="tv"){if(!e.hasUniform(v))continue;for(var O=[],m=0;m<p.length;m++){var D=p[m];if(D.__slot<0){var S=e.currentTextureSlot();O.push(S),e.takeCurrentTextureSlot(this,D),D.__slot=S}else O.push(D.__slot)}e.setUniform(o,"1iv",v,O)}else e.setUniform(o,A.type,v,p)}else e.setUniform(o,A.type,v,p)}var L=e.currentTextureSlot();return e.resetTextureSlot(f),L},_bindVAO:function(r,t,e,n){var i=!e.dynamic,a=this.gl,s=this.__uid__+"-"+n.__uid__,o=e.__vaoCache[s];if(!o){var u=e.getBufferChunks(this);if(!u||!u.length)return;for(var f=u[0],h=f.attributeBuffers,g=f.indicesBuffer,x=[],c=[],d=0;d<h.length;d++){var l=h[d],v=l.name,p=l.semantic,y;if(p){var m=t.attributeSemantics[p];y=m&&m.symbol}else y=v;y&&n.attributes[y]&&(x.push(l),c.push(y))}o=new Qn(x,c,g),i&&(e.__vaoCache[s]=o)}var A=!0;r&&i&&(o.vao==null?o.vao=r.createVertexArrayOES():A=!1,r.bindVertexArrayOES(o.vao));var x=o.availableAttributes,g=o.indicesBuffer;if(A){for(var S=n.enableAttributes(this,o.availableAttributeSymbols,r&&i&&o),d=0;d<x.length;d++){var M=S[d];if(M!==-1){var l=x[d],O=l.buffer,D=l.size,L=ze[l.type]||a.FLOAT;a.bindBuffer(a.ARRAY_BUFFER,O),a.vertexAttribPointer(M,D,L,!1,0,0)}}e.isUseIndices()&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,g.buffer)}return o},renderPreZ:function(r,t,e){var n=this.gl,i=this._prezMaterial||new St({shader:new V(V.source("clay.prez.vertex"),V.source("clay.prez.fragment"))});this._prezMaterial=i,n.colorMask(!1,!1,!1,!1),n.depthMask(!0),this.renderPass(r,e,{ifRender:function(a){return!a.ignorePreZ},isMaterialChanged:function(a,s){var o=a.material,u=s.material;return o.get("diffuseMap")!==u.get("diffuseMap")||(o.get("alphaCutoff")||0)!==(u.get("alphaCutoff")||0)},getUniform:function(a,s,o){if(o==="alphaMap")return a.material.get("diffuseMap");if(o==="alphaCutoff"){if(a.material.isDefined("fragment","ALPHA_TEST")&&a.material.get("diffuseMap")){var u=a.material.get("alphaCutoff");return u||0}return 0}else return o==="uvRepeat"?a.material.get("uvRepeat"):o==="uvOffset"?a.material.get("uvOffset"):s.get(o)},getMaterial:function(){return i},sort:this.opaqueSortCompare}),n.colorMask(!0,!0,!0,!0),n.depthMask(!0)},disposeScene:function(r){this.disposeNode(r,!0,!0),r.dispose()},disposeNode:function(r,t,e){r.getParent()&&r.getParent().remove(r);var n={};r.traverse(function(i){var a=i.material;if(i.geometry&&t&&i.geometry.dispose(this),e&&a&&!n[a.__uid__]){for(var s=a.getTextureUniforms(),o=0;o<s.length;o++){var u=s[o],f=a.uniforms[u].value,h=a.uniforms[u].type;if(f){if(h==="t")f.dispose&&f.dispose(this);else if(h==="tv")for(var c=0;c<f.length;c++)f[c]&&f[c].dispose&&f[c].dispose(this)}}n[a.__uid__]=!0}i.dispose&&i.dispose(this)},this)},disposeGeometry:function(r){r.dispose(this)},disposeTexture:function(r){r.dispose(this)},disposeFrameBuffer:function(r){r.dispose(this)},dispose:function(){},screenToNDC:function(r,t,e){e||(e=new an),t=this._height-t;var n=this.viewport,i=e.array;return i[0]=(r-n.x)/n.width,i[0]=i[0]*2-1,i[1]=(t-n.y)/n.height,i[1]=i[1]*2-1,e}});Zr.opaqueSortCompare=Zr.prototype.opaqueSortCompare=function(r,t){return r.renderOrder===t.renderOrder?r.__program===t.__program?r.material===t.material?r.geometry.__uid__-t.geometry.__uid__:r.material.__uid__-t.material.__uid__:r.__program&&t.__program?r.__program.__uid__-t.__program.__uid__:0:r.renderOrder-t.renderOrder};Zr.transparentSortCompare=Zr.prototype.transparentSortCompare=function(r,t){return r.renderOrder===t.renderOrder?r.__depth===t.__depth?r.__program===t.__program?r.material===t.material?r.geometry.__uid__-t.geometry.__uid__:r.material.__uid__-t.material.__uid__:r.__program&&t.__program?r.__program.__uid__-t.__program.__uid__:0:r.__depth-t.__depth:r.renderOrder-t.renderOrder};var Q={IDENTITY:rr(),WORLD:rr(),VIEW:rr(),PROJECTION:rr(),WORLDVIEW:rr(),VIEWPROJECTION:rr(),WORLDVIEWPROJECTION:rr(),WORLDINVERSE:rr(),VIEWINVERSE:rr(),PROJECTIONINVERSE:rr(),WORLDVIEWINVERSE:rr(),VIEWPROJECTIONINVERSE:rr(),WORLDVIEWPROJECTIONINVERSE:rr(),WORLDTRANSPOSE:rr(),VIEWTRANSPOSE:rr(),PROJECTIONTRANSPOSE:rr(),WORLDVIEWTRANSPOSE:rr(),VIEWPROJECTIONTRANSPOSE:rr(),WORLDVIEWPROJECTIONTRANSPOSE:rr(),WORLDINVERSETRANSPOSE:rr(),VIEWINVERSETRANSPOSE:rr(),PROJECTIONINVERSETRANSPOSE:rr(),WORLDVIEWINVERSETRANSPOSE:rr(),VIEWPROJECTIONINVERSETRANSPOSE:rr(),WORLDVIEWPROJECTIONINVERSETRANSPOSE:rr()};Zr.COLOR_BUFFER_BIT=T.COLOR_BUFFER_BIT;Zr.DEPTH_BUFFER_BIT=T.DEPTH_BUFFER_BIT;Zr.STENCIL_BUFFER_BIT=T.STENCIL_BUFFER_BIT;const Jt=Zr;var E=function(r,t,e){r=r||0,t=t||0,e=e||0,this.array=_.fromValues(r,t,e),this._dirty=!0};E.prototype={constructor:E,add:function(r){return _.add(this.array,this.array,r.array),this._dirty=!0,this},set:function(r,t,e){return this.array[0]=r,this.array[1]=t,this.array[2]=e,this._dirty=!0,this},setArray:function(r){return this.array[0]=r[0],this.array[1]=r[1],this.array[2]=r[2],this._dirty=!0,this},clone:function(){return new E(this.x,this.y,this.z)},copy:function(r){return _.copy(this.array,r.array),this._dirty=!0,this},cross:function(r,t){return _.cross(this.array,r.array,t.array),this._dirty=!0,this},dist:function(r){return _.dist(this.array,r.array)},distance:function(r){return _.distance(this.array,r.array)},div:function(r){return _.div(this.array,this.array,r.array),this._dirty=!0,this},divide:function(r){return _.divide(this.array,this.array,r.array),this._dirty=!0,this},dot:function(r){return _.dot(this.array,r.array)},len:function(){return _.len(this.array)},length:function(){return _.length(this.array)},lerp:function(r,t,e){return _.lerp(this.array,r.array,t.array,e),this._dirty=!0,this},min:function(r){return _.min(this.array,this.array,r.array),this._dirty=!0,this},max:function(r){return _.max(this.array,this.array,r.array),this._dirty=!0,this},mul:function(r){return _.mul(this.array,this.array,r.array),this._dirty=!0,this},multiply:function(r){return _.multiply(this.array,this.array,r.array),this._dirty=!0,this},negate:function(){return _.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return _.normalize(this.array,this.array),this._dirty=!0,this},random:function(r){return _.random(this.array,r),this._dirty=!0,this},scale:function(r){return _.scale(this.array,this.array,r),this._dirty=!0,this},scaleAndAdd:function(r,t){return _.scaleAndAdd(this.array,this.array,r.array,t),this._dirty=!0,this},sqrDist:function(r){return _.sqrDist(this.array,r.array)},squaredDistance:function(r){return _.squaredDistance(this.array,r.array)},sqrLen:function(){return _.sqrLen(this.array)},squaredLength:function(){return _.squaredLength(this.array)},sub:function(r){return _.sub(this.array,this.array,r.array),this._dirty=!0,this},subtract:function(r){return _.subtract(this.array,this.array,r.array),this._dirty=!0,this},transformMat3:function(r){return _.transformMat3(this.array,this.array,r.array),this._dirty=!0,this},transformMat4:function(r){return _.transformMat4(this.array,this.array,r.array),this._dirty=!0,this},transformQuat:function(r){return _.transformQuat(this.array,this.array,r.array),this._dirty=!0,this},applyProjection:function(r){var t=this.array;if(r=r.array,r[15]===0){var e=-1/t[2];t[0]=r[0]*t[0]*e,t[1]=r[5]*t[1]*e,t[2]=(r[10]*t[2]+r[14])*e}else t[0]=r[0]*t[0]+r[12],t[1]=r[5]*t[1]+r[13],t[2]=r[10]*t[2]+r[14];return this._dirty=!0,this},eulerFromQuat:function(r,t){E.eulerFromQuat(this,r,t)},eulerFromMat3:function(r,t){E.eulerFromMat3(this,r,t)},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var Ct=Object.defineProperty;if(Ct){var $t=E.prototype;Ct($t,"x",{get:function(){return this.array[0]},set:function(r){this.array[0]=r,this._dirty=!0}}),Ct($t,"y",{get:function(){return this.array[1]},set:function(r){this.array[1]=r,this._dirty=!0}}),Ct($t,"z",{get:function(){return this.array[2]},set:function(r){this.array[2]=r,this._dirty=!0}})}E.add=function(r,t,e){return _.add(r.array,t.array,e.array),r._dirty=!0,r};E.set=function(r,t,e,n){_.set(r.array,t,e,n),r._dirty=!0};E.copy=function(r,t){return _.copy(r.array,t.array),r._dirty=!0,r};E.cross=function(r,t,e){return _.cross(r.array,t.array,e.array),r._dirty=!0,r};E.dist=function(r,t){return _.distance(r.array,t.array)};E.distance=E.dist;E.div=function(r,t,e){return _.divide(r.array,t.array,e.array),r._dirty=!0,r};E.divide=E.div;E.dot=function(r,t){return _.dot(r.array,t.array)};E.len=function(r){return _.length(r.array)};E.lerp=function(r,t,e,n){return _.lerp(r.array,t.array,e.array,n),r._dirty=!0,r};E.min=function(r,t,e){return _.min(r.array,t.array,e.array),r._dirty=!0,r};E.max=function(r,t,e){return _.max(r.array,t.array,e.array),r._dirty=!0,r};E.mul=function(r,t,e){return _.multiply(r.array,t.array,e.array),r._dirty=!0,r};E.multiply=E.mul;E.negate=function(r,t){return _.negate(r.array,t.array),r._dirty=!0,r};E.normalize=function(r,t){return _.normalize(r.array,t.array),r._dirty=!0,r};E.random=function(r,t){return _.random(r.array,t),r._dirty=!0,r};E.scale=function(r,t,e){return _.scale(r.array,t.array,e),r._dirty=!0,r};E.scaleAndAdd=function(r,t,e,n){return _.scaleAndAdd(r.array,t.array,e.array,n),r._dirty=!0,r};E.sqrDist=function(r,t){return _.sqrDist(r.array,t.array)};E.squaredDistance=E.sqrDist;E.sqrLen=function(r){return _.sqrLen(r.array)};E.squaredLength=E.sqrLen;E.sub=function(r,t,e){return _.subtract(r.array,t.array,e.array),r._dirty=!0,r};E.subtract=E.sub;E.transformMat3=function(r,t,e){return _.transformMat3(r.array,t.array,e.array),r._dirty=!0,r};E.transformMat4=function(r,t,e){return _.transformMat4(r.array,t.array,e.array),r._dirty=!0,r};E.transformQuat=function(r,t,e){return _.transformQuat(r.array,t.array,e.array),r._dirty=!0,r};function Sr(r,t,e){return r<t?t:r>e?e:r}var J=Math.atan2,Mr=Math.asin,it=Math.abs;E.eulerFromQuat=function(r,t,d){r._dirty=!0,t=t.array;var n=r.array,i=t[0],a=t[1],s=t[2],o=t[3],u=i*i,f=a*a,h=s*s,c=o*o,d=(d||"XYZ").toUpperCase();switch(d){case"XYZ":n[0]=J(2*(i*o-a*s),c-u-f+h),n[1]=Mr(Sr(2*(i*s+a*o),-1,1)),n[2]=J(2*(s*o-i*a),c+u-f-h);break;case"YXZ":n[0]=Mr(Sr(2*(i*o-a*s),-1,1)),n[1]=J(2*(i*s+a*o),c-u-f+h),n[2]=J(2*(i*a+s*o),c-u+f-h);break;case"ZXY":n[0]=Mr(Sr(2*(i*o+a*s),-1,1)),n[1]=J(2*(a*o-s*i),c-u-f+h),n[2]=J(2*(s*o-i*a),c-u+f-h);break;case"ZYX":n[0]=J(2*(i*o+s*a),c-u-f+h),n[1]=Mr(Sr(2*(a*o-i*s),-1,1)),n[2]=J(2*(i*a+s*o),c+u-f-h);break;case"YZX":n[0]=J(2*(i*o-s*a),c-u+f-h),n[1]=J(2*(a*o-i*s),c+u-f-h),n[2]=Mr(Sr(2*(i*a+s*o),-1,1));break;case"XZY":n[0]=J(2*(i*o+a*s),c-u+f-h),n[1]=J(2*(i*s+a*o),c+u-f-h),n[2]=Mr(Sr(2*(s*o-i*a),-1,1));break;default:console.warn("Unkown order: "+d)}return r};E.eulerFromMat3=function(r,t,v){var n=t.array,i=n[0],a=n[3],s=n[6],o=n[1],u=n[4],f=n[7],h=n[2],c=n[5],d=n[8],l=r.array,v=(v||"XYZ").toUpperCase();switch(v){case"XYZ":l[1]=Mr(Sr(s,-1,1)),it(s)<.99999?(l[0]=J(-f,d),l[2]=J(-a,i)):(l[0]=J(c,u),l[2]=0);break;case"YXZ":l[0]=Mr(-Sr(f,-1,1)),it(f)<.99999?(l[1]=J(s,d),l[2]=J(o,u)):(l[1]=J(-h,i),l[2]=0);break;case"ZXY":l[0]=Mr(Sr(c,-1,1)),it(c)<.99999?(l[1]=J(-h,d),l[2]=J(-a,u)):(l[1]=0,l[2]=J(o,i));break;case"ZYX":l[1]=Mr(-Sr(h,-1,1)),it(h)<.99999?(l[0]=J(c,d),l[2]=J(o,i)):(l[0]=0,l[2]=J(-a,u));break;case"YZX":l[2]=Mr(Sr(o,-1,1)),it(o)<.99999?(l[0]=J(-f,u),l[1]=J(-h,i)):(l[0]=0,l[1]=J(s,d));break;case"XZY":l[2]=Mr(-Sr(a,-1,1)),it(a)<.99999?(l[0]=J(c,u),l[1]=J(s,i)):(l[0]=J(-f,d),l[1]=0);break;default:console.warn("Unkown order: "+v)}return r._dirty=!0,r};Object.defineProperties(E,{POSITIVE_X:{get:function(){return new E(1,0,0)}},NEGATIVE_X:{get:function(){return new E(-1,0,0)}},POSITIVE_Y:{get:function(){return new E(0,1,0)}},NEGATIVE_Y:{get:function(){return new E(0,-1,0)}},POSITIVE_Z:{get:function(){return new E(0,0,1)}},NEGATIVE_Z:{get:function(){return new E(0,0,-1)}},UP:{get:function(){return new E(0,1,0)}},ZERO:{get:function(){return new E}}});var Qt=1e-5,Bt=function(r,t){this.origin=r||new E,this.direction=t||new E};Bt.prototype={constructor:Bt,intersectPlane:function(r,t){var e=r.normal.array,n=r.distance,i=this.origin.array,a=this.direction.array,s=_.dot(e,a);if(s===0)return null;t||(t=new E);var o=(_.dot(e,i)-n)/s;return _.scaleAndAdd(t.array,i,a,-o),t._dirty=!0,t},mirrorAgainstPlane:function(r){var t=_.dot(r.normal.array,this.direction.array);_.scaleAndAdd(this.direction.array,this.direction.array,r.normal.array,-t*2),this.direction._dirty=!0},distanceToPoint:function(){var r=_.create();return function(t){_.sub(r,t,this.origin.array);var e=_.dot(r,this.direction.array);if(e<0)return _.distance(this.origin.array,t);var n=_.lenSquared(r);return Math.sqrt(n-e*e)}}(),intersectSphere:function(){var r=_.create();return function(t,e,n){var i=this.origin.array,a=this.direction.array;t=t.array,_.sub(r,t,i);var s=_.dot(r,a),o=_.squaredLength(r),u=o-s*s,f=e*e;if(!(u>f)){var h=Math.sqrt(f-u),c=s-h,d=s+h;return n||(n=new E),c<0?d<0?null:(_.scaleAndAdd(n.array,i,a,d),n):(_.scaleAndAdd(n.array,i,a,c),n)}}}(),intersectBoundingBox:function(r,t){var e=this.direction.array,n=this.origin.array,i=r.min.array,a=r.max.array,s=1/e[0],o=1/e[1],u=1/e[2],f,h,c,d,l,v;if(s>=0?(f=(i[0]-n[0])*s,h=(a[0]-n[0])*s):(h=(i[0]-n[0])*s,f=(a[0]-n[0])*s),o>=0?(c=(i[1]-n[1])*o,d=(a[1]-n[1])*o):(d=(i[1]-n[1])*o,c=(a[1]-n[1])*o),f>d||c>h||((c>f||f!==f)&&(f=c),(d<h||h!==h)&&(h=d),u>=0?(l=(i[2]-n[2])*u,v=(a[2]-n[2])*u):(v=(i[2]-n[2])*u,l=(a[2]-n[2])*u),f>v||l>h)||((l>f||f!==f)&&(f=l),(v<h||h!==h)&&(h=v),h<0))return null;var p=f>=0?f:h;return t||(t=new E),_.scaleAndAdd(t.array,n,e,p),t},intersectTriangle:function(){var r=_.create(),t=_.create(),e=_.create(),n=_.create();return function(i,a,s,o,u,f){var h=this.direction.array,c=this.origin.array;i=i.array,a=a.array,s=s.array,_.sub(r,a,i),_.sub(t,s,i),_.cross(n,t,h);var d=_.dot(r,n);if(o){if(d>-Qt)return null}else if(d>-Qt&&d<Qt)return null;_.sub(e,c,i);var l=_.dot(n,e)/d;if(l<0||l>1)return null;_.cross(n,r,e);var v=_.dot(h,n)/d;if(v<0||v>1||l+v>1)return null;_.cross(n,r,t);var p=-_.dot(e,n)/d;return p<0?null:(u||(u=new E),f&&E.set(f,1-l-v,l,v),_.scaleAndAdd(u.array,c,h,p),u)}}(),applyTransform:function(r){E.add(this.direction,this.direction,this.origin),E.transformMat4(this.origin,this.origin,r),E.transformMat4(this.direction,this.direction,r),E.sub(this.direction,this.direction,this.origin),E.normalize(this.direction,this.direction)},copy:function(r){E.copy(this.origin,r.origin),E.copy(this.direction,r.direction)},clone:function(){var r=new Bt;return r.copy(this),r}};const de=Bt;var G={};G.create=function(){var r=new hr(4);return r[0]=0,r[1]=0,r[2]=0,r[3]=0,r};G.clone=function(r){var t=new hr(4);return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t};G.fromValues=function(r,t,e,n){var i=new hr(4);return i[0]=r,i[1]=t,i[2]=e,i[3]=n,i};G.copy=function(r,t){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r};G.set=function(r,t,e,n,i){return r[0]=t,r[1]=e,r[2]=n,r[3]=i,r};G.add=function(r,t,e){return r[0]=t[0]+e[0],r[1]=t[1]+e[1],r[2]=t[2]+e[2],r[3]=t[3]+e[3],r};G.subtract=function(r,t,e){return r[0]=t[0]-e[0],r[1]=t[1]-e[1],r[2]=t[2]-e[2],r[3]=t[3]-e[3],r};G.sub=G.subtract;G.multiply=function(r,t,e){return r[0]=t[0]*e[0],r[1]=t[1]*e[1],r[2]=t[2]*e[2],r[3]=t[3]*e[3],r};G.mul=G.multiply;G.divide=function(r,t,e){return r[0]=t[0]/e[0],r[1]=t[1]/e[1],r[2]=t[2]/e[2],r[3]=t[3]/e[3],r};G.div=G.divide;G.min=function(r,t,e){return r[0]=Math.min(t[0],e[0]),r[1]=Math.min(t[1],e[1]),r[2]=Math.min(t[2],e[2]),r[3]=Math.min(t[3],e[3]),r};G.max=function(r,t,e){return r[0]=Math.max(t[0],e[0]),r[1]=Math.max(t[1],e[1]),r[2]=Math.max(t[2],e[2]),r[3]=Math.max(t[3],e[3]),r};G.scale=function(r,t,e){return r[0]=t[0]*e,r[1]=t[1]*e,r[2]=t[2]*e,r[3]=t[3]*e,r};G.scaleAndAdd=function(r,t,e,n){return r[0]=t[0]+e[0]*n,r[1]=t[1]+e[1]*n,r[2]=t[2]+e[2]*n,r[3]=t[3]+e[3]*n,r};G.distance=function(r,t){var e=t[0]-r[0],n=t[1]-r[1],i=t[2]-r[2],a=t[3]-r[3];return Math.sqrt(e*e+n*n+i*i+a*a)};G.dist=G.distance;G.squaredDistance=function(r,t){var e=t[0]-r[0],n=t[1]-r[1],i=t[2]-r[2],a=t[3]-r[3];return e*e+n*n+i*i+a*a};G.sqrDist=G.squaredDistance;G.length=function(r){var t=r[0],e=r[1],n=r[2],i=r[3];return Math.sqrt(t*t+e*e+n*n+i*i)};G.len=G.length;G.squaredLength=function(r){var t=r[0],e=r[1],n=r[2],i=r[3];return t*t+e*e+n*n+i*i};G.sqrLen=G.squaredLength;G.negate=function(r,t){return r[0]=-t[0],r[1]=-t[1],r[2]=-t[2],r[3]=-t[3],r};G.inverse=function(r,t){return r[0]=1/t[0],r[1]=1/t[1],r[2]=1/t[2],r[3]=1/t[3],r};G.normalize=function(r,t){var e=t[0],n=t[1],i=t[2],a=t[3],s=e*e+n*n+i*i+a*a;return s>0&&(s=1/Math.sqrt(s),r[0]=t[0]*s,r[1]=t[1]*s,r[2]=t[2]*s,r[3]=t[3]*s),r};G.dot=function(r,t){return r[0]*t[0]+r[1]*t[1]+r[2]*t[2]+r[3]*t[3]};G.lerp=function(r,t,e,n){var i=t[0],a=t[1],s=t[2],o=t[3];return r[0]=i+n*(e[0]-i),r[1]=a+n*(e[1]-a),r[2]=s+n*(e[2]-s),r[3]=o+n*(e[3]-o),r};G.random=function(r,t){return t=t||1,r[0]=ht(),r[1]=ht(),r[2]=ht(),r[3]=ht(),G.normalize(r,r),G.scale(r,r,t),r};G.transformMat4=function(r,t,e){var n=t[0],i=t[1],a=t[2],s=t[3];return r[0]=e[0]*n+e[4]*i+e[8]*a+e[12]*s,r[1]=e[1]*n+e[5]*i+e[9]*a+e[13]*s,r[2]=e[2]*n+e[6]*i+e[10]*a+e[14]*s,r[3]=e[3]*n+e[7]*i+e[11]*a+e[15]*s,r};G.transformQuat=function(r,t,e){var n=t[0],i=t[1],a=t[2],s=e[0],o=e[1],u=e[2],f=e[3],h=f*n+o*a-u*i,c=f*i+u*n-s*a,d=f*a+s*i-o*n,l=-s*n-o*i-u*a;return r[0]=h*f+l*-s+c*-u-d*-o,r[1]=c*f+l*-o+d*-s-h*-u,r[2]=d*f+l*-u+h*-o-c*-s,r};G.forEach=function(){var r=G.create();return function(t,e,n,i,a,s){var o,u;for(e||(e=4),n||(n=0),i?u=Math.min(i*e+n,t.length):u=t.length,o=n;o<u;o+=e)r[0]=t[o],r[1]=t[o+1],r[2]=t[o+2],r[3]=t[o+3],a(r,r,s),t[o]=r[0],t[o+1]=r[1],t[o+2]=r[2],t[o+3]=r[3];return t}}();const w=G;var P={};P.create=function(){var r=new hr(9);return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=1,r[5]=0,r[6]=0,r[7]=0,r[8]=1,r};P.fromMat4=function(r,t){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[4],r[4]=t[5],r[5]=t[6],r[6]=t[8],r[7]=t[9],r[8]=t[10],r};P.clone=function(r){var t=new hr(9);return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t};P.copy=function(r,t){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r};P.identity=function(r){return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=1,r[5]=0,r[6]=0,r[7]=0,r[8]=1,r};P.transpose=function(r,t){if(r===t){var e=t[1],n=t[2],i=t[5];r[1]=t[3],r[2]=t[6],r[3]=e,r[5]=t[7],r[6]=n,r[7]=i}else r[0]=t[0],r[1]=t[3],r[2]=t[6],r[3]=t[1],r[4]=t[4],r[5]=t[7],r[6]=t[2],r[7]=t[5],r[8]=t[8];return r};P.invert=function(r,t){var e=t[0],n=t[1],i=t[2],a=t[3],s=t[4],o=t[5],u=t[6],f=t[7],h=t[8],c=h*s-o*f,d=-h*a+o*u,l=f*a-s*u,v=e*c+n*d+i*l;return v?(v=1/v,r[0]=c*v,r[1]=(-h*n+i*f)*v,r[2]=(o*n-i*s)*v,r[3]=d*v,r[4]=(h*e-i*u)*v,r[5]=(-o*e+i*a)*v,r[6]=l*v,r[7]=(-f*e+n*u)*v,r[8]=(s*e-n*a)*v,r):null};P.adjoint=function(r,t){var e=t[0],n=t[1],i=t[2],a=t[3],s=t[4],o=t[5],u=t[6],f=t[7],h=t[8];return r[0]=s*h-o*f,r[1]=i*f-n*h,r[2]=n*o-i*s,r[3]=o*u-a*h,r[4]=e*h-i*u,r[5]=i*a-e*o,r[6]=a*f-s*u,r[7]=n*u-e*f,r[8]=e*s-n*a,r};P.determinant=function(r){var t=r[0],e=r[1],n=r[2],i=r[3],a=r[4],s=r[5],o=r[6],u=r[7],f=r[8];return t*(f*a-s*u)+e*(-f*i+s*o)+n*(u*i-a*o)};P.multiply=function(r,t,e){var n=t[0],i=t[1],a=t[2],s=t[3],o=t[4],u=t[5],f=t[6],h=t[7],c=t[8],d=e[0],l=e[1],v=e[2],p=e[3],y=e[4],m=e[5],A=e[6],x=e[7],g=e[8];return r[0]=d*n+l*s+v*f,r[1]=d*i+l*o+v*h,r[2]=d*a+l*u+v*c,r[3]=p*n+y*s+m*f,r[4]=p*i+y*o+m*h,r[5]=p*a+y*u+m*c,r[6]=A*n+x*s+g*f,r[7]=A*i+x*o+g*h,r[8]=A*a+x*u+g*c,r};P.mul=P.multiply;P.translate=function(r,t,e){var n=t[0],i=t[1],a=t[2],s=t[3],o=t[4],u=t[5],f=t[6],h=t[7],c=t[8],d=e[0],l=e[1];return r[0]=n,r[1]=i,r[2]=a,r[3]=s,r[4]=o,r[5]=u,r[6]=d*n+l*s+f,r[7]=d*i+l*o+h,r[8]=d*a+l*u+c,r};P.rotate=function(r,t,e){var n=t[0],i=t[1],a=t[2],s=t[3],o=t[4],u=t[5],f=t[6],h=t[7],c=t[8],d=Math.sin(e),l=Math.cos(e);return r[0]=l*n+d*s,r[1]=l*i+d*o,r[2]=l*a+d*u,r[3]=l*s-d*n,r[4]=l*o-d*i,r[5]=l*u-d*a,r[6]=f,r[7]=h,r[8]=c,r};P.scale=function(r,t,e){var n=e[0],i=e[1];return r[0]=n*t[0],r[1]=n*t[1],r[2]=n*t[2],r[3]=i*t[3],r[4]=i*t[4],r[5]=i*t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r};P.fromMat2d=function(r,t){return r[0]=t[0],r[1]=t[1],r[2]=0,r[3]=t[2],r[4]=t[3],r[5]=0,r[6]=t[4],r[7]=t[5],r[8]=1,r};P.fromQuat=function(r,t){var e=t[0],n=t[1],i=t[2],a=t[3],s=e+e,o=n+n,u=i+i,f=e*s,h=n*s,c=n*o,d=i*s,l=i*o,v=i*u,p=a*s,y=a*o,m=a*u;return r[0]=1-c-v,r[3]=h-m,r[6]=d+y,r[1]=h+m,r[4]=1-f-v,r[7]=l-p,r[2]=d-y,r[5]=l+p,r[8]=1-f-c,r};P.normalFromMat4=function(r,t){var e=t[0],n=t[1],i=t[2],a=t[3],s=t[4],o=t[5],u=t[6],f=t[7],h=t[8],c=t[9],d=t[10],l=t[11],v=t[12],p=t[13],y=t[14],m=t[15],A=e*o-n*s,x=e*u-i*s,g=e*f-a*s,S=n*u-i*o,M=n*f-a*o,O=i*f-a*u,D=h*p-c*v,L=h*y-d*v,W=h*m-l*v,I=c*y-d*p,z=c*m-l*p,H=d*m-l*y,B=A*H-x*z+g*I+S*W-M*L+O*D;return B?(B=1/B,r[0]=(o*H-u*z+f*I)*B,r[1]=(u*W-s*H-f*L)*B,r[2]=(s*z-o*W+f*D)*B,r[3]=(i*z-n*H-a*I)*B,r[4]=(e*H-i*W+a*L)*B,r[5]=(n*W-e*z-a*D)*B,r[6]=(p*O-y*M+m*S)*B,r[7]=(y*g-v*O-m*x)*B,r[8]=(v*M-p*g+m*A)*B,r):null};P.frob=function(r){return Math.sqrt(Math.pow(r[0],2)+Math.pow(r[1],2)+Math.pow(r[2],2)+Math.pow(r[3],2)+Math.pow(r[4],2)+Math.pow(r[5],2)+Math.pow(r[6],2)+Math.pow(r[7],2)+Math.pow(r[8],2))};var Y={};Y.create=function(){var r=new hr(4);return r[0]=0,r[1]=0,r[2]=0,r[3]=1,r};Y.rotationTo=function(){var r=_.create(),t=_.fromValues(1,0,0),e=_.fromValues(0,1,0);return function(n,i,a){var s=_.dot(i,a);return s<-.999999?(_.cross(r,t,i),_.length(r)<1e-6&&_.cross(r,e,i),_.normalize(r,r),Y.setAxisAngle(n,r,Math.PI),n):s>.999999?(n[0]=0,n[1]=0,n[2]=0,n[3]=1,n):(_.cross(r,i,a),n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=1+s,Y.normalize(n,n))}}();Y.setAxes=function(){var r=P.create();return function(t,e,n,i){return r[0]=n[0],r[3]=n[1],r[6]=n[2],r[1]=i[0],r[4]=i[1],r[7]=i[2],r[2]=-e[0],r[5]=-e[1],r[8]=-e[2],Y.normalize(t,Y.fromMat3(t,r))}}();Y.clone=w.clone;Y.fromValues=w.fromValues;Y.copy=w.copy;Y.set=w.set;Y.identity=function(r){return r[0]=0,r[1]=0,r[2]=0,r[3]=1,r};Y.setAxisAngle=function(r,t,e){e=e*.5;var n=Math.sin(e);return r[0]=n*t[0],r[1]=n*t[1],r[2]=n*t[2],r[3]=Math.cos(e),r};Y.add=w.add;Y.multiply=function(r,t,e){var n=t[0],i=t[1],a=t[2],s=t[3],o=e[0],u=e[1],f=e[2],h=e[3];return r[0]=n*h+s*o+i*f-a*u,r[1]=i*h+s*u+a*o-n*f,r[2]=a*h+s*f+n*u-i*o,r[3]=s*h-n*o-i*u-a*f,r};Y.mul=Y.multiply;Y.scale=w.scale;Y.rotateX=function(r,t,e){e*=.5;var n=t[0],i=t[1],a=t[2],s=t[3],o=Math.sin(e),u=Math.cos(e);return r[0]=n*u+s*o,r[1]=i*u+a*o,r[2]=a*u-i*o,r[3]=s*u-n*o,r};Y.rotateY=function(r,t,e){e*=.5;var n=t[0],i=t[1],a=t[2],s=t[3],o=Math.sin(e),u=Math.cos(e);return r[0]=n*u-a*o,r[1]=i*u+s*o,r[2]=a*u+n*o,r[3]=s*u-i*o,r};Y.rotateZ=function(r,t,e){e*=.5;var n=t[0],i=t[1],a=t[2],s=t[3],o=Math.sin(e),u=Math.cos(e);return r[0]=n*u+i*o,r[1]=i*u-n*o,r[2]=a*u+s*o,r[3]=s*u-a*o,r};Y.calculateW=function(r,t){var e=t[0],n=t[1],i=t[2];return r[0]=e,r[1]=n,r[2]=i,r[3]=Math.sqrt(Math.abs(1-e*e-n*n-i*i)),r};Y.dot=w.dot;Y.lerp=w.lerp;Y.slerp=function(r,t,e,n){var i=t[0],a=t[1],s=t[2],o=t[3],u=e[0],f=e[1],h=e[2],c=e[3],d,l,v,p,y;return l=i*u+a*f+s*h+o*c,l<0&&(l=-l,u=-u,f=-f,h=-h,c=-c),1-l>1e-6?(d=Math.acos(l),v=Math.sin(d),p=Math.sin((1-n)*d)/v,y=Math.sin(n*d)/v):(p=1-n,y=n),r[0]=p*i+y*u,r[1]=p*a+y*f,r[2]=p*s+y*h,r[3]=p*o+y*c,r};Y.invert=function(r,t){var e=t[0],n=t[1],i=t[2],a=t[3],s=e*e+n*n+i*i+a*a,o=s?1/s:0;return r[0]=-e*o,r[1]=-n*o,r[2]=-i*o,r[3]=a*o,r};Y.conjugate=function(r,t){return r[0]=-t[0],r[1]=-t[1],r[2]=-t[2],r[3]=t[3],r};Y.length=w.length;Y.len=Y.length;Y.squaredLength=w.squaredLength;Y.sqrLen=Y.squaredLength;Y.normalize=w.normalize;Y.fromMat3=function(r,t){var e=t[0]+t[4]+t[8],n;if(e>0)n=Math.sqrt(e+1),r[3]=.5*n,n=.5/n,r[0]=(t[5]-t[7])*n,r[1]=(t[6]-t[2])*n,r[2]=(t[1]-t[3])*n;else{var i=0;t[4]>t[0]&&(i=1),t[8]>t[i*3+i]&&(i=2);var a=(i+1)%3,s=(i+2)%3;n=Math.sqrt(t[i*3+i]-t[a*3+a]-t[s*3+s]+1),r[i]=.5*n,n=.5/n,r[3]=(t[a*3+s]-t[s*3+a])*n,r[a]=(t[a*3+i]+t[i*3+a])*n,r[s]=(t[s*3+i]+t[i*3+s])*n}return r};const U=Y;var C=function(){this._axisX=new E,this._axisY=new E,this._axisZ=new E,this.array=R.create(),this._dirty=!0};C.prototype={constructor:C,setArray:function(r){for(var t=0;t<this.array.length;t++)this.array[t]=r[t];return this._dirty=!0,this},adjoint:function(){return R.adjoint(this.array,this.array),this._dirty=!0,this},clone:function(){return new C().copy(this)},copy:function(r){return R.copy(this.array,r.array),this._dirty=!0,this},determinant:function(){return R.determinant(this.array)},fromQuat:function(r){return R.fromQuat(this.array,r.array),this._dirty=!0,this},fromRotationTranslation:function(r,t){return R.fromRotationTranslation(this.array,r.array,t.array),this._dirty=!0,this},fromMat2d:function(r){return C.fromMat2d(this,r),this},frustum:function(r,t,e,n,i,a){return R.frustum(this.array,r,t,e,n,i,a),this._dirty=!0,this},identity:function(){return R.identity(this.array),this._dirty=!0,this},invert:function(){return R.invert(this.array,this.array),this._dirty=!0,this},lookAt:function(r,t,e){return R.lookAt(this.array,r.array,t.array,e.array),this._dirty=!0,this},mul:function(r){return R.mul(this.array,this.array,r.array),this._dirty=!0,this},mulLeft:function(r){return R.mul(this.array,r.array,this.array),this._dirty=!0,this},multiply:function(r){return R.multiply(this.array,this.array,r.array),this._dirty=!0,this},multiplyLeft:function(r){return R.multiply(this.array,r.array,this.array),this._dirty=!0,this},ortho:function(r,t,e,n,i,a){return R.ortho(this.array,r,t,e,n,i,a),this._dirty=!0,this},perspective:function(r,t,e,n){return R.perspective(this.array,r,t,e,n),this._dirty=!0,this},rotate:function(r,t){return R.rotate(this.array,this.array,r,t.array),this._dirty=!0,this},rotateX:function(r){return R.rotateX(this.array,this.array,r),this._dirty=!0,this},rotateY:function(r){return R.rotateY(this.array,this.array,r),this._dirty=!0,this},rotateZ:function(r){return R.rotateZ(this.array,this.array,r),this._dirty=!0,this},scale:function(r){return R.scale(this.array,this.array,r.array),this._dirty=!0,this},translate:function(r){return R.translate(this.array,this.array,r.array),this._dirty=!0,this},transpose:function(){return R.transpose(this.array,this.array),this._dirty=!0,this},decomposeMatrix:function(){var r=_.create(),t=_.create(),e=_.create(),n=P.create();return function(i,a,s){var o=this.array;_.set(r,o[0],o[1],o[2]),_.set(t,o[4],o[5],o[6]),_.set(e,o[8],o[9],o[10]);var u=_.length(r),f=_.length(t),h=_.length(e),c=this.determinant();c<0&&(u=-u),i&&i.set(u,f,h),s.set(o[12],o[13],o[14]),P.fromMat4(n,o),n[0]/=u,n[1]/=u,n[2]/=u,n[3]/=f,n[4]/=f,n[5]/=f,n[6]/=h,n[7]/=h,n[8]/=h,U.fromMat3(a.array,n),U.normalize(a.array,a.array),a._dirty=!0,s._dirty=!0}}(),toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var Nt=Object.defineProperty;if(Nt){var re=C.prototype;Nt(re,"z",{get:function(){var r=this.array;return this._axisZ.set(r[8],r[9],r[10]),this._axisZ},set:function(r){var t=this.array;r=r.array,t[8]=r[0],t[9]=r[1],t[10]=r[2],this._dirty=!0}}),Nt(re,"y",{get:function(){var r=this.array;return this._axisY.set(r[4],r[5],r[6]),this._axisY},set:function(r){var t=this.array;r=r.array,t[4]=r[0],t[5]=r[1],t[6]=r[2],this._dirty=!0}}),Nt(re,"x",{get:function(){var r=this.array;return this._axisX.set(r[0],r[1],r[2]),this._axisX},set:function(r){var t=this.array;r=r.array,t[0]=r[0],t[1]=r[1],t[2]=r[2],this._dirty=!0}})}C.adjoint=function(r,t){return R.adjoint(r.array,t.array),r._dirty=!0,r};C.copy=function(r,t){return R.copy(r.array,t.array),r._dirty=!0,r};C.determinant=function(r){return R.determinant(r.array)};C.identity=function(r){return R.identity(r.array),r._dirty=!0,r};C.ortho=function(r,t,e,n,i,a,s){return R.ortho(r.array,t,e,n,i,a,s),r._dirty=!0,r};C.perspective=function(r,t,e,n,i){return R.perspective(r.array,t,e,n,i),r._dirty=!0,r};C.lookAt=function(r,t,e,n){return R.lookAt(r.array,t.array,e.array,n.array),r._dirty=!0,r};C.invert=function(r,t){return R.invert(r.array,t.array),r._dirty=!0,r};C.mul=function(r,t,e){return R.mul(r.array,t.array,e.array),r._dirty=!0,r};C.multiply=C.mul;C.fromQuat=function(r,t){return R.fromQuat(r.array,t.array),r._dirty=!0,r};C.fromRotationTranslation=function(r,t,e){return R.fromRotationTranslation(r.array,t.array,e.array),r._dirty=!0,r};C.fromMat2d=function(n,e){n._dirty=!0;var e=e.array,n=n.array;return n[0]=e[0],n[4]=e[2],n[12]=e[4],n[1]=e[1],n[5]=e[3],n[13]=e[5],n};C.rotate=function(r,t,e,n){return R.rotate(r.array,t.array,e,n.array),r._dirty=!0,r};C.rotateX=function(r,t,e){return R.rotateX(r.array,t.array,e),r._dirty=!0,r};C.rotateY=function(r,t,e){return R.rotateY(r.array,t.array,e),r._dirty=!0,r};C.rotateZ=function(r,t,e){return R.rotateZ(r.array,t.array,e),r._dirty=!0,r};C.scale=function(r,t,e){return R.scale(r.array,t.array,e.array),r._dirty=!0,r};C.transpose=function(r,t){return R.transpose(r.array,t.array),r._dirty=!0,r};C.translate=function(r,t,e){return R.translate(r.array,t.array,e.array),r._dirty=!0,r};var j=function(r,t,e,n){r=r||0,t=t||0,e=e||0,n=n===void 0?1:n,this.array=U.fromValues(r,t,e,n),this._dirty=!0};j.prototype={constructor:j,add:function(r){return U.add(this.array,this.array,r.array),this._dirty=!0,this},calculateW:function(){return U.calculateW(this.array,this.array),this._dirty=!0,this},set:function(r,t,e,n){return this.array[0]=r,this.array[1]=t,this.array[2]=e,this.array[3]=n,this._dirty=!0,this},setArray:function(r){return this.array[0]=r[0],this.array[1]=r[1],this.array[2]=r[2],this.array[3]=r[3],this._dirty=!0,this},clone:function(){return new j(this.x,this.y,this.z,this.w)},conjugate:function(){return U.conjugate(this.array,this.array),this._dirty=!0,this},copy:function(r){return U.copy(this.array,r.array),this._dirty=!0,this},dot:function(r){return U.dot(this.array,r.array)},fromMat3:function(r){return U.fromMat3(this.array,r.array),this._dirty=!0,this},fromMat4:function(){var r=P.create();return function(t){return P.fromMat4(r,t.array),P.transpose(r,r),U.fromMat3(this.array,r),this._dirty=!0,this}}(),identity:function(){return U.identity(this.array),this._dirty=!0,this},invert:function(){return U.invert(this.array,this.array),this._dirty=!0,this},len:function(){return U.len(this.array)},length:function(){return U.length(this.array)},lerp:function(r,t,e){return U.lerp(this.array,r.array,t.array,e),this._dirty=!0,this},mul:function(r){return U.mul(this.array,this.array,r.array),this._dirty=!0,this},mulLeft:function(r){return U.multiply(this.array,r.array,this.array),this._dirty=!0,this},multiply:function(r){return U.multiply(this.array,this.array,r.array),this._dirty=!0,this},multiplyLeft:function(r){return U.multiply(this.array,r.array,this.array),this._dirty=!0,this},normalize:function(){return U.normalize(this.array,this.array),this._dirty=!0,this},rotateX:function(r){return U.rotateX(this.array,this.array,r),this._dirty=!0,this},rotateY:function(r){return U.rotateY(this.array,this.array,r),this._dirty=!0,this},rotateZ:function(r){return U.rotateZ(this.array,this.array,r),this._dirty=!0,this},rotationTo:function(r,t){return U.rotationTo(this.array,r.array,t.array),this._dirty=!0,this},setAxes:function(r,t,e){return U.setAxes(this.array,r.array,t.array,e.array),this._dirty=!0,this},setAxisAngle:function(r,t){return U.setAxisAngle(this.array,r.array,t),this._dirty=!0,this},slerp:function(r,t,e){return U.slerp(this.array,r.array,t.array,e),this._dirty=!0,this},sqrLen:function(){return U.sqrLen(this.array)},squaredLength:function(){return U.squaredLength(this.array)},fromEuler:function(r,t){return j.fromEuler(this,r,t)},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var pt=Object.defineProperty;if(pt){var Lt=j.prototype;pt(Lt,"x",{get:function(){return this.array[0]},set:function(r){this.array[0]=r,this._dirty=!0}}),pt(Lt,"y",{get:function(){return this.array[1]},set:function(r){this.array[1]=r,this._dirty=!0}}),pt(Lt,"z",{get:function(){return this.array[2]},set:function(r){this.array[2]=r,this._dirty=!0}}),pt(Lt,"w",{get:function(){return this.array[3]},set:function(r){this.array[3]=r,this._dirty=!0}})}j.add=function(r,t,e){return U.add(r.array,t.array,e.array),r._dirty=!0,r};j.set=function(r,t,e,n,i){U.set(r.array,t,e,n,i),r._dirty=!0};j.copy=function(r,t){return U.copy(r.array,t.array),r._dirty=!0,r};j.calculateW=function(r,t){return U.calculateW(r.array,t.array),r._dirty=!0,r};j.conjugate=function(r,t){return U.conjugate(r.array,t.array),r._dirty=!0,r};j.identity=function(r){return U.identity(r.array),r._dirty=!0,r};j.invert=function(r,t){return U.invert(r.array,t.array),r._dirty=!0,r};j.dot=function(r,t){return U.dot(r.array,t.array)};j.len=function(r){return U.length(r.array)};j.lerp=function(r,t,e,n){return U.lerp(r.array,t.array,e.array,n),r._dirty=!0,r};j.slerp=function(r,t,e,n){return U.slerp(r.array,t.array,e.array,n),r._dirty=!0,r};j.mul=function(r,t,e){return U.multiply(r.array,t.array,e.array),r._dirty=!0,r};j.multiply=j.mul;j.rotateX=function(r,t,e){return U.rotateX(r.array,t.array,e),r._dirty=!0,r};j.rotateY=function(r,t,e){return U.rotateY(r.array,t.array,e),r._dirty=!0,r};j.rotateZ=function(r,t,e){return U.rotateZ(r.array,t.array,e),r._dirty=!0,r};j.setAxisAngle=function(r,t,e){return U.setAxisAngle(r.array,t.array,e),r._dirty=!0,r};j.normalize=function(r,t){return U.normalize(r.array,t.array),r._dirty=!0,r};j.sqrLen=function(r){return U.sqrLen(r.array)};j.squaredLength=j.sqrLen;j.fromMat3=function(r,t){return U.fromMat3(r.array,t.array),r._dirty=!0,r};j.setAxes=function(r,t,e,n){return U.setAxes(r.array,t.array,e.array,n.array),r._dirty=!0,r};j.rotationTo=function(r,t,e){return U.rotationTo(r.array,t.array,e.array),r._dirty=!0,r};j.fromEuler=function(r,t,h){r._dirty=!0,t=t.array;var n=r.array,i=Math.cos(t[0]/2),a=Math.cos(t[1]/2),s=Math.cos(t[2]/2),o=Math.sin(t[0]/2),u=Math.sin(t[1]/2),f=Math.sin(t[2]/2),h=(h||"XYZ").toUpperCase();switch(h){case"XYZ":n[0]=o*a*s+i*u*f,n[1]=i*u*s-o*a*f,n[2]=i*a*f+o*u*s,n[3]=i*a*s-o*u*f;break;case"YXZ":n[0]=o*a*s+i*u*f,n[1]=i*u*s-o*a*f,n[2]=i*a*f-o*u*s,n[3]=i*a*s+o*u*f;break;case"ZXY":n[0]=o*a*s-i*u*f,n[1]=i*u*s+o*a*f,n[2]=i*a*f+o*u*s,n[3]=i*a*s-o*u*f;break;case"ZYX":n[0]=o*a*s-i*u*f,n[1]=i*u*s+o*a*f,n[2]=i*a*f-o*u*s,n[3]=i*a*s+o*u*f;break;case"YZX":n[0]=o*a*s+i*u*f,n[1]=i*u*s+o*a*f,n[2]=i*a*f-o*u*s,n[3]=i*a*s-o*u*f;break;case"XZY":n[0]=o*a*s-i*u*f,n[1]=i*u*s-o*a*f,n[2]=i*a*f+o*u*s,n[3]=i*a*s+o*u*f;break}};const ti=j;var Xr=_.set,It=_.copy,Ut=function(r,t){this.min=r||new E(1/0,1/0,1/0),this.max=t||new E(-1/0,-1/0,-1/0),this.vertices=null};Ut.prototype={constructor:Ut,updateFromVertices:function(r){if(r.length>0){var t=this.min,e=this.max,n=t.array,i=e.array;It(n,r[0]),It(i,r[0]);for(var a=1;a<r.length;a++){var s=r[a];s[0]<n[0]&&(n[0]=s[0]),s[1]<n[1]&&(n[1]=s[1]),s[2]<n[2]&&(n[2]=s[2]),s[0]>i[0]&&(i[0]=s[0]),s[1]>i[1]&&(i[1]=s[1]),s[2]>i[2]&&(i[2]=s[2])}t._dirty=!0,e._dirty=!0}},union:function(r){var t=this.min,e=this.max;return _.min(t.array,t.array,r.min.array),_.max(e.array,e.array,r.max.array),t._dirty=!0,e._dirty=!0,this},intersection:function(r){var t=this.min,e=this.max;return _.max(t.array,t.array,r.min.array),_.min(e.array,e.array,r.max.array),t._dirty=!0,e._dirty=!0,this},intersectBoundingBox:function(r){var t=this.min.array,e=this.max.array,n=r.min.array,i=r.max.array;return!(t[0]>i[0]||t[1]>i[1]||t[2]>i[2]||e[0]<n[0]||e[1]<n[1]||e[2]<n[2])},containBoundingBox:function(r){var t=this.min.array,e=this.max.array,n=r.min.array,i=r.max.array;return t[0]<=n[0]&&t[1]<=n[1]&&t[2]<=n[2]&&e[0]>=i[0]&&e[1]>=i[1]&&e[2]>=i[2]},containPoint:function(r){var t=this.min.array,e=this.max.array,n=r.array;return t[0]<=n[0]&&t[1]<=n[1]&&t[2]<=n[2]&&e[0]>=n[0]&&e[1]>=n[1]&&e[2]>=n[2]},isFinite:function(){var r=this.min.array,t=this.max.array;return isFinite(r[0])&&isFinite(r[1])&&isFinite(r[2])&&isFinite(t[0])&&isFinite(t[1])&&isFinite(t[2])},applyTransform:function(r){this.transformFrom(this,r)},transformFrom:function(){var r=_.create(),t=_.create(),e=_.create(),n=_.create(),i=_.create(),a=_.create();return function(s,o){var u=s.min.array,f=s.max.array,h=o.array;return r[0]=h[0]*u[0],r[1]=h[1]*u[0],r[2]=h[2]*u[0],t[0]=h[0]*f[0],t[1]=h[1]*f[0],t[2]=h[2]*f[0],e[0]=h[4]*u[1],e[1]=h[5]*u[1],e[2]=h[6]*u[1],n[0]=h[4]*f[1],n[1]=h[5]*f[1],n[2]=h[6]*f[1],i[0]=h[8]*u[2],i[1]=h[9]*u[2],i[2]=h[10]*u[2],a[0]=h[8]*f[2],a[1]=h[9]*f[2],a[2]=h[10]*f[2],u=this.min.array,f=this.max.array,u[0]=Math.min(r[0],t[0])+Math.min(e[0],n[0])+Math.min(i[0],a[0])+h[12],u[1]=Math.min(r[1],t[1])+Math.min(e[1],n[1])+Math.min(i[1],a[1])+h[13],u[2]=Math.min(r[2],t[2])+Math.min(e[2],n[2])+Math.min(i[2],a[2])+h[14],f[0]=Math.max(r[0],t[0])+Math.max(e[0],n[0])+Math.max(i[0],a[0])+h[12],f[1]=Math.max(r[1],t[1])+Math.max(e[1],n[1])+Math.max(i[1],a[1])+h[13],f[2]=Math.max(r[2],t[2])+Math.max(e[2],n[2])+Math.max(i[2],a[2])+h[14],this.min._dirty=!0,this.max._dirty=!0,this}}(),applyProjection:function(r){var t=this.min.array,e=this.max.array,n=r.array,i=t[0],a=t[1],s=t[2],o=e[0],u=e[1],f=t[2],h=e[0],c=e[1],d=e[2];if(n[15]===1)t[0]=n[0]*i+n[12],t[1]=n[5]*a+n[13],e[2]=n[10]*s+n[14],e[0]=n[0]*h+n[12],e[1]=n[5]*c+n[13],t[2]=n[10]*d+n[14];else{var l=-1/s;t[0]=n[0]*i*l,t[1]=n[5]*a*l,e[2]=(n[10]*s+n[14])*l,l=-1/f,e[0]=n[0]*o*l,e[1]=n[5]*u*l,l=-1/d,t[2]=(n[10]*d+n[14])*l}return this.min._dirty=!0,this.max._dirty=!0,this},updateVertices:function(){var r=this.vertices;if(!r){r=[];for(var t=0;t<8;t++)r[t]=_.fromValues(0,0,0);this.vertices=r}var e=this.min.array,n=this.max.array;return Xr(r[0],e[0],e[1],e[2]),Xr(r[1],e[0],n[1],e[2]),Xr(r[2],n[0],e[1],e[2]),Xr(r[3],n[0],n[1],e[2]),Xr(r[4],e[0],e[1],n[2]),Xr(r[5],e[0],n[1],n[2]),Xr(r[6],n[0],e[1],n[2]),Xr(r[7],n[0],n[1],n[2]),this},copy:function(r){var t=this.min,e=this.max;return It(t.array,r.min.array),It(e.array,r.max.array),t._dirty=!0,e._dirty=!0,this},clone:function(){var r=new Ut;return r.copy(this),r}};const mr=Ut;var ei=0,Kr=lr.extend({name:"",position:null,rotation:null,scale:null,worldTransform:null,localTransform:null,autoUpdateLocalTransform:!0,_parent:null,_scene:null,_needsUpdateWorldTransform:!0,_inIterating:!1,__depth:0},function(){this.name||(this.name=(this.type||"NODE")+"_"+ei++),this.position||(this.position=new E),this.rotation||(this.rotation=new ti),this.scale||(this.scale=new E(1,1,1)),this.worldTransform=new C,this.localTransform=new C,this._children=[]},{target:null,invisible:!1,isSkinnedMesh:function(){return!1},isRenderable:function(){return!1},setName:function(r){var t=this._scene;if(t){var e=t._nodeRepository;delete e[this.name],e[r]=this}this.name=r},add:function(r){var t=r._parent;if(t!==this){t&&t.remove(r),r._parent=this,this._children.push(r);var e=this._scene;e&&e!==r.scene&&r.traverse(this._addSelfToScene,this),r._needsUpdateWorldTransform=!0}},remove:function(r){var t=this._children,e=t.indexOf(r);e<0||(t.splice(e,1),r._parent=null,this._scene&&r.traverse(this._removeSelfFromScene,this))},removeAll:function(){for(var r=this._children,t=0;t<r.length;t++)r[t]._parent=null,this._scene&&r[t].traverse(this._removeSelfFromScene,this);this._children=[]},getScene:function(){return this._scene},getParent:function(){return this._parent},_removeSelfFromScene:function(r){r._scene.removeFromScene(r),r._scene=null},_addSelfToScene:function(r){this._scene.addToScene(r),r._scene=this._scene},isAncestor:function(r){for(var t=r._parent;t;){if(t===this)return!0;t=t._parent}return!1},children:function(){return this._children.slice()},childAt:function(r){return this._children[r]},getChildByName:function(r){for(var t=this._children,e=0;e<t.length;e++)if(t[e].name===r)return t[e]},getDescendantByName:function(r){for(var t=this._children,e=0;e<t.length;e++){var n=t[e];if(n.name===r)return n;var i=n.getDescendantByName(r);if(i)return i}},queryNode:function(r){if(r){for(var t=r.split("/"),e=this,n=0;n<t.length;n++){var i=t[n];if(i){for(var a=!1,s=e._children,o=0;o<s.length;o++){var u=s[o];if(u.name===i){e=u,a=!0;break}}if(!a)return}}return e}},getPath:function(r){if(!this._parent)return"/";for(var t=this._parent,e=this.name;t._parent&&(e=t.name+"/"+e,t._parent!=r);)t=t._parent;return!t._parent&&r?null:e},traverse:function(r,t){r.call(t,this);for(var e=this._children,n=0,i=e.length;n<i;n++)e[n].traverse(r,t)},eachChild:function(r,t){for(var e=this._children,n=0,i=e.length;n<i;n++){var a=e[n];r.call(t,a,n)}},setLocalTransform:function(r){R.copy(this.localTransform.array,r.array),this.decomposeLocalTransform()},decomposeLocalTransform:function(r){var t=r?null:this.scale;this.localTransform.decomposeMatrix(t,this.rotation,this.position)},setWorldTransform:function(r){R.copy(this.worldTransform.array,r.array),this.decomposeWorldTransform()},decomposeWorldTransform:function(){var r=R.create();return function(t){var e=this.localTransform,n=this.worldTransform;this._parent?(R.invert(r,this._parent.worldTransform.array),R.multiply(e.array,r,n.array)):R.copy(e.array,n.array);var i=t?null:this.scale;e.decomposeMatrix(i,this.rotation,this.position)}}(),transformNeedsUpdate:function(){return this.position._dirty||this.rotation._dirty||this.scale._dirty},updateLocalTransform:function(){var r=this.position,t=this.rotation,e=this.scale;if(this.transformNeedsUpdate()){var n=this.localTransform.array;R.fromRotationTranslation(n,t.array,r.array),R.scale(n,n,e.array),t._dirty=!1,e._dirty=!1,r._dirty=!1,this._needsUpdateWorldTransform=!0}},_updateWorldTransformTopDown:function(){var r=this.localTransform.array,t=this.worldTransform.array;this._parent?R.multiplyAffine(t,this._parent.worldTransform.array,r):R.copy(t,r)},updateWorldTransform:function(){for(var r=this;r&&r.getParent()&&r.getParent().transformNeedsUpdate();)r=r.getParent();r.update()},update:function(r){this.autoUpdateLocalTransform?this.updateLocalTransform():r=!0,(r||this._needsUpdateWorldTransform)&&(this._updateWorldTransformTopDown(),r=!0,this._needsUpdateWorldTransform=!1);for(var t=this._children,e=0,n=t.length;e<n;e++)t[e].update(r)},getBoundingBox:function(){function r(i){return!i.invisible&&i.geometry}var t=new mr,e=new C,n=new C;return function(i,a){return a=a||new mr,this._parent?C.invert(n,this._parent.worldTransform):C.identity(n),this.traverse(function(s){s.geometry&&s.geometry.boundingBox&&(t.copy(s.geometry.boundingBox),C.multiply(e,n,s.worldTransform),t.applyTransform(e),a.union(t))},this,r),a}}(),getWorldPosition:function(r){this.transformNeedsUpdate()&&this.updateWorldTransform();var t=this.worldTransform.array;if(r){var e=r.array;return e[0]=t[12],e[1]=t[13],e[2]=t[14],r}else return new E(t[12],t[13],t[14])},clone:function(){var r=new this.constructor,t=this._children;r.setName(this.name),r.position.copy(this.position),r.rotation.copy(this.rotation),r.scale.copy(this.scale);for(var e=0;e<t.length;e++)r.add(t[e].clone());return r},rotateAround:function(){var r=new E,t=new C;return function(e,n,i){r.copy(this.position).subtract(e);var a=this.localTransform;a.identity(),a.translate(e),a.rotate(i,n),t.fromRotationTranslation(this.rotation,r),a.multiply(t),a.scale(this.scale),this.decomposeLocalTransform(),this._needsUpdateWorldTransform=!0}}(),lookAt:function(){var r=new C;return function(t,e){r.lookAt(this.position,t,e||this.localTransform.y).invert(),this.setLocalTransform(r),this.target=t}}()}),pr=Kr.extend({material:null,geometry:null,mode:T.TRIANGLES,_renderInfo:null},{__program:null,lightGroup:0,renderOrder:0,culling:!0,cullFace:T.BACK,frontFace:T.CCW,frustumCulling:!0,receiveShadow:!0,castShadow:!0,ignorePicking:!1,ignorePreZ:!1,ignoreGBuffer:!1,isRenderable:function(){return this.geometry&&this.material&&this.material.shader&&!this.invisible&&this.geometry.vertexCount>0},beforeRender:function(r){},afterRender:function(r,t){},getBoundingBox:function(r,t){return t=Kr.prototype.getBoundingBox.call(this,r,t),this.geometry&&this.geometry.boundingBox&&t.union(this.geometry.boundingBox),t},clone:function(){var r=["castShadow","receiveShadow","mode","culling","cullFace","frontFace","frustumCulling","renderOrder","lineWidth","ignorePicking","ignorePreZ","ignoreGBuffer"];return function(){var t=Kr.prototype.clone.call(this);t.geometry=this.geometry,t.material=this.material;for(var e=0;e<r.length;e++){var n=r[e];t[n]!==this[n]&&(t[n]=this[n])}return t}}()});pr.POINTS=T.POINTS;pr.LINES=T.LINES;pr.LINE_LOOP=T.LINE_LOOP;pr.LINE_STRIP=T.LINE_STRIP;pr.TRIANGLES=T.TRIANGLES;pr.TRIANGLE_STRIP=T.TRIANGLE_STRIP;pr.TRIANGLE_FAN=T.TRIANGLE_FAN;pr.BACK=T.BACK;pr.FRONT=T.FRONT;pr.FRONT_AND_BACK=T.FRONT_AND_BACK;pr.CW=T.CW;pr.CCW=T.CCW;var _e=lr.extend({scene:null,camera:null,renderer:null},function(){this._ray=new de,this._ndc=new an},{pick:function(r,t,e){var n=this.pickAll(r,t,[],e);return n[0]||null},pickAll:function(r,t,e,n){return this.renderer.screenToNDC(r,t,this._ndc),this.camera.castRay(this._ndc,this._ray),e=e||[],this._intersectNode(this.scene,e,n||!1),e.sort(this._intersectionCompareFunc),e},_intersectNode:function(r,t,e){r instanceof pr&&r.isRenderable()&&(!r.ignorePicking||e)&&(r.mode===T.TRIANGLES&&r.geometry.isUseIndices()||r.geometry.pickByRay||r.geometry.pick)&&this._intersectRenderable(r,t);for(var n=0;n<r._children.length;n++)this._intersectNode(r._children[n],t,e)},_intersectRenderable:function(){var r=new E,t=new E,e=new E,n=new de,i=new C;return function(a,s){var o=a.isSkinnedMesh();n.copy(this._ray),C.invert(i,a.worldTransform),o||n.applyTransform(i);var u=a.geometry,f=o?a.skeleton.boundingBox:u.boundingBox;if(!(f&&!n.intersectBoundingBox(f))){if(u.pick){u.pick(this._ndc.x,this._ndc.y,this.renderer,this.camera,a,s);return}else if(u.pickByRay){u.pickByRay(n,a,s);return}var h=a.cullFace===T.BACK&&a.frontFace===T.CCW||a.cullFace===T.FRONT&&a.frontFace===T.CW,c,d=u.indices,l=u.attributes.position,v=u.attributes.weight,p=u.attributes.joint,y,m=[];if(!(!l||!l.value||!d)){if(o){y=a.skeleton.getSubSkinMatrices(a.__uid__,a.joints);for(var A=0;A<a.joints.length;A++){m[A]=m[A]||[];for(var x=0;x<16;x++)m[A][x]=y[A*16+x]}var g=[],S=[],M=[],O=[],D=[],L=u.attributes.skinnedPosition;(!L||!L.value)&&(u.createAttribute("skinnedPosition","f",3),L=u.attributes.skinnedPosition,L.init(u.vertexCount));for(var A=0;A<u.vertexCount;A++){l.get(A,g),v.get(A,S),p.get(A,M),S[3]=1-S[0]-S[1]-S[2],_.set(O,0,0,0);for(var x=0;x<4;x++)M[x]>=0&&S[x]>1e-4&&(_.transformMat4(D,g,m[M[x]]),_.scaleAndAdd(O,O,D,S[x]));L.set(A,O)}}for(var A=0;A<d.length;A+=3){var W=d[A],I=d[A+1],z=d[A+2],H=o?u.attributes.skinnedPosition:l;if(H.get(W,r.array),H.get(I,t.array),H.get(z,e.array),h?c=n.intersectTriangle(r,t,e,a.culling):c=n.intersectTriangle(r,e,t,a.culling),c){var B=new E;o?E.copy(B,c):E.transformMat4(B,c,a.worldTransform),s.push(new _e.Intersection(c,B,a,[W,I,z],A/3,E.dist(B,this._ray.origin)))}}}}}}(),_intersectionCompareFunc:function(r,t){return r.distance-t.distance}});_e.Intersection=function(r,t,e,n,i,a){this.point=r,this.pointWorld=t,this.target=e,this.triangle=n,this.triangleIndex=i,this.distance=a};const Ga=_e;var yt="__dt__",lt=function(){this._contextId=0,this._caches=[],this._context={}};lt.prototype={use:function(r,t){var e=this._caches;e[r]||(e[r]={},t&&(e[r]=t())),this._contextId=r,this._context=e[r]},put:function(r,t){this._context[r]=t},get:function(r){return this._context[r]},dirty:function(r){r=r||"";var t=yt+r;this.put(t,!0)},dirtyAll:function(r){r=r||"";for(var t=yt+r,e=this._caches,n=0;n<e.length;n++)e[n]&&(e[n][t]=!0)},fresh:function(r){r=r||"";var t=yt+r;this.put(t,!1)},freshAll:function(r){r=r||"";for(var t=yt+r,e=this._caches,n=0;n<e.length;n++)e[n]&&(e[n][t]=!1)},isDirty:function(r){r=r||"";var t=yt+r,e=this._context;return!e.hasOwnProperty(t)||e[t]===!0},deleteContext:function(r){delete this._caches[r],this._context={}},delete:function(r){delete this._context[r]},clearAll:function(){this._caches={}},getContext:function(){return this._context},eachContext:function(r,t){var e=Object.keys(this._caches);e.forEach(function(n){r&&r.call(t,n)})},miss:function(r){return!this._context.hasOwnProperty(r)}};lt.prototype.constructor=lt;var N=lr.extend({width:512,height:512,type:T.UNSIGNED_BYTE,format:T.RGBA,wrapS:T.REPEAT,wrapT:T.REPEAT,minFilter:T.LINEAR_MIPMAP_LINEAR,magFilter:T.LINEAR,useMipmap:!0,anisotropic:1,flipY:!0,sRGB:!0,unpackAlignment:4,premultiplyAlpha:!1,dynamic:!1,NPOT:!1,__used:0},function(){this._cache=new lt},{getWebGLTexture:function(r){var t=r.gl,e=this._cache;return e.use(r.__uid__),e.miss("webgl_texture")&&e.put("webgl_texture",t.createTexture()),this.dynamic?this.update(r):e.isDirty()&&(this.update(r),e.fresh()),e.get("webgl_texture")},bind:function(){},unbind:function(){},dirty:function(){this._cache&&this._cache.dirtyAll()},update:function(r){},updateCommon:function(r){var t=r.gl;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,this.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,this.unpackAlignment),this.format===T.DEPTH_COMPONENT&&(this.useMipmap=!1);var e=r.getGLExtension("EXT_sRGB");this.format===N.SRGB&&!e&&(this.format=N.RGB),this.format===N.SRGB_ALPHA&&!e&&(this.format=N.RGBA),this.NPOT=!this.isPowerOfTwo()},getAvailableWrapS:function(){return this.NPOT?T.CLAMP_TO_EDGE:this.wrapS},getAvailableWrapT:function(){return this.NPOT?T.CLAMP_TO_EDGE:this.wrapT},getAvailableMinFilter:function(){var r=this.minFilter;return this.NPOT||!this.useMipmap?r===T.NEAREST_MIPMAP_NEAREST||r===T.NEAREST_MIPMAP_LINEAR?T.NEAREST:r===T.LINEAR_MIPMAP_LINEAR||r===T.LINEAR_MIPMAP_NEAREST?T.LINEAR:r:r},getAvailableMagFilter:function(){return this.magFilter},nextHighestPowerOfTwo:function(r){--r;for(var t=1;t<32;t<<=1)r=r|r>>t;return r+1},dispose:function(r){var t=this._cache;t.use(r.__uid__);var e=t.get("webgl_texture");e&&r.gl.deleteTexture(e),t.deleteContext(r.__uid__)},isRenderable:function(){},isPowerOfTwo:function(){}});Object.defineProperty(N.prototype,"width",{get:function(){return this._width},set:function(r){this._width=r}});Object.defineProperty(N.prototype,"height",{get:function(){return this._height},set:function(r){this._height=r}});N.BYTE=T.BYTE;N.UNSIGNED_BYTE=T.UNSIGNED_BYTE;N.SHORT=T.SHORT;N.UNSIGNED_SHORT=T.UNSIGNED_SHORT;N.INT=T.INT;N.UNSIGNED_INT=T.UNSIGNED_INT;N.FLOAT=T.FLOAT;N.HALF_FLOAT=36193;N.UNSIGNED_INT_24_8_WEBGL=34042;N.DEPTH_COMPONENT=T.DEPTH_COMPONENT;N.DEPTH_STENCIL=T.DEPTH_STENCIL;N.ALPHA=T.ALPHA;N.RGB=T.RGB;N.RGBA=T.RGBA;N.LUMINANCE=T.LUMINANCE;N.LUMINANCE_ALPHA=T.LUMINANCE_ALPHA;N.SRGB=35904;N.SRGB_ALPHA=35906;N.COMPRESSED_RGB_S3TC_DXT1_EXT=33776;N.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777;N.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778;N.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779;N.NEAREST=T.NEAREST;N.LINEAR=T.LINEAR;N.NEAREST_MIPMAP_NEAREST=T.NEAREST_MIPMAP_NEAREST;N.LINEAR_MIPMAP_NEAREST=T.LINEAR_MIPMAP_NEAREST;N.NEAREST_MIPMAP_LINEAR=T.NEAREST_MIPMAP_LINEAR;N.LINEAR_MIPMAP_LINEAR=T.LINEAR_MIPMAP_LINEAR;N.REPEAT=T.REPEAT;N.CLAMP_TO_EDGE=T.CLAMP_TO_EDGE;N.MIRRORED_REPEAT=T.MIRRORED_REPEAT;var Tr=pr.extend({skeleton:null,joints:null},function(){this.joints||(this.joints=[])},{offsetMatrix:null,isInstancedMesh:function(){return!1},isSkinnedMesh:function(){return!!(this.skeleton&&this.joints&&this.joints.length>0)},clone:function(){var r=pr.prototype.clone.call(this);return r.skeleton=this.skeleton,this.joints&&(r.joints=this.joints.slice()),r}});Tr.POINTS=T.POINTS;Tr.LINES=T.LINES;Tr.LINE_LOOP=T.LINE_LOOP;Tr.LINE_STRIP=T.LINE_STRIP;Tr.TRIANGLES=T.TRIANGLES;Tr.TRIANGLE_STRIP=T.TRIANGLE_STRIP;Tr.TRIANGLE_FAN=T.TRIANGLE_FAN;Tr.BACK=T.BACK;Tr.FRONT=T.FRONT;Tr.FRONT_AND_BACK=T.FRONT_AND_BACK;Tr.CW=T.CW;Tr.CCW=T.CCW;const hn=Tr;var Mt={};Mt.isPowerOfTwo=function(r){return(r&r-1)===0};Mt.nextPowerOfTwo=function(r){return r--,r|=r>>1,r|=r>>2,r|=r>>4,r|=r>>8,r|=r>>16,r++,r};Mt.nearestPowerOfTwo=function(r){return Math.pow(2,Math.round(Math.log(r)/Math.LN2))};var ke=Mt.isPowerOfTwo;function Xe(r){return Math.pow(2,Math.round(Math.log(r)/Math.LN2))}function ni(r,t){var e=Xe(r.width),n=Xe(r.height);t=t||document.createElement("canvas"),t.width=e,t.height=n;var i=t.getContext("2d");return i.drawImage(r.image,0,0,e,n),t}var pe=N.extend(function(){return{image:null,pixels:null,mipmaps:[],convertToPOT:!1}},{textureType:"texture2D",update:function(r){var t=r.gl;t.bindTexture(t.TEXTURE_2D,this._cache.get("webgl_texture")),this.updateCommon(r);var e=this.format,n=this.type,i=!!(this.convertToPOT&&!this.mipmaps.length&&this.image&&(this.wrapS===N.REPEAT||this.wrapT===N.REPEAT)&&this.NPOT);t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,i?this.wrapS:this.getAvailableWrapS()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,i?this.wrapT:this.getAvailableWrapT()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,i?this.magFilter:this.getAvailableMagFilter()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,i?this.minFilter:this.getAvailableMinFilter());var a=r.getGLExtension("EXT_texture_filter_anisotropic");if(a&&this.anisotropic>1&&t.texParameterf(t.TEXTURE_2D,a.TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropic),n===36193){var s=r.getGLExtension("OES_texture_half_float");s||(n=T.FLOAT)}if(this.mipmaps.length)for(var o=this.width,u=this.height,f=0;f<this.mipmaps.length;f++){var h=this.mipmaps[f];this._updateTextureData(t,h,f,o,u,e,n,!1),o/=2,u/=2}else this._updateTextureData(t,this,0,this.width,this.height,e,n,i),this.useMipmap&&(!this.NPOT||i)&&t.generateMipmap(t.TEXTURE_2D);t.bindTexture(t.TEXTURE_2D,null)},_updateTextureData:function(r,t,e,n,i,a,s,o){if(t.image){var u=t.image;o&&(this._potCanvas=ni(this,this._potCanvas),u=this._potCanvas),r.texImage2D(r.TEXTURE_2D,e,a,a,s,u)}else a<=N.COMPRESSED_RGBA_S3TC_DXT5_EXT&&a>=N.COMPRESSED_RGB_S3TC_DXT1_EXT?r.compressedTexImage2D(r.TEXTURE_2D,e,a,n,i,0,t.pixels):r.texImage2D(r.TEXTURE_2D,e,a,n,i,0,a,s,t.pixels)},generateMipmap:function(r){var t=r.gl;this.useMipmap&&!this.NPOT&&(t.bindTexture(t.TEXTURE_2D,this._cache.get("webgl_texture")),t.generateMipmap(t.TEXTURE_2D))},isPowerOfTwo:function(){return ke(this.width)&&ke(this.height)},isRenderable:function(){return this.image?this.image.width>0&&this.image.height>0:!!(this.width&&this.height)},bind:function(r){r.gl.bindTexture(r.gl.TEXTURE_2D,this.getWebGLTexture(r))},unbind:function(r){r.gl.bindTexture(r.gl.TEXTURE_2D,null)},load:function(r,t){var e=K.createImage();t&&(e.crossOrigin=t);var n=this;return e.onload=function(){n.dirty(),n.trigger("success",n)},e.onerror=function(){n.trigger("error",n)},e.src=r,this.image=e,this}});Object.defineProperty(pe.prototype,"width",{get:function(){return this.image?this.image.width:this._width},set:function(r){this.image?console.warn("Texture from image can't set width"):(this._width!==r&&this.dirty(),this._width=r)}});Object.defineProperty(pe.prototype,"height",{get:function(){return this.image?this.image.height:this._height},set:function(r){this.image?console.warn("Texture from image can't set height"):(this._height!==r&&this.dirty(),this._height=r)}});const gr=pe;function cn(r){return{byte:K.Int8Array,ubyte:K.Uint8Array,short:K.Int16Array,ushort:K.Uint16Array}[r]||K.Float32Array}function te(r){return"attr_"+r}function dt(r,t,e,n){switch(this.name=r,this.type=t,this.size=e,this.semantic=n||"",this.value=null,e){case 1:this.get=function(i){return this.value[i]},this.set=function(i,a){this.value[i]=a},this.copy=function(i,a){this.value[i]=this.value[i]};break;case 2:this.get=function(i,a){var s=this.value;return a[0]=s[i*2],a[1]=s[i*2+1],a},this.set=function(i,a){var s=this.value;s[i*2]=a[0],s[i*2+1]=a[1]},this.copy=function(i,a){var s=this.value;a*=2,i*=2,s[i]=s[a],s[i+1]=s[a+1]};break;case 3:this.get=function(i,a){var s=i*3,o=this.value;return a[0]=o[s],a[1]=o[s+1],a[2]=o[s+2],a},this.set=function(i,a){var s=i*3,o=this.value;o[s]=a[0],o[s+1]=a[1],o[s+2]=a[2]},this.copy=function(i,a){var s=this.value;a*=3,i*=3,s[i]=s[a],s[i+1]=s[a+1],s[i+2]=s[a+2]};break;case 4:this.get=function(i,a){var s=this.value,o=i*4;return a[0]=s[o],a[1]=s[o+1],a[2]=s[o+2],a[3]=s[o+3],a},this.set=function(i,a){var s=this.value,o=i*4;s[o]=a[0],s[o+1]=a[1],s[o+2]=a[2],s[o+3]=a[3]},this.copy=function(i,a){var s=this.value;a*=4,i*=4,s[i]=s[a],s[i+1]=s[a+1],s[i+2]=s[a+2],s[i+3]=s[a+3]}}}dt.prototype.init=function(r){if(!this.value||this.value.length!==r*this.size){var t=cn(this.type);this.value=new t(r*this.size)}};dt.prototype.fromArray=function(r){var t=cn(this.type),e;if(r[0]&&r[0].length){var n=0,i=this.size;e=new t(r.length*i);for(var a=0;a<r.length;a++)for(var s=0;s<i;s++)e[n++]=r[a][s]}else e=new t(r);this.value=e};dt.prototype.clone=function(r){var t=new dt(this.name,this.type,this.size,this.semantic);return r&&console.warn("todo"),t};function ln(r,t,e,n,i){this.name=r,this.type=t,this.buffer=e,this.size=n,this.semantic=i,this.symbol="",this.needsRemove=!1}function dn(r){this.buffer=r,this.count=0}var yr=lr.extend(function(){return{attributes:{},indices:null,dynamic:!0,_enabledAttributes:null,__used:0}},function(){this._cache=new lt,this._attributeList=Object.keys(this.attributes),this.__vaoCache={}},{mainAttribute:"",pick:null,pickByRay:null,dirty:function(){for(var r=this.getEnabledAttributes(),t=0;t<r.length;t++)this.dirtyAttribute(r[t]);this.dirtyIndices(),this._enabledAttributes=null,this._cache.dirty("any")},dirtyIndices:function(){this._cache.dirtyAll("indices")},dirtyAttribute:function(r){this._cache.dirtyAll(te(r)),this._cache.dirtyAll("attributes")},getTriangleIndices:function(r,t){if(r<this.triangleCount&&r>=0){t||(t=[]);var e=this.indices;return t[0]=e[r*3],t[1]=e[r*3+1],t[2]=e[r*3+2],t}},setTriangleIndices:function(r,t){var e=this.indices;e[r*3]=t[0],e[r*3+1]=t[1],e[r*3+2]=t[2]},isUseIndices:function(){return!!this.indices},initIndicesFromArray:function(r){var t,e=this.vertexCount>65535?K.Uint32Array:K.Uint16Array;if(r[0]&&r[0].length){var n=0,i=3;t=new e(r.length*i);for(var a=0;a<r.length;a++)for(var s=0;s<i;s++)t[n++]=r[a][s]}else t=new e(r);this.indices=t},createAttribute:function(r,t,e,n){var i=new dt(r,t,e,n);return this.attributes[r]&&this.removeAttribute(r),this.attributes[r]=i,this._attributeList.push(r),i},removeAttribute:function(r){var t=this._attributeList,e=t.indexOf(r);return e>=0?(t.splice(e,1),delete this.attributes[r],!0):!1},getAttribute:function(r){return this.attributes[r]},getEnabledAttributes:function(){var r=this._enabledAttributes,t=this._attributeList;if(r)return r;for(var e=[],n=this.vertexCount,i=0;i<t.length;i++){var a=t[i],s=this.attributes[a];s.value&&s.value.length===n*s.size&&e.push(a)}return this._enabledAttributes=e,e},getBufferChunks:function(r){var t=this._cache;t.use(r.__uid__);var e=t.isDirty("attributes"),n=t.isDirty("indices");if(e||n){this._updateBuffer(r.gl,e,n);for(var i=this.getEnabledAttributes(),a=0;a<i.length;a++)t.fresh(te(i[a]));t.fresh("attributes"),t.fresh("indices")}return t.fresh("any"),t.get("chunks")},_updateBuffer:function(r,t,e){var n=this._cache,i=n.get("chunks"),a=!1;i||(i=[],i[0]={attributeBuffers:[],indicesBuffer:null},n.put("chunks",i),a=!0);var s=i[0],o=s.attributeBuffers,u=s.indicesBuffer;if(t||a){var f=this.getEnabledAttributes(),h={};if(!a)for(var c=0;c<o.length;c++)h[o[c].name]=o[c];for(var d=0;d<f.length;d++){var l=f[d],v=this.attributes[l],p;a||(p=h[l]);var y;p?y=p.buffer:y=r.createBuffer(),n.isDirty(te(l))&&(r.bindBuffer(r.ARRAY_BUFFER,y),r.bufferData(r.ARRAY_BUFFER,v.value,this.dynamic?r.DYNAMIC_DRAW:r.STATIC_DRAW)),o[d]=new ln(l,v.type,y,v.size,v.semantic)}for(var c=d;c<o.length;c++)r.deleteBuffer(o[c].buffer);o.length=d}this.isUseIndices()&&(e||a)&&(u||(u=new dn(r.createBuffer()),s.indicesBuffer=u),u.count=this.indices.length,r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,u.buffer),r.bufferData(r.ELEMENT_ARRAY_BUFFER,this.indices,this.dynamic?r.DYNAMIC_DRAW:r.STATIC_DRAW))},dispose:function(r){var t=this._cache;t.use(r.__uid__);var e=t.get("chunks");if(e)for(var n=0;n<e.length;n++){for(var i=e[n],a=0;a<i.attributeBuffers.length;a++){var s=i.attributeBuffers[a];r.gl.deleteBuffer(s.buffer)}i.indicesBuffer&&r.gl.deleteBuffer(i.indicesBuffer.buffer)}if(this.__vaoCache){var o=r.getGLExtension("OES_vertex_array_object");for(var u in this.__vaoCache){var f=this.__vaoCache[u].vao;f&&o.deleteVertexArrayOES(f)}}this.__vaoCache={},t.deleteContext(r.__uid__)}});Object.defineProperty&&(Object.defineProperty(yr.prototype,"vertexCount",{enumerable:!1,get:function(){var r=this.attributes[this.mainAttribute];return r||(r=this.attributes[this._attributeList[0]]),!r||!r.value?0:r.value.length/r.size}}),Object.defineProperty(yr.prototype,"triangleCount",{enumerable:!1,get:function(){var r=this.indices;return r?r.length/3:0}}));yr.STATIC_DRAW=T.STATIC_DRAW;yr.DYNAMIC_DRAW=T.DYNAMIC_DRAW;yr.STREAM_DRAW=T.STREAM_DRAW;yr.AttributeBuffer=ln;yr.IndicesBuffer=dn;yr.Attribute=dt;var dr=_.create,at=_.add,jr=_.set,br=yr.Attribute,kr=yr.extend(function(){return{attributes:{position:new br("position","float",3,"POSITION"),texcoord0:new br("texcoord0","float",2,"TEXCOORD_0"),texcoord1:new br("texcoord1","float",2,"TEXCOORD_1"),normal:new br("normal","float",3,"NORMAL"),tangent:new br("tangent","float",4,"TANGENT"),color:new br("color","float",4,"COLOR"),weight:new br("weight","float",3,"WEIGHT"),joint:new br("joint","float",4,"JOINT"),barycentric:new br("barycentric","float",3,null)},boundingBox:null}},{mainAttribute:"position",updateBoundingBox:function(){var r=this.boundingBox;r||(r=this.boundingBox=new mr);var t=this.attributes.position.value;if(t&&t.length){var e=r.min,n=r.max,i=e.array,a=n.array;_.set(i,t[0],t[1],t[2]),_.set(a,t[0],t[1],t[2]);for(var s=3;s<t.length;){var o=t[s++],u=t[s++],f=t[s++];o<i[0]&&(i[0]=o),u<i[1]&&(i[1]=u),f<i[2]&&(i[2]=f),o>a[0]&&(a[0]=o),u>a[1]&&(a[1]=u),f>a[2]&&(a[2]=f)}e._dirty=!0,n._dirty=!0}},generateVertexNormals:function(){if(this.vertexCount){var r=this.indices,t=this.attributes,e=t.position.value,n=t.normal.value;if(!n||n.length!==e.length)n=t.normal.value=new K.Float32Array(e.length);else for(var i=0;i<n.length;i++)n[i]=0;for(var a=dr(),s=dr(),o=dr(),u=dr(),f=dr(),h=dr(),c=r?r.length:this.vertexCount,d,l,v,p=0;p<c;){r?(d=r[p++],l=r[p++],v=r[p++]):(d=p++,l=p++,v=p++),jr(a,e[d*3],e[d*3+1],e[d*3+2]),jr(s,e[l*3],e[l*3+1],e[l*3+2]),jr(o,e[v*3],e[v*3+1],e[v*3+2]),_.sub(u,a,s),_.sub(f,s,o),_.cross(h,u,f);for(var i=0;i<3;i++)n[d*3+i]=n[d*3+i]+h[i],n[l*3+i]=n[l*3+i]+h[i],n[v*3+i]=n[v*3+i]+h[i]}for(var i=0;i<n.length;)jr(h,n[i],n[i+1],n[i+2]),_.normalize(h,h),n[i++]=h[0],n[i++]=h[1],n[i++]=h[2];this.dirty()}},generateFaceNormals:function(){if(this.vertexCount){this.isUniqueVertex()||this.generateUniqueVertex();var r=this.indices,t=this.attributes,e=t.position.value,n=t.normal.value,i=dr(),a=dr(),s=dr(),o=dr(),u=dr(),f=dr();n||(n=t.normal.value=new Float32Array(e.length));for(var h=r?r.length:this.vertexCount,c,d,l,v=0;v<h;){r?(c=r[v++],d=r[v++],l=r[v++]):(c=v++,d=v++,l=v++),jr(i,e[c*3],e[c*3+1],e[c*3+2]),jr(a,e[d*3],e[d*3+1],e[d*3+2]),jr(s,e[l*3],e[l*3+1],e[l*3+2]),_.sub(o,i,a),_.sub(u,a,s),_.cross(f,o,u),_.normalize(f,f);for(var p=0;p<3;p++)n[c*3+p]=f[p],n[d*3+p]=f[p],n[l*3+p]=f[p]}this.dirty()}},generateTangents:function(){if(this.vertexCount){var r=this.vertexCount,t=this.attributes;t.tangent.value||(t.tangent.value=new Float32Array(r*4));var e=t.texcoord0.value,n=t.position.value,i=t.tangent.value,a=t.normal.value;if(!e){console.warn("Geometry without texcoords can't generate tangents.");return}for(var s=[],o=[],u=0;u<r;u++)s[u]=[0,0,0],o[u]=[0,0,0];for(var f=[0,0,0],h=[0,0,0],c=this.indices,d=c?c.length:this.vertexCount,l,v,p,u=0;u<d;){c?(l=c[u++],v=c[u++],p=c[u++]):(l=u++,v=u++,p=u++);var y=e[l*2],m=e[v*2],A=e[p*2],x=e[l*2+1],g=e[v*2+1],S=e[p*2+1],M=n[l*3],O=n[v*3],D=n[p*3],L=n[l*3+1],W=n[v*3+1],I=n[p*3+1],z=n[l*3+2],H=n[v*3+2],B=n[p*3+2],Z=O-M,q=D-M,$=W-L,Ar=I-L,Rr=H-z,Br=B-z,Ur=m-y,wr=A-y,Cr=g-x,Fr=S-x,Hr=1/(Ur*Fr-Cr*wr);f[0]=(Fr*Z-Cr*q)*Hr,f[1]=(Fr*$-Cr*Ar)*Hr,f[2]=(Fr*Rr-Cr*Br)*Hr,h[0]=(Ur*q-wr*Z)*Hr,h[1]=(Ur*Ar-wr*$)*Hr,h[2]=(Ur*Br-wr*Rr)*Hr,at(s[l],s[l],f),at(s[v],s[v],f),at(s[p],s[p],f),at(o[l],o[l],h),at(o[v],o[v],h),at(o[p],o[p],h)}for(var Or=dr(),Ee=dr(),tt=dr(),u=0;u<r;u++){tt[0]=a[u*3],tt[1]=a[u*3+1],tt[2]=a[u*3+2];var zt=s[u];_.scale(Or,tt,_.dot(tt,zt)),_.sub(Or,zt,Or),_.normalize(Or,Or),_.cross(Ee,tt,zt),i[u*4]=Or[0],i[u*4+1]=Or[1],i[u*4+2]=Or[2],i[u*4+3]=_.dot(Ee,o[u])<0?-1:1}this.dirty()}},isUniqueVertex:function(){return this.isUseIndices()?this.vertexCount===this.indices.length:!0},generateUniqueVertex:function(){if(!(!this.vertexCount||!this.indices)){this.indices.length>65535&&(this.indices=new K.Uint32Array(this.indices));for(var r=this.attributes,t=this.indices,e=this.getEnabledAttributes(),n={},i=0;i<e.length;i++){var a=e[i];n[a]=r[a].value,r[a].init(this.indices.length)}for(var s=0,o=0;o<t.length;o++){for(var u=t[o],i=0;i<e.length;i++)for(var a=e[i],f=r[a].value,h=r[a].size,c=0;c<h;c++)f[s*h+c]=n[a][u*h+c];t[o]=s,s++}this.dirty()}},generateBarycentric:function(){if(this.vertexCount){this.isUniqueVertex()||this.generateUniqueVertex();var r=this.attributes,t=r.barycentric.value,e=this.indices;if(!(t&&t.length===e.length*3)){t=r.barycentric.value=new Float32Array(e.length*3);for(var n=0;n<(e?e.length:this.vertexCount/3);)for(var i=0;i<3;i++){var a=e?e[n++]:n*3+i;t[a*3+i]=1}this.dirty()}}},applyTransform:function(r){var t=this.attributes,e=t.position.value,n=t.normal.value,i=t.tangent.value;r=r.array;var a=R.create();R.invert(a,r),R.transpose(a,a);var s=_.transformMat4,o=_.forEach;o(e,3,0,null,s,r),n&&o(n,3,0,null,s,a),i&&o(i,4,0,null,s,a),this.boundingBox&&this.updateBoundingBox()},dispose:function(r){var t=this._cache;t.use(r.__uid__);var e=t.get("chunks");if(e)for(var n=0;n<e.length;n++){for(var i=e[n],a=0;a<i.attributeBuffers.length;a++){var s=i.attributeBuffers[a];r.gl.deleteBuffer(s.buffer)}i.indicesBuffer&&r.gl.deleteBuffer(i.indicesBuffer.buffer)}if(this.__vaoCache){var o=r.getGLExtension("OES_vertex_array_object");for(var u in this.__vaoCache){var f=this.__vaoCache[u].vao;f&&o.deleteVertexArrayOES(f)}}this.__vaoCache={},t.deleteContext(r.__uid__)}});kr.STATIC_DRAW=yr.STATIC_DRAW;kr.DYNAMIC_DRAW=yr.DYNAMIC_DRAW;kr.STREAM_DRAW=yr.STREAM_DRAW;kr.AttributeBuffer=yr.AttributeBuffer;kr.IndicesBuffer=yr.IndicesBuffer;kr.Attribute=br;const ii=`vec3 calcAmbientSHLight(int idx, vec3 N) {
 int offset = 9 * idx;
 return ambientSHLightCoefficients[0]
 + ambientSHLightCoefficients[1] * N.x
 + ambientSHLightCoefficients[2] * N.y
 + ambientSHLightCoefficients[3] * N.z
 + ambientSHLightCoefficients[4] * N.x * N.z
 + ambientSHLightCoefficients[5] * N.z * N.y
 + ambientSHLightCoefficients[6] * N.y * N.x
 + ambientSHLightCoefficients[7] * (3.0 * N.z * N.z - 1.0)
 + ambientSHLightCoefficients[8] * (N.x * N.x - N.y * N.y);
}`;var Nr="uniform vec3 ",mt="uniform float ",st="@export clay.header.",ot="@end",fr=":unconfigurable;";const ai=[st+"directional_light",Nr+"directionalLightDirection[DIRECTIONAL_LIGHT_COUNT]"+fr,Nr+"directionalLightColor[DIRECTIONAL_LIGHT_COUNT]"+fr,ot,st+"ambient_light",Nr+"ambientLightColor[AMBIENT_LIGHT_COUNT]"+fr,ot,st+"ambient_sh_light",Nr+"ambientSHLightColor[AMBIENT_SH_LIGHT_COUNT]"+fr,Nr+"ambientSHLightCoefficients[AMBIENT_SH_LIGHT_COUNT * 9]"+fr,ii,ot,st+"ambient_cubemap_light",Nr+"ambientCubemapLightColor[AMBIENT_CUBEMAP_LIGHT_COUNT]"+fr,"uniform samplerCube ambientCubemapLightCubemap[AMBIENT_CUBEMAP_LIGHT_COUNT]"+fr,"uniform sampler2D ambientCubemapLightBRDFLookup[AMBIENT_CUBEMAP_LIGHT_COUNT]"+fr,ot,st+"point_light",Nr+"pointLightPosition[POINT_LIGHT_COUNT]"+fr,mt+"pointLightRange[POINT_LIGHT_COUNT]"+fr,Nr+"pointLightColor[POINT_LIGHT_COUNT]"+fr,ot,st+"spot_light",Nr+"spotLightPosition[SPOT_LIGHT_COUNT]"+fr,Nr+"spotLightDirection[SPOT_LIGHT_COUNT]"+fr,mt+"spotLightRange[SPOT_LIGHT_COUNT]"+fr,mt+"spotLightUmbraAngleCosine[SPOT_LIGHT_COUNT]"+fr,mt+"spotLightPenumbraAngleCosine[SPOT_LIGHT_COUNT]"+fr,mt+"spotLightFalloffFactor[SPOT_LIGHT_COUNT]"+fr,Nr+"spotLightColor[SPOT_LIGHT_COUNT]"+fr,ot].join(`
`);V.import(ai);var Dr=Kr.extend(function(){return{color:[1,1,1],intensity:1,castShadow:!0,shadowResolution:512,group:0}},{type:"",clone:function(){var r=Kr.prototype.clone.call(this);return r.color=Array.prototype.slice.call(this.color),r.intensity=this.intensity,r.castShadow=this.castShadow,r.shadowResolution=this.shadowResolution,r}}),Ft=function(r,t){this.normal=r||new E(0,1,0),this.distance=t||0};Ft.prototype={constructor:Ft,distanceToPoint:function(r){return _.dot(r.array,this.normal.array)-this.distance},projectPoint:function(r,t){t||(t=new E);var e=this.distanceToPoint(r);return _.scaleAndAdd(t.array,r.array,this.normal.array,-e),t._dirty=!0,t},normalize:function(){var r=1/_.len(this.normal.array);_.scale(this.normal.array,r),this.distance*=r},intersectFrustum:function(r){for(var t=r.vertices,e=this.normal.array,n=_.dot(t[0].array,e)>this.distance,i=1;i<8;i++)if(_.dot(t[i].array,e)>this.distance!=n)return!0},intersectLine:function(){var r=_.create();return function(t,e,n){var i=this.distanceToPoint(t),a=this.distanceToPoint(e);if(i>0&&a>0||i<0&&a<0)return null;var s=this.normal.array,o=this.distance,u=t.array;_.sub(r,e.array,t.array),_.normalize(r,r);var f=_.dot(s,r);if(f===0)return null;n||(n=new E);var h=(_.dot(s,u)-o)/f;return _.scaleAndAdd(n.array,u,r,-h),n._dirty=!0,n}}(),applyTransform:function(){var r=R.create(),t=w.create(),e=w.create();return e[3]=1,function(n){n=n.array,_.scale(e,this.normal.array,this.distance),w.transformMat4(e,e,n),this.distance=_.dot(e,this.normal.array),R.invert(r,n),R.transpose(r,r),t[3]=0,_.copy(t,this.normal.array),w.transformMat4(t,t,r),_.copy(this.normal.array,t)}}(),copy:function(r){_.copy(this.normal.array,r.normal.array),this.normal._dirty=!0,this.distance=r.distance},clone:function(){var r=new Ft;return r.copy(this),r}};const si=Ft;var ir=_.set,qe=_.copy,Ye=_.transformMat4,ee=Math.min,ne=Math.max,vn=function(){this.planes=[];for(var r=0;r<6;r++)this.planes.push(new si);this.boundingBox=new mr,this.vertices=[];for(var r=0;r<8;r++)this.vertices[r]=_.fromValues(0,0,0)};vn.prototype={setFromProjection:function(r){var t=this.planes,e=r.array,n=e[0],i=e[1],a=e[2],s=e[3],o=e[4],u=e[5],f=e[6],h=e[7],c=e[8],d=e[9],l=e[10],v=e[11],p=e[12],y=e[13],m=e[14],A=e[15];ir(t[0].normal.array,s-n,h-o,v-c),t[0].distance=-(A-p),t[0].normalize(),ir(t[1].normal.array,s+n,h+o,v+c),t[1].distance=-(A+p),t[1].normalize(),ir(t[2].normal.array,s+i,h+u,v+d),t[2].distance=-(A+y),t[2].normalize(),ir(t[3].normal.array,s-i,h-u,v-d),t[3].distance=-(A-y),t[3].normalize(),ir(t[4].normal.array,s-a,h-f,v-l),t[4].distance=-(A-m),t[4].normalize(),ir(t[5].normal.array,s+a,h+f,v+l),t[5].distance=-(A+m),t[5].normalize();var x=this.boundingBox,g=this.vertices;if(A===0){var S=u/n,M=-m/(l-1),O=-m/(l+1),D=-O/u,L=-M/u;x.min.set(-D*S,-D,O),x.max.set(D*S,D,M),ir(g[0],-D*S,-D,O),ir(g[1],-D*S,D,O),ir(g[2],D*S,-D,O),ir(g[3],D*S,D,O),ir(g[4],-L*S,-L,M),ir(g[5],-L*S,L,M),ir(g[6],L*S,-L,M),ir(g[7],L*S,L,M)}else{var W=(-1-p)/n,I=(1-p)/n,z=(1-y)/u,H=(-1-y)/u,B=(-1-m)/l,Z=(1-m)/l;x.min.set(Math.min(W,I),Math.min(H,z),Math.min(Z,B)),x.max.set(Math.max(I,W),Math.max(z,H),Math.max(B,Z));var q=x.min.array,$=x.max.array;ir(g[0],q[0],q[1],q[2]),ir(g[1],q[0],$[1],q[2]),ir(g[2],$[0],q[1],q[2]),ir(g[3],$[0],$[1],q[2]),ir(g[4],q[0],q[1],$[2]),ir(g[5],q[0],$[1],$[2]),ir(g[6],$[0],q[1],$[2]),ir(g[7],$[0],$[1],$[2])}},getTransformedBoundingBox:function(){var r=_.create();return function(t,e){var n=this.vertices,i=e.array,a=t.min,s=t.max,o=a.array,u=s.array,f=n[0];Ye(r,f,i),qe(o,r),qe(u,r);for(var h=1;h<8;h++)f=n[h],Ye(r,f,i),o[0]=ee(r[0],o[0]),o[1]=ee(r[1],o[1]),o[2]=ee(r[2],o[2]),u[0]=ne(r[0],u[0]),u[1]=ne(r[1],u[1]),u[2]=ne(r[2],u[2]);return a._dirty=!0,s._dirty=!0,t}}()};const _n=vn;var vt=Kr.extend(function(){return{projectionMatrix:new C,invProjectionMatrix:new C,viewMatrix:new C,frustum:new _n}},function(){this.update(!0)},{update:function(r){Kr.prototype.update.call(this,r),C.invert(this.viewMatrix,this.worldTransform),this.updateProjectionMatrix(),C.invert(this.invProjectionMatrix,this.projectionMatrix),this.frustum.setFromProjection(this.projectionMatrix)},setViewMatrix:function(r){C.copy(this.viewMatrix,r),C.invert(this.worldTransform,r),this.decomposeWorldTransform()},decomposeProjectionMatrix:function(){},setProjectionMatrix:function(r){C.copy(this.projectionMatrix,r),C.invert(this.invProjectionMatrix,r),this.decomposeProjectionMatrix()},updateProjectionMatrix:function(){},castRay:function(){var r=w.create();return function(t,e){var n=e!==void 0?e:new de,i=t.array[0],a=t.array[1];return w.set(r,i,a,-1,1),w.transformMat4(r,r,this.invProjectionMatrix.array),w.transformMat4(r,r,this.worldTransform.array),_.scale(n.origin.array,r,1/r[3]),w.set(r,i,a,1,1),w.transformMat4(r,r,this.invProjectionMatrix.array),w.transformMat4(r,r,this.worldTransform.array),_.scale(r,r,1/r[3]),_.sub(n.direction.array,r,n.origin.array),_.normalize(n.direction.array,n.direction.array),n.direction._dirty=!0,n.origin._dirty=!0,n}}()}),oi=R.create(),Ke=R.create(),ie={};function ui(r){var t=[],e=Object.keys(r);e.sort();for(var n=0;n<e.length;n++){var i=e[n];t.push(i+" "+r[i])}var a=t.join(`
`);if(ie[a])return ie[a];var s=ar.genGUID();return ie[a]=s,s}function Wt(){this.opaque=[],this.transparent=[],this._opaqueCount=0,this._transparentCount=0}Wt.prototype.startCount=function(){this._opaqueCount=0,this._transparentCount=0};Wt.prototype.add=function(r,t){t?this.transparent[this._transparentCount++]=r:this.opaque[this._opaqueCount++]=r};Wt.prototype.endCount=function(){this.transparent.length=this._transparentCount,this.opaque.length=this._opaqueCount};var ye=Kr.extend(function(){return{material:null,lights:[],viewBoundingBoxLastFrame:new mr,shadowUniforms:{},_cameraList:[],_lightUniforms:{},_previousLightNumber:{},_lightNumber:{},_lightProgramKeys:{},_nodeRepository:{},_renderLists:new en(20)}},function(){this._scene=this},{addToScene:function(r){r instanceof vt?(this._cameraList.length>0&&console.warn("Found multiple camera in one scene. Use the fist one."),this._cameraList.push(r)):r instanceof Dr&&this.lights.push(r),r.name&&(this._nodeRepository[r.name]=r)},removeFromScene:function(r){var t;r instanceof vt?(t=this._cameraList.indexOf(r),t>=0&&this._cameraList.splice(t,1)):r instanceof Dr&&(t=this.lights.indexOf(r),t>=0&&this.lights.splice(t,1)),r.name&&delete this._nodeRepository[r.name]},getNode:function(r){return this._nodeRepository[r]},setMainCamera:function(r){var t=this._cameraList.indexOf(r);t>=0&&this._cameraList.splice(t,1),this._cameraList.unshift(r)},getMainCamera:function(){return this._cameraList[0]},getLights:function(){return this.lights},updateLights:function(){var r=this.lights;this._previousLightNumber=this._lightNumber;for(var t={},e=0;e<r.length;e++){var n=r[e];if(!n.invisible){var i=n.group;t[i]||(t[i]={}),t[i][n.type]=t[i][n.type]||0,t[i][n.type]++}}this._lightNumber=t;for(var a in t)this._lightProgramKeys[a]=ui(t[a]);this._updateLightUniforms()},cloneNode:function(r){var t=r.clone(),e={};function n(i,a){e[i.__uid__]=a;for(var s=0;s<i._children.length;s++){var o=i._children[s],u=a._children[s];n(o,u)}}return n(r,t),t.traverse(function(i){i.skeleton&&(i.skeleton=i.skeleton.clone(e)),i.material&&(i.material=i.material.clone())}),t},updateRenderList:function(r,t){var e=r.__uid__,n=this._renderLists.get(e);n||(n=new Wt,this._renderLists.put(e,n)),n.startCount(),t&&(this.viewBoundingBoxLastFrame.min.set(1/0,1/0,1/0),this.viewBoundingBoxLastFrame.max.set(-1/0,-1/0,-1/0));var i=this.material&&this.material.transparent||!1;return this._doUpdateRenderList(this,r,i,n,t),n.endCount(),n},getRenderList:function(r){return this._renderLists.get(r.__uid__)},_doUpdateRenderList:function(r,t,e,n,i){if(!r.invisible)for(var a=0;a<r._children.length;a++){var s=r._children[a];if(s.isRenderable()){var o=s.isSkinnedMesh()?oi:s.worldTransform.array,u=s.geometry;R.multiplyAffine(Ke,t.viewMatrix.array,o),(i&&!u.boundingBox||!this.isFrustumCulled(s,t,Ke))&&n.add(s,s.material.transparent||e)}s._children.length>0&&this._doUpdateRenderList(s,t,e,n,i)}},isFrustumCulled:function(){var r=new mr,t=new C;return function(e,n,i){var a=e.boundingBox;if(a||(e.skeleton&&e.skeleton.boundingBox?a=e.skeleton.boundingBox:a=e.geometry.boundingBox),!a)return!1;if(t.array=i,r.transformFrom(a,t),e.castShadow&&this.viewBoundingBoxLastFrame.union(r),e.frustumCulling){if(!r.intersectBoundingBox(n.frustum.boundingBox))return!0;t.array=n.projectionMatrix.array,r.max.array[2]>0&&r.min.array[2]<0&&(r.max.array[2]=-1e-20),r.applyProjection(t);var s=r.min.array,o=r.max.array;if(o[0]<-1||s[0]>1||o[1]<-1||s[1]>1||o[2]<-1||s[2]>1)return!0}return!1}}(),_updateLightUniforms:function(){var r=this.lights;r.sort(fi);var t=this._lightUniforms;for(var e in t)for(var n in t[e])t[e][n].value.length=0;for(var i=0;i<r.length;i++){var a=r[i];if(!a.invisible){var e=a.group;for(var n in a.uniformTemplates){var s=a.uniformTemplates[n],o=s.value(a);if(o!=null){t[e]||(t[e]={}),t[e][n]||(t[e][n]={type:"",value:[]});var u=t[e][n];switch(u.type=s.type+"v",s.type){case"1i":case"1f":case"t":u.value.push(o);break;case"2f":case"3f":case"4f":for(var f=0;f<o.length;f++)u.value.push(o[f]);break;default:console.error("Unkown light uniform type "+s.type)}}}}}},getLightGroups:function(){var r=[];for(var t in this._lightNumber)r.push(t);return r},getNumberChangedLightGroups:function(){var r=[];for(var t in this._lightNumber)this.isLightNumberChanged(t)&&r.push(t);return r},isLightNumberChanged:function(r){var t=this._previousLightNumber,e=this._lightNumber;for(var n in e[r])if(!t[r]||e[r][n]!==t[r][n])return!0;for(var n in t[r])if(!e[r]||e[r][n]!==t[r][n])return!0;return!1},getLightsNumbers:function(r){return this._lightNumber[r]},getProgramKey:function(r){return this._lightProgramKeys[r]},setLightUniforms:function(){function r(t,e,n){for(var i in t){var a=t[i];if(a.type==="tv"){if(!e.hasUniform(i))continue;for(var s=[],o=0;o<a.value.length;o++){var u=a.value[o],f=e.takeCurrentTextureSlot(n,u);s.push(f)}e.setUniform(n.gl,"1iv",i,s)}else e.setUniform(n.gl,a.type,i,a.value)}}return function(t,e,n){r(this._lightUniforms[e],t,n),r(this.shadowUniforms,t,n)}}(),dispose:function(){this.material=null,this._opaqueList=[],this._transparentList=[],this.lights=[],this._lightUniforms={},this._lightNumber={},this._nodeRepository={}}});function fi(r,t){if(t.castShadow&&!r.castShadow)return!0}var Dt=Mt.isPowerOfTwo,hi=["px","nx","py","ny","pz","nz"],rt=N.extend(function(){return{image:{px:null,nx:null,py:null,ny:null,pz:null,nz:null},pixels:{px:null,nx:null,py:null,ny:null,pz:null,nz:null},mipmaps:[]}},{textureType:"textureCube",update:function(r){var t=r.gl;t.bindTexture(t.TEXTURE_CUBE_MAP,this._cache.get("webgl_texture")),this.updateCommon(r);var e=this.format,n=this.type;t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_S,this.getAvailableWrapS()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_T,this.getAvailableWrapT()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAG_FILTER,this.getAvailableMagFilter()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MIN_FILTER,this.getAvailableMinFilter());var i=r.getGLExtension("EXT_texture_filter_anisotropic");if(i&&this.anisotropic>1&&t.texParameterf(t.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropic),n===36193){var a=r.getGLExtension("OES_texture_half_float");a||(n=T.FLOAT)}if(this.mipmaps.length)for(var s=this.width,o=this.height,u=0;u<this.mipmaps.length;u++){var f=this.mipmaps[u];this._updateTextureData(t,f,u,s,o,e,n),s/=2,o/=2}else this._updateTextureData(t,this,0,this.width,this.height,e,n),!this.NPOT&&this.useMipmap&&t.generateMipmap(t.TEXTURE_CUBE_MAP);t.bindTexture(t.TEXTURE_CUBE_MAP,null)},_updateTextureData:function(r,t,e,n,i,a,s){for(var o=0;o<6;o++){var u=hi[o],f=t.image&&t.image[u];f?r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+o,e,a,a,s,f):r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+o,e,a,n,i,0,a,s,t.pixels&&t.pixels[u])}},generateMipmap:function(r){var t=r.gl;this.useMipmap&&!this.NPOT&&(t.bindTexture(t.TEXTURE_CUBE_MAP,this._cache.get("webgl_texture")),t.generateMipmap(t.TEXTURE_CUBE_MAP))},bind:function(r){r.gl.bindTexture(r.gl.TEXTURE_CUBE_MAP,this.getWebGLTexture(r))},unbind:function(r){r.gl.bindTexture(r.gl.TEXTURE_CUBE_MAP,null)},isPowerOfTwo:function(){return this.image.px?Dt(this.image.px.width)&&Dt(this.image.px.height):Dt(this.width)&&Dt(this.height)},isRenderable:function(){return this.image.px?ut(this.image.px)&&ut(this.image.nx)&&ut(this.image.py)&&ut(this.image.ny)&&ut(this.image.pz)&&ut(this.image.nz):!!(this.width&&this.height)},load:function(r,t){var e=0,n=this;return ar.each(r,function(i,a){var s=K.createImage();t&&(s.crossOrigin=t),s.onload=function(){e--,e===0&&(n.dirty(),n.trigger("success",n))},s.onerror=function(){e--},e++,s.src=i,n.image[a]=s}),this}});Object.defineProperty(rt.prototype,"width",{get:function(){return this.image&&this.image.px?this.image.px.width:this._width},set:function(r){this.image&&this.image.px?console.warn("Texture from image can't set width"):(this._width!==r&&this.dirty(),this._width=r)}});Object.defineProperty(rt.prototype,"height",{get:function(){return this.image&&this.image.px?this.image.px.height:this._height},set:function(r){this.image&&this.image.px?console.warn("Texture from image can't set height"):(this._height!==r&&this.dirty(),this._height=r)}});function ut(r){return r.width>0&&r.height>0}var ci=vt.extend({fov:50,aspect:1,near:.1,far:2e3},{updateProjectionMatrix:function(){var r=this.fov/180*Math.PI;this.projectionMatrix.perspective(r,this.aspect,this.near,this.far)},decomposeProjectionMatrix:function(){var r=this.projectionMatrix.array,t=Math.atan(1/r[5])*2;this.fov=t/Math.PI*180,this.aspect=r[5]/r[0],this.near=r[14]/(r[10]-1),this.far=r[14]/(r[10]+1)},clone:function(){var r=vt.prototype.clone.call(this);return r.fov=this.fov,r.aspect=this.aspect,r.near=this.near,r.far=this.far,r}});const vr=ci;var Pt="framebuffer",Wr="renderbuffer",Ze=Wr+"_width",je=Wr+"_height",ae=Wr+"_attached",se="depthtexture_attached",Jr=T.FRAMEBUFFER,gt=T.RENDERBUFFER,Et=T.DEPTH_ATTACHMENT,pn=T.COLOR_ATTACHMENT0,Pr=lr.extend({depthBuffer:!0,viewport:null,_width:0,_height:0,_textures:null,_boundRenderer:null},function(){this._cache=new lt,this._textures={}},{getTextureWidth:function(){return this._width},getTextureHeight:function(){return this._height},bind:function(r){if(r.__currentFrameBuffer){if(r.__currentFrameBuffer===this)return;console.warn("Renderer already bound with another framebuffer. Unbind it first")}r.__currentFrameBuffer=this;var t=r.gl;t.bindFramebuffer(Jr,this._getFrameBufferGL(r)),this._boundRenderer=r;var e=this._cache;e.put("viewport",r.viewport);var n=!1,i,a;for(var s in this._textures){n=!0;var o=this._textures[s];o&&(i=o.texture.width,a=o.texture.height,this._doAttach(r,o.texture,s,o.target))}this._width=i,this._height=a,!n&&this.depthBuffer&&console.error("Must attach texture before bind, or renderbuffer may have incorrect width and height."),this.viewport?r.setViewport(this.viewport):r.setViewport(0,0,i,a,1);var u=e.get("attached_textures");if(u){for(var s in u)if(!this._textures[s]){var f=u[s];this._doDetach(t,s,f)}}if(!e.get(se)&&this.depthBuffer){e.miss(Wr)&&e.put(Wr,t.createRenderbuffer());var h=e.get(Wr);(i!==e.get(Ze)||a!==e.get(je))&&(t.bindRenderbuffer(gt,h),t.renderbufferStorage(gt,t.DEPTH_COMPONENT16,i,a),e.put(Ze,i),e.put(je,a),t.bindRenderbuffer(gt,null)),e.get(ae)||(t.framebufferRenderbuffer(Jr,Et,gt,h),e.put(ae,!0))}},unbind:function(r){r.__currentFrameBuffer=null;var t=r.gl;t.bindFramebuffer(Jr,null),this._boundRenderer=null,this._cache.use(r.__uid__);var e=this._cache.get("viewport");e&&r.setViewport(e),this.updateMipmap(r)},updateMipmap:function(r){var t=r.gl;for(var e in this._textures){var n=this._textures[e];if(n){var i=n.texture;if(!i.NPOT&&i.useMipmap&&i.minFilter===N.LINEAR_MIPMAP_LINEAR){var a=i.textureType==="textureCube"?T.TEXTURE_CUBE_MAP:T.TEXTURE_2D;t.bindTexture(a,i.getWebGLTexture(r)),t.generateMipmap(a),t.bindTexture(a,null)}}}},checkStatus:function(r){return r.checkFramebufferStatus(Jr)},_getFrameBufferGL:function(r){var t=this._cache;return t.use(r.__uid__),t.miss(Pt)&&t.put(Pt,r.gl.createFramebuffer()),t.get(Pt)},attach:function(r,t,e){if(!r.width)throw new Error("The texture attached to color buffer is not a valid.");t=t||pn,e=e||T.TEXTURE_2D;var n=this._boundRenderer,i=n&&n.gl,a;if(i){var s=this._cache;s.use(n.__uid__),a=s.get("attached_textures")}var o=this._textures[t];if(!(o&&o.target===e&&o.texture===r&&a&&a[t]!=null)){var u=!0;n&&(u=this._doAttach(n,r,t,e),this.viewport||n.setViewport(0,0,r.width,r.height,1)),u&&(this._textures[t]=this._textures[t]||{},this._textures[t].texture=r,this._textures[t].target=e)}},_doAttach:function(r,t,e,n){var i=r.gl,a=t.getWebGLTexture(r),s=this._cache.get("attached_textures");if(s&&s[e]){var o=s[e];if(o.texture===t&&o.target===n)return}e=+e;var u=!0;if(e===Et||e===T.DEPTH_STENCIL_ATTACHMENT){var f=r.getGLExtension("WEBGL_depth_texture");if(f||(console.error("Depth texture is not supported by the browser"),u=!1),t.format!==T.DEPTH_COMPONENT&&t.format!==T.DEPTH_STENCIL&&(console.error("The texture attached to depth buffer is not a valid."),u=!1),u){var h=this._cache.get(Wr);h&&(i.framebufferRenderbuffer(Jr,Et,gt,null),i.deleteRenderbuffer(h),this._cache.put(Wr,!1)),this._cache.put(ae,!1),this._cache.put(se,!0)}}return i.framebufferTexture2D(Jr,e,n,a,0),s||(s={},this._cache.put("attached_textures",s)),s[e]=s[e]||{},s[e].texture=t,s[e].target=n,u},_doDetach:function(r,t,e){r.framebufferTexture2D(Jr,t,e,null,0);var n=this._cache.get("attached_textures");n&&n[t]&&(n[t]=null),(t===Et||t===T.DEPTH_STENCIL_ATTACHMENT)&&this._cache.put(se,!1)},detach:function(r,t){if(this._textures[r]=null,this._boundRenderer){var e=this._cache;e.use(this._boundRenderer.__uid__),this._doDetach(this._boundRenderer.gl,r,t)}},dispose:function(r){var t=r.gl,e=this._cache;e.use(r.__uid__);var n=e.get(Wr);n&&t.deleteRenderbuffer(n);var i=e.get(Pt);i&&t.deleteFramebuffer(i),e.deleteContext(r.__uid__),this._textures={}}});Pr.DEPTH_ATTACHMENT=Et;Pr.COLOR_ATTACHMENT0=pn;Pr.STENCIL_ATTACHMENT=T.STENCIL_ATTACHMENT;Pr.DEPTH_STENCIL_ATTACHMENT=T.DEPTH_STENCIL_ATTACHMENT;var li=["px","nx","py","ny","pz","nz"],me=lr.extend(function(){var r={position:new E,far:1e3,near:.1,texture:null,shadowMapPass:null},t=r._cameras={px:new vr({fov:90}),nx:new vr({fov:90}),py:new vr({fov:90}),ny:new vr({fov:90}),pz:new vr({fov:90}),nz:new vr({fov:90})};return t.px.lookAt(E.POSITIVE_X,E.NEGATIVE_Y),t.nx.lookAt(E.NEGATIVE_X,E.NEGATIVE_Y),t.py.lookAt(E.POSITIVE_Y,E.POSITIVE_Z),t.ny.lookAt(E.NEGATIVE_Y,E.NEGATIVE_Z),t.pz.lookAt(E.POSITIVE_Z,E.NEGATIVE_Y),t.nz.lookAt(E.NEGATIVE_Z,E.NEGATIVE_Y),r._frameBuffer=new Pr,r},{getCamera:function(r){return this._cameras[r]},render:function(r,t,e){var n=r.gl;e||t.update();for(var i=this.texture.width,a=2*Math.atan(i/(i-.5))/Math.PI*180,s=0;s<6;s++){var o=li[s],u=this._cameras[o];if(E.copy(u.position,this.position),u.far=this.far,u.near=this.near,u.fov=a,this.shadowMapPass){u.update();var f=t.getBoundingBox();f.applyTransform(u.viewMatrix),t.viewBoundingBoxLastFrame.copy(f),this.shadowMapPass.render(r,t,u,!0)}this._frameBuffer.attach(this.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+s),this._frameBuffer.bind(r),r.render(t,u,!0),this._frameBuffer.unbind(r)}},dispose:function(r){this._frameBuffer.dispose(r)}}),di=kr.extend({dynamic:!1,widthSegments:1,heightSegments:1},function(){this.build()},{build:function(){for(var r=this.heightSegments,t=this.widthSegments,e=this.attributes,n=[],i=[],a=[],s=[],o=0;o<=r;o++)for(var u=o/r,f=0;f<=t;f++){var h=f/t;if(n.push([2*h-1,2*u-1,0]),i&&i.push([h,u]),a&&a.push([0,0,1]),f<t&&o<r){var c=f+o*(t+1);s.push([c,c+1,c+t+1]),s.push([c+t+1,c+1,c+t+2])}}e.position.fromArray(n),e.texcoord0.fromArray(i),e.normal.fromArray(a),this.initIndicesFromArray(s),this.boundingBox=new mr,this.boundingBox.min.set(-1,-1,0),this.boundingBox.max.set(1,1,0)}});const yn=di;var er=new C,vi=kr.extend({dynamic:!1,widthSegments:1,heightSegments:1,depthSegments:1,inside:!1},function(){this.build()},{build:function(){var r={px:ft("px",this.depthSegments,this.heightSegments),nx:ft("nx",this.depthSegments,this.heightSegments),py:ft("py",this.widthSegments,this.depthSegments),ny:ft("ny",this.widthSegments,this.depthSegments),pz:ft("pz",this.widthSegments,this.heightSegments),nz:ft("nz",this.widthSegments,this.heightSegments)},t=["position","texcoord0","normal"],e=0,n=0;for(var i in r)e+=r[i].vertexCount,n+=r[i].indices.length;for(var a=0;a<t.length;a++)this.attributes[t[a]].init(e);this.indices=new K.Uint16Array(n);var s=0,o=0;for(var i in r){for(var u=r[i],a=0;a<t.length;a++)for(var f=t[a],h=u.attributes[f].value,c=u.attributes[f].size,d=f==="normal",l=0;l<h.length;l++){var v=h[l];this.inside&&d&&(v=-v),this.attributes[f].value[l+c*o]=v}for(var p=u.indices.length,l=0;l<u.indices.length;l++)this.indices[l+s]=o+u.indices[this.inside?p-l-1:l];s+=u.indices.length,o+=u.vertexCount}this.boundingBox=new mr,this.boundingBox.max.set(1,1,1),this.boundingBox.min.set(-1,-1,-1)}});function ft(r,t,e){er.identity();var n=new yn({widthSegments:t,heightSegments:e});switch(r){case"px":C.translate(er,er,E.POSITIVE_X),C.rotateY(er,er,Math.PI/2);break;case"nx":C.translate(er,er,E.NEGATIVE_X),C.rotateY(er,er,-Math.PI/2);break;case"py":C.translate(er,er,E.POSITIVE_Y),C.rotateX(er,er,-Math.PI/2);break;case"ny":C.translate(er,er,E.NEGATIVE_Y),C.rotateX(er,er,Math.PI/2);break;case"pz":C.translate(er,er,E.POSITIVE_Z);break;case"nz":C.translate(er,er,E.NEGATIVE_Z),C.rotateY(er,er,Math.PI);break}return n.applyTransform(er),n}const _i=vi,pi=`@export clay.skybox.vertex
#define SHADER_NAME skybox
uniform mat4 world : WORLD;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
varying vec3 v_WorldPosition;
void main()
{
 v_WorldPosition = (world * vec4(position, 1.0)).xyz;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end
@export clay.skybox.fragment
#define PI 3.1415926
uniform mat4 viewInverse : VIEWINVERSE;
#ifdef EQUIRECTANGULAR
uniform sampler2D environmentMap;
#else
uniform samplerCube environmentMap;
#endif
uniform float lod: 0.0;
varying vec3 v_WorldPosition;
@import clay.util.rgbm
@import clay.util.srgb
@import clay.util.ACES
void main()
{
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(v_WorldPosition - eyePos);
#ifdef EQUIRECTANGULAR
 float phi = acos(V.y);
 float theta = atan(-V.x, V.z) + PI * 0.5;
 vec2 uv = vec2(theta / 2.0 / PI, phi / PI);
 vec4 texel = decodeHDR(texture2D(environmentMap, fract(uv)));
#else
 #if defined(LOD) || defined(SUPPORT_TEXTURE_LOD)
 vec4 texel = decodeHDR(textureCubeLodEXT(environmentMap, V, lod));
 #else
 vec4 texel = decodeHDR(textureCube(environmentMap, V));
 #endif
#endif
#ifdef SRGB_DECODE
 texel = sRGBToLinear(texel);
#endif
#ifdef TONEMAPPING
 texel.rgb = ACESToneMapping(texel.rgb);
#endif
#ifdef SRGB_ENCODE
 texel = linearTosRGB(texel);
#endif
 gl_FragColor = encodeHDR(vec4(texel.rgb, 1.0));
}
@end`;V.import(pi);var yi=hn.extend(function(){var r=new V({vertex:V.source("clay.skybox.vertex"),fragment:V.source("clay.skybox.fragment")}),t=new St({shader:r,depthMask:!1});return{scene:null,geometry:new _i,material:t,environmentMap:null,culling:!1,_dummyCamera:new vr}},function(){var r=this.scene;r&&this.attachScene(r),this.environmentMap&&this.setEnvironmentMap(this.environmentMap)},{attachScene:function(r){this.scene&&this.detachScene(),r.skybox=this,this.scene=r,r.on("beforerender",this._beforeRenderScene,this)},detachScene:function(){this.scene&&(this.scene.off("beforerender",this._beforeRenderScene),this.scene.skybox=null),this.scene=null},dispose:function(r){this.detachScene(),this.geometry.dispose(r)},setEnvironmentMap:function(r){r.textureType==="texture2D"?(this.material.define("EQUIRECTANGULAR"),r.minFilter=N.LINEAR):this.material.undefine("EQUIRECTANGULAR"),this.material.set("environmentMap",r)},getEnvironmentMap:function(){return this.material.get("environmentMap")},_beforeRenderScene:function(r,t,e){this.renderSkybox(r,e)},renderSkybox:function(r,t){var e=this._dummyCamera;e.aspect=r.getViewportAspect(),e.fov=t.fov||50,e.updateProjectionMatrix(),C.invert(e.invProjectionMatrix,e.projectionMatrix),e.worldTransform.copy(t.worldTransform),e.viewMatrix.copy(t.viewMatrix),this.position.copy(t.getWorldPosition()),this.update(),r.gl.disable(r.gl.BLEND),this.material.get("lod")>0?this.material.define("fragment","LOD"):this.material.undefine("fragment","LOD"),r.renderPass([this],e)}});const Vt=yi;var mi=542327876,gi=131072,xi=512,Ei=4;function ge(r){return r.charCodeAt(0)+(r.charCodeAt(1)<<8)+(r.charCodeAt(2)<<16)+(r.charCodeAt(3)<<24)}var Ti=31,Ai=ge("DXT1"),Ri=ge("DXT3"),Si=ge("DXT5"),Mi=0,wi=1,Ci=2,Ni=3,Li=4,Ii=7,Di=20,Pi=21,Oi=28,bi={parse:function(r,t){var e=new Int32Array(r,0,Ti);if(e[Mi]!==mi||!e(Di)&Ei)return null;var n=e(Pi),i=e[Li],a=e[Ni],s=e[Oi]&xi,o=e[Ci]&gi,u,f;switch(n){case Ai:u=8,f=N.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Ri:u=16,f=N.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Si:u=16,f=N.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return null}var h=e[wi]+4,c=s?6:1,d=1;o&&(d=Math.max(1,e[Ii]));for(var l=[],v=0;v<c;v++){var p=i,y=a;l[v]=new gr({width:p,height:y,format:f});for(var m=[],A=0;A<d;A++){var x=Math.max(4,p)/4*Math.max(4,y)/4*u,g=new Uint8Array(r,h,x);h+=x,p*=.5,y*=.5,m[A]=g}l[v].pixels=m[0],o&&(l[v].mipmaps=m)}if(t)t.width=l[0].width,t.height=l[0].height,t.format=l[0].format,t.pixels=l[0].pixels,t.mipmaps=l[0].mipmaps;else return l[0]}},Ht=String.fromCharCode,Bi=8,Ui=32767;function Fi(r,t,e,n){if(r[3]>0){var i=Math.pow(2,r[3]-128-8+n);t[e+0]=r[0]*i,t[e+1]=r[1]*i,t[e+2]=r[2]*i}else t[e+0]=0,t[e+1]=0,t[e+2]=0;return t[e+3]=1,t}function Hi(r,t,e){for(var n="",i=t;i<e;i++)n+=Ht(r[i]);return n}function Gi(r,t){t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3]}function Je(r,t,e,n){for(var i=0,a=0,s=n;s>0;)if(r[a][0]=t[e++],r[a][1]=t[e++],r[a][2]=t[e++],r[a][3]=t[e++],r[a][0]===1&&r[a][1]===1&&r[a][2]===1){for(var o=r[a][3]<<i>>>0;o>0;o--)Gi(r[a-1],r[a]),a++,s--;i+=8}else a++,s--,i=0;return e}function Vi(r,t,e,n){if(n<Bi|n>Ui)return Je(r,t,e,n);var i=t[e++];if(i!=2)return Je(r,t,e-1,n);if(r[0][1]=t[e++],r[0][2]=t[e++],i=t[e++],(r[0][2]<<8>>>0|i)>>>0!==n)return null;for(var i=0;i<4;i++)for(var a=0;a<n;){var s=t[e++];if(s>128){s=(s&127)>>>0;for(var o=t[e++];s--;)r[a++][i]=o}else for(;s--;)r[a++][i]=t[e++]}return e}var Wi={parseRGBE:function(r,t,e){e==null&&(e=0);var n=new Uint8Array(r),i=n.length;if(Hi(n,0,2)==="#?"){for(var a=2;a<i&&!(Ht(n[a])===`
`&&Ht(n[a+1])===`
`);a++);if(!(a>=i)){a+=2;for(var s="";a<i;a++){var o=Ht(n[a]);if(o===`
`)break;s+=o}var u=s.split(" "),f=parseInt(u[1]),h=parseInt(u[3]);if(!(!h||!f)){for(var c=a+1,d=[],l=0;l<h;l++){d[l]=[];for(var v=0;v<4;v++)d[l][v]=0}for(var p=new Float32Array(h*f*4),y=0,m=0;m<f;m++){var c=Vi(d,n,c,h);if(!c)return null;for(var l=0;l<h;l++)Fi(d[l],p,y,e),y+=4}return t||(t=new gr),t.width=h,t.height=f,t.pixels=p,t.type=N.FLOAT,t}}}},parseRGBEFromPNG:function(r){}};const zi=Wi;var Gt={loadTexture:function(r,t,e,n){var i;if(typeof t=="function"?(e=t,n=e,t={}):t=t||{},typeof r=="string"){if(r.match(/.hdr$/)||t.fileType==="hdr")return i=new gr({width:0,height:0,sRGB:!1}),Gt._fetchTexture(r,function(a){zi.parseRGBE(a,i,t.exposure),i.dirty(),e&&e(i)},n),i;r.match(/.dds$/)||t.fileType==="dds"?(i=new gr({width:0,height:0}),Gt._fetchTexture(r,function(a){bi.parse(a,i),i.dirty(),e&&e(i)},n)):(i=new gr,i.load(r),i.success(e),i.error(n))}else typeof r=="object"&&typeof r.px<"u"&&(i=new rt,i.load(r),i.success(e),i.error(n));return i},loadPanorama:function(r,t,e,n,i,a){var s=this;typeof n=="function"?(i=n,a=i,n={}):n=n||{},Gt.loadTexture(t,n,function(o){o.flipY=n.flipY||!1,s.panoramaToCubeMap(r,o,e,n),o.dispose(r),i&&i(e)},a)},panoramaToCubeMap:function(r,t,e,n){var i=new me,a=new Vt({scene:new ye});return a.setEnvironmentMap(t),n=n||{},n.encodeRGBM&&a.material.define("fragment","RGBM_ENCODE"),e.sRGB=t.sRGB,i.texture=e,i.render(r,a.scene),i.texture=null,i.dispose(r),e},heightToNormal:function(r,t){var e=document.createElement("canvas"),n=e.width=r.width,i=e.height=r.height,a=e.getContext("2d");a.drawImage(r,0,0,n,i),t=t||!1;for(var s=a.getImageData(0,0,n,i),o=a.createImageData(n,i),u=0;u<s.data.length;u+=4){if(t){var f=s.data[u],h=s.data[u+1],c=s.data[u+2],d=Math.abs(f-h)+Math.abs(h-c);if(d>20)return console.warn("Given image is not a height map"),r}var l,v,p,y;u%(n*4)===0?(l=s.data[u],p=s.data[u+4]):u%(n*4)===(n-1)*4?(l=s.data[u-4],p=s.data[u]):(l=s.data[u-4],p=s.data[u+4]),u<n*4?(v=s.data[u],y=s.data[u+n*4]):u>n*(i-1)*4?(v=s.data[u-n*4],y=s.data[u]):(v=s.data[u-n*4],y=s.data[u+n*4]),o.data[u]=l-p+127,o.data[u+1]=v-y+127,o.data[u+2]=255,o.data[u+3]=255}return a.putImageData(o,0,0),e},isHeightImage:function(r,t,e){if(!r||!r.width||!r.height)return!1;var n=document.createElement("canvas"),i=n.getContext("2d"),a=t||32;e=e||20,n.width=n.height=a,i.drawImage(r,0,0,a,a);for(var s=i.getImageData(0,0,a,a),o=0;o<s.data.length;o+=4){var u=s.data[o],f=s.data[o+1],h=s.data[o+2],c=Math.abs(u-f)+Math.abs(f-h);if(c>e)return!1}return!0},_fetchTexture:function(r,t,e){K.request.get({url:r,responseType:"arraybuffer",onload:t,onerror:e})},createChessboard:function(r,t,e,n){r=r||512,t=t||64,e=e||"black",n=n||"white";var i=Math.ceil(r/t),a=document.createElement("canvas");a.width=r,a.height=r;var s=a.getContext("2d");s.fillStyle=n,s.fillRect(0,0,r,r),s.fillStyle=e;for(var o=0;o<i;o++)for(var u=0;u<i;u++){var f=u%2?o%2:o%2-1;f&&s.fillRect(o*t,u*t,t,t)}var h=new gr({image:a,anisotropic:8});return h},createBlank:function(r){var t=document.createElement("canvas");t.width=1,t.height=1;var e=t.getContext("2d");e.fillStyle=r,e.fillRect(0,0,1,1);var n=new gr({image:t});return n}};const ki=Gt;var Xi=vt.extend({left:-1,right:1,near:-1,far:1,top:1,bottom:-1},{updateProjectionMatrix:function(){this.projectionMatrix.ortho(this.left,this.right,this.bottom,this.top,this.near,this.far)},decomposeProjectionMatrix:function(){var r=this.projectionMatrix.array;this.left=(-1-r[12])/r[0],this.right=(1-r[12])/r[0],this.top=(1-r[13])/r[5],this.bottom=(-1-r[13])/r[5],this.near=-(-1-r[14])/r[10],this.far=-(1-r[14])/r[10]},clone:function(){var r=vt.prototype.clone.call(this);return r.left=this.left,r.right=this.right,r.near=this.near,r.far=this.far,r.top=this.top,r.bottom=this.bottom,r}});const mn=Xi,qi=`
@export clay.compositor.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
varying vec2 v_Texcoord;
void main()
{
 v_Texcoord = texcoord;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end`;V.import(qi);var Yi=new yn,$e=new hn({geometry:Yi,frustumCulling:!1}),Ki=new mn,Zi=lr.extend(function(){return{fragment:"",outputs:null,material:null,blendWithPrevious:!1,clearColor:!1,clearDepth:!0}},function(){var r=new V(V.source("clay.compositor.vertex"),this.fragment),t=new St({shader:r});t.enableTexturesAll(),this.material=t},{setUniform:function(r,t){this.material.setUniform(r,t)},getUniform:function(r){var t=this.material.uniforms[r];if(t)return t.value},attachOutput:function(r,t){this.outputs||(this.outputs={}),t=t||T.COLOR_ATTACHMENT0,this.outputs[t]=r},detachOutput:function(r){for(var t in this.outputs)this.outputs[t]===r&&(this.outputs[t]=null)},bind:function(r,t){if(this.outputs)for(var e in this.outputs){var n=this.outputs[e];n&&t.attach(n,e)}t&&t.bind(r)},unbind:function(r,t){t.unbind(r)},render:function(r,t){var e=r.gl;if(t){this.bind(r,t);var n=r.getGLExtension("EXT_draw_buffers");if(n&&this.outputs){var i=[];for(var a in this.outputs)a=+a,a>=e.COLOR_ATTACHMENT0&&a<=e.COLOR_ATTACHMENT0+8&&i.push(a);n.drawBuffersEXT(i)}}this.trigger("beforerender",this,r);var s=this.clearDepth?e.DEPTH_BUFFER_BIT:0;if(e.depthMask(!0),this.clearColor){s=s|e.COLOR_BUFFER_BIT,e.colorMask(!0,!0,!0,!0);var o=this.clearColor;Array.isArray(o)&&e.clearColor(o[0],o[1],o[2],o[3])}e.clear(s),this.blendWithPrevious?(e.enable(e.BLEND),this.material.transparent=!0):(e.disable(e.BLEND),this.material.transparent=!1),this.renderQuad(r),this.trigger("afterrender",this,r),t&&this.unbind(r,t)},renderQuad:function(r){$e.material=this.material,r.renderPass([$e],Ki)},dispose:function(r){}});const Tt=Zi,ji=`#define SAMPLE_NUMBER 1024
#define PI 3.14159265358979
uniform sampler2D normalDistribution;
uniform vec2 viewportSize : [512, 256];
const vec3 N = vec3(0.0, 0.0, 1.0);
const float fSampleNumber = float(SAMPLE_NUMBER);
vec3 importanceSampleNormal(float i, float roughness, vec3 N) {
 vec3 H = texture2D(normalDistribution, vec2(roughness, i)).rgb;
 vec3 upVector = abs(N.y) > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
float G_Smith(float roughness, float NoV, float NoL) {
 float k = roughness * roughness / 2.0;
 float G1V = NoV / (NoV * (1.0 - k) + k);
 float G1L = NoL / (NoL * (1.0 - k) + k);
 return G1L * G1V;
}
void main() {
 vec2 uv = gl_FragCoord.xy / viewportSize;
 float NoV = uv.x;
 float roughness = uv.y;
 vec3 V;
 V.x = sqrt(1.0 - NoV * NoV);
 V.y = 0.0;
 V.z = NoV;
 float A = 0.0;
 float B = 0.0;
 for (int i = 0; i < SAMPLE_NUMBER; i++) {
 vec3 H = importanceSampleNormal(float(i) / fSampleNumber, roughness, N);
 vec3 L = reflect(-V, H);
 float NoL = clamp(L.z, 0.0, 1.0);
 float NoH = clamp(H.z, 0.0, 1.0);
 float VoH = clamp(dot(V, H), 0.0, 1.0);
 if (NoL > 0.0) {
 float G = G_Smith(roughness, NoV, NoL);
 float G_Vis = G * VoH / (NoH * NoV);
 float Fc = pow(1.0 - VoH, 5.0);
 A += (1.0 - Fc) * G_Vis;
 B += Fc * G_Vis;
 }
 }
 gl_FragColor = vec4(vec2(A, B) / fSampleNumber, 0.0, 1.0);
}
`,Ji=`#define SHADER_NAME prefilter
#define SAMPLE_NUMBER 1024
#define PI 3.14159265358979
uniform mat4 viewInverse : VIEWINVERSE;
uniform samplerCube environmentMap;
uniform sampler2D normalDistribution;
uniform float roughness : 0.5;
varying vec2 v_Texcoord;
varying vec3 v_WorldPosition;
@import clay.util.rgbm
vec3 importanceSampleNormal(float i, float roughness, vec3 N) {
 vec3 H = texture2D(normalDistribution, vec2(roughness, i)).rgb;
 vec3 upVector = abs(N.y) > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
void main() {
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(v_WorldPosition - eyePos);
 vec3 N = V;
 vec3 prefilteredColor = vec3(0.0);
 float totalWeight = 0.0;
 float fMaxSampleNumber = float(SAMPLE_NUMBER);
 for (int i = 0; i < SAMPLE_NUMBER; i++) {
 vec3 H = importanceSampleNormal(float(i) / fMaxSampleNumber, roughness, N);
 vec3 L = reflect(-V, H);
 float NoL = clamp(dot(N, L), 0.0, 1.0);
 if (NoL > 0.0) {
 prefilteredColor += decodeHDR(textureCube(environmentMap, L)).rgb * NoL;
 totalWeight += NoL;
 }
 }
 gl_FragColor = encodeHDR(vec4(prefilteredColor / totalWeight, 1.0));
}
`;var zr={},oe=["px","nx","py","ny","pz","nz"];zr.prefilterEnvironmentMap=function(r,t,e,n,i){(!i||!n)&&(n=zr.generateNormalDistribution(),i=zr.integrateBRDF(r,n)),e=e||{};var a=e.width||64,s=e.height||64,o=e.type||t.type,u=new rt({width:a,height:s,type:o,flipY:!1,mipmaps:[]});u.isPowerOfTwo()||console.warn("Width and height must be power of two to enable mipmap.");var f=Math.min(a,s),h=Math.log(f)/Math.log(2)+1,c=new St({shader:new V({vertex:V.source("clay.skybox.vertex"),fragment:Ji})});c.set("normalDistribution",n),e.encodeRGBM&&c.define("fragment","RGBM_ENCODE"),e.decodeRGBM&&c.define("fragment","RGBM_DECODE");var d=new ye,l;if(t.textureType==="texture2D"){var v=new rt({width:a,height:s,type:o===N.FLOAT?N.HALF_FLOAT:o});ki.panoramaToCubeMap(r,t,v,{encodeRGBM:e.decodeRGBM}),t=v}l=new Vt({scene:d,material:c}),l.material.set("environmentMap",t);var p=new me({texture:u});e.encodeRGBM&&(o=u.type=N.UNSIGNED_BYTE);for(var y=new gr({width:a,height:s,type:o}),m=new Pr({depthBuffer:!1}),A=K[o===N.UNSIGNED_BYTE?"Uint8Array":"Float32Array"],x=0;x<h;x++){u.mipmaps[x]={pixels:{}},l.material.set("roughness",x/(h-1));for(var g=y.width,S=2*Math.atan(g/(g-.5))/Math.PI*180,M=0;M<oe.length;M++){var O=new A(y.width*y.height*4);m.attach(y),m.bind(r);var D=p.getCamera(oe[M]);D.fov=S,r.render(d,D),r.gl.readPixels(0,0,y.width,y.height,N.RGBA,o,O),m.unbind(r),u.mipmaps[x].pixels[oe[M]]=O}y.width/=2,y.height/=2,y.dirty()}return m.dispose(r),y.dispose(r),l.dispose(r),n.dispose(r),{environmentMap:u,brdfLookup:i,normalDistribution:n,maxMipmapLevel:h}};zr.integrateBRDF=function(r,t){t=t||zr.generateNormalDistribution();var e=new Pr({depthBuffer:!1}),n=new Tt({fragment:ji}),i=new gr({width:512,height:256,type:N.HALF_FLOAT,wrapS:N.CLAMP_TO_EDGE,wrapT:N.CLAMP_TO_EDGE,minFilter:N.NEAREST,magFilter:N.NEAREST,useMipmap:!1});return n.setUniform("normalDistribution",t),n.setUniform("viewportSize",[512,256]),n.attachOutput(i),n.render(r,e),e.dispose(r),i};zr.generateNormalDistribution=function(e,n){for(var e=e||256,n=n||1024,i=new gr({width:e,height:n,type:N.FLOAT,minFilter:N.NEAREST,magFilter:N.NEAREST,wrapS:N.CLAMP_TO_EDGE,wrapT:N.CLAMP_TO_EDGE,useMipmap:!1}),a=new Float32Array(n*e*4),s=[],o=0;o<e;o++){for(var u=o/e,f=u*u,h=0;h<n;h++){var c=(h<<16|h>>>16)>>>0;c=((c&1431655765)<<1|(c&2863311530)>>>1)>>>0,c=((c&858993459)<<2|(c&3435973836)>>>2)>>>0,c=((c&252645135)<<4|(c&4042322160)>>>4)>>>0,c=(((c&16711935)<<8|(c&4278255360)>>>8)>>>0)/4294967296;var d=Math.sqrt((1-c)/(1+(f*f-1)*c));s[h]=d}for(var h=0;h<n;h++){var l=(h*e+o)*4,d=s[h],v=Math.sqrt(1-d*d),p=h/n,y=2*Math.PI*p;a[l]=v*Math.cos(y),a[l+1]=d,a[l+2]=v*Math.sin(y),a[l+3]=1}}return i.pixels=a,i};var $i=Dr.extend({cubemap:null,castShadow:!1,_normalDistribution:null,_brdfLookup:null},{type:"AMBIENT_CUBEMAP_LIGHT",prefilter:function(r,t){if(!r.getGLExtension("EXT_shader_texture_lod")){console.warn("Device not support textureCubeLodEXT");return}this._brdfLookup||(this._normalDistribution=zr.generateNormalDistribution(),this._brdfLookup=zr.integrateBRDF(r,this._normalDistribution));var e=this.cubemap;if(!e.__prefiltered){var n=zr.prefilterEnvironmentMap(r,e,{encodeRGBM:!0,width:t,height:t},this._normalDistribution,this._brdfLookup);this.cubemap=n.environmentMap,this.cubemap.__prefiltered=!0,e.dispose(r)}},getBRDFLookup:function(){return this._brdfLookup},uniformTemplates:{ambientCubemapLightColor:{type:"3f",value:function(r){var t=r.color,e=r.intensity;return[t[0]*e,t[1]*e,t[2]*e]}},ambientCubemapLightCubemap:{type:"t",value:function(r){return r.cubemap}},ambientCubemapLightBRDFLookup:{type:"t",value:function(r){return r._brdfLookup}}}});const Va=$i;var Qi=Dr.extend({castShadow:!1,coefficients:[]},function(){this._coefficientsTmpArr=new K.Float32Array(9*3)},{type:"AMBIENT_SH_LIGHT",uniformTemplates:{ambientSHLightColor:{type:"3f",value:function(r){var t=r.color,e=r.intensity;return[t[0]*e,t[1]*e,t[2]*e]}},ambientSHLightCoefficients:{type:"3f",value:function(r){for(var t=r._coefficientsTmpArr,e=0;e<r.coefficients.length;e++)t[e]=r.coefficients[e];return t}}}});const Wa=Qi;var ra={},Qr=["px","nx","py","ny","pz","nz"];function ta(r,t){var e=r[0],n=r[1],i=r[2];return t===0?1:t===1?e:t===2?n:t===3?i:t===4?e*i:t===5?n*i:t===6?e*n:t===7?3*i*i-1:e*e-n*n}var ea={px:[2,1,0,-1,-1,1],nx:[2,1,0,1,-1,-1],py:[0,2,1,1,-1,-1],ny:[0,2,1,1,1,1],pz:[0,1,2,-1,-1,-1],nz:[0,1,2,1,-1,1]};function na(r,t,e,n){for(var i=new K.Float32Array(27),a=_.create(),s=_.create(),o=_.create(),u=0;u<9;u++){for(var f=_.create(),h=0;h<Qr.length;h++){for(var c=t[Qr[h]],d=_.create(),l=0,v=0,p=ea[Qr[h]],y=0;y<n;y++)for(var m=0;m<e;m++){a[0]=m/(e-1)*2-1,a[1]=y/(n-1)*2-1,a[2]=-1,_.normalize(a,a),o[0]=a[p[0]]*p[3],o[1]=a[p[1]]*p[4],o[2]=a[p[2]]*p[5],s[0]=c[v++]/255,s[1]=c[v++]/255,s[2]=c[v++]/255;var A=c[v++]/255*8.12;s[0]*=A,s[1]*=A,s[2]*=A,_.scaleAndAdd(d,d,s,ta(o,u)*-a[2]),l+=-a[2]}_.scaleAndAdd(f,f,d,1/l)}i[u*3]=f[0]/6,i[u*3+1]=f[1]/6,i[u*3+2]=f[2]/6}return i}ra.projectEnvironmentMap=function(r,t,e){e=e||{},e.lod=e.lod||0;var n,i=new ye,a=64;t.textureType==="texture2D"?n=new Vt({scene:i,environmentMap:t}):(a=t.image&&t.image.px?t.image.px.width:t.width,n=new Vt({scene:i,environmentMap:t}));var s=Math.ceil(a/Math.pow(2,e.lod)),o=Math.ceil(a/Math.pow(2,e.lod)),u=new gr({width:s,height:o}),f=new Pr;n.material.define("fragment","RGBM_ENCODE"),e.decodeRGBM&&n.material.define("fragment","RGBM_DECODE"),n.material.set("lod",e.lod);for(var h=new me({texture:u}),c={},d=0;d<Qr.length;d++){c[Qr[d]]=new Uint8Array(s*o*4);var l=h.getCamera(Qr[d]);l.fov=90,f.attach(u),f.bind(r),r.render(i,l),r.gl.readPixels(0,0,s,o,N.RGBA,N.UNSIGNED_BYTE,c[Qr[d]]),f.unbind(r)}return n.dispose(r),f.dispose(r),u.dispose(r),na(r,c,s,o)};var ia=kr.extend({dynamic:!1,widthSegments:40,heightSegments:20,phiStart:0,phiLength:Math.PI*2,thetaStart:0,thetaLength:Math.PI,radius:1},function(){this.build()},{build:function(){var r=this.heightSegments,t=this.widthSegments,e=this.attributes.position,n=this.attributes.texcoord0,i=this.attributes.normal,a=(t+1)*(r+1);e.init(a),n.init(a),i.init(a);var s=a>65535?Uint32Array:Uint16Array,o=this.indices=new s(t*r*6),u,f,h,c,d,l,v,x=this.radius,p=this.phiStart,y=this.phiLength,m=this.thetaStart,A=this.thetaLength,x=this.radius,g=[],S=[],M=0,O=1/x;for(v=0;v<=r;v++)for(l=0;l<=t;l++)c=l/t,d=v/r,u=-x*Math.cos(p+c*y)*Math.sin(m+d*A),f=x*Math.cos(m+d*A),h=x*Math.sin(p+c*y)*Math.sin(m+d*A),g[0]=u,g[1]=f,g[2]=h,S[0]=c,S[1]=d,e.set(M,g),n.set(M,S),g[0]*=O,g[1]*=O,g[2]*=O,i.set(M,g),M++;var D,L,W,I,z=t+1,H=0;for(v=0;v<r;v++)for(l=0;l<t;l++)L=v*z+l,D=v*z+l+1,I=(v+1)*z+l+1,W=(v+1)*z+l,o[H++]=D,o[H++]=L,o[H++]=I,o[H++]=L,o[H++]=W,o[H++]=I;this.boundingBox=new mr,this.boundingBox.max.set(x,x,x),this.boundingBox.min.set(-x,-x,-x)}});const za=ia;var aa=Dr.extend({castShadow:!1},{type:"AMBIENT_LIGHT",uniformTemplates:{ambientLightColor:{type:"3f",value:function(r){var t=r.color,e=r.intensity;return[t[0]*e,t[1]*e,t[2]*e]}}}});const ka=aa;var sa=Dr.extend({shadowBias:.001,shadowSlopeScale:2,shadowCascade:1,cascadeSplitLogFactor:.2},{type:"DIRECTIONAL_LIGHT",uniformTemplates:{directionalLightDirection:{type:"3f",value:function(r){return r.__dir=r.__dir||new E,r.__dir.copy(r.worldTransform.z).normalize().negate().array}},directionalLightColor:{type:"3f",value:function(r){var t=r.color,e=r.intensity;return[t[0]*e,t[1]*e,t[2]*e]}}},clone:function(){var r=Dr.prototype.clone.call(this);return r.shadowBias=this.shadowBias,r.shadowSlopeScale=this.shadowSlopeScale,r}});const Xa=sa;var oa=Dr.extend({range:100,castShadow:!1},{type:"POINT_LIGHT",uniformTemplates:{pointLightPosition:{type:"3f",value:function(r){return r.getWorldPosition().array}},pointLightRange:{type:"1f",value:function(r){return r.range}},pointLightColor:{type:"3f",value:function(r){var t=r.color,e=r.intensity;return[t[0]*e,t[1]*e,t[2]*e]}}},clone:function(){var r=Dr.prototype.clone.call(this);return r.range=this.range,r}});const qa=oa;var ua=Dr.extend({range:20,umbraAngle:30,penumbraAngle:45,falloffFactor:2,shadowBias:.001,shadowSlopeScale:2},{type:"SPOT_LIGHT",uniformTemplates:{spotLightPosition:{type:"3f",value:function(r){return r.getWorldPosition().array}},spotLightRange:{type:"1f",value:function(r){return r.range}},spotLightUmbraAngleCosine:{type:"1f",value:function(r){return Math.cos(r.umbraAngle*Math.PI/180)}},spotLightPenumbraAngleCosine:{type:"1f",value:function(r){return Math.cos(r.penumbraAngle*Math.PI/180)}},spotLightFalloffFactor:{type:"1f",value:function(r){return r.falloffFactor}},spotLightDirection:{type:"3f",value:function(r){return r.__dir=r.__dir||new E,r.__dir.copy(r.worldTransform.z).negate().array}},spotLightColor:{type:"3f",value:function(r){var t=r.color,e=r.intensity;return[t[0]*e,t[1]*e,t[2]*e]}}},clone:function(){var r=Dr.prototype.clone.call(this);return r.range=this.range,r.umbraAngle=this.umbraAngle,r.penumbraAngle=this.penumbraAngle,r.falloffFactor=this.falloffFactor,r.shadowBias=this.shadowBias,r.shadowSlopeScale=this.shadowSlopeScale,r}});const Ya=ua;var X=function(r,t,e,n){r=r||0,t=t||0,e=e||0,n=n||0,this.array=w.fromValues(r,t,e,n),this._dirty=!0};X.prototype={constructor:X,add:function(r){return w.add(this.array,this.array,r.array),this._dirty=!0,this},set:function(r,t,e,n){return this.array[0]=r,this.array[1]=t,this.array[2]=e,this.array[3]=n,this._dirty=!0,this},setArray:function(r){return this.array[0]=r[0],this.array[1]=r[1],this.array[2]=r[2],this.array[3]=r[3],this._dirty=!0,this},clone:function(){return new X(this.x,this.y,this.z,this.w)},copy:function(r){return w.copy(this.array,r.array),this._dirty=!0,this},dist:function(r){return w.dist(this.array,r.array)},distance:function(r){return w.distance(this.array,r.array)},div:function(r){return w.div(this.array,this.array,r.array),this._dirty=!0,this},divide:function(r){return w.divide(this.array,this.array,r.array),this._dirty=!0,this},dot:function(r){return w.dot(this.array,r.array)},len:function(){return w.len(this.array)},length:function(){return w.length(this.array)},lerp:function(r,t,e){return w.lerp(this.array,r.array,t.array,e),this._dirty=!0,this},min:function(r){return w.min(this.array,this.array,r.array),this._dirty=!0,this},max:function(r){return w.max(this.array,this.array,r.array),this._dirty=!0,this},mul:function(r){return w.mul(this.array,this.array,r.array),this._dirty=!0,this},multiply:function(r){return w.multiply(this.array,this.array,r.array),this._dirty=!0,this},negate:function(){return w.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return w.normalize(this.array,this.array),this._dirty=!0,this},random:function(r){return w.random(this.array,r),this._dirty=!0,this},scale:function(r){return w.scale(this.array,this.array,r),this._dirty=!0,this},scaleAndAdd:function(r,t){return w.scaleAndAdd(this.array,this.array,r.array,t),this._dirty=!0,this},sqrDist:function(r){return w.sqrDist(this.array,r.array)},squaredDistance:function(r){return w.squaredDistance(this.array,r.array)},sqrLen:function(){return w.sqrLen(this.array)},squaredLength:function(){return w.squaredLength(this.array)},sub:function(r){return w.sub(this.array,this.array,r.array),this._dirty=!0,this},subtract:function(r){return w.subtract(this.array,this.array,r.array),this._dirty=!0,this},transformMat4:function(r){return w.transformMat4(this.array,this.array,r.array),this._dirty=!0,this},transformQuat:function(r){return w.transformQuat(this.array,this.array,r.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var xt=Object.defineProperty;if(xt){var Ot=X.prototype;xt(Ot,"x",{get:function(){return this.array[0]},set:function(r){this.array[0]=r,this._dirty=!0}}),xt(Ot,"y",{get:function(){return this.array[1]},set:function(r){this.array[1]=r,this._dirty=!0}}),xt(Ot,"z",{get:function(){return this.array[2]},set:function(r){this.array[2]=r,this._dirty=!0}}),xt(Ot,"w",{get:function(){return this.array[3]},set:function(r){this.array[3]=r,this._dirty=!0}})}X.add=function(r,t,e){return w.add(r.array,t.array,e.array),r._dirty=!0,r};X.set=function(r,t,e,n,i){w.set(r.array,t,e,n,i),r._dirty=!0};X.copy=function(r,t){return w.copy(r.array,t.array),r._dirty=!0,r};X.dist=function(r,t){return w.distance(r.array,t.array)};X.distance=X.dist;X.div=function(r,t,e){return w.divide(r.array,t.array,e.array),r._dirty=!0,r};X.divide=X.div;X.dot=function(r,t){return w.dot(r.array,t.array)};X.len=function(r){return w.length(r.array)};X.lerp=function(r,t,e,n){return w.lerp(r.array,t.array,e.array,n),r._dirty=!0,r};X.min=function(r,t,e){return w.min(r.array,t.array,e.array),r._dirty=!0,r};X.max=function(r,t,e){return w.max(r.array,t.array,e.array),r._dirty=!0,r};X.mul=function(r,t,e){return w.multiply(r.array,t.array,e.array),r._dirty=!0,r};X.multiply=X.mul;X.negate=function(r,t){return w.negate(r.array,t.array),r._dirty=!0,r};X.normalize=function(r,t){return w.normalize(r.array,t.array),r._dirty=!0,r};X.random=function(r,t){return w.random(r.array,t),r._dirty=!0,r};X.scale=function(r,t,e){return w.scale(r.array,t.array,e),r._dirty=!0,r};X.scaleAndAdd=function(r,t,e,n){return w.scaleAndAdd(r.array,t.array,e.array,n),r._dirty=!0,r};X.sqrDist=function(r,t){return w.sqrDist(r.array,t.array)};X.squaredDistance=X.sqrDist;X.sqrLen=function(r){return w.sqrLen(r.array)};X.squaredLength=X.sqrLen;X.sub=function(r,t,e){return w.subtract(r.array,t.array,e.array),r._dirty=!0,r};X.subtract=X.sub;X.transformMat4=function(r,t,e){return w.transformMat4(r.array,t.array,e.array),r._dirty=!0,r};X.transformQuat=function(r,t,e){return w.transformQuat(r.array,t.array,e.array),r._dirty=!0,r};const Ka=X;var cr={};cr.create=function(){var r=new hr(4);return r[0]=1,r[1]=0,r[2]=0,r[3]=1,r};cr.clone=function(r){var t=new hr(4);return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t};cr.copy=function(r,t){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r};cr.identity=function(r){return r[0]=1,r[1]=0,r[2]=0,r[3]=1,r};cr.transpose=function(r,t){if(r===t){var e=t[1];r[1]=t[2],r[2]=e}else r[0]=t[0],r[1]=t[2],r[2]=t[1],r[3]=t[3];return r};cr.invert=function(r,t){var e=t[0],n=t[1],i=t[2],a=t[3],s=e*a-i*n;return s?(s=1/s,r[0]=a*s,r[1]=-n*s,r[2]=-i*s,r[3]=e*s,r):null};cr.adjoint=function(r,t){var e=t[0];return r[0]=t[3],r[1]=-t[1],r[2]=-t[2],r[3]=e,r};cr.determinant=function(r){return r[0]*r[3]-r[2]*r[1]};cr.multiply=function(r,t,e){var n=t[0],i=t[1],a=t[2],s=t[3],o=e[0],u=e[1],f=e[2],h=e[3];return r[0]=n*o+a*u,r[1]=i*o+s*u,r[2]=n*f+a*h,r[3]=i*f+s*h,r};cr.mul=cr.multiply;cr.rotate=function(r,t,e){var n=t[0],i=t[1],a=t[2],s=t[3],o=Math.sin(e),u=Math.cos(e);return r[0]=n*u+a*o,r[1]=i*u+s*o,r[2]=n*-o+a*u,r[3]=i*-o+s*u,r};cr.scale=function(r,t,e){var n=t[0],i=t[1],a=t[2],s=t[3],o=e[0],u=e[1];return r[0]=n*o,r[1]=i*o,r[2]=a*u,r[3]=s*u,r};cr.frob=function(r){return Math.sqrt(Math.pow(r[0],2)+Math.pow(r[1],2)+Math.pow(r[2],2)+Math.pow(r[3],2))};cr.LDU=function(r,t,e,n){return r[2]=n[2]/n[0],e[0]=n[0],e[1]=n[1],e[3]=n[3]-r[2]*e[1],[r,t,e]};const nr=cr;var _r=function(){this.array=nr.create(),this._dirty=!0};_r.prototype={constructor:_r,setArray:function(r){for(var t=0;t<this.array.length;t++)this.array[t]=r[t];return this._dirty=!0,this},clone:function(){return new _r().copy(this)},copy:function(r){return nr.copy(this.array,r.array),this._dirty=!0,this},adjoint:function(){return nr.adjoint(this.array,this.array),this._dirty=!0,this},determinant:function(){return nr.determinant(this.array)},identity:function(){return nr.identity(this.array),this._dirty=!0,this},invert:function(){return nr.invert(this.array,this.array),this._dirty=!0,this},mul:function(r){return nr.mul(this.array,this.array,r.array),this._dirty=!0,this},mulLeft:function(r){return nr.mul(this.array,r.array,this.array),this._dirty=!0,this},multiply:function(r){return nr.multiply(this.array,this.array,r.array),this._dirty=!0,this},multiplyLeft:function(r){return nr.multiply(this.array,r.array,this.array),this._dirty=!0,this},rotate:function(r){return nr.rotate(this.array,this.array,r),this._dirty=!0,this},scale:function(r){return nr.scale(this.array,this.array,r.array),this._dirty=!0,this},transpose:function(){return nr.transpose(this.array,this.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};_r.adjoint=function(r,t){return nr.adjoint(r.array,t.array),r._dirty=!0,r};_r.copy=function(r,t){return nr.copy(r.array,t.array),r._dirty=!0,r};_r.determinant=function(r){return nr.determinant(r.array)};_r.identity=function(r){return nr.identity(r.array),r._dirty=!0,r};_r.invert=function(r,t){return nr.invert(r.array,t.array),r._dirty=!0,r};_r.mul=function(r,t,e){return nr.mul(r.array,t.array,e.array),r._dirty=!0,r};_r.multiply=_r.mul;_r.rotate=function(r,t,e){return nr.rotate(r.array,t.array,e),r._dirty=!0,r};_r.scale=function(r,t,e){return nr.scale(r.array,t.array,e.array),r._dirty=!0,r};_r.transpose=function(r,t){return nr.transpose(r.array,t.array),r._dirty=!0,r};const Za=_r;var Er={};Er.create=function(){var r=new hr(6);return r[0]=1,r[1]=0,r[2]=0,r[3]=1,r[4]=0,r[5]=0,r};Er.clone=function(r){var t=new hr(6);return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t};Er.copy=function(r,t){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r};Er.identity=function(r){return r[0]=1,r[1]=0,r[2]=0,r[3]=1,r[4]=0,r[5]=0,r};Er.invert=function(r,t){var e=t[0],n=t[1],i=t[2],a=t[3],s=t[4],o=t[5],u=e*a-n*i;return u?(u=1/u,r[0]=a*u,r[1]=-n*u,r[2]=-i*u,r[3]=e*u,r[4]=(i*o-a*s)*u,r[5]=(n*s-e*o)*u,r):null};Er.determinant=function(r){return r[0]*r[3]-r[1]*r[2]};Er.multiply=function(r,t,e){var n=t[0],i=t[1],a=t[2],s=t[3],o=t[4],u=t[5],f=e[0],h=e[1],c=e[2],d=e[3],l=e[4],v=e[5];return r[0]=n*f+a*h,r[1]=i*f+s*h,r[2]=n*c+a*d,r[3]=i*c+s*d,r[4]=n*l+a*v+o,r[5]=i*l+s*v+u,r};Er.mul=Er.multiply;Er.rotate=function(r,t,e){var n=t[0],i=t[1],a=t[2],s=t[3],o=t[4],u=t[5],f=Math.sin(e),h=Math.cos(e);return r[0]=n*h+a*f,r[1]=i*h+s*f,r[2]=n*-f+a*h,r[3]=i*-f+s*h,r[4]=o,r[5]=u,r};Er.scale=function(r,t,e){var n=t[0],i=t[1],a=t[2],s=t[3],o=t[4],u=t[5],f=e[0],h=e[1];return r[0]=n*f,r[1]=i*f,r[2]=a*h,r[3]=s*h,r[4]=o,r[5]=u,r};Er.translate=function(r,t,e){var n=t[0],i=t[1],a=t[2],s=t[3],o=t[4],u=t[5],f=e[0],h=e[1];return r[0]=n,r[1]=i,r[2]=a,r[3]=s,r[4]=n*f+a*h+o,r[5]=i*f+s*h+u,r};Er.frob=function(r){return Math.sqrt(Math.pow(r[0],2)+Math.pow(r[1],2)+Math.pow(r[2],2)+Math.pow(r[3],2)+Math.pow(r[4],2)+Math.pow(r[5],2)+1)};const sr=Er;var xr=function(){this.array=sr.create(),this._dirty=!0};xr.prototype={constructor:xr,setArray:function(r){for(var t=0;t<this.array.length;t++)this.array[t]=r[t];return this._dirty=!0,this},clone:function(){return new xr().copy(this)},copy:function(r){return sr.copy(this.array,r.array),this._dirty=!0,this},determinant:function(){return sr.determinant(this.array)},identity:function(){return sr.identity(this.array),this._dirty=!0,this},invert:function(){return sr.invert(this.array,this.array),this._dirty=!0,this},mul:function(r){return sr.mul(this.array,this.array,r.array),this._dirty=!0,this},mulLeft:function(r){return sr.mul(this.array,r.array,this.array),this._dirty=!0,this},multiply:function(r){return sr.multiply(this.array,this.array,r.array),this._dirty=!0,this},multiplyLeft:function(r){return sr.multiply(this.array,r.array,this.array),this._dirty=!0,this},rotate:function(r){return sr.rotate(this.array,this.array,r),this._dirty=!0,this},scale:function(r){return sr.scale(this.array,this.array,r.array),this._dirty=!0,this},translate:function(r){return sr.translate(this.array,this.array,r.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};xr.copy=function(r,t){return sr.copy(r.array,t.array),r._dirty=!0,r};xr.determinant=function(r){return sr.determinant(r.array)};xr.identity=function(r){return sr.identity(r.array),r._dirty=!0,r};xr.invert=function(r,t){return sr.invert(r.array,t.array),r._dirty=!0,r};xr.mul=function(r,t,e){return sr.mul(r.array,t.array,e.array),r._dirty=!0,r};xr.multiply=xr.mul;xr.rotate=function(r,t,e){return sr.rotate(r.array,t.array,e),r._dirty=!0,r};xr.scale=function(r,t,e){return sr.scale(r.array,t.array,e.array),r._dirty=!0,r};xr.translate=function(r,t,e){return sr.translate(r.array,t.array,e.array),r._dirty=!0,r};const ja=xr;var or=function(){this.array=P.create(),this._dirty=!0};or.prototype={constructor:or,setArray:function(r){for(var t=0;t<this.array.length;t++)this.array[t]=r[t];return this._dirty=!0,this},adjoint:function(){return P.adjoint(this.array,this.array),this._dirty=!0,this},clone:function(){return new or().copy(this)},copy:function(r){return P.copy(this.array,r.array),this._dirty=!0,this},determinant:function(){return P.determinant(this.array)},fromMat2d:function(r){return P.fromMat2d(this.array,r.array),this._dirty=!0,this},fromMat4:function(r){return P.fromMat4(this.array,r.array),this._dirty=!0,this},fromQuat:function(r){return P.fromQuat(this.array,r.array),this._dirty=!0,this},identity:function(){return P.identity(this.array),this._dirty=!0,this},invert:function(){return P.invert(this.array,this.array),this._dirty=!0,this},mul:function(r){return P.mul(this.array,this.array,r.array),this._dirty=!0,this},mulLeft:function(r){return P.mul(this.array,r.array,this.array),this._dirty=!0,this},multiply:function(r){return P.multiply(this.array,this.array,r.array),this._dirty=!0,this},multiplyLeft:function(r){return P.multiply(this.array,r.array,this.array),this._dirty=!0,this},rotate:function(r){return P.rotate(this.array,this.array,r),this._dirty=!0,this},scale:function(r){return P.scale(this.array,this.array,r.array),this._dirty=!0,this},translate:function(r){return P.translate(this.array,this.array,r.array),this._dirty=!0,this},normalFromMat4:function(r){return P.normalFromMat4(this.array,r.array),this._dirty=!0,this},transpose:function(){return P.transpose(this.array,this.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};or.adjoint=function(r,t){return P.adjoint(r.array,t.array),r._dirty=!0,r};or.copy=function(r,t){return P.copy(r.array,t.array),r._dirty=!0,r};or.determinant=function(r){return P.determinant(r.array)};or.identity=function(r){return P.identity(r.array),r._dirty=!0,r};or.invert=function(r,t){return P.invert(r.array,t.array),r};or.mul=function(r,t,e){return P.mul(r.array,t.array,e.array),r._dirty=!0,r};or.multiply=or.mul;or.fromMat2d=function(r,t){return P.fromMat2d(r.array,t.array),r._dirty=!0,r};or.fromMat4=function(r,t){return P.fromMat4(r.array,t.array),r._dirty=!0,r};or.fromQuat=function(r,t){return P.fromQuat(r.array,t.array),r._dirty=!0,r};or.normalFromMat4=function(r,t){return P.normalFromMat4(r.array,t.array),r._dirty=!0,r};or.rotate=function(r,t,e){return P.rotate(r.array,t.array,e),r._dirty=!0,r};or.scale=function(r,t,e){return P.scale(r.array,t.array,e.array),r._dirty=!0,r};or.transpose=function(r,t){return P.transpose(r.array,t.array),r._dirty=!0,r};or.translate=function(r,t,e){return P.translate(r.array,t.array,e.array),r._dirty=!0,r};const Ja=or,$a=`
@export clay.util.rand
highp float rand(vec2 uv) {
 const highp float a = 12.9898, b = 78.233, c = 43758.5453;
 highp float dt = dot(uv.xy, vec2(a,b)), sn = mod(dt, 3.141592653589793);
 return fract(sin(sn) * c);
}
@end
@export clay.util.calculate_attenuation
uniform float attenuationFactor : 5.0;
float lightAttenuation(float dist, float range)
{
 float attenuation = 1.0;
 attenuation = dist*dist/(range*range+1.0);
 float att_s = attenuationFactor;
 attenuation = 1.0/(attenuation*att_s+1.0);
 att_s = 1.0/(att_s+1.0);
 attenuation = attenuation - att_s;
 attenuation /= 1.0 - att_s;
 return clamp(attenuation, 0.0, 1.0);
}
@end
@export clay.util.edge_factor
#ifdef SUPPORT_STANDARD_DERIVATIVES
float edgeFactor(float width)
{
 vec3 d = fwidth(v_Barycentric);
 vec3 a3 = smoothstep(vec3(0.0), d * width, v_Barycentric);
 return min(min(a3.x, a3.y), a3.z);
}
#else
float edgeFactor(float width)
{
 return 1.0;
}
#endif
@end
@export clay.util.encode_float
vec4 encodeFloat(const in float depth)
{
 const vec4 bitShifts = vec4(256.0*256.0*256.0, 256.0*256.0, 256.0, 1.0);
 const vec4 bit_mask = vec4(0.0, 1.0/256.0, 1.0/256.0, 1.0/256.0);
 vec4 res = fract(depth * bitShifts);
 res -= res.xxyz * bit_mask;
 return res;
}
@end
@export clay.util.decode_float
float decodeFloat(const in vec4 color)
{
 const vec4 bitShifts = vec4(1.0/(256.0*256.0*256.0), 1.0/(256.0*256.0), 1.0/256.0, 1.0);
 return dot(color, bitShifts);
}
@end
@export clay.util.float
@import clay.util.encode_float
@import clay.util.decode_float
@end
@export clay.util.rgbm_decode
vec3 RGBMDecode(vec4 rgbm, float range) {
 return range * rgbm.rgb * rgbm.a;
}
@end
@export clay.util.rgbm_encode
vec4 RGBMEncode(vec3 color, float range) {
 if (dot(color, color) == 0.0) {
 return vec4(0.0);
 }
 vec4 rgbm;
 color /= range;
 rgbm.a = clamp(max(max(color.r, color.g), max(color.b, 1e-6)), 0.0, 1.0);
 rgbm.a = ceil(rgbm.a * 255.0) / 255.0;
 rgbm.rgb = color / rgbm.a;
 return rgbm;
}
@end
@export clay.util.rgbm
@import clay.util.rgbm_decode
@import clay.util.rgbm_encode
vec4 decodeHDR(vec4 color)
{
#if defined(RGBM_DECODE) || defined(RGBM)
 return vec4(RGBMDecode(color, 8.12), 1.0);
#else
 return color;
#endif
}
vec4 encodeHDR(vec4 color)
{
#if defined(RGBM_ENCODE) || defined(RGBM)
 return RGBMEncode(color.xyz, 8.12);
#else
 return color;
#endif
}
@end
@export clay.util.srgb
vec4 sRGBToLinear(in vec4 value) {
 return vec4(mix(pow(value.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), value.rgb * 0.0773993808, vec3(lessThanEqual(value.rgb, vec3(0.04045)))), value.w);
}
vec4 linearTosRGB(in vec4 value) {
 return vec4(mix(pow(value.rgb, vec3(0.41666)) * 1.055 - vec3(0.055), value.rgb * 12.92, vec3(lessThanEqual(value.rgb, vec3(0.0031308)))), value.w);
}
@end
@export clay.chunk.skinning_header
#ifdef SKINNING
attribute vec3 weight : WEIGHT;
attribute vec4 joint : JOINT;
#ifdef USE_SKIN_MATRICES_TEXTURE
uniform sampler2D skinMatricesTexture : ignore;
uniform float skinMatricesTextureSize: ignore;
mat4 getSkinMatrix(sampler2D tex, float idx) {
 float j = idx * 4.0;
 float x = mod(j, skinMatricesTextureSize);
 float y = floor(j / skinMatricesTextureSize) + 0.5;
 vec2 scale = vec2(skinMatricesTextureSize);
 return mat4(
 texture2D(tex, vec2(x + 0.5, y) / scale),
 texture2D(tex, vec2(x + 1.5, y) / scale),
 texture2D(tex, vec2(x + 2.5, y) / scale),
 texture2D(tex, vec2(x + 3.5, y) / scale)
 );
}
mat4 getSkinMatrix(float idx) {
 return getSkinMatrix(skinMatricesTexture, idx);
}
#else
uniform mat4 skinMatrix[JOINT_COUNT] : SKIN_MATRIX;
mat4 getSkinMatrix(float idx) {
 return skinMatrix[int(idx)];
}
#endif
#endif
@end
@export clay.chunk.skin_matrix
mat4 skinMatrixWS = getSkinMatrix(joint.x) * weight.x;
if (weight.y > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.y) * weight.y;
}
if (weight.z > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.z) * weight.z;
}
float weightW = 1.0-weight.x-weight.y-weight.z;
if (weightW > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.w) * weightW;
}
@end
@export clay.chunk.instancing_header
#ifdef INSTANCING
attribute vec4 instanceMat1;
attribute vec4 instanceMat2;
attribute vec4 instanceMat3;
#endif
@end
@export clay.chunk.instancing_matrix
mat4 instanceMat = mat4(
 vec4(instanceMat1.xyz, 0.0),
 vec4(instanceMat2.xyz, 0.0),
 vec4(instanceMat3.xyz, 0.0),
 vec4(instanceMat1.w, instanceMat2.w, instanceMat3.w, 1.0)
);
@end
@export clay.util.parallax_correct
vec3 parallaxCorrect(in vec3 dir, in vec3 pos, in vec3 boxMin, in vec3 boxMax) {
 vec3 first = (boxMax - pos) / dir;
 vec3 second = (boxMin - pos) / dir;
 vec3 further = max(first, second);
 float dist = min(further.x, min(further.y, further.z));
 vec3 fixedPos = pos + dir * dist;
 vec3 boxCenter = (boxMax + boxMin) * 0.5;
 return normalize(fixedPos - boxCenter);
}
@end
@export clay.util.clamp_sample
vec4 clampSample(const in sampler2D texture, const in vec2 coord)
{
#ifdef STEREO
 float eye = step(0.5, coord.x) * 0.5;
 vec2 coordClamped = clamp(coord, vec2(eye, 0.0), vec2(0.5 + eye, 1.0));
#else
 vec2 coordClamped = clamp(coord, vec2(0.0), vec2(1.0));
#endif
 return texture2D(texture, coordClamped);
}
@end
@export clay.util.ACES
vec3 ACESToneMapping(vec3 color)
{
 const float A = 2.51;
 const float B = 0.03;
 const float C = 2.43;
 const float D = 0.59;
 const float E = 0.14;
 return (color * (A * color + B)) / (color * (C * color + D) + E);
}
@end`,Qa={vec2:b,vec3:_,vec4:w,mat2:nr,mat2d:sr,mat3:P,mat4:R,quat:U};var ve=function(){this._pool={},this._allocatedTextures=[]};ve.prototype={constructor:ve,get:function(r){var t=Qe(r);this._pool.hasOwnProperty(t)||(this._pool[t]=[]);var e=this._pool[t];if(!e.length){var n=new gr(r);return this._allocatedTextures.push(n),n}return e.pop()},put:function(r){var t=Qe(r);this._pool.hasOwnProperty(t)||(this._pool[t]=[]);var e=this._pool[t];e.push(r)},clear:function(r){for(var t=0;t<this._allocatedTextures.length;t++)this._allocatedTextures[t].dispose(r);this._pool={},this._allocatedTextures=[]}};var gn={width:512,height:512,type:T.UNSIGNED_BYTE,format:T.RGBA,wrapS:T.CLAMP_TO_EDGE,wrapT:T.CLAMP_TO_EDGE,minFilter:T.LINEAR_MIPMAP_LINEAR,magFilter:T.LINEAR,useMipmap:!0,anisotropic:1,flipY:!0,unpackAlignment:4,premultiplyAlpha:!1},ue=Object.keys(gn);function Qe(r){ar.defaultsWithPropList(r,gn,ue),fa(r);for(var t="",e=0;e<ue.length;e++){var n=ue[e],i=r[n].toString();t+=i}return t}function fa(r){var t=ha(r.width,r.height);r.format===T.DEPTH_COMPONENT&&(r.useMipmap=!1),(!t||!r.useMipmap)&&(r.minFilter==T.NEAREST_MIPMAP_NEAREST||r.minFilter==T.NEAREST_MIPMAP_LINEAR?r.minFilter=T.NEAREST:(r.minFilter==T.LINEAR_MIPMAP_LINEAR||r.minFilter==T.LINEAR_MIPMAP_NEAREST)&&(r.minFilter=T.LINEAR)),t||(r.wrapS=T.CLAMP_TO_EDGE,r.wrapT=T.CLAMP_TO_EDGE)}function ha(r,t){return(r&r-1)===0&&(t&t-1)===0}const xn=ve,ca=`@export clay.sm.depth.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
uniform vec2 uvRepeat = vec2(1.0, 1.0);
uniform vec2 uvOffset = vec2(0.0, 0.0);
@import clay.chunk.skinning_header
@import clay.chunk.instancing_header
varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;
void main(){
 vec4 P = vec4(position, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 v_ViewPosition = worldViewProjection * P;
 gl_Position = v_ViewPosition;
 v_Texcoord = texcoord * uvRepeat + uvOffset;
}
@end
@export clay.sm.depth.fragment
varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;
uniform float bias : 0.001;
uniform float slopeScale : 1.0;
uniform sampler2D alphaMap;
uniform float alphaCutoff: 0.0;
@import clay.util.encode_float
void main(){
 float depth = v_ViewPosition.z / v_ViewPosition.w;
 if (alphaCutoff > 0.0) {
 if (texture2D(alphaMap, v_Texcoord).a <= alphaCutoff) {
 discard;
 }
 }
#ifdef USE_VSM
 depth = depth * 0.5 + 0.5;
 float moment1 = depth;
 float moment2 = depth * depth;
 #ifdef SUPPORT_STANDARD_DERIVATIVES
 float dx = dFdx(depth);
 float dy = dFdy(depth);
 moment2 += 0.25*(dx*dx+dy*dy);
 #endif
 gl_FragColor = vec4(moment1, moment2, 0.0, 1.0);
#else
 #ifdef SUPPORT_STANDARD_DERIVATIVES
 float dx = dFdx(depth);
 float dy = dFdy(depth);
 depth += sqrt(dx*dx + dy*dy) * slopeScale + bias;
 #else
 depth += bias;
 #endif
 gl_FragColor = encodeFloat(depth * 0.5 + 0.5);
#endif
}
@end
@export clay.sm.debug_depth
uniform sampler2D depthMap;
varying vec2 v_Texcoord;
@import clay.util.decode_float
void main() {
 vec4 tex = texture2D(depthMap, v_Texcoord);
#ifdef USE_VSM
 gl_FragColor = vec4(tex.rgb, 1.0);
#else
 float depth = decodeFloat(tex);
 gl_FragColor = vec4(depth, depth, depth, 1.0);
#endif
}
@end
@export clay.sm.distance.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 world : WORLD;
attribute vec3 position : POSITION;
@import clay.chunk.skinning_header
varying vec3 v_WorldPosition;
void main (){
 vec4 P = vec4(position, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 gl_Position = worldViewProjection * P;
 v_WorldPosition = (world * P).xyz;
}
@end
@export clay.sm.distance.fragment
uniform vec3 lightPosition;
uniform float range : 100;
varying vec3 v_WorldPosition;
@import clay.util.encode_float
void main(){
 float dist = distance(lightPosition, v_WorldPosition);
#ifdef USE_VSM
 gl_FragColor = vec4(dist, dist * dist, 0.0, 0.0);
#else
 dist = dist / range;
 gl_FragColor = encodeFloat(dist);
#endif
}
@end
@export clay.plugin.shadow_map_common
@import clay.util.decode_float
float tapShadowMap(sampler2D map, vec2 uv, float z){
 vec4 tex = texture2D(map, uv);
 return step(z, decodeFloat(tex) * 2.0 - 1.0);
}
float pcf(sampler2D map, vec2 uv, float z, float textureSize, vec2 scale) {
 float shadowContrib = tapShadowMap(map, uv, z);
 vec2 offset = vec2(1.0 / textureSize) * scale;
#ifdef PCF_KERNEL_SIZE
 for (int _idx_ = 0; _idx_ < PCF_KERNEL_SIZE; _idx_++) {{
 shadowContrib += tapShadowMap(map, uv + offset * pcfKernel[_idx_], z);
 }}
 return shadowContrib / float(PCF_KERNEL_SIZE + 1);
#else
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, 0.0), z);
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(0.0, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, 0.0), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, -offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, -offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(0.0, -offset.y), z);
 return shadowContrib / 9.0;
#endif
}
float pcf(sampler2D map, vec2 uv, float z, float textureSize) {
 return pcf(map, uv, z, textureSize, vec2(1.0));
}
float chebyshevUpperBound(vec2 moments, float z){
 float p = 0.0;
 z = z * 0.5 + 0.5;
 if (z <= moments.x) {
 p = 1.0;
 }
 float variance = moments.y - moments.x * moments.x;
 variance = max(variance, 0.0000001);
 float mD = moments.x - z;
 float pMax = variance / (variance + mD * mD);
 pMax = clamp((pMax-0.4)/(1.0-0.4), 0.0, 1.0);
 return max(p, pMax);
}
float computeShadowContrib(
 sampler2D map, mat4 lightVPM, vec3 position, float textureSize, vec2 scale, vec2 offset
) {
 vec4 posInLightSpace = lightVPM * vec4(position, 1.0);
 posInLightSpace.xyz /= posInLightSpace.w;
 float z = posInLightSpace.z;
 if(all(greaterThan(posInLightSpace.xyz, vec3(-0.99, -0.99, -1.0))) &&
 all(lessThan(posInLightSpace.xyz, vec3(0.99, 0.99, 1.0)))){
 vec2 uv = (posInLightSpace.xy+1.0) / 2.0;
 #ifdef USE_VSM
 vec2 moments = texture2D(map, uv * scale + offset).xy;
 return chebyshevUpperBound(moments, z);
 #else
 return pcf(map, uv * scale + offset, z, textureSize, scale);
 #endif
 }
 return 1.0;
}
float computeShadowContrib(sampler2D map, mat4 lightVPM, vec3 position, float textureSize) {
 return computeShadowContrib(map, lightVPM, position, textureSize, vec2(1.0), vec2(0.0));
}
float computeShadowContribOmni(samplerCube map, vec3 direction, float range)
{
 float dist = length(direction);
 vec4 shadowTex = textureCube(map, direction);
#ifdef USE_VSM
 vec2 moments = shadowTex.xy;
 float variance = moments.y - moments.x * moments.x;
 float mD = moments.x - dist;
 float p = variance / (variance + mD * mD);
 if(moments.x + 0.001 < dist){
 return clamp(p, 0.0, 1.0);
 }else{
 return 1.0;
 }
#else
 return step(dist, (decodeFloat(shadowTex) + 0.0002) * range);
#endif
}
@end
@export clay.plugin.compute_shadow_map
#if defined(SPOT_LIGHT_SHADOWMAP_COUNT) || defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT) || defined(POINT_LIGHT_SHADOWMAP_COUNT)
#ifdef SPOT_LIGHT_SHADOWMAP_COUNT
uniform sampler2D spotLightShadowMaps[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform mat4 spotLightMatrices[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform float spotLightShadowMapSizes[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
#ifdef DIRECTIONAL_LIGHT_SHADOWMAP_COUNT
#if defined(SHADOW_CASCADE)
uniform sampler2D directionalLightShadowMaps[1]:unconfigurable;
uniform mat4 directionalLightMatrices[SHADOW_CASCADE]:unconfigurable;
uniform float directionalLightShadowMapSizes[1]:unconfigurable;
uniform float shadowCascadeClipsNear[SHADOW_CASCADE]:unconfigurable;
uniform float shadowCascadeClipsFar[SHADOW_CASCADE]:unconfigurable;
#else
uniform sampler2D directionalLightShadowMaps[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform mat4 directionalLightMatrices[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform float directionalLightShadowMapSizes[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
#endif
#ifdef POINT_LIGHT_SHADOWMAP_COUNT
uniform samplerCube pointLightShadowMaps[POINT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
uniform bool shadowEnabled : true;
#ifdef PCF_KERNEL_SIZE
uniform vec2 pcfKernel[PCF_KERNEL_SIZE];
#endif
@import clay.plugin.shadow_map_common
#if defined(SPOT_LIGHT_SHADOWMAP_COUNT)
void computeShadowOfSpotLights(vec3 position, inout float shadowContribs[SPOT_LIGHT_COUNT] ) {
 float shadowContrib;
 for(int _idx_ = 0; _idx_ < SPOT_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 shadowContrib = computeShadowContrib(
 spotLightShadowMaps[_idx_], spotLightMatrices[_idx_], position,
 spotLightShadowMapSizes[_idx_]
 );
 shadowContribs[_idx_] = shadowContrib;
 }}
 for(int _idx_ = SPOT_LIGHT_SHADOWMAP_COUNT; _idx_ < SPOT_LIGHT_COUNT; _idx_++){{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
#ifdef SHADOW_CASCADE
void computeShadowOfDirectionalLights(vec3 position, inout float shadowContribs[DIRECTIONAL_LIGHT_COUNT]){
 float depth = (2.0 * gl_FragCoord.z - gl_DepthRange.near - gl_DepthRange.far)
 / (gl_DepthRange.far - gl_DepthRange.near);
 float shadowContrib;
 shadowContribs[0] = 1.0;
 for (int _idx_ = 0; _idx_ < SHADOW_CASCADE; _idx_++) {{
 if (
 depth >= shadowCascadeClipsNear[_idx_] &&
 depth <= shadowCascadeClipsFar[_idx_]
 ) {
 shadowContrib = computeShadowContrib(
 directionalLightShadowMaps[0], directionalLightMatrices[_idx_], position,
 directionalLightShadowMapSizes[0],
 vec2(1.0 / float(SHADOW_CASCADE), 1.0),
 vec2(float(_idx_) / float(SHADOW_CASCADE), 0.0)
 );
 shadowContribs[0] = shadowContrib;
 }
 }}
 for(int _idx_ = DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#else
void computeShadowOfDirectionalLights(vec3 position, inout float shadowContribs[DIRECTIONAL_LIGHT_COUNT]){
 float shadowContrib;
 for(int _idx_ = 0; _idx_ < DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 shadowContrib = computeShadowContrib(
 directionalLightShadowMaps[_idx_], directionalLightMatrices[_idx_], position,
 directionalLightShadowMapSizes[_idx_]
 );
 shadowContribs[_idx_] = shadowContrib;
 }}
 for(int _idx_ = DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#endif
#if defined(POINT_LIGHT_SHADOWMAP_COUNT)
void computeShadowOfPointLights(vec3 position, inout float shadowContribs[POINT_LIGHT_COUNT] ){
 vec3 lightPosition;
 vec3 direction;
 for(int _idx_ = 0; _idx_ < POINT_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 lightPosition = pointLightPosition[_idx_];
 direction = position - lightPosition;
 shadowContribs[_idx_] = computeShadowContribOmni(pointLightShadowMaps[_idx_], direction, pointLightRange[_idx_]);
 }}
 for(int _idx_ = POINT_LIGHT_SHADOWMAP_COUNT; _idx_ < POINT_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#endif
@end`;var qr=["px","nx","py","ny","pz","nz"];V.import(ca);function fe(r,t,e){if(e==="alphaMap")return r.material.get("diffuseMap");if(e==="alphaCutoff"){if(r.material.isDefined("fragment","ALPHA_TEST")&&r.material.get("diffuseMap")){var n=r.material.get("alphaCutoff");return n||0}return 0}else return e==="uvRepeat"?r.material.get("uvRepeat"):e==="uvOffset"?r.material.get("uvOffset"):t.get(e)}function rn(r,t){var e=r.material,n=t.material;return e.get("diffuseMap")!==n.get("diffuseMap")||(e.get("alphaCutoff")||0)!==(n.get("alphaCutoff")||0)}var Vr=lr.extend(function(){return{softShadow:Vr.PCF,shadowBlur:1,lightFrustumBias:"auto",kernelPCF:new Float32Array([1,0,1,1,-1,1,0,1,-1,0,-1,-1,1,-1,0,-1]),precision:"highp",_lastRenderNotCastShadow:!1,_frameBuffer:new Pr,_textures:{},_shadowMapNumber:{POINT_LIGHT:0,DIRECTIONAL_LIGHT:0,SPOT_LIGHT:0},_depthMaterials:{},_distanceMaterials:{},_receivers:[],_lightsCastShadow:[],_lightCameras:{},_lightMaterials:{},_texturePool:new xn}},function(){this._gaussianPassH=new Tt({fragment:V.source("clay.compositor.gaussian_blur")}),this._gaussianPassV=new Tt({fragment:V.source("clay.compositor.gaussian_blur")}),this._gaussianPassH.setUniform("blurSize",this.shadowBlur),this._gaussianPassH.setUniform("blurDir",0),this._gaussianPassV.setUniform("blurSize",this.shadowBlur),this._gaussianPassV.setUniform("blurDir",1),this._outputDepthPass=new Tt({fragment:V.source("clay.sm.debug_depth")})},{render:function(r,t,e,n){e||(e=t.getMainCamera()),this.trigger("beforerender",this,r,t,e),this._renderShadowPass(r,t,e,n),this.trigger("afterrender",this,r,t,e)},renderDebug:function(r,t){r.saveClear();var e=r.viewport,n=0,i=0,a=t||e.width/4,s=a;this.softShadow===Vr.VSM?this._outputDepthPass.material.define("fragment","USE_VSM"):this._outputDepthPass.material.undefine("fragment","USE_VSM");for(var o in this._textures){var u=this._textures[o];r.setViewport(n,i,a*u.width/u.height,s),this._outputDepthPass.setUniform("depthMap",u),this._outputDepthPass.render(r),n+=a*u.width/u.height}r.setViewport(e),r.restoreClear()},_updateReceivers:function(r,t){if(t.receiveShadow?(this._receivers.push(t),t.material.set("shadowEnabled",1),t.material.set("pcfKernel",this.kernelPCF)):t.material.set("shadowEnabled",0),this.softShadow===Vr.VSM)t.material.define("fragment","USE_VSM"),t.material.undefine("fragment","PCF_KERNEL_SIZE");else{t.material.undefine("fragment","USE_VSM");var e=this.kernelPCF;e&&e.length?t.material.define("fragment","PCF_KERNEL_SIZE",e.length/2):t.material.undefine("fragment","PCF_KERNEL_SIZE")}},_update:function(r,t){var e=this;t.traverse(function(a){a.isRenderable()&&e._updateReceivers(r,a)});for(var n=0;n<t.lights.length;n++){var i=t.lights[n];i.castShadow&&!i.invisible&&this._lightsCastShadow.push(i)}},_renderShadowPass:function(r,t,e,n){for(var i in this._shadowMapNumber)this._shadowMapNumber[i]=0;this._lightsCastShadow.length=0,this._receivers.length=0;var a=r.gl;if(n||t.update(),e&&e.update(),t.updateLights(),this._update(r,t),!this._lightsCastShadow.length&&this._lastRenderNotCastShadow)return;this._lastRenderNotCastShadow=this._lightsCastShadow===0,a.enable(a.DEPTH_TEST),a.depthMask(!0),a.disable(a.BLEND),a.clearColor(1,1,1,1);for(var s=[],o=[],u=[],f=[],h=[],c=[],d,l=0;l<this._lightsCastShadow.length;l++){var v=this._lightsCastShadow[l];if(v.type==="DIRECTIONAL_LIGHT"){if(d){console.warn("Only one direectional light supported with shadow cascade");continue}if(v.shadowCascade>4){console.warn("Support at most 4 cascade");continue}v.shadowCascade>1&&(d=v),this.renderDirectionalLightShadow(r,t,e,v,h,f,u)}else v.type==="SPOT_LIGHT"?this.renderSpotLightShadow(r,t,v,o,s):v.type==="POINT_LIGHT"&&this.renderPointLightShadow(r,t,v,c);this._shadowMapNumber[v.type]++}for(var p in this._shadowMapNumber)for(var y=this._shadowMapNumber[p],m=p+"_SHADOWMAP_COUNT",l=0;l<this._receivers.length;l++){var A=this._receivers[l],x=A.material;x.fragmentDefines[m]!==y&&(y>0?x.define("fragment",m,y):x.isDefined("fragment",m)&&x.undefine("fragment",m))}for(var l=0;l<this._receivers.length;l++){var A=this._receivers[l],x=A.material;d?x.define("fragment","SHADOW_CASCADE",d.shadowCascade):x.undefine("fragment","SHADOW_CASCADE")}var g=t.shadowUniforms;function S(W){return W.height}if(u.length>0){var M=u.map(S);if(g.directionalLightShadowMaps={value:u,type:"tv"},g.directionalLightMatrices={value:f,type:"m4v"},g.directionalLightShadowMapSizes={value:M,type:"1fv"},d){var O=h.slice(),D=h.slice();O.pop(),D.shift(),O.reverse(),D.reverse(),f.reverse(),g.shadowCascadeClipsNear={value:O,type:"1fv"},g.shadowCascadeClipsFar={value:D,type:"1fv"}}}if(s.length>0){var L=s.map(S),g=t.shadowUniforms;g.spotLightShadowMaps={value:s,type:"tv"},g.spotLightMatrices={value:o,type:"m4v"},g.spotLightShadowMapSizes={value:L,type:"1fv"}}c.length>0&&(g.pointLightShadowMaps={value:c,type:"tv"})},renderDirectionalLightShadow:function(){var r=new _n,t=new C,e=new mr,n=new C,i=new C,a=new C,s=new C;return function(o,u,f,h,c,d,l){var v=this._getDepthMaterial(h),p={getMaterial:function(Cr){return Cr.shadowDepthMaterial||v},isMaterialChanged:rn,getUniform:fe,ifRender:function(Cr){return Cr.castShadow},sortCompare:Jt.opaqueSortCompare};if(!u.viewBoundingBoxLastFrame.isFinite()){var y=u.getBoundingBox();u.viewBoundingBoxLastFrame.copy(y).applyTransform(f.viewMatrix)}var m=Math.min(-u.viewBoundingBoxLastFrame.min.z,f.far),A=Math.max(-u.viewBoundingBoxLastFrame.max.z,f.near),x=this._getDirectionalLightCamera(h,u,f),g=a.array;s.copy(x.projectionMatrix),R.invert(i.array,x.worldTransform.array),R.multiply(i.array,i.array,f.worldTransform.array),R.multiply(g,s.array,i.array);for(var S=[],M=f instanceof vr,O=(f.near+f.far)/(f.near-f.far),D=2*f.near*f.far/(f.near-f.far),L=0;L<=h.shadowCascade;L++){var W=A*Math.pow(m/A,L/h.shadowCascade),I=A+(m-A)*L/h.shadowCascade,z=W*h.cascadeSplitLogFactor+I*(1-h.cascadeSplitLogFactor);S.push(z),c.push(-(-z*O+D)/-z)}var H=this._getTexture(h,h.shadowCascade);l.push(H);var B=o.viewport,Z=o.gl;this._frameBuffer.attach(H),this._frameBuffer.bind(o),Z.clear(Z.COLOR_BUFFER_BIT|Z.DEPTH_BUFFER_BIT);for(var L=0;L<h.shadowCascade;L++){var q=S[L],$=S[L+1];M?R.perspective(t.array,f.fov/180*Math.PI,f.aspect,q,$):R.ortho(t.array,f.left,f.right,f.bottom,f.top,q,$),r.setFromProjection(t),r.getTransformedBoundingBox(e,i),e.applyProjection(s);var Ar=e.min.array,Rr=e.max.array;Ar[0]=Math.max(Ar[0],-1),Ar[1]=Math.max(Ar[1],-1),Rr[0]=Math.min(Rr[0],1),Rr[1]=Math.min(Rr[1],1),n.ortho(Ar[0],Rr[0],Ar[1],Rr[1],1,-1),x.projectionMatrix.multiplyLeft(n);var Br=h.shadowResolution||512;o.setViewport((h.shadowCascade-L-1)*Br,0,Br,Br,1);var Ur=u.updateRenderList(x);o.renderPass(Ur.opaque,x,p),this.softShadow===Vr.VSM&&this._gaussianFilter(o,H,H.width);var wr=new C;wr.copy(x.viewMatrix).multiplyLeft(x.projectionMatrix),d.push(wr.array),x.projectionMatrix.copy(s)}this._frameBuffer.unbind(o),o.setViewport(B)}}(),renderSpotLightShadow:function(r,t,e,n,i){var a=this._getTexture(e),s=this._getSpotLightCamera(e),o=r.gl;this._frameBuffer.attach(a),this._frameBuffer.bind(r),o.clear(o.COLOR_BUFFER_BIT|o.DEPTH_BUFFER_BIT);var u=this._getDepthMaterial(e),f={getMaterial:function(d){return d.shadowDepthMaterial||u},isMaterialChanged:rn,getUniform:fe,ifRender:function(d){return d.castShadow},sortCompare:Jt.opaqueSortCompare},h=t.updateRenderList(s);r.renderPass(h.opaque,s,f),this._frameBuffer.unbind(r),this.softShadow===Vr.VSM&&this._gaussianFilter(r,a,a.width);var c=new C;c.copy(s.worldTransform).invert().multiplyLeft(s.projectionMatrix),i.push(a),n.push(c.array)},renderPointLightShadow:function(r,t,e,n){var i=this._getTexture(e),a=r.gl;n.push(i);var s=this._getDepthMaterial(e),o={getMaterial:function(A){return A.shadowDepthMaterial||s},getUniform:fe,sortCompare:Jt.opaqueSortCompare},u={px:[],py:[],pz:[],nx:[],ny:[],nz:[]},f=new mr,h=e.getWorldPosition().array,c=new mr,d=e.range;c.min.setArray(h),c.max.setArray(h);var l=new E(d,d,d);c.max.add(l),c.min.sub(l);var v={px:!1,py:!1,pz:!1,nx:!1,ny:!1,nz:!1};t.traverse(function(A){if(A.isRenderable()&&A.castShadow){var x=A.geometry;if(!x.boundingBox){for(var g=0;g<qr.length;g++)u[qr[g]].push(A);return}if(f.transformFrom(x.boundingBox,A.worldTransform),!f.intersectBoundingBox(c))return;f.updateVertices();for(var g=0;g<qr.length;g++)v[qr[g]]=!1;for(var g=0;g<8;g++){var S=f.vertices[g],M=S[0]-h[0],O=S[1]-h[1],D=S[2]-h[2],L=Math.abs(M),W=Math.abs(O),I=Math.abs(D);L>W?L>I?v[M>0?"px":"nx"]=!0:v[D>0?"pz":"nz"]=!0:W>I?v[O>0?"py":"ny"]=!0:v[D>0?"pz":"nz"]=!0}for(var g=0;g<qr.length;g++)v[qr[g]]&&u[qr[g]].push(A)}});for(var p=0;p<6;p++){var y=qr[p],m=this._getPointLightCamera(e,y);this._frameBuffer.attach(i,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+p),this._frameBuffer.bind(r),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),r.renderPass(u[y],m,o)}this._frameBuffer.unbind(r)},_getDepthMaterial:function(r){var t=this._lightMaterials[r.__uid__],e=r.type==="POINT_LIGHT";if(!t){var n=e?"clay.sm.distance.":"clay.sm.depth.";t=new St({precision:this.precision,shader:new V(V.source(n+"vertex"),V.source(n+"fragment"))}),this._lightMaterials[r.__uid__]=t}return r.shadowSlopeScale!=null&&t.setUniform("slopeScale",r.shadowSlopeScale),r.shadowBias!=null&&t.setUniform("bias",r.shadowBias),this.softShadow===Vr.VSM?t.define("fragment","USE_VSM"):t.undefine("fragment","USE_VSM"),e&&(t.set("lightPosition",r.getWorldPosition().array),t.set("range",r.range)),t},_gaussianFilter:function(r,t,e){var n={width:e,height:e,type:N.FLOAT},i=this._texturePool.get(n);this._frameBuffer.attach(i),this._frameBuffer.bind(r),this._gaussianPassH.setUniform("texture",t),this._gaussianPassH.setUniform("textureWidth",e),this._gaussianPassH.render(r),this._frameBuffer.attach(t),this._gaussianPassV.setUniform("texture",i),this._gaussianPassV.setUniform("textureHeight",e),this._gaussianPassV.render(r),this._frameBuffer.unbind(r),this._texturePool.put(i)},_getTexture:function(r,t){var e=r.__uid__,n=this._textures[e],i=r.shadowResolution||512;return t=t||1,n||(r.type==="POINT_LIGHT"?n=new rt:n=new gr,n.width=i*t,n.height=i,this.softShadow===Vr.VSM?(n.type=N.FLOAT,n.anisotropic=4):(n.minFilter=T.NEAREST,n.magFilter=T.NEAREST,n.useMipmap=!1),this._textures[e]=n),n},_getPointLightCamera:function(r,t){this._lightCameras.point||(this._lightCameras.point={px:new vr,nx:new vr,py:new vr,ny:new vr,pz:new vr,nz:new vr});var e=this._lightCameras.point[t];switch(e.far=r.range,e.fov=90,e.position.set(0,0,0),t){case"px":e.lookAt(E.POSITIVE_X,E.NEGATIVE_Y);break;case"nx":e.lookAt(E.NEGATIVE_X,E.NEGATIVE_Y);break;case"py":e.lookAt(E.POSITIVE_Y,E.POSITIVE_Z);break;case"ny":e.lookAt(E.NEGATIVE_Y,E.NEGATIVE_Z);break;case"pz":e.lookAt(E.POSITIVE_Z,E.NEGATIVE_Y);break;case"nz":e.lookAt(E.NEGATIVE_Z,E.NEGATIVE_Y);break}return r.getWorldPosition(e.position),e.update(),e},_getDirectionalLightCamera:function(){var r=new C,t=new mr,e=new mr;return function(n,i,a){this._lightCameras.directional||(this._lightCameras.directional=new mn);var s=this._lightCameras.directional;t.copy(i.viewBoundingBoxLastFrame),t.intersection(a.frustum.boundingBox),s.position.copy(t.min).add(t.max).scale(.5).transformMat4(a.worldTransform),s.rotation.copy(n.rotation),s.scale.copy(n.scale),s.updateWorldTransform(),C.invert(r,s.worldTransform),C.multiply(r,r,a.worldTransform),e.copy(t).applyTransform(r);var o=e.min.array,u=e.max.array;return s.position.set((o[0]+u[0])/2,(o[1]+u[1])/2,u[2]).transformMat4(s.worldTransform),s.near=0,s.far=-o[2]+u[2],isNaN(this.lightFrustumBias)?s.far*=4:s.far+=this.lightFrustumBias,s.left=o[0],s.right=u[0],s.top=u[1],s.bottom=o[1],s.update(!0),s}}(),_getSpotLightCamera:function(r){this._lightCameras.spot||(this._lightCameras.spot=new vr);var t=this._lightCameras.spot;return t.fov=r.penumbraAngle*2,t.far=r.range,t.worldTransform.copy(r.worldTransform),t.updateProjectionMatrix(),R.invert(t.viewMatrix.array,t.worldTransform.array),t},dispose:function(r){var t=r.gl||r;this._frameBuffer&&this._frameBuffer.dispose(t);for(var e in this._textures)this._textures[e].dispose(t);this._texturePool.clear(r.gl),this._depthMaterials={},this._distanceMaterials={},this._textures={},this._lightCameras={},this._shadowMapNumber={POINT_LIGHT:0,DIRECTIONAL_LIGHT:0,SPOT_LIGHT:0},this._meshMaterials={};for(var n=0;n<this._receivers.length;n++){var i=this._receivers[n];if(i.material){var a=i.material;a.undefine("fragment","POINT_LIGHT_SHADOW_COUNT"),a.undefine("fragment","DIRECTIONAL_LIGHT_SHADOW_COUNT"),a.undefine("fragment","AMBIENT_LIGHT_SHADOW_COUNT"),a.set("shadowEnabled",0)}}this._receivers=[],this._lightsCastShadow=[]}});Vr.VSM=1;Vr.PCF=2;var Rt=lr.extend(function(){return{name:"",inputLinks:{},outputLinks:{},_prevOutputTextures:{},_outputTextures:{},_outputReferences:{},_rendering:!1,_rendered:!1,_compositor:null}},{updateParameter:function(r,t){var e=this.outputs[r],n=e.parameters,i=e._parametersCopy;if(i||(i=e._parametersCopy={}),n)for(var a in n)a!=="width"&&a!=="height"&&(i[a]=n[a]);var s,o;return n.width instanceof Function?s=n.width.call(this,t):s=n.width,n.height instanceof Function?o=n.height.call(this,t):o=n.height,(i.width!==s||i.height!==o)&&this._outputTextures[r]&&this._outputTextures[r].dispose(t.gl),i.width=s,i.height=o,i},setParameter:function(r,t){},getParameter:function(r){},setParameters:function(r){for(var t in r)this.setParameter(t,r[t])},render:function(){},getOutput:function(r,t){if(t==null)return t=r,this._outputTextures[t];var e=this.outputs[t];if(e)return this._rendered?e.outputLastFrame?this._prevOutputTextures[t]:this._outputTextures[t]:this._rendering?(this._prevOutputTextures[t]||(this._prevOutputTextures[t]=this._compositor.allocateTexture(e.parameters||{})),this._prevOutputTextures[t]):(this.render(r),this._outputTextures[t])},removeReference:function(r){if(this._outputReferences[r]--,this._outputReferences[r]===0){var t=this.outputs[r];t.keepLastFrame?(this._prevOutputTextures[r]&&this._compositor.releaseTexture(this._prevOutputTextures[r]),this._prevOutputTextures[r]=this._outputTextures[r]):this._compositor.releaseTexture(this._outputTextures[r])}},link:function(r,t,e){this.inputLinks[r]={node:t,pin:e},t.outputLinks[e]||(t.outputLinks[e]=[]),t.outputLinks[e].push({node:this,pin:r}),this.pass.material.enableTexture(r)},clear:function(){this.inputLinks={},this.outputLinks={}},updateReference:function(r){if(!this._rendering){this._rendering=!0;for(var t in this.inputLinks){var e=this.inputLinks[t];e.node.updateReference(e.pin)}this._rendering=!1}r&&this._outputReferences[r]++},beforeFrame:function(){this._rendered=!1;for(var r in this.outputLinks)this._outputReferences[r]=0},afterFrame:function(){for(var r in this.outputLinks)if(this._outputReferences[r]>0){var t=this.outputs[r];t.keepLastFrame?(this._prevOutputTextures[r]&&this._compositor.releaseTexture(this._prevOutputTextures[r]),this._prevOutputTextures[r]=this._outputTextures[r]):this._compositor.releaseTexture(this._outputTextures[r])}}}),tn=lr.extend(function(){return{nodes:[]}},{dirty:function(){this._dirty=!0},addNode:function(r){this.nodes.indexOf(r)>=0||(this.nodes.push(r),this._dirty=!0)},removeNode:function(r){typeof r=="string"&&(r=this.getNodeByName(r));var t=this.nodes.indexOf(r);t>=0&&(this.nodes.splice(t,1),this._dirty=!0)},getNodeByName:function(r){for(var t=0;t<this.nodes.length;t++)if(this.nodes[t].name===r)return this.nodes[t]},update:function(){for(var r=0;r<this.nodes.length;r++)this.nodes[r].clear();for(var r=0;r<this.nodes.length;r++){var t=this.nodes[r];if(t.inputs){for(var e in t.inputs)if(t.inputs[e]){if(t.pass&&!t.pass.material.isUniformEnabled(e)){console.warn("Pin "+t.name+"."+e+" not used.");continue}var n=t.inputs[e],i=this.findPin(n);i?t.link(e,i.node,i.pin):console.warn(typeof n=="string"?"Node "+n+" not exist":"Pin of "+n.node+"."+n.pin+" not exist")}}}},findPin:function(r){var t;if((typeof r=="string"||r instanceof Rt)&&(r={node:r}),typeof r.node=="string")for(var e=0;e<this.nodes.length;e++){var n=this.nodes[e];n.name===r.node&&(t=n)}else t=r.node;if(t){var i=r.pin;if(i||t.outputs&&(i=Object.keys(t.outputs)[0]),t.outputs[i])return{node:t,pin:i}}}}),la=tn.extend(function(){return{_outputs:[],_texturePool:new xn,_frameBuffer:new Pr({depthBuffer:!1})}},{addNode:function(r){tn.prototype.addNode.call(this,r),r._compositor=this},render:function(r,t){if(this._dirty){this.update(),this._dirty=!1,this._outputs.length=0;for(var e=0;e<this.nodes.length;e++)this.nodes[e].outputs||this._outputs.push(this.nodes[e])}for(var e=0;e<this.nodes.length;e++)this.nodes[e].beforeFrame();for(var e=0;e<this._outputs.length;e++)this._outputs[e].updateReference();for(var e=0;e<this._outputs.length;e++)this._outputs[e].render(r,t);for(var e=0;e<this.nodes.length;e++)this.nodes[e].afterFrame()},allocateTexture:function(r){return this._texturePool.get(r)},releaseTexture:function(r){this._texturePool.put(r)},getFrameBuffer:function(){return this._frameBuffer},dispose:function(r){this._texturePool.clear(r)}}),da=Rt.extend({name:"scene",scene:null,camera:null,autoUpdateScene:!0,preZ:!1},function(){this.frameBuffer=new Pr},{render:function(r){this._rendering=!0;var t=r.gl;this.trigger("beforerender");var e;if(!this.outputs)e=r.render(this.scene,this.camera,!this.autoUpdateScene,this.preZ);else{var n=this.frameBuffer;for(var i in this.outputs){var a=this.updateParameter(i,r),s=this.outputs[i],o=this._compositor.allocateTexture(a);this._outputTextures[i]=o;var u=s.attachment||t.COLOR_ATTACHMENT0;typeof u=="string"&&(u=t[u]),n.attach(o,u)}n.bind(r);var f=r.getGLExtension("EXT_draw_buffers");if(f){var h=[];for(var u in this.outputs)u=parseInt(u),u>=t.COLOR_ATTACHMENT0&&u<=t.COLOR_ATTACHMENT0+8&&h.push(u);f.drawBuffersEXT(h)}r.saveClear(),r.clearBit=T.DEPTH_BUFFER_BIT|T.COLOR_BUFFER_BIT,e=r.render(this.scene,this.camera,!this.autoUpdateScene,this.preZ),r.restoreClear(),n.unbind(r)}this.trigger("afterrender",e),this._rendering=!1,this._rendered=!0}});const va=da;var _a=Rt.extend(function(){return{texture:null,outputs:{color:{}}}},function(){},{getOutput:function(r,t){return this.texture},beforeFrame:function(){},afterFrame:function(){}});const pa=_a;var ya=Rt.extend(function(){return{name:"",inputs:{},outputs:null,shader:"",inputLinks:{},outputLinks:{},pass:null,_prevOutputTextures:{},_outputTextures:{},_outputReferences:{},_rendering:!1,_rendered:!1,_compositor:null}},function(){var r=new Tt({fragment:this.shader});this.pass=r},{render:function(r,t){this.trigger("beforerender",r),this._rendering=!0;var e=r.gl;for(var n in this.inputLinks){var i=this.inputLinks[n],a=i.node.getOutput(r,i.pin);this.pass.setUniform(n,a)}if(!this.outputs)this.pass.outputs=null,this._compositor.getFrameBuffer().unbind(r),this.pass.render(r,t);else{this.pass.outputs={};var s={};for(var o in this.outputs){var u=this.updateParameter(o,r);isNaN(u.width)&&this.updateParameter(o,r);var f=this.outputs[o],h=this._compositor.allocateTexture(u);this._outputTextures[o]=h;var c=f.attachment||e.COLOR_ATTACHMENT0;typeof c=="string"&&(c=e[c]),s[c]=h}this._compositor.getFrameBuffer().bind(r);for(var c in s)this._compositor.getFrameBuffer().attach(s[c],c);this.pass.render(r),this._compositor.getFrameBuffer().updateMipmap(r)}for(var n in this.inputLinks){var i=this.inputLinks[n];i.node.removeReference(i.pin)}this._rendering=!1,this._rendered=!0,this.trigger("afterrender",r)},updateParameter:function(r,t){var e=this.outputs[r],n=e.parameters,i=e._parametersCopy;if(i||(i=e._parametersCopy={}),n)for(var a in n)a!=="width"&&a!=="height"&&(i[a]=n[a]);var s,o;return typeof n.width=="function"?s=n.width.call(this,t):s=n.width,typeof n.height=="function"?o=n.height.call(this,t):o=n.height,s=Math.ceil(s),o=Math.ceil(o),(i.width!==s||i.height!==o)&&this._outputTextures[r]&&this._outputTextures[r].dispose(t),i.width=s,i.height=o,i},setParameter:function(r,t){this.pass.setUniform(r,t)},getParameter:function(r){return this.pass.getUniform(r)},setParameters:function(r){for(var t in r)this.setParameter(t,r[t])},define:function(r,t){this.pass.material.define("fragment",r,t)},undefine:function(r){this.pass.material.undefine("fragment",r)},removeReference:function(r){if(this._outputReferences[r]--,this._outputReferences[r]===0){var t=this.outputs[r];t.keepLastFrame?(this._prevOutputTextures[r]&&this._compositor.releaseTexture(this._prevOutputTextures[r]),this._prevOutputTextures[r]=this._outputTextures[r]):this._compositor.releaseTexture(this._outputTextures[r])}},clear:function(){Rt.prototype.clear.call(this),this.pass.material.disableTexturesAll()}});const ma=ya,ga=`@export clay.compositor.coloradjust
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float brightness : 0.0;
uniform float contrast : 1.0;
uniform float exposure : 0.0;
uniform float gamma : 1.0;
uniform float saturation : 1.0;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = clamp(tex.rgb + vec3(brightness), 0.0, 1.0);
 color = clamp( (color-vec3(0.5))*contrast+vec3(0.5), 0.0, 1.0);
 color = clamp( color * pow(2.0, exposure), 0.0, 1.0);
 color = clamp( pow(color, vec3(gamma)), 0.0, 1.0);
 float luminance = dot( color, w );
 color = mix(vec3(luminance), color, saturation);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.brightness
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float brightness : 0.0;
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = tex.rgb + vec3(brightness);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.contrast
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float contrast : 1.0;
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = (tex.rgb-vec3(0.5))*contrast+vec3(0.5);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.exposure
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float exposure : 0.0;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = tex.rgb * pow(2.0, exposure);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.gamma
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float gamma : 1.0;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = pow(tex.rgb, vec3(gamma));
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.saturation
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float saturation : 1.0;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = tex.rgb;
 float luminance = dot(color, w);
 color = mix(vec3(luminance), color, saturation);
 gl_FragColor = vec4(color, tex.a);
}
@end`,xa=`@export clay.compositor.kernel.gaussian_9
float gaussianKernel[9];
gaussianKernel[0] = 0.07;
gaussianKernel[1] = 0.09;
gaussianKernel[2] = 0.12;
gaussianKernel[3] = 0.14;
gaussianKernel[4] = 0.16;
gaussianKernel[5] = 0.14;
gaussianKernel[6] = 0.12;
gaussianKernel[7] = 0.09;
gaussianKernel[8] = 0.07;
@end
@export clay.compositor.kernel.gaussian_13
float gaussianKernel[13];
gaussianKernel[0] = 0.02;
gaussianKernel[1] = 0.03;
gaussianKernel[2] = 0.06;
gaussianKernel[3] = 0.08;
gaussianKernel[4] = 0.11;
gaussianKernel[5] = 0.13;
gaussianKernel[6] = 0.14;
gaussianKernel[7] = 0.13;
gaussianKernel[8] = 0.11;
gaussianKernel[9] = 0.08;
gaussianKernel[10] = 0.06;
gaussianKernel[11] = 0.03;
gaussianKernel[12] = 0.02;
@end
@export clay.compositor.gaussian_blur
#define SHADER_NAME gaussian_blur
uniform sampler2D texture;varying vec2 v_Texcoord;
uniform float blurSize : 2.0;
uniform vec2 textureSize : [512.0, 512.0];
uniform float blurDir : 0.0;
@import clay.util.rgbm
@import clay.util.clamp_sample
void main (void)
{
 @import clay.compositor.kernel.gaussian_9
 vec2 off = blurSize / textureSize;
 off *= vec2(1.0 - blurDir, blurDir);
 vec4 sum = vec4(0.0);
 float weightAll = 0.0;
 for (int i = 0; i < 9; i++) {
 float w = gaussianKernel[i];
 vec4 texel = decodeHDR(clampSample(texture, v_Texcoord + float(i - 4) * off));
 sum += texel * w;
 weightAll += w;
 }
 gl_FragColor = encodeHDR(sum / max(weightAll, 0.01));
}
@end
`,Ea=`@export clay.compositor.hdr.log_lum
varying vec2 v_Texcoord;
uniform sampler2D texture;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
@import clay.util.rgbm
void main()
{
 vec4 tex = decodeHDR(texture2D(texture, v_Texcoord));
 float luminance = dot(tex.rgb, w);
 luminance = log(luminance + 0.001);
 gl_FragColor = encodeHDR(vec4(vec3(luminance), 1.0));
}
@end
@export clay.compositor.hdr.lum_adaption
varying vec2 v_Texcoord;
uniform sampler2D adaptedLum;
uniform sampler2D currentLum;
uniform float frameTime : 0.02;
@import clay.util.rgbm
void main()
{
 float fAdaptedLum = decodeHDR(texture2D(adaptedLum, vec2(0.5, 0.5))).r;
 float fCurrentLum = exp(encodeHDR(texture2D(currentLum, vec2(0.5, 0.5))).r);
 fAdaptedLum += (fCurrentLum - fAdaptedLum) * (1.0 - pow(0.98, 30.0 * frameTime));
 gl_FragColor = encodeHDR(vec4(vec3(fAdaptedLum), 1.0));
}
@end
@export clay.compositor.lum
varying vec2 v_Texcoord;
uniform sampler2D texture;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord );
 float luminance = dot(tex.rgb, w);
 gl_FragColor = vec4(vec3(luminance), 1.0);
}
@end`,Ta=`
@export clay.compositor.lut
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform sampler2D lookup;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 float blueColor = tex.b * 63.0;
 vec2 quad1;
 quad1.y = floor(floor(blueColor) / 8.0);
 quad1.x = floor(blueColor) - (quad1.y * 8.0);
 vec2 quad2;
 quad2.y = floor(ceil(blueColor) / 8.0);
 quad2.x = ceil(blueColor) - (quad2.y * 8.0);
 vec2 texPos1;
 texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.r);
 texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.g);
 vec2 texPos2;
 texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.r);
 texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.g);
 vec4 newColor1 = texture2D(lookup, texPos1);
 vec4 newColor2 = texture2D(lookup, texPos2);
 vec4 newColor = mix(newColor1, newColor2, fract(blueColor));
 gl_FragColor = vec4(newColor.rgb, tex.w);
}
@end`,Aa=`@export clay.compositor.vignette
#define OUTPUT_ALPHA
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float darkness: 1;
uniform float offset: 1;
@import clay.util.rgbm
void main()
{
 vec4 texel = decodeHDR(texture2D(texture, v_Texcoord));
 gl_FragColor.rgb = texel.rgb;
 vec2 uv = (v_Texcoord - vec2(0.5)) * vec2(offset);
 gl_FragColor = encodeHDR(vec4(mix(texel.rgb, vec3(1.0 - darkness), dot(uv, uv)), texel.a));
}
@end`,Ra=`@export clay.compositor.output
#define OUTPUT_ALPHA
varying vec2 v_Texcoord;
uniform sampler2D texture;
@import clay.util.rgbm
void main()
{
 vec4 tex = decodeHDR(texture2D(texture, v_Texcoord));
 gl_FragColor.rgb = tex.rgb;
#ifdef OUTPUT_ALPHA
 gl_FragColor.a = tex.a;
#else
 gl_FragColor.a = 1.0;
#endif
 gl_FragColor = encodeHDR(gl_FragColor);
#ifdef PREMULTIPLY_ALPHA
 gl_FragColor.rgb *= gl_FragColor.a;
#endif
}
@end`,Sa=`@export clay.compositor.bright
uniform sampler2D texture;
uniform float threshold : 1;
uniform float scale : 1.0;
uniform vec2 textureSize: [512, 512];
varying vec2 v_Texcoord;
const vec3 lumWeight = vec3(0.2125, 0.7154, 0.0721);
@import clay.util.rgbm
vec4 median(vec4 a, vec4 b, vec4 c)
{
 return a + b + c - min(min(a, b), c) - max(max(a, b), c);
}
void main()
{
 vec4 texel = decodeHDR(texture2D(texture, v_Texcoord));
#ifdef ANTI_FLICKER
 vec3 d = 1.0 / textureSize.xyx * vec3(1.0, 1.0, 0.0);
 vec4 s1 = decodeHDR(texture2D(texture, v_Texcoord - d.xz));
 vec4 s2 = decodeHDR(texture2D(texture, v_Texcoord + d.xz));
 vec4 s3 = decodeHDR(texture2D(texture, v_Texcoord - d.zy));
 vec4 s4 = decodeHDR(texture2D(texture, v_Texcoord + d.zy));
 texel = median(median(texel, s1, s2), s3, s4);
#endif
 float lum = dot(texel.rgb , lumWeight);
 vec4 color;
 if (lum > threshold && texel.a > 0.0)
 {
 color = vec4(texel.rgb * scale, texel.a * scale);
 }
 else
 {
 color = vec4(0.0);
 }
 gl_FragColor = encodeHDR(color);
}
@end
`,Ma=`@export clay.compositor.downsample
uniform sampler2D texture;
uniform vec2 textureSize : [512, 512];
varying vec2 v_Texcoord;
@import clay.util.rgbm
float brightness(vec3 c)
{
 return max(max(c.r, c.g), c.b);
}
@import clay.util.clamp_sample
void main()
{
 vec4 d = vec4(-1.0, -1.0, 1.0, 1.0) / textureSize.xyxy;
#ifdef ANTI_FLICKER
 vec3 s1 = decodeHDR(clampSample(texture, v_Texcoord + d.xy)).rgb;
 vec3 s2 = decodeHDR(clampSample(texture, v_Texcoord + d.zy)).rgb;
 vec3 s3 = decodeHDR(clampSample(texture, v_Texcoord + d.xw)).rgb;
 vec3 s4 = decodeHDR(clampSample(texture, v_Texcoord + d.zw)).rgb;
 float s1w = 1.0 / (brightness(s1) + 1.0);
 float s2w = 1.0 / (brightness(s2) + 1.0);
 float s3w = 1.0 / (brightness(s3) + 1.0);
 float s4w = 1.0 / (brightness(s4) + 1.0);
 float oneDivideSum = 1.0 / (s1w + s2w + s3w + s4w);
 vec4 color = vec4(
 (s1 * s1w + s2 * s2w + s3 * s3w + s4 * s4w) * oneDivideSum,
 1.0
 );
#else
 vec4 color = decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.xw));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.zw));
 color *= 0.25;
#endif
 gl_FragColor = encodeHDR(color);
}
@end`,wa=`
@export clay.compositor.upsample
#define HIGH_QUALITY
uniform sampler2D texture;
uniform vec2 textureSize : [512, 512];
uniform float sampleScale: 0.5;
varying vec2 v_Texcoord;
@import clay.util.rgbm
@import clay.util.clamp_sample
void main()
{
#ifdef HIGH_QUALITY
 vec4 d = vec4(1.0, 1.0, -1.0, 0.0) / textureSize.xyxy * sampleScale;
 vec4 s;
 s = decodeHDR(clampSample(texture, v_Texcoord - d.xy));
 s += decodeHDR(clampSample(texture, v_Texcoord - d.wy)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord - d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zw)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord )) * 4.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xw)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.wy)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 gl_FragColor = encodeHDR(s / 16.0);
#else
 vec4 d = vec4(-1.0, -1.0, +1.0, +1.0) / textureSize.xyxy;
 vec4 s;
 s = decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xw));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zw));
 gl_FragColor = encodeHDR(s / 4.0);
#endif
}
@end`,Ca=`@export clay.compositor.hdr.composite
#define TONEMAPPING
uniform sampler2D texture;
#ifdef BLOOM_ENABLED
uniform sampler2D bloom;
#endif
#ifdef LENSFLARE_ENABLED
uniform sampler2D lensflare;
uniform sampler2D lensdirt;
#endif
#ifdef LUM_ENABLED
uniform sampler2D lum;
#endif
#ifdef LUT_ENABLED
uniform sampler2D lut;
#endif
#ifdef COLOR_CORRECTION
uniform float brightness : 0.0;
uniform float contrast : 1.0;
uniform float saturation : 1.0;
#endif
#ifdef VIGNETTE
uniform float vignetteDarkness: 1.0;
uniform float vignetteOffset: 1.0;
#endif
uniform float exposure : 1.0;
uniform float bloomIntensity : 0.25;
uniform float lensflareIntensity : 1;
varying vec2 v_Texcoord;
@import clay.util.srgb
vec3 ACESToneMapping(vec3 color)
{
 const float A = 2.51;
 const float B = 0.03;
 const float C = 2.43;
 const float D = 0.59;
 const float E = 0.14;
 return (color * (A * color + B)) / (color * (C * color + D) + E);
}
float eyeAdaption(float fLum)
{
 return mix(0.2, fLum, 0.5);
}
#ifdef LUT_ENABLED
vec3 lutTransform(vec3 color) {
 float blueColor = color.b * 63.0;
 vec2 quad1;
 quad1.y = floor(floor(blueColor) / 8.0);
 quad1.x = floor(blueColor) - (quad1.y * 8.0);
 vec2 quad2;
 quad2.y = floor(ceil(blueColor) / 8.0);
 quad2.x = ceil(blueColor) - (quad2.y * 8.0);
 vec2 texPos1;
 texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.r);
 texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.g);
 vec2 texPos2;
 texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.r);
 texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.g);
 vec4 newColor1 = texture2D(lut, texPos1);
 vec4 newColor2 = texture2D(lut, texPos2);
 vec4 newColor = mix(newColor1, newColor2, fract(blueColor));
 return newColor.rgb;
}
#endif
@import clay.util.rgbm
void main()
{
 vec4 texel = vec4(0.0);
 vec4 originalTexel = vec4(0.0);
#ifdef TEXTURE_ENABLED
 texel = decodeHDR(texture2D(texture, v_Texcoord));
 originalTexel = texel;
#endif
#ifdef BLOOM_ENABLED
 vec4 bloomTexel = decodeHDR(texture2D(bloom, v_Texcoord));
 texel.rgb += bloomTexel.rgb * bloomIntensity;
 texel.a += bloomTexel.a * bloomIntensity;
#endif
#ifdef LENSFLARE_ENABLED
 texel += decodeHDR(texture2D(lensflare, v_Texcoord)) * texture2D(lensdirt, v_Texcoord) * lensflareIntensity;
#endif
 texel.a = min(texel.a, 1.0);
#ifdef LUM_ENABLED
 float fLum = texture2D(lum, vec2(0.5, 0.5)).r;
 float adaptedLumDest = 3.0 / (max(0.1, 1.0 + 10.0*eyeAdaption(fLum)));
 float exposureBias = adaptedLumDest * exposure;
#else
 float exposureBias = exposure;
#endif
#ifdef TONEMAPPING
 texel.rgb *= exposureBias;
 texel.rgb = ACESToneMapping(texel.rgb);
#endif
 texel = linearTosRGB(texel);
#ifdef LUT_ENABLED
 texel.rgb = lutTransform(clamp(texel.rgb,vec3(0.0),vec3(1.0)));
#endif
#ifdef COLOR_CORRECTION
 texel.rgb = clamp(texel.rgb + vec3(brightness), 0.0, 1.0);
 texel.rgb = clamp((texel.rgb - vec3(0.5))*contrast+vec3(0.5), 0.0, 1.0);
 float lum = dot(texel.rgb, vec3(0.2125, 0.7154, 0.0721));
 texel.rgb = mix(vec3(lum), texel.rgb, saturation);
#endif
#ifdef VIGNETTE
 vec2 uv = (v_Texcoord - vec2(0.5)) * vec2(vignetteOffset);
 texel.rgb = mix(texel.rgb, vec3(1.0 - vignetteDarkness), dot(uv, uv));
#endif
 gl_FragColor = encodeHDR(texel);
#ifdef DEBUG
 #if DEBUG == 1
 gl_FragColor = encodeHDR(decodeHDR(texture2D(texture, v_Texcoord)));
 #elif DEBUG == 2
 gl_FragColor = encodeHDR(decodeHDR(texture2D(bloom, v_Texcoord)) * bloomIntensity);
 #elif DEBUG == 3
 gl_FragColor = encodeHDR(decodeHDR(texture2D(lensflare, v_Texcoord) * lensflareIntensity));
 #endif
#endif
 if (originalTexel.a <= 0.01 && gl_FragColor.a > 1e-5) {
 gl_FragColor.a = dot(gl_FragColor.rgb, vec3(0.2125, 0.7154, 0.0721));
 }
#ifdef PREMULTIPLY_ALPHA
 gl_FragColor.rgb *= gl_FragColor.a;
#endif
}
@end`,Na=`@export clay.compositor.lensflare
#define SAMPLE_NUMBER 8
uniform sampler2D texture;
uniform sampler2D lenscolor;
uniform vec2 textureSize : [512, 512];
uniform float dispersal : 0.3;
uniform float haloWidth : 0.4;
uniform float distortion : 1.0;
varying vec2 v_Texcoord;
@import clay.util.rgbm
vec4 textureDistorted(
 in vec2 texcoord,
 in vec2 direction,
 in vec3 distortion
) {
 return vec4(
 decodeHDR(texture2D(texture, texcoord + direction * distortion.r)).r,
 decodeHDR(texture2D(texture, texcoord + direction * distortion.g)).g,
 decodeHDR(texture2D(texture, texcoord + direction * distortion.b)).b,
 1.0
 );
}
void main()
{
 vec2 texcoord = -v_Texcoord + vec2(1.0); vec2 textureOffset = 1.0 / textureSize;
 vec2 ghostVec = (vec2(0.5) - texcoord) * dispersal;
 vec2 haloVec = normalize(ghostVec) * haloWidth;
 vec3 distortion = vec3(-textureOffset.x * distortion, 0.0, textureOffset.x * distortion);
 vec4 result = vec4(0.0);
 for (int i = 0; i < SAMPLE_NUMBER; i++)
 {
 vec2 offset = fract(texcoord + ghostVec * float(i));
 float weight = length(vec2(0.5) - offset) / length(vec2(0.5));
 weight = pow(1.0 - weight, 10.0);
 result += textureDistorted(offset, normalize(ghostVec), distortion) * weight;
 }
 result *= texture2D(lenscolor, vec2(length(vec2(0.5) - texcoord)) / length(vec2(0.5)));
 float weight = length(vec2(0.5) - fract(texcoord + haloVec)) / length(vec2(0.5));
 weight = pow(1.0 - weight, 10.0);
 vec2 offset = fract(texcoord + haloVec);
 result += textureDistorted(offset, normalize(ghostVec), distortion) * weight;
 gl_FragColor = result;
}
@end`,La=`@export clay.compositor.blend
#define SHADER_NAME blend
#ifdef TEXTURE1_ENABLED
uniform sampler2D texture1;
uniform float weight1 : 1.0;
#endif
#ifdef TEXTURE2_ENABLED
uniform sampler2D texture2;
uniform float weight2 : 1.0;
#endif
#ifdef TEXTURE3_ENABLED
uniform sampler2D texture3;
uniform float weight3 : 1.0;
#endif
#ifdef TEXTURE4_ENABLED
uniform sampler2D texture4;
uniform float weight4 : 1.0;
#endif
#ifdef TEXTURE5_ENABLED
uniform sampler2D texture5;
uniform float weight5 : 1.0;
#endif
#ifdef TEXTURE6_ENABLED
uniform sampler2D texture6;
uniform float weight6 : 1.0;
#endif
varying vec2 v_Texcoord;
@import clay.util.rgbm
void main()
{
 vec4 tex = vec4(0.0);
#ifdef TEXTURE1_ENABLED
 tex += decodeHDR(texture2D(texture1, v_Texcoord)) * weight1;
#endif
#ifdef TEXTURE2_ENABLED
 tex += decodeHDR(texture2D(texture2, v_Texcoord)) * weight2;
#endif
#ifdef TEXTURE3_ENABLED
 tex += decodeHDR(texture2D(texture3, v_Texcoord)) * weight3;
#endif
#ifdef TEXTURE4_ENABLED
 tex += decodeHDR(texture2D(texture4, v_Texcoord)) * weight4;
#endif
#ifdef TEXTURE5_ENABLED
 tex += decodeHDR(texture2D(texture5, v_Texcoord)) * weight5;
#endif
#ifdef TEXTURE6_ENABLED
 tex += decodeHDR(texture2D(texture6, v_Texcoord)) * weight6;
#endif
 gl_FragColor = encodeHDR(tex);
}
@end`,Ia=`@export clay.compositor.fxaa
uniform sampler2D texture;
uniform vec4 viewport : VIEWPORT;
varying vec2 v_Texcoord;
#define FXAA_REDUCE_MIN (1.0/128.0)
#define FXAA_REDUCE_MUL (1.0/8.0)
#define FXAA_SPAN_MAX 8.0
@import clay.util.rgbm
void main()
{
 vec2 resolution = 1.0 / viewport.zw;
 vec3 rgbNW = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( -1.0, -1.0 ) ) * resolution ) ).xyz;
 vec3 rgbNE = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( 1.0, -1.0 ) ) * resolution ) ).xyz;
 vec3 rgbSW = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( -1.0, 1.0 ) ) * resolution ) ).xyz;
 vec3 rgbSE = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( 1.0, 1.0 ) ) * resolution ) ).xyz;
 vec4 rgbaM = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution ) );
 vec3 rgbM = rgbaM.xyz;
 float opacity = rgbaM.w;
 vec3 luma = vec3( 0.299, 0.587, 0.114 );
 float lumaNW = dot( rgbNW, luma );
 float lumaNE = dot( rgbNE, luma );
 float lumaSW = dot( rgbSW, luma );
 float lumaSE = dot( rgbSE, luma );
 float lumaM = dot( rgbM, luma );
 float lumaMin = min( lumaM, min( min( lumaNW, lumaNE ), min( lumaSW, lumaSE ) ) );
 float lumaMax = max( lumaM, max( max( lumaNW, lumaNE) , max( lumaSW, lumaSE ) ) );
 vec2 dir;
 dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
 dir.y = ((lumaNW + lumaSW) - (lumaNE + lumaSE));
 float dirReduce = max( ( lumaNW + lumaNE + lumaSW + lumaSE ) * ( 0.25 * FXAA_REDUCE_MUL ), FXAA_REDUCE_MIN );
 float rcpDirMin = 1.0 / ( min( abs( dir.x ), abs( dir.y ) ) + dirReduce );
 dir = min( vec2( FXAA_SPAN_MAX, FXAA_SPAN_MAX),
 max( vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
 dir * rcpDirMin)) * resolution;
 vec3 rgbA = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * ( 1.0 / 3.0 - 0.5 ) ) ).xyz;
 rgbA += decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * ( 2.0 / 3.0 - 0.5 ) ) ).xyz;
 rgbA *= 0.5;
 vec3 rgbB = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * -0.5 ) ).xyz;
 rgbB += decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * 0.5 ) ).xyz;
 rgbB *= 0.25;
 rgbB += rgbA * 0.5;
 float lumaB = dot( rgbB, luma );
 if ( ( lumaB < lumaMin ) || ( lumaB > lumaMax ) )
 {
 gl_FragColor = vec4( rgbA, opacity );
 }
 else {
 gl_FragColor = vec4( rgbB, opacity );
 }
}
@end`;function Da(r){r.import(ga),r.import(xa),r.import(Ea),r.import(Ta),r.import(Aa),r.import(Ra),r.import(Sa),r.import(Ma),r.import(wa),r.import(Ca),r.import(Na),r.import(La),r.import(Ia)}Da(V);var Pa=/^#source\((.*?)\)/;function rs(r,t){var e=new la;t=t||{};var n={textures:{},parameters:{}},i=function(o,u){for(var f=0;f<r.nodes.length;f++){var h=r.nodes[f],c=Oa(h,n,t);c&&e.addNode(c)}};for(var a in r.parameters){var s=r.parameters[a];n.parameters[a]=xe(s)}return Ua(r,n,t,function(o){n.textures=o,i()}),e}function Oa(r,t,e){var n=r.type||"filter",i,a,s;if(n==="filter"){var o=r.shader.trim(),u=Pa.exec(o);if(u?i=V.source(u[1].trim()):o.charAt(0)==="#"&&(i=t.shaders[o.substr(1)]),i||(i=o),!i)return}if(r.inputs){a={};for(var f in r.inputs)typeof r.inputs[f]=="string"?a[f]=r.inputs[f]:a[f]={node:r.inputs[f].node,pin:r.inputs[f].pin}}if(r.outputs){s={};for(var f in r.outputs){var h=r.outputs[f];s[f]={},h.attachment!=null&&(s[f].attachment=h.attachment),h.keepLastFrame!=null&&(s[f].keepLastFrame=h.keepLastFrame),h.outputLastFrame!=null&&(s[f].outputLastFrame=h.outputLastFrame),h.parameters&&(s[f].parameters=xe(h.parameters))}}var c;if(n==="scene"?c=new va({name:r.name,scene:e.scene,camera:e.camera,outputs:s}):n==="texture"?c=new pa({name:r.name,outputs:s}):c=new ma({name:r.name,shader:i,inputs:a,outputs:s}),c){if(r.parameters)for(var f in r.parameters){var d=r.parameters[f];typeof d=="string"?(d=d.trim(),d.charAt(0)==="#"?d=t.textures[d.substr(1)]:c.on("beforerender",Fa(f,En(d)))):typeof d=="function"&&c.on("beforerender",d),c.setParameter(f,d)}if(r.defines&&c.pass)for(var f in r.defines){var d=r.defines[f];c.pass.material.define("fragment",f,d)}}return c}function ba(r,t){return r}function Ba(r,t){return t}function xe(r){var t={};if(!r)return t;["type","minFilter","magFilter","wrapS","wrapT","flipY","useMipmap"].forEach(function(n){var i=r[n];i!=null&&(typeof i=="string"&&(i=N[i]),t[n]=i)});var e=r.scale||1;return["width","height"].forEach(function(n){if(r[n]!=null){var i=r[n];typeof i=="string"?(i=i.trim(),t[n]=Ha(n,En(i),e)):t[n]=i}}),t.width||(t.width=ba),t.height||(t.height=Ba),r.useMipmap!=null&&(t.useMipmap=r.useMipmap),t}function Ua(r,t,e,n){if(!r.textures){n({});return}var i={},a=0,s=!1,o=e.textureRootPath;ar.each(r.textures,function(u,f){var h,c=u.path,d=xe(u.parameters);if(Array.isArray(c)&&c.length===6)o&&(c=c.map(function(l){return ar.relative2absolute(l,o)})),h=new rt(d);else if(typeof c=="string")o&&(c=ar.relative2absolute(c,o)),h=new gr(d);else return;h.load(c),a++,h.once("success",function(){i[f]=h,a--,a===0&&(n(i),s=!0)})}),a===0&&!s&&n(i)}function Fa(r,t){return function(e){var n=e.getDevicePixelRatio(),i=e.getWidth(),a=e.getHeight(),s=t(i,a,n);this.setParameter(r,s)}}function Ha(r,t,e){return e=e||1,function(n){var i=n.getDevicePixelRatio(),a=n.getWidth()*e,s=n.getHeight()*e;return t(a,s,i)}}function En(r){var t=/^expr\((.*)\)$/.exec(r);if(t)try{var e=new Function("width","height","dpr","return "+t[1]);return e(1,1),e}catch{throw new Error("Invalid expression.")}}export{rs as $,ka as A,mr as B,_i as C,Xa as D,Tt as E,_n as F,kr as G,Pr as H,zr as I,xa as J,Ta as K,Ra as L,St as M,Kr as N,mn as O,yn as P,ti as Q,Jt as R,V as S,gr as T,Sa as U,E as V,Ma as W,wa as X,Ca as Y,La as Z,Ia as _,an as a,Vr as a0,ye as b,hn as c,N as d,za as e,qa as f,Ya as g,vr as h,Ka as i,Za as j,ja as k,Ja as l,C as m,si as n,de as o,Zn as p,Va as q,Wa as r,ra as s,ki as t,$a as u,Ga as v,Mn as w,lr as x,Qa as y,Vt as z};
