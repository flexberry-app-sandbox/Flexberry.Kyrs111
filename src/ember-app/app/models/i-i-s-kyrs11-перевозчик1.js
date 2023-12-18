import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as Перевозчик1Mixin
} from '../mixins/regenerated/models/i-i-s-kyrs11-перевозчик1';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(Перевозчик1Mixin, Validations, {
});

defineProjections(Model);

export default Model;
