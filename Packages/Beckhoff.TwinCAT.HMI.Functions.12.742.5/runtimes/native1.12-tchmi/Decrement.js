var TcHmi;!function(r){let e;!function(e){let o;!function(e){e.Decrement=function(e,o,n,s){null!=o?o instanceof r.Symbol?o.readEx((function(t){if(t.error!==r.Errors.NONE)return void e.error(t.error,{code:t.error,message:r.Errors[t.error],reason:"Function: Decrement, symbol value read failed",domain:"Function",errors:t.details?[t.details]:void 0});let i=r.ValueConverter.toNumber(t.value);if(null===i)return void e.error(r.Errors.E_PARAMETER_INVALID,{code:r.Errors.E_PARAMETER_INVALID,message:r.Errors[r.Errors.E_PARAMETER_INVALID],reason:"Function: Decrement, symbol value is no number.",domain:"Function"});let E=r.ValueConverter.toNumber(s,1);isNaN(E)&&(E=1),i-=E;const c=r.ValueConverter.toNumber(n);null===c||isNaN(c)||c<=i?o.write(i,(function(o){o.error===r.Errors.NONE?e.success():e.error(o.error,{code:o.error,message:r.Errors[o.error],reason:"Function: Decrement, symbol value write failed",domain:"Function",errors:o.details?[o.details]:void 0})})):e.success()})):e.error(r.Errors.E_PARAMETER_INVALID,{code:r.Errors.E_PARAMETER_INVALID,message:r.Errors[r.Errors.E_PARAMETER_INVALID],reason:"Function: Decrement, parameter is no symbol.",domain:"Function"}):e.error(r.Errors.E_PARAMETER_INVALID,{code:r.Errors.E_PARAMETER_INVALID,message:r.Errors[r.Errors.E_PARAMETER_INVALID],reason:"Function: Decrement, Requested symbol is not set.",domain:"Function"})}}(o=e.Beckhoff||(e.Beckhoff={})),e.registerFunctionEx("Decrement","TcHmi.Functions.Beckhoff",o.Decrement)}(e=r.Functions||(r.Functions={}))}(TcHmi||(TcHmi={}));