import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import * as Joi from "joi";
import { buildMongoDBConfig } from "./mongodb.config";
import { buildRedisConfig } from "./redis.config";
import { mongodbConfigSchema } from "./schemas/mongodb.schema";
import { redisConfigSchema } from "./schemas/redis.schema";
import { buildQueueConfig } from "./queue.config";
import { meilisearchConfigSchema } from "@lib/share/configuration/schemas/meilisearch.schema";
import { buildMeilisearchConfig } from "@lib/share/configuration/meilisearch.config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      expandVariables: true,
      load: [
        buildMongoDBConfig,
        buildRedisConfig,
        buildQueueConfig,
        buildMeilisearchConfig,
      ],
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid("development", "production", "test", "provision", "staging")
          .default("development"),
        WEB_PORT: Joi.number().default(3000),
        WEB_API_PORT: Joi.number().default(3004),
        CMS_PORT: Joi.number().default(3001),
        CMS_API_PORT: Joi.number().default(3002),
        BULLMQ_PORT: Joi.number().default(3003),
        WEB_CLONE_PORT: Joi.number().default(3100),
        CMS_CLONE_PORT: Joi.number().default(3101),
        ...redisConfigSchema(true), // REDIS CACHE
        ...mongodbConfigSchema(true), // MONGODB & DB CACHE
        ...redisConfigSchema(true, "QUEUE"), // BULLMQ
        ...meilisearchConfigSchema(true), // MEILISEARCH
        WEB_API_URI: Joi.string().optional(),
        RESOURCE_API_URI: Joi.string().optional(),
      }),
    }),
  ],
})
export class ConfigurationModule {}
