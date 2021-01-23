let time = {
    hour: 12,
    min: 30,
    sec: 45,
    printTime() {
        return this.hour + ":" + this.min + ":" + this.sec;
    },
    addSeconds(seconds) {
        let isseconds = this.hour * 3600 + this.min * 60 + this.sec + seconds;
            hours = Math.floor(isseconds / 3600);
            min = Math.floor((isseconds % 3600) / 60);
            sec = isseconds - hours * 3600 - min * 60;
            if (hours == 0 & min === 0 & sec === 0) {
                throw "Enter correct values";
            } else{
                return hours + ":" + min + ":" + sec;
            }
    },
    addMinutes(minutes) {
        let isseconds = this.hour * 3600 + this.min * 60 + this.sec + minutes * 60;
            hours = Math.floor(isseconds / 3600);
            min = Math.floor((isseconds % 3600) / 60);
            sec = isseconds - hours * 3600 - min * 60;
            if (hours == 0 & min === 0 & sec === 0) {
                throw "Enter correct values";
            } else{
                return hours + ":" + min + ":" + sec;
            }
    },
    addHours(hours) {
        let isseconds = this.hour * 3600 + this.min * 60 + this.sec + hours * 3600;
            hours = Math.floor(isseconds / 3600);
            min = Math.floor((isseconds % 3600) / 60);
            sec = isseconds - hours * 3600 - min * 60;
            if (hours == 0 & min === 0 & sec === 0) {
                throw "Enter correct values";
            } else{
                return hours + ":" + min + ":" + sec;
            }
    }
};
console.log(time.printTime());
console.log(time.addSeconds(30));
console.log(time.addMinutes(65));
console.log(time.addHours(6));
