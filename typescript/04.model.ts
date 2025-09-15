interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
  lastLogin?: Date; // Optional property
}

const user: User = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  isActive: true,
  lastLogin: new Date(),
};

class UserAccount {
  constructor(
    public user: User,
    public accountType: string,
    public createdAt: Date = new Date()
  ) {}
}

const account = new UserAccount(user, "Premium");
console.log(account);

const account2: UserAccount = {
  user: {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    isActive: false,
    lastLogin: new Date(),
  },
  accountType: "Basic",
  createdAt: new Date(),
};

// Promesas y tipos genéricos

const promesa: Promise<User> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(user);
  }, 2000);
});
promesa.then((data) => console.log(data));
