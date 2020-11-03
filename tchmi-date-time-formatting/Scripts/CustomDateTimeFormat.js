// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.742.5/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var tchmi_date_time_formatting;
        (function (tchmi_date_time_formatting) {
            function CustomDateTimeFormat(DateTimeString) {

                // example of a substitute date time format when TcHmi.Localization.formatDate(date) is not possible.

                var date = new Date(DateTimeString);

                // information regarding the intl.datetimeformat is found here..
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat

                var options = {
                    year: 'numeric', month: 'numeric', day: 'numeric',
                    hour: 'numeric', minute: 'numeric', second: 'numeric',
                    hour12: true,
                };

                return (new Intl.DateTimeFormat('en-GB', options).format(date));

            }
            tchmi_date_time_formatting.CustomDateTimeFormat = CustomDateTimeFormat;
        })(tchmi_date_time_formatting = Functions.tchmi_date_time_formatting || (Functions.tchmi_date_time_formatting = {}));
        Functions.registerFunctionEx('CustomDateTimeFormat', 'TcHmi.Functions.tchmi_date_time_formatting', tchmi_date_time_formatting.CustomDateTimeFormat);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);