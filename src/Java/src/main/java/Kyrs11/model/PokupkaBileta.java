package Kyrs11.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kyrs11.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ПокупкаБилета
 */
@Entity(name = "IISKyrs11ПокупкаБилета")
@Table(schema = "public", name = "ПокупкаБилета")
public class PokupkaBileta {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Место")
    private Integer место;

    @Column(name = "ДатаПоездки")
    private Date датапоездки;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Pokupatel")
    @Convert("Pokupatel")
    @Column(name = "Покупатель", length = 16, unique = true, nullable = false)
    private UUID _pokupatelid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Pokupatel", insertable = false, updatable = false)
    private Pokupatel pokupatel;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "PokupIliVozvB")
    @Convert("PokupIliVozvB")
    @Column(name = "ПокупИлиВозвБ", length = 16, unique = true, nullable = false)
    private UUID _pokupilivozvbid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "PokupIliVozvB", insertable = false, updatable = false)
    private PokupIliVozvB pokupilivozvb;


    public PokupkaBileta() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getМесто() {
      return место;
    }

    public void setМесто(Integer место) {
      this.место = место;
    }

    public Date getДатаПоездки() {
      return датапоездки;
    }

    public void setДатаПоездки(Date датапоездки) {
      this.датапоездки = датапоездки;
    }


}