import Component from '@glimmer/component';
import { COLORS } from '../../utils/constants';

export default class TogglesComponent extends Component {
  get bgColor() {
    console.log(this.args.classGroup);
    return COLORS.bg[this.args.classGroup.flexOrGrid()];
  }
}
