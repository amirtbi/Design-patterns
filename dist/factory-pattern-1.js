"use strict";
// Common interface between teacher classes
class Teacher {
    constructor(title) {
        this.title = title;
    }
    addPayment() {
        console.log("money was paid to teacher");
    }
}
// Class of coding teacer
class CodingTeacher extends Teacher {
    constructor(props) {
        super(props.title);
        this.codingLang = props.codingLang;
    }
    addPayment() {
        super.addPayment();
    }
}
class MusicTeacher extends Teacher {
    constructor(props) {
        super(props.title);
        this.instrument = props.instrument;
    }
    addPayment() {
        super.addPayment();
    }
}
class teacherFactory {
    createCodingTeacher(props) {
        return new CodingTeacher(props);
    }
    createMusicTeacher(props) {
        return new MusicTeacher(props);
    }
}
//# sourceMappingURL=factory-pattern-1.js.map