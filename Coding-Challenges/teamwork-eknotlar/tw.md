3-Filter, Map and Reduce operation is way to ******\_\_****** .

MAP () METODU

Array map metodu, bir fonksiyonu parametre olarak alır ve orijinal
dizinin kopyasını bu fonksiyona göre modifiye ederek döndürür

Yani bir diziyi transformasyondan geçirmek için map metodu
kullanılabilir

map metodu orijinal diziyi değiştirmez Yeni bir dizi oluşturarak
döndürür

map () metodu, güncellenmiş diziyi doğrudan bir değişkene atmaya izin vermektedir.

FILTER() METODU

Array filter metodu, bir fonksiyonu parametre olarak alır ve orijinal dizinin kopyasını bu fonksiyona göre filtreleyerek döndürür

Yani bir dizideki istediğimiz elemanların seçmek için kullanılır

filter metodu orijinal diziyi değiştirmez Yeni bir dizi oluşturarak döndürür.

REDUCE () METODU

Array reduce metodu, bir fonksiyonu parametre olarak alır ve orijinal diziyi bu fonksiyona göre işleyerek tek bir değer döndürür

Örneğin bir dizinin değerlerinin toplamını bulmak için reduce metodu kullanılabilir

reduce metodu orijinal diziyi değiştirmez Sadece bir değer döndürür.



5. What is the “key” prop?

https://www.linkedin.com/pulse/everything-you-need-know-key-prop-react-denis-bunchenko/

React, kullanıcı arayüzleri oluşturmak için güçlü bir JavaScript kitaplığıdır. React'in kendisi, Virtual DOM dahil olmak üzere kaputun altında birçok optimizasyon tekniğine sahiptir.
Görünüm her değiştirildiğinde, Virtual DOM, DOM temsilinin önceki sürümünü yenisiyle karşılaştırır. Bu işleme 'farklılaştırma=diffing' denir. React belgelerine göre, bu algoritma iki varsayıma dayanmaktadır:
1-Farklı türdeki iki element farklı ağaçlar üretecektir.
2-Developer, bir key prop ile hangi child elementin farklı işlemeler arasında kararlı olabileceğine dair ipucu verebilir.





6. How do you handle passing through the component tree without having to pass props down manually
   at every level?

//React Send

https://www.npmjs.com/package/react-send

react-send is a library that creates components which send their children somewhere else in your render tree.

react send, compenentlerin children'larını işleme ağacında herhangi bir yere gönderen component oluşturan bir kitaplıktır.

const { Input, Output } = send();

const Example = () => (

  <div id="outer">
    <Output />
    <span id="inner">
      <Input>inside input</Input>
    </span>
  </div>
);
// Renders:
//   <div id="outer">
//     inside input
//     <span id="inner">
//     </span>
//   </div>

//React Pinpoint

https://reactpinpoint.com/

https://www.npmjs.com/package/react-pinpoint

React bileşeni oluşturma sürelerini ölçmek için açık kaynaklı bir yardımcı program kitaplığı.

React Pinpoint, developerların React bileşenlerindeki performans darboğazlarını bulmasına yardımcı olur.

React Pinpoint, sıfırdan tutkulu geliştiriciler tarafından geliştirilmiştir ve React geliştiricileri için sorunlu noktalarla mücadele etmek üzere seçilmiştir.

//React Router

https://www.freecodecamp.org/news/beginner-s-guide-to-react-router-53094349669/#:~:text=React%20Router%20is%20the%20standard,not%20an%20after%2Dthought.%E2%80%9D

https://reactrouter.com/

React Router, React için standart yönlendirme kitaplığıdır. Dokümanlardan:

“React Router, kullanıcı arayüzünüzü URL ile senkronize tutar. Tembel kod yükleme, dinamik rota eşleştirme ve doğrudan yerleşik konum geçiş işleme gibi güçlü özelliklere sahip basit bir API'ye sahiptir. URL'yi sonradan değil, ilk düşünceniz yapın."

React Context

