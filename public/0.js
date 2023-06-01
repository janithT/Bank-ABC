(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/BeneficiaryTransfers.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/BeneficiaryTransfers.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _js_library_transactions_transactions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../js/library/transactions/transactions */ "./resources/js/library/transactions/transactions.js");
/* harmony import */ var _components_CardComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/CardComponent */ "./resources/js/components/CardComponent.vue");
/* harmony import */ var _views_forms_BeneficiaryDepositForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/views/forms/BeneficiaryDepositForm */ "./resources/js/views/forms/BeneficiaryDepositForm.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Othertransfers',
  components: {
    transactions: _js_library_transactions_transactions__WEBPACK_IMPORTED_MODULE_1__["default"],
    CardComponent: _components_CardComponent__WEBPACK_IMPORTED_MODULE_2__["default"],
    BeneficiaryDepositForm: _views_forms_BeneficiaryDepositForm__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      isLoading: false,
      paginated: false,
      perPage: 10,
      transactions: [],
      columns: [{
        field: 'to_account',
        label: 'Beneficiary Account Number',
        searchable: 'searchable'
      }, {
        field: 'amount',
        label: 'Deopsit Amount',
        searchable: 'searchable'
      }, {
        field: 'debtor_comment',
        label: 'Debtor Comment',
        searchable: 'searchable'
      }, {
        field: 'type',
        label: 'Type',
        searchable: 'searchable'
      }, {
        field: 'created',
        label: 'Debited Date',
        searchable: 'searchable'
      }]
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['userId', 'userAccount'])),
  created: function created() {
    this.getBeneficiaryTransactions();
  },
  mounted: function mounted() {},
  methods: {
    getBeneficiaryTransactions: function getBeneficiaryTransactions() {
      var _this = this;

      this.isLoading = true;
      _js_library_transactions_transactions__WEBPACK_IMPORTED_MODULE_1__["default"].getBeneficiaryTransactionLogs().then(function (res) {
        _this.isLoading = false;

        if (res.data && res.data.data) {
          if (res.data.data.length > _this.perPage) {
            _this.paginated = true;
          }

          _this.transactions = res.data.data;
        }
      })["catch"](function (err) {
        _this.isLoading = false;

        _this.$buefy.toast.open({
          message: "Error: ".concat(err.message),
          type: "is-danger"
        });
      });
    }
  },
  watch: {
    userAccount: function userAccount(newValue) {
      if (newValue) {
        this.getBeneficiaryTransactions();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/forms/BeneficiaryDepositForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/forms/BeneficiaryDepositForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _library_transactions_transactions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../library/transactions/transactions */ "./resources/js/library/transactions/transactions.js");
/* harmony import */ var _components_CardComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/CardComponent */ "./resources/js/components/CardComponent.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'OtherDepositForm',
  components: {
    transactions: _library_transactions_transactions__WEBPACK_IMPORTED_MODULE_2__["default"],
    CardComponent: _components_CardComponent__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      isFileUploaded: false,
      isLoading: false,
      errors: {},
      form: this.getClearFormObject(),
      readonly: true,
      balence: null
    };
  },
  computed: _objectSpread({
    formAccountNumberType: function formAccountNumberType() {
      return this.errors.account_number ? 'is-danger' : null;
    },
    formAccountNumberMessage: function formAccountNumberMessage() {
      return this.errors.account_number ? this.errors.account_number[0] : 'Required. Your account number';
    },
    formBeneficiaryAccountNumberType: function formBeneficiaryAccountNumberType() {
      return this.errors.beneficiary_account_number ? 'is-danger' : null;
    },
    formBeneficiaryAccountNumberMessage: function formBeneficiaryAccountNumberMessage() {
      return this.errors.beneficiary_account_number ? this.errors.beneficiary_account_number[0] : 'Required. Beneficiary account number';
    },
    formBeneficiaryNameType: function formBeneficiaryNameType() {
      return this.errors.beneficiary_name ? 'is-danger' : null;
    },
    formBeneficiaryNameMessage: function formBeneficiaryNameMessage() {
      return this.errors.beneficiary_name ? this.errors.beneficiary_name[0] : 'Required. Beneficiary account number';
    },
    formAmountType: function formAmountType() {
      return this.errors.beneficiary_amount ? 'is-danger' : null;
    },
    formAmountMessage: function formAmountMessage() {
      return this.errors.beneficiary_amount ? this.errors.beneficiary_amount[0] : 'Required. Transfer amount';
    },
    formCommentType: function formCommentType() {
      return this.errors.debtor_comment ? 'is-danger' : null;
    },
    formCommentMessage: function formCommentMessage() {
      return this.errors.debtor_comment ? this.errors.debtor_comment[0] : 'Required. Your debtor comment';
    },
    formBeneficiaryCommentType: function formBeneficiaryCommentType() {
      return this.errors.beneficiary_comment ? 'is-danger' : null;
    },
    formBeneficiaryCommentMessage: function formBeneficiaryCommentMessage() {
      return this.errors.beneficiary_comment ? this.errors.beneficiary_comment[0] : 'Required. Your debtor comment';
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])(['userId', 'userAccount', 'userBalence'])),
  mounted: function mounted() {
    // map state value to the varibale
    this.form.account_number = this.userAccount;
    this.form.user_id = this.userId;
    this.balence = this.userBalence;
  },
  methods: {
    // default form data.
    getClearFormObject: function getClearFormObject() {
      return {
        user_id: this.userId,
        account_number: this.userAccount,
        beneficiary_account_number: null,
        beneficiary_amount: null,
        debtor_comment: null
      };
    },

    /**
     * Submit for beneficiary transfer
     *  
     */
    submit: function submit() {
      var _this = this;

      this.isLoading = true;
      this.errors = {}; // Check if same account number

      if (this.form.account_number == this.form.beneficiary_account_number) {
        this.isLoading = false;
        this.$buefy.toast.open({
          message: "Account number and beneficiary ammount should be diffrent",
          type: "is-warning"
        });
        return;
      }

      _library_transactions_transactions__WEBPACK_IMPORTED_MODULE_2__["default"].addBeneficiaryTransaction(this.form).then(function (res) {
        var _res$data = res.data,
            status = _res$data.status,
            message = _res$data.message;
        _this.isLoading = false;

        _this.$store.commit('user', res.data.data);

        _this.$emit('transaction-completed');

        _this.form = _this.getClearFormObject();

        _this.$buefy.snackbar.open({
          message: message,
          queue: false
        });
      })["catch"](function (err) {
        _this.isLoading = false;

        if (err.response.data.errors) {
          _this.errors = err.response.data.errors;
        } else {
          _this.errors = {
            _all: ['An error occurred']
          };
        }

        lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(_this.errors, function (err) {
          _this.$buefy.toast.open({
            message: err[0],
            type: 'is-danger',
            queue: false
          });
        });
      });
    }
  },
  watch: {
    userId: function userId(newValue) {
      this.form.user_id = newValue;
    },
    userAccount: function userAccount(newValue) {
      this.form.account_number = newValue;
    },
    userBalence: function userBalence(newValue) {
      this.balence = newValue;
    }
  }
});

