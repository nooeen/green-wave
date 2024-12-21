import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from '@lib/share/configuration/configuration.module';
import { QueueModule } from '@lib/share/queue/queue.module';
import { DatabaseModule } from '@lib/share/database/database.module';
import { AccountsModule } from '@lib/accounts/accounts.module';

@Module({
  imports: [ConfigurationModule, DatabaseModule, QueueModule, AccountsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
