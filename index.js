let elPrompt = prompt("Raqam kirit");

if (isNaN(elPrompt)) {
    alert(`Ma'lumotlarni qayta tekshir`)
}else if (Number(elPrompt) % 3 == 0) {
    console.log(`Fizz`);
}else if (Number(elPrompt) % 5 == 0) {
    console.log(`Buzz`);
}else if (Number(elPrompt) % 5 && elPrompt % 3 == 0) {
    console.log(`Fizz Buzz`);
}0