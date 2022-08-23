(() => {
  // No aplicando el principio de responsabilidad única.

  type Gender = "M" | "F";

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  class User extends Person {
    constructor(
      public email: string,
      public role: string,
      public lastAccess: Date,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, gender, birthdate);
    }

    checkCredentials(): boolean {
      return true;
    }
  }

  class UserSetting extends User {
    constructor(
      public workingDirectoru: string,
      public lastOpenedFolder: string,
      email: string,
      role: string,
      lastAccess: Date,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(email, role, lastAccess, name, gender, birthdate);
    }
  }

  const newPerson: Person = new Person(
    "Jose Galdamez",
    "M",
    new Date("1991-09-15")
  );
  console.log(newPerson);

  const userSetting = new UserSetting(
    "/home/jose",
    "/home/jose/Documents",
    "josegaldamez1991@gmail.com",
    "admin",
    new Date(),
    "Jose Galdamez",
    "M",
    new Date("1991-09-15")
  );

  console.log({ userSetting });
})();
