"use strict";(self.webpackChunkfront_end=self.webpackChunkfront_end||[]).push([[377],{7377:(G,Z,a)=>{a.r(Z),a.d(Z,{AuthModule:()=>X});var c=a(430),v=a(2214),b=a(2950),l=a(9114),f=a(4755),d=a(4660),i=a(9401),_=a(5698),g=a(5580),t=a(2223),P=a(8467);let T=(()=>{class e{constructor(r,o){this.dialogRef=r,this.data=o}}return e.\u0275fac=function(r){return new(r||e)(t.Y36(g.so),t.Y36(g.WI))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-loading-dialog"]],decls:4,vars:1,template:function(r,o){1&r&&(t.TgZ(0,"mat-dialog-content"),t._UZ(1,"mat-spinner"),t.TgZ(2,"p"),t._uU(3),t.qZA()()),2&r&&(t.xp6(3),t.Oqu(o.data))},dependencies:[g.xY,P.Ou],styles:["mat-dialog-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:300px;width:clamp(180px,80vw,380px)}mat-dialog-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:24px;margin:24px;text-align:center}"]}),e})();var q=a(2340),A=a(3144);let w=(()=>{class e{constructor(r){this.http=r,this.url=q.N.apiUrl+"/auth"}auth(r,o,s){return this.http.post(this.url+"/"+s,{email:r,password:o})}}return e.\u0275fac=function(r){return new(r||e)(t.LFG(A.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var h=a(2342),p=a(1728),C=a(8097);function F(e,n){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"This field is required"),t.qZA())}function y(e,n){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"This email is invalid"),t.qZA())}function I(e,n){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"This field is required"),t.qZA())}function U(e,n){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"Password should be at least 4 symbols"),t.qZA())}function x(e,n){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"Password should not exceed more than 32 symbols"),t.qZA())}const J=function(){return["/","auth","register"]},O=function(){return["/","calculator"]};function S(e){return n=>{const r=n.root.get(e)?.value,o=n.value;return r!==o&&o?{confirmPassword:!0}:null}}function L(e,n){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"This field is required"),t.qZA())}function M(e,n){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"This email is invalid"),t.qZA())}function k(e,n){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"This field is required"),t.qZA())}function Y(e,n){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"Password should be at least 4 symbols"),t.qZA())}function N(e,n){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"Password should not exceed more than 32 symbols"),t.qZA())}function Q(e,n){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"This field is required"),t.qZA())}function D(e,n){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"Passwords do not match"),t.qZA())}const E=function(){return["/","auth","login"]},z=function(){return["/","calculator"]},B=[{path:"login",component:(()=>{class e{constructor(r,o,s,m,u){this.router=r,this.fb=o,this.authService=s,this.matDialog=m,this.matSnackBar=u,this.hide=!0}ngOnInit(){this.buildForm()}get emailFormControl(){return this.form.get("email")}get passwordFormControl(){return this.form.get("password")}buildForm(){this.form=this.fb.group({email:["",[i.kI.required,i.kI.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],password:["",[i.kI.required,i.kI.minLength(4),i.kI.maxLength(32)]]})}onSubmit(){if(this.form.valid){const r=this.form.value.email,o=this.form.value.password,s="login",m=this.matDialog.open(T,{data:"Logging"});m.afterOpened().subscribe(()=>{this.isLogging=!0,this.authService.auth(r,o,s).pipe((0,_.q)(1)).subscribe({next:u=>{this.isLogging=!1,m.close(),localStorage.setItem("token",u.token),this.router.navigate(["/","calculator"])},error:u=>{m.close(),this.isLogging=!1,this.matSnackBar.open(403===u.status?"Invalid credentials":"Something went wrong",void 0,{duration:4e3})}})})}}}return e.\u0275fac=function(r){return new(r||e)(t.Y36(d.F0),t.Y36(i.qu),t.Y36(w),t.Y36(g.uw),t.Y36(h.ux))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],decls:30,vars:17,consts:[[3,"formGroup","ngSubmit"],["appearance","outline"],["matInput","","formControlName","email","placeholder","user@example.com",3,"required"],[4,"ngIf"],["matInput","","formControlName","password",3,"required","type"],["type","button","mat-icon-button","","matSuffix","",3,"click"],[1,"actions"],["mat-raised-button","",3,"disabled"],[3,"routerLink"]],template:function(r,o){1&r&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return o.onSubmit()}),t.TgZ(1,"h2"),t._uU(2,"Log In"),t.qZA(),t.TgZ(3,"mat-form-field",1)(4,"mat-label"),t._uU(5,"email"),t.qZA(),t._UZ(6,"input",2),t.YNc(7,F,2,0,"mat-error",3),t.YNc(8,y,2,0,"mat-error",3),t.qZA(),t.TgZ(9,"mat-form-field",1)(10,"mat-label"),t._uU(11,"password"),t.qZA(),t._UZ(12,"input",4),t.TgZ(13,"button",5),t.NdJ("click",function(){return o.hide=!o.hide}),t.TgZ(14,"mat-icon"),t._uU(15),t.qZA()(),t.YNc(16,I,2,0,"mat-error",3),t.YNc(17,U,2,0,"mat-error",3),t.YNc(18,x,2,0,"mat-error",3),t.qZA(),t.TgZ(19,"div",6)(20,"button",7),t._uU(21,"Submit"),t.qZA()(),t.TgZ(22,"p"),t._uU(23,"If you don't have an account: "),t.TgZ(24,"a",8),t._uU(25,"Register"),t.qZA()(),t.TgZ(26,"p"),t._uU(27,"Continue without an account: "),t.TgZ(28,"a",8),t._uU(29,"Skip"),t.qZA()()()),2&r&&(t.Q6J("formGroup",o.form),t.xp6(6),t.Q6J("required",!1),t.xp6(1),t.Q6J("ngIf",o.emailFormControl.touched&&o.emailFormControl.hasError("required")),t.xp6(1),t.Q6J("ngIf",o.emailFormControl.touched&&o.emailFormControl.hasError("pattern")),t.xp6(4),t.Q6J("required",!1)("type",o.hide?"password":"text"),t.xp6(1),t.uIk("aria-label","Hide password")("aria-pressed",o.hide),t.xp6(2),t.Oqu(o.hide?"visibility_off":"visibility"),t.xp6(1),t.Q6J("ngIf",o.passwordFormControl.touched&&o.passwordFormControl.hasError("required")),t.xp6(1),t.Q6J("ngIf",o.passwordFormControl.touched&&o.passwordFormControl.hasError("minlength")),t.xp6(1),t.Q6J("ngIf",o.passwordFormControl.touched&&o.passwordFormControl.hasError("maxlength")),t.xp6(2),t.Q6J("disabled",o.form.invalid||o.isLogging),t.xp6(4),t.Q6J("routerLink",t.DdM(15,J)),t.xp6(4),t.Q6J("routerLink",t.DdM(16,O)))},dependencies:[c.Hw,l.KE,l.hX,l.TO,l.R9,i._Y,i.Fj,i.JJ,i.JL,i.Q7,i.sg,i.u,f.O5,d.rH,p.lW,p.RK,C.Nt],styles:["form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}form[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:80px;margin:0 30px 20px}form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:20px 0 0}form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:400;margin:0 0 20px}"]}),e})()},{path:"register",component:(()=>{class e{constructor(r,o,s,m,u){this.fb=r,this.router=o,this.authService=s,this.matDialog=m,this.matSnackBar=u,this.hidePass=!0,this.hideRePass=!0}ngOnInit(){this.buildForm()}get emailFormControl(){return this.form.get("email")}get passwordFormControl(){return this.form.get("password")}get rePasswordFormControl(){return this.form.get("rePassword")}buildForm(){this.form=this.fb.group({email:["",[i.kI.required,i.kI.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],password:["",[i.kI.required,i.kI.minLength(4),i.kI.maxLength(32)]],rePassword:["",[i.kI.required,S("password")]]})}redirectTo(r){this.router.navigate(r)}onSubmit(){if(this.form.valid){const r=this.form.value.email,o=this.form.value.password,s="register",m=this.matDialog.open(T,{data:"Registering an account and logging in"});m.afterOpened().subscribe(()=>{this.isRegistering=!0,this.authService.auth(r,o,s).pipe((0,_.q)(1)).subscribe({next:u=>{this.isRegistering=!1,m.close(),localStorage.setItem("token",u.token),this.router.navigate(["/","calculator"])},error:u=>{m.close(),this.isRegistering=!1,this.matSnackBar.open(403===u.status?"This email is already registered":"Something went wrong",void 0,{duration:4e3})}})})}}}return e.\u0275fac=function(r){return new(r||e)(t.Y36(i.qu),t.Y36(d.F0),t.Y36(w),t.Y36(g.uw),t.Y36(h.ux))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-register"]],decls:39,vars:21,consts:[[3,"formGroup","ngSubmit"],["appearance","outline"],["matInput","","formControlName","email","placeholder","pat@example.com","required",""],[4,"ngIf"],["matInput","","formControlName","password","required","",3,"type"],["type","button","mat-icon-button","","matSuffix","",3,"click"],["matInput","","formControlName","rePassword","required","",3,"type"],[1,"actions"],["type","submit","mat-raised-button","",3,"disabled"],[3,"routerLink"]],template:function(r,o){1&r&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return o.onSubmit()}),t.TgZ(1,"h2"),t._uU(2,"Register"),t.qZA(),t.TgZ(3,"mat-form-field",1)(4,"mat-label"),t._uU(5,"email"),t.qZA(),t._UZ(6,"input",2),t.YNc(7,L,2,0,"mat-error",3),t.YNc(8,M,2,0,"mat-error",3),t.qZA(),t.TgZ(9,"mat-form-field",1)(10,"mat-label"),t._uU(11,"password"),t.qZA(),t._UZ(12,"input",4),t.TgZ(13,"button",5),t.NdJ("click",function(){return o.hidePass=!o.hidePass}),t.TgZ(14,"mat-icon"),t._uU(15),t.qZA()(),t.YNc(16,k,2,0,"mat-error",3),t.YNc(17,Y,2,0,"mat-error",3),t.YNc(18,N,2,0,"mat-error",3),t.qZA(),t.TgZ(19,"mat-form-field",1)(20,"mat-label"),t._uU(21,"confirm password"),t.qZA(),t._UZ(22,"input",6),t.TgZ(23,"button",5),t.NdJ("click",function(){return o.hideRePass=!o.hideRePass}),t.TgZ(24,"mat-icon"),t._uU(25),t.qZA()(),t.YNc(26,Q,2,0,"mat-error",3),t.YNc(27,D,2,0,"mat-error",3),t.qZA(),t.TgZ(28,"div",7)(29,"button",8),t._uU(30,"Submit"),t.qZA()(),t.TgZ(31,"p"),t._uU(32,"If you have an account: "),t.TgZ(33,"a",9),t._uU(34,"Login"),t.qZA()(),t.TgZ(35,"p"),t._uU(36,"Continue without an account: "),t.TgZ(37,"a",9),t._uU(38,"Skip"),t.qZA()()()),2&r&&(t.Q6J("formGroup",o.form),t.xp6(7),t.Q6J("ngIf",o.emailFormControl.touched&&o.emailFormControl.hasError("required")),t.xp6(1),t.Q6J("ngIf",o.emailFormControl.touched&&o.emailFormControl.hasError("pattern")),t.xp6(4),t.Q6J("type",o.hidePass?"password":"text"),t.xp6(1),t.uIk("aria-label","Hide password")("aria-pressed",o.hidePass),t.xp6(2),t.Oqu(o.hidePass?"visibility_off":"visibility"),t.xp6(1),t.Q6J("ngIf",o.passwordFormControl.touched&&o.passwordFormControl.hasError("required")),t.xp6(1),t.Q6J("ngIf",o.passwordFormControl.touched&&o.passwordFormControl.hasError("minlength")),t.xp6(1),t.Q6J("ngIf",o.passwordFormControl.touched&&o.passwordFormControl.hasError("maxlength")),t.xp6(4),t.Q6J("type",o.hideRePass?"password":"text"),t.xp6(1),t.uIk("aria-label","Hide rePassword")("aria-pressed",o.hideRePass),t.xp6(2),t.Oqu(o.hideRePass?"visibility_off":"visibility"),t.xp6(1),t.Q6J("ngIf",o.rePasswordFormControl.touched&&o.rePasswordFormControl.hasError("required")),t.xp6(1),t.Q6J("ngIf",o.rePasswordFormControl.touched&&o.rePasswordFormControl.hasError("confirmPassword")),t.xp6(2),t.Q6J("disabled",o.form.invalid||o.isRegistering),t.xp6(4),t.Q6J("routerLink",t.DdM(19,E)),t.xp6(4),t.Q6J("routerLink",t.DdM(20,z)))},dependencies:[c.Hw,l.KE,l.hX,l.TO,l.R9,i._Y,i.Fj,i.JJ,i.JL,i.Q7,i.sg,i.u,f.O5,d.rH,p.lW,p.RK,C.Nt],styles:["form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%}form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%;margin-bottom:clamp(4px,2vh,20px)}form[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:80px;margin:0 30px 20px}form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:20px 0 0}form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:400;margin:0 0 20px}"]}),e})()},{path:"**",redirectTo:"login"}];let j=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.Bz.forChild(B),d.Bz]}),e})();var H=a(6012);let X=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e,bootstrap:[b.T]}),e.\u0275inj=t.cJS({imports:[c.Ps,v.SJ,l.lN,i.UX,f.ez,d.Bz,j,p.ot,C.c,H.QW,h.ZX]}),e})()}}]);