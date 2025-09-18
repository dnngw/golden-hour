import z from "zod";

export const geoLocationRequestSchema = z.object({
  name: z.string(),
  count: z.number().min(1).max(100).optional().default(10),
  format: z.string().default("json"),
  languange: z.string().optional().default("en"),
  apikey: z.string().optional(),
  countryCode: z.string().length(2).optional(),
});

export const geoLocationResponseSchema = z.object({
  results: z.array(
    z
      .object({
        id: z.number(),
        name: z.string(),
        latitude: z.number(),
        longitude: z.number(),
      })
      .passthrough()
  ),
});
