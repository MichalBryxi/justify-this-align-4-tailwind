import { module, test } from 'qunit';
import { setupRenderingTest } from 'justify-this-align-4-tailwind/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | child', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Child />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Child>
        template block text
      </Child>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
