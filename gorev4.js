/*
Kullanıcıdan birden fazla kelimelik bir isim ve soyisim alarak (örneğin, "Ali Veli Can Yılmaz") her ismin ilk harfini büyük yapıp diğer harfleri küçük olacak şekilde düzenleyin.

   Örnek Çıktı:
   Girilen İsim: ali veli can yılmaz
   Düzenlenmiş İsim: Ali Veli Can Yılmaz
*/


let isimSoyisim = "ali veli can yılmaz";
let duzenlenmisIsim = isimSoyisim
  .split(" ") 
  .map(kelime => kelime.charAt(0).toUpperCase() + kelime.slice(1).toLowerCase()) 
  .join(" "); 

console.log("Girilen İsim: " + isimSoyisim);
console.log("Düzenlenmiş İsim: " + duzenlenmisIsim);