https://www.geeksforgeeks.org/context-in-react/#:~:text=What%20is%20React%20Context%3F,level%20of%20the%20component%20tree.

What is React Context?
React Context is a method to pass props from parent to child component(s), by storing the props in a store(similar in Redux) and using these props from the store by child component(s) without actually passing them manually at each level of the component tree.

React Context, propları bir mağazada depolayarak (Redux'taki benzer) ve bu propları mağazadan child compenentler tarafından kullanarak, onları her seviyede manuel olarak ana bileşenden alt bileşene/bileşenlere aktarma yöntemidir. 

Neden React Context?
Ana bileşenlerden alt bileşenlere kadar durumlarla etkileşim kurmak anlaşılması oldukça zor olmakla kalmaz, aynı zamanda size daha karmaşık bir kod verir. Context kullanımı sayesinde, kavram ve kodun anlaşılması çok daha kolaydır.

React Context ne zaman kullanılır?
Ne zaman istersen! Uygulamanızda Context'in ne zaman kullanılacağı gibi kesin bir kural yoktur. Bir storenin statelerinizi veya variablelerinizi içinde tutmasını ve bunları programınızda başka bir yerde kullanmasını istediğinizde, Context'i kullanın. Genel olarak, bileşen ağacımızda iki veya daha fazla seviyemiz (yükseklik) olduğunda, propsları geçmek ve ardından stateyi kaldırmak yerine bir store kullanmak uygundur, çünkü bu karışıklık ve gereksiz uzun kodlar yaratacaktır.





1. You are rendering a list with React when this warning appears in the console: "Warning: Each child in a
   list should have a unique 'key' prop." How do you fix this issue?

https://tr.reactjs.org/docs/lists-and-keys.html

Anahtarlar Sadece Kardeşler Arasında Benzersiz Olmalıdır

Dizilerde kullanılan anahtarlar kardeşleri arasında benzersiz olmalıdır. Ancak, küresel olarak (uygulama genelinde) benzersiz olmaları gerekmez. İki farklı dizi ürettiğimizde aynı anahtarları kullanabiliriz:

Anahtarlar, React’e bir ipucu olarak hizmet eder, ancak bileşenlerinize aktarılmazlar. Bileşeninizde aynı değere ihtiyacınız varsa, belirgin bir şekilde farklı bir ada sahip bir prop olarak iletin:





4. What is the first file loaded by the browser in a basic React project?

https://www.freecodecamp.org/news/quick-guide-to-understanding-and-creating-reactjs-apps-8457ee8f7123/#:~:text=public%2Findex.,which%20I%20will%20cover%20later.

Temel Klasör Yapısının Açıklaması

Projeyi oluşturduğunuzda, bir sürü dosya oluşturduğunu fark etmişsinizdir. Burada bilmeniz gereken bazı önemli dosya ve klasörleri listeleyeceğim.

1-package.json: Bu Dosya, gereken düğüm bağımlılıklarının listesini içerir.

2-public/index.html: Uygulama başladığında bu, yüklenen ilk sayfadır. React genellikle JSX kullanılarak yazıldığından, tüm uygulamadaki tek html dosyası bu olacaktır. Ayrıca, bu dosyada <div id=”root”></div> kod satırı vardır. Bu satır, tüm uygulama bileşenleri bu div'e yüklendiğinden çok önemlidir.

3-src/index.js: Bu, index.html'ye karşılık gelen javascript dosyasıdır. Bu dosya, çok önemli olan aşağıdaki kod satırına sahiptir. ReactDOM.render(<Uygulama />, document.getElementById('root'));

4-Yukarıdaki kod satırı, App Bileşeninin (yakında Uygulama Bileşenini kapsayacaktır) kök kimliğine sahip bir html öğesine yüklenmesi gerektiğini söylüyor. Bu, index.html'de bulunan div öğesinden başka bir şey değildir.

5-src/index.css: index.js'ye karşılık gelen CSS dosyası.

6-src/App.js : Bu, App Component dosyasıdır. App Component, React'teki diğer tüm bileşenler için bir kapsayıcı görevi gören ana bileşendir.

7-src/App.css : Bu, App Bileşenine karşılık gelen CSS dosyasıdır.

build: Bu, yerleşik dosyaların depolandığı klasördür. React Apps, JSX veya normal JavaScript kullanılarak geliştirilebilir, ancak JSX kullanmak, geliştirici için kodlamayı kesinlikle kolaylaştırır :). Ancak tarayıcılar JSX'i anlamıyor. Bu nedenle, JSX'in dağıtılmadan önce javascript'e dönüştürülmesi gerekiyor. Bu dönüştürülen dosyalar, paketleme ve küçültme işleminden sonra derleme klasöründe saklanır. Derleme klasörünü görmek için aşağıdaki komutu çalıştırın.

