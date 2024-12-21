import { Module } from "@nestjs/common";
import mongoose from "mongoose";
import { MongooseModule } from "@nestjs/mongoose";
import { AccountsService } from "./accounts.service";
import { AccountsRepository } from "./accounts.repository";
import { AccountModel, AccountSchema } from "./account.schema";

mongoose.model(AccountModel.name, AccountSchema);

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: AccountModel.name,
        schema: AccountSchema,
        collection: "accounts",
      },
    ]),
  ],
  providers: [AccountsService, AccountsRepository],
  exports: [AccountsService],
})
export class AccountsModule {}
