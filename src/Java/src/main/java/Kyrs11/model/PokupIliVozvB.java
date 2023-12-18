package Kyrs11.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kyrs11.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: ПокупИлиВозвБ
 */
@Entity(name = "IISKyrs11ПокупИлиВозвБ")
@Table(schema = "public", name = "ПокупИлиВозвБ")
public class PokupIliVozvB {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "ПунктОтправ")
    private String пунктотправ;

    @Column(name = "ПунктНазнач")
    private String пунктназнач;

    @Column(name = "Статус")
    private String статус;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "BiletnayaKassa")
    @Convert("BiletnayaKassa")
    @Column(name = "БилетнаяКасса", length = 16, unique = true, nullable = false)
    private UUID _biletnayakassaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "BiletnayaKassa", insertable = false, updatable = false)
    private BiletnayaKassa biletnayakassa;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Perevozchik1")
    @Convert("Perevozchik1")
    @Column(name = "Перевозчик1", length = 16, unique = true, nullable = false)
    private UUID _perevozchik1id;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Perevozchik1", insertable = false, updatable = false)
    private Perevozchik1 perevozchik1;

    @OneToMany(mappedBy = "pokupilivozvb", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<PokupkaBileta> pokupkabiletas;

    @OneToMany(mappedBy = "pokupilivozvb", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<VozvratBileta> vozvratbiletas;


    public PokupIliVozvB() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public String getПунктОтправ() {
      return пунктотправ;
    }

    public void setПунктОтправ(String пунктотправ) {
      this.пунктотправ = пунктотправ;
    }

    public String getПунктНазнач() {
      return пунктназнач;
    }

    public void setПунктНазнач(String пунктназнач) {
      this.пунктназнач = пунктназнач;
    }

    public String getСтатус() {
      return статус;
    }

    public void setСтатус(String статус) {
      this.статус = статус;
    }


}