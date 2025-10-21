cube(`DimConservationStatus`, {
  sql: `SELECT * FROM "GOLDEN".dim_conservation_status`,
  
  dataSource: `default`,
  public: false,
  
  joins: {
    
  },
  
  dimensions: {
    conservationStatus: {
      sql: `conservation_status`,
      type: `string`
    },
    
    conservationStatusId: {
      sql: `conservation_status_id`,
      type: `string`,
      primaryKey: true
    }
  },
  
  measures: {
    count: {
      type: `count`
    }
  },
  
  preAggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
