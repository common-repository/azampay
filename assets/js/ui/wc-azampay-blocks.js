(()=>{"use strict";const e=window.React,a=window.wp.i18n,t=window.wc.wcBlocksRegistry,n=window.wp.htmlEntities,r=window.wc.wcSettings,m=window.wp.element,o=(0,r.getSetting)("azampaymomo_data",{}),s=t=>{const{paymentNumber:n,setPaymentNumber:r}=t;if(void 0===n||void 0===r)throw new Error((0,a.__)("paymentNumber and setPaymentNumber are required as props.","azampay-woo"));return(0,e.createElement)("input",{id:"payment_number_field",name:"payment_number",className:"form-row form-row-wide payment-number-field mt-0",placeholder:(0,a.__)("Enter mobile phone number","azampay-woo"),type:"text",role:"presentation",required:!0,value:n,onChange:e=>r(e.target.value)})},l=t=>{const{paymentPartner:n,setPaymentPartner:r}=t;if(void 0===n||void 0===r)throw new Error((0,a.__)("paymentPartner and setPaymentPartner are required as props.","azampay-woo"));if(!o?.partners?.data)return(0,e.createElement)("p",null,(0,a.__)("No payment partners available.","azampay-woo"));const{partners:{data:m,icons:s}}=o,{src:l,alt:p}=s.Azampesa||{src:"",alt:""},c=e=>{r(e.target.value)};return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("div",{class:"form-row form-row-wide azampesa-label-container"},(0,e.createElement)("label",{class:"azampesa-container",style:{marginBlock:"1em"}},(0,e.createElement)("input",{id:"azampesa-radio-btn",type:"radio",name:"payment_network",value:m.Azampesa||"azampesa",checked:n.toLowerCase()===(m.Azampesa||"azampesa").toLowerCase(),onChange:c}),(0,e.createElement)("div",{class:"azampesa-right-block",style:{}},(0,e.createElement)("p",null,(0,a.__)("Pay with AzamPesa","azampay-woo")),(0,e.createElement)("img",{class:"azampesa-img",src:l,alt:p})))),(0,e.createElement)("div",{class:"form-row form-row-wide content radio-btn-container"},Object.entries(m).map((([a,t])=>{if("Azampesa"===a)return(0,e.createElement)(e.Fragment,null);const{src:r,alt:m}=s[a]||{src:"",alt:""},o=n.toLowerCase()===t.toLowerCase();return(0,e.createElement)("label",null,(0,e.createElement)("input",{class:"other-partners-radio-btn",type:"radio",name:"payment_network",value:t,checked:o,onChange:c}),(0,e.createElement)("img",{class:"other-partner-img",src:r,alt:m}))}))))},p={azampesa:/^(0|1|255|\\+255)?(6[1-9]|7[1-8])([0-9]{7})$/,others:/^(0|255|\\+255)?(6[1-9]|7[1-8])([0-9]{7})$/},c=(0,r.getSetting)("azampaymomo_data",{}),i=c.enabled||!0,y=()=>(0,e.createElement)(m.RawHTML,null,c.description),d=(0,r.getSetting)("azampaymomo_data",{}),w=(0,n.decodeEntities)(d.title)||(0,a.__)("AzamPay","azampay-woo"),u=(0,n.decodeEntities)(d.name)||"azampaymomo",E=(0,n.decodeEntities)(d.icon)||"",z={name:u,label:(0,e.createElement)((t=>{const{PaymentMethodLabel:n,PaymentMethodIcons:r}=t.components,m=[{id:"azampay-logo",src:E,alt:(0,a.__)("Azampay logo","azampay-woo")}];return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n,{text:w}),(0,e.createElement)(r,{align:"right",icons:m,className:"wc-azampay-logo"}))}),null),content:(0,e.createElement)((t=>{const{eventRegistration:{onPaymentSetup:n},emitResponse:r}=t,[o,c]=(0,m.useState)(""),[d,w]=(0,m.useState)("Azampesa");return(0,m.useEffect)((()=>{const e=n((async()=>{if(!i)return{type:r.responseTypes.ERROR,message:(0,a.__)("AzamPay is disabled","azampay-woo")};if(!d)return{type:r.responseTypes.ERROR,message:(0,a.__)("Please select a payment network","azampay-woo")};const e="Azampesa"===d?p.azampesa:p.others;return o&&o.match(e)?{type:r.responseTypes.SUCCESS,meta:{paymentMethodData:{payment_network:d,payment_number:o}}}:{type:r.responseTypes.ERROR,message:(0,a.__)("Please enter a valid phone number that is to be billed.","azampay-woo")}}));return()=>{e()}}),[r.responseTypes.ERROR,r.responseTypes.SUCCESS,n,o,d]),i?(0,e.createElement)(e.Fragment,null,(0,e.createElement)(y,null),(0,e.createElement)("fieldset",{id:"wc-azampaymomo-form",className:"wc-payment-form block-field"},(0,e.createElement)(s,{paymentNumber:o,setPaymentNumber:c}),(0,e.createElement)(l,{paymentPartner:d,setPaymentPartner:w}))):(0,e.createElement)("p",null,(0,a.__)("Azampay is disabled","azampay-woo"),".")}),null),edit:(0,e.createElement)(e.Fragment,null),canMakePayment:()=>!0,ariaLabel:w,supports:{features:d.supports}};(0,t.registerPaymentMethod)(z)})();