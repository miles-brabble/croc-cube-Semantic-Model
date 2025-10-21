cube(`DimObserver`, {
  sql: `SELECT * FROM "GOLDEN".dim_observer`,
  
  dataSource: `default`,
   public: false,
  
  joins: {
    
  },
  
  dimensions: {
    observerId: {
      sql: `observer_id`,
      type: `string`,
      primaryKey: true
    },
    
    observerName: {
      sql: `observer_name`,
      type: `string`
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