"npm run build"





7. Why might you use useReducer over useState in a React component?

https://www.google.com/search?q=%C3%A7eviri&oq=%C3%A7eviri&aqs=chrome.0.69i59l3j0i512j0i10i131i433j69i61l3.1143j0j4&sourceid=chrome&ie=UTF-8

useReducer() is a method from the React Hooks API, similar to useState but gives you more control to manage the state. It takes a reducer function and initial state as arguments and returns the state and dispatch method:

useReducer(), useState'e benzer, ancak durumu yönetmek için size daha fazla kontrol sağlayan React Hooks API'sinden bir yöntemdir. Argüman olarak bir indirgeyici işlevi ve ilk durumu alır ve durumu ve gönderme yöntemini döndürür. Kısaca, bir redüktör, önceki durumu ve eylemi argüman olarak alan ve bir sonraki durumu döndüren saf bir işlevdir.

const [state, dispatch] = React.useReducer(reducerFn, initialState, initFn);

Most of the time, you are well covered with just useState() method, which is built on top of useReducer(). But there cases when useReducer() is preferable.

Çoğu zaman, useReducer() üzerine inşa edilmiş olan useState() yöntemiyle iyi bir şekilde kapsanırsınız. Ancak useReducer() öğesinin tercih edildiği durumlar vardır.

1-Sonraki durum öncekine bağlıdır.

Durum bir öncekine bağlı olduğunda bu yöntemi kullanmak her zaman daha iyidir. Size daha öngörülebilir bir durum geçişi sağlayacaktır.

2-Karmaşık state şekli.

State, iç içe nesne veya diziler gibi ilkel değerlerden daha fazlasını içerdiğinde.

3-Test edilmesi kolaydır.

Reducer saf işlevlerdir ve bu, yan etkileri olmadığı ve aynı argümanlar verildiğinde aynı sonucu döndürmeleri gerektiği anlamına gelir. React'e bağlı olmadıkları için onları test etmek daha kolaydır.

Çözüm

useReducer(), durum yönetimi üzerinde size daha fazla kontrol sağlayan ve testi kolaylaştırabilen useState()'e bir alternatiftir. Tüm durumlar useState() yöntemiyle yapılabilir, bu nedenle sonuç olarak, kendinizi rahat hissettiğiniz yöntemi kullanın.




11. Which attribute do you use to replace innerHTML in the browser DOM?

injectHTML

DOM'a erişiminiz olmadığı zamanlar için dize yoluyla hızlı, hafif HTML enjeksiyonu (ör. Node.js).

dangerouslySetInnerHTML

https://tr.reactjs.org/docs/dom-elements.html

Tarayıcı DOM’ında kullanılan innerHTML‘e karşılık React’te dangerouslySetInnerHTML kullanılır. Genellikle HTML’i kod üzerinden tanımlamak risklidir çünkü yanlışlıkla kullanıcılarınızı cross-site scripting (XSS) saldırısına maruz bırakabilirsiniz. React’te HTML’i doğrudan belirleyebilirsiniz ancak bunu yaparken HTML’i dangerouslySetInnerHTML‘i \_\_html anahtarı üzerinden yazmak zorundasız.

function createMarkup() {
return {\_\_html: 'Birinci &middot; İkinci'};
}

function MyComponent() {
return <div dangerouslySetInnerHTML={createMarkup()} />;
}
