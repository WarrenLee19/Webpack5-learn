class A {
  constructor() {
    this.str = 'hello webpack'
  }
  sayhello(){
    console.log(this.str)
  }

}
const a =new A();
a.sayhello()