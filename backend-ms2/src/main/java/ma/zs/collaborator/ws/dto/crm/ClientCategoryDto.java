package  ma.zs.collaborator.ws.dto.crm;

import ma.zs.collaborator.zynerator.audit.Log;
import ma.zs.collaborator.zynerator.dto.AuditBaseDto;
import com.fasterxml.jackson.annotation.JsonInclude;





@JsonInclude(JsonInclude.Include.NON_NULL)
public class ClientCategoryDto  extends AuditBaseDto {

    private String reference  ;
    private String code  ;




    public ClientCategoryDto(){
        super();
    }



    @Log
    public String getReference(){
        return this.reference;
    }
    public void setReference(String reference){
        this.reference = reference;
    }

    @Log
    public String getCode(){
        return this.code;
    }
    public void setCode(String code){
        this.code = code;
    }








}
