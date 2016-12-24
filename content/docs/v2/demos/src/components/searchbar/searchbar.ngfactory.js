/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from './searchbar';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../config/config';
import * as import9 from '@angular/core/src/linker/element_ref';
import * as import10 from '@angular/forms/src/directives/ng_control';
import * as import11 from '@angular/core/src/linker/query_list';
import * as import12 from '../button/button';
import * as import13 from '../button/button.ngfactory';
import * as import14 from '../icon/icon.ngfactory';
import * as import15 from '../icon/icon';
export var Wrapper_Searchbar = (function () {
    function Wrapper_Searchbar(p0, p1, p2, p3) {
        this._changed = false;
        this.context = new import0.Searchbar(p0, p1, p2, p3);
        this._expr_0 = import1.UNINITIALIZED;
        this._expr_1 = import1.UNINITIALIZED;
        this._expr_2 = import1.UNINITIALIZED;
        this._expr_3 = import1.UNINITIALIZED;
        this._expr_4 = import1.UNINITIALIZED;
        this._expr_5 = import1.UNINITIALIZED;
        this._expr_6 = import1.UNINITIALIZED;
        this._expr_7 = import1.UNINITIALIZED;
        this._expr_8 = import1.UNINITIALIZED;
        this._expr_9 = import1.UNINITIALIZED;
        this._expr_10 = import1.UNINITIALIZED;
        this._expr_11 = import1.UNINITIALIZED;
        this._expr_12 = import1.UNINITIALIZED;
        this._expr_13 = import1.UNINITIALIZED;
        this._expr_14 = import1.UNINITIALIZED;
        this._expr_15 = import1.UNINITIALIZED;
        this._expr_16 = import1.UNINITIALIZED;
        this._expr_17 = import1.UNINITIALIZED;
    }
    Wrapper_Searchbar.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_Searchbar.prototype.ngOnDestroy = function () {
        (this.subscription0 && this.subscription0.unsubscribe());
        (this.subscription1 && this.subscription1.unsubscribe());
        (this.subscription2 && this.subscription2.unsubscribe());
        (this.subscription3 && this.subscription3.unsubscribe());
        (this.subscription4 && this.subscription4.unsubscribe());
    };
    Wrapper_Searchbar.prototype.check_color = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.color = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_Searchbar.prototype.check_mode = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.mode = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_Searchbar.prototype.check_cancelButtonText = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.cancelButtonText = currValue;
            this._expr_2 = currValue;
        }
    };
    Wrapper_Searchbar.prototype.check_showCancelButton = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_3, currValue))) {
            this._changed = true;
            this.context.showCancelButton = currValue;
            this._expr_3 = currValue;
        }
    };
    Wrapper_Searchbar.prototype.check_debounce = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_4, currValue))) {
            this._changed = true;
            this.context.debounce = currValue;
            this._expr_4 = currValue;
        }
    };
    Wrapper_Searchbar.prototype.check_placeholder = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_5, currValue))) {
            this._changed = true;
            this.context.placeholder = currValue;
            this._expr_5 = currValue;
        }
    };
    Wrapper_Searchbar.prototype.check_autocomplete = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_6, currValue))) {
            this._changed = true;
            this.context.autocomplete = currValue;
            this._expr_6 = currValue;
        }
    };
    Wrapper_Searchbar.prototype.check_autocorrect = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_7, currValue))) {
            this._changed = true;
            this.context.autocorrect = currValue;
            this._expr_7 = currValue;
        }
    };
    Wrapper_Searchbar.prototype.check_spellcheck = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_8, currValue))) {
            this._changed = true;
            this.context.spellcheck = currValue;
            this._expr_8 = currValue;
        }
    };
    Wrapper_Searchbar.prototype.check_type = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_9, currValue))) {
            this._changed = true;
            this.context.type = currValue;
            this._expr_9 = currValue;
        }
    };
    Wrapper_Searchbar.prototype.check_animated = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_10, currValue))) {
            this._changed = true;
            this.context.animated = currValue;
            this._expr_10 = currValue;
        }
    };
    Wrapper_Searchbar.prototype.check_value = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_11, currValue))) {
            this._changed = true;
            this.context.value = currValue;
            this._expr_11 = currValue;
        }
    };
    Wrapper_Searchbar.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_Searchbar.prototype.checkHost = function (view, componentView, el, throwOnChange) {
        var currVal_12 = this.context._animated;
        if (import3.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            view.renderer.setElementClass(el, 'searchbar-animated', currVal_12);
            this._expr_12 = currVal_12;
        }
        var currVal_13 = this.context._value;
        if (import3.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            view.renderer.setElementClass(el, 'searchbar-has-value', currVal_13);
            this._expr_13 = currVal_13;
        }
        var currVal_14 = this.context._isActive;
        if (import3.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            view.renderer.setElementClass(el, 'searchbar-active', currVal_14);
            this._expr_14 = currVal_14;
        }
        var currVal_15 = this.context._showCancelButton;
        if (import3.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            view.renderer.setElementClass(el, 'searchbar-show-cancel', currVal_15);
            this._expr_15 = currVal_15;
        }
        var currVal_16 = this.context._shouldAlignLeft;
        if (import3.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            view.renderer.setElementClass(el, 'searchbar-left-aligned', currVal_16);
            this._expr_16 = currVal_16;
        }
        var currVal_17 = this.context._sbHasFocus;
        if (import3.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            view.renderer.setElementClass(el, 'searchbar-has-focus', currVal_17);
            this._expr_17 = currVal_17;
        }
    };
    Wrapper_Searchbar.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_Searchbar.prototype.subscribe = function (view, _eventHandler, emit0, emit1, emit2, emit3, emit4) {
        this._eventHandler = _eventHandler;
        if (emit0) {
            (this.subscription0 = this.context.ionInput.subscribe(_eventHandler.bind(view, 'ionInput')));
        }
        if (emit1) {
            (this.subscription1 = this.context.ionBlur.subscribe(_eventHandler.bind(view, 'ionBlur')));
        }
        if (emit2) {
            (this.subscription2 = this.context.ionFocus.subscribe(_eventHandler.bind(view, 'ionFocus')));
        }
        if (emit3) {
            (this.subscription3 = this.context.ionCancel.subscribe(_eventHandler.bind(view, 'ionCancel')));
        }
        if (emit4) {
            (this.subscription4 = this.context.ionClear.subscribe(_eventHandler.bind(view, 'ionClear')));
        }
    };
    return Wrapper_Searchbar;
}());
var renderType_Searchbar_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
var View_Searchbar_Host0 = (function (_super) {
    __extends(View_Searchbar_Host0, _super);
    function View_Searchbar_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_Searchbar_Host0, renderType_Searchbar_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import1.ChangeDetectorStatus.CheckAlways);
    }
    View_Searchbar_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ion-searchbar', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_Searchbar0(this.viewUtils, this, 0, this._el_0);
        this._Searchbar_0_3 = new Wrapper_Searchbar(this.injectorGet(import8.Config, this.parentIndex), new import9.ElementRef(this._el_0), this.renderer, this.injectorGet(import10.NgControl, this.parentIndex, null));
        this.compView_0.create(this._Searchbar_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._Searchbar_0_3.context);
    };
    View_Searchbar_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Searchbar) && (0 === requestNodeIndex))) {
            return this._Searchbar_0_3.context;
        }
        return notFoundResult;
    };
    View_Searchbar_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Searchbar_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Searchbar_0_3.context.ngAfterContentInit();
            }
        }
        this._Searchbar_0_3.checkHost(this, this.compView_0, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    };
    View_Searchbar_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this._Searchbar_0_3.ngOnDestroy();
    };
    View_Searchbar_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_Searchbar_Host0;
}(import2.AppView));
export var SearchbarNgFactory = new import7.ComponentFactory('ion-searchbar', View_Searchbar_Host0, import0.Searchbar);
var styles_Searchbar = [];
var renderType_Searchbar = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, styles_Searchbar, {});
export var View_Searchbar0 = (function (_super) {
    __extends(View_Searchbar0, _super);
    function View_Searchbar0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_Searchbar0, renderType_Searchbar, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_18 = import1.UNINITIALIZED;
        this._expr_19 = import1.UNINITIALIZED;
        this._expr_20 = import1.UNINITIALIZED;
        this._expr_21 = import1.UNINITIALIZED;
        this._expr_22 = import1.UNINITIALIZED;
        this._expr_23 = import1.UNINITIALIZED;
        this._expr_24 = import1.UNINITIALIZED;
    }
    View_Searchbar0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._viewQuery_searchbarInput_0 = new import11.QueryList();
        this._viewQuery_searchbarIcon_1 = new import11.QueryList();
        this._viewQuery_cancelButton_2 = new import11.QueryList();
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'searchbar-input-container'), null);
        this._el_1 = import3.createRenderElement(this.renderer, this._el_0, 'button', new import3.InlineArray16(12, 'class', 'searchbar-md-cancel', 'clear', '', 'color', 'dark', 'ion-button', '', 'mode', 'md', 'type', 'button'), null);
        this.compView_1 = new import13.View_Button0(this.viewUtils, this, 1, this._el_1);
        this._Button_1_3 = new import13.Wrapper_Button('', this.parentView.injectorGet(import8.Config, this.parentIndex), new import9.ElementRef(this._el_1), this.renderer);
        this._el_2 = import3.createRenderElement(this.renderer, null, 'ion-icon', new import3.InlineArray4(4, 'name', 'md-arrow-back', 'role', 'img'), null);
        this._Icon_2_3 = new import14.Wrapper_Icon(this.parentView.injectorGet(import8.Config, this.parentIndex), new import9.ElementRef(this._el_2), this.renderer);
        this.compView_1.create(this._Button_1_3.context);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'searchbar-search-icon'), null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_0, 'input', new import3.InlineArray2(2, 'class', 'searchbar-input'), null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'button', new import3.InlineArray8(8, 'class', 'searchbar-clear-icon', 'clear', '', 'ion-button', '', 'type', 'button'), null);
        this.compView_5 = new import13.View_Button0(this.viewUtils, this, 5, this._el_5);
        this._Button_5_3 = new import13.Wrapper_Button('', this.parentView.injectorGet(import8.Config, this.parentIndex), new import9.ElementRef(this._el_5), this.renderer);
        this.compView_5.create(this._Button_5_3.context);
        this._el_6 = import3.createRenderElement(this.renderer, parentRenderNode, 'button', new import3.InlineArray16(10, 'class', 'searchbar-ios-cancel', 'clear', '', 'ion-button', '', 'mode', 'ios', 'type', 'button'), null);
        this.compView_6 = new import13.View_Button0(this.viewUtils, this, 6, this._el_6);
        this._Button_6_3 = new import13.Wrapper_Button('', this.parentView.injectorGet(import8.Config, this.parentIndex), new import9.ElementRef(this._el_6), this.renderer);
        this._text_7 = this.renderer.createText(null, '', null);
        this.compView_6.create(this._Button_6_3.context);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_1, new import3.InlineArray4(4, 'click', null, 'mousedown', null), this.eventHandler(this.handleEvent_1));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_4, new import3.InlineArray8(6, 'input', null, 'blur', null, 'focus', null), this.eventHandler(this.handleEvent_4));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_5, new import3.InlineArray4(4, 'click', null, 'mousedown', null), this.eventHandler(this.handleEvent_5));
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_6, new import3.InlineArray4(4, 'click', null, 'mousedown', null), this.eventHandler(this.handleEvent_6));
        this._viewQuery_searchbarInput_0.reset([new import9.ElementRef(this._el_4)]);
        this.context._searchbarInput = this._viewQuery_searchbarInput_0.first;
        this._viewQuery_searchbarIcon_1.reset([new import9.ElementRef(this._el_3)]);
        this.context._searchbarIcon = this._viewQuery_searchbarIcon_1.first;
        this._viewQuery_cancelButton_2.reset([new import9.ElementRef(this._el_6)]);
        this.context._cancelButton = this._viewQuery_cancelButton_2.first;
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1,
            this._el_2,
            this._el_3,
            this._el_4,
            this._el_5,
            this._el_6,
            this._text_7
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3
        ]);
        return null;
    };
    View_Searchbar0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import15.Icon) && (2 === requestNodeIndex))) {
            return this._Icon_2_3.context;
        }
        if (((token === import12.Button) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 2)))) {
            return this._Button_1_3.context;
        }
        if (((token === import12.Button) && (5 === requestNodeIndex))) {
            return this._Button_5_3.context;
        }
        if (((token === import12.Button) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Button_6_3.context;
        }
        return notFoundResult;
    };
    View_Searchbar0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1_0_0 = '';
        this._Button_1_3.check_clear(currVal_1_0_0, throwOnChange, false);
        var currVal_1_0_1 = 'md';
        this._Button_1_3.check_mode(currVal_1_0_1, throwOnChange, false);
        var currVal_1_0_2 = 'dark';
        this._Button_1_3.check_color(currVal_1_0_2, throwOnChange, false);
        if (this._Button_1_3.ngDoCheck(this, this._el_1, throwOnChange)) {
            this.compView_1.markAsCheckOnce();
        }
        var currVal_2_0_0 = 'md-arrow-back';
        this._Icon_2_3.check_name(currVal_2_0_0, throwOnChange, false);
        this._Icon_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        var currVal_5_0_0 = '';
        this._Button_5_3.check_clear(currVal_5_0_0, throwOnChange, false);
        var currVal_5_0_1 = this.context._mode;
        this._Button_5_3.check_mode(currVal_5_0_1, throwOnChange, false);
        if (this._Button_5_3.ngDoCheck(this, this._el_5, throwOnChange)) {
            this.compView_5.markAsCheckOnce();
        }
        var currVal_6_0_0 = '';
        this._Button_6_3.check_clear(currVal_6_0_0, throwOnChange, false);
        var currVal_6_0_1 = 'ios';
        this._Button_6_3.check_mode(currVal_6_0_1, throwOnChange, false);
        if (this._Button_6_3.ngDoCheck(this, this._el_6, throwOnChange)) {
            this.compView_6.markAsCheckOnce();
        }
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Button_1_3.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_5_3.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_6_3.context.ngAfterContentInit();
            }
        }
        this._Icon_2_3.checkHost(this, this, this._el_2, throwOnChange);
        var currVal_18 = this.context.placeholder;
        if (import3.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this.renderer.setElementAttribute(this._el_4, 'placeholder', ((currVal_18 == null) ? null : currVal_18.toString()));
            this._expr_18 = currVal_18;
        }
        var currVal_19 = this.context.type;
        if (import3.checkBinding(throwOnChange, this._expr_19, currVal_19)) {
            this.renderer.setElementAttribute(this._el_4, 'type', ((currVal_19 == null) ? null : currVal_19.toString()));
            this._expr_19 = currVal_19;
        }
        var currVal_20 = this.context._autocomplete;
        if (import3.checkBinding(throwOnChange, this._expr_20, currVal_20)) {
            this.renderer.setElementAttribute(this._el_4, 'autocomplete', ((currVal_20 == null) ? null : currVal_20.toString()));
            this._expr_20 = currVal_20;
        }
        var currVal_21 = this.context._autocorrect;
        if (import3.checkBinding(throwOnChange, this._expr_21, currVal_21)) {
            this.renderer.setElementAttribute(this._el_4, 'autocorrect', ((currVal_21 == null) ? null : currVal_21.toString()));
            this._expr_21 = currVal_21;
        }
        var currVal_22 = this.context._spellcheck;
        if (import3.checkBinding(throwOnChange, this._expr_22, currVal_22)) {
            this.renderer.setElementAttribute(this._el_4, 'spellcheck', ((currVal_22 == null) ? null : currVal_22.toString()));
            this._expr_22 = currVal_22;
        }
        var currVal_23 = (this.context._isActive ? 1 : (0 - 1));
        if (import3.checkBinding(throwOnChange, this._expr_23, currVal_23)) {
            this.renderer.setElementProperty(this._el_6, 'tabIndex', currVal_23);
            this._expr_23 = currVal_23;
        }
        var currVal_24 = import3.inlineInterpolate(1, '', this.context.cancelButtonText, '');
        if (import3.checkBinding(throwOnChange, this._expr_24, currVal_24)) {
            this.renderer.setText(this._text_7, currVal_24);
            this._expr_24 = currVal_24;
        }
        this.compView_1.detectChanges(throwOnChange);
        this.compView_5.detectChanges(throwOnChange);
        this.compView_6.detectChanges(throwOnChange);
    };
    View_Searchbar0.prototype.destroyInternal = function () {
        this.compView_1.destroy();
        this.compView_5.destroy();
        this.compView_6.destroy();
        this._Icon_2_3.ngOnDestroy();
    };
    View_Searchbar0.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, ctx) {
        if (((nodeIndex == 1) && (ngContentIndex == 0))) {
            cb(this._el_2, ctx);
        }
        if (((nodeIndex == 5) && (ngContentIndex == 0))) { }
        if (((nodeIndex == 6) && (ngContentIndex == 0))) {
            cb(this._text_7, ctx);
        }
    };
    View_Searchbar0.prototype.handleEvent_1 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.cancelSearchbar($event) !== false);
            result = (pd_sub_0 && result);
        }
        if ((eventName == 'mousedown')) {
            var pd_sub_1 = (this.context.cancelSearchbar($event) !== false);
            result = (pd_sub_1 && result);
        }
        return result;
    };
    View_Searchbar0.prototype.handleEvent_4 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'input')) {
            var pd_sub_0 = (this.context.inputChanged($event) !== false);
            result = (pd_sub_0 && result);
        }
        if ((eventName == 'blur')) {
            var pd_sub_1 = (this.context.inputBlurred($event) !== false);
            result = (pd_sub_1 && result);
        }
        if ((eventName == 'focus')) {
            var pd_sub_2 = (this.context.inputFocused($event) !== false);
            result = (pd_sub_2 && result);
        }
        return result;
    };
    View_Searchbar0.prototype.handleEvent_5 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.clearInput($event) !== false);
            result = (pd_sub_0 && result);
        }
        if ((eventName == 'mousedown')) {
            var pd_sub_1 = (this.context.clearInput($event) !== false);
            result = (pd_sub_1 && result);
        }
        return result;
    };
    View_Searchbar0.prototype.handleEvent_6 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.cancelSearchbar($event) !== false);
            result = (pd_sub_0 && result);
        }
        if ((eventName == 'mousedown')) {
            var pd_sub_1 = (this.context.cancelSearchbar($event) !== false);
            result = (pd_sub_1 && result);
        }
        return result;
    };
    return View_Searchbar0;
}(import2.AppView));
//# sourceMappingURL=searchbar.ngfactory.js.map