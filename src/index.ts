// // console.log("typing");
// //primitive and non primitive
// //string,numbers,boolean,null,undifined
// //object,array,funtion

// const fruit: { name: string; color: String } = {
//   name: "orange juice",
//   color: "orange",
// };
// // console.log(fruit);

// let arry: (string | Number | boolean | null)[] = [true, "name", 30, null];
// // console.log(arry);

// arry[1] = "idris";
// arry.push("ajala");
// // console.log(arry);

// let arry2: [number, number, string] = [234, 455, "id"];
// arry2.push(23);
// // console.log(arry2);

// const num: [number] = [22];
// // console.log(num);

// type myData = {
//   name: string;
//   qty: Number | String;
//   isReady?: boolean;
//   product: any[];
// };

// interface ajala extends myData {
//   product: any[];
// }
// interface idris extends ajala {
//   user: any[];
// }
// let stuck: idris = {
//   name: "idris",
//   qty: 30,
//   //   isReady: true,
//   user: ["ololo"],
//   product: ["2333"],
// };

// // const newSchool = (x:string): string =>{
// //    let xx:string[] = x.split("");
// //    let newFile:string = xx.reverse().join("")
// //    return newFile
// // }
// // console.log(newSchool(  ))

// const newSchooling = (x: string): number => {
//   let xx: string[] = x.split("");

//   let newFile: string = xx.reverse().join("");
//   return parseInt(newFile);
// };
// // console.log(newSchooling("33338888825555"));

// const getData = (x: number[]): void => {
//   let index = Math.floor(Math.random() * x.length);
//   let d = x[index];
//   console.log(d);
// };
// const getData1 = <A>(x: A[]): void => {
//   let index = Math.floor(Math.random() * x.length);
//   let d = x[index];
//   // console.log(d);
// };
// const arr1 = [1, 2, 3, 4];
// const arr2 = ["idris", "typing", "typescript", "programmer", 22, true];
// // getData1(arr2);

// // const sum  = (x:number[]) =>{
// //  const indexs = [1,5,6,20,30];
// //  const xx = indexs.length
// // }

// class New {
//   public name: string;
//   private color: string;
//   public ripe: boolean;
//   protected qty: Number;
//   constructor(name: string, color: string, ripe: boolean, qty: Number) {
//     this.name = name;
//     this.color = color;
//     this.ripe = ripe;
//     this.qty = qty;
//   }
//   review() {
//     console.log(`the fruit ${this.name} has a color of ${this.color}`);
//   }
// }

// const newBuild = new New("pawpaw", "green", true, 32);
// newBuild.review();
// // console.log(newBuild);
// // console.log(newBuild.name);

// enum Game {
//   idris,
//   pom,
// }
// // console.log(Game);

// class Name {
//   names: string;
//   result: Number;
//   value: Number;
//   constructor(names: string, result: number, value: number) {
//     this.names = names;
//     this.value = value;
//     this.result = result;
//   }
//   yup() {
//     const gen = this.names + this.result + this.result;
//     // console.log(gen);
//   }
// }

// const Memos = new Name("idris", 75, 70);

// // console.log(Memos);
