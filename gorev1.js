/*1. Kullanıcıdan sırasıyla adını, soyadını ve yaşını `prompt` ile alın.
2. `let` veya `var` kullanarak her bilgiyi ayrı bir değişkende saklayın.
3. Kullanıcının adını ve soyadını ilk harfi büyük, diğer harfleri küçük olacak şekilde biçimlendirin.
4. Tüm bilgileri birleştirerek, kullanıcıya "Merhaba, [Ad] [Soyad]. Yaşınız: [Yaş]" şeklinde bir mesaj verin.
   
   Örnek Çıktı:  
   Merhaba, Ali Yılmaz. Yaşınız: 25
*/


let ad = "ezgi";
let soyad = "bergil";
let yas = 29;

ad = ad.charAt(0).toUpperCase() + ad.slice(1).toLowerCase();
soyad = soyad.charAt(0).toUpperCase() + soyad.slice(1).toLowerCase();

console.log("Merhaba, " + ad + " " + soyad + ". Yaşınız: " + yas);
