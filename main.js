const arr = ["olma", "banan", "anor", "uzum"];

// uzunligini chiqarish
console.log(arr.length);
alert("Array uzunligi: " + arr.length);

// confirm
const isConfirmed = confirm("Bitta elementni o‘chirishni xohlaysizmi?");

if (isConfirmed) {
  arr.pop(); // oxirgi elementni o‘chiradi
  alert("Element o‘chirildi");
} else {
  alert("Array o‘zgarmadi");
}

// yakuniy holat
console.log(arr);