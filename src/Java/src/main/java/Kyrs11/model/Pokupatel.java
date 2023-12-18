package Kyrs11.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kyrs11.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Покупатель
 */
@Entity(name = "IISKyrs11Покупатель")
@Table(schema = "public", name = "Покупатель")
public class Pokupatel {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ID")
    private Integer id;

    @Column(name = "ФИО")
    private String фио;

    @Column(name = "БанковскийСчет")
    private String банковскийсчет;


    public Pokupatel() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getID() {
      return id;
    }

    public void setID(Integer id) {
      this.id = id;
    }

    public String getФИО() {
      return фио;
    }

    public void setФИО(String фио) {
      this.фио = фио;
    }

    public String getБанковскийСчет() {
      return банковскийсчет;
    }

    public void setБанковскийСчет(String банковскийсчет) {
      this.банковскийсчет = банковскийсчет;
    }


}