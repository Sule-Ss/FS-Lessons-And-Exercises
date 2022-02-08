/* 
DOM, bir W3C (World Wide Web Consortium) standardıdır.

DOM, belgelere erişim için bir standart tanımlar:

'W3C Belge Nesne Modeli (DOM), programların ve komut dosyalarının bir belgenin içeriğine, 
yapısına ve stiline dinamik olarak erişmesine ve bunları güncellemesine olanak tanıyan, platform ve 
dilden bağımsız bir arabirimdir.'

W3C DOM standardı 3 farklı bölüme ayrılmıştır:

1-Core DOM - tüm belge türleri için standart model
2-XML DOM - XML ​​belgeleri için standart model
3-HTML DOM - HTML belgeleri için standart model
*/

/* 
Başka bir deyişle: HTML DOM, HTML öğelerinin nasıl alınacağına, değiştirileceğine, 
ekleneceğine veya silineceğine ilişkin bir standarttır.


The HTML elements as objects
The properties of all HTML elements
The methods to access all HTML elements
The events for all HTML elements

*/

/* 
The DOM Programming Interface

HTML DOM'a JavaScript (ve diğer programlama dilleri) ile erişilebilir.

DOM'da tüm HTML elementleri objects olarak tanımlanır.

Programlama arayüzü(Programming Interface), her object in propertyleri ve metodlarıdır.

Property, alabileceğiniz veya ayarlayabileceğiniz bir değerdir(get or set) (bir HTML öğesinin içeriğini değiştirmek gibi).

Method, yapabileceğiniz bir eylemdir (bir HTML öğesi eklemek veya silmek gibi).
*/

/* 
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "Hello World!";
</script>

getElementById = method  (Bir HTML öğesine erişmenin en yaygın yolu)
innerHTML = property (innerHTML özelliği, HTML öğelerinin içeriğini almak(getting) veya değiştirmek için kullanılır.)
*/

/* ------ The HTML DOM Document Object ----------*/

/* Document object, web sayfanızı temsil eder.

Bir HTML sayfasındaki herhangi bir elemente erişmek istiyorsanız, her zaman document objecte erişmekle başlarsınız. */

/* 
Finding HTML Elements

Method	                                Description

document.getElementById(id)	            Find an element by element id (direkt .innerHTML ile içeriğe ulaşılabilir.)
document.getElementsByTagName(name)	    Find elements by tag name (indexleyerek .innerHTML ile içeriğe ulaşılabilir.)
document.getElementsByClassName(name)	Find elements by class name (indexleyerek .innerHTML ile içeriğe ulaşılabilir.)
*/

/* 
Changing HTML Elements

Property	                                Description

element.innerHTML =  new html content	    Change the inner HTML of an element
element.attribute = new value	            Change the attribute value of an HTML element (document.getElemetnById("id").src = "yeni image yolu")
element.style.property = new style	        Change the style of an HTML element

Method	                                    Description

element.setAttribute(attribute, value)  	Change the attribute value of an HTML element
*/

/* 
Adding and Deleting Elements

Method	                                Description

document.createElement(element)	        Create an HTML element
document.removeChild(element)	        Remove an HTML element
document.appendChild(element)	        Add an HTML element
document.replaceChild(new, old)	        Replace an HTML element
document.write(text)	                Write into the HTML output stream
*/

/* 
Finding HTML Objects

Property	                    Description	                                            DOM(1= HTML DOM Level 1 (1998), 
                                                                                            3 = HTML DOM Level 3)
document.anchors	            Returns all <a> elements that have a name attribute	    1
document.applets	            Deprecated                                          	1
document.baseURI	            Returns the absolute base URI of the document	        3
document.body	                Returns the <body> element                          	1
document.cookie	                Returns the document's cookie                       	1
document.doctype	            Returns the document's doctype                      	3
document.documentElement	    Returns the <html> element	                            3
document.documentMode	        Returns the mode used by the browser                	3
document.documentURI	        Returns the URI of the document                     	3
document.domain	                Returns the domain name of the document server      	1
document.domConfig	            Obsolete.	                                            3
document.embeds	                Returns all <embed> elements                        	3
document.forms              	Returns all <form> elements                            	1
document.head               	Returns the <head> element          	                3
document.images             	Returns all <img> elements                          	1
document.implementation	        Returns the DOM implementation                      	3
document.inputEncoding	        Returns the document's encoding (character set)	        3
document.lastModified	        Returns the date and time the document was updated     	3
document.links	                Returns all <area> and <a> elements that have a href attribute	1
document.readyState	            Returns the (loading) status of the document	        3
document.referrer	            Returns the URI of the referrer (the linking document)	1
document.scripts	            Returns all <script> elements                       	3
document.strictErrorChecking	Returns if error checking is enforced	                3
document.title	                Returns the <title> element	                            1
document.URL	                Returns the complete URL of the document	            1

*/

