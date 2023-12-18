import {
  defineNamespace,
  defineProjections,
  Model as ПокупИлиВозвБMixin
} from '../mixins/regenerated/models/i-i-s-kyrs11-покуп-или-возв-б';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПокупИлиВозвБMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
