import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПокупИлиВозвБMixin
} from '../mixins/regenerated/models/i-i-s-kyrs11-покуп-или-возв-б';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПокупИлиВозвБMixin, Validations, {
});

defineProjections(Model);

export default Model;
