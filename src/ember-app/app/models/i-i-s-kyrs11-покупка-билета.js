import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПокупкаБилетаMixin
} from '../mixins/regenerated/models/i-i-s-kyrs11-покупка-билета';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПокупкаБилетаMixin, Validations, {
});

defineProjections(Model);

export default Model;
