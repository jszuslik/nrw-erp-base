import {Component, ElementRef, forwardRef, Input, OnInit, Renderer, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

const INLINE_EDIT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InlineEditComponent),
    multi: true
};

@Component({
    selector: 'app-inline-edit',
    templateUrl: './inline-edit.component.html',
    providers: [INLINE_EDIT_CONTROL_VALUE_ACCESSOR],
    styleUrls: ['./inline-edit.component.css']
})
export class InlineEditComponent implements ControlValueAccessor, OnInit {

    @ViewChild('inlineEditControl') inlineEditControl; // input DOM element
    @Input() label = '';  // Label value for input element
    @Input() type = ''; // The type of input element
    @Input() required = false; // Is input requried?
    @Input() disabled = false; // Is input disabled?
    protected _value = ''; // Private variable for input value
    protected preValue = ''; // The value before clicking to edit
    protected editing = false; // Is Component in edit mode?
    public onChange: any = Function.prototype; // Trascend the onChange event
    public onTouched: any = Function.prototype; // Trascend the onTouch event

    constructor(element: ElementRef, private _renderer: Renderer) {
    }

    // Control Value Accessors for ngModel
    get value(): any {
        return this._value;
    }

    set value(v: any) {
        if (v !== this._value) {
            this._value = v;
            this.onChange(v);
        }
    }

    // Required for ControlValueAccessor interface
    writeValue(value: any) {
        this._value = value;
    }

    // Required forControlValueAccessor interface
    public registerOnChange(fn: (_: any) => {}): void {
        this.onChange = fn;
    }

    // Required forControlValueAccessor interface
    public registerOnTouched(fn: () => {}): void {
        this.onTouched = fn;
    }

    // Do stuff when the input element loses focus
    onBlur($event: Event) {
        this.editing = false;
    }

    // Start the editting process for the input element
    edit(value) {
        if (this.disabled) {
            return;
        }

        this.preValue = value;
        this.editing = true;
        // Focus on the input element just as the editing begins
        setTimeout(_ => this._renderer.invokeElementMethod(this.inlineEditControl,
            'focus', []));
    }

    ngOnInit() {
    }

}
