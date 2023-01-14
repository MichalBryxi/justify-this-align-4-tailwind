import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { TrackedObject } from 'tracked-built-ins';

class ValidArray extends Array {
  isFlex() {
    return this.find((item) => item === 'flex');
  }
  isGrid() {
    return this.find((item) => item === 'grid');
  }
  isFlexAndGrid() {
    return this.isFlex() && this.isGrid();
  }
}

export default class DemoComponent extends Component {
  @tracked justifyContent = '';
  @tracked justifyItems = '';
  selected = new TrackedObject({});

  get parentClasses() {
    return [this.justifyContent, this.justifyItems].join(' ');
  }

  classGroups = [
    {
      id: 'justify-content',
      label: 'Justify Content',
      valid: new ValidArray('flex', 'grid', 'parent'),
      options: [
        'justify-start',
        'justify-end',
        'justify-center',
        'justify-between',
        'justify-around',
        'justify-evenly',
      ],
    },
    {
      id: 'justify-items',
      label: 'Justify Items',
      valid: new ValidArray('grid', 'parent'),
      options: [
        'justify-items-start',
        'justify-items-end',
        'justify-items-center',
        'justify-items-stretch',
      ],
    },
    {
      id: 'justify-self',
      label: 'Justify Self',
      valid: new ValidArray('grid', 'child'),
      options: [
        'justify-self-auto',
        'justify-self-start',
        'justify-self-end',
        'justify-self-center',
        'justify-self-stretch',
      ],
    },
    {
      id: 'align-content',
      label: 'Align Content',
      valid: new ValidArray('flex', 'grid', 'parent'),
      options: [
        'content-center',
        'content-start',
        'content-end',
        'content-between',
        'content-around',
        'content-evenly',
        'content-baseline',
      ],
    },
    {
      id: 'align-items',
      label: 'Align Items',
      valid: new ValidArray('flex', 'grid', 'parent'),
      options: [
        'items-start',
        'items-end',
        'items-center',
        'items-baseline',
        'items-stretch',
      ],
    },
    {
      id: 'align-self',
      label: 'Align Self',
      valid: new ValidArray('flex', 'grid', 'child'),
      options: [
        'self-auto',
        'self-start',
        'self-end',
        'self-center',
        'self-stretch',
        'self-baseline',
      ],
    },
  ];

  @action toggleRadio(classGroup, value) {
    this.selected[classGroup.id] = { value, classGroup };
  }
}
