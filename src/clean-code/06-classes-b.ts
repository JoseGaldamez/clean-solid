(() => {
  // Mejor pero aun no aplicando el principio de responsabilidad única.

  type Gender = "M" | "F";
  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  interface UserProps {
    email: string;
    person: PersonProps;
    role: string;
  }

  interface UserSettingProps {
    lastOpenedFolder: string;
    user: UserProps;
    workingDirectory: string;
  }

  class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  class User extends Person {
    public email: string;
    public role: string;
    public lastAccess: Date;

    constructor({ email, role, person }: UserProps) {
      super(person);
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredentials(): boolean {
      return true;
    }
  }

  class UserSetting extends User {
    public workingDirectory: string;
    public lastOpenedFolder: string;

    constructor({
      workingDirectory,
      lastOpenedFolder,
      user,
    }: UserSettingProps) {
      super(user);
      this.workingDirectory = workingDirectory;
      this.lastOpenedFolder = lastOpenedFolder;
    }
  }

  const userSetting = new UserSetting({
    workingDirectory: "/home/jose",
    lastOpenedFolder: "/home/jose/Documents",
    user: {
      email: "josegaldamez1991@gmail.com",
      role: "admin",
      person: {
        name: "Jose Galdamez",
        gender: "M",
        birthdate: new Date("1991-09-15"),
      },
    },
  });

  console.log({ userSetting });
})();
