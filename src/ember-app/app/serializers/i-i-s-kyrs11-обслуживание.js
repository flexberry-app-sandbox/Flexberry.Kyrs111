import { Serializer as ОбслуживаниеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kyrs11-обслуживание';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОбслуживаниеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
