import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | ampeva', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /ampeva', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });
});
