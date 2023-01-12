import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { TrackedObject } from 'tracked-built-ins';

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
      valid: ['flex', 'grid', 'parent'],
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
      valid: ['grid', 'parent'],
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
      valid: ['grid', 'child'],
      options: [
        'justify-self-auto',
        'justify-self-start',
        'justify-self-end',
        'justify-self-center',
        'justify-self-stretch',
      ],
    },
  ];

  @action toggleRadio(classGroup, value) {
    this.selected[classGroup.id] = { value, classGroup };
  }
}
