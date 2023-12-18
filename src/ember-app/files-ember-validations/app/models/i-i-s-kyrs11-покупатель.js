import {
  defineNamespace,
  defineProjections,
  Model as ПокупательMixin
} from '../mixins/regenerated/models/i-i-s-kyrs11-покупатель';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПокупательMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
