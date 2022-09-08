/**

   Table listi array formasına salıb faylı yükləmək

   <table id="lists" width="%100">
     <tbody>
       <tr>
         <th width="%25">İngilizce</th>
         <th width="%25">Türkçe</th>
         <th width="%50">Örnek Cümle</th>
       </tr>
       <tr>
          <td>a</td>
          <td>bir</td>
          <td width="%50"><strong>a</strong> car, a flower, a table</td>
       </tr>
     </tbody>
   </table>
**/

var d = document.getElementById("lists")
var list = []

for(var i=0;i<d.rows.length;i++){
   list.push({
        en:d.rows[i].children[0].innerText,
        tr:d.rows[i].children[1].innerText
  	})
}

var a = document.createElement("a");
a.href = window.URL.createObjectURL(new Blob([JSON.stringify(list)], {type: "text/plain"}));
a.download = "demo.txt";
a.click(); 
