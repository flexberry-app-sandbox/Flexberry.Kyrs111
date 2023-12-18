import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kyrs11-покупка-билета', 'Unit | Serializer | i-i-s-kyrs11-покупка-билета', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kyrs11-покупка-билета',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-kyrs11-статус',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
