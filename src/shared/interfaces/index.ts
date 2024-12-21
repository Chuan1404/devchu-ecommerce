export interface IQueryRepository<T> {
  findAll(): Promise<T[]>;
  findById(id: string): Promise<T | null>;
  findByCondition(condition: Partial<T>): Promise<T | null>;
}

export interface ICommandRepository<T> {
  create(data: Partial<T>): Promise<boolean>;
  update(id: string, data: Partial<T>): Promise<boolean>;
  delete(id: string, isHard: boolean): Promise<boolean>;
}

export interface IRepository<T>
  extends IQueryRepository<T>,
    ICommandRepository<T> {}

// password

export interface IHashPassword {
  hash(rawPassword: string): string;
}

export interface IComparePassword {
  compare(rawPassword: string, hashedPassword: string): boolean;
}