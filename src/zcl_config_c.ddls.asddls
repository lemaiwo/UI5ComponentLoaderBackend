@AbapCatalog.sqlViewName: 'ZCL_CONFIG_V'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Component Loader Configuration for Fiori app'


@OData.publish: true

define view zcl_config_c as select from zcl_config as Config
association [1..*] to zcl_param_C as Params on Config.type = Params.type
                                                and Config.scenario = Params.scenario
                                                and Config.componentid = Params.componentid  {
    //zbc_cep_config 
    key type, 
    key scenario, 
    key level_cl, 
    viewid, 
    componentid,
    componenturl,
    fiori_elements as fioriElements,
    layout,
    Params
}
