export class User {

  constructor (
    public uid: string,
    public displayName?: string,
    public email?: string,
    public photoURL?: string,
    public authenticated?: boolean ) {

  }

  static fromJson( {
    uid,
    displayName,
    email,
    photoURL
  } ) {
    return new User (
      uid,
      displayName,
      email,
      photoURL,
      true
    );
  }
}

