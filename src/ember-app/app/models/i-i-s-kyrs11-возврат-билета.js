import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ВозвратБилетаMixin
} from '../mixins/regenerated/models/i-i-s-kyrs11-возврат-билета';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ВозвратБилетаMixin, Validations, {
});

defineProjections(Model);

export default Model;
