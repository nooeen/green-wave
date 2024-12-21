import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema({
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
  versionKey: false,
})
export class AccountModel {
  @Prop({
    type: String,
  })
  email: string;

  @Prop({
    type: String,
  })
  password: string;

  @Prop({
    type: String,
  })
  status: string;

  @Prop()
  public note?: string;

  @Prop()
  public created_at: number;

  @Prop()
  public updated_at: number;
}

export type AccountDocument = AccountModel & mongoose.Document;
const schema = SchemaFactory.createForClass(AccountModel);

schema.pre("save", function (this: AccountModel, next) {
  this.updated_at = Date.now();
  next();
});
schema.loadClass(AccountModel);

export const AccountSchema = schema;