/***/ }),

/***/ "./node_modules/lodash/_arrayEach.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayEach.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "./node_modules/lodash/_castFunction.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_castFunction.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),

/***/ "./node_modules/lodash/each.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/each.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./forEach */ "./node_modules/lodash/forEach.js");


/***/ }),

/***/ "./node_modules/lodash/forEach.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/forEach.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
    baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/lodash/_baseEach.js"),
    castFunction = __webpack_require__(/*! ./_castFunction */ "./node_modules/lodash/_castFunction.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/BeneficiaryTransfers.vue?vue&type=template&id=4b9b18a2&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/BeneficiaryTransfers.vue?vue&type=template&id=4b9b18a2& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "section is-main-section" },
    [
      _c("beneficiary-deposit-form", {
        staticClass: "tile is-child",
        on: { "transaction-completed": _vm.getBeneficiaryTransactions }
      }),
      _vm._v(" "),
      _c(
        "card-component",
        {
          staticClass: "tile is-child",
          attrs: { title: "Debit History", icon: "account" }
        },
        [
          _c(
            "b-table",
            {
              attrs: {
                data: _vm.transactions,
                "per-page": _vm.perPage,
                loading: _vm.isLoading,
                columns: _vm.columns,
                striped: true,
                hoverable: true,
                paginated: _vm.paginated
              }
            },
            [
              _c(
                "section",
                {
                  staticClass: "section",
                  attrs: { slot: "empty" },
                  slot: "empty"
                },
                [
                  _c(
                    "div",
                    { staticClass: "content has-text-grey has-text-centered" },
                    [
                      _vm.isLoading
                        ? [
                            _c(
                              "p",
                              [
                                _c("b-icon", {
                                  attrs: {
                                    icon: "dots-horizontal",
                                    size: "is-large"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("p", [_vm._v("Fetching data...")])
                          ]
                        : [
                            _c(
                              "p",
                              [
                                _c("b-icon", {
                                  attrs: {
                                    icon: "emoticon-sad",
                                    size: "is-large"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("p", [_vm._v("Nothing's here…")])
                          ]
                    ],
                    2
                  )
                ]
              )
            ]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/forms/BeneficiaryDepositForm.vue?vue&type=template&id=0d94365c&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/forms/BeneficiaryDepositForm.vue?vue&type=template&id=0d94365c& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "card-component",
    { attrs: { title: "Beneficiary Deposits", icon: "account-circle" } },
    [
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.submit($event)
            }
          }
        },
        [
          _c(
            "b-field",
            { attrs: { grouped: "" } },
            [
              _c(
                "b-field",
                {
                  attrs: {
                    expanded: "",
                    label: "Your Account *",
                    message: _vm.formAccountNumberMessage,
                    type: _vm.formAccountNumberType
                  }
                },
                [
                  _c("b-input", {
                    attrs: {
                      max: "10",
                      name: "account_number",
                      required: "",
                      readonly: _vm.readonly
                    },
                    model: {
                      value: _vm.form.account_number,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "account_number", $$v)
                      },
                      expression: "form.account_number"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-field",
                {
                  attrs: {
                    expanded: "",
                    label: "Transfer Amount *",
                    message: _vm.formAmountMessage,
                    type: _vm.formAmountType
                  }
                },
                [
                  _c("b-input", {
                    attrs: {
                      min: "1",
                      max: this.balence,
                      name: "beneficiary_amount",
                      type: "number",
                      required: ""
                    },
                    model: {
                      value: _vm.form.beneficiary_amount,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "beneficiary_amount", $$v)
                      },
                      expression: "form.beneficiary_amount"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-field",
                {
                  attrs: {
                    expanded: "",
                    label: "Debtor Comment *",
                    message: _vm.formCommentMessage,
                    type: _vm.formCommentType
                  }
                },
                [
                  _c("b-input", {
                    attrs: { max: "15", name: "debtor_comment", required: "" },
                    model: {
                      value: _vm.form.debtor_comment,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "debtor_comment", $$v)
                      },
                      expression: "form.debtor_comment"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-field",
            { attrs: { grouped: "" } },
            [
              _c(
                "b-field",
                {
                  attrs: {
                    expanded: "",
                    label: "Beneficiary Account *",
                    message: _vm.formBeneficiaryAccountNumberMessage,
                    type: _vm.formBeneficiaryAccountNumberType
                  }
                },
                [
                  _c("b-input", {
                    attrs: {
                      max: "10",
                      name: "beneficiary_account_number",
                      required: ""
                    },
                    model: {
                      value: _vm.form.beneficiary_account_number,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "beneficiary_account_number", $$v)
                      },
                      expression: "form.beneficiary_account_number"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-field",
                {
                  attrs: {
                    expanded: "",
                    label: "Beneficiary Name *",
                    message: _vm.formBeneficiaryNameMessage,
                    type: _vm.formBeneficiaryNameType
                  }
                },
                [
                  _c("b-input", {
                    attrs: {
                      max: "15",
                      name: "beneficiary_name",
                      required: ""
                    },
                    model: {
                      value: _vm.form.beneficiary_name,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "beneficiary_name", $$v)
                      },
                      expression: "form.beneficiary_name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-field",
                {
                  attrs: {
                    expanded: "",
                    label: "Beneficiary Comment *",
                    message: _vm.formBeneficiaryCommentMessage,
                    type: _vm.formBeneficiaryCommentType
                  }
                },
                [
                  _c("b-input", {
                    attrs: {
                      max: "15",
                      name: "beneficiary_comment",
                      required: ""
                    },
                    model: {
                      value: _vm.form.beneficiary_comment,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "beneficiary_comment", $$v)
                      },
                      expression: "form.beneficiary_comment"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("b-field", { attrs: { expanded: "" } }, [
            _c("div", { staticClass: "control" }, [
              _c(
                "button",
                {
                  staticClass: "button is-success",
                  class: { "is-loading": _vm.isLoading },
                  attrs: { type: "submit" }
                },
                [_vm._v("\n          Submit\n        ")]
              )
            ])
          ])
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/library/transactions/transactions.js":
/*!***********************************************************!*\
  !*** ./resources/js/library/transactions/transactions.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  /**
   * Own transactions
   * 
   * @param {Object} data
   * @returns {Object}
   */
  addOwnTransaction: function addOwnTransaction(data) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('transactions/credit', data);
  },

  /**
   * Own transactions logs
   * 
   * @returns {Object}
   */
  getOwnTransactionLogs: function getOwnTransactionLogs() {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('transactions/credit/logs');
  },

  /**
   * Beneficiary transactions
   * 
   * @param {Object} data
   * @returns {Object}
   */
  addBeneficiaryTransaction: function addBeneficiaryTransaction(data) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('transactions/beneficiary', data);
  },

  /**
   * Own transactions logs
   * 
   * @returns {Object}
   */
  getBeneficiaryTransactionLogs: function getBeneficiaryTransactionLogs() {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('transactions/debit/logs');
  }
});

/***/ }),

/***/ "./resources/js/views/BeneficiaryTransfers.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/BeneficiaryTransfers.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BeneficiaryTransfers_vue_vue_type_template_id_4b9b18a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BeneficiaryTransfers.vue?vue&type=template&id=4b9b18a2& */ "./resources/js/views/BeneficiaryTransfers.vue?vue&type=template&id=4b9b18a2&");
/* harmony import */ var _BeneficiaryTransfers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BeneficiaryTransfers.vue?vue&type=script&lang=js& */ "./resources/js/views/BeneficiaryTransfers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BeneficiaryTransfers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BeneficiaryTransfers_vue_vue_type_template_id_4b9b18a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BeneficiaryTransfers_vue_vue_type_template_id_4b9b18a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/BeneficiaryTransfers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/BeneficiaryTransfers.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/BeneficiaryTransfers.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BeneficiaryTransfers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./BeneficiaryTransfers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/BeneficiaryTransfers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BeneficiaryTransfers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/BeneficiaryTransfers.vue?vue&type=template&id=4b9b18a2&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/BeneficiaryTransfers.vue?vue&type=template&id=4b9b18a2& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BeneficiaryTransfers_vue_vue_type_template_id_4b9b18a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./BeneficiaryTransfers.vue?vue&type=template&id=4b9b18a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/BeneficiaryTransfers.vue?vue&type=template&id=4b9b18a2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BeneficiaryTransfers_vue_vue_type_template_id_4b9b18a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BeneficiaryTransfers_vue_vue_type_template_id_4b9b18a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/forms/BeneficiaryDepositForm.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/forms/BeneficiaryDepositForm.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BeneficiaryDepositForm_vue_vue_type_template_id_0d94365c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BeneficiaryDepositForm.vue?vue&type=template&id=0d94365c& */ "./resources/js/views/forms/BeneficiaryDepositForm.vue?vue&type=template&id=0d94365c&");
/* harmony import */ var _BeneficiaryDepositForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BeneficiaryDepositForm.vue?vue&type=script&lang=js& */ "./resources/js/views/forms/BeneficiaryDepositForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BeneficiaryDepositForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BeneficiaryDepositForm_vue_vue_type_template_id_0d94365c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BeneficiaryDepositForm_vue_vue_type_template_id_0d94365c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/forms/BeneficiaryDepositForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/forms/BeneficiaryDepositForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/forms/BeneficiaryDepositForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BeneficiaryDepositForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BeneficiaryDepositForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/forms/BeneficiaryDepositForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BeneficiaryDepositForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/forms/BeneficiaryDepositForm.vue?vue&type=template&id=0d94365c&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/forms/BeneficiaryDepositForm.vue?vue&type=template&id=0d94365c& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BeneficiaryDepositForm_vue_vue_type_template_id_0d94365c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BeneficiaryDepositForm.vue?vue&type=template&id=0d94365c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/forms/BeneficiaryDepositForm.vue?vue&type=template&id=0d94365c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BeneficiaryDepositForm_vue_vue_type_template_id_0d94365c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BeneficiaryDepositForm_vue_vue_type_template_id_0d94365c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);