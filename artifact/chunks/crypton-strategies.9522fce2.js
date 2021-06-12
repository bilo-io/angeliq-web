(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1121:function(e,t,n){"use strict";n.r(t),n.d(t,"CryptonStrategies",(function(){return h}));var r=n(0),a=n.n(r),i=(n(6),n(5)),o=n(67),s=n(35),c=n(9),l=n(1142);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=[{id:0,name:"News Trading",imageUrl:"https://images-eu.ssl-images-amazon.com/images/I/31dAiCiFteL.png",pros:["A defined entry and exit strategy","Many trade opportunities"],cons:["Overnight risk","News trading requires expert skills"],description:"A news trading strategy involves trading based on news and market expectations, both before and following news releases."},{id:1,name:"End of Day Trading",imageUrl:"https://www.flaticon.com/svg/static/icons/svg/1862/1862321.svg",pros:["It’s suitable for most traders","Less time commitment"],cons:["Overnight risk"],description:"End-of-day traders become active when it becomes clear that the price is going to ‘settle’ or close."},{id:2,name:"Swing Trading",imageUrl:"https://www.flaticon.com/svg/static/icons/svg/1635/1635638.svg",pros:["It’s viable as a hobby","Many trade opportunities"],cons:["Overnight risk","Requires ample research"],description:"Swing trading takes advantage of the market’s oscillations as the price swings back and forth, from an overbought to oversold state."},{id:3,name:"Day Trading",imageUrl:"https://examtimeassets.s3.amazonaws.com/uploads%2Fmedia%2Fdirect%2F7917d430aa2b050153e8c9c1d84c392c%2Fdia-y-noche.png",pros:["There is no overnight risk","Limited intra-day risk","Time flexible trading","Multiple trade opportunities"],cons:["Requires discipline","Flat trades"],description:"Day trading takes advantage of price fluctuations in-between the market open and close hours."},{id:4,name:"Trend Trading",imageUrl:"https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/trends-512.png",pros:["It’s a useful hobby","Many trade opportunities"],cons:["Overnight risk"],description:"The trend is your friend - This strategy describes when a trader uses technical analysis to define a trend, and only enters trades in the direction of the pre-determined trend."},{id:5,name:"Scalp Trading",imageUrl:"https://cdn3.iconfinder.com/data/icons/pictograms-vol-2-3/400/linear_diagram-512.png",pros:["There is no overnight risk","It’s suitable as a hobby","Many trading opportunities"],cons:["Limited market applicability","Requires discipline","It’s an extremely tense environment"],description:"Scalpers aim to ‘scalp’ a small profit from each trade in the hope that all the small profits accumulate."}],h=function(e){function t(){var e,n,r;d(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return p(r,(n=r=p(this,(e=f(t)).call.apply(e,[this].concat(i))),r.state={currency:"usd",viewType:"tile",isLoading:{strategies:!0},data:{strategies:y}},n))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){console.log(this.state.data)}},{key:"render",value:function(){var e=this.state.data;return a.a.createElement("div",{className:"page dark"},a.a.createElement("div",{className:"page-header padded"},a.a.createElement("h3",null,"Strategies")),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("div",{className:"divider horizontal"}),a.a.createElement(c.w,{defaultTab:"strategies",tabs:["strategies","simluation","tutorial"],strategies:a.a.createElement("div",{className:"flex-row flex-wrap"},(e.strategies||y).map((function(e,t){return a.a.createElement("div",{key:t,className:"card card-1",style:{width:"30rem",height:"18rem",borderRadius:"4px",overflow:"hidden",margin:"1rem",backgroundColor:"rgba(255,255,255,0.1)"}},a.a.createElement("div",{className:"flex-row"},a.a.createElement("img",{"no-referrer":"true",src:e.imageUrl,style:{width:"4rem",height:"4rem",marginTop:"1rem",marginLeft:"1rem",marginRight:"2rem"}}),a.a.createElement("div",{style:{fontSize:"1.5rem",lineHeight:"4rem"}},e.name)),a.a.createElement("div",null,e.description),a.a.createElement("div",{className:"flex-row"},a.a.createElement("div",{style:{color:"limegreen"}},a.a.createElement("div",null,"PROS"),a.a.createElement("ul",null,e.pros.map((function(e,t){return a.a.createElement("li",{key:t},e)})))),a.a.createElement("div",{style:{color:"rgba(255,0,0, 0.75)"}},a.a.createElement("div",null,"CONS"),a.a.createElement("ul",null,e.cons.map((function(e,t){return a.a.createElement("li",{key:t},e)}))))))})))}))}}])&&m(n.prototype,r),i&&m(n,i),t}(r.Component);t.default=Object(o.b)((function(e){return{coins:e.crypton.coins}}),(function(e){return Object(s.b)({setCoin:l.d},e)}))(Object(i.g)(h))},1142:function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return c}));var r=n(519),a=n(243),i=function(e){return function(t){t({payload:e,type:a.e})}},o=function(e){return function(e){return Object(r.a)({resourceName:"crypton/assets",actionType:a.a})}},s=function(e){return function(e){return Object(r.a)({resourceName:"crypton/assets",actionType:a.b})}},c=function(e){return function(e){return Object(r.a)({resourceName:"crypton/assets",actionType:a.d})}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY2h1bmtzL2NyeXB0b24tc3RyYXRlZ2llcy45NTIyZmNlMi44LmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsInB1c2giLCIxMTIxIiwibW9kdWxlIiwiX193ZWJwYWNrX2V4cG9ydHNfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJyIiwiZCIsIkNyeXB0b25TdHJhdGVnaWVzIiwicmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyIsInJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdCIsIm4iLCJyZWFjdF9yb3V0ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyIsInJlYWN0X3JlZHV4X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX18iLCJyZWR1eF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNF9fIiwiY29tcG9uZW50c19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNV9fIiwiZGF0YV9yZWR1eF9jcnlwdG9uX2FjdGlvbnNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzZfXyIsIl90eXBlb2YiLCJvYmoiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJzZWxmIiwiY2FsbCIsIlJlZmVyZW5jZUVycm9yIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIl9nZXRQcm90b3R5cGVPZiIsIm8iLCJzZXRQcm90b3R5cGVPZiIsImdldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiX3NldFByb3RvdHlwZU9mIiwicCIsInN0cmF0ZWdpZXMiLCJpZCIsIm5hbWUiLCJpbWFnZVVybCIsInByb3MiLCJjb25zIiwiZGVzY3JpcHRpb24iLCJfQ29tcG9uZW50IiwiX2dldFByb3RvdHlwZU9mMiIsIl90ZW1wIiwiX3RoaXMiLCJ0aGlzIiwiX2xlbiIsImFyZ3VtZW50cyIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJhcHBseSIsImNvbmNhdCIsInN0YXRlIiwiY3VycmVuY3kiLCJ2aWV3VHlwZSIsImlzTG9hZGluZyIsImRhdGEiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJjcmVhdGUiLCJ2YWx1ZSIsIl9pbmhlcml0cyIsImNvbnNvbGUiLCJsb2ciLCJhIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImRlZmF1bHRUYWIiLCJ0YWJzIiwibWFwIiwic3RyYXRlZ3kiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwib3ZlcmZsb3ciLCJtYXJnaW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJuby1yZWZlcnJlciIsInNyYyIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImNvbG9yIiwicG9pbnQiLCJjb2lucyIsImNyeXB0b24iLCJkaXNwYXRjaCIsInNldENvaW4iLCIxMTQyIiwiZmV0Y2hBc3NldHMiLCJmZXRjaEJvdHMiLCJmZXRjaFRyYW5zYWN0aW9ucyIsImRhdGFfcmVkdXhfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyIsIl9yZWR1Y2VyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18iLCJwYXlsb2FkIiwidHlwZSIsInJlc291cmNlTmFtZSIsImFjdGlvblR5cGUiXSwibWFwcGluZ3MiOiJDQUFDQSxPQUFxQixhQUFJQSxPQUFxQixjQUFLLElBQUlDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FFNURDLEtBQ0Es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QTJDMEUsRUFBRUMsY0FBYyxLQUFNLENBQ3RFL0MsSUFBS1IsR0FDSjRFLFFBQ0NoRyxFQUEyQzBFLEVBQUVDLGNBQWMsTUFBTyxDQUN0RU0sTUFBTyxDQUNMYyxNQUFPLHdCQUVSL0YsRUFBMkMwRSxFQUFFQyxjQUFjLE1BQU8sS0FBTSxRQUFTM0UsRUFBMkMwRSxFQUFFQyxjQUFjLEtBQU0sS0FBTUssRUFBU2xDLEtBQUtpQyxLQUFJLFNBQVVpQixFQUFPNUUsR0FDNUwsT0FBT3BCLEVBQTJDMEUsRUFBRUMsY0FBYyxLQUFNLENBQ3RFL0MsSUFBS1IsR0FDSjRFLHNCQW5MK0QvRSxFQUFrQkYsRUFBWUgsVUFBV3FELEdBQWlCQyxHQUFhakQsRUFBa0JGLEVBQWFtRCxHQTBMM0twRSxFQW5HVCxDQW9HRUMsRUFBOEMsV0FDbkJMLEVBQTZCLFFBQUtnQyxPQUFPdkIsRUFBMEQsRUFBakV1QixFQWhLekMsU0FBeUJrQyxHQUM3QyxNQUFPLENBQ0xxQyxNQUFPckMsRUFBTXNDLFFBQVFELFVBSUQsU0FBMkJFLEdBQ2pELE9BQU96RSxPQUFPdEIsRUFBK0QsRUFBdEVzQixDQUF5RSxDQUU5RTBFLFFBQVM5RixFQUF5RSxHQUNqRjZGLEtBc0p5RCxDQUF5R3pFLE9BQU94QixFQUE4RCxFQUFyRXdCLENBQXdFNUIsS0FJek91RyxLQUNBLFNBQVU1RyxFQUFRQyxFQUFxQkMsR0FFN0MsYUFFK0JBLEVBQW9CRSxFQUFFSCxFQUFxQixLQUFLLFdBQWEsT0FBTzBHLEtBQ3BFekcsRUFBb0JFLEVBQUVILEVBQXFCLEtBQUssV0FBYSxPQUFPNEcsS0FDcEUzRyxFQUFvQkUsRUFBRUgsRUFBcUIsS0FBSyxXQUFhLE9BQU82RyxLQUNwRTVHLEVBQW9CRSxFQUFFSCxFQUFxQixLQUFLLFdBQWEsT0FBTzhHLEtBQzlFLElBQUlDLEVBQWdEOUcsRUFBb0IsS0FDcEUrRyxFQUF3Qy9HLEVBQW9CLEtBYWpGeUcsRUFBVSxTQUFpQnBDLEdBQzdCLE9BQU8sU0FBVW1DLEdBQ2ZBLEVBQVMsQ0FDUFEsUUFBUzNDLEVBQ1Q0QyxLQUFNRixFQUF3RCxNQUtoRUosRUFBYyxTQUFxQnRDLEdBQ3JDLE9BQU8sU0FBVW1DLEdBQ2YsT0FBT3pFLE9BQU8rRSxFQUFtRSxFQUExRS9FLENBQTZFLENBQ2xGbUYsYUFBYyxpQkFDZEMsV0FBWUosRUFBNEQsTUFJMUVILEVBQVksU0FBbUJ2QyxHQUNqQyxPQUFPLFNBQVVtQyxHQUNmLE9BQU96RSxPQUFPK0UsRUFBbUUsRUFBMUUvRSxDQUE2RSxDQUNsRm1GLGFBQWMsaUJBQ2RDLFdBQVlKLEVBQTBELE1BSXhFRixFQUFvQixTQUEyQnhDLEdBQ2pELE9BQU8sU0FBVW1DLEdBQ2YsT0FBT3pFLE9BQU8rRSxFQUFtRSxFQUExRS9FLENBQTZFLENBQ2xGbUYsYUFBYyxpQkFDZEMsV0FBWUosRUFBa0UiLCJmaWxlIjoiY2h1bmtzL2NyeXB0b24tc3RyYXRlZ2llcy45NTIyZmNlMi5qcyIsInNvdXJjZVJvb3QiOiIifQ==