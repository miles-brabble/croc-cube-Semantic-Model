// Use cube.js only when you need behavior that env vars can’t express:
	// custom auth (JWT check, row-level security)
    // request context enrichment (tenanting, user roles)
	// custom pre-aggregation refresh scheduling
	// multi-datasource routing, custom drivers
	// logging, tracing, Redis/Queue config beyond defaults

/** @type{ import('@cubejs-backend/server-core').CreateOptions } */
module.exports = {
};
