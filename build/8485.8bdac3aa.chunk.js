"use strict";(self.webpackChunkbackend_stay_designed=self.webpackChunkbackend_stay_designed||[]).push([[8485],{57293:($,T,t)=>{t.d(T,{B:()=>I,D:()=>W,H:()=>A,R:()=>N});var r=t(92132),y=t(83997),s=t(30893),v=t(42455),m=t(38413),h=t(4198),M=t(55356),u=t(2129),p=t(9005),P=t(46270),w=t(54894),k=t(18419),R=t(25524),C=t(79793);const x=(0,C.Ay)(y.s)`
  svg path {
    fill: ${({theme:D})=>D.colors.neutral600};
  }
`,U=({name:D})=>(0,r.jsxs)(y.s,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,u.a8)(300),children:[(0,r.jsx)(x,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6,children:(0,r.jsx)(p.A,{width:`${8/16}rem`})}),(0,r.jsx)(s.o,{fontWeight:"bold",children:D})]}),W=()=>(0,r.jsx)(k.P,{renderItem:D=>{if(D.type===R.D.STAGE)return(0,r.jsx)(U,{name:typeof D.item=="string"?D.item:null})}}),N=({children:D})=>(0,r.jsx)(v.P,{children:(0,r.jsx)(m.g,{tabIndex:-1,children:(0,r.jsx)(h.s,{children:D})})}),I=({href:D})=>{const{formatMessage:z}=(0,w.A)();return(0,r.jsx)(u.N_,{startIcon:(0,r.jsx)(P.A,{}),to:D,children:z({id:"global.back",defaultMessage:"Back"})})},A=({title:D,subtitle:z,navigationAction:J,primaryAction:q})=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.x7,{name:D}),(0,r.jsx)(M.Q,{navigationAction:J,primaryAction:q,title:D,subtitle:z})]})},35658:($,T,t)=>{t.d(T,{a:()=>v,g:()=>s});var r=t(57438),y=t(25524);function s(m){if(!m)return null;const M=Object.entries(r._.colors).filter(([,u])=>u.toUpperCase()===m.toUpperCase()).reduce((u,[p])=>(y.S?.[p]&&(u=p),u),null);return M?{themeColorName:M,name:y.S[M]}:null}function v(){return Object.entries(y.S).map(([m,h])=>({hex:r._.colors[m].toUpperCase(),name:h}))}},19165:($,T,t)=>{t.d(T,{u:()=>m});var r=t(21272),y=t(2129),s=t(54894),v=t(18419);const m=(h={},M)=>{const{locale:u}=(0,s.A)(),p=(0,y.QM)(u,{sensitivity:"base"}),{data:P,error:w,isError:k,isLoading:R,refetch:C}=(0,v.z)(h,M);return{roles:r.useMemo(()=>[...P??[]].sort((U,W)=>p.compare(U.name,W.name)),[P,p]),error:w,isError:k,isLoading:R,refetch:C}}},16237:($,T,t)=>{t.d(T,{u:()=>M});var r=t(21272),y=t(2129),s=t(18419);const v=s.n.injectEndpoints({endpoints:u=>({getComponents:u.query({query:()=>({url:"/content-manager/components",method:"GET"}),transformResponse:p=>p.data}),getContentTypes:u.query({query:()=>({url:"/content-manager/content-types",method:"GET"}),transformResponse:p=>p.data})}),overrideExisting:!1}),{useGetComponentsQuery:m,useGetContentTypesQuery:h}=v;function M(){const{_unstableFormatAPIError:u}=(0,y.wq)(),p=(0,y.hN)(),P=m(),w=h();r.useEffect(()=>{w.error&&p({type:"warning",message:u(w.error)})},[w.error,u,p]),r.useEffect(()=>{P.error&&p({type:"warning",message:u(P.error)})},[P.error,u,p]);const k=P.isLoading||w.isLoading,R=r.useMemo(()=>(w?.data??[]).filter(x=>x.kind==="collectionType"&&x.isDisplayed),[w?.data]),C=r.useMemo(()=>(w?.data??[]).filter(x=>x.kind!=="collectionType"&&x.isDisplayed),[w?.data]);return{isLoading:k,components:r.useMemo(()=>P?.data??[],[P?.data]),collectionTypes:R,singleTypes:C}}},49351:($,T,t)=>{t.d(T,{u:()=>y});var r=t(80214);function y(s={}){const{id:v="",...m}=s,{data:h,isLoading:M}=(0,r.c)({id:v,populate:"stages",...m}),[u]=(0,r.d)(),[p]=(0,r.e)(),[P]=(0,r.f)(),{workflows:w,meta:k}=h??{};return{meta:k,workflows:w,isLoading:M,createWorkflow:u,updateWorkflow:p,deleteWorkflow:P}}},69207:($,T,t)=>{t.d(T,{S:()=>et,W:()=>nt,a:()=>$e,b:()=>Ee,c:()=>fe,d:()=>Ce,e:()=>Ie,f:()=>Re,g:()=>Le,h:()=>ge,i:()=>Be,j:()=>Fe,k:()=>Ne,l:()=>Te,r:()=>ke,s:()=>ze,u:()=>Se,v:()=>ot});var r=t(21272),y=t(18419),s=t(92132),v=t(94061),m=t(30893),h=t(83997),M=t(56654),u=t(88353),p=t(98765),P=t(57237),w=t(60888),k=t(44604),R=t(90151),C=t(68074),x=t(7537),U=t(48323),W=t(2129),N=t(54894),I=t(82437),A=t(79793),D=t(43206),z=t(85641),J=t(39116),q=t(90625),we=t(33544),ce=t(5336),Q=t(67206),F=t(61535),De=t(25801),i=t(25524),ee=t(35658),L=t(70653),Pe=t(56336),_e=t(88761),Oe=t(48940),S=t(12083);function Se(e,n){const a=(0,y.Q)();(0,r.useEffect)(()=>{a.injectReducer(e,n)},[a,e,n])}function Ae(e){return{type:i.j,payload:{id:e}}}function Te({workflow:e}){return{type:i.A,payload:e}}function Ce({workflows:e}){return{type:i.c,payload:e}}function xe(e){return{type:i.k,payload:{stageId:e}}}function ge(e){return{type:i.d,payload:e}}function te(e,n){return{type:i.l,payload:{stageId:e,...n}}}function We(e){return{type:i.m,payload:e}}function je(e,n){return{type:i.n,payload:{newIndex:n,oldIndex:e}}}function ue(e){return{type:i.i,payload:e}}function ke(){return{type:i.e}}function Ie(e){return{type:i.f,payload:e}}function Re(e){return{type:i.g,payload:e}}function Le(e){return{type:i.h,payload:e}}const se=(0,A.Ay)(D.A)`
  > circle {
    fill: ${({theme:e})=>e.colors.neutral150};
  }
  > path {
    fill: ${({theme:e})=>e.colors.neutral600};
  }
`,be=(0,A.Ay)(v.a)`
  border-radius: 26px;

  svg {
    height: ${({theme:e})=>e.spaces[6]};
    width: ${({theme:e})=>e.spaces[6]};

    > path {
      fill: ${({theme:e})=>e.colors.neutral600};
    }
  }

  &:hover {
    color: ${({theme:e})=>e.colors.primary600} !important;
    ${m.o} {
      color: ${({theme:e})=>e.colors.primary600} !important;
    }

    ${se} {
      > circle {
        fill: ${({theme:e})=>e.colors.primary600};
      }
      > path {
        fill: ${({theme:e})=>e.colors.neutral100};
      }
    }
  }

  &:active {
    ${m.o} {
      color: ${({theme:e})=>e.colors.primary600};
    }

    ${se} {
      > circle {
        fill: ${({theme:e})=>e.colors.primary600};
      }
      > path {
        fill: ${({theme:e})=>e.colors.neutral100};
      }
    }
  }
`,pe=({children:e,...n})=>(0,s.jsx)(be,{as:"button",background:"neutral0",border:"neutral150",paddingBottom:3,paddingLeft:4,paddingRight:4,paddingTop:3,shadow:"filterShadow",...n,children:(0,s.jsxs)(h.s,{gap:2,children:[(0,s.jsx)(se,{"aria-hidden":!0}),(0,s.jsx)(m.o,{variant:"pi",fontWeight:"bold",textColor:"neutral500",children:e})]})});pe.propTypes={children:we.node.isRequired};const H={serverState:{contentTypes:{collectionTypes:[],singleTypes:[]},roles:[],workflow:null,workflows:[]},clientState:{currentWorkflow:{data:{name:"",contentTypes:[],stages:[],permissions:void 0}},isLoading:!0}};function Be(e=H,n){return(0,_e.jM)(e,a=>{const{payload:c}=n;switch(n.type){case i.f:{a.serverState.contentTypes=c;break}case i.h:{a.clientState.isLoading=c;break}case i.g:{a.serverState.roles=c;break}case i.A:{const o=c;o&&(a.serverState.workflow=o,a.clientState.currentWorkflow.data={...o,stages:o.stages.map(d=>({...d,color:d?.color??i.b}))});break}case i.c:{a.serverState.workflows=c;break}case i.e:{a.clientState=H.clientState,a.serverState=(0,_e.mq)(H.serverState);break}case i.k:{const{stageId:o}=c,{currentWorkflow:d}=e.clientState;a.clientState.currentWorkflow.data.stages=d.data.stages?.filter(f=>(f?.id??f.__temp_key__)!==o);break}case i.d:{const{currentWorkflow:o}=e.clientState;o.data||(a.clientState.currentWorkflow.data={stages:[]});const d=me(a.clientState.currentWorkflow.data.stages);a.clientState.currentWorkflow.data.stages?.push({...c,color:c?.color??i.b,__temp_key__:d});break}case i.j:{const{currentWorkflow:o}=e.clientState,{id:d}=c,f=o.data.stages?.findIndex(E=>(E?.id??E?.__temp_key__)===d);if(f!==void 0&&f!==-1){const E=o.data.stages?.[f];a.clientState.currentWorkflow.data.stages?.splice(f+1,0,{...E,id:void 0,__temp_key__:me(a.clientState.currentWorkflow.data.stages)})}break}case i.l:{const{currentWorkflow:o}=e.clientState,{stageId:d,...f}=c;a.clientState.currentWorkflow.data.stages=o.data.stages?.map(E=>(E.id??E.__temp_key__)===d?{...E,...f}:E);break}case i.m:{const{currentWorkflow:o}=e.clientState;a.clientState.currentWorkflow.data.stages=o.data.stages?.map(d=>({...d,...c}));break}case i.n:{const{currentWorkflow:{data:{stages:o}}}=e.clientState,{newIndex:d,oldIndex:f}=c;if(o&&d>=0&&d<o.length){const E=o[f],j=[...o];j.splice(f,1),j.splice(d,0,E),a.clientState.currentWorkflow.data.stages=j}break}case i.i:{a.clientState.currentWorkflow.data={...a.clientState.currentWorkflow.data,...c};break}}})}const me=(e=[])=>{const n=e.map(a=>Number(a.id??a.__temp_key__));return Math.max(...n,-1)+1},b=e=>e[i.R]??H,Ke=(0,L.Mz)(b,({serverState:{contentTypes:e}})=>e),fe=(0,L.Mz)(b,({serverState:{roles:e}})=>e),Ee=(0,L.Mz)(b,({clientState:{currentWorkflow:e}})=>e.data),Ue=(0,L.Mz)(b,({serverState:{workflows:e}})=>e),$e=(0,L.Mz)(b,({serverState:e,clientState:{currentWorkflow:n}})=>!Pe(e.workflow,n.data)),Ne=(0,L.Mz)(b,({serverState:e,clientState:{currentWorkflow:n}})=>!(e.workflow?.stages??[]).every(a=>!!n.data.stages?.find(({id:c})=>c===a.id))),ze=(0,L.Mz)(b,({clientState:{isLoading:e}})=>e),Fe=(0,L.Mz)(b,({serverState:e})=>e),Ye=(0,A.Ay)(M.fe)`
  padding-left: ${({theme:e})=>e.spaces[7]};
`,Qe=(0,A.Ay)(h.s)`
  > * {
    flex-grow: 1;
  }
`,He=(0,A.Ay)(ce.Dr)`
  color: ${({theme:e})=>e.colors.danger600};
`,Ge=(0,A.Ay)(Q.l9)`
  :hover,
  :focus {
    background-color: ${({theme:e})=>e.colors.neutral100};
  }

  > span {
    font-size: 0;
  }
`,Ve=(0,A.Ay)(u.K)`
  align-items: center;
  border-radius: ${({theme:e})=>e.borderRadius};
  display: flex;
  justify-content: center;

  :hover,
  :focus {
    background-color: ${({theme:e})=>e.colors.neutral100};
  }

  svg {
    height: auto;
    width: ${({theme:e})=>e.spaces[3]}};
  }
`,Ze=(0,ee.a)(),Xe=()=>(0,s.jsx)(v.a,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",display:"block",hasRadius:!0,padding:6,shadow:"tableShadow"}),Je=({id:e,index:n,canDelete:a,canReorder:c,canUpdate:o,isOpen:d=!1,stagesCount:f})=>{const E=l=>`${l+1} of ${f}`,j=l=>{_(g({id:"dnd.grab-item",defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:B.value,position:E(l)}))},ne=l=>{_(g({id:"dnd.drop-item",defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:B.value,position:E(l)}))},G=()=>{_(g({id:"dnd.cancel-item",defaultMessage:"{item}, dropped. Re-order cancelled."},{item:B.value}))},oe=(l,K)=>{_(g({id:"dnd.reorder",defaultMessage:"{item}, moved. New position in list: {position}."},{item:B.value,position:E(l)})),O(je(K,l))},ae=()=>{ie(!0)},[V,_]=r.useState(null),{formatMessage:g}=(0,N.A)(),{trackUsage:re}=(0,W.z1)(),O=(0,I.wA)(),at=(0,W.hN)(),[le,rt]=r.useState(d),[lt,ie]=r.useState(!1),[B,he,it]=(0,F.Mt)(`stages.${n}.name`),[Z,Me,dt]=(0,F.Mt)(`stages.${n}.color`),[Y,ye,ct]=(0,F.Mt)(`stages.${n}.permissions`),_t=(0,I.d4)(fe),[{handlerId:gt,isDragging:ut,handleKeyDown:pt},mt,ft,Et,ve]=(0,y.T)(c,{index:n,item:{index:n,name:B.value},onGrabItem:j,onDropItem:ne,onMoveItem:oe,onCancel:G,type:i.D.STAGE}),ht=(0,y.V)(mt,ft),Mt=Ze.map(({hex:l,name:K})=>({value:l,label:g({id:"Settings.review-workflows.stage.color.name",defaultMessage:"{name}"},{name:K}),color:l})),{themeColorName:yt}=(0,ee.g)(Z.value)??{},de=_t?.filter(l=>l.code!=="strapi-super-admin");return r.useEffect(()=>{ve((0,De.n)(),{captureDraggingState:!1})},[ve,n]),(0,s.jsxs)(v.a,{ref:l=>ht(l),children:[V&&(0,s.jsx)(p.s,{"aria-live":"assertive",children:V}),ut?(0,s.jsx)(Xe,{}):(0,s.jsxs)(P.n,{size:"S",variant:"primary",onToggle:()=>{rt(!le),le||re("willEditStage")},expanded:le,shadow:"tableShadow",error:he.error??Me?.error??ye?.error,hasErrorMessage:!1,children:[(0,s.jsx)(w.P,{title:B.value,togglePosition:"left",action:(a||o)&&(0,s.jsxs)(h.s,{children:[(0,s.jsxs)(Q.bL,{children:[(0,s.jsxs)(Ge,{size:"S",endIcon:null,paddingLeft:2,paddingRight:2,children:[(0,s.jsx)(z.A,{"aria-hidden":!0,focusable:!1}),(0,s.jsx)(p.s,{as:"span",children:g({id:"[tbdb].components.DynamicZone.more-actions",defaultMessage:"More actions"})})]}),(0,s.jsx)(Q.UC,{popoverPlacement:"bottom-end",zIndex:2,children:(0,s.jsxs)(Q.x8,{children:[o&&(0,s.jsx)(ce.Dr,{onClick:()=>O(Ae(e)),children:g({id:"Settings.review-workflows.stage.delete",defaultMessage:"Duplicate stage"})}),a&&(0,s.jsx)(He,{onClick:()=>O(xe(e)),children:g({id:"Settings.review-workflows.stage.delete",defaultMessage:"Delete"})})]})})]}),o&&(0,s.jsx)(Ve,{background:"transparent",forwardedAs:"div",hasRadius:!0,role:"button",noBorder:!0,tabIndex:0,"data-handler-id":gt,ref:Et,label:g({id:"Settings.review-workflows.stage.drag",defaultMessage:"Drag"}),onClick:l=>l.stopPropagation(),onKeyDown:pt,children:(0,s.jsx)(J.A,{})})]})}),(0,s.jsx)(k.u,{padding:6,background:"neutral0",hasRadius:!0,children:(0,s.jsxs)(R.x,{gap:4,children:[(0,s.jsx)(C.E,{col:6,children:(0,s.jsx)(x.k,{...B,id:B.name,disabled:!o,label:g({id:"Settings.review-workflows.stage.name.label",defaultMessage:"Stage name"}),error:he.error??!1,onChange:l=>{it.setValue(l.target.value),O(te(e,{name:l.target.value}))},required:!0})}),(0,s.jsx)(C.E,{col:6,children:(0,s.jsx)(U.Z,{disabled:!o,error:Me?.error??!1,id:Z.name,required:!0,label:g({id:"content-manager.reviewWorkflows.stage.color",defaultMessage:"Color"}),onChange:l=>{dt.setValue(l),O(te(e,{color:String(l)}))},value:Z.value.toUpperCase(),startIcon:(0,s.jsx)(h.s,{as:"span",height:2,background:Z.value,borderColor:yt==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),children:Mt.map(({value:l,label:K,color:X})=>{const{themeColorName:vt}=(0,ee.g)(X)||{};return(0,s.jsx)(U.eY,{value:l,startIcon:(0,s.jsx)(h.s,{as:"span",height:2,background:X,borderColor:vt==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),children:K},l)})})}),(0,s.jsx)(C.E,{col:6,children:de?.length===0?(0,s.jsx)(W.WT,{description:{id:"Settings.review-workflows.stage.permissions.noPermissions.description",defaultMessage:"You don\u2019t have the permission to see roles"},intlLabel:{id:"Settings.review-workflows.stage.permissions.label",defaultMessage:"Roles that can change this stage"},name:Y.name}):(0,s.jsxs)(h.s,{alignItems:"flex-end",gap:3,children:[(0,s.jsx)(Qe,{grow:1,children:(0,s.jsx)(M.KF,{...Y,disabled:!o,error:ye.error??!1,id:Y.name,label:g({id:"Settings.review-workflows.stage.permissions.label",defaultMessage:"Roles that can change this stage"}),onChange:l=>{const K=l.map(X=>({role:parseInt(X,10),action:"admin::review-workflows.stage.transition"}));ct.setValue(K),O(te(e,{permissions:K}))},placeholder:g({id:"Settings.review-workflows.stage.permissions.placeholder",defaultMessage:"Select a role"}),required:!0,value:(Y.value??[]).map(l=>`${l.role}`),withTags:!0,children:(0,s.jsx)(M.np,{label:g({id:"Settings.review-workflows.stage.permissions.allRoles.label",defaultMessage:"All roles"}),values:de?.map(l=>`${l.id}`),children:de?.map(l=>(0,s.jsx)(Ye,{value:`${l.id}`,children:l.name},l.id))})})}),(0,s.jsx)(u.K,{disabled:!o,icon:(0,s.jsx)(q.A,{}),label:g({id:"Settings.review-workflows.stage.permissions.apply.label",defaultMessage:"Apply to all stages"}),size:"L",variant:"secondary",onClick:()=>ae()})]})})]})})]}),(0,s.jsx)(W.TM.Root,{iconRightButton:null,isOpen:lt,onToggleDialog:()=>ie(!1),onConfirm:()=>{O(We({permissions:Y.value})),ie(!1),at({type:"success",message:g({id:"Settings.review-workflows.page.edit.confirm.stages.permissions.copy.success",defaultMessage:"Applied roles to all other stages of the workflow"})})},variantRightButton:"default",children:(0,s.jsx)(W.TM.Body,{children:(0,s.jsx)(m.o,{textAlign:"center",variant:"omega",children:g({id:"Settings.review-workflows.page.edit.confirm.stages.permissions.copy",defaultMessage:"Roles that can change that stage will be applied to all the other stages."})})})})]})},qe=(0,A.Ay)(v.a)`
  transform: translateX(-50%);
`,et=({canDelete:e=!0,canUpdate:n=!0,stages:a=[]})=>{const{formatMessage:c}=(0,N.A)(),o=(0,I.wA)(),{trackUsage:d}=(0,W.z1)();return(0,s.jsxs)(h.s,{direction:"column",gap:6,width:"100%",children:[(0,s.jsxs)(v.a,{position:"relative",width:"100%",children:[(0,s.jsx)(qe,{background:"neutral200",height:"100%",left:"50%",position:"absolute",top:"0",width:2,zIndex:1}),(0,s.jsx)(h.s,{direction:"column",alignItems:"stretch",gap:6,zIndex:2,position:"relative",as:"ol",children:a.map((f,E)=>{const j=Number(f?.id??f.__temp_key__);return(0,s.jsx)(v.a,{as:"li",children:(0,s.jsx)(Je,{id:j,index:E,isOpen:!f.id,canDelete:a.length>1&&e,canReorder:a.length>1,canUpdate:n,stagesCount:a.length})},`stage-${j}`)})})]}),n&&(0,s.jsx)(pe,{type:"button",onClick:()=>{o(ge({name:""})),d("willCreateStage")},children:c({id:"Settings.review-workflows.stage.add",defaultMessage:"Add new stage"})})]})},tt=(0,A.Ay)(M.fe)`
  padding-left: ${({theme:e})=>e.spaces[7]};
`,st=(0,A.Ay)(m.o)`
  font-style: italic;
`,nt=({canUpdate:e=!0})=>{const{formatMessage:n,locale:a}=(0,N.A)(),c=(0,I.wA)(),o=(0,I.d4)(Ke),d=(0,I.d4)(Ee),f=(0,I.d4)(Ue),[E,j,ne]=(0,F.Mt)("name"),[G,oe,ae]=(0,F.Mt)("contentTypes"),V=(0,W.QM)(a,{sensitivity:"base"});return(0,s.jsxs)(R.x,{background:"neutral0",hasRadius:!0,gap:4,padding:6,shadow:"tableShadow",children:[(0,s.jsx)(C.E,{col:6,children:(0,s.jsx)(x.k,{...E,id:E.name,disabled:!e,label:n({id:"Settings.review-workflows.workflow.name.label",defaultMessage:"Workflow Name"}),error:j.error??!1,onChange:_=>{c(ue({name:_.target.value})),ne.setValue(_.target.value)},required:!0})}),o&&(0,s.jsx)(C.E,{col:6,children:(0,s.jsx)(M.KF,{...G,customizeContent:_=>n({id:"Settings.review-workflows.workflow.contentTypes.displayValue",defaultMessage:"{count} {count, plural, one {content type} other {content types}} selected"},{count:_?.length}),disabled:!e,error:oe.error??!1,id:G.name,label:n({id:"Settings.review-workflows.workflow.contentTypes.label",defaultMessage:"Associated to"}),onChange:_=>{c(ue({contentTypes:_})),ae.setValue(_)},placeholder:n({id:"Settings.review-workflows.workflow.contentTypes.placeholder",defaultMessage:"Select"}),children:[...o.collectionTypes.length>0?[{label:n({id:"Settings.review-workflows.workflow.contentTypes.collectionTypes.label",defaultMessage:"Collection Types"}),children:[...o.collectionTypes].sort((_,g)=>V.compare(_.info.displayName,g.info.displayName)).map(_=>({label:_.info.displayName,value:_.uid}))}]:[],...o.singleTypes.length>0?[{label:n({id:"Settings.review-workflows.workflow.contentTypes.singleTypes.label",defaultMessage:"Single Types"}),children:[...o.singleTypes].map(_=>({label:_.info.displayName,value:_.uid}))}]:[]].map(_=>{if("children"in _)return(0,s.jsx)(M.np,{label:_.label,values:_.children.map(g=>g.value.toString()),children:_.children.map(g=>{const{name:re}=f?.find(O=>(d&&O.id!==d.id||!d)&&O.contentTypes.includes(g.value))??{};return(0,s.jsx)(tt,{value:g.value,children:(0,s.jsx)(m.o,{children:n({id:"Settings.review-workflows.workflow.contentTypes.assigned.notice",defaultMessage:"{label} {name, select, undefined {} other {<i>(assigned to <em>{name}</em> workflow)</i>}}"},{label:g.label,name:re,em:(...O)=>(0,s.jsx)(m.o,{as:"em",fontWeight:"bold",children:O}),i:(...O)=>(0,s.jsx)(st,{children:O})})})},g.value)})},_.label)})})})]})};async function ot({values:e,formatMessage:n}){const a=S.Ik({contentTypes:S.YO().of(S.Yj()),name:S.Yj().max(255,n({id:"Settings.review-workflows.validation.name.max-length",defaultMessage:"Name can not be longer than 255 characters"})).required(),stages:S.YO().of(S.Ik().shape({name:S.Yj().required(n({id:"Settings.review-workflows.validation.stage.name",defaultMessage:"Name is required"})).max(255,n({id:"Settings.review-workflows.validation.stage.max-length",defaultMessage:"Name can not be longer than 255 characters"})).test("unique-name",n({id:"Settings.review-workflows.validation.stage.duplicate",defaultMessage:"Stage name must be unique"}),function(c){const{options:{context:o}}=this;return o?.stages.filter(d=>d.name===c).length===1}),color:S.Yj().required(n({id:"Settings.review-workflows.validation.stage.color",defaultMessage:"Color is required"})).matches(/^#(?:[0-9a-fA-F]{3}){1,2}$/i),permissions:S.YO(S.Ik({role:S.ai().strict().typeError(n({id:"Settings.review-workflows.validation.stage.permissions.role.number",defaultMessage:"Role must be of type number"})).required(),action:S.Yj().required({id:"Settings.review-workflows.validation.stage.permissions.action.required",defaultMessage:"Action is a required argument"})})).strict()})).min(1)});try{return await a.validate(e,{abortEarly:!1,context:e}),!0}catch(c){const o={};return c instanceof S.yI&&c.inner.forEach(d=>{d.path&&Oe(o,d.path,d.message)}),o}}}}]);
