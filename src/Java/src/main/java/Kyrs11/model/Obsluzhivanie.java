package Kyrs11.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kyrs11.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: Обслуживание
 */
@Entity(name = "IISKyrs11Обслуживание")
@Table(schema = "public", name = "Обслуживание")
public class Obsluzhivanie {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ЧековаяЛента")
    private Boolean чековаялента;

    @Column(name = "ДатаПроверки")
    private Date датапроверки;

    @Column(name = "ВремяПроверки")
    private String времяпроверки;

    @Column(name = "ГотовКРаботе")
    private Boolean готовкработе;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "BiletnayaKassa")
    @Convert("BiletnayaKassa")
    @Column(name = "БилетнаяКасса", length = 16, unique = true, nullable = false)
    private UUID _biletnayakassaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "BiletnayaKassa", insertable = false, updatable = false)
    private BiletnayaKassa biletnayakassa;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Operator")
    @Convert("Operator")
    @Column(name = "Оператор", length = 16, unique = true, nullable = false)
    private UUID _operatorid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Operator", insertable = false, updatable = false)
    private Operator operator;


    public Obsluzhivanie() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Boolean getЧековаяЛента() {
      return чековаялента;
    }

    public void setЧековаяЛента(Boolean чековаялента) {
      this.чековаялента = чековаялента;
    }

    public Date getДатаПроверки() {
      return датапроверки;
    }

    public void setДатаПроверки(Date датапроверки) {
      this.датапроверки = датапроверки;
    }

    public String getВремяПроверки() {
      return времяпроверки;
    }

    public void setВремяПроверки(String времяпроверки) {
      this.времяпроверки = времяпроверки;
    }

    public Boolean getГотовКРаботе() {
      return готовкработе;
    }

    public void setГотовКРаботе(Boolean готовкработе) {
      this.готовкработе = готовкработе;
    }


}