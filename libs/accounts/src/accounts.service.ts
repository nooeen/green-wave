import { Injectable } from "@nestjs/common";
import { AccountsRepository } from "./accounts.repository";
import { AccountModel } from "./account.schema";
import { BaseServiceAbstract } from "@lib/share/services/base.service.abstract";

@Injectable()
export class AccountsService extends BaseServiceAbstract<AccountModel> {
  constructor(private accountsRepository: AccountsRepository) {
    super(accountsRepository);
  }
}
