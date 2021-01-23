let auto = {
    manufacturer: "Mercedes Bens",
    model: "GLE 350d",
    release: 2018,
    speed: 80,
    print() {
        console.log(this.manufacturer);
        console.log(this.model);
        console.log(this.release);
        console.log(this.speed);
    },
    time() {
        this.len = +prompt("Enter road length");
        this.t = Math.floor(this.len / this.speed);
        if (this.t / 4 >= 1) {
            return Math.floor(this.t / 4) + this.t + " hours";
        } else {
            return this.len / this.speed + " hour";
        }
        
    }
};
auto.print();
console.log(auto.time());
