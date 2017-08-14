import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef  } from '@angular/core';

@Component({
  selector: 'food-list-item',
  templateUrl: './food-list-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoodListItem {
  @Input() toggleAction: Function;
  @Input() group: string;
  @Input() itemIndex: number;
  @Input() item: Map<string, any>;

  constructor(private cd: ChangeDetectorRef) { }

  emitToggleAction(group: string, itemIndex: number, item: Map<string, any>) {
    // Force change detection so we can detect OnPush while still utilizing the checkbox properly.
    this.cd.detectChanges();

    this.toggleAction(group, itemIndex, item);
  }
}
