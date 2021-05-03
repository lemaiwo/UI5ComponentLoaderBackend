@AbapCatalog.sqlViewName: 'ZCL_SCENARIO_V'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Component Loader Scenario for Fiori app'

@OData.publish: true

define view zcl_scenario_c as select from zcl_scenario as s inner join zcl_scenario_t as st on st.scenario_id = s.scenario_id and st.spras = $session.system_language {
    //s 
    key s.scenario_id, 
    //st 
    scenario_descr
    
}
