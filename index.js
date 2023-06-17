let inputNum = 0;
let numPrint = 0;
let tampungNilai = "";
let printResult = document.getElementById("print-number");

function addNumber(input) {
  let pushed = input;

  if (pushed !== "=") {
    if (pushed == "del") {
      //   inputNum = inputNum.substring(0, inputNum.length - 1);
      //   printResult.value = inputNum;

      // ini untuk tampil
      tampungNilai = tampungNilai.substring(0, tampungNilai.length - 1);
      printResult.value = tampungNilai;

      // console.log(`ini dari tampungNilai ${tampungNilai}`);

      // ini untuk hitung
      numPrint = numPrint.substring(0, numPrint.length - 1);
      printResult.value = numPrint;
      // console.log(`ini dari numprint ${numPrint}`);
    } else if (pushed == "c") {
      printResult.value = "";
      tampungNilai = "";
    } else {
      // ini untuk hitung
      inputNum = tampungNilai + input;
      tampungNilai = inputNum;

      // ini untuk tampil
      if (input == "*") {
        let kali = "x";
        input = kali;
      }
      numPrint = printResult.value + input;
      printResult.value = numPrint;
      console.log(`ini dari tampung nilai bawah ${tampungNilai}`);
    }
  } else {
    if (isNaN(tampungNilai.charAt(tampungNilai.length - 1))) {
      alert("Input terakhir harus angka!!!");
    } else {
      tampungNilai = eval(tampungNilai);
      printResult.value = tampungNilai;
    }
  }

  // console.log(inputNum);
}

let counter = 0;
let counterPlusmin = 0;
function addTandaKurung() {
  counter++;

  const currentValue = printResult.value;

  if (counter % 2) {
    printResult.value = "(" + currentValue;
  } else {
    printResult.value = currentValue + ")";
  }
}

// masih nge bug
function addPlusMinus() {
  const currentValue = printResult.value;

  if (currentValue === "") {
    return;
  }

  const lastChar = currentValue[currentValue.length - 1];
  if (
    lastChar === "+" ||
    lastChar === "-" ||
    lastChar === "*" ||
    lastChar === "/"
  ) {
    return;
  }

  if (currentValue.includes("+")) {
    const lastIndex = currentValue.lastIndexOf("+");
    const newString =
      currentValue.slice(0, lastIndex + 1) +
      "-" +
      currentValue.slice(lastIndex + 1);
    printResult.value = newString;
  } else if (currentValue.includes("-")) {
    const lastIndex = currentValue.lastIndexOf("-");
    // let newString =
    //   currentValue.slice(0, lastIndex + 1) +
    //   "+" +
    //   currentValue.slice(lastIndex + 1);
    const newString = currentValue * -1;
    printResult.value = newString;
  } else {
    printResult.value = currentValue * -1;
  }
}
