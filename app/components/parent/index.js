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
        return item.classGroup.valid.includes(this.type);
      })
      .map((item) => {
        return item.value;
      })
      .join(' ');
  }

  get invalidForTypeInParent() {
    return this.parentClasses
      .filter((item) => {
        return !item.classGroup.valid.includes(this.type);
      })
      .map((item) => {
        return item.value;
      })
      .join(' ');
  }

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
