import { Serializer as БилетнаяКассаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kyrs11-билетная-касса';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(БилетнаяКассаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
