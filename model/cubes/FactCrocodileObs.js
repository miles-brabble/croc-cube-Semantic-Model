cube(`FactCrocodileObs`, {
  sql: `SELECT * FROM "GOLDEN".fact_crocodile_obs`,
  
  dataSource: `default`,
   public: false,
  
  joins: {
    DimConservationStatus: {
      sql: `${CUBE.conservationStatusId} = ${DimConservationStatus.conservationStatusId}`,
      relationship: `belongsTo`
    }
  },

  dimensions: {
    conservationStatusId: {
      sql: `conservation_status_id`,
      type: `string`
    },
    
    habitatType: {
      sql: `habitat_type`,
      type: `string`
    },
    
    locationId: {
      sql: `location_id`,
      type: `string`
    },
    
    observationId: {
      sql: `observation_id`,
      type: `string`,
      primaryKey: true
    },
    
    observedLengthM: {
      sql: `observed_length_m`,
      type: `string`
    },
    
    observedWeightKg: {
      sql: `observed_weight_kg`,
      type: `string`
    },
    
    sex: {
      sql: `sex`,
      type: `string`
    },
    
    speciesId: {
      sql: `species_id`,
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
