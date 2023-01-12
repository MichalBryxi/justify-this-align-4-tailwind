import Component from '@glimmer/component';

export default class ParentComponent extends Component {
  get type() {
    return this.args.type ?? 'flex';
  }

  get defaultClasses() {
    switch (this.type) {
      case 'flex':
        return 'flex';
      case 'grid':
        return 'grid grid-cols-2';
      default:
        return '';
    }
  }
}
