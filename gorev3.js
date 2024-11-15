/*
1. Kullanıcıdan bir cümle girmesini isteyin.
2. Cümledeki "kötü" kelimeleri bulun ve bu kelimeleri `replace()` metodu ile sansürleyin. (örneğin, "kötü" kelimesini `****` ile değiştirin).
3. Sansürlenmiş cümleyi ekrana yazdırın.

   Örnek Çıktı:
   Girilen Cümle: Bu gerçekten kötü bir davranış!
   Sansürlü Cümle: Bu gerçekten **** bir davranış!

*/

let cumle = "Bu gerçekten kötü bir davranış!";
let sansurluCumle = cumle.replace("kötü","****");
console.log("Girilen Cümle: " + cumle);
console.log("Sansürlü Cümle: " + sansurluCumle);
