import { Injectable } from "@nestjs/common";
import { BaseRepositoryAbstract } from "@lib/share/database/base.repository.abstract";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BaseRepositoryInterface } from "@lib/share/database/base.repository.interface";
import { AccountModel } from "./account.schema";
  
@Injectable()
export class AccountsRepository
  extends BaseRepositoryAbstract<AccountModel>
  implements BaseRepositoryInterface<AccountModel> {
  constructor(
    @InjectModel(AccountModel.name)
    private readonly accountModel: Model<AccountModel>
  ) {
    super(accountModel);
  }
}
