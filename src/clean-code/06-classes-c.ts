(() => {
  // Aplicando el principio de responsabilidad única.
  // Priorizar composicion frente a la herencia!

  type Gender = "M" | "F";

  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  interface UserProps {
    email: string;
    role: string;
  }

  interface SettingProps {
    lastOpenedFolder: string;
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

  class User {
    public email: string;
    public lastAccess: Date;
    public role: string;

    constructor({ email, role }: UserProps) {
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredentials(): boolean {
      return true;
    }
  }

  class Setting {
    public workingDirectory: string;
    public lastOpenedFolder: string;

    constructor({ workingDirectory, lastOpenedFolder }: SettingProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenedFolder = lastOpenedFolder;
    }
  }

  interface UserSettingProps {
    user: User;
    setting: Setting;
    person: Person;
  }

  class UserSetting {
    public person: Person;
    public user: User;
    public setting: Setting;

    constructor({ person, user, setting }: UserSettingProps) {
      this.person = person;
      this.user = user;
      this.setting = setting;
    }
  }

  const setting = new Setting({
    workingDirectory: "/home/jose",
    lastOpenedFolder: "/home/jose/Documents",
  });

  const user = new User({
    email: "josegaldamez1991@gmail.com",
    role: "admin",
  });

  const person = new Person({
    name: "Jose Galdamez",
    gender: "M",
    birthdate: new Date("1991-09-15"),
  });

  const userSetting = new UserSetting({ person, user, setting });

  console.log({ userSetting });
})();
