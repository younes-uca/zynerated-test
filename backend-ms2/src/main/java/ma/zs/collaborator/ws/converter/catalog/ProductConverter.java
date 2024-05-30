package  ma.zs.collaborator.ws.converter.catalog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;




import ma.zs.collaborator.zynerator.util.StringUtil;
import ma.zs.collaborator.zynerator.converter.AbstractConverter;
import ma.zs.collaborator.zynerator.util.DateUtil;
import ma.zs.collaborator.bean.core.catalog.Product;
import ma.zs.collaborator.ws.dto.catalog.ProductDto;

@Component
public class ProductConverter extends AbstractConverter<Product, ProductDto> {


    public  ProductConverter() {
        super(Product.class, ProductDto.class);
    }

    @Override
    public Product toItem(ProductDto dto) {
        if (dto == null) {
            return null;
        } else {
        Product item = new Product();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getCode()))
                item.setCode(dto.getCode());
            if(StringUtil.isNotEmpty(dto.getReference()))
                item.setReference(dto.getReference());



        return item;
        }
    }

    @Override
    public ProductDto toDto(Product item) {
        if (item == null) {
            return null;
        } else {
            ProductDto dto = new ProductDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if(StringUtil.isNotEmpty(item.getCode()))
                dto.setCode(item.getCode());
            if(StringUtil.isNotEmpty(item.getReference()))
                dto.setReference(item.getReference());


        return dto;
        }
    }




    public void initObject(boolean value) {
    }


}
