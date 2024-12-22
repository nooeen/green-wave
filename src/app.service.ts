import { AccountsService } from '@lib/accounts';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly accountsService: AccountsService) {}

  async createAccount() {
    return this.accountsService.create({
      email: "test@test.com",
      password: "test",
    });
  }
}
