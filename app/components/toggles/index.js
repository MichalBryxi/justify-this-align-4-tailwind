import Component from '@glimmer/component';
import { COLORS } from '../../utils/constants';

export default class TogglesComponent extends Component {
  get bgColor() {
    // TODO: this should be utility function
    const valid = this.args.valid;
    if (valid.isFlexAndGrid()) {
      return COLORS.bg.flexAndGrid;
    } else if (valid.isFlex()) {
      return COLORS.bg.flex;
    } else {
      return COLORS.bg.grid;
    }
  }
}
