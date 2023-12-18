import {
  defineNamespace,
  defineProjections,
  Model as БилетнаяКассаMixin
} from '../mixins/regenerated/models/i-i-s-kyrs11-билетная-касса';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(БилетнаяКассаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
