import Component from '@glimmer/component';
import { ClassGroupInterface } from '../demo';
import { COLORS } from '../../utils/constants';

interface ArgsToggleSignature {
  Args: {
    classGroup: ClassGroupInterface;
  };
}

export default class TogglesComponent extends Component<ArgsToggleSignature> {
  get bgColor() {
    const index = this.args.classGroup.flexOrGrid();

    if (!index) return '';

    return COLORS.bg[index];
  }
}
