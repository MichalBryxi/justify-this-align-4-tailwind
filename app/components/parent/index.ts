import Component from '@glimmer/component';
import { COLORS } from '../../utils/constants';
import { SelectedRecord, FlexOrGrid } from '../demo';

interface ArgsParentSignature {
  Args: {
    selected: SelectedRecord;
    type: FlexOrGrid;
  };
}

export default class ParentComponent extends Component<ArgsParentSignature> {
  COLORS = COLORS;

  get parentClasses() {
    return Object.values(this.args.selected).filter((item) => {
      return item.classGroup.valid.includes('parent');
    });
  }

  get validForTypeInParent() {
    return this.parentClasses
      .filter((item) => {
        return item.classGroup.valid.includes(this.args.type);
      })
      .map((item) => {
        return item.value;
      })
      .join(' ');
  }

  get invalidForTypeInParent() {
    return this.parentClasses
      .filter((item) => {
        return !item.classGroup.valid.includes(this.args.type);
      })
      .map((item) => {
        return item.value;
      })
      .join(' ');
  }

  get defaultClasses() {
    switch (this.args.type) {
      case 'flex':
        return `h-48 flex ${COLORS.bg.flex}`;
      case 'grid':
        return `h-48 grid bg-sky-500 grid-cols-2 ${COLORS.bg.grid}`;
      default:
        return '';
    }
  }
}
