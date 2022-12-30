// Common interface between teacher classes

interface ITeacher {
  title: string;
}

class Teacher implements ITeacher {
  public title: string;
  constructor(title: string) {
    this.title = title;
  }

  addPayment(): void {
    console.log("money was paid to teacher");
  }
}

// Interface for Coding teacher
interface ICodingTeacher extends ITeacher {
  codingLang: string;
}

// Interface for music teacher
interface IMusicTeacher extends ITeacher {
  instrument: string;
}

// Class of coding teacer
class CodingTeacher extends Teacher implements ICodingTeacher {
  public codingLang: string;
  constructor(props: ICodingTeacher) {
    super(props.title);
    this.codingLang = props.codingLang;
  }

  addPayment(): void {
    super.addPayment();
  }
}

class MusicTeacher extends Teacher implements IMusicTeacher {
  public instrument: string;

  constructor(props: IMusicTeacher) {
    super(props.title);
    this.instrument = props.instrument;
  }

  addPayment(): void {
    super.addPayment();
  }
}

type IfactoryTeacer = "music" | "coding";
// Making instances

interface IFactory {
  createCodingTeacher(props: ICodingTeacher): CodingTeacher;
  createMusicTeacher(props: IMusicTeacher): MusicTeacher;
}
class teacherFactory implements IFactory {
  createCodingTeacher(props: ICodingTeacher) {
    return new CodingTeacher(props);
  }

  createMusicTeacher(props: IMusicTeacher) {
    return new MusicTeacher(props);
  }
}
