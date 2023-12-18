import {
  defineNamespace,
  defineProjections,
  Model as Перевозчик1Mixin
} from '../mixins/regenerated/models/i-i-s-kyrs11-перевозчик1';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(Перевозчик1Mixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
