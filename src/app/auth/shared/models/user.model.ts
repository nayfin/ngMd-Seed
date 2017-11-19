
export interface Roles {
  reader: boolean;
  authe?: boolean;
  admin?: boolean;
}

export class User {

  constructor (
    public uid: string,
    public roles: Roles, 
    public authenticated: boolean,
    public displayName?: string,
    public email?: string,
    public photoURL?: string,
  ) { }

  static fromJson( {
    uid,
    displayName,
    email,
    photoURL
  }, 
  roles: Roles = {reader: true}) {
    return new User (
      uid,
      roles,
      true,
      displayName,
      email,
      photoURL,
    );
  }
}

