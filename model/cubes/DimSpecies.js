cube(`DimSpecies`, {
  sql: `SELECT * FROM "GOLDEN".dim_species`,
  
  dataSource: `default`,
   public: false,
  
  joins: {
    
  },
  
  dimensions: {
    commonName: {
      sql: `common_name`,
      type: `string`
    },
    
    family: {
      sql: `family`,
      type: `string`
    },
    
    genus: {
      sql: `genus`,
      type: `string`
    },
    
    scientificName: {
      sql: `scientific_name`,
      type: `string`
    },
    
    speciesId: {
      sql: `species_id`,
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
