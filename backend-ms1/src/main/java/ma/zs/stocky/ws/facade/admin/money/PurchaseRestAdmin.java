package  ma.zs.stocky.ws.facade.admin.money;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

import ma.zs.stocky.bean.core.money.Purchase;
import ma.zs.stocky.dao.criteria.core.money.PurchaseCriteria;
import ma.zs.stocky.service.facade.admin.money.PurchaseAdminService;
import ma.zs.stocky.ws.converter.money.PurchaseConverter;
import ma.zs.stocky.ws.dto.money.PurchaseDto;
import ma.zs.stocky.zynerator.controller.AbstractController;
import ma.zs.stocky.zynerator.dto.AuditEntityDto;
import ma.zs.stocky.zynerator.util.PaginatedList;


import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import ma.zs.stocky.zynerator.process.Result;


import org.springframework.web.multipart.MultipartFile;
import ma.zs.stocky.zynerator.dto.FileTempDto;

@RestController
@RequestMapping("/api/admin/purchase/")
public class PurchaseRestAdmin  extends AbstractController<Purchase, PurchaseDto, PurchaseCriteria, PurchaseAdminService, PurchaseConverter> {



    @Operation(summary = "upload one purchase")
    @RequestMapping(value = "upload", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<FileTempDto> uploadFileAndGetChecksum(@RequestBody MultipartFile file) throws Exception {
        return super.uploadFileAndGetChecksum(file);
    }
    @Operation(summary = "upload multiple purchases")
    @RequestMapping(value = "upload-multiple", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<List<FileTempDto>> uploadMultipleFileAndGetChecksum(@RequestBody MultipartFile[] files) throws Exception {
        return super.uploadMultipleFileAndGetChecksum(files);
    }

    @Operation(summary = "Finds a list of all purchases")
    @GetMapping("")
    public ResponseEntity<List<PurchaseDto>> findAll() throws Exception {
        return super.findAll();
    }

    @Operation(summary = "Finds an optimized list of all purchases")
    @GetMapping("optimized")
    public ResponseEntity<List<PurchaseDto>> findAllOptimized() throws Exception {
        return super.findAllOptimized();
    }

    @Operation(summary = "Finds a purchase by reference")
    @GetMapping("reference/{reference}")
    public ResponseEntity<PurchaseDto> findByReference(@PathVariable String reference) {
        return super.findByReferenceEntity(new Purchase(reference));
    }

    @Operation(summary = "Saves the specified  purchase")
    @PostMapping("")
    public ResponseEntity<PurchaseDto> save(@RequestBody PurchaseDto dto) throws Exception {
        return super.save(dto);
    }

    @Operation(summary = "Updates the specified  purchase")
    @PutMapping("")
    public ResponseEntity<PurchaseDto> update(@RequestBody PurchaseDto dto) throws Exception {
        return super.update(dto);
    }

    @Operation(summary = "Delete list of purchase")
    @PostMapping("multiple")
    public ResponseEntity<List<PurchaseDto>> delete(@RequestBody List<PurchaseDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }
    @Operation(summary = "Delete the specified purchase")
    @DeleteMapping("")
    public ResponseEntity<PurchaseDto> delete(@RequestBody PurchaseDto dto) throws Exception {
            return super.delete(dto);
    }

    @Operation(summary = "Delete the specified purchase")
    @DeleteMapping("id/{id}")
    public ResponseEntity<Long> deleteById(@PathVariable Long id) throws Exception {
        return super.deleteById(id);
    }
    @Operation(summary = "Delete multiple purchases by ids")
    @DeleteMapping("multiple/id")
    public ResponseEntity<List<Long>> deleteByIdIn(@RequestBody List<Long> ids) throws Exception {
            return super.deleteByIdIn(ids);
     }


    @Operation(summary = "find by purchaseState id")
    @GetMapping("purchaseState/id/{id}")
    public List<PurchaseDto> findByPurchaseStateId(@PathVariable Long id){
        return findDtos(service.findByPurchaseStateId(id));
    }
    @Operation(summary = "delete by purchaseState id")
    @DeleteMapping("purchaseState/id/{id}")
    public int deleteByPurchaseStateId(@PathVariable Long id){
        return service.deleteByPurchaseStateId(id);
    }

    @Operation(summary = "Finds a purchase and associated list by id")
    @GetMapping("id/{id}")
    public ResponseEntity<PurchaseDto> findById(@PathVariable Long id) {
        return super.findWithAssociatedLists(id);
    }

    @Operation(summary = "Finds purchases by criteria")
    @PostMapping("find-by-criteria")
    public ResponseEntity<List<PurchaseDto>> findByCriteria(@RequestBody PurchaseCriteria criteria) throws Exception {
        return super.findByCriteria(criteria);
    }

    @Operation(summary = "Finds paginated purchases by criteria")
    @PostMapping("find-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody PurchaseCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @Operation(summary = "Exports purchases by criteria")
    @PostMapping("export")
    public ResponseEntity<InputStreamResource> export(@RequestBody PurchaseCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @Operation(summary = "Gets purchase data size by criteria")
    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody PurchaseCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }



    public PurchaseRestAdmin (PurchaseAdminService service, PurchaseConverter converter) {
        super(service, converter);
    }




}
