import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПокупательMixin
} from '../mixins/regenerated/models/i-i-s-kyrs11-покупатель';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПокупательMixin, Validations, {
});

defineProjections(Model);

export default Model;
