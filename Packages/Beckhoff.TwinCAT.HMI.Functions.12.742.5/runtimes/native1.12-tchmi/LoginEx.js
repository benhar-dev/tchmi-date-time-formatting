var TcHmi;!function(o){let r;!function(r){let n;!function(r){r.LoginEx=function(r,n,i,e=!0,c=!0){o.Server.loginEx2(n,i,e,c,null,n=>{if(n.error!==o.Errors.NONE)return TCHMI_CONSOLE_LOG_LEVEL>=1&&o.Log.error("[Source=Framework, Module=TcHmi.Functions.Beckhoff.LoginEx] "+o.Log.buildMessage(n.details)),void r.error(n.error,{code:n.error,message:o.Errors[n.error],reason:"Function: TcHmi.Functions.Beckhoff.LoginEx",domain:"Function",errors:n.details?[n.details]:void 0});r.success()})}}(n=r.Beckhoff||(r.Beckhoff={})),r.registerFunctionEx("LoginEx","TcHmi.Functions.Beckhoff",n.LoginEx)}(r=o.Functions||(o.Functions={}))}(TcHmi||(TcHmi={}));