(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{Bbyd:function(e,t,n){"use strict";var r=n("vDqi"),a=n.n(r);t.a={addOwnTransaction:function(e){return a.a.post("transactions/credit",e)},getOwnTransactionLogs:function(){return a.a.get("transactions/credit/logs")},addBeneficiaryTransaction:function(e){return a.a.post("transactions/beneficiary",e)},getBeneficiaryTransactionLogs:function(){return a.a.get("transactions/debit/logs")}}},EwQA:function(e,t,n){var r=n("zZ0H");e.exports=function(e){return"function"==typeof e?e:r}},bNQv:function(e,t,n){var r=n("gFfm"),a=n("SKAX"),o=n("EwQA"),i=n("Z0cm");e.exports=function(e,t){return(i(e)?r:a)(e,o(t))}},gFfm:function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e}},u7yr:function(e,t,n){"use strict";n.r(t);var r=n("L2JU"),a=n("Bbyd"),o=n("pNfh"),i=n("xkGU"),c=n.n(i);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m={name:"OtherDepositForm",components:{transactions:a.a,CardComponent:o.a},data:function(){return{isFileUploaded:!1,isLoading:!1,errors:{},form:this.getClearFormObject(),readonly:!0,balence:null}},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({formAccountNumberType:function(){return this.errors.account_number?"is-danger":null},formAccountNumberMessage:function(){return this.errors.account_number?this.errors.account_number[0]:"Required. Your account number"},formBeneficiaryAccountNumberType:function(){return this.errors.beneficiary_account_number?"is-danger":null},formBeneficiaryAccountNumberMessage:function(){return this.errors.beneficiary_account_number?this.errors.beneficiary_account_number[0]:"Required. Beneficiary account number"},formBeneficiaryNameType:function(){return this.errors.beneficiary_name?"is-danger":null},formBeneficiaryNameMessage:function(){return this.errors.beneficiary_name?this.errors.beneficiary_name[0]:"Required. Beneficiary account number"},formAmountType:function(){return this.errors.beneficiary_amount?"is-danger":null},formAmountMessage:function(){return this.errors.beneficiary_amount?this.errors.beneficiary_amount[0]:"Required. Transfer amount"},formCommentType:function(){return this.errors.debtor_comment?"is-danger":null},formCommentMessage:function(){return this.errors.debtor_comment?this.errors.debtor_comment[0]:"Required. Your debtor comment"},formBeneficiaryCommentType:function(){return this.errors.beneficiary_comment?"is-danger":null},formBeneficiaryCommentMessage:function(){return this.errors.beneficiary_comment?this.errors.beneficiary_comment[0]:"Required. Your debtor comment"}},Object(r.b)(["userId","userAccount","userBalence"])),mounted:function(){this.form.account_number=this.userAccount,this.form.user_id=this.userId,this.balence=this.userBalence},methods:{getClearFormObject:function(){return{user_id:this.userId,account_number:this.userAccount,beneficiary_account_number:null,beneficiary_amount:null,debtor_comment:null}},submit:function(){var e=this;if(this.isLoading=!0,this.errors={},this.form.account_number==this.form.beneficiary_account_number)return this.isLoading=!1,void this.$buefy.toast.open({message:"Account number and beneficiary ammount should be diffrent",type:"is-warning"});a.a.addBeneficiaryTransaction(this.form).then((function(t){var n=t.data,r=(n.status,n.message);e.isLoading=!1,e.$store.commit("user",t.data.data),e.$emit("transaction-completed"),e.form=e.getClearFormObject(),e.$buefy.snackbar.open({message:r,queue:!1})})).catch((function(t){e.isLoading=!1,t.response.data.errors?e.errors=t.response.data.errors:e.errors={_all:["An error occurred"]},c()(e.errors,(function(t){e.$buefy.toast.open({message:t[0],type:"is-danger",queue:!1})}))}))}},watch:{userId:function(e){this.form.user_id=e},userAccount:function(e){this.form.account_number=e},userBalence:function(e){this.balence=e}}},f=n("KHd+"),b=Object(f.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("card-component",{attrs:{title:"Beneficiary Deposits",icon:"account-circle"}},[n("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[n("b-field",{attrs:{grouped:""}},[n("b-field",{attrs:{expanded:"",label:"Your Account *",message:e.formAccountNumberMessage,type:e.formAccountNumberType}},[n("b-input",{attrs:{max:"10",name:"account_number",required:"",readonly:e.readonly},model:{value:e.form.account_number,callback:function(t){e.$set(e.form,"account_number",t)},expression:"form.account_number"}})],1),e._v(" "),n("b-field",{attrs:{expanded:"",label:"Transfer Amount *",message:e.formAmountMessage,type:e.formAmountType}},[n("b-input",{attrs:{min:"1",max:this.balence,name:"beneficiary_amount",type:"number",required:""},model:{value:e.form.beneficiary_amount,callback:function(t){e.$set(e.form,"beneficiary_amount",t)},expression:"form.beneficiary_amount"}})],1),e._v(" "),n("b-field",{attrs:{expanded:"",label:"Debtor Comment *",message:e.formCommentMessage,type:e.formCommentType}},[n("b-input",{attrs:{max:"15",name:"debtor_comment",required:""},model:{value:e.form.debtor_comment,callback:function(t){e.$set(e.form,"debtor_comment",t)},expression:"form.debtor_comment"}})],1)],1),e._v(" "),n("b-field",{attrs:{grouped:""}},[n("b-field",{attrs:{expanded:"",label:"Beneficiary Account *",message:e.formBeneficiaryAccountNumberMessage,type:e.formBeneficiaryAccountNumberType}},[n("b-input",{attrs:{max:"10",name:"beneficiary_account_number",required:""},model:{value:e.form.beneficiary_account_number,callback:function(t){e.$set(e.form,"beneficiary_account_number",t)},expression:"form.beneficiary_account_number"}})],1),e._v(" "),n("b-field",{attrs:{expanded:"",label:"Beneficiary Name *",message:e.formBeneficiaryNameMessage,type:e.formBeneficiaryNameType}},[n("b-input",{attrs:{max:"15",name:"beneficiary_name",required:""},model:{value:e.form.beneficiary_name,callback:function(t){e.$set(e.form,"beneficiary_name",t)},expression:"form.beneficiary_name"}})],1),e._v(" "),n("b-field",{attrs:{expanded:"",label:"Beneficiary Comment *",message:e.formBeneficiaryCommentMessage,type:e.formBeneficiaryCommentType}},[n("b-input",{attrs:{max:"15",name:"beneficiary_comment",required:""},model:{value:e.form.beneficiary_comment,callback:function(t){e.$set(e.form,"beneficiary_comment",t)},expression:"form.beneficiary_comment"}})],1)],1),e._v(" "),n("hr"),e._v(" "),n("b-field",{attrs:{expanded:""}},[n("div",{staticClass:"control"},[n("button",{staticClass:"button is-success",class:{"is-loading":e.isLoading},attrs:{type:"submit"}},[e._v("\n          Submit\n        ")])])])],1)])}),[],!1,null,null,null).exports;function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p={name:"Othertransfers",components:{transactions:a.a,CardComponent:o.a,BeneficiaryDepositForm:b},data:function(){return{isLoading:!1,paginated:!1,perPage:10,transactions:[],columns:[{field:"to_account",label:"Beneficiary Account Number",searchable:"searchable"},{field:"amount",label:"Deopsit Amount",searchable:"searchable"},{field:"debtor_comment",label:"Debtor Comment",searchable:"searchable"},{field:"type",label:"Type",searchable:"searchable"},{field:"created",label:"Debited Date",searchable:"searchable"}]}},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Object(r.b)(["userId","userAccount"])),created:function(){this.getBeneficiaryTransactions()},mounted:function(){},methods:{getBeneficiaryTransactions:function(){var e=this;this.isLoading=!0,a.a.getBeneficiaryTransactionLogs().then((function(t){e.isLoading=!1,t.data&&t.data.data&&(t.data.data.length>e.perPage&&(e.paginated=!0),e.transactions=t.data.data)})).catch((function(t){e.isLoading=!1,e.$buefy.toast.open({message:"Error: ".concat(t.message),type:"is-danger"})}))}},watch:{userAccount:function(e){e&&this.getBeneficiaryTransactions()}}},y=Object(f.a)(p,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"section is-main-section"},[n("beneficiary-deposit-form",{staticClass:"tile is-child",on:{"transaction-completed":e.getBeneficiaryTransactions}}),e._v(" "),n("card-component",{staticClass:"tile is-child",attrs:{title:"Debit History",icon:"account"}},[n("b-table",{attrs:{data:e.transactions,"per-page":e.perPage,loading:e.isLoading,columns:e.columns,striped:!0,hoverable:!0,paginated:e.paginated}},[n("section",{staticClass:"section",attrs:{slot:"empty"},slot:"empty"},[n("div",{staticClass:"content has-text-grey has-text-centered"},[e.isLoading?[n("p",[n("b-icon",{attrs:{icon:"dots-horizontal",size:"is-large"}})],1),e._v(" "),n("p",[e._v("Fetching data...")])]:[n("p",[n("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large"}})],1),e._v(" "),n("p",[e._v("Nothing's here…")])]],2)])])],1)],1)}),[],!1,null,null,null);t.default=y.exports},xkGU:function(e,t,n){e.exports=n("bNQv")}}]);