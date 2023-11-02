    // Class definition

    // class User {
    //     constructor(username, email, password) {
    //         this.username = username;
    //         this.email = email;
    //         this.password = password;
    //     }

    //     encrypted() {
    //         return ` ${this.password}abc#%$`;
    //     }

    //     changeUsername() {
    //         return ` ${this.username.toUpperCase()}`;
    //     }

    //     myemail() {
    //         return ` ${this.email}`;
    //     }
    // }

    // const chai = new User("mohammad", "wasu@gmail.com", "123432");

    // console.log(chai.encrypted());
    // console.log(chai.changeUsername());
    // console.log(chai.myemail());

    // Function and Prototype correction

    function User(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }

    User.prototype.encrypted = function () {
        return ` ${this.password}abc#%$`;
    };

    User.prototype.changeUsername = function () {
        return ` ${this.username.toUpperCase()}`;
    };

    User.prototype.myemail = function () {
        return ` ${this.email}`;
    };

    const tea = new User("Tea", "TEA@gmail.com", "123432");

    console.log(tea.encrypted());
    console.log(tea.changeUsername());
    console.log(tea.myemail());
