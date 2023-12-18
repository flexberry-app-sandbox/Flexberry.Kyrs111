import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kyrs11-возврат-билета', 'Unit | Model | i-i-s-kyrs11-возврат-билета', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-kyrs11-билетная-касса',
    'model:i-i-s-kyrs11-возврат-билета',
    'model:i-i-s-kyrs11-обслуживание',
    'model:i-i-s-kyrs11-оператор',
    'model:i-i-s-kyrs11-перевозчик1',
    'model:i-i-s-kyrs11-покуп-или-возв-б',
    'model:i-i-s-kyrs11-покупатель',
    'model:i-i-s-kyrs11-покупка-билета',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
