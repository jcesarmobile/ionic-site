/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './segment';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/linker/element_ref';
export class Wrapper_Segment {
  /*private*/ _eventHandler:Function;
  context:import0.Segment;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  subscription0:any;
  constructor(p0:any,p1:any,p2:any,p3:any) {
    this._changed = false;
    this.context = new import0.Segment(p0,p1,p2,p3);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  check_color(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.color = currValue;
      this._expr_0 = currValue;
    }
  }
  check_mode(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.mode = currValue;
      this._expr_1 = currValue;
    }
  }
  check_disabled(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.disabled = currValue;
      this._expr_2 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.ionChange.subscribe(_eventHandler.bind(view,'ionChange'))); }
  }
}
export class Wrapper_SegmentButton {
  /*private*/ _eventHandler:Function;
  context:import0.SegmentButton;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  subscription0:any;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this.context = new import0.SegmentButton(p0,p1);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  check_value(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.value = currValue;
      this._expr_0 = currValue;
    }
  }
  check_disabled(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.disabled = currValue;
      this._expr_1 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.onClick()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.ionSelect.subscribe(_eventHandler.bind(view,'ionSelect'))); }
  }
}
var renderType_SegmentButton_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_SegmentButton_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.SegmentButton>;
  _SegmentButton_0_3:Wrapper_SegmentButton;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_SegmentButton_Host0,renderType_SegmentButton_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'ion-segment-button',new import3.InlineArray8(6,'class','segment-button','role','button','tappable',''),rootSelector,(null as any));
    this.compView_0 = new View_SegmentButton0(this.viewUtils,this,0,this._el_0);
    this._SegmentButton_0_3 = new Wrapper_SegmentButton(this.renderer,new import8.ElementRef(this._el_0));
    this.compView_0.create(this._SegmentButton_0_3.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),[disposable_0]);
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._SegmentButton_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.SegmentButton) && (0 === requestNodeIndex))) { return this._SegmentButton_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._SegmentButton_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._SegmentButton_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 0) && (ngContentIndex == 0))) {  }
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.compView_0.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._SegmentButton_0_3.handleEvent(eventName,$event) && result);
    return result;
  }
}
export const SegmentButtonNgFactory:import7.ComponentFactory<import0.SegmentButton> = new import7.ComponentFactory<import0.SegmentButton>('ion-segment-button',View_SegmentButton_Host0,import0.SegmentButton);
const styles_SegmentButton:any[] = ([] as any[]);
var renderType_SegmentButton:import4.RenderComponentType = import3.createRenderComponentType('',1,import5.ViewEncapsulation.None,styles_SegmentButton,{});
export class View_SegmentButton0 extends import2.AppView<import0.SegmentButton> {
  _el_0:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_SegmentButton0,renderType_SegmentButton,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this.projectNodes(parentRenderNode,0);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','button-effect'),(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return (null as any);
  }
}