import z from "zod";

export const goldenHourRequestSchema = z.object({
  lat: z.number(),
  lng: z.number(),
  date: z.string().optional(),
  callback: z.string().optional(),
  formatted: z.number().default(1),
  tzid: z.string().optional(),
});

export const goldenHourResponseSchema = z.object({
  results: z.object({
    sunrise: z.string(),
    sunset: z.string(),
  }).passthrough()
});
