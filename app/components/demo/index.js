import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { TrackedObject } from 'tracked-built-ins';

class ClassGroup extends Object {
  constructor(params) {
    super(params);
    Object.assign(this, params);
  }

  isFlex() {
    return this.valid.find((item) => item === 'flex');
  }
  isGrid() {
    return this.valid.find((item) => item === 'grid');
  }

  flexOrGrid() {
    if (this.isFlex() && this.isGrid()) {
      return 'flexAndGrid';
    } else if (this.isFlex()) {
      return 'flex';
    } else if (this.isGrid()) {
      return 'grid';
    } else {
      return '';
    }
  }
}

export default class DemoComponent extends Component {
  @tracked justifyContent = '';
  @tracked justifyItems = '';
  selected = new TrackedObject({});

  classGroups = [
    new ClassGroup({
      id: 'justify-content',
      label: 'Justify Content',
      valid: ['flex', 'grid', 'parent'],
      options: [
        'justify-start',
        'justify-end',
        'justify-center',
        'justify-between',
        'justify-around',
        'justify-evenly',
      ],
    }),
    new ClassGroup({
      id: 'justify-items',
      label: 'Justify Items',
      valid: ['grid', 'parent'],
      options: [
        'justify-items-start',
        'justify-items-end',
        'justify-items-center',
        'justify-items-stretch',
      ],
    }),
    new ClassGroup({
      id: 'justify-self',
      label: 'Justify Self',
      valid: ['grid', 'child'],
      options: [
        'justify-self-auto',
        'justify-self-start',
        'justify-self-end',
        'justify-self-center',
        'justify-self-stretch',
      ],
    }),
    new ClassGroup({
      id: 'align-content',
      label: 'Align Content',
      valid: ['flex', 'grid', 'parent'],
      options: [
        'content-center',
        'content-start',
        'content-end',
        'content-between',
        'content-around',
        'content-evenly',
        'content-baseline',
      ],
    }),
    new ClassGroup({
      id: 'align-items',
      label: 'Align Items',
      valid: ['flex', 'grid', 'parent'],
      options: [
        'items-start',
        'items-end',
        'items-center',
        'items-baseline',
        'items-stretch',
      ],
    }),
    new ClassGroup({
      id: 'align-self',
      label: 'Align Self',
      valid: ['flex', 'grid', 'child'],
      options: [
        'self-auto',
        'self-start',
        'self-end',
        'self-center',
        'self-stretch',
        'self-baseline',
      ],
    }),
  ];

  @action toggleRadio(classGroup, value) {
    this.selected[classGroup.id] = { value, classGroup };
  }
}
