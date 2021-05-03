@AbapCatalog.sqlViewName: 'ZCL_PARAM_V'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Component Loader Configuration Params for Fiori app'
define view zcl_param_C as select from zcl_param as Params {
    //Params 
    key type, 
    key scenario, 
    key componentid, 
    key paramid as id, 
    key paramseqnr as seqnr,
    paramval as value
}
