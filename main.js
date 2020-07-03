(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _messaging_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messaging.service */ "./src/app/messaging.service.ts");
/* harmony import */ var _user_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-info.service */ "./src/app/user-info.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _chats_chats_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chats/chats.component */ "./src/app/chats/chats.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");












class AppComponent {
    constructor(messagingService, userInfoService) {
        this.messagingService = messagingService;
        this.userInfoService = userInfoService;
    }
    setCurrentUser() {
        this.messagingService.getConversation(this.currentUser);
        this.userInfoService.setCurrentLogInUser(this.currentUser);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_messaging_service__WEBPACK_IMPORTED_MODULE_1__["MessagingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_info_service__WEBPACK_IMPORTED_MODULE_2__["UserInfoService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 26, vars: 4, consts: [[1, "messenger-container"], ["color", "primary"], ["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon"], [1, "example-spacer"], [1, "example-full-width"], ["matInput", "", "value", "User-ID", 3, "ngModel", "ngModelChange"], ["mat-icon-button", "", "aria-label", "Example icon-button with heart icon", 1, "example-icon", "favorite-icon", 3, "click"], [1, "conversations"], [3, "currentUser"], [1, "messages"], [3, "currentConversation", "currentUser"], [1, "chatbox"], [1, "chatinput"], [1, "input"], ["matInput", "", "placeholder", "Message..."], ["mat-raised-button", "", "color", "primary"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Messenger - TradeBRICS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_10_listener($event) { return ctx.currentUser = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_11_listener() { return ctx.setCurrentUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-chats", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-messages", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentUser", ctx.currentUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentConversation", ctx.currentConversation)("currentUser", ctx.currentUser);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _chats_chats_component__WEBPACK_IMPORTED_MODULE_9__["ChatsComponent"], _messages_messages_component__WEBPACK_IMPORTED_MODULE_10__["MessagesComponent"]], styles: [".example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.messenger-container[_ngcontent-%COMP%] {\n  color: black;\n}\n\nbody[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n}\n\n.example-form-field[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.conversations[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 64px;\n  width: 20%;\n  bottom: 0;\n  background-color: #d6eaf8;\n}\n\n.messages[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 64px;\n  width: 79%;\n  bottom: 0;\n  right: 0;\n  background-color: #d6eaf8;\n  max-height: 80%;\n}\n\n.chatbox[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1%;\n  width: 78.5%;\n  right: 0.5%;\n  background-color: #85c1e9;\n  height: 10%;\n}\n\n.chatinput[_ngcontent-%COMP%] {\n  margin-top: 1%;\n  float: right;\n  margin-right: 0;\n  width: 80%;\n}\n\n.input[_ngcontent-%COMP%] {\n  width: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxRQUFRO0VBQ1IseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5tZXNzZW5nZXItY29udGFpbmVyIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG59XG5cbi5leGFtcGxlLWZvcm0tZmllbGQge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5jb252ZXJzYXRpb25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDY0cHg7XG4gIHdpZHRoOiAyMCU7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZWFmODtcbn1cbi5tZXNzYWdlcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2NHB4O1xuICB3aWR0aDogNzklO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZlYWY4O1xuICBtYXgtaGVpZ2h0OiA4MCU7XG59XG5cbi5jaGF0Ym94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDElO1xuICB3aWR0aDogNzguNSU7XG4gIHJpZ2h0OiAwLjUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODVjMWU5O1xuICBoZWlnaHQ6IDEwJTtcbn1cblxuLmNoYXRpbnB1dCB7XG4gIG1hcmdpbi10b3A6IDElO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLmlucHV0IHtcbiAgd2lkdGg6IDYwJTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], function () { return [{ type: _messaging_service__WEBPACK_IMPORTED_MODULE_1__["MessagingService"] }, { type: _user_info_service__WEBPACK_IMPORTED_MODULE_2__["UserInfoService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _chats_chats_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./chats/chats.component */ "./src/app/chats/chats.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _chats_chat_card_chat_card_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./chats/chat-card/chat-card.component */ "./src/app/chats/chat-card/chat-card.component.ts");
/* harmony import */ var _messages_message_card_message_card_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./messages/message-card/message-card.component */ "./src/app/messages/message-card/message-card.component.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");











































const config = { url: 'http://127.0.0.1:3000/', options: {} };
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__["MatStepperModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__["MatTabsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__["MatTooltipModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__["MatSnackBarModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_32__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__["MatSortModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_39__["SocketIoModule"].forRoot(config),
            _angular_forms__WEBPACK_IMPORTED_MODULE_40__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _chats_chats_component__WEBPACK_IMPORTED_MODULE_35__["ChatsComponent"],
        _messages_messages_component__WEBPACK_IMPORTED_MODULE_36__["MessagesComponent"],
        _chats_chat_card_chat_card_component__WEBPACK_IMPORTED_MODULE_37__["ChatCardComponent"],
        _messages_message_card_message_card_component__WEBPACK_IMPORTED_MODULE_38__["MessageCardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__["MatTabsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__["MatTooltipModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__["MatSnackBarModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_32__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_39__["SocketIoModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_40__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _chats_chats_component__WEBPACK_IMPORTED_MODULE_35__["ChatsComponent"],
                    _messages_messages_component__WEBPACK_IMPORTED_MODULE_36__["MessagesComponent"],
                    _chats_chat_card_chat_card_component__WEBPACK_IMPORTED_MODULE_37__["ChatCardComponent"],
                    _messages_message_card_message_card_component__WEBPACK_IMPORTED_MODULE_38__["MessageCardComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__["MatStepperModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__["MatTabsModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__["MatChipsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__["MatTooltipModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__["MatSnackBarModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_32__["MatTableModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__["MatSortModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__["MatPaginatorModule"],
                    ngx_socket_io__WEBPACK_IMPORTED_MODULE_39__["SocketIoModule"].forRoot(config),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_40__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/chat.service.ts":
/*!*********************************!*\
  !*** ./src/app/chat.service.ts ***!
  \*********************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");
/* harmony import */ var _messaging_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messaging.service */ "./src/app/messaging.service.ts");




class ChatService {
    constructor(socket, messagingService) {
        this.socket = socket;
        this.messagingService = messagingService;
    }
    sendChat(message) {
        this.socket.emit('message', message);
    }
    receiveChat() {
        return this.socket.fromEvent('broadcast');
    }
    getClients() {
        return this.socket.fromEvent('clients');
    }
}
ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_messaging_service__WEBPACK_IMPORTED_MODULE_2__["MessagingService"])); };
ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"] }, { type: _messaging_service__WEBPACK_IMPORTED_MODULE_2__["MessagingService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/chats/chat-card/chat-card.component.ts":
/*!********************************************************!*\
  !*** ./src/app/chats/chat-card/chat-card.component.ts ***!
  \********************************************************/
/*! exports provided: ChatCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatCardComponent", function() { return ChatCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _messaging_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../messaging.service */ "./src/app/messaging.service.ts");
/* harmony import */ var _user_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user-info.service */ "./src/app/user-info.service.ts");




class ChatCardComponent {
    constructor(messagingService, userInfoService) {
        this.messagingService = messagingService;
        this.userInfoService = userInfoService;
    }
    ngOnInit() {
        if (!this.isGroupChat) {
            this.users.forEach((val) => {
                if (val !== this.currentUser) {
                    this.messagingService.getUsers(val).subscribe((conversationUser) => {
                        this.name = conversationUser[0].displayName;
                        this.photoURL = conversationUser[0].photoURL;
                    });
                }
            });
        }
    }
}
ChatCardComponent.ɵfac = function ChatCardComponent_Factory(t) { return new (t || ChatCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_messaging_service__WEBPACK_IMPORTED_MODULE_1__["MessagingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_info_service__WEBPACK_IMPORTED_MODULE_2__["UserInfoService"])); };
ChatCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatCardComponent, selectors: [["app-chat-card"]], inputs: { lastMessage: "lastMessage", photoURL: "photoURL", users: "users", isGroupChat: "isGroupChat", currentUser: "currentUser" }, decls: 8, vars: 3, consts: [[1, "left"], ["alt", "profile_image", 1, "photo", 3, "src"], [1, "right"], [1, "text"]], template: function ChatCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.photoURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lastMessage);
    } }, styles: [".left[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  width: 20%;\r\n  bottom: 0;\r\n  left: 3%;\r\n}\r\n\r\n.right[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  width: 70%;\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\nwidth:40%;\r\n}\r\n\r\n.text[_ngcontent-%COMP%] {\r\n  display: block;\r\n  box-sizing: border-box;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdHMvY2hhdC1jYXJkL2NoYXQtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixVQUFVO0VBQ1YsU0FBUztFQUNULFFBQVE7QUFDVjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sVUFBVTtFQUNWLFNBQVM7RUFDVCxRQUFRO0FBQ1Y7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7O0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY2hhdHMvY2hhdC1jYXJkL2NoYXQtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxlZnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMyU7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogNzAlO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuaW1nIHtcclxud2lkdGg6NDAlO1xyXG59XHJcbi50ZXh0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat-card',
                templateUrl: './chat-card.component.html',
                styleUrls: ['./chat-card.component.css'],
            }]
    }], function () { return [{ type: _messaging_service__WEBPACK_IMPORTED_MODULE_1__["MessagingService"] }, { type: _user_info_service__WEBPACK_IMPORTED_MODULE_2__["UserInfoService"] }]; }, { lastMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], photoURL: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], users: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isGroupChat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currentUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/chats/chats.component.ts":
/*!******************************************!*\
  !*** ./src/app/chats/chats.component.ts ***!
  \******************************************/
/*! exports provided: ChatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsComponent", function() { return ChatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _messaging_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../messaging.service */ "./src/app/messaging.service.ts");
/* harmony import */ var _user_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-info.service */ "./src/app/user-info.service.ts");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chat.service */ "./src/app/chat.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _chat_card_chat_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat-card/chat-card.component */ "./src/app/chats/chat-card/chat-card.component.ts");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");










function ChatsComponent_mat_list_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-chat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const conversation_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", conversation_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentUser", ctx_r1.currentUser)("lastMessage", conversation_r2.lastSentMessage)("isGroupChat", conversation_r2.isGroupChat)("users", conversation_r2.participants);
} }
class ChatsComponent {
    constructor(messagingService, userInfoService, chatService) {
        this.messagingService = messagingService;
        this.userInfoService = userInfoService;
        this.chatService = chatService;
        messagingService.currentConversationSubject.subscribe((value) => {
            this.conversations = value;
        });
    }
    setConversation(conversationID, otherUserID) {
        this.messagingService.setCurrentChat(conversationID);
        otherUserID.forEach((value) => {
            if (value !== this.currentUser) {
                this.userInfoService.setOtherLogInUser(value);
            }
        });
    }
    ngOnInit() { }
}
ChatsComponent.ɵfac = function ChatsComponent_Factory(t) { return new (t || ChatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_messaging_service__WEBPACK_IMPORTED_MODULE_1__["MessagingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_info_service__WEBPACK_IMPORTED_MODULE_2__["UserInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"])); };
ChatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatsComponent, selectors: [["app-chats"]], inputs: { currentUser: "currentUser" }, decls: 6, vars: 2, consts: [[3, "multiple", "click"], ["chat", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [3, "currentUser", "lastMessage", "isGroupChat", "users"]], template: function ChatsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Conversations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-selection-list", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatsComponent_Template_mat_selection_list_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.setConversation(_r0.selectedOptions.selected[0] == null ? null : _r0.selectedOptions.selected[0].value._id, _r0.selectedOptions.selected[0] == null ? null : _r0.selectedOptions.selected[0].value.participants); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatsComponent_mat_list_option_5_Template, 3, 5, "mat-list-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.conversations);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatSelectionList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListOption"], _chat_card_chat_card_component__WEBPACK_IMPORTED_MODULE_7__["ChatCardComponent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDivider"]], styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  background-color: #5dade2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdHMvY2hhdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NoYXRzL2NoYXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZGFkZTI7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chats',
                templateUrl: './chats.component.html',
                styleUrls: ['./chats.component.css'],
            }]
    }], function () { return [{ type: _messaging_service__WEBPACK_IMPORTED_MODULE_1__["MessagingService"] }, { type: _user_info_service__WEBPACK_IMPORTED_MODULE_2__["UserInfoService"] }, { type: _chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"] }]; }, { currentUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/messages/message-card/message-card.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/messages/message-card/message-card.component.ts ***!
  \*****************************************************************/
/*! exports provided: MessageCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageCardComponent", function() { return MessageCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function MessageCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.otherProfileURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.otherDisplayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getTimeStamp());
} }
function MessageCardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.ownProfileURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.ownDisplayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getTimeStamp());
} }
class MessageCardComponent {
    constructor() { }
    ngOnInit() { }
    getTimeStamp() {
        const date = new Date(Date.now());
        const dateStr = ('00' + (date.getMonth() + 1)).slice(-2) +
            '/' +
            ('00' + date.getDate()).slice(-2) +
            '/' +
            date.getFullYear() +
            ' ' +
            ('00' + date.getHours()).slice(-2) +
            ':' +
            ('00' + date.getMinutes()).slice(-2);
        return dateStr;
    }
}
MessageCardComponent.ɵfac = function MessageCardComponent_Factory(t) { return new (t || MessageCardComponent)(); };
MessageCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessageCardComponent, selectors: [["app-message-card"]], inputs: { ownProfileURL: "ownProfileURL", ownDisplayName: "ownDisplayName", otherDisplayName: "otherDisplayName", otherProfileURL: "otherProfileURL", message: "message", currentUser: "currentUser", senderUserID: "senderUserID" }, decls: 2, vars: 2, consts: [["class", "container", 4, "ngIf"], ["class", "container darker", 4, "ngIf"], [1, "container"], ["alt", "Avatar", 2, "width", "100%", 3, "src"], [1, "time-right"], [1, "container", "darker"], ["alt", "Avatar", 1, "right", 2, "width", "100%", 3, "src"], [1, "time-left"]], template: function MessageCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MessageCardComponent_div_0_Template, 8, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MessageCardComponent_div_1_Template, 8, 4, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser != ctx.senderUserID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser === ctx.senderUserID);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".container[_ngcontent-%COMP%] {\n  border: 2px solid #aed6f1;\n  background-color: #d6eaf8;\n  border-radius: 5px;\n  padding: 10px;\n  margin: 10px 0;\n  width: 80%;\n  float: left;\n}\n\n.darker[_ngcontent-%COMP%] {\n  border-color: #85c1e9;\n  background-color: #aed6f1;\n  float: right;\n}\n\n.container[_ngcontent-%COMP%]::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n\n.container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  float: left;\n  max-width: 60px;\n  width: 100%;\n  margin-right: 20px;\n  border-radius: 50%;\n}\n\n.container[_ngcontent-%COMP%]   img.right[_ngcontent-%COMP%] {\n  float: right;\n  margin-left: 20px;\n  margin-right: 0;\n}\n\n.time-right[_ngcontent-%COMP%] {\n  float: right;\n  color: #aaa;\n}\n\n.time-left[_ngcontent-%COMP%] {\n  float: left;\n  color: #999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZS1jYXJkL21lc3NhZ2UtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9tZXNzYWdlcy9tZXNzYWdlLWNhcmQvbWVzc2FnZS1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2FlZDZmMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZWFmODtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDEwcHggMDtcbiAgd2lkdGg6IDgwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5kYXJrZXIge1xuICBib3JkZXItY29sb3I6ICM4NWMxZTk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhZWQ2ZjE7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmNvbnRhaW5lcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBjbGVhcjogYm90aDtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi5jb250YWluZXIgaW1nIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1heC13aWR0aDogNjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY29udGFpbmVyIGltZy5yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLnRpbWUtcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjYWFhO1xufVxuXG4udGltZS1sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbG9yOiAjOTk5O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-message-card',
                templateUrl: './message-card.component.html',
                styleUrls: ['./message-card.component.css'],
            }]
    }], function () { return []; }, { ownProfileURL: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ownDisplayName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], otherDisplayName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], otherProfileURL: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], message: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currentUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], senderUserID: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chat.service */ "./src/app/chat.service.ts");
/* harmony import */ var _messaging_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../messaging.service */ "./src/app/messaging.service.ts");
/* harmony import */ var _user_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-info.service */ "./src/app/user-info.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _message_card_message_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./message-card/message-card.component */ "./src/app/messages/message-card/message-card.component.ts");








function MessagesComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-message-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ownProfileURL", ctx_r0.userInfoService.currentUserProfilePicture)("ownDisplayName", ctx_r0.userInfoService.currentUserDisplayName)("otherDisplayName", ctx_r0.userInfoService.otherUserDisplayName)("otherProfileURL", ctx_r0.userInfoService.otherUserProfilePicture)("message", message_r1.message)("currentUser", ctx_r0.currentUser)("senderUserID", message_r1.userID);
} }
class MessagesComponent {
    constructor(chatService, messagingService, userInfoService) {
        this.chatService = chatService;
        this.messagingService = messagingService;
        this.userInfoService = userInfoService;
        this.name = 'Anonymous';
        this.messagingService.currentChatObservable.subscribe((value) => {
            this.messagingService.getMessages(value);
        });
        this.messagingService.messagesObservable.subscribe((value) => {
            this.tempMessageList = value;
        });
        this.getCurrentUserInfo();
    }
    getCurrentUserInfo() {
        this.userInfoService.currentChatUserObservable.subscribe((value) => {
            console.log(value);
        });
    }
    sendMessage() {
        this.chatService.sendChat({
            name: this.name,
            message: this.newMessage,
            processed: null,
            sent: Date.now(),
            arrived: null,
            socketId: null,
        });
        this.newMessage = '';
    }
    getMilliseconds(val) {
        return `${new Date(val).getHours()}:${new Date(val).getMinutes()}:${new Date(val).getSeconds()}.${new Date(val).getMilliseconds()}`;
    }
    ngOnInit() {
        this.chatService.receiveChat().subscribe((message) => {
            this.messageList.push(Object.assign(Object.assign({}, message), { arrived: Date.now() }));
            console.log(message);
        });
        this.chatService.getClients().subscribe((clients) => {
            this.clientsAmount = clients;
        });
    }
}
MessagesComponent.ɵfac = function MessagesComponent_Factory(t) { return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_messaging_service__WEBPACK_IMPORTED_MODULE_2__["MessagingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_info_service__WEBPACK_IMPORTED_MODULE_3__["UserInfoService"])); };
MessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessagesComponent, selectors: [["app-messages"]], inputs: { currentConversation: "currentConversation", currentUser: "currentUser", ownDisplayName: "ownDisplayName", ownProfileURL: "ownProfileURL" }, decls: 5, vars: 2, consts: [[1, "message"], [4, "ngFor", "ngForOf"], [3, "ownProfileURL", "ownDisplayName", "otherDisplayName", "otherProfileURL", "message", "currentUser", "senderUserID"]], template: function MessagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MessagesComponent_div_4_Template, 2, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userInfoService.otherUserDisplayName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tempMessageList);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _message_card_message_card_component__WEBPACK_IMPORTED_MODULE_6__["MessageCardComponent"]], styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  background-color: #5dade2;\n}\n.message[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  max-height: 88%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWRhZGUyO1xufVxuLm1lc3NhZ2Uge1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG1heC1oZWlnaHQ6IDg4JTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-messages',
                templateUrl: './messages.component.html',
                styleUrls: ['./messages.component.css'],
            }]
    }], function () { return [{ type: _chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"] }, { type: _messaging_service__WEBPACK_IMPORTED_MODULE_2__["MessagingService"] }, { type: _user_info_service__WEBPACK_IMPORTED_MODULE_3__["UserInfoService"] }]; }, { currentConversation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currentUser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ownDisplayName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ownProfileURL: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/messaging.service.ts":
/*!**************************************!*\
  !*** ./src/app/messaging.service.ts ***!
  \**************************************/
/*! exports provided: MessagingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingService", function() { return MessagingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class MessagingService {
    constructor(http) {
        this.http = http;
        this.messagesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.messagesObservable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]();
        this.currentChatSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.currentChatObservable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]();
        this.currentConversationSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.currentConversationObservable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]();
        this.messagesObservable = this.messagesSubject.asObservable();
        this.currentChatObservable = this.currentChatSubject.asObservable();
        this.currentConversationObservable = this.currentConversationSubject.asObservable();
    }
    setCurrentChat(currentUser) {
        this.currentChatSubject.next(currentUser);
    }
    setMessages(messages) {
        this.messagesSubject.next(messages);
    }
    setConversations(conversations) {
        this.currentConversationSubject.next(conversations);
    }
    getConversation(user) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http
            .post('http://127.0.0.1:3000/conversations/get', JSON.stringify({ userID: user }), httpOptions)
            .subscribe((value) => {
            this.setConversations(value);
            this.currentChats = value;
            return value;
        });
    }
    getMessages(conversationID) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http
            .post('http://127.0.0.1:3000/messages/get', JSON.stringify({ conversationID }), httpOptions)
            .subscribe((value) => {
            this.setMessages(value);
            return value;
        });
    }
    getUsers(user) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.post('http://127.0.0.1:3000/users/get', JSON.stringify({ userID: user }), httpOptions);
    }
}
MessagingService.ɵfac = function MessagingService_Factory(t) { return new (t || MessagingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
MessagingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessagingService, factory: MessagingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/user-info.service.ts":
/*!**************************************!*\
  !*** ./src/app/user-info.service.ts ***!
  \**************************************/
/*! exports provided: UserInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoService", function() { return UserInfoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class UserInfoService {
    constructor(http) {
        this.http = http;
        this.currentLogInUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.currentLogInUserObservable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]();
        this.currentChatUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.currentChatUserObservable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]();
        this.currentLogInUserObservable = this.currentLogInUserSubject.asObservable();
        this.currentChatUserObservable = this.currentChatUserSubject.asObservable();
    }
    setCurrentLogInUser(userID) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http
            .post('http://127.0.0.1:3000/users/get', JSON.stringify({ userID }), httpOptions)
            .subscribe((value) => {
            this.currentUserDisplayName = value[0].displayName;
            this.currentUserProfilePicture = value[0].photoURL;
            return value;
        });
    }
    setOtherLogInUser(userID) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http
            .post('http://127.0.0.1:3000/users/get', JSON.stringify({ userID }), httpOptions)
            .subscribe((value) => {
            this.otherUserDisplayName = value[0].displayName;
            this.otherUserProfilePicture = value[0].photoURL;
            return value;
        });
    }
}
UserInfoService.ɵfac = function UserInfoService_Factory(t) { return new (t || UserInfoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UserInfoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserInfoService, factory: UserInfoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserInfoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Rainard\Documents\Repos\Tradebrics-Messenger-UI-Testing\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map