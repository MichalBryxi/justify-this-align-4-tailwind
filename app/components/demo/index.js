import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class DemoComponent extends Component {
  @tracked justifyContent = '';
  @tracked justifyItems = '';

  get parentClasses() {
    return [this.justifyContent, this.justifyItems].join(' ');
  }
}
