import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-typed-simple-changes',
  templateUrl: './typed-simple-changes.component.html',
  styleUrls: ['./typed-simple-changes.component.scss'],
})
export class TypedSimpleChangesComponent implements OnChanges {
  @Input() type: string = 'default';
  @Input() disabled: boolean = false;

  @Output() dismiss = new EventEmitter();

  //   ngOnChanges(changes: SimpleChanges) {
  //     // NOT TYPED
  //   }

  ngOnChanges(changes: NgChanges<TypedSimpleChangesComponent>) {
    // TYPED
    console.log(changes.type.currentValue);
    console.log(changes.disabled.currentValue);
  }

  close() {
    this.dismiss.emit();
  }
}

type MarkFunctionProperties<Component> = {
  [Key in keyof Component]: Component[Key] extends Function ? never : Key;
};

type ExcludeFunctionPropertyNames<T> = MarkFunctionProperties<T>[keyof T];

type ExcludeFunctions<T> = Pick<T, ExcludeFunctionPropertyNames<T>>;

export type NgChanges<Component, Props = ExcludeFunctions<Component>> = {
  [Key in keyof Props]: {
    previousValue: Props[Key];
    currentValue: Props[Key];
    firstChange: boolean;
    isFirstChange(): boolean;
  };
};
