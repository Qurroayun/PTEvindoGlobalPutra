import { Injectable, OnModuleInit } from '@nestjs/common';
import { createClient, RedisClientType } from 'redis';
import {ConfigService} from '@nestjs/config';

@Injectable()
export class RedisService implements OnModuleInit{
    private client : RedisClientType;

    constructor(private configService: ConfigService) {}

    async onModuleInit() {
        this.client = createClient({url : this.configService.get('REDIS_URL')})
        await this.client.connect();
    }

    async set(key: string, value: string, ttl?: number){
      await this.client.set(key,value);
    }

    async get(key: string): Promise<string | null>{
      return await this.client.get(key);
    }

    async del(key: string){
      await this.client.del(key);
    }
}