/* 
Finding HTML Elements by CSS Selectors
document.querySelectorAll(id) >>> 
1-Belirtilen bir CSS selectorüyle (id, class names, types, attributes, values of attributes, etc) 
eşleşen tüm HTML elementlerini bulur

2-Nodelist döndürür.
*/

/* 
Dynamic HTML content

document.getElementById("id").innerHTML = "Date : " + Date(); date objesiyle kullanılabilir. Etiketin içeriiğini tarihle değiştirir.

*/

/* 
---------  document.write()  ---------

document.write(Date()); >>>> tarihi direkt ekrana yazdırır.

!! Belge yüklendikten sonra asla document.write() kullanmayın. Belgenin üzerine yazacaktır.
*/

/*-------  JavaScript Form Validation --------- */

/* 
form içine girilen value lara ulaşılabilir. Yazılan fonk.larla sayısal değerlere de ulaşılabilir.


function validateForm() {
    let x = document.forms["myForm"]["fname"].value;  >>> name i myForm olan form un içindeki, name i fname olan input un value sunu çeker.
    if (x == "") {
        alert("Name must be filled out");
        return false;
         }
     }
*/

/* 
    Data Validation

    Server side validation is performed by a web server, after input has been sent to the server.

    Client side validation is performed by a web browser, before input is sent to a web server.
*/

/* 
HTML5 ile gelen doğrulama konsepti : >>>>  Constraint Validation  <<<<<<<

HTML constraint validation is based on:

Constraint validation HTML Input Attributes
Constraint validation CSS Pseudo Selectors
Constraint validation DOM Properties and Methods

*/

/* 
    Constraint Validation HTML Input Attributes:

disabled	    Specifies that the input element should be disabled
max	            Specifies the maximum value of an input element
min	            Specifies the minimum value of an input element
pattern	        Specifies the value pattern of an input element
required	    Specifies that the input field requires an element
type 	        Specifies the type of an input element
*/

/* 
     Constraint Validation CSS Pseudo Selectors

:disabled	    Selects input elements with the "disabled" attribute specified
:invalid	    Selects input elements with invalid values
:optional	    Selects input elements with no "required" attribute specified
:required	    Selects input elements with the "required" attribute specified
:valid      	Selects input elements with valid values
*/

/* 
Changing HTML Style

    syntax :

    document.getElementById(id).style.property = new style


*/

/* 
    HTML ile Element gizleme(visibility-hidden) :

     örn:

     <input type="button" value="Hide text" onclick="document.getElementById('p1').style.visibility='hidden'">
     <input type="button" value="Show text" onclick="document.getElementById('p1').style.visibility='visible'">

*/


/* ------- JavaScript HTML DOM Animation ---------- */

/* 
!!! All animations should be relative to a container element.

    <div id ="container">
        <div id ="animate">My animation will go here</div>
    </div>

    The container element should be created with style = "position: relative".

    The animation element should be created with style = "position: absolute".

    JavaScript animasyonları, bir öğenin stilinde kademeli değişiklikler programlanarak yapılır.

Değişiklikler bir zamanlayıcı tarafından çağrılır. 
Zamanlayıcı aralığı küçük olduğunda, animasyon sürekli hareket halinde görünür.

*/

/* animasyon örn kod bloğu :

<!DOCTYPE html>
<html>
<style>
#container {
  width: 400px;
  height: 400px;
  position: relative;
  background: yellow;
}
#animate {
  width: 50px;
  height: 50px;
  position: absolute;
  background-color: red;
}
</style>
<body>

<p><button onclick="myMove()">Click Me</button></p> 

<div id ="container">
  <div id ="animate"></div>
</div>

<script>
function myMove() {
  let id = null;
  const elem = document.getElementById("animate");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}
</script>

</body>
</html> */