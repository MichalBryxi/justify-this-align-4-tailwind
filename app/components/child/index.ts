import Component from '@glimmer/component';
import { SelectedRecord, FlexOrGrid } from '../demo';

interface Args {
  selected: SelectedRecord;
  type: FlexOrGrid;
}

export default class ChildComponent extends Component<Args> {
  get childClasses() {
    return Object.values(this.args.selected).filter((item) => {
      return item.classGroup.valid.includes('child');
    });
  }

  get validForTypeInChild() {
    return this.childClasses
      .filter((item) => {
        return item.classGroup.valid.includes(this.args.type);
      })
      .map((item) => {
        return item.value;
      })
      .join(' ');
  }

  get invalidForTypeInChild() {
    return this.childClasses
      .filter((item) => {
        return !item.classGroup.valid.includes(this.args.type);
      })
      .map((item) => {
        return item.value;
      })
      .join(' ');
  }
}
