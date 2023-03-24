(self["webpackChunkprojectcuoiky"]=self["webpackChunkprojectcuoiky"]||[]).push([[998],{4444:function(t,e,n){"use strict";n.d(e,{BH:function(){return y},L:function(){return c},LL:function(){return k},P0:function(){return g},Sg:function(){return b},ZR:function(){return S},aH:function(){return v},eu:function(){return w},hl:function(){return _},m9:function(){return O},vZ:function(){return x}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let o=t.charCodeAt(r);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=63&o|128):55296===(64512&o)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(o=65536+((1023&o)<<10)+(1023&t.charCodeAt(++r)),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=63&o|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=63&o|128)}return e},o=function(t){const e=[];let n=0,r=0;while(n<t.length){const o=t[n++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const i=t[n++];e[r++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){const i=t[n++],s=t[n++],a=t[n++],c=((7&o)<<18|(63&i)<<12|(63&s)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const i=t[n++],s=t[n++];e[r++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&s)}}return e.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<t.length;o+=3){const e=t[o],i=o+1<t.length,s=i?t[o+1]:0,a=o+2<t.length,c=a?t[o+2]:0,u=e>>2,l=(3&e)<<4|s>>4;let f=(15&s)<<2|c>>6,h=63&c;a||(h=64,i||(f=64)),r.push(n[u],n[l],n[f],n[h])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):o(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<t.length;){const e=n[t.charAt(o++)],i=o<t.length,a=i?n[t.charAt(o)]:0;++o;const c=o<t.length,u=c?n[t.charAt(o)]:64;++o;const l=o<t.length,f=l?n[t.charAt(o)]:64;if(++o,null==e||null==a||null==u||null==f)throw new s;const h=e<<2|a>>4;if(r.push(h),64!==u){const t=a<<4&240|u>>2;if(r.push(t),64!==f){const t=u<<6&192|f;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(t){const e=r(t);return i.encodeByteArray(e,!0)},c=function(t){return a(t).replace(/\./g,"")},u=function(t){try{return i.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=()=>l().__FIREBASE_DEFAULTS__,h=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:"/mini-project/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},d=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&u(t[1]);return e&&JSON.parse(e)},p=()=>{try{return f()||h()||d()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},m=t=>{var e,n;return null===(n=null===(e=p())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},g=t=>{const e=m(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},v=()=>{var t;return null===(t=p())||void 0===t?void 0:t.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class y{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",o=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[c(JSON.stringify(n)),c(JSON.stringify(s)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){try{return"object"===typeof indexedDB}catch(t){return!1}}function w(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var t;e((null===(t=o.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const E="FirebaseError";class S extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=E,Object.setPrototypeOf(this,S.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,k.prototype.create)}}class k{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,o=this.errors[t],i=o?C(o,n):"Error",s=`${this.serviceName}: ${i} (${r}).`,a=new S(r,s,n);return a}}function C(t,e){return t.replace(I,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const I=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const o of n){if(!r.includes(o))return!1;const n=t[o],i=e[o];if(T(n)&&T(i)){if(!x(n,i))return!1}else if(n!==i)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function T(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function O(t){return t&&t._delegate?t._delegate:t}},2262:function(t,e,n){"use strict";n.d(e,{Bj:function(){return i},Fl:function(){return Gt},IU:function(){return At},Jd:function(){return k},PG:function(){return It},SU:function(){return Ut},Um:function(){return St},WL:function(){return qt},X$:function(){return T},X3:function(){return Ot},XI:function(){return jt},Xl:function(){return Rt},dq:function(){return Lt},iH:function(){return Mt},j:function(){return I},lk:function(){return C},nZ:function(){return a},qj:function(){return Et},qq:function(){return _},yT:function(){return Tt}});var r=n(3577);let o;class i{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=o,!t&&o&&(this.index=(o.scopes||(o.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const e=o;try{return o=this,t()}finally{o=e}}else 0}on(){o=this}off(){o=this.parent}stop(t){if(this._active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0,this._active=!1}}}function s(t,e=o){e&&e.active&&e.effects.push(t)}function a(){return o}const c=t=>{const e=new Set(t);return e.w=0,e.n=0,e},u=t=>(t.w&m)>0,l=t=>(t.n&m)>0,f=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=m},h=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const o=e[r];u(o)&&!l(o)?o.delete(t):e[n++]=o,o.w&=~m,o.n&=~m}e.length=n}},d=new WeakMap;let p=0,m=1;const g=30;let v;const y=Symbol(""),b=Symbol("");class _{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,s(this,n)}run(){if(!this.active)return this.fn();let t=v,e=E;while(t){if(t===this)return;t=t.parent}try{return this.parent=v,v=this,E=!0,m=1<<++p,p<=g?f(this):w(this),this.fn()}finally{p<=g&&h(this),m=1<<--p,v=this.parent,E=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){v===this?this.deferStop=!0:this.active&&(w(this),this.onStop&&this.onStop(),this.active=!1)}}function w(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let E=!0;const S=[];function k(){S.push(E),E=!1}function C(){const t=S.pop();E=void 0===t||t}function I(t,e,n){if(E&&v){let e=d.get(t);e||d.set(t,e=new Map);let r=e.get(n);r||e.set(n,r=c());const o=void 0;x(r,o)}}function x(t,e){let n=!1;p<=g?l(t)||(t.n|=m,n=!u(t)):n=!t.has(v),n&&(t.add(v),v.deps.push(t))}function T(t,e,n,o,i,s){const a=d.get(t);if(!a)return;let u=[];if("clear"===e)u=[...a.values()];else if("length"===n&&(0,r.kJ)(t)){const t=Number(o);a.forEach(((e,n)=>{("length"===n||n>=t)&&u.push(e)}))}else switch(void 0!==n&&u.push(a.get(n)),e){case"add":(0,r.kJ)(t)?(0,r.S0)(n)&&u.push(a.get("length")):(u.push(a.get(y)),(0,r._N)(t)&&u.push(a.get(b)));break;case"delete":(0,r.kJ)(t)||(u.push(a.get(y)),(0,r._N)(t)&&u.push(a.get(b)));break;case"set":(0,r._N)(t)&&u.push(a.get(y));break}if(1===u.length)u[0]&&O(u[0]);else{const t=[];for(const e of u)e&&t.push(...e);O(c(t))}}function O(t,e){const n=(0,r.kJ)(t)?t:[...t];for(const r of n)r.computed&&A(r,e);for(const r of n)r.computed||A(r,e)}function A(t,e){(t!==v||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const R=(0,r.fY)("__proto__,__v_isRef,__isVue"),P=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(r.yk)),D=V(),N=V(!1,!0),F=V(!0),L=M();function M(){const t={};return["includes","indexOf","lastIndexOf"].forEach((e=>{t[e]=function(...t){const n=At(this);for(let e=0,o=this.length;e<o;e++)I(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(At)):r}})),["push","pop","shift","unshift","splice"].forEach((e=>{t[e]=function(...t){k();const n=At(this)[e].apply(this,t);return C(),n}})),t}function j(t){const e=At(this);return I(e,"has",t),e.hasOwnProperty(t)}function V(t=!1,e=!1){return function(n,o,i){if("__v_isReactive"===o)return!t;if("__v_isReadonly"===o)return t;if("__v_isShallow"===o)return e;if("__v_raw"===o&&i===(t?e?bt:yt:e?vt:gt).get(n))return n;const s=(0,r.kJ)(n);if(!t){if(s&&(0,r.RI)(L,o))return Reflect.get(L,o,i);if("hasOwnProperty"===o)return j}const a=Reflect.get(n,o,i);return((0,r.yk)(o)?P.has(o):R(o))?a:(t||I(n,"get",o),e?a:Lt(a)?s&&(0,r.S0)(o)?a:a.value:(0,r.Kn)(a)?t?kt(a):Et(a):a)}}const $=B(),U=B(!0);function B(t=!1){return function(e,n,o,i){let s=e[n];if(xt(s)&&Lt(s)&&!Lt(o))return!1;if(!t&&(Tt(o)||xt(o)||(s=At(s),o=At(o)),!(0,r.kJ)(e)&&Lt(s)&&!Lt(o)))return s.value=o,!0;const a=(0,r.kJ)(e)&&(0,r.S0)(n)?Number(n)<e.length:(0,r.RI)(e,n),c=Reflect.set(e,n,o,i);return e===At(i)&&(a?(0,r.aU)(o,s)&&T(e,"set",n,o,s):T(e,"add",n,o)),c}}function q(t,e){const n=(0,r.RI)(t,e),o=t[e],i=Reflect.deleteProperty(t,e);return i&&n&&T(t,"delete",e,void 0,o),i}function H(t,e){const n=Reflect.has(t,e);return(0,r.yk)(e)&&P.has(e)||I(t,"has",e),n}function z(t){return I(t,"iterate",(0,r.kJ)(t)?"length":y),Reflect.ownKeys(t)}const G={get:D,set:$,deleteProperty:q,has:H,ownKeys:z},K={get:F,set(t,e){return!0},deleteProperty(t,e){return!0}},J=(0,r.l7)({},G,{get:N,set:U}),W=t=>t,Y=t=>Reflect.getPrototypeOf(t);function Q(t,e,n=!1,r=!1){t=t["__v_raw"];const o=At(t),i=At(e);n||(e!==i&&I(o,"get",e),I(o,"get",i));const{has:s}=Y(o),a=r?W:n?Dt:Pt;return s.call(o,e)?a(t.get(e)):s.call(o,i)?a(t.get(i)):void(t!==o&&t.get(e))}function Z(t,e=!1){const n=this["__v_raw"],r=At(n),o=At(t);return e||(t!==o&&I(r,"has",t),I(r,"has",o)),t===o?n.has(t):n.has(t)||n.has(o)}function X(t,e=!1){return t=t["__v_raw"],!e&&I(At(t),"iterate",y),Reflect.get(t,"size",t)}function tt(t){t=At(t);const e=At(this),n=Y(e),r=n.has.call(e,t);return r||(e.add(t),T(e,"add",t,t)),this}function et(t,e){e=At(e);const n=At(this),{has:o,get:i}=Y(n);let s=o.call(n,t);s||(t=At(t),s=o.call(n,t));const a=i.call(n,t);return n.set(t,e),s?(0,r.aU)(e,a)&&T(n,"set",t,e,a):T(n,"add",t,e),this}function nt(t){const e=At(this),{has:n,get:r}=Y(e);let o=n.call(e,t);o||(t=At(t),o=n.call(e,t));const i=r?r.call(e,t):void 0,s=e.delete(t);return o&&T(e,"delete",t,void 0,i),s}function rt(){const t=At(this),e=0!==t.size,n=void 0,r=t.clear();return e&&T(t,"clear",void 0,void 0,n),r}function ot(t,e){return function(n,r){const o=this,i=o["__v_raw"],s=At(i),a=e?W:t?Dt:Pt;return!t&&I(s,"iterate",y),i.forEach(((t,e)=>n.call(r,a(t),a(e),o)))}}function it(t,e,n){return function(...o){const i=this["__v_raw"],s=At(i),a=(0,r._N)(s),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=i[t](...o),f=n?W:e?Dt:Pt;return!e&&I(s,"iterate",u?b:y),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[f(t[0]),f(t[1])]:f(t),done:e}},[Symbol.iterator](){return this}}}}function st(t){return function(...e){return"delete"!==t&&this}}function at(){const t={get(t){return Q(this,t)},get size(){return X(this)},has:Z,add:tt,set:et,delete:nt,clear:rt,forEach:ot(!1,!1)},e={get(t){return Q(this,t,!1,!0)},get size(){return X(this)},has:Z,add:tt,set:et,delete:nt,clear:rt,forEach:ot(!1,!0)},n={get(t){return Q(this,t,!0)},get size(){return X(this,!0)},has(t){return Z.call(this,t,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:ot(!0,!1)},r={get(t){return Q(this,t,!0,!0)},get size(){return X(this,!0)},has(t){return Z.call(this,t,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:ot(!0,!0)},o=["keys","values","entries",Symbol.iterator];return o.forEach((o=>{t[o]=it(o,!1,!1),n[o]=it(o,!0,!1),e[o]=it(o,!1,!0),r[o]=it(o,!0,!0)})),[t,n,e,r]}const[ct,ut,lt,ft]=at();function ht(t,e){const n=e?t?ft:lt:t?ut:ct;return(e,o,i)=>"__v_isReactive"===o?!t:"__v_isReadonly"===o?t:"__v_raw"===o?e:Reflect.get((0,r.RI)(n,o)&&o in e?n:e,o,i)}const dt={get:ht(!1,!1)},pt={get:ht(!1,!0)},mt={get:ht(!0,!1)};const gt=new WeakMap,vt=new WeakMap,yt=new WeakMap,bt=new WeakMap;function _t(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:_t((0,r.W7)(t))}function Et(t){return xt(t)?t:Ct(t,!1,G,dt,gt)}function St(t){return Ct(t,!1,J,pt,vt)}function kt(t){return Ct(t,!0,K,mt,yt)}function Ct(t,e,n,o,i){if(!(0,r.Kn)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const s=i.get(t);if(s)return s;const a=wt(t);if(0===a)return t;const c=new Proxy(t,2===a?o:n);return i.set(t,c),c}function It(t){return xt(t)?It(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function xt(t){return!(!t||!t["__v_isReadonly"])}function Tt(t){return!(!t||!t["__v_isShallow"])}function Ot(t){return It(t)||xt(t)}function At(t){const e=t&&t["__v_raw"];return e?At(e):t}function Rt(t){return(0,r.Nj)(t,"__v_skip",!0),t}const Pt=t=>(0,r.Kn)(t)?Et(t):t,Dt=t=>(0,r.Kn)(t)?kt(t):t;function Nt(t){E&&v&&(t=At(t),x(t.dep||(t.dep=c())))}function Ft(t,e){t=At(t);const n=t.dep;n&&O(n)}function Lt(t){return!(!t||!0!==t.__v_isRef)}function Mt(t){return Vt(t,!1)}function jt(t){return Vt(t,!0)}function Vt(t,e){return Lt(t)?t:new $t(t,e)}class $t{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:At(t),this._value=e?t:Pt(t)}get value(){return Nt(this),this._value}set value(t){const e=this.__v_isShallow||Tt(t)||xt(t);t=e?t:At(t),(0,r.aU)(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:Pt(t),Ft(this,t))}}function Ut(t){return Lt(t)?t.value:t}const Bt={get:(t,e,n)=>Ut(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const o=t[e];return Lt(o)&&!Lt(n)?(o.value=n,!0):Reflect.set(t,e,n,r)}};function qt(t){return It(t)?t:new Proxy(t,Bt)}var Ht;class zt{constructor(t,e,n,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this[Ht]=!1,this._dirty=!0,this.effect=new _(t,(()=>{this._dirty||(this._dirty=!0,Ft(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const t=At(this);return Nt(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Gt(t,e,n=!1){let o,i;const s=(0,r.mf)(t);s?(o=t,i=r.dG):(o=t.get,i=t.set);const a=new zt(o,i,s||!i,n);return a}Ht="__v_isReadonly"},6252:function(t,e,n){"use strict";n.d(e,{$d:function(){return s},Cn:function(){return L},FN:function(){return pn},Fl:function(){return An},HY:function(){return Pe},JJ:function(){return G},Ko:function(){return Vt},P$:function(){return rt},Q6:function(){return ut},U2:function(){return it},Uk:function(){return en},Us:function(){return Ie},Wm:function(){return Qe},Y3:function(){return y},Y8:function(){return tt},YP:function(){return W},_:function(){return Ye},aZ:function(){return lt},bv:function(){return St},dD:function(){return F},f3:function(){return K},h:function(){return Rn},iD:function(){return qe},ic:function(){return Ct},j4:function(){return He},kq:function(){return rn},nK:function(){return ct},uE:function(){return nn},up:function(){return Ft},w5:function(){return M},wg:function(){return je},wy:function(){return Pt}});var r=n(2262),o=n(3577);function i(t,e,n,r){let o;try{o=r?t(...r):t()}catch(i){a(i,e,n)}return o}function s(t,e,n,r){if((0,o.mf)(t)){const s=i(t,e,n,r);return s&&(0,o.tI)(s)&&s.catch((t=>{a(t,e,n)})),s}const c=[];for(let o=0;o<t.length;o++)c.push(s(t[o],e,n,r));return c}function a(t,e,n,r=!0){const o=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,s=n;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,o,s))return;r=r.parent}const a=e.appContext.config.errorHandler;if(a)return void i(a,null,10,[t,o,s])}c(t,n,o,r)}function c(t,e,n,r=!0){console.error(t)}let u=!1,l=!1;const f=[];let h=0;const d=[];let p=null,m=0;const g=Promise.resolve();let v=null;function y(t){const e=v||g;return t?e.then(this?t.bind(this):t):e}function b(t){let e=h+1,n=f.length;while(e<n){const r=e+n>>>1,o=I(f[r]);o<t?e=r+1:n=r}return e}function _(t){f.length&&f.includes(t,u&&t.allowRecurse?h+1:h)||(null==t.id?f.push(t):f.splice(b(t.id),0,t),w())}function w(){u||l||(l=!0,v=g.then(T))}function E(t){const e=f.indexOf(t);e>h&&f.splice(e,1)}function S(t){(0,o.kJ)(t)?d.push(...t):p&&p.includes(t,t.allowRecurse?m+1:m)||d.push(t),w()}function k(t,e=(u?h+1:0)){for(0;e<f.length;e++){const t=f[e];t&&t.pre&&(f.splice(e,1),e--,t())}}function C(t){if(d.length){const t=[...new Set(d)];if(d.length=0,p)return void p.push(...t);for(p=t,p.sort(((t,e)=>I(t)-I(e))),m=0;m<p.length;m++)p[m]();p=null,m=0}}const I=t=>null==t.id?1/0:t.id,x=(t,e)=>{const n=I(t)-I(e);if(0===n){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function T(t){l=!1,u=!0,f.sort(x);o.dG;try{for(h=0;h<f.length;h++){const t=f[h];t&&!1!==t.active&&i(t,null,14)}}finally{h=0,f.length=0,C(t),u=!1,v=null,(f.length||d.length)&&T(t)}}new Set;new Map;function O(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||o.kT;let i=n;const a=e.startsWith("update:"),c=a&&e.slice(7);if(c&&c in r){const t=`${"modelValue"===c?"model":c}Modifiers`,{number:e,trim:s}=r[t]||o.kT;s&&(i=n.map((t=>(0,o.HD)(t)?t.trim():t))),e&&(i=n.map(o.h5))}let u;let l=r[u=(0,o.hR)(e)]||r[u=(0,o.hR)((0,o._A)(e))];!l&&a&&(l=r[u=(0,o.hR)((0,o.rs)(e))]),l&&s(l,t,6,i);const f=r[u+"Once"];if(f){if(t.emitted){if(t.emitted[u])return}else t.emitted={};t.emitted[u]=!0,s(f,t,6,i)}}function A(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(void 0!==i)return i;const s=t.emits;let a={},c=!1;if(!(0,o.mf)(t)){const r=t=>{const n=A(t,e,!0);n&&(c=!0,(0,o.l7)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return s||c?((0,o.kJ)(s)?s.forEach((t=>a[t]=null)):(0,o.l7)(a,s),(0,o.Kn)(t)&&r.set(t,a),a):((0,o.Kn)(t)&&r.set(t,null),null)}function R(t,e){return!(!t||!(0,o.F7)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,o.RI)(t,e[0].toLowerCase()+e.slice(1))||(0,o.RI)(t,(0,o.rs)(e))||(0,o.RI)(t,e))}let P=null,D=null;function N(t){const e=P;return P=t,D=t&&t.type.__scopeId||null,e}function F(t){D=t}function L(){D=null}function M(t,e=P,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&Ue(-1);const o=N(e);let i;try{i=t(...n)}finally{N(o),r._d&&Ue(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function j(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[c],slots:u,attrs:l,emit:f,render:h,renderCache:d,data:p,setupState:m,ctx:g,inheritAttrs:v}=t;let y,b;const _=N(t);try{if(4&n.shapeFlag){const t=i||r;y=on(h.call(t,t,d,s,m,p,g)),b=l}else{const t=e;0,y=on(t.length>1?t(s,{attrs:l,slots:u,emit:f}):t(s,null)),b=e.props?l:V(l)}}catch(E){Le.length=0,a(E,t,1),y=Qe(Ne)}let w=y;if(b&&!1!==v){const t=Object.keys(b),{shapeFlag:e}=w;t.length&&7&e&&(c&&t.some(o.tR)&&(b=$(b,c)),w=tn(w,b))}return n.dirs&&(w=tn(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),y=w,N(_),y}const V=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,o.F7)(n))&&((e||(e={}))[n]=t[n]);return e},$=(t,e)=>{const n={};for(const r in t)(0,o.tR)(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function U(t,e,n){const{props:r,children:o,component:i}=t,{props:s,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!o&&!a||a&&a.$stable)||r!==s&&(r?!s||B(r,s,u):!!s);if(1024&c)return!0;if(16&c)return r?B(r,s,u):!!s;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(s[n]!==r[n]&&!R(u,n))return!0}}return!1}function B(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(e[i]!==t[i]&&!R(n,i))return!0}return!1}function q({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const H=t=>t.__isSuspense;function z(t,e){e&&e.pendingBranch?(0,o.kJ)(t)?e.effects.push(...t):e.effects.push(t):S(t)}function G(t,e){if(dn){let n=dn.provides;const r=dn.parent&&dn.parent.provides;r===n&&(n=dn.provides=Object.create(r)),n[t]=e}else 0}function K(t,e,n=!1){const r=dn||P;if(r){const i=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&(0,o.mf)(e)?e.call(r.proxy):e}else 0}const J={};function W(t,e,n){return Y(t,e,n)}function Y(t,e,{immediate:n,deep:a,flush:c,onTrack:u,onTrigger:l}=o.kT){const f=(0,r.nZ)()===(null===dn||void 0===dn?void 0:dn.scope)?dn:null;let h,d,p=!1,m=!1;if((0,r.dq)(t)?(h=()=>t.value,p=(0,r.yT)(t)):(0,r.PG)(t)?(h=()=>t,a=!0):(0,o.kJ)(t)?(m=!0,p=t.some((t=>(0,r.PG)(t)||(0,r.yT)(t))),h=()=>t.map((t=>(0,r.dq)(t)?t.value:(0,r.PG)(t)?X(t):(0,o.mf)(t)?i(t,f,2):void 0))):h=(0,o.mf)(t)?e?()=>i(t,f,2):()=>{if(!f||!f.isUnmounted)return d&&d(),s(t,f,3,[v])}:o.dG,e&&a){const t=h;h=()=>X(t())}let g,v=t=>{d=E.onStop=()=>{i(t,f,4)}};if(_n){if(v=o.dG,e?n&&s(e,f,3,[h(),m?[]:void 0,v]):h(),"sync"!==c)return o.dG;{const t=Dn();g=t.__watcherHandles||(t.__watcherHandles=[])}}let y=m?new Array(t.length).fill(J):J;const b=()=>{if(E.active)if(e){const t=E.run();(a||p||(m?t.some(((t,e)=>(0,o.aU)(t,y[e]))):(0,o.aU)(t,y)))&&(d&&d(),s(e,f,3,[t,y===J?void 0:m&&y[0]===J?[]:y,v]),y=t)}else E.run()};let w;b.allowRecurse=!!e,"sync"===c?w=b:"post"===c?w=()=>Ce(b,f&&f.suspense):(b.pre=!0,f&&(b.id=f.uid),w=()=>_(b));const E=new r.qq(h,w);e?n?b():y=E.run():"post"===c?Ce(E.run.bind(E),f&&f.suspense):E.run();const S=()=>{E.stop(),f&&f.scope&&(0,o.Od)(f.scope.effects,E)};return g&&g.push(S),S}function Q(t,e,n){const r=this.proxy,i=(0,o.HD)(t)?t.includes(".")?Z(r,t):()=>r[t]:t.bind(r,r);let s;(0,o.mf)(e)?s=e:(s=e.handler,n=e);const a=dn;mn(this);const c=Y(i,s.bind(r),n);return a?mn(a):gn(),c}function Z(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function X(t,e){if(!(0,o.Kn)(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),(0,r.dq)(t))X(t.value,e);else if((0,o.kJ)(t))for(let n=0;n<t.length;n++)X(t[n],e);else if((0,o.DM)(t)||(0,o._N)(t))t.forEach((t=>{X(t,e)}));else if((0,o.PO)(t))for(const n in t)X(t[n],e);return t}function tt(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return St((()=>{t.isMounted=!0})),It((()=>{t.isUnmounting=!0})),t}const et=[Function,Array],nt={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:et,onEnter:et,onAfterEnter:et,onEnterCancelled:et,onBeforeLeave:et,onLeave:et,onAfterLeave:et,onLeaveCancelled:et,onBeforeAppear:et,onAppear:et,onAfterAppear:et,onAppearCancelled:et},setup(t,{slots:e}){const n=pn(),o=tt();let i;return()=>{const s=e.default&&ut(e.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){let t=!1;for(const e of s)if(e.type!==Ne){0,a=e,t=!0;break}}const c=(0,r.IU)(t),{mode:u}=c;if(o.isLeaving)return st(a);const l=at(a);if(!l)return st(a);const f=it(l,c,o,n);ct(l,f);const h=n.subTree,d=h&&at(h);let p=!1;const{getTransitionKey:m}=l.type;if(m){const t=m();void 0===i?i=t:t!==i&&(i=t,p=!0)}if(d&&d.type!==Ne&&(!Ge(l,d)||p)){const t=it(d,c,o,n);if(ct(d,t),"out-in"===u)return o.isLeaving=!0,t.afterLeave=()=>{o.isLeaving=!1,!1!==n.update.active&&n.update()},st(a);"in-out"===u&&l.type!==Ne&&(t.delayLeave=(t,e,n)=>{const r=ot(o,d);r[String(d.key)]=d,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete f.delayedLeave},f.delayedLeave=n})}return a}}},rt=nt;function ot(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function it(t,e,n,r){const{appear:i,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:l,onAfterEnter:f,onEnterCancelled:h,onBeforeLeave:d,onLeave:p,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:v,onAppear:y,onAfterAppear:b,onAppearCancelled:_}=e,w=String(t.key),E=ot(n,t),S=(t,e)=>{t&&s(t,r,9,e)},k=(t,e)=>{const n=e[1];S(t,e),(0,o.kJ)(t)?t.every((t=>t.length<=1))&&n():t.length<=1&&n()},C={mode:a,persisted:c,beforeEnter(e){let r=u;if(!n.isMounted){if(!i)return;r=v||u}e._leaveCb&&e._leaveCb(!0);const o=E[w];o&&Ge(t,o)&&o.el._leaveCb&&o.el._leaveCb(),S(r,[e])},enter(t){let e=l,r=f,o=h;if(!n.isMounted){if(!i)return;e=y||l,r=b||f,o=_||h}let s=!1;const a=t._enterCb=e=>{s||(s=!0,S(e?o:r,[t]),C.delayedLeave&&C.delayedLeave(),t._enterCb=void 0)};e?k(e,[t,a]):a()},leave(e,r){const o=String(t.key);if(e._enterCb&&e._enterCb(!0),n.isUnmounting)return r();S(d,[e]);let i=!1;const s=e._leaveCb=n=>{i||(i=!0,r(),S(n?g:m,[e]),e._leaveCb=void 0,E[o]===t&&delete E[o])};E[o]=t,p?k(p,[e,s]):s()},clone(t){return it(t,e,n,r)}};return C}function st(t){if(ht(t))return t=tn(t),t.children=null,t}function at(t){return ht(t)?t.children?t.children[0]:void 0:t}function ct(t,e){6&t.shapeFlag&&t.component?ct(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ut(t,e=!1,n){let r=[],o=0;for(let i=0;i<t.length;i++){let s=t[i];const a=null==n?s.key:String(n)+String(null!=s.key?s.key:i);s.type===Pe?(128&s.patchFlag&&o++,r=r.concat(ut(s.children,e,a))):(e||s.type!==Ne)&&r.push(null!=a?tn(s,{key:a}):s)}if(o>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function lt(t){return(0,o.mf)(t)?{setup:t,name:t.name}:t}const ft=t=>!!t.type.__asyncLoader;const ht=t=>t.type.__isKeepAlive;RegExp,RegExp;function dt(t,e){return(0,o.kJ)(t)?t.some((t=>dt(t,e))):(0,o.HD)(t)?t.split(",").includes(e):!!(0,o.Kj)(t)&&t.test(e)}function pt(t,e){gt(t,"a",e)}function mt(t,e){gt(t,"da",e)}function gt(t,e,n=dn){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(_t(e,r,n),n){let t=n.parent;while(t&&t.parent)ht(t.parent.vnode)&&vt(r,e,n,t),t=t.parent}}function vt(t,e,n,r){const i=_t(e,t,r,!0);xt((()=>{(0,o.Od)(r[e],i)}),n)}function yt(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function bt(t){return 128&t.shapeFlag?t.ssContent:t}function _t(t,e,n=dn,o=!1){if(n){const i=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;(0,r.Jd)(),mn(n);const i=s(e,n,t,o);return gn(),(0,r.lk)(),i});return o?i.unshift(a):i.push(a),a}}const wt=t=>(e,n=dn)=>(!_n||"sp"===t)&&_t(t,((...t)=>e(...t)),n),Et=wt("bm"),St=wt("m"),kt=wt("bu"),Ct=wt("u"),It=wt("bum"),xt=wt("um"),Tt=wt("sp"),Ot=wt("rtg"),At=wt("rtc");function Rt(t,e=dn){_t("ec",t,e)}function Pt(t,e){const n=P;if(null===n)return t;const r=xn(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[t,n,a,c=o.kT]=e[s];t&&((0,o.mf)(t)&&(t={mounted:t,updated:t}),t.deep&&X(n),i.push({dir:t,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c}))}return t}function Dt(t,e,n,o){const i=t.dirs,a=e&&e.dirs;for(let c=0;c<i.length;c++){const u=i[c];a&&(u.oldValue=a[c].value);let l=u.dir[o];l&&((0,r.Jd)(),s(l,n,8,[t.el,u,t,e]),(0,r.lk)())}}const Nt="components";function Ft(t,e){return Mt(Nt,t,!0,e)||t}const Lt=Symbol();function Mt(t,e,n=!0,r=!1){const i=P||dn;if(i){const n=i.type;if(t===Nt){const t=Tn(n,!1);if(t&&(t===e||t===(0,o._A)(e)||t===(0,o.kC)((0,o._A)(e))))return n}const s=jt(i[t]||n[t],e)||jt(i.appContext[t],e);return!s&&r?n:s}}function jt(t,e){return t&&(t[e]||t[(0,o._A)(e)]||t[(0,o.kC)((0,o._A)(e))])}function Vt(t,e,n,r){let i;const s=n&&n[r];if((0,o.kJ)(t)||(0,o.HD)(t)){i=new Array(t.length);for(let n=0,r=t.length;n<r;n++)i[n]=e(t[n],n,void 0,s&&s[n])}else if("number"===typeof t){0,i=new Array(t);for(let n=0;n<t;n++)i[n]=e(n+1,n,void 0,s&&s[n])}else if((0,o.Kn)(t))if(t[Symbol.iterator])i=Array.from(t,((t,n)=>e(t,n,void 0,s&&s[n])));else{const n=Object.keys(t);i=new Array(n.length);for(let r=0,o=n.length;r<o;r++){const o=n[r];i[r]=e(t[o],o,r,s&&s[r])}}else i=[];return n&&(n[r]=i),i}const $t=t=>t?vn(t)?xn(t)||t.proxy:$t(t.parent):null,Ut=(0,o.l7)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>$t(t.parent),$root:t=>$t(t.root),$emit:t=>t.emit,$options:t=>Wt(t),$forceUpdate:t=>t.f||(t.f=()=>_(t.update)),$nextTick:t=>t.n||(t.n=y.bind(t.proxy)),$watch:t=>Q.bind(t)}),Bt=(t,e)=>t!==o.kT&&!t.__isScriptSetup&&(0,o.RI)(t,e),qt={get({_:t},e){const{ctx:n,setupState:i,data:s,props:a,accessCache:c,type:u,appContext:l}=t;let f;if("$"!==e[0]){const r=c[e];if(void 0!==r)switch(r){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return a[e]}else{if(Bt(i,e))return c[e]=1,i[e];if(s!==o.kT&&(0,o.RI)(s,e))return c[e]=2,s[e];if((f=t.propsOptions[0])&&(0,o.RI)(f,e))return c[e]=3,a[e];if(n!==o.kT&&(0,o.RI)(n,e))return c[e]=4,n[e];Ht&&(c[e]=0)}}const h=Ut[e];let d,p;return h?("$attrs"===e&&(0,r.j)(t,"get",e),h(t)):(d=u.__cssModules)&&(d=d[e])?d:n!==o.kT&&(0,o.RI)(n,e)?(c[e]=4,n[e]):(p=l.config.globalProperties,(0,o.RI)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return Bt(i,e)?(i[e]=n,!0):r!==o.kT&&(0,o.RI)(r,e)?(r[e]=n,!0):!(0,o.RI)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(s[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},a){let c;return!!n[a]||t!==o.kT&&(0,o.RI)(t,a)||Bt(e,a)||(c=s[0])&&(0,o.RI)(c,a)||(0,o.RI)(r,a)||(0,o.RI)(Ut,a)||(0,o.RI)(i.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,o.RI)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Ht=!0;function zt(t){const e=Wt(t),n=t.proxy,i=t.ctx;Ht=!1,e.beforeCreate&&Kt(e.beforeCreate,t,"bc");const{data:s,computed:a,methods:c,watch:u,provide:l,inject:f,created:h,beforeMount:d,mounted:p,beforeUpdate:m,updated:g,activated:v,deactivated:y,beforeDestroy:b,beforeUnmount:_,destroyed:w,unmounted:E,render:S,renderTracked:k,renderTriggered:C,errorCaptured:I,serverPrefetch:x,expose:T,inheritAttrs:O,components:A,directives:R,filters:P}=e,D=null;if(f&&Gt(f,i,D,t.appContext.config.unwrapInjectedRef),c)for(const r in c){const t=c[r];(0,o.mf)(t)&&(i[r]=t.bind(n))}if(s){0;const e=s.call(n,n);0,(0,o.Kn)(e)&&(t.data=(0,r.qj)(e))}if(Ht=!0,a)for(const r in a){const t=a[r],e=(0,o.mf)(t)?t.bind(n,n):(0,o.mf)(t.get)?t.get.bind(n,n):o.dG;0;const s=!(0,o.mf)(t)&&(0,o.mf)(t.set)?t.set.bind(n):o.dG,c=An({get:e,set:s});Object.defineProperty(i,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(u)for(const r in u)Jt(u[r],i,n,r);if(l){const t=(0,o.mf)(l)?l.call(n):l;Reflect.ownKeys(t).forEach((e=>{G(e,t[e])}))}function N(t,e){(0,o.kJ)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(h&&Kt(h,t,"c"),N(Et,d),N(St,p),N(kt,m),N(Ct,g),N(pt,v),N(mt,y),N(Rt,I),N(At,k),N(Ot,C),N(It,_),N(xt,E),N(Tt,x),(0,o.kJ)(T))if(T.length){const e=t.exposed||(t.exposed={});T.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});S&&t.render===o.dG&&(t.render=S),null!=O&&(t.inheritAttrs=O),A&&(t.components=A),R&&(t.directives=R)}function Gt(t,e,n=o.dG,i=!1){(0,o.kJ)(t)&&(t=te(t));for(const s in t){const n=t[s];let a;a=(0,o.Kn)(n)?"default"in n?K(n.from||s,n.default,!0):K(n.from||s):K(n),(0,r.dq)(a)&&i?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>a.value,set:t=>a.value=t}):e[s]=a}}function Kt(t,e,n){s((0,o.kJ)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function Jt(t,e,n,r){const i=r.includes(".")?Z(n,r):()=>n[r];if((0,o.HD)(t)){const n=e[t];(0,o.mf)(n)&&W(i,n)}else if((0,o.mf)(t))W(i,t.bind(n));else if((0,o.Kn)(t))if((0,o.kJ)(t))t.forEach((t=>Jt(t,e,n,r)));else{const r=(0,o.mf)(t.handler)?t.handler.bind(n):e[t.handler];(0,o.mf)(r)&&W(i,r,t)}else 0}function Wt(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=t.appContext,c=s.get(e);let u;return c?u=c:i.length||n||r?(u={},i.length&&i.forEach((t=>Yt(u,t,a,!0))),Yt(u,e,a)):u=e,(0,o.Kn)(e)&&s.set(e,u),u}function Yt(t,e,n,r=!1){const{mixins:o,extends:i}=e;i&&Yt(t,i,n,!0),o&&o.forEach((e=>Yt(t,e,n,!0)));for(const s in e)if(r&&"expose"===s);else{const r=Qt[s]||n&&n[s];t[s]=r?r(t[s],e[s]):e[s]}return t}const Qt={data:Zt,props:ne,emits:ne,methods:ne,computed:ne,beforeCreate:ee,created:ee,beforeMount:ee,mounted:ee,beforeUpdate:ee,updated:ee,beforeDestroy:ee,beforeUnmount:ee,destroyed:ee,unmounted:ee,activated:ee,deactivated:ee,errorCaptured:ee,serverPrefetch:ee,components:ne,directives:ne,watch:re,provide:Zt,inject:Xt};function Zt(t,e){return e?t?function(){return(0,o.l7)((0,o.mf)(t)?t.call(this,this):t,(0,o.mf)(e)?e.call(this,this):e)}:e:t}function Xt(t,e){return ne(te(t),te(e))}function te(t){if((0,o.kJ)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ee(t,e){return t?[...new Set([].concat(t,e))]:e}function ne(t,e){return t?(0,o.l7)((0,o.l7)(Object.create(null),t),e):e}function re(t,e){if(!t)return e;if(!e)return t;const n=(0,o.l7)(Object.create(null),t);for(const r in e)n[r]=ee(t[r],e[r]);return n}function oe(t,e,n,i=!1){const s={},a={};(0,o.Nj)(a,Ke,1),t.propsDefaults=Object.create(null),se(t,e,s,a);for(const r in t.propsOptions[0])r in s||(s[r]=void 0);n?t.props=i?s:(0,r.Um)(s):t.type.props?t.props=s:t.props=a,t.attrs=a}function ie(t,e,n,i){const{props:s,attrs:a,vnode:{patchFlag:c}}=t,u=(0,r.IU)(s),[l]=t.propsOptions;let f=!1;if(!(i||c>0)||16&c){let r;se(t,e,s,a)&&(f=!0);for(const i in u)e&&((0,o.RI)(e,i)||(r=(0,o.rs)(i))!==i&&(0,o.RI)(e,r))||(l?!n||void 0===n[i]&&void 0===n[r]||(s[i]=ae(l,u,i,void 0,t,!0)):delete s[i]);if(a!==u)for(const t in a)e&&(0,o.RI)(e,t)||(delete a[t],f=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let i=n[r];if(R(t.emitsOptions,i))continue;const c=e[i];if(l)if((0,o.RI)(a,i))c!==a[i]&&(a[i]=c,f=!0);else{const e=(0,o._A)(i);s[e]=ae(l,u,e,c,t,!1)}else c!==a[i]&&(a[i]=c,f=!0)}}f&&(0,r.X$)(t,"set","$attrs")}function se(t,e,n,i){const[s,a]=t.propsOptions;let c,u=!1;if(e)for(let r in e){if((0,o.Gg)(r))continue;const l=e[r];let f;s&&(0,o.RI)(s,f=(0,o._A)(r))?a&&a.includes(f)?(c||(c={}))[f]=l:n[f]=l:R(t.emitsOptions,r)||r in i&&l===i[r]||(i[r]=l,u=!0)}if(a){const e=(0,r.IU)(n),i=c||o.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=ae(s,e,c,i[c],t,!(0,o.RI)(i,c))}}return u}function ae(t,e,n,r,i,s){const a=t[n];if(null!=a){const t=(0,o.RI)(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&(0,o.mf)(t)){const{propsDefaults:o}=i;n in o?r=o[n]:(mn(i),r=o[n]=t.call(null,e),gn())}else r=t}a[0]&&(s&&!t?r=!1:!a[1]||""!==r&&r!==(0,o.rs)(n)||(r=!0))}return r}function ce(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,a={},c=[];let u=!1;if(!(0,o.mf)(t)){const r=t=>{u=!0;const[n,r]=ce(t,e,!0);(0,o.l7)(a,n),r&&c.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!s&&!u)return(0,o.Kn)(t)&&r.set(t,o.Z6),o.Z6;if((0,o.kJ)(s))for(let f=0;f<s.length;f++){0;const t=(0,o._A)(s[f]);ue(t)&&(a[t]=o.kT)}else if(s){0;for(const t in s){const e=(0,o._A)(t);if(ue(e)){const n=s[t],r=a[e]=(0,o.kJ)(n)||(0,o.mf)(n)?{type:n}:Object.assign({},n);if(r){const t=he(Boolean,r.type),n=he(String,r.type);r[0]=t>-1,r[1]=n<0||t<n,(t>-1||(0,o.RI)(r,"default"))&&c.push(e)}}}}const l=[a,c];return(0,o.Kn)(t)&&r.set(t,l),l}function ue(t){return"$"!==t[0]}function le(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:null===t?"null":""}function fe(t,e){return le(t)===le(e)}function he(t,e){return(0,o.kJ)(e)?e.findIndex((e=>fe(e,t))):(0,o.mf)(e)&&fe(e,t)?0:-1}const de=t=>"_"===t[0]||"$stable"===t,pe=t=>(0,o.kJ)(t)?t.map(on):[on(t)],me=(t,e,n)=>{if(e._n)return e;const r=M(((...t)=>pe(e(...t))),n);return r._c=!1,r},ge=(t,e,n)=>{const r=t._ctx;for(const i in t){if(de(i))continue;const n=t[i];if((0,o.mf)(n))e[i]=me(i,n,r);else if(null!=n){0;const t=pe(n);e[i]=()=>t}}},ve=(t,e)=>{const n=pe(e);t.slots.default=()=>n},ye=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=(0,r.IU)(e),(0,o.Nj)(e,"_",n)):ge(e,t.slots={})}else t.slots={},e&&ve(t,e);(0,o.Nj)(t.slots,Ke,1)},be=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,a=o.kT;if(32&r.shapeFlag){const t=e._;t?n&&1===t?s=!1:((0,o.l7)(i,e),n||1!==t||delete i._):(s=!e.$stable,ge(e,i)),a=e}else e&&(ve(t,e),a={default:1});if(s)for(const o in i)de(o)||o in a||delete i[o]};function _e(){return{app:null,config:{isNativeTag:o.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let we=0;function Ee(t,e){return function(n,r=null){(0,o.mf)(n)||(n=Object.assign({},n)),null==r||(0,o.Kn)(r)||(r=null);const i=_e(),s=new Set;let a=!1;const c=i.app={_uid:we++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Nn,get config(){return i.config},set config(t){0},use(t,...e){return s.has(t)||(t&&(0,o.mf)(t.install)?(s.add(t),t.install(c,...e)):(0,o.mf)(t)&&(s.add(t),t(c,...e))),c},mixin(t){return i.mixins.includes(t)||i.mixins.push(t),c},component(t,e){return e?(i.components[t]=e,c):i.components[t]},directive(t,e){return e?(i.directives[t]=e,c):i.directives[t]},mount(o,s,u){if(!a){0;const l=Qe(n,r);return l.appContext=i,s&&e?e(l,o):t(l,o,u),a=!0,c._container=o,o.__vue_app__=c,xn(l.component)||l.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return i.provides[t]=e,c}};return c}}function Se(t,e,n,s,a=!1){if((0,o.kJ)(t))return void t.forEach(((t,r)=>Se(t,e&&((0,o.kJ)(e)?e[r]:e),n,s,a)));if(ft(s)&&!a)return;const c=4&s.shapeFlag?xn(s.component)||s.component.proxy:s.el,u=a?null:c,{i:l,r:f}=t;const h=e&&e.r,d=l.refs===o.kT?l.refs={}:l.refs,p=l.setupState;if(null!=h&&h!==f&&((0,o.HD)(h)?(d[h]=null,(0,o.RI)(p,h)&&(p[h]=null)):(0,r.dq)(h)&&(h.value=null)),(0,o.mf)(f))i(f,l,12,[u,d]);else{const e=(0,o.HD)(f),i=(0,r.dq)(f);if(e||i){const r=()=>{if(t.f){const n=e?(0,o.RI)(p,f)?p[f]:d[f]:f.value;a?(0,o.kJ)(n)&&(0,o.Od)(n,c):(0,o.kJ)(n)?n.includes(c)||n.push(c):e?(d[f]=[c],(0,o.RI)(p,f)&&(p[f]=d[f])):(f.value=[c],t.k&&(d[t.k]=f.value))}else e?(d[f]=u,(0,o.RI)(p,f)&&(p[f]=u)):i&&(f.value=u,t.k&&(d[t.k]=u))};u?(r.id=-1,Ce(r,n)):r()}else 0}}function ke(){}const Ce=z;function Ie(t){return xe(t)}function xe(t,e){ke();const n=(0,o.E9)();n.__VUE__=!0;const{insert:i,remove:s,patchProp:a,createElement:c,createText:u,createComment:l,setText:f,setElementText:h,parentNode:d,nextSibling:p,setScopeId:m=o.dG,insertStaticContent:g}=t,v=(t,e,n,r=null,o=null,i=null,s=!1,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!Ge(t,e)&&(r=Z(t),K(t,o,i,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:f}=e;switch(u){case De:y(t,e,n,r);break;case Ne:b(t,e,n,r);break;case Fe:null==t&&w(e,n,r,s);break;case Pe:N(t,e,n,r,o,i,s,a,c);break;default:1&f?x(t,e,n,r,o,i,s,a,c):6&f?F(t,e,n,r,o,i,s,a,c):(64&f||128&f)&&u.process(t,e,n,r,o,i,s,a,c,tt)}null!=l&&o&&Se(l,t&&t.ref,i,e||t,!e)},y=(t,e,n,r)=>{if(null==t)i(e.el=u(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&f(n,e.children)}},b=(t,e,n,r)=>{null==t?i(e.el=l(e.children||""),n,r):e.el=t.el},w=(t,e,n,r)=>{[t.el,t.anchor]=g(t.children,e,n,r,t.el,t.anchor)},S=({el:t,anchor:e},n,r)=>{let o;while(t&&t!==e)o=p(t),i(t,n,r),t=o;i(e,n,r)},I=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),s(t),t=n;s(e)},x=(t,e,n,r,o,i,s,a,c)=>{s=s||"svg"===e.type,null==t?T(e,n,r,o,i,s,a,c):R(t,e,o,i,s,a,c)},T=(t,e,n,r,s,u,l,f)=>{let d,p;const{type:m,props:g,shapeFlag:v,transition:y,dirs:b}=t;if(d=t.el=c(t.type,u,g&&g.is,g),8&v?h(d,t.children):16&v&&A(t.children,d,null,r,s,u&&"foreignObject"!==m,l,f),b&&Dt(t,null,r,"created"),O(d,t,t.scopeId,l,r),g){for(const e in g)"value"===e||(0,o.Gg)(e)||a(d,e,null,g[e],u,t.children,r,s,Q);"value"in g&&a(d,"value",null,g.value),(p=g.onVnodeBeforeMount)&&un(p,r,t)}b&&Dt(t,null,r,"beforeMount");const _=(!s||s&&!s.pendingBranch)&&y&&!y.persisted;_&&y.beforeEnter(d),i(d,e,n),((p=g&&g.onVnodeMounted)||_||b)&&Ce((()=>{p&&un(p,r,t),_&&y.enter(d),b&&Dt(t,null,r,"mounted")}),s)},O=(t,e,n,r,o)=>{if(n&&m(t,n),r)for(let i=0;i<r.length;i++)m(t,r[i]);if(o){let n=o.subTree;if(e===n){const e=o.vnode;O(t,e,e.scopeId,e.slotScopeIds,o.parent)}}},A=(t,e,n,r,o,i,s,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?sn(t[u]):on(t[u]);v(null,c,e,n,r,o,i,s,a)}},R=(t,e,n,r,i,s,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:f,dirs:d}=e;l|=16&t.patchFlag;const p=t.props||o.kT,m=e.props||o.kT;let g;n&&Te(n,!1),(g=m.onVnodeBeforeUpdate)&&un(g,n,e,t),d&&Dt(e,t,n,"beforeUpdate"),n&&Te(n,!0);const v=i&&"foreignObject"!==e.type;if(f?P(t.dynamicChildren,f,u,n,r,v,s):c||B(t,e,u,null,n,r,v,s,!1),l>0){if(16&l)D(u,e,p,m,n,r,i);else if(2&l&&p.class!==m.class&&a(u,"class",null,m.class,i),4&l&&a(u,"style",p.style,m.style,i),8&l){const o=e.dynamicProps;for(let e=0;e<o.length;e++){const s=o[e],c=p[s],l=m[s];l===c&&"value"!==s||a(u,s,c,l,i,t.children,n,r,Q)}}1&l&&t.children!==e.children&&h(u,e.children)}else c||null!=f||D(u,e,p,m,n,r,i);((g=m.onVnodeUpdated)||d)&&Ce((()=>{g&&un(g,n,e,t),d&&Dt(e,t,n,"updated")}),r)},P=(t,e,n,r,o,i,s)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===Pe||!Ge(c,u)||70&c.shapeFlag)?d(c.el):n;v(c,u,l,null,r,o,i,s,!0)}},D=(t,e,n,r,i,s,c)=>{if(n!==r){if(n!==o.kT)for(const u in n)(0,o.Gg)(u)||u in r||a(t,u,n[u],null,c,e.children,i,s,Q);for(const u in r){if((0,o.Gg)(u))continue;const l=r[u],f=n[u];l!==f&&"value"!==u&&a(t,u,f,l,c,e.children,i,s,Q)}"value"in r&&a(t,"value",n.value,r.value)}},N=(t,e,n,r,o,s,a,c,l)=>{const f=e.el=t?t.el:u(""),h=e.anchor=t?t.anchor:u("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:m}=e;m&&(c=c?c.concat(m):m),null==t?(i(f,n,r),i(h,n,r),A(e.children,n,h,o,s,a,c,l)):d>0&&64&d&&p&&t.dynamicChildren?(P(t.dynamicChildren,p,n,o,s,a,c),(null!=e.key||o&&e===o.subTree)&&Oe(t,e,!0)):B(t,e,n,h,o,s,a,c,l)},F=(t,e,n,r,o,i,s,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?o.ctx.activate(e,n,r,s,c):L(e,n,r,o,i,s,c):M(t,e,c)},L=(t,e,n,r,o,i,s)=>{const a=t.component=hn(t,r,o);if(ht(t)&&(a.ctx.renderer=tt),wn(a),a.asyncDep){if(o&&o.registerDep(a,V),!t.el){const t=a.subTree=Qe(Ne);b(null,t,e,n)}}else V(a,t,e,n,o,i,s)},M=(t,e,n)=>{const r=e.component=t.component;if(U(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void $(r,e,n);r.next=e,E(r.update),r.update()}else e.el=t.el,r.vnode=e},V=(t,e,n,i,s,a,c)=>{const u=()=>{if(t.isMounted){let e,{next:n,bu:r,u:i,parent:u,vnode:l}=t,f=n;0,Te(t,!1),n?(n.el=l.el,$(t,n,c)):n=l,r&&(0,o.ir)(r),(e=n.props&&n.props.onVnodeBeforeUpdate)&&un(e,u,n,l),Te(t,!0);const h=j(t);0;const p=t.subTree;t.subTree=h,v(p,h,d(p.el),Z(p),t,s,a),n.el=h.el,null===f&&q(t,h.el),i&&Ce(i,s),(e=n.props&&n.props.onVnodeUpdated)&&Ce((()=>un(e,u,n,l)),s)}else{let r;const{el:c,props:u}=e,{bm:l,m:f,parent:h}=t,d=ft(e);if(Te(t,!1),l&&(0,o.ir)(l),!d&&(r=u&&u.onVnodeBeforeMount)&&un(r,h,e),Te(t,!0),c&&nt){const n=()=>{t.subTree=j(t),nt(c,t.subTree,t,s,null)};d?e.type.__asyncLoader().then((()=>!t.isUnmounted&&n())):n()}else{0;const r=t.subTree=j(t);0,v(null,r,n,i,t,s,a),e.el=r.el}if(f&&Ce(f,s),!d&&(r=u&&u.onVnodeMounted)){const t=e;Ce((()=>un(r,h,t)),s)}(256&e.shapeFlag||h&&ft(h.vnode)&&256&h.vnode.shapeFlag)&&t.a&&Ce(t.a,s),t.isMounted=!0,e=n=i=null}},l=t.effect=new r.qq(u,(()=>_(f)),t.scope),f=t.update=()=>l.run();f.id=t.uid,Te(t,!0),f()},$=(t,e,n)=>{e.component=t;const o=t.vnode.props;t.vnode=e,t.next=null,ie(t,e.props,o,n),be(t,e.children,n),(0,r.Jd)(),k(),(0,r.lk)()},B=(t,e,n,r,o,i,s,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,f=e.children,{patchFlag:d,shapeFlag:p}=e;if(d>0){if(128&d)return void z(u,f,n,r,o,i,s,a,c);if(256&d)return void H(u,f,n,r,o,i,s,a,c)}8&p?(16&l&&Q(u,o,i),f!==u&&h(n,f)):16&l?16&p?z(u,f,n,r,o,i,s,a,c):Q(u,o,i,!0):(8&l&&h(n,""),16&p&&A(f,n,r,o,i,s,a,c))},H=(t,e,n,r,i,s,a,c,u)=>{t=t||o.Z6,e=e||o.Z6;const l=t.length,f=e.length,h=Math.min(l,f);let d;for(d=0;d<h;d++){const r=e[d]=u?sn(e[d]):on(e[d]);v(t[d],r,n,null,i,s,a,c,u)}l>f?Q(t,i,s,!0,!1,h):A(e,n,r,i,s,a,c,u,h)},z=(t,e,n,r,i,s,a,c,u)=>{let l=0;const f=e.length;let h=t.length-1,d=f-1;while(l<=h&&l<=d){const r=t[l],o=e[l]=u?sn(e[l]):on(e[l]);if(!Ge(r,o))break;v(r,o,n,null,i,s,a,c,u),l++}while(l<=h&&l<=d){const r=t[h],o=e[d]=u?sn(e[d]):on(e[d]);if(!Ge(r,o))break;v(r,o,n,null,i,s,a,c,u),h--,d--}if(l>h){if(l<=d){const t=d+1,o=t<f?e[t].el:r;while(l<=d)v(null,e[l]=u?sn(e[l]):on(e[l]),n,o,i,s,a,c,u),l++}}else if(l>d)while(l<=h)K(t[l],i,s,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=d;l++){const t=e[l]=u?sn(e[l]):on(e[l]);null!=t.key&&g.set(t.key,l)}let y,b=0;const _=d-m+1;let w=!1,E=0;const S=new Array(_);for(l=0;l<_;l++)S[l]=0;for(l=p;l<=h;l++){const r=t[l];if(b>=_){K(r,i,s,!0);continue}let o;if(null!=r.key)o=g.get(r.key);else for(y=m;y<=d;y++)if(0===S[y-m]&&Ge(r,e[y])){o=y;break}void 0===o?K(r,i,s,!0):(S[o-m]=l+1,o>=E?E=o:w=!0,v(r,e[o],n,null,i,s,a,c,u),b++)}const k=w?Ae(S):o.Z6;for(y=k.length-1,l=_-1;l>=0;l--){const t=m+l,o=e[t],h=t+1<f?e[t+1].el:r;0===S[l]?v(null,o,n,h,i,s,a,c,u):w&&(y<0||l!==k[y]?G(o,n,h,2):y--)}}},G=(t,e,n,r,o=null)=>{const{el:s,type:a,transition:c,children:u,shapeFlag:l}=t;if(6&l)return void G(t.component.subTree,e,n,r);if(128&l)return void t.suspense.move(e,n,r);if(64&l)return void a.move(t,e,n,tt);if(a===Pe){i(s,e,n);for(let t=0;t<u.length;t++)G(u[t],e,n,r);return void i(t.anchor,e,n)}if(a===Fe)return void S(t,e,n);const f=2!==r&&1&l&&c;if(f)if(0===r)c.beforeEnter(s),i(s,e,n),Ce((()=>c.enter(s)),o);else{const{leave:t,delayLeave:r,afterLeave:o}=c,a=()=>i(s,e,n),u=()=>{t(s,(()=>{a(),o&&o()}))};r?r(s,a,u):u()}else i(s,e,n)},K=(t,e,n,r=!1,o=!1)=>{const{type:i,props:s,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:f,dirs:h}=t;if(null!=a&&Se(a,null,n,t,!0),256&l)return void e.ctx.deactivate(t);const d=1&l&&h,p=!ft(t);let m;if(p&&(m=s&&s.onVnodeBeforeUnmount)&&un(m,e,t),6&l)Y(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);d&&Dt(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,o,tt,r):u&&(i!==Pe||f>0&&64&f)?Q(u,e,n,!1,!0):(i===Pe&&384&f||!o&&16&l)&&Q(c,e,n),r&&J(t)}(p&&(m=s&&s.onVnodeUnmounted)||d)&&Ce((()=>{m&&un(m,e,t),d&&Dt(t,null,e,"unmounted")}),n)},J=t=>{const{type:e,el:n,anchor:r,transition:o}=t;if(e===Pe)return void W(n,r);if(e===Fe)return void I(t);const i=()=>{s(n),o&&!o.persisted&&o.afterLeave&&o.afterLeave()};if(1&t.shapeFlag&&o&&!o.persisted){const{leave:e,delayLeave:r}=o,s=()=>e(n,i);r?r(t.el,i,s):s()}else i()},W=(t,e)=>{let n;while(t!==e)n=p(t),s(t),t=n;s(e)},Y=(t,e,n)=>{const{bum:r,scope:i,update:s,subTree:a,um:c}=t;r&&(0,o.ir)(r),i.stop(),s&&(s.active=!1,K(a,t,e,n)),c&&Ce(c,e),Ce((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},Q=(t,e,n,r=!1,o=!1,i=0)=>{for(let s=i;s<t.length;s++)K(t[s],e,n,r,o)},Z=t=>6&t.shapeFlag?Z(t.component.subTree):128&t.shapeFlag?t.suspense.next():p(t.anchor||t.el),X=(t,e,n)=>{null==t?e._vnode&&K(e._vnode,null,null,!0):v(e._vnode||null,t,e,null,null,null,n),k(),C(),e._vnode=t},tt={p:v,um:K,m:G,r:J,mt:L,mc:A,pc:B,pbc:P,n:Z,o:t};let et,nt;return e&&([et,nt]=e(tt)),{render:X,hydrate:et,createApp:Ee(X,et)}}function Te({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Oe(t,e,n=!1){const r=t.children,i=e.children;if((0,o.kJ)(r)&&(0,o.kJ)(i))for(let o=0;o<r.length;o++){const t=r[o];let e=i[o];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=i[o]=sn(i[o]),e.el=t.el),n||Oe(t,e)),e.type===De&&(e.el=t.el)}}function Ae(t){const e=t.slice(),n=[0];let r,o,i,s,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(o=n[n.length-1],t[o]<c){e[r]=o,n.push(r);continue}i=0,s=n.length-1;while(i<s)a=i+s>>1,t[n[a]]<c?i=a+1:s=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}i=n.length,s=n[i-1];while(i-- >0)n[i]=s,s=e[s];return n}const Re=t=>t.__isTeleport;const Pe=Symbol(void 0),De=Symbol(void 0),Ne=Symbol(void 0),Fe=Symbol(void 0),Le=[];let Me=null;function je(t=!1){Le.push(Me=t?null:[])}function Ve(){Le.pop(),Me=Le[Le.length-1]||null}let $e=1;function Ue(t){$e+=t}function Be(t){return t.dynamicChildren=$e>0?Me||o.Z6:null,Ve(),$e>0&&Me&&Me.push(t),t}function qe(t,e,n,r,o,i){return Be(Ye(t,e,n,r,o,i,!0))}function He(t,e,n,r,o){return Be(Qe(t,e,n,r,o,!0))}function ze(t){return!!t&&!0===t.__v_isVNode}function Ge(t,e){return t.type===e.type&&t.key===e.key}const Ke="__vInternal",Je=({key:t})=>null!=t?t:null,We=({ref:t,ref_key:e,ref_for:n})=>null!=t?(0,o.HD)(t)||(0,r.dq)(t)||(0,o.mf)(t)?{i:P,r:t,k:e,f:!!n}:t:null;function Ye(t,e=null,n=null,r=0,i=null,s=(t===Pe?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Je(e),ref:e&&We(e),scopeId:D,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:P};return c?(an(u,n),128&s&&t.normalize(u)):n&&(u.shapeFlag|=(0,o.HD)(n)?8:16),$e>0&&!a&&Me&&(u.patchFlag>0||6&s)&&32!==u.patchFlag&&Me.push(u),u}const Qe=Ze;function Ze(t,e=null,n=null,i=0,s=null,a=!1){if(t&&t!==Lt||(t=Ne),ze(t)){const r=tn(t,e,!0);return n&&an(r,n),$e>0&&!a&&Me&&(6&r.shapeFlag?Me[Me.indexOf(t)]=r:Me.push(r)),r.patchFlag|=-2,r}if(On(t)&&(t=t.__vccOpts),e){e=Xe(e);let{class:t,style:n}=e;t&&!(0,o.HD)(t)&&(e.class=(0,o.C_)(t)),(0,o.Kn)(n)&&((0,r.X3)(n)&&!(0,o.kJ)(n)&&(n=(0,o.l7)({},n)),e.style=(0,o.j5)(n))}const c=(0,o.HD)(t)?1:H(t)?128:Re(t)?64:(0,o.Kn)(t)?4:(0,o.mf)(t)?2:0;return Ye(t,e,n,i,s,c,a,!0)}function Xe(t){return t?(0,r.X3)(t)||Ke in t?(0,o.l7)({},t):t:null}function tn(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:a}=t,c=e?cn(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Je(c),ref:e&&e.ref?n&&i?(0,o.kJ)(i)?i.concat(We(e)):[i,We(e)]:We(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Pe?-1===s?16:16|s:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&tn(t.ssContent),ssFallback:t.ssFallback&&tn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u}function en(t=" ",e=0){return Qe(De,null,t,e)}function nn(t,e){const n=Qe(Fe,null,t);return n.staticCount=e,n}function rn(t="",e=!1){return e?(je(),He(Ne,null,t)):Qe(Ne,null,t)}function on(t){return null==t||"boolean"===typeof t?Qe(Ne):(0,o.kJ)(t)?Qe(Pe,null,t.slice()):"object"===typeof t?sn(t):Qe(De,null,String(t))}function sn(t){return null===t.el&&-1!==t.patchFlag||t.memo?t:tn(t)}function an(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if((0,o.kJ)(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),an(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||Ke in e?3===r&&P&&(1===P.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=P}}else(0,o.mf)(e)?(e={default:e,_ctx:P},n=32):(e=String(e),64&r?(n=16,e=[en(e)]):n=8);t.children=e,t.shapeFlag|=n}function cn(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=(0,o.C_)([e.class,r.class]));else if("style"===t)e.style=(0,o.j5)([e.style,r.style]);else if((0,o.F7)(t)){const n=e[t],i=r[t];!i||n===i||(0,o.kJ)(n)&&n.includes(i)||(e[t]=n?[].concat(n,i):i)}else""!==t&&(e[t]=r[t])}return e}function un(t,e,n,r=null){s(t,e,7,[n,r])}const ln=_e();let fn=0;function hn(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||ln,a={uid:fn++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ce(i,s),emitsOptions:A(i,s),emit:null,emitted:null,propsDefaults:o.kT,inheritAttrs:i.inheritAttrs,ctx:o.kT,data:o.kT,props:o.kT,attrs:o.kT,slots:o.kT,refs:o.kT,setupState:o.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=O.bind(null,a),t.ce&&t.ce(a),a}let dn=null;const pn=()=>dn||P,mn=t=>{dn=t,t.scope.on()},gn=()=>{dn&&dn.scope.off(),dn=null};function vn(t){return 4&t.vnode.shapeFlag}let yn,bn,_n=!1;function wn(t,e=!1){_n=e;const{props:n,children:r}=t.vnode,o=vn(t);oe(t,n,o,e),ye(t,r);const i=o?En(t,e):void 0;return _n=!1,i}function En(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=(0,r.Xl)(new Proxy(t.ctx,qt));const{setup:s}=n;if(s){const n=t.setupContext=s.length>1?In(t):null;mn(t),(0,r.Jd)();const c=i(s,t,0,[t.props,n]);if((0,r.lk)(),gn(),(0,o.tI)(c)){if(c.then(gn,gn),e)return c.then((n=>{Sn(t,n,e)})).catch((e=>{a(e,t,0)}));t.asyncDep=c}else Sn(t,c,e)}else kn(t,e)}function Sn(t,e,n){(0,o.mf)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,o.Kn)(e)&&(t.setupState=(0,r.WL)(e)),kn(t,n)}function kn(t,e,n){const i=t.type;if(!t.render){if(!e&&yn&&!i.render){const e=i.template||Wt(t).template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:s,compilerOptions:a}=i,c=(0,o.l7)((0,o.l7)({isCustomElement:n,delimiters:s},r),a);i.render=yn(e,c)}}t.render=i.render||o.dG,bn&&bn(t)}mn(t),(0,r.Jd)(),zt(t),(0,r.lk)(),gn()}function Cn(t){return new Proxy(t.attrs,{get(e,n){return(0,r.j)(t,"get","$attrs"),e[n]}})}function In(t){const e=e=>{t.exposed=e||{}};let n;return{get attrs(){return n||(n=Cn(t))},slots:t.slots,emit:t.emit,expose:e}}function xn(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(t.exposed)),{get(e,n){return n in e?e[n]:n in Ut?Ut[n](t):void 0},has(t,e){return e in t||e in Ut}}))}function Tn(t,e=!0){return(0,o.mf)(t)?t.displayName||t.name:t.name||e&&t.__name}function On(t){return(0,o.mf)(t)&&"__vccOpts"in t}const An=(t,e)=>(0,r.Fl)(t,e,_n);function Rn(t,e,n){const r=arguments.length;return 2===r?(0,o.Kn)(e)&&!(0,o.kJ)(e)?ze(e)?Qe(t,null,[e]):Qe(t,e):Qe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&ze(n)&&(n=[n]),Qe(t,e,n))}const Pn=Symbol(""),Dn=()=>{{const t=K(Pn);return t}};const Nn="3.2.47"},9963:function(t,e,n){"use strict";n.d(e,{D2:function(){return gt},F8:function(){return vt},bM:function(){return ut},iM:function(){return pt},nr:function(){return ct},ri:function(){return Et}});var r=n(3577),o=n(6252),i=n(2262);const s="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,c=a&&a.createElement("template"),u={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const o=e?a.createElementNS(s,t):a.createElement(t,n?{is:n}:void 0);return"select"===t&&r&&null!=r.multiple&&o.setAttribute("multiple",r.multiple),o},createText:t=>a.createTextNode(t),createComment:t=>a.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>a.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,o,i){const s=n?n.previousSibling:e.lastChild;if(o&&(o===i||o.nextSibling)){while(1)if(e.insertBefore(o.cloneNode(!0),n),o===i||!(o=o.nextSibling))break}else{c.innerHTML=r?`<svg>${t}</svg>`:t;const o=c.content;if(r){const t=o.firstChild;while(t.firstChild)o.appendChild(t.firstChild);o.removeChild(t)}e.insertBefore(o,n)}return[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function l(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function f(t,e,n){const o=t.style,i=(0,r.HD)(n);if(n&&!i){if(e&&!(0,r.HD)(e))for(const t in e)null==n[t]&&d(o,t,"");for(const t in n)d(o,t,n[t])}else{const r=o.display;i?e!==n&&(o.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(o.display=r)}}const h=/\s*!important$/;function d(t,e,n){if((0,r.kJ)(n))n.forEach((n=>d(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const o=g(t,e);h.test(n)?t.setProperty((0,r.rs)(o),n.replace(h,""),"important"):t[o]=n}}const p=["Webkit","Moz","ms"],m={};function g(t,e){const n=m[e];if(n)return n;let o=(0,r._A)(e);if("filter"!==o&&o in t)return m[e]=o;o=(0,r.kC)(o);for(let r=0;r<p.length;r++){const n=p[r]+o;if(n in t)return m[e]=n}return e}const v="http://www.w3.org/1999/xlink";function y(t,e,n,o,i){if(o&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(v,e.slice(6,e.length)):t.setAttributeNS(v,e,n);else{const o=(0,r.Pq)(e);null==n||o&&!(0,r.yA)(n)?t.removeAttribute(e):t.setAttribute(e,o?"":n)}}function b(t,e,n,o,i,s,a){if("innerHTML"===e||"textContent"===e)return o&&a(o,i,s),void(t[e]=null==n?"":n);if("value"===e&&"PROGRESS"!==t.tagName&&!t.tagName.includes("-")){t._value=n;const r=null==n?"":n;return t.value===r&&"OPTION"!==t.tagName||(t.value=r),void(null==n&&t.removeAttribute(e))}let c=!1;if(""===n||null==n){const o=typeof t[e];"boolean"===o?n=(0,r.yA)(n):null==n&&"string"===o?(n="",c=!0):"number"===o&&(n=0,c=!0)}try{t[e]=n}catch(u){0}c&&t.removeAttribute(e)}function _(t,e,n,r){t.addEventListener(e,n,r)}function w(t,e,n,r){t.removeEventListener(e,n,r)}function E(t,e,n,r,o=null){const i=t._vei||(t._vei={}),s=i[e];if(r&&s)s.value=r;else{const[n,a]=k(e);if(r){const s=i[e]=T(r,o);_(t,n,s,a)}else s&&(w(t,n,s,a),i[e]=void 0)}}const S=/(?:Once|Passive|Capture)$/;function k(t){let e;if(S.test(t)){let n;e={};while(n=t.match(S))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}const n=":"===t[2]?t.slice(3):(0,r.rs)(t.slice(2));return[n,e]}let C=0;const I=Promise.resolve(),x=()=>C||(I.then((()=>C=0)),C=Date.now());function T(t,e){const n=t=>{if(t._vts){if(t._vts<=n.attached)return}else t._vts=Date.now();(0,o.$d)(O(t,n.value),e,5,[t])};return n.value=t,n.attached=x(),n}function O(t,e){if((0,r.kJ)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const A=/^on[a-z]/,R=(t,e,n,o,i=!1,s,a,c,u)=>{"class"===e?l(t,o,i):"style"===e?f(t,n,o):(0,r.F7)(e)?(0,r.tR)(e)||E(t,e,n,o,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):P(t,e,o,i))?b(t,e,o,s,a,c,u):("true-value"===e?t._trueValue=o:"false-value"===e&&(t._falseValue=o),y(t,e,o,i))};function P(t,e,n,o){return o?"innerHTML"===e||"textContent"===e||!!(e in t&&A.test(e)&&(0,r.mf)(n)):"spellcheck"!==e&&"draggable"!==e&&"translate"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!A.test(e)||!(0,r.HD)(n))&&e in t))))}"undefined"!==typeof HTMLElement&&HTMLElement;const D="transition",N="animation",F=(t,{slots:e})=>(0,o.h)(o.P$,$(t),e);F.displayName="Transition";const L={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},M=F.props=(0,r.l7)({},o.P$.props,L),j=(t,e=[])=>{(0,r.kJ)(t)?t.forEach((t=>t(...e))):t&&t(...e)},V=t=>!!t&&((0,r.kJ)(t)?t.some((t=>t.length>1)):t.length>1);function $(t){const e={};for(const r in t)r in L||(e[r]=t[r]);if(!1===t.css)return e;const{name:n="v",type:o,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=s,appearActiveClass:l=a,appearToClass:f=c,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,m=U(i),g=m&&m[0],v=m&&m[1],{onBeforeEnter:y,onEnter:b,onEnterCancelled:_,onLeave:w,onLeaveCancelled:E,onBeforeAppear:S=y,onAppear:k=b,onAppearCancelled:C=_}=e,I=(t,e,n)=>{H(t,e?f:c),H(t,e?l:a),n&&n()},x=(t,e)=>{t._isLeaving=!1,H(t,h),H(t,p),H(t,d),e&&e()},T=t=>(e,n)=>{const r=t?k:b,i=()=>I(e,t,n);j(r,[e,i]),z((()=>{H(e,t?u:s),q(e,t?f:c),V(r)||K(e,o,g,i)}))};return(0,r.l7)(e,{onBeforeEnter(t){j(y,[t]),q(t,s),q(t,a)},onBeforeAppear(t){j(S,[t]),q(t,u),q(t,l)},onEnter:T(!1),onAppear:T(!0),onLeave(t,e){t._isLeaving=!0;const n=()=>x(t,e);q(t,h),Q(),q(t,d),z((()=>{t._isLeaving&&(H(t,h),q(t,p),V(w)||K(t,o,v,n))})),j(w,[t,n])},onEnterCancelled(t){I(t,!1),j(_,[t])},onAppearCancelled(t){I(t,!0),j(C,[t])},onLeaveCancelled(t){x(t),j(E,[t])}})}function U(t){if(null==t)return null;if((0,r.Kn)(t))return[B(t.enter),B(t.leave)];{const e=B(t);return[e,e]}}function B(t){const e=(0,r.He)(t);return e}function q(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.add(e))),(t._vtc||(t._vtc=new Set)).add(e)}function H(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.remove(e)));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function z(t){requestAnimationFrame((()=>{requestAnimationFrame(t)}))}let G=0;function K(t,e,n,r){const o=t._endId=++G,i=()=>{o===t._endId&&r()};if(n)return setTimeout(i,n);const{type:s,timeout:a,propCount:c}=J(t,e);if(!s)return r();const u=s+"end";let l=0;const f=()=>{t.removeEventListener(u,h),i()},h=e=>{e.target===t&&++l>=c&&f()};setTimeout((()=>{l<c&&f()}),a+1),t.addEventListener(u,h)}function J(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),o=r(`${D}Delay`),i=r(`${D}Duration`),s=W(o,i),a=r(`${N}Delay`),c=r(`${N}Duration`),u=W(a,c);let l=null,f=0,h=0;e===D?s>0&&(l=D,f=s,h=i.length):e===N?u>0&&(l=N,f=u,h=c.length):(f=Math.max(s,u),l=f>0?s>u?D:N:null,h=l?l===D?i.length:c.length:0);const d=l===D&&/\b(transform|all)(,|$)/.test(r(`${D}Property`).toString());return{type:l,timeout:f,propCount:h,hasTransform:d}}function W(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map(((e,n)=>Y(e)+Y(t[n]))))}function Y(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function Q(){return document.body.offsetHeight}const Z=new WeakMap,X=new WeakMap,tt={name:"TransitionGroup",props:(0,r.l7)({},M,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=(0,o.FN)(),r=(0,o.Y8)();let s,a;return(0,o.ic)((()=>{if(!s.length)return;const e=t.moveClass||`${t.name||"v"}-move`;if(!ot(s[0].el,n.vnode.el,e))return;s.forEach(et),s.forEach(nt);const r=s.filter(rt);Q(),r.forEach((t=>{const n=t.el,r=n.style;q(n,e),r.transform=r.webkitTransform=r.transitionDuration="";const o=n._moveCb=t=>{t&&t.target!==n||t&&!/transform$/.test(t.propertyName)||(n.removeEventListener("transitionend",o),n._moveCb=null,H(n,e))};n.addEventListener("transitionend",o)}))})),()=>{const c=(0,i.IU)(t),u=$(c);let l=c.tag||o.HY;s=a,a=e.default?(0,o.Q6)(e.default()):[];for(let t=0;t<a.length;t++){const e=a[t];null!=e.key&&(0,o.nK)(e,(0,o.U2)(e,u,r,n))}if(s)for(let t=0;t<s.length;t++){const e=s[t];(0,o.nK)(e,(0,o.U2)(e,u,r,n)),Z.set(e,e.el.getBoundingClientRect())}return(0,o.Wm)(l,null,a)}}};tt.props;function et(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function nt(t){X.set(t,t.el.getBoundingClientRect())}function rt(t){const e=Z.get(t),n=X.get(t),r=e.left-n.left,o=e.top-n.top;if(r||o){const e=t.el.style;return e.transform=e.webkitTransform=`translate(${r}px,${o}px)`,e.transitionDuration="0s",t}}function ot(t,e,n){const r=t.cloneNode();t._vtc&&t._vtc.forEach((t=>{t.split(/\s+/).forEach((t=>t&&r.classList.remove(t)))})),n.split(/\s+/).forEach((t=>t&&r.classList.add(t))),r.style.display="none";const o=1===e.nodeType?e:e.parentNode;o.appendChild(r);const{hasTransform:i}=J(r);return o.removeChild(r),i}const it=t=>{const e=t.props["onUpdate:modelValue"]||!1;return(0,r.kJ)(e)?t=>(0,r.ir)(e,t):e};function st(t){t.target.composing=!0}function at(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ct={created(t,{modifiers:{lazy:e,trim:n,number:o}},i){t._assign=it(i);const s=o||i.props&&"number"===i.props.type;_(t,e?"change":"input",(e=>{if(e.target.composing)return;let o=t.value;n&&(o=o.trim()),s&&(o=(0,r.h5)(o)),t._assign(o)})),n&&_(t,"change",(()=>{t.value=t.value.trim()})),e||(_(t,"compositionstart",st),_(t,"compositionend",at),_(t,"change",at))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:o,number:i}},s){if(t._assign=it(s),t.composing)return;if(document.activeElement===t&&"range"!==t.type){if(n)return;if(o&&t.value.trim()===e)return;if((i||"number"===t.type)&&(0,r.h5)(t.value)===e)return}const a=null==e?"":e;t.value!==a&&(t.value=a)}};const ut={deep:!0,created(t,{value:e,modifiers:{number:n}},o){const i=(0,r.DM)(e);_(t,"change",(()=>{const e=Array.prototype.filter.call(t.options,(t=>t.selected)).map((t=>n?(0,r.h5)(ft(t)):ft(t)));t._assign(t.multiple?i?new Set(e):e:e[0])})),t._assign=it(o)},mounted(t,{value:e}){lt(t,e)},beforeUpdate(t,e,n){t._assign=it(n)},updated(t,{value:e}){lt(t,e)}};function lt(t,e){const n=t.multiple;if(!n||(0,r.kJ)(e)||(0,r.DM)(e)){for(let o=0,i=t.options.length;o<i;o++){const i=t.options[o],s=ft(i);if(n)(0,r.kJ)(e)?i.selected=(0,r.hq)(e,s)>-1:i.selected=e.has(s);else if((0,r.WV)(ft(i),e))return void(t.selectedIndex!==o&&(t.selectedIndex=o))}n||-1===t.selectedIndex||(t.selectedIndex=-1)}}function ft(t){return"_value"in t?t._value:t.value}const ht=["ctrl","shift","alt","meta"],dt={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>ht.some((n=>t[`${n}Key`]&&!e.includes(n)))},pt=(t,e)=>(n,...r)=>{for(let t=0;t<e.length;t++){const r=dt[e[t]];if(r&&r(n,e))return}return t(n,...r)},mt={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},gt=(t,e)=>n=>{if(!("key"in n))return;const o=(0,r.rs)(n.key);return e.some((t=>t===o||mt[t]===o))?t(n):void 0},vt={beforeMount(t,{value:e},{transition:n}){t._vod="none"===t.style.display?"":t.style.display,n&&e?n.beforeEnter(t):yt(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!==!n&&(r?e?(r.beforeEnter(t),yt(t,!0),r.enter(t)):r.leave(t,(()=>{yt(t,!1)})):yt(t,e))},beforeUnmount(t,{value:e}){yt(t,e)}};function yt(t,e){t.style.display=e?t._vod:"none"}const bt=(0,r.l7)({patchProp:R},u);let _t;function wt(){return _t||(_t=(0,o.Us)(bt))}const Et=(...t)=>{const e=wt().createApp(...t);const{mount:n}=e;return e.mount=t=>{const o=St(t);if(!o)return;const i=e._component;(0,r.mf)(i)||i.render||i.template||(i.template=o.innerHTML),o.innerHTML="";const s=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},e};function St(t){if((0,r.HD)(t)){const e=document.querySelector(t);return e}return t}},3577:function(t,e,n){"use strict";function r(t,e){const n=Object.create(null),r=t.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}n.d(e,{C_:function(){return f},DM:function(){return D},E9:function(){return st},F7:function(){return C},Gg:function(){return G},HD:function(){return M},He:function(){return ot},Kj:function(){return F},Kn:function(){return V},NO:function(){return S},Nj:function(){return nt},Od:function(){return T},PO:function(){return H},Pq:function(){return d},RI:function(){return A},S0:function(){return z},W7:function(){return q},WV:function(){return g},Z6:function(){return w},_A:function(){return W},_N:function(){return P},aU:function(){return tt},dG:function(){return E},e1:function(){return i},fY:function(){return r},h5:function(){return rt},hR:function(){return X},hq:function(){return v},ir:function(){return et},j5:function(){return s},kC:function(){return Z},kJ:function(){return R},kT:function(){return _},l7:function(){return x},mf:function(){return L},rs:function(){return Q},tI:function(){return $},tR:function(){return I},yA:function(){return p},yk:function(){return j},zw:function(){return y}});const o="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",i=r(o);function s(t){if(R(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],o=M(r)?l(r):s(r);if(o)for(const t in o)e[t]=o[t]}return e}return M(t)||V(t)?t:void 0}const a=/;(?![^(]*\))/g,c=/:([^]+)/,u=/\/\*.*?\*\//gs;function l(t){const e={};return t.replace(u,"").split(a).forEach((t=>{if(t){const n=t.split(c);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function f(t){let e="";if(M(t))e=t;else if(R(t))for(let n=0;n<t.length;n++){const r=f(t[n]);r&&(e+=r+" ")}else if(V(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const h="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",d=r(h);function p(t){return!!t||""===t}function m(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=g(t[r],e[r]);return n}function g(t,e){if(t===e)return!0;let n=N(t),r=N(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=j(t),r=j(e),n||r)return t===e;if(n=R(t),r=R(e),n||r)return!(!n||!r)&&m(t,e);if(n=V(t),r=V(e),n||r){if(!n||!r)return!1;const o=Object.keys(t).length,i=Object.keys(e).length;if(o!==i)return!1;for(const n in t){const r=t.hasOwnProperty(n),o=e.hasOwnProperty(n);if(r&&!o||!r&&o||!g(t[n],e[n]))return!1}}return String(t)===String(e)}function v(t,e){return t.findIndex((t=>g(t,e)))}const y=t=>M(t)?t:null==t?"":R(t)||V(t)&&(t.toString===U||!L(t.toString))?JSON.stringify(t,b,2):String(t),b=(t,e)=>e&&e.__v_isRef?b(t,e.value):P(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n])=>(t[`${e} =>`]=n,t)),{})}:D(e)?{[`Set(${e.size})`]:[...e.values()]}:!V(e)||R(e)||H(e)?e:String(e),_={},w=[],E=()=>{},S=()=>!1,k=/^on[^a-z]/,C=t=>k.test(t),I=t=>t.startsWith("onUpdate:"),x=Object.assign,T=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},O=Object.prototype.hasOwnProperty,A=(t,e)=>O.call(t,e),R=Array.isArray,P=t=>"[object Map]"===B(t),D=t=>"[object Set]"===B(t),N=t=>"[object Date]"===B(t),F=t=>"[object RegExp]"===B(t),L=t=>"function"===typeof t,M=t=>"string"===typeof t,j=t=>"symbol"===typeof t,V=t=>null!==t&&"object"===typeof t,$=t=>V(t)&&L(t.then)&&L(t.catch),U=Object.prototype.toString,B=t=>U.call(t),q=t=>B(t).slice(8,-1),H=t=>"[object Object]"===B(t),z=t=>M(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,G=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),K=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},J=/-(\w)/g,W=K((t=>t.replace(J,((t,e)=>e?e.toUpperCase():"")))),Y=/\B([A-Z])/g,Q=K((t=>t.replace(Y,"-$1").toLowerCase())),Z=K((t=>t.charAt(0).toUpperCase()+t.slice(1))),X=K((t=>t?`on${Z(t)}`:"")),tt=(t,e)=>!Object.is(t,e),et=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},nt=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},rt=t=>{const e=parseFloat(t);return isNaN(e)?t:e},ot=t=>{const e=M(t)?Number(t):NaN;return isNaN(e)?t:e};let it;const st=()=>it||(it="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},9662:function(t,e,n){var r=n(614),o=n(6330),i=TypeError;t.exports=function(t){if(r(t))return t;throw i(o(t)+" is not a function")}},9670:function(t,e,n){var r=n(111),o=String,i=TypeError;t.exports=function(t){if(r(t))return t;throw i(o(t)+" is not an object")}},1318:function(t,e,n){var r=n(5656),o=n(1400),i=n(6244),s=function(t){return function(e,n,s){var a,c=r(e),u=i(c),l=o(s,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},3658:function(t,e,n){"use strict";var r=n(9781),o=n(3157),i=TypeError,s=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(o(t)&&!s(t,"length").writable)throw i("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},4326:function(t,e,n){var r=n(1702),o=r({}.toString),i=r("".slice);t.exports=function(t){return i(o(t),8,-1)}},9920:function(t,e,n){var r=n(2597),o=n(3887),i=n(1236),s=n(3070);t.exports=function(t,e,n){for(var a=o(e),c=s.f,u=i.f,l=0;l<a.length;l++){var f=a[l];r(t,f)||n&&r(n,f)||c(t,f,u(e,f))}}},8880:function(t,e,n){var r=n(9781),o=n(3070),i=n(9114);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8052:function(t,e,n){var r=n(614),o=n(3070),i=n(6339),s=n(3072);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:e;if(r(n)&&i(n,u,a),a.global)c?t[e]=n:s(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(l){}c?t[e]=n:o.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},3072:function(t,e,n){var r=n(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(t){var e="object"==typeof document&&document.all,n="undefined"==typeof e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:n}},317:function(t,e,n){var r=n(7854),o=n(111),i=r.document,s=o(i)&&o(i.createElement);t.exports=function(t){return s?i.createElement(t):{}}},7207:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},8113:function(t){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(t,e,n){var r,o,i=n(7854),s=n(8113),a=i.process,c=i.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),o=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(o=+r[1]))),t.exports=o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,n){var r=n(7854),o=n(1236).f,i=n(8880),s=n(8052),a=n(3072),c=n(9920),u=n(4705);t.exports=function(t,e){var n,l,f,h,d,p,m=t.target,g=t.global,v=t.stat;if(l=g?r:v?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(f in e){if(d=e[f],t.dontCallGetSet?(p=o(l,f),h=p&&p.value):h=l[f],n=u(g?f:m+(v?".":"#")+f,t.forced),!n&&void 0!==h){if(typeof d==typeof h)continue;c(d,h)}(t.sham||h&&h.sham)&&i(d,"sham",!0),s(l,f,d,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},4374:function(t,e,n){var r=n(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var r=n(4374),o=Function.prototype.call;t.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(t,e,n){var r=n(9781),o=n(2597),i=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=o(i,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(i,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},1702:function(t,e,n){var r=n(4374),o=Function.prototype,i=o.call,s=r&&o.bind.bind(i,i);t.exports=r?s:function(t){return function(){return i.apply(t,arguments)}}},5005:function(t,e,n){var r=n(7854),o=n(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t]):r[t]&&r[t][e]}},8173:function(t,e,n){var r=n(9662),o=n(8554);t.exports=function(t,e){var n=t[e];return o(n)?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var r=n(1702),o=n(7908),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},3501:function(t){t.exports={}},4664:function(t,e,n){var r=n(9781),o=n(7293),i=n(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(1702),o=n(7293),i=n(4326),s=Object,a=r("".split);t.exports=o((function(){return!s("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?a(t,""):s(t)}:s},2788:function(t,e,n){var r=n(1702),o=n(614),i=n(5465),s=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return s(t)}),t.exports=i.inspectSource},9909:function(t,e,n){var r,o,i,s=n(4811),a=n(7854),c=n(111),u=n(8880),l=n(2597),f=n(5465),h=n(6200),d=n(3501),p="Object already initialized",m=a.TypeError,g=a.WeakMap,v=function(t){return i(t)?o(t):r(t,{})},y=function(t){return function(e){var n;if(!c(e)||(n=o(e)).type!==t)throw m("Incompatible receiver, "+t+" required");return n}};if(s||f.state){var b=f.state||(f.state=new g);b.get=b.get,b.has=b.has,b.set=b.set,r=function(t,e){if(b.has(t))throw m(p);return e.facade=t,b.set(t,e),e},o=function(t){return b.get(t)||{}},i=function(t){return b.has(t)}}else{var _=h("state");d[_]=!0,r=function(t,e){if(l(t,_))throw m(p);return e.facade=t,u(t,_,e),e},o=function(t){return l(t,_)?t[_]:{}},i=function(t){return l(t,_)}}t.exports={set:r,get:o,has:i,enforce:v,getterFor:y}},3157:function(t,e,n){var r=n(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},614:function(t,e,n){var r=n(4154),o=r.all;t.exports=r.IS_HTMLDDA?function(t){return"function"==typeof t||t===o}:function(t){return"function"==typeof t}},4705:function(t,e,n){var r=n(7293),o=n(614),i=/#|\.prototype\./,s=function(t,e){var n=c[a(t)];return n==l||n!=u&&(o(e)?r(e):!!e)},a=s.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";t.exports=s},8554:function(t){t.exports=function(t){return null===t||void 0===t}},111:function(t,e,n){var r=n(614),o=n(4154),i=o.all;t.exports=o.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:r(t)||t===i}:function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var r=n(5005),o=n(614),i=n(7976),s=n(3307),a=Object;t.exports=s?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return o(e)&&i(e.prototype,a(t))}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},6339:function(t,e,n){var r=n(1702),o=n(7293),i=n(614),s=n(2597),a=n(9781),c=n(6530).CONFIGURABLE,u=n(2788),l=n(9909),f=l.enforce,h=l.get,d=String,p=Object.defineProperty,m=r("".slice),g=r("".replace),v=r([].join),y=a&&!o((function(){return 8!==p((function(){}),"length",{value:8}).length})),b=String(String).split("String"),_=t.exports=function(t,e,n){"Symbol("===m(d(e),0,7)&&(e="["+g(d(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!s(t,"name")||c&&t.name!==e)&&(a?p(t,"name",{value:e,configurable:!0}):t.name=e),y&&n&&s(n,"arity")&&t.length!==n.arity&&p(t,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?a&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(o){}var r=f(t);return s(r,"source")||(r.source=v(b,"string"==typeof e?e:"")),t};Function.prototype.toString=_((function(){return i(this)&&h(this).source||u(this)}),"toString")},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},3070:function(t,e,n){var r=n(9781),o=n(4664),i=n(3353),s=n(9670),a=n(4948),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,f="enumerable",h="configurable",d="writable";e.f=r?i?function(t,e,n){if(s(t),e=a(e),s(n),"function"===typeof t&&"prototype"===e&&"value"in n&&d in n&&!n[d]){var r=l(t,e);r&&r[d]&&(t[e]=n.value,n={configurable:h in n?n[h]:r[h],enumerable:f in n?n[f]:r[f],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(s(t),e=a(e),s(n),o)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),o=n(6916),i=n(5296),s=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=a(t),e=c(e),l)try{return f(t,e)}catch(n){}if(u(t,e))return s(!o(i.f,t,e),t[e])}},8006:function(t,e,n){var r=n(6324),o=n(748),i=o.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),o=n(2597),i=n(5656),s=n(1318).indexOf,a=n(3501),c=r([].push);t.exports=function(t,e){var n,r=i(t),u=0,l=[];for(n in r)!o(a,n)&&o(r,n)&&c(l,n);while(e.length>u)o(r,n=e[u++])&&(~s(l,n)||c(l,n));return l}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);e.f=o?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},2140:function(t,e,n){var r=n(6916),o=n(614),i=n(111),s=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&o(n=t.toString)&&!i(a=r(n,t)))return a;if(o(n=t.valueOf)&&!i(a=r(n,t)))return a;if("string"!==e&&o(n=t.toString)&&!i(a=r(n,t)))return a;throw s("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),o=n(1702),i=n(8006),s=n(5181),a=n(9670),c=o([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(a(t)),n=s.f;return n?c(e,n(t)):e}},4488:function(t,e,n){var r=n(8554),o=TypeError;t.exports=function(t){if(r(t))throw o("Can't call method on "+t);return t}},6200:function(t,e,n){var r=n(2309),o=n(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,e,n){var r=n(7854),o=n(3072),i="__core-js_shared__",s=r[i]||o(i,{});t.exports=s},2309:function(t,e,n){var r=n(1913),o=n(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.29.0",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.29.0/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(t,e,n){var r=n(7392),o=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(t,e,n){var r=n(9303),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},5656:function(t,e,n){var r=n(8361),o=n(4488);t.exports=function(t){return r(o(t))}},9303:function(t,e,n){var r=n(4758);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},7466:function(t,e,n){var r=n(9303),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(4488),o=Object;t.exports=function(t){return o(r(t))}},7593:function(t,e,n){var r=n(6916),o=n(111),i=n(2190),s=n(8173),a=n(2140),c=n(5112),u=TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!o(t)||i(t))return t;var n,c=s(t,l);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!o(n)||i(n))return n;throw u("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},4948:function(t,e,n){var r=n(7593),o=n(2190);t.exports=function(t){var e=r(t,"string");return o(e)?e:e+""}},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},9711:function(t,e,n){var r=n(1702),o=0,i=Math.random(),s=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+s(++o+i,36)}},3307:function(t,e,n){var r=n(6293);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var r=n(9781),o=n(7293);t.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(t,e,n){var r=n(7854),o=n(614),i=r.WeakMap;t.exports=o(i)&&/native code/.test(String(i))},5112:function(t,e,n){var r=n(7854),o=n(2309),i=n(2597),s=n(9711),a=n(6293),c=n(3307),u=r.Symbol,l=o("wks"),f=c?u["for"]||u:u&&u.withoutSetter||s;t.exports=function(t){return i(l,t)||(l[t]=a&&i(u,t)?u[t]:f("Symbol."+t)),l[t]}},7658:function(t,e,n){"use strict";var r=n(2109),o=n(7908),i=n(6244),s=n(3658),a=n(7207),c=n(7293),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},f=u||!l();r({target:"Array",proto:!0,arity:1,forced:f},{push:function(t){var e=o(this),n=i(e),r=arguments.length;a(n+r);for(var c=0;c<r;c++)e[n]=arguments[c],n++;return s(e,n),n}})},3744:function(t,e){"use strict";e.Z=(t,e)=>{const n=t.__vccOpts||t;for(const[r,o]of e)n[r]=o;return n}},3907:function(t,e,n){"use strict";n.d(e,{MT:function(){return et},oR:function(){return v}});var r=n(6252),o=n(2262);function i(){return s().__VUE_DEVTOOLS_GLOBAL_HOOK__}function s(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}}const a="function"===typeof Proxy,c="devtools-plugin:setup",u="plugin:settings:set";let l,f;function h(){var t;return void 0!==l||("undefined"!==typeof window&&window.performance?(l=!0,f=window.performance):"undefined"!==typeof n.g&&(null===(t=n.g.perf_hooks)||void 0===t?void 0:t.performance)?(l=!0,f=n.g.perf_hooks.performance):l=!1),l}function d(){return h()?f.now():Date.now()}class p{constructor(t,e){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=e;const n={};if(t.settings)for(const s in t.settings){const e=t.settings[s];n[s]=e.defaultValue}const r=`__vue-devtools-plugin-settings__${t.id}`;let o=Object.assign({},n);try{const t=localStorage.getItem(r),e=JSON.parse(t);Object.assign(o,e)}catch(i){}this.fallbacks={getSettings(){return o},setSettings(t){try{localStorage.setItem(r,JSON.stringify(t))}catch(i){}o=t},now(){return d()}},e&&e.on(u,((t,e)=>{t===this.plugin.id&&this.fallbacks.setSettings(e)})),this.proxiedOn=new Proxy({},{get:(t,e)=>this.target?this.target.on[e]:(...t)=>{this.onQueue.push({method:e,args:t})}}),this.proxiedTarget=new Proxy({},{get:(t,e)=>this.target?this.target[e]:"on"===e?this.proxiedOn:Object.keys(this.fallbacks).includes(e)?(...t)=>(this.targetQueue.push({method:e,args:t,resolve:()=>{}}),this.fallbacks[e](...t)):(...t)=>new Promise((n=>{this.targetQueue.push({method:e,args:t,resolve:n})}))})}async setRealTarget(t){this.target=t;for(const e of this.onQueue)this.target.on[e.method](...e.args);for(const e of this.targetQueue)e.resolve(await this.target[e.method](...e.args))}}function m(t,e){const n=t,r=s(),o=i(),u=a&&n.enableEarlyProxy;if(!o||!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&u){const t=u?new p(n,o):null,i=r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[];i.push({pluginDescriptor:n,setupFn:e,proxy:t}),t&&e(t.proxiedTarget)}else o.emit(c,t,e)}
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */
var g="store";function v(t){return void 0===t&&(t=null),(0,r.f3)(null!==t?t:g)}function y(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function b(t){return null!==t&&"object"===typeof t}function _(t){return t&&"function"===typeof t.then}function w(t,e){return function(){return t(e)}}function E(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function S(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;C(t,n,[],t._modules.root,!0),k(t,n,e)}function k(t,e,n){var r=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,s={};y(i,(function(e,n){s[n]=w(e,t),Object.defineProperty(t.getters,n,{get:function(){return s[n]()},enumerable:!0})})),t._state=(0,o.qj)({data:e}),t.strict&&R(t),r&&n&&t._withCommit((function(){r.data=null}))}function C(t,e,n,r,o){var i=!n.length,s=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[s],t._modulesNamespaceMap[s]=r),!i&&!o){var a=P(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){a[c]=r.state}))}var u=r.context=I(t,s,n);r.forEachMutation((function(e,n){var r=s+n;T(t,r,e,u)})),r.forEachAction((function(e,n){var r=e.root?n:s+n,o=e.handler||e;O(t,r,o,u)})),r.forEachGetter((function(e,n){var r=s+n;A(t,r,e,u)})),r.forEachChild((function(r,i){C(t,e,n.concat(i),r,o)}))}function I(t,e,n){var r=""===e,o={dispatch:r?t.dispatch:function(n,r,o){var i=D(n,r,o),s=i.payload,a=i.options,c=i.type;return a&&a.root||(c=e+c),t.dispatch(c,s)},commit:r?t.commit:function(n,r,o){var i=D(n,r,o),s=i.payload,a=i.options,c=i.type;a&&a.root||(c=e+c),t.commit(c,s,a)}};return Object.defineProperties(o,{getters:{get:r?function(){return t.getters}:function(){return x(t,e)}},state:{get:function(){return P(t.state,n)}}}),o}function x(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(o){if(o.slice(0,r)===e){var i=o.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[o]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function T(t,e,n,r){var o=t._mutations[e]||(t._mutations[e]=[]);o.push((function(e){n.call(t,r.state,e)}))}function O(t,e,n,r){var o=t._actions[e]||(t._actions[e]=[]);o.push((function(e){var o=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return _(o)||(o=Promise.resolve(o)),t._devtoolHook?o.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):o}))}function A(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function R(t){(0,r.YP)((function(){return t._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function P(t,e){return e.reduce((function(t,e){return t[e]}),t)}function D(t,e,n){return b(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var N="vuex bindings",F="vuex:mutations",L="vuex:actions",M="vuex",j=0;function V(t,e){m({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[N]},(function(n){n.addTimelineLayer({id:F,label:"Vuex Mutations",color:$}),n.addTimelineLayer({id:L,label:"Vuex Actions",color:$}),n.addInspector({id:M,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===t&&n.inspectorId===M)if(n.filter){var r=[];G(r,e._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[z(e._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===t&&n.inspectorId===M){var r=n.nodeId;x(e,r),n.state=K(W(e._modules,r),"root"===r?e.getters:e._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===t&&n.inspectorId===M){var r=n.nodeId,o=n.path;"root"!==r&&(o=r.split("/").filter(Boolean).concat(o)),e._withCommit((function(){n.set(e._state.data,o,n.state.value)}))}})),e.subscribe((function(t,e){var r={};t.payload&&(r.payload=t.payload),r.state=e,n.notifyComponentUpdate(),n.sendInspectorTree(M),n.sendInspectorState(M),n.addTimelineEvent({layerId:F,event:{time:Date.now(),title:t.type,data:r}})})),e.subscribeAction({before:function(t,e){var r={};t.payload&&(r.payload=t.payload),t._id=j++,t._time=Date.now(),r.state=e,n.addTimelineEvent({layerId:L,event:{time:t._time,title:t.type,groupId:t._id,subtitle:"start",data:r}})},after:function(t,e){var r={},o=Date.now()-t._time;r.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},t.payload&&(r.payload=t.payload),r.state=e,n.addTimelineEvent({layerId:L,event:{time:Date.now(),title:t.type,groupId:t._id,subtitle:"end",data:r}})}})}))}var $=8702998,U=6710886,B=16777215,q={label:"namespaced",textColor:B,backgroundColor:U};function H(t){return t&&"root"!==t?t.split("/").slice(-2,-1)[0]:"Root"}function z(t,e){return{id:e||"root",label:H(e),tags:t.namespaced?[q]:[],children:Object.keys(t._children).map((function(n){return z(t._children[n],e+n+"/")}))}}function G(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[q]:[]}),Object.keys(e._children).forEach((function(o){G(t,e._children[o],n,r+o+"/")}))}function K(t,e,n){e="root"===n?e:e[n];var r=Object.keys(e),o={state:Object.keys(t.state).map((function(e){return{key:e,editable:!0,value:t.state[e]}}))};if(r.length){var i=J(e);o.getters=Object.keys(i).map((function(t){return{key:t.endsWith("/")?H(t):t,editable:!1,value:Y((function(){return i[t]}))}}))}return o}function J(t){var e={};return Object.keys(t).forEach((function(n){var r=n.split("/");if(r.length>1){var o=e,i=r.pop();r.forEach((function(t){o[t]||(o[t]={_custom:{value:{},display:t,tooltip:"Module",abstract:!0}}),o=o[t]._custom.value})),o[i]=Y((function(){return t[n]}))}else e[n]=Y((function(){return t[n]}))})),e}function W(t,e){var n=e.split("/").filter((function(t){return t}));return n.reduce((function(t,r,o){var i=t[r];if(!i)throw new Error('Missing module "'+r+'" for path "'+e+'".');return o===n.length-1?i:i._children}),"root"===e?t:t.root._children)}function Y(t){try{return t()}catch(e){return e}}var Q=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},Z={namespaced:{configurable:!0}};Z.namespaced.get=function(){return!!this._rawModule.namespaced},Q.prototype.addChild=function(t,e){this._children[t]=e},Q.prototype.removeChild=function(t){delete this._children[t]},Q.prototype.getChild=function(t){return this._children[t]},Q.prototype.hasChild=function(t){return t in this._children},Q.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},Q.prototype.forEachChild=function(t){y(this._children,t)},Q.prototype.forEachGetter=function(t){this._rawModule.getters&&y(this._rawModule.getters,t)},Q.prototype.forEachAction=function(t){this._rawModule.actions&&y(this._rawModule.actions,t)},Q.prototype.forEachMutation=function(t){this._rawModule.mutations&&y(this._rawModule.mutations,t)},Object.defineProperties(Q.prototype,Z);var X=function(t){this.register([],t,!1)};function tt(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;tt(t.concat(r),e.getChild(r),n.modules[r])}}X.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},X.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},X.prototype.update=function(t){tt([],this.root,t)},X.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var o=new Q(e,n);if(0===t.length)this.root=o;else{var i=this.get(t.slice(0,-1));i.addChild(t[t.length-1],o)}e.modules&&y(e.modules,(function(e,o){r.register(t.concat(o),e,n)}))},X.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],r=e.getChild(n);r&&r.runtime&&e.removeChild(n)},X.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};function et(t){return new nt(t)}var nt=function(t){var e=this;void 0===t&&(t={});var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1);var o=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new X(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=o;var i=this,s=this,a=s.dispatch,c=s.commit;this.dispatch=function(t,e){return a.call(i,t,e)},this.commit=function(t,e,n){return c.call(i,t,e,n)},this.strict=r;var u=this._modules.root.state;C(this,u,[],this._modules.root),k(this,u),n.forEach((function(t){return t(e)}))},rt={state:{configurable:!0}};nt.prototype.install=function(t,e){t.provide(e||g,this),t.config.globalProperties.$store=this;var n=void 0!==this._devtools&&this._devtools;n&&V(t,this)},rt.state.get=function(){return this._state.data},rt.state.set=function(t){0},nt.prototype.commit=function(t,e,n){var r=this,o=D(t,e,n),i=o.type,s=o.payload,a=(o.options,{type:i,payload:s}),c=this._mutations[i];c&&(this._withCommit((function(){c.forEach((function(t){t(s)}))})),this._subscribers.slice().forEach((function(t){return t(a,r.state)})))},nt.prototype.dispatch=function(t,e){var n=this,r=D(t,e),o=r.type,i=r.payload,s={type:o,payload:i},a=this._actions[o];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(s,n.state)}))}catch(u){0}var c=a.length>1?Promise.all(a.map((function(t){return t(i)}))):a[0](i);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(s,n.state)}))}catch(u){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(s,n.state,t)}))}catch(u){0}e(t)}))}))}},nt.prototype.subscribe=function(t,e){return E(t,this._subscribers,e)},nt.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return E(n,this._actionSubscribers,e)},nt.prototype.watch=function(t,e,n){var o=this;return(0,r.YP)((function(){return t(o.state,o.getters)}),e,Object.assign({},n))},nt.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._state.data=t}))},nt.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),C(this,this.state,t,this._modules.get(t),n.preserveState),k(this,this.state)},nt.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=P(e.state,t.slice(0,-1));delete n[t[t.length-1]]})),S(this)},nt.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},nt.prototype.hotUpdate=function(t){this._modules.update(t),S(this,!0)},nt.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(nt.prototype,rt);st((function(t,e){var n={};return ot(e).forEach((function(e){var r=e.key,o=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=at(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof o?o.call(this,e,n):e[o]},n[r].vuex=!0})),n})),st((function(t,e){var n={};return ot(e).forEach((function(e){var r=e.key,o=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var i=at(this.$store,"mapMutations",t);if(!i)return;r=i.context.commit}return"function"===typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}})),n})),st((function(t,e){var n={};return ot(e).forEach((function(e){var r=e.key,o=e.val;o=t+o,n[r]=function(){if(!t||at(this.$store,"mapGetters",t))return this.$store.getters[o]},n[r].vuex=!0})),n})),st((function(t,e){var n={};return ot(e).forEach((function(e){var r=e.key,o=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var i=at(this.$store,"mapActions",t);if(!i)return;r=i.context.dispatch}return"function"===typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}})),n}));function ot(t){return it(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function it(t){return Array.isArray(t)||b(t)}function st(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function at(t,e,n){var r=t._modulesNamespaceMap[n];return r}},5816:function(t,e,n){"use strict";n.d(e,{Jn:function(){return mt},qX:function(){return ft},Xd:function(){return lt},Mq:function(){return vt},ZF:function(){return gt},KN:function(){return yt}});var r=n(8463),o=n(3333),i=n(4444);const s=(t,e)=>e.some((e=>t instanceof e));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const f=new WeakMap,h=new WeakMap,d=new WeakMap,p=new WeakMap,m=new WeakMap;function g(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{e(E(t.result)),r()},i=()=>{n(t.error),r()};t.addEventListener("success",o),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&f.set(e,t)})).catch((()=>{})),m.set(e,t),e}function v(t){if(h.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{e(),r()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)}));h.set(t,e)}let y={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return h.get(t);if("objectStoreNames"===e)return t.objectStoreNames||d.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function b(t){y=t(y)}function _(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(S(this),e),E(f.get(this))}:function(...e){return E(t.apply(S(this),e))}:function(e,...n){const r=t.call(S(this),e,...n);return d.set(r,e.sort?e.sort():[e]),E(r)}}function w(t){return"function"===typeof t?_(t):(t instanceof IDBTransaction&&v(t),s(t,u())?new Proxy(t,y):t)}function E(t){if(t instanceof IDBRequest)return g(t);if(p.has(t))return p.get(t);const e=w(t);return e!==t&&(p.set(t,e),m.set(e,t)),e}const S=t=>m.get(t);function k(t,e,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const s=indexedDB.open(t,e),a=E(s);return r&&s.addEventListener("upgradeneeded",(t=>{r(E(s.result),t.oldVersion,t.newVersion,E(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),a.then((t=>{i&&t.addEventListener("close",(()=>i())),o&&t.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),a}const C=["get","getKey","getAll","getAllKeys","count"],I=["put","add","delete","clear"],x=new Map;function T(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(x.get(e))return x.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,o=I.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!C.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,o?"readwrite":"readonly");let s=i.store;return r&&(s=s.index(e.shift())),(await Promise.all([s[n](...e),o&&i.done]))[0]};return x.set(e,i),i}b((t=>({...t,get:(e,n,r)=>T(e,n)||t.get(e,n,r),has:(e,n)=>!!T(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class O{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(A(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function A(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const R="@firebase/app",P="0.9.4",D=new o.Yd("@firebase/app"),N="@firebase/app-compat",F="@firebase/analytics-compat",L="@firebase/analytics",M="@firebase/app-check-compat",j="@firebase/app-check",V="@firebase/auth",$="@firebase/auth-compat",U="@firebase/database",B="@firebase/database-compat",q="@firebase/functions",H="@firebase/functions-compat",z="@firebase/installations",G="@firebase/installations-compat",K="@firebase/messaging",J="@firebase/messaging-compat",W="@firebase/performance",Y="@firebase/performance-compat",Q="@firebase/remote-config",Z="@firebase/remote-config-compat",X="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",rt="firebase",ot="9.17.2",it="[DEFAULT]",st={[R]:"fire-core",[N]:"fire-core-compat",[L]:"fire-analytics",[F]:"fire-analytics-compat",[j]:"fire-app-check",[M]:"fire-app-check-compat",[V]:"fire-auth",[$]:"fire-auth-compat",[U]:"fire-rtdb",[B]:"fire-rtdb-compat",[q]:"fire-fn",[H]:"fire-fn-compat",[z]:"fire-iid",[G]:"fire-iid-compat",[K]:"fire-fcm",[J]:"fire-fcm-compat",[W]:"fire-perf",[Y]:"fire-perf-compat",[Q]:"fire-rc",[Z]:"fire-rc-compat",[X]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[rt]:"fire-js-all"},at=new Map,ct=new Map;function ut(t,e){try{t.container.addComponent(e)}catch(n){D.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lt(t){const e=t.name;if(ct.has(e))return D.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())ut(n,t);return!0}function ft(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ht={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},dt=new i.LL("app","Firebase",ht);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=ot;function gt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const o=Object.assign({name:it,automaticDataCollectionEnabled:!1},e),s=o.name;if("string"!==typeof s||!s)throw dt.create("bad-app-name",{appName:String(s)});if(n||(n=(0,i.aH)()),!n)throw dt.create("no-options");const a=at.get(s);if(a){if((0,i.vZ)(n,a.options)&&(0,i.vZ)(o,a.config))return a;throw dt.create("duplicate-app",{appName:s})}const c=new r.H0(s);for(const r of ct.values())c.addComponent(r);const u=new pt(n,o,c);return at.set(s,u),u}function vt(t=it){const e=at.get(t);if(!e&&t===it)return gt();if(!e)throw dt.create("no-app",{appName:t});return e}function yt(t,e,n){var o;let i=null!==(o=st[t])&&void 0!==o?o:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const t=[`Unable to register library "${i}" with version "${e}":`];return s&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void D.warn(t.join(" "))}lt(new r.wA(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bt="firebase-heartbeat-database",_t=1,wt="firebase-heartbeat-store";let Et=null;function St(){return Et||(Et=k(bt,_t,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(wt)}}}).catch((t=>{throw dt.create("idb-open",{originalErrorMessage:t.message})}))),Et}async function kt(t){try{const e=await St();return e.transaction(wt).objectStore(wt).get(It(t))}catch(e){if(e instanceof i.ZR)D.warn(e.message);else{const t=dt.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});D.warn(t.message)}}}async function Ct(t,e){try{const n=await St(),r=n.transaction(wt,"readwrite"),o=r.objectStore(wt);return await o.put(e,It(t)),r.done}catch(n){if(n instanceof i.ZR)D.warn(n.message);else{const t=dt.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});D.warn(t.message)}}}function It(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt=1024,Tt=2592e6;class Ot{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Pt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=At();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=Tt})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=At(),{heartbeatsToSend:e,unsentEntries:n}=Rt(this._heartbeatsCache.heartbeats),r=(0,i.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function At(){const t=new Date;return t.toISOString().substring(0,10)}function Rt(t,e=xt){const n=[];let r=t.slice();for(const o of t){const t=n.find((t=>t.agent===o.agent));if(t){if(t.dates.push(o.date),Dt(n)>e){t.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Dt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Pt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.hl)()&&(0,i.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await kt(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ct(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ct(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Dt(t){return(0,i.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(t){lt(new r.wA("platform-logger",(t=>new O(t)),"PRIVATE")),lt(new r.wA("heartbeat",(t=>new Ot(t)),"PRIVATE")),yt(R,P,t),yt(R,P,"esm2017"),yt("fire-js","")}Nt("")},8463:function(t,e,n){"use strict";n.d(e,{H0:function(){return u},wA:function(){return o}});var r=n(4444);class o{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(r)return null;throw o}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:i})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=i){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=i){return this.instances.has(t)}getOptions(t=i){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[o,i]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(o);n===t&&i.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),o=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;o.add(t),this.onInitCallbacks.set(r,o);const i=this.instances.get(r);return i&&t(i,r),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const o of n)try{o(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=i){return this.component?this.component.multipleInstances?t:i:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===i?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new s(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},3333:function(t,e,n){"use strict";n.d(e,{Yd:function(){return u},in:function(){return o}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var o;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(o||(o={}));const i={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},s=o.INFO,a={[o.DEBUG]:"log",[o.VERBOSE]:"log",[o.INFO]:"info",[o.WARN]:"warn",[o.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),o=a[e];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[o](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in o))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?i[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,o.DEBUG,...t),this._logHandler(this,o.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,o.VERBOSE,...t),this._logHandler(this,o.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,o.INFO,...t),this._logHandler(this,o.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,o.WARN,...t),this._logHandler(this,o.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,o.ERROR,...t),this._logHandler(this,o.ERROR,...t)}}},3977:function(t,e,n){"use strict";n.d(e,{ZF:function(){return r.ZF}});var r=n(5816),o="firebase",i="9.17.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(o,i,"app")},7350:function(t,e,n){"use strict";n.d(e,{ET:function(){return Nn},hJ:function(){return nn},oe:function(){return Dn},JU:function(){return rn},PL:function(){return Rn},ad:function(){return Qe},pl:function(){return Pn}});var r=n(5816),o=n(8463),i=n(3333),s=n(4444);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}a.UNAUTHENTICATED=new a(null),a.GOOGLE_CREDENTIALS=new a("google-credentials-uid"),a.FIRST_PARTY=new a("first-party-uid"),a.MOCK_USER=new a("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let c="9.17.2";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u=new i.Yd("@firebase/firestore");function l(t,...e){if(u.logLevel<=i["in"].DEBUG){const n=e.map(d);u.debug(`Firestore (${c}): ${t}`,...n)}}function f(t,...e){if(u.logLevel<=i["in"].ERROR){const n=e.map(d);u.error(`Firestore (${c}): ${t}`,...n)}}function h(t,...e){if(u.logLevel<=i["in"].WARN){const n=e.map(d);u.warn(`Firestore (${c}): ${t}`,...n)}}function d(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(t="Unexpected state"){const e=`FIRESTORE (${c}) INTERNAL ASSERTION FAILED: `+t;throw f(e),new Error(e)}function m(t,e){t||p()}function g(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v="ok",y="cancelled",b="unknown",_="invalid-argument",w="deadline-exceeded",E="not-found",S="permission-denied",k="unauthenticated",C="resource-exhausted",I="failed-precondition",x="aborted",T="out-of-range",O="unimplemented",A="internal",R="unavailable";class P extends s.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class D{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class N{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(a.UNAUTHENTICATED)))}shutdown(){}}class F{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class L{constructor(t){this.auth=null,t.onInit((t=>{this.auth=t}))}getToken(){return this.auth?this.auth.getToken().then((t=>t?(m("string"==typeof t.accessToken),new D(t.accessToken,new a(this.auth.getUid()))):null)):Promise.resolve(null)}invalidateToken(){}start(t,e){}shutdown(){}}class M{constructor(t,e,n,r){this.t=t,this.i=e,this.o=n,this.u=r,this.type="FirstParty",this.user=a.FIRST_PARTY,this.h=new Map}l(){return this.u?this.u():(m(!("object"!=typeof this.t||null===this.t||!this.t.auth||!this.t.auth.getAuthHeaderValueForFirstParty)),this.t.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.h.set("X-Goog-AuthUser",this.i);const t=this.l();return t&&this.h.set("Authorization",t),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}}class j{constructor(t,e,n,r){this.t=t,this.i=e,this.o=n,this.u=r}getToken(){return Promise.resolve(new M(this.t,this.i,this.o,this.u))}start(t,e){t.enqueueRetryable((()=>e(a.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class V{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ${constructor(t){this.m=t,this.appCheck=null,t.onInit((t=>{this.appCheck=t}))}getToken(){return this.appCheck?this.appCheck.getToken().then((t=>t?(m("string"==typeof t.token),new V(t.token)):null)):Promise.resolve(null)}invalidateToken(){}start(t,e){}shutdown(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t,e,n,r,o,i,s,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=o,this.forceLongPolling=i,this.autoDetectLongPolling=s,this.useFetchStreams=a}}class B{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new B("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof B&&t.projectId===this.projectId&&t.database===this.database}}class q{constructor(t,e,n){void 0===e?e=0:e>t.length&&p(),void 0===n?n=t.length-e:n>t.length-e&&p(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===q.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof q?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),o=e.get(r);if(n<o)return-1;if(n>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class H extends q{construct(t,e,n){return new H(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new P(_,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new H(e)}static emptyPath(){return new H([])}}const z=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class G extends q{construct(t,e,n){return new G(t,e,n)}static isValidIdentifier(t){return z.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),G.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new G(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const o=()=>{if(0===n.length)throw new P(_,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new P(_,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new P(_,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(i=!i,r++):"."!==e||i?(n+=e,r++):(o(),r++)}if(o(),i)throw new P(_,"Unterminated ` in path: "+t);return new G(e)}static emptyPath(){return new G([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(t){this.path=t}static fromPath(t){return new K(H.fromString(t))}static fromName(t){return new K(H.fromString(t).popFirst(5))}static empty(){return new K(H.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===H.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return H.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new K(new H(t.slice()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t,e,n){if(!n)throw new P(_,`Function ${t}() cannot be called with an empty ${e}.`)}function W(t){if(!K.isDocumentKey(t))throw new P(_,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Y(t){if(K.isDocumentKey(t))throw new P(_,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Q(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":p()}function Z(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new P(_,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Q(t);throw new P(_,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function X(t){return null==t}function tt(t){return 0===t&&1/t==-1/0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt,rt;function ot(t){if(void 0===t)return f("RPC_ERROR","HTTP error has no status"),b;switch(t){case 200:return v;case 400:return I;case 401:return k;case 403:return S;case 404:return E;case 409:return x;case 416:return T;case 429:return C;case 499:return y;case 500:return b;case 501:return O;case 503:return R;case 504:return w;default:return t>=200&&t<300?v:t>=400&&t<500?I:t>=500&&t<600?A:b}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(rt=nt||(nt={}))[rt.OK=0]="OK",rt[rt.CANCELLED=1]="CANCELLED",rt[rt.UNKNOWN=2]="UNKNOWN",rt[rt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",rt[rt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",rt[rt.NOT_FOUND=5]="NOT_FOUND",rt[rt.ALREADY_EXISTS=6]="ALREADY_EXISTS",rt[rt.PERMISSION_DENIED=7]="PERMISSION_DENIED",rt[rt.UNAUTHENTICATED=16]="UNAUTHENTICATED",rt[rt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",rt[rt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",rt[rt.ABORTED=10]="ABORTED",rt[rt.OUT_OF_RANGE=11]="OUT_OF_RANGE",rt[rt.UNIMPLEMENTED=12]="UNIMPLEMENTED",rt[rt.INTERNAL=13]="INTERNAL",rt[rt.UNAVAILABLE=14]="UNAVAILABLE",rt[rt.DATA_LOSS=15]="DATA_LOSS";class it extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.p=e+"://"+t.host,this.g="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get v(){return!1}A(t,e,n,r,o){const i=this.I(t,e);l("RestConnection","Sending: ",i,n);const s={};return this.T(s,r,o),this.R(t,i,s,n).then((t=>(l("RestConnection","Received: ",t),t)),(e=>{throw h("RestConnection",`${t} failed with error: `,e,"url: ",i,"request:",n),e}))}P(t,e,n,r,o,i){return this.A(t,e,n,r,o)}T(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+c,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}I(t,e){const n=et[t];return`${this.p}/v1/${e}:${n}`}}{constructor(t,e){super(t),this.V=e}$(t,e){throw new Error("Not supported by FetchConnection")}async R(t,e,n,r){var o;const i=JSON.stringify(r);let s;try{s=await this.V(e,{method:"POST",headers:n,body:i})}catch(t){const e=t;throw new P(ot(e.status),"Request failed with error: "+e.statusText)}if(!s.ok){let t=await s.json();Array.isArray(t)&&(t=t[0]);const e=null===(o=null==t?void 0:t.error)||void 0===o?void 0:o.message;throw new P(ot(s.status),`Request failed with error: ${null!=e?e:s.statusText}`)}return s.json()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function st(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{static F(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=st(40);for(let o=0;o<r.length;++o)n.length<20&&r[o]<e&&(n+=t.charAt(r[o]%t.length))}return n}}function ct(t,e){return t<e?-1:t>e?1:0}function ut(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ft(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw t instanceof DOMException?new ht("Invalid base64 string: "+t):t}}(t);return new dt(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new dt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ct(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const pt=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mt(t){if(m(!!t),"string"==typeof t){let e=0;const n=pt.exec(t);if(m(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:gt(t.seconds),nanos:gt(t.nanos)}}function gt(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function vt(t){return"string"==typeof t?dt.fromBase64String(t):dt.fromUint8Array(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new P(_,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new P(_,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new P(_,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new P(_,"Timestamp seconds out of range: "+t)}static now(){return yt.fromMillis(Date.now())}static fromDate(t){return yt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new yt(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ct(this.nanoseconds,t.nanoseconds):ct(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function _t(t){const e=t.mapValue.fields.__previous_value__;return bt(e)?_t(e):e}function wt(t){const e=mt(t.mapValue.fields.__local_write_time__.timestampValue);return new yt(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et={fields:{__type__:{stringValue:"__max__"}}};function St(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?bt(t)?4:function(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)?9007199254740991:10:p()}function kt(t,e){if(t===e)return!0;const n=St(t);if(n!==St(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return wt(t).isEqual(wt(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=mt(t.timestampValue),r=mt(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return vt(t.bytesValue).isEqual(vt(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return gt(t.geoPointValue.latitude)===gt(e.geoPointValue.latitude)&&gt(t.geoPointValue.longitude)===gt(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return gt(t.integerValue)===gt(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=gt(t.doubleValue),r=gt(e.doubleValue);return n===r?tt(n)===tt(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return ut(t.arrayValue.values||[],e.arrayValue.values||[],kt);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(lt(n)!==lt(r))return!1;for(const o in n)if(n.hasOwnProperty(o)&&(void 0===r[o]||!kt(n[o],r[o])))return!1;return!0}(t,e);default:return p()}}function Ct(t,e){return void 0!==(t.values||[]).find((t=>kt(t,e)))}function It(t,e){if(t===e)return 0;const n=St(t),r=St(e);if(n!==r)return ct(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ct(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=gt(t.integerValue||t.doubleValue),r=gt(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return xt(t.timestampValue,e.timestampValue);case 4:return xt(wt(t),wt(e));case 5:return ct(t.stringValue,e.stringValue);case 6:return function(t,e){const n=vt(t),r=vt(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let o=0;o<n.length&&o<r.length;o++){const t=ct(n[o],r[o]);if(0!==t)return t}return ct(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=ct(gt(t.latitude),gt(e.latitude));return 0!==n?n:ct(gt(t.longitude),gt(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let o=0;o<n.length&&o<r.length;++o){const t=It(n[o],r[o]);if(t)return t}return ct(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Et&&e===Et)return 0;if(t===Et)return 1;if(e===Et)return-1;const n=t.fields||{},r=Object.keys(n),o=e.fields||{},i=Object.keys(o);r.sort(),i.sort();for(let s=0;s<r.length&&s<i.length;++s){const t=ct(r[s],i[s]);if(0!==t)return t;const e=It(n[r[s]],o[i[s]]);if(0!==e)return e}return ct(r.length,i.length)}(t.mapValue,e.mapValue);default:throw p()}}function xt(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return ct(t,e);const n=mt(t),r=mt(e),o=ct(n.seconds,r.seconds);return 0!==o?o:ct(n.nanos,r.nanos)}function Tt(t){return!!t&&"arrayValue"in t}function Ot(t){return!!t&&"nullValue"in t}function At(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Rt(t){return!!t&&"mapValue"in t}function Pt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ft(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Pt(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Pt(t.arrayValue.values[n]);return e}return Object.assign({},t)}class Dt{constructor(t,e){this.position=t,this.inclusive=e}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nt{}class Ft extends Nt{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Mt(t,e,n):"array-contains"===e?new Ut(t,n):"in"===e?new Bt(t,n):"not-in"===e?new qt(t,n):"array-contains-any"===e?new Ht(t,n):new Ft(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new jt(t,n):new Vt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(It(e,this.value)):null!==e&&St(this.value)===St(e)&&this.matchesComparison(It(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return p()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Lt extends Nt{constructor(t,e){super(),this.filters=t,this.op=e,this.S=null}static create(t,e){return new Lt(t,e)}matches(t){return"and"===this.op?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.S||(this.S=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.S}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.q((t=>t.isInequality()));return null!==t?t.field:null}q(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}class Mt extends Ft{constructor(t,e,n){super(t,e,n),this.key=K.fromName(n.referenceValue)}matches(t){const e=K.comparator(t.key,this.key);return this.matchesComparison(e)}}class jt extends Ft{constructor(t,e){super(t,"in",e),this.keys=$t("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Vt extends Ft{constructor(t,e){super(t,"not-in",e),this.keys=$t("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function $t(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>K.fromName(t.referenceValue)))}class Ut extends Ft{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Tt(e)&&Ct(e.arrayValue,this.value)}}class Bt extends Ft{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Ct(this.value.arrayValue,e)}}class qt extends Ft{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ct(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Ct(this.value.arrayValue,e)}}class Ht extends Ft{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Tt(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Ct(this.value.arrayValue,t)))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t,e="asc"){this.field=t,this.dir=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gt{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Gt(t)}static min(){return new Gt(new yt(0,0))}static max(){return new Gt(new yt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t,e){this.comparator=t,this.root=e||Wt.EMPTY}insert(t,e){return new Kt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Wt.BLACK,null,null))}remove(t){return new Kt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Wt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Jt(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Jt(this.root,t,this.comparator,!1)}getReverseIterator(){return new Jt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Jt(this.root,t,this.comparator,!0)}}class Jt{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&r&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(0===o){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Wt{constructor(t,e,n,r,o){this.key=t,this.value=e,this.color=null!=n?n:Wt.RED,this.left=null!=r?r:Wt.EMPTY,this.right=null!=o?o:Wt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,o){return new Wt(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=o?o:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const o=n(t,r.key);return r=o<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===o?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Wt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Wt.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw p();if(this.right.isRed())throw p();const t=this.left.check();if(t!==this.right.check())throw p();return t+(this.isRed()?0:1)}}Wt.EMPTY=null,Wt.RED=!0,Wt.BLACK=!1,Wt.EMPTY=new class{constructor(){this.size=0}get key(){throw p()}get value(){throw p()}get color(){throw p()}get left(){throw p()}get right(){throw p()}copy(t,e,n,r,o){return this}insert(t,e,n){return new Wt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yt{constructor(t){this.comparator=t,this.data=new Kt(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Qt(this.data.getIterator())}getIteratorFrom(t){return new Qt(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Yt))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Yt(this.comparator);return e.data=t,e}}class Qt{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(t){this.fields=t,t.sort(G.comparator)}static empty(){return new Zt([])}unionWith(t){let e=new Yt(G.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Zt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ut(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(t){this.value=t}static empty(){return new Xt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Rt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Pt(e)}setAll(t){let e=G.emptyPath(),n={},r=[];t.forEach(((t,o)=>{if(!e.isImmediateParentOf(o)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=o.popLast()}t?n[o.lastSegment()]=Pt(t):r.push(o.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,n,r)}delete(t){const e=this.field(t.popLast());Rt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return kt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Rt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){ft(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new Xt(Pt(this.value))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(t,e,n,r,o,i,s){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=o,this.data=i,this.documentState=s}static newInvalidDocument(t){return new te(t,0,Gt.min(),Gt.min(),Gt.min(),Xt.empty(),0)}static newFoundDocument(t,e,n,r){return new te(t,1,e,Gt.min(),n,r,0)}static newNoDocument(t,e){return new te(t,2,e,Gt.min(),Gt.min(),Xt.empty(),0)}static newUnknownDocument(t,e){return new te(t,3,e,Gt.min(),Gt.min(),Xt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Gt.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Xt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Gt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof te&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new te(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(t,e=null,n=[],r=[],o=null,i=null,s=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=o,this.startAt=i,this.endAt=s,this.O=null}}function ne(t,e=null,n=[],r=[],o=null,i=null,s=null){return new ee(t,e,n,r,o,i,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t,e=null,n=[],r=[],o=null,i="F",s=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=o,this.limitType=i,this.startAt=s,this.endAt=a,this.k=null,this.C=null,this.startAt,this.endAt}}function oe(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ie(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function se(t){const e=g(t);if(null===e.k){e.k=[];const t=ie(e),n=oe(e);if(null!==t&&null===n)t.isKeyField()||e.k.push(new zt(t)),e.k.push(new zt(G.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.k.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.k.push(new zt(G.keyField(),t))}}}return e.k}function ae(t){const e=g(t);if(!e.C)if("F"===e.limitType)e.C=ne(e.path,e.collectionGroup,se(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const o of se(e)){const e="desc"===o.dir?"asc":"desc";t.push(new zt(o.field,e))}const n=e.endAt?new Dt(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Dt(e.startAt.position,e.startAt.inclusive):null;e.C=ne(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.C}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ce(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!tt(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?function(t){return{integerValue:""+t}}(e):function(t,e){if(t.L){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:tt(e)?"-0":e}}(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(){this._=void 0}}class le extends ue{}class fe extends ue{constructor(t){super(),this.elements=t}}class he extends ue{constructor(t){super(),this.elements=t}}class de extends ue{constructor(t,e){super(),this.M=t,this.U=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new pe}static exists(t){return new pe(void 0,t)}static updateTime(t){return new pe(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}class me{}class ge extends me{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ve extends me{constructor(t,e,n,r,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}class ye extends me{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class be extends me{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),we=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),Ee=(()=>{const t={and:"AND",or:"OR"};return t})();class Se{constructor(t,e){this.databaseId=t,this.L=e}}function ke(t,e){return t.L?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ce(t,e){return t.L?e.toBase64():e.toUint8Array()}function Ie(t,e){return ke(t,e.toTimestamp())}function xe(t){return m(!!t),Gt.fromTimestamp(function(t){const e=mt(t);return new yt(e.seconds,e.nanos)}(t))}function Te(t,e){return function(t){return new H(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Oe(t,e){return Te(t.databaseId,e.path)}function Ae(t,e){const n=function(t){const e=H.fromString(t);return m(Be(e)),e}(e);if(n.get(1)!==t.databaseId.projectId)throw new P(_,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new P(_,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K((m((r=n).length>4&&"documents"===r.get(4)),r.popFirst(5)));var r}function Re(t,e){return Te(t.databaseId,e)}function Pe(t){return new H(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function De(t,e,n){return{name:Oe(t,e),fields:n.value.mapValue.fields}}function Ne(t,e){let n;if(e instanceof ge)n={update:De(t,e.key,e.value)};else if(e instanceof ye)n={delete:Oe(t,e.key)};else if(e instanceof ve)n={update:De(t,e.key,e.data),updateMask:Ue(e.fieldMask)};else{if(!(e instanceof be))return p();n={verify:Oe(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof le)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof fe)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof he)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof de)return{fieldPath:e.field.canonicalString(),increment:n.U};throw p()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Ie(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:p()}(t,e.precondition)),n}function Fe(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Re(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Re(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const o=function(t){if(0!==t.length)return $e(Lt.create(t,"and"))}(e.filters);o&&(n.structuredQuery.where=o);const i=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Ve(t.field),direction:Le(t.dir)}}(t)))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const s=function(t,e){return t.L||X(e)?e:{value:e}}(t,e.limit);var a;return null!==s&&(n.structuredQuery.limit=s),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Le(t){return _e[t]}function Me(t){return we[t]}function je(t){return Ee[t]}function Ve(t){return{fieldPath:t.canonicalString()}}function $e(t){return t instanceof Ft?function(t){if("=="===t.op){if(At(t.value))return{unaryFilter:{field:Ve(t.field),op:"IS_NAN"}};if(Ot(t.value))return{unaryFilter:{field:Ve(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(At(t.value))return{unaryFilter:{field:Ve(t.field),op:"IS_NOT_NAN"}};if(Ot(t.value))return{unaryFilter:{field:Ve(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ve(t.field),op:Me(t.op),value:t.value}}}(t):t instanceof Lt?function(t){const e=t.getFilters().map((t=>$e(t)));return 1===e.length?e[0]:{compositeFilter:{op:je(t.op),filters:e}}}(t):p()}function Ue(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Be(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t){return new Se(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class He extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.M=r,this.et=!1}nt(){if(this.et)throw new P(I,"The client has already been terminated.")}A(t,e,n){return this.nt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.A(t,e,n,r,o))).catch((t=>{throw"FirebaseError"===t.name?(t.code===k&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new P(b,t.toString())}))}P(t,e,n,r){return this.nt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,i])=>this.connection.P(t,e,n,o,i,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===k&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new P(b,t.toString())}))}terminate(){this.et=!0}}async function ze(t,e){const n=g(t),r=Pe(n.M)+"/documents",o={writes:e.map((t=>Ne(n.M,t)))};await n.A("Commit",r,o)}async function Ge(t,e){const n=g(t),r=Fe(n.M,ae(e));return(await n.P("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter((t=>!!t.document)).map((t=>function(t,e,n){const r=Ae(t,e.name),o=xe(e.updateTime),i=e.createTime?xe(e.createTime):Gt.min(),s=new Xt({mapValue:{fields:e.fields}}),a=te.newFoundDocument(r,o,i,s);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}(n.M,t.document,void 0)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ke=new Map;function Je(t){if(t._terminated)throw new P(I,"The client has already been terminated.");if(!Ke.has(t)){l("ComponentProvider","Initializing Datastore");const i=function(t){return new it(t,fetch.bind(null))}((e=t._databaseId,n=t.app.options.appId||"",r=t._persistenceKey,o=t._freezeSettings(),new U(e,n,r,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,o.useFetchStreams))),s=qe(t._databaseId),a=function(t,e,n,r){return new He(t,e,n,r)}(t._authCredentials,t._appCheckCredentials,i,s);Ke.set(t,a)}var e,n,r,o;
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return Ke.get(t)}class We{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new P(_,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new P(_,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,r){if(!0===e&&!0===r)throw new P(_,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new We({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new P(I,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new P(I,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new We(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new N;switch(t.type){case"gapi":const e=t.client;return new j(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new P(_,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Ke.get(t);e&&(l("ComponentProvider","Removing Datastore"),Ke.delete(t),e.terminate())}(this),Promise.resolve()}}function Qe(t,e){const n="object"==typeof t?t:(0,r.Mq)(),o="string"==typeof t?t:e||"(default)",i=(0,r.qX)(n,"firestore/lite").getImmediate({identifier:o});if(!i._initialized){const t=(0,s.P0)("firestore");t&&Ze(i,...t)}return i}function Ze(t,e,n,r={}){var o;const i=(t=Z(t,Ye))._getSettings();if("firestore.googleapis.com"!==i.host&&i.host!==e&&h("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=a.MOCK_USER;else{e=(0,s.Sg)(r.mockUserToken,null===(o=t._app)||void 0===o?void 0:o.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new P(_,"mockUserToken must contain 'sub' or 'user_id' field!");n=new a(i)}t._authCredentials=new F(new D(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xe{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new en(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Xe(this.firestore,t,this._key)}}class tn{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new tn(this.firestore,t,this._query)}}class en extends tn{constructor(t,e,n){super(t,e,new re(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Xe(this.firestore,null,new K(t))}withConverter(t){return new en(this.firestore,t,this._path)}}function nn(t,e,...n){if(t=(0,s.m9)(t),J("collection","path",e),t instanceof Ye){const r=H.fromString(e,...n);return Y(r),new en(t,null,r)}{if(!(t instanceof Xe||t instanceof en))throw new P(_,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(H.fromString(e,...n));return Y(r),new en(t.firestore,null,r)}}function rn(t,e,...n){if(t=(0,s.m9)(t),1===arguments.length&&(e=at.F()),J("doc","path",e),t instanceof Ye){const r=H.fromString(e,...n);return W(r),new Xe(t,null,new K(r))}{if(!(t instanceof Xe||t instanceof en))throw new P(_,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(H.fromString(e,...n));return W(r),new Xe(t.firestore,t instanceof en?t.converter:null,new K(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class on{constructor(t){this._byteString=t}static fromBase64String(t){try{return new on(dt.fromBase64String(t))}catch(t){throw new P(_,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new on(dt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new P(_,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new G(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class an{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new P(_,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new P(_,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ct(this._lat,t._lat)||ct(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=/^__.*__$/;class ln{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new ve(t,this.data,this.fieldMask,e,this.fieldTransforms):new ge(t,this.data,e,this.fieldTransforms)}}function fn(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw p()}}class hn{constructor(t,e,n,r,o,i){this.settings=t,this.databaseId=e,this.M=n,this.ignoreUndefinedProperties=r,void 0===o&&this.rt(),this.fieldTransforms=o||[],this.fieldMask=i||[]}get path(){return this.settings.path}get st(){return this.settings.st}it(t){return new hn(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ot(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.it({path:n,ut:!1});return r.ct(t),r}at(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.it({path:n,ut:!1});return r.rt(),r}ht(t){return this.it({path:void 0,ut:!0})}lt(t){return Sn(t,this.settings.methodName,this.settings.ft||!1,this.path,this.settings.dt)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}rt(){if(this.path)for(let t=0;t<this.path.length;t++)this.ct(this.path.get(t))}ct(t){if(0===t.length)throw this.lt("Document fields must not be empty");if(fn(this.st)&&un.test(t))throw this.lt('Document fields cannot begin and end with "__"')}}class dn{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.M=n||qe(t)}wt(t,e,n,r=!1){return new hn({st:t,methodName:e,dt:n,path:G.emptyPath(),ut:!1,ft:r},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function pn(t){const e=t._freezeSettings(),n=qe(t._databaseId);return new dn(t._databaseId,!!e.ignoreUndefinedProperties,n)}function mn(t,e,n,r,o,i={}){const s=t.wt(i.merge||i.mergeFields?2:0,e,n,o);bn("Data must be an object, but it was:",s,r);const a=vn(r,s);let c,u;if(i.merge)c=new Zt(s.fieldMask),u=s.fieldTransforms;else if(i.mergeFields){const t=[];for(const r of i.mergeFields){const o=_n(e,r,n);if(!s.contains(o))throw new P(_,`Field '${o}' is specified in your field mask but missing from your input data.`);kn(t,o)||t.push(o)}c=new Zt(t),u=s.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=s.fieldTransforms;return new ln(new Xt(a),c,u)}function gn(t,e){if(yn(t=(0,s.m9)(t)))return bn("Unsupported field value:",e,t),vn(t,e);if(t instanceof an)return function(t,e){if(!fn(e.st))throw e.lt(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.lt(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ut&&4!==e.st)throw e.lt("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const o of t){let t=gn(o,e.ht(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,s.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return ce(e.M,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=yt.fromDate(t);return{timestampValue:ke(e.M,n)}}if(t instanceof yt){const n=new yt(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:ke(e.M,n)}}if(t instanceof cn)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof on)return{bytesValue:Ce(e.M,t._byteString)};if(t instanceof Xe){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.lt(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Te(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.lt(`Unsupported field value: ${Q(t)}`)}(t,e)}function vn(t,e){const n={};return function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ft(t,((t,r)=>{const o=gn(r,e.ot(t));null!=o&&(n[t]=o)})),{mapValue:{fields:n}}}function yn(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof yt||t instanceof cn||t instanceof on||t instanceof Xe||t instanceof an)}function bn(t,e,n){if(!yn(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Q(n);throw"an object"===r?e.lt(t+" a custom object"):e.lt(t+" "+r)}}function _n(t,e,n){if((e=(0,s.m9)(e))instanceof sn)return e._internalPath;if("string"==typeof e)return En(t,e);throw Sn("Field path arguments must be of type string or ",t,!1,void 0,n)}const wn=new RegExp("[~\\*/\\[\\]]");function En(t,e,n){if(e.search(wn)>=0)throw Sn(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new sn(...e.split("."))._internalPath}catch(r){throw Sn(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Sn(t,e,n,r,o){const i=r&&!r.isEmpty(),s=void 0!==o;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||s)&&(c+=" (found",i&&(c+=` in field ${r}`),s&&(c+=` in document ${o}`),c+=")"),new P(_,a+t+c)}function kn(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(t,e,n,r,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Xe(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new In(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Tn("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class In extends Cn{data(){return super.data()}}class xn{constructor(t,e){this._docs=e,this.query=t}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return 0===this.docs.length}forEach(t,e){this._docs.forEach(t,e)}}function Tn(t,e){return"string"==typeof e?En(t,e):e instanceof sn?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function On(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class An extends class{convertValue(t,e="none"){switch(St(t)){case 0:return null;case 1:return t.booleanValue;case 2:return gt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(vt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw p()}}convertObject(t,e){const n={};return ft(t.fields,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new cn(gt(t.latitude),gt(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=_t(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(wt(t));default:return null}}convertTimestamp(t){const e=mt(t);return new yt(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=H.fromString(t);m(Be(n));const r=new B(n.get(1),n.get(3)),o=new K(n.popFirst(5));return r.isEqual(e)||f(`Document ${o} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}{constructor(t){super(),this.firestore=t}convertBytes(t){return new on(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Xe(this.firestore,null,e)}}function Rn(t){!function(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new P(O,"limitToLast() queries require specifying at least one orderBy() clause")}((t=Z(t,tn))._query);const e=Je(t.firestore),n=new An(t.firestore);return Ge(e,t._query).then((e=>{const r=e.map((e=>new In(t.firestore,n,e.key,e,t.converter)));return"L"===t._query.limitType&&r.reverse(),new xn(t,r)}))}function Pn(t,e,n){const r=On((t=Z(t,Xe)).converter,e,n),o=mn(pn(t.firestore),"setDoc",t._key,r,null!==t.converter,n);return ze(Je(t.firestore),[o.toMutation(t._key,pe.none())])}function Dn(t){return ze(Je((t=Z(t,Xe)).firestore),[new ye(t._key,pe.none())])}function Nn(t,e){const n=rn(t=Z(t,en)),r=On(t.converter,e),o=mn(pn(t.firestore),"addDoc",n._key,r,null!==n.converter,{});return ze(Je(t.firestore),[o.toMutation(n._key,pe.exists(!1))]).then((()=>n))}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t){c=t}(`${r.Jn}_lite`),(0,r.Xd)(new o.wA("firestore/lite",((t,{instanceIdentifier:e,options:n})=>{const r=t.getProvider("app").getImmediate(),o=new Ye(new L(t.getProvider("auth-internal")),new $(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new P(_,'"projectId" not provided in firebase.initializeApp.');return new B(t.options.projectId,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,e),r);return n&&o._setSettings(n),o}),"PUBLIC").setMultipleInstances(!0)),(0,r.KN)("firestore-lite","3.8.4",""),(0,r.KN)("firestore-lite","3.8.4","esm2017")},2201:function(t,e,n){"use strict";n.d(e,{PO:function(){return V},p7:function(){return ee},yj:function(){return oe}});var r=n(6252),o=n(2262);
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const i="undefined"!==typeof window;function s(t){return t.__esModule||"Module"===t[Symbol.toStringTag]}const a=Object.assign;function c(t,e){const n={};for(const r in e){const o=e[r];n[r]=l(o)?o.map(t):t(o)}return n}const u=()=>{},l=Array.isArray;const f=/\/$/,h=t=>t.replace(f,"");function d(t,e,n="/"){let r,o={},i="",s="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),o=t(i)),a>-1&&(r=r||e.slice(0,a),s=e.slice(a,e.length)),r=w(null!=r?r:e,n),{fullPath:r+(i&&"?")+i+s,path:r,query:o,hash:s}}function p(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function m(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function g(t,e,n){const r=e.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&v(e.matched[r],n.matched[o])&&y(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function v(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function y(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!b(t[n],e[n]))return!1;return!0}function b(t,e){return l(t)?_(t,e):l(e)?_(e,t):t===e}function _(t,e){return l(e)?t.length===e.length&&t.every(((t,n)=>t===e[n])):1===t.length&&t[0]===e}function w(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let o,i,s=n.length-1;for(o=0;o<r.length;o++)if(i=r[o],"."!==i){if(".."!==i)break;s>1&&s--}return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var E,S;(function(t){t["pop"]="pop",t["push"]="push"})(E||(E={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(S||(S={}));function k(t){if(!t)if(i){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),h(t)}const C=/^[^#]+#/;function I(t,e){return t.replace(C,"#")+e}function x(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const T=()=>({left:window.pageXOffset,top:window.pageYOffset});function O(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const o="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;e=x(o,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function A(t,e){const n=history.state?history.state.position-e:-1;return n+t}const R=new Map;function P(t,e){R.set(t,e)}function D(t){const e=R.get(t);return R.delete(t),e}let N=()=>location.protocol+"//"+location.host;function F(t,e){const{pathname:n,search:r,hash:o}=e,i=t.indexOf("#");if(i>-1){let e=o.includes(t.slice(i))?t.slice(i).length:1,n=o.slice(e);return"/"!==n[0]&&(n="/"+n),m(n,"")}const s=m(n,t);return s+r+o}function L(t,e,n,r){let o=[],i=[],s=null;const c=({state:i})=>{const a=F(t,location),c=n.value,u=e.value;let l=0;if(i){if(n.value=a,e.value=i,s&&s===c)return void(s=null);l=u?i.position-u.position:0}else r(a);o.forEach((t=>{t(n.value,c,{delta:l,type:E.pop,direction:l?l>0?S.forward:S.back:S.unknown})}))};function u(){s=n.value}function l(t){o.push(t);const e=()=>{const e=o.indexOf(t);e>-1&&o.splice(e,1)};return i.push(e),e}function f(){const{history:t}=window;t.state&&t.replaceState(a({},t.state,{scroll:T()}),"")}function h(){for(const t of i)t();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f),{pauseListeners:u,listen:l,destroy:h}}function M(t,e,n,r=!1,o=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:o?T():null}}function j(t){const{history:e,location:n}=window,r={value:F(t,n)},o={value:e.state};function i(r,i,s){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:N()+t+r;try{e[s?"replaceState":"pushState"](i,"",c),o.value=i}catch(u){console.error(u),n[s?"replace":"assign"](c)}}function s(t,n){const s=a({},e.state,M(o.value.back,t,o.value.forward,!0),n,{position:o.value.position});i(t,s,!0),r.value=t}function c(t,n){const s=a({},o.value,e.state,{forward:t,scroll:T()});i(s.current,s,!0);const c=a({},M(r.value,t,null),{position:s.position+1},n);i(t,c,!1),r.value=t}return o.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:c,replace:s}}function V(t){t=k(t);const e=j(t),n=L(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const o=a({location:"",base:t,go:r,createHref:I.bind(null,t)},e,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>e.state.value}),o}function $(t){return"string"===typeof t||t&&"object"===typeof t}function U(t){return"string"===typeof t||"symbol"===typeof t}const B={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},q=Symbol("");var H;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(H||(H={}));function z(t,e){return a(new Error,{type:t,[q]:!0},e)}function G(t,e){return t instanceof Error&&q in t&&(null==e||!!(t.type&e))}const K="[^/]+?",J={sensitive:!1,strict:!1,start:!0,end:!0},W=/[.+*?^${}()[\]/\\]/g;function Y(t,e){const n=a({},J,e),r=[];let o=n.start?"^":"";const i=[];for(const a of t){const t=a.length?[]:[90];n.strict&&!a.length&&(o+="/");for(let e=0;e<a.length;e++){const r=a[e];let s=40+(n.sensitive?.25:0);if(0===r.type)e||(o+="/"),o+=r.value.replace(W,"\\$&"),s+=40;else if(1===r.type){const{value:t,repeatable:n,optional:c,regexp:u}=r;i.push({name:t,repeatable:n,optional:c});const l=u||K;if(l!==K){s+=10;try{new RegExp(`(${l})`)}catch(f){throw new Error(`Invalid custom RegExp for param "${t}" (${l}): `+f.message)}}let h=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;e||(h=c&&a.length<2?`(?:/${h})`:"/"+h),c&&(h+="?"),o+=h,s+=20,c&&(s+=-8),n&&(s+=-20),".*"===l&&(s+=-50)}t.push(s)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const s=new RegExp(o,n.sensitive?"":"i");function c(t){const e=t.match(s),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",o=i[r-1];n[o.name]=t&&o.repeatable?t.split("/"):t}return n}function u(e){let n="",r=!1;for(const o of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const t of o)if(0===t.type)n+=t.value;else if(1===t.type){const{value:i,repeatable:s,optional:a}=t,c=i in e?e[i]:"";if(l(c)&&!s)throw new Error(`Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`);const u=l(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${i}"`);o.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:s,score:r,keys:i,parse:c,stringify:u}}function Q(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function Z(t,e){let n=0;const r=t.score,o=e.score;while(n<r.length&&n<o.length){const t=Q(r[n],o[n]);if(t)return t;n++}if(1===Math.abs(o.length-r.length)){if(X(r))return 1;if(X(o))return-1}return o.length-r.length}function X(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const tt={type:0,value:""},et=/[a-zA-Z0-9_]/;function nt(t){if(!t)return[[]];if("/"===t)return[[tt]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${u}": ${t}`)}let n=0,r=n;const o=[];let i;function s(){i&&o.push(i),i=[]}let a,c=0,u="",l="";function f(){u&&(0===n?i.push({type:0,value:u}):1===n||2===n||3===n?(i.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),u="")}function h(){u+=a}while(c<t.length)if(a=t[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&f(),s()):":"===a?(f(),n=1):h();break;case 4:h(),n=r;break;case 1:"("===a?n=2:et.test(a)?h():(f(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:f(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${u}"`),f(),s(),o}function rt(t,e,n){const r=Y(nt(t.path),n);const o=a(r,{record:t,parent:e,children:[],alias:[]});return e&&!o.record.aliasOf===!e.record.aliasOf&&e.children.push(o),o}function ot(t,e){const n=[],r=new Map;function o(t){return r.get(t)}function i(t,n,r){const o=!r,c=st(t);c.aliasOf=r&&r.record;const f=lt(e,t),h=[c];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)h.push(a({},c,{components:r?r.record.components:c.components,path:t,aliasOf:r?r.record:c}))}let d,p;for(const e of h){const{path:a}=e;if(n&&"/"!==a[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(a&&r+a)}if(d=rt(e,n,f),r?r.alias.push(d):(p=p||d,p!==d&&p.alias.push(d),o&&t.name&&!ct(d)&&s(t.name)),c.children){const t=c.children;for(let e=0;e<t.length;e++)i(t[e],d,r&&r.children[e])}r=r||d,(d.record.components&&Object.keys(d.record.components).length||d.record.name||d.record.redirect)&&l(d)}return p?()=>{s(p)}:u}function s(t){if(U(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(s),e.alias.forEach(s))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(s),t.alias.forEach(s))}}function c(){return n}function l(t){let e=0;while(e<n.length&&Z(t,n[e])>=0&&(t.record.path!==n[e].record.path||!ft(t,n[e])))e++;n.splice(e,0,t),t.record.name&&!ct(t)&&r.set(t.record.name,t)}function f(t,e){let o,i,s,c={};if("name"in t&&t.name){if(o=r.get(t.name),!o)throw z(1,{location:t});0,s=o.record.name,c=a(it(e.params,o.keys.filter((t=>!t.optional)).map((t=>t.name))),t.params&&it(t.params,o.keys.map((t=>t.name)))),i=o.stringify(c)}else if("path"in t)i=t.path,o=n.find((t=>t.re.test(i))),o&&(c=o.parse(i),s=o.record.name);else{if(o=e.name?r.get(e.name):n.find((t=>t.re.test(e.path))),!o)throw z(1,{location:t,currentLocation:e});s=o.record.name,c=a({},e.params,t.params),i=o.stringify(c)}const u=[];let l=o;while(l)u.unshift(l.record),l=l.parent;return{name:s,path:i,params:c,matched:u,meta:ut(u)}}return e=lt({strict:!1,end:!0,sensitive:!1},e),t.forEach((t=>i(t))),{addRoute:i,resolve:f,removeRoute:s,getRoutes:c,getRecordMatcher:o}}function it(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function st(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:at(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function at(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="boolean"===typeof n?n:n[r];return e}function ct(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ut(t){return t.reduce(((t,e)=>a(t,e.meta)),{})}function lt(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ft(t,e){return e.children.some((e=>e===t||ft(t,e)))}const ht=/#/g,dt=/&/g,pt=/\//g,mt=/=/g,gt=/\?/g,vt=/\+/g,yt=/%5B/g,bt=/%5D/g,_t=/%5E/g,wt=/%60/g,Et=/%7B/g,St=/%7C/g,kt=/%7D/g,Ct=/%20/g;function It(t){return encodeURI(""+t).replace(St,"|").replace(yt,"[").replace(bt,"]")}function xt(t){return It(t).replace(Et,"{").replace(kt,"}").replace(_t,"^")}function Tt(t){return It(t).replace(vt,"%2B").replace(Ct,"+").replace(ht,"%23").replace(dt,"%26").replace(wt,"`").replace(Et,"{").replace(kt,"}").replace(_t,"^")}function Ot(t){return Tt(t).replace(mt,"%3D")}function At(t){return It(t).replace(ht,"%23").replace(gt,"%3F")}function Rt(t){return null==t?"":At(t).replace(pt,"%2F")}function Pt(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function Dt(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let o=0;o<r.length;++o){const t=r[o].replace(vt," "),n=t.indexOf("="),i=Pt(n<0?t:t.slice(0,n)),s=n<0?null:Pt(t.slice(n+1));if(i in e){let t=e[i];l(t)||(t=e[i]=[t]),t.push(s)}else e[i]=s}return e}function Nt(t){let e="";for(let n in t){const r=t[n];if(n=Ot(n),null==r){void 0!==r&&(e+=(e.length?"&":"")+n);continue}const o=l(r)?r.map((t=>t&&Tt(t))):[r&&Tt(r)];o.forEach((t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))}))}return e}function Ft(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=l(r)?r.map((t=>null==t?null:""+t)):null==r?r:""+r)}return e}const Lt=Symbol(""),Mt=Symbol(""),jt=Symbol(""),Vt=Symbol(""),$t=Symbol("");function Ut(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Bt(t,e,n,r,o){const i=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise(((s,a)=>{const c=t=>{!1===t?a(z(4,{from:n,to:e})):t instanceof Error?a(t):$(t)?a(z(2,{from:e,to:t})):(i&&r.enterCallbacks[o]===i&&"function"===typeof t&&i.push(t),s())},u=t.call(r&&r.instances[o],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch((t=>a(t)))}))}function qt(t,e,n,r){const o=[];for(const i of t){0;for(const t in i.components){let a=i.components[t];if("beforeRouteEnter"===e||i.instances[t])if(Ht(a)){const s=a.__vccOpts||a,c=s[e];c&&o.push(Bt(c,n,r,i,t))}else{let c=a();0,o.push((()=>c.then((o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${i.path}"`));const a=s(o)?o.default:o;i.components[t]=a;const c=a.__vccOpts||a,u=c[e];return u&&Bt(u,n,r,i,t)()}))))}}}return o}function Ht(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function zt(t){const e=(0,r.f3)(jt),n=(0,r.f3)(Vt),i=(0,r.Fl)((()=>e.resolve((0,o.SU)(t.to)))),s=(0,r.Fl)((()=>{const{matched:t}=i.value,{length:e}=t,r=t[e-1],o=n.matched;if(!r||!o.length)return-1;const s=o.findIndex(v.bind(null,r));if(s>-1)return s;const a=Yt(t[e-2]);return e>1&&Yt(r)===a&&o[o.length-1].path!==a?o.findIndex(v.bind(null,t[e-2])):s})),a=(0,r.Fl)((()=>s.value>-1&&Wt(n.params,i.value.params))),c=(0,r.Fl)((()=>s.value>-1&&s.value===n.matched.length-1&&y(n.params,i.value.params)));function l(n={}){return Jt(n)?e[(0,o.SU)(t.replace)?"replace":"push"]((0,o.SU)(t.to)).catch(u):Promise.resolve()}return{route:i,href:(0,r.Fl)((()=>i.value.href)),isActive:a,isExactActive:c,navigate:l}}const Gt=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:zt,setup(t,{slots:e}){const n=(0,o.qj)(zt(t)),{options:i}=(0,r.f3)(jt),s=(0,r.Fl)((()=>({[Qt(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Qt(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const o=e.default&&e.default(n);return t.custom?o:(0,r.h)("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},o)}}}),Kt=Gt;function Jt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Wt(t,e){for(const n in e){const r=e[n],o=t[n];if("string"===typeof r){if(r!==o)return!1}else if(!l(o)||o.length!==r.length||r.some(((t,e)=>t!==o[e])))return!1}return!0}function Yt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Qt=(t,e,n)=>null!=t?t:null!=e?e:n,Zt=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=(0,r.f3)($t),s=(0,r.Fl)((()=>t.route||i.value)),c=(0,r.f3)(Mt,0),u=(0,r.Fl)((()=>{let t=(0,o.SU)(c);const{matched:e}=s.value;let n;while((n=e[t])&&!n.components)t++;return t})),l=(0,r.Fl)((()=>s.value.matched[u.value]));(0,r.JJ)(Mt,(0,r.Fl)((()=>u.value+1))),(0,r.JJ)(Lt,l),(0,r.JJ)($t,s);const f=(0,o.iH)();return(0,r.YP)((()=>[f.value,l.value,t.name]),(([t,e,n],[r,o,i])=>{e&&(e.instances[n]=t,o&&o!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=o.leaveGuards),e.updateGuards.size||(e.updateGuards=o.updateGuards))),!t||!e||o&&v(e,o)&&r||(e.enterCallbacks[n]||[]).forEach((e=>e(t)))}),{flush:"post"}),()=>{const o=s.value,i=t.name,c=l.value,u=c&&c.components[i];if(!u)return Xt(n.default,{Component:u,route:o});const h=c.props[i],d=h?!0===h?o.params:"function"===typeof h?h(o):h:null,p=t=>{t.component.isUnmounted&&(c.instances[i]=null)},m=(0,r.h)(u,a({},d,e,{onVnodeUnmounted:p,ref:f}));return Xt(n.default,{Component:m,route:o})||m}}});function Xt(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const te=Zt;function ee(t){const e=ot(t.routes,t),n=t.parseQuery||Dt,s=t.stringifyQuery||Nt,f=t.history;const h=Ut(),m=Ut(),v=Ut(),y=(0,o.XI)(B);let b=B;i&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const _=c.bind(null,(t=>""+t)),w=c.bind(null,Rt),S=c.bind(null,Pt);function k(t,n){let r,o;return U(t)?(r=e.getRecordMatcher(t),o=n):o=t,e.addRoute(o,r)}function C(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function I(){return e.getRoutes().map((t=>t.record))}function x(t){return!!e.getRecordMatcher(t)}function R(t,r){if(r=a({},r||y.value),"string"===typeof t){const o=d(n,t,r.path),i=e.resolve({path:o.path},r),s=f.createHref(o.fullPath);return a(o,i,{params:S(i.params),hash:Pt(o.hash),redirectedFrom:void 0,href:s})}let o;if("path"in t)o=a({},t,{path:d(n,t.path,r.path).path});else{const e=a({},t.params);for(const t in e)null==e[t]&&delete e[t];o=a({},t,{params:w(t.params)}),r.params=w(r.params)}const i=e.resolve(o,r),c=t.hash||"";i.params=_(S(i.params));const u=p(s,a({},t,{hash:xt(c),path:i.path})),l=f.createHref(u);return a({fullPath:u,hash:c,query:s===Nt?Ft(t.query):t.query||{}},i,{redirectedFrom:void 0,href:l})}function N(t){return"string"===typeof t?d(n,t,y.value.path):a({},t)}function F(t,e){if(b!==t)return z(8,{from:e,to:t})}function L(t){return V(t)}function M(t){return L(a(N(t),{replace:!0}))}function j(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=N(r):{path:r},r.params={}),a({query:t.query,hash:t.hash,params:"path"in r?{}:t.params},r)}}function V(t,e){const n=b=R(t),r=y.value,o=t.state,i=t.force,c=!0===t.replace,u=j(n);if(u)return V(a(N(u),{state:"object"===typeof u?a({},o,u.state):o,force:i,replace:c}),e||n);const l=n;let f;return l.redirectedFrom=e,!i&&g(s,r,n)&&(f=z(16,{to:l,from:r}),nt(r,r,!0,!1)),(f?Promise.resolve(f):q(l,r)).catch((t=>G(t)?G(t,2)?t:et(t):X(t,l,r))).then((t=>{if(t){if(G(t,2))return V(a({replace:c},N(t.to),{state:"object"===typeof t.to?a({},o,t.to.state):o,force:i}),e||l)}else t=K(l,r,!0,c,o);return H(l,r,t),t}))}function $(t,e){const n=F(t,e);return n?Promise.reject(n):Promise.resolve()}function q(t,e){let n;const[r,o,i]=re(t,e);n=qt(r.reverse(),"beforeRouteLeave",t,e);for(const a of r)a.leaveGuards.forEach((r=>{n.push(Bt(r,t,e))}));const s=$.bind(null,t,e);return n.push(s),ne(n).then((()=>{n=[];for(const r of h.list())n.push(Bt(r,t,e));return n.push(s),ne(n)})).then((()=>{n=qt(o,"beforeRouteUpdate",t,e);for(const r of o)r.updateGuards.forEach((r=>{n.push(Bt(r,t,e))}));return n.push(s),ne(n)})).then((()=>{n=[];for(const r of t.matched)if(r.beforeEnter&&!e.matched.includes(r))if(l(r.beforeEnter))for(const o of r.beforeEnter)n.push(Bt(o,t,e));else n.push(Bt(r.beforeEnter,t,e));return n.push(s),ne(n)})).then((()=>(t.matched.forEach((t=>t.enterCallbacks={})),n=qt(i,"beforeRouteEnter",t,e),n.push(s),ne(n)))).then((()=>{n=[];for(const r of m.list())n.push(Bt(r,t,e));return n.push(s),ne(n)})).catch((t=>G(t,8)?t:Promise.reject(t)))}function H(t,e,n){for(const r of v.list())r(t,e,n)}function K(t,e,n,r,o){const s=F(t,e);if(s)return s;const c=e===B,u=i?history.state:{};n&&(r||c?f.replace(t.fullPath,a({scroll:c&&u&&u.scroll},o)):f.push(t.fullPath,o)),y.value=t,nt(t,e,n,c),et()}let J;function W(){J||(J=f.listen(((t,e,n)=>{if(!at.listening)return;const r=R(t),o=j(r);if(o)return void V(a(o,{replace:!0}),r).catch(u);b=r;const s=y.value;i&&P(A(s.fullPath,n.delta),T()),q(r,s).catch((t=>G(t,12)?t:G(t,2)?(V(t.to,r).then((t=>{G(t,20)&&!n.delta&&n.type===E.pop&&f.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&f.go(-n.delta,!1),X(t,r,s)))).then((t=>{t=t||K(r,s,!1),t&&(n.delta&&!G(t,8)?f.go(-n.delta,!1):n.type===E.pop&&G(t,20)&&f.go(-1,!1)),H(r,s,t)})).catch(u)})))}let Y,Q=Ut(),Z=Ut();function X(t,e,n){et(t);const r=Z.list();return r.length?r.forEach((r=>r(t,e,n))):console.error(t),Promise.reject(t)}function tt(){return Y&&y.value!==B?Promise.resolve():new Promise(((t,e)=>{Q.add([t,e])}))}function et(t){return Y||(Y=!t,W(),Q.list().forEach((([e,n])=>t?n(t):e())),Q.reset()),t}function nt(e,n,o,s){const{scrollBehavior:a}=t;if(!i||!a)return Promise.resolve();const c=!o&&D(A(e.fullPath,0))||(s||!o)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(e,n,c))).then((t=>t&&O(t))).catch((t=>X(t,e,n)))}const rt=t=>f.go(t);let it;const st=new Set,at={currentRoute:y,listening:!0,addRoute:k,removeRoute:C,hasRoute:x,getRoutes:I,resolve:R,options:t,push:L,replace:M,go:rt,back:()=>rt(-1),forward:()=>rt(1),beforeEach:h.add,beforeResolve:m.add,afterEach:v.add,onError:Z.add,isReady:tt,install(t){const e=this;t.component("RouterLink",Kt),t.component("RouterView",te),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,o.SU)(y)}),i&&!it&&y.value===B&&(it=!0,L(f.location).catch((t=>{0})));const n={};for(const o in B)n[o]=(0,r.Fl)((()=>y.value[o]));t.provide(jt,e),t.provide(Vt,(0,o.qj)(n)),t.provide($t,y);const s=t.unmount;st.add(t),t.unmount=function(){st.delete(t),st.size<1&&(b=B,J&&J(),J=null,y.value=B,it=!1,Y=!1),s()}}};return at}function ne(t){return t.reduce(((t,e)=>t.then((()=>e()))),Promise.resolve())}function re(t,e){const n=[],r=[],o=[],i=Math.max(e.matched.length,t.matched.length);for(let s=0;s<i;s++){const i=e.matched[s];i&&(t.matched.find((t=>v(t,i)))?r.push(i):n.push(i));const a=t.matched[s];a&&(e.matched.find((t=>v(t,a)))||o.push(a))}return[n,r,o]}function oe(){return(0,r.f3)(Vt)}}}]);
//# sourceMappingURL=chunk-vendors.7f631e04.js.map