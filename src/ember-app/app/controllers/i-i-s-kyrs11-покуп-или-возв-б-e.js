import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-kyrs11-покуп-или-возв-б-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-kyrs11-покупка-билета+покупатель':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'фИО',
            required: true,
            relationName: 'покупатель',
            projection: 'ПокупательL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-kyrs11-возврат-билета+покупатель':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'фИО',
            required: true,
            relationName: 'покупатель',
            projection: 'ПокупательL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
