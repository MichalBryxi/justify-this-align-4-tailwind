import Component from '@glimmer/component';
import { SelectedRecord, FlexOrGrid } from '../demo';
import { COLORS } from '../../utils/constants';

interface Args {
  selected: SelectedRecord;
  type: FlexOrGrid;
}

export default class ChildComponent extends Component<Args> {
  COLORS = COLORS;

  get childClasses() {
    return Object.values(this.args.selected).filter((item) => {
      return item.classGroup.isChild();
    });
  }

  get validForTypeInChild() {
    return this.childClasses
      .filter((item) => {
        return item.classGroup.isType(this.args.type);
      })
      .map((item) => {
        return item.value;
      })
      .join(' ');
  }

  get invalidForTypeInChild() {
    return this.childClasses
      .filter((item) => {
        return !item.classGroup.isType(this.args.type);
      })
      .map((item) => {
        return item.value;
      })
      .join(' ');
  }
}
