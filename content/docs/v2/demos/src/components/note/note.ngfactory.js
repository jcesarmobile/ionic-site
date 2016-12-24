/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
import * as import0 from './note';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import3 from '@angular/core/src/linker/view_utils';
export var Wrapper_Note = (function () {
    function Wrapper_Note(p0, p1, p2) {
        this._changed = false;
        this.context = new import0.Note(p0, p1, p2);
        this._expr_0 = import1.UNINITIALIZED;
        this._expr_1 = import1.UNINITIALIZED;
    }
    Wrapper_Note.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_Note.prototype.ngOnDestroy = function () {
    };
    Wrapper_Note.prototype.check_color = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.color = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_Note.prototype.check_mode = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.mode = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_Note.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_Note.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_Note.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_Note.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_Note;
}());
//# sourceMappingURL=note.ngfactory.js.map