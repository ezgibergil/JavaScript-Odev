/*
1. Kullanıcıdan favori bir kelimesini girmesini isteyin.
2. Kelimenin uzunluğunu `length` özelliği ile bulun ve ekrana yazdırın.
3. Kelimenin ilk ve son harfini `charAt()` ile bulun.
4. Kullanıcının favori kelimesini ters çevirerek ekrana yazdırın.

   Örnek Çıktı:
   Favori kelimeniz: "JavaScript"
   - Uzunluğu: 10
   - İlk Harfi: J
   - Son Harfi: t
   - Ters Çevrilmiş: tpircSavaJ
*/


let kelime = "JavaScript";
let uzunluk = kelime.length;
console.log("Favori kelimeniz: \"" + kelime + "\"");
console.log("- Uzunluğu: " + uzunluk);
let ilkHarf = kelime.charAt(0);
let sonHarf = kelime.charAt(kelime.length - 1);
console.log("- İlk Harfi: " + ilkHarf);
console.log("- Son Harfi: " + sonHarf);
let tersKelime = kelime.split("").reverse().join("");
console.log("- Ters Çevrilmiş: " + tersKelime);

