import { Serializer as ОператорSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kyrs11-оператор';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОператорSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
