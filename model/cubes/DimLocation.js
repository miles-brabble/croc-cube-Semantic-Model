cube(`DimLocation`, {
  sql: `SELECT * FROM "GOLDEN".dim_location`,
  
  dataSource: `default`,
   public: false,

  joins: {
    
  },
  
  dimensions: {
    countryRegion: {
      sql: `country_region`,
      type: `string`
    },
    
    locationId: {
      sql: `location_id`,
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
