(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fo="160",Bl=0,Do=1,zl=2,Pc=1,Lc=2,Mn=3,Fn=0,Ue=1,Sn=2,Nn=0,bi=1,$r=2,Uo=3,Fo=4,Gl=5,Xn=100,Hl=101,Vl=102,Oo=103,Bo=104,kl=200,Wl=201,ql=202,Xl=203,Jr=204,Qr=205,Yl=206,jl=207,Zl=208,Kl=209,$l=210,Jl=211,Ql=212,th=213,eh=214,nh=0,ih=1,sh=2,Vs=3,rh=4,oh=5,ah=6,ch=7,Ic=0,lh=1,hh=2,Dn=0,uh=1,dh=2,fh=3,Nc=4,ph=5,mh=6,Dc=300,Ci=301,Ri=302,to=303,eo=304,Zs=306,no=1e3,Qe=1001,io=1002,Ie=1003,zo=1004,hr=1005,qe=1006,gh=1007,$i=1008,Un=1009,vh=1010,_h=1011,po=1012,Uc=1013,Ln=1014,In=1015,Ji=1016,Fc=1017,Oc=1018,Zn=1020,xh=1021,tn=1023,yh=1024,Mh=1025,Kn=1026,Pi=1027,Sh=1028,Bc=1029,Eh=1030,zc=1031,Gc=1033,ur=33776,dr=33777,fr=33778,pr=33779,Go=35840,Ho=35841,Vo=35842,ko=35843,Hc=36196,Wo=37492,qo=37496,Xo=37808,Yo=37809,jo=37810,Zo=37811,Ko=37812,$o=37813,Jo=37814,Qo=37815,ta=37816,ea=37817,na=37818,ia=37819,sa=37820,ra=37821,mr=36492,oa=36494,aa=36495,wh=36283,ca=36284,la=36285,ha=36286,Vc=3e3,$n=3001,bh=3200,Th=3201,kc=0,Ah=1,Ye="",ye="srgb",wn="srgb-linear",mo="display-p3",Ks="display-p3-linear",ks="linear",ie="srgb",Ws="rec709",qs="p3",ni=7680,ua=519,Ch=512,Rh=513,Ph=514,Wc=515,Lh=516,Ih=517,Nh=518,Dh=519,da=35044,fa="300 es",so=1035,En=2e3,Xs=2001;class Ii{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gr=Math.PI/180,ro=180/Math.PI;function Ni(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[r&255]+we[r>>8&255]+we[r>>16&255]+we[r>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function Ae(r,t,e){return Math.max(t,Math.min(e,r))}function Uh(r,t){return(r%t+t)%t}function vr(r,t,e){return(1-e)*r+e*t}function pa(r){return(r&r-1)===0&&r!==0}function oo(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Oi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ne(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ht{constructor(t=0,e=0){ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,n,i,s,o,a,c,l){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l)}set(t,e,n,i,s,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],v=i[0],m=i[3],f=i[6],_=i[1],x=i[4],M=i[7],R=i[2],b=i[5],A=i[8];return s[0]=o*v+a*_+c*R,s[3]=o*m+a*x+c*b,s[6]=o*f+a*M+c*A,s[1]=l*v+h*_+d*R,s[4]=l*m+h*x+d*b,s[7]=l*f+h*M+d*A,s[2]=u*v+p*_+g*R,s[5]=u*m+p*x+g*b,s[8]=u*f+p*M+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*s,p=l*s-o*c,g=e*d+n*u+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(i*l-h*n)*v,t[2]=(a*n-i*o)*v,t[3]=u*v,t[4]=(h*e-i*c)*v,t[5]=(i*s-a*e)*v,t[6]=p*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(_r.makeScale(t,e)),this}rotate(t){return this.premultiply(_r.makeRotation(-t)),this}translate(t,e){return this.premultiply(_r.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const _r=new qt;function qc(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ys(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Fh(){const r=Ys("canvas");return r.style.display="block",r}const ma={};function Yi(r){r in ma||(ma[r]=!0,console.warn(r))}const ga=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),va=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),cs={[wn]:{transfer:ks,primaries:Ws,toReference:r=>r,fromReference:r=>r},[ye]:{transfer:ie,primaries:Ws,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Ks]:{transfer:ks,primaries:qs,toReference:r=>r.applyMatrix3(va),fromReference:r=>r.applyMatrix3(ga)},[mo]:{transfer:ie,primaries:qs,toReference:r=>r.convertSRGBToLinear().applyMatrix3(va),fromReference:r=>r.applyMatrix3(ga).convertLinearToSRGB()}},Oh=new Set([wn,Ks]),Jt={enabled:!0,_workingColorSpace:wn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Oh.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=cs[t].toReference,i=cs[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return cs[r].primaries},getTransfer:function(r){return r===Ye?ks:cs[r].transfer}};function Ti(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function xr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ii;class Xc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ii===void 0&&(ii=Ys("canvas")),ii.width=t.width,ii.height=t.height;const n=ii.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ii}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ys("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Ti(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ti(e[n]/255)*255):e[n]=Ti(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Bh=0;class Yc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=Ni(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(yr(i[o].image)):s.push(yr(i[o]))}else s=yr(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function yr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Xc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zh=0;class Ge extends Ii{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,n=Qe,i=Qe,s=qe,o=$i,a=tn,c=Un,l=Ge.DEFAULT_ANISOTROPY,h=Ye){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=Ni(),this.name="",this.source=new Yc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Yi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===$n?ye:Ye),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case no:t.x=t.x-Math.floor(t.x);break;case Qe:t.x=t.x<0?0:1;break;case io:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case no:t.y=t.y-Math.floor(t.y);break;case Qe:t.y=t.y<0?0:1;break;case io:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Yi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ye?$n:Vc}set encoding(t){Yi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===$n?ye:Ye}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=Dc;Ge.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,n=0,i=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],p=c[5],g=c[9],v=c[2],m=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,M=(p+1)/2,R=(f+1)/2,b=(h+u)/4,A=(d+v)/4,U=(g+m)/4;return x>M&&x>R?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=b/n,s=A/n):M>R?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=b/i,s=U/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=A/s,i=U/s),this.set(n,i,s,e),this}let _=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-v)/_,this.z=(u-h)/_,this.w=Math.acos((l+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gh extends Ii{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Yi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===$n?ye:Ye),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qe,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ge(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Yc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends Gh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class jc extends Ge{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=Qe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hh extends Ge{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=Qe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let ss=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const u=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(d!==v||c!==u||l!==p||h!==g){let m=1-a;const f=c*u+l*p+h*g+d*v,_=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const R=Math.sqrt(x),b=Math.atan2(R,f*_);m=Math.sin(m*b)/R,a=Math.sin(a*b)/R}const M=a*_;if(c=c*m+u*M,l=l*m+p*M,h=h*m+g*M,d=d*m+v*M,m===1-a){const R=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=R,l*=R,h*=R,d*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=s[o],u=s[o+1],p=s[o+2],g=s[o+3];return t[e]=a*g+h*d+c*p-l*u,t[e+1]=c*g+h*u+l*d-a*p,t[e+2]=l*g+h*p+a*u-c*d,t[e+3]=h*g-a*d-c*u-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),d=a(s/2),u=c(n/2),p=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"YZX":this._x=u*h*d+l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d-u*p*g;break;case"XZY":this._x=u*h*d-l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(o-i)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(h-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+l)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(s-l)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-i)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class O{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_a.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_a.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-s*i),d=2*(s*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-s*d,this.z=i+c*d+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Mr.copy(this).projectOnVector(t),this.sub(Mr)}reflect(t){return this.sub(Mr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mr=new O,_a=new ss;class rs{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,je):je.fromBufferAttribute(s,o),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ls.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ls.copy(n.boundingBox)),ls.applyMatrix4(t.matrixWorld),this.union(ls)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bi),hs.subVectors(this.max,Bi),si.subVectors(t.a,Bi),ri.subVectors(t.b,Bi),oi.subVectors(t.c,Bi),bn.subVectors(ri,si),Tn.subVectors(oi,ri),zn.subVectors(si,oi);let e=[0,-bn.z,bn.y,0,-Tn.z,Tn.y,0,-zn.z,zn.y,bn.z,0,-bn.x,Tn.z,0,-Tn.x,zn.z,0,-zn.x,-bn.y,bn.x,0,-Tn.y,Tn.x,0,-zn.y,zn.x,0];return!Sr(e,si,ri,oi,hs)||(e=[1,0,0,0,1,0,0,0,1],!Sr(e,si,ri,oi,hs))?!1:(us.crossVectors(bn,Tn),e=[us.x,us.y,us.z],Sr(e,si,ri,oi,hs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const un=[new O,new O,new O,new O,new O,new O,new O,new O],je=new O,ls=new rs,si=new O,ri=new O,oi=new O,bn=new O,Tn=new O,zn=new O,Bi=new O,hs=new O,us=new O,Gn=new O;function Sr(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Gn.fromArray(r,s);const a=i.x*Math.abs(Gn.x)+i.y*Math.abs(Gn.y)+i.z*Math.abs(Gn.z),c=t.dot(Gn),l=e.dot(Gn),h=n.dot(Gn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Vh=new rs,zi=new O,Er=new O;let $s=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Vh.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zi.subVectors(t,this.center);const e=zi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(zi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Er.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zi.copy(t.center).add(Er)),this.expandByPoint(zi.copy(t.center).sub(Er))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const dn=new O,wr=new O,ds=new O,An=new O,br=new O,fs=new O,Tr=new O;let Zc=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(dn.copy(this.origin).addScaledVector(this.direction,e),dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){wr.copy(t).add(e).multiplyScalar(.5),ds.copy(e).sub(t).normalize(),An.copy(this.origin).sub(wr);const s=t.distanceTo(e)*.5,o=-this.direction.dot(ds),a=An.dot(this.direction),c=-An.dot(ds),l=An.lengthSq(),h=Math.abs(1-o*o);let d,u,p,g;if(h>0)if(d=o*c-a,u=o*a-c,g=s*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,p=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-s,-c),s),p=u*(u+2*c)+l):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+u*(u+2*c)+l);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(wr).addScaledVector(ds,u),p}intersectSphere(t,e){dn.subVectors(t.center,this.origin);const n=dn.dot(this.direction),i=dn.dot(dn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,dn)!==null}intersectTriangle(t,e,n,i,s){br.subVectors(e,t),fs.subVectors(n,t),Tr.crossVectors(br,fs);let o=this.direction.dot(Tr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;An.subVectors(this.origin,t);const c=a*this.direction.dot(fs.crossVectors(An,fs));if(c<0)return null;const l=a*this.direction.dot(br.cross(An));if(l<0||c+l>o)return null;const h=-a*An.dot(Tr);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class he{constructor(t,e,n,i,s,o,a,c,l,h,d,u,p,g,v,m){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l,h,d,u,p,g,v,m)}set(t,e,n,i,s,o,a,c,l,h,d,u,p,g,v,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ai.setFromMatrixColumn(t,0).length(),s=1/ai.setFromMatrixColumn(t,1).length(),o=1/ai.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=o*h,p=o*d,g=a*h,v=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=p+g*l,e[5]=u-v*l,e[9]=-a*c,e[2]=v-u*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const u=c*h,p=c*d,g=l*h,v=l*d;e[0]=u+v*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=v+u*a,e[10]=o*c}else if(t.order==="ZXY"){const u=c*h,p=c*d,g=l*h,v=l*d;e[0]=u-v*a,e[4]=-o*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=v-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const u=o*h,p=o*d,g=a*h,v=a*d;e[0]=c*h,e[4]=g*l-p,e[8]=u*l+v,e[1]=c*d,e[5]=v*l+u,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const u=o*c,p=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=v-u*d,e[8]=g*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*d+g,e[10]=u-v*d}else if(t.order==="XZY"){const u=o*c,p=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+v,e[5]=o*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kh,t,Wh)}lookAt(t,e,n){const i=this.elements;return Be.subVectors(t,e),Be.lengthSq()===0&&(Be.z=1),Be.normalize(),Cn.crossVectors(n,Be),Cn.lengthSq()===0&&(Math.abs(n.z)===1?Be.x+=1e-4:Be.z+=1e-4,Be.normalize(),Cn.crossVectors(n,Be)),Cn.normalize(),ps.crossVectors(Be,Cn),i[0]=Cn.x,i[4]=ps.x,i[8]=Be.x,i[1]=Cn.y,i[5]=ps.y,i[9]=Be.y,i[2]=Cn.z,i[6]=ps.z,i[10]=Be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],v=n[6],m=n[10],f=n[14],_=n[3],x=n[7],M=n[11],R=n[15],b=i[0],A=i[4],U=i[8],S=i[12],E=i[1],F=i[5],z=i[9],B=i[13],P=i[2],I=i[6],L=i[10],Z=i[14],V=i[3],k=i[7],K=i[11],Q=i[15];return s[0]=o*b+a*E+c*P+l*V,s[4]=o*A+a*F+c*I+l*k,s[8]=o*U+a*z+c*L+l*K,s[12]=o*S+a*B+c*Z+l*Q,s[1]=h*b+d*E+u*P+p*V,s[5]=h*A+d*F+u*I+p*k,s[9]=h*U+d*z+u*L+p*K,s[13]=h*S+d*B+u*Z+p*Q,s[2]=g*b+v*E+m*P+f*V,s[6]=g*A+v*F+m*I+f*k,s[10]=g*U+v*z+m*L+f*K,s[14]=g*S+v*B+m*Z+f*Q,s[3]=_*b+x*E+M*P+R*V,s[7]=_*A+x*F+M*I+R*k,s[11]=_*U+x*z+M*L+R*K,s[15]=_*S+x*B+M*Z+R*Q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],v=t[7],m=t[11],f=t[15];return g*(+s*c*d-i*l*d-s*a*u+n*l*u+i*a*p-n*c*p)+v*(+e*c*p-e*l*u+s*o*u-i*o*p+i*l*h-s*c*h)+m*(+e*l*d-e*a*p-s*o*d+n*o*p+s*a*h-n*l*h)+f*(-i*a*h-e*c*d+e*a*u+i*o*d-n*o*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],v=t[13],m=t[14],f=t[15],_=d*m*l-v*u*l+v*c*p-a*m*p-d*c*f+a*u*f,x=g*u*l-h*m*l-g*c*p+o*m*p+h*c*f-o*u*f,M=h*v*l-g*d*l+g*a*p-o*v*p-h*a*f+o*d*f,R=g*d*c-h*v*c-g*a*u+o*v*u+h*a*m-o*d*m,b=e*_+n*x+i*M+s*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=_*A,t[1]=(v*u*s-d*m*s-v*i*p+n*m*p+d*i*f-n*u*f)*A,t[2]=(a*m*s-v*c*s+v*i*l-n*m*l-a*i*f+n*c*f)*A,t[3]=(d*c*s-a*u*s-d*i*l+n*u*l+a*i*p-n*c*p)*A,t[4]=x*A,t[5]=(h*m*s-g*u*s+g*i*p-e*m*p-h*i*f+e*u*f)*A,t[6]=(g*c*s-o*m*s-g*i*l+e*m*l+o*i*f-e*c*f)*A,t[7]=(o*u*s-h*c*s+h*i*l-e*u*l-o*i*p+e*c*p)*A,t[8]=M*A,t[9]=(g*d*s-h*v*s-g*n*p+e*v*p+h*n*f-e*d*f)*A,t[10]=(o*v*s-g*a*s+g*n*l-e*v*l-o*n*f+e*a*f)*A,t[11]=(h*a*s-o*d*s-h*n*l+e*d*l+o*n*p-e*a*p)*A,t[12]=R*A,t[13]=(h*v*i-g*d*i+g*n*u-e*v*u-h*n*m+e*d*m)*A,t[14]=(g*a*i-o*v*i-g*n*c+e*v*c+o*n*m-e*a*m)*A,t[15]=(o*d*i-h*a*i+h*n*c-e*d*c-o*n*u+e*a*u)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,d=a+a,u=s*l,p=s*h,g=s*d,v=o*h,m=o*d,f=a*d,_=c*l,x=c*h,M=c*d,R=n.x,b=n.y,A=n.z;return i[0]=(1-(v+f))*R,i[1]=(p+M)*R,i[2]=(g-x)*R,i[3]=0,i[4]=(p-M)*b,i[5]=(1-(u+f))*b,i[6]=(m+_)*b,i[7]=0,i[8]=(g+x)*A,i[9]=(m-_)*A,i[10]=(1-(u+v))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=ai.set(i[0],i[1],i[2]).length();const o=ai.set(i[4],i[5],i[6]).length(),a=ai.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Ze.copy(this);const l=1/s,h=1/o,d=1/a;return Ze.elements[0]*=l,Ze.elements[1]*=l,Ze.elements[2]*=l,Ze.elements[4]*=h,Ze.elements[5]*=h,Ze.elements[6]*=h,Ze.elements[8]*=d,Ze.elements[9]*=d,Ze.elements[10]*=d,e.setFromRotationMatrix(Ze),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=En){const c=this.elements,l=2*s/(e-t),h=2*s/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let p,g;if(a===En)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Xs)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=En){const c=this.elements,l=1/(e-t),h=1/(n-i),d=1/(o-s),u=(e+t)*l,p=(n+i)*h;let g,v;if(a===En)g=(o+s)*d,v=-2*d;else if(a===Xs)g=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ai=new O,Ze=new he,kh=new O(0,0,0),Wh=new O(1,1,1),Cn=new O,ps=new O,Be=new O,xa=new he,ya=new ss;class Js{constructor(t=0,e=0,n=0,i=Js.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ae(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ya.setFromEuler(this),this.setFromQuaternion(ya,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Js.DEFAULT_ORDER="XYZ";class Kc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let qh=0;const Ma=new O,ci=new ss,fn=new he,ms=new O,Gi=new O,Xh=new O,Yh=new ss,Sa=new O(1,0,0),Ea=new O(0,1,0),wa=new O(0,0,1),jh={type:"added"},Zh={type:"removed"};class Se extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new O,e=new Js,n=new ss,i=new O(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new he},normalMatrix:{value:new qt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.multiply(ci),this}rotateOnWorldAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.premultiply(ci),this}rotateX(t){return this.rotateOnAxis(Sa,t)}rotateY(t){return this.rotateOnAxis(Ea,t)}rotateZ(t){return this.rotateOnAxis(wa,t)}translateOnAxis(t,e){return Ma.copy(t).applyQuaternion(this.quaternion),this.position.add(Ma.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sa,t)}translateY(t){return this.translateOnAxis(Ea,t)}translateZ(t){return this.translateOnAxis(wa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ms.copy(t):ms.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(Gi,ms,this.up):fn.lookAt(ms,Gi,this.up),this.quaternion.setFromRotationMatrix(fn),i&&(fn.extractRotation(i.matrixWorld),ci.setFromRotationMatrix(fn),this.quaternion.premultiply(ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(jh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zh)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(fn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,t,Xh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,Yh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Se.DEFAULT_UP=new O(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ke=new O,pn=new O,Ar=new O,mn=new O,li=new O,hi=new O,ba=new O,Cr=new O,Rr=new O,Pr=new O;let gs=!1;class Je{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ke.subVectors(t,e),i.cross(Ke);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Ke.subVectors(i,e),pn.subVectors(n,e),Ar.subVectors(t,e);const o=Ke.dot(Ke),a=Ke.dot(pn),c=Ke.dot(Ar),l=pn.dot(pn),h=pn.dot(Ar),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const u=1/d,p=(l*c-a*h)*u,g=(o*h-a*c)*u;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getUV(t,e,n,i,s,o,a,c){return gs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gs=!0),this.getInterpolation(t,e,n,i,s,o,a,c)}static getInterpolation(t,e,n,i,s,o,a,c){return this.getBarycoord(t,e,n,i,mn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,mn.x),c.addScaledVector(o,mn.y),c.addScaledVector(a,mn.z),c)}static isFrontFacing(t,e,n,i){return Ke.subVectors(n,e),pn.subVectors(t,e),Ke.cross(pn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),Ke.cross(pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Je.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return gs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gs=!0),Je.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return Je.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;li.subVectors(i,n),hi.subVectors(s,n),Cr.subVectors(t,n);const c=li.dot(Cr),l=hi.dot(Cr);if(c<=0&&l<=0)return e.copy(n);Rr.subVectors(t,i);const h=li.dot(Rr),d=hi.dot(Rr);if(h>=0&&d<=h)return e.copy(i);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(li,o);Pr.subVectors(t,s);const p=li.dot(Pr),g=hi.dot(Pr);if(g>=0&&p<=g)return e.copy(s);const v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(hi,a);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return ba.subVectors(s,i),a=(d-h)/(d-h+(p-g)),e.copy(i).addScaledVector(ba,a);const f=1/(m+v+u);return o=v*f,a=u*f,e.copy(n).addScaledVector(li,o).addScaledVector(hi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $c={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},vs={h:0,s:0,l:0};function Lr(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Jt.workingColorSpace){if(t=Uh(t,1),e=Ae(e,0,1),n=Ae(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Lr(o,s,t+1/3),this.g=Lr(o,s,t),this.b=Lr(o,s,t-1/3)}return Jt.toWorkingColorSpace(this,i),this}setStyle(t,e=ye){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){const n=$c[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ti(t.r),this.g=Ti(t.g),this.b=Ti(t.b),this}copyLinearToSRGB(t){return this.r=xr(t.r),this.g=xr(t.g),this.b=xr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return Jt.fromWorkingColorSpace(be.copy(this),t),Math.round(Ae(be.r*255,0,255))*65536+Math.round(Ae(be.g*255,0,255))*256+Math.round(Ae(be.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(be.copy(this),e);const n=be.r,i=be.g,s=be.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-s)/d+(i<s?6:0);break;case i:c=(s-n)/d+2;break;case s:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=ye){Jt.fromWorkingColorSpace(be.copy(this),t);const e=be.r,n=be.g,i=be.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Rn),this.setHSL(Rn.h+t,Rn.s+e,Rn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Rn),t.getHSL(vs);const n=vr(Rn.h,vs.h,e),i=vr(Rn.s,vs.s,e),s=vr(Rn.l,vs.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new Yt;Yt.NAMES=$c;let Kh=0,Di=class extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=bi,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jr,this.blendDst=Qr,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ua,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ni,this.stencilZFail=ni,this.stencilZPass=ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jr&&(n.blendSrc=this.blendSrc),this.blendDst!==Qr&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ua&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};class Jc extends Di{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new O,_s=new ht;class nn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=da,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_s.fromBufferAttribute(this,e),_s.applyMatrix3(t),this.setXY(e,_s.x,_s.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Oi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Oi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Oi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Oi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Oi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),i=Ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),i=Ne(i,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==da&&(t.usage=this.usage),t}}class Qc extends nn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class tl extends nn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ue extends nn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let $h=0;const ke=new he,Ir=new Se,ui=new O,ze=new rs,Hi=new rs,xe=new O;class Fe extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qc(t)?tl:Qc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new qt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ke.makeRotationFromQuaternion(t),this.applyMatrix4(ke),this}rotateX(t){return ke.makeRotationX(t),this.applyMatrix4(ke),this}rotateY(t){return ke.makeRotationY(t),this.applyMatrix4(ke),this}rotateZ(t){return ke.makeRotationZ(t),this.applyMatrix4(ke),this}translate(t,e,n){return ke.makeTranslation(t,e,n),this.applyMatrix4(ke),this}scale(t,e,n){return ke.makeScale(t,e,n),this.applyMatrix4(ke),this}lookAt(t){return Ir.lookAt(t),Ir.updateMatrix(),this.applyMatrix4(Ir.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ue(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];ze.setFromBufferAttribute(s),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $s);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Hi.setFromBufferAttribute(a),this.morphTargetsRelative?(xe.addVectors(ze.min,Hi.min),ze.expandByPoint(xe),xe.addVectors(ze.max,Hi.max),ze.expandByPoint(xe)):(ze.expandByPoint(Hi.min),ze.expandByPoint(Hi.max))}ze.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)xe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(xe));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)xe.fromBufferAttribute(a,l),c&&(ui.fromBufferAttribute(t,l),xe.add(ui)),i=Math.max(i,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let E=0;E<a;E++)l[E]=new O,h[E]=new O;const d=new O,u=new O,p=new O,g=new ht,v=new ht,m=new ht,f=new O,_=new O;function x(E,F,z){d.fromArray(i,E*3),u.fromArray(i,F*3),p.fromArray(i,z*3),g.fromArray(o,E*2),v.fromArray(o,F*2),m.fromArray(o,z*2),u.sub(d),p.sub(d),v.sub(g),m.sub(g);const B=1/(v.x*m.y-m.x*v.y);isFinite(B)&&(f.copy(u).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(B),_.copy(p).multiplyScalar(v.x).addScaledVector(u,-m.x).multiplyScalar(B),l[E].add(f),l[F].add(f),l[z].add(f),h[E].add(_),h[F].add(_),h[z].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let E=0,F=M.length;E<F;++E){const z=M[E],B=z.start,P=z.count;for(let I=B,L=B+P;I<L;I+=3)x(n[I+0],n[I+1],n[I+2])}const R=new O,b=new O,A=new O,U=new O;function S(E){A.fromArray(s,E*3),U.copy(A);const F=l[E];R.copy(F),R.sub(A.multiplyScalar(A.dot(F))).normalize(),b.crossVectors(U,F);const B=b.dot(h[E])<0?-1:1;c[E*4]=R.x,c[E*4+1]=R.y,c[E*4+2]=R.z,c[E*4+3]=B}for(let E=0,F=M.length;E<F;++E){const z=M[E],B=z.start,P=z.count;for(let I=B,L=B+P;I<L;I+=3)S(n[I+0]),S(n[I+1]),S(n[I+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new O,s=new O,o=new O,a=new O,c=new O,l=new O,h=new O,d=new O;if(t)for(let u=0,p=t.count;u<p;u+=3){const g=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=e.count;u<p;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h);let p=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*h;for(let f=0;f<h;f++)u[g++]=l[p++]}return new nn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fe,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,d=l.length;h<d;h++){const u=l[h],p=t(u,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const p=l[d];h.push(p.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],d=s[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ta=new he,Hn=new Zc,xs=new $s,Aa=new O,di=new O,fi=new O,pi=new O,Nr=new O,ys=new O,Ms=new ht,Ss=new ht,Es=new ht,Ca=new O,Ra=new O,Pa=new O,ws=new O,bs=new O;class Wt extends Se{constructor(t=new Fe,e=new Jc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){ys.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],d=s[c];h!==0&&(Nr.fromBufferAttribute(d,t),o?ys.addScaledVector(Nr,h):ys.addScaledVector(Nr.sub(e),h))}e.add(ys)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere),xs.applyMatrix4(s),Hn.copy(t.ray).recast(t.near),!(xs.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(xs,Aa)===null||Hn.origin.distanceToSquared(Aa)>(t.far-t.near)**2))&&(Ta.copy(s).invert(),Hn.copy(t.ray).applyMatrix4(Ta),!(n.boundingBox!==null&&Hn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Hn)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const m=u[g],f=o[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,R=x;M<R;M+=3){const b=a.getX(M),A=a.getX(M+1),U=a.getX(M+2);i=Ts(this,f,t,n,l,h,d,b,A,U),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const _=a.getX(m),x=a.getX(m+1),M=a.getX(m+2);i=Ts(this,o,t,n,l,h,d,_,x,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const m=u[g],f=o[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,R=x;M<R;M+=3){const b=M,A=M+1,U=M+2;i=Ts(this,f,t,n,l,h,d,b,A,U),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const _=m,x=m+1,M=m+2;i=Ts(this,o,t,n,l,h,d,_,x,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Jh(r,t,e,n,i,s,o,a){let c;if(t.side===Ue?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,t.side===Fn,a),c===null)return null;bs.copy(a),bs.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(bs);return l<e.near||l>e.far?null:{distance:l,point:bs.clone(),object:r}}function Ts(r,t,e,n,i,s,o,a,c,l){r.getVertexPosition(a,di),r.getVertexPosition(c,fi),r.getVertexPosition(l,pi);const h=Jh(r,t,e,n,di,fi,pi,ws);if(h){i&&(Ms.fromBufferAttribute(i,a),Ss.fromBufferAttribute(i,c),Es.fromBufferAttribute(i,l),h.uv=Je.getInterpolation(ws,di,fi,pi,Ms,Ss,Es,new ht)),s&&(Ms.fromBufferAttribute(s,a),Ss.fromBufferAttribute(s,c),Es.fromBufferAttribute(s,l),h.uv1=Je.getInterpolation(ws,di,fi,pi,Ms,Ss,Es,new ht),h.uv2=h.uv1),o&&(Ca.fromBufferAttribute(o,a),Ra.fromBufferAttribute(o,c),Pa.fromBufferAttribute(o,l),h.normal=Je.getInterpolation(ws,di,fi,pi,Ca,Ra,Pa,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new O,materialIndex:0};Je.getNormal(di,fi,pi,d.normal),h.face=d}return h}class Le extends Fe{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(d,2));function g(v,m,f,_,x,M,R,b,A,U,S){const E=M/A,F=R/U,z=M/2,B=R/2,P=b/2,I=A+1,L=U+1;let Z=0,V=0;const k=new O;for(let K=0;K<L;K++){const Q=K*F-B;for(let j=0;j<I;j++){const Y=j*E-z;k[v]=Y*_,k[m]=Q*x,k[f]=P,l.push(k.x,k.y,k.z),k[v]=0,k[m]=0,k[f]=b>0?1:-1,h.push(k.x,k.y,k.z),d.push(j/A),d.push(1-K/U),Z+=1}}for(let K=0;K<U;K++)for(let Q=0;Q<A;Q++){const j=u+Q+I*K,Y=u+Q+I*(K+1),tt=u+(Q+1)+I*(K+1),ut=u+(Q+1)+I*K;c.push(j,Y,ut),c.push(Y,tt,ut),V+=6}a.addGroup(p,V,S),p+=V,u+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Le(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Li(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Pe(r){const t={};for(let e=0;e<r.length;e++){const n=Li(r[e]);for(const i in n)t[i]=n[i]}return t}function Qh(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function el(r){return r.getRenderTarget()===null?r.outputColorSpace:Jt.workingColorSpace}const tu={clone:Li,merge:Pe};var eu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends Di{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eu,this.fragmentShader=nu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Li(t.uniforms),this.uniformsGroups=Qh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class nl extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=En}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Xe extends nl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ro*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ro*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(gr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const mi=-90,gi=1;class iu extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Xe(mi,gi,t,e);i.layers=this.layers,this.add(i);const s=new Xe(mi,gi,t,e);s.layers=this.layers,this.add(s);const o=new Xe(mi,gi,t,e);o.layers=this.layers,this.add(o);const a=new Xe(mi,gi,t,e);a.layers=this.layers,this.add(a);const c=new Xe(mi,gi,t,e);c.layers=this.layers,this.add(c);const l=new Xe(mi,gi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===En)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class il extends Ge{constructor(t,e,n,i,s,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ci,super(t,e,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class su extends Jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Yi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===$n?ye:Ye),this.texture=new il(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:qe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Le(5,5,5),s=new Qn({name:"CubemapFromEquirect",uniforms:Li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:Nn});s.uniforms.tEquirect.value=e;const o=new Wt(i,s),a=e.minFilter;return e.minFilter===$i&&(e.minFilter=qe),new iu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const Dr=new O,ru=new O,ou=new qt;let Wn=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Dr.subVectors(n,e).cross(ru.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Dr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ou.getNormalMatrix(t),i=this.coplanarPoint(Dr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Vn=new $s,As=new O;class go{constructor(t=new Wn,e=new Wn,n=new Wn,i=new Wn,s=new Wn,o=new Wn){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=En){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],d=i[6],u=i[7],p=i[8],g=i[9],v=i[10],m=i[11],f=i[12],_=i[13],x=i[14],M=i[15];if(n[0].setComponents(c-s,u-l,m-p,M-f).normalize(),n[1].setComponents(c+s,u+l,m+p,M+f).normalize(),n[2].setComponents(c+o,u+h,m+g,M+_).normalize(),n[3].setComponents(c-o,u-h,m-g,M-_).normalize(),n[4].setComponents(c-a,u-d,m-v,M-x).normalize(),e===En)n[5].setComponents(c+a,u+d,m+v,M+x).normalize();else if(e===Xs)n[5].setComponents(a,d,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vn)}intersectsSprite(t){return Vn.center.set(0,0,0),Vn.radius=.7071067811865476,Vn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(As.x=i.normal.x>0?t.max.x:t.min.x,As.y=i.normal.y>0?t.max.y:t.min.y,As.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(As)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sl(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function au(r,t){const e=t.isWebGL2,n=new WeakMap;function i(l,h){const d=l.array,u=l.usage,p=d.byteLength,g=r.createBuffer();r.bindBuffer(h,g),r.bufferData(h,d,u),l.onUploadCallback();let v;if(d instanceof Float32Array)v=r.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)v=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=r.SHORT;else if(d instanceof Uint32Array)v=r.UNSIGNED_INT;else if(d instanceof Int32Array)v=r.INT;else if(d instanceof Int8Array)v=r.BYTE;else if(d instanceof Uint8Array)v=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:p}}function s(l,h,d){const u=h.array,p=h._updateRange,g=h.updateRanges;if(r.bindBuffer(d,l),p.count===-1&&g.length===0&&r.bufferSubData(d,0,u),g.length!==0){for(let v=0,m=g.length;v<m;v++){const f=g[v];e?r.bufferSubData(d,f.start*u.BYTES_PER_ELEMENT,u,f.start,f.count):r.bufferSubData(d,f.start*u.BYTES_PER_ELEMENT,u.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(e?r.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u,p.offset,p.count):r.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(r.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);if(d===void 0)n.set(l,i(l,h));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,l,h),d.version=l.version}}return{get:o,remove:a,update:c}}class Qi extends Fe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,d=t/a,u=e/c,p=[],g=[],v=[],m=[];for(let f=0;f<h;f++){const _=f*u-o;for(let x=0;x<l;x++){const M=x*d-s;g.push(M,-_,0),v.push(0,0,1),m.push(x/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let _=0;_<a;_++){const x=_+l*f,M=_+l*(f+1),R=_+1+l*(f+1),b=_+1+l*f;p.push(x,M,b),p.push(M,R,b)}this.setIndex(p),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(v,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qi(t.width,t.height,t.widthSegments,t.heightSegments)}}var cu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,du=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,fu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gu=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,_u=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Su=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Eu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,wu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Au=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ru=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Pu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Lu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Iu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Nu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Du=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ou=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bu="gl_FragColor = linearToOutputTexel( gl_FragColor );",zu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Gu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ku=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ju=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ku=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$u=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ju=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,td=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ed=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,id=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,od=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ad=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ld=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ud=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,pd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,md=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_d=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Md=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ed=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,wd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,bd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Td=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ad=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ld=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Id=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ud=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Od=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Wd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$d=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ef=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,af=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ff=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,gf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ef=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Af=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Rf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,If=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Nf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Df=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ff=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Of=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:cu,alphahash_pars_fragment:lu,alphamap_fragment:hu,alphamap_pars_fragment:uu,alphatest_fragment:du,alphatest_pars_fragment:fu,aomap_fragment:pu,aomap_pars_fragment:mu,batching_pars_vertex:gu,batching_vertex:vu,begin_vertex:_u,beginnormal_vertex:xu,bsdfs:yu,iridescence_fragment:Mu,bumpmap_pars_fragment:Su,clipping_planes_fragment:Eu,clipping_planes_pars_fragment:wu,clipping_planes_pars_vertex:bu,clipping_planes_vertex:Tu,color_fragment:Au,color_pars_fragment:Cu,color_pars_vertex:Ru,color_vertex:Pu,common:Lu,cube_uv_reflection_fragment:Iu,defaultnormal_vertex:Nu,displacementmap_pars_vertex:Du,displacementmap_vertex:Uu,emissivemap_fragment:Fu,emissivemap_pars_fragment:Ou,colorspace_fragment:Bu,colorspace_pars_fragment:zu,envmap_fragment:Gu,envmap_common_pars_fragment:Hu,envmap_pars_fragment:Vu,envmap_pars_vertex:ku,envmap_physical_pars_fragment:ed,envmap_vertex:Wu,fog_vertex:qu,fog_pars_vertex:Xu,fog_fragment:Yu,fog_pars_fragment:ju,gradientmap_pars_fragment:Zu,lightmap_fragment:Ku,lightmap_pars_fragment:$u,lights_lambert_fragment:Ju,lights_lambert_pars_fragment:Qu,lights_pars_begin:td,lights_toon_fragment:nd,lights_toon_pars_fragment:id,lights_phong_fragment:sd,lights_phong_pars_fragment:rd,lights_physical_fragment:od,lights_physical_pars_fragment:ad,lights_fragment_begin:cd,lights_fragment_maps:ld,lights_fragment_end:hd,logdepthbuf_fragment:ud,logdepthbuf_pars_fragment:dd,logdepthbuf_pars_vertex:fd,logdepthbuf_vertex:pd,map_fragment:md,map_pars_fragment:gd,map_particle_fragment:vd,map_particle_pars_fragment:_d,metalnessmap_fragment:xd,metalnessmap_pars_fragment:yd,morphcolor_vertex:Md,morphnormal_vertex:Sd,morphtarget_pars_vertex:Ed,morphtarget_vertex:wd,normal_fragment_begin:bd,normal_fragment_maps:Td,normal_pars_fragment:Ad,normal_pars_vertex:Cd,normal_vertex:Rd,normalmap_pars_fragment:Pd,clearcoat_normal_fragment_begin:Ld,clearcoat_normal_fragment_maps:Id,clearcoat_pars_fragment:Nd,iridescence_pars_fragment:Dd,opaque_fragment:Ud,packing:Fd,premultiplied_alpha_fragment:Od,project_vertex:Bd,dithering_fragment:zd,dithering_pars_fragment:Gd,roughnessmap_fragment:Hd,roughnessmap_pars_fragment:Vd,shadowmap_pars_fragment:kd,shadowmap_pars_vertex:Wd,shadowmap_vertex:qd,shadowmask_pars_fragment:Xd,skinbase_vertex:Yd,skinning_pars_vertex:jd,skinning_vertex:Zd,skinnormal_vertex:Kd,specularmap_fragment:$d,specularmap_pars_fragment:Jd,tonemapping_fragment:Qd,tonemapping_pars_fragment:tf,transmission_fragment:ef,transmission_pars_fragment:nf,uv_pars_fragment:sf,uv_pars_vertex:rf,uv_vertex:of,worldpos_vertex:af,background_vert:cf,background_frag:lf,backgroundCube_vert:hf,backgroundCube_frag:uf,cube_vert:df,cube_frag:ff,depth_vert:pf,depth_frag:mf,distanceRGBA_vert:gf,distanceRGBA_frag:vf,equirect_vert:_f,equirect_frag:xf,linedashed_vert:yf,linedashed_frag:Mf,meshbasic_vert:Sf,meshbasic_frag:Ef,meshlambert_vert:wf,meshlambert_frag:bf,meshmatcap_vert:Tf,meshmatcap_frag:Af,meshnormal_vert:Cf,meshnormal_frag:Rf,meshphong_vert:Pf,meshphong_frag:Lf,meshphysical_vert:If,meshphysical_frag:Nf,meshtoon_vert:Df,meshtoon_frag:Uf,points_vert:Ff,points_frag:Of,shadow_vert:Bf,shadow_frag:zf,sprite_vert:Gf,sprite_frag:Hf},lt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},cn={basic:{uniforms:Pe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Pe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Pe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Pe([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Pe([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Pe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Pe([lt.points,lt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Pe([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Pe([lt.common,lt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Pe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Pe([lt.sprite,lt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Pe([lt.common,lt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Pe([lt.lights,lt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};cn.physical={uniforms:Pe([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Cs={r:0,b:0,g:0};function Vf(r,t,e,n,i,s,o){const a=new Yt(0);let c=s===!0?0:1,l,h,d=null,u=0,p=null;function g(m,f){let _=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?e:t).get(x)),x===null?v(a,c):x&&x.isColor&&(v(x,1),_=!0);const M=r.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||_)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Zs)?(h===void 0&&(h=new Wt(new Le(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:Li(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Jt.getTransfer(x.colorSpace)!==ie,(d!==x||u!==x.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,p=r.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Wt(new Qi(2,2),new Qn({name:"BackgroundMaterial",uniforms:Li(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(x.colorSpace)!==ie,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||p!==r.toneMapping)&&(l.material.needsUpdate=!0,d=x,u=x.version,p=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function v(m,f){m.getRGB(Cs,el(r)),n.buffers.color.setClear(Cs.r,Cs.g,Cs.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),c=f,v(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,v(a,c)},render:g}}function kf(r,t,e,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=m(null);let l=c,h=!1;function d(P,I,L,Z,V){let k=!1;if(o){const K=v(Z,L,I);l!==K&&(l=K,p(l.object)),k=f(P,Z,L,V),k&&_(P,Z,L,V)}else{const K=I.wireframe===!0;(l.geometry!==Z.id||l.program!==L.id||l.wireframe!==K)&&(l.geometry=Z.id,l.program=L.id,l.wireframe=K,k=!0)}V!==null&&e.update(V,r.ELEMENT_ARRAY_BUFFER),(k||h)&&(h=!1,U(P,I,L,Z),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function u(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(P){return n.isWebGL2?r.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?r.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function v(P,I,L){const Z=L.wireframe===!0;let V=a[P.id];V===void 0&&(V={},a[P.id]=V);let k=V[I.id];k===void 0&&(k={},V[I.id]=k);let K=k[Z];return K===void 0&&(K=m(u()),k[Z]=K),K}function m(P){const I=[],L=[],Z=[];for(let V=0;V<i;V++)I[V]=0,L[V]=0,Z[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:L,attributeDivisors:Z,object:P,attributes:{},index:null}}function f(P,I,L,Z){const V=l.attributes,k=I.attributes;let K=0;const Q=L.getAttributes();for(const j in Q)if(Q[j].location>=0){const tt=V[j];let ut=k[j];if(ut===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(ut=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(ut=P.instanceColor)),tt===void 0||tt.attribute!==ut||ut&&tt.data!==ut.data)return!0;K++}return l.attributesNum!==K||l.index!==Z}function _(P,I,L,Z){const V={},k=I.attributes;let K=0;const Q=L.getAttributes();for(const j in Q)if(Q[j].location>=0){let tt=k[j];tt===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(tt=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(tt=P.instanceColor));const ut={};ut.attribute=tt,tt&&tt.data&&(ut.data=tt.data),V[j]=ut,K++}l.attributes=V,l.attributesNum=K,l.index=Z}function x(){const P=l.newAttributes;for(let I=0,L=P.length;I<L;I++)P[I]=0}function M(P){R(P,0)}function R(P,I){const L=l.newAttributes,Z=l.enabledAttributes,V=l.attributeDivisors;L[P]=1,Z[P]===0&&(r.enableVertexAttribArray(P),Z[P]=1),V[P]!==I&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,I),V[P]=I)}function b(){const P=l.newAttributes,I=l.enabledAttributes;for(let L=0,Z=I.length;L<Z;L++)I[L]!==P[L]&&(r.disableVertexAttribArray(L),I[L]=0)}function A(P,I,L,Z,V,k,K){K===!0?r.vertexAttribIPointer(P,I,L,V,k):r.vertexAttribPointer(P,I,L,Z,V,k)}function U(P,I,L,Z){if(n.isWebGL2===!1&&(P.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const V=Z.attributes,k=L.getAttributes(),K=I.defaultAttributeValues;for(const Q in k){const j=k[Q];if(j.location>=0){let Y=V[Q];if(Y===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor)),Y!==void 0){const tt=Y.normalized,ut=Y.itemSize,Mt=e.get(Y);if(Mt===void 0)continue;const gt=Mt.buffer,Pt=Mt.type,Ut=Mt.bytesPerElement,Et=n.isWebGL2===!0&&(Pt===r.INT||Pt===r.UNSIGNED_INT||Y.gpuType===Uc);if(Y.isInterleavedBufferAttribute){const Nt=Y.data,N=Nt.stride,at=Y.offset;if(Nt.isInstancedInterleavedBuffer){for(let J=0;J<j.locationSize;J++)R(j.location+J,Nt.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Nt.meshPerAttribute*Nt.count)}else for(let J=0;J<j.locationSize;J++)M(j.location+J);r.bindBuffer(r.ARRAY_BUFFER,gt);for(let J=0;J<j.locationSize;J++)A(j.location+J,ut/j.locationSize,Pt,tt,N*Ut,(at+ut/j.locationSize*J)*Ut,Et)}else{if(Y.isInstancedBufferAttribute){for(let Nt=0;Nt<j.locationSize;Nt++)R(j.location+Nt,Y.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Nt=0;Nt<j.locationSize;Nt++)M(j.location+Nt);r.bindBuffer(r.ARRAY_BUFFER,gt);for(let Nt=0;Nt<j.locationSize;Nt++)A(j.location+Nt,ut/j.locationSize,Pt,tt,ut*Ut,ut/j.locationSize*Nt*Ut,Et)}}else if(K!==void 0){const tt=K[Q];if(tt!==void 0)switch(tt.length){case 2:r.vertexAttrib2fv(j.location,tt);break;case 3:r.vertexAttrib3fv(j.location,tt);break;case 4:r.vertexAttrib4fv(j.location,tt);break;default:r.vertexAttrib1fv(j.location,tt)}}}}b()}function S(){z();for(const P in a){const I=a[P];for(const L in I){const Z=I[L];for(const V in Z)g(Z[V].object),delete Z[V];delete I[L]}delete a[P]}}function E(P){if(a[P.id]===void 0)return;const I=a[P.id];for(const L in I){const Z=I[L];for(const V in Z)g(Z[V].object),delete Z[V];delete I[L]}delete a[P.id]}function F(P){for(const I in a){const L=a[I];if(L[P.id]===void 0)continue;const Z=L[P.id];for(const V in Z)g(Z[V].object),delete Z[V];delete L[P.id]}}function z(){B(),h=!0,l!==c&&(l=c,p(l.object))}function B(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:z,resetDefaultState:B,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:F,initAttributes:x,enableAttribute:M,disableUnusedAttributes:b}}function Wf(r,t,e,n){const i=n.isWebGL2;let s;function o(h){s=h}function a(h,d){r.drawArrays(s,h,d),e.update(d,s,1)}function c(h,d,u){if(u===0)return;let p,g;if(i)p=r,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,h,d,u),e.update(d,s,u)}function l(h,d,u){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u;g++)this.render(h[g],d[g]);else{p.multiDrawArraysWEBGL(s,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=d[v];e.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function qf(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),f=r.getParameter(r.MAX_VARYING_VECTORS),_=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=u>0,M=o||t.has("OES_texture_float"),R=x&&M,b=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:_,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:R,maxSamples:b}}function Xf(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Wn,a=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||i;return i=u,n=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,f=r.get(d);if(!i||g===null||g.length===0||s&&!m)s?h(null):l();else{const _=s?0:n,x=_*4;let M=f.clippingState||null;c.value=M,M=h(g,u,x,p);for(let R=0;R!==x;++R)M[R]=e[R];f.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const f=p+v*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,M=p;x!==v;++x,M+=4)o.copy(d[x]).applyMatrix4(_,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Yf(r){let t=new WeakMap;function e(o,a){return a===to?o.mapping=Ci:a===eo&&(o.mapping=Ri),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===to||a===eo)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new su(c.height/2);return l.fromEquirectangularTexture(r,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class rl extends nl{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Mi=4,La=[.125,.215,.35,.446,.526,.582],Yn=20,Ur=new rl,Ia=new Yt;let Fr=null,Or=0,Br=0;const qn=(1+Math.sqrt(5))/2,vi=1/qn,Na=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,qn,vi),new O(0,qn,-vi),new O(vi,0,qn),new O(-vi,0,qn),new O(qn,vi,0),new O(-qn,vi,0)];class Da{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Fr=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fr,Or,Br),t.scissorTest=!1,Rs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ci||t.mapping===Ri?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fr=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:qe,minFilter:qe,generateMipmaps:!1,type:Ji,format:tn,colorSpace:wn,depthBuffer:!1},i=Ua(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ua(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jf(s)),this._blurMaterial=Zf(s,t,e)}return i}_compileMaterial(t){const e=new Wt(this._lodPlanes[0],t);this._renderer.compile(e,Ur)}_sceneToCubeUV(t,e,n,i){const a=new Xe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Ia),h.toneMapping=Dn,h.autoClear=!1;const p=new Jc({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),g=new Wt(new Le,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(Ia),v=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):_===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const x=this._cubeSize;Rs(i,_*x,f>2?x:0,x,x),h.setRenderTarget(i),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ci||t.mapping===Ri;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fa());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Wt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;Rs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ur)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Na[(i-1)%Na.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Wt(this._lodPlanes[i],l),u=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Yn-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):Yn;m>Yn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yn}`);const f=[];let _=0;for(let A=0;A<Yn;++A){const U=A/v,S=Math.exp(-U*U/2);f.push(S),A===0?_+=S:A<m&&(_+=2*S)}for(let A=0;A<f.length;A++)f[A]=f[A]/_;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-n;const M=this._sizeLods[i],R=3*M*(i>x-Mi?i-x+Mi:0),b=4*(this._cubeSize-M);Rs(e,R,b,3*M,2*M),c.setRenderTarget(e),c.render(d,Ur)}}function jf(r){const t=[],e=[],n=[];let i=r;const s=r-Mi+1+La.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>r-Mi?c=La[o-r+Mi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,v=3,m=2,f=1,_=new Float32Array(v*g*p),x=new Float32Array(m*g*p),M=new Float32Array(f*g*p);for(let b=0;b<p;b++){const A=b%3*2/3-1,U=b>2?0:-1,S=[A,U,0,A+2/3,U,0,A+2/3,U+1,0,A,U,0,A+2/3,U+1,0,A,U+1,0];_.set(S,v*g*b),x.set(u,m*g*b);const E=[b,b,b,b,b,b];M.set(E,f*g*b)}const R=new Fe;R.setAttribute("position",new nn(_,v)),R.setAttribute("uv",new nn(x,m)),R.setAttribute("faceIndex",new nn(M,f)),t.push(R),i>Mi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ua(r,t,e){const n=new Jn(r,t,e);return n.texture.mapping=Zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rs(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Zf(r,t,e){const n=new Float32Array(Yn),i=new O(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Fa(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Oa(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function vo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Kf(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===to||c===eo,h=c===Ci||c===Ri;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=t.get(a);return e===null&&(e=new Da(r)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),t.set(a,d),d.texture}else{if(t.has(a))return t.get(a).texture;{const d=a.image;if(l&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new Da(r));const u=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,u),a.addEventListener("dispose",s),u.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function $f(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Jf(r,t,e,n){const i={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)t.remove(v[m])}u.removeEventListener("dispose",o),delete i[u.id];const p=s.get(u);p&&(t.remove(p),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const g in u)t.update(u[g],r.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const v=p[g];for(let m=0,f=v.length;m<f;m++)t.update(v[m],r.ARRAY_BUFFER)}}function l(d){const u=[],p=d.index,g=d.attributes.position;let v=0;if(p!==null){const _=p.array;v=p.version;for(let x=0,M=_.length;x<M;x+=3){const R=_[x+0],b=_[x+1],A=_[x+2];u.push(R,b,b,A,A,R)}}else if(g!==void 0){const _=g.array;v=g.version;for(let x=0,M=_.length/3-1;x<M;x+=3){const R=x+0,b=x+1,A=x+2;u.push(R,b,b,A,A,R)}}else return;const m=new(qc(u)?tl:Qc)(u,1);m.version=v;const f=s.get(d);f&&t.remove(f),s.set(d,m)}function h(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Qf(r,t,e,n){const i=n.isWebGL2;let s;function o(p){s=p}let a,c;function l(p){a=p.type,c=p.bytesPerElement}function h(p,g){r.drawElements(s,g,a,p*c),e.update(g,s,1)}function d(p,g,v){if(v===0)return;let m,f;if(i)m=r,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,g,a,p*c,v),e.update(g,s,v)}function u(p,g,v){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<v;f++)this.render(p[f]/c,g[f]);else{m.multiDrawElementsWEBGL(s,g,0,a,p,0,v);let f=0;for(let _=0;_<v;_++)f+=g[_];e.update(f,s,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function tp(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function ep(r,t){return r[0]-t[0]}function np(r,t){return Math.abs(t[1])-Math.abs(r[1])}function ip(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new Me,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,d){const u=l.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let m=s.get(h);if(m===void 0||m.count!==v){let I=function(){B.dispose(),s.delete(h),h.removeEventListener("dispose",I)};var p=I;m!==void 0&&m.texture.dispose();const x=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let S=0;x===!0&&(S=1),M===!0&&(S=2),R===!0&&(S=3);let E=h.attributes.position.count*S,F=1;E>t.maxTextureSize&&(F=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const z=new Float32Array(E*F*4*v),B=new jc(z,E,F,v);B.type=In,B.needsUpdate=!0;const P=S*4;for(let L=0;L<v;L++){const Z=b[L],V=A[L],k=U[L],K=E*F*4*L;for(let Q=0;Q<Z.count;Q++){const j=Q*P;x===!0&&(o.fromBufferAttribute(Z,Q),z[K+j+0]=o.x,z[K+j+1]=o.y,z[K+j+2]=o.z,z[K+j+3]=0),M===!0&&(o.fromBufferAttribute(V,Q),z[K+j+4]=o.x,z[K+j+5]=o.y,z[K+j+6]=o.z,z[K+j+7]=0),R===!0&&(o.fromBufferAttribute(k,Q),z[K+j+8]=o.x,z[K+j+9]=o.y,z[K+j+10]=o.z,z[K+j+11]=k.itemSize===4?o.w:1)}}m={count:v,texture:B,size:new ht(E,F)},s.set(h,m),h.addEventListener("dispose",I)}let f=0;for(let x=0;x<u.length;x++)f+=u[x];const _=h.morphTargetsRelative?1:1-f;d.getUniforms().setValue(r,"morphTargetBaseInfluence",_),d.getUniforms().setValue(r,"morphTargetInfluences",u),d.getUniforms().setValue(r,"morphTargetsTexture",m.texture,e),d.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const g=u===void 0?0:u.length;let v=n[h.id];if(v===void 0||v.length!==g){v=[];for(let M=0;M<g;M++)v[M]=[M,0];n[h.id]=v}for(let M=0;M<g;M++){const R=v[M];R[0]=M,R[1]=u[M]}v.sort(np);for(let M=0;M<8;M++)M<g&&v[M][1]?(a[M][0]=v[M][0],a[M][1]=v[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(ep);const m=h.morphAttributes.position,f=h.morphAttributes.normal;let _=0;for(let M=0;M<8;M++){const R=a[M],b=R[0],A=R[1];b!==Number.MAX_SAFE_INTEGER&&A?(m&&h.getAttribute("morphTarget"+M)!==m[b]&&h.setAttribute("morphTarget"+M,m[b]),f&&h.getAttribute("morphNormal"+M)!==f[b]&&h.setAttribute("morphNormal"+M,f[b]),i[M]=A,_+=A):(m&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),f&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),i[M]=0)}const x=h.morphTargetsRelative?1:1-_;d.getUniforms().setValue(r,"morphTargetBaseInfluence",x),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function sp(r,t,e,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return d}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}class ol extends Ge{constructor(t,e,n,i,s,o,a,c,l,h){if(h=h!==void 0?h:Kn,h!==Kn&&h!==Pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Kn&&(n=Ln),n===void 0&&h===Pi&&(n=Zn),super(null,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ie,this.minFilter=c!==void 0?c:Ie,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const al=new Ge,cl=new ol(1,1);cl.compareFunction=Wc;const ll=new jc,hl=new Hh,ul=new il,Ba=[],za=[],Ga=new Float32Array(16),Ha=new Float32Array(9),Va=new Float32Array(4);function Ui(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Ba[i];if(s===void 0&&(s=new Float32Array(i),Ba[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function me(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function ge(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Qs(r,t){let e=za[t];e===void 0&&(e=new Int32Array(t),za[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function rp(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function op(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;r.uniform2fv(this.addr,t),ge(e,t)}}function ap(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;r.uniform3fv(this.addr,t),ge(e,t)}}function cp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;r.uniform4fv(this.addr,t),ge(e,t)}}function lp(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;Va.set(n),r.uniformMatrix2fv(this.addr,!1,Va),ge(e,n)}}function hp(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;Ha.set(n),r.uniformMatrix3fv(this.addr,!1,Ha),ge(e,n)}}function up(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;Ga.set(n),r.uniformMatrix4fv(this.addr,!1,Ga),ge(e,n)}}function dp(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function fp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;r.uniform2iv(this.addr,t),ge(e,t)}}function pp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;r.uniform3iv(this.addr,t),ge(e,t)}}function mp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;r.uniform4iv(this.addr,t),ge(e,t)}}function gp(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function vp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;r.uniform2uiv(this.addr,t),ge(e,t)}}function _p(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;r.uniform3uiv(this.addr,t),ge(e,t)}}function xp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;r.uniform4uiv(this.addr,t),ge(e,t)}}function yp(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?cl:al;e.setTexture2D(t||s,i)}function Mp(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||hl,i)}function Sp(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ul,i)}function Ep(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ll,i)}function wp(r){switch(r){case 5126:return rp;case 35664:return op;case 35665:return ap;case 35666:return cp;case 35674:return lp;case 35675:return hp;case 35676:return up;case 5124:case 35670:return dp;case 35667:case 35671:return fp;case 35668:case 35672:return pp;case 35669:case 35673:return mp;case 5125:return gp;case 36294:return vp;case 36295:return _p;case 36296:return xp;case 35678:case 36198:case 36298:case 36306:case 35682:return yp;case 35679:case 36299:case 36307:return Mp;case 35680:case 36300:case 36308:case 36293:return Sp;case 36289:case 36303:case 36311:case 36292:return Ep}}function bp(r,t){r.uniform1fv(this.addr,t)}function Tp(r,t){const e=Ui(t,this.size,2);r.uniform2fv(this.addr,e)}function Ap(r,t){const e=Ui(t,this.size,3);r.uniform3fv(this.addr,e)}function Cp(r,t){const e=Ui(t,this.size,4);r.uniform4fv(this.addr,e)}function Rp(r,t){const e=Ui(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Pp(r,t){const e=Ui(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Lp(r,t){const e=Ui(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Ip(r,t){r.uniform1iv(this.addr,t)}function Np(r,t){r.uniform2iv(this.addr,t)}function Dp(r,t){r.uniform3iv(this.addr,t)}function Up(r,t){r.uniform4iv(this.addr,t)}function Fp(r,t){r.uniform1uiv(this.addr,t)}function Op(r,t){r.uniform2uiv(this.addr,t)}function Bp(r,t){r.uniform3uiv(this.addr,t)}function zp(r,t){r.uniform4uiv(this.addr,t)}function Gp(r,t,e){const n=this.cache,i=t.length,s=Qs(e,i);me(n,s)||(r.uniform1iv(this.addr,s),ge(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||al,s[o])}function Hp(r,t,e){const n=this.cache,i=t.length,s=Qs(e,i);me(n,s)||(r.uniform1iv(this.addr,s),ge(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||hl,s[o])}function Vp(r,t,e){const n=this.cache,i=t.length,s=Qs(e,i);me(n,s)||(r.uniform1iv(this.addr,s),ge(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||ul,s[o])}function kp(r,t,e){const n=this.cache,i=t.length,s=Qs(e,i);me(n,s)||(r.uniform1iv(this.addr,s),ge(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||ll,s[o])}function Wp(r){switch(r){case 5126:return bp;case 35664:return Tp;case 35665:return Ap;case 35666:return Cp;case 35674:return Rp;case 35675:return Pp;case 35676:return Lp;case 5124:case 35670:return Ip;case 35667:case 35671:return Np;case 35668:case 35672:return Dp;case 35669:case 35673:return Up;case 5125:return Fp;case 36294:return Op;case 36295:return Bp;case 36296:return zp;case 35678:case 36198:case 36298:case 36306:case 35682:return Gp;case 35679:case 36299:case 36307:return Hp;case 35680:case 36300:case 36308:case 36293:return Vp;case 36289:case 36303:case 36311:case 36292:return kp}}class qp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=wp(e.type)}}class Xp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Wp(e.type)}}class Yp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const zr=/(\w+)(\])?(\[|\.)?/g;function ka(r,t){r.seq.push(t),r.map[t.id]=t}function jp(r,t,e){const n=r.name,i=n.length;for(zr.lastIndex=0;;){const s=zr.exec(n),o=zr.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){ka(e,l===void 0?new qp(a,r,t):new Xp(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new Yp(a),ka(e,d)),e=d}}}class Gs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);jp(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Wa(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Zp=37297;let Kp=0;function $p(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Jp(r){const t=Jt.getPrimaries(Jt.workingColorSpace),e=Jt.getPrimaries(r);let n;switch(t===e?n="":t===qs&&e===Ws?n="LinearDisplayP3ToLinearSRGB":t===Ws&&e===qs&&(n="LinearSRGBToLinearDisplayP3"),r){case wn:case Ks:return[n,"LinearTransferOETF"];case ye:case mo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function qa(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+$p(r.getShaderSource(t),o)}else return i}function Qp(r,t){const e=Jp(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function tm(r,t){let e;switch(t){case uh:e="Linear";break;case dh:e="Reinhard";break;case fh:e="OptimizedCineon";break;case Nc:e="ACESFilmic";break;case mh:e="AgX";break;case ph:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function em(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Si).join(`
`)}function nm(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Si).join(`
`)}function im(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function sm(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Si(r){return r!==""}function Xa(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ya(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const rm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ao(r){return r.replace(rm,am)}const om=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function am(r,t){let e=Gt[t];if(e===void 0){const n=om.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ao(e)}const cm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ja(r){return r.replace(cm,lm)}function lm(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Za(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function hm(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Pc?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Lc?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Mn&&(t="SHADOWMAP_TYPE_VSM"),t}function um(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ci:case Ri:t="ENVMAP_TYPE_CUBE";break;case Zs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function dm(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ri:t="ENVMAP_MODE_REFRACTION";break}return t}function fm(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ic:t="ENVMAP_BLENDING_MULTIPLY";break;case lh:t="ENVMAP_BLENDING_MIX";break;case hh:t="ENVMAP_BLENDING_ADD";break}return t}function pm(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function mm(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=hm(e),l=um(e),h=dm(e),d=fm(e),u=pm(e),p=e.isWebGL2?"":em(e),g=nm(e),v=im(s),m=i.createProgram();let f,_,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Si).join(`
`),f.length>0&&(f+=`
`),_=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Si).join(`
`),_.length>0&&(_+=`
`)):(f=[Za(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Si).join(`
`),_=[p,Za(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Dn?"#define TONE_MAPPING":"",e.toneMapping!==Dn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Dn?tm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,Qp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Si).join(`
`)),o=ao(o),o=Xa(o,e),o=Ya(o,e),a=ao(a),a=Xa(a,e),a=Ya(a,e),o=ja(o),a=ja(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===fa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const M=x+f+o,R=x+_+a,b=Wa(i,i.VERTEX_SHADER,M),A=Wa(i,i.FRAGMENT_SHADER,R);i.attachShader(m,b),i.attachShader(m,A),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function U(z){if(r.debug.checkShaderErrors){const B=i.getProgramInfoLog(m).trim(),P=i.getShaderInfoLog(b).trim(),I=i.getShaderInfoLog(A).trim();let L=!0,Z=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(L=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,b,A);else{const V=qa(i,b,"vertex"),k=qa(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+B+`
`+V+`
`+k)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(P===""||I==="")&&(Z=!1);Z&&(z.diagnostics={runnable:L,programLog:B,vertexShader:{log:P,prefix:f},fragmentShader:{log:I,prefix:_}})}i.deleteShader(b),i.deleteShader(A),S=new Gs(i,m),E=sm(i,m)}let S;this.getUniforms=function(){return S===void 0&&U(this),S};let E;this.getAttributes=function(){return E===void 0&&U(this),E};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=i.getProgramParameter(m,Zp)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Kp++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=A,this}let gm=0;class vm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new _m(t),e.set(t,n)),n}}class _m{constructor(t){this.id=gm++,this.code=t,this.usedTimes=0}}function xm(r,t,e,n,i,s,o){const a=new Kc,c=new vm,l=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function m(S,E,F,z,B){const P=z.fog,I=B.geometry,L=S.isMeshStandardMaterial?z.environment:null,Z=(S.isMeshStandardMaterial?e:t).get(S.envMap||L),V=Z&&Z.mapping===Zs?Z.image.height:null,k=g[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const K=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Q=K!==void 0?K.length:0;let j=0;I.morphAttributes.position!==void 0&&(j=1),I.morphAttributes.normal!==void 0&&(j=2),I.morphAttributes.color!==void 0&&(j=3);let Y,tt,ut,Mt;if(k){const Ce=cn[k];Y=Ce.vertexShader,tt=Ce.fragmentShader}else Y=S.vertexShader,tt=S.fragmentShader,c.update(S),ut=c.getVertexShaderID(S),Mt=c.getFragmentShaderID(S);const gt=r.getRenderTarget(),Pt=B.isInstancedMesh===!0,Ut=B.isBatchedMesh===!0,Et=!!S.map,Nt=!!S.matcap,N=!!Z,at=!!S.aoMap,J=!!S.lightMap,rt=!!S.bumpMap,$=!!S.normalMap,bt=!!S.displacementMap,mt=!!S.emissiveMap,T=!!S.metalnessMap,w=!!S.roughnessMap,H=S.anisotropy>0,st=S.clearcoat>0,nt=S.iridescence>0,et=S.sheen>0,St=S.transmission>0,dt=H&&!!S.anisotropyMap,xt=st&&!!S.clearcoatMap,At=st&&!!S.clearcoatNormalMap,Ot=st&&!!S.clearcoatRoughnessMap,it=nt&&!!S.iridescenceMap,jt=nt&&!!S.iridescenceThicknessMap,Xt=et&&!!S.sheenColorMap,Dt=et&&!!S.sheenRoughnessMap,Tt=!!S.specularMap,yt=!!S.specularColorMap,zt=!!S.specularIntensityMap,$t=St&&!!S.transmissionMap,oe=St&&!!S.thicknessMap,Vt=!!S.gradientMap,ct=!!S.alphaMap,D=S.alphaTest>0,ft=!!S.alphaHash,pt=!!S.extensions,Lt=!!I.attributes.uv1,Ct=!!I.attributes.uv2,Qt=!!I.attributes.uv3;let te=Dn;return S.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(te=r.toneMapping),{isWebGL2:h,shaderID:k,shaderType:S.type,shaderName:S.name,vertexShader:Y,fragmentShader:tt,defines:S.defines,customVertexShaderID:ut,customFragmentShaderID:Mt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ut,instancing:Pt,instancingColor:Pt&&B.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:gt===null?r.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:wn,map:Et,matcap:Nt,envMap:N,envMapMode:N&&Z.mapping,envMapCubeUVHeight:V,aoMap:at,lightMap:J,bumpMap:rt,normalMap:$,displacementMap:u&&bt,emissiveMap:mt,normalMapObjectSpace:$&&S.normalMapType===Ah,normalMapTangentSpace:$&&S.normalMapType===kc,metalnessMap:T,roughnessMap:w,anisotropy:H,anisotropyMap:dt,clearcoat:st,clearcoatMap:xt,clearcoatNormalMap:At,clearcoatRoughnessMap:Ot,iridescence:nt,iridescenceMap:it,iridescenceThicknessMap:jt,sheen:et,sheenColorMap:Xt,sheenRoughnessMap:Dt,specularMap:Tt,specularColorMap:yt,specularIntensityMap:zt,transmission:St,transmissionMap:$t,thicknessMap:oe,gradientMap:Vt,opaque:S.transparent===!1&&S.blending===bi,alphaMap:ct,alphaTest:D,alphaHash:ft,combine:S.combine,mapUv:Et&&v(S.map.channel),aoMapUv:at&&v(S.aoMap.channel),lightMapUv:J&&v(S.lightMap.channel),bumpMapUv:rt&&v(S.bumpMap.channel),normalMapUv:$&&v(S.normalMap.channel),displacementMapUv:bt&&v(S.displacementMap.channel),emissiveMapUv:mt&&v(S.emissiveMap.channel),metalnessMapUv:T&&v(S.metalnessMap.channel),roughnessMapUv:w&&v(S.roughnessMap.channel),anisotropyMapUv:dt&&v(S.anisotropyMap.channel),clearcoatMapUv:xt&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:At&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&v(S.sheenRoughnessMap.channel),specularMapUv:Tt&&v(S.specularMap.channel),specularColorMapUv:yt&&v(S.specularColorMap.channel),specularIntensityMapUv:zt&&v(S.specularIntensityMap.channel),transmissionMapUv:$t&&v(S.transmissionMap.channel),thicknessMapUv:oe&&v(S.thicknessMap.channel),alphaMapUv:ct&&v(S.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&($||H),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUv1s:Lt,vertexUv2s:Ct,vertexUv3s:Qt,pointsUvs:B.isPoints===!0&&!!I.attributes.uv&&(Et||ct),fog:!!P,useFog:S.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:B.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:j,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:te,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Et&&S.map.isVideoTexture===!0&&Jt.getTransfer(S.map.colorSpace)===ie,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Sn,flipSided:S.side===Ue,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:pt&&S.extensions.derivatives===!0,extensionFragDepth:pt&&S.extensions.fragDepth===!0,extensionDrawBuffers:pt&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:pt&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pt&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const F in S.defines)E.push(F),E.push(S.defines[F]);return S.isRawShaderMaterial===!1&&(_(E,S),x(E,S),E.push(r.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function _(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function x(S,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function M(S){const E=g[S.type];let F;if(E){const z=cn[E];F=tu.clone(z.uniforms)}else F=S.uniforms;return F}function R(S,E){let F;for(let z=0,B=l.length;z<B;z++){const P=l[z];if(P.cacheKey===E){F=P,++F.usedTimes;break}}return F===void 0&&(F=new mm(r,E,S,s),l.push(F)),F}function b(S){if(--S.usedTimes===0){const E=l.indexOf(S);l[E]=l[l.length-1],l.pop(),S.destroy()}}function A(S){c.remove(S)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:R,releaseProgram:b,releaseShaderCache:A,programs:l,dispose:U}}function ym(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Mm(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Ka(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function $a(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,p,g,v,m){let f=r[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},r[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=v,f.group=m),t++,f}function a(d,u,p,g,v,m){const f=o(d,u,p,g,v,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function c(d,u,p,g,v,m){const f=o(d,u,p,g,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function l(d,u){e.length>1&&e.sort(d||Mm),n.length>1&&n.sort(u||Ka),i.length>1&&i.sort(u||Ka)}function h(){for(let d=t,u=r.length;d<u;d++){const p=r[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function Sm(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new $a,r.set(n,[o])):i>=s.length?(o=new $a,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Em(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Yt};break;case"SpotLight":e={position:new O,direction:new O,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new O,halfWidth:new O,halfHeight:new O};break}return r[t.id]=e,e}}}function wm(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let bm=0;function Tm(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Am(r,t){const e=new Em,n=wm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new O);const s=new O,o=new he,a=new he;function c(h,d){let u=0,p=0,g=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let v=0,m=0,f=0,_=0,x=0,M=0,R=0,b=0,A=0,U=0,S=0;h.sort(Tm);const E=d===!0?Math.PI:1;for(let z=0,B=h.length;z<B;z++){const P=h[z],I=P.color,L=P.intensity,Z=P.distance,V=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=I.r*L*E,p+=I.g*L*E,g+=I.b*L*E;else if(P.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(P.sh.coefficients[k],L);S++}else if(P.isDirectionalLight){const k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity*E),P.castShadow){const K=P.shadow,Q=n.get(P);Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,i.directionalShadow[v]=Q,i.directionalShadowMap[v]=V,i.directionalShadowMatrix[v]=P.shadow.matrix,M++}i.directional[v]=k,v++}else if(P.isSpotLight){const k=e.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(I).multiplyScalar(L*E),k.distance=Z,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,i.spot[f]=k;const K=P.shadow;if(P.map&&(i.spotLightMap[A]=P.map,A++,K.updateMatrices(P),P.castShadow&&U++),i.spotLightMatrix[f]=K.matrix,P.castShadow){const Q=n.get(P);Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,i.spotShadow[f]=Q,i.spotShadowMap[f]=V,b++}f++}else if(P.isRectAreaLight){const k=e.get(P);k.color.copy(I).multiplyScalar(L),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),i.rectArea[_]=k,_++}else if(P.isPointLight){const k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity*E),k.distance=P.distance,k.decay=P.decay,P.castShadow){const K=P.shadow,Q=n.get(P);Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,Q.shadowCameraNear=K.camera.near,Q.shadowCameraFar=K.camera.far,i.pointShadow[m]=Q,i.pointShadowMap[m]=V,i.pointShadowMatrix[m]=P.shadow.matrix,R++}i.point[m]=k,m++}else if(P.isHemisphereLight){const k=e.get(P);k.skyColor.copy(P.color).multiplyScalar(L*E),k.groundColor.copy(P.groundColor).multiplyScalar(L*E),i.hemi[x]=k,x++}}_>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=p,i.ambient[2]=g;const F=i.hash;(F.directionalLength!==v||F.pointLength!==m||F.spotLength!==f||F.rectAreaLength!==_||F.hemiLength!==x||F.numDirectionalShadows!==M||F.numPointShadows!==R||F.numSpotShadows!==b||F.numSpotMaps!==A||F.numLightProbes!==S)&&(i.directional.length=v,i.spot.length=f,i.rectArea.length=_,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=b+A-U,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=S,F.directionalLength=v,F.pointLength=m,F.spotLength=f,F.rectAreaLength=_,F.hemiLength=x,F.numDirectionalShadows=M,F.numPointShadows=R,F.numSpotShadows=b,F.numSpotMaps=A,F.numLightProbes=S,i.version=bm++)}function l(h,d){let u=0,p=0,g=0,v=0,m=0;const f=d.matrixWorldInverse;for(let _=0,x=h.length;_<x;_++){const M=h[_];if(M.isDirectionalLight){const R=i.directional[u];R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(f),u++}else if(M.isSpotLight){const R=i.spot[g];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(f),R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(f),g++}else if(M.isRectAreaLight){const R=i.rectArea[v];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(f),a.identity(),o.copy(M.matrixWorld),o.premultiply(f),a.extractRotation(o),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){const R=i.point[p];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(f),p++}else if(M.isHemisphereLight){const R=i.hemi[m];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(f),m++}}}return{setup:c,setupView:l,state:i}}function Ja(r,t){const e=new Am(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function c(d){e.setup(n,d)}function l(d){e.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Cm(r,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let c;return a===void 0?(c=new Ja(r,t),e.set(s,[c])):o>=a.length?(c=new Ja(r,t),a.push(c)):c=a[o],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class Rm extends Di{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Pm extends Di{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Lm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Im=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Nm(r,t,e){let n=new go;const i=new ht,s=new ht,o=new Me,a=new Rm({depthPacking:Th}),c=new Pm,l={},h=e.maxTextureSize,d={[Fn]:Ue,[Ue]:Fn,[Sn]:Sn},u=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Lm,fragmentShader:Im}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new Fe;g.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Wt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pc;let f=this.type;this.render=function(b,A,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const S=r.getRenderTarget(),E=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),z=r.state;z.setBlending(Nn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const B=f!==Mn&&this.type===Mn,P=f===Mn&&this.type!==Mn;for(let I=0,L=b.length;I<L;I++){const Z=b[I],V=Z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const k=V.getFrameExtents();if(i.multiply(k),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/k.x),i.x=s.x*k.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/k.y),i.y=s.y*k.y,V.mapSize.y=s.y)),V.map===null||B===!0||P===!0){const Q=this.type!==Mn?{minFilter:Ie,magFilter:Ie}:{};V.map!==null&&V.map.dispose(),V.map=new Jn(i.x,i.y,Q),V.map.texture.name=Z.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const K=V.getViewportCount();for(let Q=0;Q<K;Q++){const j=V.getViewport(Q);o.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),z.viewport(o),V.updateMatrices(Z,Q),n=V.getFrustum(),M(A,U,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===Mn&&_(V,U),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,r.setRenderTarget(S,E,F)};function _(b,A){const U=t.update(v);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Jn(i.x,i.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(A,null,U,u,v,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(A,null,U,p,v,null)}function x(b,A,U,S){let E=null;const F=U.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(F!==void 0)E=F;else if(E=U.isPointLight===!0?c:a,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=E.uuid,B=A.uuid;let P=l[z];P===void 0&&(P={},l[z]=P);let I=P[B];I===void 0&&(I=E.clone(),P[B]=I,A.addEventListener("dispose",R)),E=I}if(E.visible=A.visible,E.wireframe=A.wireframe,S===Mn?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:d[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,U.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const z=r.properties.get(E);z.light=U}return E}function M(b,A,U,S,E){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===Mn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,b.matrixWorld);const B=t.update(b),P=b.material;if(Array.isArray(P)){const I=B.groups;for(let L=0,Z=I.length;L<Z;L++){const V=I[L],k=P[V.materialIndex];if(k&&k.visible){const K=x(b,k,S,E);b.onBeforeShadow(r,b,A,U,B,K,V),r.renderBufferDirect(U,null,B,K,b,V),b.onAfterShadow(r,b,A,U,B,K,V)}}}else if(P.visible){const I=x(b,P,S,E);b.onBeforeShadow(r,b,A,U,B,I,null),r.renderBufferDirect(U,null,B,I,b,null),b.onAfterShadow(r,b,A,U,B,I,null)}}const z=b.children;for(let B=0,P=z.length;B<P;B++)M(z[B],A,U,S,E)}function R(b){b.target.removeEventListener("dispose",R);for(const U in l){const S=l[U],E=b.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function Dm(r,t,e){const n=e.isWebGL2;function i(){let D=!1;const ft=new Me;let pt=null;const Lt=new Me(0,0,0,0);return{setMask:function(Ct){pt!==Ct&&!D&&(r.colorMask(Ct,Ct,Ct,Ct),pt=Ct)},setLocked:function(Ct){D=Ct},setClear:function(Ct,Qt,te,ve,Ce){Ce===!0&&(Ct*=ve,Qt*=ve,te*=ve),ft.set(Ct,Qt,te,ve),Lt.equals(ft)===!1&&(r.clearColor(Ct,Qt,te,ve),Lt.copy(ft))},reset:function(){D=!1,pt=null,Lt.set(-1,0,0,0)}}}function s(){let D=!1,ft=null,pt=null,Lt=null;return{setTest:function(Ct){Ct?Ut(r.DEPTH_TEST):Et(r.DEPTH_TEST)},setMask:function(Ct){ft!==Ct&&!D&&(r.depthMask(Ct),ft=Ct)},setFunc:function(Ct){if(pt!==Ct){switch(Ct){case nh:r.depthFunc(r.NEVER);break;case ih:r.depthFunc(r.ALWAYS);break;case sh:r.depthFunc(r.LESS);break;case Vs:r.depthFunc(r.LEQUAL);break;case rh:r.depthFunc(r.EQUAL);break;case oh:r.depthFunc(r.GEQUAL);break;case ah:r.depthFunc(r.GREATER);break;case ch:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pt=Ct}},setLocked:function(Ct){D=Ct},setClear:function(Ct){Lt!==Ct&&(r.clearDepth(Ct),Lt=Ct)},reset:function(){D=!1,ft=null,pt=null,Lt=null}}}function o(){let D=!1,ft=null,pt=null,Lt=null,Ct=null,Qt=null,te=null,ve=null,Ce=null;return{setTest:function(ee){D||(ee?Ut(r.STENCIL_TEST):Et(r.STENCIL_TEST))},setMask:function(ee){ft!==ee&&!D&&(r.stencilMask(ee),ft=ee)},setFunc:function(ee,Re,sn){(pt!==ee||Lt!==Re||Ct!==sn)&&(r.stencilFunc(ee,Re,sn),pt=ee,Lt=Re,Ct=sn)},setOp:function(ee,Re,sn){(Qt!==ee||te!==Re||ve!==sn)&&(r.stencilOp(ee,Re,sn),Qt=ee,te=Re,ve=sn)},setLocked:function(ee){D=ee},setClear:function(ee){Ce!==ee&&(r.clearStencil(ee),Ce=ee)},reset:function(){D=!1,ft=null,pt=null,Lt=null,Ct=null,Qt=null,te=null,ve=null,Ce=null}}}const a=new i,c=new s,l=new o,h=new WeakMap,d=new WeakMap;let u={},p={},g=new WeakMap,v=[],m=null,f=!1,_=null,x=null,M=null,R=null,b=null,A=null,U=null,S=new Yt(0,0,0),E=0,F=!1,z=null,B=null,P=null,I=null,L=null;const Z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,k=0;const K=r.getParameter(r.VERSION);K.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(K)[1]),V=k>=1):K.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),V=k>=2);let Q=null,j={};const Y=r.getParameter(r.SCISSOR_BOX),tt=r.getParameter(r.VIEWPORT),ut=new Me().fromArray(Y),Mt=new Me().fromArray(tt);function gt(D,ft,pt,Lt){const Ct=new Uint8Array(4),Qt=r.createTexture();r.bindTexture(D,Qt),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let te=0;te<pt;te++)n&&(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)?r.texImage3D(ft,0,r.RGBA,1,1,Lt,0,r.RGBA,r.UNSIGNED_BYTE,Ct):r.texImage2D(ft+te,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ct);return Qt}const Pt={};Pt[r.TEXTURE_2D]=gt(r.TEXTURE_2D,r.TEXTURE_2D,1),Pt[r.TEXTURE_CUBE_MAP]=gt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Pt[r.TEXTURE_2D_ARRAY]=gt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Pt[r.TEXTURE_3D]=gt(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ut(r.DEPTH_TEST),c.setFunc(Vs),mt(!1),T(Do),Ut(r.CULL_FACE),$(Nn);function Ut(D){u[D]!==!0&&(r.enable(D),u[D]=!0)}function Et(D){u[D]!==!1&&(r.disable(D),u[D]=!1)}function Nt(D,ft){return p[D]!==ft?(r.bindFramebuffer(D,ft),p[D]=ft,n&&(D===r.DRAW_FRAMEBUFFER&&(p[r.FRAMEBUFFER]=ft),D===r.FRAMEBUFFER&&(p[r.DRAW_FRAMEBUFFER]=ft)),!0):!1}function N(D,ft){let pt=v,Lt=!1;if(D)if(pt=g.get(ft),pt===void 0&&(pt=[],g.set(ft,pt)),D.isWebGLMultipleRenderTargets){const Ct=D.texture;if(pt.length!==Ct.length||pt[0]!==r.COLOR_ATTACHMENT0){for(let Qt=0,te=Ct.length;Qt<te;Qt++)pt[Qt]=r.COLOR_ATTACHMENT0+Qt;pt.length=Ct.length,Lt=!0}}else pt[0]!==r.COLOR_ATTACHMENT0&&(pt[0]=r.COLOR_ATTACHMENT0,Lt=!0);else pt[0]!==r.BACK&&(pt[0]=r.BACK,Lt=!0);Lt&&(e.isWebGL2?r.drawBuffers(pt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(pt))}function at(D){return m!==D?(r.useProgram(D),m=D,!0):!1}const J={[Xn]:r.FUNC_ADD,[Hl]:r.FUNC_SUBTRACT,[Vl]:r.FUNC_REVERSE_SUBTRACT};if(n)J[Oo]=r.MIN,J[Bo]=r.MAX;else{const D=t.get("EXT_blend_minmax");D!==null&&(J[Oo]=D.MIN_EXT,J[Bo]=D.MAX_EXT)}const rt={[kl]:r.ZERO,[Wl]:r.ONE,[ql]:r.SRC_COLOR,[Jr]:r.SRC_ALPHA,[$l]:r.SRC_ALPHA_SATURATE,[Zl]:r.DST_COLOR,[Yl]:r.DST_ALPHA,[Xl]:r.ONE_MINUS_SRC_COLOR,[Qr]:r.ONE_MINUS_SRC_ALPHA,[Kl]:r.ONE_MINUS_DST_COLOR,[jl]:r.ONE_MINUS_DST_ALPHA,[Jl]:r.CONSTANT_COLOR,[Ql]:r.ONE_MINUS_CONSTANT_COLOR,[th]:r.CONSTANT_ALPHA,[eh]:r.ONE_MINUS_CONSTANT_ALPHA};function $(D,ft,pt,Lt,Ct,Qt,te,ve,Ce,ee){if(D===Nn){f===!0&&(Et(r.BLEND),f=!1);return}if(f===!1&&(Ut(r.BLEND),f=!0),D!==Gl){if(D!==_||ee!==F){if((x!==Xn||b!==Xn)&&(r.blendEquation(r.FUNC_ADD),x=Xn,b=Xn),ee)switch(D){case bi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $r:r.blendFunc(r.ONE,r.ONE);break;case Uo:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Fo:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case bi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $r:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Uo:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Fo:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,R=null,A=null,U=null,S.set(0,0,0),E=0,_=D,F=ee}return}Ct=Ct||ft,Qt=Qt||pt,te=te||Lt,(ft!==x||Ct!==b)&&(r.blendEquationSeparate(J[ft],J[Ct]),x=ft,b=Ct),(pt!==M||Lt!==R||Qt!==A||te!==U)&&(r.blendFuncSeparate(rt[pt],rt[Lt],rt[Qt],rt[te]),M=pt,R=Lt,A=Qt,U=te),(ve.equals(S)===!1||Ce!==E)&&(r.blendColor(ve.r,ve.g,ve.b,Ce),S.copy(ve),E=Ce),_=D,F=!1}function bt(D,ft){D.side===Sn?Et(r.CULL_FACE):Ut(r.CULL_FACE);let pt=D.side===Ue;ft&&(pt=!pt),mt(pt),D.blending===bi&&D.transparent===!1?$(Nn):$(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),a.setMask(D.colorWrite);const Lt=D.stencilWrite;l.setTest(Lt),Lt&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),H(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ut(r.SAMPLE_ALPHA_TO_COVERAGE):Et(r.SAMPLE_ALPHA_TO_COVERAGE)}function mt(D){z!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),z=D)}function T(D){D!==Bl?(Ut(r.CULL_FACE),D!==B&&(D===Do?r.cullFace(r.BACK):D===zl?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Et(r.CULL_FACE),B=D}function w(D){D!==P&&(V&&r.lineWidth(D),P=D)}function H(D,ft,pt){D?(Ut(r.POLYGON_OFFSET_FILL),(I!==ft||L!==pt)&&(r.polygonOffset(ft,pt),I=ft,L=pt)):Et(r.POLYGON_OFFSET_FILL)}function st(D){D?Ut(r.SCISSOR_TEST):Et(r.SCISSOR_TEST)}function nt(D){D===void 0&&(D=r.TEXTURE0+Z-1),Q!==D&&(r.activeTexture(D),Q=D)}function et(D,ft,pt){pt===void 0&&(Q===null?pt=r.TEXTURE0+Z-1:pt=Q);let Lt=j[pt];Lt===void 0&&(Lt={type:void 0,texture:void 0},j[pt]=Lt),(Lt.type!==D||Lt.texture!==ft)&&(Q!==pt&&(r.activeTexture(pt),Q=pt),r.bindTexture(D,ft||Pt[D]),Lt.type=D,Lt.texture=ft)}function St(){const D=j[Q];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function dt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function At(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ot(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function jt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Xt(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Dt(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function zt(D){ut.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),ut.copy(D))}function $t(D){Mt.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),Mt.copy(D))}function oe(D,ft){let pt=d.get(ft);pt===void 0&&(pt=new WeakMap,d.set(ft,pt));let Lt=pt.get(D);Lt===void 0&&(Lt=r.getUniformBlockIndex(ft,D.name),pt.set(D,Lt))}function Vt(D,ft){const Lt=d.get(ft).get(D);h.get(ft)!==Lt&&(r.uniformBlockBinding(ft,Lt,D.__bindingPointIndex),h.set(ft,Lt))}function ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},Q=null,j={},p={},g=new WeakMap,v=[],m=null,f=!1,_=null,x=null,M=null,R=null,b=null,A=null,U=null,S=new Yt(0,0,0),E=0,F=!1,z=null,B=null,P=null,I=null,L=null,ut.set(0,0,r.canvas.width,r.canvas.height),Mt.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ut,disable:Et,bindFramebuffer:Nt,drawBuffers:N,useProgram:at,setBlending:$,setMaterial:bt,setFlipSided:mt,setCullFace:T,setLineWidth:w,setPolygonOffset:H,setScissorTest:st,activeTexture:nt,bindTexture:et,unbindTexture:St,compressedTexImage2D:dt,compressedTexImage3D:xt,texImage2D:Tt,texImage3D:yt,updateUBOMapping:oe,uniformBlockBinding:Vt,texStorage2D:Xt,texStorage3D:Dt,texSubImage2D:At,texSubImage3D:Ot,compressedTexSubImage2D:it,compressedTexSubImage3D:jt,scissor:zt,viewport:$t,reset:ct}}function Um(r,t,e,n,i,s,o){const a=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,w){return p?new OffscreenCanvas(T,w):Ys("canvas")}function v(T,w,H,st){let nt=1;if((T.width>st||T.height>st)&&(nt=st/Math.max(T.width,T.height)),nt<1||w===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const et=w?oo:Math.floor,St=et(nt*T.width),dt=et(nt*T.height);d===void 0&&(d=g(St,dt));const xt=H?g(St,dt):d;return xt.width=St,xt.height=dt,xt.getContext("2d").drawImage(T,0,0,St,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+St+"x"+dt+")."),xt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function m(T){return pa(T.width)&&pa(T.height)}function f(T){return a?!1:T.wrapS!==Qe||T.wrapT!==Qe||T.minFilter!==Ie&&T.minFilter!==qe}function _(T,w){return T.generateMipmaps&&w&&T.minFilter!==Ie&&T.minFilter!==qe}function x(T){r.generateMipmap(T)}function M(T,w,H,st,nt=!1){if(a===!1)return w;if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let et=w;if(w===r.RED&&(H===r.FLOAT&&(et=r.R32F),H===r.HALF_FLOAT&&(et=r.R16F),H===r.UNSIGNED_BYTE&&(et=r.R8)),w===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(et=r.R8UI),H===r.UNSIGNED_SHORT&&(et=r.R16UI),H===r.UNSIGNED_INT&&(et=r.R32UI),H===r.BYTE&&(et=r.R8I),H===r.SHORT&&(et=r.R16I),H===r.INT&&(et=r.R32I)),w===r.RG&&(H===r.FLOAT&&(et=r.RG32F),H===r.HALF_FLOAT&&(et=r.RG16F),H===r.UNSIGNED_BYTE&&(et=r.RG8)),w===r.RGBA){const St=nt?ks:Jt.getTransfer(st);H===r.FLOAT&&(et=r.RGBA32F),H===r.HALF_FLOAT&&(et=r.RGBA16F),H===r.UNSIGNED_BYTE&&(et=St===ie?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(et=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(et=r.RGB5_A1)}return(et===r.R16F||et===r.R32F||et===r.RG16F||et===r.RG32F||et===r.RGBA16F||et===r.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function R(T,w,H){return _(T,H)===!0||T.isFramebufferTexture&&T.minFilter!==Ie&&T.minFilter!==qe?Math.log2(Math.max(w.width,w.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?w.mipmaps.length:1}function b(T){return T===Ie||T===zo||T===hr?r.NEAREST:r.LINEAR}function A(T){const w=T.target;w.removeEventListener("dispose",A),S(w),w.isVideoTexture&&h.delete(w)}function U(T){const w=T.target;w.removeEventListener("dispose",U),F(w)}function S(T){const w=n.get(T);if(w.__webglInit===void 0)return;const H=T.source,st=u.get(H);if(st){const nt=st[w.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&E(T),Object.keys(st).length===0&&u.delete(H)}n.remove(T)}function E(T){const w=n.get(T);r.deleteTexture(w.__webglTexture);const H=T.source,st=u.get(H);delete st[w.__cacheKey],o.memory.textures--}function F(T){const w=T.texture,H=n.get(T),st=n.get(w);if(st.__webglTexture!==void 0&&(r.deleteTexture(st.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(H.__webglFramebuffer[nt]))for(let et=0;et<H.__webglFramebuffer[nt].length;et++)r.deleteFramebuffer(H.__webglFramebuffer[nt][et]);else r.deleteFramebuffer(H.__webglFramebuffer[nt]);H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer[nt])}else{if(Array.isArray(H.__webglFramebuffer))for(let nt=0;nt<H.__webglFramebuffer.length;nt++)r.deleteFramebuffer(H.__webglFramebuffer[nt]);else r.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&r.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let nt=0;nt<H.__webglColorRenderbuffer.length;nt++)H.__webglColorRenderbuffer[nt]&&r.deleteRenderbuffer(H.__webglColorRenderbuffer[nt]);H.__webglDepthRenderbuffer&&r.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let nt=0,et=w.length;nt<et;nt++){const St=n.get(w[nt]);St.__webglTexture&&(r.deleteTexture(St.__webglTexture),o.memory.textures--),n.remove(w[nt])}n.remove(w),n.remove(T)}let z=0;function B(){z=0}function P(){const T=z;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),z+=1,T}function I(T){const w=[];return w.push(T.wrapS),w.push(T.wrapT),w.push(T.wrapR||0),w.push(T.magFilter),w.push(T.minFilter),w.push(T.anisotropy),w.push(T.internalFormat),w.push(T.format),w.push(T.type),w.push(T.generateMipmaps),w.push(T.premultiplyAlpha),w.push(T.flipY),w.push(T.unpackAlignment),w.push(T.colorSpace),w.join()}function L(T,w){const H=n.get(T);if(T.isVideoTexture&&bt(T),T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){const st=T.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ut(H,T,w);return}}e.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+w)}function Z(T,w){const H=n.get(T);if(T.version>0&&H.__version!==T.version){ut(H,T,w);return}e.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+w)}function V(T,w){const H=n.get(T);if(T.version>0&&H.__version!==T.version){ut(H,T,w);return}e.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+w)}function k(T,w){const H=n.get(T);if(T.version>0&&H.__version!==T.version){Mt(H,T,w);return}e.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+w)}const K={[no]:r.REPEAT,[Qe]:r.CLAMP_TO_EDGE,[io]:r.MIRRORED_REPEAT},Q={[Ie]:r.NEAREST,[zo]:r.NEAREST_MIPMAP_NEAREST,[hr]:r.NEAREST_MIPMAP_LINEAR,[qe]:r.LINEAR,[gh]:r.LINEAR_MIPMAP_NEAREST,[$i]:r.LINEAR_MIPMAP_LINEAR},j={[Ch]:r.NEVER,[Dh]:r.ALWAYS,[Rh]:r.LESS,[Wc]:r.LEQUAL,[Ph]:r.EQUAL,[Nh]:r.GEQUAL,[Lh]:r.GREATER,[Ih]:r.NOTEQUAL};function Y(T,w,H){if(H?(r.texParameteri(T,r.TEXTURE_WRAP_S,K[w.wrapS]),r.texParameteri(T,r.TEXTURE_WRAP_T,K[w.wrapT]),(T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY)&&r.texParameteri(T,r.TEXTURE_WRAP_R,K[w.wrapR]),r.texParameteri(T,r.TEXTURE_MAG_FILTER,Q[w.magFilter]),r.texParameteri(T,r.TEXTURE_MIN_FILTER,Q[w.minFilter])):(r.texParameteri(T,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(T,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY)&&r.texParameteri(T,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(w.wrapS!==Qe||w.wrapT!==Qe)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(T,r.TEXTURE_MAG_FILTER,b(w.magFilter)),r.texParameteri(T,r.TEXTURE_MIN_FILTER,b(w.minFilter)),w.minFilter!==Ie&&w.minFilter!==qe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(r.texParameteri(T,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(T,r.TEXTURE_COMPARE_FUNC,j[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const st=t.get("EXT_texture_filter_anisotropic");if(w.magFilter===Ie||w.minFilter!==hr&&w.minFilter!==$i||w.type===In&&t.has("OES_texture_float_linear")===!1||a===!1&&w.type===Ji&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(r.texParameterf(T,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function tt(T,w){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,w.addEventListener("dispose",A));const st=w.source;let nt=u.get(st);nt===void 0&&(nt={},u.set(st,nt));const et=I(w);if(et!==T.__cacheKey){nt[et]===void 0&&(nt[et]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,H=!0),nt[et].usedTimes++;const St=nt[T.__cacheKey];St!==void 0&&(nt[T.__cacheKey].usedTimes--,St.usedTimes===0&&E(w)),T.__cacheKey=et,T.__webglTexture=nt[et].texture}return H}function ut(T,w,H){let st=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(st=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(st=r.TEXTURE_3D);const nt=tt(T,w),et=w.source;e.bindTexture(st,T.__webglTexture,r.TEXTURE0+H);const St=n.get(et);if(et.version!==St.__version||nt===!0){e.activeTexture(r.TEXTURE0+H);const dt=Jt.getPrimaries(Jt.workingColorSpace),xt=w.colorSpace===Ye?null:Jt.getPrimaries(w.colorSpace),At=w.colorSpace===Ye||dt===xt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Ot=f(w)&&m(w.image)===!1;let it=v(w.image,Ot,!1,i.maxTextureSize);it=mt(w,it);const jt=m(it)||a,Xt=s.convert(w.format,w.colorSpace);let Dt=s.convert(w.type),Tt=M(w.internalFormat,Xt,Dt,w.colorSpace,w.isVideoTexture);Y(st,w,jt);let yt;const zt=w.mipmaps,$t=a&&w.isVideoTexture!==!0&&Tt!==Hc,oe=St.__version===void 0||nt===!0,Vt=R(w,it,jt);if(w.isDepthTexture)Tt=r.DEPTH_COMPONENT,a?w.type===In?Tt=r.DEPTH_COMPONENT32F:w.type===Ln?Tt=r.DEPTH_COMPONENT24:w.type===Zn?Tt=r.DEPTH24_STENCIL8:Tt=r.DEPTH_COMPONENT16:w.type===In&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Kn&&Tt===r.DEPTH_COMPONENT&&w.type!==po&&w.type!==Ln&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Ln,Dt=s.convert(w.type)),w.format===Pi&&Tt===r.DEPTH_COMPONENT&&(Tt=r.DEPTH_STENCIL,w.type!==Zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Zn,Dt=s.convert(w.type))),oe&&($t?e.texStorage2D(r.TEXTURE_2D,1,Tt,it.width,it.height):e.texImage2D(r.TEXTURE_2D,0,Tt,it.width,it.height,0,Xt,Dt,null));else if(w.isDataTexture)if(zt.length>0&&jt){$t&&oe&&e.texStorage2D(r.TEXTURE_2D,Vt,Tt,zt[0].width,zt[0].height);for(let ct=0,D=zt.length;ct<D;ct++)yt=zt[ct],$t?e.texSubImage2D(r.TEXTURE_2D,ct,0,0,yt.width,yt.height,Xt,Dt,yt.data):e.texImage2D(r.TEXTURE_2D,ct,Tt,yt.width,yt.height,0,Xt,Dt,yt.data);w.generateMipmaps=!1}else $t?(oe&&e.texStorage2D(r.TEXTURE_2D,Vt,Tt,it.width,it.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,it.width,it.height,Xt,Dt,it.data)):e.texImage2D(r.TEXTURE_2D,0,Tt,it.width,it.height,0,Xt,Dt,it.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){$t&&oe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Vt,Tt,zt[0].width,zt[0].height,it.depth);for(let ct=0,D=zt.length;ct<D;ct++)yt=zt[ct],w.format!==tn?Xt!==null?$t?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,0,yt.width,yt.height,it.depth,Xt,yt.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ct,Tt,yt.width,yt.height,it.depth,0,yt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?e.texSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,0,yt.width,yt.height,it.depth,Xt,Dt,yt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,ct,Tt,yt.width,yt.height,it.depth,0,Xt,Dt,yt.data)}else{$t&&oe&&e.texStorage2D(r.TEXTURE_2D,Vt,Tt,zt[0].width,zt[0].height);for(let ct=0,D=zt.length;ct<D;ct++)yt=zt[ct],w.format!==tn?Xt!==null?$t?e.compressedTexSubImage2D(r.TEXTURE_2D,ct,0,0,yt.width,yt.height,Xt,yt.data):e.compressedTexImage2D(r.TEXTURE_2D,ct,Tt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?e.texSubImage2D(r.TEXTURE_2D,ct,0,0,yt.width,yt.height,Xt,Dt,yt.data):e.texImage2D(r.TEXTURE_2D,ct,Tt,yt.width,yt.height,0,Xt,Dt,yt.data)}else if(w.isDataArrayTexture)$t?(oe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Vt,Tt,it.width,it.height,it.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,Xt,Dt,it.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,Tt,it.width,it.height,it.depth,0,Xt,Dt,it.data);else if(w.isData3DTexture)$t?(oe&&e.texStorage3D(r.TEXTURE_3D,Vt,Tt,it.width,it.height,it.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,Xt,Dt,it.data)):e.texImage3D(r.TEXTURE_3D,0,Tt,it.width,it.height,it.depth,0,Xt,Dt,it.data);else if(w.isFramebufferTexture){if(oe)if($t)e.texStorage2D(r.TEXTURE_2D,Vt,Tt,it.width,it.height);else{let ct=it.width,D=it.height;for(let ft=0;ft<Vt;ft++)e.texImage2D(r.TEXTURE_2D,ft,Tt,ct,D,0,Xt,Dt,null),ct>>=1,D>>=1}}else if(zt.length>0&&jt){$t&&oe&&e.texStorage2D(r.TEXTURE_2D,Vt,Tt,zt[0].width,zt[0].height);for(let ct=0,D=zt.length;ct<D;ct++)yt=zt[ct],$t?e.texSubImage2D(r.TEXTURE_2D,ct,0,0,Xt,Dt,yt):e.texImage2D(r.TEXTURE_2D,ct,Tt,Xt,Dt,yt);w.generateMipmaps=!1}else $t?(oe&&e.texStorage2D(r.TEXTURE_2D,Vt,Tt,it.width,it.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,Xt,Dt,it)):e.texImage2D(r.TEXTURE_2D,0,Tt,Xt,Dt,it);_(w,jt)&&x(st),St.__version=et.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function Mt(T,w,H){if(w.image.length!==6)return;const st=tt(T,w),nt=w.source;e.bindTexture(r.TEXTURE_CUBE_MAP,T.__webglTexture,r.TEXTURE0+H);const et=n.get(nt);if(nt.version!==et.__version||st===!0){e.activeTexture(r.TEXTURE0+H);const St=Jt.getPrimaries(Jt.workingColorSpace),dt=w.colorSpace===Ye?null:Jt.getPrimaries(w.colorSpace),xt=w.colorSpace===Ye||St===dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const At=w.isCompressedTexture||w.image[0].isCompressedTexture,Ot=w.image[0]&&w.image[0].isDataTexture,it=[];for(let ct=0;ct<6;ct++)!At&&!Ot?it[ct]=v(w.image[ct],!1,!0,i.maxCubemapSize):it[ct]=Ot?w.image[ct].image:w.image[ct],it[ct]=mt(w,it[ct]);const jt=it[0],Xt=m(jt)||a,Dt=s.convert(w.format,w.colorSpace),Tt=s.convert(w.type),yt=M(w.internalFormat,Dt,Tt,w.colorSpace),zt=a&&w.isVideoTexture!==!0,$t=et.__version===void 0||st===!0;let oe=R(w,jt,Xt);Y(r.TEXTURE_CUBE_MAP,w,Xt);let Vt;if(At){zt&&$t&&e.texStorage2D(r.TEXTURE_CUBE_MAP,oe,yt,jt.width,jt.height);for(let ct=0;ct<6;ct++){Vt=it[ct].mipmaps;for(let D=0;D<Vt.length;D++){const ft=Vt[D];w.format!==tn?Dt!==null?zt?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,D,0,0,ft.width,ft.height,Dt,ft.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,D,yt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,D,0,0,ft.width,ft.height,Dt,Tt,ft.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,D,yt,ft.width,ft.height,0,Dt,Tt,ft.data)}}}else{Vt=w.mipmaps,zt&&$t&&(Vt.length>0&&oe++,e.texStorage2D(r.TEXTURE_CUBE_MAP,oe,yt,it[0].width,it[0].height));for(let ct=0;ct<6;ct++)if(Ot){zt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,it[ct].width,it[ct].height,Dt,Tt,it[ct].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,yt,it[ct].width,it[ct].height,0,Dt,Tt,it[ct].data);for(let D=0;D<Vt.length;D++){const pt=Vt[D].image[ct].image;zt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,D+1,0,0,pt.width,pt.height,Dt,Tt,pt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,D+1,yt,pt.width,pt.height,0,Dt,Tt,pt.data)}}else{zt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Dt,Tt,it[ct]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,yt,Dt,Tt,it[ct]);for(let D=0;D<Vt.length;D++){const ft=Vt[D];zt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,D+1,0,0,Dt,Tt,ft.image[ct]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,D+1,yt,Dt,Tt,ft.image[ct])}}}_(w,Xt)&&x(r.TEXTURE_CUBE_MAP),et.__version=nt.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function gt(T,w,H,st,nt,et){const St=s.convert(H.format,H.colorSpace),dt=s.convert(H.type),xt=M(H.internalFormat,St,dt,H.colorSpace);if(!n.get(w).__hasExternalTextures){const Ot=Math.max(1,w.width>>et),it=Math.max(1,w.height>>et);nt===r.TEXTURE_3D||nt===r.TEXTURE_2D_ARRAY?e.texImage3D(nt,et,xt,Ot,it,w.depth,0,St,dt,null):e.texImage2D(nt,et,xt,Ot,it,0,St,dt,null)}e.bindFramebuffer(r.FRAMEBUFFER,T),$(w)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,st,nt,n.get(H).__webglTexture,0,rt(w)):(nt===r.TEXTURE_2D||nt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,st,nt,n.get(H).__webglTexture,et),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Pt(T,w,H){if(r.bindRenderbuffer(r.RENDERBUFFER,T),w.depthBuffer&&!w.stencilBuffer){let st=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(H||$(w)){const nt=w.depthTexture;nt&&nt.isDepthTexture&&(nt.type===In?st=r.DEPTH_COMPONENT32F:nt.type===Ln&&(st=r.DEPTH_COMPONENT24));const et=rt(w);$(w)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,et,st,w.width,w.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,et,st,w.width,w.height)}else r.renderbufferStorage(r.RENDERBUFFER,st,w.width,w.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,T)}else if(w.depthBuffer&&w.stencilBuffer){const st=rt(w);H&&$(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,st,r.DEPTH24_STENCIL8,w.width,w.height):$(w)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,st,r.DEPTH24_STENCIL8,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,T)}else{const st=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let nt=0;nt<st.length;nt++){const et=st[nt],St=s.convert(et.format,et.colorSpace),dt=s.convert(et.type),xt=M(et.internalFormat,St,dt,et.colorSpace),At=rt(w);H&&$(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,At,xt,w.width,w.height):$(w)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,At,xt,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,xt,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ut(T,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,T),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),L(w.depthTexture,0);const st=n.get(w.depthTexture).__webglTexture,nt=rt(w);if(w.depthTexture.format===Kn)$(w)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,st,0,nt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,st,0);else if(w.depthTexture.format===Pi)$(w)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,st,0,nt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function Et(T){const w=n.get(T),H=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ut(w.__webglFramebuffer,T)}else if(H){w.__webglDepthbuffer=[];for(let st=0;st<6;st++)e.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[st]),w.__webglDepthbuffer[st]=r.createRenderbuffer(),Pt(w.__webglDepthbuffer[st],T,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=r.createRenderbuffer(),Pt(w.__webglDepthbuffer,T,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function Nt(T,w,H){const st=n.get(T);w!==void 0&&gt(st.__webglFramebuffer,T,T.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&Et(T)}function N(T){const w=T.texture,H=n.get(T),st=n.get(w);T.addEventListener("dispose",U),T.isWebGLMultipleRenderTargets!==!0&&(st.__webglTexture===void 0&&(st.__webglTexture=r.createTexture()),st.__version=w.version,o.memory.textures++);const nt=T.isWebGLCubeRenderTarget===!0,et=T.isWebGLMultipleRenderTargets===!0,St=m(T)||a;if(nt){H.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(a&&w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[dt]=[];for(let xt=0;xt<w.mipmaps.length;xt++)H.__webglFramebuffer[dt][xt]=r.createFramebuffer()}else H.__webglFramebuffer[dt]=r.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let dt=0;dt<w.mipmaps.length;dt++)H.__webglFramebuffer[dt]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(et)if(i.drawBuffers){const dt=T.texture;for(let xt=0,At=dt.length;xt<At;xt++){const Ot=n.get(dt[xt]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&$(T)===!1){const dt=et?w:[w];H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let xt=0;xt<dt.length;xt++){const At=dt[xt];H.__webglColorRenderbuffer[xt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[xt]);const Ot=s.convert(At.format,At.colorSpace),it=s.convert(At.type),jt=M(At.internalFormat,Ot,it,At.colorSpace,T.isXRRenderTarget===!0),Xt=rt(T);r.renderbufferStorageMultisample(r.RENDERBUFFER,Xt,jt,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.RENDERBUFFER,H.__webglColorRenderbuffer[xt])}r.bindRenderbuffer(r.RENDERBUFFER,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),Pt(H.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(nt){e.bindTexture(r.TEXTURE_CUBE_MAP,st.__webglTexture),Y(r.TEXTURE_CUBE_MAP,w,St);for(let dt=0;dt<6;dt++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let xt=0;xt<w.mipmaps.length;xt++)gt(H.__webglFramebuffer[dt][xt],T,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,xt);else gt(H.__webglFramebuffer[dt],T,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);_(w,St)&&x(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(et){const dt=T.texture;for(let xt=0,At=dt.length;xt<At;xt++){const Ot=dt[xt],it=n.get(Ot);e.bindTexture(r.TEXTURE_2D,it.__webglTexture),Y(r.TEXTURE_2D,Ot,St),gt(H.__webglFramebuffer,T,Ot,r.COLOR_ATTACHMENT0+xt,r.TEXTURE_2D,0),_(Ot,St)&&x(r.TEXTURE_2D)}e.unbindTexture()}else{let dt=r.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?dt=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(dt,st.__webglTexture),Y(dt,w,St),a&&w.mipmaps&&w.mipmaps.length>0)for(let xt=0;xt<w.mipmaps.length;xt++)gt(H.__webglFramebuffer[xt],T,w,r.COLOR_ATTACHMENT0,dt,xt);else gt(H.__webglFramebuffer,T,w,r.COLOR_ATTACHMENT0,dt,0);_(w,St)&&x(dt),e.unbindTexture()}T.depthBuffer&&Et(T)}function at(T){const w=m(T)||a,H=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let st=0,nt=H.length;st<nt;st++){const et=H[st];if(_(et,w)){const St=T.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,dt=n.get(et).__webglTexture;e.bindTexture(St,dt),x(St),e.unbindTexture()}}}function J(T){if(a&&T.samples>0&&$(T)===!1){const w=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],H=T.width,st=T.height;let nt=r.COLOR_BUFFER_BIT;const et=[],St=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=n.get(T),xt=T.isWebGLMultipleRenderTargets===!0;if(xt)for(let At=0;At<w.length;At++)e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let At=0;At<w.length;At++){et.push(r.COLOR_ATTACHMENT0+At),T.depthBuffer&&et.push(St);const Ot=dt.__ignoreDepthValues!==void 0?dt.__ignoreDepthValues:!1;if(Ot===!1&&(T.depthBuffer&&(nt|=r.DEPTH_BUFFER_BIT),T.stencilBuffer&&(nt|=r.STENCIL_BUFFER_BIT)),xt&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,dt.__webglColorRenderbuffer[At]),Ot===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[St]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[St])),xt){const it=n.get(w[At]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,it,0)}r.blitFramebuffer(0,0,H,st,0,0,H,st,nt,r.NEAREST),l&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,et)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),xt)for(let At=0;At<w.length;At++){e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.RENDERBUFFER,dt.__webglColorRenderbuffer[At]);const Ot=n.get(w[At]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,dt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.TEXTURE_2D,Ot,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}}function rt(T){return Math.min(i.maxSamples,T.samples)}function $(T){const w=n.get(T);return a&&T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function bt(T){const w=o.render.frame;h.get(T)!==w&&(h.set(T,w),T.update())}function mt(T,w){const H=T.colorSpace,st=T.format,nt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===so||H!==wn&&H!==Ye&&(Jt.getTransfer(H)===ie?a===!1?t.has("EXT_sRGB")===!0&&st===tn?(T.format=so,T.minFilter=qe,T.generateMipmaps=!1):w=Xc.sRGBToLinear(w):(st!==tn||nt!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),w}this.allocateTextureUnit=P,this.resetTextureUnits=B,this.setTexture2D=L,this.setTexture2DArray=Z,this.setTexture3D=V,this.setTextureCube=k,this.rebindTextures=Nt,this.setupRenderTarget=N,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=$}function Fm(r,t,e){const n=e.isWebGL2;function i(s,o=Ye){let a;const c=Jt.getTransfer(o);if(s===Un)return r.UNSIGNED_BYTE;if(s===Fc)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Oc)return r.UNSIGNED_SHORT_5_5_5_1;if(s===vh)return r.BYTE;if(s===_h)return r.SHORT;if(s===po)return r.UNSIGNED_SHORT;if(s===Uc)return r.INT;if(s===Ln)return r.UNSIGNED_INT;if(s===In)return r.FLOAT;if(s===Ji)return n?r.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===xh)return r.ALPHA;if(s===tn)return r.RGBA;if(s===yh)return r.LUMINANCE;if(s===Mh)return r.LUMINANCE_ALPHA;if(s===Kn)return r.DEPTH_COMPONENT;if(s===Pi)return r.DEPTH_STENCIL;if(s===so)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Sh)return r.RED;if(s===Bc)return r.RED_INTEGER;if(s===Eh)return r.RG;if(s===zc)return r.RG_INTEGER;if(s===Gc)return r.RGBA_INTEGER;if(s===ur||s===dr||s===fr||s===pr)if(c===ie)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ur)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===dr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===fr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===pr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ur)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===dr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===fr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===pr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Go||s===Ho||s===Vo||s===ko)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Go)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ho)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Vo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ko)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Hc)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Wo||s===qo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Wo)return c===ie?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===qo)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Xo||s===Yo||s===jo||s===Zo||s===Ko||s===$o||s===Jo||s===Qo||s===ta||s===ea||s===na||s===ia||s===sa||s===ra)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Xo)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Yo)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===jo)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Zo)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ko)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===$o)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Jo)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Qo)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ta)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ea)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===na)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ia)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===sa)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ra)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===mr||s===oa||s===aa)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===mr)return c===ie?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===oa)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===aa)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===wh||s===ca||s===la||s===ha)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===mr)return a.COMPRESSED_RED_RGTC1_EXT;if(s===ca)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===la)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ha)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Zn?n?r.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Om extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Xi extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bm={type:"move"};class Gr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),f=this._getHandJoint(l,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&u>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bm)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Xi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class zm extends Ii{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,p=null,g=null;const v=e.getContextAttributes();let m=null,f=null;const _=[],x=[],M=new ht;let R=null;const b=new Xe;b.layers.enable(1),b.viewport=new Me;const A=new Xe;A.layers.enable(2),A.viewport=new Me;const U=[b,A],S=new Om;S.layers.enable(1),S.layers.enable(2);let E=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let tt=_[Y];return tt===void 0&&(tt=new Gr,_[Y]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Y){let tt=_[Y];return tt===void 0&&(tt=new Gr,_[Y]=tt),tt.getGripSpace()},this.getHand=function(Y){let tt=_[Y];return tt===void 0&&(tt=new Gr,_[Y]=tt),tt.getHandSpace()};function z(Y){const tt=x.indexOf(Y.inputSource);if(tt===-1)return;const ut=_[tt];ut!==void 0&&(ut.update(Y.inputSource,Y.frame,l||o),ut.dispatchEvent({type:Y.type,data:Y.inputSource}))}function B(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",P);for(let Y=0;Y<_.length;Y++){const tt=x[Y];tt!==null&&(x[Y]=null,_[Y].disconnect(tt))}E=null,F=null,t.setRenderTarget(m),p=null,u=null,d=null,i=null,f=null,j.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",B),i.addEventListener("inputsourceschange",P),v.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(M),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const tt={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,e,tt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Jn(p.framebufferWidth,p.framebufferHeight,{format:tn,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let tt=null,ut=null,Mt=null;v.depth&&(Mt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=v.stencil?Pi:Kn,ut=v.stencil?Zn:Ln);const gt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:s};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(gt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),f=new Jn(u.textureWidth,u.textureHeight,{format:tn,type:Un,depthTexture:new ol(u.textureWidth,u.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});const Pt=t.properties.get(f);Pt.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),j.setContext(i),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(Y){for(let tt=0;tt<Y.removed.length;tt++){const ut=Y.removed[tt],Mt=x.indexOf(ut);Mt>=0&&(x[Mt]=null,_[Mt].disconnect(ut))}for(let tt=0;tt<Y.added.length;tt++){const ut=Y.added[tt];let Mt=x.indexOf(ut);if(Mt===-1){for(let Pt=0;Pt<_.length;Pt++)if(Pt>=x.length){x.push(ut),Mt=Pt;break}else if(x[Pt]===null){x[Pt]=ut,Mt=Pt;break}if(Mt===-1)break}const gt=_[Mt];gt&&gt.connect(ut)}}const I=new O,L=new O;function Z(Y,tt,ut){I.setFromMatrixPosition(tt.matrixWorld),L.setFromMatrixPosition(ut.matrixWorld);const Mt=I.distanceTo(L),gt=tt.projectionMatrix.elements,Pt=ut.projectionMatrix.elements,Ut=gt[14]/(gt[10]-1),Et=gt[14]/(gt[10]+1),Nt=(gt[9]+1)/gt[5],N=(gt[9]-1)/gt[5],at=(gt[8]-1)/gt[0],J=(Pt[8]+1)/Pt[0],rt=Ut*at,$=Ut*J,bt=Mt/(-at+J),mt=bt*-at;tt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(mt),Y.translateZ(bt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const T=Ut+bt,w=Et+bt,H=rt-mt,st=$+(Mt-mt),nt=Nt*Et/w*T,et=N*Et/w*T;Y.projectionMatrix.makePerspective(H,st,nt,et,T,w),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function V(Y,tt){tt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(tt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;S.near=A.near=b.near=Y.near,S.far=A.far=b.far=Y.far,(E!==S.near||F!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,F=S.far);const tt=Y.parent,ut=S.cameras;V(S,tt);for(let Mt=0;Mt<ut.length;Mt++)V(ut[Mt],tt);ut.length===2?Z(S,b,A):S.projectionMatrix.copy(b.projectionMatrix),k(Y,S,tt)};function k(Y,tt,ut){ut===null?Y.matrix.copy(tt.matrixWorld):(Y.matrix.copy(ut.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(tt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ro*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(Y){c=Y,u!==null&&(u.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)};let K=null;function Q(Y,tt){if(h=tt.getViewerPose(l||o),g=tt,h!==null){const ut=h.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let Mt=!1;ut.length!==S.cameras.length&&(S.cameras.length=0,Mt=!0);for(let gt=0;gt<ut.length;gt++){const Pt=ut[gt];let Ut=null;if(p!==null)Ut=p.getViewport(Pt);else{const Nt=d.getViewSubImage(u,Pt);Ut=Nt.viewport,gt===0&&(t.setRenderTargetTextures(f,Nt.colorTexture,u.ignoreDepthValues?void 0:Nt.depthStencilTexture),t.setRenderTarget(f))}let Et=U[gt];Et===void 0&&(Et=new Xe,Et.layers.enable(gt),Et.viewport=new Me,U[gt]=Et),Et.matrix.fromArray(Pt.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(Pt.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),gt===0&&(S.matrix.copy(Et.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Mt===!0&&S.cameras.push(Et)}}for(let ut=0;ut<_.length;ut++){const Mt=x[ut],gt=_[ut];Mt!==null&&gt!==void 0&&gt.update(Mt,tt,l||o)}K&&K(Y,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const j=new sl;j.setAnimationLoop(Q),this.setAnimationLoop=function(Y){K=Y},this.dispose=function(){}}}function Gm(r,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,el(r)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,_,x,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),v(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,_,x):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ue&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ue&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=t.get(f).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const x=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*x,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,_,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=x*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ue&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const _=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Hm(r,t,e,n){let i={},s={},o=[];const a=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(_,x){const M=x.program;n.uniformBlockBinding(_,M)}function l(_,x){let M=i[_.id];M===void 0&&(g(_),M=h(_),i[_.id]=M,_.addEventListener("dispose",m));const R=x.program;n.updateUBOMapping(_,R);const b=t.render.frame;s[_.id]!==b&&(u(_),s[_.id]=b)}function h(_){const x=d();_.__bindingPointIndex=x;const M=r.createBuffer(),R=_.__size,b=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,R,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,M),M}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const x=i[_.id],M=_.uniforms,R=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let b=0,A=M.length;b<A;b++){const U=Array.isArray(M[b])?M[b]:[M[b]];for(let S=0,E=U.length;S<E;S++){const F=U[S];if(p(F,b,S,R)===!0){const z=F.__offset,B=Array.isArray(F.value)?F.value:[F.value];let P=0;for(let I=0;I<B.length;I++){const L=B[I],Z=v(L);typeof L=="number"||typeof L=="boolean"?(F.__data[0]=L,r.bufferSubData(r.UNIFORM_BUFFER,z+P,F.__data)):L.isMatrix3?(F.__data[0]=L.elements[0],F.__data[1]=L.elements[1],F.__data[2]=L.elements[2],F.__data[3]=0,F.__data[4]=L.elements[3],F.__data[5]=L.elements[4],F.__data[6]=L.elements[5],F.__data[7]=0,F.__data[8]=L.elements[6],F.__data[9]=L.elements[7],F.__data[10]=L.elements[8],F.__data[11]=0):(L.toArray(F.__data,P),P+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(_,x,M,R){const b=_.value,A=x+"_"+M;if(R[A]===void 0)return typeof b=="number"||typeof b=="boolean"?R[A]=b:R[A]=b.clone(),!0;{const U=R[A];if(typeof b=="number"||typeof b=="boolean"){if(U!==b)return R[A]=b,!0}else if(U.equals(b)===!1)return U.copy(b),!0}return!1}function g(_){const x=_.uniforms;let M=0;const R=16;for(let A=0,U=x.length;A<U;A++){const S=Array.isArray(x[A])?x[A]:[x[A]];for(let E=0,F=S.length;E<F;E++){const z=S[E],B=Array.isArray(z.value)?z.value:[z.value];for(let P=0,I=B.length;P<I;P++){const L=B[P],Z=v(L),V=M%R;V!==0&&R-V<Z.boundary&&(M+=R-V),z.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=Z.storage}}}const b=M%R;return b>0&&(M+=R-b),_.__size=M,_.__cache={},this}function v(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function f(){for(const _ in i)r.deleteBuffer(i[_]);o=[],i={},s={}}return{bind:c,update:l,dispose:f}}class dl{constructor(t={}){const{canvas:e=Fh(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=o;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const f=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ye,this._useLegacyLights=!1,this.toneMapping=Dn,this.toneMappingExposure=1;const x=this;let M=!1,R=0,b=0,A=null,U=-1,S=null;const E=new Me,F=new Me;let z=null;const B=new Yt(0);let P=0,I=e.width,L=e.height,Z=1,V=null,k=null;const K=new Me(0,0,I,L),Q=new Me(0,0,I,L);let j=!1;const Y=new go;let tt=!1,ut=!1,Mt=null;const gt=new he,Pt=new ht,Ut=new O,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Nt(){return A===null?Z:1}let N=n;function at(C,G){for(let q=0;q<C.length;q++){const X=C[q],W=e.getContext(X,G);if(W!==null)return W}return null}try{const C={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fo}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",D,!1),e.addEventListener("webglcontextcreationerror",ft,!1),N===null){const G=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&G.shift(),N=at(G,C),N===null)throw at(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let J,rt,$,bt,mt,T,w,H,st,nt,et,St,dt,xt,At,Ot,it,jt,Xt,Dt,Tt,yt,zt,$t;function oe(){J=new $f(N),rt=new qf(N,J,t),J.init(rt),yt=new Fm(N,J,rt),$=new Dm(N,J,rt),bt=new tp(N),mt=new ym,T=new Um(N,J,$,mt,rt,yt,bt),w=new Yf(x),H=new Kf(x),st=new au(N,rt),zt=new kf(N,J,st,rt),nt=new Jf(N,st,bt,zt),et=new sp(N,nt,st,bt),Xt=new ip(N,rt,T),Ot=new Xf(mt),St=new xm(x,w,H,J,rt,zt,Ot),dt=new Gm(x,mt),xt=new Sm,At=new Cm(J,rt),jt=new Vf(x,w,H,$,et,u,c),it=new Nm(x,et,rt),$t=new Hm(N,bt,rt,$),Dt=new Wf(N,J,bt,rt),Tt=new Qf(N,J,bt,rt),bt.programs=St.programs,x.capabilities=rt,x.extensions=J,x.properties=mt,x.renderLists=xt,x.shadowMap=it,x.state=$,x.info=bt}oe();const Vt=new zm(x,N);this.xr=Vt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const C=J.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=J.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(C){C!==void 0&&(Z=C,this.setSize(I,L,!1))},this.getSize=function(C){return C.set(I,L)},this.setSize=function(C,G,q=!0){if(Vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=C,L=G,e.width=Math.floor(C*Z),e.height=Math.floor(G*Z),q===!0&&(e.style.width=C+"px",e.style.height=G+"px"),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(I*Z,L*Z).floor()},this.setDrawingBufferSize=function(C,G,q){I=C,L=G,Z=q,e.width=Math.floor(C*q),e.height=Math.floor(G*q),this.setViewport(0,0,C,G)},this.getCurrentViewport=function(C){return C.copy(E)},this.getViewport=function(C){return C.copy(K)},this.setViewport=function(C,G,q,X){C.isVector4?K.set(C.x,C.y,C.z,C.w):K.set(C,G,q,X),$.viewport(E.copy(K).multiplyScalar(Z).floor())},this.getScissor=function(C){return C.copy(Q)},this.setScissor=function(C,G,q,X){C.isVector4?Q.set(C.x,C.y,C.z,C.w):Q.set(C,G,q,X),$.scissor(F.copy(Q).multiplyScalar(Z).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(C){$.setScissorTest(j=C)},this.setOpaqueSort=function(C){V=C},this.setTransparentSort=function(C){k=C},this.getClearColor=function(C){return C.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor.apply(jt,arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha.apply(jt,arguments)},this.clear=function(C=!0,G=!0,q=!0){let X=0;if(C){let W=!1;if(A!==null){const vt=A.texture.format;W=vt===Gc||vt===zc||vt===Bc}if(W){const vt=A.texture.type,wt=vt===Un||vt===Ln||vt===po||vt===Zn||vt===Fc||vt===Oc,Rt=jt.getClearColor(),It=jt.getClearAlpha(),Ht=Rt.r,Ft=Rt.g,Bt=Rt.b;wt?(p[0]=Ht,p[1]=Ft,p[2]=Bt,p[3]=It,N.clearBufferuiv(N.COLOR,0,p)):(g[0]=Ht,g[1]=Ft,g[2]=Bt,g[3]=It,N.clearBufferiv(N.COLOR,0,g))}else X|=N.COLOR_BUFFER_BIT}G&&(X|=N.DEPTH_BUFFER_BIT),q&&(X|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",D,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),xt.dispose(),At.dispose(),mt.dispose(),w.dispose(),H.dispose(),et.dispose(),zt.dispose(),$t.dispose(),St.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",Ce),Vt.removeEventListener("sessionend",ee),Mt&&(Mt.dispose(),Mt=null),Re.stop()};function ct(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const C=bt.autoReset,G=it.enabled,q=it.autoUpdate,X=it.needsUpdate,W=it.type;oe(),bt.autoReset=C,it.enabled=G,it.autoUpdate=q,it.needsUpdate=X,it.type=W}function ft(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function pt(C){const G=C.target;G.removeEventListener("dispose",pt),Lt(G)}function Lt(C){Ct(C),mt.remove(C)}function Ct(C){const G=mt.get(C).programs;G!==void 0&&(G.forEach(function(q){St.releaseProgram(q)}),C.isShaderMaterial&&St.releaseShaderCache(C))}this.renderBufferDirect=function(C,G,q,X,W,vt){G===null&&(G=Et);const wt=W.isMesh&&W.matrixWorld.determinant()<0,Rt=Dl(C,G,q,X,W);$.setMaterial(X,wt);let It=q.index,Ht=1;if(X.wireframe===!0){if(It=nt.getWireframeAttribute(q),It===void 0)return;Ht=2}const Ft=q.drawRange,Bt=q.attributes.position;let le=Ft.start*Ht,Oe=(Ft.start+Ft.count)*Ht;vt!==null&&(le=Math.max(le,vt.start*Ht),Oe=Math.min(Oe,(vt.start+vt.count)*Ht)),It!==null?(le=Math.max(le,0),Oe=Math.min(Oe,It.count)):Bt!=null&&(le=Math.max(le,0),Oe=Math.min(Oe,Bt.count));const _e=Oe-le;if(_e<0||_e===1/0)return;zt.setup(W,X,Rt,q,It);let hn,se=Dt;if(It!==null&&(hn=st.get(It),se=Tt,se.setIndex(hn)),W.isMesh)X.wireframe===!0?($.setLineWidth(X.wireframeLinewidth*Nt()),se.setMode(N.LINES)):se.setMode(N.TRIANGLES);else if(W.isLine){let kt=X.linewidth;kt===void 0&&(kt=1),$.setLineWidth(kt*Nt()),W.isLineSegments?se.setMode(N.LINES):W.isLineLoop?se.setMode(N.LINE_LOOP):se.setMode(N.LINE_STRIP)}else W.isPoints?se.setMode(N.POINTS):W.isSprite&&se.setMode(N.TRIANGLES);if(W.isBatchedMesh)se.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)se.renderInstances(le,_e,W.count);else if(q.isInstancedBufferGeometry){const kt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,or=Math.min(q.instanceCount,kt);se.renderInstances(le,_e,or)}else se.render(le,_e)};function Qt(C,G,q){C.transparent===!0&&C.side===Sn&&C.forceSinglePass===!1?(C.side=Ue,C.needsUpdate=!0,as(C,G,q),C.side=Fn,C.needsUpdate=!0,as(C,G,q),C.side=Sn):as(C,G,q)}this.compile=function(C,G,q=null){q===null&&(q=C),m=At.get(q),m.init(),_.push(m),q.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),C!==q&&C.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights(x._useLegacyLights);const X=new Set;return C.traverse(function(W){const vt=W.material;if(vt)if(Array.isArray(vt))for(let wt=0;wt<vt.length;wt++){const Rt=vt[wt];Qt(Rt,q,W),X.add(Rt)}else Qt(vt,q,W),X.add(vt)}),_.pop(),m=null,X},this.compileAsync=function(C,G,q=null){const X=this.compile(C,G,q);return new Promise(W=>{function vt(){if(X.forEach(function(wt){mt.get(wt).currentProgram.isReady()&&X.delete(wt)}),X.size===0){W(C);return}setTimeout(vt,10)}J.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let te=null;function ve(C){te&&te(C)}function Ce(){Re.stop()}function ee(){Re.start()}const Re=new sl;Re.setAnimationLoop(ve),typeof self<"u"&&Re.setContext(self),this.setAnimationLoop=function(C){te=C,Vt.setAnimationLoop(C),C===null?Re.stop():Re.start()},Vt.addEventListener("sessionstart",Ce),Vt.addEventListener("sessionend",ee),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(G),G=Vt.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,G,A),m=At.get(C,_.length),m.init(),_.push(m),gt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Y.setFromProjectionMatrix(gt),ut=this.localClippingEnabled,tt=Ot.init(this.clippingPlanes,ut),v=xt.get(C,f.length),v.init(),f.push(v),sn(C,G,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(V,k),this.info.render.frame++,tt===!0&&Ot.beginShadows();const q=m.state.shadowsArray;if(it.render(q,C,G),tt===!0&&Ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),jt.render(v,C),m.setupLights(x._useLegacyLights),G.isArrayCamera){const X=G.cameras;for(let W=0,vt=X.length;W<vt;W++){const wt=X[W];Co(v,C,wt,wt.viewport)}}else Co(v,C,G);A!==null&&(T.updateMultisampleRenderTarget(A),T.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(x,C,G),zt.resetDefaultState(),U=-1,S=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function sn(C,G,q,X){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Y.intersectsSprite(C)){X&&Ut.setFromMatrixPosition(C.matrixWorld).applyMatrix4(gt);const wt=et.update(C),Rt=C.material;Rt.visible&&v.push(C,wt,Rt,q,Ut.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Y.intersectsObject(C))){const wt=et.update(C),Rt=C.material;if(X&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ut.copy(C.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Ut.copy(wt.boundingSphere.center)),Ut.applyMatrix4(C.matrixWorld).applyMatrix4(gt)),Array.isArray(Rt)){const It=wt.groups;for(let Ht=0,Ft=It.length;Ht<Ft;Ht++){const Bt=It[Ht],le=Rt[Bt.materialIndex];le&&le.visible&&v.push(C,wt,le,q,Ut.z,Bt)}}else Rt.visible&&v.push(C,wt,Rt,q,Ut.z,null)}}const vt=C.children;for(let wt=0,Rt=vt.length;wt<Rt;wt++)sn(vt[wt],G,q,X)}function Co(C,G,q,X){const W=C.opaque,vt=C.transmissive,wt=C.transparent;m.setupLightsView(q),tt===!0&&Ot.setGlobalState(x.clippingPlanes,q),vt.length>0&&Nl(W,vt,G,q),X&&$.viewport(E.copy(X)),W.length>0&&os(W,G,q),vt.length>0&&os(vt,G,q),wt.length>0&&os(wt,G,q),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function Nl(C,G,q,X){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const vt=rt.isWebGL2;Mt===null&&(Mt=new Jn(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?Ji:Un,minFilter:$i,samples:vt?4:0})),x.getDrawingBufferSize(Pt),vt?Mt.setSize(Pt.x,Pt.y):Mt.setSize(oo(Pt.x),oo(Pt.y));const wt=x.getRenderTarget();x.setRenderTarget(Mt),x.getClearColor(B),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();const Rt=x.toneMapping;x.toneMapping=Dn,os(C,q,X),T.updateMultisampleRenderTarget(Mt),T.updateRenderTargetMipmap(Mt);let It=!1;for(let Ht=0,Ft=G.length;Ht<Ft;Ht++){const Bt=G[Ht],le=Bt.object,Oe=Bt.geometry,_e=Bt.material,hn=Bt.group;if(_e.side===Sn&&le.layers.test(X.layers)){const se=_e.side;_e.side=Ue,_e.needsUpdate=!0,Ro(le,q,X,Oe,_e,hn),_e.side=se,_e.needsUpdate=!0,It=!0}}It===!0&&(T.updateMultisampleRenderTarget(Mt),T.updateRenderTargetMipmap(Mt)),x.setRenderTarget(wt),x.setClearColor(B,P),x.toneMapping=Rt}function os(C,G,q){const X=G.isScene===!0?G.overrideMaterial:null;for(let W=0,vt=C.length;W<vt;W++){const wt=C[W],Rt=wt.object,It=wt.geometry,Ht=X===null?wt.material:X,Ft=wt.group;Rt.layers.test(q.layers)&&Ro(Rt,G,q,It,Ht,Ft)}}function Ro(C,G,q,X,W,vt){C.onBeforeRender(x,G,q,X,W,vt),C.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),W.onBeforeRender(x,G,q,X,C,vt),W.transparent===!0&&W.side===Sn&&W.forceSinglePass===!1?(W.side=Ue,W.needsUpdate=!0,x.renderBufferDirect(q,G,X,W,C,vt),W.side=Fn,W.needsUpdate=!0,x.renderBufferDirect(q,G,X,W,C,vt),W.side=Sn):x.renderBufferDirect(q,G,X,W,C,vt),C.onAfterRender(x,G,q,X,W,vt)}function as(C,G,q){G.isScene!==!0&&(G=Et);const X=mt.get(C),W=m.state.lights,vt=m.state.shadowsArray,wt=W.state.version,Rt=St.getParameters(C,W.state,vt,G,q),It=St.getProgramCacheKey(Rt);let Ht=X.programs;X.environment=C.isMeshStandardMaterial?G.environment:null,X.fog=G.fog,X.envMap=(C.isMeshStandardMaterial?H:w).get(C.envMap||X.environment),Ht===void 0&&(C.addEventListener("dispose",pt),Ht=new Map,X.programs=Ht);let Ft=Ht.get(It);if(Ft!==void 0){if(X.currentProgram===Ft&&X.lightsStateVersion===wt)return Lo(C,Rt),Ft}else Rt.uniforms=St.getUniforms(C),C.onBuild(q,Rt,x),C.onBeforeCompile(Rt,x),Ft=St.acquireProgram(Rt,It),Ht.set(It,Ft),X.uniforms=Rt.uniforms;const Bt=X.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Bt.clippingPlanes=Ot.uniform),Lo(C,Rt),X.needsLights=Fl(C),X.lightsStateVersion=wt,X.needsLights&&(Bt.ambientLightColor.value=W.state.ambient,Bt.lightProbe.value=W.state.probe,Bt.directionalLights.value=W.state.directional,Bt.directionalLightShadows.value=W.state.directionalShadow,Bt.spotLights.value=W.state.spot,Bt.spotLightShadows.value=W.state.spotShadow,Bt.rectAreaLights.value=W.state.rectArea,Bt.ltc_1.value=W.state.rectAreaLTC1,Bt.ltc_2.value=W.state.rectAreaLTC2,Bt.pointLights.value=W.state.point,Bt.pointLightShadows.value=W.state.pointShadow,Bt.hemisphereLights.value=W.state.hemi,Bt.directionalShadowMap.value=W.state.directionalShadowMap,Bt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Bt.spotShadowMap.value=W.state.spotShadowMap,Bt.spotLightMatrix.value=W.state.spotLightMatrix,Bt.spotLightMap.value=W.state.spotLightMap,Bt.pointShadowMap.value=W.state.pointShadowMap,Bt.pointShadowMatrix.value=W.state.pointShadowMatrix),X.currentProgram=Ft,X.uniformsList=null,Ft}function Po(C){if(C.uniformsList===null){const G=C.currentProgram.getUniforms();C.uniformsList=Gs.seqWithValue(G.seq,C.uniforms)}return C.uniformsList}function Lo(C,G){const q=mt.get(C);q.outputColorSpace=G.outputColorSpace,q.batching=G.batching,q.instancing=G.instancing,q.instancingColor=G.instancingColor,q.skinning=G.skinning,q.morphTargets=G.morphTargets,q.morphNormals=G.morphNormals,q.morphColors=G.morphColors,q.morphTargetsCount=G.morphTargetsCount,q.numClippingPlanes=G.numClippingPlanes,q.numIntersection=G.numClipIntersection,q.vertexAlphas=G.vertexAlphas,q.vertexTangents=G.vertexTangents,q.toneMapping=G.toneMapping}function Dl(C,G,q,X,W){G.isScene!==!0&&(G=Et),T.resetTextureUnits();const vt=G.fog,wt=X.isMeshStandardMaterial?G.environment:null,Rt=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:wn,It=(X.isMeshStandardMaterial?H:w).get(X.envMap||wt),Ht=X.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ft=!!q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Bt=!!q.morphAttributes.position,le=!!q.morphAttributes.normal,Oe=!!q.morphAttributes.color;let _e=Dn;X.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(_e=x.toneMapping);const hn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,se=hn!==void 0?hn.length:0,kt=mt.get(X),or=m.state.lights;if(tt===!0&&(ut===!0||C!==S)){const Ve=C===S&&X.id===U;Ot.setState(X,C,Ve)}let ae=!1;X.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==or.state.version||kt.outputColorSpace!==Rt||W.isBatchedMesh&&kt.batching===!1||!W.isBatchedMesh&&kt.batching===!0||W.isInstancedMesh&&kt.instancing===!1||!W.isInstancedMesh&&kt.instancing===!0||W.isSkinnedMesh&&kt.skinning===!1||!W.isSkinnedMesh&&kt.skinning===!0||W.isInstancedMesh&&kt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&kt.instancingColor===!1&&W.instanceColor!==null||kt.envMap!==It||X.fog===!0&&kt.fog!==vt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==Ot.numPlanes||kt.numIntersection!==Ot.numIntersection)||kt.vertexAlphas!==Ht||kt.vertexTangents!==Ft||kt.morphTargets!==Bt||kt.morphNormals!==le||kt.morphColors!==Oe||kt.toneMapping!==_e||rt.isWebGL2===!0&&kt.morphTargetsCount!==se)&&(ae=!0):(ae=!0,kt.__version=X.version);let On=kt.currentProgram;ae===!0&&(On=as(X,G,W));let Io=!1,Fi=!1,ar=!1;const Ee=On.getUniforms(),Bn=kt.uniforms;if($.useProgram(On.program)&&(Io=!0,Fi=!0,ar=!0),X.id!==U&&(U=X.id,Fi=!0),Io||S!==C){Ee.setValue(N,"projectionMatrix",C.projectionMatrix),Ee.setValue(N,"viewMatrix",C.matrixWorldInverse);const Ve=Ee.map.cameraPosition;Ve!==void 0&&Ve.setValue(N,Ut.setFromMatrixPosition(C.matrixWorld)),rt.logarithmicDepthBuffer&&Ee.setValue(N,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ee.setValue(N,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,Fi=!0,ar=!0)}if(W.isSkinnedMesh){Ee.setOptional(N,W,"bindMatrix"),Ee.setOptional(N,W,"bindMatrixInverse");const Ve=W.skeleton;Ve&&(rt.floatVertexTextures?(Ve.boneTexture===null&&Ve.computeBoneTexture(),Ee.setValue(N,"boneTexture",Ve.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(Ee.setOptional(N,W,"batchingTexture"),Ee.setValue(N,"batchingTexture",W._matricesTexture,T));const cr=q.morphAttributes;if((cr.position!==void 0||cr.normal!==void 0||cr.color!==void 0&&rt.isWebGL2===!0)&&Xt.update(W,q,On),(Fi||kt.receiveShadow!==W.receiveShadow)&&(kt.receiveShadow=W.receiveShadow,Ee.setValue(N,"receiveShadow",W.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Bn.envMap.value=It,Bn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),Fi&&(Ee.setValue(N,"toneMappingExposure",x.toneMappingExposure),kt.needsLights&&Ul(Bn,ar),vt&&X.fog===!0&&dt.refreshFogUniforms(Bn,vt),dt.refreshMaterialUniforms(Bn,X,Z,L,Mt),Gs.upload(N,Po(kt),Bn,T)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Gs.upload(N,Po(kt),Bn,T),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ee.setValue(N,"center",W.center),Ee.setValue(N,"modelViewMatrix",W.modelViewMatrix),Ee.setValue(N,"normalMatrix",W.normalMatrix),Ee.setValue(N,"modelMatrix",W.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ve=X.uniformsGroups;for(let lr=0,Ol=Ve.length;lr<Ol;lr++)if(rt.isWebGL2){const No=Ve[lr];$t.update(No,On),$t.bind(No,On)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return On}function Ul(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}function Fl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,G,q){mt.get(C.texture).__webglTexture=G,mt.get(C.depthTexture).__webglTexture=q;const X=mt.get(C);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=q===void 0,X.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,G){const q=mt.get(C);q.__webglFramebuffer=G,q.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(C,G=0,q=0){A=C,R=G,b=q;let X=!0,W=null,vt=!1,wt=!1;if(C){const It=mt.get(C);It.__useDefaultFramebuffer!==void 0?($.bindFramebuffer(N.FRAMEBUFFER,null),X=!1):It.__webglFramebuffer===void 0?T.setupRenderTarget(C):It.__hasExternalTextures&&T.rebindTextures(C,mt.get(C.texture).__webglTexture,mt.get(C.depthTexture).__webglTexture);const Ht=C.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(wt=!0);const Ft=mt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ft[G])?W=Ft[G][q]:W=Ft[G],vt=!0):rt.isWebGL2&&C.samples>0&&T.useMultisampledRTT(C)===!1?W=mt.get(C).__webglMultisampledFramebuffer:Array.isArray(Ft)?W=Ft[q]:W=Ft,E.copy(C.viewport),F.copy(C.scissor),z=C.scissorTest}else E.copy(K).multiplyScalar(Z).floor(),F.copy(Q).multiplyScalar(Z).floor(),z=j;if($.bindFramebuffer(N.FRAMEBUFFER,W)&&rt.drawBuffers&&X&&$.drawBuffers(C,W),$.viewport(E),$.scissor(F),$.setScissorTest(z),vt){const It=mt.get(C.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+G,It.__webglTexture,q)}else if(wt){const It=mt.get(C.texture),Ht=G||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,It.__webglTexture,q||0,Ht)}U=-1},this.readRenderTargetPixels=function(C,G,q,X,W,vt,wt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=mt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&wt!==void 0&&(Rt=Rt[wt]),Rt){$.bindFramebuffer(N.FRAMEBUFFER,Rt);try{const It=C.texture,Ht=It.format,Ft=It.type;if(Ht!==tn&&yt.convert(Ht)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Bt=Ft===Ji&&(J.has("EXT_color_buffer_half_float")||rt.isWebGL2&&J.has("EXT_color_buffer_float"));if(Ft!==Un&&yt.convert(Ft)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ft===In&&(rt.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float")))&&!Bt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-X&&q>=0&&q<=C.height-W&&N.readPixels(G,q,X,W,yt.convert(Ht),yt.convert(Ft),vt)}finally{const It=A!==null?mt.get(A).__webglFramebuffer:null;$.bindFramebuffer(N.FRAMEBUFFER,It)}}},this.copyFramebufferToTexture=function(C,G,q=0){const X=Math.pow(2,-q),W=Math.floor(G.image.width*X),vt=Math.floor(G.image.height*X);T.setTexture2D(G,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,C.x,C.y,W,vt),$.unbindTexture()},this.copyTextureToTexture=function(C,G,q,X=0){const W=G.image.width,vt=G.image.height,wt=yt.convert(q.format),Rt=yt.convert(q.type);T.setTexture2D(q,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,q.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,q.unpackAlignment),G.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,X,C.x,C.y,W,vt,wt,Rt,G.image.data):G.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,X,C.x,C.y,G.mipmaps[0].width,G.mipmaps[0].height,wt,G.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,X,C.x,C.y,wt,Rt,G.image),X===0&&q.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),$.unbindTexture()},this.copyTextureToTexture3D=function(C,G,q,X,W=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const vt=C.max.x-C.min.x+1,wt=C.max.y-C.min.y+1,Rt=C.max.z-C.min.z+1,It=yt.convert(X.format),Ht=yt.convert(X.type);let Ft;if(X.isData3DTexture)T.setTexture3D(X,0),Ft=N.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)T.setTexture2DArray(X,0),Ft=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,X.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,X.unpackAlignment);const Bt=N.getParameter(N.UNPACK_ROW_LENGTH),le=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Oe=N.getParameter(N.UNPACK_SKIP_PIXELS),_e=N.getParameter(N.UNPACK_SKIP_ROWS),hn=N.getParameter(N.UNPACK_SKIP_IMAGES),se=q.isCompressedTexture?q.mipmaps[W]:q.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,se.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,se.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,C.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,C.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,C.min.z),q.isDataTexture||q.isData3DTexture?N.texSubImage3D(Ft,W,G.x,G.y,G.z,vt,wt,Rt,It,Ht,se.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Ft,W,G.x,G.y,G.z,vt,wt,Rt,It,se.data)):N.texSubImage3D(Ft,W,G.x,G.y,G.z,vt,wt,Rt,It,Ht,se),N.pixelStorei(N.UNPACK_ROW_LENGTH,Bt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,le),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Oe),N.pixelStorei(N.UNPACK_SKIP_ROWS,_e),N.pixelStorei(N.UNPACK_SKIP_IMAGES,hn),W===0&&X.generateMipmaps&&N.generateMipmap(Ft),$.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?T.setTextureCube(C,0):C.isData3DTexture?T.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?T.setTexture2DArray(C,0):T.setTexture2D(C,0),$.unbindTexture()},this.resetState=function(){R=0,b=0,A=null,$.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===mo?"display-p3":"srgb",e.unpackColorSpace=Jt.workingColorSpace===Ks?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ye?$n:Vc}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===$n?ye:wn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Vm extends dl{}Vm.prototype.isWebGL1Renderer=!0;class _o{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Yt(t),this.near=e,this.far=n}clone(){return new _o(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class km extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class fl extends Di{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Qa=new he,co=new Zc,Ps=new $s,Ls=new O;class Wm extends Se{constructor(t=new Fe,e=new fl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(i),Ps.radius+=s,t.ray.intersectsSphere(Ps)===!1)return;Qa.copy(i).invert(),co.copy(t.ray).applyMatrix4(Qa);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=u,v=p;g<v;g++){const m=l.getX(g);Ls.fromBufferAttribute(d,m),tc(Ls,m,c,i,t,e,this)}}else{const u=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=u,v=p;g<v;g++)Ls.fromBufferAttribute(d,g),tc(Ls,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function tc(r,t,e,n,i,s,o){const a=co.distanceSqToPoint(r);if(a<e){const c=new O;co.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}class ln{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(s-1);const h=n[i],u=n[i+1]-h,p=(o-h)/u;return(i+p)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),c=e||(o.isVector2?new ht:new O);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new O,i=[],s=[],o=[],a=new O,c=new he;for(let p=0;p<=t;p++){const g=p/t;i[p]=this.getTangentAt(g,new O)}s[0]=new O,o[0]=new O;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ae(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(i[p],s[p])}if(e===!0){let p=Math.acos(Ae(s[0].dot(s[t]),-1,1));p/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(p=-p);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(i[g],p*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class xo extends ln{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e){const n=e||new ht,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,p=l-this.aY;c=u*h-p*d+this.aX,l=u*d+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class qm extends xo{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function yo(){let r=0,t=0,e=0,n=0;function i(s,o,a,c){r=s,t=a,e=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){i(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,d){let u=(o-s)/l-(a-s)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,p*=h,i(o,a,u,p)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const Is=new O,Hr=new yo,Vr=new yo,kr=new yo;class Xm extends ln{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new O){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%s]:(Is.subVectors(i[0],i[1]).add(i[0]),l=Is);const d=i[a%s],u=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Is.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Is),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Hr.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,v,m),Vr.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,v,m),kr.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Hr.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),Vr.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),kr.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(Hr.calc(c),Vr.calc(c),kr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new O().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ec(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,c=r*a;return(2*e-2*n+s+o)*c+(-3*e+3*n-2*s-o)*a+s*r+e}function Ym(r,t){const e=1-r;return e*e*t}function jm(r,t){return 2*(1-r)*r*t}function Zm(r,t){return r*r*t}function ji(r,t,e,n){return Ym(r,t)+jm(r,e)+Zm(r,n)}function Km(r,t){const e=1-r;return e*e*e*t}function $m(r,t){const e=1-r;return 3*e*e*r*t}function Jm(r,t){return 3*(1-r)*r*r*t}function Qm(r,t){return r*r*r*t}function Zi(r,t,e,n,i){return Km(r,t)+$m(r,e)+Jm(r,n)+Qm(r,i)}class pl extends ln{constructor(t=new ht,e=new ht,n=new ht,i=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ht){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Zi(t,i.x,s.x,o.x,a.x),Zi(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class tg extends ln{constructor(t=new O,e=new O,n=new O,i=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new O){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Zi(t,i.x,s.x,o.x,a.x),Zi(t,i.y,s.y,o.y,a.y),Zi(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ml extends ln{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class eg extends ln{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gl extends ln{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(ji(t,i.x,s.x,o.x),ji(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ng extends ln{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(ji(t,i.x,s.x,o.x),ji(t,i.y,s.y,o.y),ji(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vl extends ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(ec(a,c.x,l.x,h.x,d.x),ec(a,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ht().fromArray(i))}return this}}var lo=Object.freeze({__proto__:null,ArcCurve:qm,CatmullRomCurve3:Xm,CubicBezierCurve:pl,CubicBezierCurve3:tg,EllipseCurve:xo,LineCurve:ml,LineCurve3:eg,QuadraticBezierCurve:gl,QuadraticBezierCurve3:ng,SplineCurve:vl});class ig extends ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new lo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new lo[i.type]().fromJSON(i))}return this}}class nc extends ig{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ml(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new gl(this.currentPoint.clone(),new ht(t,e),new ht(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new pl(this.currentPoint.clone(),new ht(t,e),new ht(n,i),new ht(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new vl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,s,o,a,c),this}absellipse(t,e,n,i,s,o,a,c){const l=new xo(t,e,n,i,s,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Te extends Fe{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],d=[],u=[],p=[];let g=0;const v=[],m=n/2;let f=0;_(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ue(d,3)),this.setAttribute("normal",new ue(u,3)),this.setAttribute("uv",new ue(p,2));function _(){const M=new O,R=new O;let b=0;const A=(e-t)/n;for(let U=0;U<=s;U++){const S=[],E=U/s,F=E*(e-t)+t;for(let z=0;z<=i;z++){const B=z/i,P=B*c+a,I=Math.sin(P),L=Math.cos(P);R.x=F*I,R.y=-E*n+m,R.z=F*L,d.push(R.x,R.y,R.z),M.set(I,A,L).normalize(),u.push(M.x,M.y,M.z),p.push(B,1-E),S.push(g++)}v.push(S)}for(let U=0;U<i;U++)for(let S=0;S<s;S++){const E=v[S][U],F=v[S+1][U],z=v[S+1][U+1],B=v[S][U+1];h.push(E,F,B),h.push(F,z,B),b+=6}l.addGroup(f,b,0),f+=b}function x(M){const R=g,b=new ht,A=new O;let U=0;const S=M===!0?t:e,E=M===!0?1:-1;for(let z=1;z<=i;z++)d.push(0,m*E,0),u.push(0,E,0),p.push(.5,.5),g++;const F=g;for(let z=0;z<=i;z++){const P=z/i*c+a,I=Math.cos(P),L=Math.sin(P);A.x=S*L,A.y=m*E,A.z=S*I,d.push(A.x,A.y,A.z),u.push(0,E,0),b.x=I*.5+.5,b.y=L*.5*E+.5,p.push(b.x,b.y),g++}for(let z=0;z<i;z++){const B=R+z,P=F+z;M===!0?h.push(P,P+1,B):h.push(P+1,P,B),U+=3}l.addGroup(f,U,M===!0?1:2),f+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Te(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ts extends Te{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ts(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Mo extends Fe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],o=[];a(i),l(n),h(),this.setAttribute("position",new ue(s,3)),this.setAttribute("normal",new ue(s.slice(),3)),this.setAttribute("uv",new ue(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const x=new O,M=new O,R=new O;for(let b=0;b<e.length;b+=3)p(e[b+0],x),p(e[b+1],M),p(e[b+2],R),c(x,M,R,_)}function c(_,x,M,R){const b=R+1,A=[];for(let U=0;U<=b;U++){A[U]=[];const S=_.clone().lerp(M,U/b),E=x.clone().lerp(M,U/b),F=b-U;for(let z=0;z<=F;z++)z===0&&U===b?A[U][z]=S:A[U][z]=S.clone().lerp(E,z/F)}for(let U=0;U<b;U++)for(let S=0;S<2*(b-U)-1;S++){const E=Math.floor(S/2);S%2===0?(u(A[U][E+1]),u(A[U+1][E]),u(A[U][E])):(u(A[U][E+1]),u(A[U+1][E+1]),u(A[U+1][E]))}}function l(_){const x=new O;for(let M=0;M<s.length;M+=3)x.x=s[M+0],x.y=s[M+1],x.z=s[M+2],x.normalize().multiplyScalar(_),s[M+0]=x.x,s[M+1]=x.y,s[M+2]=x.z}function h(){const _=new O;for(let x=0;x<s.length;x+=3){_.x=s[x+0],_.y=s[x+1],_.z=s[x+2];const M=m(_)/2/Math.PI+.5,R=f(_)/Math.PI+.5;o.push(M,1-R)}g(),d()}function d(){for(let _=0;_<o.length;_+=6){const x=o[_+0],M=o[_+2],R=o[_+4],b=Math.max(x,M,R),A=Math.min(x,M,R);b>.9&&A<.1&&(x<.2&&(o[_+0]+=1),M<.2&&(o[_+2]+=1),R<.2&&(o[_+4]+=1))}}function u(_){s.push(_.x,_.y,_.z)}function p(_,x){const M=_*3;x.x=t[M+0],x.y=t[M+1],x.z=t[M+2]}function g(){const _=new O,x=new O,M=new O,R=new O,b=new ht,A=new ht,U=new ht;for(let S=0,E=0;S<s.length;S+=9,E+=6){_.set(s[S+0],s[S+1],s[S+2]),x.set(s[S+3],s[S+4],s[S+5]),M.set(s[S+6],s[S+7],s[S+8]),b.set(o[E+0],o[E+1]),A.set(o[E+2],o[E+3]),U.set(o[E+4],o[E+5]),R.copy(_).add(x).add(M).divideScalar(3);const F=m(R);v(b,E+0,_,F),v(A,E+2,x,F),v(U,E+4,M,F)}}function v(_,x,M,R){R<0&&_.x===1&&(o[x]=_.x-1),M.x===0&&M.z===0&&(o[x]=R/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function f(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mo(t.vertices,t.indices,t.radius,t.details)}}let _l=class extends nc{constructor(t){super(t),this.uuid=Ni(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new nc().fromJSON(i))}return this}};const sg={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=xl(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,h,d,u,p;if(n&&(s=lg(r,t,s,e)),r.length>80*e){a=l=r[0],c=h=r[1];for(let g=e;g<i;g+=e)d=r[g],u=r[g+1],d<a&&(a=d),u<c&&(c=u),d>l&&(l=d),u>h&&(h=u);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return es(s,o,e,a,c,p,0),o}};function xl(r,t,e,n,i){let s,o;if(i===yg(r,t,e,n)>0)for(s=t;s<e;s+=n)o=ic(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=ic(s,r[s],r[s+1],o);return o&&tr(o,o.next)&&(is(o),o=o.next),o}function ti(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(tr(e,e.next)||re(e.prev,e,e.next)===0)){if(is(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function es(r,t,e,n,i,s,o){if(!r)return;!o&&s&&pg(r,n,i,s);let a=r,c,l;for(;r.prev!==r.next;){if(c=r.prev,l=r.next,s?og(r,n,i,s):rg(r)){t.push(c.i/e|0),t.push(r.i/e|0),t.push(l.i/e|0),is(r),r=l.next,a=l.next;continue}if(r=l,r===a){o?o===1?(r=ag(ti(r),t,e),es(r,t,e,n,i,s,2)):o===2&&cg(r,t,e,n,i,s):es(ti(r),t,e,n,i,s,1);break}}}function rg(r){const t=r.prev,e=r,n=r.next;if(re(t,e,n)>=0)return!1;const i=t.x,s=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=i<s?i<o?i:o:s<o?s:o,d=a<c?a<l?a:l:c<l?c:l,u=i>s?i>o?i:o:s>o?s:o,p=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=p&&Ei(i,a,s,c,o,l,g.x,g.y)&&re(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function og(r,t,e,n){const i=r.prev,s=r,o=r.next;if(re(i,s,o)>=0)return!1;const a=i.x,c=s.x,l=o.x,h=i.y,d=s.y,u=o.y,p=a<c?a<l?a:l:c<l?c:l,g=h<d?h<u?h:u:d<u?d:u,v=a>c?a>l?a:l:c>l?c:l,m=h>d?h>u?h:u:d>u?d:u,f=ho(p,g,t,e,n),_=ho(v,m,t,e,n);let x=r.prevZ,M=r.nextZ;for(;x&&x.z>=f&&M&&M.z<=_;){if(x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&Ei(a,h,c,d,l,u,x.x,x.y)&&re(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=p&&M.x<=v&&M.y>=g&&M.y<=m&&M!==i&&M!==o&&Ei(a,h,c,d,l,u,M.x,M.y)&&re(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=f;){if(x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&Ei(a,h,c,d,l,u,x.x,x.y)&&re(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=_;){if(M.x>=p&&M.x<=v&&M.y>=g&&M.y<=m&&M!==i&&M!==o&&Ei(a,h,c,d,l,u,M.x,M.y)&&re(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function ag(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!tr(i,s)&&yl(i,n,n.next,s)&&ns(i,s)&&ns(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),is(n),is(n.next),n=r=s),n=n.next}while(n!==r);return ti(n)}function cg(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&vg(o,a)){let c=Ml(o,a);o=ti(o,o.next),c=ti(c,c.next),es(o,t,e,n,i,s,0),es(c,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function lg(r,t,e,n){const i=[];let s,o,a,c,l;for(s=0,o=t.length;s<o;s++)a=t[s]*n,c=s<o-1?t[s+1]*n:r.length,l=xl(r,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(gg(l));for(i.sort(hg),s=0;s<i.length;s++)e=ug(i[s],e);return e}function hg(r,t){return r.x-t.x}function ug(r,t){const e=dg(r,t);if(!e)return t;const n=Ml(e,r);return ti(n,n.next),ti(e,e.next)}function dg(r,t){let e=t,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=s&&u>n&&(n=u,i=e.x<e.next.x?e:e.next,u===s))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,d;e=i;do s>=e.x&&e.x>=c&&s!==e.x&&Ei(o<l?s:n,o,c,l,o<l?n:s,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(s-e.x),ns(e,r)&&(d<h||d===h&&(e.x>i.x||e.x===i.x&&fg(i,e)))&&(i=e,h=d)),e=e.next;while(e!==a);return i}function fg(r,t){return re(r.prev,r,t.prev)<0&&re(t.next,r,r.next)<0}function pg(r,t,e,n){let i=r;do i.z===0&&(i.z=ho(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,mg(i)}function mg(r){let t,e,n,i,s,o,a,c,l=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,l*=2}while(o>1);return r}function ho(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function gg(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Ei(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function vg(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!_g(r,t)&&(ns(r,t)&&ns(t,r)&&xg(r,t)&&(re(r.prev,r,t.prev)||re(r,t.prev,t))||tr(r,t)&&re(r.prev,r,r.next)>0&&re(t.prev,t,t.next)>0)}function re(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function tr(r,t){return r.x===t.x&&r.y===t.y}function yl(r,t,e,n){const i=Ds(re(r,t,e)),s=Ds(re(r,t,n)),o=Ds(re(e,n,r)),a=Ds(re(e,n,t));return!!(i!==s&&o!==a||i===0&&Ns(r,e,t)||s===0&&Ns(r,n,t)||o===0&&Ns(e,r,n)||a===0&&Ns(e,t,n))}function Ns(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Ds(r){return r>0?1:r<0?-1:0}function _g(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&yl(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function ns(r,t){return re(r.prev,r,r.next)<0?re(r,t,r.next)>=0&&re(r,r.prev,t)>=0:re(r,t,r.prev)<0||re(r,r.next,t)<0}function xg(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function Ml(r,t){const e=new uo(r.i,r.x,r.y),n=new uo(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function ic(r,t,e,n){const i=new uo(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function is(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function uo(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function yg(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class Ki{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return Ki.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];sc(t),rc(n,t);let o=t.length;e.forEach(sc);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,rc(n,e[c]);const a=sg.triangulate(n,i);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function sc(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function rc(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class So extends Fe{constructor(t=new _l([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new ue(i,3)),this.setAttribute("uv",new ue(s,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:Mg;let x,M=!1,R,b,A,U;f&&(x=f.getSpacedPoints(h),M=!0,u=!1,R=f.computeFrenetFrames(h,!1),b=new O,A=new O,U=new O),u||(m=0,p=0,g=0,v=0);const S=a.extractPoints(l);let E=S.shape;const F=S.holes;if(!Ki.isClockWise(E)){E=E.reverse();for(let N=0,at=F.length;N<at;N++){const J=F[N];Ki.isClockWise(J)&&(F[N]=J.reverse())}}const B=Ki.triangulateShape(E,F),P=E;for(let N=0,at=F.length;N<at;N++){const J=F[N];E=E.concat(J)}function I(N,at,J){return at||console.error("THREE.ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(at,J)}const L=E.length,Z=B.length;function V(N,at,J){let rt,$,bt;const mt=N.x-at.x,T=N.y-at.y,w=J.x-N.x,H=J.y-N.y,st=mt*mt+T*T,nt=mt*H-T*w;if(Math.abs(nt)>Number.EPSILON){const et=Math.sqrt(st),St=Math.sqrt(w*w+H*H),dt=at.x-T/et,xt=at.y+mt/et,At=J.x-H/St,Ot=J.y+w/St,it=((At-dt)*H-(Ot-xt)*w)/(mt*H-T*w);rt=dt+mt*it-N.x,$=xt+T*it-N.y;const jt=rt*rt+$*$;if(jt<=2)return new ht(rt,$);bt=Math.sqrt(jt/2)}else{let et=!1;mt>Number.EPSILON?w>Number.EPSILON&&(et=!0):mt<-Number.EPSILON?w<-Number.EPSILON&&(et=!0):Math.sign(T)===Math.sign(H)&&(et=!0),et?(rt=-T,$=mt,bt=Math.sqrt(st)):(rt=mt,$=T,bt=Math.sqrt(st/2))}return new ht(rt/bt,$/bt)}const k=[];for(let N=0,at=P.length,J=at-1,rt=N+1;N<at;N++,J++,rt++)J===at&&(J=0),rt===at&&(rt=0),k[N]=V(P[N],P[J],P[rt]);const K=[];let Q,j=k.concat();for(let N=0,at=F.length;N<at;N++){const J=F[N];Q=[];for(let rt=0,$=J.length,bt=$-1,mt=rt+1;rt<$;rt++,bt++,mt++)bt===$&&(bt=0),mt===$&&(mt=0),Q[rt]=V(J[rt],J[bt],J[mt]);K.push(Q),j=j.concat(Q)}for(let N=0;N<m;N++){const at=N/m,J=p*Math.cos(at*Math.PI/2),rt=g*Math.sin(at*Math.PI/2)+v;for(let $=0,bt=P.length;$<bt;$++){const mt=I(P[$],k[$],rt);gt(mt.x,mt.y,-J)}for(let $=0,bt=F.length;$<bt;$++){const mt=F[$];Q=K[$];for(let T=0,w=mt.length;T<w;T++){const H=I(mt[T],Q[T],rt);gt(H.x,H.y,-J)}}}const Y=g+v;for(let N=0;N<L;N++){const at=u?I(E[N],j[N],Y):E[N];M?(A.copy(R.normals[0]).multiplyScalar(at.x),b.copy(R.binormals[0]).multiplyScalar(at.y),U.copy(x[0]).add(A).add(b),gt(U.x,U.y,U.z)):gt(at.x,at.y,0)}for(let N=1;N<=h;N++)for(let at=0;at<L;at++){const J=u?I(E[at],j[at],Y):E[at];M?(A.copy(R.normals[N]).multiplyScalar(J.x),b.copy(R.binormals[N]).multiplyScalar(J.y),U.copy(x[N]).add(A).add(b),gt(U.x,U.y,U.z)):gt(J.x,J.y,d/h*N)}for(let N=m-1;N>=0;N--){const at=N/m,J=p*Math.cos(at*Math.PI/2),rt=g*Math.sin(at*Math.PI/2)+v;for(let $=0,bt=P.length;$<bt;$++){const mt=I(P[$],k[$],rt);gt(mt.x,mt.y,d+J)}for(let $=0,bt=F.length;$<bt;$++){const mt=F[$];Q=K[$];for(let T=0,w=mt.length;T<w;T++){const H=I(mt[T],Q[T],rt);M?gt(H.x,H.y+x[h-1].y,x[h-1].x+J):gt(H.x,H.y,d+J)}}}tt(),ut();function tt(){const N=i.length/3;if(u){let at=0,J=L*at;for(let rt=0;rt<Z;rt++){const $=B[rt];Pt($[2]+J,$[1]+J,$[0]+J)}at=h+m*2,J=L*at;for(let rt=0;rt<Z;rt++){const $=B[rt];Pt($[0]+J,$[1]+J,$[2]+J)}}else{for(let at=0;at<Z;at++){const J=B[at];Pt(J[2],J[1],J[0])}for(let at=0;at<Z;at++){const J=B[at];Pt(J[0]+L*h,J[1]+L*h,J[2]+L*h)}}n.addGroup(N,i.length/3-N,0)}function ut(){const N=i.length/3;let at=0;Mt(P,at),at+=P.length;for(let J=0,rt=F.length;J<rt;J++){const $=F[J];Mt($,at),at+=$.length}n.addGroup(N,i.length/3-N,1)}function Mt(N,at){let J=N.length;for(;--J>=0;){const rt=J;let $=J-1;$<0&&($=N.length-1);for(let bt=0,mt=h+m*2;bt<mt;bt++){const T=L*bt,w=L*(bt+1),H=at+rt+T,st=at+$+T,nt=at+$+w,et=at+rt+w;Ut(H,st,nt,et)}}}function gt(N,at,J){c.push(N),c.push(at),c.push(J)}function Pt(N,at,J){Et(N),Et(at),Et(J);const rt=i.length/3,$=_.generateTopUV(n,i,rt-3,rt-2,rt-1);Nt($[0]),Nt($[1]),Nt($[2])}function Ut(N,at,J,rt){Et(N),Et(at),Et(rt),Et(at),Et(J),Et(rt);const $=i.length/3,bt=_.generateSideWallUV(n,i,$-6,$-3,$-2,$-1);Nt(bt[0]),Nt(bt[1]),Nt(bt[3]),Nt(bt[1]),Nt(bt[2]),Nt(bt[3])}function Et(N){i.push(c[N*3+0]),i.push(c[N*3+1]),i.push(c[N*3+2])}function Nt(N){s.push(N.x),s.push(N.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Sg(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new lo[i.type]().fromJSON(i)),new So(n,t.options)}}const Mg={generateTopUV:function(r,t,e,n,i){const s=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new ht(s,o),new ht(a,c),new ht(l,h)]},generateSideWallUV:function(r,t,e,n,i,s){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[i*3],p=t[i*3+1],g=t[i*3+2],v=t[s*3],m=t[s*3+1],f=t[s*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ht(o,1-c),new ht(l,1-d),new ht(u,1-g),new ht(v,1-f)]:[new ht(a,1-c),new ht(h,1-d),new ht(p,1-g),new ht(m,1-f)]}};function Sg(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Eo extends Mo{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Eo(t.radius,t.detail)}}class er extends Fe{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],d=new O,u=new O,p=[],g=[],v=[],m=[];for(let f=0;f<=n;f++){const _=[],x=f/n;let M=0;f===0&&o===0?M=.5/e:f===n&&c===Math.PI&&(M=-.5/e);for(let R=0;R<=e;R++){const b=R/e;d.x=-t*Math.cos(i+b*s)*Math.sin(o+x*a),d.y=t*Math.cos(o+x*a),d.z=t*Math.sin(i+b*s)*Math.sin(o+x*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(b+M,1-x),_.push(l++)}h.push(_)}for(let f=0;f<n;f++)for(let _=0;_<e;_++){const x=h[f][_+1],M=h[f][_],R=h[f+1][_],b=h[f+1][_+1];(f!==0||o>0)&&p.push(x,M,b),(f!==n-1||c<Math.PI)&&p.push(M,R,b)}this.setIndex(p),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(v,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new er(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class nr extends Fe{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new O,d=new O,u=new O;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const v=g/i*s,m=p/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(v),d.y=(t+e*Math.cos(m))*Math.sin(v),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const v=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,_=(i+1)*p+g;o.push(v,m,_),o.push(m,f,_)}this.setIndex(o),this.setAttribute("position",new ue(a,3)),this.setAttribute("normal",new ue(c,3)),this.setAttribute("uv",new ue(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Kt extends Di{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kc,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class wo extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Eg extends wo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Wr=new he,oc=new O,ac=new O;class wg{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new go,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;oc.setFromMatrixPosition(t.matrixWorld),e.position.copy(oc),ac.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ac),e.updateMatrixWorld(),Wr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class bg extends wg{constructor(){super(new rl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tg extends wo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new bg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ag extends wo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Cg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=cc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=cc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function cc(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fo);class en{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new y);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new y);const n=this.elements,i=t.x,s=t.y,o=t.z;return e.x=n[0]*i+n[1]*s+n[2]*o,e.y=n[3]*i+n[4]*s+n[5]*o,e.z=n[6]*i+n[7]*s+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new en);const n=this.elements,i=t.elements,s=e.elements,o=n[0],a=n[1],c=n[2],l=n[3],h=n[4],d=n[5],u=n[6],p=n[7],g=n[8],v=i[0],m=i[1],f=i[2],_=i[3],x=i[4],M=i[5],R=i[6],b=i[7],A=i[8];return s[0]=o*v+a*_+c*R,s[1]=o*m+a*x+c*b,s[2]=o*f+a*M+c*A,s[3]=l*v+h*_+d*R,s[4]=l*m+h*x+d*b,s[5]=l*f+h*M+d*A,s[6]=u*v+p*_+g*R,s[7]=u*m+p*x+g*b,s[8]=u*f+p*M+g*A,e}scale(t,e){e===void 0&&(e=new en);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new y);const n=3,i=4,s=[];let o,a;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+i*a]=this.elements[o+3*a];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let c=3;const l=c;let h;const d=4;let u;do{if(o=l-c,s[o+i*o]===0){for(a=o+1;a<l;a++)if(s[o+i*a]!==0){h=d;do u=d-h,s[u+i*o]+=s[u+i*a];while(--h);break}}if(s[o+i*o]!==0)for(a=o+1;a<l;a++){const p=s[o+i*a]/s[o+i*o];h=d;do u=d-h,s[u+i*a]=u<=o?0:s[u+i*a]-s[u+i*o]*p;while(--h)}}while(--c);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new en);const e=3,n=6,i=Rg;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const c=a;let l;const h=n;let d;do{if(s=c-a,i[s+n*s]===0){for(o=s+1;o<c;o++)if(i[s+n*o]!==0){l=h;do d=h-l,i[d+n*s]+=i[d+n*o];while(--l);break}}if(i[s+n*s]!==0)for(o=s+1;o<c;o++){const u=i[s+n*o]/i[s+n*s];l=h;do d=h-l,i[d+n*o]=d<=s?0:i[d+n*o]-i[d+n*s]*u;while(--l)}}while(--a);s=2;do{o=s-1;do{const u=i[s+n*o]/i[s+n*s];l=n;do d=n-l,i[d+n*o]=i[d+n*o]-i[d+n*s]*u;while(--l)}while(o--)}while(--s);s=2;do{const u=1/i[s+n*s];l=n;do d=n-l,i[d+n*s]=i[d+n*s]*u;while(--l)}while(s--);s=2;do{o=2;do{if(d=i[e+o+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,o,d)}while(o--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,o=e+e,a=n+n,c=i+i,l=e*o,h=e*a,d=e*c,u=n*a,p=n*c,g=i*c,v=s*o,m=s*a,f=s*c,_=this.elements;return _[3*0+0]=1-(u+g),_[3*0+1]=h-f,_[3*0+2]=d+m,_[3*1+0]=h+f,_[3*1+1]=1-(l+g),_[3*1+2]=p-v,_[3*2+0]=d-m,_[3*2+1]=p+v,_[3*2+2]=1-(l+u),this}transpose(t){t===void 0&&(t=new en);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const Rg=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class y{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new y);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,c=this.z;return e.x=a*s-c*i,e.y=c*n-o*s,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new y(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new y(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new en([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new y);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return Math.sqrt((s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return(s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new y);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new y),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new y),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new y),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=Pg,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=Lg;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(lc),lc.almostEquals(t,e)}clone(){return new y(this.x,this.y,this.z)}}y.ZERO=new y(0,0,0);y.UNIT_X=new y(1,0,0);y.UNIT_Y=new y(0,1,0);y.UNIT_Z=new y(0,0,1);const Pg=new y,Lg=new y,lc=new y;class He{constructor(t){t===void 0&&(t={}),this.lowerBound=new y,this.upperBound=new y,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,o=this.upperBound,a=n;s.copy(t[0]),a&&a.vmult(s,s),o.copy(s);for(let c=1;c<t.length;c++){let l=t[c];a&&(a.vmult(l,hc),l=hc),l.x>o.x&&(o.x=l.x),l.x<s.x&&(s.x=l.x),l.y>o.y&&(o.y=l.y),l.y<s.y&&(s.y=l.y),l.z>o.z&&(o.z=l.z),l.z<s.z&&(s.z=l.z)}return e&&(e.vadd(s,s),e.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new He().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,o=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,c=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return o&&a&&c}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,o,a,c){const l=this.lowerBound,h=this.upperBound;t.copy(l),e.set(h.x,l.y,l.z),n.set(h.x,h.y,l.z),i.set(l.x,h.y,h.z),s.set(h.x,l.y,h.z),o.set(l.x,h.y,l.z),a.set(l.x,l.y,h.z),c.copy(h)}toLocalFrame(t,e){const n=uc,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,a,c,l,h,d);for(let u=0;u!==8;u++){const p=n[u];t.pointToLocal(p,p)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=uc,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,a,c,l,h,d);for(let u=0;u!==8;u++){const p=n[u];t.pointToWorld(p,p)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,c=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,p=Math.max(Math.max(Math.min(a,c),Math.min(l,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(a,c),Math.max(l,h)),Math.max(d,u));return!(g<0||p>g)}}const hc=new y,uc=[new y,new y,new y,new y,new y,new y,new y,new y];class dc{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class Sl{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class fe{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new y),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=Ig,i=Ng;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new fe);const n=this.x,i=this.y,s=this.z,o=this.w,a=t.x,c=t.y,l=t.z,h=t.w;return e.x=n*h+o*a+i*l-s*c,e.y=i*h+o*c+s*a-n*l,e.z=s*h+o*l+n*c-i*a,e.w=o*h-n*a-i*c-s*l,e}inverse(t){t===void 0&&(t=new fe);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+s*s);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new fe),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new y);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,c=this.z,l=this.w,h=l*n+a*s-c*i,d=l*i+c*n-o*s,u=l*s+o*i-a*n,p=-o*n-a*i-c*s;return e.x=h*l+p*-o+d*-c-u*-a,e.y=d*l+p*-a+u*-o-h*-c,e.z=u*l+p*-c+h*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const o=this.x,a=this.y,c=this.z,l=this.w;switch(e){case"YZX":const h=o*a+c*l;if(h>.499&&(n=2*Math.atan2(o,l),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(o,l),i=-Math.PI/2,s=0),n===void 0){const d=o*o,u=a*a,p=c*c;n=Math.atan2(2*a*l-2*o*c,1-2*u-2*p),i=Math.asin(2*h),s=Math.atan2(2*o*l-2*a*c,1-2*d-2*p)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),c=Math.sin(t/2),l=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=c*o*a+s*l*h,this.y=s*l*a-c*o*h,this.z=s*o*h+c*l*a,this.w=s*o*a-c*l*h):i==="YXZ"?(this.x=c*o*a+s*l*h,this.y=s*l*a-c*o*h,this.z=s*o*h-c*l*a,this.w=s*o*a+c*l*h):i==="ZXY"?(this.x=c*o*a-s*l*h,this.y=s*l*a+c*o*h,this.z=s*o*h+c*l*a,this.w=s*o*a-c*l*h):i==="ZYX"?(this.x=c*o*a-s*l*h,this.y=s*l*a+c*o*h,this.z=s*o*h-c*l*a,this.w=s*o*a+c*l*h):i==="YZX"?(this.x=c*o*a+s*l*h,this.y=s*l*a+c*o*h,this.z=s*o*h-c*l*a,this.w=s*o*a-c*l*h):i==="XZY"&&(this.x=c*o*a-s*l*h,this.y=s*l*a-c*o*h,this.z=s*o*h+c*l*a,this.w=s*o*a+c*l*h),this}clone(){return new fe(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new fe);const i=this.x,s=this.y,o=this.z,a=this.w;let c=t.x,l=t.y,h=t.z,d=t.w,u,p,g,v,m;return p=i*c+s*l+o*h+a*d,p<0&&(p=-p,c=-c,l=-l,h=-h,d=-d),1-p>1e-6?(u=Math.acos(p),g=Math.sin(u),v=Math.sin((1-e)*u)/g,m=Math.sin(e*u)/g):(v=1-e,m=e),n.x=v*i+m*c,n.y=v*s+m*l,n.z=v*o+m*h,n.w=v*a+m*d,n}integrate(t,e,n,i){i===void 0&&(i=new fe);const s=t.x*n.x,o=t.y*n.y,a=t.z*n.z,c=this.x,l=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(s*d+o*h-a*l),i.y+=u*(o*d+a*c-s*h),i.z+=u*(a*d+s*l-o*c),i.w+=u*(-s*c-o*l-a*h),i}}const Ig=new y,Ng=new y,Dg={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class _t{constructor(t){t===void 0&&(t={}),this.id=_t.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}_t.idCounter=0;_t.types=Dg;class Zt{constructor(t){t===void 0&&(t={}),this.position=new y,this.quaternion=new fe,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return Zt.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return Zt.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new y),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new y),n.vsub(t,i),e.conjugate(fc),fc.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new y),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new y),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new y),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const fc=new fe;class Ai extends _t{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=t;super({type:_t.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new y;for(let s=0;s!==t.length;s++){const o=t[s],a=o.length;for(let c=0;c!==a;c++){const l=(c+1)%a;e[o[c]].vsub(e[o[l]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new y;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];Ai.computeNormal(i,s,o,e)}static computeNormal(t,e,n,i){const s=new y,o=new y;e.vsub(t,o),n.vsub(e,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,o,a,c,l){const h=new y;let d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),s.vmult(h,h);const v=h.dot(o);v>u&&(u=v,d=g)}const p=[];for(let g=0;g<n.faces[d].length;g++){const v=n.vertices[n.faces[d][g]],m=new y;m.copy(v),s.vmult(m,m),i.vadd(m,m),p.push(m)}d>=0&&this.clipFaceAgainstHull(o,t,e,p,a,c,l)}findSeparatingAxis(t,e,n,i,s,o,a,c){const l=new y,h=new y,d=new y,u=new y,p=new y,g=new y;let v=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let f=0;f!==m.uniqueAxes.length;f++){n.vmult(m.uniqueAxes[f],l);const _=m.testSepAxis(l,t,e,n,i,s);if(_===!1)return!1;_<v&&(v=_,o.copy(l))}else{const f=a?a.length:m.faces.length;for(let _=0;_<f;_++){const x=a?a[_]:_;l.copy(m.faceNormals[x]),n.vmult(l,l);const M=m.testSepAxis(l,t,e,n,i,s);if(M===!1)return!1;M<v&&(v=M,o.copy(l))}}if(t.uniqueAxes)for(let f=0;f!==t.uniqueAxes.length;f++){s.vmult(t.uniqueAxes[f],h);const _=m.testSepAxis(h,t,e,n,i,s);if(_===!1)return!1;_<v&&(v=_,o.copy(h))}else{const f=c?c.length:t.faces.length;for(let _=0;_<f;_++){const x=c?c[_]:_;h.copy(t.faceNormals[x]),s.vmult(h,h);const M=m.testSepAxis(h,t,e,n,i,s);if(M===!1)return!1;M<v&&(v=M,o.copy(h))}}for(let f=0;f!==m.uniqueEdges.length;f++){n.vmult(m.uniqueEdges[f],u);for(let _=0;_!==t.uniqueEdges.length;_++)if(s.vmult(t.uniqueEdges[_],p),u.cross(p,g),!g.almostZero()){g.normalize();const x=m.testSepAxis(g,t,e,n,i,s);if(x===!1)return!1;x<v&&(v=x,o.copy(g))}}return i.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,s,o){const a=this;Ai.project(a,t,n,i,qr),Ai.project(e,t,s,o,Xr);const c=qr[0],l=qr[1],h=Xr[0],d=Xr[1];if(c<d||h<l)return!1;const u=c-d,p=h-l;return u<p?u:p}calculateLocalInertia(t,e){const n=new y,i=new y;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*s*2*s+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,o,a){const c=new y,l=new y,h=new y,d=new y,u=new y,p=new y,g=new y,v=new y,m=this,f=[],_=i,x=f;let M=-1,R=Number.MAX_VALUE;for(let E=0;E<m.faces.length;E++){c.copy(m.faceNormals[E]),n.vmult(c,c);const F=c.dot(t);F<R&&(R=F,M=E)}if(M<0)return;const b=m.faces[M];b.connectedFaces=[];for(let E=0;E<m.faces.length;E++)for(let F=0;F<m.faces[E].length;F++)b.indexOf(m.faces[E][F])!==-1&&E!==M&&b.connectedFaces.indexOf(E)===-1&&b.connectedFaces.push(E);const A=b.length;for(let E=0;E<A;E++){const F=m.vertices[b[E]],z=m.vertices[b[(E+1)%A]];F.vsub(z,l),h.copy(l),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[M]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),p.copy(F),n.vmult(p,p),e.vadd(p,p);const B=b.connectedFaces[E];g.copy(this.faceNormals[B]);const P=this.getPlaneConstantOfFace(B);v.copy(g),n.vmult(v,v);const I=P-v.dot(e);for(this.clipFaceAgainstPlane(_,x,v,I);_.length;)_.shift();for(;x.length;)_.push(x.shift())}g.copy(this.faceNormals[M]);const U=this.getPlaneConstantOfFace(M);v.copy(g),n.vmult(v,v);const S=U-v.dot(e);for(let E=0;E<_.length;E++){let F=v.dot(_[E])+S;if(F<=s&&(console.log(`clamped: depth=${F} to minDist=${s}`),F=s),F<=o){const z=_[E];if(F<=1e-6){const B={point:z,normal:v,depth:F};a.push(B)}}}}clipFaceAgainstPlane(t,e,n,i){let s,o;const a=t.length;if(a<2)return e;let c=t[t.length-1],l=t[0];s=n.dot(c)+i;for(let h=0;h<a;h++){if(l=t[h],o=n.dot(l)+i,s<0)if(o<0){const d=new y;d.copy(l),e.push(d)}else{const d=new y;c.lerp(l,s/(s-o),d),e.push(d)}else if(o<0){const d=new y;c.lerp(l,s/(s-o),d),e.push(d),e.push(l)}c=l,s=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new y);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new y);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let o,a,c,l,h,d,u=new y;for(let p=0;p<s.length;p++){u.copy(s[p]),e.vmult(u,u),t.vadd(u,u);const g=u;(o===void 0||g.x<o)&&(o=g.x),(l===void 0||g.x>l)&&(l=g.x),(a===void 0||g.y<a)&&(a=g.y),(h===void 0||g.y>h)&&(h=g.y),(c===void 0||g.z<c)&&(c=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(o,a,c),i.set(l,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new y);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const o=i[s];e.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];e.vmult(o,o)}}if(t)for(let s=0;s<n;s++){const o=i[s];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=new y;this.getAveragePointLocal(s);for(let o=0;o<this.faces.length;o++){let a=i[o];const c=e[n[o][0]],l=new y;t.vsub(c,l);const h=a.dot(l),d=new y;s.vsub(c,d);const u=a.dot(d);if(h<0&&u>0||h>0&&u<0)return!1}return-1}static project(t,e,n,i,s){const o=t.vertices.length,a=Ug;let c=0,l=0;const h=Fg,d=t.vertices;h.setZero(),Zt.vectorToLocalFrame(n,i,e,a),Zt.pointToLocalFrame(n,i,h,h);const u=h.dot(a);l=c=d[0].dot(a);for(let p=1;p<o;p++){const g=d[p].dot(a);g>c&&(c=g),g<l&&(l=g)}if(l-=u,c-=u,l>c){const p=l;l=c,c=p}s[0]=c,s[1]=l}}const qr=[],Xr=[];new y;const Ug=new y,Fg=new y;class We extends _t{constructor(t){super({type:_t.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=y,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],c=new Ai({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new y),We.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)Pn.set(s[o][0],s[o][1],s[o][2]),e.vmult(Pn,Pn),t.vadd(Pn,Pn),n(Pn.x,Pn.y,Pn.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;rn[0].set(s.x,s.y,s.z),rn[1].set(-s.x,s.y,s.z),rn[2].set(-s.x,-s.y,s.z),rn[3].set(-s.x,-s.y,-s.z),rn[4].set(s.x,-s.y,-s.z),rn[5].set(s.x,s.y,-s.z),rn[6].set(-s.x,s.y,-s.z),rn[7].set(s.x,-s.y,s.z);const o=rn[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const c=rn[a];e.vmult(c,c),t.vadd(c,c);const l=c.x,h=c.y,d=c.z;l>i.x&&(i.x=l),h>i.y&&(i.y=h),d>i.z&&(i.z=d),l<n.x&&(n.x=l),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const Pn=new y,rn=[new y,new y,new y,new y,new y,new y,new y,new y],bo={DYNAMIC:1,STATIC:2,KINEMATIC:4},To={AWAKE:0,SLEEPY:1,SLEEPING:2};class ot extends Sl{constructor(t){t===void 0&&(t={}),super(),this.id=ot.idCounter++,this.index=-1,this.world=null,this.vlambda=new y,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new y,this.previousPosition=new y,this.interpolatedPosition=new y,this.initPosition=new y,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new y,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new y,this.force=new y;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?ot.STATIC:ot.DYNAMIC,typeof t.type==typeof ot.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=ot.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new y,this.quaternion=new fe,this.initQuaternion=new fe,this.previousQuaternion=new fe,this.interpolatedQuaternion=new fe,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new y,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new y,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new y,this.invInertia=new y,this.invInertiaWorld=new en,this.invMassSolve=0,this.invInertiaSolve=new y,this.invInertiaWorldSolve=new en,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new y(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new y(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new He,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new y,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=ot.AWAKE,this.wakeUpAfterNarrowphase=!1,t===ot.SLEEPING&&this.dispatchEvent(ot.wakeupEvent)}sleep(){this.sleepState=ot.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===ot.AWAKE&&n<i?(this.sleepState=ot.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(ot.sleepyEvent)):e===ot.SLEEPY&&n>i?this.wakeUp():e===ot.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(ot.sleepEvent))}}updateSolveMassProperties(){this.sleepState===ot.SLEEPING||this.type===ot.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new y),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new y),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new y),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new y),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new y,s=new fe;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const o=t[s];o.updateBoundingSphereRadius();const a=e[s].length(),c=o.boundingSphereRadius;a+c>i&&(i=a+c)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=Og,o=Bg,a=this.quaternion,c=this.aabb,l=zg;for(let h=0;h!==i;h++){const d=t[h];a.vmult(e[h],s),s.vadd(this.position,s),a.mult(n[h],o),d.calculateWorldAABB(s,o,l.lowerBound,l.upperBound),h===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=Gg,i=Hg;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new y),this.type!==ot.DYNAMIC)return;this.sleepState===ot.SLEEPING&&this.wakeUp();const n=Vg;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new y),this.type!==ot.DYNAMIC)return;const n=kg,i=Wg;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===ot.DYNAMIC&&(this.sleepState===ot.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new y),this.type!==ot.DYNAMIC)return;this.sleepState===ot.SLEEPING&&this.wakeUp();const n=e,i=qg;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=Xg;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new y),this.type!==ot.DYNAMIC)return;const n=Yg,i=jg;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=Zg;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),We.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new y;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===ot.DYNAMIC||this.type===ot.KINEMATIC)||this.sleepState===ot.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,c=this.torque,l=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,p=h*t;i.x+=a.x*p*u.x,i.y+=a.y*p*u.y,i.z+=a.z*p*u.z;const g=d.elements,v=this.angularFactor,m=c.x*v.x,f=c.y*v.y,_=c.z*v.z;s.x+=t*(g[0]*m+g[1]*f+g[2]*_),s.y+=t*(g[3]*m+g[4]*f+g[5]*_),s.z+=t*(g[6]*m+g[7]*f+g[8]*_),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,l.integrate(this.angularVelocity,t,this.angularFactor,l),e&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}ot.idCounter=0;ot.COLLIDE_EVENT_NAME="collide";ot.DYNAMIC=bo.DYNAMIC;ot.STATIC=bo.STATIC;ot.KINEMATIC=bo.KINEMATIC;ot.AWAKE=To.AWAKE;ot.SLEEPY=To.SLEEPY;ot.SLEEPING=To.SLEEPING;ot.wakeupEvent={type:"wakeup"};ot.sleepyEvent={type:"sleepy"};ot.sleepEvent={type:"sleep"};const Og=new y,Bg=new fe,zg=new He,Gg=new en,Hg=new en;new en;const Vg=new y,kg=new y,Wg=new y,qg=new y,Xg=new y,Yg=new y,jg=new y,Zg=new y;class El{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&ot.STATIC||t.sleepState===ot.SLEEPING)&&(e.type&ot.STATIC||e.sleepState===ot.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=Kg;e.position.vsub(t.position,s);const o=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=$g,i=Jg,s=Qg,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],s[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const c=i[a].id,l=s[a].id,h=c<l?`${c},${l}`:`${l},${c}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const c=n.keys.pop(),l=n[c];t.push(i[l]),e.push(s[l]),delete n[c]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new y;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Kg=new y;new y;new fe;new y;const $g={keys:[]},Jg=[],Qg=[];new y;new y;new y;class t0 extends El{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let o,a;for(let c=0;c!==s;c++)for(let l=0;l!==c;l++)o=i[c],a=i[l],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class js{constructor(){this.rayFromWorld=new y,this.rayToWorld=new y,this.hitNormalWorld=new y,this.hitPointWorld=new y,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=a}}let wl,bl,Tl,Al,Cl,Rl,Pl;const Ao={CLOSEST:1,ANY:2,ALL:4};wl=_t.types.SPHERE;bl=_t.types.PLANE;Tl=_t.types.BOX;Al=_t.types.CYLINDER;Cl=_t.types.CONVEXPOLYHEDRON;Rl=_t.types.HEIGHTFIELD;Pl=_t.types.TRIMESH;class ce{get[wl](){return this._intersectSphere}get[bl](){return this._intersectPlane}get[Tl](){return this._intersectBox}get[Al](){return this._intersectConvex}get[Cl](){return this._intersectConvex}get[Rl](){return this._intersectHeightfield}get[Pl](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new y),e===void 0&&(e=new y),this.from=t.clone(),this.to=e.clone(),this.direction=new y,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=ce.ANY,this.result=new js,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||ce.ANY,this.result=e.result||new js,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(pc),Yr.length=0,t.broadphase.aabbQuery(t,pc,Yr),this.intersectBodies(Yr),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=e0,s=n0;for(let o=0,a=t.shapes.length;o<a;o++){const c=t.shapes[o];if(!(n&&!c.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],s),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(c,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(g0(s,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const o=this.from,a=this.to,c=this.direction,l=new y(0,0,1);e.vmult(l,l);const h=new y;o.vsub(n,h);const d=h.dot(l);a.vsub(n,h);const u=h.dot(l);if(d*u>0||o.distanceTo(a)<d)return;const p=l.dot(c);if(Math.abs(p)<this.precision)return;const g=new y,v=new y,m=new y;o.vsub(n,g);const f=-l.dot(g)/p;c.scale(f,v),o.vadd(v,m),this.reportIntersection(l,m,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const o=i0;o.from.copy(this.from),o.to.copy(this.to),Zt.pointToLocalFrame(n,e,o.from,o.from),Zt.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=s0;let c,l,h,d;c=l=0,h=d=t.data.length-1;const u=new He;o.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),c=Math.max(c,a[0]),l=Math.max(l,a[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let p=c;p<h;p++)for(let g=l;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(p,g,u),!!u.overlapsRay(o)){if(t.getConvexTrianglePillar(p,g,!1),Zt.pointToWorldFrame(n,e,t.pillarOffset,Us),this._intersectConvex(t.pillarConvex,e,Us,i,s,mc),this.result.shouldStop)return;t.getConvexTrianglePillar(p,g,!0),Zt.pointToWorldFrame(n,e,t.pillarOffset,Us),this._intersectConvex(t.pillarConvex,e,Us,i,s,mc)}}}_intersectSphere(t,e,n,i,s){const o=this.from,a=this.to,c=t.radius,l=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-c**2,u=h**2-4*l*d,p=r0,g=o0;if(!(u<0))if(u===0)o.lerp(a,u,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1);else{const v=(-h-Math.sqrt(u))/(2*l),m=(-h+Math.sqrt(u))/(2*l);if(v>=0&&v<=1&&(o.lerp(a,v,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1))}}_intersectConvex(t,e,n,i,s,o){const a=a0,c=gc,l=o&&o.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,p=this.direction,g=this.from,v=this.to,m=g.distanceTo(v),f=l?l.length:h.length,_=this.result;for(let x=0;!_.shouldStop&&x<f;x++){const M=l?l[x]:x,R=h[M],b=u[M],A=e,U=n;c.copy(d[R[0]]),A.vmult(c,c),c.vadd(U,c),c.vsub(g,c),A.vmult(b,a);const S=p.dot(a);if(Math.abs(S)<this.precision)continue;const E=a.dot(c)/S;if(!(E<0)){p.scale(E,De),De.vadd(g,De),$e.copy(d[R[0]]),A.vmult($e,$e),U.vadd($e,$e);for(let F=1;!_.shouldStop&&F<R.length-1;F++){on.copy(d[R[F]]),an.copy(d[R[F+1]]),A.vmult(on,on),A.vmult(an,an),U.vadd(on,on),U.vadd(an,an);const z=De.distanceTo(g);!(ce.pointInTriangle(De,$e,on,an)||ce.pointInTriangle(De,on,$e,an))||z>m||this.reportIntersection(a,De,s,i,M)}}}}_intersectTrimesh(t,e,n,i,s,o){const a=c0,c=p0,l=m0,h=gc,d=l0,u=h0,p=u0,g=f0,v=d0,m=t.indices;t.vertices;const f=this.from,_=this.to,x=this.direction;l.position.copy(n),l.quaternion.copy(e),Zt.vectorToLocalFrame(n,e,x,d),Zt.pointToLocalFrame(n,e,f,u),Zt.pointToLocalFrame(n,e,_,p),p.x*=t.scale.x,p.y*=t.scale.y,p.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,p.vsub(u,d),d.normalize();const M=u.distanceSquared(p);t.tree.rayQuery(this,l,c);for(let R=0,b=c.length;!this.result.shouldStop&&R!==b;R++){const A=c[R];t.getNormal(A,a),t.getVertex(m[A*3],$e),$e.vsub(u,h);const U=d.dot(a),S=a.dot(h)/U;if(S<0)continue;d.scale(S,De),De.vadd(u,De),t.getVertex(m[A*3+1],on),t.getVertex(m[A*3+2],an);const E=De.distanceSquared(u);!(ce.pointInTriangle(De,on,$e,an)||ce.pointInTriangle(De,$e,on,an))||E>M||(Zt.vectorToWorldFrame(e,a,v),Zt.pointToWorldFrame(n,e,De,g),this.reportIntersection(v,g,s,i,A))}c.length=0}reportIntersection(t,e,n,i,s){const o=this.from,a=this.to,c=o.distanceTo(e),l=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(l.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case ce.ALL:this.hasHit=!0,l.set(o,a,t,e,n,i,c),l.hasHit=!0,this.callback(l);break;case ce.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c));break;case ce.ANY:this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c),l.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,jn),n.vsub(e,Vi),t.vsub(e,jr);const s=jn.dot(jn),o=jn.dot(Vi),a=jn.dot(jr),c=Vi.dot(Vi),l=Vi.dot(jr);let h,d;return(h=c*a-o*l)>=0&&(d=s*l-o*a)>=0&&h+d<s*c-o*o}}ce.CLOSEST=Ao.CLOSEST;ce.ANY=Ao.ANY;ce.ALL=Ao.ALL;const pc=new He,Yr=[],Vi=new y,jr=new y,e0=new y,n0=new fe,De=new y,$e=new y,on=new y,an=new y;new y;new js;const mc={faceList:[0]},Us=new y,i0=new ce,s0=[],r0=new y,o0=new y,a0=new y;new y;new y;const gc=new y,c0=new y,l0=new y,h0=new y,u0=new y,d0=new y,f0=new y;new He;const p0=[],m0=new Zt,jn=new y,Fs=new y;function g0(r,t,e){e.vsub(r,jn);const n=jn.dot(t);return t.scale(n,Fs),Fs.vadd(r,Fs),e.distanceTo(Fs)}class wi extends El{static checkBounds(t,e,n){let i,s;n===0?(i=t.position.x,s=e.position.x):n===1?(i=t.position.y,s=e.position.y):n===2&&(i=t.position.z,s=e.position.z);const o=t.boundingRadius,a=e.boundingRadius,c=i+o;return s-a<c}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.x<=i.aabb.lowerBound.x);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.y<=i.aabb.lowerBound.y);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.z<=i.aabb.lowerBound.z);s--)t[s+1]=t[s];t[s+1]=i}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{const i=e.indexOf(n.body);i!==-1&&e.splice(i,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){const i=this.axisList,s=i.length,o=this.axisIndex;let a,c;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==s;a++){const l=i[a];for(c=a+1;c<s;c++){const h=i[c];if(this.needBroadphaseCollision(l,h)){if(!wi.checkBounds(l,h,o))break;this.intersectionTest(l,h,e,n)}}}}sortList(){const t=this.axisList,e=this.axisIndex,n=t.length;for(let i=0;i!==n;i++){const s=t[i];s.aabbNeedsUpdate&&s.updateAABB()}e===0?wi.insertionSortX(t):e===1?wi.insertionSortY(t):e===2&&wi.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,i=0,s=0,o=0;const a=this.axisList,c=a.length,l=1/c;for(let p=0;p!==c;p++){const g=a[p],v=g.position.x;t+=v,e+=v*v;const m=g.position.y;n+=m,i+=m*m;const f=g.position.z;s+=f,o+=f*f}const h=e-t*t*l,d=i-n*n*l,u=o-s*s*l;h>d?h>u?this.axisIndex=0:this.axisIndex=2:d>u?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const i=this.axisIndex;let s="x";i===1&&(s="y"),i===2&&(s="z");const o=this.axisList;e.lowerBound[s],e.upperBound[s];for(let a=0;a<o.length;a++){const c=o[a];c.aabbNeedsUpdate&&c.updateAABB(),c.aabb.overlaps(e)&&n.push(c)}return n}}class Ll{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class ir{constructor(t,e,n){n===void 0&&(n={}),n=Ll.defaults(n,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=t,this.bodyB=e,this.id=ir.idCounter++,this.collideConnected=n.collideConnected,n.wakeUpBodies&&(t&&t.wakeUp(),e&&e.wakeUp())}update(){throw new Error("method update() not implmemented in this Constraint subclass!")}enable(){const t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!0}disable(){const t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!1}}ir.idCounter=0;class vc{constructor(){this.spatial=new y,this.rotational=new y}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class ei{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=ei.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new vc,this.jacobianElementB=new vc,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return t.spatial.dot(s)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,a=n.angularVelocity,c=i.angularVelocity;return t.multiplyVectors(s,a)+e.multiplyVectors(o,c)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,a=n.wlambda,c=i.wlambda;return t.multiplyVectors(s,a)+e.multiplyVectors(o,c)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,a=i.force,c=i.torque,l=n.invMassSolve,h=i.invMassSolve;return s.scale(l,_c),a.scale(h,xc),n.invInertiaWorldSolve.vmult(o,yc),i.invInertiaWorldSolve.vmult(c,Mc),t.multiplyVectors(_c,yc)+e.multiplyVectors(xc,Mc)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,c=i.invInertiaWorldSolve;let l=s+o;return a.vmult(t.rotational,Os),l+=Os.dot(t.rotational),c.vmult(e.rotational,Os),l+=Os.dot(e.rotational),l}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=v0;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}ei.idCounter=0;const _c=new y,xc=new y,yc=new y,Mc=new y,Os=new y,v0=new y;class Hs extends ei{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new y,this.rj=new y,this.ni=new y}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,a=this.rj,c=_0,l=x0,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=s.velocity,p=s.angularVelocity;s.force,s.torque;const g=y0,v=this.jacobianElementA,m=this.jacobianElementB,f=this.ni;o.cross(f,c),a.cross(f,l),f.negate(v.spatial),c.negate(v.rotational),m.spatial.copy(f),m.rotational.copy(l),g.copy(s.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(o,g);const _=f.dot(g),x=this.restitution+1,M=x*u.dot(f)-x*h.dot(f)+p.dot(l)-d.dot(c),R=this.computeGiMf();return-_*e-M*n-t*R}getImpactVelocityAlongNormal(){const t=M0,e=S0,n=E0,i=w0,s=b0;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const _0=new y,x0=new y,y0=new y,M0=new y,S0=new y,E0=new y,w0=new y,b0=new y;class T0 extends ir{constructor(t,e,n,i,s){e===void 0&&(e=new y),i===void 0&&(i=new y),s===void 0&&(s=1e6),super(t,n),this.pivotA=e.clone(),this.pivotB=i.clone();const o=this.equationX=new Hs(t,n),a=this.equationY=new Hs(t,n),c=this.equationZ=new Hs(t,n);this.equations.push(o,a,c),o.minForce=a.minForce=c.minForce=-s,o.maxForce=a.maxForce=c.maxForce=s,o.ni.set(1,0,0),a.ni.set(0,1,0),c.ni.set(0,0,1)}update(){const t=this.bodyA,e=this.bodyB,n=this.equationX,i=this.equationY,s=this.equationZ;t.quaternion.vmult(this.pivotA,n.ri),e.quaternion.vmult(this.pivotB,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),s.ri.copy(n.ri),s.rj.copy(n.rj)}}new y;new y;class Sc extends ei{constructor(t,e,n){n===void 0&&(n={});const i=typeof n.maxForce<"u"?n.maxForce:1e6;super(t,e,-i,i),this.axisA=n.axisA?n.axisA.clone():new y(1,0,0),this.axisB=n.axisB?n.axisB.clone():new y(0,1,0),this.maxAngle=Math.PI/2}computeB(t){const e=this.a,n=this.b,i=this.axisA,s=this.axisB,o=A0,a=C0,c=this.jacobianElementA,l=this.jacobianElementB;i.cross(s,o),s.cross(i,a),c.rotational.copy(a),l.rotational.copy(o);const h=Math.cos(this.maxAngle)-i.dot(s),d=this.computeGW(),u=this.computeGiMf();return-h*e-d*n-t*u}}const A0=new y,C0=new y;new y;new y;new y;new y;class R0 extends ei{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,-n,n),this.axisA=new y,this.axisB=new y,this.targetVelocity=0}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.axisA,i=this.axisB,s=this.jacobianElementA,o=this.jacobianElementB;s.rotational.copy(n),i.negate(o.rotational);const a=this.computeGW()-this.targetVelocity,c=this.computeGiMf();return-a*e-t*c}}class Ec extends T0{constructor(t,e,n){n===void 0&&(n={});const i=typeof n.maxForce<"u"?n.maxForce:1e6,s=n.pivotA?n.pivotA.clone():new y,o=n.pivotB?n.pivotB.clone():new y;super(t,s,e,o,i),(this.axisA=n.axisA?n.axisA.clone():new y(1,0,0)).normalize(),(this.axisB=n.axisB?n.axisB.clone():new y(1,0,0)).normalize(),this.collideConnected=!!n.collideConnected;const l=this.rotationalEquation1=new Sc(t,e,n),h=this.rotationalEquation2=new Sc(t,e,n),d=this.motorEquation=new R0(t,e,i);d.enabled=!1,this.equations.push(l,h,d)}enableMotor(){this.motorEquation.enabled=!0}disableMotor(){this.motorEquation.enabled=!1}setMotorSpeed(t){this.motorEquation.targetVelocity=t}setMotorMaxForce(t){this.motorEquation.maxForce=t,this.motorEquation.minForce=-t}update(){const t=this.bodyA,e=this.bodyB,n=this.motorEquation,i=this.rotationalEquation1,s=this.rotationalEquation2,o=P0,a=L0,c=this.axisA,l=this.axisB;super.update(),t.quaternion.vmult(c,o),e.quaternion.vmult(l,a),o.tangents(i.axisA,s.axisA),i.axisB.copy(a),s.axisB.copy(a),this.motorEquation.enabled&&(t.quaternion.vmult(this.axisA,n.axisA),e.quaternion.vmult(this.axisB,n.axisB))}}const P0=new y,L0=new y;class wc extends ei{constructor(t,e,n){super(t,e,-n,n),this.ri=new y,this.rj=new y,this.t=new y}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=I0,o=N0,a=this.t;n.cross(a,s),i.cross(a,o);const c=this.jacobianElementA,l=this.jacobianElementB;a.negate(c.spatial),s.negate(c.rotational),l.spatial.copy(a),l.rotational.copy(o);const h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}}const I0=new y,N0=new y;class sr{constructor(t,e,n){n=Ll.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=sr.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}sr.idCounter=0;class rr{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=rr.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}rr.idCounter=0;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new ce;new y;new y;new y;new y(1,0,0),new y(0,1,0),new y(0,0,1);new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;class Il extends _t{constructor(t){if(super({type:_t.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new y);const n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,i){const s=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){const c=o[a];n[c]=t[c]-s,i[c]=t[c]+s}}}new y;new y;new y;new y;new y;new y;new y;new y;new y;class _i extends Ai{constructor(t,e,n,i){if(t===void 0&&(t=1),e===void 0&&(e=1),n===void 0&&(n=1),i===void 0&&(i=8),t<0)throw new Error("The cylinder radiusTop cannot be negative.");if(e<0)throw new Error("The cylinder radiusBottom cannot be negative.");const s=i,o=[],a=[],c=[],l=[],h=[],d=Math.cos,u=Math.sin;o.push(new y(-e*u(0),-n*.5,e*d(0))),l.push(0),o.push(new y(-t*u(0),n*.5,t*d(0))),h.push(1);for(let g=0;g<s;g++){const v=2*Math.PI/s*(g+1),m=2*Math.PI/s*(g+.5);g<s-1?(o.push(new y(-e*u(v),-n*.5,e*d(v))),l.push(2*g+2),o.push(new y(-t*u(v),n*.5,t*d(v))),h.push(2*g+3),c.push([2*g,2*g+1,2*g+3,2*g+2])):c.push([2*g,2*g+1,1,0]),(s%2===1||g<s/2)&&a.push(new y(-u(m),0,d(m)))}c.push(l),a.push(new y(0,1,0));const p=[];for(let g=0;g<h.length;g++)p.push(h[h.length-g-1]);c.push(p),super({vertices:o,faces:c,axes:a}),this.type=_t.types.CYLINDER,this.radiusTop=t,this.radiusBottom=e,this.height=n,this.numSegments=i}}class D0 extends _t{constructor(){super({type:_t.types.PLANE}),this.worldNormal=new y,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new y),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,i){gn.set(0,0,1),e.vmult(gn,gn);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),gn.x===1?i.x=t.x:gn.x===-1&&(n.x=t.x),gn.y===1?i.y=t.y:gn.y===-1&&(n.y=t.y),gn.z===1?i.z=t.z:gn.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const gn=new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new He;new y;new He;new y;new y;new y;new y;new y;new y;new y;new He;new y;new Zt;new He;class U0{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class F0 extends U0{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,c=e.bodies,l=c.length,h=t;let d,u,p,g,v,m;if(a!==0)for(let M=0;M!==l;M++)c[M].updateSolveMassProperties();const f=B0,_=z0,x=O0;f.length=a,_.length=a,x.length=a;for(let M=0;M!==a;M++){const R=o[M];x[M]=0,_[M]=R.computeB(h),f[M]=1/R.computeC()}if(a!==0){for(let b=0;b!==l;b++){const A=c[b],U=A.vlambda,S=A.wlambda;U.set(0,0,0),S.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let b=0;b!==a;b++){const A=o[b];d=_[b],u=f[b],m=x[b],v=A.computeGWlambda(),p=u*(d-v-A.eps*m),m+p<A.minForce?p=A.minForce-m:m+p>A.maxForce&&(p=A.maxForce-m),x[b]+=p,g+=p>0?p:-p,A.addToWlambda(p)}if(g*g<s)break}for(let b=0;b!==l;b++){const A=c[b],U=A.velocity,S=A.angularVelocity;A.vlambda.vmul(A.linearFactor,A.vlambda),U.vadd(A.vlambda,U),A.wlambda.vmul(A.angularFactor,A.wlambda),S.vadd(A.wlambda,S)}let M=o.length;const R=1/h;for(;M--;)o[M].multiplier=x[M]*R}return n}}const O0=[],B0=[],z0=[];class G0{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class H0 extends G0{constructor(){super(...arguments),this.type=y}constructObject(){return new y}}const ne={sphereSphere:_t.types.SPHERE,spherePlane:_t.types.SPHERE|_t.types.PLANE,boxBox:_t.types.BOX|_t.types.BOX,sphereBox:_t.types.SPHERE|_t.types.BOX,planeBox:_t.types.PLANE|_t.types.BOX,convexConvex:_t.types.CONVEXPOLYHEDRON,sphereConvex:_t.types.SPHERE|_t.types.CONVEXPOLYHEDRON,planeConvex:_t.types.PLANE|_t.types.CONVEXPOLYHEDRON,boxConvex:_t.types.BOX|_t.types.CONVEXPOLYHEDRON,sphereHeightfield:_t.types.SPHERE|_t.types.HEIGHTFIELD,boxHeightfield:_t.types.BOX|_t.types.HEIGHTFIELD,convexHeightfield:_t.types.CONVEXPOLYHEDRON|_t.types.HEIGHTFIELD,sphereParticle:_t.types.PARTICLE|_t.types.SPHERE,planeParticle:_t.types.PLANE|_t.types.PARTICLE,boxParticle:_t.types.BOX|_t.types.PARTICLE,convexParticle:_t.types.PARTICLE|_t.types.CONVEXPOLYHEDRON,cylinderCylinder:_t.types.CYLINDER,sphereCylinder:_t.types.SPHERE|_t.types.CYLINDER,planeCylinder:_t.types.PLANE|_t.types.CYLINDER,boxCylinder:_t.types.BOX|_t.types.CYLINDER,convexCylinder:_t.types.CONVEXPOLYHEDRON|_t.types.CYLINDER,heightfieldCylinder:_t.types.HEIGHTFIELD|_t.types.CYLINDER,particleCylinder:_t.types.PARTICLE|_t.types.CYLINDER,sphereTrimesh:_t.types.SPHERE|_t.types.TRIMESH,planeTrimesh:_t.types.PLANE|_t.types.TRIMESH};class V0{get[ne.sphereSphere](){return this.sphereSphere}get[ne.spherePlane](){return this.spherePlane}get[ne.boxBox](){return this.boxBox}get[ne.sphereBox](){return this.sphereBox}get[ne.planeBox](){return this.planeBox}get[ne.convexConvex](){return this.convexConvex}get[ne.sphereConvex](){return this.sphereConvex}get[ne.planeConvex](){return this.planeConvex}get[ne.boxConvex](){return this.boxConvex}get[ne.sphereHeightfield](){return this.sphereHeightfield}get[ne.boxHeightfield](){return this.boxHeightfield}get[ne.convexHeightfield](){return this.convexHeightfield}get[ne.sphereParticle](){return this.sphereParticle}get[ne.planeParticle](){return this.planeParticle}get[ne.boxParticle](){return this.boxParticle}get[ne.convexParticle](){return this.convexParticle}get[ne.cylinderCylinder](){return this.convexConvex}get[ne.sphereCylinder](){return this.sphereConvex}get[ne.planeCylinder](){return this.planeConvex}get[ne.boxCylinder](){return this.boxConvex}get[ne.convexCylinder](){return this.convexConvex}get[ne.heightfieldCylinder](){return this.heightfieldCylinder}get[ne.particleCylinder](){return this.particleCylinder}get[ne.sphereTrimesh](){return this.sphereTrimesh}get[ne.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new H0,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new Hs(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const c=this.currentContactMaterial;a.restitution=c.restitution,a.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);const l=n.material||t.material,h=i.material||e.material;return l&&h&&l.restitution>=0&&h.restitution>=0&&(a.restitution=l.restitution*h.restitution),a.si=s||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,o=t.sj,a=this.world,c=this.currentContactMaterial;let l=c.friction;const h=s.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(l=h.friction*d.friction),l>0){const u=l*(a.frictionGravity||a.gravity).length();let p=n.invMass+i.invMass;p>0&&(p=1/p);const g=this.frictionEquationPool,v=g.length?g.pop():new wc(n,i,u*p),m=g.length?g.pop():new wc(n,i,u*p);return v.bi=m.bi=n,v.bj=m.bj=i,v.minForce=m.minForce=-u*p,v.maxForce=m.maxForce=u*p,v.ri.copy(t.ri),v.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(v.t,m.t),v.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),m.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),v.enabled=m.enabled=t.enabled,e.push(v,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];kn.setZero(),xi.setZero(),yi.setZero();const s=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==s?(kn.vadd(e.ni,kn),xi.vadd(e.ri,xi),yi.vadd(e.rj,yi)):(kn.vsub(e.ni,kn),xi.vadd(e.rj,xi),yi.vadd(e.ri,yi));const o=1/t;xi.scale(o,n.ri),yi.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),kn.normalize(),kn.tangents(n.t,i.t)}getContacts(t,e,n,i,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const c=q0,l=X0,h=k0,d=W0;for(let u=0,p=t.length;u!==p;u++){const g=t[u],v=e[u];let m=null;g.material&&v.material&&(m=n.getContactMaterial(g.material,v.material)||null);const f=g.type&ot.KINEMATIC&&v.type&ot.STATIC||g.type&ot.STATIC&&v.type&ot.KINEMATIC||g.type&ot.KINEMATIC&&v.type&ot.KINEMATIC;for(let _=0;_<g.shapes.length;_++){g.quaternion.mult(g.shapeOrientations[_],c),g.quaternion.vmult(g.shapeOffsets[_],h),h.vadd(g.position,h);const x=g.shapes[_];for(let M=0;M<v.shapes.length;M++){v.quaternion.mult(v.shapeOrientations[M],l),v.quaternion.vmult(v.shapeOffsets[M],d),d.vadd(v.position,d);const R=v.shapes[M];if(!(x.collisionFilterMask&R.collisionFilterGroup&&R.collisionFilterMask&x.collisionFilterGroup)||h.distanceTo(d)>x.boundingSphereRadius+R.boundingSphereRadius)continue;let b=null;x.material&&R.material&&(b=n.getContactMaterial(x.material,R.material)||null),this.currentContactMaterial=b||m||n.defaultContactMaterial;const A=x.type|R.type,U=this[A];if(U){let S=!1;x.type<R.type?S=U.call(this,x,R,h,d,c,l,g,v,x,R,f):S=U.call(this,R,x,d,h,l,c,v,g,x,R,f),S&&f&&(n.shapeOverlapKeeper.set(x.id,R.id),n.bodyOverlapKeeper.set(g.id,v.id))}}}}}sphereSphere(t,e,n,i,s,o,a,c,l,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const u=this.createContactEquation(a,c,t,e,l,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(c.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,s,o,a,c,l,h,d){const u=this.createContactEquation(a,c,t,e,l,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,Bs),u.ni.scale(u.ni.dot(Bs),bc),Bs.vsub(bc,u.rj),-Bs.dot(u.ni)<=t.radius){if(d)return!0;const p=u.ri,g=u.rj;p.vadd(n,p),p.vsub(a.position,p),g.vadd(i,g),g.vsub(c.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,s,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,o,a,c,t,e,d)}sphereBox(t,e,n,i,s,o,a,c,l,h,d){const u=this.v3pool,p=_v;n.vsub(i,zs),e.getSideNormals(p,o);const g=t.radius;let v=!1;const m=yv,f=Mv,_=Sv;let x=null,M=0,R=0,b=0,A=null;for(let L=0,Z=p.length;L!==Z&&v===!1;L++){const V=mv;V.copy(p[L]);const k=V.length();V.normalize();const K=zs.dot(V);if(K<k+g&&K>0){const Q=gv,j=vv;Q.copy(p[(L+1)%3]),j.copy(p[(L+2)%3]);const Y=Q.length(),tt=j.length();Q.normalize(),j.normalize();const ut=zs.dot(Q),Mt=zs.dot(j);if(ut<Y&&ut>-Y&&Mt<tt&&Mt>-tt){const gt=Math.abs(K-k-g);if((A===null||gt<A)&&(A=gt,R=ut,b=Mt,x=k,m.copy(V),f.copy(Q),_.copy(j),M++,d))return!0}}}if(M){v=!0;const L=this.createContactEquation(a,c,t,e,l,h);m.scale(-g,L.ri),L.ni.copy(m),L.ni.negate(L.ni),m.scale(x,m),f.scale(R,f),m.vadd(f,m),_.scale(b,_),m.vadd(_,L.rj),L.ri.vadd(n,L.ri),L.ri.vsub(a.position,L.ri),L.rj.vadd(i,L.rj),L.rj.vsub(c.position,L.rj),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult)}let U=u.get();const S=xv;for(let L=0;L!==2&&!v;L++)for(let Z=0;Z!==2&&!v;Z++)for(let V=0;V!==2&&!v;V++)if(U.set(0,0,0),L?U.vadd(p[0],U):U.vsub(p[0],U),Z?U.vadd(p[1],U):U.vsub(p[1],U),V?U.vadd(p[2],U):U.vsub(p[2],U),i.vadd(U,S),S.vsub(n,S),S.lengthSquared()<g*g){if(d)return!0;v=!0;const k=this.createContactEquation(a,c,t,e,l,h);k.ri.copy(S),k.ri.normalize(),k.ni.copy(k.ri),k.ri.scale(g,k.ri),k.rj.copy(U),k.ri.vadd(n,k.ri),k.ri.vsub(a.position,k.ri),k.rj.vadd(i,k.rj),k.rj.vsub(c.position,k.rj),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}u.release(U),U=null;const E=u.get(),F=u.get(),z=u.get(),B=u.get(),P=u.get(),I=p.length;for(let L=0;L!==I&&!v;L++)for(let Z=0;Z!==I&&!v;Z++)if(L%3!==Z%3){p[Z].cross(p[L],E),E.normalize(),p[L].vadd(p[Z],F),z.copy(n),z.vsub(F,z),z.vsub(i,z);const V=z.dot(E);E.scale(V,B);let k=0;for(;k===L%3||k===Z%3;)k++;P.copy(n),P.vsub(B,P),P.vsub(F,P),P.vsub(i,P);const K=Math.abs(V),Q=P.length();if(K<p[k].length()&&Q<g){if(d)return!0;v=!0;const j=this.createContactEquation(a,c,t,e,l,h);F.vadd(B,j.rj),j.rj.copy(j.rj),P.negate(j.ni),j.ni.normalize(),j.ri.copy(j.rj),j.ri.vadd(i,j.ri),j.ri.vsub(n,j.ri),j.ri.normalize(),j.ri.scale(g,j.ri),j.ri.vadd(n,j.ri),j.ri.vsub(a.position,j.ri),j.rj.vadd(i,j.rj),j.rj.vsub(c.position,j.rj),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult)}}u.release(E,F,z,B,P)}planeBox(t,e,n,i,s,o,a,c,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,o,a,c,t,e,d)}convexConvex(t,e,n,i,s,o,a,c,l,h,d,u,p){const g=Ov;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,o,g,u,p)){const v=[],m=Bv;t.clipAgainstHull(n,s,e,i,o,g,-100,100,v);let f=0;for(let _=0;_!==v.length;_++){if(d)return!0;const x=this.createContactEquation(a,c,t,e,l,h),M=x.ri,R=x.rj;g.negate(x.ni),v[_].normal.negate(m),m.scale(v[_].depth,m),v[_].point.vadd(m,M),R.copy(v[_].point),M.vsub(n,M),R.vsub(i,R),M.vadd(n,M),M.vsub(a.position,M),R.vadd(i,R),R.vsub(c.position,R),this.result.push(x),f++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&f&&this.createFrictionFromAverage(f)}}sphereConvex(t,e,n,i,s,o,a,c,l,h,d){const u=this.v3pool;n.vsub(i,Ev);const p=e.faceNormals,g=e.faces,v=e.vertices,m=t.radius;let f=!1;for(let _=0;_!==v.length;_++){const x=v[_],M=Av;o.vmult(x,M),i.vadd(M,M);const R=Tv;if(M.vsub(n,R),R.lengthSquared()<m*m){if(d)return!0;f=!0;const b=this.createContactEquation(a,c,t,e,l,h);b.ri.copy(R),b.ri.normalize(),b.ni.copy(b.ri),b.ri.scale(m,b.ri),M.vsub(i,b.rj),b.ri.vadd(n,b.ri),b.ri.vsub(a.position,b.ri),b.rj.vadd(i,b.rj),b.rj.vsub(c.position,b.rj),this.result.push(b),this.createFrictionEquationsFromContact(b,this.frictionResult);return}}for(let _=0,x=g.length;_!==x&&f===!1;_++){const M=p[_],R=g[_],b=Cv;o.vmult(M,b);const A=Rv;o.vmult(v[R[0]],A),A.vadd(i,A);const U=Pv;b.scale(-m,U),n.vadd(U,U);const S=Lv;U.vsub(A,S);const E=S.dot(b),F=Iv;if(n.vsub(A,F),E<0&&F.dot(b)>0){const z=[];for(let B=0,P=R.length;B!==P;B++){const I=u.get();o.vmult(v[R[B]],I),i.vadd(I,I),z.push(I)}if(pv(z,b,n)){if(d)return!0;f=!0;const B=this.createContactEquation(a,c,t,e,l,h);b.scale(-m,B.ri),b.negate(B.ni);const P=u.get();b.scale(-E,P);const I=u.get();b.scale(-m,I),n.vsub(i,B.rj),B.rj.vadd(I,B.rj),B.rj.vadd(P,B.rj),B.rj.vadd(i,B.rj),B.rj.vsub(c.position,B.rj),B.ri.vadd(n,B.ri),B.ri.vsub(a.position,B.ri),u.release(P),u.release(I),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult);for(let L=0,Z=z.length;L!==Z;L++)u.release(z[L]);return}else for(let B=0;B!==R.length;B++){const P=u.get(),I=u.get();o.vmult(v[R[(B+1)%R.length]],P),o.vmult(v[R[(B+2)%R.length]],I),i.vadd(P,P),i.vadd(I,I);const L=wv;I.vsub(P,L);const Z=bv;L.unit(Z);const V=u.get(),k=u.get();n.vsub(P,k);const K=k.dot(Z);Z.scale(K,V),V.vadd(P,V);const Q=u.get();if(V.vsub(n,Q),K>0&&K*K<L.lengthSquared()&&Q.lengthSquared()<m*m){if(d)return!0;const j=this.createContactEquation(a,c,t,e,l,h);V.vsub(i,j.rj),V.vsub(n,j.ni),j.ni.normalize(),j.ni.scale(m,j.ri),j.rj.vadd(i,j.rj),j.rj.vsub(c.position,j.rj),j.ri.vadd(n,j.ri),j.ri.vsub(a.position,j.ri),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult);for(let Y=0,tt=z.length;Y!==tt;Y++)u.release(z[Y]);u.release(P),u.release(I),u.release(V),u.release(Q),u.release(k);return}u.release(P),u.release(I),u.release(V),u.release(Q),u.release(k)}for(let B=0,P=z.length;B!==P;B++)u.release(z[B])}}}planeConvex(t,e,n,i,s,o,a,c,l,h,d){const u=Nv,p=Dv;p.set(0,0,1),s.vmult(p,p);let g=0;const v=Uv;for(let m=0;m!==e.vertices.length;m++)if(u.copy(e.vertices[m]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,v),p.dot(v)<=0){if(d)return!0;const _=this.createContactEquation(a,c,t,e,l,h),x=Fv;p.scale(p.dot(v),x),u.vsub(x,x),x.vsub(n,_.ri),_.ni.copy(p),u.vsub(i,_.rj),_.ri.vadd(n,_.ri),_.ri.vsub(a.position,_.ri),_.rj.vadd(i,_.rj),_.rj.vsub(c.position,_.rj),this.result.push(_),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,s,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,d)}sphereHeightfield(t,e,n,i,s,o,a,c,l,h,d){const u=e.data,p=t.radius,g=e.elementSize,v=Kv,m=Zv;Zt.pointToLocalFrame(i,o,n,m);let f=Math.floor((m.x-p)/g)-1,_=Math.ceil((m.x+p)/g)+1,x=Math.floor((m.y-p)/g)-1,M=Math.ceil((m.y+p)/g)+1;if(_<0||M<0||f>u.length||x>u[0].length)return;f<0&&(f=0),_<0&&(_=0),x<0&&(x=0),M<0&&(M=0),f>=u.length&&(f=u.length-1),_>=u.length&&(_=u.length-1),M>=u[0].length&&(M=u[0].length-1),x>=u[0].length&&(x=u[0].length-1);const R=[];e.getRectMinMax(f,x,_,M,R);const b=R[0],A=R[1];if(m.z-p>A||m.z+p<b)return;const U=this.result;for(let S=f;S<_;S++)for(let E=x;E<M;E++){const F=U.length;let z=!1;if(e.getConvexTrianglePillar(S,E,!1),Zt.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(z=this.sphereConvex(t,e.pillarConvex,n,v,s,o,a,c,t,e,d)),d&&z||(e.getConvexTrianglePillar(S,E,!0),Zt.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(z=this.sphereConvex(t,e.pillarConvex,n,v,s,o,a,c,t,e,d)),d&&z))return!0;if(U.length-F>2)return}}boxHeightfield(t,e,n,i,s,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,d)}convexHeightfield(t,e,n,i,s,o,a,c,l,h,d){const u=e.data,p=e.elementSize,g=t.boundingSphereRadius,v=Yv,m=jv,f=Xv;Zt.pointToLocalFrame(i,o,n,f);let _=Math.floor((f.x-g)/p)-1,x=Math.ceil((f.x+g)/p)+1,M=Math.floor((f.y-g)/p)-1,R=Math.ceil((f.y+g)/p)+1;if(x<0||R<0||_>u.length||M>u[0].length)return;_<0&&(_=0),x<0&&(x=0),M<0&&(M=0),R<0&&(R=0),_>=u.length&&(_=u.length-1),x>=u.length&&(x=u.length-1),R>=u[0].length&&(R=u[0].length-1),M>=u[0].length&&(M=u[0].length-1);const b=[];e.getRectMinMax(_,M,x,R,b);const A=b[0],U=b[1];if(!(f.z-g>U||f.z+g<A))for(let S=_;S<x;S++)for(let E=M;E<R;E++){let F=!1;if(e.getConvexTrianglePillar(S,E,!1),Zt.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(F=this.convexConvex(t,e.pillarConvex,n,v,s,o,a,c,null,null,d,m,null)),d&&F||(e.getConvexTrianglePillar(S,E,!0),Zt.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(F=this.convexConvex(t,e.pillarConvex,n,v,s,o,a,c,null,null,d,m,null)),d&&F))return!0}}sphereParticle(t,e,n,i,s,o,a,c,l,h,d){const u=Vv;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;const g=this.createContactEquation(c,a,e,t,l,h);u.normalize(),g.rj.copy(u),g.rj.scale(t.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,s,o,a,c,l,h,d){const u=zv;u.set(0,0,1),a.quaternion.vmult(u,u);const p=Gv;if(i.vsub(a.position,p),u.dot(p)<=0){if(d)return!0;const v=this.createContactEquation(c,a,e,t,l,h);v.ni.copy(u),v.ni.negate(v.ni),v.ri.set(0,0,0);const m=Hv;u.scale(u.dot(i),m),i.vsub(m,m),v.rj.copy(m),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(t,e,n,i,s,o,a,c,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,o,a,c,t,e,d)}convexParticle(t,e,n,i,s,o,a,c,l,h,d){let u=-1;const p=Wv,g=qv;let v=null;const m=kv;if(m.copy(i),m.vsub(n,m),s.conjugate(Tc),Tc.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let f=0,_=t.faces.length;f!==_;f++){const x=[t.worldVertices[t.faces[f][0]]],M=t.worldFaceNormals[f];i.vsub(x[0],Ac);const R=-M.dot(Ac);if(v===null||Math.abs(R)<Math.abs(v)){if(d)return!0;v=R,u=f,p.copy(M)}}if(u!==-1){const f=this.createContactEquation(c,a,e,t,l,h);p.scale(v,g),g.vadd(i,g),g.vsub(n,g),f.rj.copy(g),p.negate(f.ni),f.ri.set(0,0,0);const _=f.ri,x=f.rj;_.vadd(i,_),_.vsub(c.position,_),x.vadd(n,x),x.vsub(a.position,x),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,o,a,c,l,h,d){return this.convexHeightfield(e,t,i,n,o,s,c,a,l,h,d)}particleCylinder(t,e,n,i,s,o,a,c,l,h,d){return this.convexParticle(e,t,i,n,o,s,c,a,l,h,d)}sphereTrimesh(t,e,n,i,s,o,a,c,l,h,d){const u=tv,p=ev,g=nv,v=iv,m=sv,f=rv,_=lv,x=Q0,M=$0,R=hv;Zt.pointToLocalFrame(i,o,n,m);const b=t.radius;_.lowerBound.set(m.x-b,m.y-b,m.z-b),_.upperBound.set(m.x+b,m.y+b,m.z+b),e.getTrianglesInAABB(_,R);const A=J0,U=t.radius*t.radius;for(let B=0;B<R.length;B++)for(let P=0;P<3;P++)if(e.getVertex(e.indices[R[B]*3+P],A),A.vsub(m,M),M.lengthSquared()<=U){if(x.copy(A),Zt.pointToWorldFrame(i,o,x,A),A.vsub(n,M),d)return!0;let I=this.createContactEquation(a,c,t,e,l,h);I.ni.copy(M),I.ni.normalize(),I.ri.copy(I.ni),I.ri.scale(t.radius,I.ri),I.ri.vadd(n,I.ri),I.ri.vsub(a.position,I.ri),I.rj.copy(A),I.rj.vsub(c.position,I.rj),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}for(let B=0;B<R.length;B++)for(let P=0;P<3;P++){e.getVertex(e.indices[R[B]*3+P],u),e.getVertex(e.indices[R[B]*3+(P+1)%3],p),p.vsub(u,g),m.vsub(p,f);const I=f.dot(g);m.vsub(u,f);let L=f.dot(g);if(L>0&&I<0&&(m.vsub(u,f),v.copy(g),v.normalize(),L=f.dot(v),v.scale(L,f),f.vadd(u,f),f.distanceTo(m)<t.radius)){if(d)return!0;const V=this.createContactEquation(a,c,t,e,l,h);f.vsub(m,V.ni),V.ni.normalize(),V.ni.scale(t.radius,V.ri),V.ri.vadd(n,V.ri),V.ri.vsub(a.position,V.ri),Zt.pointToWorldFrame(i,o,f,f),f.vsub(c.position,V.rj),Zt.vectorToWorldFrame(o,V.ni,V.ni),Zt.vectorToWorldFrame(o,V.ri,V.ri),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}}const S=ov,E=av,F=cv,z=K0;for(let B=0,P=R.length;B!==P;B++){e.getTriangleVertices(R[B],S,E,F),e.getNormal(R[B],z),m.vsub(S,f);let I=f.dot(z);if(z.scale(I,f),m.vsub(f,f),I=f.distanceTo(m),ce.pointInTriangle(f,S,E,F)&&I<t.radius){if(d)return!0;let L=this.createContactEquation(a,c,t,e,l,h);f.vsub(m,L.ni),L.ni.normalize(),L.ni.scale(t.radius,L.ri),L.ri.vadd(n,L.ri),L.ri.vsub(a.position,L.ri),Zt.pointToWorldFrame(i,o,f,f),f.vsub(c.position,L.rj),Zt.vectorToWorldFrame(o,L.ni,L.ni),Zt.vectorToWorldFrame(o,L.ri,L.ri),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult)}}R.length=0}planeTrimesh(t,e,n,i,s,o,a,c,l,h,d){const u=new y,p=Y0;p.set(0,0,1),s.vmult(p,p);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,u);const v=new y;v.copy(u),Zt.pointToWorldFrame(i,o,v,u);const m=j0;if(u.vsub(n,m),p.dot(m)<=0){if(d)return!0;const _=this.createContactEquation(a,c,t,e,l,h);_.ni.copy(p);const x=Z0;p.scale(m.dot(p),x),u.vsub(x,x),_.ri.copy(x),_.ri.vsub(a.position,_.ri),_.rj.copy(u),_.rj.vsub(c.position,_.rj),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}}}const kn=new y,xi=new y,yi=new y,k0=new y,W0=new y,q0=new fe,X0=new fe,Y0=new y,j0=new y,Z0=new y,K0=new y,$0=new y;new y;const J0=new y,Q0=new y,tv=new y,ev=new y,nv=new y,iv=new y,sv=new y,rv=new y,ov=new y,av=new y,cv=new y,lv=new He,hv=[],Bs=new y,bc=new y,uv=new y,dv=new y,fv=new y;function pv(r,t,e){let n=null;const i=r.length;for(let s=0;s!==i;s++){const o=r[s],a=uv;r[(s+1)%i].vsub(o,a);const c=dv;a.cross(t,c);const l=fv;e.vsub(o,l);const h=c.dot(l);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const zs=new y,mv=new y,gv=new y,vv=new y,_v=[new y,new y,new y,new y,new y,new y],xv=new y,yv=new y,Mv=new y,Sv=new y,Ev=new y,wv=new y,bv=new y,Tv=new y,Av=new y,Cv=new y,Rv=new y,Pv=new y,Lv=new y,Iv=new y;new y;new y;const Nv=new y,Dv=new y,Uv=new y,Fv=new y,Ov=new y,Bv=new y,zv=new y,Gv=new y,Hv=new y,Vv=new y,Tc=new fe,kv=new y;new y;const Wv=new y,Ac=new y,qv=new y,Xv=new y,Yv=new y,jv=[0],Zv=new y,Kv=new y;class Cc{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,o=i.length;let a=0;for(let c=0;c<s;c++){let l=!1;const h=n[c];for(;h>i[a];)a++;l=h===i[a],l||Rc(t,h)}a=0;for(let c=0;c<o;c++){let l=!1;const h=i[c];for(;h>n[a];)a++;l=n[a]===h,l||Rc(e,h)}}}function Rc(r,t){r.push((t&4294901760)>>16,t&65535)}const Zr=(r,t)=>r<t?`${r}-${t}`:`${t}-${r}`;class $v{constructor(){this.data={keys:[]}}get(t,e){const n=Zr(t,e);return this.data[n]}set(t,e,n){const i=Zr(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=Zr(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}let Jv=class extends Sl{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new y,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new y,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new t0,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new F0,this.constraints=[],this.narrowphase=new V0(this),this.collisionMatrix=new dc,this.collisionMatrixPrevious=new dc,this.bodyOverlapKeeper=new Cc,this.shapeOverlapKeeper=new Cc,this.contactmaterials=[],this.contactMaterialTable=new $v,this.defaultMaterial=new rr("default"),this.defaultContactMaterial=new sr(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof js?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=ce.ALL,n.from=t,n.to=e,n.callback=i,Kr.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=ce.ANY,n.from=t,n.to=e,n.result=i,Kr.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=ce.CLOSEST,n.from=t,n.to=e,n.result=i,Kr.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof ot&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=pe.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=pe.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(pe.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const c=this.bodies[a];c.previousPosition.lerp(c.position,o,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,o,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=i_,i=s_,s=this.bodies.length,o=this.bodies,a=this.solver,c=this.gravity,l=this.doProfiling,h=this.profile,d=ot.DYNAMIC;let u=-1/0;const p=this.constraints,g=n_;c.length();const v=c.x,m=c.y,f=c.z;let _=0;for(l&&(u=pe.now()),_=0;_!==s;_++){const B=o[_];if(B.type===d){const P=B.force,I=B.mass;P.x+=I*v,P.y+=I*m,P.z+=I*f}}for(let B=0,P=this.subsystems.length;B!==P;B++)this.subsystems[B].update();l&&(u=pe.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),l&&(h.broadphase=pe.now()-u);let x=p.length;for(_=0;_!==x;_++){const B=p[_];if(!B.collideConnected)for(let P=n.length-1;P>=0;P-=1)(B.bodyA===n[P]&&B.bodyB===i[P]||B.bodyB===n[P]&&B.bodyA===i[P])&&(n.splice(P,1),i.splice(P,1))}this.collisionMatrixTick(),l&&(u=pe.now());const M=e_,R=e.length;for(_=0;_!==R;_++)M.push(e[_]);e.length=0;const b=this.frictionEquations.length;for(_=0;_!==b;_++)g.push(this.frictionEquations[_]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,M,this.frictionEquations,g),l&&(h.narrowphase=pe.now()-u),l&&(u=pe.now()),_=0;_<this.frictionEquations.length;_++)a.addEquation(this.frictionEquations[_]);const A=e.length;for(let B=0;B!==A;B++){const P=e[B],I=P.bi,L=P.bj,Z=P.si,V=P.sj;let k;if(I.material&&L.material?k=this.getContactMaterial(I.material,L.material)||this.defaultContactMaterial:k=this.defaultContactMaterial,k.friction,I.material&&L.material&&(I.material.friction>=0&&L.material.friction>=0&&I.material.friction*L.material.friction,I.material.restitution>=0&&L.material.restitution>=0&&(P.restitution=I.material.restitution*L.material.restitution)),a.addEquation(P),I.allowSleep&&I.type===ot.DYNAMIC&&I.sleepState===ot.SLEEPING&&L.sleepState===ot.AWAKE&&L.type!==ot.STATIC){const K=L.velocity.lengthSquared()+L.angularVelocity.lengthSquared(),Q=L.sleepSpeedLimit**2;K>=Q*2&&(I.wakeUpAfterNarrowphase=!0)}if(L.allowSleep&&L.type===ot.DYNAMIC&&L.sleepState===ot.SLEEPING&&I.sleepState===ot.AWAKE&&I.type!==ot.STATIC){const K=I.velocity.lengthSquared()+I.angularVelocity.lengthSquared(),Q=I.sleepSpeedLimit**2;K>=Q*2&&(L.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(I,L,!0),this.collisionMatrixPrevious.get(I,L)||(ki.body=L,ki.contact=P,I.dispatchEvent(ki),ki.body=I,L.dispatchEvent(ki)),this.bodyOverlapKeeper.set(I.id,L.id),this.shapeOverlapKeeper.set(Z.id,V.id)}for(this.emitContactEvents(),l&&(h.makeContactConstraints=pe.now()-u,u=pe.now()),_=0;_!==s;_++){const B=o[_];B.wakeUpAfterNarrowphase&&(B.wakeUp(),B.wakeUpAfterNarrowphase=!1)}for(x=p.length,_=0;_!==x;_++){const B=p[_];B.update();for(let P=0,I=B.equations.length;P!==I;P++){const L=B.equations[P];a.addEquation(L)}}a.solve(t,this),l&&(h.solve=pe.now()-u),a.removeAllEquations();const U=Math.pow;for(_=0;_!==s;_++){const B=o[_];if(B.type&d){const P=U(1-B.linearDamping,t),I=B.velocity;I.scale(P,I);const L=B.angularVelocity;if(L){const Z=U(1-B.angularDamping,t);L.scale(Z,L)}}}this.dispatchEvent(t_),l&&(u=pe.now());const E=this.stepnumber%(this.quatNormalizeSkip+1)===0,F=this.quatNormalizeFast;for(_=0;_!==s;_++)o[_].integrate(t,E,F);this.clearForces(),this.broadphase.dirty=!0,l&&(h.integrate=pe.now()-u),this.stepnumber+=1,this.dispatchEvent(Qv);let z=!0;if(this.allowSleep)for(z=!1,_=0;_!==s;_++){const B=o[_];B.sleepTick(this.time),B.sleepState!==ot.SLEEPING&&(z=!0)}this.hasActiveBodies=z}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(vn,_n),t){for(let s=0,o=vn.length;s<o;s+=2)Wi.bodyA=this.getBodyById(vn[s]),Wi.bodyB=this.getBodyById(vn[s+1]),this.dispatchEvent(Wi);Wi.bodyA=Wi.bodyB=null}if(e){for(let s=0,o=_n.length;s<o;s+=2)qi.bodyA=this.getBodyById(_n[s]),qi.bodyB=this.getBodyById(_n[s+1]),this.dispatchEvent(qi);qi.bodyA=qi.bodyB=null}vn.length=_n.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(vn,_n),n){for(let s=0,o=vn.length;s<o;s+=2){const a=this.getShapeById(vn[s]),c=this.getShapeById(vn[s+1]);xn.shapeA=a,xn.shapeB=c,a&&(xn.bodyA=a.body),c&&(xn.bodyB=c.body),this.dispatchEvent(xn)}xn.bodyA=xn.bodyB=xn.shapeA=xn.shapeB=null}if(i){for(let s=0,o=_n.length;s<o;s+=2){const a=this.getShapeById(_n[s]),c=this.getShapeById(_n[s+1]);yn.shapeA=a,yn.shapeB=c,a&&(yn.bodyA=a.body),c&&(yn.bodyB=c.body),this.dispatchEvent(yn)}yn.bodyA=yn.bodyB=yn.shapeA=yn.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}};new He;const Kr=new ce,pe=globalThis.performance||{};if(!pe.now){let r=Date.now();pe.timing&&pe.timing.navigationStart&&(r=pe.timing.navigationStart),pe.now=()=>Date.now()-r}new y;const Qv={type:"postStep"},t_={type:"preStep"},ki={type:ot.COLLIDE_EVENT_NAME,body:null,contact:null},e_=[],n_=[],i_=[],s_=[],vn=[],_n=[],Wi={type:"beginContact",bodyA:null,bodyB:null},qi={type:"endContact",bodyA:null,bodyB:null},xn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},yn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class r_{constructor(t,e){this.scene=t,this.physicsWorld=e,this.meshes=[],this.bodies=[],this.createGround(),this.createPlayground(),this.createSlides(),this.createSwings(),this.createSeesaw(),this.createSandbox(),this.createFountain(),this.createTrees(),this.createBushes(),this.createDecorations(),this.createRamps(),this.createWalls()}createGround(){const t=new Qi(100,100,32,32),e=new Kt({color:5025616,roughness:.8,metalness:.1}),n=new Wt(t,e);n.rotation.x=-Math.PI/2,n.receiveShadow=!0,this.scene.add(n);const i=new ot({mass:0,shape:new D0,position:new y(0,0,0)});i.quaternion.setFromAxisAngle(new y(1,0,0),-Math.PI/2),this.physicsWorld.addBody(i);const s=new Qi(8,60),o=new Kt({color:14142664}),a=new Wt(s,o);a.rotation.x=-Math.PI/2,a.position.y=.01,a.receiveShadow=!0,this.scene.add(a)}createPlayground(){const t=new Le(6,1,6),e=new Kt({color:16750592}),n=new Wt(t,e);n.position.set(15,.5,0),n.castShadow=!0,n.receiveShadow=!0,this.scene.add(n);const i=new ot({mass:0,shape:new We(new y(3,.5,3)),position:new y(15,.5,0)});this.physicsWorld.addBody(i);const s=new Le(3,.2,10),o=new Kt({color:2201331}),a=new Wt(s,o);a.position.set(15,3,8),a.rotation.x=-Math.PI/6,a.castShadow=!0,this.scene.add(a);const c=new ot({mass:0,shape:new We(new y(1.5,.1,5)),position:new y(15,3,8)});c.quaternion.setFromAxisAngle(new y(1,0,0),-Math.PI/6),this.physicsWorld.addBody(c);for(let l=0;l<5;l++){const h=new Le(2,.3,.5),d=new Wt(h,e);d.position.set(15,.3+l*.5,-2+l*.8),d.castShadow=!0,this.scene.add(d);const u=new ot({mass:0,shape:new We(new y(1,.15,.25)),position:new y(15,.3+l*.5,-2+l*.8)});this.physicsWorld.addBody(u)}}createSlides(){const t=new Xi,e=new Kt({color:15277667});for(let a=0;a<8;a++){const c=new Wt(new Le(2.5,.15,2),e);c.position.y=-a*.6,c.rotation.y=Math.PI/4*a,c.position.x=Math.sin(Math.PI/4*a)*2,c.position.z=Math.cos(Math.PI/4*a)*2,c.castShadow=!0,t.add(c)}t.position.set(-15,5,0),this.scene.add(t);const n=new Te(.3,.3,10,16),i=new Kt({color:7951688}),s=new Wt(n,i);s.position.set(-15,0,0),s.castShadow=!0,this.scene.add(s);const o=new ot({mass:0,shape:new _i(.3,.3,10,16),position:new y(-15,0,0)});this.physicsWorld.addBody(o)}createSwings(){const t=new Kt({color:16733986}),e=new Wt(new Te(.15,.15,5),t);e.position.set(-8,2.5,15),e.rotation.z=Math.PI/8,e.castShadow=!0,this.scene.add(e);const n=new Wt(new Te(.15,.15,5),t);n.position.set(-4,2.5,15),n.rotation.z=-Math.PI/8,n.castShadow=!0,this.scene.add(n);const i=new Wt(new Te(.1,.1,5),t);i.position.set(-6,5,15),i.rotation.z=Math.PI/2,i.castShadow=!0,this.scene.add(i);const s=new Le(1.5,.2,.8),o=new Kt({color:5025616}),a=new Wt(s,o);a.position.set(-6,2.5,15),a.castShadow=!0,this.scene.add(a);const c=new Kt({color:10395294}),l=new Wt(new Te(.03,.03,2.5),c);l.position.set(-6.5,3.75,15),this.scene.add(l);const h=new Wt(new Te(.03,.03,2.5),c);h.position.set(-5.5,3.75,15),this.scene.add(h);const d=new ot({mass:1,shape:new We(new y(.75,.1,.4)),position:new y(-6,2.5,15)});this.physicsWorld.addBody(d);const u=new Ec(d,new ot({mass:0}),{pivotA:new y(0,1.5,0),axisA:new y(1,0,0),pivotB:new y(-6,5,15),axisB:new y(1,0,0)});this.physicsWorld.addConstraint(u)}createSeesaw(){const t=new Le(5,.3,1.5),e=new Kt({color:16771899}),n=new Wt(t,e);n.position.set(0,1.5,20),n.castShadow=!0,this.scene.add(n);const i=new ot({mass:2,shape:new We(new y(2.5,.15,.75)),position:new y(0,1.5,20)});this.physicsWorld.addBody(i);const s=new ts(1,1.5,4),o=new Kt({color:10233776}),a=new Wt(s,o);a.position.set(0,.75,20),a.rotation.y=Math.PI/4,a.castShadow=!0,this.scene.add(a);const c=new ot({mass:0,shape:new _i(.5,1,1.5,4),position:new y(0,.75,20)});this.physicsWorld.addBody(c);const l=new Ec(i,c,{pivotA:new y(0,0,0),axisA:new y(1,0,0),pivotB:new y(0,.75,0),axisB:new y(1,0,0)});this.physicsWorld.addConstraint(l)}createSandbox(){const t=new Le(10,.5,10),e=new Kt({color:16113331}),n=new Wt(t,e);n.position.set(25,.25,0),n.receiveShadow=!0,this.scene.add(n);const i=new ot({mass:0,shape:new We(new y(5,.25,5)),position:new y(25,.25,0)});this.physicsWorld.addBody(i);const s=new Kt({color:9268835});[[20,1,-5],[30,1,-5],[20,1,5],[30,1,5]].forEach(([a,c,l])=>{const h=new Wt(new Te(.2,.2,1),s);h.position.set(a,c,l),h.castShadow=!0,this.scene.add(h);const d=new ot({mass:0,shape:new _i(.2,.2,1,8),position:new y(a,c,l)});this.physicsWorld.addBody(d)})}createFountain(){const t=new Te(4,4.5,1,32),e=new Kt({color:6323595}),n=new Wt(t,e);n.position.set(0,.5,0),n.castShadow=!0,this.scene.add(n);const i=new ot({mass:0,shape:new _i(4,4.5,1,32),position:new y(0,.5,0)});this.physicsWorld.addBody(i);const s=new Te(3.5,3.5,.3,32),o=new Kt({color:240116,transparent:!0,opacity:.7}),a=new Wt(s,o);a.position.set(0,1.15,0),this.scene.add(a);const c=new Wt(new Te(.3,.3,3),new Kt({color:10395294}));c.position.set(0,2.5,0),c.castShadow=!0,this.scene.add(c)}createTrees(){[[-25,0,-25],[25,0,-25],[-25,0,25],[25,0,25],[-35,0,0],[35,0,0],[0,0,-35],[0,0,35]].forEach(([e,n,i])=>{this.createTree(e,n,i)})}createTree(t,e,n){const i=new Te(.3,.5,3,8),s=new Kt({color:7951688}),o=new Wt(i,s);o.position.set(t,e+1.5,n),o.castShadow=!0,this.scene.add(o);const a=new ot({mass:0,shape:new _i(.3,.5,3,8),position:new y(t,e+1.5,n)});this.physicsWorld.addBody(a);const c=[3046706,3706428,4431943];for(let l=0;l<3;l++){const h=new ts(2-l*.5,2,8),d=new Kt({color:c[l]}),u=new Wt(h,d);u.position.set(t,e+4+l*1.2,n),u.castShadow=!0,this.scene.add(u)}}createBushes(){[[-20,0,-10],[20,0,-10],[-20,0,10],[20,0,10],[-30,0,-20],[30,0,-20],[-30,0,20],[30,0,20]].forEach(([e,n,i])=>{const s=new er(1,8,8),o=new Kt({color:6732650}),a=new Wt(s,o);a.position.set(e,n+.8,i),a.scale.y=.7,a.castShadow=!0,this.scene.add(a)})}createDecorations(){const t=[16733986,2201331,16771899,10233776,5025616];[[-10,.5,-15],[10,.5,-15],[-10,.5,15],[10,.5,15],[-15,.5,-5],[15,.5,-5],[-15,.5,5],[15,.5,5]].forEach(([n,i,s],o)=>{const a=new Le(1.5,1.5,1.5),c=new Kt({color:t[o%t.length]}),l=new Wt(a,c);l.position.set(n,i,s),l.castShadow=!0,this.scene.add(l);const h=new ot({mass:0,shape:new We(new y(.75,.75,.75)),position:new y(n,i,s)});this.physicsWorld.addBody(h)});for(let n=0;n<12;n++){const i=n/12*Math.PI*2,s=Math.cos(i)*40,o=Math.sin(i)*40,a=new Te(.3,.3,2,8),c=new Kt({color:16750592}),l=new Wt(a,c);l.position.set(s,1,o),l.castShadow=!0,this.scene.add(l);const h=new ot({mass:0,shape:new _i(.3,.3,2,8),position:new y(s,1,o)});this.physicsWorld.addBody(h)}}createRamps(){[{pos:[-20,0,-20],rot:.2},{pos:[20,0,-20],rot:-.2},{pos:[-20,0,20],rot:.3},{pos:[20,0,20],rot:-.3}].forEach(({pos:e,rot:n})=>{const i=new Le(4,.3,8),s=new Kt({color:16761095}),o=new Wt(i,s);o.position.set(e[0],e[1]+2,e[2]),o.rotation.x=n,o.castShadow=!0,this.scene.add(o);const a=new ot({mass:0,shape:new We(new y(2,.15,4)),position:new y(e[0],e[1]+2,e[2])});a.quaternion.setFromAxisAngle(new y(1,0,0),n),this.physicsWorld.addBody(a)})}createWalls(){const t=new Kt({color:10395294,transparent:!0,opacity:.3}),e=1.5,n=50;[{pos:[0,e/2,-n],size:[n*2,e,.5]},{pos:[0,e/2,n],size:[n*2,e,.5]},{pos:[-n,e/2,0],size:[.5,e,n*2]},{pos:[n,e/2,0],size:[.5,e,n*2]}].forEach(({pos:s,size:o})=>{const a=new Le(...o),c=new Wt(a,t);c.position.set(...s),c.receiveShadow=!0,this.scene.add(c);const l=new ot({mass:0,shape:new We(new y(o[0]/2,o[1]/2,o[2]/2)),position:new y(...s)});this.physicsWorld.addBody(l)})}}class o_{constructor(t,e,n){this.scene=t,this.physicsWorld=e,this.camera=n,this.position=new O(0,2,0),this.velocity=new O(0,0,0),this.rotation=0,this.speed=0,this.maxSpeed=15,this.acceleration=40,this.friction=.92,this.isGrounded=!1,this.canJump=!0,this.jumpForce=8,this.boostMultiplier=1,this.shieldActive=!1,this.jumpBoostActive=!1,this.keys={w:!1,a:!1,s:!1,d:!1,space:!1,shift:!1},this.mouseX=0,this.cameraAngle=0,this.initMesh(),this.initBody()}initMesh(){const t=new er(.8,32,32),e=new Kt({color:16729156,roughness:.3,metalness:.1});this.mesh=new Wt(t,e),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.scene.add(this.mesh);const n=new nr(.8,.05,8,32),i=new Kt({color:16777215});for(let s=0;s<3;s++){const o=new Wt(n,i);o.rotation.x=Math.PI/3*s,o.castShadow=!0,this.mesh.add(o)}}initBody(){this.body=new ot({mass:5,shape:new Il(.8),position:new y(0,2,0),linearDamping:.3,angularDamping:.5}),this.body.allowSleep=!1,this.physicsWorld.addBody(this.body)}update(t){const e=new y(0,0,0),n=new O(0,0,0);if(this.keys.w&&(n.z-=1),this.keys.s&&(n.z+=1),this.keys.a&&(n.x-=1),this.keys.d&&(n.x+=1),n.length()>0){n.normalize();const s=this.cameraAngle,o=n.x*Math.cos(s)-n.z*Math.sin(s),a=n.x*Math.sin(s)+n.z*Math.cos(s),c=this.acceleration*this.boostMultiplier;e.x=o*c,e.z=a*c,this.speed=Math.min(this.speed+c*t,this.maxSpeed*this.boostMultiplier)}else this.speed*=this.friction;this.body.applyForce(e,this.body.position),this.keys.space&&this.isGrounded&&this.canJump&&(this.body.velocity.y=this.jumpForce*(this.jumpBoostActive?1.5:1),this.isGrounded=!1,this.canJump=!1,setTimeout(()=>this.canJump=!0,200));const i=new y(this.body.velocity.x,0,this.body.velocity.z);if(i.length()>this.maxSpeed*this.boostMultiplier&&(i=i.scale(this.maxSpeed*this.boostMultiplier/i.length()),this.body.velocity.x=i.x,this.body.velocity.z=i.z),this.mesh.position.copy(this.body.position),i.length()>.1){const s=new O(-i.z,0,i.x).normalize(),o=i.length()*t;this.mesh.rotateOnWorldAxis(s,o)}this.updateCamera(),this.checkGrounded(),this.body.position.y<-10&&this.reset()}updateCamera(){const t=new O(Math.sin(this.cameraAngle)*12,8,Math.cos(this.cameraAngle)*12),e=this.mesh.position.clone().add(t);this.camera.position.lerp(e,.05);const n=this.mesh.position.clone();n.y+=1,this.camera.lookAt(n)}checkGrounded(){const t=this.body.position,e=new y(this.body.position.x,this.body.position.y-1.2,this.body.position.z),n=new ce(t,e);n.skipBackfaces=!0;const i=n.intersectWorld(this.physicsWorld,{mode:ce.CLOSEST,skipBackfaces:!0});this.isGrounded=i.hasHit}handleKeyDown(t){const e=t.key.toLowerCase();(e==="w"||e==="arrowup")&&(this.keys.w=!0),(e==="s"||e==="arrowdown")&&(this.keys.s=!0),(e==="a"||e==="arrowleft")&&(this.keys.a=!0),(e==="d"||e==="arrowright")&&(this.keys.d=!0),e===" "&&(this.keys.space=!0),e==="shift"&&(this.keys.shift=!0)}handleKeyUp(t){const e=t.key.toLowerCase();(e==="w"||e==="arrowup")&&(this.keys.w=!1),(e==="s"||e==="arrowdown")&&(this.keys.s=!1),(e==="a"||e==="arrowleft")&&(this.keys.a=!1),(e==="d"||e==="arrowright")&&(this.keys.d=!1),e===" "&&(this.keys.space=!1),e==="shift"&&(this.keys.shift=!1)}handleMouseMove(t){this.cameraAngle+=t.movementX*.005}handleTouchStart(t){}handleTouchMove(t){}handleTouchEnd(t){}getPosition(){return this.mesh.position}getSpeed(){return this.speed}reset(){this.body.position.set(0,2,0),this.body.velocity.set(0,0,0),this.body.angularVelocity.set(0,0,0),this.mesh.position.set(0,2,0),this.speed=0,this.boostMultiplier=1,this.shieldActive=!1,this.jumpBoostActive=!1}activateBoost(){this.boostMultiplier=1.8,setTimeout(()=>this.boostMultiplier=1,5e3)}activateShield(){this.shieldActive=!0,this.mesh.material.emissive=new Yt(65535),this.mesh.material.emissiveIntensity=.5}activateJumpBoost(){this.jumpBoostActive=!0,setTimeout(()=>this.jumpBoostActive=!1,5e3)}deactivateShield(){this.shieldActive=!1,this.mesh.material.emissive=new Yt(0),this.mesh.material.emissiveIntensity=0}}class a_{constructor(t,e){this.scene=t,this.physicsWorld=e,this.objects=[],this.spawnPositions=[],this.initSpawnPositions(),this.createObjects()}initSpawnPositions(){for(let t=0;t<50;t++){const e=Math.random()*Math.PI*2,n=5+Math.random()*35;this.spawnPositions.push({x:Math.cos(e)*n,z:Math.sin(e)*n})}}createObjects(){this.spawnPositions.forEach((t,e)=>{const n=this.getRandomType();this.createObject(t.x,1.5,t.z,n,e)})}getRandomType(){const t=Math.random();return t<.5?"coin":t<.7?"star":t<.85?"speed":t<.95?"shield":"jump"}createObject(t,e,n,i,s){let o,a,c;switch(i){case"coin":o=new Te(.3,.3,.1,16),a=new Kt({color:16766720,metalness:.8,roughness:.2,emissive:16752640,emissiveIntensity:.3});break;case"star":o=this.createStarGeometry(),a=new Kt({color:16771899,metalness:.5,roughness:.3,emissive:16761095,emissiveIntensity:.5});break;case"speed":o=new ts(.3,.6,4),a=new Kt({color:65535,metalness:.5,roughness:.3,emissive:48340,emissiveIntensity:.5});break;case"shield":o=new Eo(.4),a=new Kt({color:2201331,metalness:.5,roughness:.3,emissive:1668818,emissiveIntensity:.5});break;case"jump":o=new nr(.3,.1,8,16),a=new Kt({color:10233776,metalness:.5,roughness:.3,emissive:8069026,emissiveIntensity:.5});break}const l=new Wt(o,a);l.position.set(t,e,n),l.castShadow=!0,l.userData={type:i,id:s,collected:!1},this.scene.add(l),c=new ot({mass:0,shape:new Il(.4),position:new y(t,e,n),isTrigger:!0}),c.userData={type:i,id:s},this.physicsWorld.addBody(c),this.objects.push({mesh:l,body:c,type:i,id:s})}createStarGeometry(){const t=new _l,e=.4,n=.2,i=5;for(let o=0;o<i*2;o++){const a=o%2===0?e:n,c=o/(i*2)*Math.PI*2-Math.PI/2,l=Math.cos(c)*a,h=Math.sin(c)*a;o===0?t.moveTo(l,h):t.lineTo(l,h)}t.closePath();const s={depth:.1,bevelEnabled:!1};return new So(t,s)}update(t,e){this.objects.forEach(n=>{if(n.collected)return;n.mesh.rotation.y+=t*2,n.mesh.position.y=1.5+Math.sin(Date.now()*.003+n.id)*.2,e.distanceTo(n.mesh.position)<1.5&&this.collect(n)})}collect(t){t.collected||(t.collected=!0,this.scene.remove(t.mesh),this.physicsWorld.removeBody(t.body),this.onCollect&&this.onCollect(t.type))}reset(){this.objects.forEach(t=>{this.scene.remove(t.mesh),this.physicsWorld.removeBody(t.body)}),this.objects=[],this.createObjects()}getCollectedCount(){return this.objects.filter(t=>t.collected).length}getTotalCount(){return this.objects.length}}class c_{constructor(t){this.game=t,this.init()}init(){this.hud=document.createElement("div"),this.hud.id="hud",this.hud.innerHTML=`
      <div class="hud-top">
        <div class="hud-item">
          <span class="hud-label">SCORE</span>
          <span class="hud-value" id="score">0</span>
        </div>
        <div class="hud-item">
          <span class="hud-label">TIME</span>
          <span class="hud-value" id="time">120</span>
        </div>
        <div class="hud-item">
          <span class="hud-label">SPEED</span>
          <span class="hud-value" id="speed">0</span>
        </div>
        <div class="hud-item">
          <span class="hud-label">BEST</span>
          <span class="hud-value" id="best">0</span>
        </div>
      </div>
    `,document.body.appendChild(this.hud),this.menu=document.createElement("div"),this.menu.id="menu",this.menu.innerHTML=`
      <div class="menu-content">
        <h1 class="game-title">BALL PLAYGROUND</h1>
        <p class="game-subtitle">3D Arcade Game</p>
        <button class="btn btn-primary" id="playBtn">PLAY</button>
        <div class="best-score-display">BEST SCORE: <span id="menuBest">0</span></div>
        <div class="controls-info">
          <p><strong>Controls:</strong></p>
          <p>WASD / Arrows - Move</p>
          <p>Space - Jump</p>
          <p>Shift - Boost</p>
          <p>Mouse - Camera</p>
        </div>
      </div>
    `,document.body.appendChild(this.menu),this.gameOver=document.createElement("div"),this.gameOver.id="gameover",this.gameOver.style.display="none",this.gameOver.innerHTML=`
      <div class="gameover-content">
        <h1 class="gameover-title">GAME OVER</h1>
        <div class="final-stats">
          <div class="stat-row">
            <span class="stat-label">SCORE:</span>
            <span class="stat-value" id="finalScore">0</span>
          </div>
          <div class="stat-row">
            <span class="stat-label">BEST:</span>
            <span class="stat-value" id="finalBest">0</span>
          </div>
          <div class="stat-row">
            <span class="stat-label">COLLECTED:</span>
            <span class="stat-value" id="finalCollected">0</span>
          </div>
        </div>
        <div class="new-record" id="newRecord">NEW RECORD!</div>
        <button class="btn btn-primary" id="restartBtn">PLAY AGAIN</button>
      </div>
    `,document.body.appendChild(this.gameOver),this.countdown=document.createElement("div"),this.countdown.id="countdown",this.countdown.style.display="none",document.body.appendChild(this.countdown),this.createMobileControls(),document.getElementById("playBtn").addEventListener("click",()=>this.game.startGame()),document.getElementById("restartBtn").addEventListener("click",()=>this.game.startGame()),document.getElementById("menuBest").textContent=this.game.getBestScore()}createMobileControls(){this.mobileControls=document.createElement("div"),this.mobileControls.id="mobile-controls",this.mobileControls.innerHTML=`
      <div class="joystick-zone" id="joystickZone">
        <div class="joystick-base" id="joystickBase">
          <div class="joystick-stick" id="joystickStick"></div>
        </div>
      </div>
      <div class="action-buttons">
        <button class="btn btn-jump" id="jumpBtn">JUMP</button>
        <button class="btn btn-boost" id="boostBtn">BOOST</button>
      </div>
    `,document.body.appendChild(this.mobileControls);const t=document.getElementById("joystickBase"),e=document.getElementById("joystickStick"),n=document.getElementById("joystickZone");let i=!1;n.addEventListener("touchstart",s=>{s.preventDefault();const o=s.touches[0],a=t.getBoundingClientRect();a.left+a.width/2,a.top+a.height/2,i=!0,this.updateJoystick(o.clientX,o.clientY)}),n.addEventListener("touchmove",s=>{if(s.preventDefault(),!i)return;const o=s.touches[0];this.updateJoystick(o.clientX,o.clientY)}),n.addEventListener("touchend",()=>{i=!1,e.style.transform="translate(0, 0)",this.game.player.keys.w=!1,this.game.player.keys.a=!1,this.game.player.keys.s=!1,this.game.player.keys.d=!1}),document.getElementById("jumpBtn").addEventListener("touchstart",s=>{s.preventDefault(),this.game.player.keys.space=!0}),document.getElementById("jumpBtn").addEventListener("touchend",s=>{s.preventDefault(),this.game.player.keys.space=!1}),document.getElementById("boostBtn").addEventListener("touchstart",s=>{s.preventDefault(),this.game.player.keys.shift=!0}),document.getElementById("boostBtn").addEventListener("touchend",s=>{s.preventDefault(),this.game.player.keys.shift=!1})}updateJoystick(t,e){let i=t-joystickCenter.x,s=e-joystickCenter.y;const o=Math.sqrt(i*i+s*s);o>40&&(i=i/o*40,s=s/o*40);const a=document.getElementById("joystickStick");a.style.transform=`translate(${i}px, ${s}px)`;const c=15;this.game.player.keys.w=s<-c,this.game.player.keys.s=s>c,this.game.player.keys.a=i<-c,this.game.player.keys.d=i>c}update(){this.game.getState()==="playing"&&(document.getElementById("score").textContent=this.game.getScore(),document.getElementById("time").textContent=Math.ceil(this.game.getTimeLeft()),document.getElementById("speed").textContent=Math.round(this.game.player.getSpeed()),document.getElementById("best").textContent=this.game.getBestScore())}showCountdown(){this.menu.style.display="none",this.hud.style.display="block",this.countdown.style.display="flex";let t=3;const e=setInterval(()=>{t>1?(this.countdown.textContent=t-1,this.countdown.style.animation="none",this.countdown.offsetWidth,this.countdown.style.animation="countdownPop 1s ease-out",t--):(clearInterval(e),this.countdown.textContent="GO!",this.countdown.style.color="#00ff00",setTimeout(()=>{this.countdown.style.display="none",this.game.gameState="playing"},500))},1e3)}showGameOver(){this.gameOver.style.display="flex",document.getElementById("finalScore").textContent=this.game.getScore(),document.getElementById("finalBest").textContent=this.game.getBestScore(),document.getElementById("finalCollected").textContent=`${this.game.collectibles.getCollectedCount()}/${this.game.collectibles.getTotalCount()}`}showNewRecord(){document.getElementById("newRecord").style.display="block"}hideAll(){this.menu.style.display="none",this.gameOver.style.display="none",this.countdown.style.display="none"}}class l_{constructor(){this.ctx=null,this.initialized=!1}init(){this.initialized||(this.ctx=new(window.AudioContext||window.webkitAudioContext),this.initialized=!0)}playTone(t,e,n="sine",i=.3){this.initialized||this.init();const s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type=n,s.frequency.setValueAtTime(t,this.ctx.currentTime),o.gain.setValueAtTime(i,this.ctx.currentTime),o.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+e),s.connect(o),o.connect(this.ctx.destination),s.start(),s.stop(this.ctx.currentTime+e)}playCollect(){this.playTone(800,.1,"sine",.2),setTimeout(()=>this.playTone(1e3,.1,"sine",.2),50)}playJump(){this.initialized||this.init();const t=this.ctx.createOscillator(),e=this.ctx.createGain();t.type="square",t.frequency.setValueAtTime(150,this.ctx.currentTime),t.frequency.exponentialRampToValueAtTime(300,this.ctx.currentTime+.1),e.gain.setValueAtTime(.1,this.ctx.currentTime),e.gain.exponentialRampToValueAtTime(.01,this.ctx.currentTime+.1),t.connect(e),e.connect(this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.1)}playCollision(){this.playTone(100,.2,"sawtooth",.3)}playCountdown(){this.playTone(440,.3,"sine",.3)}playGo(){this.playTone(880,.5,"sine",.4)}playGameOver(){this.playTone(400,.3,"sawtooth",.3),setTimeout(()=>this.playTone(300,.3,"sawtooth",.3),200),setTimeout(()=>this.playTone(200,.5,"sawtooth",.3),400)}playNewRecord(){this.playTone(523,.1,"sine",.3),setTimeout(()=>this.playTone(659,.1,"sine",.3),100),setTimeout(()=>this.playTone(784,.2,"sine",.3),200)}}class h_{constructor(t){this.scene=t,this.particles=[]}createParticle(t,e=16753691,n=20){const i=new Fe,s=new Float32Array(n*3),o=[];for(let l=0;l<n;l++)s[l*3]=t.x,s[l*3+1]=t.y,s[l*3+2]=t.z,o.push({x:(Math.random()-.5)*5,y:Math.random()*5,z:(Math.random()-.5)*5});i.setAttribute("position",new nn(s,3));const a=new fl({color:e,size:.3,transparent:!0,opacity:1,blending:$r}),c=new Wm(i,a);c.userData.velocities=o,c.userData.life=1,this.scene.add(c),this.particles.push(c)}update(t){for(let e=this.particles.length-1;e>=0;e--){const n=this.particles[e],i=n.geometry.attributes.position.array,s=n.userData.velocities;for(let o=0;o<s.length;o++)i[o*3]+=s[o].x*t,i[o*3+1]+=s[o].y*t,i[o*3+2]+=s[o].z*t,s[o].y-=9.8*t;n.geometry.attributes.position.needsUpdate=!0,n.userData.life-=t*2,n.material.opacity=n.userData.life,n.userData.life<=0&&(this.scene.remove(n),this.particles.splice(e,1))}}}class u_{constructor(t){this.container=t,this.clock=new Cg,this.isRunning=!1,this.isPaused=!1,this.gameState="menu",this.score=0,this.bestScore=parseInt(localStorage.getItem("ballPlaygroundBest")||"0"),this.timeLeft=120,this.lastTime=0,this.initRenderer(),this.initScene(),this.initCamera(),this.initPhysics(),this.initLights(),this.world=new r_(this.scene,this.physicsWorld),this.player=new o_(this.scene,this.physicsWorld,this.camera),this.collectibles=new a_(this.scene,this.physicsWorld),this.effects=new h_(this.scene),this.audio=new l_,this.ui=new c_(this),this.setupEventListeners(),this.animate()}initRenderer(){this.renderer=new dl({antialias:!0,alpha:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Lc,this.renderer.outputColorSpace=ye,this.renderer.toneMapping=Nc,this.renderer.toneMappingExposure=1.2,this.container.appendChild(this.renderer.domElement)}initScene(){this.scene=new km,this.scene.background=new Yt(8900331),this.scene.fog=new _o(8900331,80,200)}initCamera(){this.camera=new Xe(60,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,8,12),this.camera.lookAt(0,0,0)}initPhysics(){this.physicsWorld=new Jv({gravity:new y(0,-9.82,0)}),this.physicsWorld.broadphase=new wi(this.physicsWorld),this.physicsWorld.allowSleep=!0,this.physicsWorld.defaultContactMaterial.friction=.3,this.physicsWorld.defaultContactMaterial.restitution=.4}initLights(){const t=new Ag(16777215,.6);this.scene.add(t);const e=new Tg(16777215,1);e.position.set(30,50,30),e.castShadow=!0,e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048,e.shadow.camera.near=.5,e.shadow.camera.far=150,e.shadow.camera.left=-50,e.shadow.camera.right=50,e.shadow.camera.top=50,e.shadow.camera.bottom=-50,this.scene.add(e);const n=new Eg(8900331,4500036,.4);this.scene.add(n)}setupEventListeners(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}),window.addEventListener("keydown",t=>this.player.handleKeyDown(t)),window.addEventListener("keyup",t=>this.player.handleKeyUp(t)),window.addEventListener("mousemove",t=>this.player.handleMouseMove(t)),window.addEventListener("touchstart",t=>this.player.handleTouchStart(t)),window.addEventListener("touchmove",t=>this.player.handleTouchMove(t)),window.addEventListener("touchend",t=>this.player.handleTouchEnd(t))}start(){this.isRunning=!0,this.clock.start()}startGame(){this.gameState="countdown",this.score=0,this.timeLeft=120,this.player.reset(),this.collectibles.reset(),this.ui.showCountdown()}update(){if(!this.isRunning||this.isPaused)return;const t=Math.min(this.clock.getDelta(),.1);this.gameState==="playing"&&(this.timeLeft-=t,this.timeLeft<=0&&(this.timeLeft=0,this.endGame())),this.physicsWorld.step(1/60,t,3),this.player.update(t),this.collectibles.update(t,this.player.getPosition()),this.effects.update(t),this.ui.update()}endGame(){this.gameState="gameover",this.score>this.bestScore&&(this.bestScore=this.score,localStorage.setItem("ballPlaygroundBest",this.bestScore.toString()),this.ui.showNewRecord()),this.audio.playGameOver(),this.ui.showGameOver()}animate(){requestAnimationFrame(()=>this.animate()),this.update(),this.renderer.render(this.scene,this.camera)}addScore(t){this.score+=t,this.audio.playCollect()}getScore(){return this.score}getTimeLeft(){return this.timeLeft}getBestScore(){return this.bestScore}getState(){return this.gameState}}const d_=document.getElementById("app"),f_=new u_(d_);f_.start();
