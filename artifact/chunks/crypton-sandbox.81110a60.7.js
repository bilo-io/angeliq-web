(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1120:function(t,e,n){"use strict";n.r(e),n.d(e,"CryptonSandbox",(function(){return v}));var a=n(0),o=n.n(a),r=(n(6),n(67),n(35),n(9)),c=(n(1144),n(240),n(172)),i=n(1145),l=n(1150);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function y(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function b(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var v=function(t){function e(){var t,n,a;p(this,e);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return b(a,(n=a=b(this,(t=g(e)).call.apply(t,[this].concat(r))),a.state={isLoading:{ipAddress:!0,countryForIP:!0,cryptoInfo:!0,cryptoIndex:!0,chartData:!0,cryptoCoins:!0},data:{}},a.setChartType=function(t){a.setState({chartType:t.target.value})},a.fetchLocationInfo=function(){Object(c.b)().then((function(t){var e=t.ip;a.setState({data:d({},a.state.data,{ipAddress:e})}),Object(c.a)(e).then((function(t){console.log(t),a.setState({data:d({},a.state.data,{country:t,currency:Object(l.a)(null==t?void 0:t.countryCode)})})})).catch((function(t){console.log(t)})).finally((function(){a.setState({isLoading:d({},a.state.isLoading,{countryForIP:!1})})}))})).catch((function(t){console.log(t)})).finally((function(){a.setState({isLoading:d({},a.state.isLoading,{ipAddress:!1})})}))},a.onChange=function(t){},n))}var n,a,s;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(e,t),n=e,(a=[{key:"componentDidMount",value:function(){this.fetchLocationInfo(),this.fetchCryptoInfo()}},{key:"fetchCryptoInfo",value:function(){var t=this;Object(i.d)().then((function(e){t.setState({data:d({},t.state.data,{cryptoExchanges:e})})})).finally((function(){t.setState({isLoading:d({},t.state.isLoading,{cryptoExchanges:!1})})})),Object(i.e)().then((function(e){t.setState({data:d({},t.state.data,{cryptoGlobal:e})})})).finally((function(){t.setState({isLoading:d({},t.state.isLoading,{cryptoGlobal:!1})})})),Object(i.f)().then((function(e){t.setState({data:d({},t.state.data,{cryptoTrending:e})})})).finally((function(){t.setState({isLoading:d({},t.state.isLoading,{cryptoTrending:!1})})})),Object(i.c)().then((function(e){t.setState({data:d({},t.state.data,{cryptoExchangeRates:e})})})).finally((function(){t.setState({isLoading:d({},t.state.isLoading,{cryptoExchangeRates:!1})})})),Object(i.a)({id:"bitcoin",currency:"usd",days:7}).then((function(e){t.setState({data:d({},t.state.data,{chartData:e})})})).finally((function(){t.setState({isLoading:d({},t.state.isLoading,{chartData:!1})})}))}},{key:"render",value:function(){var t,e,n,a,c,i,l,s=this.state,u=s.isLoading,f=s.data,p=f&&(null===(t=f.cryptoExchangeRates)||void 0===t?void 0:t.rates)?Object.keys(null==f?void 0:f.cryptoExchangeRates.rates):[],y=p.map((function(t){return d({id:t,key:t},null==f?void 0:f.cryptoExchangeRates.rates[t])})),b=f.currency;return console.log({keys:p,items:y}),(null==f?void 0:null===(e=f.chartData)||void 0===e?void 0:null===(n=e.prices)||void 0===n?void 0:n.length)>0&&f.chartData.prices.map((function(t){return[new Date(t[0]),t[1]]})),null==f||null===(a=f.chartData)||void 0===a||a.prices,o.a.createElement("div",{className:"page"},o.a.createElement("div",null,o.a.createElement("h1",null,"Crypton Sandbox"),o.a.createElement(r.c,{isLoading:u.ipAddress},o.a.createElement("div",{className:"card card-1 flex-row space-between",style:{padding:"1rem",borderRadius:"6px",border:"1px solid rgba(grey, 0.5)"}},o.a.createElement("div",null,"IP: ",o.a.createElement("strong",null,f.ipAddress)),o.a.createElement(r.c,{isLoading:u.country},o.a.createElement("div",{className:"flex-row space-between"},o.a.createElement("div",null,null===(c=f.country)||void 0===c?void 0:c.countryName),o.a.createElement("div",null,"(",null===(i=f.country)||void 0===i?void 0:i.countryCode,")"),o.a.createElement("div",null,b),o.a.createElement("div",null,null===(l=f.country)||void 0===l?void 0:l.countryEmoji))))),o.a.createElement(r.c,{isLoading:u.cryptoExchanges},o.a.createElement("div",null,"CryptoExchanges: ",o.a.createElement("strong",null,o.a.createElement("pre",null))),o.a.createElement("div",{className:"flex-row flex-wrap"},!1))))}}])&&y(n.prototype,a),s&&y(n,s),e}(a.Component);e.default=v}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwcy9jcnlwdG9uL3NhbmRib3gvaW5kZXguanMiXSwibmFtZXMiOlsiQ3J5cHRvblNhbmRib3giLCJzdGF0ZSIsImlzTG9hZGluZyIsImlwQWRkcmVzcyIsImNvdW50cnlGb3JJUCIsImNyeXB0b0luZm8iLCJjcnlwdG9JbmRleCIsImNoYXJ0RGF0YSIsImNyeXB0b0NvaW5zIiwiZGF0YSIsInNldENoYXJ0VHlwZSIsImUiLCJzZXRTdGF0ZSIsImNoYXJ0VHlwZSIsInRhcmdldCIsInZhbHVlIiwiZmV0Y2hMb2NhdGlvbkluZm8iLCJmZXRjaElQQWRkcmVzcyIsInRoZW4iLCJyZXNwb25zZSIsImlwIiwiZmV0Y2hDb3VudHJ5Rm9ySVAiLCJjb25zb2xlIiwibG9nIiwiY291bnRyeSIsImN1cnJlbmN5IiwiZ2V0Q3VycmVuY3kiLCJjb3VudHJ5Q29kZSIsImNhdGNoIiwiZXJyb3IiLCJmaW5hbGx5Iiwib25DaGFuZ2UiLCJ0aGlzIiwiZmV0Y2hDcnlwdG9JbmZvIiwiZmV0Y2hFeGNoYW5nZXMiLCJjcnlwdG9FeGNoYW5nZXMiLCJmZXRjaEdsb2JhbCIsImNyeXB0b0dsb2JhbCIsImZldGNoU2VhcmNoVHJlbmRpbmciLCJjcnlwdG9UcmVuZGluZyIsImZldGNoRXhjaGFuZ2VSYXRlcyIsImNyeXB0b0V4Y2hhbmdlUmF0ZXMiLCJmZXRjaENoYXJ0RGF0YSIsImlkIiwiZGF5cyIsImtleXMiLCJyYXRlcyIsIk9iamVjdCIsIml0ZW1zIiwibWFwIiwia2V5IiwicHJpY2VzIiwibGVuZ3RoIiwiZGF0YVBvaW50IiwiRGF0ZSIsImNsYXNzTmFtZSIsInN0eWxlIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImNvdW50cnlOYW1lIiwiY291bnRyeUVtb2ppIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoieXlEQW9DQSxJQU1hQSxFQUFiLHVMQUNJQyxNQUFRLENBQ0pDLFVBQVcsQ0FDUEMsV0FBVyxFQUNYQyxjQUFj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b0JLLE9BQVMsR0FDaEdFLEVBQVFILEVBQUtJLEtBQUksU0FBQUMsR0FBRyxVQUFPUCxHQUFJTyxFQUFLQSxPQUFRekMsYUFBeEIsRUFBd0JBLEVBQU1nQyxvQkFBb0JLLE1BQU1JLE9BQzFFekIsRUFBYWhCLEVBQWJnQixTQWNSLE9BWkFILFFBQVFDLElBQUksQ0FBRXNCLE9BQU1HLFdBRUZ2QyxhQUFBLFlBQUFBLEVBQU1GLGlCQUFOLHlCQUFpQjRDLGNBQWpCLGVBQXlCQyxRQUFTLEdBQzlDM0MsRUFBS0YsVUFBVTRDLE9BQU9GLEtBQUksU0FBQUksR0FBUyxNQUFLLENBQUMsSUFBSUMsS0FBS0QsRUFBVSxJQUFLQSxFQUFVLE9BS25FNUMsU0FBRixVQUFFQSxFQUFNRixpQkFBUixPQUFFLEVBQWlCNEMsT0FJeEIseUJBQUtJLFVBQVUsUUFDbEIsNkJBQ0ksK0NBQ0Esa0JBQUMsSUFBRCxDQUFPckQsVUFBWUEsRUFBVUMsV0FDekIseUJBQUtvRCxVQUFVLHFDQUFxQ0MsTUFBTyxDQUFFQyxRQUFTLE9BQVFDLGFBQWMsTUFBT0MsT0FBUSw4QkFDdkcsb0NBQVMsZ0NBQVNsRCxFQUFLTixZQUN2QixrQkFBQyxJQUFELENBQU9ELFVBQVlBLEVBQVVzQixTQUN6Qix5QkFBSytCLFVBQVUsMEJBQ1gsdUNBQU85QyxFQUFLZSxlQUFaLGFBQU8sRUFBY29DLGFBQ3JCLDJDQUFRbkQsRUFBS2UsZUFBYixhQUFRLEVBQWNHLFlBQXRCLEtBQ0EsNkJBQU9GLEdBQ1AsdUNBQU9oQixFQUFLZSxlQUFaLGFBQU8sRUFBY3FDLGtCQStCckMsa0JBQUMsSUFBRCxDQUFPM0QsVUFBWUEsRUFBVWlDLGlCQUN6QixpREFDaUIsZ0NBQ1QsZ0NBS1IseUJBQUtvQixVQUFVLHVCQUVQLFcsMkJBNU81QixHQUFvQ08sYUF5VHJCOUQiLCJmaWxlIjoiY2h1bmtzL2NyeXB0b24tc2FuZGJveC44MTExMGE2MC43LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gI3JlZ2lvbiBNb2R1bGVzXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRkFJY29uIGZyb20gJ3JlYWN0LWZvbnRhd2Vzb21lJ1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuLy8gI2VuZHJlZ2lvblxuXG4vLyAjcmVnaW9uIENvbXBvbmVudHNcbmltcG9ydCB7XG4gICAgQXN5bmMsXG4gICAgTG9hZGVyLFxuICAgIExvYWRlclR5cGVcbn0gZnJvbSAnY29tcG9uZW50cydcbmltcG9ydCB7XG4gICAgQ3J5cHRvbkNoYXJ0XG59IGZyb20gJy4uL2NoYXJ0J1xuLy8gI2VuZHJlZ2lvblxuXG4vLyAjcmVnaW9uIE1pc2NcbmltcG9ydCBkYXRhIGZyb20gJ2RlbW8vbW9jay1kYXRhLzFkJ1xuaW1wb3J0IHtcbiAgICBmZXRjaElQQWRkcmVzcyxcbiAgICBmZXRjaENvdW50cnlGb3JJUFxufSBmcm9tICd1dGlsL2FwaXMvaXAnXG5pbXBvcnQge1xuICAgIGZldGNoRXhjaGFuZ2VzLFxuICAgIGZldGNoQ3J5cHRvSW5kZXgsXG4gICAgZmV0Y2hDaGFydERhdGEsXG4gICAgZmV0Y2hFeGNoYW5nZVJhdGVzLFxuICAgIGZldGNoT0hMQyxcbiAgICBmZXRjaEdsb2JhbCwgZmV0Y2hTZWFyY2hUcmVuZGluZ1xufSBmcm9tICd1dGlsL2FwaXMvY3J5cHRvJ1xuaW1wb3J0IHsgZ2V0Q3VycmVuY3kgfSBmcm9tICcuLi8uLi8uLi91dGlsL2N1cnJlbmNpZXMnXG4vLyAjZW5kcmVnaW9uXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG59KVxuXG5jb25zdCBtYXBBY3Rpb25zVG9Qcm9wcyA9IGRpc3BhdGNoID0+IGJpbmRBY3Rpb25DcmVhdG9ycyh7XG59LCBkaXNwYXRjaClcblxuZXhwb3J0IGNsYXNzIENyeXB0b25TYW5kYm94IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgaXNMb2FkaW5nOiB7XG4gICAgICAgICAgICBpcEFkZHJlc3M6IHRydWUsXG4gICAgICAgICAgICBjb3VudHJ5Rm9ySVA6IHRydWUsXG4gICAgICAgICAgICBjcnlwdG9JbmZvOiB0cnVlLFxuICAgICAgICAgICAgY3J5cHRvSW5kZXg6IHRydWUsXG4gICAgICAgICAgICBjaGFydERhdGE6IHRydWUsXG4gICAgICAgICAgICBjcnlwdG9Db2luczogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiB7fVxuICAgIH1cblxuICAgIHNldENoYXJ0VHlwZSA9IGUgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNoYXJ0VHlwZTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hMb2NhdGlvbkluZm8oKVxuICAgICAgICB0aGlzLmZldGNoQ3J5cHRvSW5mbygpXG4gICAgfVxuXG4gICAgZmV0Y2hMb2NhdGlvbkluZm8gPSAoKSA9PiB7XG4gICAgICAgIGZldGNoSVBBZGRyZXNzKClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpcEFkZHJlc3MgPSByZXNwb25zZS5pcFxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBpcEFkZHJlc3NcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBmZXRjaENvdW50cnlGb3JJUChpcEFkZHJlc3MpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50cnk6IHJlc3BvbnNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeTogZ2V0Q3VycmVuY3kocmVzcG9uc2U/LmNvdW50cnlDb2RlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUuaXNMb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudHJ5Rm9ySVA6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLmlzTG9hZGluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlwQWRkcmVzczogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGZldGNoQ3J5cHRvSW5mbyAoKSB7XG4gICAgICAgIGZldGNoRXhjaGFuZ2VzKClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3J5cHRvRXhjaGFuZ2VzOiByZXNwb25zZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5pc0xvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjcnlwdG9FeGNoYW5nZXM6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcblxuICAgICAgICBmZXRjaEdsb2JhbCgpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyeXB0b0dsb2JhbDogcmVzcG9uc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUuaXNMb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3J5cHRvR2xvYmFsOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgZmV0Y2hTZWFyY2hUcmVuZGluZygpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyeXB0b1RyZW5kaW5nOiByZXNwb25zZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5pc0xvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjcnlwdG9UcmVuZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIGZldGNoRXhjaGFuZ2VSYXRlcygpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyeXB0b0V4Y2hhbmdlUmF0ZXM6IHJlc3BvbnNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLmlzTG9hZGluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyeXB0b0V4Y2hhbmdlUmF0ZXM6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcblxuICAgICAgICBmZXRjaENoYXJ0RGF0YSh7IGlkOiAnYml0Y29pbicsIGN1cnJlbmN5OiAndXNkJywgZGF5czogNyB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFydERhdGE6IHJlc3BvbnNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLmlzTG9hZGluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0RGF0YTogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIG9uQ2hhbmdlID0gZSA9PiB7XG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgY29uc3QgeyBpc0xvYWRpbmcsIGRhdGEgfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgY29uc3Qga2V5cyA9IGRhdGEgJiYgZGF0YS5jcnlwdG9FeGNoYW5nZVJhdGVzPy5yYXRlcyA/IE9iamVjdC5rZXlzKGRhdGE/LmNyeXB0b0V4Y2hhbmdlUmF0ZXMucmF0ZXMpIDogW11cbiAgICAgICAgY29uc3QgaXRlbXMgPSBrZXlzLm1hcChrZXkgPT4gKHsgaWQ6IGtleSwga2V5LCAuLi5kYXRhPy5jcnlwdG9FeGNoYW5nZVJhdGVzLnJhdGVzW2tleV0gfSkpXG4gICAgICAgIGNvbnN0IHsgY3VycmVuY3kgfSA9IGRhdGFcblxuICAgICAgICBjb25zb2xlLmxvZyh7IGtleXMsIGl0ZW1zIH0pXG5cbiAgICAgICAgY29uc3QgY2hhcnREYXRhID0gZGF0YT8uY2hhcnREYXRhPy5wcmljZXM/Lmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gZGF0YS5jaGFydERhdGEucHJpY2VzLm1hcChkYXRhUG9pbnQgPT4gKFtuZXcgRGF0ZShkYXRhUG9pbnRbMF0pLCBkYXRhUG9pbnRbMV1dKSlcbiAgICAgICAgICAgIDogWzEsIDIsIDNdXG5cbiAgICAgICAgY29uc3Qgc2VyaWVzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGE/LmNoYXJ0RGF0YT8ucHJpY2VzLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdTZXJpZXMnXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdwYWdlJz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPkNyeXB0b24gU2FuZGJveDwvaDE+XG4gICAgICAgICAgICAgICAgPEFzeW5jIGlzTG9hZGluZz17IGlzTG9hZGluZy5pcEFkZHJlc3MgfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQgY2FyZC0xIGZsZXgtcm93IHNwYWNlLWJldHdlZW4nIHN0eWxlPXt7IHBhZGRpbmc6ICcxcmVtJywgYm9yZGVyUmFkaXVzOiAnNnB4JywgYm9yZGVyOiAnMXB4IHNvbGlkIHJnYmEoZ3JleSwgMC41KScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PklQOiA8c3Ryb25nPntkYXRhLmlwQWRkcmVzc308L3N0cm9uZz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBc3luYyBpc0xvYWRpbmc9eyBpc0xvYWRpbmcuY291bnRyeSB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4LXJvdyBzcGFjZS1iZXR3ZWVuJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57IGRhdGEuY291bnRyeT8uY291bnRyeU5hbWUgfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pih7IGRhdGEuY291bnRyeT8uY291bnRyeUNvZGUgfSk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57IGN1cnJlbmN5IH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57IGRhdGEuY291bnRyeT8uY291bnRyeUVtb2ppIH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQXN5bmM+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7LyogPEFzeW5jIGlzTG9hZGluZz17IGlzTG9hZGluZy5jaGFydERhdGEgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPy5jaGFydERhdGE/LnByaWNlcyAmJiA8Q3J5cHRvbkNoYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlcmllcz17IFt7IGRhdGE6IGRhdGEuY2hhcnREYXRhPy5wcmljZXMgfV0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJpZXM9e1tdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvQXN5bmM+ICovfVxuICAgICAgICAgICAgICAgIDwvQXN5bmM+XG4gICAgICAgICAgICAgICAgey8qIDxBc3luYyBpc0xvYWRpbmc9eyBpc0xvYWRpbmcuY3J5cHRvR2xvYmFsIH0+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIChkYXRhPy5jcnlwdG9HbG9iYWwgfHwgW10pLm1hcCgoY29pbiwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2luJyBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29pbi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvQXN5bmM+XG4gICAgICAgICAgICAgICAgPEFzeW5jIGlzTG9hZGluZz17IGlzTG9hZGluZy5jcnlwdG9UcmVuZGluZyB9PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAoZGF0YT8uY3J5cHRvVHJlbmRpbmcgfHwgW10pLm1hcCgoY29pbiwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2luJyBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29pbi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvQXN5bmM+ICovfVxuICAgICAgICAgICAgICAgIDxBc3luYyBpc0xvYWRpbmc9eyBpc0xvYWRpbmcuY3J5cHRvRXhjaGFuZ2VzIH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIENyeXB0b0V4Y2hhbmdlczogPHN0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogeyBKU09OLnN0cmluZ2lmeShkYXRhLmNyeXB0b0V4Y2hhbmdlcywgdW5kZWZpbmVkLCAyKX0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4LXJvdyBmbGV4LXdyYXAnPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlICYmIGRhdGE/LmNyeXB0b0V4Y2hhbmdlcz8ubWFwKChpdGVtLCBpKSA9PiA8ZGl2IGtleT17IGBjcnlwdG9DdXJyZW5jeS0ke2l9YCB9IGNsYXNzTmFtZT0nY2FyZCBwYWRkZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgbGlnaHRncmV5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTZyZW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnOHJlbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICcwLjVyZW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleC1yb3cgc3BhY2UtYmV0d2Vlbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc0cmVtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICdhdXRvJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17IGl0ZW0uaW1hZ2UgfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMS4ycmVtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PnsgaXRlbT8uaWQ/LnRvVXBwZXJDYXNlKCkgfTwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+eyBpdGVtLm5hbWUgfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4LXJvdyc+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+eyBpdGVtLmNvdW50cnkgfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PnsgaXRlbS50cmFkZV92b2x1bWVfMjRoX2J0YyB9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+eyBpdGVtLnRyYWRlX3ZvbHVtZV8yNGhfYnRjX25vcm1hbGl6ZWQgfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PnsgaXRlbS50cnVzdF9zY29yZSB9PC8gZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PnsgaXRlbS5jb3VudHJ5IH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17IGl0ZW0udXJsIH0gdGFyZ2V0PSdfYmxhbmsnPnsgaXRlbS51cmwgfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Fc3RhYmxpc2hlZDogeyBpdGVtLnllYXJfZXN0YWJsaXNoZWQgfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMubWFwKChpdGVtLCBpKSA9PiA8ZGl2IGtleT17IGBjcnlwdG9DdXJyZW5jeS0ke2l9YCB9IGNsYXNzTmFtZT0nY2FyZCBwYWRkZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgbGlnaHRncmV5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTZyZW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnOHJlbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICcwLjVyZW0nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleC1yb3cgc3BhY2UtYmV0d2Vlbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxLjJyZW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+eyBpdGVtLmtleS50b1VwcGVyQ2FzZSgpIH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+eyBpdGVtLm5hbWUgfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHN0cm9uZz57aXRlbS51bml0fSB7IGl0ZW0udmFsdWUudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIgfSkgfTwvc3Ryb25nPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57IGl0ZW0udHlwZSB9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE/LmNyeXB0b0luZGV4Py5tYXAoKGl0ZW0sIGkpID0+IDxkaXYga2V5PXtgY3J5cHRvQ3VycmVuY3ktJHtpfWB9IGNsYXNzTmFtZT0nY2FyZCBwYWRkZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgbGlnaHRncmV5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTZyZW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnOHJlbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICcwLjVyZW0nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PnsgaXRlbS5pZCB9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGI+cmFuazo8L2I+IHsgaXRlbS5yYW5rIH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48Yj5zeW1ib2w6PC9iPiB7IGl0ZW0uc3ltYm9sIH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48Yj5pc19uZXc6PC9iPiB7IGl0ZW0uaXNfbmV3ID8gJ1lFUycgOiAnTk8nIH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48Yj5pc19hY3RpdmU6PC9iPiB7IGl0ZW0uaXNfYWN0aXZlID8gJ1lFUycgOiAnTk8nIH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48Yj50eXBlOjwvYj4geyBpdGVtLnR5cGUgfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKi99XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQXN5bmM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcnlwdG9uU2FuZGJveFxuIl0sInNvdXJjZVJvb3QiOiIifQ==