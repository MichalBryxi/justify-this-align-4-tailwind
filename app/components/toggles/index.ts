import Component from '@glimmer/component';
import { ClassGroup } from '../demo';
import { COLORS } from '../../utils/constants';

interface ArgsToggleSignature {
  Args: {
    classGroup: ClassGroup;
  };
}

export default class TogglesComponent extends Component<ArgsToggleSignature> {
  get bgColor() {
    return COLORS.bg[this.args.classGroup.flexOrGrid()];
  }
}
