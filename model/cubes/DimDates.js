cube(`DimDates`, {
  sql: `SELECT * FROM "GOLDEN".dim_dates`,
  
  dataSource: `default`,
   public: false,
   
  joins: {
    
  },
  
  dimensions: {
    monthDate: {
      sql: `month_date`,
      type: `string`
    },
    
    quarterDate: {
      sql: `quarter_date`,
      type: `string`
    },
    
    weekDate: {
      sql: `week_date`,
      type: `string`
    },
    
    yearDate: {
      sql: `year_date`,
      type: `string`
    },
    
    dayDate: {
      sql: `day_date`,
      type: `time`
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
