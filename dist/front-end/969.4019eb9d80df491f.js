"use strict";(self.webpackChunkfront_end=self.webpackChunkfront_end||[]).push([[969],{2340:(y,p,d)=>{d.d(p,{N:()=>e});const e={production:!0,apiUrl:"https://calculator-back-end.onrender.com"}},2342:(y,p,d)=>{d.d(p,{ZX:()=>x,ux:()=>Z});var e=d(2223),h=d(7579),b=d(4755),g=d(1728),l=d(1591),_=d(8023),E=d(2966),C=d(5698),D=d(2722),B=d(706),k=d(5537),u=d(9002),M=d(1217);function R(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div",2)(1,"button",3),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.action())}),e._uU(2),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(2),e.hij(" ",t.data.action," ")}}const O=["label"];function P(n,s){}const T=Math.pow(2,31)-1;class v{constructor(s,t){this._overlayRef=t,this._afterDismissed=new h.x,this._afterOpened=new h.x,this._onAction=new h.x,this._dismissedByAction=!1,this.containerInstance=s,s._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(s){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(s,T))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}}const A=new e.OlP("MatSnackBarData");class f{constructor(){this.politeness="assertive",this.announcementMessage="",this.duration=0,this.data=null,this.horizontalPosition="center",this.verticalPosition="bottom"}}let w=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=e.lG2({type:n,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]}),n})(),L=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=e.lG2({type:n,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]}),n})(),I=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=e.lG2({type:n,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]}),n})(),F=(()=>{class n{constructor(t,a){this.snackBarRef=t,this.data=a}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(v),e.Y36(A))},n.\u0275cmp=e.Xpm({type:n,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions","",4,"ngIf"],["matSnackBarActions",""],["mat-button","","matSnackBarAction","",3,"click"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0),e._uU(1),e.qZA(),e.YNc(2,R,3,1,"div",1)),2&t&&(e.xp6(1),e.hij(" ",a.data.message,"\n"),e.xp6(1),e.Q6J("ngIf",a.hasAction))},dependencies:[b.O5,g.lW,w,L,I],styles:[".mat-mdc-simple-snack-bar{display:flex}"],encapsulation:2,changeDetection:0}),n})();const j={snackBarState:(0,l.X$)("state",[(0,l.SB)("void, hidden",(0,l.oB)({transform:"scale(0.8)",opacity:0})),(0,l.SB)("visible",(0,l.oB)({transform:"scale(1)",opacity:1})),(0,l.eR)("* => visible",(0,l.jt)("150ms cubic-bezier(0, 0, 0.2, 1)")),(0,l.eR)("* => void, * => hidden",(0,l.jt)("75ms cubic-bezier(0.4, 0.0, 1, 1)",(0,l.oB)({opacity:0})))])};let z=0,U=(()=>{class n extends _.en{constructor(t,a,i,r,o){super(),this._ngZone=t,this._elementRef=a,this._changeDetectorRef=i,this._platform=r,this.snackBarConfig=o,this._document=(0,e.f3M)(b.K0),this._trackedModals=new Set,this._announceDelay=150,this._destroyed=!1,this._onAnnounce=new h.x,this._onExit=new h.x,this._onEnter=new h.x,this._animationState="void",this._liveElementId="mat-snack-bar-container-live-"+z++,this.attachDomPortal=c=>{this._assertNotAttached();const m=this._portalOutlet.attachDomPortal(c);return this._afterPortalAttached(),m},this._live="assertive"!==o.politeness||o.announcementMessage?"off"===o.politeness?"off":"polite":"assertive",this._platform.FIREFOX&&("polite"===this._live&&(this._role="status"),"assertive"===this._live&&(this._role="alert"))}attachComponentPortal(t){this._assertNotAttached();const a=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),a}attachTemplatePortal(t){this._assertNotAttached();const a=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),a}onAnimationEnd(t){const{fromState:a,toState:i}=t;if(("void"===i&&"void"!==a||"hidden"===i)&&this._completeExit(),"visible"===i){const r=this._onEnter;this._ngZone.run(()=>{r.next(),r.complete()})}}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce())}exit(){return this._ngZone.run(()=>{this._animationState="hidden",this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId)}),this._onExit}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){this._ngZone.onMicrotaskEmpty.pipe((0,C.q)(1)).subscribe(()=>{this._ngZone.run(()=>{this._onExit.next(),this._onExit.complete()})})}_afterPortalAttached(){const t=this._elementRef.nativeElement,a=this.snackBarConfig.panelClass;a&&(Array.isArray(a)?a.forEach(i=>t.classList.add(i)):t.classList.add(a)),this._exposeToModals()}_exposeToModals(){const t=this._liveElementId,a=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let i=0;i<a.length;i++){const r=a[i],o=r.getAttribute("aria-owns");this._trackedModals.add(r),o?-1===o.indexOf(t)&&r.setAttribute("aria-owns",o+" "+t):r.setAttribute("aria-owns",t)}}_clearFromModals(){this._trackedModals.forEach(t=>{const a=t.getAttribute("aria-owns");if(a){const i=a.replace(this._liveElementId,"").trim();i.length>0?t.setAttribute("aria-owns",i):t.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{const t=this._elementRef.nativeElement.querySelector("[aria-hidden]"),a=this._elementRef.nativeElement.querySelector("[aria-live]");if(t&&a){let i=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(i=document.activeElement),t.removeAttribute("aria-hidden"),a.appendChild(t),i?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.R0b),e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(E.t4),e.Y36(f))},n.\u0275dir=e.lG2({type:n,viewQuery:function(t,a){if(1&t&&e.Gf(_.Pl,7),2&t){let i;e.iGM(i=e.CRH())&&(a._portalOutlet=i.first)}},features:[e.qOj]}),n})(),G=(()=>{class n extends U{_afterPortalAttached(){super._afterPortalAttached();const t=this._label.nativeElement,a="mdc-snackbar__label";t.classList.toggle(a,!t.querySelector(`.${a}`))}}return n.\u0275fac=function(){let s;return function(a){return(s||(s=e.n5z(n)))(a||n)}}(),n.\u0275cmp=e.Xpm({type:n,selectors:[["mat-snack-bar-container"]],viewQuery:function(t,a){if(1&t&&e.Gf(O,7),2&t){let i;e.iGM(i=e.CRH())&&(a._label=i.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container","mdc-snackbar--open"],hostVars:1,hostBindings:function(t,a){1&t&&e.WFA("@state.done",function(r){return a.onAnimationEnd(r)}),2&t&&e.d8E("@state",a._animationState)},features:[e.qOj],decls:6,vars:3,consts:[[1,"mdc-snackbar__surface"],[1,"mat-mdc-snack-bar-label"],["label",""],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"div",1,2)(3,"div",3),e.YNc(4,P,0,0,"ng-template",4),e.qZA(),e._UZ(5,"div"),e.qZA()()),2&t&&(e.xp6(5),e.uIk("aria-live",a._live)("role",a._role)("id",a._liveElementId))},dependencies:[_.Pl],styles:['.mdc-snackbar{display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-snackbar__surface::before{border-color:CanvasText}}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1)}.mdc-snackbar__label{padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}.mat-mdc-snack-bar-container{margin:8px;--mdc-snackbar-container-shape:4px;position:static}.mat-mdc-snack-bar-container .mdc-snackbar__surface{min-width:344px}@media(max-width: 480px),(max-width: 344px){.mat-mdc-snack-bar-container .mdc-snackbar__surface{min-width:100%}}@media(max-width: 480px),(max-width: 344px){.mat-mdc-snack-bar-container{width:100vw}}.mat-mdc-snack-bar-container .mdc-snackbar__surface{max-width:672px}.mat-mdc-snack-bar-container .mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.mat-mdc-snack-bar-container .mdc-snackbar__surface{background-color:var(--mdc-snackbar-container-color)}.mat-mdc-snack-bar-container .mdc-snackbar__surface{border-radius:var(--mdc-snackbar-container-shape)}.mat-mdc-snack-bar-container .mdc-snackbar__label{color:var(--mdc-snackbar-supporting-text-color)}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-size:var(--mdc-snackbar-supporting-text-size);font-family:var(--mdc-snackbar-supporting-text-font);font-weight:var(--mdc-snackbar-supporting-text-weight);line-height:var(--mdc-snackbar-supporting-text-line-height)}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){color:var(--mat-snack-bar-button-color);--mat-mdc-button-persistent-ripple-color: currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{background-color:currentColor;opacity:.1}.mat-mdc-snack-bar-container .mdc-snackbar__label::before{display:none}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-handset .mdc-snackbar__surface{width:100%}'],encapsulation:2,data:{animation:[j.snackBarState]}}),n})(),x=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.U8,_.eL,b.ez,g.ot,M.BQ,M.BQ]}),n})();const S=new e.OlP("mat-snack-bar-default-options",{providedIn:"root",factory:function K(){return new f}});let W=(()=>{class n{get _openedSnackBarRef(){const t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}constructor(t,a,i,r,o,c){this._overlay=t,this._live=a,this._injector=i,this._breakpointObserver=r,this._parentSnackBar=o,this._defaultConfig=c,this._snackBarRefAtThisLevel=null}openFromComponent(t,a){return this._attach(t,a)}openFromTemplate(t,a){return this._attach(t,a)}open(t,a="",i){const r={...this._defaultConfig,...i};return r.data={message:t,action:a},r.announcementMessage===t&&(r.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,r)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,a){const r=e.zs3.create({parent:a&&a.viewContainerRef&&a.viewContainerRef.injector||this._injector,providers:[{provide:f,useValue:a}]}),o=new _.C5(this.snackBarContainerComponent,a.viewContainerRef,r),c=t.attach(o);return c.instance.snackBarConfig=a,c.instance}_attach(t,a){const i={...new f,...this._defaultConfig,...a},r=this._createOverlay(i),o=this._attachSnackBarContainer(r,i),c=new v(o,r);if(t instanceof e.Rgc){const m=new _.UE(t,null,{$implicit:i.data,snackBarRef:c});c.instance=o.attachTemplatePortal(m)}else{const m=this._createInjector(i,c),Y=new _.C5(t,void 0,m),N=o.attachComponentPortal(Y);c.instance=N.instance}return this._breakpointObserver.observe(k.u3.HandsetPortrait).pipe((0,D.R)(r.detachments())).subscribe(m=>{r.overlayElement.classList.toggle(this.handsetCssClass,m.matches)}),i.announcementMessage&&o._onAnnounce.subscribe(()=>{this._live.announce(i.announcementMessage,i.politeness)}),this._animateSnackBar(c,i),this._openedSnackBarRef=c,this._openedSnackBarRef}_animateSnackBar(t,a){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),a.announcementMessage&&this._live.clear()}),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter(),a.duration&&a.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(a.duration))}_createOverlay(t){const a=new u.X_;a.direction=t.direction;let i=this._overlay.position().global();const r="rtl"===t.direction,o="left"===t.horizontalPosition||"start"===t.horizontalPosition&&!r||"end"===t.horizontalPosition&&r,c=!o&&"center"!==t.horizontalPosition;return o?i.left("0"):c?i.right("0"):i.centerHorizontally(),"top"===t.verticalPosition?i.top("0"):i.bottom("0"),a.positionStrategy=i,this._overlay.create(a)}_createInjector(t,a){return e.zs3.create({parent:t&&t.viewContainerRef&&t.viewContainerRef.injector||this._injector,providers:[{provide:v,useValue:a},{provide:A,useValue:t.data}]})}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(u.aV),e.LFG(B.Kd),e.LFG(e.zs3),e.LFG(k.Yg),e.LFG(n,12),e.LFG(S))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})(),Z=(()=>{class n extends W{constructor(t,a,i,r,o,c){super(t,a,i,r,o,c),this.simpleSnackBarComponent=F,this.snackBarContainerComponent=G,this.handsetCssClass="mat-mdc-snack-bar-handset"}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(u.aV),e.LFG(B.Kd),e.LFG(e.zs3),e.LFG(k.Yg),e.LFG(n,12),e.LFG(S))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:x}),n})()}}]);