import { Serializer as ПокупкаБилетаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kyrs11-покупка-билета';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПокупкаБилетаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
