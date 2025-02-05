import { VocabModel } from "@ykvocab/core/src/models/Vocab";

export type Resolver<Arguments, Returns, Parent = any> = {
  (
    parent: Parent,
    args: Arguments,
    ctx: GraphqlContext,
    info: GraphQLResolveInfo
  ): Promise<Returns>;
};

export type GraphqlContext = {
  user: User | null;
  adminUser: AdminUser | null;
  req: express.Request & {
    userAgent: string;
  };
};
