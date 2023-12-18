package Kyrs11.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kyrs11.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ВозвратБилета
 */
@Entity(name = "IISKyrs11ВозвратБилета")
@Table(schema = "public", name = "ВозвратБилета")
public class VozvratBileta {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ПричинаВозв")
    private String причинавозв;

    @Column(name = "ДатаПокупки")
    private Date датапокупки;

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


    public VozvratBileta() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getПричинаВозв() {
      return причинавозв;
    }

    public void setПричинаВозв(String причинавозв) {
      this.причинавозв = причинавозв;
    }

    public Date getДатаПокупки() {
      return датапокупки;
    }

    public void setДатаПокупки(Date датапокупки) {
      this.датапокупки = датапокупки;
    }


}