import Component from '@glimmer/component';

export default class ParentComponent extends Component {
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
        return 'h-64 flex';
      case 'grid':
        return 'h-64 grid grid-cols-2';
      default:
        return '';
    }
  }
}
