import { Injectable, OnModuleInit } from '@nestjs/common';
import { createClient, RedisClientType } from 'redis';

@Injectable()
export class RedisService implements OnModuleInit{
    private client : RedisClientType;
 
    async onModuleInit() {
        this.client = createClient({url : process.env.REDIS_URL})
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
